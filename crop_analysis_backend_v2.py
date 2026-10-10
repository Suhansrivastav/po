

import base64
import io
import json
import os
import uuid
from datetime import datetime, timezone
from typing import Optional

import anthropic
from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.concurrency import run_in_threadpool
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image, UnidentifiedImageError
from pydantic import BaseModel
from supabase import Client, create_client

SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_KEY = os.getenv("SUPABASE_KEY", "")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY", "")
ANTHROPIC_MODEL = os.getenv("ANTHROPIC_MODEL", "claude-haiku-5-5")

ANALYSES_TABLE = "crop_analyses"
IMAGES_BUCKET = "crop-images"
MAX_IMAGE_BYTES = 5 * 1024 * 1024  # 5 MB
ALLOWED_TYPES = {"image/jpeg", "image/png", "image/webp"}
VALID_SEVERITY = {"none", "low", "medium", "high"}

CROP_PROMPT = """You are an agronomy assistant analysing a photo of a crop leaf or plant for a farmer.
Return ONLY a JSON object with these keys:
- "is_crop_image": boolean, true if the photo shows a plant or crop
- "crop": string, the crop name if identifiable, otherwise "unknown"
- "disease": string, a short disease name, "healthy", or "unknown"
- "confidence": number between 0 and 1
- "severity": one of "none", "low", "medium", "high"
- "advice": 2-3 sentences of practical, low-cost guidance for a farmer

If the image does not show a plant, set is_crop_image to false, disease to "unknown",
confidence to 0 and severity to "none".
Do not include any text outside the JSON object."""

app = FastAPI(title="Agrovision Crop Analysis API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten this before deploying
    allow_methods=["*"],
    allow_headers=["*"],
)

supabase: Optional[Client] = None
anthropic_client: Optional[anthropic.Anthropic] = None


@app.on_event("startup")
def startup() -> None:
    global supabase, anthropic_client
    if not SUPABASE_URL or not SUPABASE_KEY:
        raise RuntimeError("SUPABASE_URL and SUPABASE_KEY must be set")
    if not ANTHROPIC_API_KEY:
        raise RuntimeError("ANTHROPIC_API_KEY must be set")
    supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
    anthropic_client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)


class AnalysisResult(BaseModel):
    id: str
    farmer_id: Optional[str] = None
    crop_type: Optional[str] = None
    image_url: str
    disease: Optional[str] = None
    confidence: Optional[float] = None
    severity: Optional[str] = None
    advice: Optional[str] = None
    created_at: str


def validate_image(data: bytes, content_type: Optional[str]) -> None:
    if content_type not in ALLOWED_TYPES:
        raise HTTPException(415, "Only JPEG, PNG or WEBP images are allowed")
    if len(data) > MAX_IMAGE_BYTES:
        raise HTTPException(413, "Image must be 5 MB or smaller")
    try:
        with Image.open(io.BytesIO(data)) as img:
            img.verify()
    except (UnidentifiedImageError, OSError):
        raise HTTPException(400, "File is not a valid image")


def parse_model_json(text: str) -> dict:
    """Extract the JSON object from the model reply, tolerating stray text."""
    start, end = text.find("{"), text.rfind("}")
    if start == -1 or end == -1:
        raise ValueError("No JSON object in model response")
    return json.loads(text[start : end + 1])


def run_model(image_bytes: bytes, media_type: str, crop_type: Optional[str]) -> dict:
    """Send the photo to Claude vision and return a normalised diagnosis."""
    hint = f"Farmer says the crop is: {crop_type}." if crop_type else "No crop type given."
    try:
        response = anthropic_client.messages.create(
            model=ANTHROPIC_MODEL,
            max_tokens=500,
            system=CROP_PROMPT,
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "image",
                            "source": {
                                "type": "base64",
                                "media_type": media_type,
                                "data": base64.standard_b64encode(image_bytes).decode("utf-8"),
                            },
                        },
                        {"type": "text", "text": hint},
                    ],
                }
            ],
        )
        raw = next(b.text for b in response.content if b.type == "text")
        data = parse_model_json(raw)
    except anthropic.APIError as exc:
        raise HTTPException(502, f"Analysis service error: {exc.__class__.__name__}")
    except (ValueError, StopIteration, json.JSONDecodeError):
        raise HTTPException(502, "Analysis service returned an unreadable response")

    if not data.get("is_crop_image", False):
        raise HTTPException(422, "The photo does not appear to show a plant. Please retake it.")

    try:
        confidence = min(max(float(data.get("confidence", 0)), 0.0), 1.0)
    except (TypeError, ValueError):
        confidence = 0.0

    severity = str(data.get("severity", "none")).lower()
    if severity not in VALID_SEVERITY:
        severity = "none"

    return {
        "crop": str(data.get("crop") or "unknown"),
        "disease": str(data.get("disease") or "unknown"),
        "confidence": confidence,
        "severity": severity,
        "advice": str(data.get("advice") or "").strip(),
    }


def fallback_advice(disease: str, severity: str) -> str:
    if disease == "healthy":
        return "Crop looks healthy. Keep regular monitoring and balanced irrigation."
    if severity == "high":
        return f"Possible {disease}. Isolate affected plants and consult a local agronomist today."
    return f"Possible {disease}. Monitor the field and consider targeted, low-dose treatment."


def to_result(row: dict) -> AnalysisResult:
    return AnalysisResult(
        id=row["id"],
        farmer_id=row.get("farmer_id"),
        crop_type=row.get("crop_type"),
        image_url=supabase.storage.from_(IMAGES_BUCKET).get_public_url(row["image_path"]),
        disease=row.get("disease"),
        confidence=row.get("confidence"),
        severity=row.get("severity"),
        advice=row.get("advice"),
        created_at=row["created_at"],
    )


@app.post("/analyze", response_model=AnalysisResult)
async def analyze_crop(
    file: UploadFile = File(...),
    crop_type: Optional[str] = Form(None),
    farmer_id: Optional[str] = Form(None),
) -> AnalysisResult:
    data = await file.read()
    validate_image(data, file.content_type)

    # The Claude call is blocking, so run it in a worker thread.
    result = await run_in_threadpool(run_model, data, file.content_type, crop_type)

    final_crop = crop_type or result["crop"]
    advice = result["advice"] or fallback_advice(result["disease"], result["severity"])

    analysis_id = str(uuid.uuid4())
    ext = (file.filename or "img.jpg").rsplit(".", 1)[-1].lower()
    image_path = f"{farmer_id or 'anonymous'}/{analysis_id}.{ext}"

    try:
        supabase.storage.from_(IMAGES_BUCKET).upload(
            image_path, data, {"content-type": file.content_type}
        )
        row = {
            "id": analysis_id,
            "farmer_id": farmer_id,
            "crop_type": final_crop,
            "image_path": image_path,
            "disease": result["disease"],
            "confidence": result["confidence"],
            "severity": result["severity"],
            "advice": advice,
        }
        inserted = supabase.table(ANALYSES_TABLE).insert(row).execute()
    except Exception as exc:
        raise HTTPException(502, f"Failed to save analysis: {exc}")

    saved = inserted.data[0]
    saved.setdefault("created_at", datetime.now(timezone.utc).isoformat())
    return to_result(saved)


@app.get("/analyses/{analysis_id}", response_model=AnalysisResult)
def get_analysis(analysis_id: str) -> AnalysisResult:
    res = supabase.table(ANALYSES_TABLE).select("*").eq("id", analysis_id).limit(1).execute()
    if not res.data:
        raise HTTPException(404, "Analysis not found")
    return to_result(res.data[0])


@app.get("/analyses", response_model=list[AnalysisResult])
def list_analyses(farmer_id: Optional[str] = None, limit: int = 20) -> list[AnalysisResult]:
    query = (
        supabase.table(ANALYSES_TABLE)
        .select("*")
        .order("created_at", desc=True)
        .limit(min(max(limit, 1), 100))
    )
    if farmer_id:
        query = query.eq("farmer_id", farmer_id)
    rows = query.execute().data or []
    return [to_result(r) for r in rows]


@app.get("/health")
def health() -> dict:
    return {"status": "ok", "model": ANTHROPIC_MODEL}

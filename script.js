
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  const languageSelect = $("#languageSelect");
  const menuBtn = $("#menuBtn");
  const navigation = $("#navigation");

  // All user-facing translations used by the website.
  const translations = {
    en: {
      languageLabel: "Language",
      navHome: "Home",
      navWeather: "Weather",
      navCrop: "Crop Health",
      navMandi: "Mandi Prices",
      navSchemes: "Government Schemes",
      navAssistant: "AI Assistant",
      heroEyebrow: "SMART FARMING • BETTER FUTURE",
      heroTitle: "Your Smart Farming Partner",
      heroDescription: "Weather updates, crop guidance, mandi information and government schemes in one place.",
      checkWeather: "Check Weather",
      exploreSchemes: "Explore Schemes",
      dashboardEyebrow: "YOUR FARMING DASHBOARD",
      servicesTitle: "Farmer Services",
      weatherCard: "Weather",
      weatherCardDesc: "Current conditions and forecast",
      cropCard: "Crop Health",
      cropCardDesc: "Upload a crop photo for review",
      mandiCard: "Mandi Prices",
      mandiCardDesc: "Explore sample market prices",
      schemesCard: "Government Schemes",
      schemesCardDesc: "Find official scheme portals",
      weatherEyebrow: "PLAN YOUR FARMING",
      weatherTitle: "Weather Forecast",
      weatherDescription: "Enter your city to check current weather and a 3-day forecast.",
      cityPlaceholder: "Enter city, e.g. Ranchi",
      getWeather: "Get Weather",
      weatherInitial: "Enter a city to check the weather.",
      weatherLoading: "Loading weather...",
      weatherError: "City not found. Check the spelling and try again.",
      weatherFailed: "Weather service is unavailable. Check your internet connection.",
      currentWeather: "Current Weather",
      forecastTitle: "3-Day Forecast",
      temperature: "Temperature",
      feelsLike: "Feels like",
      humidity: "Humidity",
      wind: "Wind speed",
      weatherCode0: "Clear sky",
      weatherCode1: "Mainly clear",
      weatherCode2: "Partly cloudy",
      weatherCode3: "Overcast",
      weatherCode45: "Fog",
      weatherCode48: "Depositing rime fog",
      weatherCode51: "Light drizzle",
      weatherCode53: "Moderate drizzle",
      weatherCode55: "Dense drizzle",
      weatherCode61: "Light rain",
      weatherCode63: "Moderate rain",
      weatherCode65: "Heavy rain",
      weatherCode71: "Light snowfall",
      weatherCode73: "Moderate snowfall",
      weatherCode75: "Heavy snowfall",
      weatherCode80: "Rain showers",
      weatherCode81: "Moderate rain showers",
      weatherCode82: "Heavy rain showers",
      weatherCode95: "Thunderstorm",
      weatherCodeUnknown: "Weather conditions",
      cropEyebrow: "CROP CARE",
      cropTitle: "Crop Health Check",
      cropDescription: "Upload a clear crop or leaf photo to preview it. This demo does not diagnose plant disease.",
      selectPhoto: "Select crop photo",
      photoFormats: "JPG, PNG or WEBP — up to 10 MB",
      photoNotice: "Please select a valid JPG, PNG or WEBP image.",
      photoTooLarge: "Choose an image smaller than 10 MB.",
      photoReady: "Photo preview ready. AI disease diagnosis is not connected yet.",
      cropNotice: "For a reliable diagnosis, consult a local Krishi Vigyan Kendra or agricultural expert.",
      mandiEyebrow: "MARKET INFORMATION",
      mandiTitle: "Mandi Prices",
      mandiPlaceholder: "Search crop or market",
      search: "Search",
      demoPrices: "Demo prices only. These are not live market rates.",
      cropColumn: "Crop",
      marketColumn: "Market",
      priceColumn: "Price (₹/quintal)",
      typeColumn: "Data type",
      demoType: "Demo",
      noMandiResults: "No matching sample prices found.",
      mandiDisclaimer: "Check the official portal for current prices.",
      agmarknetLink: "Visit Agmarknet ↗",
      schemesEyebrow: "GOVERNMENT SUPPORT",
      schemesTitle: "Government Schemes",
      pmKisanDesc: "Official portal for scheme information and beneficiary services.",
      insuranceTitle: "PM Fasal Bima Yojana",
      insuranceDesc: "Information about crop insurance and related services.",
      soilTitle: "Soil Health Card",
      soilDesc: "Explore soil testing and soil health information.",
      enamDesc: "Learn about the electronic National Agriculture Market.",
      officialWebsite: "Official website ↗",
      schemesDisclaimer: "Eligibility and application rules can change. Confirm details on official portals before applying.",
      assistantEyebrow: "FARMING HELP",
      assistantTitle: "AI Farming Assistant",
      chatWelcome: "Namaste! I am your farming demo assistant. Ask me about crops, irrigation, soil or schemes.",
      chatPlaceholder: "Ask a farming question...",
      send: "Send",
      chatDisclaimer: "This is a rule-based demo, not a connected AI model. Verify important farming decisions with an expert.",
      botGreeting: "Namaste! How can I help you with farming today?",
      botWater: "Irrigation depends on the crop, soil moisture and weather. Check soil moisture and follow local agricultural advice.",
      botSoil: "A soil test helps identify nutrient levels and pH. Ask your local agricultural office about soil testing.",
      botDisease: "A text message cannot confirm plant disease. Have a clear crop photo reviewed by an agricultural expert.",
      botFertilizer: "Choose fertilizer based on a soil test and the crop's needs. Avoid guessing fertilizer doses.",
      botScheme: "Check official scheme information at pmkisan.gov.in or pmfby.gov.in. Eligibility and rules may change.",
      botWeather: "Use the Weather section above to check the forecast for your city.",
      botMarket: "The mandi table contains sample prices, not live rates. Check Agmarknet for current market information.",
      botFallback: "I can answer some general farming questions. For crop-specific treatment, please consult an agricultural expert.",
      seedsEyebrow: "CROP PLANNING",
      seedsTitle: "Seeds & Fertilizers",
      seedsDescription: "Choose certified seeds suited to your region and season. Base fertilizer decisions on soil testing and crop recommendations.",
      seedTip1: "Check seed variety, label and expiry details.",
      seedTip2: "Follow the recommended sowing period for your area.",
      seedTip3: "Follow soil reports and local expert advice for fertilizer doses.",
      agricultureLink: "Agriculture Department of India ↗",
      profitEyebrow: "FARM ECONOMICS",
      profitTitle: "Profit Calculator",
      yieldLabel: "Expected yield (quintals)",
      priceLabel: "Price per quintal (₹)",
      costLabel: "Total costs (₹)",
      calculate: "Calculate Profit",
      profitInitial: "Enter your estimates to calculate expected profit.",
      profitRevenue: "Estimated revenue",
      profitCosts: "Total costs",
      profitAmount: "Estimated profit",
      lossAmount: "Estimated loss",
      profitDisclaimer: "This is an estimate, not a guarantee of actual earnings.",
      invalidNumbers: "Enter valid non-negative numbers in all fields.",
      footerText: "Technology to support informed farming decisions."
    },

    hi: {
      languageLabel: "भाषा",
      navHome: "होम",
      navWeather: "मौसम",
      navCrop: "फसल की सेहत",
      navMandi: "मंडी भाव",
      navSchemes: "सरकारी योजनाएँ",
      navAssistant: "AI सहायक",
      heroEyebrow: "स्मार्ट खेती • बेहतर भविष्य",
      heroTitle: "आपका स्मार्ट खेती साथी",
      heroDescription: "मौसम, फसल की जानकारी, मंडी भाव और सरकारी योजनाएँ एक ही जगह।",
      checkWeather: "मौसम देखें",
      exploreSchemes: "योजनाएँ देखें",
      dashboardEyebrow: "आपका खेती डैशबोर्ड",
      servicesTitle: "किसान सेवाएँ",
      weatherCard: "मौसम",
      weatherCardDesc: "मौसम की स्थिति और पूर्वानुमान",
      cropCard: "फसल की सेहत",
      cropCardDesc: "फसल की फोटो अपलोड करें",
      mandiCard: "मंडी भाव",
      mandiCardDesc: "नमूना बाजार भाव देखें",
      schemesCard: "सरकारी योजनाएँ",
      schemesCardDesc: "आधिकारिक पोर्टल देखें",
      weatherEyebrow: "खेती की योजना",
      weatherTitle: "मौसम का पूर्वानुमान",
      weatherDescription: "मौसम और अगले 3 दिनों का पूर्वानुमान देखने के लिए शहर का नाम लिखें।",
      cityPlaceholder: "शहर का नाम, जैसे राँची",
      getWeather: "मौसम देखें",
      weatherInitial: "मौसम देखने के लिए शहर का नाम लिखें।",
      weatherLoading: "मौसम लोड हो रहा है...",
      weatherError: "शहर नहीं मिला। नाम जाँचकर दोबारा प्रयास करें।",
      weatherFailed: "मौसम सेवा उपलब्ध नहीं है। इंटरनेट कनेक्शन जाँचें।",
      currentWeather: "अभी का मौसम",
      forecastTitle: "अगले 3 दिनों का पूर्वानुमान",
      temperature: "तापमान",
      feelsLike: "महसूस होने वाला तापमान",
      humidity: "नमी",
      wind: "हवा की गति",
      weatherCode0: "साफ आसमान",
      weatherCode1: "मुख्यतः साफ",
      weatherCode2: "आंशिक बादल",
      weatherCode3: "बादल छाए हुए",
      weatherCode45: "कोहरा",
      weatherCode48: "जमा देने वाला कोहरा",
      weatherCode51: "हल्की बूंदाबांदी",
      weatherCode53: "मध्यम बूंदाबांदी",
      weatherCode55: "घनी बूंदाबांदी",
      weatherCode61: "हल्की बारिश",
      weatherCode63: "मध्यम बारिश",
      weatherCode65: "तेज बारिश",
      weatherCode71: "हल्की बर्फबारी",
      weatherCode73: "मध्यम बर्फबारी",
      weatherCode75: "तेज बर्फबारी",
      weatherCode80: "बारिश की बौछारें",
      weatherCode81: "मध्यम बारिश की बौछारें",
      weatherCode82: "तेज बारिश की बौछारें",
      weatherCode95: "आंधी-तूफान",
      weatherCodeUnknown: "मौसम की स्थिति",
      cropEyebrow: "फसल की देखभाल",
      cropTitle: "फसल की जाँच",
      cropDescription: "फसल या पत्ते की साफ फोटो चुनें। यह डेमो पौधों की बीमारी की पहचान नहीं करता।",
      selectPhoto: "फसल की फोटो चुनें",
      photoFormats: "JPG, PNG या WEBP — अधिकतम 10 MB",
      photoNotice: "कृपया सही JPG, PNG या WEBP फोटो चुनें।",
      photoTooLarge: "10 MB से छोटी फोटो चुनें।",
      photoReady: "फोटो तैयार है। AI बीमारी की जाँच अभी जुड़ी नहीं है।",
      cropNotice: "सही जानकारी के लिए स्थानीय कृषि विज्ञान केंद्र या कृषि विशेषज्ञ से सलाह लें।",
      mandiEyebrow: "बाजार की जानकारी",
      mandiTitle: "मंडी भाव",
      mandiPlaceholder: "फसल या मंडी खोजें",
      search: "खोजें",
      demoPrices: "ये केवल नमूना भाव हैं, लाइव मंडी भाव नहीं।",
      cropColumn: "फसल",
      marketColumn: "मंडी",
      priceColumn: "भाव (₹/क्विंटल)",
      typeColumn: "डेटा प्रकार",
      demoType: "नमूना",
      noMandiResults: "कोई मेल खाता नमूना भाव नहीं मिला।",
      mandiDisclaimer: "वर्तमान भाव के लिए आधिकारिक पोर्टल देखें।",
      agmarknetLink: "Agmarknet देखें ↗",
      schemesEyebrow: "सरकारी सहायता",
      schemesTitle: "सरकारी योजनाएँ",
      pmKisanDesc: "योजना की जानकारी और लाभार्थी सेवाओं का आधिकारिक पोर्टल।",
      insuranceTitle: "प्रधानमंत्री फसल बीमा योजना",
      insuranceDesc: "फसल बीमा और संबंधित सेवाओं की जानकारी।",
      soilTitle: "मृदा स्वास्थ्य कार्ड",
      soilDesc: "मिट्टी की जाँच और मृदा स्वास्थ्य की जानकारी।",
      enamDesc: "इलेक्ट्रॉनिक राष्ट्रीय कृषि बाजार के बारे में जानें।",
      officialWebsite: "आधिकारिक वेबसाइट ↗",
      schemesDisclaimer: "पात्रता और आवेदन के नियम बदल सकते हैं। आवेदन से पहले आधिकारिक पोर्टल पर जानकारी जाँचें।",
      assistantEyebrow: "खेती में मदद",
      assistantTitle: "AI कृषि सहायक",
      chatWelcome: "नमस्ते! मैं खेती संबंधी डेमो सहायक हूँ। फसल, सिंचाई, मिट्टी या योजनाओं के बारे में पूछें।",
      chatPlaceholder: "खेती से जुड़ा सवाल पूछें...",
      send: "भेजें",
      chatDisclaimer: "यह नियम-आधारित डेमो है, असली AI मॉडल नहीं। जरूरी फैसलों के लिए विशेषज्ञ से सलाह लें।",
      botGreeting: "नमस्ते! आज खेती में मैं आपकी कैसे मदद कर सकता हूँ?",
      botWater: "सिंचाई फसल, मिट्टी की नमी और मौसम पर निर्भर करती है। मिट्टी की नमी जाँचें और स्थानीय कृषि सलाह अपनाएँ।",
      botSoil: "मिट्टी की जाँच से पोषक तत्वों और pH की जानकारी मिल सकती है। स्थानीय कृषि कार्यालय से संपर्क करें।",
      botDisease: "सिर्फ संदेश से पौधों की बीमारी की पुष्टि नहीं की जा सकती। फोटो कृषि विशेषज्ञ को दिखाएँ।",
      botFertilizer: "मिट्टी की जाँच और फसल की जरूरत के अनुसार उर्वरक चुनें। मात्रा का अनुमान न लगाएँ।",
      botScheme: "आधिकारिक जानकारी के लिए pmkisan.gov.in या pmfby.gov.in देखें। पात्रता और नियम बदल सकते हैं।",
      botWeather: "अपने शहर का पूर्वानुमान देखने के लिए ऊपर मौसम वाले सेक्शन का उपयोग करें।",
      botMarket: "मंडी तालिका में नमूना भाव हैं, लाइव भाव नहीं। वर्तमान जानकारी के लिए Agmarknet देखें।",
      botFallback: "मैं खेती की कुछ सामान्य जानकारी दे सकता हूँ। फसल के इलाज के लिए कृषि विशेषज्ञ से सलाह लें।",
      seedsEyebrow: "फसल की योजना",
      seedsTitle: "बीज और उर्वरक",
      seedsDescription: "अपने क्षेत्र और मौसम के अनुसार प्रमाणित बीज चुनें। उर्वरक का उपयोग मिट्टी की जाँच और फसल की जरूरत के अनुसार करें।",
      seedTip1: "बीज की किस्म, लेबल और समाप्ति तिथि जाँचें।",
      seedTip2: "अपने क्षेत्र के अनुसार बुवाई का समय अपनाएँ।",
      seedTip3: "उर्वरक की मात्रा के लिए मिट्टी की रिपोर्ट और विशेषज्ञ की सलाह मानें।",
      agricultureLink: "भारत का कृषि विभाग ↗",
      profitEyebrow: "खेती का हिसाब",
      profitTitle: "मुनाफे का कैलकुलेटर",
      yieldLabel: "अनुमानित उपज (क्विंटल)",
      priceLabel: "प्रति क्विंटल भाव (₹)",
      costLabel: "कुल लागत (₹)",
      calculate: "मुनाफा निकालें",
      profitInitial: "अनुमानित मुनाफा निकालने के लिए विवरण भरें।",
      profitRevenue: "अनुमानित बिक्री",
      profitCosts: "कुल लागत",
      profitAmount: "अनुमानित मुनाफा",
      lossAmount: "अनुमानित नुकसान",
      profitDisclaimer: "यह केवल अनुमान है, वास्तविक कमाई की गारंटी नहीं।",
      invalidNumbers: "सभी फ़ील्ड में शून्य या उससे बड़ी सही संख्याएँ भरें।",
      footerText: "बेहतर खेती के फैसलों के लिए तकनीक।"
    },

    hinglish: {
      languageLabel: "Language",
      navHome: "Home",
      navWeather: "Mausam",
      navCrop: "Fasal ki Sehat",
      navMandi: "Mandi Bhav",
      navSchemes: "Sarkari Yojana",
      navAssistant: "AI Sahayak",
      heroEyebrow: "SMART FARMING • BETTER FUTURE",
      heroTitle: "Aapka Smart Farming Partner",
      heroDescription: "Mausam, fasal ki jaankari, mandi bhav aur sarkari yojana ek jagah.",
      checkWeather: "Mausam Dekhein",
      exploreSchemes: "Yojana Dekhein",
      dashboardEyebrow: "Aapka Farming Dashboard",
      servicesTitle: "Kisan Services",
      weatherCard: "Mausam",
      weatherCardDesc: "Current weather aur forecast",
      cropCard: "Fasal ki Sehat",
      cropCardDesc: "Fasal ki photo upload karein",
      mandiCard: "Mandi Bhav",
      mandiCardDesc: "Sample market prices dekhein",
      schemesCard: "Sarkari Yojana",
      schemesCardDesc: "Official portals dekhein",
      weatherEyebrow: "Farming Plan Karein",
      weatherTitle: "Mausam ka Forecast",
      weatherDescription: "Mausam aur agle 3 din ka forecast dekhne ke liye city ka naam likhein.",
      cityPlaceholder: "City ka naam, jaise Ranchi",
      getWeather: "Mausam Dekhein",
      weatherInitial: "Mausam check karne ke liye city ka naam likhein.",
      weatherLoading: "Mausam load ho raha hai...",
      weatherError: "City nahi mili. Spelling check karke try karein.",
      weatherFailed: "Weather service unavailable hai. Internet connection check karein.",
      currentWeather: "Abhi ka Mausam",
      forecastTitle: "Agle 3 Din ka Forecast",
      temperature: "Temperature",
      feelsLike: "Feels like",
      humidity: "Humidity",
      wind: "Wind speed",
      weatherCode0: "Clear sky",
      weatherCode1: "Mostly clear",
      weatherCode2: "Partly cloudy",
      weatherCode3: "Cloudy",
      weatherCode45: "Fog",
      weatherCode48: "Freezing fog",
      weatherCode51: "Light drizzle",
      weatherCode53: "Moderate drizzle",
      weatherCode55: "Dense drizzle",
      weatherCode61: "Light rain",
      weatherCode63: "Moderate rain",
      weatherCode65: "Heavy rain",
      weatherCode71: "Light snowfall",
      weatherCode73: "Moderate snowfall",
      weatherCode75: "Heavy snowfall",
      weatherCode80: "Rain showers",
      weatherCode81: "Moderate rain showers",
      weatherCode82: "Heavy rain showers",
      weatherCode95: "Thunderstorm",
      weatherCodeUnknown: "Weather conditions",
      cropEyebrow: "Crop Care",
      cropTitle: "Fasal ki Jaanch",
      cropDescription: "Fasal ya patte ki clear photo select karein. Ye demo plant disease diagnose nahi karta.",
      selectPhoto: "Fasal ki Photo Chunein",
      photoFormats: "JPG, PNG ya WEBP — maximum 10 MB",
      photoNotice: "Valid JPG, PNG ya WEBP image choose karein.",
      photoTooLarge: "10 MB se chhoti photo choose karein.",
      photoReady: "Photo preview ready hai. AI disease diagnosis abhi connected nahi hai.",
      cropNotice: "Reliable diagnosis ke liye local Krishi Vigyan Kendra ya agriculture expert se salah lein.",
      mandiEyebrow: "Market Information",
      mandiTitle: "Mandi Bhav",
      mandiPlaceholder: "Crop ya market search karein",
      search: "Search",
      demoPrices: "Ye sample prices hain, live mandi rates nahi.",
      cropColumn: "Crop",
      marketColumn: "Market",
      priceColumn: "Price (₹/quintal)",
      typeColumn: "Data type",
      demoType: "Demo",
      noMandiResults: "Matching sample prices nahi mile.",
      mandiDisclaimer: "Current prices ke liye official portal check karein.",
      agmarknetLink: "Agmarknet Dekhein ↗",
      schemesEyebrow: "Government Support",
      schemesTitle: "Sarkari Yojana",
      pmKisanDesc: "Scheme information aur beneficiary services ka official portal.",
      insuranceTitle: "PM Fasal Bima Yojana",
      insuranceDesc: "Crop insurance aur related services ki information.",
      soilTitle: "Soil Health Card",
      soilDesc: "Soil testing aur soil health ki information.",
      enamDesc: "Electronic National Agriculture Market ke baare mein jaanein.",
      officialWebsite: "Official website ↗",
      schemesDisclaimer: "Eligibility aur application rules change ho sakte hain. Apply karne se pehle official portal check karein.",
      assistantEyebrow: "Farming Help",
      assistantTitle: "AI Farming Sahayak",
      chatWelcome: "Namaste! Main aapka farming demo assistant hoon. Crop, irrigation, soil ya schemes ke baare mein poochhein.",
      chatPlaceholder: "Farming ka sawal poochhein...",
      send: "Bhejein",
      chatDisclaimer: "Ye rule-based demo hai, connected AI model nahi. Important decisions ke liye expert se salah lein.",
      botGreeting: "Namaste! Aaj farming mein main aapki kya help kar sakta hoon?",
      botWater: "Irrigation crop, soil moisture aur weather par depend karti hai. Soil moisture check karein aur local advice follow karein.",
      botSoil: "Soil test se nutrients aur pH ki jaankari mil sakti hai. Local agriculture office se contact karein.",
      botDisease: "Sirf message se plant disease confirm nahi ho sakti. Photo agriculture expert ko dikhayein.",
      botFertilizer: "Fertilizer soil test aur crop requirement ke hisaab se choose karein. Dose guess na karein.",
      botScheme: "Official details ke liye pmkisan.gov.in ya pmfby.gov.in check karein.",
      botWeather: "City ka forecast dekhne ke liye upar Weather section use karein.",
      botMarket: "Mandi table mein sample prices hain, live rates nahi. Agmarknet check karein.",
      botFallback: "Main general farming information de sakta hoon. Crop treatment ke liye agriculture expert se salah lein.",
      seedsEyebrow: "Crop Planning",
      seedsTitle: "Seeds aur Fertilizers",
      seedsDescription: "Region aur season ke hisaab se certified seeds choose karein. Fertilizer soil test aur crop requirement ke according use karein.",
      seedTip1: "Seed variety, label aur expiry check karein.",
      seedTip2: "Apne area ka recommended sowing time follow karein.",
      seedTip3: "Fertilizer dose ke liye soil report aur expert advice follow karein.",
      agricultureLink: "Agriculture Department of India ↗",
      profitEyebrow: "Farm Economics",
      profitTitle: "Munafe ka Calculator",
      yieldLabel: "Expected yield (quintals)",
      priceLabel: "Price per quintal (₹)",
      costLabel: "Total cost (₹)",
      calculate: "Profit Calculate Karein",
      profitInitial: "Profit estimate ke liye details bharein.",
      profitRevenue: "Estimated revenue",
      profitCosts: "Total costs",
      profitAmount: "Estimated profit",
      lossAmount: "Estimated loss",
      profitDisclaimer: "Ye estimate hai, actual earning ki guarantee nahi.",
      invalidNumbers: "Har field mein valid zero ya positive number enter karein.",
      footerText: "Better farming decisions ke liye technology."
    }
  };

  let currentLanguage = "en";
  let cropPreviewUrl = null;
  let lastWeatherData = null;

  function t(key) {
    return translations[currentLanguage][key] ??
      translations.en[key] ?? key;
  }

  function formatNumber(number, maximumFractionDigits = 1) {
    const locale = currentLanguage === "hi" ? "hi-IN" : "en-IN";
    return new Intl.NumberFormat(locale, {
      maximumFractionDigits
    }).format(number);
  }

  function formatMoney(number) {
    return "₹" + formatNumber(number, 2);
  }

  function addText(parent, tag, text, className = "") {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    parent.appendChild(element);
    return element;
  }

  // MOBILE NAVIGATION
  menuBtn.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  $$("#navigation a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // CROP IMAGE PREVIEW
  $("#cropImage").addEventListener("change", (event) => {
    const file = event.target.files[0];
    const preview = $("#cropPreview");
    const status = $("#imageStatus");

    if (cropPreviewUrl) {
      URL.revokeObjectURL(cropPreviewUrl);
      cropPreviewUrl = null;
    }

    preview.removeAttribute("src");
    preview.hidden = true;
    status.textContent = "";

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp"
    ];

    if (!allowedTypes.includes(file.type)) {
      status.textContent = t("photoNotice");
      event.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      status.textContent = t("photoTooLarge");
      event.target.value = "";
      return;
    }

    cropPreviewUrl = URL.createObjectURL(file);
    preview.src = cropPreviewUrl;
    preview.hidden = false;
    status.textContent = t("photoReady");
  });

  // SAMPLE MANDI DATA. NOT LIVE MARKET PRICES.
  const mandiData = [
    { crop: "Rice", market: "Ranchi", price: 2200 },
    { crop: "Wheat", market: "Lucknow", price: 2450 },
    { crop: "Maize", market: "Ranchi", price: 1950 },
    { crop: "Potato", market: "Agra", price: 1200 },
    { crop: "Tomato", market: "Patna", price: 1800 },
    { crop: "Mustard", market: "Jaipur", price: 5600 },
    { crop: "Rice", market: "Patna", price: 2150 },
    { crop: "Wheat", market: "Ranchi", price: 2400 }
  ];

  function renderMandi() {
    const query = $("#mandiSearch").value.trim().toLocaleLowerCase();
    const tbody = $("#mandiTable");
    tbody.replaceChildren();

    const matches = mandiData.filter((item) => {
      const searchable = `${item.crop} ${item.market}`.toLocaleLowerCase();
      return searchable.includes(query);
    });

    if (matches.length === 0) {
      const row = document.createElement("tr");
      const cell = addText(row, "td", t("noMandiResults"));
      cell.colSpan = 4;
      tbody.appendChild(row);
      return;
    }

    matches.forEach((item) => {
      const row = document.createElement("tr");

      [
        item.crop,
        item.market,
        formatMoney(item.price),
        t("demoType")
      ].forEach((value) => addText(row, "td", value));

      tbody.appendChild(row);
    });
  }

  $("#mandiForm").addEventListener("submit", (event) => {
    event.preventDefault();
    renderMandi();
  });

  $("#mandiSearch").addEventListener("input", renderMandi);

  // PROFIT CALCULATOR
  $("#profitForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const yieldValue = Number($("#yieldInput").value);
    const price = Number($("#priceInput").value);
    const costs = Number($("#costInput").value);
    const result = $("#profitResult");

    if (
      !Number.isFinite(yieldValue) ||
      !Number.isFinite(price) ||
      !Number.isFinite(costs) ||
      $("#yieldInput").value.trim() === "" ||
      $("#priceInput").value.trim() === "" ||
      $("#costInput").value.trim() === "" ||
      yieldValue < 0 || price < 0 || costs < 0
    ) {
      result.textContent = t("invalidNumbers");
      return;
    }

    const revenue = yieldValue * price;
    const profit = revenue - costs;
    result.replaceChildren();

    addText(result, "p", `${t("profitRevenue")}: ${formatMoney(revenue)}`);
    addText(result, "p", `${t("profitCosts")}: ${formatMoney(costs)}`);
    addText(
      result,
      "p",
      `${profit >= 0 ? t("profitAmount") : t("lossAmount")}: ${formatMoney(Math.abs(profit))}`
    );
  });

  // SIMPLE RULE-BASED CHATBOT. NOT AN LLM.
  function getBotReply(question) {
    const q = question.toLocaleLowerCase();

    if (/hello|hi\b|namaste|नमस्ते|हेलो|प्रणाम/.test(q)) {
      return t("botGreeting");
    }

    if (/water|irrigat|paani|पानी|सिंचाई/.test(q)) {
      return t("botWater");
    }

    if (/soil|mitti|मिट्टी|जमीन/.test(q)) {
      return t("botSoil");
    }

    if (/disease|bimari|बीमारी|रोग|patta|पत्ता/.test(q)) {
      return t("botDisease");
    }

    if (/fertili[sz]er|khaad|खाद|उर्वरक/.test(q)) {
      return t("botFertilizer");
    }

    if (/scheme|yojana|योजना|सरकारी/.test(q)) {
      return t("botScheme");
    }

    if (/weather|mausam|मौसम|बारिश|rain/.test(q)) {
      return t("botWeather");
    }

    if (/mandi|price|bhav|भाव|बाजार|market/.test(q)) {
      return t("botMarket");
    }

    return t("botFallback");
  }

  function addChatMessage(text, type) {
    const messages = $("#chatMessages");
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${type}`;
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }

  $("#chatForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const input = $("#chatInput");
    const question = input.value.trim();

    if (!question) return;

    addChatMessage(question, "user");
    addChatMessage(getBotReply(question), "bot");
    input.value = "";
    input.focus();
  });

  // WEATHER DESCRIPTION
  function weatherDescription(code) {
    const map = {
      0: "weatherCode0",
      1: "weatherCode1",
      2: "weatherCode2",
      3: "weatherCode3",
      45: "weatherCode45",
      48: "weatherCode48",
      51: "weatherCode51",
      53: "weatherCode53",
      55: "weatherCode55",
      61: "weatherCode61",
      63: "weatherCode63",
      65: "weatherCode65",
      71: "weatherCode71",
      73: "weatherCode73",
      75: "weatherCode75",
      80: "weatherCode80",
      81: "weatherCode81",
      82: "weatherCode82",
      95: "weatherCode95"
    };

    return t(map[code] || "weatherCodeUnknown");
  }

  function renderWeather(data) {
    const result = $("#weatherResult");
    result.replaceChildren();

    const card = document.createElement("div");
    card.className = "result-box";

    addText(card, "h3", `${data.place.name}, ${data.place.country || ""}`);
    addText(card, "h4", t("currentWeather"));
    addText(
      card,
      "p",
      `${t("temperature")}: ${formatNumber(data.current.temperature_2m)}°C`
    );
    addText(
      card,
      "p",
      `${t("humidity")}: ${formatNumber(data.current.relative_humidity_2m, 0)}%`
    );
    addText(
      card,
      "p",
      `${t("wind")}: ${formatNumber(data.current.wind_speed_10m)} km/h`
    );
    addText(card, "p", weatherDescription(data.current.weather_code));

    addText(card, "h4", t("forecastTitle"));

    data.daily.time.forEach((date, index) => {
      const day = document.createElement("div");
      day.className = "forecast-day";

      addText(day, "strong", date);
      addText(
        day,
        "p",
        `${formatNumber(data.daily.temperature_2m_min[index])}°C – ${formatNumber(data.daily.temperature_2m_max[index])}°C`
      );
      addText(day, "p", weatherDescription(data.daily.weather_code[index]));
      card.appendChild(day);
    });

    result.appendChild(card);
  }

  // LIVE WEATHER USING OPEN-METEO; NO API KEY REQUIRED.
  $("#weatherForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = $("#cityInput").value.trim();
    const status = $("#weatherStatus");
    const result = $("#weatherResult");
    const button = $("#weatherForm button");

    if (!city) return;

    status.textContent = t("weatherLoading");
    result.replaceChildren();
    button.disabled = true;

    try {
      const geoUrl = new URL(
        "https://geocoding-api.open-meteo.com/v1/search"
      );

      geoUrl.search = new URLSearchParams({
        name: city,
        count: "1",
        language: currentLanguage === "hi" ? "hi" : "en",
        format: "json"
      }).toString();

      const geoResponse = await fetch(geoUrl);

      if (!geoResponse.ok) throw new Error("Geocoding request failed");

      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        status.textContent = t("weatherError");
        return;
      }

      const place = geoData.results[0];
      const weatherUrl = new URL(
        "https://api.open-meteo.com/v1/forecast"
      );

      weatherUrl.search = new URLSearchParams({
        latitude: String(place.latitude),
        longitude: String(place.longitude),
        current: "temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code",
        daily: "temperature_2m_max,temperature_2m_min,weather_code",
        forecast_days: "3",
        timezone: "auto"
      }).toString();

      const weatherResponse = await fetch(weatherUrl);

      if (!weatherResponse.ok) throw new Error("Forecast request failed");

      const weatherData = await weatherResponse.json();

      lastWeatherData = {
        place,
        current: weatherData.current,
        daily: weatherData.daily
      };

      renderWeather(lastWeatherData);
      status.textContent = "";
    } catch (error) {
      console.error("Weather request failed:", error);
      status.textContent = t("weatherFailed");
    } finally {
      button.disabled = false;
    }
  });

  // LANGUAGE SWITCHER
  function applyLanguage(language) {
    currentLanguage = translations[language] ? language : "en";

    // Translate every element marked with data-i18n.
    $$("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const translated = t(key);

      // Keep user-entered chat history intact.
      if (element.id === "chatMessages") return;

      element.textContent = translated;
    });

    // Translate placeholders separately.
    $$("[data-i18n-placeholder]").forEach((element) => {
      element.placeholder = t(element.dataset.i18nPlaceholder);
    });

    document.documentElement.lang = currentLanguage === "hi" ? "hi" : "en";

    // Refresh dynamically generated content in the selected language.
    renderMandi();

    if (lastWeatherData) {
      renderWeather(lastWeatherData);
    }

    // Update existing chatbot messages while retaining the user's questions.
    $$("#chatMessages .chat-bubble.bot").forEach((bubble, index) => {
      const key = bubble.dataset.replyKey;

      if (key) {
        bubble.textContent = t(key);
      } else if (index === 0) {
        bubble.textContent = t("chatWelcome");
      }
    });

    // Update the default calculator message only when it is still untouched.
    const profitResult = $("#profitResult");

    if (!profitResult.dataset.calculated) {
      profitResult.textContent = t("profitInitial");
    }

    try {
      localStorage.setItem("kisan-ai-language", currentLanguage);
    } catch (error) {
      // The site still works when browser storage is unavailable.
    }
  }

  // Mark bot replies so they can be refreshed on a language change.
  const originalAddChatMessage = addChatMessage;

  let savedLanguage = "en";

  try {
    savedLanguage = localStorage.getItem("kisan-ai-language") || "en";
  } catch (error) {
    savedLanguage = "en";
  }

  if (!translations[savedLanguage]) savedLanguage = "en";

  languageSelect.value = savedLanguage;
  languageSelect.addEventListener("change", () => {
    applyLanguage(languageSelect.value);
  });

  // Mark the profit result when a calculation is submitted.
  $("#profitForm").addEventListener("submit", () => {
    $("#profitResult").dataset.calculated = "true";
  });

  renderMandi();
  applyLanguage(savedLanguage);
});

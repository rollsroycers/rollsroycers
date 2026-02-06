"""Batch 4b: Fill all remaining partial gaps for HI"""
DATA = {"hi": {"common": {
    "hero": {"stats": {"vehicles": "20+", "vehiclesLabel": "लक्जरी वाहन", "clients": "10,000+", "clientsLabel": "खुश ग्राहक", "rating": "4.9", "ratingLabel": "गूगल रेटिंग"}},
    "about": {
        "hero": {"title": "हमारे बारे में", "subtitle": "दुबई की प्रीमियम रोल्स रॉयस रेंटल सेवा"},
        "description": "2010 से, रोल्स रॉयसर्स दुबई में सबसे विशिष्ट लक्जरी कार रेंटल अनुभव प्रदान कर रहा है।",
        "introduction": {"title": "हमारे बारे में", "description": "हम दुबई में प्रीमियम रोल्स रॉयस रेंटल सेवा प्रदान करते हैं।"},
        "milestones": {"title": "हमारे मील के पत्थर", "2010": "कंपनी की स्थापना", "2015": "बेड़े का विस्तार", "2020": "10,000+ ग्राहक", "2025": "क्षेत्र में अग्रणी"},
        "reasons": {"title": "हमें क्यों चुनें", "reason1": "प्रीमियम बेड़ा", "reason2": "24/7 सेवा", "reason3": "मुफ्त डिलीवरी", "reason4": "पेशेवर ड्राइवर"},
        "virtualShowroom": {"title": "वर्चुअल शोरूम", "description": "हमारे शोरूम का 360° टूर", "cta": "टूर शुरू करें"},
        "whyChoose": {"title": "हमें क्यों चुनें", "experience": "15+ वर्षों का अनुभव", "fleet": "प्रीमियम बेड़ा", "service": "24/7 सेवा"},
        "whyChooseUs": {"title": "हमें क्यों चुनें"}
    },
    "virtualTour": {
        "cta": {"title": "निजी टूर बुक करें", "description": "हमारी टीम के साथ व्यक्तिगत टूर बुक करें", "button": "अभी बुक करें"},
        "spots": {"starlight": {"title": "स्टारलाइट छत", "description": "हाथ से बनी तारों वाली छत"}, "spirit": {"title": "स्पिरिट ऑफ एक्स्टसी", "description": "प्रतिष्ठित स्पिरिट ऑफ एक्स्टसी मूर्ति"}}
    },
    "home": {"premiumServices": "प्रीमियम सेवाएं", "stats": {"title": "आंकड़े"}, "video": {"title": "वीडियो गैलरी", "cta": "सभी वीडियो देखें"}},
    "fleet": {"title": "हमारा विशेष बेड़ा", "subtitle": "अपनी रोल्स रॉयस चुनें", "luxuryFeatures": "लक्जरी फीचर्स", "virtualTourSpots": {"title": "वर्चुअल टूर स्पॉट", "description": "आंतरिक विवरण देखें"}},
    "services": {"title": "हमारी सेवाएं", "subtitle": "प्रीमियम रोल्स रॉयस रेंटल सेवाएं", "concierge": "कंसीयज सेवा", "delivery": "डिलीवरी सेवा", "hourly": "प्रति घंटा रेंटल"},
    "cookie": {"learnMore": "और जानें"},
    "offers": {"title": "हमारे ऑफर", "subtitle": "रोल्स रॉयस रेंटल पर विशेष ऑफर"},
    "reviews": {
        "overallRating": "समग्र रेटिंग", "reviewsCount": "समीक्षाओं की संख्या",
        "review1": {"name": "अहमद अल-रशीद", "rating": 5, "text": "शादी के लिए फैंटम बुक की। बिल्कुल शानदार अनुभव!", "date": "जनवरी 2026", "service": "शादी"},
        "review2": {"name": "सारा मंसूरी", "rating": 5, "text": "कॉर्पोरेट इवेंट के लिए बेहतरीन सेवा।", "date": "दिसंबर 2025", "service": "कॉर्पोरेट"},
        "review3": {"name": "राज शर्मा", "rating": 5, "text": "उत्कृष्ट सेवा और साफ-सुथरी कारें। अत्यधिक अनुशंसित!", "date": "नवंबर 2025", "service": "सेल्फ ड्राइव"},
        "review4": {"name": "प्रिया पटेल", "rating": 5, "text": "परिवार की यात्रा के लिए कलिनन बुक की। अद्भुत अनुभव।", "date": "अक्टूबर 2025", "service": "टूर"},
        "review5": {"name": "विकास गुप्ता", "rating": 5, "text": "दुबई में सबसे अच्छी लक्जरी कार रेंटल सेवा।", "date": "सितंबर 2025", "service": "ड्राइवर"},
        "review6": {"name": "अनीता देसाई", "rating": 5, "text": "शादी के लिए फैंटम एकदम सही थी।", "date": "अगस्त 2025", "service": "शादी"},
        "review7": {"name": "अमित कुमार", "rating": 4, "text": "घोस्ट के साथ शानदार अनुभव। समय पर डिलीवरी।", "date": "जुलाई 2025", "service": "एयरपोर्ट"},
        "review8": {"name": "नेहा सिंह", "rating": 5, "text": "24/7 उत्कृष्ट ग्राहक सेवा।", "date": "जून 2025", "service": "इवेंट"},
        "review9": {"name": "संजय मेहता", "rating": 5, "text": "फोटोशूट के लिए डॉन किराए पर ली। अद्भुत परिणाम!", "date": "मई 2025", "service": "फोटोशूट"},
        "review10": {"name": "दीपिका राव", "rating": 5, "text": "दुबई टूर के लिए रेथ किराए पर ली। यादगार!", "date": "अप्रैल 2025", "service": "टूर"}
    },
    "loyalty": {
        "enroll": "अभी नामांकन करें",
        "faq": {"title": "लॉयल्टी प्रोग्राम FAQ", "q1": "मैं पॉइंट कैसे कमाऊं?", "a1": "हर बुकिंग पर पॉइंट कमाएं।", "q2": "पॉइंट कब समाप्त होते हैं?", "a2": "पॉइंट 12 महीने तक वैध हैं।"},
        "journey": {"title": "आपकी लॉयल्टी यात्रा", "description": "विशेष पुरस्कारों की ओर अपनी यात्रा शुरू करें"}
    },
    "footer": {
        "contact": {"phone": "+971 55 816 4922", "email": "info@rollsroycers.com", "address": "शेख जायद रोड, दुबई"},
        "description": "दुबई में प्रीमियम रोल्स रॉयस रेंटल सेवा। बेजोड़ लक्जरी, मुफ्त डिलीवरी।",
        "links": {"about": "हमारे बारे में", "fleet": "बेड़ा", "services": "सेवाएं", "contact": "संपर्क", "blog": "ब्लॉग", "faq": "FAQ", "terms": "शर्तें", "privacy": "गोपनीयता"},
        "social": {"facebook": "फेसबुक", "instagram": "इंस्टाग्राम", "twitter": "ट्विटर", "youtube": "यूट्यूब", "linkedin": "लिंक्डइन"}
    },
    "testimonialSubmission": {"form": {"name": "नाम", "email": "ईमेल", "vehicle": "वाहन", "rating": "रेटिंग", "review": "आपकी समीक्षा", "submit": "समीक्षा सबमिट करें", "success": "अपना अनुभव साझा करने के लिए धन्यवाद!"}},
    "personalizedOffers": {"notFound": "मिलते-जुलते ऑफर नहीं मिले। अन्य विकल्प आज़माएं।"},
    "videoGallery": {"night": "रात में", "showroom": "शोरूम"},
    "contact": {
        "hero": {"title": "संपर्क करें", "subtitle": "हम आपकी मदद के लिए यहां हैं"},
        "businessHours": {"title": "कार्य समय", "weekdays": "सोमवार - शुक्रवार: 24/7", "weekends": "शनिवार - रविवार: 24/7", "note": "चौबीसों घंटे उपलब्ध"},
        "contactMethods": {"title": "संपर्क के तरीके", "phone": {"title": "फोन", "description": "सीधे कॉल करें"}, "whatsapp": {"title": "व्हाट्सएप", "description": "व्हाट्सएप पर मैसेज करें"}, "email": {"title": "ईमेल", "description": "ईमेल भेजें"}},
        "faq": {"title": "अक्सर पूछे जाने वाले प्रश्न", "q1": {"question": "मैं कैसे बुक करूं?", "answer": "वेबसाइट से या हमें कॉल करके बुक करें।"}, "q2": {"question": "क्या डिलीवरी मुफ्त है?", "answer": "हां, दुबई भर में मुफ्त डिलीवरी।"}, "q3": {"question": "न्यूनतम रेंटल अवधि क्या है?", "answer": "न्यूनतम एक दिन।"}},
        "socialMedia": {"title": "हमें फॉलो करें", "facebook": "फेसबुक", "instagram": "इंस्टाग्राम", "twitter": "ट्विटर"}
    },
    "servicesPages": {
        "corporate": {"hero": {"title": "कॉर्पोरेट रोल्स रॉयस रेंटल", "subtitle": "दुबई में अपने व्यवसाय की छवि बढ़ाएं", "description": "हमारी कॉर्पोरेट रोल्स रॉयस रेंटल सेवाओं से ग्राहकों को प्रभावित करें।", "cta": "कॉर्पोरेट कोट अनुरोध करें", "stats": {"fortune500": "फॉर्च्यून 500 ग्राहक", "onTime": "समय पर"}}},
        "wedding": {"hero": {"title": "दुबई में रोल्स रॉयस शादी कार", "subtitle": "अपने खास दिन को अविस्मरणीय बनाएं", "description": "शादी के दिन लक्जरी का स्पर्श जोड़ें।", "cta": "शादी कार बुक करें"}},
        "airport": {"hero": {"title": "रोल्स रॉयस एयरपोर्ट ट्रांसफर", "subtitle": "शानदार आगमन और प्रस्थान", "description": "शैली से यात्रा शुरू या समाप्त करें।", "cta": "एयरपोर्ट ट्रांसफर बुक करें"}},
        "chauffeur": {"hero": {"title": "रोल्स रॉयस ड्राइवर सेवा", "subtitle": "24/7 पेशेवर ड्राइवर", "description": "पेशेवर ड्राइवरों के साथ पूर्ण आराम।", "cta": "ड्राइवर बुक करें"}},
        "events": {"hero": {"title": "इवेंट के लिए रोल्स रॉयस", "subtitle": "अपने इवेंट में लक्जरी जोड़ें", "description": "कॉर्पोरेट या निजी इवेंट के लिए लक्जरी ट्रांसपोर्ट।", "cta": "इवेंट के लिए बुक करें"}},
        "tours": {"hero": {"title": "दुबई रोल्स रॉयस टूर", "subtitle": "लक्जरी में दुबई खोजें", "description": "रोल्स रॉयस में दुबई के सुंदर स्थल देखें।", "cta": "टूर बुक करें"}},
        "photoshoot": {"hero": {"title": "रोल्स रॉयस फोटोशूट", "subtitle": "लक्जरी कारों के साथ पेशेवर फोटो", "description": "हमारे बेड़े के साथ फोटोशूट बुक करें।", "cta": "फोटोशूट बुक करें"}}
    },
    "checkAvailability": {"cars": {"phantom": "फैंटम", "ghost": "घोस्ट", "cullinan": "कलिनन", "dawn": "डॉन", "wraith": "रेथ"}, "selectYourRR": "अपनी पसंदीदा रोल्स रॉयस चुनें"},
    "priceCalculator": {"calculateButton": "गणना करें", "dailyRate": "दैनिक दर", "deliveryLocation": "डिलीवरी स्थान", "duration": {"daily": "दैनिक", "weekly": "साप्ताहिक", "monthly": "मासिक"}, "estimatedPrice": "अनुमानित मूल्य", "locations": {"downtown": "डाउनटाउन", "marina": "मरीना", "palm": "पाम"}, "model": "मॉडल", "priceBreakdown": "मूल्य विवरण", "promoCode": "प्रोमो कोड", "selectCar": "कार चुनें"},
    "placeholders": {"businessEmail": "email@company.com", "companyName": "कंपनी का नाम", "enterCode": "कोड दर्ज करें", "johnDoe": "राज शर्मा", "name": "नाम", "rentalInquiry": "रेंटल पूछताछ"},
    "compareFleet": {
        "title": "हमारे बेड़े की तुलना करें", "subtitle": "अपने लक्जरी अनुभव के लिए सही रोल्स रॉयस खोजें",
        "description": "सुविधाओं, विनिर्देशों और कीमतों की तुलना करें।",
        "selectCars": "तुलना के लिए 3 कारें चुनें", "clear": "तुलना साफ़ करें", "compare": "अभी तुलना करें", "selectAModel": "मॉडल चुनें",
        "specs": {"engine": "इंजन", "power": "शक्ति", "torque": "टॉर्क", "speed": "शीर्ष गति", "acceleration": "0-100 km/h", "weight": "वजन", "length": "लंबाई", "width": "चौड़ाई", "height": "ऊंचाई", "wheelbase": "व्हीलबेस", "fuelCapacity": "ईंधन क्षमता", "trunkCapacity": "ट्रंक क्षमता", "seats": "सीटें"},
        "ratingsItems": {"comfort": "आराम", "performance": "प्रदर्शन", "luxury": "लक्जरी", "technology": "तकनीक", "value": "मूल्य"},
        "featureCategories": {"exterior": "बाहरी", "interior": "आंतरिक", "technology": "तकनीक"},
        "cars": {"phantom": {"name": "रोल्स रॉयस फैंटम", "tagline": "लक्जरी का शिखर"}, "ghost": {"name": "रोल्स रॉयस घोस्ट", "tagline": "आधुनिक लालित्य"}, "cullinan": {"name": "रोल्स रॉयस कलिनन", "tagline": "सड़कों का राजा"}, "dawn": {"name": "रोल्स रॉयस डॉन", "tagline": "खुली लक्जरी"}, "wraith": {"name": "रोल्स रॉयस रेथ", "tagline": "शक्तिशाली लालित्य"}},
        "compareButton": "चयनित की तुलना करें ({{count}})", "selectUpTo": "तुलना के लिए 3 वाहन चुनें", "selectedCount": "{{count}} वाहन चयनित", "resetSelection": "चयन रीसेट करें", "viewDetails": "विवरण देखें", "startComparison": "नई तुलना शुरू करें", "modalTitle": "बेड़ा तुलना", "closeModal": "तुलना बंद करें",
        "specifications": "तकनीकी विनिर्देश", "performance": "प्रदर्शन और क्षमता", "luxury": "लक्जरी सुविधाएं", "comfort": "आराम और सुविधा", "technology": "तकनीक और नवाचार", "pricing": "मूल्य निर्धारण और पैकेज",
        "metrics": {"power": "शक्ति", "speed": "शीर्ष गति", "acceleration": "त्वरण", "seats": "सीटें", "trunk": "ट्रंक", "fuel": "ईंधन खपत"},
        "bestFor": {"wedding": "शादी के लिए सर्वश्रेष्ठ", "corporate": "कॉर्पोरेट के लिए सर्वश्रेष्ठ", "touring": "टूर के लिए सर्वश्रेष्ठ", "airport": "एयरपोर्ट के लिए सर्वश्रेष्ठ", "photoshoot": "फोटोशूट के लिए सर्वश्रेष्ठ", "events": "इवेंट के लिए सर्वश्रेष्ठ", "family": "परिवार के लिए सर्वश्रेष्ठ"},
        "features": {"exterior": "बाहरी", "interior": "आंतरिक", "technology": "तकनीक"},
        "actions": {"bookNow": "अभी बुक करें", "viewDetails": "विवरण देखें", "getQuote": "कोटेशन प्राप्त करें", "compare": "तुलना करें"}
    },
    "locations": {"downtown": "डाउनटाउन दुबई"},
    "privacy": {
        "consent": {"title": "आपकी सहमति", "description": "हमारी सेवाओं का उपयोग करके, आप इस गोपनीयता नीति से सहमत होते हैं।"},
        "cta": {"title": "प्रश्न हैं?", "description": "गोपनीयता संबंधी किसी भी प्रश्न के लिए संपर्क करें।", "button": "संपर्क करें"},
        "relatedPolicies": {"title": "संबंधित नीतियां", "terms": "नियम और शर्तें", "cookies": "कुकी नीति"}
    },
    "gallery": {
        "descriptions": {"phantom": "रोल्स रॉयस फैंटम - लक्जरी का शिखर", "ghost": "रोल्स रॉयस घोस्ट - आधुनिक लालित्य", "cullinan": "रोल्स रॉयस कलिनन - ऑफ-रोड लक्जरी"},
        "vehicles": {"phantom": "फैंटम", "ghost": "घोस्ट", "cullinan": "कलिनन", "dawn": "डॉन", "wraith": "रेथ"},
        "videos": {"title": "वीडियो", "description": "हमारे बेड़े को एक्शन में देखें"}
    },
    "testimonialsPage": {"cta": {"title": "अपना अनुभव साझा करें", "description": "हम आपकी कहानी सुनना चाहते हैं", "button": "समीक्षा लिखें"}}
}}}

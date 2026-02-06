"""Batch 1: Simple shared sections - contact, search, navigation, gallery, checkAvailability,
virtualShowroom, virtualTour, testimonialSubmission, testimonialsPage, personalizedOffers, common (partial)"""

DATA = {
    "ar": {"common": {
        "navigation": {
            "fleet": "الأسطول",
            "services": "الخدمات",
            "locations": "المواقع",
            "pricing": "الأسعار"
        },
        "search": {
            "title": "بحث",
            "subtitle": "ابحث عن خدمة تأجير السيارات الفاخرة المثالية",
            "placeholder": "ابحث عن السيارات والخدمات والمواقع...",
            "search": "بحث",
            "searching": "جارٍ البحث...",
            "resultsFor": "نتائج البحث عن",
            "noResults": "لم يتم العثور على نتائج",
            "noResultsDesc": "حاول البحث بكلمات مختلفة أو تصفح فئاتنا الرئيسية:",
            "popular": "عمليات البحث الشائعة"
        },
        "contact": {
            "title": "اتصل بنا",
            "subtitle": "تواصل مع خبراء تأجير السيارات الفاخرة لدينا",
            "form": {
                "title": "أرسل لنا رسالة",
                "name": {"label": "الاسم الكامل", "placeholder": "أحمد محمد"},
                "email": {"label": "البريد الإلكتروني", "placeholder": "ahmed@example.com"},
                "phone": {"label": "رقم الهاتف", "placeholder": "+971 55 816 4922"},
                "subject": {"label": "الموضوع", "placeholder": "استفسار عن التأجير"},
                "message": {"label": "الرسالة", "placeholder": "أخبرنا عن احتياجاتك..."},
                "submit": "إرسال الرسالة",
                "sending": "جارٍ الإرسال...",
                "success": "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
                "error": "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى."
            },
            "info": {
                "title": "معلومات الاتصال",
                "phone": {"label": "الهاتف", "value": "+971 55 816 4922"},
                "email": {"label": "البريد الإلكتروني", "value": "info@rollsroycers.com"},
                "whatsapp": {"label": "واتساب", "value": "+971 55 816 4922"},
                "address": {"label": "العنوان", "value": "شارع الشيخ زايد، دبي، الإمارات"},
                "hours": {"label": "ساعات العمل", "value": "متاح 24/7"}
            },
            "map": {"title": "موقعنا"}
        },
        "gallery": {
            "hero": {"title": "المعرض", "subtitle": "انغمس في عالم فخامة رولز رويس"},
            "categories": {
                "all": "الكل",
                "exterior": "الخارج",
                "interior": "الداخل",
                "details": "التفاصيل",
                "events": "الفعاليات",
                "locations": "المواقع",
                "photoshoot": "جلسات التصوير",
                "lifestyle": "نمط الحياة"
            },
            "videoGallery": {"title": "معرض الفيديو"},
            "instagram": {"title": "تابعنا على إنستغرام", "handle": "@rollsroycers"},
            "virtualTour": {"title": "جولة افتراضية 360°", "description": "استكشف سياراتنا من كل زاوية"},
            "cta": {"title": "حجز جلسة تصوير", "description": "احجز جلسة تصوير خاصة مع أسطولنا", "button": "احجز الآن"}
        },
        "checkAvailability": {
            "title": "تحقق من توفر السيارة",
            "subtitle": "احجز طراز رولز رويس المفضل لديك للتواريخ المطلوبة.",
            "pickupDate": "تاريخ الاستلام",
            "returnDate": "تاريخ الإرجاع",
            "pickupLocation": "موقع الاستلام",
            "returnLocation": "موقع الإرجاع",
            "check": "تحقق من التوفر",
            "availability": "حالة التوفر",
            "available": "متاح",
            "notAvailable": "غير متاح",
            "contactForDetails": "اتصل بنا للتفاصيل",
            "calendar": {
                "selectDate": "اختر تاريخاً",
                "today": "اليوم",
                "tomorrow": "غداً"
            },
            "selectedVehicle": "السيارة المختارة"
        },
        "virtualShowroom": {
            "title": "تجربة صالة العرض الافتراضية",
            "description": "قم بجولة افتراضية 360° في صالة العرض الفاخرة لدينا",
            "cta": "ابدأ الجولة الافتراضية"
        },
        "virtualTour": {
            "title": "تجربة افتراضية 360°",
            "subtitle": "استكشف كل التفاصيل من أي مكان",
            "interiorSuffix": "الداخل",
            "alt": {"interiorView": "منظر داخلي"},
            "controls": {
                "zoom": "تكبير",
                "fullscreen": "شاشة كاملة",
                "exit": "خروج",
                "interactiveTour": "جولة تفاعلية"
            },
            "centerText": {"logo": "RR", "instruction": "انقر على النقاط الساخنة للاستكشاف"},
            "features": {
                "interactiveControls": {"title": "تحكم تفاعلي", "description": "استخدم التكبير والتحريك والتدوير لاستكشاف كل تفصيل"},
                "multipleAngles": {"title": "زوايا متعددة", "description": "شاهد من الأمام والخلف والجانب والداخل"},
                "hotspots": {"title": "نقاط المعلومات", "description": "انقر على النقاط الساخنة لمعرفة المزيد عن الميزات المحددة"},
                "fullscreen": {"title": "وضع الشاشة الكاملة", "description": "استمتع بتجربة غامرة في وضع الشاشة الكاملة"},
                "deviceSupport": {"title": "دعم جميع الأجهزة", "description": "يعمل على الكمبيوتر والجوال والجهاز اللوحي"}
            }
        },
        "testimonialSubmission": {
            "shareExperience": {
                "title": "شارك تجربتك",
                "description": "نود أن نسمع عن رحلتك معنا. ملاحظاتك تساعدنا على التحسين وتلهم الآخرين."
            },
            "stories": {
                "title": "قصص ملهمة",
                "story1": {
                    "quote": "أجمل قيادة ذكرى زواج، بفضل رولز رويس داون المذهلة.",
                    "author": "عائلة الخطيب",
                    "name": "أحمد الراشد",
                    "location": "دبي، الإمارات",
                    "occasion": "حفل زفاف",
                    "rating": 5,
                    "date": "يناير 2026",
                    "vehicle": "Rolls-Royce Dawn",
                    "review": "من لحظة الحجز حتى التوصيل، كان كل شيء مثالياً. سيارة رولز رويس داون كانت الخيار المثالي لذكرى زواجنا.",
                    "verified": True
                },
                "story2": {
                    "quote": "خدمة لا تضاهى جعلت حدثنا التجاري لا يُنسى حقاً.",
                    "author": "شركة كابيتال للاستثمارات",
                    "name": "سارة المنصوري",
                    "location": "أبوظبي، الإمارات",
                    "occasion": "حدث تجاري",
                    "rating": 5,
                    "date": "ديسمبر 2025",
                    "vehicle": "Rolls-Royce Phantom",
                    "review": "رولز رويس فانتوم أضافت مستوى من التميز لحدثنا التجاري. كل شريك كان معجباً.",
                    "verified": True
                }
            }
        },
        "testimonialsPage": {
            "title": "آراء العملاء",
            "subtitle": "اكتشف لماذا يختار عملاؤنا رولز رويس دبي لأهم لحظاتهم",
            "stats": {
                "averageRating": "متوسط التقييم",
                "recommendationRate": "نسبة التوصية",
                "countriesServed": "دول تم خدمتها"
            },
            "filters": {
                "allReviews": "كل التقييمات",
                "wedding": "زفاف",
                "corporate": "شركات",
                "tourism": "سياحة",
                "events": "فعاليات"
            },
            "labels": {
                "experienceHighlights": "أبرز التجارب",
                "customerPhotos": "صور العملاء"
            }
        },
        "personalizedOffers": {
            "title": "عروض مخصصة",
            "subtitle": "صفقات مصممة خصيصاً لك",
            "description": "أجب على بعض الأسئلة وسننشئ عرضاً مخصصاً لتجربتك القادمة مع رولز رويس.",
            "occasion": "ما المناسبة؟",
            "wedding": "زفاف",
            "business": "أعمال",
            "leisure": "ترفيه",
            "specialEvent": "مناسبة خاصة",
            "carPreference": "الطراز المفضل",
            "getOffer": "احصل على عرضي",
            "welcome": {
                "title": "مرحباً بعودتك، {name}!",
                "description": "كعميل مميز، لديك عروض حصرية في انتظارك."
            }
        },
        "common": {
            "bookNow": "احجز الآن",
            "learnMore": "اعرف المزيد",
            "viewDetails": "عرض التفاصيل",
            "contactUs": "اتصل بنا",
            "getQuote": "احصل على عرض سعر",
            "reserveNow": "احجز الآن",
            "explore": "استكشف",
            "submit": "إرسال",
            "send": "إرسال رسالة",
            "call": "اتصل بنا",
            "whatsapp": "واتساب",
            "email": "البريد الإلكتروني",
            "address": "عنواننا",
            "loading": "جارٍ التحميل...",
            "error": "حدث خطأ. يرجى المحاولة مرة أخرى.",
            "success": "تم بنجاح!",
            "all": "الكل",
            "select": "اختر",
            "optional": "اختياري",
            "required": "مطلوب",
            "of": "من",
            "rollsRoyceDubai": "رولز رويس دبي",
            "rollsRoyceRental": "تأجير رولز رويس",
            "luxuryCarRental": "تأجير سيارات فاخرة",
            "readyToExperience": "هل أنت مستعد لتجربة الفخامة؟",
            "bookYourRollsRoyce": "احجز رولز رويس اليوم واستمتع بقمة تجربة فاخرة لا مثيل لها.",
            "viewPricing": "عرض الأسعار",
            "frequentlyAskedQuestions": "الأسئلة الشائعة",
            "everythingYouNeedToKnow": "كل ما تحتاج معرفته",
            "specialOffers": "عروض خاصة",
            "limitedTimeDeals": "عروض لفترة محدودة",
            "offersEndIn": "تنتهي العروض في",
            "useCode": "استخدم الرمز",
            "verifiedCustomer": "عميل موثق",
            "shareYourStory": "شارك قصتك",
            "claimYourOffer": "احصل على عرضك",
            "termsApply": "*تطبق الشروط والأحكام",
            "aed": "درهم"
        },
        "cookie": {"acceptAll": "قبول الكل"},
        "nav": {"bookingLink": "احجز الآن"},
        "about": {"readMore": "اقرأ المزيد"},
        "fleet": {
            "rentNow": "استأجر الآن",
            "from": "من",
            "performance": "الأداء",
            "convertibleTech": "تكنولوجيا الكابريوليه"
        },
        "services": {
            "weddingTitle": "خدمة سيارات الزفاف",
            "corporateTitle": "الخدمات المؤسسية",
            "airportTitle": "النقل من المطار",
            "chauffeurTitle": "خدمة السائق",
            "eventsTitle": "خدمة الفعاليات"
        },
        "offers": {
            "viewAll": "عرض جميع العروض",
            "bookOffer": "احجز العرض"
        },
        "reviews": {
            "title": "آراء العملاء",
            "subtitle": "ما يقوله عملاؤنا",
            "rating": "تقييم",
            "reviews": "تقييمات",
            "verified": "عميل موثق",
            "readAll": "قراءة جميع التقييمات",
            "writeReview": "اكتب تقييم",
            "averageRating": "متوسط التقييم",
            "totalReviews": "إجمالي التقييمات",
            "recommended": "يوصون بنا",
            "basedOn": "بناءً على"
        },
        "loyalty": {
            "silver": "فضي",
            "gold": "ذهبي",
            "platinum": "بلاتيني"
        },
        "footer": {
            "quickLinks": "روابط سريعة",
            "ourServices": "خدماتنا",
            "legalInfo": "المعلومات القانونية",
            "copyright": "© 2026 رولز رويس دبي. جميع الحقوق محفوظة.",
            "privacyLink": "سياسة الخصوصية"
        },
        "videoGallery": {
            "title": "معرض الفيديو",
            "subtitle": "شاهد رولز رويس في العمل",
            "categories": {"all": "الكل", "exterior": "الخارج", "interior": "الداخل", "driving": "القيادة", "events": "الفعاليات", "reviews": "التقييمات"},
            "play": "تشغيل",
            "pause": "إيقاف",
            "mute": "كتم الصوت",
            "unmute": "إلغاء كتم الصوت",
            "fullscreen": "شاشة كاملة",
            "duration": "المدة",
            "views": "مشاهدات",
            "watchMore": "شاهد المزيد",
            "loading": "جارٍ التحميل...",
            "error": "خطأ في تحميل الفيديو",
            "shareVideo": "مشاركة الفيديو"
        },
        "priceCalculator": {
            "title": "حاسبة الأسعار",
            "subtitle": "احسب تكلفة التأجير",
            "selectVehicle": "اختر السيارة",
            "rentalDuration": "مدة التأجير",
            "days": "أيام",
            "extras": "إضافات",
            "chauffeur": "سائق خاص",
            "insurance": "تأمين شامل",
            "totalPrice": "السعر الإجمالي",
            "perDay": "في اليوم",
            "calculate": "احسب السعر",
            "getQuote": "احصل على عرض سعر",
            "disclaimer": "الأسعار تقديرية وقد تختلف حسب التوفر والموسم."
        },
        "placeholders": {
            "fullName": "الاسم الكامل",
            "email": "البريد الإلكتروني",
            "phone": "رقم الهاتف",
            "message": "رسالتك",
            "date": "اختر التاريخ",
            "location": "اختر الموقع",
            "vehicle": "اختر السيارة",
            "search": "بحث..."
        }
    }},
    "hi": {"common": {
        "navigation": {
            "fleet": "बेड़ा",
            "services": "सेवाएं",
            "locations": "स्थान",
            "pricing": "मूल्य निर्धारण"
        },
        "search": {
            "title": "खोज",
            "subtitle": "सही लक्जरी कार रेंटल सेवा खोजें",
            "placeholder": "कारें, सेवाएं, स्थान खोजें...",
            "search": "खोजें",
            "searching": "खोज रहा है...",
            "resultsFor": "के लिए परिणाम",
            "noResults": "कोई परिणाम नहीं मिला",
            "noResultsDesc": "अलग कीवर्ड से खोजें या हमारी मुख्य श्रेणियां ब्राउज़ करें:",
            "popular": "लोकप्रिय खोजें"
        },
        "contact": {
            "title": "संपर्क करें",
            "subtitle": "हमारे लक्जरी कार रेंटल विशेषज्ञों से बात करें",
            "form": {
                "title": "हमें संदेश भेजें",
                "name": {"label": "पूरा नाम", "placeholder": "राज शर्मा"},
                "email": {"label": "ईमेल पता", "placeholder": "raj@example.com"},
                "phone": {"label": "फोन नंबर", "placeholder": "+971 55 816 4922"},
                "subject": {"label": "विषय", "placeholder": "रेंटल पूछताछ"},
                "message": {"label": "संदेश", "placeholder": "हमें अपनी आवश्यकताओं के बारे में बताएं..."},
                "submit": "संदेश भेजें",
                "sending": "भेज रहा है...",
                "success": "आपका संदेश सफलतापूर्वक भेजा गया! हम जल्द ही संपर्क करेंगे।",
                "error": "संदेश भेजने में त्रुटि। कृपया पुनः प्रयास करें।"
            },
            "info": {
                "title": "संपर्क जानकारी",
                "phone": {"label": "फोन", "value": "+971 55 816 4922"},
                "email": {"label": "ईमेल", "value": "info@rollsroycers.com"},
                "whatsapp": {"label": "व्हाट्सएप", "value": "+971 55 816 4922"},
                "address": {"label": "पता", "value": "शेख जायद रोड, दुबई, यूएई"},
                "hours": {"label": "कार्य समय", "value": "24/7 उपलब्ध"}
            },
            "map": {"title": "हमारा स्थान"}
        },
        "gallery": {
            "hero": {"title": "गैलरी", "subtitle": "रोल्स रॉयस लक्जरी की दुनिया में डूबें"},
            "categories": {
                "all": "सभी", "exterior": "बाहरी", "interior": "आंतरिक",
                "details": "विवरण", "events": "कार्यक्रम", "locations": "स्थान",
                "photoshoot": "फोटोशूट", "lifestyle": "जीवन शैली"
            },
            "videoGallery": {"title": "वीडियो गैलरी"},
            "instagram": {"title": "इंस्टाग्राम पर फॉलो करें", "handle": "@rollsroycers"},
            "virtualTour": {"title": "360° वर्चुअल टूर", "description": "हमारी कारों को हर कोण से देखें"},
            "cta": {"title": "फोटोशूट बुक करें", "description": "हमारे बेड़े के साथ एक विशेष फोटोशूट बुक करें", "button": "अभी बुक करें"}
        },
        "checkAvailability": {
            "title": "वाहन उपलब्धता जांचें",
            "subtitle": "अपनी पसंदीदा तारीखों के लिए अपना पसंदीदा रोल्स रॉयस मॉडल आरक्षित करें।",
            "pickupDate": "पिकअप तारीख",
            "returnDate": "वापसी तारीख",
            "pickupLocation": "पिकअप स्थान",
            "returnLocation": "वापसी स्थान",
            "check": "उपलब्धता जांचें",
            "availability": "उपलब्धता स्थिति",
            "available": "उपलब्ध",
            "notAvailable": "उपलब्ध नहीं",
            "contactForDetails": "विवरण के लिए संपर्क करें",
            "calendar": {"selectDate": "तारीख चुनें", "today": "आज", "tomorrow": "कल"},
            "selectedVehicle": "चयनित वाहन"
        },
        "virtualShowroom": {
            "title": "वर्चुअल शोरूम अनुभव",
            "description": "हमारे लक्जरी शोरूम का 360° वर्चुअल टूर लें",
            "cta": "वर्चुअल टूर शुरू करें"
        },
        "virtualTour": {
            "title": "360° वर्चुअल अनुभव",
            "subtitle": "कहीं से भी हर विवरण का अन्वेषण करें",
            "interiorSuffix": "इंटीरियर",
            "alt": {"interiorView": "आंतरिक दृश्य"},
            "controls": {"zoom": "ज़ूम", "fullscreen": "फुल स्क्रीन", "exit": "बाहर", "interactiveTour": "इंटरैक्टिव टूर"},
            "centerText": {"logo": "RR", "instruction": "अन्वेषण करने के लिए हॉटस्पॉट पर क्लिक करें"},
            "features": {
                "interactiveControls": {"title": "इंटरैक्टिव नियंत्रण", "description": "हर विवरण का पता लगाने के लिए ज़ूम, पैन और रोटेट का उपयोग करें"},
                "multipleAngles": {"title": "कई कोण", "description": "आगे, पीछे, बगल और अंदर से देखें"},
                "hotspots": {"title": "जानकारी बिंदु", "description": "विशिष्ट सुविधाओं के बारे में अधिक जानने के लिए हॉटस्पॉट पर क्लिक करें"},
                "fullscreen": {"title": "फुल स्क्रीन मोड", "description": "फुल स्क्रीन मोड में एक immersive अनुभव का आनंद लें"},
                "deviceSupport": {"title": "सभी डिवाइस सपोर्ट", "description": "डेस्कटॉप, मोबाइल और टैबलेट पर काम करता है"}
            }
        },
        "testimonialSubmission": {
            "shareExperience": {
                "title": "अपना अनुभव साझा करें",
                "description": "हम आपकी हमारे साथ यात्रा के बारे में सुनना चाहते हैं। आपकी प्रतिक्रिया हमें सुधारने में मदद करती है और दूसरों को प्रेरित करती है।"
            },
            "stories": {
                "title": "प्रेरणादायक कहानियां",
                "story1": {
                    "quote": "रोल्स रॉयस डॉन की बदौलत सबसे यादगार सालगिरह ड्राइव।",
                    "author": "शर्मा परिवार",
                    "name": "राज शर्मा",
                    "location": "दुबई, यूएई",
                    "occasion": "शादी का जश्न",
                    "rating": 5,
                    "date": "जनवरी 2026",
                    "vehicle": "Rolls-Royce Dawn",
                    "review": "बुकिंग से लेकर डिलीवरी तक, सब कुछ बेहतरीन था। रोल्स रॉयस डॉन हमारी सालगिरह के लिए एकदम सही विकल्प थी।",
                    "verified": True
                },
                "story2": {
                    "quote": "बेजोड़ सेवा ने हमारे कॉर्पोरेट इवेंट को वाकई अविस्मरणीय बना दिया।",
                    "author": "कैपिटल इन्वेस्टमेंट्स",
                    "name": "प्रिया पटेल",
                    "location": "अबू धाबी, यूएई",
                    "occasion": "कॉर्पोरेट इवेंट",
                    "rating": 5,
                    "date": "दिसंबर 2025",
                    "vehicle": "Rolls-Royce Phantom",
                    "review": "रोल्स रॉयस फैंटम ने हमारे कॉर्पोरेट इवेंट में परिष्कार का एक स्तर जोड़ा। हर साथी प्रभावित था।",
                    "verified": True
                }
            }
        },
        "testimonialsPage": {
            "title": "ग्राहक प्रशंसापत्र",
            "subtitle": "जानें कि हमारे ग्राहक अपने सबसे महत्वपूर्ण क्षणों के लिए रोल्स रॉयस दुबई को क्यों चुनते हैं",
            "stats": {"averageRating": "औसत रेटिंग", "recommendationRate": "सिफारिश दर", "countriesServed": "सेवा प्राप्त देश"},
            "filters": {"allReviews": "सभी समीक्षाएं", "wedding": "शादी", "corporate": "कॉर्पोरेट", "tourism": "पर्यटन", "events": "कार्यक्रम"},
            "labels": {"experienceHighlights": "अनुभव की मुख्य बातें", "customerPhotos": "ग्राहक फोटो"}
        },
        "personalizedOffers": {
            "title": "व्यक्तिगत ऑफर",
            "subtitle": "आपके लिए विशेष रूप से तैयार किए गए सौदे",
            "description": "कुछ सवालों का जवाब दें और हम आपके अगले रोल्स रॉयस अनुभव के लिए एक व्यक्तिगत ऑफर तैयार करेंगे।",
            "occasion": "अवसर क्या है?",
            "wedding": "शादी",
            "business": "व्यापार",
            "leisure": "मनोरंजन",
            "specialEvent": "विशेष अवसर",
            "carPreference": "पसंदीदा मॉडल",
            "getOffer": "मेरा ऑफर पाएं",
            "welcome": {"title": "वापसी पर स्वागत है, {name}!", "description": "एक मूल्यवान ग्राहक के रूप में, आपके लिए विशेष ऑफर प्रतीक्षा कर रहे हैं।"}
        },
        "hero": {
            "title": "दुबई में लक्जरी रोल्स रॉयस रेंटल",
            "subtitle": "अंतिम लक्जरी अनुभव",
            "description": "दुबई में प्रीमियम रोल्स रॉयस रेंटल सेवा। पेशेवर ड्राइवर, 24/7 सेवा, मुफ्त डिलीवरी।",
            "cta": "अभी बुक करें",
            "exploreCta": "बेड़ा देखें"
        },
        "common": {
            "bookNow": "अभी बुक करें",
            "learnMore": "और जानें",
            "viewDetails": "विवरण देखें",
            "contactUs": "संपर्क करें",
            "getQuote": "कोटेशन प्राप्त करें",
            "reserveNow": "अभी आरक्षित करें",
            "explore": "अन्वेषण करें",
            "submit": "सबमिट करें",
            "send": "संदेश भेजें",
            "call": "कॉल करें",
            "whatsapp": "व्हाट्सएप करें",
            "email": "ईमेल करें",
            "address": "हमारा पता",
            "loading": "लोड हो रहा है...",
            "error": "एक त्रुटि हुई। कृपया पुनः प्रयास करें।",
            "success": "सफल!",
            "all": "सभी",
            "select": "चुनें",
            "optional": "वैकल्पिक",
            "required": "आवश्यक",
            "of": "का",
            "rollsRoyceDubai": "रोल्स रॉयस दुबई",
            "rollsRoyceRental": "रोल्स रॉयस रेंटल",
            "luxuryCarRental": "लक्जरी कार रेंटल",
            "readyToExperience": "लक्जरी का अनुभव करने के लिए तैयार हैं?",
            "bookYourRollsRoyce": "आज ही अपनी रोल्स रॉयस बुक करें और बेजोड़ लक्जरी अनुभव का आनंद लें।",
            "viewPricing": "मूल्य देखें",
            "frequentlyAskedQuestions": "अक्सर पूछे जाने वाले प्रश्न",
            "everythingYouNeedToKnow": "वो सब कुछ जो आपको जानना चाहिए",
            "specialOffers": "विशेष ऑफर",
            "limitedTimeDeals": "सीमित समय के सौदे",
            "offersEndIn": "ऑफर समाप्त होने में",
            "useCode": "कोड का उपयोग करें",
            "verifiedCustomer": "सत्यापित ग्राहक",
            "shareYourStory": "अपनी कहानी साझा करें",
            "claimYourOffer": "अपना ऑफर प्राप्त करें",
            "termsApply": "*नियम और शर्तें लागू",
            "aed": "AED"
        },
        "about": {
            "title": "हमारे बारे में",
            "subtitle": "दुबई की प्रीमियम रोल्स रॉयस रेंटल सेवा",
            "readMore": "और पढ़ें",
            "story": {
                "title": "हमारी कहानी",
                "description": "2010 से, रोल्स रॉयसर्स दुबई में प्रीमियम लक्जरी कार रेंटल सेवा प्रदान कर रहा है।"
            },
            "mission": {"title": "हमारा मिशन", "description": "दुबई में सबसे विशिष्ट और व्यक्तिगत रोल्स रॉयस अनुभव प्रदान करना।"},
            "values": {"title": "हमारे मूल्य", "excellence": "उत्कृष्टता", "service": "सेवा", "trust": "विश्वास", "innovation": "नवाचार"},
            "team": {"title": "हमारी टीम", "description": "पेशेवर और अनुभवी ड्राइवरों और सेवा विशेषज्ञों की टीम।"},
            "stats": {
                "clients": "10,000+",
                "clientsLabel": "खुश ग्राहक",
                "experience": "15+",
                "experienceLabel": "वर्षों का अनुभव",
                "fleet": "20+",
                "fleetLabel": "लक्जरी वाहन",
                "rating": "4.9",
                "ratingLabel": "गूगल रेटिंग"
            },
            "certifications": {"title": "प्रमाणपत्र और पुरस्कार"},
            "partners": {"title": "हमारे भागीदार"},
            "cta": {"title": "रोल्स रॉयस बुक करें", "description": "आज ही अपनी लक्जरी यात्रा शुरू करें", "button": "अभी बुक करें"}
        },
        "cookie": {"acceptAll": "सभी स्वीकार करें"},
        "nav": {"bookingLink": "अभी बुक करें"},
        "home": {
            "featuredFleet": "विशेष बेड़ा",
            "ourServices": "हमारी सेवाएं",
            "whyChooseUs": "हमें क्यों चुनें"
        },
        "fleet": {
            "rentNow": "अभी किराए पर लें",
            "from": "से",
            "performance": "प्रदर्शन",
            "convertibleTech": "कन्वर्टिबल तकनीक",
            "aed": "AED",
            "perDay": "/दिन"
        },
        "services": {
            "weddingTitle": "शादी कार सेवा",
            "corporateTitle": "कॉर्पोरेट सेवाएं",
            "airportTitle": "एयरपोर्ट ट्रांसफर",
            "chauffeurTitle": "ड्राइवर सेवा",
            "eventsTitle": "इवेंट सेवा"
        },
        "offers": {
            "viewAll": "सभी ऑफर देखें",
            "bookOffer": "ऑफर बुक करें"
        },
        "reviews": {
            "title": "ग्राहक समीक्षाएं",
            "subtitle": "हमारे ग्राहक क्या कहते हैं",
            "rating": "रेटिंग",
            "reviews": "समीक्षाएं",
            "verified": "सत्यापित ग्राहक",
            "readAll": "सभी समीक्षाएं पढ़ें",
            "writeReview": "समीक्षा लिखें",
            "averageRating": "औसत रेटिंग",
            "totalReviews": "कुल समीक्षाएं",
            "recommended": "हमें सुझाते हैं",
            "basedOn": "आधारित",
            "googleReviews": "गूगल समीक्षाएं",
            "response": "प्रतिक्रिया",
            "helpful": "सहायक",
            "date": "तारीख",
            "service": "सेवा"
        },
        "loyalty": {"silver": "सिल्वर", "gold": "गोल्ड", "platinum": "प्लेटिनम"},
        "footer": {
            "quickLinks": "त्वरित लिंक",
            "ourServices": "हमारी सेवाएं",
            "legalInfo": "कानूनी जानकारी",
            "copyright": "© 2026 रोल्स रॉयस दुबई। सर्वाधिकार सुरक्षित।",
            "privacyLink": "गोपनीयता नीति"
        },
        "priceCalculator": {
            "title": "मूल्य कैलकुलेटर",
            "subtitle": "रेंटल लागत की गणना करें",
            "selectVehicle": "वाहन चुनें",
            "rentalDuration": "रेंटल अवधि",
            "days": "दिन",
            "extras": "अतिरिक्त",
            "chauffeur": "निजी ड्राइवर",
            "insurance": "व्यापक बीमा",
            "totalPrice": "कुल मूल्य",
            "perDay": "प्रति दिन",
            "calculate": "मूल्य गणना करें",
            "getQuote": "कोटेशन प्राप्त करें",
            "disclaimer": "कीमतें अनुमानित हैं और उपलब्धता और मौसम के अनुसार भिन्न हो सकती हैं।",
            "deposit": "जमा राशि",
            "mileage": "किलोमीटर",
            "delivery": "डिलीवरी",
            "free": "मुफ्त"
        },
        "placeholders": {
            "fullName": "पूरा नाम",
            "email": "ईमेल पता",
            "phone": "फोन नंबर",
            "message": "आपका संदेश",
            "date": "तारीख चुनें",
            "location": "स्थान चुनें",
            "vehicle": "वाहन चुनें",
            "search": "खोजें...",
            "selectOption": "विकल्प चुनें"
        },
        "videoGallery": {
            "shareVideo": "वीडियो साझा करें",
            "watchMore": "और देखें"
        }
    }},
    "ru": {"common": {
        "navigation": {
            "fleet": "Автопарк",
            "services": "Услуги",
            "locations": "Локации",
            "pricing": "Цены"
        },
        "search": {
            "title": "Поиск",
            "subtitle": "Найдите идеальную услугу аренды люксовых автомобилей",
            "placeholder": "Ищите автомобили, услуги, локации...",
            "search": "Поиск",
            "searching": "Поиск...",
            "resultsFor": "Результаты для",
            "noResults": "Ничего не найдено",
            "noResultsDesc": "Попробуйте другие ключевые слова или просмотрите наши основные категории:",
            "popular": "Популярные запросы"
        },
        "contact": {
            "title": "Свяжитесь с нами",
            "subtitle": "Обратитесь к нашим экспертам по аренде люксовых автомобилей",
            "form": {
                "title": "Отправить сообщение",
                "name": {"label": "Полное имя", "placeholder": "Иван Петров"},
                "email": {"label": "Email", "placeholder": "ivan@example.com"},
                "phone": {"label": "Телефон", "placeholder": "+971 55 816 4922"},
                "subject": {"label": "Тема", "placeholder": "Запрос на аренду"},
                "message": {"label": "Сообщение", "placeholder": "Расскажите нам о ваших потребностях..."},
                "submit": "Отправить сообщение",
                "sending": "Отправка...",
                "success": "Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.",
                "error": "Ошибка отправки. Пожалуйста, попробуйте ещё раз."
            },
            "info": {
                "title": "Контактная информация",
                "phone": {"label": "Телефон", "value": "+971 55 816 4922"},
                "email": {"label": "Email", "value": "info@rollsroycers.com"},
                "whatsapp": {"label": "WhatsApp", "value": "+971 55 816 4922"},
                "address": {"label": "Адрес", "value": "Шейх Заед Роуд, Дубай, ОАЭ"},
                "hours": {"label": "Часы работы", "value": "Доступно 24/7"}
            },
            "map": {"title": "Наше расположение"}
        },
        "gallery": {
            "hero": {"title": "Галерея", "subtitle": "Погрузитесь в мир роскоши Rolls-Royce"},
            "categories": {
                "all": "Все", "exterior": "Экстерьер", "interior": "Интерьер",
                "details": "Детали", "events": "Мероприятия", "locations": "Локации",
                "photoshoot": "Фотосессия", "lifestyle": "Стиль жизни"
            },
            "videoGallery": {"title": "Видеогалерея"},
            "instagram": {"title": "Подписывайтесь в Instagram", "handle": "@rollsroycers"},
            "virtualTour": {"title": "360° Виртуальный тур", "description": "Исследуйте наши автомобили со всех сторон"},
            "cta": {"title": "Забронировать фотосессию", "description": "Закажите эксклюзивную фотосессию с нашим автопарком", "button": "Забронировать"}
        },
        "checkAvailability": {
            "title": "Проверить наличие автомобиля",
            "subtitle": "Забронируйте предпочитаемую модель Rolls-Royce на нужные даты.",
            "pickupDate": "Дата получения",
            "returnDate": "Дата возврата",
            "pickupLocation": "Место получения",
            "returnLocation": "Место возврата",
            "check": "Проверить наличие",
            "availability": "Статус наличия",
            "available": "Доступен",
            "notAvailable": "Недоступен",
            "contactForDetails": "Свяжитесь для уточнения",
            "calendar": {"selectDate": "Выберите дату", "today": "Сегодня", "tomorrow": "Завтра"},
            "selectedVehicle": "Выбранный автомобиль"
        },
        "testimonialSubmission": {
            "shareExperience": {
                "title": "Поделитесь впечатлениями",
                "description": "Мы будем рады узнать о вашем опыте с нами. Ваш отзыв помогает нам совершенствоваться и вдохновляет других."
            },
            "stories": {
                "title": "Вдохновляющие истории",
                "story1": {
                    "quote": "Самая запоминающаяся поездка на годовщину благодаря потрясающему Rolls-Royce Dawn.",
                    "author": "Семья Аль-Хатиб",
                    "name": "Ахмед Аль-Рашид",
                    "location": "Дубай, ОАЭ",
                    "occasion": "Свадебное торжество",
                    "rating": 5,
                    "date": "Январь 2026",
                    "vehicle": "Rolls-Royce Dawn",
                    "review": "От бронирования до доставки — всё было безупречно. Rolls-Royce Dawn стал идеальным выбором для нашей годовщины.",
                    "verified": True
                },
                "story2": {
                    "quote": "Непревзойдённый сервис сделал наше корпоративное мероприятие поистине незабываемым.",
                    "author": "Capital Investments",
                    "name": "Сара Аль-Мансури",
                    "location": "Абу-Даби, ОАЭ",
                    "occasion": "Корпоративное мероприятие",
                    "rating": 5,
                    "date": "Декабрь 2025",
                    "vehicle": "Rolls-Royce Phantom",
                    "review": "Rolls-Royce Phantom добавил уровень изысканности нашему корпоративному мероприятию. Каждый партнёр был впечатлён.",
                    "verified": True
                }
            }
        },
        "personalizedOffers": {
            "title": "Персональные предложения",
            "subtitle": "Специальные предложения для вас",
            "description": "Ответьте на несколько вопросов, и мы создадим персональное предложение для вашего следующего опыта с Rolls-Royce.",
            "occasion": "Какой повод?",
            "wedding": "Свадьба",
            "business": "Бизнес",
            "leisure": "Отдых",
            "specialEvent": "Особое мероприятие",
            "carPreference": "Предпочитаемая модель",
            "getOffer": "Получить предложение",
            "welcome": {"title": "С возвращением, {name}!", "description": "Как ценный клиент, для вас подготовлены эксклюзивные предложения."}
        },
        "servicesPages": {
            "corporate": {
                "hero": {
                    "title": "Корпоративная аренда Rolls-Royce",
                    "subtitle": "Поднимите имидж вашего бизнеса в Дубае",
                    "description": "Впечатлите клиентов, поощрите руководителей и путешествуйте с непревзойдённым стилем с нашими корпоративными услугами аренды Rolls-Royce.",
                    "cta": "Запросить корпоративное предложение",
                    "stats": {"fortune500": "Клиенты Fortune 500", "onTime": "Вовремя"}
                }
            },
            "wedding": {
                "hero": {
                    "title": "Свадебный Rolls-Royce в Дубае",
                    "subtitle": "Сделайте ваш особенный день незабываемым"
                }
            }
        },
        "common": {
            "bookNow": "Забронировать",
            "learnMore": "Подробнее",
            "viewDetails": "Подробнее",
            "contactUs": "Связаться",
            "getQuote": "Получить цену",
            "reserveNow": "Забронировать",
            "explore": "Исследовать",
            "submit": "Отправить",
            "send": "Отправить сообщение",
            "call": "Позвонить",
            "whatsapp": "WhatsApp",
            "email": "Email",
            "address": "Наш адрес",
            "loading": "Загрузка...",
            "error": "Произошла ошибка. Попробуйте ещё раз.",
            "success": "Успешно!",
            "all": "Все",
            "select": "Выбрать",
            "optional": "Необязательно",
            "required": "Обязательно",
            "of": "из",
            "rollsRoyceDubai": "Rolls-Royce Дубай",
            "rollsRoyceRental": "Аренда Rolls-Royce",
            "luxuryCarRental": "Аренда люксовых авто",
            "readyToExperience": "Готовы к роскоши?",
            "bookYourRollsRoyce": "Забронируйте Rolls-Royce сегодня и ощутите вершину роскоши.",
            "viewPricing": "Посмотреть цены",
            "frequentlyAskedQuestions": "Часто задаваемые вопросы",
            "everythingYouNeedToKnow": "Всё, что нужно знать",
            "specialOffers": "Специальные предложения",
            "limitedTimeDeals": "Ограниченные предложения",
            "offersEndIn": "Предложения заканчиваются через",
            "useCode": "Используйте код",
            "verifiedCustomer": "Проверенный клиент",
            "shareYourStory": "Поделитесь историей",
            "claimYourOffer": "Получить предложение",
            "termsApply": "*Действуют условия и положения",
            "aed": "AED"
        },
        "cookie": {"acceptAll": "Принять все"},
        "fleet": {"convertibleTech": "Технология кабриолета"},
        "offers": {"viewAll": "Все предложения", "bookOffer": "Забронировать"},
        "reviews": {
            "title": "Отзывы клиентов",
            "subtitle": "Что говорят наши клиенты",
            "rating": "Рейтинг",
            "reviews": "Отзывы",
            "verified": "Проверенный клиент",
            "readAll": "Все отзывы",
            "writeReview": "Написать отзыв",
            "averageRating": "Средний рейтинг",
            "totalReviews": "Всего отзывов",
            "recommended": "Рекомендуют нас",
            "basedOn": "На основании"
        },
        "loyalty": {"silver": "Серебро", "gold": "Золото", "platinum": "Платина"},
        "footer": {
            "quickLinks": "Быстрые ссылки",
            "ourServices": "Наши услуги",
            "legalInfo": "Правовая информация",
            "copyright": "© 2026 Rolls-Royce Дубай. Все права защищены.",
            "privacyLink": "Политика конфиденциальности"
        },
        "priceCalculator": {
            "title": "Калькулятор цен",
            "subtitle": "Рассчитайте стоимость аренды",
            "selectVehicle": "Выберите автомобиль",
            "rentalDuration": "Срок аренды",
            "days": "дней",
            "extras": "Дополнительно",
            "chauffeur": "Личный водитель",
            "insurance": "Полная страховка",
            "totalPrice": "Общая стоимость",
            "perDay": "в день",
            "calculate": "Рассчитать цену",
            "getQuote": "Получить расчёт",
            "disclaimer": "Цены ориентировочные и могут варьироваться в зависимости от наличия и сезона.",
            "deposit": "Залог",
            "mileage": "Пробег",
            "delivery": "Доставка",
            "free": "Бесплатно"
        },
        "placeholders": {
            "fullName": "Полное имя",
            "email": "Email",
            "phone": "Номер телефона",
            "message": "Ваше сообщение",
            "date": "Выберите дату",
            "location": "Выберите локацию",
            "vehicle": "Выберите автомобиль",
            "search": "Поиск...",
            "selectOption": "Выберите вариант"
        },
        "videoGallery": {
            "title": "Видеогалерея",
            "subtitle": "Смотрите Rolls-Royce в действии",
            "shareVideo": "Поделиться видео",
            "watchMore": "Смотреть ещё",
            "loading": "Загрузка..."
        },
        "blog": {
            "title": "Блог",
            "readMore": "Читать далее",
            "latestPosts": "Последние статьи",
            "categories": "Категории",
            "tags": "Теги"
        }
    }},
    "fr": {"common": {
        "navigation": {
            "fleet": "Flotte",
            "services": "Services",
            "locations": "Emplacements",
            "pricing": "Tarifs"
        },
        "search": {
            "title": "Recherche",
            "subtitle": "Trouvez le service de location de voiture de luxe idéal",
            "placeholder": "Rechercher des voitures, services, emplacements...",
            "search": "Rechercher",
            "searching": "Recherche en cours...",
            "resultsFor": "Résultats pour",
            "noResults": "Aucun résultat trouvé",
            "noResultsDesc": "Essayez de rechercher avec d'autres mots-clés ou parcourez nos catégories principales :",
            "popular": "Recherches populaires"
        },
        "reviews": {
            "title": "Avis clients",
            "subtitle": "Ce que disent nos clients",
            "rating": "Note",
            "reviews": "Avis",
            "verified": "Client vérifié",
            "readAll": "Lire tous les avis",
            "writeReview": "Écrire un avis",
            "averageRating": "Note moyenne",
            "totalReviews": "Nombre total d'avis",
            "recommended": "Nous recommandent",
            "basedOn": "Basé sur",
            "googleReviews": "Avis Google",
            "response": "Réponse",
            "helpful": "Utile",
            "date": "Date",
            "service": "Service"
        },
        "cookie": {"acceptAll": "Tout accepter"},
        "home": {"whyChooseUs": "Pourquoi nous choisir"},
        "fleet": {"convertibleTech": "Technologie cabriolet"},
        "offers": {"viewAll": "Voir toutes les offres", "bookOffer": "Réserver l'offre"},
        "loyalty": {"silver": "Argent", "gold": "Or", "platinum": "Platine"},
        "footer": {
            "quickLinks": "Liens rapides",
            "ourServices": "Nos services",
            "legalInfo": "Informations juridiques"
        },
        "testimonialSubmission": {"shareExperience": {"description": "Nous aimerions en savoir plus sur votre expérience avec nous. Vos retours nous aident à nous améliorer."}},
        "tripPlanner": {
            "selectVehicle": "Sélectionnez un véhicule",
            "selectDate": "Sélectionnez une date",
            "selectTime": "Sélectionnez l'heure",
            "pickupLocation": "Lieu de prise en charge",
            "dropoffLocation": "Lieu de dépose",
            "addStop": "Ajouter un arrêt",
            "removeStop": "Supprimer l'arrêt",
            "estimatedCost": "Coût estimé",
            "duration": "Durée",
            "distance": "Distance",
            "planTrip": "Planifier le trajet",
            "yourItinerary": "Votre itinéraire"
        },
        "personalizedOffers": {
            "title": "Offres personnalisées",
            "subtitle": "Des offres sur mesure pour vous",
            "description": "Répondez à quelques questions et nous créerons une offre personnalisée pour votre prochaine expérience Rolls-Royce.",
            "occasion": "Quelle est l'occasion ?",
            "wedding": "Mariage",
            "business": "Affaires",
            "leisure": "Loisirs",
            "specialEvent": "Événement spécial"
        },
        "videoGallery": {
            "title": "Galerie vidéo",
            "subtitle": "Regardez Rolls-Royce en action",
            "categories": {"all": "Tout", "exterior": "Extérieur", "interior": "Intérieur", "driving": "Conduite", "events": "Événements", "reviews": "Avis"},
            "play": "Lecture",
            "pause": "Pause",
            "mute": "Couper le son",
            "unmute": "Activer le son",
            "fullscreen": "Plein écran",
            "duration": "Durée",
            "views": "Vues",
            "watchMore": "Voir plus",
            "loading": "Chargement..."
        },
        "contact": {
            "form": {
                "name": {"label": "Nom complet", "placeholder": "Jean Dupont"},
                "subject": {"label": "Sujet", "placeholder": "Demande de location"},
                "message": {"label": "Message", "placeholder": "Décrivez-nous vos besoins..."},
                "sending": "Envoi en cours..."
            },
            "info": {
                "hours": {"label": "Heures d'ouverture", "value": "Disponible 24h/24"},
                "address": {"label": "Adresse", "value": "Sheikh Zayed Road, Dubaï, EAU"}
            }
        },
        "checkAvailability": {
            "title": "Vérifier la disponibilité",
            "subtitle": "Réservez votre modèle Rolls-Royce préféré aux dates souhaitées.",
            "pickupDate": "Date de prise en charge",
            "returnDate": "Date de retour",
            "pickupLocation": "Lieu de prise en charge",
            "returnLocation": "Lieu de retour",
            "check": "Vérifier la disponibilité",
            "availability": "Statut de disponibilité",
            "available": "Disponible",
            "notAvailable": "Non disponible",
            "contactForDetails": "Contactez-nous pour plus de détails"
        },
        "priceCalculator": {
            "selectVehicle": "Sélectionnez un véhicule",
            "rentalDuration": "Durée de location",
            "extras": "Suppléments",
            "chauffeur": "Chauffeur privé",
            "insurance": "Assurance complète",
            "totalPrice": "Prix total"
        },
        "placeholders": {
            "fullName": "Nom complet",
            "email": "Adresse email",
            "phone": "Numéro de téléphone",
            "message": "Votre message"
        },
        "compareFleet": {
            "comfort": "Confort & Commodité",
            "technology": "Technologie & Innovation",
            "pricing": "Tarifs & Forfaits",
            "metrics": {"key": "Métriques clés"}
        }
    }},
    "zh": {"common": {
        "navigation": {
            "fleet": "车队",
            "services": "服务",
            "locations": "地点",
            "pricing": "定价"
        },
        "search": {
            "title": "搜索",
            "subtitle": "寻找完美的豪华汽车租赁服务",
            "placeholder": "搜索汽车、服务、地点...",
            "search": "搜索",
            "searching": "搜索中...",
            "resultsFor": "搜索结果",
            "noResults": "未找到结果",
            "noResultsDesc": "尝试使用不同的关键词或浏览我们的主要类别：",
            "popular": "热门搜索"
        },
        "personalizedOffers": {
            "title": "个性化优惠",
            "subtitle": "为您量身定制的优惠",
            "description": "回答几个问题，我们将为您的下一次劳斯莱斯体验创建个性化优惠。",
            "occasion": "什么场合？",
            "wedding": "婚礼",
            "business": "商务",
            "leisure": "休闲",
            "specialEvent": "特殊活动",
            "carPreference": "首选车型",
            "getOffer": "获取我的优惠",
            "welcome": {"title": "欢迎回来，{name}！", "description": "作为尊贵客户，专属优惠正在等待您。"}
        },
        "servicesPages": {
            "corporate": {
                "hero": {
                    "title": "企业劳斯莱斯租赁",
                    "subtitle": "提升您在迪拜的商业形象",
                    "description": "用我们的企业劳斯莱斯租赁服务打动客户、奖励高管、以无与伦比的风格出行。",
                    "cta": "请求企业报价",
                    "stats": {"fortune500": "财富500强客户", "onTime": "准时到达"}
                }
            },
            "wedding": {
                "hero": {
                    "title": "迪拜劳斯莱斯婚车",
                    "subtitle": "让您的特别日子难以忘怀"
                }
            }
        },
        "priceCalculator": {
            "title": "价格计算器",
            "subtitle": "计算租赁费用",
            "selectVehicle": "选择车辆",
            "rentalDuration": "租赁期限",
            "days": "天",
            "extras": "附加服务",
            "chauffeur": "私人司机",
            "insurance": "全面保险",
            "totalPrice": "总价",
            "perDay": "每天",
            "calculate": "计算价格",
            "getQuote": "获取报价",
            "disclaimer": "价格为估算值，可能因供应情况和季节而异。",
            "deposit": "押金",
            "mileage": "里程",
            "delivery": "送车",
            "free": "免费"
        },
        "hero": {"cta": "立即预订", "exploreCta": "浏览车队"},
        "cookie": {"acceptAll": "全部接受"},
        "fleet": {"convertibleTech": "敞篷技术"},
        "services": {"weddingTitle": "婚车服务", "corporateTitle": "企业服务", "eventsTitle": "活动服务"},
        "offers": {"viewAll": "查看所有优惠", "bookOffer": "预订优惠"},
        "reviews": {"googleReviews": "谷歌评价", "response": "回复", "helpful": "有帮助"},
        "loyalty": {"silver": "银卡", "gold": "金卡", "platinum": "铂金卡"},
        "footer": {
            "quickLinks": "快速链接",
            "ourServices": "我们的服务",
            "legalInfo": "法律信息",
            "copyright": "© 2026 劳斯莱斯迪拜。版权所有。"
        },
        "testimonialSubmission": {"shareExperience": {"description": "我们很想听听您与我们的旅程。您的反馈帮助我们改进。"}},
        "videoGallery": {
            "title": "视频画廊",
            "subtitle": "观看劳斯莱斯实况",
            "shareVideo": "分享视频",
            "watchMore": "观看更多",
            "loading": "加载中..."
        },
        "contact": {
            "form": {
                "name": {"label": "全名", "placeholder": "张伟"},
                "subject": {"label": "主题", "placeholder": "租赁咨询"},
                "message": {"label": "消息", "placeholder": "告诉我们您的需求..."},
                "sending": "发送中..."
            },
            "info": {
                "hours": {"label": "营业时间", "value": "全天候24/7"},
                "address": {"label": "地址", "value": "谢赫扎耶德路，迪拜，阿联酋"}
            }
        },
        "checkAvailability": {
            "title": "查看车辆可用性",
            "subtitle": "预订您心仪的劳斯莱斯车型。",
            "pickupDate": "取车日期",
            "returnDate": "还车日期",
            "pickupLocation": "取车地点",
            "returnLocation": "还车地点",
            "check": "查看可用性",
            "availability": "可用状态",
            "available": "可用",
            "notAvailable": "不可用",
            "contactForDetails": "联系我们了解详情"
        },
        "placeholders": {
            "fullName": "全名",
            "email": "电子邮箱",
            "phone": "电话号码",
            "message": "您的消息",
            "search": "搜索..."
        },
        "compareFleet": {
            "comfort": "舒适与便利",
            "technology": "科技与创新",
            "pricing": "定价与套餐",
            "metrics": {"key": "关键指标"}
        }
    }}
}

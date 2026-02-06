"""Batch 4a: Fill all remaining partial gaps for AR"""
DATA = {"ar": {"common": {
    "about": {"virtualShowroom": {"title": "صالة العرض الافتراضية", "description": "جولة افتراضية 360° في صالة العرض", "cta": "ابدأ الجولة"}},
    "virtualTour": {
        "cta": {"title": "احجز جولة خاصة", "description": "احجز جولة شخصية مع فريقنا", "button": "احجز الآن"},
        "spots": {"starlight": {"title": "سقف النجوم", "description": "سقف مرصع بالنجوم مصنوع يدوياً"}, "spirit": {"title": "روح النشوة", "description": "تمثال روح النشوة الأيقوني"}}
    },
    "fleet": {"luxuryFeatures": "مميزات الفخامة", "virtualTourSpots": {"title": "نقاط الجولة الافتراضية", "description": "استكشف التفاصيل الداخلية"}},
    "services": {"title": "خدماتنا", "subtitle": "خدمات تأجير رولز رويس المتميزة", "concierge": "خدمة الكونسيرج", "delivery": "خدمة التوصيل", "hourly": "تأجير بالساعة"},
    "cookie": {"learnMore": "اعرف المزيد"},
    "offers": {"title": "عروضنا", "subtitle": "عروض حصرية على تأجير رولز رويس"},
    "reviews": {
        "overallRating": "التقييم العام", "reviewsCount": "عدد التقييمات",
        "review3": {"name": "خالد المنصوري", "rating": 5, "text": "خدمة ممتازة وسيارات نظيفة جداً. أنصح بشدة!", "date": "نوفمبر 2025", "service": "تأجير ذاتي"},
        "review4": {"name": "ليلى أحمد", "rating": 5, "text": "حجزت كولينان لرحلة عائلية وكانت تجربة رائعة.", "date": "أكتوبر 2025", "service": "رحلات"},
        "review5": {"name": "عمر حسن", "rating": 5, "text": "أفضل خدمة تأجير سيارات فاخرة في دبي بلا منازع.", "date": "سبتمبر 2025", "service": "سائق خاص"},
        "review6": {"name": "فاطمة الراشد", "rating": 5, "text": "سيارة فانتوم كانت مثالية لحفل زفافنا.", "date": "أغسطس 2025", "service": "زفاف"},
        "review7": {"name": "سعيد العلي", "rating": 4, "text": "تجربة مميزة مع غوست. التوصيل كان في الموعد.", "date": "يوليو 2025", "service": "نقل مطار"},
        "review8": {"name": "مريم خالد", "rating": 5, "text": "خدمة عملاء ممتازة على مدار الساعة.", "date": "يونيو 2025", "service": "فعاليات"},
        "review9": {"name": "أحمد البلوشي", "rating": 5, "text": "استأجرت داون لجلسة تصوير. نتائج مذهلة!", "date": "مايو 2025", "service": "جلسة تصوير"}
    },
    "loyalty": {
        "enroll": "سجل الآن",
        "faq": {"title": "أسئلة شائعة عن برنامج الولاء", "q1": "كيف أكسب النقاط؟", "a1": "تكسب نقاطاً مع كل حجز.", "q2": "متى تنتهي صلاحية النقاط؟", "a2": "النقاط صالحة لمدة 12 شهراً."},
        "journey": {"title": "رحلتك في الولاء", "description": "ابدأ رحلتك نحو مكافآت حصرية"}
    },
    "footer": {
        "contact": {"phone": "+971 55 816 4922", "email": "info@rollsroycers.com", "address": "شارع الشيخ زايد، دبي"},
        "description": "خدمة تأجير رولز رويس المتميزة في دبي. فخامة لا مثيل لها مع توصيل مجاني.",
        "links": {"about": "عن الشركة", "fleet": "الأسطول", "services": "الخدمات", "contact": "اتصل بنا", "blog": "المدونة", "faq": "أسئلة شائعة", "terms": "الشروط", "privacy": "الخصوصية"},
        "social": {"facebook": "فيسبوك", "instagram": "إنستغرام", "twitter": "تويتر", "youtube": "يوتيوب", "linkedin": "لينكد إن"}
    },
    "testimonialSubmission": {"form": {"name": "الاسم", "email": "البريد الإلكتروني", "vehicle": "السيارة", "rating": "التقييم", "review": "تقييمك", "submit": "إرسال التقييم", "success": "شكراً لمشاركة تجربتك!"}},
    "personalizedOffers": {"notFound": "لم نجد عروضاً مطابقة. جرب خيارات أخرى."},
    "videoGallery": {
        "description": "شاهد أسطولنا من رولز رويس في أجمل مواقع دبي",
        "dawn": "رولز رويس داون", "ghost": "رولز رويس غوست", "wraith": "رولز رويس رايث",
        "dubai": "دبي", "interior": "الداخل", "night": "ليلاً",
        "featured": "مميز", "loadMore": "تحميل المزيد",
        "modal": {"close": "إغلاق", "share": "مشاركة"},
        "playlist": {"title": "قائمة التشغيل", "next": "التالي", "previous": "السابق"},
        "showroom": "صالة العرض", "watch": "شاهد الفيديو",
        "filters": {"all": "الكل", "phantom": "فانتوم", "ghost": "غوست", "cullinan": "كولينان", "dawn": "داون", "wraith": "رايث"}
    },
    "contact": {
        "hero": {"title": "اتصل بنا", "subtitle": "نحن هنا لمساعدتك"},
        "businessHours": {"title": "ساعات العمل", "weekdays": "الإثنين - الجمعة: 24/7", "weekends": "السبت - الأحد: 24/7", "note": "متاح على مدار الساعة"},
        "contactMethods": {"title": "طرق التواصل", "phone": {"title": "الهاتف", "description": "اتصل بنا مباشرة"}, "whatsapp": {"title": "واتساب", "description": "راسلنا على واتساب"}, "email": {"title": "البريد الإلكتروني", "description": "أرسل لنا بريداً"}},
        "faq": {"title": "أسئلة شائعة", "q1": {"question": "كيف أحجز؟", "answer": "يمكنك الحجز عبر الموقع أو الاتصال بنا."}, "q2": {"question": "هل التوصيل مجاني؟", "answer": "نعم، التوصيل مجاني في جميع أنحاء دبي."}, "q3": {"question": "ما هو الحد الأدنى لمدة التأجير؟", "answer": "الحد الأدنى يوم واحد."}},
        "socialMedia": {"title": "تابعنا", "facebook": "فيسبوك", "instagram": "إنستغرام", "twitter": "تويتر"}
    },
    "servicesPages": {
        "corporate": {
            "hero": {"title": "تأجير رولز رويس للشركات", "subtitle": "ارتقِ بصورة عملك في دبي", "description": "أبهر العملاء وكافئ المدراء وسافر بأناقة لا مثيل لها مع خدمات تأجير رولز رويس للشركات.", "cta": "اطلب عرض سعر للشركات", "stats": {"fortune500": "عملاء فورتشن 500", "onTime": "في الموعد"}},
            "benefits": {"title": "مزايا الخدمة المؤسسية", "impression": {"title": "انطباع أول مميز", "description": "اترك انطباعاً لا يُنسى على عملائك"}, "flexibility": {"title": "مرونة كاملة", "description": "جداول مرنة تناسب احتياجات عملك"}, "fleet": {"title": "أسطول متنوع", "description": "اختر من بين 5 طرازات رولز رويس"}},
            "packages": {"title": "باقات الشركات", "daily": {"title": "يومي", "price": "من 3,500 درهم/يوم"}, "weekly": {"title": "أسبوعي", "price": "من 20,000 درهم/أسبوع"}, "monthly": {"title": "شهري", "price": "من 65,000 درهم/شهر"}}
        },
        "wedding": {
            "hero": {"title": "رولز رويس للزفاف في دبي", "subtitle": "اجعل يومك المميز لا يُنسى", "description": "أضف لمسة من الفخامة ليوم زفافك مع خدمة سيارات رولز رويس.", "cta": "احجز سيارة الزفاف"},
            "packages": {"title": "باقات الزفاف", "classic": {"title": "الباقة الكلاسيكية", "price": "من 5,000 درهم"}, "premium": {"title": "الباقة المميزة", "price": "من 8,000 درهم"}, "royal": {"title": "الباقة الملكية", "price": "من 15,000 درهم"}}
        },
        "airport": {
            "hero": {"title": "نقل المطار بالرولز رويس", "subtitle": "وصول واستقبال فاخر", "description": "ابدأ أو انهِ رحلتك بأناقة مع خدمة النقل من وإلى المطار.", "cta": "احجز نقل المطار"},
            "airports": {"dxb": "مطار دبي الدولي (DXB)", "dwc": "مطار آل مكتوم الدولي (DWC)"}
        },
        "chauffeur": {
            "hero": {"title": "خدمة سائق رولز رويس", "subtitle": "سائقون محترفون على مدار الساعة", "description": "استمتع بالراحة التامة مع سائقينا المحترفين.", "cta": "احجز سائقاً خاصاً"}
        },
        "events": {
            "hero": {"title": "رولز رويس للفعاليات", "subtitle": "أضف لمسة فاخرة لفعاليتك", "description": "سواء كانت فعالية شركات أو حفل خاص، نوفر النقل الفاخر.", "cta": "احجز للفعالية"}
        },
        "tours": {
            "hero": {"title": "جولات رولز رويس في دبي", "subtitle": "اكتشف دبي بفخامة", "description": "استكشف أجمل معالم دبي على متن رولز رويس.", "cta": "احجز جولة"}
        },
        "photoshoot": {
            "hero": {"title": "جلسات تصوير رولز رويس", "subtitle": "صور احترافية مع سيارات فاخرة", "description": "احجز جلسة تصوير خاصة مع أي طراز من أسطولنا.", "cta": "احجز جلسة تصوير"}
        }
    },
    "checkAvailability": {"cars": {"phantom": "فانتوم", "ghost": "غوست", "cullinan": "كولينان", "dawn": "داون", "wraith": "رايث"}, "selectYourRR": "اختر رولز رويس المفضلة لديك"},
    "priceCalculator": {"delivery": "التوصيل", "duration": {"daily": "يومي", "weekly": "أسبوعي", "monthly": "شهري"}, "estimatedPrice": "السعر التقديري", "model": "الموديل"},
    "placeholders": {"businessEmail": "email@company.com", "companyName": "اسم الشركة", "johnDoe": "أحمد محمد", "name": "الاسم", "rentalInquiry": "استفسار عن التأجير"},
    "compareFleet": {
        "actions": {"bookNow": "احجز الآن", "viewDetails": "عرض التفاصيل", "getQuote": "احصل على عرض سعر", "compare": "قارن"},
        "bestFor": {"wedding": "الأفضل للزفاف", "corporate": "الأفضل للشركات", "touring": "الأفضل للجولات", "airport": "الأفضل للمطار", "photoshoot": "الأفضل للتصوير", "events": "الأفضل للفعاليات", "family": "الأفضل للعائلات"},
        "cars": {"phantom": {"name": "رولز رويس فانتوم", "tagline": "قمة الفخامة"}, "ghost": {"name": "رولز رويس غوست", "tagline": "الأناقة الحديثة"}, "cullinan": {"name": "رولز رويس كولينان", "tagline": "ملك الطرقات"}, "dawn": {"name": "رولز رويس داون", "tagline": "فخامة مكشوفة"}, "wraith": {"name": "رولز رويس رايث", "tagline": "القوة الأنيقة"}},
        "closeModal": "إغلاق المقارنة", "comfort": "الراحة والملاءمة", "compareButton": "قارن المختار ({{count}})",
        "features": {"exterior": "الخارج", "interior": "الداخل", "technology": "التكنولوجيا"},
        "luxury": "مميزات الفخامة",
        "metrics": {"power": "القوة", "speed": "السرعة القصوى", "acceleration": "التسارع", "seats": "المقاعد", "trunk": "صندوق السيارة", "fuel": "استهلاك الوقود"},
        "modalTitle": "مقارنة الأسطول", "performance": "الأداء والقدرات", "pricing": "الأسعار والباقات",
        "resetSelection": "إعادة الاختيار", "specifications": "المواصفات الفنية",
        "startComparison": "بدء مقارنة جديدة", "technology": "التكنولوجيا والابتكار", "viewDetails": "عرض التفاصيل"
    },
    "locations": {"downtown": "وسط دبي"},
    "privacy": {
        "consent": {"title": "موافقتك", "description": "باستخدام خدماتنا، أنت توافق على سياسة الخصوصية هذه."},
        "cta": {"title": "هل لديك أسئلة؟", "description": "اتصل بنا لأي استفسار عن الخصوصية.", "button": "اتصل بنا"},
        "relatedPolicies": {"title": "سياسات ذات صلة", "terms": "الشروط والأحكام", "cookies": "سياسة ملفات تعريف الارتباط"}
    },
    "gallery": {
        "descriptions": {"phantom": "رولز رويس فانتوم - قمة الفخامة", "ghost": "رولز رويس غوست - أناقة عصرية", "cullinan": "رولز رويس كولينان - فخامة على الطرق الوعرة"},
        "vehicles": {"phantom": "فانتوم", "ghost": "غوست", "cullinan": "كولينان", "dawn": "داون", "wraith": "رايث"},
        "videos": {"title": "مقاطع فيديو", "description": "شاهد أسطولنا في العمل"}
    },
    "testimonialsPage": {"cta": {"title": "شارك تجربتك", "description": "نود سماع قصتك معنا", "button": "اكتب تقييم"}}
}}}

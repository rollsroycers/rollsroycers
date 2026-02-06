"""Mop up ALL remaining missing keys: compareFleet details, checkAvailability, fleet stragglers, contact"""
DATA = {
    "ar": {"common": {
        "compareFleet": {
            "actions": {"bookSelected": "احجز السيارة المختارة", "contactUs": "تواصل مع فريقنا", "requestQuote": "اطلب عرض سعر مخصص", "viewFleet": "عرض الأسطول الكامل"},
            "bestFor": {"title": "الأفضل لـ", "business": "الشركات والأعمال", "leisure": "الترفيه والسياحة", "photography": "جلسات التصوير"},
            "cars": {
                "cullinan": {"category": "SUV فاخرة فائقة", "bestFor": ["العائلة", "الترفيه", "الأعمال"], "specs": {"engine": "6.75L V12 توربو مزدوج"}, "standardFeatures": ["دفع رباعي", "تعليق هوائي", "سقف بانورامي", "نظام كاميرا 360 درجة"], "uniqueFeatures": ["قدرة لجميع التضاريس", "جناح المشاهدة", "خيار زجاج فاصل", "وحدة الترفيه"]},
                "dawn": {"category": "مكشوفة فاخرة", "bestFor": ["الزفاف", "التصوير", "الترفيه"], "specs": {"engine": "6.6L V12 توربو مزدوج"}, "standardFeatures": ["مصابيح أمامية تكيفية", "نظام صوتي متميز", "تكييف هواء", "داخلية جلدية"], "uniqueFeatures": ["تشغيل سقف صامت", "تدفئة الرقبة", "تحسين مساحة الصندوق", "تجربة قيادة مكشوفة"]},
                "ghost": {"category": "سيدان فاخرة", "bestFor": ["الأعمال", "المطار", "الترفيه"], "specs": {"engine": "6.75L V12 توربو مزدوج"}, "standardFeatures": ["نظام دفع رباعي", "مثبت سرعة تكيفي", "شاشة عرض أمامية", "شحن لاسلكي"], "uniqueFeatures": ["نظام تعليق بلانار", "واجهة مضيئة", "تنقية البيئة المصغرة", "مقصورة هامسة الهدوء"]},
                "phantom": {"category": "سيدان فائقة الفخامة", "bestFor": ["الزفاف", "الأعمال", "التصوير"], "specs": {"engine": "6.75L V12 توربو مزدوج"}, "standardFeatures": ["داخلية جلدية يدوية الصنع", "نظام صوتي متميز", "شاشات ترفيه خلفية", "إضاءة محيطية"], "uniqueFeatures": ["سقف النجوم بـ 1,340 ضوء", "تعليق السجادة السحرية", "حجرة خلفية Gallery", "مبرد شامبانيا وكؤوس كريستال"]},
                "wraith": {"category": "جران تورر كوبيه", "bestFor": ["الأعمال", "التصوير", "الترفيه"], "specs": {"engine": "6.6L V12 توربو مزدوج"}, "standardFeatures": ["ناقل حركة أوتوماتيكي 8 سرعات", "تعليق تكيفي", "نظام صوتي مخصص", "نظام ملاحة"], "uniqueFeatures": ["ناقل حركة بالأقمار الصناعية", "سقف النجوم", "أبواب انتحارية", "أقوى رولز رويس"]}
            },
            "features": {"optionalFeatures": "إضافات اختيارية", "standardFeatures": "تجهيزات قياسية", "uniqueFeatures": "ميزات فريدة"},
            "featureCategories": {"bestFor": "الأفضل لـ", "keyFeatures": "الميزات الرئيسية"},
            "metrics": {"comfort": "راحة الركاب", "luxury": "تجربة الفخامة", "performance": "أداء القيادة", "presence": "الحضور على الطريق", "technology": "ابتكار تقني", "versatility": "التنوع"}
        },
        "checkAvailability": {
            "cars": {"cullinan": {"name": "رولز رويس كولينان"}, "dawn": {"name": "رولز رويس داون"}, "ghost": {"name": "رولز رويس غوست"}, "phantom": {"name": "رولز رويس فانتوم"}, "wraith": {"name": "رولز رويس رايث"}}
        }
    }},
    "hi": {"common": {
        "compareFleet": {
            "actions": {"bookSelected": "चयनित वाहन बुक करें", "contactUs": "हमारी टीम से संपर्क करें", "requestQuote": "कस्टम कोट अनुरोध करें", "viewFleet": "पूरा फ्लीट देखें"},
            "bestFor": {"title": "सबसे अच्छा", "business": "कॉर्पोरेट और बिज़नेस", "leisure": "लेज़र और टूरिज़्म", "photography": "फोटो शूट"},
            "cars": {
                "cullinan": {"category": "अल्ट्रा-लग्ज़री SUV", "bestFor": ["परिवार", "लेज़र", "बिज़नेस"], "specs": {"engine": "6.75L V12 ट्विन-टर्बो"}, "standardFeatures": ["ऑल-व्हील ड्राइव", "एयर सस्पेंशन", "पैनोरमिक सनरूफ", "360-डिग्री कैमरा"], "uniqueFeatures": ["ऑल-टेरेन क्षमता", "व्यूइंग सुइट सीटिंग", "पार्टीशन ग्लास ऑप्शन", "रिक्रिएशन मॉड्यूल"]},
                "dawn": {"category": "लग्ज़री कन्वर्टिबल", "bestFor": ["वेडिंग", "फोटोग्राफी", "लेज़र"], "specs": {"engine": "6.6L V12 ट्विन-टर्बो"}, "standardFeatures": ["एडैप्टिव हेडलाइट्स", "प्रीमियम ऑडियो", "क्लाइमेट कंट्रोल", "लेदर इंटीरियर"], "uniqueFeatures": ["साइलेंट सॉफ्ट-टॉप", "एयरस्कार्फ नेक वार्मर", "बूट स्पेस ऑप्टिमाइज़ेशन", "ओपन-एयर ड्राइविंग"]},
                "ghost": {"category": "लग्ज़री सेडान", "bestFor": ["बिज़नेस", "एयरपोर्ट", "लेज़र"], "specs": {"engine": "6.75L V12 ट्विन-टर्बो"}, "standardFeatures": ["ऑल-व्हील ड्राइव", "एडैप्टिव क्रूज़ कंट्रोल", "हेड-अप डिस्प्ले", "वायरलेस चार्जिंग"], "uniqueFeatures": ["प्लानर सस्पेंशन", "इल्यूमिनेटेड फेसिया", "माइक्रो-एनवायरनमेंट", "व्हिस्पर-क्वाइट केबिन"]},
                "phantom": {"category": "अल्ट्रा-लग्ज़री सेडान", "bestFor": ["वेडिंग", "बिज़नेस", "फोटोग्राफी"], "specs": {"engine": "6.75L V12 ट्विन-टर्बो"}, "standardFeatures": ["हैंडक्राफ्टेड लेदर इंटीरियर", "प्रीमियम साउंड सिस्टम", "रियर एंटरटेनमेंट स्क्रीन", "एम्बिएंट लाइटिंग"], "uniqueFeatures": ["1,340 लाइट्स स्टारलाइट हेडलाइनर", "मैजिक कारपेट राइड सस्पेंशन", "Gallery रियर कम्पार्टमेंट", "शैंपेन कूलर और क्रिस्टल ग्लासेज़"]},
                "wraith": {"category": "ग्रैंड टूरर कूपे", "bestFor": ["बिज़नेस", "फोटोग्राफी", "लेज़र"], "specs": {"engine": "6.6L V12 ट्विन-टर्बो"}, "standardFeatures": ["8-स्पीड ऑटोमैटिक", "एडैप्टिव सस्पेंशन", "कस्टम ऑडियो", "नेविगेशन"], "uniqueFeatures": ["सैटेलाइट एडेड ट्रांसमिशन", "स्टारलाइट हेडलाइनर", "सुसाइड डोर्स", "सबसे शक्तिशाली रोल्स-रॉयस"]}
            },
            "features": {"optionalFeatures": "वैकल्पिक एक्स्ट्रा", "standardFeatures": "स्टैंडर्ड इक्विपमेंट", "uniqueFeatures": "यूनीक फीचर्स"},
            "featureCategories": {"bestFor": "सबसे अच्छा", "keyFeatures": "मुख्य विशेषताएं"},
            "metrics": {"comfort": "यात्री आराम", "luxury": "लग्ज़री अनुभव", "performance": "ड्राइविंग परफॉर्मेंस", "presence": "रोड प्रेज़ेंस", "technology": "टेक इनोवेशन", "versatility": "वर्सेटिलिटी"}
        },
        "checkAvailability": {
            "cars": {"cullinan": {"name": "रोल्स-रॉयस कलिनन"}, "dawn": {"name": "रोल्स-रॉयस डॉन"}, "ghost": {"name": "रोल्स-रॉयस घोस्ट"}, "phantom": {"name": "रोल्स-रॉयस फैंटम"}, "wraith": {"name": "रोल्स-रॉयस रेथ"}}
        }
    }},
    "ru": {"common": {
        "compareFleet": {
            "actions": {"bookSelected": "Забронировать выбранный", "contactUs": "Связаться с нами", "requestQuote": "Запросить индивидуальное предложение", "viewFleet": "Весь автопарк"},
            "bestFor": {"title": "Лучший выбор для", "business": "Бизнес и корпоративы", "leisure": "Отдых и туризм", "photography": "Фотосессии"},
            "cars": {
                "cullinan": {"category": "Ультра-люкс внедорожник", "bestFor": ["семья", "отдых", "бизнес"], "specs": {"engine": "6.75L V12 Twin-Turbo"}, "standardFeatures": ["Полный привод", "Пневмоподвеска", "Панорамная крыша", "Камера 360°"], "uniqueFeatures": ["Вездеходные возможности", "Viewing Suite", "Стеклянная перегородка", "Модуль для отдыха"]},
                "dawn": {"category": "Люксовый кабриолет", "bestFor": ["свадьба", "фотосессия", "отдых"], "specs": {"engine": "6.6L V12 Twin-Turbo"}, "standardFeatures": ["Адаптивные фары", "Премиум-аудио", "Климат-контроль", "Кожаный салон"], "uniqueFeatures": ["Бесшумная крыша", "Обогрев шеи Airscarf", "Оптимизация багажника", "Езда на свежем воздухе"]},
                "ghost": {"category": "Люксовый седан", "bestFor": ["бизнес", "аэропорт", "отдых"], "specs": {"engine": "6.75L V12 Twin-Turbo"}, "standardFeatures": ["Полный привод", "Адаптивный круиз", "Проекция на стекло", "Беспроводная зарядка"], "uniqueFeatures": ["Подвеска Planar", "Светящаяся панель", "Очистка микросреды", "Бесшумный салон"]},
                "phantom": {"category": "Ультра-люкс седан", "bestFor": ["свадьба", "бизнес", "фотосессия"], "specs": {"engine": "6.75L V12 Twin-Turbo"}, "standardFeatures": ["Кожаный салон ручной работы", "Премиум-аудио", "Задние экраны", "Подсветка салона"], "uniqueFeatures": ["Звёздное небо 1,340 огней", "Подвеска «Ковёр-самолёт»", "Задний отсек Gallery", "Охладитель шампанского"]},
                "wraith": {"category": "Гранд-турер купе", "bestFor": ["бизнес", "фотосессия", "отдых"], "specs": {"engine": "6.6L V12 Twin-Turbo"}, "standardFeatures": ["8-ст. автомат", "Адаптивная подвеска", "Аудио Bespoke", "Навигация"], "uniqueFeatures": ["Спутниковая трансмиссия", "Звёздное небо", "Двери-«самоубийцы»", "Самый мощный Rolls-Royce"]}
            },
            "features": {"optionalFeatures": "Дополнительные опции", "standardFeatures": "Стандартное оснащение", "uniqueFeatures": "Уникальные особенности"},
            "featureCategories": {"bestFor": "Лучший выбор для", "keyFeatures": "Ключевые особенности"},
            "metrics": {"comfort": "Комфорт пассажиров", "luxury": "Люксовый опыт", "performance": "Динамика вождения", "presence": "Дорожное присутствие", "technology": "Технологичность", "versatility": "Универсальность"}
        },
        "checkAvailability": {
            "calendar": {"available": "Доступен", "selectDate": "Выберите дату"}
        }
    }},
    "zh": {"common": {
        "compareFleet": {
            "actions": {"bookSelected": "预订所选车辆", "contactUs": "联系我们团队", "requestQuote": "申请定制报价", "viewFleet": "查看完整车队"},
            "bestFor": {"title": "最适合", "business": "企业商务", "leisure": "休闲旅游", "photography": "摄影拍摄"},
            "cars": {
                "cullinan": {"category": "超豪华SUV", "bestFor": ["家庭", "休闲", "商务"], "specs": {"engine": "6.75L V12双涡轮"}, "standardFeatures": ["全轮驱动", "空气悬挂", "全景天窗", "360度摄像头"], "uniqueFeatures": ["全地形能力", "观景套房座椅", "隔断玻璃选配", "休闲模块"]},
                "dawn": {"category": "豪华敞篷车", "bestFor": ["婚礼", "摄影", "休闲"], "specs": {"engine": "6.6L V12双涡轮"}, "standardFeatures": ["自适应大灯", "顶级音响", "气候控制", "皮革内饰"], "uniqueFeatures": ["静音软顶操作", "颈部暖风", "后备箱空间优化", "露天驾驶体验"]},
                "ghost": {"category": "豪华轿车", "bestFor": ["商务", "机场", "休闲"], "specs": {"engine": "6.75L V12双涡轮"}, "standardFeatures": ["全轮驱动", "自适应巡航", "抬头显示", "无线充电"], "uniqueFeatures": ["Planar悬挂系统", "发光面板", "微环境净化", "静谧座舱"]},
                "phantom": {"category": "超豪华轿车", "bestFor": ["婚礼", "商务", "摄影"], "specs": {"engine": "6.75L V12双涡轮"}, "standardFeatures": ["手工皮革内饰", "顶级音响系统", "后排娱乐屏幕", "氛围灯"], "uniqueFeatures": ["1,340颗光纤星光顶", "魔毯般驾乘悬挂", "Gallery后舱", "香槟冷藏柜和水晶杯"]},
                "wraith": {"category": "GT轿跑", "bestFor": ["商务", "摄影", "休闲"], "specs": {"engine": "6.6L V12双涡轮"}, "standardFeatures": ["8速自动变速箱", "自适应悬挂", "定制音响", "导航系统"], "uniqueFeatures": ["卫星辅助变速箱", "星光顶", "对开门", "最强劲劳斯莱斯"]}
            },
            "features": {"optionalFeatures": "可选配置", "standardFeatures": "标准配置", "uniqueFeatures": "独特配置"},
            "featureCategories": {"bestFor": "最适合", "keyFeatures": "核心配置"},
            "metrics": {"comfort": "乘坐舒适度", "luxury": "奢华体验", "performance": "驾驶性能", "presence": "道路气场", "technology": "科技创新", "versatility": "多功能性"}
        }
    }},
    "fr": {"common": {
        "compareFleet": {
            "actions": {"bookSelected": "Réserver le véhicule", "contactUs": "Contacter notre équipe", "requestQuote": "Demander un devis", "viewFleet": "Voir toute la flotte"},
            "bestFor": {"title": "Idéal pour", "business": "Corporate & Business", "leisure": "Loisirs & Tourisme", "photography": "Séances photo"},
            "cars": {
                "cullinan": {"category": "SUV Ultra-Luxe", "bestFor": ["famille", "loisirs", "business"], "specs": {"engine": "6.75L V12 Twin-Turbo"}, "standardFeatures": ["Transmission intégrale", "Suspension pneumatique", "Toit panoramique", "Caméra 360°"], "uniqueFeatures": ["Capacité tout-terrain", "Viewing Suite", "Cloison vitrée", "Module loisirs"]},
                "dawn": {"category": "Cabriolet de luxe", "bestFor": ["mariage", "photographie", "loisirs"], "specs": {"engine": "6.6L V12 Twin-Turbo"}, "standardFeatures": ["Phares adaptatifs", "Audio premium", "Climatisation", "Intérieur cuir"], "uniqueFeatures": ["Toit silencieux", "Airscarf chauffe-nuque", "Coffre optimisé", "Conduite à ciel ouvert"]},
                "ghost": {"category": "Berline de luxe", "bestFor": ["business", "aéroport", "loisirs"], "specs": {"engine": "6.75L V12 Twin-Turbo"}, "standardFeatures": ["Transmission intégrale", "Régulateur adaptatif", "Affichage tête haute", "Charge sans fil"], "uniqueFeatures": ["Suspension Planar", "Façade illuminée", "Purification micro-environnement", "Habitacle ultra-silencieux"]},
                "phantom": {"category": "Berline ultra-luxe", "bestFor": ["mariage", "business", "photographie"], "specs": {"engine": "6.75L V12 Twin-Turbo"}, "standardFeatures": ["Cuir fait main", "Système audio premium", "Écrans arrière", "Éclairage d'ambiance"], "uniqueFeatures": ["Ciel étoilé 1 340 fibres optiques", "Suspension Magic Carpet Ride", "Compartiment arrière Gallery", "Refroidisseur à champagne"]},
                "wraith": {"category": "Grand Tourer Coupé", "bestFor": ["business", "photographie", "loisirs"], "specs": {"engine": "6.6L V12 Twin-Turbo"}, "standardFeatures": ["Boîte auto 8 rapports", "Suspension adaptative", "Audio Bespoke", "Navigation"], "uniqueFeatures": ["Transmission satellite", "Ciel étoilé", "Portes antagonistes", "Rolls-Royce la plus puissante"]}
            },
            "features": {"optionalFeatures": "Options supplémentaires", "standardFeatures": "Équipement de série", "uniqueFeatures": "Caractéristiques uniques"},
            "featureCategories": {"bestFor": "Idéal pour", "keyFeatures": "Caractéristiques clés"},
            "metrics": {"comfort": "Confort passager", "luxury": "Expérience luxe", "performance": "Performance conduite", "presence": "Présence routière", "technology": "Innovation tech", "versatility": "Polyvalence"}
        },
        "contact": {
            "info": {"title": "Nos informations", "hours": "Ouvert 24h/24"}
        }
    }}
}

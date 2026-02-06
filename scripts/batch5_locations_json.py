"""Batch 5: Fill locationsPages in locations.json for all 5 non-EN languages"""
DATA = {
    "ar": {"locations": {"locationsPages": {
        "downtown": {"hero": {"title": "خدمة رولز رويس في وسط دبي", "subtitle": "النقل الفاخر في قلب دبي", "description": "استمتع بخدمة رولز رويس المتميزة في وسط دبي، موطن برج خليفة ودبي مول ونافورة دبي. مثالية لاجتماعات الأعمال ورحلات التسوق والمناسبات الخاصة.", "bookNow": "احجز خدمة وسط دبي"}},
        "marina": {"hero": {"title": "خدمة رولز رويس في دبي مارينا", "subtitle": "نقل فاخر على الواجهة البحرية", "description": "خدمة رولز رويس المتميزة في دبي مارينا. مثالية لفعاليات نادي اليخوت والعشاء على الواجهة البحرية والقيادة على طول ممشى المارينا.", "bookNow": "احجز خدمة المارينا"}},
        "palm": {"hero": {"title": "خدمة رولز رويس في نخلة جميرا", "subtitle": "نقل فاخر في جزيرة الأحلام", "description": "خدمة رولز رويس الحصرية في نخلة جميرا. مثالية لفعاليات أتلانتس وزيارات نوادي الشاطئ والنقل إلى المنتجعات الفاخرة.", "bookNow": "احجز خدمة النخلة"}},
        "businessBay": {"hero": {"title": "خدمة رولز رويس في الخليج التجاري", "subtitle": "نقل مؤسسي متميز", "description": "خدمة رولز رويس الاحترافية في الخليج التجاري. مثالية للاجتماعات والمؤتمرات والنقل التنفيذي على طول قناة دبي.", "bookNow": "احجز خدمة الخليج التجاري"}},
        "jbr": {"hero": {"title": "خدمة رولز رويس في جي بي آر", "subtitle": "نقل فاخر على الشاطئ", "description": "خدمة رولز رويس المتميزة في جي بي آر والممشى. مثالية لفعاليات الشاطئ وأماكن الترفيه والعشاء.", "bookNow": "احجز خدمة جي بي آر"}},
        "difc": {"hero": {"title": "خدمة رولز رويس في DIFC", "subtitle": "نقل متميز في المنطقة المالية", "description": "خدمة رولز رويس الراقية في مركز دبي المالي العالمي. أساسية للمصرفيين واجتماعات الأعمال والفعاليات المؤسسية.", "bookNow": "احجز خدمة DIFC"}}
    }}},
    "hi": {"locations": {"locationsPages": {
        "downtown": {"hero": {"title": "डाउनटाउन दुबई में रोल्स रॉयस सेवा", "subtitle": "दुबई के दिल में लक्जरी ट्रांसपोर्टेशन", "description": "डाउनटाउन दुबई में प्रीमियम रोल्स रॉयस सेवा, बुर्ज खलीफा, दुबई मॉल और दुबई फाउंटेन का घर। व्यावसायिक बैठकों, शॉपिंग और विशेष अवसरों के लिए बिल्कुल सही।", "bookNow": "डाउनटाउन सेवा बुक करें"}},
        "marina": {"hero": {"title": "दुबई मरीना में रोल्स रॉयस सेवा", "subtitle": "वॉटरफ्रंट लक्जरी ट्रांसपोर्टेशन", "description": "दुबई मरीना में प्रीमियम रोल्स रॉयस सेवा। यॉट क्लब इवेंट, वॉटरफ्रंट डाइनिंग और मरीना वॉक ड्राइव के लिए आदर्श।", "bookNow": "मरीना सेवा बुक करें"}},
        "palm": {"hero": {"title": "पाम जुमेराह में रोल्स रॉयस सेवा", "subtitle": "द्वीप स्वर्ग लक्जरी ट्रांसपोर्ट", "description": "पाम जुमेराह पर विशेष रोल्स रॉयस सेवा। एटलांटिस इवेंट, बीच क्लब विज़िट और लक्जरी रिसॉर्ट ट्रांसफर के लिए बिल्कुल सही।", "bookNow": "पाम सेवा बुक करें"}},
        "businessBay": {"hero": {"title": "बिजनेस बे में रोल्स रॉयस सेवा", "subtitle": "कॉर्पोरेट एक्सीलेंस ट्रांसपोर्टेशन", "description": "बिजनेस बे में पेशेवर रोल्स रॉयस सेवा। कॉर्पोरेट मीटिंग, बिजनेस कॉन्फ्रेंस और एक्जीक्यूटिव ट्रांसपोर्टेशन के लिए आदर्श।", "bookNow": "बिजनेस बे सेवा बुक करें"}},
        "jbr": {"hero": {"title": "JBR में रोल्स रॉयस सेवा", "subtitle": "बीचफ्रंट लक्जरी ट्रांसपोर्टेशन", "description": "JBR और द वॉक में प्रीमियम रोल्स रॉयस सेवा। बीच इवेंट, मनोरंजन स्थल और डाइनिंग के लिए बिल्कुल सही।", "bookNow": "JBR सेवा बुक करें"}},
        "difc": {"hero": {"title": "DIFC में रोल्स रॉयस सेवा", "subtitle": "वित्तीय जिला प्रीमियम ट्रांसपोर्ट", "description": "दुबई अंतरराष्ट्रीय वित्तीय केंद्र में एलीट रोल्स रॉयस सेवा। बैंकिंग एक्जीक्यूटिव और कॉर्पोरेट इवेंट के लिए आवश्यक।", "bookNow": "DIFC सेवा बुक करें"}}
    }}},
    "ru": {"locations": {"locationsPages": {
        "downtown": {"hero": {"title": "Rolls-Royce в Даунтауне Дубая", "subtitle": "Люксовый транспорт в центре Дубая", "description": "Премиальный сервис Rolls-Royce в Даунтауне — Бурдж Халифа, Дубай Молл и Фонтан Дубая. Идеально для деловых встреч, шопинга и торжеств.", "bookNow": "Забронировать в Даунтауне"}},
        "marina": {"hero": {"title": "Rolls-Royce в Дубай Марине", "subtitle": "Люкс на набережной", "description": "Премиальный сервис Rolls-Royce в Дубай Марине. Для яхт-клубов, ужинов на набережной и прибрежных поездок.", "bookNow": "Забронировать в Марине"}},
        "palm": {"hero": {"title": "Rolls-Royce на Пальме Джумейра", "subtitle": "Островная роскошь", "description": "Эксклюзивный сервис Rolls-Royce на Пальме. Для мероприятий в Atlantis, пляжных клубов и трансферов в люксовые курорты.", "bookNow": "Забронировать на Пальме"}},
        "businessBay": {"hero": {"title": "Rolls-Royce в Бизнес Бей", "subtitle": "Корпоративный транспорт класса люкс", "description": "Профессиональный сервис Rolls-Royce в Бизнес Бей. Для деловых встреч, конференций и представительского транспорта.", "bookNow": "Забронировать в Бизнес Бей"}},
        "jbr": {"hero": {"title": "Rolls-Royce в JBR", "subtitle": "Пляжный люксовый транспорт", "description": "Премиальный сервис в JBR и The Walk. Для пляжных мероприятий, развлечений и ужинов.", "bookNow": "Забронировать в JBR"}},
        "difc": {"hero": {"title": "Rolls-Royce в DIFC", "subtitle": "Транспорт финансового района", "description": "Элитный сервис в Международном финансовом центре Дубая. Для банкиров, деловых встреч и мероприятий.", "bookNow": "Забронировать в DIFC"}}
    }}},
    "fr": {"locations": {"locationsPages": {
        "downtown": {"hero": {"title": "Service Rolls-Royce à Downtown Dubai", "subtitle": "Transport de luxe au cœur de Dubaï", "description": "Service premium Rolls-Royce à Downtown Dubai, siège du Burj Khalifa, Dubai Mall et de la Fontaine de Dubaï. Idéal pour réunions d'affaires, shopping et occasions spéciales.", "bookNow": "Réserver à Downtown"}},
        "marina": {"hero": {"title": "Service Rolls-Royce à Dubai Marina", "subtitle": "Transport de luxe en bord de mer", "description": "Service premium Rolls-Royce à Dubai Marina. Idéal pour les yacht clubs, dîners en bord de mer et balades côtières.", "bookNow": "Réserver à Marina"}},
        "palm": {"hero": {"title": "Service Rolls-Royce à Palm Jumeirah", "subtitle": "Transport de luxe sur l'île paradisiaque", "description": "Service exclusif Rolls-Royce à Palm Jumeirah. Parfait pour les événements Atlantis, beach clubs et transferts resort.", "bookNow": "Réserver à Palm"}},
        "businessBay": {"hero": {"title": "Service Rolls-Royce à Business Bay", "subtitle": "Transport d'excellence corporate", "description": "Service professionnel Rolls-Royce à Business Bay. Idéal pour réunions, conférences et transport exécutif.", "bookNow": "Réserver à Business Bay"}},
        "jbr": {"hero": {"title": "Service Rolls-Royce à JBR", "subtitle": "Transport de luxe en front de mer", "description": "Service premium à JBR et The Walk. Parfait pour événements de plage, divertissement et restauration.", "bookNow": "Réserver à JBR"}},
        "difc": {"hero": {"title": "Service Rolls-Royce au DIFC", "subtitle": "Transport premium du quartier financier", "description": "Service d'élite au Centre Financier International de Dubaï. Essentiel pour les banquiers et événements corporate.", "bookNow": "Réserver au DIFC"}}
    }}},
    "zh": {"locations": {"locationsPages": {
        "downtown": {"hero": {"title": "迪拜市中心劳斯莱斯服务", "subtitle": "迪拜核心区豪华交通", "description": "迪拜市中心高级劳斯莱斯服务，毗邻哈利法塔、迪拜购物中心和迪拜喷泉。适合商务会议、购物出行和特殊场合。", "bookNow": "预订市中心服务"}},
        "marina": {"hero": {"title": "迪拜码头劳斯莱斯服务", "subtitle": "海滨豪华交通", "description": "迪拜码头高级劳斯莱斯服务。适合游艇俱乐部活动、海滨餐饮和码头步行街兜风。", "bookNow": "预订码头服务"}},
        "palm": {"hero": {"title": "棕榈岛劳斯莱斯服务", "subtitle": "岛屿天堂豪华交通", "description": "棕榈岛专属劳斯莱斯服务。适合亚特兰蒂斯活动、沙滩俱乐部和豪华度假村接送。", "bookNow": "预订棕榈岛服务"}},
        "businessBay": {"hero": {"title": "商业湾劳斯莱斯服务", "subtitle": "企业卓越交通", "description": "商业湾专业劳斯莱斯服务。适合企业会议、商务会议和迪拜运河沿线行政交通。", "bookNow": "预订商业湾服务"}},
        "jbr": {"hero": {"title": "JBR劳斯莱斯服务", "subtitle": "海滨豪华交通", "description": "JBR和步行街高级劳斯莱斯服务。适合海滩活动、娱乐场所和餐饮。", "bookNow": "预订JBR服务"}},
        "difc": {"hero": {"title": "DIFC劳斯莱斯服务", "subtitle": "金融区高端交通", "description": "迪拜国际金融中心精英劳斯莱斯服务。银行高管、金融会议和企业活动必备。", "bookNow": "预订DIFC服务"}}
    }}}
}

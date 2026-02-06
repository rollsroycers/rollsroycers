"""servicesPages + compareFleet translations for all 5 languages"""
DATA = {
    "ar": {"common": {
        "servicesPages": {
            "corporate": {
                "benefits": {
                    "title": "فوائد لعملك",
                    "financial": {"title": "فوائد مالية", "description": "فوترة موحدة وأسعار شفافة وتعرفات مؤسسية تنافسية."},
                    "operational": {"title": "كفاءة تشغيلية", "description": "وفر الوقت مع عملية الحجز السهلة والخدمة الموثوقة والدقيقة."},
                    "service": {"title": "خدمة محسنة", "description": "قدم تجربة نقل متميزة لعملائك وموظفيك."}
                },
                "caseStudies": {
                    "title": "قصص نجاح",
                    "bank": {"title": "بنك استثمار عالمي", "challenge": "احتاجوا نقلاً موثوقاً لجولة ترويجية مالية لمدة 5 أيام.", "solution": "وفرنا غوست مخصصة مع سائق محترف لإدارة جدول معقد بسلاسة.", "result": "أشاد الرئيس التنفيذي بالتجربة السلسة."},
                    "tech": {"title": "مؤتمر تقني دولي", "challenge": "احتاجوا نقل VIP لـ 20 متحدثاً رئيسياً.", "solution": "نسقنا أسطولاً من 10 فانتوم وغوست مع مرسل مركزي.", "result": "وصل جميع المتحدثين في الوقت المحدد وبراحة تامة."}
                },
                "clients": {"title": "موثوق من الشركات الرائدة", "description": "نفتخر بخدمة مجموعة متنوعة من العملاء المؤسسيين."},
                "cta": {"button": "تواصل مع المبيعات المؤسسية", "description": "تواصل مع فريق الحسابات المؤسسية اليوم لإنشاء حل نقل مخصص.", "title": "ناقش احتياجاتك المؤسسية"},
                "hero": {"cta": "اطلب عرض سعر مؤسسي", "description": "أبهر العملاء وكافئ المدراء وتنقل بأسلوب لا مثيل له مع خدمات تأجير رولز رويس المؤسسية.", "stats": {"chauffeurs": "سائقون مؤسسيون", "fortune500": "عملاء Fortune 500", "onTime": "معدل الوصول في الوقت", "satisfaction": "رضا العملاء"}},
                "packages": {
                    "title": "الباقات المؤسسية",
                    "conference": {"title": "نقل المؤتمرات والفعاليات", "description": "انقل فريقك أو عملاءك إلى الفعاليات بفخامة منسقة.", "price": "عرض سعر مخصص"},
                    "executive": {"title": "توصيل المطار التنفيذي", "description": "خدمة استقبال سلسة من جميع مطارات دبي.", "price": "من AED 800"},
                    "partnership": {"title": "شراكة مؤسسية طويلة الأمد", "description": "خدمات بعقد لاحتياجات النقل التنفيذي المستمرة.", "price": "استفسر للتفاصيل"},
                    "roadshow": {"title": "جولات ترويجية مالية", "description": "جداول رحلات معقدة ومتعددة المحطات يديرها فريقنا اللوجستي.", "price": "أسعار يومية/أسبوعية"}
                },
                "quickInquiry": {"title": "استفسار سريع", "description": "احصل على عرض سعر سريع لاحتياجاتك المؤسسية.", "packages": {"airport": "توصيل المطار", "daily": "إيجار يوم كامل", "event": "نقل الفعاليات", "hourly": "بالساعة حسب التوجيه"}},
                "whyChoose": {
                    "title": "لماذا تختارنا للسفر المؤسسي؟",
                    "image": {"title": "صورة لا تشوبها شائبة", "description": "اوصل للاجتماعات في سيارة تعكس نجاح شركتك."},
                    "privacy": {"title": "تحفظ وخصوصية", "description": "سائقونا المحترفون مدربون على توفير أقصى درجات التحفظ."},
                    "productivity": {"title": "إنتاجية أثناء التنقل", "description": "سياراتنا توفر بيئة هادئة ومريحة للعمل أو المكالمات."},
                    "standards": {"title": "موثوقية ومعايير عالية", "description": "الدقة والسيارات النظيفة مضمونة لتجربة سلسة في كل مرة."}
                }
            },
            "wedding": {
                "cta": {"button": "استفسر الآن", "description": "تواصل معنا لمناقشة خطط زفافك وحجز رولز رويس المثالية.", "title": "احجز سيارة زفاف أحلامك"},
                "hero": {"cta": "خطط لنقل زفافك", "description": "اجعل يومك المميز سحرياً حقاً مع أناقة رولز رويس الخالدة. خدمة تأجير سيارات الزفاف توفر لمسة الفخامة المثالية."},
                "packages": {
                    "title": "باقات الزفاف", "description": "اختر من باقاتنا المنسقة أو دعنا نصمم حلاً مخصصاً لك.", "custom": "باقات مخصصة متاحة عند الطلب.",
                    "classic": {"title": "الأناقة الكلاسيكية", "duration": "3 ساعات", "price": "AED 2,500", "features": ["رولز رويس غوست", "سائق محترف", "تزيين بشريط", "مياه معبأة"]},
                    "royal": {"title": "الحدث الملكي", "duration": "5 ساعات", "price": "AED 4,500", "features": ["رولز رويس فانتوم", "خدمة سجادة حمراء", "نخب شامبانيا", "قائمة موسيقى مخصصة"]},
                    "ultimate": {"title": "الفخامة المطلقة", "duration": "8 ساعات", "price": "AED 7,000", "features": ["اختيار أي رولز رويس", "نقل العروسين", "نقل الوالدين (سيارة ثانية)", "استلام ليلي متأخر"]}
                },
                "testimonials": {
                    "title": "أزواج سعداء",
                    "fatima": {"couple": "فاطمة وخالد", "quote": "شعرنا كالملوك عند الوصول في فانتوم. جعلت صورنا مذهلة."},
                    "sarah": {"couple": "سارة وأحمد", "quote": "رولز رويس كانت أبرز لحظات زفافنا. الخدمة كانت لا تشوبها شائبة!"}
                },
                "whyChoose": {
                    "title": "سيارة الزفاف المثالية",
                    "bridal": {"title": "وصول عروس أنيق", "description": "اصنعي دخولاً خاطفاً للأنفاس يُتذكر إلى الأبد."},
                    "photo": {"title": "فرص تصوير مذهلة", "description": "رولز رويس توفر خلفية رائعة لصور الزفاف."},
                    "reliability": {"title": "خدمة دقيقة وموثوقة", "description": "سائقونا المحترفون يضمنون وصولك في الوقت المحدد وبأسلوب."}
                }
            }
        },
        "compareFleet": {
            "cars": {
                "cullinan": {"usp": "فخامة لا تُضاهى لجميع التضاريس وتصميم SUV مهيب."},
                "dawn": {"usp": "أفخم وأهدأ سيارة مكشوفة في العالم."},
                "ghost": {"usp": "فخامة بسيطة مع راحة ركوب 'السجادة السحرية'."},
                "phantom": {"usp": "رحلة 'السجادة السحرية' الأيقونية والمقصورة الصامتة."},
                "wraith": {"usp": "أقوى رولز رويس مع ديناميكية الجران تورر."}
            },
            "filters": {"bodyType": "نوع الهيكل", "drivetrain": "نظام الدفع", "features": "الميزات", "priceRange": "نطاق السعر", "seats": "المقاعد"},
            "metrics": {
                "acceleration": {"label": "التسارع", "unit": "ثانية 0-100 كم/س"},
                "boot": {"label": "مساحة الصندوق", "unit": "لتر"},
                "comfort": {"label": "الراحة"},
                "luxury": {"label": "الفخامة"},
                "noise": {"label": "مستوى الضوضاء", "unit": "ديسيبل"},
                "performance": {"label": "الأداء"},
                "power": {"label": "القوة", "unit": "حصان"},
                "prestige": {"label": "الهيبة"},
                "range": {"label": "المدى", "unit": "كم"},
                "technology": {"label": "التكنولوجيا"},
                "topSpeed": {"label": "السرعة القصوى", "unit": "كم/س"},
                "torque": {"label": "عزم الدوران", "unit": "نيوتن متر"},
                "value": {"label": "القيمة"},
                "versatility": {"label": "التنوع"}
            }
        }
    }},
    "hi": {"common": {
        "servicesPages": {
            "corporate": {
                "benefits": {
                    "title": "आपके बिज़नेस के लिए लाभ",
                    "financial": {"title": "वित्तीय लाभ", "description": "एकीकृत बिलिंग, पारदर्शी मूल्य निर्धारण और प्रतिस्पर्धी कॉर्पोरेट दरें।"},
                    "operational": {"title": "परिचालन दक्षता", "description": "आसान बुकिंग प्रक्रिया और विश्वसनीय, समय पर सेवा से समय बचाएं।"},
                    "service": {"title": "उन्नत सेवा", "description": "अपने ग्राहकों और कर्मचारियों को प्रीमियम ट्रांसपोर्टेशन अनुभव दें।"}
                },
                "caseStudies": {
                    "title": "सफलता की कहानियां",
                    "bank": {"title": "ग्लोबल इन्वेस्टमेंट बैंक", "challenge": "CEO के लिए 5-दिवसीय फाइनेंशियल रोडशो के लिए विश्वसनीय ट्रांसपोर्ट चाहिए था।", "solution": "प्रोफेशनल शोफर के साथ डेडिकेटेड घोस्ट प्रदान की।", "result": "CEO ने सहज अनुभव की सराहना की।"},
                    "tech": {"title": "इंटरनेशनल टेक कॉन्फ्रेंस", "challenge": "20 कीनोट स्पीकर्स के लिए VIP ट्रांसपोर्ट चाहिए था।", "solution": "10 फैंटम और घोस्ट का फ्लीट रियल-टाइम अपडेट के साथ कोऑर्डिनेट किया।", "result": "सभी स्पीकर्स समय पर और आराम से पहुंचे।"}
                },
                "clients": {"title": "अग्रणी बिज़नेस द्वारा विश्वसनीय", "description": "हमें गर्व है कि हम विविध कॉर्पोरेट क्लाइंट्स की सेवा करते हैं।"},
                "cta": {"button": "कॉर्पोरेट सेल्स से संपर्क करें", "description": "आज ही हमारी कॉर्पोरेट अकाउंट्स टीम से संपर्क करें।", "title": "अपनी कॉर्पोरेट ज़रूरतों पर चर्चा करें"},
                "hero": {"cta": "कॉर्पोरेट कोट अनुरोध करें", "description": "ग्राहकों को प्रभावित करें, एक्ज़ीक्यूटिव्स को पुरस्कृत करें और हमारी कॉर्पोरेट रोल्स-रॉयस रेंटल सेवाओं के साथ अद्वितीय शैली में यात्रा करें।", "stats": {"chauffeurs": "कॉर्पोरेट शोफर्स", "fortune500": "Fortune 500 क्लाइंट्स", "onTime": "ऑन-टाइम अराइवल रेट", "satisfaction": "क्लाइंट संतुष्टि"}},
                "packages": {
                    "title": "कॉर्पोरेट पैकेज",
                    "conference": {"title": "कॉन्फ्रेंस और इवेंट शटल", "description": "अपनी टीम या क्लाइंट्स को समन्वित लग्ज़री में इवेंट्स तक ले जाएं।", "price": "कस्टम कोट"},
                    "executive": {"title": "एक्ज़ीक्यूटिव एयरपोर्ट ट्रांसफर", "description": "सभी दुबई एयरपोर्ट्स से सहज मीट-एंड-ग्रीट सर्विस।", "price": "AED 800 से"},
                    "partnership": {"title": "लॉन्ग-टर्म कॉर्पोरेट पार्टनरशिप", "description": "चल रही एक्ज़ीक्यूटिव ट्रांसपोर्टेशन ज़रूरतों के लिए रिटेनर-बेस्ड सर्विसेज।", "price": "विवरण के लिए पूछें"},
                    "roadshow": {"title": "फाइनेंशियल रोडशो", "description": "हमारी एक्सपर्ट लॉजिस्टिक्स टीम द्वारा प्रबंधित कॉम्प्लेक्स इटिनेरेरीज़।", "price": "दैनिक/साप्ताहिक दरें"}
                },
                "quickInquiry": {"title": "त्वरित पूछताछ", "description": "अपनी कॉर्पोरेट रेंटल ज़रूरतों के लिए फास्ट कोट पाएं।", "packages": {"airport": "एयरपोर्ट ट्रांसफर", "daily": "फुल डे हायर", "event": "इवेंट ट्रांसपोर्टेशन", "hourly": "ऑवरली एज़-डायरेक्टेड"}},
                "whyChoose": {
                    "title": "कॉर्पोरेट ट्रैवल के लिए हमें क्यों चुनें?",
                    "image": {"title": "बेदाग छवि", "description": "ऐसी सिारी में मीटिंग्स में पहुंचें जो आपकी कंपनी की सफलता दर्शाती है।"},
                    "privacy": {"title": "विवेक और गोपनीयता", "description": "हमारे प्रोफेशनल शोफर्स अत्यंत विवेक प्रदान करने के लिए प्रशिक्षित हैं।"},
                    "productivity": {"title": "चलते-फिरते उत्पादकता", "description": "हमारे वाहन काम करने या कॉल लेने के लिए शांत, आरामदायक वातावरण प्रदान करते हैं।"},
                    "standards": {"title": "विश्वसनीयता और उच्च मानक", "description": "समय पर पहुंच और बेदाग वाहन हर बार गारंटीड।"}
                }
            },
            "wedding": {
                "cta": {"button": "अभी पूछें", "description": "अपनी शादी की योजनाओं पर चर्चा करने के लिए संपर्क करें।", "title": "अपनी ड्रीम वेडिंग कार बुक करें"},
                "hero": {"cta": "अपना वेडिंग ट्रांसपोर्ट प्लान करें", "description": "रोल्स-रॉयस की शाश्वत सुंदरता के साथ अपने विशेष दिन को जादुई बनाएं।"},
                "packages": {
                    "title": "हमारे वेडिंग पैकेज", "description": "हमारे क्यूरेटेड पैकेज से चुनें या हमें आपके लिए कस्टम सॉल्यूशन बनाने दें।", "custom": "कस्टम पैकेज अनुरोध पर उपलब्ध।",
                    "classic": {"title": "क्लासिक एलिगेंस", "duration": "3 घंटे", "price": "AED 2,500", "features": ["रोल्स-रॉयस घोस्ट", "प्रोफेशनल शोफर", "रिबन डेकोरेशन", "बोतलबंद पानी"]},
                    "royal": {"title": "रॉयल अफेयर", "duration": "5 घंटे", "price": "AED 4,500", "features": ["रोल्स-रॉयस फैंटम", "रेड कारपेट सर्विस", "शैंपेन टोस्ट", "कस्टम म्यूज़िक प्लेलिस्ट"]},
                    "ultimate": {"title": "अल्टीमेट लग्ज़री", "duration": "8 घंटे", "price": "AED 7,000", "features": ["कोई भी रोल्स-रॉयस चुनें", "दूल्हा-दुल्हन ट्रांसपोर्ट", "माता-पिता ट्रांसपोर्ट (दूसरी कार)", "लेट नाइट पिकअप"]}
                },
                "testimonials": {"title": "खुशहाल जोड़े", "fatima": {"couple": "फातिमा और खालिद", "quote": "फैंटम में पहुंचकर शाही महसूस हुआ। हमारी फोटो बिल्कुल शानदार आईं।"}, "sarah": {"couple": "सारा और अहमद", "quote": "रोल्स-रॉयस हमारी शादी की हाइलाइट थी। सर्विस बेदाग थी!"}},
                "whyChoose": {"title": "परफेक्ट वेडिंग कार", "bridal": {"title": "एलिगेंट ब्राइडल अराइवल", "description": "एक ऐसा प्रवेश करें जो हमेशा याद रहे।"}, "photo": {"title": "शानदार फोटो अवसर", "description": "रोल्स-रॉयस वेडिंग फोटो के लिए शानदार बैकड्रॉप देती है।"}, "reliability": {"title": "पंक्चुअल और विश्वसनीय सर्विस", "description": "हमारे प्रोफेशनल शोफर्स समय पर और स्टाइल में आगमन सुनिश्चित करते हैं।"}}
            }
        },
        "compareFleet": {
            "cars": {
                "cullinan": {"usp": "अतुलनीय ऑल-टेरेन लग्ज़री और कमांडिंग SUV डिज़ाइन।"},
                "dawn": {"usp": "दुनिया की सबसे शानदार और शांत कन्वर्टिबल।"},
                "ghost": {"usp": "मैजिक कारपेट राइड कम्फर्ट के साथ मिनिमलिस्ट लग्ज़री।"},
                "phantom": {"usp": "आइकॉनिक 'मैजिक कारपेट राइड' और साइलेंट केबिन।"},
                "wraith": {"usp": "सबसे शक्तिशाली रोल्स-रॉयस ग्रैंड टूरर डायनामिक्स के साथ।"}
            },
            "filters": {"bodyType": "बॉडी टाइप", "drivetrain": "ड्राइवट्रेन", "features": "फीचर्स", "priceRange": "प्राइस रेंज", "seats": "सीट्स"},
            "metrics": {
                "acceleration": {"label": "एक्सेलेरेशन", "unit": "s 0-100km/h"},
                "boot": {"label": "बूट स्पेस", "unit": "L"},
                "comfort": {"label": "कम्फर्ट"}, "luxury": {"label": "लग्ज़री"},
                "noise": {"label": "नॉइज़ लेवल", "unit": "dB"},
                "performance": {"label": "परफॉर्मेंस"}, "power": {"label": "पावर", "unit": "hp"},
                "prestige": {"label": "प्रेस्टीज"},
                "range": {"label": "रेंज", "unit": "km"},
                "technology": {"label": "टेक्नोलॉजी"},
                "topSpeed": {"label": "टॉप स्पीड", "unit": "km/h"},
                "torque": {"label": "टॉर्क", "unit": "Nm"},
                "value": {"label": "वैल्यू"}, "versatility": {"label": "वर्सेटिलिटी"}
            }
        }
    }},
    "ru": {"common": {
        "servicesPages": {
            "corporate": {
                "benefits": {"title": "Преимущества для бизнеса", "financial": {"title": "Финансовые преимущества", "description": "Консолидированные счета, прозрачные цены и конкурентные корпоративные тарифы."}, "operational": {"title": "Операционная эффективность", "description": "Экономьте время с простым бронированием и надёжным сервисом."}, "service": {"title": "Улучшенный сервис", "description": "Предложите премиальный транспорт своим клиентам и сотрудникам."}},
                "caseStudies": {"title": "Истории успеха", "bank": {"title": "Глобальный инвестбанк", "challenge": "Нужен надёжный транспорт для 5-дневного роуд-шоу CEO.", "solution": "Предоставили выделенный Ghost с профессиональным шофёром.", "result": "CEO высоко оценил безупречный сервис."}, "tech": {"title": "Международная IT-конференция", "challenge": "VIP-транспорт для 20 спикеров.", "solution": "Координация 10 Phantom и Ghost с центральным диспетчером.", "result": "Все спикеры прибыли вовремя и комфортно."}},
                "clients": {"title": "Доверие ведущих компаний", "description": "Мы обслуживаем разнообразных корпоративных клиентов."},
                "cta": {"button": "Связаться с корпоративным отделом", "description": "Свяжитесь с нашей командой для создания индивидуального решения.", "title": "Обсудите корпоративные потребности"},
                "hero": {"cta": "Запросить корпоративное предложение", "description": "Впечатляйте клиентов и путешествуйте в непревзойдённом стиле с корпоративной арендой Rolls-Royce.", "stats": {"chauffeurs": "Корпоративных шофёров", "fortune500": "Клиентов Fortune 500", "onTime": "Прибытие вовремя", "satisfaction": "Удовлетворённость клиентов"}},
                "packages": {"title": "Корпоративные пакеты", "conference": {"title": "Конференц-шаттл", "description": "Транспорт команды на мероприятия в координированной роскоши.", "price": "По запросу"}, "executive": {"title": "Представительский трансфер", "description": "Безупречный meet-and-greet из аэропортов Дубая.", "price": "от AED 800"}, "partnership": {"title": "Долгосрочное партнёрство", "description": "Ретейнер-сервис для постоянных потребностей.", "price": "По запросу"}, "roadshow": {"title": "Финансовые роуд-шоу", "description": "Сложные маршруты под управлением нашей логистической команды.", "price": "Дневные/недельные тарифы"}},
                "quickInquiry": {"title": "Быстрый запрос", "description": "Получите быстрое предложение для корпоративной аренды.", "packages": {"airport": "Трансфер в аэропорт", "daily": "Аренда на целый день", "event": "Транспорт для мероприятий", "hourly": "Почасовая аренда"}},
                "whyChoose": {"title": "Почему мы для корпоративных поездок?", "image": {"title": "Безупречный имидж", "description": "Прибывайте на встречи в автомобиле, достойном вашего бизнеса."}, "privacy": {"title": "Конфиденциальность", "description": "Наши шофёры обучены обеспечивать максимальную деликатность."}, "productivity": {"title": "Продуктивность в дороге", "description": "Спокойная обстановка для работы или переговоров."}, "standards": {"title": "Надёжность и высокие стандарты", "description": "Пунктуальность и безупречные автомобили гарантированы."}}
            },
            "wedding": {
                "cta": {"button": "Узнать подробности", "description": "Свяжитесь с нами для обсуждения свадебных планов.", "title": "Забронируйте свадебный автомобиль мечты"},
                "hero": {"cta": "Спланировать свадебный транспорт", "description": "Сделайте ваш особый день по-настоящему волшебным с Rolls-Royce."},
                "packages": {"title": "Свадебные пакеты", "description": "Выберите из наших пакетов или закажите индивидуальное решение.", "custom": "Индивидуальные пакеты по запросу.", "classic": {"title": "Классическая элегантность", "duration": "3 часа", "price": "AED 2,500", "features": ["Rolls-Royce Ghost", "Профессиональный шофёр", "Украшение лентами", "Бутилированная вода"]}, "royal": {"title": "Королевское торжество", "duration": "5 часов", "price": "AED 4,500", "features": ["Rolls-Royce Phantom", "Красная дорожка", "Шампанское", "Музыкальный плейлист"]}, "ultimate": {"title": "Абсолютная роскошь", "duration": "8 часов", "price": "AED 7,000", "features": ["Любой Rolls-Royce", "Транспорт жениха и невесты", "Транспорт родителей", "Поздний трансфер"]}},
                "testimonials": {"title": "Счастливые пары", "fatima": {"couple": "Фатима и Халид", "quote": "Прибытие на Phantom — ощущение королевской особы. Фотографии потрясающие."}, "sarah": {"couple": "Сара и Ахмед", "quote": "Rolls-Royce стал главным украшением нашей свадьбы!"}},
                "whyChoose": {"title": "Идеальный свадебный автомобиль", "bridal": {"title": "Элегантное прибытие невесты", "description": "Сделайте вход, который запомнится навсегда."}, "photo": {"title": "Великолепные фото", "description": "Rolls-Royce — идеальный фон для свадебных фотографий."}, "reliability": {"title": "Пунктуальность и надёжность", "description": "Наши шофёры гарантируют прибытие вовремя и со стилем."}}
            }
        },
        "compareFleet": {
            "cars": {"cullinan": {"usp": "Непревзойдённая внедорожная роскошь и величественный дизайн SUV."}, "dawn": {"usp": "Самый роскошный и тихий кабриолет в мире."}, "ghost": {"usp": "Минималистичная роскошь с комфортом «ковра-самолёта»."}, "phantom": {"usp": "Легендарная плавность хода и бесшумный салон."}, "wraith": {"usp": "Самый мощный Rolls-Royce с динамикой гранд-турера."}},
            "filters": {"bodyType": "Тип кузова", "drivetrain": "Привод", "features": "Особенности", "priceRange": "Ценовой диапазон", "seats": "Сидения"},
            "metrics": {"acceleration": {"label": "Разгон", "unit": "с 0-100 км/ч"}, "boot": {"label": "Багажник", "unit": "л"}, "comfort": {"label": "Комфорт"}, "luxury": {"label": "Роскошь"}, "noise": {"label": "Шум", "unit": "дБ"}, "performance": {"label": "Динамика"}, "power": {"label": "Мощность", "unit": "л.с."}, "prestige": {"label": "Престиж"}, "range": {"label": "Запас хода", "unit": "км"}, "technology": {"label": "Технологии"}, "topSpeed": {"label": "Макс. скорость", "unit": "км/ч"}, "torque": {"label": "Крутящий момент", "unit": "Н·м"}, "value": {"label": "Ценность"}, "versatility": {"label": "Универсальность"}}
        }
    }},
    "zh": {"common": {
        "servicesPages": {
            "corporate": {
                "benefits": {"title": "商业优势", "financial": {"title": "财务优势", "description": "统一发票、透明定价和有竞争力的企业费率。"}, "operational": {"title": "运营效率", "description": "通过简便的预订流程和可靠的准时服务节省时间。"}, "service": {"title": "增值服务", "description": "为您的客户和员工提供顶级交通体验。"}},
                "caseStudies": {"title": "成功案例", "bank": {"title": "全球投资银行", "challenge": "需要为CEO的5天路演提供可靠交通。", "solution": "提供配备专业司机的专属古思特。", "result": "CEO高度评价了无缝体验。"}, "tech": {"title": "国际科技大会", "challenge": "需要为20位主题演讲者提供VIP交通。", "solution": "协调10辆幻影和古思特车队，配备中央调度。", "result": "所有演讲者准时舒适到达。"}},
                "clients": {"title": "值得信赖的企业合作伙伴", "description": "我们自豪地为各类企业客户提供服务。"},
                "cta": {"button": "联系企业销售", "description": "立即联系我们的企业账户团队，定制您的交通解决方案。", "title": "讨论您的企业需求"},
                "hero": {"cta": "申请企业报价", "description": "通过我们的企业劳斯莱斯租赁服务，给客户留下深刻印象，以无与伦比的风格出行。", "stats": {"chauffeurs": "企业司机", "fortune500": "世界500强客户", "onTime": "准时到达率", "satisfaction": "客户满意度"}},
                "packages": {"title": "企业套餐", "conference": {"title": "会议活动班车", "description": "以协调的豪华方式将团队送至活动。", "price": "定制报价"}, "executive": {"title": "行政机场接送", "description": "迪拜所有机场的无缝接机服务。", "price": "AED 800起"}, "partnership": {"title": "长期企业合作", "description": "满足持续行政交通需求的包月服务。", "price": "详询"}, "roadshow": {"title": "金融路演", "description": "由专业物流团队管理的复杂多站行程。", "price": "按日/周计费"}},
                "quickInquiry": {"title": "快速咨询", "description": "快速获取企业租赁报价。", "packages": {"airport": "机场接送", "daily": "全天租赁", "event": "活动交通", "hourly": "按小时租赁"}},
                "whyChoose": {"title": "为什么选择我们的企业出行？", "image": {"title": "完美形象", "description": "乘坐匹配您公司成就的座驾出席会议。"}, "privacy": {"title": "隐私与低调", "description": "我们的专业司机经过培训，确保最大程度的隐私保护。"}, "productivity": {"title": "途中办公", "description": "我们的车辆提供安静舒适的工作环境。"}, "standards": {"title": "可靠的高标准", "description": "保证准时到达和完美车况。"}}
            },
            "wedding": {
                "cta": {"button": "立即咨询", "description": "联系我们讨论您的婚礼计划，预订完美的劳斯莱斯。", "title": "预订您的梦想婚车"},
                "hero": {"cta": "规划您的婚礼交通", "description": "以劳斯莱斯的永恒优雅让您的特殊日子真正神奇。"},
                "packages": {"title": "婚礼套餐", "description": "从我们的精选套餐中选择或让我们为您定制。", "custom": "可按要求定制套餐。", "classic": {"title": "经典优雅", "duration": "3小时", "price": "AED 2,500", "features": ["劳斯莱斯古思特", "专业司机", "丝带装饰", "瓶装水"]}, "royal": {"title": "皇家盛典", "duration": "5小时", "price": "AED 4,500", "features": ["劳斯莱斯幻影", "红毯服务", "香槟祝酒", "定制音乐列表"]}, "ultimate": {"title": "至尊奢华", "duration": "8小时", "price": "AED 7,000", "features": ["任选劳斯莱斯", "新人交通", "父母交通（第二辆车）", "深夜接送"]}},
                "testimonials": {"title": "幸福新人", "fatima": {"couple": "Fatima 和 Khalid", "quote": "乘坐幻影到达感觉像皇室。我们的照片绝对惊艳。"}, "sarah": {"couple": "Sarah 和 Ahmed", "quote": "劳斯莱斯是我们婚礼的亮点。服务无可挑剔！"}},
                "whyChoose": {"title": "完美婚车", "bridal": {"title": "优雅的新娘到场", "description": "打造令人屏息的入场，永生难忘。"}, "photo": {"title": "绝佳拍照机会", "description": "劳斯莱斯为婚纱照提供华丽背景。"}, "reliability": {"title": "准时可靠的服务", "description": "我们的专业司机确保您准时且优雅到达。"}}
            }
        },
        "compareFleet": {
            "cars": {"cullinan": {"usp": "无与伦比的全地形豪华与霸气SUV设计。"}, "dawn": {"usp": "世界上最奢华、最安静的敞篷车。"}, "ghost": {"usp": "极简奢华配以魔毯般的乘坐舒适度。"}, "phantom": {"usp": "标志性的'魔毯般驾乘'和静谧座舱。"}, "wraith": {"usp": "最强劲的劳斯莱斯，Gran Tourer动态性能。"}},
            "filters": {"bodyType": "车身类型", "drivetrain": "驱动方式", "features": "特色配置", "priceRange": "价格区间", "seats": "座位数"},
            "metrics": {"acceleration": {"label": "加速", "unit": "秒 0-100km/h"}, "boot": {"label": "后备箱", "unit": "升"}, "comfort": {"label": "舒适度"}, "luxury": {"label": "奢华度"}, "noise": {"label": "噪音水平", "unit": "分贝"}, "performance": {"label": "性能"}, "power": {"label": "功率", "unit": "马力"}, "prestige": {"label": "尊贵感"}, "range": {"label": "续航", "unit": "公里"}, "technology": {"label": "科技"}, "topSpeed": {"label": "最高速度", "unit": "km/h"}, "torque": {"label": "扭矩", "unit": "牛·米"}, "value": {"label": "价值"}, "versatility": {"label": "多功能性"}}
        }
    }},
    "fr": {"common": {
        "servicesPages": {
            "corporate": {
                "benefits": {"title": "Avantages pour votre entreprise", "financial": {"title": "Avantages financiers", "description": "Facturation consolidée, tarifs transparents et compétitifs."}, "operational": {"title": "Efficacité opérationnelle", "description": "Gagnez du temps avec notre processus de réservation simple."}, "service": {"title": "Service amélioré", "description": "Offrez une expérience de transport premium à vos clients."}},
                "caseStudies": {"title": "Témoignages de réussite", "bank": {"title": "Banque d'investissement mondiale", "challenge": "Transport fiable pour un roadshow de 5 jours.", "solution": "Ghost dédiée avec chauffeur professionnel.", "result": "Le CEO a salué l'expérience fluide."}, "tech": {"title": "Conférence tech internationale", "challenge": "Transport VIP pour 20 intervenants.", "solution": "Coordination de 10 Phantom et Ghost.", "result": "Tous les intervenants arrivés à l'heure."}},
                "cta": {"button": "Contacter les ventes corporate", "description": "Contactez notre équipe pour une solution sur mesure.", "title": "Discutez de vos besoins corporate"},
                "hero": {"cta": "Demander un devis corporate", "description": "Impressionnez vos clients et voyagez avec un style inégalé avec nos services de location corporate Rolls-Royce.", "stats": {"chauffeurs": "Chauffeurs corporate", "fortune500": "Clients Fortune 500", "onTime": "Taux de ponctualité", "satisfaction": "Satisfaction client"}},
                "packages": {"title": "Forfaits corporate", "conference": {"title": "Navette conférence", "description": "Transport coordonné pour événements.", "price": "Sur devis"}, "executive": {"title": "Transfert aéroport executive", "description": "Service meet-and-greet depuis tous les aéroports.", "price": "À partir de AED 800"}, "partnership": {"title": "Partenariat long terme", "description": "Services continus sur contrat.", "price": "Sur demande"}, "roadshow": {"title": "Roadshows financiers", "description": "Itinéraires complexes gérés par notre équipe logistique.", "price": "Tarifs jour/semaine"}},
                "whyChoose": {"title": "Pourquoi nous choisir pour les voyages d'affaires ?", "image": {"title": "Image impeccable", "description": "Arrivez en réunion dans un véhicule qui reflète votre succès."}, "privacy": {"title": "Discrétion et confidentialité", "description": "Nos chauffeurs sont formés pour une discrétion maximale."}, "productivity": {"title": "Productivité en déplacement", "description": "Un environnement calme pour travailler ou téléphoner."}, "standards": {"title": "Fiabilité et hauts standards", "description": "Ponctualité et véhicules impeccables garantis."}}
            },
            "wedding": {
                "cta": {"button": "Demander", "description": "Contactez-nous pour discuter de vos plans de mariage.", "title": "Réservez votre voiture de mariage de rêve"},
                "hero": {"cta": "Planifier votre transport de mariage", "description": "Rendez votre jour spécial magique avec l'élégance intemporelle d'une Rolls-Royce."},
                "packages": {"title": "Nos forfaits mariage", "description": "Choisissez parmi nos forfaits ou laissez-nous créer une solution sur mesure.", "custom": "Forfaits personnalisés disponibles sur demande.", "classic": {"title": "Élégance classique", "duration": "3 heures", "price": "AED 2,500", "features": ["Rolls-Royce Ghost", "Chauffeur professionnel", "Décoration ruban", "Eau en bouteille"]}, "royal": {"title": "Cérémonie royale", "duration": "5 heures", "price": "AED 4,500", "features": ["Rolls-Royce Phantom", "Service tapis rouge", "Toast au champagne", "Playlist musicale"]}, "ultimate": {"title": "Luxe ultime", "duration": "8 heures", "price": "AED 7,000", "features": ["Choix de toute Rolls-Royce", "Transport des mariés", "Transport des parents", "Retour tardif"]}},
                "testimonials": {"title": "Couples heureux", "fatima": {"couple": "Fatima et Khalid", "quote": "Se sentir comme une reine en arrivant en Phantom. Photos absolument sublimes."}, "sarah": {"couple": "Sarah et Ahmed", "quote": "La Rolls-Royce a été le point fort de notre mariage !"}},
                "whyChoose": {"title": "La voiture de mariage parfaite", "bridal": {"title": "Arrivée élégante de la mariée", "description": "Faites une entrée spectaculaire inoubliable."}, "photo": {"title": "Superbes opportunités photo", "description": "Une Rolls-Royce offre un décor magnifique."}, "reliability": {"title": "Service ponctuel et fiable", "description": "Nos chauffeurs garantissent votre arrivée à l'heure."}}
            }
        },
        "compareFleet": {
            "cars": {"cullinan": {"usp": "Luxe tout-terrain inégalé et design SUV imposant."}, "dawn": {"usp": "Le cabriolet le plus luxueux et silencieux au monde."}, "ghost": {"usp": "Luxe minimaliste avec le confort du tapis volant."}, "phantom": {"usp": "L'emblématique 'Magic Carpet Ride' et habitacle silencieux."}, "wraith": {"usp": "La Rolls-Royce la plus puissante avec dynamique Grand Tourer."}},
            "filters": {"bodyType": "Type de carrosserie", "drivetrain": "Transmission", "features": "Caractéristiques", "priceRange": "Gamme de prix", "seats": "Places"},
            "metrics": {"acceleration": {"label": "Accélération", "unit": "s 0-100km/h"}, "boot": {"label": "Coffre", "unit": "L"}, "comfort": {"label": "Confort"}, "luxury": {"label": "Luxe"}, "noise": {"label": "Niveau sonore", "unit": "dB"}, "performance": {"label": "Performance"}, "power": {"label": "Puissance", "unit": "ch"}, "prestige": {"label": "Prestige"}, "range": {"label": "Autonomie", "unit": "km"}, "technology": {"label": "Technologie"}, "topSpeed": {"label": "Vitesse max", "unit": "km/h"}, "torque": {"label": "Couple", "unit": "Nm"}, "value": {"label": "Valeur"}, "versatility": {"label": "Polyvalence"}}
        }
    }}
}

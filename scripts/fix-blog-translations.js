#!/usr/bin/env node

/**
 * إصلاح مفاتيح ترجمة المدونة المفقودة
 * يضيف جميع مفاتيح blog.* المطلوبة إلى common.json
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * مفاتيح المدونة المفقودة
 */
const BLOG_TRANSLATIONS = {
  en: {
    blog: {
      categories: {
        all: "All Articles",
        guides: "Guides",
        luxury: "Luxury Lifestyle",
        events: "Events & News",
        tips: "Tips & Advice"
      },
      featured: {
        title: "Ultimate Guide to Rolls-Royce Rental in Dubai",
        excerpt: "Everything you need to know about renting a Rolls-Royce in Dubai, from choosing the right model to understanding pricing and requirements.",
        author: "Rolls-Royce Dubai Team",
        date: "December 15, 2024",
        readTime: "8 min read"
      },
      articles: {
        article1: {
          title: "Top 10 Scenic Drives in Dubai with a Rolls-Royce",
          excerpt: "Discover the most beautiful routes in Dubai perfect for experiencing luxury driving in your Rolls-Royce rental.",
          author: "Ahmed Al-Rashid",
          date: "December 10, 2024",
          readTime: "6 min read"
        },
        article2: {
          title: "Wedding Car Rental: Making Your Special Day Perfect",
          excerpt: "Complete guide to choosing the perfect Rolls-Royce for your wedding in Dubai, including decoration options and packages.",
          author: "Sarah Johnson",
          date: "December 8, 2024",
          readTime: "5 min read"
        },
        article3: {
          title: "Corporate Car Rental: Elevating Business Travel",
          excerpt: "How luxury car rentals can enhance your corporate image and provide practical benefits for business travelers.",
          author: "David Chen",
          date: "December 5, 2024",
          readTime: "7 min read"
        },
        article4: {
          title: "Rolls-Royce vs Bentley: A Luxury Comparison",
          excerpt: "An in-depth comparison of two luxury automotive icons to help you choose the perfect rental for your needs.",
          author: "Michael Thompson",
          date: "December 3, 2024",
          readTime: "9 min read"
        },
        article5: {
          title: "Dubai's Luxury Car Culture: A Deep Dive",
          excerpt: "Exploring Dubai's fascination with luxury automobiles and why Rolls-Royce remains the ultimate status symbol.",
          author: "Fatima Al-Zahra",
          date: "November 30, 2024",
          readTime: "6 min read"
        },
        article6: {
          title: "Maintenance and Care: Behind the Scenes",
          excerpt: "Discover how we maintain our Rolls-Royce fleet to ensure every vehicle meets the highest standards of luxury and performance.",
          author: "Technical Team",
          date: "November 28, 2024",
          readTime: "4 min read"
        },
        article7: {
          title: "Photography Tips: Capturing Perfect Luxury Car Shots",
          excerpt: "Professional tips for photographing Rolls-Royce vehicles, whether for personal memories or professional shoots.",
          author: "James Rodriguez",
          date: "November 25, 2024",
          readTime: "5 min read"
        }
      },
      pagination: {
        prev: "Previous",
        next: "Next",
        page: "Page"
      },
      search: {
        placeholder: "Search articles...",
        noResults: "No articles found",
        resultsFor: "Results for"
      },
      newsletter: {
        title: "Stay Updated",
        description: "Subscribe to our newsletter for the latest luxury car insights and exclusive offers.",
        subscribe: "Subscribe",
        email: "Enter your email"
      }
    }
  },
  ar: {
    blog: {
      categories: {
        all: "جميع المقالات",
        guides: "أدلة",
        luxury: "نمط الحياة الفاخر",
        events: "الأحداث والأخبار",
        tips: "نصائح وإرشادات"
      },
      featured: {
        title: "الدليل الشامل لاستئجار رولز رويس في دبي",
        excerpt: "كل ما تحتاج لمعرفته حول استئجار رولز رويس في دبي، من اختيار الطراز المناسب إلى فهم الأسعار والمتطلبات.",
        author: "فريق رولز رويس دبي",
        date: "15 ديسمبر 2024",
        readTime: "8 دقائق قراءة"
      },
      articles: {
        article1: {
          title: "أفضل 10 طرق ذات المناظر الخلابة في دبي مع رولز رويس",
          excerpt: "اكتشف أجمل الطرق في دبي المثالية لتجربة القيادة الفاخرة في سيارة رولز رويس المستأجرة.",
          author: "أحمد الراشد",
          date: "10 ديسمبر 2024",
          readTime: "6 دقائق قراءة"
        },
        article2: {
          title: "استئجار سيارة الزفاف: جعل يومك المميز مثالياً",
          excerpt: "دليل شامل لاختيار رولز رويس المثالية لحفل زفافك في دبي، بما في ذلك خيارات الزينة والباقات.",
          author: "سارة جونسون",
          date: "8 ديسمبر 2024",
          readTime: "5 دقائق قراءة"
        },
        article3: {
          title: "استئجار السيارات المؤسسي: رفع مستوى السفر التجاري",
          excerpt: "كيف يمكن لاستئجار السيارات الفاخرة تعزيز صورة شركتك وتوفير فوائد عملية للمسافرين التجاريين.",
          author: "ديفيد تشين",
          date: "5 ديسمبر 2024",
          readTime: "7 دقائق قراءة"
        },
        article4: {
          title: "رولز رويس مقابل بنتلي: مقارنة فاخرة",
          excerpt: "مقارنة متعمقة بين رموزين من رموز السيارات الفاخرة لمساعدتك في اختيار الإيجار المثالي لاحتياجاتك.",
          author: "مايكل تومسون",
          date: "3 ديسمبر 2024",
          readTime: "9 دقائق قراءة"
        },
        article5: {
          title: "ثقافة السيارات الفاخرة في دبي: نظرة عميقة",
          excerpt: "استكشاف افتتان دبي بالسيارات الفاخرة ولماذا تبقى رولز رويس رمز المكانة النهائي.",
          author: "فاطمة الزهراء",
          date: "30 نوفمبر 2024",
          readTime: "6 دقائق قراءة"
        },
        article6: {
          title: "الصيانة والعناية: وراء الكواليس",
          excerpt: "اكتشف كيف نحافظ على أسطول رولز رويس لدينا لضمان تلبية كل مركبة لأعلى معايير الفخامة والأداء.",
          author: "الفريق التقني",
          date: "28 نوفمبر 2024",
          readTime: "4 دقائق قراءة"
        },
        article7: {
          title: "نصائح التصوير: التقاط لقطات مثالية للسيارات الفاخرة",
          excerpt: "نصائح احترافية لتصوير مركبات رولز رويس، سواء للذكريات الشخصية أو للتصوير المهني.",
          author: "جيمس رودريغيز",
          date: "25 نوفمبر 2024",
          readTime: "5 دقائق قراءة"
        }
      },
      pagination: {
        prev: "السابق",
        next: "التالي",
        page: "صفحة"
      },
      search: {
        placeholder: "البحث في المقالات...",
        noResults: "لم يتم العثور على مقالات",
        resultsFor: "نتائج البحث عن"
      },
      newsletter: {
        title: "ابق على اطلاع",
        description: "اشترك في نشرتنا الإخبارية للحصول على أحدث رؤى السيارات الفاخرة والعروض الحصرية.",
        subscribe: "اشترك",
        email: "أدخل بريدك الإلكتروني"
      }
    }
  },
  ru: {
    blog: {
      categories: {
        all: "Все статьи",
        guides: "Руководства",
        luxury: "Роскошный образ жизни",
        events: "События и новости",
        tips: "Советы и рекомендации"
      },
      featured: {
        title: "Полное руководство по аренде Rolls-Royce в Дубае",
        excerpt: "Все, что вам нужно знать об аренде Rolls-Royce в Дубае, от выбора подходящей модели до понимания цен и требований.",
        author: "Команда Rolls-Royce Dubai",
        date: "15 декабря 2024",
        readTime: "8 мин чтения"
      },
      articles: {
        article1: {
          title: "Топ-10 живописных маршрутов в Дубае на Rolls-Royce",
          excerpt: "Откройте для себя самые красивые маршруты в Дубае, идеально подходящие для роскошного вождения на арендованном Rolls-Royce.",
          author: "Ахмед Аль-Рашид",
          date: "10 декабря 2024",
          readTime: "6 мин чтения"
        },
        article2: {
          title: "Аренда свадебного автомобиля: сделайте ваш особенный день идеальным",
          excerpt: "Полное руководство по выбору идеального Rolls-Royce для вашей свадьбы в Дубае, включая варианты украшения и пакеты.",
          author: "Сара Джонсон",
          date: "8 декабря 2024",
          readTime: "5 мин чтения"
        },
        article3: {
          title: "Корпоративная аренда автомобилей: повышение уровня деловых поездок",
          excerpt: "Как аренда роскошных автомобилей может улучшить имидж вашей компании и принести практическую пользу деловым путешественникам.",
          author: "Дэвид Чен",
          date: "5 декабря 2024",
          readTime: "7 мин чтения"
        },
        article4: {
          title: "Rolls-Royce против Bentley: роскошное сравнение",
          excerpt: "Глубокое сравнение двух икон роскошного автомобилестроения, которое поможет вам выбрать идеальную аренду для ваших нужд.",
          author: "Майкл Томпсон",
          date: "3 декабря 2024",
          readTime: "9 мин чтения"
        },
        article5: {
          title: "Культура роскошных автомобилей в Дубае: глубокое погружение",
          excerpt: "Исследование увлечения Дубая роскошными автомобилями и почему Rolls-Royce остается символом высшего статуса.",
          author: "Фатима Аль-Захра",
          date: "30 ноября 2024",
          readTime: "6 мин чтения"
        },
        article6: {
          title: "Обслуживание и уход: за кулисами",
          excerpt: "Узнайте, как мы обслуживаем наш автопарк Rolls-Royce, чтобы каждый автомобиль соответствовал высочайшим стандартам роскоши и производительности.",
          author: "Техническая команда",
          date: "28 ноября 2024",
          readTime: "4 мин чтения"
        },
        article7: {
          title: "Советы по фотографии: создание идеальных снимков роскошных автомобилей",
          excerpt: "Профессиональные советы по фотографированию автомобилей Rolls-Royce, будь то для личных воспоминаний или профессиональных съемок.",
          author: "Джеймс Родригес",
          date: "25 ноября 2024",
          readTime: "5 мин чтения"
        }
      },
      pagination: {
        prev: "Предыдущая",
        next: "Следующая",
        page: "Страница"
      },
      search: {
        placeholder: "Поиск статей...",
        noResults: "Статьи не найдены",
        resultsFor: "Результаты для"
      },
      newsletter: {
        title: "Оставайтесь в курсе",
        description: "Подпишитесь на нашу рассылку, чтобы получать последние новости о роскошных автомобилях и эксклюзивные предложения.",
        subscribe: "Подписаться",
        email: "Введите ваш email"
      }
    }
  },
  fr: {
    blog: {
      categories: {
        all: "Tous les articles",
        guides: "Guides",
        luxury: "Style de vie luxueux",
        events: "Événements et actualités",
        tips: "Conseils et astuces"
      },
      featured: {
        title: "Guide ultime pour louer une Rolls-Royce à Dubaï",
        excerpt: "Tout ce que vous devez savoir sur la location d'une Rolls-Royce à Dubaï, du choix du bon modèle à la compréhension des prix et des exigences.",
        author: "Équipe Rolls-Royce Dubai",
        date: "15 décembre 2024",
        readTime: "8 min de lecture"
      },
      articles: {
        article1: {
          title: "Top 10 des routes panoramiques à Dubaï avec une Rolls-Royce",
          excerpt: "Découvrez les plus beaux itinéraires de Dubaï parfaits pour vivre une expérience de conduite de luxe dans votre Rolls-Royce de location.",
          author: "Ahmed Al-Rashid",
          date: "10 décembre 2024",
          readTime: "6 min de lecture"
        },
        article2: {
          title: "Location de voiture de mariage : rendre votre jour spécial parfait",
          excerpt: "Guide complet pour choisir la Rolls-Royce parfaite pour votre mariage à Dubaï, incluant les options de décoration et les forfaits.",
          author: "Sarah Johnson",
          date: "8 décembre 2024",
          readTime: "5 min de lecture"
        },
        article3: {
          title: "Location de voiture d'entreprise : élever les voyages d'affaires",
          excerpt: "Comment les locations de voitures de luxe peuvent améliorer votre image d'entreprise et offrir des avantages pratiques aux voyageurs d'affaires.",
          author: "David Chen",
          date: "5 décembre 2024",
          readTime: "7 min de lecture"
        },
        article4: {
          title: "Rolls-Royce vs Bentley : une comparaison de luxe",
          excerpt: "Une comparaison approfondie de deux icônes de l'automobile de luxe pour vous aider à choisir la location parfaite pour vos besoins.",
          author: "Michael Thompson",
          date: "3 décembre 2024",
          readTime: "9 min de lecture"
        },
        article5: {
          title: "La culture des voitures de luxe à Dubaï : une plongée profonde",
          excerpt: "Explorer la fascination de Dubaï pour les automobiles de luxe et pourquoi Rolls-Royce reste le symbole de statut ultime.",
          author: "Fatima Al-Zahra",
          date: "30 novembre 2024",
          readTime: "6 min de lecture"
        },
        article6: {
          title: "Maintenance et entretien : dans les coulisses",
          excerpt: "Découvrez comment nous entretenons notre flotte Rolls-Royce pour nous assurer que chaque véhicule répond aux plus hauts standards de luxe et de performance.",
          author: "Équipe technique",
          date: "28 novembre 2024",
          readTime: "4 min de lecture"
        },
        article7: {
          title: "Conseils photo : capturer des clichés parfaits de voitures de luxe",
          excerpt: "Conseils professionnels pour photographier les véhicules Rolls-Royce, que ce soit pour des souvenirs personnels ou des séances professionnelles.",
          author: "James Rodriguez",
          date: "25 novembre 2024",
          readTime: "5 min de lecture"
        }
      },
      pagination: {
        prev: "Précédent",
        next: "Suivant",
        page: "Page"
      },
      search: {
        placeholder: "Rechercher des articles...",
        noResults: "Aucun article trouvé",
        resultsFor: "Résultats pour"
      },
      newsletter: {
        title: "Restez informé",
        description: "Abonnez-vous à notre newsletter pour les dernières informations sur les voitures de luxe et les offres exclusives.",
        subscribe: "S'abonner",
        email: "Entrez votre email"
      }
    }
  },
  zh: {
    blog: {
      categories: {
        all: "所有文章",
        guides: "指南",
        luxury: "奢华生活方式",
        events: "活动与新闻",
        tips: "技巧与建议"
      },
      featured: {
        title: "迪拜劳斯莱斯租赁终极指南",
        excerpt: "了解在迪拜租赁劳斯莱斯的一切，从选择合适的车型到了解价格和要求。",
        author: "劳斯莱斯迪拜团队",
        date: "2024年12月15日",
        readTime: "8分钟阅读"
      },
      articles: {
        article1: {
          title: "迪拜劳斯莱斯十大风景驾驶路线",
          excerpt: "发现迪拜最美丽的路线，完美体验租赁劳斯莱斯的奢华驾驶。",
          author: "艾哈迈德·拉希德",
          date: "2024年12月10日",
          readTime: "6分钟阅读"
        },
        article2: {
          title: "婚车租赁：让您的特殊日子完美无缺",
          excerpt: "为您在迪拜的婚礼选择完美劳斯莱斯的完整指南，包括装饰选项和套餐。",
          author: "莎拉·约翰逊",
          date: "2024年12月8日",
          readTime: "5分钟阅读"
        },
        article3: {
          title: "企业租车：提升商务旅行水平",
          excerpt: "豪华汽车租赁如何提升您的企业形象并为商务旅行者提供实用益处。",
          author: "大卫·陈",
          date: "2024年12月5日",
          readTime: "7分钟阅读"
        },
        article4: {
          title: "劳斯莱斯vs宾利：奢华对比",
          excerpt: "两个奢华汽车界标志的深入比较，帮助您选择满足需求的完美租赁。",
          author: "迈克尔·汤普森",
          date: "2024年12月3日",
          readTime: "9分钟阅读"
        },
        article5: {
          title: "迪拜的奢华汽车文化：深度探索",
          excerpt: "探索迪拜对奢华汽车的迷恋，以及为什么劳斯莱斯仍然是终极身份象征。",
          author: "法蒂玛·扎赫拉",
          date: "2024年11月30日",
          readTime: "6分钟阅读"
        },
        article6: {
          title: "维护与保养：幕后花絮",
          excerpt: "了解我们如何维护劳斯莱斯车队，确保每辆车都达到最高的奢华和性能标准。",
          author: "技术团队",
          date: "2024年11月28日",
          readTime: "4分钟阅读"
        },
        article7: {
          title: "摄影技巧：捕捉完美的奢华汽车镜头",
          excerpt: "拍摄劳斯莱斯车辆的专业技巧，无论是个人纪念还是专业拍摄。",
          author: "詹姆斯·罗德里格斯",
          date: "2024年11月25日",
          readTime: "5分钟阅读"
        }
      },
      pagination: {
        prev: "上一页",
        next: "下一页",
        page: "页面"
      },
      search: {
        placeholder: "搜索文章...",
        noResults: "未找到文章",
        resultsFor: "搜索结果"
      },
      newsletter: {
        title: "保持更新",
        description: "订阅我们的通讯，获取最新的豪华汽车见解和独家优惠。",
        subscribe: "订阅",
        email: "输入您的邮箱"
      }
    }
  },
  hi: {
    blog: {
      categories: {
        all: "सभी लेख",
        guides: "गाइड",
        luxury: "लक्जरी लाइफस्टाइल",
        events: "इवेंट्स और समाचार",
        tips: "टिप्स और सलाह"
      },
      featured: {
        title: "दुबई में रोल्स-रॉयस रेंटल के लिए अंतिम गाइड",
        excerpt: "दुबई में रोल्स-रॉयस किराए पर लेने के बारे में सब कुछ जानें, सही मॉडल चुनने से लेकर कीमतों और आवश्यकताओं को समझने तक।",
        author: "रोल्स-रॉयस दुबई टीम",
        date: "15 दिसंबर 2024",
        readTime: "8 मिनट पढ़ना"
      },
      articles: {
        article1: {
          title: "रोल्स-रॉयस के साथ दुबई में टॉप 10 सुंदर ड्राइव",
          excerpt: "अपनी रेंटल रोल्स-रॉयस में लक्जरी ड्राइविंग अनुभव के लिए दुबई के सबसे खूबसूरत रूट्स खोजें।",
          author: "अहमद अल-राशिद",
          date: "10 दिसंबर 2024",
          readTime: "6 मिनट पढ़ना"
        },
        article2: {
          title: "शादी की कार किराया: अपना विशेष दिन परफेक्ट बनाएं",
          excerpt: "दुबई में अपनी शादी के लिए परफेक्ट रोल्स-रॉयस चुनने के लिए पूरी गाइड, सजावट विकल्प और पैकेज सहित।",
          author: "सारा जॉनसन",
          date: "8 दिसंबर 2024",
          readTime: "5 मिनट पढ़ना"
        },
        article3: {
          title: "कॉर्पोरेट कार रेंटल: बिजनेस ट्रैवल को बेहतर बनाना",
          excerpt: "लक्जरी कार रेंटल कैसे आपकी कंपनी की छवि बढ़ा सकती है और बिजनेस यात्रियों के लिए व्यावहारिक लाभ प्रदान कर सकती है।",
          author: "डेविड चेन",
          date: "5 दिसंबर 2024",
          readTime: "7 मिनट पढ़ना"
        },
        article4: {
          title: "रोल्स-रॉयस बनाम बेंटले: एक लक्जरी तुलना",
          excerpt: "दो लक्जरी ऑटोमोटिव आइकन की गहरी तुलना जो आपकी जरूरतों के लिए परफेक्ट रेंटल चुनने में मदद करेगी।",
          author: "माइकल थॉम्पसन",
          date: "3 दिसंबर 2024",
          readTime: "9 मिनट पढ़ना"
        },
        article5: {
          title: "दुबई की लक्जरी कार संस्कृति: एक गहरी खोज",
          excerpt: "दुबई के लक्जरी ऑटोमोबाइल के प्रति आकर्षण का अन्वेषण और क्यों रोल्स-रॉयस अभी भी अंतिम स्टेटस सिंबल है।",
          author: "फातिमा अल-ज़हरा",
          date: "30 नवंबर 2024",
          readTime: "6 मिनट पढ़ना"
        },
        article6: {
          title: "रखरखाव और देखभाल: पर्दे के पीछे",
          excerpt: "जानें कि हम अपने रोल्स-रॉयस फ्लीट का रखरखाव कैसे करते हैं ताकि हर वाहन लक्जरी और प्रदर्शन के उच्चतम मानकों को पूरा करे।",
          author: "तकनीकी टीम",
          date: "28 नवंबर 2024",
          readTime: "4 मिनट पढ़ना"
        },
        article7: {
          title: "फोटोग्राफी टिप्स: परफेक्ट लक्जरी कार शॉट्स कैप्चर करना",
          excerpt: "रोल्स-रॉयस वाहनों की फोटोग्राफी के लिए प्रोफेशनल टिप्स, चाहे व्यक्तिगत यादों के लिए हो या प्रोफेशनल शूट्स के लिए।",
          author: "जेम्स रॉड्रिग्ज",
          date: "25 नवंबर 2024",
          readTime: "5 मिनट पढ़ना"
        }
      },
      pagination: {
        prev: "पिछला",
        next: "अगला",
        page: "पेज"
      },
      search: {
        placeholder: "लेख खोजें...",
        noResults: "कोई लेख नहीं मिला",
        resultsFor: "परिणाम"
      },
      newsletter: {
        title: "अपडेट रहें",
        description: "नवीनतम लक्जरी कार अंतर्दृष्टि और विशेष ऑफर्स के लिए हमारे न्यूज़लेटर की सदस्यता लें।",
        subscribe: "सब्सक्राइब करें",
        email: "अपना ईमेल दर्ज करें"
      }
    }
  }
};

/**
 * دمج المفاتيح الجديدة مع الملف الموجود
 */
function mergeTranslations(existingTranslations, newTranslations) {
  const result = { ...existingTranslations };
  
  for (const [key, value] of Object.entries(newTranslations)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result[key] = mergeTranslations(result[key] || {}, value);
    } else {
      result[key] = value;
    }
  }
  
  return result;
}

/**
 * إضافة المفاتيح للغة معينة
 */
function addBlogKeys(language, translations) {
  const commonPath = path.join(__dirname, '..', 'public', 'locales', language, 'common.json');
  
  try {
    let existingTranslations = {};
    if (fs.existsSync(commonPath)) {
      existingTranslations = JSON.parse(fs.readFileSync(commonPath, 'utf8'));
    }
    
    const updatedTranslations = mergeTranslations(existingTranslations, translations);
    
    fs.writeFileSync(commonPath, JSON.stringify(updatedTranslations, null, 2), 'utf8');
    console.log(`✅ تم تحديث ترجمة ${language}`);
    
  } catch (error) {
    console.error(`❌ خطأ في تحديث ${language}:`, error.message);
  }
}

/**
 * التشغيل الرئيسي
 */
console.log('🔧 بدء إصلاح مفاتيح ترجمة المدونة...\n');

LANGUAGES.forEach(lang => {
  if (BLOG_TRANSLATIONS[lang]) {
    addBlogKeys(lang, BLOG_TRANSLATIONS[lang]);
  }
});

console.log('\n✅ تم إصلاح جميع مفاتيح ترجمة المدونة!');
console.log('\n📋 ما تم إضافته:');
console.log('- blog.categories.* - فئات المقالات');
console.log('- blog.featured.* - المقال المميز');
console.log('- blog.articles.* - 7 مقالات رئيسية');
console.log('- blog.pagination.* - التنقل بين الصفحات');
console.log('- blog.search.* - البحث');
console.log('- blog.newsletter.* - النشرة الإخبارية');

console.log('\n🔄 إعادة تشغيل السيرفر مطلوبة لتحميل التغييرات:');
console.log('npm run dev:restart'); 
#!/usr/bin/env node

/**
 * إصلاح مفاتيح ترجمة صفحة نخلة جميرا المفقودة
 * يضيف جميع مفاتيح locations.palmJumeirah.* المطلوبة إلى common.json
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * مفاتيح صفحة نخلة جميرا المفقودة
 */
const PALM_TRANSLATIONS = {
  en: {
    locations: {
      palmJumeirah: {
        hero: {
          title: "Palm Jumeirah",
          subtitle: "The World's Largest Artificial Island",
          badge: "Iconic Man-Made Wonder",
          bookButton: "Book Your Experience",
          exploreButton: "Explore Experiences"
        },
        whyChoose: {
          title: "Why Choose Palm Jumeirah",
          beach: {
            title: "Private Beaches",
            description: "Exclusive access to pristine private beaches and crystal-clear waters"
          },
          hotels: {
            title: "Luxury Resorts",
            description: "World-renowned hotels offering unparalleled luxury and service"
          },
          villas: {
            title: "Premium Villas",
            description: "Exquisite waterfront villas with stunning views and privacy"
          }
        },
        stats: {
          deliveries: "Monthly Deliveries",
          deliveryTime: "Average Response",
          concierge: "Concierge Service",
          satisfaction: "Guest Satisfaction"
        },
        partnerHotels: {
          title: "Partner Hotels & Resorts",
          additional: "Free valet service at all partner locations",
          atlantis: {
            category: "Ultra-Luxury Resort",
            feature: "Underwater suites available"
          },
          oneAndOnly: {
            category: "Beach Resort",
            feature: "Adults-only tranquil escape"
          },
          waldorf: {
            category: "Luxury Hotel",
            feature: "Personalized butler service"
          },
          five: {
            category: "Beach Resort",
            feature: "Vibrant beachfront location"
          },
          anantara: {
            category: "Spa Resort",
            feature: "Over-water villas available"
          },
          w: {
            category: "Lifestyle Hotel",
            feature: "Modern luxury with beach access"
          }
        },
        drivingRoutes: {
          title: "Scenic Driving Routes",
          highlights: "Route Highlights",
          duration: "Duration",
          bestCar: "Best Vehicle",
          crescent: {
            name: "Crescent Drive",
            description: "Experience the full crescent of Palm Jumeirah with panoramic views",
            highlights: [
              "Atlantis views",
              "Private beach access",
              "Villa districts"
            ]
          },
          full: {
            name: "Full Island Tour",
            description: "Complete tour of the Palm from trunk to crescent tips",
            highlights: [
              "Trunk entrance",
              "Frond exploration",
              "Crescent finale"
            ]
          },
          night: {
            name: "Sunset & Night Route",
            description: "Perfect timing for golden hour and illuminated landmarks",
            highlights: [
              "Golden hour timing",
              "Illuminated Atlantis",
              "Skyline views"
            ]
          }
        },
        exclusiveExperiences: {
          title: "Exclusive Palm Experiences",
          bookButton: "Book Experience",
          beachClub: {
            title: "Elite Beach Club Access",
            description: "VIP access to Palm's most exclusive beach clubs with Rolls-Royce arrival",
            includes: [
              "VIP entrance with Rolls-Royce arrival",
              "Reserved cabana or daybed",
              "Complimentary drinks and gourmet dining",
              "Professional photography session"
            ],
            price: "AED 2,500 per day"
          },
          atlantis: {
            title: "Atlantis Royal Experience",
            description: "Ultimate luxury at Atlantis with exclusive Rolls-Royce transfers",
            includes: [
              "Rolls-Royce airport and hotel transfers",
              "Suite upgrade at Atlantis Royal",
              "Private dining at celebrity chef restaurants",
              "VIP access to Aquaventure and Lost Chambers"
            ],
            price: "AED 8,500 per day"
          },
          villa: {
            title: "Private Villa Experience",
            description: "Exclusive access to luxury Palm villas with full concierge service",
            includes: [
              "Private villa accommodation",
              "Dedicated Rolls-Royce and chauffeur",
              "Personal concierge and chef services",
              "Yacht charter and water sports access"
            ],
            price: "AED 15,000 per day"
          }
        },
        attractions: {
          title: "Top Attractions",
          distance: "Distance",
          bestTime: "Best Time",
          thePointe: {
            description: "Waterfront dining and entertainment destination with stunning fountain shows",
            distance: "Crescent tip",
            bestTime: "Evening for fountain shows"
          },
          nakheelMall: {
            description: "Premium shopping destination with luxury brands and dining",
            distance: "Palm Gateway",
            bestTime: "Afternoon shopping"
          },
          palmWestBeach: {
            description: "Public beach with water sports and beachfront dining options",
            distance: "West crescent",
            bestTime: "Morning and sunset"
          },
          theView: {
            description: "52nd-floor observation deck offering 360-degree views of Palm and Dubai",
            distance: "West side",
            bestTime: "Clear weather days"
          }
        },
        weather: {
          title: "Weather-Perfect Experiences"
        },
        fleet: {
          title: "Our Palm Fleet"
        },
        cta: {
          title: "Experience Palm Jumeirah in Ultimate Luxury",
          subtitle: "Book your Rolls-Royce for an unforgettable Palm Jumeirah experience",
          callButton: "Call Now",
          bookButton: "Book Experience",
          freeDelivery: "Free Resort Delivery",
          response: "15-Min Response",
          support: "24/7 Support"
        }
      }
    }
  },
  ar: {
    locations: {
      palmJumeirah: {
        hero: {
          title: "نخلة جميرا",
          subtitle: "أكبر جزيرة اصطناعية في العالم",
          badge: "أعجوبة من صنع الإنسان",
          bookButton: "احجز تجربتك",
          exploreButton: "استكشف التجارب"
        },
        whyChoose: {
          title: "لماذا تختار نخلة جميرا",
          beach: {
            title: "شواطئ خاصة",
            description: "وصول حصري للشواطئ الخاصة البكر والمياه الصافية"
          },
          hotels: {
            title: "منتجعات فاخرة",
            description: "فنادق مشهورة عالمياً تقدم فخامة وخدمة لا مثيل لها"
          },
          villas: {
            title: "فيلات مميزة",
            description: "فيلات واجهة مائية رائعة مع إطلالات خلابة وخصوصية"
          }
        },
        stats: {
          deliveries: "التوصيلات الشهرية",
          deliveryTime: "متوسط الاستجابة",
          concierge: "خدمة الكونسيرج",
          satisfaction: "رضا الضيوف"
        },
        partnerHotels: {
          title: "الفنادق والمنتجعات الشريكة",
          additional: "خدمة صف السيارات المجانية في جميع المواقع الشريكة",
          atlantis: {
            category: "منتجع فائق الفخامة",
            feature: "أجنحة تحت الماء متاحة"
          },
          oneAndOnly: {
            category: "منتجع شاطئي",
            feature: "ملاذ هادئ للبالغين فقط"
          },
          waldorf: {
            category: "فندق فاخر",
            feature: "خدمة الخادم الشخصي"
          },
          five: {
            category: "منتجع شاطئي",
            feature: "موقع نابض بالحياة على الشاطئ"
          },
          anantara: {
            category: "منتجع سبا",
            feature: "فيلات فوق الماء متاحة"
          },
          w: {
            category: "فندق عصري",
            feature: "فخامة حديثة مع الوصول للشاطئ"
          }
        },
        drivingRoutes: {
          title: "طرق القيادة الخلابة",
          highlights: "معالم الطريق",
          duration: "المدة",
          bestCar: "أفضل مركبة",
          crescent: {
            name: "قيادة الهلال",
            description: "اختبر الهلال الكامل لنخلة جميرا مع إطلالات بانورامية",
            highlights: [
              "إطلالات أتلانتس",
              "وصول للشاطئ الخاص",
              "أحياء الفيلات"
            ]
          },
          full: {
            name: "جولة الجزيرة الكاملة",
            description: "جولة كاملة للنخلة من الجذع إلى أطراف الهلال",
            highlights: [
              "مدخل الجذع",
              "استكشاف الفروع",
              "نهاية الهلال"
            ]
          },
          night: {
            name: "طريق الغروب والليل",
            description: "توقيت مثالي للساعة الذهبية والمعالم المضيئة",
            highlights: [
              "توقيت الساعة الذهبية",
              "أتلانتس المضيء",
              "إطلالات الأفق"
            ]
          }
        },
        exclusiveExperiences: {
          title: "تجارب النخلة الحصرية",
          bookButton: "احجز التجربة",
          beachClub: {
            title: "دخول نادي الشاطئ النخبة",
            description: "دخول VIP لأكثر نوادي الشاطئ حصرية في النخلة مع وصول رولز رويس",
            includes: [
              "مدخل VIP مع وصول رولز رويس",
              "كابانا أو سرير نهاري محجوز",
              "مشروبات مجانية وطعام فاخر",
              "جلسة تصوير احترافية"
            ],
            price: "2,500 درهم في اليوم"
          },
          atlantis: {
            title: "تجربة أتلانتس الملكية",
            description: "فخامة قصوى في أتلانتس مع نقل رولز رويس حصري",
            includes: [
              "نقل رولز رويس للمطار والفندق",
              "ترقية الجناح في أتلانتس الملكي",
              "طعام خاص في مطاعم الطهاة المشاهير",
              "دخول VIP لأكوافنتشر وغرف المفقودة"
            ],
            price: "8,500 درهم في اليوم"
          },
          villa: {
            title: "تجربة الفيلا الخاصة",
            description: "وصول حصري لفيلات النخلة الفاخرة مع خدمة كونسيرج كاملة",
            includes: [
              "إقامة فيلا خاصة",
              "رولز رويس مخصص وسائق",
              "خدمات كونسيرج وطاهي شخصي",
              "استئجار يخت ووصول للرياضات المائية"
            ],
            price: "15,000 درهم في اليوم"
          }
        },
        attractions: {
          title: "أهم المعالم",
          distance: "المسافة",
          bestTime: "أفضل وقت",
          thePointe: {
            description: "وجهة طعام وترفيه على الواجهة المائية مع عروض نوافير خلابة",
            distance: "طرف الهلال",
            bestTime: "المساء لعروض النوافير"
          },
          nakheelMall: {
            description: "وجهة تسوق مميزة مع علامات تجارية فاخرة ومطاعم",
            distance: "بوابة النخلة",
            bestTime: "تسوق بعد الظهر"
          },
          palmWestBeach: {
            description: "شاطئ عام مع رياضات مائية وخيارات طعام على الشاطئ",
            distance: "الهلال الغربي",
            bestTime: "الصباح والغروب"
          },
          theView: {
            description: "منصة مراقبة في الطابق 52 تقدم إطلالات 360 درجة للنخلة ودبي",
            distance: "الجانب الغربي",
            bestTime: "أيام الطقس الصافي"
          }
        },
        weather: {
          title: "تجارب مثالية للطقس"
        },
        fleet: {
          title: "أسطولنا في النخلة"
        },
        cta: {
          title: "اختبر نخلة جميرا بفخامة قصوى",
          subtitle: "احجز رولز رويس الخاص بك لتجربة نخلة جميرا لا تُنسى",
          callButton: "اتصل الآن",
          bookButton: "احجز التجربة",
          freeDelivery: "توصيل مجاني للمنتجع",
          response: "استجابة في 15 دقيقة",
          support: "دعم 24/7"
        }
      }
    }
  },
  ru: {
    locations: {
      palmJumeirah: {
        hero: {
          title: "Палм-Джумейра",
          subtitle: "Самый большой искусственный остров в мире",
          badge: "Рукотворное чудо",
          bookButton: "Забронировать опыт",
          exploreButton: "Исследовать впечатления"
        },
        whyChoose: {
          title: "Почему выбрать Палм-Джумейра",
          beach: {
            title: "Частные пляжи",
            description: "Эксклюзивный доступ к частным пляжам и кристально чистым водам"
          },
          hotels: {
            title: "Роскошные курорты",
            description: "Всемирно известные отели, предлагающие непревзойденную роскошь и сервис"
          },
          villas: {
            title: "Премиальные виллы",
            description: "Изысканные виллы на набережной с потрясающими видами и приватностью"
          }
        },
        stats: {
          deliveries: "Ежемесячных доставок",
          deliveryTime: "Среднее время отклика",
          concierge: "Консьерж-сервис",
          satisfaction: "Удовлетворенность гостей"
        },
        partnerHotels: {
          title: "Отели и курорты-партнеры",
          additional: "Бесплатная парковка с валет во всех партнерских локациях",
          atlantis: {
            category: "Ультра-роскошный курорт",
            feature: "Подводные сьюты доступны"
          },
          oneAndOnly: {
            category: "Пляжный курорт",
            feature: "Спокойное убежище только для взрослых"
          },
          waldorf: {
            category: "Роскошный отель",
            feature: "Персональный сервис дворецкого"
          },
          five: {
            category: "Пляжный курорт",
            feature: "Живописное расположение на пляже"
          },
          anantara: {
            category: "СПА-курорт",
            feature: "Виллы над водой доступны"
          },
          w: {
            category: "Лайфстайл отель",
            feature: "Современная роскошь с доступом к пляжу"
          }
        },
        drivingRoutes: {
          title: "Живописные маршруты",
          highlights: "Особенности маршрута",
          duration: "Продолжительность",
          bestCar: "Лучший автомобиль",
          crescent: {
            name: "Поездка по полумесяцу",
            description: "Испытайте полный полумесяц Палм-Джумейра с панорамными видами",
            highlights: [
              "Виды Атлантиса",
              "Доступ к частному пляжу",
              "Районы вилл"
            ]
          },
          full: {
            name: "Полный тур по острову",
            description: "Полный тур по Палме от ствола до кончиков полумесяца",
            highlights: [
              "Вход со ствола",
              "Исследование ветвей",
              "Финал полумесяца"
            ]
          },
          night: {
            name: "Маршрут заката и ночи",
            description: "Идеальное время для золотого часа и освещенных достопримечательностей",
            highlights: [
              "Время золотого часа",
              "Освещенный Атлантис",
              "Виды горизонта"
            ]
          }
        },
        exclusiveExperiences: {
          title: "Эксклюзивные впечатления Палмы",
          bookButton: "Забронировать опыт",
          beachClub: {
            title: "Доступ к элитному пляжному клубу",
            description: "VIP доступ к самым эксклюзивным пляжным клубам Палмы с прибытием на Rolls-Royce",
            includes: [
              "VIP вход с прибытием на Rolls-Royce",
              "Зарезервированная кабана или лежак",
              "Бесплатные напитки и изысканная кухня",
              "Профессиональная фотосессия"
            ],
            price: "2,500 дирхам в день"
          },
          atlantis: {
            title: "Опыт Атлантис Роял",
            description: "Окончательная роскошь в Атлантисе с эксклюзивными трансферами Rolls-Royce",
            includes: [
              "Трансферы Rolls-Royce из аэропорта и отеля",
              "Апгрейд сьюта в Атлантис Роял",
              "Частный ужин в ресторанах знаменитых шефов",
              "VIP доступ к Aquaventure и Lost Chambers"
            ],
            price: "8,500 дирхам в день"
          },
          villa: {
            title: "Опыт частной виллы",
            description: "Эксклюзивный доступ к роскошным виллам Палмы с полным консьерж-сервисом",
            includes: [
              "Размещение в частной вилле",
              "Выделенный Rolls-Royce и шофер",
              "Персональные услуги консьержа и шефа",
              "Аренда яхты и доступ к водным видам спорта"
            ],
            price: "15,000 дирхам в день"
          }
        },
        attractions: {
          title: "Топ достопримечательности",
          distance: "Расстояние",
          bestTime: "Лучшее время",
          thePointe: {
            description: "Набережное место для ужинов и развлечений с потрясающими фонтанными шоу",
            distance: "Кончик полумесяца",
            bestTime: "Вечер для фонтанных шоу"
          },
          nakheelMall: {
            description: "Премиальное место для шоппинга с люксовыми брендами и ресторанами",
            distance: "Ворота Палмы",
            bestTime: "Дневной шоппинг"
          },
          palmWestBeach: {
            description: "Общественный пляж с водными видами спорта и ресторанами на пляже",
            distance: "Западный полумесяц",
            bestTime: "Утро и закат"
          },
          theView: {
            description: "Смотровая площадка на 52-м этаже с видом 360 градусов на Палму и Дубай",
            distance: "Западная сторона",
            bestTime: "Дни ясной погоды"
          }
        },
        weather: {
          title: "Идеальные погодные впечатления"
        },
        fleet: {
          title: "Наш флот Палмы"
        },
        cta: {
          title: "Испытайте Палм-Джумейра в окончательной роскоши",
          subtitle: "Забронируйте свой Rolls-Royce для незабываемого опыта Палм-Джумейра",
          callButton: "Позвонить сейчас",
          bookButton: "Забронировать опыт",
          freeDelivery: "Бесплатная доставка на курорт",
          response: "15-мин отклик",
          support: "Поддержка 24/7"
        }
      }
    }
  },
  fr: {
    locations: {
      palmJumeirah: {
        hero: {
          title: "Palm Jumeirah",
          subtitle: "La plus grande île artificielle du monde",
          badge: "Merveille artificielle iconique",
          bookButton: "Réserver votre expérience",
          exploreButton: "Explorer les expériences"
        },
        whyChoose: {
          title: "Pourquoi choisir Palm Jumeirah",
          beach: {
            title: "Plages privées",
            description: "Accès exclusif aux plages privées immaculées et eaux cristallines"
          },
          hotels: {
            title: "Complexes de luxe",
            description: "Hôtels de renommée mondiale offrant un luxe et un service inégalés"
          },
          villas: {
            title: "Villas premium",
            description: "Villas exquises en bord de mer avec vues époustouflantes et intimité"
          }
        },
        stats: {
          deliveries: "Livraisons mensuelles",
          deliveryTime: "Réponse moyenne",
          concierge: "Service de conciergerie",
          satisfaction: "Satisfaction client"
        },
        partnerHotels: {
          title: "Hôtels et complexes partenaires",
          additional: "Service de voiturier gratuit dans tous les emplacements partenaires",
          atlantis: {
            category: "Complexe ultra-luxe",
            feature: "Suites sous-marines disponibles"
          },
          oneAndOnly: {
            category: "Complexe de plage",
            feature: "Retraite tranquille pour adultes seulement"
          },
          waldorf: {
            category: "Hôtel de luxe",
            feature: "Service de majordome personnalisé"
          },
          five: {
            category: "Complexe de plage",
            feature: "Emplacement vibrant en bord de mer"
          },
          anantara: {
            category: "Complexe spa",
            feature: "Villas sur pilotis disponibles"
          },
          w: {
            category: "Hôtel lifestyle",
            feature: "Luxe moderne avec accès plage"
          }
        },
        drivingRoutes: {
          title: "Routes panoramiques",
          highlights: "Points forts de l'itinéraire",
          duration: "Durée",
          bestCar: "Meilleur véhicule",
          crescent: {
            name: "Route du croissant",
            description: "Découvrez le croissant complet de Palm Jumeirah avec vues panoramiques",
            highlights: [
              "Vues sur Atlantis",
              "Accès plage privée",
              "Quartiers de villas"
            ]
          },
          full: {
            name: "Tour complet de l'île",
            description: "Tour complet de la Palm du tronc aux pointes du croissant",
            highlights: [
              "Entrée du tronc",
              "Exploration des frondes",
              "Finale du croissant"
            ]
          },
          night: {
            name: "Route coucher de soleil et nuit",
            description: "Timing parfait pour l'heure dorée et monuments illuminés",
            highlights: [
              "Timing heure dorée",
              "Atlantis illuminé",
              "Vues horizon"
            ]
          }
        },
        exclusiveExperiences: {
          title: "Expériences exclusives Palm",
          bookButton: "Réserver expérience",
          beachClub: {
            title: "Accès club de plage élite",
            description: "Accès VIP aux clubs de plage les plus exclusifs de Palm avec arrivée Rolls-Royce",
            includes: [
              "Entrée VIP avec arrivée Rolls-Royce",
              "Cabane ou lit de jour réservé",
              "Boissons gratuites et cuisine gastronomique",
              "Séance photo professionnelle"
            ],
            price: "2 500 AED par jour"
          },
          atlantis: {
            title: "Expérience Atlantis Royal",
            description: "Luxe ultime à Atlantis avec transferts exclusifs Rolls-Royce",
            includes: [
              "Transferts Rolls-Royce aéroport et hôtel",
              "Surclassement de suite à Atlantis Royal",
              "Dîner privé dans restaurants de chefs célèbres",
              "Accès VIP à Aquaventure et Lost Chambers"
            ],
            price: "8 500 AED par jour"
          },
          villa: {
            title: "Expérience villa privée",
            description: "Accès exclusif aux villas de luxe Palm avec service complet de conciergerie",
            includes: [
              "Hébergement villa privée",
              "Rolls-Royce dédié et chauffeur",
              "Services concierge et chef personnels",
              "Location yacht et accès sports nautiques"
            ],
            price: "15 000 AED par jour"
          }
        },
        attractions: {
          title: "Attractions principales",
          distance: "Distance",
          bestTime: "Meilleur moment",
          thePointe: {
            description: "Destination gastronomique et divertissement en bord de mer avec spectacles de fontaines époustouflants",
            distance: "Pointe du croissant",
            bestTime: "Soirée pour spectacles fontaines"
          },
          nakheelMall: {
            description: "Destination shopping premium avec marques de luxe et restaurants",
            distance: "Porte de Palm",
            bestTime: "Shopping après-midi"
          },
          palmWestBeach: {
            description: "Plage publique avec sports nautiques et options de restauration en bord de mer",
            distance: "Croissant ouest",
            bestTime: "Matin et coucher de soleil"
          },
          theView: {
            description: "Pont d'observation au 52e étage offrant des vues à 360 degrés sur Palm et Dubaï",
            distance: "Côté ouest",
            bestTime: "Journées de temps clair"
          }
        },
        weather: {
          title: "Expériences météo parfaites"
        },
        fleet: {
          title: "Notre flotte Palm"
        },
        cta: {
          title: "Découvrez Palm Jumeirah dans le luxe ultime",
          subtitle: "Réservez votre Rolls-Royce pour une expérience inoubliable de Palm Jumeirah",
          callButton: "Appeler maintenant",
          bookButton: "Réserver expérience",
          freeDelivery: "Livraison gratuite complexe",
          response: "Réponse 15 min",
          support: "Support 24/7"
        }
      }
    }
  },
  zh: {
    locations: {
      palmJumeirah: {
        hero: {
          title: "朱美拉棕榈岛",
          subtitle: "世界最大的人工岛",
          badge: "标志性人造奇迹",
          bookButton: "预订您的体验",
          exploreButton: "探索体验"
        },
        whyChoose: {
          title: "为什么选择朱美拉棕榈岛",
          beach: {
            title: "私人海滩",
            description: "独享原始私人海滩和清澈海水的专属通道"
          },
          hotels: {
            title: "豪华度假村",
            description: "世界知名酒店，提供无与伦比的奢华和服务"
          },
          villas: {
            title: "高端别墅",
            description: "精美的海滨别墅，拥有令人惊叹的景观和私密性"
          }
        },
        stats: {
          deliveries: "月度配送",
          deliveryTime: "平均响应",
          concierge: "礼宾服务",
          satisfaction: "客户满意度"
        },
        partnerHotels: {
          title: "合作酒店和度假村",
          additional: "所有合作地点免费代客泊车服务",
          atlantis: {
            category: "超奢华度假村",
            feature: "提供水下套房"
          },
          oneAndOnly: {
            category: "海滩度假村",
            feature: "仅限成人的宁静度假"
          },
          waldorf: {
            category: "豪华酒店",
            feature: "个性化管家服务"
          },
          five: {
            category: "海滩度假村",
            feature: "充满活力的海滨位置"
          },
          anantara: {
            category: "水疗度假村",
            feature: "提供水上别墅"
          },
          w: {
            category: "生活方式酒店",
            feature: "现代奢华与海滩通道"
          }
        },
        drivingRoutes: {
          title: "风景驾驶路线",
          highlights: "路线亮点",
          duration: "时长",
          bestCar: "最佳车型",
          crescent: {
            name: "新月驾驶",
            description: "体验朱美拉棕榈岛完整新月的全景视野",
            highlights: [
              "亚特兰蒂斯景观",
              "私人海滩通道",
              "别墅区"
            ]
          },
          full: {
            name: "全岛游览",
            description: "从主干到新月尖端的棕榈岛完整游览",
            highlights: [
              "主干入口",
              "叶状探索",
              "新月结局"
            ]
          },
          night: {
            name: "日落和夜间路线",
            description: "黄金时刻和灯光地标的完美时机",
            highlights: [
              "黄金时刻时机",
              "灯光亚特兰蒂斯",
              "天际线景观"
            ]
          }
        },
        exclusiveExperiences: {
          title: "棕榈岛专属体验",
          bookButton: "预订体验",
          beachClub: {
            title: "精英海滩俱乐部通道",
            description: "VIP通道进入棕榈岛最独特的海滩俱乐部，劳斯莱斯到达",
            includes: [
              "劳斯莱斯到达的VIP入场",
              "预订凉亭或日间床",
              "免费饮品和美食",
              "专业摄影会话"
            ],
            price: "每天2,500迪拉姆"
          },
          atlantis: {
            title: "亚特兰蒂斯皇家体验",
            description: "亚特兰蒂斯的终极奢华，独家劳斯莱斯接送",
            includes: [
              "劳斯莱斯机场和酒店接送",
              "亚特兰蒂斯皇家套房升级",
              "名厨餐厅私人用餐",
              "Aquaventure和失落空间VIP通道"
            ],
            price: "每天8,500迪拉姆"
          },
          villa: {
            title: "私人别墅体验",
            description: "独享棕榈岛豪华别墅，提供全套礼宾服务",
            includes: [
              "私人别墅住宿",
              "专用劳斯莱斯和司机",
              "个人礼宾和厨师服务",
              "游艇租赁和水上运动通道"
            ],
            price: "每天15,000迪拉姆"
          }
        },
        attractions: {
          title: "顶级景点",
          distance: "距离",
          bestTime: "最佳时间",
          thePointe: {
            description: "海滨餐饮和娱乐目的地，拥有令人惊叹的喷泉表演",
            distance: "新月尖端",
            bestTime: "晚上观看喷泉表演"
          },
          nakheelMall: {
            description: "高端购物目的地，拥有奢侈品牌和餐厅",
            distance: "棕榈岛门户",
            bestTime: "下午购物"
          },
          palmWestBeach: {
            description: "公共海滩，提供水上运动和海滨餐饮选择",
            distance: "西新月",
            bestTime: "清晨和日落"
          },
          theView: {
            description: "52层观景台，提供棕榈岛和迪拜360度全景",
            distance: "西侧",
            bestTime: "晴朗天气"
          }
        },
        weather: {
          title: "完美天气体验"
        },
        fleet: {
          title: "我们的棕榈岛车队"
        },
        cta: {
          title: "在终极奢华中体验朱美拉棕榈岛",
          subtitle: "预订您的劳斯莱斯，享受难忘的朱美拉棕榈岛体验",
          callButton: "立即致电",
          bookButton: "预订体验",
          freeDelivery: "免费度假村配送",
          response: "15分钟响应",
          support: "24/7支持"
        }
      }
    }
  },
  hi: {
    locations: {
      palmJumeirah: {
        hero: {
          title: "पाम जुमेराह",
          subtitle: "दुनिया का सबसे बड़ा कृत्रिम द्वीप",
          badge: "प्रतिष्ठित मानव निर्मित आश्चर्य",
          bookButton: "अपना अनुभव बुक करें",
          exploreButton: "अनुभव खोजें"
        },
        whyChoose: {
          title: "पाम जुमेराह क्यों चुनें",
          beach: {
            title: "निजी समुद्र तट",
            description: "प्राचीन निजी समुद्र तटों और क्रिस्टल-क्लियर पानी का विशेष पहुंच"
          },
          hotels: {
            title: "लक्जरी रिसॉर्ट्स",
            description: "विश्व प्रसिद्ध होटल जो अतुलनीय लक्जरी और सेवा प्रदान करते हैं"
          },
          villas: {
            title: "प्रीमियम विला",
            description: "शानदार दृश्यों और गोपनीयता के साथ उत्कृष्ट वॉटरफ्रंट विला"
          }
        },
        stats: {
          deliveries: "मासिक डिलीवरी",
          deliveryTime: "औसत प्रतिक्रिया",
          concierge: "कंसीयज सेवा",
          satisfaction: "अतिथि संतुष्टि"
        },
        partnerHotels: {
          title: "साझेदार होटल और रिसॉर्ट्स",
          additional: "सभी साझेदार स्थानों पर मुफ्त वैलेट सेवा",
          atlantis: {
            category: "अल्ट्रा-लक्जरी रिसॉर्ट",
            feature: "पानी के नीचे सूट उपलब्ध"
          },
          oneAndOnly: {
            category: "बीच रिसॉर्ट",
            feature: "केवल वयस्कों के लिए शांत पलायन"
          },
          waldorf: {
            category: "लक्जरी होटल",
            feature: "व्यक्तिगत बटलर सेवा"
          },
          five: {
            category: "बीच रिसॉर्ट",
            feature: "जीवंत बीचफ्रंट स्थान"
          },
          anantara: {
            category: "स्पा रिसॉर्ट",
            feature: "पानी के ऊपर विला उपलब्ध"
          },
          w: {
            category: "लाइफस्टाइल होटल",
            feature: "बीच एक्सेस के साथ आधुनिक लक्जरी"
          }
        },
        drivingRoutes: {
          title: "प्राकृतिक ड्राइविंग रूट",
          highlights: "रूट हाइलाइट्स",
          duration: "अवधि",
          bestCar: "सर्वश्रेष्ठ वाहन",
          crescent: {
            name: "क्रिसेंट ड्राइव",
            description: "पैनोरामिक दृश्यों के साथ पाम जुमेराह के पूरे अर्धचंद्र का अनुभव करें",
            highlights: [
              "अटलांटिस दृश्य",
              "निजी समुद्र तट पहुंच",
              "विला जिले"
            ]
          },
          full: {
            name: "पूर्ण द्वीप टूर",
            description: "तने से अर्धचंद्र की नोकों तक पाम का पूरा टूर",
            highlights: [
              "तना प्रवेश",
              "फ्रंड एक्सप्लोरेशन",
              "अर्धचंद्र समापन"
            ]
          },
          night: {
            name: "सूर्यास्त और रात्रि मार्ग",
            description: "गोल्डन आवर और प्रकाशित स्थलों के लिए सही समय",
            highlights: [
              "गोल्डन आवर टाइमिंग",
              "प्रकाशित अटलांटिस",
              "स्काइलाइन दृश्य"
            ]
          }
        },
        exclusiveExperiences: {
          title: "विशेष पाम अनुभव",
          bookButton: "अनुभव बुक करें",
          beachClub: {
            title: "एलीट बीच क्लब एक्सेस",
            description: "रोल्स-रॉयस आगमन के साथ पाम के सबसे विशेष बीच क्लबों में VIP पहुंच",
            includes: [
              "रोल्स-रॉयस आगमन के साथ VIP प्रवेश",
              "आरक्षित कैबाना या डेबेड",
              "मुफ्त पेय और गोरमेट डाइनिंग",
              "पेशेवर फोटोग्राफी सेशन"
            ],
            price: "प्रति दिन 2,500 AED"
          },
          atlantis: {
            title: "अटलांटिस रॉयल अनुभव",
            description: "विशेष रोल्स-रॉयस ट्रांसफर के साथ अटलांटिस में परम लक्जरी",
            includes: [
              "रोल्स-रॉयस एयरपोर्ट और होटल ट्रांसफर",
              "अटलांटिस रॉयल में सूट अपग्रेड",
              "सेलिब्रिटी शेफ रेस्तरां में निजी डाइनिंग",
              "एक्वावेंचर और लॉस्ट चैंबर्स में VIP पहुंच"
            ],
            price: "प्रति दिन 8,500 AED"
          },
          villa: {
            title: "निजी विला अनुभव",
            description: "पूर्ण कंसीयज सेवा के साथ लक्जरी पाम विला की विशेष पहुंच",
            includes: [
              "निजी विला आवास",
              "समर्पित रोल्स-रॉयस और चालक",
              "व्यक्तिगत कंसीयज और शेफ सेवाएं",
              "यॉट चार्टर और वाटर स्पोर्ट्स पहुंच"
            ],
            price: "प्रति दिन 15,000 AED"
          }
        },
        attractions: {
          title: "शीर्ष आकर्षण",
          distance: "दूरी",
          bestTime: "सबसे अच्छा समय",
          thePointe: {
            description: "शानदार फाउंटेन शो के साथ वॉटरफ्रंट डाइनिंग और मनोरंजन गंतव्य",
            distance: "अर्धचंद्र की नोक",
            bestTime: "फाउंटेन शो के लिए शाम"
          },
          nakheelMall: {
            description: "लक्जरी ब्रांड और डाइनिंग के साथ प्रीमियम शॉपिंग गंतव्य",
            distance: "पाम गेटवे",
            bestTime: "दोपहर की खरीदारी"
          },
          palmWestBeach: {
            description: "वाटर स्पोर्ट्स और बीचफ्रंट डाइनिंग विकल्पों के साथ सार्वजनिक समुद्र तट",
            distance: "पश्चिम अर्धचंद्र",
            bestTime: "सुबह और सूर्यास्त"
          },
          theView: {
            description: "52वीं मंजिल का अवलोकन डेक पाम और दुबई के 360-डिग्री दृश्य प्रदान करता है",
            distance: "पश्चिम की ओर",
            bestTime: "साफ मौसम के दिन"
          }
        },
        weather: {
          title: "मौसम-परफेक्ट अनुभव"
        },
        fleet: {
          title: "हमारा पाम फ्लीट"
        },
        cta: {
          title: "परम लक्जरी में पाम जुमेराह का अनुभव करें",
          subtitle: "अविस्मरणीय पाम जुमेराह अनुभव के लिए अपना रोल्स-रॉयस बुक करें",
          callButton: "अभी कॉल करें",
          bookButton: "अनुभव बुक करें",
          freeDelivery: "मुफ्त रिसॉर्ट डिलीवरी",
          response: "15-मिनट प्रतिक्रिया",
          support: "24/7 सहायता"
        }
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
function addPalmKeys(language, translations) {
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
console.log('🔧 بدء إصلاح مفاتيح ترجمة صفحة نخلة جميرا...\n');

LANGUAGES.forEach(lang => {
  if (PALM_TRANSLATIONS[lang]) {
    addPalmKeys(lang, PALM_TRANSLATIONS[lang]);
  }
});

console.log('\n✅ تم إصلاح جميع مفاتيح ترجمة صفحة نخلة جميرا!');
console.log('\n📋 ما تم إضافته:');
console.log('- locations.palmJumeirah.hero.* - قسم البطل');
console.log('- locations.palmJumeirah.whyChoose.* - لماذا تختار النخلة');
console.log('- locations.palmJumeirah.stats.* - الإحصائيات');
console.log('- locations.palmJumeirah.partnerHotels.* - الفنادق الشريكة');
console.log('- locations.palmJumeirah.drivingRoutes.* - طرق القيادة');
console.log('- locations.palmJumeirah.exclusiveExperiences.* - التجارب الحصرية');
console.log('- locations.palmJumeirah.attractions.* - المعالم السياحية');
console.log('- locations.palmJumeirah.weather.* - الطقس');
console.log('- locations.palmJumeirah.fleet.* - الأسطول');
console.log('- locations.palmJumeirah.cta.* - دعوة للعمل');

console.log('\n🔄 إعادة تشغيل السيرفر مطلوبة لتحميل التغييرات:');
console.log('npm run dev:restart'); 
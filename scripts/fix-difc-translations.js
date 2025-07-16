#!/usr/bin/env node

/**
 * إصلاح مفاتيح ترجمة صفحة مركز دبي المالي العالمي المفقودة
 * يضيف جميع مفاتيح locations.difc.* المطلوبة إلى common.json
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * مفاتيح صفحة مركز دبي المالي العالمي المفقودة
 */
const DIFC_TRANSLATIONS = {
  en: {
    locations: {
      difc: {
        hero: {
          title: "DIFC",
          subtitle: "Dubai International Financial Centre",
          description: "Experience unparalleled luxury transportation in the heart of Dubai's financial district. Our premium Rolls-Royce fleet serves executives and professionals with discretion and excellence."
        },
        stats: {
          clients: "Financial Clients",
          service: "Premium Service",
          response: "Response Time",
          confidential: "Confidentiality"
        },
        corporateServices: {
          title: "Corporate Services",
          subtitle: "Tailored luxury transportation solutions for DIFC's financial and business community",
          executive: {
            title: "Executive Transport",
            description: "Dedicated luxury transportation for C-suite executives and board members",
            features: [
              "Phantom or Ghost at your disposal",
              "Professional chauffeur service",
              "Complete privacy and discretion"
            ]
          },
          board: {
            title: "Board Meeting Package",
            description: "Comprehensive transport solutions for board meetings and shareholder events",
            features: [
              "Multi-vehicle coordination",
              "Scheduled pickup and drop-off",
              "VIP lounge access arrangements"
            ]
          },
          client: {
            title: "Client Entertainment",
            description: "Impress international clients with luxury transportation experiences",
            features: [
              "Cullinan for distinguished arrivals",
              "City tour arrangements",
              "Restaurant and hotel transfers"
            ]
          },
          events: {
            title: "Corporate Events",
            description: "Fleet management for conferences, seminars, and corporate gatherings",
            features: [
              "Event coordination services",
              "Guest transportation management",
              "Flexible scheduling options"
            ]
          }
        },
        amenities: {
          title: "Business Amenities",
          wifi: "High-speed WiFi",
          privacy: "Privacy partitions",
          office: "Mobile office setup",
          refreshments: "Premium refreshments",
          newspaper: "Financial newspapers",
          charging: "Device charging stations",
          conference: "Conference call capability",
          security: "Enhanced security protocols"
        },
        fleet: {
          title: "DIFC Fleet",
          viewDetails: "View Details",
          phantom: {
            features: [
              "Ultimate luxury and prestige",
              "Spacious rear executive cabin",
              "Advanced privacy features"
            ]
          },
          ghost: {
            features: [
              "Perfect balance of luxury and performance",
              "Sophisticated technology integration",
              "Refined business environment"
            ]
          },
          cullinan: {
            features: [
              "Commanding presence and versatility",
              "Elevated seating position",
              "All-terrain luxury capability"
            ]
          }
        },
        landmarks: {
          title: "DIFC Landmarks",
          subtitle: "Strategic Location",
          description: "Positioned at the heart of Dubai's financial district, DIFC offers unrivaled access to the city's business ecosystem and luxury destinations.",
          away: "{{distance}} away",
          gate: {
            description: "Main entrance to Dubai's financial hub"
          },
          emirates: {
            description: "Iconic twin towers and business center"
          },
          wtc: {
            description: "International trade and exhibition center"
          },
          fourseasons: {
            description: "Five-star luxury hotel and residences"
          },
          ritz: {
            description: "Premium hospitality and dining"
          }
        },
        map: {
          title: "DIFC Location",
          coordinates: "25.2110°N, 55.2796°E",
          viewOnMap: "View on Google Maps"
        },
        packages: {
          title: "Corporate Packages",
          monthlyPackage: "Monthly Package",
          popular: "Most Popular",
          selectPackage: "Select Package",
          contactUs: "Contact Us",
          executive: {
            title: "Executive",
            price: "AED 15,000",
            features: [
              "40 hours monthly usage",
              "Ghost or equivalent vehicle",
              "Professional chauffeur"
            ]
          },
          chairman: {
            title: "Chairman",
            price: "AED 25,000",
            features: [
              "60 hours monthly usage",
              "Phantom or Cullinan access",
              "Priority booking guaranteed",
              "Airport and hotel transfers"
            ]
          },
          enterprise: {
            title: "Enterprise",
            price: "Custom Pricing",
            subtitle: "For organizations with 10+ employees",
            features: [
              "Unlimited monthly usage",
              "Full fleet access",
              "Dedicated account manager",
              "Custom service agreements"
            ]
          }
        },
        testimonials: {
          title: "Client Testimonials",
          ahmed: {
            name: "Ahmed Al-Rashid",
            title: "Managing Director, Regional Bank",
            text: "The level of professionalism and discretion provided is exactly what we need for our board meetings. The Phantom creates the right impression for our international partners."
          },
          sarah: {
            name: "Sarah Thompson",
            title: "Investment Fund Manager",
            text: "Reliability is crucial in our business. Having a dedicated Rolls-Royce service in DIFC gives us the peace of mind we need for important client meetings."
          }
        },
        cta: {
          title: "Experience DIFC in Luxury",
          subtitle: "Join Dubai's financial elite with our premium transportation services",
          bookButton: "Book Now",
          exploreButton: "Explore Corporate Services",
          hotline: "24/7 DIFC Hotline: +971 4 234 5678",
          email: "difc@rollsroycedubai.com"
        }
      }
    }
  },
  ar: {
    locations: {
      difc: {
        hero: {
          title: "مركز دبي المالي العالمي",
          subtitle: "Dubai International Financial Centre",
          description: "اختبر خدمات النقل الفاخرة التي لا مثيل لها في قلب المنطقة المالية في دبي. أسطولنا المتميز من رولز رويس يخدم المديرين التنفيذيين والمهنيين بسرية وتميز."
        },
        stats: {
          clients: "العملاء الماليون",
          service: "الخدمة المتميزة",
          response: "وقت الاستجابة",
          confidential: "السرية"
        },
        corporateServices: {
          title: "الخدمات المؤسسية",
          subtitle: "حلول نقل فاخرة مصممة خصيصاً لمجتمع الأعمال والمال في مركز دبي المالي العالمي",
          executive: {
            title: "النقل التنفيذي",
            description: "نقل فاخر مخصص للمديرين التنفيذيين وأعضاء مجلس الإدارة",
            features: [
              "فانتوم أو غوست تحت تصرفكم",
              "خدمة سائق محترف",
              "خصوصية وسرية كاملة"
            ]
          },
          board: {
            title: "باقة اجتماع مجلس الإدارة",
            description: "حلول نقل شاملة لاجتماعات مجلس الإدارة وفعاليات المساهمين",
            features: [
              "تنسيق مركبات متعددة",
              "استلام وتوصيل مجدول",
              "ترتيبات الوصول لصالة VIP"
            ]
          },
          client: {
            title: "ترفيه العملاء",
            description: "أبهر العملاء الدوليين بتجارب النقل الفاخرة",
            features: [
              "كولينان للوصول المتميز",
              "ترتيبات جولات المدينة",
              "نقل للمطاعم والفنادق"
            ]
          },
          events: {
            title: "الفعاليات المؤسسية",
            description: "إدارة الأسطول للمؤتمرات والندوات والتجمعات المؤسسية",
            features: [
              "خدمات تنسيق الفعاليات",
              "إدارة نقل الضيوف",
              "خيارات جدولة مرنة"
            ]
          }
        },
        amenities: {
          title: "وسائل الراحة التجارية",
          wifi: "واي فاي عالي السرعة",
          privacy: "حواجز خصوصية",
          office: "إعداد مكتب متنقل",
          refreshments: "مرطبات مميزة",
          newspaper: "صحف مالية",
          charging: "محطات شحن الأجهزة",
          conference: "إمكانية المؤتمرات الهاتفية",
          security: "بروتوكولات أمان معززة"
        },
        fleet: {
          title: "أسطول مركز دبي المالي العالمي",
          viewDetails: "عرض التفاصيل",
          phantom: {
            features: [
              "الفخامة والهيبة القصوى",
              "مقصورة تنفيذية خلفية واسعة",
              "ميزات خصوصية متقدمة"
            ]
          },
          ghost: {
            features: [
              "توازن مثالي بين الفخامة والأداء",
              "تكامل تقني متطور",
              "بيئة أعمال راقية"
            ]
          },
          cullinan: {
            features: [
              "حضور مهيب ومرونة",
              "موضع جلوس مرتفع",
              "قدرة فخامة في جميع التضاريس"
            ]
          }
        },
        landmarks: {
          title: "معالم مركز دبي المالي العالمي",
          subtitle: "موقع استراتيجي",
          description: "يقع في قلب المنطقة المالية في دبي، يوفر مركز دبي المالي العالمي وصولاً لا مثيل له لنظام الأعمال والوجهات الفاخرة في المدينة.",
          away: "على بعد {{distance}}",
          gate: {
            description: "المدخل الرئيسي لمركز دبي المالي"
          },
          emirates: {
            description: "الأبراج التوأمية الأيقونية ومركز الأعمال"
          },
          wtc: {
            description: "مركز التجارة والمعارض الدولية"
          },
          fourseasons: {
            description: "فندق وإقامات فاخرة خمس نجوم"
          },
          ritz: {
            description: "ضيافة ومطاعم مميزة"
          }
        },
        map: {
          title: "موقع مركز دبي المالي العالمي",
          coordinates: "25.2110°N, 55.2796°E",
          viewOnMap: "عرض على خرائط جوجل"
        },
        packages: {
          title: "الباقات المؤسسية",
          monthlyPackage: "باقة شهرية",
          popular: "الأكثر شعبية",
          selectPackage: "اختر الباقة",
          contactUs: "اتصل بنا",
          executive: {
            title: "التنفيذي",
            price: "15,000 درهم",
            features: [
              "40 ساعة استخدام شهرياً",
              "غوست أو مركبة مماثلة",
              "سائق محترف"
            ]
          },
          chairman: {
            title: "رئيس مجلس الإدارة",
            price: "25,000 درهم",
            features: [
              "60 ساعة استخدام شهرياً",
              "الوصول لفانتوم أو كولينان",
              "حجز أولوية مضمون",
              "نقل المطار والفندق"
            ]
          },
          enterprise: {
            title: "المؤسسة",
            price: "تسعير مخصص",
            subtitle: "للمؤسسات التي تضم 10+ موظفين",
            features: [
              "استخدام شهري غير محدود",
              "الوصول للأسطول الكامل",
              "مدير حساب مخصص",
              "اتفاقيات خدمة مخصصة"
            ]
          }
        },
        testimonials: {
          title: "شهادات العملاء",
          ahmed: {
            name: "أحمد الراشد",
            title: "المدير العام، بنك إقليمي",
            text: "مستوى الاحترافية والسرية المقدم هو بالضبط ما نحتاجه لاجتماعات مجلس الإدارة. فانتوم تخلق الانطباع الصحيح لشركائنا الدوليين."
          },
          sarah: {
            name: "سارة طومسون",
            title: "مديرة صندوق استثمار",
            text: "الموثوقية أمر بالغ الأهمية في عملنا. وجود خدمة رولز رويس مخصصة في مركز دبي المالي العالمي يمنحنا راحة البال التي نحتاجها للاجتماعات المهمة مع العملاء."
          }
        },
        cta: {
          title: "اختبر مركز دبي المالي العالمي بفخامة",
          subtitle: "انضم لنخبة دبي المالية مع خدمات النقل المتميزة لدينا",
          bookButton: "احجز الآن",
          exploreButton: "استكشف الخدمات المؤسسية",
          hotline: "خط ساخن مركز دبي المالي العالمي 24/7: +971 4 234 5678",
          email: "difc@rollsroycedubai.com"
        }
      }
    }
  },
  ru: {
    locations: {
      difc: {
        hero: {
          title: "DIFC",
          subtitle: "Дубайский международный финансовый центр",
          description: "Испытайте непревзойденные роскошные транспортные услуги в сердце финансового района Дубая. Наш премиальный флот Rolls-Royce обслуживает руководителей и профессионалов с дискретностью и совершенством."
        },
        stats: {
          clients: "Финансовые клиенты",
          service: "Премиальный сервис",
          response: "Время отклика",
          confidential: "Конфиденциальность"
        },
        corporateServices: {
          title: "Корпоративные услуги",
          subtitle: "Индивидуальные решения роскошного транспорта для финансового и делового сообщества DIFC",
          executive: {
            title: "Исполнительный транспорт",
            description: "Выделенный роскошный транспорт для топ-менеджеров и членов совета директоров",
            features: [
              "Phantom или Ghost в вашем распоряжении",
              "Профессиональная служба шофёра",
              "Полная конфиденциальность и дискретность"
            ]
          },
          board: {
            title: "Пакет заседаний совета",
            description: "Комплексные транспортные решения для заседаний совета и мероприятий акционеров",
            features: [
              "Координация нескольких автомобилей",
              "Запланированная подача и высадка",
              "Организация доступа к VIP-залу"
            ]
          },
          client: {
            title: "Развлечение клиентов",
            description: "Впечатлите международных клиентов роскошными транспортными услугами",
            features: [
              "Cullinan для выдающихся прибытий",
              "Организация городских туров",
              "Трансферы в рестораны и отели"
            ]
          },
          events: {
            title: "Корпоративные мероприятия",
            description: "Управление флотом для конференций, семинаров и корпоративных собраний",
            features: [
              "Услуги координации мероприятий",
              "Управление транспортом гостей",
              "Гибкие варианты планирования"
            ]
          }
        },
        amenities: {
          title: "Деловые удобства",
          wifi: "Высокоскоростной WiFi",
          privacy: "Перегородки приватности",
          office: "Мобильная офисная установка",
          refreshments: "Премиальные напитки",
          newspaper: "Финансовые газеты",
          charging: "Станции зарядки устройств",
          conference: "Возможность конференц-связи",
          security: "Усиленные протоколы безопасности"
        },
        fleet: {
          title: "Флот DIFC",
          viewDetails: "Посмотреть детали",
          phantom: {
            features: [
              "Окончательная роскошь и престиж",
              "Просторная задняя исполнительная кабина",
              "Продвинутые функции приватности"
            ]
          },
          ghost: {
            features: [
              "Идеальный баланс роскоши и производительности",
              "Сложная технологическая интеграция",
              "Утончённая деловая среда"
            ]
          },
          cullinan: {
            features: [
              "Командующее присутствие и универсальность",
              "Возвышенная позиция сидения",
              "Роскошь для всех типов местности"
            ]
          }
        },
        landmarks: {
          title: "Достопримечательности DIFC",
          subtitle: "Стратегическое расположение",
          description: "Расположенный в сердце финансового района Дубая, DIFC предлагает непревзойденный доступ к деловой экосистеме города и роскошным направлениям.",
          away: "{{distance}} в стороне",
          gate: {
            description: "Главный вход в финансовый центр Дубая"
          },
          emirates: {
            description: "Знаковые башни-близнецы и деловой центр"
          },
          wtc: {
            description: "Международный торговый и выставочный центр"
          },
          fourseasons: {
            description: "Пятизвёздочный роскошный отель и резиденции"
          },
          ritz: {
            description: "Премиальное гостеприимство и ресторанный сервис"
          }
        },
        map: {
          title: "Местоположение DIFC",
          coordinates: "25.2110°N, 55.2796°E",
          viewOnMap: "Посмотреть на Google Картах"
        },
        packages: {
          title: "Корпоративные пакеты",
          monthlyPackage: "Месячный пакет",
          popular: "Самый популярный",
          selectPackage: "Выбрать пакет",
          contactUs: "Связаться с нами",
          executive: {
            title: "Исполнительный",
            price: "15,000 дирхам",
            features: [
              "40 часов месячного использования",
              "Ghost или эквивалентный автомобиль",
              "Профессиональный шофёр"
            ]
          },
          chairman: {
            title: "Председатель",
            price: "25,000 дирхам",
            features: [
              "60 часов месячного использования",
              "Доступ к Phantom или Cullinan",
              "Гарантированное приоритетное бронирование",
              "Трансферы из аэропорта и отеля"
            ]
          },
          enterprise: {
            title: "Предприятие",
            price: "Индивидуальное ценообразование",
            subtitle: "Для организаций с 10+ сотрудниками",
            features: [
              "Неограниченное месячное использование",
              "Доступ к полному флоту",
              "Выделенный менеджер по работе с клиентами",
              "Индивидуальные соглашения об обслуживании"
            ]
          }
        },
        testimonials: {
          title: "Отзывы клиентов",
          ahmed: {
            name: "Ахмед Аль-Рашид",
            title: "Управляющий директор, Региональный банк",
            text: "Уровень профессионализма и дискретности именно то, что нам нужно для заседаний совета директоров. Phantom создаёт правильное впечатление для наших международных партнёров."
          },
          sarah: {
            name: "Сара Томпсон",
            title: "Менеджер инвестиционного фонда",
            text: "Надёжность критична в нашем бизнесе. Наличие выделенного сервиса Rolls-Royce в DIFC даёт нам спокойствие, которое нам нужно для важных встреч с клиентами."
          }
        },
        cta: {
          title: "Испытайте DIFC в роскоши",
          subtitle: "Присоединяйтесь к финансовой элите Дубая с нашими премиальными транспортными услугами",
          bookButton: "Забронировать сейчас",
          exploreButton: "Изучить корпоративные услуги",
          hotline: "Горячая линия DIFC 24/7: +971 4 234 5678",
          email: "difc@rollsroycedubai.com"
        }
      }
    }
  },
  fr: {
    locations: {
      difc: {
        hero: {
          title: "DIFC",
          subtitle: "Centre financier international de Dubaï",
          description: "Découvrez des services de transport de luxe inégalés au cœur du district financier de Dubaï. Notre flotte Rolls-Royce premium sert les dirigeants et professionnels avec discrétion et excellence."
        },
        stats: {
          clients: "Clients financiers",
          service: "Service premium",
          response: "Temps de réponse",
          confidential: "Confidentialité"
        },
        corporateServices: {
          title: "Services corporatifs",
          subtitle: "Solutions de transport de luxe sur mesure pour la communauté financière et d'affaires de DIFC",
          executive: {
            title: "Transport exécutif",
            description: "Transport de luxe dédié pour les dirigeants et membres du conseil d'administration",
            features: [
              "Phantom ou Ghost à votre disposition",
              "Service de chauffeur professionnel",
              "Intimité et discrétion complètes"
            ]
          },
          board: {
            title: "Forfait réunion du conseil",
            description: "Solutions de transport complètes pour réunions du conseil et événements d'actionnaires",
            features: [
              "Coordination de véhicules multiples",
              "Prise en charge et dépose planifiées",
              "Arrangements d'accès salon VIP"
            ]
          },
          client: {
            title: "Divertissement client",
            description: "Impressionnez les clients internationaux avec des expériences de transport de luxe",
            features: [
              "Cullinan pour des arrivées distinguées",
              "Arrangements de visites de la ville",
              "Transferts restaurants et hôtels"
            ]
          },
          events: {
            title: "Événements corporatifs",
            description: "Gestion de flotte pour conférences, séminaires et rassemblements corporatifs",
            features: [
              "Services de coordination d'événements",
              "Gestion du transport des invités",
              "Options de planification flexibles"
            ]
          }
        },
        amenities: {
          title: "Équipements d'affaires",
          wifi: "WiFi haut débit",
          privacy: "Cloisons d'intimité",
          office: "Configuration bureau mobile",
          refreshments: "Rafraîchissements premium",
          newspaper: "Journaux financiers",
          charging: "Stations de recharge d'appareils",
          conference: "Capacité d'appel de conférence",
          security: "Protocoles de sécurité renforcés"
        },
        fleet: {
          title: "Flotte DIFC",
          viewDetails: "Voir les détails",
          phantom: {
            features: [
              "Luxe et prestige ultimes",
              "Cabine exécutive arrière spacieuse",
              "Fonctionnalités d'intimité avancées"
            ]
          },
          ghost: {
            features: [
              "Équilibre parfait entre luxe et performance",
              "Intégration technologique sophistiquée",
              "Environnement d'affaires raffiné"
            ]
          },
          cullinan: {
            features: [
              "Présence dominante et polyvalence",
              "Position d'assise élevée",
              "Capacité de luxe tout-terrain"
            ]
          }
        },
        landmarks: {
          title: "Points de repère DIFC",
          subtitle: "Emplacement stratégique",
          description: "Positionné au cœur du district financier de Dubaï, DIFC offre un accès inégalé à l'écosystème commercial de la ville et aux destinations de luxe.",
          away: "{{distance}} de distance",
          gate: {
            description: "Entrée principale du centre financier de Dubaï"
          },
          emirates: {
            description: "Tours jumelles emblématiques et centre d'affaires"
          },
          wtc: {
            description: "Centre de commerce international et d'exposition"
          },
          fourseasons: {
            description: "Hôtel de luxe cinq étoiles et résidences"
          },
          ritz: {
            description: "Hospitalité premium et restauration"
          }
        },
        map: {
          title: "Emplacement DIFC",
          coordinates: "25.2110°N, 55.2796°E",
          viewOnMap: "Voir sur Google Maps"
        },
        packages: {
          title: "Forfaits corporatifs",
          monthlyPackage: "Forfait mensuel",
          popular: "Le plus populaire",
          selectPackage: "Sélectionner le forfait",
          contactUs: "Nous contacter",
          executive: {
            title: "Exécutif",
            price: "15 000 AED",
            features: [
              "40 heures d'utilisation mensuelle",
              "Ghost ou véhicule équivalent",
              "Chauffeur professionnel"
            ]
          },
          chairman: {
            title: "Président",
            price: "25 000 AED",
            features: [
              "60 heures d'utilisation mensuelle",
              "Accès Phantom ou Cullinan",
              "Réservation prioritaire garantie",
              "Transferts aéroport et hôtel"
            ]
          },
          enterprise: {
            title: "Entreprise",
            price: "Tarification personnalisée",
            subtitle: "Pour les organisations avec 10+ employés",
            features: [
              "Utilisation mensuelle illimitée",
              "Accès à la flotte complète",
              "Gestionnaire de compte dédié",
              "Accords de service personnalisés"
            ]
          }
        },
        testimonials: {
          title: "Témoignages clients",
          ahmed: {
            name: "Ahmed Al-Rashid",
            title: "Directeur général, Banque régionale",
            text: "Le niveau de professionnalisme et de discrétion fourni est exactement ce dont nous avons besoin pour nos réunions du conseil d'administration. La Phantom crée la bonne impression pour nos partenaires internationaux."
          },
          sarah: {
            name: "Sarah Thompson",
            title: "Gestionnaire de fonds d'investissement",
            text: "La fiabilité est cruciale dans notre entreprise. Avoir un service Rolls-Royce dédié à DIFC nous donne la tranquillité d'esprit dont nous avons besoin pour les réunions importantes avec les clients."
          }
        },
        cta: {
          title: "Découvrez DIFC dans le luxe",
          subtitle: "Rejoignez l'élite financière de Dubaï avec nos services de transport premium",
          bookButton: "Réserver maintenant",
          exploreButton: "Explorer les services corporatifs",
          hotline: "Hotline DIFC 24/7 : +971 4 234 5678",
          email: "difc@rollsroycedubai.com"
        }
      }
    }
  },
  zh: {
    locations: {
      difc: {
        hero: {
          title: "DIFC",
          subtitle: "迪拜国际金融中心",
          description: "在迪拜金融区的核心体验无与伦比的奢华交通服务。我们的高端劳斯莱斯车队以谨慎和卓越为高管和专业人士提供服务。"
        },
        stats: {
          clients: "金融客户",
          service: "高端服务",
          response: "响应时间",
          confidential: "保密性"
        },
        corporateServices: {
          title: "企业服务",
          subtitle: "为DIFC金融和商业社区量身定制的豪华交通解决方案",
          executive: {
            title: "行政交通",
            description: "为首席执行官和董事会成员提供专用豪华交通",
            features: [
              "幻影或古思特供您使用",
              "专业司机服务",
              "完全隐私和谨慎"
            ]
          },
          board: {
            title: "董事会会议套餐",
            description: "董事会会议和股东活动的综合交通解决方案",
            features: [
              "多车辆协调",
              "计划接送服务",
              "VIP休息室通道安排"
            ]
          },
          client: {
            title: "客户娱乐",
            description: "用豪华交通体验给国际客户留下深刻印象",
            features: [
              "库里南彰显尊贵到达",
              "城市游览安排",
              "餐厅和酒店接送"
            ]
          },
          events: {
            title: "企业活动",
            description: "会议、研讨会和企业聚会的车队管理",
            features: [
              "活动协调服务",
              "嘉宾交通管理",
              "灵活安排选项"
            ]
          }
        },
        amenities: {
          title: "商务设施",
          wifi: "高速WiFi",
          privacy: "隐私隔板",
          office: "移动办公设置",
          refreshments: "高端茶点",
          newspaper: "金融报纸",
          charging: "设备充电站",
          conference: "电话会议功能",
          security: "增强安全协议"
        },
        fleet: {
          title: "DIFC车队",
          viewDetails: "查看详情",
          phantom: {
            features: [
              "极致奢华和威望",
              "宽敞后排行政舱",
              "先进隐私功能"
            ]
          },
          ghost: {
            features: [
              "奢华与性能的完美平衡",
              "复杂技术集成",
              "精致商务环境"
            ]
          },
          cullinan: {
            features: [
              "强势存在和多功能性",
              "升高座椅位置",
              "全地形奢华能力"
            ]
          }
        },
        landmarks: {
          title: "DIFC地标",
          subtitle: "战略位置",
          description: "位于迪拜金融区的核心，DIFC提供无与伦比的城市商业生态系统和奢华目的地通道。",
          away: "距离{{distance}}",
          gate: {
            description: "迪拜金融中心主入口"
          },
          emirates: {
            description: "标志性双子塔和商务中心"
          },
          wtc: {
            description: "国际贸易和展览中心"
          },
          fourseasons: {
            description: "五星级豪华酒店和住宅"
          },
          ritz: {
            description: "高端接待和餐饮"
          }
        },
        map: {
          title: "DIFC位置",
          coordinates: "25.2110°N, 55.2796°E",
          viewOnMap: "在谷歌地图上查看"
        },
        packages: {
          title: "企业套餐",
          monthlyPackage: "月度套餐",
          popular: "最受欢迎",
          selectPackage: "选择套餐",
          contactUs: "联系我们",
          executive: {
            title: "行政",
            price: "15,000迪拉姆",
            features: [
              "每月40小时使用",
              "古思特或同级车辆",
              "专业司机"
            ]
          },
          chairman: {
            title: "董事长",
            price: "25,000迪拉姆",
            features: [
              "每月60小时使用",
              "幻影或库里南通道",
              "保证优先预订",
              "机场和酒店接送"
            ]
          },
          enterprise: {
            title: "企业",
            price: "定制价格",
            subtitle: "适用于10+员工的组织",
            features: [
              "无限月度使用",
              "全车队通道",
              "专属客户经理",
              "定制服务协议"
            ]
          }
        },
        testimonials: {
          title: "客户推荐",
          ahmed: {
            name: "艾哈迈德·拉希德",
            title: "总经理，地区银行",
            text: "提供的专业水平和谨慎正是我们董事会会议所需要的。幻影为我们的国际合作伙伴创造了正确的印象。"
          },
          sarah: {
            name: "萨拉·汤普森",
            title: "投资基金经理",
            text: "可靠性在我们的业务中至关重要。在DIFC拥有专门的劳斯莱斯服务给了我们重要客户会议所需的安心。"
          }
        },
        cta: {
          title: "在奢华中体验DIFC",
          subtitle: "加入迪拜金融精英，享受我们的高端交通服务",
          bookButton: "立即预订",
          exploreButton: "探索企业服务",
          hotline: "DIFC热线24/7：+971 4 234 5678",
          email: "difc@rollsroycedubai.com"
        }
      }
    }
  },
  hi: {
    locations: {
      difc: {
        hero: {
          title: "DIFC",
          subtitle: "दुबई अंतर्राष्ट्रीय वित्तीय केंद्र",
          description: "दुबई के वित्तीय जिले के हृदय में अतुलनीय लक्जरी परिवहन सेवाओं का अनुभव करें। हमारा प्रीमियम रोल्स-रॉयस बेड़ा कार्यकारियों और पेशेवरों को विवेक और उत्कृष्टता के साथ सेवा प्रदान करता है।"
        },
        stats: {
          clients: "वित्तीय ग्राहक",
          service: "प्रीमियम सेवा",
          response: "प्रतिक्रिया समय",
          confidential: "गोपनीयता"
        },
        corporateServices: {
          title: "कॉर्पोरेट सेवाएं",
          subtitle: "DIFC के वित्तीय और व्यापारिक समुदाय के लिए तैयार लक्जरी परिवहन समाधान",
          executive: {
            title: "कार्यकारी परिवहन",
            description: "सी-सूट अधिकारियों और बोर्ड सदस्यों के लिए समर्पित लक्जरी परिवहन",
            features: [
              "फैंटम या घोस्ट आपके निपटान में",
              "पेशेवर चालक सेवा",
              "पूर्ण गोपनीयता और विवेक"
            ]
          },
          board: {
            title: "बोर्ड मीटिंग पैकेज",
            description: "बोर्ड मीटिंग्स और शेयरधारक कार्यक्रमों के लिए व्यापक परिवहन समाधान",
            features: [
              "बहु-वाहन समन्वय",
              "निर्धारित पिकअप और ड्रॉप-ऑफ",
              "VIP लाउंज पहुंच व्यवस्था"
            ]
          },
          client: {
            title: "ग्राहक मनोरंजन",
            description: "लक्जरी परिवहन अनुभवों के साथ अंतर्राष्ट्रीय ग्राहकों को प्रभावित करें",
            features: [
              "विशिष्ट आगमन के लिए कुलिनन",
              "शहर दौरा व्यवस्था",
              "रेस्तरां और होटल स्थानांतरण"
            ]
          },
          events: {
            title: "कॉर्पोरेट कार्यक्रम",
            description: "सम्मेलनों, सेमिनारों और कॉर्पोरेट सभाओं के लिए फ्लीट प्रबंधन",
            features: [
              "कार्यक्रम समन्वय सेवाएं",
              "अतिथि परिवहन प्रबंधन",
              "लचीले शेड्यूलिंग विकल्प"
            ]
          }
        },
        amenities: {
          title: "व्यापारिक सुविधाएं",
          wifi: "हाई-स्पीड WiFi",
          privacy: "गोपनीयता विभाजन",
          office: "मोबाइल ऑफिस सेटअप",
          refreshments: "प्रीमियम जलपान",
          newspaper: "वित्तीय समाचारपत्र",
          charging: "डिवाइस चार्जिंग स्टेशन",
          conference: "कॉन्फ्रेंस कॉल क्षमता",
          security: "बढ़ाए गए सुरक्षा प्रोटोकॉल"
        },
        fleet: {
          title: "DIFC फ्लीट",
          viewDetails: "विवरण देखें",
          phantom: {
            features: [
              "परम लक्जरी और प्रतिष्ठा",
              "विशाल रियर एक्जीक्यूटिव केबिन",
              "उन्नत गोपनीयता सुविधाएं"
            ]
          },
          ghost: {
            features: [
              "लक्जरी और प्रदर्शन का सही संतुलन",
              "परिष्कृत तकनीकी एकीकरण",
              "सुरुचिपूर्ण व्यापारिक वातावरण"
            ]
          },
          cullinan: {
            features: [
              "प्रभावशाली उपस्थिति और बहुमुखी प्रतिभा",
              "ऊंचा बैठने की स्थिति",
              "ऑल-टेरेन लक्जरी क्षमता"
            ]
          }
        },
        landmarks: {
          title: "DIFC लैंडमार्क",
          subtitle: "रणनीतिक स्थान",
          description: "दुबई के वित्तीय जिले के हृदय में स्थित, DIFC शहर के व्यापारिक पारिस्थितिकी तंत्र और लक्जरी गंतव्यों तक अतुलनीय पहुंच प्रदान करता है।",
          away: "{{distance}} दूर",
          gate: {
            description: "दुबई के वित्तीय हब का मुख्य प्रवेश द्वार"
          },
          emirates: {
            description: "प्रतिष्ठित जुड़वां टावर और व्यापारिक केंद्र"
          },
          wtc: {
            description: "अंतर्राष्ट्रीय व्यापार और प्रदर्शनी केंद्र"
          },
          fourseasons: {
            description: "पांच सितारा लक्जरी होटल और निवास"
          },
          ritz: {
            description: "प्रीमियम आतिथ्य और भोजन"
          }
        },
        map: {
          title: "DIFC स्थान",
          coordinates: "25.2110°N, 55.2796°E",
          viewOnMap: "गूगल मैप्स पर देखें"
        },
        packages: {
          title: "कॉर्पोरेट पैकेज",
          monthlyPackage: "मासिक पैकेज",
          popular: "सबसे लोकप्रिय",
          selectPackage: "पैकेज चुनें",
          contactUs: "हमसे संपर्क करें",
          executive: {
            title: "कार्यकारी",
            price: "15,000 AED",
            features: [
              "मासिक 40 घंटे उपयोग",
              "घोस्ट या समकक्ष वाहन",
              "पेशेवर चालक"
            ]
          },
          chairman: {
            title: "अध्यक्ष",
            price: "25,000 AED",
            features: [
              "मासिक 60 घंटे उपयोग",
              "फैंटम या कुलिनन पहुंच",
              "प्राथमिकता बुकिंग गारंटीशुदा",
              "एयरपोर्ट और होटल ट्रांसफर"
            ]
          },
          enterprise: {
            title: "एंटरप्राइज",
            price: "कस्टम मूल्य निर्धारण",
            subtitle: "10+ कर्मचारियों वाले संगठनों के लिए",
            features: [
              "असीमित मासिक उपयोग",
              "पूर्ण फ्लीट पहुंच",
              "समर्पित खाता प्रबंधक",
              "कस्टम सेवा समझौते"
            ]
          }
        },
        testimonials: {
          title: "ग्राहक प्रशंसापत्र",
          ahmed: {
            name: "अहमद अल-राशिद",
            title: "प्रबंध निदेशक, क्षेत्रीय बैंक",
            text: "प्रदान की जाने वाली व्यावसायिकता और विवेक का स्तर बिल्कुल वही है जिसकी हमें अपनी बोर्ड मीटिंग्स के लिए आवश्यकता है। फैंटम हमारे अंतर्राष्ट्रीय भागीदारों के लिए सही छाप बनाता है।"
          },
          sarah: {
            name: "सारा थॉम्पसन",
            title: "निवेश फंड मैनेजर",
            text: "विश्वसनीयता हमारे व्यापार में महत्वपूर्ण है। DIFC में एक समर्पित रोल्स-रॉयस सेवा होना हमें महत्वपूर्ण ग्राहक मीटिंग्स के लिए आवश्यक मानसिक शांति देता है।"
          }
        },
        cta: {
          title: "लक्जरी में DIFC का अनुभव करें",
          subtitle: "हमारी प्रीमियम परिवहन सेवाओं के साथ दुबई के वित्तीय अभिजात वर्ग में शामिल हों",
          bookButton: "अभी बुक करें",
          exploreButton: "कॉर्पोरेट सेवाओं का अन्वेषण करें",
          hotline: "DIFC हॉटलाइन 24/7: +971 4 234 5678",
          email: "difc@rollsroycedubai.com"
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
function addDIFCKeys(language, translations) {
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
console.log('🔧 بدء إصلاح مفاتيح ترجمة صفحة مركز دبي المالي العالمي...\n');

LANGUAGES.forEach(lang => {
  if (DIFC_TRANSLATIONS[lang]) {
    addDIFCKeys(lang, DIFC_TRANSLATIONS[lang]);
  }
});

console.log('\n✅ تم إصلاح جميع مفاتيح ترجمة صفحة مركز دبي المالي العالمي!');
console.log('\n📋 ما تم إضافته:');
console.log('- locations.difc.hero.* - قسم البطل');
console.log('- locations.difc.stats.* - الإحصائيات');
console.log('- locations.difc.corporateServices.* - الخدمات المؤسسية');
console.log('- locations.difc.amenities.* - وسائل الراحة');
console.log('- locations.difc.fleet.* - الأسطول');
console.log('- locations.difc.landmarks.* - المعالم');
console.log('- locations.difc.map.* - الخريطة');
console.log('- locations.difc.packages.* - الباقات');
console.log('- locations.difc.testimonials.* - الشهادات');
console.log('- locations.difc.cta.* - دعوة للعمل');

console.log('\n🔄 إعادة تشغيل السيرفر مطلوبة لتحميل التغييرات:');
console.log('npm run dev:restart'); 
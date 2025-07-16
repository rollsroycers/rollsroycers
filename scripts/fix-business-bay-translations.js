#!/usr/bin/env node

/**
 * إصلاح مفاتيح ترجمة صفحة خليج الأعمال المفقودة
 * يضيف جميع مفاتيح locations.businessBay.* المطلوبة إلى common.json
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * مفاتيح صفحة خليج الأعمال المفقودة
 */
const BUSINESS_BAY_TRANSLATIONS = {
  en: {
    locations: {
      businessBay: {
        hero: {
          title: "Business Bay",
          subtitle: "Dubai's Premier Business District",
          badge: "Corporate Excellence Hub",
          cta: {
            book: "Book Executive Service",
            corporate: "Corporate Packages"
          }
        },
        whyHere: {
          title: "Why Business Bay?"
        },
        advantages: {
          businessHub: {
            title: "Business Hub",
            description: "Central location with major corporations and financial institutions"
          },
          connectivity: {
            title: "Prime Connectivity",
            description: "Direct access to DIFC, Downtown, and major highways"
          },
          dining: {
            title: "Executive Dining",
            description: "World-class restaurants perfect for business meetings"
          },
          hotels: {
            title: "Luxury Hotels",
            description: "Premium business hotels and conference facilities"
          }
        },
        towers: {
          title: "Major Business Towers",
          commercial: "Commercial Tower",
          mixedUse: "Mixed-Use Development",
          officeComplex: "Office Complex",
          businessHub: "Business Hub",
          businessCenter: "Business Center",
          note: "Free valet parking and building access at all major towers",
          features: {
            valetParking: "Complimentary valet parking",
            directAccess: "Direct building access",
            access247: "24/7 building access",
            vipEntrance: "VIP entrance service",
            basementParking: "Basement parking available",
            conciergeService: "Dedicated concierge service"
          }
        },
        services: {
          title: "Corporate Services",
          inquire: "Inquire Now",
          executive: {
            title: "Executive Transportation",
            description: "Daily transportation for C-suite executives and senior management",
            features: {
              morning: "Morning pickup service",
              evening: "Evening return service",
              flexible: "Flexible scheduling"
            },
            price: "From AED 1,500/day"
          },
          conference: {
            title: "Conference & Events",
            description: "Fleet services for business conferences and corporate events",
            features: {
              fleet: "Multiple vehicle coordination",
              chauffeurs: "Professional chauffeurs",
              vip: "VIP guest transportation"
            },
            price: "From AED 2,000/event"
          },
          monthly: {
            title: "Monthly Corporate",
            description: "Comprehensive monthly packages for businesses and executives",
            features: {
              dedicated: "Dedicated vehicle and chauffeur",
              account: "Corporate account management",
              priority: "Priority booking and service"
            },
            price: "From AED 25,000/month"
          }
        },
        destinations: {
          title: "Key Business Destinations",
          header: {
            destination: "Destination",
            time: "Travel Time",
            purpose: "Business Purpose"
          },
          dubaiMall: {
            distance: "8 minutes",
            purpose: "Client entertainment, luxury shopping"
          },
          difc: {
            distance: "5 minutes",
            purpose: "Financial services, banking meetings"
          },
          canal: {
            distance: "3 minutes",
            purpose: "Waterfront dining, business entertainment"
          },
          laMer: {
            distance: "15 minutes",
            purpose: "Beach meetings, relaxed business dining"
          },
          cityWalk: {
            distance: "10 minutes",
            purpose: "Retail partnerships, casual business meetings"
          },
          airport: {
            distance: "20 minutes",
            purpose: "International client pickups, departures"
          }
        },
        benefits: {
          title: "Business Benefits",
          client: {
            title: "Client Impression",
            point1: "Arrive in style for important meetings",
            point2: "Create lasting impressions with luxury transport",
            point3: "Demonstrate success and attention to detail",
            point4: "Build trust through premium service standards"
          },
          productivity: {
            title: "Executive Productivity",
            point1: "Work productively during commutes",
            point2: "Stress-free travel between meetings",
            point3: "Privacy for confidential calls",
            point4: "Punctual arrival for all appointments"
          }
        },
        testimonials: {
          title: "Corporate Testimonials"
        },
        fleet: {
          title: "Corporate Fleet"
        },
        cta: {
          title: "Elevate Your Business Presence",
          subtitle: "Join 200+ companies who trust us for executive transportation in Business Bay",
          call: "Call for Corporate Rates",
          packages: "View Corporate Packages"
        },
        stats: {
          clients: "Corporate Clients",
          delivery: "Average Delivery",
          support: "Business Support"
        }
      }
    }
  },
  ar: {
    locations: {
      businessBay: {
        hero: {
          title: "خليج الأعمال",
          subtitle: "منطقة الأعمال الرائدة في دبي",
          badge: "مركز التميز المؤسسي",
          cta: {
            book: "احجز الخدمة التنفيذية",
            corporate: "الباقات المؤسسية"
          }
        },
        whyHere: {
          title: "لماذا خليج الأعمال؟"
        },
        advantages: {
          businessHub: {
            title: "مركز الأعمال",
            description: "موقع مركزي مع الشركات الكبرى والمؤسسات المالية"
          },
          connectivity: {
            title: "اتصال مميز",
            description: "وصول مباشر لمركز دبي المالي العالمي ووسط المدينة والطرق الرئيسية"
          },
          dining: {
            title: "مطاعم تنفيذية",
            description: "مطاعم عالمية المستوى مثالية للاجتماعات التجارية"
          },
          hotels: {
            title: "فنادق فاخرة",
            description: "فنادق أعمال مميزة ومرافق مؤتمرات"
          }
        },
        towers: {
          title: "أبراج الأعمال الرئيسية",
          commercial: "برج تجاري",
          mixedUse: "تطوير متعدد الاستخدامات",
          officeComplex: "مجمع مكاتب",
          businessHub: "مركز أعمال",
          businessCenter: "مركز تجاري",
          note: "خدمة صف السيارات المجانية والوصول للمباني في جميع الأبراج الرئيسية",
          features: {
            valetParking: "خدمة صف السيارات المجانية",
            directAccess: "وصول مباشر للمبنى",
            access247: "وصول للمبنى 24/7",
            vipEntrance: "خدمة المدخل VIP",
            basementParking: "موقف سيارات تحت الأرض متاح",
            conciergeService: "خدمة كونسيرج مخصصة"
          }
        },
        services: {
          title: "الخدمات المؤسسية",
          inquire: "استفسر الآن",
          executive: {
            title: "النقل التنفيذي",
            description: "نقل يومي للمديرين التنفيذيين والإدارة العليا",
            features: {
              morning: "خدمة الاستلام الصباحي",
              evening: "خدمة العودة المسائية",
              flexible: "جدولة مرنة"
            },
            price: "من 1,500 درهم/يوم"
          },
          conference: {
            title: "المؤتمرات والفعاليات",
            description: "خدمات الأسطول للمؤتمرات التجارية والفعاليات المؤسسية",
            features: {
              fleet: "تنسيق مركبات متعددة",
              chauffeurs: "سائقون محترفون",
              vip: "نقل الضيوف VIP"
            },
            price: "من 2,000 درهم/فعالية"
          },
          monthly: {
            title: "الباقة المؤسسية الشهرية",
            description: "باقات شهرية شاملة للشركات والمديرين التنفيذيين",
            features: {
              dedicated: "مركبة وسائق مخصصان",
              account: "إدارة الحساب المؤسسي",
              priority: "حجز وخدمة أولوية"
            },
            price: "من 25,000 درهم/شهر"
          }
        },
        destinations: {
          title: "وجهات الأعمال الرئيسية",
          header: {
            destination: "الوجهة",
            time: "وقت السفر",
            purpose: "الغرض التجاري"
          },
          dubaiMall: {
            distance: "8 دقائق",
            purpose: "ترفيه العملاء، التسوق الفاخر"
          },
          difc: {
            distance: "5 دقائق",
            purpose: "الخدمات المالية، اجتماعات مصرفية"
          },
          canal: {
            distance: "3 دقائق",
            purpose: "مطاعم الواجهة المائية، ترفيه الأعمال"
          },
          laMer: {
            distance: "15 دقيقة",
            purpose: "اجتماعات الشاطئ، طعام أعمال مريح"
          },
          cityWalk: {
            distance: "10 دقائق",
            purpose: "شراكات التجزئة، اجتماعات أعمال غير رسمية"
          },
          airport: {
            distance: "20 دقيقة",
            purpose: "استقبال العملاء الدوليين، المغادرة"
          }
        },
        benefits: {
          title: "المزايا التجارية",
          client: {
            title: "انطباع العميل",
            point1: "الوصول بأناقة للاجتماعات المهمة",
            point2: "إنشاء انطباعات دائمة مع النقل الفاخر",
            point3: "إظهار النجاح والاهتمام بالتفاصيل",
            point4: "بناء الثقة من خلال معايير الخدمة المتميزة"
          },
          productivity: {
            title: "الإنتاجية التنفيذية",
            point1: "العمل بإنتاجية أثناء التنقلات",
            point2: "سفر خالٍ من التوتر بين الاجتماعات",
            point3: "خصوصية للمكالمات السرية",
            point4: "وصول دقيق لجميع المواعيد"
          }
        },
        testimonials: {
          title: "شهادات الشركات"
        },
        fleet: {
          title: "الأسطول المؤسسي"
        },
        cta: {
          title: "ارتق بحضورك التجاري",
          subtitle: "انضم لأكثر من 200 شركة تثق بنا في النقل التنفيذي في خليج الأعمال",
          call: "اتصل للأسعار المؤسسية",
          packages: "اعرض الباقات المؤسسية"
        },
        stats: {
          clients: "العملاء المؤسسيون",
          delivery: "متوسط التوصيل",
          support: "دعم الأعمال"
        }
      }
    }
  },
  ru: {
    locations: {
      businessBay: {
        hero: {
          title: "Бизнес Бей",
          subtitle: "Премиальный деловой район Дубая",
          badge: "Центр корпоративного превосходства",
          cta: {
            book: "Забронировать исполнительный сервис",
            corporate: "Корпоративные пакеты"
          }
        },
        whyHere: {
          title: "Почему Бизнес Бей?"
        },
        advantages: {
          businessHub: {
            title: "Деловой центр",
            description: "Центральное расположение с крупными корпорациями и финансовыми институтами"
          },
          connectivity: {
            title: "Премиальная связность",
            description: "Прямой доступ к DIFC, Downtown и основным магистралям"
          },
          dining: {
            title: "Исполнительные рестораны",
            description: "Рестораны мирового класса, идеальные для деловых встреч"
          },
          hotels: {
            title: "Роскошные отели",
            description: "Премиальные бизнес-отели и конференц-залы"
          }
        },
        towers: {
          title: "Основные бизнес-башни",
          commercial: "Коммерческая башня",
          mixedUse: "Многофункциональная застройка",
          officeComplex: "Офисный комплекс",
          businessHub: "Бизнес-центр",
          businessCenter: "Деловой центр",
          note: "Бесплатная парковка с валет и доступ в здания во всех крупных башнях",
          features: {
            valetParking: "Бесплатная парковка с валет",
            directAccess: "Прямой доступ в здание",
            access247: "Доступ в здание 24/7",
            vipEntrance: "VIP-вход",
            basementParking: "Подземная парковка доступна",
            conciergeService: "Выделенная консьерж-служба"
          }
        },
        services: {
          title: "Корпоративные услуги",
          inquire: "Запросить сейчас",
          executive: {
            title: "Исполнительный транспорт",
            description: "Ежедневный транспорт для топ-менеджеров и старшего руководства",
            features: {
              morning: "Утренняя служба подачи",
              evening: "Вечерняя служба возврата",
              flexible: "Гибкое планирование"
            },
            price: "От 1,500 дирхам/день"
          },
          conference: {
            title: "Конференции и мероприятия",
            description: "Услуги флота для деловых конференций и корпоративных мероприятий",
            features: {
              fleet: "Координация нескольких автомобилей",
              chauffeurs: "Профессиональные шофёры",
              vip: "VIP-транспорт для гостей"
            },
            price: "От 2,000 дирхам/мероприятие"
          },
          monthly: {
            title: "Месячный корпоративный",
            description: "Комплексные месячные пакеты для бизнеса и руководителей",
            features: {
              dedicated: "Выделенный автомобиль и шофёр",
              account: "Управление корпоративным счётом",
              priority: "Приоритетное бронирование и обслуживание"
            },
            price: "От 25,000 дирхам/месяц"
          }
        },
        destinations: {
          title: "Ключевые деловые направления",
          header: {
            destination: "Направление",
            time: "Время в пути",
            purpose: "Деловая цель"
          },
          dubaiMall: {
            distance: "8 минут",
            purpose: "Развлечение клиентов, роскошный шоппинг"
          },
          difc: {
            distance: "5 минут",
            purpose: "Финансовые услуги, банковские встречи"
          },
          canal: {
            distance: "3 минуты",
            purpose: "Рестораны на набережной, деловые развлечения"
          },
          laMer: {
            distance: "15 минут",
            purpose: "Пляжные встречи, непринуждённые деловые обеды"
          },
          cityWalk: {
            distance: "10 минут",
            purpose: "Розничные партнёрства, неформальные деловые встречи"
          },
          airport: {
            distance: "20 минут",
            purpose: "Встреча международных клиентов, отправления"
          }
        },
        benefits: {
          title: "Деловые преимущества",
          client: {
            title: "Впечатление клиента",
            point1: "Прибытие в стиле на важные встречи",
            point2: "Создание длительного впечатления роскошным транспортом",
            point3: "Демонстрация успеха и внимания к деталям",
            point4: "Построение доверия через премиальные стандарты обслуживания"
          },
          productivity: {
            title: "Исполнительная продуктивность",
            point1: "Продуктивная работа во время поездок",
            point2: "Безстрессовые поездки между встречами",
            point3: "Приватность для конфиденциальных звонков",
            point4: "Пунктуальное прибытие на все встречи"
          }
        },
        testimonials: {
          title: "Корпоративные отзывы"
        },
        fleet: {
          title: "Корпоративный флот"
        },
        cta: {
          title: "Повысьте ваше деловое присутствие",
          subtitle: "Присоединяйтесь к 200+ компаниям, которые доверяют нам исполнительный транспорт в Бизнес Бей",
          call: "Звоните за корпоративными тарифами",
          packages: "Просмотреть корпоративные пакеты"
        },
        stats: {
          clients: "Корпоративные клиенты",
          delivery: "Средняя доставка",
          support: "Деловая поддержка"
        }
      }
    }
  },
  fr: {
    locations: {
      businessBay: {
        hero: {
          title: "Business Bay",
          subtitle: "Premier district d'affaires de Dubaï",
          badge: "Centre d'excellence corporative",
          cta: {
            book: "Réserver service exécutif",
            corporate: "Forfaits corporatifs"
          }
        },
        whyHere: {
          title: "Pourquoi Business Bay ?"
        },
        advantages: {
          businessHub: {
            title: "Centre d'affaires",
            description: "Emplacement central avec grandes entreprises et institutions financières"
          },
          connectivity: {
            title: "Connectivité premium",
            description: "Accès direct au DIFC, Downtown et autoroutes principales"
          },
          dining: {
            title: "Restaurants exécutifs",
            description: "Restaurants de classe mondiale parfaits pour les réunions d'affaires"
          },
          hotels: {
            title: "Hôtels de luxe",
            description: "Hôtels d'affaires premium et installations de conférence"
          }
        },
        towers: {
          title: "Tours d'affaires principales",
          commercial: "Tour commerciale",
          mixedUse: "Développement à usage mixte",
          officeComplex: "Complexe de bureaux",
          businessHub: "Centre d'affaires",
          businessCenter: "Centre commercial",
          note: "Parking valet gratuit et accès aux bâtiments dans toutes les tours principales",
          features: {
            valetParking: "Parking valet gratuit",
            directAccess: "Accès direct au bâtiment",
            access247: "Accès au bâtiment 24/7",
            vipEntrance: "Service d'entrée VIP",
            basementParking: "Parking sous-sol disponible",
            conciergeService: "Service de conciergerie dédié"
          }
        },
        services: {
          title: "Services corporatifs",
          inquire: "Demander maintenant",
          executive: {
            title: "Transport exécutif",
            description: "Transport quotidien pour dirigeants et direction générale",
            features: {
              morning: "Service de prise en charge matinal",
              evening: "Service de retour en soirée",
              flexible: "Planification flexible"
            },
            price: "À partir de 1 500 AED/jour"
          },
          conference: {
            title: "Conférences et événements",
            description: "Services de flotte pour conférences d'affaires et événements corporatifs",
            features: {
              fleet: "Coordination de véhicules multiples",
              chauffeurs: "Chauffeurs professionnels",
              vip: "Transport VIP pour invités"
            },
            price: "À partir de 2 000 AED/événement"
          },
          monthly: {
            title: "Corporatif mensuel",
            description: "Forfaits mensuels complets pour entreprises et dirigeants",
            features: {
              dedicated: "Véhicule et chauffeur dédiés",
              account: "Gestion de compte corporatif",
              priority: "Réservation et service prioritaires"
            },
            price: "À partir de 25 000 AED/mois"
          }
        },
        destinations: {
          title: "Destinations d'affaires clés",
          header: {
            destination: "Destination",
            time: "Temps de trajet",
            purpose: "Objectif commercial"
          },
          dubaiMall: {
            distance: "8 minutes",
            purpose: "Divertissement clients, shopping de luxe"
          },
          difc: {
            distance: "5 minutes",
            purpose: "Services financiers, réunions bancaires"
          },
          canal: {
            distance: "3 minutes",
            purpose: "Restaurants en bord de mer, divertissement d'affaires"
          },
          laMer: {
            distance: "15 minutes",
            purpose: "Réunions de plage, repas d'affaires décontractés"
          },
          cityWalk: {
            distance: "10 minutes",
            purpose: "Partenariats de vente au détail, réunions d'affaires informelles"
          },
          airport: {
            distance: "20 minutes",
            purpose: "Prise en charge clients internationaux, départs"
          }
        },
        benefits: {
          title: "Avantages commerciaux",
          client: {
            title: "Impression client",
            point1: "Arriver avec style aux réunions importantes",
            point2: "Créer des impressions durables avec transport de luxe",
            point3: "Démontrer le succès et l'attention aux détails",
            point4: "Construire la confiance grâce aux standards de service premium"
          },
          productivity: {
            title: "Productivité exécutive",
            point1: "Travailler de manière productive pendant les trajets",
            point2: "Voyage sans stress entre les réunions",
            point3: "Intimité pour les appels confidentiels",
            point4: "Arrivée ponctuelle à tous les rendez-vous"
          }
        },
        testimonials: {
          title: "Témoignages corporatifs"
        },
        fleet: {
          title: "Flotte corporative"
        },
        cta: {
          title: "Élevez votre présence commerciale",
          subtitle: "Rejoignez 200+ entreprises qui nous font confiance pour le transport exécutif à Business Bay",
          call: "Appeler pour tarifs corporatifs",
          packages: "Voir forfaits corporatifs"
        },
        stats: {
          clients: "Clients corporatifs",
          delivery: "Livraison moyenne",
          support: "Support commercial"
        }
      }
    }
  },
  zh: {
    locations: {
      businessBay: {
        hero: {
          title: "商业湾",
          subtitle: "迪拜顶级商务区",
          badge: "企业卓越中心",
          cta: {
            book: "预订行政服务",
            corporate: "企业套餐"
          }
        },
        whyHere: {
          title: "为什么选择商业湾？"
        },
        advantages: {
          businessHub: {
            title: "商务中心",
            description: "中心位置，拥有大型企业和金融机构"
          },
          connectivity: {
            title: "优质连接",
            description: "直接通往DIFC、市中心和主要高速公路"
          },
          dining: {
            title: "行政餐厅",
            description: "世界级餐厅，完美适合商务会议"
          },
          hotels: {
            title: "豪华酒店",
            description: "高端商务酒店和会议设施"
          }
        },
        towers: {
          title: "主要商务大厦",
          commercial: "商业大厦",
          mixedUse: "混合用途开发",
          officeComplex: "办公综合体",
          businessHub: "商务中心",
          businessCenter: "商业中心",
          note: "所有主要大厦提供免费代客泊车和建筑入口",
          features: {
            valetParking: "免费代客泊车",
            directAccess: "直接建筑入口",
            access247: "24/7建筑入口",
            vipEntrance: "VIP入口服务",
            basementParking: "地下停车场可用",
            conciergeService: "专用礼宾服务"
          }
        },
        services: {
          title: "企业服务",
          inquire: "立即咨询",
          executive: {
            title: "行政交通",
            description: "为首席执行官和高级管理层提供日常交通",
            features: {
              morning: "晨间接送服务",
              evening: "晚间返程服务",
              flexible: "灵活安排"
            },
            price: "从1,500迪拉姆/天起"
          },
          conference: {
            title: "会议和活动",
            description: "为商务会议和企业活动提供车队服务",
            features: {
              fleet: "多车辆协调",
              chauffeurs: "专业司机",
              vip: "VIP嘉宾交通"
            },
            price: "从2,000迪拉姆/活动起"
          },
          monthly: {
            title: "月度企业套餐",
            description: "为企业和高管提供全面的月度套餐",
            features: {
              dedicated: "专用车辆和司机",
              account: "企业账户管理",
              priority: "优先预订和服务"
            },
            price: "从25,000迪拉姆/月起"
          }
        },
        destinations: {
          title: "主要商务目的地",
          header: {
            destination: "目的地",
            time: "旅行时间",
            purpose: "商务目的"
          },
          dubaiMall: {
            distance: "8分钟",
            purpose: "客户娱乐，奢侈品购物"
          },
          difc: {
            distance: "5分钟",
            purpose: "金融服务，银行会议"
          },
          canal: {
            distance: "3分钟",
            purpose: "海滨餐厅，商务娱乐"
          },
          laMer: {
            distance: "15分钟",
            purpose: "海滩会议，轻松商务用餐"
          },
          cityWalk: {
            distance: "10分钟",
            purpose: "零售合作，非正式商务会议"
          },
          airport: {
            distance: "20分钟",
            purpose: "国际客户接送，出发"
          }
        },
        benefits: {
          title: "商务优势",
          client: {
            title: "客户印象",
            point1: "为重要会议时尚到达",
            point2: "通过豪华交通创造持久印象",
            point3: "展示成功和对细节的关注",
            point4: "通过优质服务标准建立信任"
          },
          productivity: {
            title: "行政生产力",
            point1: "在通勤期间高效工作",
            point2: "会议间无压力旅行",
            point3: "机密通话的隐私",
            point4: "准时到达所有约会"
          }
        },
        testimonials: {
          title: "企业推荐"
        },
        fleet: {
          title: "企业车队"
        },
        cta: {
          title: "提升您的商务形象",
          subtitle: "加入200+信任我们在商业湾提供行政交通的公司",
          call: "致电获取企业价格",
          packages: "查看企业套餐"
        },
        stats: {
          clients: "企业客户",
          delivery: "平均配送",
          support: "商务支持"
        }
      }
    }
  },
  hi: {
    locations: {
      businessBay: {
        hero: {
          title: "बिजनेस बे",
          subtitle: "दुबई का प्रमुख व्यापारिक जिला",
          badge: "कॉर्पोरेट उत्कृष्टता केंद्र",
          cta: {
            book: "कार्यकारी सेवा बुक करें",
            corporate: "कॉर्पोरेट पैकेज"
          }
        },
        whyHere: {
          title: "बिजनेस बे क्यों?"
        },
        advantages: {
          businessHub: {
            title: "व्यापारिक केंद्र",
            description: "प्रमुख निगमों और वित्तीय संस्थानों के साथ केंद्रीय स्थान"
          },
          connectivity: {
            title: "प्रीमियम कनेक्टिविटी",
            description: "DIFC, डाउनटाउन और प्रमुख राजमार्गों तक प्रत्यक्ष पहुंच"
          },
          dining: {
            title: "कार्यकारी भोजन",
            description: "व्यापारिक बैठकों के लिए आदर्श विश्व स्तरीय रेस्तरां"
          },
          hotels: {
            title: "लक्जरी होटल",
            description: "प्रीमियम व्यापारिक होटल और सम्मेलन सुविधाएं"
          }
        },
        towers: {
          title: "प्रमुख व्यापारिक टावर",
          commercial: "वाणिज्यिक टावर",
          mixedUse: "मिश्रित उपयोग विकास",
          officeComplex: "कार्यालय परिसर",
          businessHub: "व्यापारिक केंद्र",
          businessCenter: "व्यापारिक केंद्र",
          note: "सभी प्रमुख टावरों में मुफ्त वैलेट पार्किंग और भवन पहुंच",
          features: {
            valetParking: "मुफ्त वैलेट पार्किंग",
            directAccess: "प्रत्यक्ष भवन पहुंच",
            access247: "24/7 भवन पहुंच",
            vipEntrance: "VIP प्रवेश सेवा",
            basementParking: "बेसमेंट पार्किंग उपलब्ध",
            conciergeService: "समर्पित कंसीयज सेवा"
          }
        },
        services: {
          title: "कॉर्पोरेट सेवाएं",
          inquire: "अभी पूछताछ करें",
          executive: {
            title: "कार्यकारी परिवहन",
            description: "सी-सूट अधिकारियों और वरिष्ठ प्रबंधन के लिए दैनिक परिवहन",
            features: {
              morning: "सुबह पिकअप सेवा",
              evening: "शाम वापसी सेवा",
              flexible: "लचीला शेड्यूलिंग"
            },
            price: "1,500 AED/दिन से"
          },
          conference: {
            title: "सम्मेलन और कार्यक्रम",
            description: "व्यापारिक सम्मेलनों और कॉर्पोरेट कार्यक्रमों के लिए फ्लीट सेवाएं",
            features: {
              fleet: "कई वाहन समन्वय",
              chauffeurs: "पेशेवर चालक",
              vip: "VIP अतिथि परिवहन"
            },
            price: "2,000 AED/कार्यक्रम से"
          },
          monthly: {
            title: "मासिक कॉर्पोरेट",
            description: "व्यापारों और अधिकारियों के लिए व्यापक मासिक पैकेज",
            features: {
              dedicated: "समर्पित वाहन और चालक",
              account: "कॉर्पोरेट खाता प्रबंधन",
              priority: "प्राथमिकता बुकिंग और सेवा"
            },
            price: "25,000 AED/महीने से"
          }
        },
        destinations: {
          title: "मुख्य व्यापारिक गंतव्य",
          header: {
            destination: "गंतव्य",
            time: "यात्रा समय",
            purpose: "व्यापारिक उद्देश्य"
          },
          dubaiMall: {
            distance: "8 मिनट",
            purpose: "ग्राहक मनोरंजन, लक्जरी शॉपिंग"
          },
          difc: {
            distance: "5 मिनट",
            purpose: "वित्तीय सेवाएं, बैंकिंग बैठकें"
          },
          canal: {
            distance: "3 मिनट",
            purpose: "वॉटरफ्रंट डाइनिंग, व्यापारिक मनोरंजन"
          },
          laMer: {
            distance: "15 मिनट",
            purpose: "बीच मीटिंग्स, आरामदायक व्यापारिक भोजन"
          },
          cityWalk: {
            distance: "10 मिनट",
            purpose: "खुदरा साझेदारी, अनौपचारिक व्यापारिक बैठकें"
          },
          airport: {
            distance: "20 मिनट",
            purpose: "अंतर्राष्ट्रीय ग्राहक पिकअप, प्रस्थान"
          }
        },
        benefits: {
          title: "व्यापारिक लाभ",
          client: {
            title: "ग्राहक प्रभाव",
            point1: "महत्वपूर्ण बैठकों के लिए स्टाइल में पहुंचें",
            point2: "लक्जरी परिवहन के साथ स्थायी प्रभाव बनाएं",
            point3: "सफलता और विवरण पर ध्यान प्रदर्शित करें",
            point4: "प्रीमियम सेवा मानकों के माध्यम से विश्वास निर्माण"
          },
          productivity: {
            title: "कार्यकारी उत्पादकता",
            point1: "कम्यूट के दौरान उत्पादक रूप से काम करें",
            point2: "बैठकों के बीच तनाव-मुक्त यात्रा",
            point3: "गोपनीय कॉल के लिए गोपनीयता",
            point4: "सभी नियुक्तियों के लिए समयनिष्ठ आगमन"
          }
        },
        testimonials: {
          title: "कॉर्पोरेट प्रशंसापत्र"
        },
        fleet: {
          title: "कॉर्पोरेट फ्लीट"
        },
        cta: {
          title: "अपनी व्यापारिक उपस्थिति को ऊंचा उठाएं",
          subtitle: "200+ कंपनियों में शामिल हों जो बिजनेस बे में कार्यकारी परिवहन के लिए हम पर भरोसा करती हैं",
          call: "कॉर्पोरेट दरों के लिए कॉल करें",
          packages: "कॉर्पोरेट पैकेज देखें"
        },
        stats: {
          clients: "कॉर्पोरेट ग्राहक",
          delivery: "औसत डिलीवरी",
          support: "व्यापारिक सहायता"
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
function addBusinessBayKeys(language, translations) {
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
console.log('🔧 بدء إصلاح مفاتيح ترجمة صفحة خليج الأعمال...\n');

LANGUAGES.forEach(lang => {
  if (BUSINESS_BAY_TRANSLATIONS[lang]) {
    addBusinessBayKeys(lang, BUSINESS_BAY_TRANSLATIONS[lang]);
  }
});

console.log('\n✅ تم إصلاح جميع مفاتيح ترجمة صفحة خليج الأعمال!');
console.log('\n📋 ما تم إضافته:');
console.log('- locations.businessBay.hero.* - قسم البطل');
console.log('- locations.businessBay.whyHere.* - لماذا هنا');
console.log('- locations.businessBay.advantages.* - المزايا الرئيسية');
console.log('- locations.businessBay.towers.* - أبراج الأعمال');
console.log('- locations.businessBay.services.* - الخدمات المؤسسية');
console.log('- locations.businessBay.destinations.* - الوجهات القريبة');
console.log('- locations.businessBay.benefits.* - الفوائد التجارية');
console.log('- locations.businessBay.testimonials.* - الشهادات');
console.log('- locations.businessBay.fleet.* - الأسطول');
console.log('- locations.businessBay.cta.* - دعوة للعمل');
console.log('- locations.businessBay.stats.* - الإحصائيات');

console.log('\n🔄 إعادة تشغيل السيرفر مطلوبة لتحميل التغييرات:');
console.log('npm run dev:restart'); 
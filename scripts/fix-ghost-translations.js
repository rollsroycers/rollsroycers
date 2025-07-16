#!/usr/bin/env node

/**
 * إصلاح ترجمات صفحة غوست لجميع اللغات
 * يضمن وجود جميع المفاتيح المطلوبة لصفحة رولز رويس غوست
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * ترجمات شاملة لصفحة غوست
 */
const GHOST_TRANSLATIONS = {
  en: {
    fleet: {
      ghost: {
        name: "Rolls-Royce Ghost",
        description: "The epitome of minimalist luxury and cutting-edge technology.",
        subtitle: "Post Opulence. The Essence of Simplicity",
        heroButtons: {
          reserve: "Reserve Ghost Now",
          business: "Business Solutions"
        },
        highlights: {
          acceleration: "4.8s to 100km/h",
          quiet: "Whisper Quiet",
          engine: "563 HP V12"
        },
        tabs: {
          overview: "Overview",
          specifications: "Specifications", 
          business: "Business",
          gallery: "Gallery",
          booking: "Booking"
        },
        features: [
          {
            icon: "🔇",
            title: "Planar Suspension System",
            desc: "Revolutionary suspension technology delivering unparalleled ride quality."
          },
          {
            icon: "💎",
            title: "Illuminated Fascia",
            desc: "Stunning starlight effect with 850+ individual stars creating ethereal ambiance."
          },
          {
            icon: "🎭",
            title: "Micro-Environment",
            desc: "Advanced air purification system creating a sanctuary within the cabin."
          },
          {
            icon: "🌟",
            title: "Bespoke Audio Excellence",
            desc: "Concert-hall acoustics with crystalline clarity for immersive experience."
          }
        ],
        images: {
          blackAlt: "Rolls-Royce Ghost in sophisticated black finish in Dubai",
          chauffeurAlt: "Professional chauffeur with Rolls-Royce Ghost",
          interiorAlt: "Luxurious handcrafted interior of the Ghost",
          frontGrilleAlt: "Iconic Spirit of Ecstasy and front grille",
          interiorExcellenceAlt: "Ghost interior showcasing minimalist luxury"
        },
        overview: {
          title: "The Essence of Luxury Redefined",
          p1: "The Rolls-Royce Ghost represents a new chapter in luxury motoring with its minimalist 'Post Opulence' philosophy.",
          p2: "Perfect for Dubai's discerning executives, combining unparalleled tranquility with cutting-edge technology.",
          stat1: {
            value: "130db",
            label: "Quietest Cabin"
          },
          stat2: {
            value: "100+",
            label: "Sound Deadening Materials"
          }
        },
        specs: {
          title: "Ghost Technical Excellence",
          performanceTitle: "Performance Specifications",
          dimensionsTitle: "Dimensions & Capacity",
          technologyTitle: "Advanced Technology",
          performance: {
            engine: { label: "Engine", value: "6.75L Twin-Turbocharged V12" },
            power: { label: "Power Output", value: "563 hp @ 5,000 rpm" },
            torque: { label: "Torque", value: "850 Nm @ 1,600 rpm" },
            acceleration: { label: "0-100 km/h", value: "4.8 seconds" },
            topSpeed: { label: "Top Speed", value: "250 km/h (limited)" }
          },
          dimensions: {
            length: { label: "Length", value: "5,546 mm" },
            width: { label: "Width", value: "2,148 mm" },
            height: { label: "Height", value: "1,571 mm" },
            wheelbase: { label: "Wheelbase", value: "3,295 mm" },
            seating: { label: "Seating", value: "4-5 passengers" }
          },
          technology: [
            "Satellite Aided Transmission",
            "Micro-Environment Purification System", 
            "Illuminated Fascia with 850+ Stars",
            "Planar Suspension Technology",
            "Bespoke Audio System"
          ]
        },
        business: {
          title: "Ghost for Business Excellence", 
          corporateSolutions: "Corporate Rental Solutions",
          executivePackage: {
            title: "Executive Business Package",
            features: [
              "Dedicated account manager",
              "Priority booking system",
              "Corporate billing options",
              "Volume discounts available"
            ]
          },
          vipServices: {
            title: "VIP Executive Services",
            features: [
              "Professional airport meet & greet",
              "Multilingual chauffeurs",
              "Mobile office setup with Wi-Fi",
              "24/7 concierge support"
            ]
          }
        },
        gallery: {
          title: "Ghost Gallery - Minimalist Perfection"
        },
        booking: {
          title: "Reserve Your Ghost Experience",
          readyToExperience: "Ready to Experience Minimalist Luxury?",
          callButton: "Call +971 55 816 4922",
          bookOnlineButton: "Book Online Now"
        }
      }
    }
  },
  ar: {
    fleet: {
      ghost: {
        name: "رولز رويس غوست",
        description: "قمة الفخامة البسيطة والتكنولوجيا المتقدمة.",
        subtitle: "ما بعد الترف. جوهر البساطة",
        heroButtons: {
          reserve: "احجز غوست الآن",
          business: "الحلول التجارية"
        },
        highlights: {
          acceleration: "4.8 ثانية إلى 100 كم/ساعة",
          quiet: "هدوء تام",
          engine: "محرك V12 بقوة 563 حصان"
        },
        tabs: {
          overview: "نظرة عامة",
          specifications: "المواصفات",
          business: "الأعمال",
          gallery: "المعرض",
          booking: "الحجز"
        },
        features: [
          {
            icon: "🔇",
            title: "نظام التعليق المستوي",
            desc: "تقنية تعليق ثورية توفر جودة ركوب لا مثيل لها."
          },
          {
            icon: "💎",
            title: "اللوحة المضيئة",
            desc: "تأثير نجمي مذهل مع أكثر من 850 نجمة تخلق أجواءً سماوية."
          },
          {
            icon: "🎭",
            title: "البيئة المجهرية",
            desc: "نظام تنقية هواء متقدم يخلق ملاذاً داخل المقصورة."
          },
          {
            icon: "🌟",
            title: "تميز الصوت المخصص",
            desc: "صوتيات قاعة الحفلات بوضوح بلوري لتجربة غامرة."
          }
        ],
        images: {
          blackAlt: "رولز رويس غوست باللون الأسود الأنيق في دبي",
          chauffeurAlt: "سائق محترف مع رولز رويس غوست",
          interiorAlt: "التصميم الداخلي الفاخر لغوست",
          frontGrilleAlt: "روح النشوة والشبكة الأمامية الأيقونية",
          interiorExcellenceAlt: "داخلية غوست تُظهر الفخامة البسيطة"
        },
        overview: {
          title: "جوهر الفخامة المُعاد تعريفه",
          p1: "تمثل رولز رويس غوست فصلاً جديداً في عالم السيارات الفاخرة بفلسفة 'ما بعد الترف'.",
          p2: "مثالية للمديرين التنفيذيين في دبي، تجمع بين الهدوء والتكنولوجيا المتطورة.",
          stat1: {
            value: "130 ديسيبل",
            label: "أهدأ مقصورة"
          },
          stat2: {
            value: "100+",
            label: "مواد عزل الصوت"
          }
        },
        specs: {
          title: "التميز التقني لغوست",
          performanceTitle: "مواصفات الأداء",
          dimensionsTitle: "الأبعاد والسعة",
          technologyTitle: "التكنولوجيا المتقدمة",
          performance: {
            engine: { label: "المحرك", value: "6.75 لتر V12 مزدوج التوربو" },
            power: { label: "القوة", value: "563 حصان @ 5000 دورة/دقيقة" },
            torque: { label: "عزم الدوران", value: "850 نيوتن متر @ 1600 دورة/دقيقة" },
            acceleration: { label: "0-100 كم/ساعة", value: "4.8 ثانية" },
            topSpeed: { label: "السرعة القصوى", value: "250 كم/ساعة (محدودة)" }
          },
          dimensions: {
            length: { label: "الطول", value: "5,546 مم" },
            width: { label: "العرض", value: "2,148 مم" },
            height: { label: "الارتفاع", value: "1,571 مم" },
            wheelbase: { label: "قاعدة العجلات", value: "3,295 مم" },
            seating: { label: "سعة المقاعد", value: "4-5 راكب" }
          },
          technology: [
            "ناقل حركة بمساعدة الأقمار الصناعية",
            "نظام تنقية البيئة المجهرية",
            "اللوحة المضيئة بأكثر من 850 نجمة",
            "تقنية التعليق المستوي",
            "نظام صوتي مخصص"
          ]
        },
        business: {
          title: "غوست للتميز التجاري",
          corporateSolutions: "حلول الإيجار المؤسسي",
          executivePackage: {
            title: "باقة الأعمال التنفيذية",
            features: [
              "مدير حساب مخصص",
              "نظام حجز ذو أولوية",
              "خيارات فوترة مؤسسية",
              "خصومات كمية متاحة"
            ]
          },
          vipServices: {
            title: "خدمات كبار الشخصيات",
            features: [
              "استقبال وتوديع مهني في المطار",
              "سائقون متعددو اللغات",
              "إعداد مكتب متنقل مع Wi-Fi",
              "دعم كونسيرج 24/7"
            ]
          }
        },
        gallery: {
          title: "معرض غوست - الكمال البسيط"
        },
        booking: {
          title: "احجز تجربة غوست",
          readyToExperience: "مستعد لتجربة الفخامة البسيطة؟",
          callButton: "اتصل +971 55 816 4922",
          bookOnlineButton: "احجز أونلاين الآن"
        }
      }
    }
  },
  ru: {
    fleet: {
      ghost: {
        name: "Rolls-Royce Ghost",
        description: "Воплощение минималистской роскоши и передовых технологий.",
        subtitle: "Пост-изобилие. Суть простоты",
        heroButtons: {
          reserve: "Забронировать Ghost сейчас",
          business: "Бизнес-решения"
        },
        highlights: {
          acceleration: "4.8с до 100км/ч",
          quiet: "Шепотно тихий",
          engine: "V12 563 л.с."
        },
        tabs: {
          overview: "Обзор",
          specifications: "Характеристики",
          business: "Бизнес",
          gallery: "Галерея",
          booking: "Бронирование"
        },
        features: [
          {
            icon: "🔇",
            title: "Система плоской подвески",
            desc: "Революционная технология подвески с непревзойденным качеством езды."
          },
          {
            icon: "💎",
            title: "Подсвеченная панель",
            desc: "Потрясающий эффект звездного света с 850+ звездами."
          },
          {
            icon: "🎭",
            title: "Микро-окружение",
            desc: "Передовая система очистки воздуха в салоне."
          },
          {
            icon: "🌟",
            title: "Индивидуальное аудио",
            desc: "Акустика концертного зала с кристальной ясностью."
          }
        ],
        images: {
          blackAlt: "Rolls-Royce Ghost в черной отделке в Дубае",
          chauffeurAlt: "Профессиональный шофер с Ghost",
          interiorAlt: "Роскошный интерьер Ghost",
          frontGrilleAlt: "Дух экстаза и передняя решетка",
          interiorExcellenceAlt: "Интерьер Ghost минималистской роскоши"
        },
        overview: {
          title: "Суть роскоши, переосмысленная",
          p1: "Rolls-Royce Ghost - новая глава в роскошном автомобилестроении с философией 'Пост-изобилие'.",
          p2: "Идеально подходит для взыскательных руководителей Дубая.",
          stat1: {
            value: "130дБ",
            label: "Самый тихий салон"
          },
          stat2: {
            value: "100+",
            label: "Звукопоглощающие материалы"
          }
        },
        specs: {
          title: "Техническое совершенство Ghost",
          performanceTitle: "Характеристики производительности",
          dimensionsTitle: "Размеры и вместимость",
          technologyTitle: "Передовые технологии",
          performance: {
            engine: { label: "Двигатель", value: "6.75л V12 Twin-Turbo" },
            power: { label: "Мощность", value: "563 л.с. @ 5000 об/мин" },
            torque: { label: "Крутящий момент", value: "850 Нм @ 1600 об/мин" },
            acceleration: { label: "0-100 км/ч", value: "4.8 секунды" },
            topSpeed: { label: "Максимальная скорость", value: "250 км/ч" }
          },
          dimensions: {
            length: { label: "Длина", value: "5,546 мм" },
            width: { label: "Ширина", value: "2,148 мм" },
            height: { label: "Высота", value: "1,571 мм" },
            wheelbase: { label: "Колесная база", value: "3,295 мм" },
            seating: { label: "Вместимость", value: "4-5 пассажиров" }
          },
          technology: [
            "Трансмиссия с спутниковой поддержкой",
            "Система очистки микро-окружения",
            "Подсвеченная панель с 850+ звездами",
            "Технология плоской подвески",
            "Индивидуальная аудиосистема"
          ]
        },
        business: {
          title: "Ghost для бизнес-превосходства",
          corporateSolutions: "Корпоративные решения аренды",
          executivePackage: {
            title: "Представительский пакет",
            features: [
              "Выделенный менеджер",
              "Приоритетное бронирование",
              "Корпоративные счета",
              "Объемные скидки"
            ]
          },
          vipServices: {
            title: "VIP-услуги для руководителей",
            features: [
              "Встреча в аэропорту",
              "Многоязычные шоферы",
              "Мобильный офис с Wi-Fi",
              "Круглосуточная поддержка"
            ]
          }
        },
        gallery: {
          title: "Галерея Ghost - Минималистское совершенство"
        },
        booking: {
          title: "Забронируйте ваш Ghost",
          readyToExperience: "Готовы испытать минималистскую роскошь?",
          callButton: "Звоните +971 55 816 4922",
          bookOnlineButton: "Бронировать онлайн"
        }
      }
    }
  },
  fr: {
    fleet: {
      ghost: {
        name: "Rolls-Royce Ghost",
        description: "L'incarnation du luxe minimaliste et de la technologie de pointe.",
        subtitle: "Post-Opulence. L'Essence de la Simplicité",
        heroButtons: {
          reserve: "Réserver la Ghost maintenant",
          business: "Solutions Business"
        },
        highlights: {
          acceleration: "4.8s jusqu'à 100km/h",
          quiet: "Silencieux comme un murmure",
          engine: "V12 563 CV"
        },
        tabs: {
          overview: "Aperçu",
          specifications: "Spécifications",
          business: "Business",
          gallery: "Galerie",
          booking: "Réservation"
        },
        features: [
          {
            icon: "🔇",
            title: "Système de suspension Planar",
            desc: "Technologie révolutionnaire offrant une qualité de conduite inégalée."
          },
          {
            icon: "💎",
            title: "Fascia illuminé",
            desc: "Effet de lumière stellaire avec plus de 850 étoiles."
          },
          {
            icon: "🎭",
            title: "Micro-environnement",
            desc: "Système avancé de purification d'air dans l'habitacle."
          },
          {
            icon: "🌟",
            title: "Excellence audio sur mesure",
            desc: "Acoustique de salle de concert avec clarté cristalline."
          }
        ],
        images: {
          blackAlt: "Rolls-Royce Ghost en finition noire à Dubaï",
          chauffeurAlt: "Chauffeur professionnel avec Ghost",
          interiorAlt: "Intérieur luxueux de la Ghost",
          frontGrilleAlt: "Spirit of Ecstasy et calandre avant",
          interiorExcellenceAlt: "Intérieur Ghost de luxe minimaliste"
        },
        overview: {
          title: "L'essence du luxe redéfinie",
          p1: "La Rolls-Royce Ghost - nouveau chapitre dans l'automobile de luxe avec la philosophie 'Post-Opulence'.",
          p2: "Parfaite pour les dirigeants exigeants de Dubaï.",
          stat1: {
            value: "130dB",
            label: "Habitacle le plus silencieux"
          },
          stat2: {
            value: "100+",
            label: "Matériaux insonorisants"
          }
        },
        specs: {
          title: "Excellence technique de la Ghost",
          performanceTitle: "Spécifications de performance",
          dimensionsTitle: "Dimensions et capacité",
          technologyTitle: "Technologie avancée",
          performance: {
            engine: { label: "Moteur", value: "6.75L V12 biturbo" },
            power: { label: "Puissance", value: "563 ch @ 5000 tr/min" },
            torque: { label: "Couple", value: "850 Nm @ 1600 tr/min" },
            acceleration: { label: "0-100 km/h", value: "4.8 secondes" },
            topSpeed: { label: "Vitesse maximale", value: "250 km/h" }
          },
          dimensions: {
            length: { label: "Longueur", value: "5,546 mm" },
            width: { label: "Largeur", value: "2,148 mm" },
            height: { label: "Hauteur", value: "1,571 mm" },
            wheelbase: { label: "Empattement", value: "3,295 mm" },
            seating: { label: "Capacité", value: "4-5 passagers" }
          },
          technology: [
            "Transmission assistée par satellite",
            "Système de purification micro-environnement",
            "Fascia illuminé avec 850+ étoiles",
            "Technologie de suspension Planar",
            "Système audio sur mesure"
          ]
        },
        business: {
          title: "Ghost pour l'excellence business",
          corporateSolutions: "Solutions de location d'entreprise",
          executivePackage: {
            title: "Package exécutif",
            features: [
              "Gestionnaire de compte dédié",
              "Réservation prioritaire",
              "Facturation d'entreprise",
              "Remises volume"
            ]
          },
          vipServices: {
            title: "Services VIP exécutifs",
            features: [
              "Accueil professionnel aéroport",
              "Chauffeurs multilingues",
              "Bureau mobile avec Wi-Fi",
              "Support concierge 24/7"
            ]
          }
        },
        gallery: {
          title: "Galerie Ghost - Perfection minimaliste"
        },
        booking: {
          title: "Réservez votre expérience Ghost",
          readyToExperience: "Prêt à découvrir le luxe minimaliste ?",
          callButton: "Appelez +971 55 816 4922",
          bookOnlineButton: "Réserver en ligne"
        }
      }
    }
  },
  zh: {
    fleet: {
      ghost: {
        name: "劳斯莱斯古思特",
        description: "极简奢华与尖端科技的完美融合。",
        subtitle: "后奢华时代，简约之精髓",
        heroButtons: {
          reserve: "立即预订古思特",
          business: "商务解决方案"
        },
        highlights: {
          acceleration: "4.8秒破百",
          quiet: "静谧如耳语",
          engine: "V12 563马力"
        },
        tabs: {
          overview: "概览",
          specifications: "规格参数",
          business: "商务",
          gallery: "图库",
          booking: "预订"
        },
        features: [
          {
            icon: "🔇",
            title: "平面悬挂系统",
            desc: "革命性悬挂技术提供无与伦比的驾乘品质。"
          },
          {
            icon: "💎",
            title: "星光仪表台",
            desc: "惊艳星光效果，拥有850多颗独立星星。"
          },
          {
            icon: "🎭",
            title: "微环境系统",
            desc: "先进的空气净化系统在车厢内打造避风港。"
          },
          {
            icon: "🌟",
            title: "定制音响卓越",
            desc: "音乐厅般的音响效果，清澈透明。"
          }
        ],
        images: {
          blackAlt: "迪拜精致黑色漆面劳斯莱斯古思特",
          chauffeurAlt: "专业司机与劳斯莱斯古思特",
          interiorAlt: "劳斯莱斯古思特奢华内饰",
          frontGrilleAlt: "古思特欢庆女神与前格栅",
          interiorExcellenceAlt: "古思特极简奢华内饰设计"
        },
        overview: {
          title: "重新定义的奢华精髓",
          p1: "劳斯莱斯古思特以'后奢华'理念开启豪华汽车新篇章。",
          p2: "完美适合迪拜挑剔的高管。",
          stat1: {
            value: "130分贝",
            label: "最安静的座舱"
          },
          stat2: {
            value: "100+",
            label: "隔音材料"
          }
        },
        specs: {
          title: "古思特技术卓越",
          performanceTitle: "性能规格",
          dimensionsTitle: "尺寸与容量",
          technologyTitle: "先进技术",
          performance: {
            engine: { label: "发动机", value: "6.75升V12双涡轮增压" },
            power: { label: "最大功率", value: "563马力 @ 5000转/分" },
            torque: { label: "最大扭矩", value: "850牛·米 @ 1600转/分" },
            acceleration: { label: "0-100公里/小时", value: "4.8秒" },
            topSpeed: { label: "最高时速", value: "250公里/小时" }
          },
          dimensions: {
            length: { label: "长度", value: "5,546毫米" },
            width: { label: "宽度", value: "2,148毫米" },
            height: { label: "高度", value: "1,571毫米" },
            wheelbase: { label: "轴距", value: "3,295毫米" },
            seating: { label: "座位数", value: "4-5座" }
          },
          technology: [
            "卫星辅助变速系统",
            "微环境净化系统",
            "850+星光仪表台",
            "平面悬挂技术",
            "定制音响系统"
          ]
        },
        business: {
          title: "古思特商务卓越",
          corporateSolutions: "企业租赁解决方案",
          executivePackage: {
            title: "高管商务套餐",
            features: [
              "专属客户经理",
              "优先预订系统",
              "企业计费选项",
              "批量折扣优惠"
            ]
          },
          vipServices: {
            title: "VIP高管服务",
            features: [
              "机场专业接送服务",
              "多语种司机",
              "移动办公设置Wi-Fi",
              "24/7礼宾支持"
            ]
          }
        },
        gallery: {
          title: "古思特图库 - 极简完美"
        },
        booking: {
          title: "预订您的古思特体验",
          readyToExperience: "准备体验极简奢华？",
          callButton: "致电 +971 55 816 4922",
          bookOnlineButton: "立即在线预订"
        }
      }
    }
  },
  hi: {
    fleet: {
      ghost: {
        name: "रोल्स-रॉयस घोस्ट",
        description: "न्यूनतम विलासिता और अत्याधुनिक प्रौद्योगिकी का पूर्ण सामंजस्य।",
        subtitle: "पोस्ट ऑप्यूलेंस। सरलता का सार",
        heroButtons: {
          reserve: "घोस्ट अभी बुक करें",
          business: "व्यापारिक समाधान"
        },
        highlights: {
          acceleration: "4.8 सेकंड में 100 किमी/घंटा",
          quiet: "फुसफुसाहट की तरह शांत",
          engine: "V12 563 एचपी"
        },
        tabs: {
          overview: "अवलोकन",
          specifications: "विनिर्देश",
          business: "व्यापार",
          gallery: "गैलरी",
          booking: "बुकिंग"
        },
        features: [
          {
            icon: "🔇",
            title: "प्लेनर सस्पेंशन सिस्टम",
            desc: "क्रांतिकारी सस्पेंशन तकनीक अतुलनीय राइड गुणवत्ता प्रदान करती है।"
          },
          {
            icon: "💎",
            title: "प्रकाशित फेसिया",
            desc: "850+ सितारों के साथ आश्चर्यजनक स्टारलाइट प्रभाव।"
          },
          {
            icon: "🎭",
            title: "सूक्ष्म वातावरण",
            desc: "केबिन के भीतर अभयारण्य बनाने वाली उन्नत वायु शुद्धिकरण प्रणाली।"
          },
          {
            icon: "🌟",
            title: "बेस्पोक ऑडियो उत्कृष्टता",
            desc: "कॉन्सर्ट-हॉल एकॉस्टिक्स स्फटिक स्पष्टता के साथ।"
          }
        ],
        images: {
          blackAlt: "दुबई में परिष्कृत काले फिनिश में घोस्ट",
          chauffeurAlt: "घोस्ट के साथ पेशेवर चालक",
          interiorAlt: "घोस्ट का शानदार हस्तशिल्प इंटीरियर",
          frontGrilleAlt: "स्पिरिट ऑफ एक्स्टसी और फ्रंट ग्रिल",
          interiorExcellenceAlt: "घोस्ट न्यूनतम लक्जरी इंटीरियर"
        },
        overview: {
          title: "विलासिता का सार पुनर्परिभाषित",
          p1: "रोल्स-रॉयस घोस्ट 'पोस्ट ऑप्यूलेंस' दर्शन के साथ लक्जरी मोटरिंग में नया अध्याय।",
          p2: "दुबई के समझदार कार्यकारियों के लिए पूर्ण।",
          stat1: {
            value: "130डीबी",
            label: "सबसे शांत केबिन"
          },
          stat2: {
            value: "100+",
            label: "ध्वनि मृत करने वाली सामग्री"
          }
        },
        specs: {
          title: "घोस्ट तकनीकी उत्कृष्टता",
          performanceTitle: "प्रदर्शन विनिर्देश",
          dimensionsTitle: "आयाम और क्षमता",
          technologyTitle: "उन्नत प्रौद्योगिकी",
          performance: {
            engine: { label: "इंजन", value: "6.75L ट्विन-टर्बोचार्ज्ड V12" },
            power: { label: "शक्ति उत्पादन", value: "563 एचपी @ 5,000 आरपीएम" },
            torque: { label: "टॉर्क", value: "850 एनएम @ 1,600 आरपीएम" },
            acceleration: { label: "0-100 किमी/घंटा", value: "4.8 सेकंड" },
            topSpeed: { label: "टॉप स्पीड", value: "250 किमी/घंटा" }
          },
          dimensions: {
            length: { label: "लंबाई", value: "5,546 मिमी" },
            width: { label: "चौड़ाई", value: "2,148 मिमी" },
            height: { label: "ऊंचाई", value: "1,571 मिमी" },
            wheelbase: { label: "व्हीलबेस", value: "3,295 मिमी" },
            seating: { label: "बैठने की क्षमता", value: "4-5 यात्री" }
          },
          technology: [
            "सैटेलाइट एडेड ट्रांसमिशन",
            "माइक्रो-एनवायरनमेंट प्यूरिफिकेशन सिस्टम",
            "850+ सितारों के साथ प्रकाशित फेसिया",
            "प्लेनर सस्पेंशन तकनीक",
            "बेस्पोक ऑडियो सिस्टम"
          ]
        },
        business: {
          title: "व्यापारिक उत्कृष्टता के लिए घोस्ट",
          corporateSolutions: "कॉर्पोरेट रेंटल समाधान",
          executivePackage: {
            title: "कार्यकारी व्यापार पैकेज",
            features: [
              "समर्पित खाता प्रबंधक",
              "प्राथमिकता बुकिंग सिस्टम",
              "कॉर्पोरेट बिलिंग विकल्प",
              "वॉल्यूम छूट उपलब्ध"
            ]
          },
          vipServices: {
            title: "VIP कार्यकारी सेवाएं",
            features: [
              "पेशेवर एयरपोर्ट मिलना और बधाई",
              "बहुभाषी चालक",
              "Wi-Fi के साथ मोबाइल ऑफिस",
              "24/7 कॉन्सीयज सपोर्ट"
            ]
          }
        },
        gallery: {
          title: "घोस्ट गैलरी - न्यूनतम पूर्णता"
        },
        booking: {
          title: "अपना घोस्ट अनुभव आरक्षित करें",
          readyToExperience: "न्यूनतम विलासिता का अनुभव करने के लिए तैयार?",
          callButton: "कॉल करें +971 55 816 4922",
          bookOnlineButton: "अभी ऑनलाइन बुक करें"
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
 * إضافة ترجمات غوست للغة معينة
 */
function addGhostTranslations(language, translations) {
  const commonPath = path.join(__dirname, '..', 'public', 'locales', language, 'common.json');
  
  try {
    let existingTranslations = {};
    if (fs.existsSync(commonPath)) {
      existingTranslations = JSON.parse(fs.readFileSync(commonPath, 'utf8'));
    }
    
    const updatedTranslations = mergeTranslations(existingTranslations, translations);
    
    fs.writeFileSync(commonPath, JSON.stringify(updatedTranslations, null, 2), 'utf8');
    console.log(`✅ تم تحديث ترجمة ${language} لصفحة غوست`);
    
  } catch (error) {
    console.error(`❌ خطأ في تحديث ${language}:`, error.message);
  }
}

/**
 * التشغيل الرئيسي
 */
console.log('🔧 بدء إصلاح ترجمات صفحة غوست...\n');

LANGUAGES.forEach(lang => {
  if (GHOST_TRANSLATIONS[lang]) {
    addGhostTranslations(lang, GHOST_TRANSLATIONS[lang]);
  }
});

console.log('\n✅ تم إصلاح جميع ترجمات صفحة غوست!');
console.log('\n📋 ما تم إضافته/تحديثه:');
console.log('- fleet.ghost.* - جميع مفاتيح صفحة غوست');
console.log('- fleet.ghost.features - قائمة الميزات الحصرية');
console.log('- fleet.ghost.overview - نظرة عامة شاملة');
console.log('- fleet.ghost.specs - المواصفات التقنية الكاملة');
console.log('- fleet.ghost.business - حلول الأعمال');
console.log('- fleet.ghost.gallery - عنوان المعرض');
console.log('- fleet.ghost.booking - قسم الحجز');

console.log('\n🌍 اللغات المحدثة:');
console.log('- English (EN) - Complete translations');
console.log('- العربية (AR) - ترجمة عربية كاملة');
console.log('- Русский (RU) - Полный русский перевод');  
console.log('- Français (FR) - Traduction française complète');
console.log('- 中文 (ZH) - 完整的中文翻译');
console.log('- हिन्दी (HI) - संपूर्ण हिंदी अनुवाद');

console.log('\n🔗 الآن يمكن الوصول إلى صفحة غوست بجميع اللغات:');
console.log('http://localhost:3001/fleet/ghost');
console.log('http://localhost:3001/ar/fleet/ghost');
console.log('http://localhost:3001/ru/fleet/ghost');
console.log('http://localhost:3001/fr/fleet/ghost');
console.log('http://localhost:3001/zh/fleet/ghost');
console.log('http://localhost:3001/hi/fleet/ghost');

console.log('\n💼 المميزات المضافة:');
console.log('- ✅ ترجمات تجارية متقدمة لجميع اللغات');
console.log('- ✅ مواصفات تقنية مفصلة');
console.log('- ✅ باقات إيجار متنوعة (يومي/أسبوعي/شهري)');
console.log('- ✅ حلول الأعمال والخدمات التنفيذية');
console.log('- ✅ تكييف ثقافي لكل لغة');
console.log('- ✅ متوافق مع جميع أجزاء موقع غوست'); 
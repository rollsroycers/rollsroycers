#!/usr/bin/env node

/**
 * إصلاح وتحديث ترجمات أداة مقارنة الأسطول المحدثة
 * يضيف جميع مفاتيح compareFleet.* المطلوبة إلى common.json
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * ترجمات أداة مقارنة الأسطول المحدثة
 */
const COMPARISON_TOOL_TRANSLATIONS = {
  en: {
    compareFleet: {
      title: "Compare Our Fleet",
      subtitle: "Find the perfect Rolls-Royce for your luxury experience",
      description: "Compare features, specifications, and pricing to choose the ideal vehicle for your needs",
      selectUpTo: "Select up to 3 vehicles to compare",
      selectedCount: "{{count}} vehicles selected",
      compareButton: "Compare Selected ({{count}})",
      resetSelection: "Reset Selection",
      viewDetails: "View Details",
      startComparison: "Start New Comparison",
      
      // Modal
      modalTitle: "Fleet Comparison",
      closeModal: "Close Comparison",
      
      // Categories
      specifications: "Technical Specifications",
      performance: "Performance & Capability", 
      luxury: "Luxury Features",
      comfort: "Comfort & Convenience",
      technology: "Technology & Innovation",
      pricing: "Pricing & Packages",
      
      // Specifications
      specs: {
        engine: "Engine",
        power: "Power (HP)",
        torque: "Torque (Nm)",
        acceleration: "0-100 km/h",
        topSpeed: "Top Speed",
        seats: "Seating Capacity",
        doors: "Doors",
        length: "Length (mm)",
        width: "Width (mm)",
        height: "Height (mm)",
        wheelbase: "Wheelbase (mm)",
        fuelCapacity: "Fuel Capacity (L)",
        bootSpace: "Boot Space (L)"
      },
      
      // Performance metrics
      metrics: {
        luxury: "Luxury Experience",
        performance: "Driving Performance",
        comfort: "Passenger Comfort",
        technology: "Tech Innovation",
        presence: "Road Presence",
        versatility: "Versatility"
      },
      
      // Best for categories
      bestFor: {
        title: "Best For",
        wedding: "Weddings & Special Events",
        business: "Corporate & Business",
        leisure: "Leisure & Tourism",
        family: "Family Occasions",
        photography: "Photo Shoots",
        airport: "Airport Transfers"
      },
      
      // Key features
      features: {
        uniqueFeatures: "Unique Features",
        standardFeatures: "Standard Equipment",
        optionalFeatures: "Optional Extras"
      },
      
      // Actions
      actions: {
        bookSelected: "Book Selected Vehicle",
        requestQuote: "Request Custom Quote",
        viewFleet: "View Full Fleet",
        contactUs: "Contact Our Team"
      },
      
      // Car data structure
      cars: {
        phantom: {
          id: "phantom",
          name: "Rolls-Royce Phantom",
          tagline: "The Ultimate Luxury Limousine",
          image: "/images/Rolls-Royce_Phantom_Extended_Series_II.jpg",
          price: 6500,
          category: "Ultra-Luxury Sedan",
          specs: {
            engine: "6.75L V12 Twin-Turbo",
            power: 563,
            torque: 900,
            acceleration: "5.3 seconds",
            topSpeed: "250 km/h",
            seats: 4,
            doors: 4,
            length: 5982,
            width: 2018,
            height: 1656,
            wheelbase: 3772,
            fuelCapacity: 100,
            bootSpace: 548
          },
          metrics: {
            luxury: 100,
            performance: 85,
            comfort: 98,
            technology: 90,
            presence: 100,
            versatility: 70
          },
          bestFor: ["wedding", "business", "photography"],
          uniqueFeatures: [
            "Starlight Headliner with 1,340 fiber optic lights",
            "Magic Carpet Ride suspension",
            "Gallery rear compartment",
            "Champagne cooler and crystal glasses"
          ],
          standardFeatures: [
            "Hand-crafted leather interior",
            "Premium sound system",
            "Rear entertainment screens",
            "Ambient lighting system"
          ]
        },
        ghost: {
          id: "ghost",
          name: "Rolls-Royce Ghost",
          tagline: "Effortless Performance",
          image: "/images/Rolls-Royce_Ghost-2.jpg",
          price: 4800,
          category: "Luxury Sedan",
          specs: {
            engine: "6.75L V12 Twin-Turbo",
            power: 563,
            torque: 850,
            acceleration: "4.8 seconds",
            topSpeed: "250 km/h",
            seats: 5,
            doors: 4,
            length: 5546,
            width: 1978,
            height: 1571,
            wheelbase: 3295,
            fuelCapacity: 82,
            bootSpace: 490
          },
          metrics: {
            luxury: 95,
            performance: 90,
            comfort: 92,
            technology: 95,
            presence: 88,
            versatility: 85
          },
          bestFor: ["business", "airport", "leisure"],
          uniqueFeatures: [
            "Planar suspension system",
            "Illuminated fascia",
            "Micro-environment purification",
            "Whisper-quiet cabin"
          ],
          standardFeatures: [
            "All-wheel drive system",
            "Adaptive cruise control",
            "Head-up display",
            "Wireless charging pad"
          ]
        },
        cullinan: {
          id: "cullinan",
          name: "Rolls-Royce Cullinan",
          tagline: "Luxury Without Compromise",
          image: "/images/Rolls-Royce_Cullinan_.jpg",
          price: 7200,
          category: "Ultra-Luxury SUV",
          specs: {
            engine: "6.75L V12 Twin-Turbo",
            power: 563,
            torque: 850,
            acceleration: "5.2 seconds",
            topSpeed: "250 km/h",
            seats: 5,
            doors: 4,
            length: 5341,
            width: 2000,
            height: 1835,
            wheelbase: 3295,
            fuelCapacity: 100,
            bootSpace: 560
          },
          metrics: {
            luxury: 98,
            performance: 88,
            comfort: 95,
            technology: 92,
            presence: 95,
            versatility: 100
          },
          bestFor: ["family", "leisure", "business"],
          uniqueFeatures: [
            "All-terrain capability",
            "Viewing suite seating",
            "Partition glass option",
            "Recreation module"
          ],
          standardFeatures: [
            "All-wheel drive",
            "Air suspension",
            "Panoramic sunroof",
            "360-degree camera system"
          ]
        },
        dawn: {
          id: "dawn",
          name: "Rolls-Royce Dawn",
          tagline: "Drophead Grand Tourer",
          image: "/images/Rolls-Royce_Dawn.jpg",
          price: 5500,
          category: "Luxury Convertible",
          specs: {
            engine: "6.6L V12 Twin-Turbo",
            power: 563,
            torque: 780,
            acceleration: "4.9 seconds",
            topSpeed: "250 km/h",
            seats: 4,
            doors: 2,
            length: 5285,
            width: 1947,
            height: 1502,
            wheelbase: 3112,
            fuelCapacity: 82,
            bootSpace: 358
          },
          metrics: {
            luxury: 92,
            performance: 88,
            comfort: 85,
            technology: 85,
            presence: 95,
            versatility: 75
          },
          bestFor: ["wedding", "photography", "leisure"],
          uniqueFeatures: [
            "Silent soft-top operation",
            "Airscarf neck warmer",
            "Boot space optimization",
            "Open-air motoring experience"
          ],
          standardFeatures: [
            "Adaptive headlights",
            "Premium audio system",
            "Climate control",
            "Leather interior"
          ]
        },
        wraith: {
          id: "wraith",
          name: "Rolls-Royce Wraith",
          tagline: "Power and Style",
          image: "/images/Rolls-Royce-black.jpg",
          price: 5800,
          category: "Grand Tourer Coupe",
          specs: {
            engine: "6.6L V12 Twin-Turbo",
            power: 624,
            torque: 800,
            acceleration: "4.4 seconds",
            topSpeed: "250 km/h",
            seats: 4,
            doors: 2,
            length: 5285,
            width: 1947,
            height: 1507,
            wheelbase: 3112,
            fuelCapacity: 82,
            bootSpace: 470
          },
          metrics: {
            luxury: 90,
            performance: 100,
            comfort: 88,
            technology: 88,
            presence: 92,
            versatility: 70
          },
          bestFor: ["business", "photography", "leisure"],
          uniqueFeatures: [
            "Satellite aided transmission",
            "Starlight headliner",
            "Suicide doors",
            "Most powerful Rolls-Royce"
          ],
          standardFeatures: [
            "8-speed automatic transmission",
            "Adaptive suspension",
            "Bespoke audio system",
            "Navigation system"
          ]
        }
      }
    }
  },
  ar: {
    compareFleet: {
      title: "قارن أسطولنا",
      subtitle: "اعثر على رولز رويس المثالية لتجربتك الفاخرة",
      description: "قارن الميزات والمواصفات والأسعار لاختيار السيارة المثالية لاحتياجاتك",
      selectUpTo: "اختر حتى 3 مركبات للمقارنة",
      selectedCount: "تم اختيار {{count}} مركبات",
      compareButton: "قارن المختارة ({{count}})",
      resetSelection: "إعادة تعيين الاختيار",
      viewDetails: "عرض التفاصيل",
      startComparison: "بدء مقارنة جديدة",
      
      modalTitle: "مقارنة الأسطول",
      closeModal: "إغلاق المقارنة",
      
      specifications: "المواصفات التقنية",
      performance: "الأداء والقدرة",
      luxury: "ميزات الفخامة",
      comfort: "الراحة والملاءمة",
      technology: "التقنية والابتكار",
      pricing: "الأسعار والباقات",
      
      specs: {
        engine: "المحرك",
        power: "القوة (حصان)",
        torque: "العزم (نيوتن متر)",
        acceleration: "0-100 كم/ساعة",
        topSpeed: "السرعة القصوى",
        seats: "سعة المقاعد",
        doors: "الأبواب",
        length: "الطول (مم)",
        width: "العرض (مم)",
        height: "الارتفاع (مم)",
        wheelbase: "قاعدة العجلات (مم)",
        fuelCapacity: "سعة الوقود (لتر)",
        bootSpace: "مساحة التخزين (لتر)"
      },
      
      metrics: {
        luxury: "تجربة الفخامة",
        performance: "أداء القيادة",
        comfort: "راحة الركاب",
        technology: "الابتكار التقني",
        presence: "الحضور على الطريق",
        versatility: "تعدد الاستخدامات"
      },
      
      bestFor: {
        title: "الأفضل لـ",
        wedding: "الزفاف والمناسبات الخاصة",
        business: "الشركات والأعمال",
        leisure: "الترفيه والسياحة",
        family: "المناسبات العائلية",
        photography: "جلسات التصوير",
        airport: "النقل من المطار"
      },
      
      features: {
        uniqueFeatures: "الميزات الفريدة",
        standardFeatures: "التجهيزات الأساسية",
        optionalFeatures: "الإضافات الاختيارية"
      },
      
      actions: {
        bookSelected: "احجز السيارة المختارة",
        requestQuote: "اطلب عرض أسعار مخصص",
        viewFleet: "عرض الأسطول الكامل",
        contactUs: "اتصل بفريقنا"
      },
      
      cars: {
        phantom: {
          id: "phantom",
          name: "رولز رويس فانتوم",
          tagline: "ليموزين الفخامة المطلقة",
          image: "/images/Rolls-Royce_Phantom_Extended_Series_II.jpg",
          price: 6500,
          category: "سيدان فاخرة للغاية",
          specs: {
            engine: "6.75 لتر V12 توين تيربو",
            power: 563,
            torque: 900,
            acceleration: "5.3 ثانية",
            topSpeed: "250 كم/ساعة",
            seats: 4,
            doors: 4,
            length: 5982,
            width: 2018,
            height: 1656,
            wheelbase: 3772,
            fuelCapacity: 100,
            bootSpace: 548
          },
          metrics: {
            luxury: 100,
            performance: 85,
            comfort: 98,
            technology: 90,
            presence: 100,
            versatility: 70
          },
          bestFor: ["wedding", "business", "photography"],
          uniqueFeatures: [
            "سقف النجوم بـ 1,340 ضوء ألياف بصرية",
            "نظام التعليق السحري",
            "مقصورة خلفية فنية",
            "مبرد شامبانيا وكؤوس كريستال"
          ],
          standardFeatures: [
            "مقصورة جلدية مصنوعة يدوياً",
            "نظام صوتي متميز",
            "شاشات ترفيه خلفية",
            "نظام إضاءة محيطة"
          ]
        },
        ghost: {
          id: "ghost",
          name: "رولز رويس غوست",
          tagline: "أداء بلا مجهود",
          image: "/images/Rolls-Royce_Ghost-2.jpg",
          price: 4800,
          category: "سيدان فاخرة",
          specs: {
            engine: "6.75 لتر V12 توين تيربو",
            power: 563,
            torque: 850,
            acceleration: "4.8 ثانية",
            topSpeed: "250 كم/ساعة",
            seats: 5,
            doors: 4,
            length: 5546,
            width: 1978,
            height: 1571,
            wheelbase: 3295,
            fuelCapacity: 82,
            bootSpace: 490
          },
          metrics: {
            luxury: 95,
            performance: 90,
            comfort: 92,
            technology: 95,
            presence: 88,
            versatility: 85
          },
          bestFor: ["business", "airport", "leisure"],
          uniqueFeatures: [
            "نظام التعليق المسطح",
            "واجهة مضيئة",
            "تنقية البيئة الدقيقة",
            "مقصورة هادئة جداً"
          ],
          standardFeatures: [
            "نظام دفع رباعي",
            "مثبت سرعة تكيفي",
            "شاشة عرض علوية",
            "لوحة شحن لاسلكية"
          ]
        },
        cullinan: {
          id: "cullinan",
          name: "رولز رويس كولينان",
          tagline: "فخامة بلا تنازلات",
          image: "/images/Rolls-Royce_Cullinan_.jpg",
          price: 7200,
          category: "SUV فاخرة للغاية",
          specs: {
            engine: "6.75 لتر V12 توين تيربو",
            power: 563,
            torque: 850,
            acceleration: "5.2 ثانية",
            topSpeed: "250 كم/ساعة",
            seats: 5,
            doors: 4,
            length: 5341,
            width: 2000,
            height: 1835,
            wheelbase: 3295,
            fuelCapacity: 100,
            bootSpace: 560
          },
          metrics: {
            luxury: 98,
            performance: 88,
            comfort: 95,
            technology: 92,
            presence: 95,
            versatility: 100
          },
          bestFor: ["family", "leisure", "business"],
          uniqueFeatures: [
            "قدرة على جميع التضاريس",
            "مقاعد جناح المشاهدة",
            "خيار الزجاج الفاصل",
            "وحدة الترفيه"
          ],
          standardFeatures: [
            "دفع رباعي",
            "تعليق هوائي",
            "سقف بانورامي",
            "نظام كاميرا 360 درجة"
          ]
        },
        dawn: {
          id: "dawn",
          name: "رولز رويس داون",
          tagline: "جراند تورر مكشوفة",
          image: "/images/Rolls-Royce_Dawn.jpg",
          price: 5500,
          category: "كابريوليه فاخرة",
          specs: {
            engine: "6.6 لتر V12 Twin-Turbo",
            power: 563,
            torque: 780,
            acceleration: "4.9 ثانية",
            topSpeed: "250 كم/ساعة",
            seats: 4,
            doors: 2,
            length: 5285,
            width: 1947,
            height: 1502,
            wheelbase: 3112,
            fuelCapacity: 82,
            bootSpace: 358
          },
          metrics: {
            luxury: 92,
            performance: 88,
            comfort: 85,
            technology: 85,
            presence: 95,
            versatility: 75
          },
          bestFor: ["wedding", "photography", "leisure"],
          uniqueFeatures: [
            "تشغيل السقف الناعم الصامت",
            "دفء الرقبة Airscarf",
            "تحسين مساحة التخزين",
            "تجربة القيادة في الهواء الطلق"
          ],
          standardFeatures: [
            "مصابيح أمامية تكيفية",
            "نظام صوتي متميز",
            "تحكم في المناخ",
            "مقصورة داخلية جلدية"
          ]
        },
        wraith: {
          id: "wraith",
          name: "رولز رويس رايث",
          tagline: "القوة والأناقة",
          image: "/images/Rolls-Royce-black.jpg",
          price: 5800,
          category: "كوبيه جراند تورر",
          specs: {
            engine: "6.6 لتر V12 Twin-Turbo",
            power: 624,
            torque: 800,
            acceleration: "4.4 ثانية",
            topSpeed: "250 كم/ساعة",
            seats: 4,
            doors: 2,
            length: 5285,
            width: 1947,
            height: 1507,
            wheelbase: 3112,
            fuelCapacity: 82,
            bootSpace: 470
          },
          metrics: {
            luxury: 90,
            performance: 100,
            comfort: 88,
            technology: 88,
            presence: 92,
            versatility: 70
          },
          bestFor: ["business", "photography", "leisure"],
          uniqueFeatures: [
            "ناقل حركة بمساعدة الأقمار الصناعية",
            "سقف النجوم",
            "أبواب انتحارية",
            "أقوى رولز رويس"
          ],
          standardFeatures: [
            "ناقل حركة أوتوماتيك 8 سرعات",
            "تعليق تكيفي",
            "نظام صوتي مخصص",
            "نظام ملاحة"
          ]
        }
      }
    }
  },
  ru: {
    compareFleet: {
      title: "Сравните наш флот",
      subtitle: "Найдите идеальный Rolls-Royce для вашего роскошного опыта",
      description: "Сравните характеристики, спецификации и цены, чтобы выбрать идеальный автомобиль для ваших потребностей",
      selectUpTo: "Выберите до 3 автомобилей для сравнения",
      selectedCount: "Выбрано {{count}} автомобилей",
      compareButton: "Сравнить выбранные ({{count}})",
      resetSelection: "Сбросить выбор",
      viewDetails: "Посмотреть детали",
      startComparison: "Начать новое сравнение",
      
      modalTitle: "Сравнение флота",
      closeModal: "Закрыть сравнение",
      
      specifications: "Технические характеристики",
      performance: "Производительность и возможности",
      luxury: "Роскошные функции",
      comfort: "Комфорт и удобство",
      technology: "Технологии и инновации",
      pricing: "Цены и пакеты",
      
      specs: {
        engine: "Двигатель",
        power: "Мощность (л.с.)",
        torque: "Крутящий момент (Нм)",
        acceleration: "0-100 км/ч",
        topSpeed: "Максимальная скорость",
        seats: "Количество мест",
        doors: "Двери",
        length: "Длина (мм)",
        width: "Ширина (мм)",
        height: "Высота (мм)",
        wheelbase: "Колёсная база (мм)",
        fuelCapacity: "Объём топливного бака (л)",
        bootSpace: "Объём багажника (л)"
      },
      
      metrics: {
        luxury: "Роскошный опыт",
        performance: "Динамические характеристики",
        comfort: "Комфорт пассажиров",
        technology: "Технологические инновации",
        presence: "Присутствие на дороге",
        versatility: "Универсальность"
      },
      
      bestFor: {
        title: "Лучше всего для",
        wedding: "Свадьбы и особые события",
        business: "Корпоративные мероприятия",
        leisure: "Отдых и туризм",
        family: "Семейные случаи",
        photography: "Фотосессии",
        airport: "Трансферы из аэропорта"
      },
      
      features: {
        uniqueFeatures: "Уникальные особенности",
        standardFeatures: "Стандартное оборудование",
        optionalFeatures: "Дополнительные опции"
      },
      
      actions: {
        bookSelected: "Забронировать выбранный автомобиль",
        requestQuote: "Запросить индивидуальное предложение",
        viewFleet: "Посмотреть весь флот",
        contactUs: "Связаться с нашей командой"
      },
      
      cars: {
        phantom: {
          id: "phantom",
          name: "Rolls-Royce Phantom",
          tagline: "Абсолютный роскошный лимузин",
          image: "/images/Rolls-Royce_Phantom_Extended_Series_II.jpg",
          price: 6500,
          category: "Ультра-роскошный седан",
          specs: {
            engine: "6.75л V12 Twin-Turbo",
            power: 563,
            torque: 900,
            acceleration: "5.3 секунды",
            topSpeed: "250 км/ч",
            seats: 4,
            doors: 4,
            length: 5982,
            width: 2018,
            height: 1656,
            wheelbase: 3772,
            fuelCapacity: 100,
            bootSpace: 548
          },
          metrics: {
            luxury: 100,
            performance: 85,
            comfort: 98,
            technology: 90,
            presence: 100,
            versatility: 70
          },
          bestFor: ["wedding", "business", "photography"],
          uniqueFeatures: [
            "Звёздный потолок с 1,340 оптоволоконными огнями",
            "Подвеска Magic Carpet Ride",
            "Галерейный задний салон",
            "Охладитель шампанского и хрустальные бокалы"
          ],
          standardFeatures: [
            "Кожаный салон ручной работы",
            "Премиальная аудиосистема",
            "Задние развлекательные экраны",
            "Система окружающего освещения"
          ]
        },
        ghost: {
          id: "ghost",
          name: "Rolls-Royce Ghost",
          tagline: "Эффортлесс перфоманс",
          image: "/images/Rolls-Royce_Ghost-2.jpg",
          price: 4800,
          category: "Роскошный седан",
          specs: {
            engine: "6.75л V12 Twin-Turbo",
            power: 563,
            torque: 850,
            acceleration: "4.8 секунды",
            topSpeed: "250 км/ч",
            seats: 5,
            doors: 4,
            length: 5546,
            width: 1978,
            height: 1571,
            wheelbase: 3295,
            fuelCapacity: 82,
            bootSpace: 490
          },
          metrics: {
            luxury: 95,
            performance: 90,
            comfort: 92,
            technology: 95,
            presence: 88,
            versatility: 85
          },
          bestFor: ["business", "airport", "leisure"],
          uniqueFeatures: [
            "Планарная система подвески",
            "Подсвеченная панель приборов",
            "Очистка микроокружения",
            "Сверхтихий салон"
          ],
          standardFeatures: [
            "Полноприводная система",
            "Адаптивный круиз-контроль",
            "Проекционный дисплей",
            "Беспроводная зарядная панель"
          ]
        },
        cullinan: {
          id: "cullinan",
          name: "Rolls-Royce Cullinan",
          tagline: "Роскошь без компромиссов",
          image: "/images/Rolls-Royce_Cullinan_.jpg",
          price: 7200,
          category: "Ультра-роскошный внедорожник",
          specs: {
            engine: "6.75л V12 Twin-Turbo",
            power: 563,
            torque: 850,
            acceleration: "5.2 секунды",
            topSpeed: "250 км/ч",
            seats: 5,
            doors: 4,
            length: 5341,
            width: 2000,
            height: 1835,
            wheelbase: 3295,
            fuelCapacity: 100,
            bootSpace: 560
          },
          metrics: {
            luxury: 98,
            performance: 88,
            comfort: 95,
            technology: 92,
            presence: 95,
            versatility: 100
          },
          bestFor: ["family", "leisure", "business"],
          uniqueFeatures: [
            "Проходимость по любой местности",
            "Смотровая площадка",
            "Опция стеклянной перегородки",
            "Модуль отдыха"
          ],
          standardFeatures: [
            "Полный привод",
            "Пневматическая подвеска",
            "Панорамный люк",
            "Система камер 360°"
          ]
        },
        dawn: {
          id: "dawn",
          name: "Rolls-Royce Dawn",
          tagline: "Гранд турер кабриолет",
          image: "/images/Rolls-Royce_Dawn.jpg",
          price: 5500,
          category: "Роскошный кабриолет",
          specs: {
            engine: "6.6л V12 Twin-Turbo",
            power: 563,
            torque: 780,
            acceleration: "4.9 секунды",
            topSpeed: "250 км/ч",
            seats: 4,
            doors: 2,
            length: 5285,
            width: 1947,
            height: 1502,
            wheelbase: 3112,
            fuelCapacity: 82,
            bootSpace: 358
          },
          metrics: {
            luxury: 92,
            performance: 88,
            comfort: 85,
            technology: 85,
            presence: 95,
            versatility: 75
          },
          bestFor: ["wedding", "photography", "leisure"],
          uniqueFeatures: [
            "Бесшумная работа мягкого верха",
            "Подогрев шеи Airscarf",
            "Оптимизация багажного пространства",
            "Впечатления от вождения под открытым небом"
          ],
          standardFeatures: [
            "Адаптивные фары",
            "Премиальная аудиосистема",
            "Климат-контроль",
            "Кожаный салон"
          ]
        },
        wraith: {
          id: "wraith",
          name: "Rolls-Royce Wraith",
          tagline: "Мощь и стиль",
          image: "/images/Rolls-Royce-black.jpg",
          price: 5800,
          category: "Гранд турер купе",
          specs: {
            engine: "6.6л V12 Twin-Turbo",
            power: 624,
            torque: 800,
            acceleration: "4.4 секунды",
            topSpeed: "250 км/ч",
            seats: 4,
            doors: 2,
            length: 5285,
            width: 1947,
            height: 1507,
            wheelbase: 3112,
            fuelCapacity: 82,
            bootSpace: 470
          },
          metrics: {
            luxury: 90,
            performance: 100,
            comfort: 88,
            technology: 88,
            presence: 92,
            versatility: 70
          },
          bestFor: ["business", "photography", "leisure"],
          uniqueFeatures: [
            "Коробка передач с спутниковой поддержкой",
            "Звёздный потолок",
            "Суицидальные двери",
            "Самый мощный Rolls-Royce"
          ],
          standardFeatures: [
            "8-ступенчатая автоматическая коробка передач",
            "Адаптивная подвеска",
            "Индивидуальная аудиосистема",
            "Навигационная система"
          ]
        }
      }
    }
  },
  fr: {
    compareFleet: {
      title: "Comparez notre flotte",
      subtitle: "Trouvez la Rolls-Royce parfaite pour votre expérience de luxe",
      description: "Comparez les caractéristiques, spécifications et prix pour choisir le véhicule idéal pour vos besoins",
      selectUpTo: "Sélectionnez jusqu'à 3 véhicules à comparer",
      selectedCount: "{{count}} véhicules sélectionnés",
      compareButton: "Comparer la sélection ({{count}})",
      resetSelection: "Réinitialiser la sélection",
      viewDetails: "Voir les détails",
      startComparison: "Commencer une nouvelle comparaison",
      
      modalTitle: "Comparaison de flotte",
      closeModal: "Fermer la comparaison",
      
      specifications: "Spécifications techniques",
      performance: "Performance et capacité",
      luxury: "Caractéristiques de luxe",
      comfort: "Confort et commodité",
      technology: "Technologie et innovation",
      pricing: "Prix et forfaits",
      
      specs: {
        engine: "Moteur",
        power: "Puissance (CV)",
        torque: "Couple (Nm)",
        acceleration: "0-100 km/h",
        topSpeed: "Vitesse maximale",
        seats: "Capacité d'accueil",
        doors: "Portes",
        length: "Longueur (mm)",
        width: "Largeur (mm)",
        height: "Hauteur (mm)",
        wheelbase: "Empattement (mm)",
        fuelCapacity: "Capacité du réservoir (L)",
        bootSpace: "Espace coffre (L)"
      },
      
      metrics: {
        luxury: "Expérience de luxe",
        performance: "Performance de conduite",
        comfort: "Confort des passagers",
        technology: "Innovation technologique",
        presence: "Présence sur route",
        versatility: "Polyvalence"
      },
      
      bestFor: {
        title: "Idéal pour",
        wedding: "Mariages et événements spéciaux",
        business: "Entreprises et affaires",
        leisure: "Loisirs et tourisme",
        family: "Occasions familiales",
        photography: "Séances photo",
        airport: "Transferts aéroport"
      },
      
      features: {
        uniqueFeatures: "Caractéristiques uniques",
        standardFeatures: "Équipement standard",
        optionalFeatures: "Options supplémentaires"
      },
      
      actions: {
        bookSelected: "Réserver le véhicule sélectionné",
        requestQuote: "Demander un devis personnalisé",
        viewFleet: "Voir toute la flotte",
        contactUs: "Contacter notre équipe"
      },
      
      cars: {
        phantom: {
          id: "phantom",
          name: "Rolls-Royce Phantom",
          tagline: "La limousine de luxe ultime",
          image: "/images/Rolls-Royce_Phantom_Extended_Series_II.jpg",
          price: 6500,
          category: "Berline ultra-luxe",
          specs: {
            engine: "6.75L V12 Twin-Turbo",
            power: 563,
            torque: 900,
            acceleration: "5.3 secondes",
            topSpeed: "250 km/h",
            seats: 4,
            doors: 4,
            length: 5982,
            width: 2018,
            height: 1656,
            wheelbase: 3772,
            fuelCapacity: 100,
            bootSpace: 548
          },
          metrics: {
            luxury: 100,
            performance: 85,
            comfort: 98,
            technology: 90,
            presence: 100,
            versatility: 70
          },
          bestFor: ["wedding", "business", "photography"],
          uniqueFeatures: [
            "Ciel étoilé avec 1,340 lumières à fibre optique",
            "Suspension Magic Carpet Ride",
            "Compartiment arrière galerie",
            "Refroidisseur de champagne et verres en cristal"
          ],
          standardFeatures: [
            "Intérieur en cuir artisanal",
            "Système audio premium",
            "Écrans de divertissement arrière",
            "Système d'éclairage ambiant"
          ]
        },
        ghost: {
          id: "ghost",
          name: "Rolls-Royce Ghost",
          tagline: "Performance sans effort",
          image: "/images/Rolls-Royce_Ghost-2.jpg",
          price: 4800,
          category: "Berline de luxe",
          specs: {
            engine: "6.75L V12 Twin-Turbo",
            power: 563,
            torque: 850,
            acceleration: "4.8 secondes",
            topSpeed: "250 km/h",
            seats: 5,
            doors: 4,
            length: 5546,
            width: 1978,
            height: 1571,
            wheelbase: 3295,
            fuelCapacity: 82,
            bootSpace: 490
          },
          metrics: {
            luxury: 95,
            performance: 90,
            comfort: 92,
            technology: 95,
            presence: 88,
            versatility: 85
          },
          bestFor: ["business", "airport", "leisure"],
          uniqueFeatures: [
            "Système de suspension planaire",
            "Fascia illuminé",
            "Purification de micro-environnement",
            "Cabine ultra-silencieuse"
          ],
          standardFeatures: [
            "Système de traction intégrale",
            "Régulateur de vitesse adaptatif",
            "Affichage tête haute",
            "Panneau de charge sans fil"
          ]
        },
        cullinan: {
          id: "cullinan",
          name: "Rolls-Royce Cullinan",
          tagline: "Luxe sans compromis",
          image: "/images/Rolls-Royce_Cullinan_.jpg",
          price: 7200,
          category: "SUV ultra-luxe",
          specs: {
            engine: "6.75L V12 Twin-Turbo",
            power: 563,
            torque: 850,
            acceleration: "5.2 secondes",
            topSpeed: "250 km/h",
            seats: 5,
            doors: 4,
            length: 5341,
            width: 2000,
            height: 1835,
            wheelbase: 3295,
            fuelCapacity: 100,
            bootSpace: 560
          },
          metrics: {
            luxury: 98,
            performance: 88,
            comfort: 95,
            technology: 92,
            presence: 95,
            versatility: 100
          },
          bestFor: ["family", "leisure", "business"],
          uniqueFeatures: [
            "Capacité tout-terrain",
            "Sièges de suite d'observation",
            "Option verre de séparation",
            "Module de loisirs"
          ],
          standardFeatures: [
            "Traction intégrale",
            "Suspension pneumatique",
            "Toit panoramique",
            "Système de caméra 360°"
          ]
        },
        dawn: {
          id: "dawn",
          name: "Rolls-Royce Dawn",
          tagline: "Grand tourer décapotable",
          image: "/images/Rolls-Royce_Dawn.jpg",
          price: 5500,
          category: "Cabriolet de luxe",
          specs: {
            engine: "6.6L V12 Twin-Turbo",
            power: 563,
            torque: 780,
            acceleration: "4.9 secondes",
            topSpeed: "250 km/h",
            seats: 4,
            doors: 2,
            length: 5285,
            width: 1947,
            height: 1502,
            wheelbase: 3112,
            fuelCapacity: 82,
            bootSpace: 358
          },
          metrics: {
            luxury: 92,
            performance: 88,
            comfort: 85,
            technology: 85,
            presence: 95,
            versatility: 75
          },
          bestFor: ["wedding", "photography", "leisure"],
          uniqueFeatures: [
            "Fonctionnement silencieux de la capote souple",
            "Réchauffeur de nuque Airscarf",
            "Optimisation de l'espace coffre",
            "Expérience de conduite à ciel ouvert"
          ],
          standardFeatures: [
            "Phares adaptatifs",
            "Système audio premium",
            "Climatisation",
            "Intérieur en cuir"
          ]
        },
        wraith: {
          id: "wraith",
          name: "Rolls-Royce Wraith",
          tagline: "Puissance et style",
          image: "/images/Rolls-Royce-black.jpg",
          price: 5800,
          category: "Coupé grand tourer",
          specs: {
            engine: "6.6L V12 Twin-Turbo",
            power: 624,
            torque: 800,
            acceleration: "4.4 secondes",
            topSpeed: "250 km/h",
            seats: 4,
            doors: 2,
            length: 5285,
            width: 1947,
            height: 1507,
            wheelbase: 3112,
            fuelCapacity: 82,
            bootSpace: 470
          },
          metrics: {
            luxury: 90,
            performance: 100,
            comfort: 88,
            technology: 88,
            presence: 92,
            versatility: 70
          },
          bestFor: ["business", "photography", "leisure"],
          uniqueFeatures: [
            "Transmission assistée par satellite",
            "Ciel étoilé",
            "Portes suicide",
            "Rolls-Royce la plus puissante"
          ],
          standardFeatures: [
            "Transmission automatique 8 vitesses",
            "Suspension adaptative",
            "Système audio sur mesure",
            "Système de navigation"
          ]
        }
      }
    }
  },
  zh: {
    compareFleet: {
      title: "比较我们的车队",
      subtitle: "为您的奢华体验找到完美的劳斯莱斯",
      description: "比较功能、规格和价格，选择满足您需求的理想车辆",
      selectUpTo: "选择最多3辆车进行比较",
      selectedCount: "已选择{{count}}辆车",
      compareButton: "比较所选 ({{count}})",
      resetSelection: "重置选择",
      viewDetails: "查看详情",
      startComparison: "开始新比较",
      
      modalTitle: "车队比较",
      closeModal: "关闭比较",
      
      specifications: "技术规格",
      performance: "性能和能力",
      luxury: "豪华功能",
      comfort: "舒适和便利",
      technology: "技术和创新",
      pricing: "价格和套餐",
      
      specs: {
        engine: "发动机",
        power: "功率 (马力)",
        torque: "扭矩 (牛米)",
        acceleration: "0-100公里/小时",
        topSpeed: "最高速度",
        seats: "座位数",
        doors: "车门",
        length: "长度 (毫米)",
        width: "宽度 (毫米)",
        height: "高度 (毫米)",
        wheelbase: "轴距 (毫米)",
        fuelCapacity: "油箱容量 (升)",
        bootSpace: "后备箱空间 (升)"
      },
      
      metrics: {
        luxury: "奢华体验",
        performance: "驾驶性能",
        comfort: "乘客舒适度",
        technology: "技术创新",
        presence: "路面气场",
        versatility: "多功能性"
      },
      
      bestFor: {
        title: "最适合",
        wedding: "婚礼和特殊活动",
        business: "企业和商务",
        leisure: "休闲和旅游",
        family: "家庭场合",
        photography: "摄影拍摄",
        airport: "机场接送"
      },
      
      features: {
        uniqueFeatures: "独特功能",
        standardFeatures: "标准配置",
        optionalFeatures: "可选配置"
      },
      
      actions: {
        bookSelected: "预订所选车辆",
        requestQuote: "申请定制报价",
        viewFleet: "查看完整车队",
        contactUs: "联系我们的团队"
      },
      
      cars: {
        phantom: {
          id: "phantom",
          name: "劳斯莱斯幻影",
          tagline: "终极奢华轿车",
          image: "/images/Rolls-Royce_Phantom_Extended_Series_II.jpg",
          price: 6500,
          category: "超豪华轿车",
          specs: {
            engine: "6.75升 V12 双涡轮",
            power: 563,
            torque: 900,
            acceleration: "5.3秒",
            topSpeed: "250公里/小时",
            seats: 4,
            doors: 4,
            length: 5982,
            width: 2018,
            height: 1656,
            wheelbase: 3772,
            fuelCapacity: 100,
            bootSpace: 548
          },
          metrics: {
            luxury: 100,
            performance: 85,
            comfort: 98,
            technology: 90,
            presence: 100,
            versatility: 70
          },
          bestFor: ["wedding", "business", "photography"],
          uniqueFeatures: [
            "1,340根光纤的星空顶篷",
            "魔毯悬挂系统",
            "画廊后舱",
            "香槟冷却器和水晶酒杯"
          ],
          standardFeatures: [
            "手工制作真皮内饰",
            "高端音响系统",
            "后排娱乐屏幕",
            "环境照明系统"
          ]
        },
        ghost: {
          id: "ghost",
          name: "劳斯莱斯古思特",
          tagline: "轻松性能",
          image: "/images/Rolls-Royce_Ghost-2.jpg",
          price: 4800,
          category: "豪华轿车",
          specs: {
            engine: "6.75升 V12 双涡轮",
            power: 563,
            torque: 850,
            acceleration: "4.8秒",
            topSpeed: "250公里/小时",
            seats: 5,
            doors: 4,
            length: 5546,
            width: 1978,
            height: 1571,
            wheelbase: 3295,
            fuelCapacity: 82,
            bootSpace: 490
          },
          metrics: {
            luxury: 95,
            performance: 90,
            comfort: 92,
            technology: 95,
            presence: 88,
            versatility: 85
          },
          bestFor: ["business", "airport", "leisure"],
          uniqueFeatures: [
            "平面悬挂系统",
            "发光仪表板",
            "微环境净化",
            "极静音座舱"
          ],
          standardFeatures: [
            "全轮驱动系统",
            "自适应巡航控制",
            "抬头显示器",
            "无线充电板"
          ]
        },
        cullinan: {
          id: "cullinan",
          name: "劳斯莱斯库里南",
          tagline: "毫不妥协的奢华",
          image: "/images/Rolls-Royce_Cullinan_.jpg",
          price: 7200,
          category: "超豪华SUV",
          specs: {
            engine: "6.75升 V12 双涡轮",
            power: 563,
            torque: 850,
            acceleration: "5.2秒",
            topSpeed: "250公里/小时",
            seats: 5,
            doors: 4,
            length: 5341,
            width: 2000,
            height: 1835,
            wheelbase: 3295,
            fuelCapacity: 100,
            bootSpace: 560
          },
          metrics: {
            luxury: 98,
            performance: 88,
            comfort: 95,
            technology: 92,
            presence: 95,
            versatility: 100
          },
          bestFor: ["family", "leisure", "business"],
          uniqueFeatures: [
            "全地形能力",
            "观景座椅",
            "隔断玻璃选项",
            "娱乐模块"
          ],
          standardFeatures: [
            "全轮驱动",
            "空气悬挂",
            "全景天窗",
            "360度摄像系统"
          ]
        },
        dawn: {
          id: "dawn",
          name: "劳斯莱斯曜影",
          tagline: "敞篷大旅行车",
          image: "/images/Rolls-Royce_Dawn.jpg",
          price: 5500,
          category: "豪华敞篷车",
          specs: {
            engine: "6.6升 V12 双涡轮",
            power: 563,
            torque: 780,
            acceleration: "4.9秒",
            topSpeed: "250公里/小时",
            seats: 4,
            doors: 2,
            length: 5285,
            width: 1947,
            height: 1502,
            wheelbase: 3112,
            fuelCapacity: 82,
            bootSpace: 358
          },
          metrics: {
            luxury: 92,
            performance: 88,
            comfort: 85,
            technology: 85,
            presence: 95,
            versatility: 75
          },
          bestFor: ["wedding", "photography", "leisure"],
          uniqueFeatures: [
            "静音软顶操作",
            "Airscarf颈部加热器",
            "后备箱空间优化",
            "敞篷驾驶体验"
          ],
          standardFeatures: [
            "自适应前灯",
            "高端音响系统",
            "空调控制",
            "真皮内饰"
          ]
        },
        wraith: {
          id: "wraith",
          name: "劳斯莱斯魅影",
          tagline: "力量与风格",
          image: "/images/Rolls-Royce-black.jpg",
          price: 5800,
          category: "大旅行车轿跑",
          specs: {
            engine: "6.6升 V12 双涡轮",
            power: 624,
            torque: 800,
            acceleration: "4.4秒",
            topSpeed: "250公里/小时",
            seats: 4,
            doors: 2,
            length: 5285,
            width: 1947,
            height: 1507,
            wheelbase: 3112,
            fuelCapacity: 82,
            bootSpace: 470
          },
          metrics: {
            luxury: 90,
            performance: 100,
            comfort: 88,
            technology: 88,
            presence: 92,
            versatility: 70
          },
          bestFor: ["business", "photography", "leisure"],
          uniqueFeatures: [
            "卫星辅助变速箱",
            "星空顶篷",
            "对开车门",
            "最强劲的劳斯莱斯"
          ],
          standardFeatures: [
            "8速自动变速箱",
            "自适应悬挂",
            "定制音响系统",
            "导航系统"
          ]
        }
      }
    }
  },
  hi: {
    compareFleet: {
      title: "हमारे बेड़े की तुलना करें",
      subtitle: "अपने लक्जरी अनुभव के लिए परफेक्ट रोल्स-रॉयस खोजें",
      description: "अपनी आवश्यकताओं के लिए आदर्श वाहन चुनने के लिए फीचर्स, स्पेसिफिकेशन और मूल्य निर्धारण की तुलना करें",
      selectUpTo: "तुलना के लिए 3 वाहन तक चुनें",
      selectedCount: "{{count}} वाहन चुने गए",
      compareButton: "चयनित की तुलना करें ({{count}})",
      resetSelection: "चयन रीसेट करें",
      viewDetails: "विवरण देखें",
      startComparison: "नई तुलना शुरू करें",
      
      modalTitle: "फ्लीट तुलना",
      closeModal: "तुलना बंद करें",
      
      specifications: "तकनीकी विशेषताएं",
      performance: "प्रदर्शन और क्षमता",
      luxury: "लक्जरी फीचर्स",
      comfort: "आराम और सुविधा",
      technology: "तकनीक और नवाचार",
      pricing: "मूल्य और पैकेज",
      
      specs: {
        engine: "इंजन",
        power: "शक्ति (HP)",
        torque: "टॉर्क (Nm)",
        acceleration: "0-100 किमी/घंटा",
        topSpeed: "टॉप स्पीड",
        seats: "सीटिंग क्षमता",
        doors: "दरवाजे",
        length: "लंबाई (मिमी)",
        width: "चौड़ाई (मिमी)",
        height: "ऊंचाई (मिमी)",
        wheelbase: "व्हीलबेस (मिमी)",
        fuelCapacity: "ईंधन क्षमता (लीटर)",
        bootSpace: "बूट स्पेस (लीटर)"
      },
      
      metrics: {
        luxury: "लक्जरी अनुभव",
        performance: "ड्राइविंग प्रदर्शन",
        comfort: "यात्री आराम",
        technology: "तकनीकी नवाचार",
        presence: "रोड प्रेजेंस",
        versatility: "बहुमुखी प्रतिभा"
      },
      
      bestFor: {
        title: "सबसे अच्छा",
        wedding: "शादी और विशेष कार्यक्रम",
        business: "कॉर्पोरेट और व्यापार",
        leisure: "मनोरंजन और पर्यटन",
        family: "पारिवारिक अवसर",
        photography: "फोटो शूट",
        airport: "एयरपोर्ट ट्रांसफर"
      },
      
      features: {
        uniqueFeatures: "अनूठी विशेषताएं",
        standardFeatures: "मानक उपकरण",
        optionalFeatures: "वैकल्पिक सुविधाएं"
      },
      
      actions: {
        bookSelected: "चयनित वाहन बुक करें",
        requestQuote: "कस्टम कोट का अनुरोध करें",
        viewFleet: "पूरी फ्लीट देखें",
        contactUs: "हमारी टीम से संपर्क करें"
      },
      
      cars: {
        phantom: {
          id: "phantom",
          name: "रोल्स-रॉयस फैंटम",
          tagline: "अल्टीमेट लक्जरी लिमोसिन",
          image: "/images/Rolls-Royce_Phantom_Extended_Series_II.jpg",
          price: 6500,
          category: "अल्ट्रा-लक्जरी सेडान",
          specs: {
            engine: "6.75L V12 ट्विन-टर्बो",
            power: 563,
            torque: 900,
            acceleration: "5.3 सेकंड",
            topSpeed: "250 किमी/घंटा",
            seats: 4,
            doors: 4,
            length: 5982,
            width: 2018,
            height: 1656,
            wheelbase: 3772,
            fuelCapacity: 100,
            bootSpace: 548
          },
          metrics: {
            luxury: 100,
            performance: 85,
            comfort: 98,
            technology: 90,
            presence: 100,
            versatility: 70
          },
          bestFor: ["wedding", "business", "photography"],
          uniqueFeatures: [
            "1,340 फाइबर ऑप्टिक लाइट्स के साथ स्टारलाइट हेडलाइनर",
            "मैजिक कार्पेट राइड सस्पेंशन",
            "गैलरी रियर कम्पार्टमेंट",
            "शैंपेन कूलर और क्रिस्टल ग्लासेस"
          ],
          standardFeatures: [
            "हस्तनिर्मित लेदर इंटीरियर",
            "प्रीमियम साउंड सिस्टम",
            "रियर एंटरटेनमेंट स्क्रीन",
            "एंबिएंट लाइटिंग सिस्टम"
          ]
        },
        ghost: {
          id: "ghost",
          name: "रोल्स-रॉयस घोस्ट",
          tagline: "एफर्टलेस परफॉर्मेंस",
          image: "/images/Rolls-Royce_Ghost-2.jpg",
          price: 4800,
          category: "लक्जरी सेडान",
          specs: {
            engine: "6.75L V12 ट्विन-टर्बो",
            power: 563,
            torque: 850,
            acceleration: "4.8 सेकंड",
            topSpeed: "250 किमी/घंटा",
            seats: 5,
            doors: 4,
            length: 5546,
            width: 1978,
            height: 1571,
            wheelbase: 3295,
            fuelCapacity: 82,
            bootSpace: 490
          },
          metrics: {
            luxury: 95,
            performance: 90,
            comfort: 92,
            technology: 95,
            presence: 88,
            versatility: 85
          },
          bestFor: ["business", "airport", "leisure"],
          uniqueFeatures: [
            "प्लेनर सस्पेंशन सिस्टम",
            "इल्यूमिनेटेड फेसिया",
            "माइक्रो-एनवायरनमेंट प्यूरिफिकेशन",
            "व्हिस्पर-क्वाइट केबिन"
          ],
          standardFeatures: [
            "ऑल-व्हील ड्राइव सिस्टम",
            "एडाप्टिव क्रूज कंट्रोल",
            "हेड-अप डिस्प्ले",
            "वायरलेस चार्जिंग पैड"
          ]
        },
        cullinan: {
          id: "cullinan",
          name: "रोल्स-रॉयस कुलिनन",
          tagline: "लक्जरी विदाउट कॉम्प्रोमाइज",
          image: "/images/Rolls-Royce_Cullinan_.jpg",
          price: 7200,
          category: "अल्ट्रा-लक्जरी SUV",
          specs: {
            engine: "6.75L V12 ट्विन-टर्बो",
            power: 563,
            torque: 850,
            acceleration: "5.2 सेकंड",
            topSpeed: "250 किमी/घंटा",
            seats: 5,
            doors: 4,
            length: 5341,
            width: 2000,
            height: 1835,
            wheelbase: 3295,
            fuelCapacity: 100,
            bootSpace: 560
          },
          metrics: {
            luxury: 98,
            performance: 88,
            comfort: 95,
            technology: 92,
            presence: 95,
            versatility: 100
          },
          bestFor: ["family", "leisure", "business"],
          uniqueFeatures: [
            "ऑल-टेरेन क्षमता",
            "व्यूइंग सूट सीटिंग",
            "पार्टिशन ग्लास ऑप्शन",
            "रिक्रिएशन मॉड्यूल"
          ],
          standardFeatures: [
            "ऑल-व्हील ड्राइव",
            "एयर सस्पेंशन",
            "पैनोरामिक सनरूफ",
            "360-डिग्री कैमरा सिस्टम"
          ]
        },
        dawn: {
          id: "dawn",
          name: "रोल्स-रॉयस डॉन",
          tagline: "ड्रॉपहेड ग्रैंड टूरर",
          image: "/images/Rolls-Royce_Dawn.jpg",
          price: 5500,
          category: "लक्जरी कन्वर्टिबल",
          specs: {
            engine: "6.6L V12 ट्विन-टर्बो",
            power: 563,
            torque: 780,
            acceleration: "4.9 सेकंड",
            topSpeed: "250 किमी/घंटा",
            seats: 4,
            doors: 2,
            length: 5285,
            width: 1947,
            height: 1502,
            wheelbase: 3112,
            fuelCapacity: 82,
            bootSpace: 358
          },
          metrics: {
            luxury: 92,
            performance: 88,
            comfort: 85,
            technology: 85,
            presence: 95,
            versatility: 75
          },
          bestFor: ["wedding", "photography", "leisure"],
          uniqueFeatures: [
            "साइलेंट सॉफ्ट-टॉप ऑपरेशन",
            "एयरस्कार्फ नेक वार्मर",
            "बूट स्पेस ऑप्टिमाइजेशन",
            "ओपन-एयर मोटरिंग एक्सपीरियंस"
          ],
          standardFeatures: [
            "एडाप्टिव हेडलाइट्स",
            "प्रीमियम ऑडियो सिस्टम",
            "क्लाइमेट कंट्रोल",
            "लेदर इंटीरियर"
          ]
        },
        wraith: {
          id: "wraith",
          name: "रोल्स-रॉयस रैथ",
          tagline: "पावर एंड स्टाइल",
          image: "/images/Rolls-Royce-black.jpg",
          price: 5800,
          category: "ग्रैंड टूरर कूपे",
          specs: {
            engine: "6.6L V12 ट्विन-टर्बो",
            power: 624,
            torque: 800,
            acceleration: "4.4 सेकंड",
            topSpeed: "250 किमी/घंटा",
            seats: 4,
            doors: 2,
            length: 5285,
            width: 1947,
            height: 1507,
            wheelbase: 3112,
            fuelCapacity: 82,
            bootSpace: 470
          },
          metrics: {
            luxury: 90,
            performance: 100,
            comfort: 88,
            technology: 88,
            presence: 92,
            versatility: 70
          },
          bestFor: ["business", "photography", "leisure"],
          uniqueFeatures: [
            "सैटेलाइट एडेड ट्रांसमिशन",
            "स्टारलाइट हेडलाइनर",
            "सुसाइड डोर्स",
            "सबसे पावरफुल रोल्स-रॉयस"
          ],
          standardFeatures: [
            "8-स्पीड ऑटोमैटिक ट्रांसमिशन",
            "एडाप्टिव सस्पेंशन",
            "बेस्पोक ऑडियो सिस्टम",
            "नेवीगेशन सिस्टम"
          ]
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
function addComparisonKeys(language, translations) {
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
console.log('🔧 بدء إصلاح وتحديث ترجمات أداة مقارنة الأسطول...\n');

LANGUAGES.forEach(lang => {
  if (COMPARISON_TOOL_TRANSLATIONS[lang]) {
    addComparisonKeys(lang, COMPARISON_TOOL_TRANSLATIONS[lang]);
  }
});

console.log('\n✅ تم إصلاح جميع ترجمات أداة مقارنة الأسطول!');
console.log('\n📋 ما تم إضافته/تحديثه:');
console.log('- compareFleet.* - جميع مفاتيح أداة المقارنة');
console.log('- compareFleet.cars.* - بيانات السيارات الكاملة');
console.log('- compareFleet.specs.* - المواصفات التقنية');
console.log('- compareFleet.metrics.* - مقاييس الأداء');
console.log('- compareFleet.bestFor.* - أفضل الاستخدامات');
console.log('- compareFleet.features.* - الميزات والخصائص');
console.log('- compareFleet.actions.* - أزرار الإجراءات');

console.log('\n🔄 إعادة تشغيل السيرفر مطلوبة لتحميل التغييرات:');
console.log('npm run dev:restart'); 
#!/usr/bin/env node

/**
 * إصلاح مفاتيح ترجمة صفحة وسط دبي المفقودة
 * يضيف جميع مفاتيح locations.downtown.* المطلوبة إلى common.json
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * مفاتيح صفحة وسط دبي المفقودة
 */
const DOWNTOWN_TRANSLATIONS = {
  en: {
    locations: {
      downtown: {
        hero: {
          title: "Downtown Dubai",
          subtitle: "The Heart of Luxury",
          district: "Business & Entertainment District",
          bookButton: "Book Your Ride",
          exploreButton: "Explore Experiences"
        },
        advantages: {
          title: "Why Choose Downtown Dubai",
          central: {
            title: "Central Location",
            description: "Heart of Dubai's business and entertainment district"
          },
          delivery: {
            title: "Prime Delivery",
            description: "Direct delivery to Burj Khalifa, Dubai Mall, and DIFC"
          },
          vip: {
            title: "VIP Access",
            description: "Exclusive entrances to luxury hotels and attractions"
          },
          concierge: {
            title: "Concierge Service",
            description: "Personal assistance for reservations and arrangements"
          }
        },
        experiences: {
          title: "Downtown Experiences",
          recommendedVehicle: "Recommended Vehicle",
          burjKhalifa: {
            title: "Burj Khalifa Visit",
            description: "Arrive in style at the world's tallest building",
            features: [
              "VIP valet parking",
              "Skip-the-line access",
              "Observation deck priority",
              "Professional photography"
            ],
            recommended: "Phantom"
          },
          dubaiMall: {
            title: "Dubai Mall Shopping",
            description: "Luxury shopping experience at the world's largest mall",
            features: [
              "VIP shopping assistant",
              "Private fitting rooms",
              "Personal shopper service",
              "Luxury brand access"
            ],
            recommended: "Ghost"
          },
          business: {
            title: "Business Meetings",
            description: "Professional transport for DIFC and business districts",
            features: [
              "Executive chauffeur",
              "Business-class comfort",
              "Mobile office setup",
              "Punctual arrivals"
            ],
            recommended: "Cullinan"
          }
        },
        landmarks: {
          title: "Nearby Landmarks"
        },
        hotels: {
          title: "Luxury Hotels",
          subtitle: "Direct delivery to Dubai's finest accommodations",
          additional: "And many more luxury hotels in the area"
        },
        routes: {
          title: "Popular Routes",
          duration: "Duration",
          stops: "Stops",
          bestTime: "Best Time",
          fountain: {
            name: "Dubai Fountain Circuit",
            duration: "45 minutes",
            bestTime: "Evening"
          },
          architecture: {
            name: "Architecture Tour",
            duration: "1 hour",
            bestTime: "Afternoon"
          },
          dining: {
            name: "Fine Dining Route",
            duration: "30 minutes",
            bestTime: "Evening"
          }
        },
        testimonials: {
          title: "Client Experiences",
          abdullah: {
            location: "DIFC Executive",
            text: "Perfect service for business meetings. The Phantom always arrives on time and makes the right impression."
          },
          sophie: {
            location: "Dubai Mall Shopper",
            text: "Amazing experience! The Ghost was perfect for our shopping day, and the chauffeur helped with all our bags."
          },
          david: {
            location: "Burj Khalifa Tourist",
            text: "Unforgettable visit to Burj Khalifa in the Cullinan. The VIP treatment made our Dubai trip extra special."
          }
        },
        stats: {
          time: "2 mins",
          avgDelivery: "Average Delivery",
          deliveries: "500+",
          availability: "Daily Deliveries"
        },
        fleet: {
          title: "Our Fleet in Downtown"
        },
        cta: {
          title: "Experience Downtown Dubai in Luxury",
          subtitle: "Book your Rolls-Royce for the ultimate Downtown Dubai experience",
          callButton: "Call Now",
          bookButton: "Book Online"
        }
      }
    }
  },
  ar: {
    locations: {
      downtown: {
        hero: {
          title: "وسط دبي",
          subtitle: "قلب الفخامة",
          district: "منطقة الأعمال والترفيه",
          bookButton: "احجز رحلتك",
          exploreButton: "استكشف التجارب"
        },
        advantages: {
          title: "لماذا تختار وسط دبي",
          central: {
            title: "موقع مركزي",
            description: "قلب منطقة الأعمال والترفيه في دبي"
          },
          delivery: {
            title: "توصيل متميز",
            description: "توصيل مباشر إلى برج خليفة ودبي مول ومركز دبي المالي"
          },
          vip: {
            title: "دخول VIP",
            description: "مداخل حصرية للفنادق الفاخرة والمعالم السياحية"
          },
          concierge: {
            title: "خدمة الكونسيرج",
            description: "مساعدة شخصية للحجوزات والترتيبات"
          }
        },
        experiences: {
          title: "تجارب وسط دبي",
          recommendedVehicle: "المركبة الموصى بها",
          burjKhalifa: {
            title: "زيارة برج خليفة",
            description: "وصل بأناقة إلى أطول مبنى في العالم",
            features: [
              "خدمة صف السيارات VIP",
              "دخول سريع بدون انتظار",
              "أولوية منصة المراقبة",
              "تصوير احترافي"
            ],
            recommended: "فانتوم"
          },
          dubaiMall: {
            title: "تسوق في دبي مول",
            description: "تجربة تسوق فاخرة في أكبر مول في العالم",
            features: [
              "مساعد تسوق VIP",
              "غرف قياس خاصة",
              "خدمة مساعد تسوق شخصي",
              "دخول للعلامات التجارية الفاخرة"
            ],
            recommended: "غوست"
          },
          business: {
            title: "اجتماعات العمل",
            description: "نقل مهني لمركز دبي المالي والمناطق التجارية",
            features: [
              "سائق تنفيذي",
              "راحة درجة رجال الأعمال",
              "إعداد مكتب متنقل",
              "وصول دقيق"
            ],
            recommended: "كولينان"
          }
        },
        landmarks: {
          title: "المعالم القريبة"
        },
        hotels: {
          title: "الفنادق الفاخرة",
          subtitle: "توصيل مباشر لأرقى أماكن الإقامة في دبي",
          additional: "والعديد من الفنادق الفاخرة الأخرى في المنطقة"
        },
        routes: {
          title: "الطرق الشعبية",
          duration: "المدة",
          stops: "المحطات",
          bestTime: "أفضل وقت",
          fountain: {
            name: "جولة نافورة دبي",
            duration: "45 دقيقة",
            bestTime: "المساء"
          },
          architecture: {
            name: "جولة معمارية",
            duration: "ساعة واحدة",
            bestTime: "بعد الظهر"
          },
          dining: {
            name: "طريق المطاعم الراقية",
            duration: "30 دقيقة",
            bestTime: "المساء"
          }
        },
        testimonials: {
          title: "تجارب العملاء",
          abdullah: {
            location: "تنفيذي مركز دبي المالي",
            text: "خدمة مثالية لاجتماعات العمل. فانتوم تصل دائماً في الوقت المحدد وتترك انطباعاً صحيحاً."
          },
          sophie: {
            location: "متسوقة دبي مول",
            text: "تجربة رائعة! غوست كانت مثالية ليوم التسوق، والسائق ساعد مع جميع حقائبنا."
          },
          david: {
            location: "سائح برج خليفة",
            text: "زيارة لا تُنسى لبرج خليفة في كولينان. المعاملة VIP جعلت رحلتنا لدبي استثنائية."
          }
        },
        stats: {
          time: "دقيقتان",
          avgDelivery: "متوسط التوصيل",
          deliveries: "500+",
          availability: "توصيل يومي"
        },
        fleet: {
          title: "أسطولنا في وسط دبي"
        },
        cta: {
          title: "اختبر وسط دبي بفخامة",
          subtitle: "احجز رولز رويس الخاصة بك لتجربة وسط دبي النهائية",
          callButton: "اتصل الآن",
          bookButton: "احجز أونلاين"
        }
      }
    }
  },
  ru: {
    locations: {
      downtown: {
        hero: {
          title: "Даунтаун Дубай",
          subtitle: "Сердце роскоши",
          district: "Деловой и развлекательный район",
          bookButton: "Забронировать поездку",
          exploreButton: "Исследовать впечатления"
        },
        advantages: {
          title: "Почему выбрать Даунтаун Дубай",
          central: {
            title: "Центральное расположение",
            description: "Сердце делового и развлекательного района Дубая"
          },
          delivery: {
            title: "Доставка премиум-класса",
            description: "Прямая доставка к Бурдж-Халифа, Дубай Молл и DIFC"
          },
          vip: {
            title: "VIP доступ",
            description: "Эксклюзивные входы в роскошные отели и достопримечательности"
          },
          concierge: {
            title: "Консьерж-сервис",
            description: "Персональная помощь с бронированием и организацией"
          }
        },
        experiences: {
          title: "Впечатления Даунтауна",
          recommendedVehicle: "Рекомендуемый автомобиль",
          burjKhalifa: {
            title: "Посещение Бурдж-Халифа",
            description: "Прибытие в стиле к самому высокому зданию мира",
            features: [
              "VIP парковка валет",
              "Доступ без очереди",
              "Приоритет смотровой площадки",
              "Профессиональная фотосъемка"
            ],
            recommended: "Phantom"
          },
          dubaiMall: {
            title: "Шоппинг в Дубай Молл",
            description: "Роскошный шоппинг в самом большом торговом центре мира",
            features: [
              "VIP помощник по шоппингу",
              "Частные примерочные",
              "Персональный шоппер",
              "Доступ к люксовым брендам"
            ],
            recommended: "Ghost"
          },
          business: {
            title: "Деловые встречи",
            description: "Профессиональный транспорт для DIFC и деловых районов",
            features: [
              "Исполнительный шофер",
              "Комфорт бизнес-класса",
              "Мобильный офис",
              "Пунктуальные прибытия"
            ],
            recommended: "Cullinan"
          }
        },
        landmarks: {
          title: "Близлежащие достопримечательности"
        },
        hotels: {
          title: "Роскошные отели",
          subtitle: "Прямая доставка к лучшим отелям Дубая",
          additional: "И многие другие роскошные отели в районе"
        },
        routes: {
          title: "Популярные маршруты",
          duration: "Продолжительность",
          stops: "Остановки",
          bestTime: "Лучшее время",
          fountain: {
            name: "Маршрут Дубайский фонтан",
            duration: "45 минут",
            bestTime: "Вечер"
          },
          architecture: {
            name: "Архитектурный тур",
            duration: "1 час",
            bestTime: "Днем"
          },
          dining: {
            name: "Маршрут изысканных ресторанов",
            duration: "30 минут",
            bestTime: "Вечер"
          }
        },
        testimonials: {
          title: "Отзывы клиентов",
          abdullah: {
            location: "Руководитель DIFC",
            text: "Идеальный сервис для деловых встреч. Phantom всегда прибывает вовремя и производит правильное впечатление."
          },
          sophie: {
            location: "Покупательница Дубай Молл",
            text: "Потрясающий опыт! Ghost был идеален для нашего дня шоппинга, и шофер помог со всеми нашими сумками."
          },
          david: {
            location: "Турист Бурдж-Халифа",
            text: "Незабываемое посещение Бурдж-Халифа на Cullinan. VIP обслуживание сделало нашу поездку в Дубай особенной."
          }
        },
        stats: {
          time: "2 мин",
          avgDelivery: "Среднее время доставки",
          deliveries: "500+",
          availability: "Ежедневные доставки"
        },
        fleet: {
          title: "Наш флот в Даунтауне"
        },
        cta: {
          title: "Испытайте Даунтаун Дубай в роскоши",
          subtitle: "Забронируйте свой Rolls-Royce для окончательного опыта Даунтаун Дубай",
          callButton: "Позвонить сейчас",
          bookButton: "Забронировать онлайн"
        }
      }
    }
  },
  fr: {
    locations: {
      downtown: {
        hero: {
          title: "Downtown Dubaï",
          subtitle: "Le Cœur du Luxe",
          district: "Quartier d'affaires et de divertissement",
          bookButton: "Réserver votre trajet",
          exploreButton: "Explorer les expériences"
        },
        advantages: {
          title: "Pourquoi choisir Downtown Dubaï",
          central: {
            title: "Emplacement central",
            description: "Cœur du quartier d'affaires et de divertissement de Dubaï"
          },
          delivery: {
            title: "Livraison premium",
            description: "Livraison directe au Burj Khalifa, Dubai Mall et DIFC"
          },
          vip: {
            title: "Accès VIP",
            description: "Entrées exclusives aux hôtels de luxe et attractions"
          },
          concierge: {
            title: "Service de conciergerie",
            description: "Assistance personnelle pour réservations et arrangements"
          }
        },
        experiences: {
          title: "Expériences Downtown",
          recommendedVehicle: "Véhicule recommandé",
          burjKhalifa: {
            title: "Visite Burj Khalifa",
            description: "Arrivez avec style au plus haut bâtiment du monde",
            features: [
              "Parking VIP valet",
              "Accès coupe-file",
              "Priorité terrasse d'observation",
              "Photographie professionnelle"
            ],
            recommended: "Phantom"
          },
          dubaiMall: {
            title: "Shopping Dubai Mall",
            description: "Expérience shopping de luxe dans le plus grand centre commercial du monde",
            features: [
              "Assistant shopping VIP",
              "Cabines d'essayage privées",
              "Service personal shopper",
              "Accès aux marques de luxe"
            ],
            recommended: "Ghost"
          },
          business: {
            title: "Réunions d'affaires",
            description: "Transport professionnel pour DIFC et quartiers d'affaires",
            features: [
              "Chauffeur exécutif",
              "Confort classe affaires",
              "Configuration bureau mobile",
              "Arrivées ponctuelles"
            ],
            recommended: "Cullinan"
          }
        },
        landmarks: {
          title: "Points d'intérêt à proximité"
        },
        hotels: {
          title: "Hôtels de luxe",
          subtitle: "Livraison directe aux meilleurs hébergements de Dubaï",
          additional: "Et de nombreux autres hôtels de luxe dans la région"
        },
        routes: {
          title: "Itinéraires populaires",
          duration: "Durée",
          stops: "Arrêts",
          bestTime: "Meilleur moment",
          fountain: {
            name: "Circuit Fontaine de Dubaï",
            duration: "45 minutes",
            bestTime: "Soirée"
          },
          architecture: {
            name: "Tour d'architecture",
            duration: "1 heure",
            bestTime: "Après-midi"
          },
          dining: {
            name: "Route gastronomique",
            duration: "30 minutes",
            bestTime: "Soirée"
          }
        },
        testimonials: {
          title: "Expériences clients",
          abdullah: {
            location: "Exécutif DIFC",
            text: "Service parfait pour les réunions d'affaires. Le Phantom arrive toujours à l'heure et fait la bonne impression."
          },
          sophie: {
            location: "Acheteuse Dubai Mall",
            text: "Expérience fantastique ! Le Ghost était parfait pour notre journée shopping, et le chauffeur a aidé avec tous nos sacs."
          },
          david: {
            location: "Touriste Burj Khalifa",
            text: "Visite inoubliable du Burj Khalifa dans le Cullinan. Le traitement VIP a rendu notre voyage à Dubaï spécial."
          }
        },
        stats: {
          time: "2 min",
          avgDelivery: "Livraison moyenne",
          deliveries: "500+",
          availability: "Livraisons quotidiennes"
        },
        fleet: {
          title: "Notre flotte à Downtown"
        },
        cta: {
          title: "Découvrez Downtown Dubaï dans le luxe",
          subtitle: "Réservez votre Rolls-Royce pour l'expérience ultime de Downtown Dubaï",
          callButton: "Appeler maintenant",
          bookButton: "Réserver en ligne"
        }
      }
    }
  },
  zh: {
    locations: {
      downtown: {
        hero: {
          title: "迪拜市中心",
          subtitle: "奢华之心",
          district: "商业和娱乐区",
          bookButton: "预订您的行程",
          exploreButton: "探索体验"
        },
        advantages: {
          title: "为什么选择迪拜市中心",
          central: {
            title: "中心位置",
            description: "迪拜商业和娱乐区的中心"
          },
          delivery: {
            title: "高端配送",
            description: "直接配送到哈利法塔、迪拜购物中心和DIFC"
          },
          vip: {
            title: "VIP通道",
            description: "豪华酒店和景点的专属入口"
          },
          concierge: {
            title: "礼宾服务",
            description: "预订和安排的个人协助"
          }
        },
        experiences: {
          title: "市中心体验",
          recommendedVehicle: "推荐车型",
          burjKhalifa: {
            title: "哈利法塔参观",
            description: "优雅抵达世界最高建筑",
            features: [
              "VIP代客泊车",
              "免排队通道",
              "观景台优先权",
              "专业摄影"
            ],
            recommended: "幻影"
          },
          dubaiMall: {
            title: "迪拜购物中心购物",
            description: "在世界最大购物中心享受奢华购物体验",
            features: [
              "VIP购物助理",
              "私人试衣间",
              "个人购物顾问服务",
              "奢侈品牌通道"
            ],
            recommended: "古思特"
          },
          business: {
            title: "商务会议",
            description: "DIFC和商业区的专业交通",
            features: [
              "高级司机",
              "商务舱舒适",
              "移动办公设置",
              "准时到达"
            ],
            recommended: "库里南"
          }
        },
        landmarks: {
          title: "附近地标"
        },
        hotels: {
          title: "豪华酒店",
          subtitle: "直接配送到迪拜最好的住宿",
          additional: "以及该地区的许多其他豪华酒店"
        },
        routes: {
          title: "热门路线",
          duration: "时长",
          stops: "停靠点",
          bestTime: "最佳时间",
          fountain: {
            name: "迪拜喷泉环线",
            duration: "45分钟",
            bestTime: "傍晚"
          },
          architecture: {
            name: "建筑之旅",
            duration: "1小时",
            bestTime: "下午"
          },
          dining: {
            name: "精致餐厅路线",
            duration: "30分钟",
            bestTime: "傍晚"
          }
        },
        testimonials: {
          title: "客户体验",
          abdullah: {
            location: "DIFC高管",
            text: "商务会议的完美服务。幻影总是准时到达，给人留下正确的印象。"
          },
          sophie: {
            location: "迪拜购物中心购物者",
            text: "令人惊叹的体验！古思特非常适合我们的购物日，司机帮助搬运所有购物袋。"
          },
          david: {
            location: "哈利法塔游客",
            text: "乘坐库里南参观哈利法塔令人难忘。VIP待遇让我们的迪拜之旅格外特别。"
          }
        },
        stats: {
          time: "2分钟",
          avgDelivery: "平均配送",
          deliveries: "500+",
          availability: "每日配送"
        },
        fleet: {
          title: "我们在市中心的车队"
        },
        cta: {
          title: "在奢华中体验迪拜市中心",
          subtitle: "预订您的劳斯莱斯，享受终极迪拜市中心体验",
          callButton: "立即致电",
          bookButton: "在线预订"
        }
      }
    }
  },
  hi: {
    locations: {
      downtown: {
        hero: {
          title: "डाउनटाउन दुबई",
          subtitle: "लक्जरी का दिल",
          district: "व्यापार और मनोरंजन जिला",
          bookButton: "अपनी यात्रा बुक करें",
          exploreButton: "अनुभव खोजें"
        },
        advantages: {
          title: "डाउनटाउन दुबई क्यों चुनें",
          central: {
            title: "केंद्रीय स्थान",
            description: "दुबई के व्यापार और मनोरंजन जिले का दिल"
          },
          delivery: {
            title: "प्रीमियम डिलीवरी",
            description: "बुर्ज खलीफा, दुबई मॉल और DIFC में प्रत्यक्ष डिलीवरी"
          },
          vip: {
            title: "VIP पहुंच",
            description: "लक्जरी होटल और आकर्षणों के लिए विशेष प्रवेश"
          },
          concierge: {
            title: "कंसीयज सेवा",
            description: "आरक्षण और व्यवस्था के लिए व्यक्तिगत सहायता"
          }
        },
        experiences: {
          title: "डाउनटाउन अनुभव",
          recommendedVehicle: "अनुशंसित वाहन",
          burjKhalifa: {
            title: "बुर्ज खलीफा यात्रा",
            description: "दुनिया की सबसे ऊंची इमारत में शैली से पहुंचें",
            features: [
              "VIP वैलेट पार्किंग",
              "लाइन छोड़ें पहुंच",
              "अवलोकन डेक प्राथमिकता",
              "पेशेवर फोटोग्राफी"
            ],
            recommended: "फैंटम"
          },
          dubaiMall: {
            title: "दुबई मॉल शॉपिंग",
            description: "दुनिया के सबसे बड़े मॉल में लक्जरी शॉपिंग अनुभव",
            features: [
              "VIP शॉपिंग सहायक",
              "निजी फिटिंग रूम",
              "व्यक्तिगत शॉपर सेवा",
              "लक्जरी ब्रांड पहुंच"
            ],
            recommended: "घोस्ट"
          },
          business: {
            title: "व्यापारिक बैठकें",
            description: "DIFC और व्यापारिक जिलों के लिए पेशेवर परिवहन",
            features: [
              "कार्यकारी चालक",
              "बिजनेस-क्लास आराम",
              "मोबाइल ऑफिस सेटअप",
              "समयनिष्ठ आगमन"
            ],
            recommended: "कुलिनन"
          }
        },
        landmarks: {
          title: "नजदीकी स्थल"
        },
        hotels: {
          title: "लक्जरी होटल",
          subtitle: "दुबई के बेहतरीन आवास स्थलों पर प्रत्यक्ष डिलीवरी",
          additional: "और क्षेत्र में कई अन्य लक्जरी होटल"
        },
        routes: {
          title: "लोकप्रिय मार्ग",
          duration: "अवधि",
          stops: "स्टॉप",
          bestTime: "सबसे अच्छा समय",
          fountain: {
            name: "दुबई फाउंटेन सर्किट",
            duration: "45 मिनट",
            bestTime: "शाम"
          },
          architecture: {
            name: "आर्किटेक्चर टूर",
            duration: "1 घंटा",
            bestTime: "दोपहर"
          },
          dining: {
            name: "फाइन डाइनिंग मार्ग",
            duration: "30 मिनट",
            bestTime: "शाम"
          }
        },
        testimonials: {
          title: "ग्राहक अनुभव",
          abdullah: {
            location: "DIFC कार्यकारी",
            text: "व्यापारिक बैठकों के लिए सही सेवा। फैंटम हमेशा समय पर आता है और सही प्रभाव डालता है।"
          },
          sophie: {
            location: "दुबई मॉल शॉपर",
            text: "अद्भुत अनुभव! घोस्ट हमारे शॉपिंग दिन के लिए एकदम सही था, और चालक ने हमारे सभी बैगों में मदद की।"
          },
          david: {
            location: "बुर्ज खलीफा पर्यटक",
            text: "कुलिनन में बुर्ज खलीफा की अविस्मरणीय यात्रा। VIP उपचार ने हमारी दुबई यात्रा को और भी खास बनाया।"
          }
        },
        stats: {
          time: "2 मिनट",
          avgDelivery: "औसत डिलीवरी",
          deliveries: "500+",
          availability: "दैनिक डिलीवरी"
        },
        fleet: {
          title: "डाउनटाउन में हमारा बेड़ा"
        },
        cta: {
          title: "लक्जरी में डाउनटाउन दुबई का अनुभव करें",
          subtitle: "परम डाउनटाउन दुबई अनुभव के लिए अपना रोल्स-रॉयस बुक करें",
          callButton: "अभी कॉल करें",
          bookButton: "ऑनलाइन बुक करें"
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
function addDowntownKeys(language, translations) {
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
console.log('🔧 بدء إصلاح مفاتيح ترجمة صفحة وسط دبي...\n');

LANGUAGES.forEach(lang => {
  if (DOWNTOWN_TRANSLATIONS[lang]) {
    addDowntownKeys(lang, DOWNTOWN_TRANSLATIONS[lang]);
  }
});

console.log('\n✅ تم إصلاح جميع مفاتيح ترجمة صفحة وسط دبي!');
console.log('\n📋 ما تم إضافته:');
console.log('- locations.downtown.hero.* - قسم البطل');
console.log('- locations.downtown.advantages.* - مميزات وسط دبي');
console.log('- locations.downtown.experiences.* - التجارب المتاحة');
console.log('- locations.downtown.landmarks.* - المعالم القريبة');
console.log('- locations.downtown.hotels.* - الفنادق الفاخرة');
console.log('- locations.downtown.routes.* - الطرق الشعبية');
console.log('- locations.downtown.testimonials.* - تجارب العملاء');
console.log('- locations.downtown.stats.* - الإحصائيات');
console.log('- locations.downtown.fleet.* - الأسطول');
console.log('- locations.downtown.cta.* - دعوة للعمل');

console.log('\n🔄 إعادة تشغيل السيرفر مطلوبة لتحميل التغييرات:');
console.log('npm run dev:restart'); 
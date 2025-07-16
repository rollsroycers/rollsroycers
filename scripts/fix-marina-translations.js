#!/usr/bin/env node

/**
 * إصلاح مفاتيح ترجمة صفحة دبي مارينا المفقودة
 * يضيف جميع مفاتيح locations.dubaiMarina.* المطلوبة إلى common.json
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * مفاتيح صفحة دبي مارينا المفقودة
 */
const MARINA_TRANSLATIONS = {
  en: {
    locations: {
      dubaiMarina: {
        hero: {
          title: "Dubai Marina",
          subtitle: "Waterfront Luxury Living",
          bookButton: "Book Your Ride",
          callButton: "Call Now",
          freeDelivery: "Free Marina Delivery",
          deliveryTime: "5-minute arrival",
          vipConcierge: "VIP Concierge Service"
        },
        whyChoose: {
          title: "Why Choose Dubai Marina",
          beachside: {
            title: "Beachside Location",
            description: "Direct access to pristine beaches and waterfront dining"
          },
          nightlife: {
            title: "Vibrant Nightlife",
            description: "Premier entertainment district with world-class venues"
          },
          yacht: {
            title: "Yacht Club Access",
            description: "Exclusive access to luxury yacht clubs and marinas"
          }
        },
        deliveryLocations: {
          title: "Free Delivery Locations",
          additional: "And many more locations throughout Dubai Marina"
        },
        popularRoutes: {
          title: "Popular Marina Routes",
          distance: "Distance",
          duration: "Duration",
          highlights: "Highlights",
          coastal: {
            name: "Coastal Drive",
            description: "Scenic waterfront route along Dubai's coastline",
            highlights: [
              "JBR Beach views",
              "Ain Dubai experience",
              "Marina skyline"
            ]
          },
          city: {
            name: "City Connection",
            description: "Connect Marina to downtown Dubai's main attractions",
            highlights: [
              "Burj Khalifa visit",
              "Dubai Mall shopping",
              "Downtown dining"
            ]
          },
          shopping: {
            name: "Shopping Circuit",
            description: "Visit Dubai's premier shopping destinations",
            highlights: [
              "Marina Mall",
              "Mall of Emirates",
              "Ibn Battuta Mall"
            ]
          }
        },
        nearbyAttractions: {
          title: "Nearby Attractions",
          attraction: "Attraction",
          distance: "Distance",
          type: "Type"
        },
        testimonials: {
          title: "Client Experiences",
          rented: "Rented",
          sarah: {
            location: "Marina Resident",
            text: "Perfect for our evening at Zero Gravity. The Phantom made quite an impression when we arrived.",
            car: "Phantom"
          },
          james: {
            location: "JBR Visitor",
            text: "Amazing service! The Ghost was ideal for our beach day, and the chauffeur knew all the best spots.",
            car: "Ghost"
          },
          fatima: {
            location: "Yacht Club Guest",
            text: "Arrived at the yacht club in style with the Cullinan. The VIP treatment was exceptional.",
            car: "Cullinan"
          }
        },
        fleet: {
          title: "Our Marina Fleet"
        },
        cta: {
          title: "Experience Marina Life in Luxury",
          subtitle: "Book your Rolls-Royce for the ultimate Dubai Marina experience",
          callButton: "Call Now",
          bookButton: "Book Online",
          pickupPoint: "Marina Pickup Point",
          pickupLocation: "Dubai Marina Walk, Building 6, Ground Floor",
          gps: "GPS: 25.0657, 55.1713"
        }
      }
    }
  },
  ar: {
    locations: {
      dubaiMarina: {
        hero: {
          title: "دبي مارينا",
          subtitle: "فخامة الواجهة البحرية",
          bookButton: "احجز رحلتك",
          callButton: "اتصل الآن",
          freeDelivery: "توصيل مجاني للمارينا",
          deliveryTime: "وصول في 5 دقائق",
          vipConcierge: "خدمة كونسيرج VIP"
        },
        whyChoose: {
          title: "لماذا تختار دبي مارينا",
          beachside: {
            title: "موقع على الشاطئ",
            description: "وصول مباشر للشواطئ البكر ومطاعم الواجهة البحرية"
          },
          nightlife: {
            title: "حياة ليلية نابضة",
            description: "منطقة ترفيه رائدة مع أماكن عالمية المستوى"
          },
          yacht: {
            title: "دخول نادي اليخوت",
            description: "دخول حصري لنوادي اليخوت الفاخرة والمارينات"
          }
        },
        deliveryLocations: {
          title: "مواقع التوصيل المجاني",
          additional: "والعديد من المواقع الأخرى في جميع أنحاء دبي مارينا"
        },
        popularRoutes: {
          title: "طرق مارينا الشعبية",
          distance: "المسافة",
          duration: "المدة",
          highlights: "النقاط المميزة",
          coastal: {
            name: "قيادة ساحلية",
            description: "طريق واجهة بحرية خلاب على طول ساحل دبي",
            highlights: [
              "إطلالات شاطئ JBR",
              "تجربة عين دبي",
              "أفق المارينا"
            ]
          },
          city: {
            name: "ربط المدينة",
            description: "ربط المارينا بمعالم وسط دبي الرئيسية",
            highlights: [
              "زيارة برج خليفة",
              "تسوق دبي مول",
              "مطاعم وسط المدينة"
            ]
          },
          shopping: {
            name: "دائرة التسوق",
            description: "زيارة وجهات التسوق الرائدة في دبي",
            highlights: [
              "مارينا مول",
              "مول الإمارات",
              "ابن بطوطة مول"
            ]
          }
        },
        nearbyAttractions: {
          title: "المعالم القريبة",
          attraction: "المعلم",
          distance: "المسافة",
          type: "النوع"
        },
        testimonials: {
          title: "تجارب العملاء",
          rented: "استأجر",
          sarah: {
            location: "مقيمة مارينا",
            text: "مثالي لأمسيتنا في زيرو غرافيتي. فانتوم ترك انطباعاً رائعاً عند وصولنا.",
            car: "فانتوم"
          },
          james: {
            location: "زائر JBR",
            text: "خدمة مذهلة! غوست كان مثالياً ليومنا على الشاطئ، والسائق يعرف أفضل الأماكن.",
            car: "غوست"
          },
          fatima: {
            location: "ضيفة نادي اليخوت",
            text: "وصلت لنادي اليخوت بأناقة مع كولينان. المعاملة VIP كانت استثنائية.",
            car: "كولينان"
          }
        },
        fleet: {
          title: "أسطولنا في المارينا"
        },
        cta: {
          title: "اختبر حياة المارينا بفخامة",
          subtitle: "احجز رولز رويس الخاصة بك لتجربة دبي مارينا النهائية",
          callButton: "اتصل الآن",
          bookButton: "احجز أونلاين",
          pickupPoint: "نقطة الاستلام في المارينا",
          pickupLocation: "دبي مارينا ووك، المبنى 6، الطابق الأرضي",
          gps: "GPS: 25.0657, 55.1713"
        }
      }
    }
  },
  ru: {
    locations: {
      dubaiMarina: {
        hero: {
          title: "Дубай Марина",
          subtitle: "Роскошь на набережной",
          bookButton: "Забронировать поездку",
          callButton: "Позвонить",
          freeDelivery: "Бесплатная доставка в Марину",
          deliveryTime: "Прибытие за 5 минут",
          vipConcierge: "VIP консьерж-сервис"
        },
        whyChoose: {
          title: "Почему выбрать Дубай Марину",
          beachside: {
            title: "Расположение у пляжа",
            description: "Прямой доступ к чистейшим пляжам и ресторанам на набережной"
          },
          nightlife: {
            title: "Яркая ночная жизнь",
            description: "Премиальный развлекательный район с заведениями мирового класса"
          },
          yacht: {
            title: "Доступ к яхт-клубу",
            description: "Эксклюзивный доступ к роскошным яхт-клубам и маринам"
          }
        },
        deliveryLocations: {
          title: "Бесплатная доставка",
          additional: "И множество других локаций по всей Дубай Марине"
        },
        popularRoutes: {
          title: "Популярные маршруты Марины",
          distance: "Расстояние",
          duration: "Продолжительность",
          highlights: "Особенности",
          coastal: {
            name: "Прибрежная поездка",
            description: "Живописный маршрут по набережной вдоль побережья Дубая",
            highlights: [
              "Виды пляжа JBR",
              "Опыт Айн Дубай",
              "Горизонт Марины"
            ]
          },
          city: {
            name: "Городское соединение",
            description: "Соединение Марины с главными достопримечательностями центра Дубая",
            highlights: [
              "Посещение Бурдж-Халифа",
              "Шоппинг в Дубай Молл",
              "Рестораны центра"
            ]
          },
          shopping: {
            name: "Шоппинг-маршрут",
            description: "Посещение премиальных торговых направлений Дубая",
            highlights: [
              "Марина Молл",
              "Молл Эмиратов",
              "Ибн Баттута Молл"
            ]
          }
        },
        nearbyAttractions: {
          title: "Близлежащие достопримечательности",
          attraction: "Достопримечательность",
          distance: "Расстояние",
          type: "Тип"
        },
        testimonials: {
          title: "Отзывы клиентов",
          rented: "Арендовал",
          sarah: {
            location: "Резидент Марины",
            text: "Идеально для нашего вечера в Zero Gravity. Phantom произвел настоящее впечатление по прибытии.",
            car: "Phantom"
          },
          james: {
            location: "Посетитель JBR",
            text: "Потрясающий сервис! Ghost был идеален для нашего пляжного дня, и шофер знал все лучшие места.",
            car: "Ghost"
          },
          fatima: {
            location: "Гость яхт-клуба",
            text: "Прибыла в яхт-клуб с шиком на Cullinan. VIP обслуживание было исключительным.",
            car: "Cullinan"
          }
        },
        fleet: {
          title: "Наш флот в Марине"
        },
        cta: {
          title: "Испытайте жизнь Марины в роскоши",
          subtitle: "Забронируйте свой Rolls-Royce для окончательного опыта Дубай Марины",
          callButton: "Позвонить сейчас",
          bookButton: "Забронировать онлайн",
          pickupPoint: "Точка посадки в Марине",
          pickupLocation: "Дубай Марина Уолк, Здание 6, Первый этаж",
          gps: "GPS: 25.0657, 55.1713"
        }
      }
    }
  },
  fr: {
    locations: {
      dubaiMarina: {
        hero: {
          title: "Dubai Marina",
          subtitle: "Luxe en bord de mer",
          bookButton: "Réserver votre trajet",
          callButton: "Appeler",
          freeDelivery: "Livraison gratuite Marina",
          deliveryTime: "Arrivée en 5 minutes",
          vipConcierge: "Service de conciergerie VIP"
        },
        whyChoose: {
          title: "Pourquoi choisir Dubai Marina",
          beachside: {
            title: "Emplacement en bord de mer",
            description: "Accès direct aux plages immaculées et aux restaurants en bord de mer"
          },
          nightlife: {
            title: "Vie nocturne vibrante",
            description: "District de divertissement premium avec des lieux de classe mondiale"
          },
          yacht: {
            title: "Accès au yacht club",
            description: "Accès exclusif aux yacht-clubs de luxe et marinas"
          }
        },
        deliveryLocations: {
          title: "Lieux de livraison gratuite",
          additional: "Et de nombreux autres endroits dans toute Dubai Marina"
        },
        popularRoutes: {
          title: "Routes populaires de Marina",
          distance: "Distance",
          duration: "Durée",
          highlights: "Points forts",
          coastal: {
            name: "Route côtière",
            description: "Route panoramique en bord de mer le long de la côte de Dubaï",
            highlights: [
              "Vues sur la plage JBR",
              "Expérience Ain Dubai",
              "Horizon de Marina"
            ]
          },
          city: {
            name: "Connexion ville",
            description: "Connecter Marina aux principales attractions du centre de Dubaï",
            highlights: [
              "Visite Burj Khalifa",
              "Shopping Dubai Mall",
              "Restaurants du centre"
            ]
          },
          shopping: {
            name: "Circuit shopping",
            description: "Visiter les destinations shopping premium de Dubaï",
            highlights: [
              "Marina Mall",
              "Mall of the Emirates",
              "Ibn Battuta Mall"
            ]
          }
        },
        nearbyAttractions: {
          title: "Attractions à proximité",
          attraction: "Attraction",
          distance: "Distance",
          type: "Type"
        },
        testimonials: {
          title: "Expériences clients",
          rented: "Loué",
          sarah: {
            location: "Résidente Marina",
            text: "Parfait pour notre soirée au Zero Gravity. Le Phantom a fait une sacrée impression à notre arrivée.",
            car: "Phantom"
          },
          james: {
            location: "Visiteur JBR",
            text: "Service incroyable ! Le Ghost était idéal pour notre journée plage, et le chauffeur connaissait tous les meilleurs spots.",
            car: "Ghost"
          },
          fatima: {
            location: "Invitée yacht club",
            text: "Arrivée au yacht club avec style dans le Cullinan. Le traitement VIP était exceptionnel.",
            car: "Cullinan"
          }
        },
        fleet: {
          title: "Notre flotte à Marina"
        },
        cta: {
          title: "Découvrez la vie Marina dans le luxe",
          subtitle: "Réservez votre Rolls-Royce pour l'expérience ultime de Dubai Marina",
          callButton: "Appeler maintenant",
          bookButton: "Réserver en ligne",
          pickupPoint: "Point de prise en charge Marina",
          pickupLocation: "Dubai Marina Walk, Bâtiment 6, Rez-de-chaussée",
          gps: "GPS: 25.0657, 55.1713"
        }
      }
    }
  },
  zh: {
    locations: {
      dubaiMarina: {
        hero: {
          title: "迪拜码头",
          subtitle: "海滨奢华生活",
          bookButton: "预订您的行程",
          callButton: "立即致电",
          freeDelivery: "免费码头配送",
          deliveryTime: "5分钟到达",
          vipConcierge: "VIP礼宾服务"
        },
        whyChoose: {
          title: "为什么选择迪拜码头",
          beachside: {
            title: "海滨位置",
            description: "直接通往原始海滩和海滨餐厅"
          },
          nightlife: {
            title: "活跃夜生活",
            description: "拥有世界级场所的顶级娱乐区"
          },
          yacht: {
            title: "游艇俱乐部通行",
            description: "独享豪华游艇俱乐部和码头的专属通道"
          }
        },
        deliveryLocations: {
          title: "免费配送地点",
          additional: "以及迪拜码头各处的许多其他地点"
        },
        popularRoutes: {
          title: "码头热门路线",
          distance: "距离",
          duration: "时长",
          highlights: "亮点",
          coastal: {
            name: "海岸线驾驶",
            description: "沿迪拜海岸线的风景海滨路线",
            highlights: [
              "JBR海滩景观",
              "迪拜之眼体验",
              "码头天际线"
            ]
          },
          city: {
            name: "城市连接",
            description: "连接码头与迪拜市中心主要景点",
            highlights: [
              "哈利法塔参观",
              "迪拜购物中心购物",
              "市中心餐厅"
            ]
          },
          shopping: {
            name: "购物环线",
            description: "参观迪拜顶级购物目的地",
            highlights: [
              "码头购物中心",
              "阿联酋购物中心",
              "伊本·白图泰购物中心"
            ]
          }
        },
        nearbyAttractions: {
          title: "附近景点",
          attraction: "景点",
          distance: "距离",
          type: "类型"
        },
        testimonials: {
          title: "客户体验",
          rented: "租用",
          sarah: {
            location: "码头居民",
            text: "在Zero Gravity度过夜晚的完美选择。幻影在我们到达时给人留下深刻印象。",
            car: "幻影"
          },
          james: {
            location: "JBR游客",
            text: "惊人的服务！古思特非常适合我们的海滩日，司机知道所有最好的地点。",
            car: "古思特"
          },
          fatima: {
            location: "游艇俱乐部客人",
            text: "乘坐库里南时尚抵达游艇俱乐部。VIP待遇非常棒。",
            car: "库里南"
          }
        },
        fleet: {
          title: "我们的码头车队"
        },
        cta: {
          title: "在奢华中体验码头生活",
          subtitle: "预订您的劳斯莱斯，享受终极迪拜码头体验",
          callButton: "立即致电",
          bookButton: "在线预订",
          pickupPoint: "码头接送点",
          pickupLocation: "迪拜码头步行街，6号楼，一楼",
          gps: "GPS: 25.0657, 55.1713"
        }
      }
    }
  },
  hi: {
    locations: {
      dubaiMarina: {
        hero: {
          title: "दुबई मरीना",
          subtitle: "वॉटरफ्रंट लक्जरी लिविंग",
          bookButton: "अपनी यात्रा बुक करें",
          callButton: "अभी कॉल करें",
          freeDelivery: "मुफ्त मरीना डिलीवरी",
          deliveryTime: "5 मिनट में पहुंच",
          vipConcierge: "VIP कंसीयज सेवा"
        },
        whyChoose: {
          title: "दुबई मरीना क्यों चुनें",
          beachside: {
            title: "समुद्र तटीय स्थान",
            description: "प्राचीन समुद्र तटों और वॉटरफ्रंट डाइनिंग का प्रत्यक्ष पहुंच"
          },
          nightlife: {
            title: "जीवंत नाइटलाइफ",
            description: "विश्व स्तरीय स्थानों के साथ प्रीमियम मनोरंजन जिला"
          },
          yacht: {
            title: "यॉट क्लब पहुंच",
            description: "लक्जरी यॉट क्लबों और मरीना का विशेष पहुंच"
          }
        },
        deliveryLocations: {
          title: "मुफ्त डिलीवरी स्थान",
          additional: "और दुबई मरीना भर में कई अन्य स्थान"
        },
        popularRoutes: {
          title: "मरीना के लोकप्रिय मार्ग",
          distance: "दूरी",
          duration: "अवधि",
          highlights: "मुख्य विशेषताएं",
          coastal: {
            name: "तटीय ड्राइव",
            description: "दुबई के तटरेखा के साथ प्राकृतिक वॉटरफ्रंट मार्ग",
            highlights: [
              "JBR बीच दृश्य",
              "ऐन दुबई अनुभव",
              "मरीना स्काइलाइन"
            ]
          },
          city: {
            name: "शहर कनेक्शन",
            description: "मरीना को दुबई शहर के मुख्य आकर्षणों से जोड़ना",
            highlights: [
              "बुर्ज खलीफा यात्रा",
              "दुबई मॉल शॉपिंग",
              "डाउनटाउन डाइनिंग"
            ]
          },
          shopping: {
            name: "शॉपिंग सर्किट",
            description: "दुबई के प्रीमियम शॉपिंग गंतव्यों का दौरा",
            highlights: [
              "मरीना मॉल",
              "मॉल ऑफ एमिरेट्स",
              "इब्न बतूता मॉल"
            ]
          }
        },
        nearbyAttractions: {
          title: "नजदीकी आकर्षण",
          attraction: "आकर्षण",
          distance: "दूरी",
          type: "प्रकार"
        },
        testimonials: {
          title: "ग्राहक अनुभव",
          rented: "किराया लिया",
          sarah: {
            location: "मरीना निवासी",
            text: "Zero Gravity में हमारी शाम के लिए परफेक्ट। फैंटम ने हमारे पहुंचने पर काफी प्रभाव छोड़ा।",
            car: "फैंटम"
          },
          james: {
            location: "JBR आगंतुक",
            text: "शानदार सेवा! घोस्ट हमारे बीच दिन के लिए आदर्श था, और चालक को सभी बेहतरीन स्थान पता थे।",
            car: "घोस्ट"
          },
          fatima: {
            location: "यॉट क्लब अतिथि",
            text: "कुलिनन के साथ यॉट क्लब में स्टाइल से पहुंची। VIP ट्रीटमेंट असाधारण था।",
            car: "कुलिनन"
          }
        },
        fleet: {
          title: "मरीना में हमारा बेड़ा"
        },
        cta: {
          title: "लक्जरी में मरीना जीवन का अनुभव करें",
          subtitle: "अंतिम दुबई मरीना अनुभव के लिए अपना रोल्स-रॉयस बुक करें",
          callButton: "अभी कॉल करें",
          bookButton: "ऑनलाइन बुक करें",
          pickupPoint: "मरीना पिकअप पॉइंट",
          pickupLocation: "दुबई मरीना वॉक, बिल्डिंग 6, ग्राउंड फ्लोर",
          gps: "GPS: 25.0657, 55.1713"
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
function addMarinaKeys(language, translations) {
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
console.log('🔧 بدء إصلاح مفاتيح ترجمة صفحة دبي مارينا...\n');

LANGUAGES.forEach(lang => {
  if (MARINA_TRANSLATIONS[lang]) {
    addMarinaKeys(lang, MARINA_TRANSLATIONS[lang]);
  }
});

console.log('\n✅ تم إصلاح جميع مفاتيح ترجمة صفحة دبي مارينا!');
console.log('\n📋 ما تم إضافته:');
console.log('- locations.dubaiMarina.hero.* - قسم البطل');
console.log('- locations.dubaiMarina.whyChoose.* - لماذا تختار المارينا');
console.log('- locations.dubaiMarina.deliveryLocations.* - مواقع التوصيل');
console.log('- locations.dubaiMarina.popularRoutes.* - الطرق الشعبية');
console.log('- locations.dubaiMarina.nearbyAttractions.* - المعالم القريبة');
console.log('- locations.dubaiMarina.testimonials.* - تجارب العملاء');
console.log('- locations.dubaiMarina.fleet.* - الأسطول');
console.log('- locations.dubaiMarina.cta.* - دعوة للعمل');

console.log('\n🔄 إعادة تشغيل السيرفر مطلوبة لتحميل التغييرات:');
console.log('npm run dev:restart'); 
#!/usr/bin/env node

/**
 * إصلاح ترجمات صفحة فانتوم لجميع اللغات
 * يضمن وجود جميع المفاتيح المطلوبة لصفحة رولز رويس فانتوم
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * ترجمات شاملة لصفحة فانتوم
 */
const PHANTOM_TRANSLATIONS = {
  en: {
    fleet: {
      phantom: {
        name: "Rolls-Royce Phantom",
        description: "The pinnacle of luxury motoring, an icon of automotive excellence and bespoke craftsmanship.",
        featuresTitle: "Phantom Exclusive Features",
        specsTitle: "Technical Specifications",
        galleryTitle: "Phantom Gallery",
        features: [
          {
            icon: "👑",
            title: "Magic Carpet Ride",
            desc: "Experience a serene and smooth journey with the state-of-the-art self-leveling air suspension that absorbs any road imperfections."
          },
          {
            icon: "🌟",
            title: "Starlight Headliner",
            desc: "Gaze upon a celestial dreamscape with a custom-made fiber optic roof, creating an illusion of a star-filled night sky."
          },
          {
            icon: "🎭",
            title: "Rear Theatre Configuration",
            desc: "Entertain your guests with dual 12-inch HD screens, a bespoke audio system, and a center console with a drinks cabinet."
          },
          {
            icon: "🔇",
            title: "The Silent Chamber",
            desc: "Enjoy unparalleled tranquility within the Phantom's cabin, thanks to over 130kg of sound insulation for a whisper-quiet ride."
          }
        ],
        specs: {
          engine: "6.75L Twin-Turbocharged V12",
          power: "563 hp @ 5,000 rpm",
          torque: "900 Nm @ 1,700 rpm",
          acceleration: "0-100 km/h in 5.3s",
          topSpeed: "250 km/h (limited)",
          seats: "4-5",
          transmission: "8-speed automatic",
          drivetrain: "Rear-wheel drive"
        },
        gallery: {
          exteriorAlt: "Rolls-Royce Phantom majestic exterior in Dubai",
          interiorAlt: "Luxurious interior of the Rolls-Royce Phantom with starlight headliner"
        },
        cta: {
          title: "Reserve Your Phantom Experience",
          subtitle: "Experience the ultimate in automotive luxury with the Rolls-Royce Phantom in Dubai"
        }
      },
      rentNow: "Rent Now"
    },
    pricing: {
      daily: "Per Day",
      weekly: "Per Week", 
      monthly: "Per Month"
    }
  },
  ar: {
    fleet: {
      phantom: {
        name: "رولز رويس فانتوم",
        description: "قمة الفخامة في عالم السيارات، أيقونة التميز في صناعة السيارات والحرفية المخصصة.",
        featuresTitle: "ميزات فانتوم الحصرية",
        specsTitle: "المواصفات الفنية",
        galleryTitle: "معرض صور فانتوم",
        features: [
          {
            icon: "👑",
            title: "ركوب السجادة السحرية",
            desc: "استمتع برحلة هادئة وسلسة مع نظام التعليق الهوائي ذاتي التسوية الذي يمتص أي عيوب في الطريق."
          },
          {
            icon: "🌟",
            title: "سقف النجوم",
            desc: "تأمل في منظر سماوي حالم مع سقف من الألياف الضوئية مصنوع خصيصًا، مما يخلق وهم سماء مليئة بالنجوم."
          },
          {
            icon: "🎭",
            title: "تكوين المسرح الخلفي",
            desc: "استمتع بترفيه ضيوفك مع شاشات HD مزدوجة مقاس 12 بوصة، ونظام صوتي مخصص، ووحدة تحكم مركزية مع خزانة مشروبات."
          },
          {
            icon: "🔇",
            title: "الغرفة الصامتة",
            desc: "استمتع بالهدوء الذي لا مثيل له داخل مقصورة فانتوم، بفضل أكثر من 130 كجم من عزل الصوت لركوب هادئ للغاية."
          }
        ],
        specs: {
          engine: "محرك V12 مزدوج التيربو 6.75 لتر",
          power: "563 حصان @ 5000 دورة/دقيقة",
          torque: "900 نيوتن متر @ 1700 دورة/دقيقة",
          acceleration: "0-100 كم/ساعة في 5.3 ثانية",
          topSpeed: "250 كم/ساعة (محدودة)",
          seats: "4-5",
          transmission: "أوتوماتيك 8 سرعات",
          drivetrain: "دفع خلفي"
        },
        gallery: {
          exteriorAlt: "رولز رويس فانتوم الخارجية الرائعة في دبي",
          interiorAlt: "التصميم الداخلي الفاخر لرولز رويس فانتوم مع سقف النجوم"
        },
        cta: {
          title: "احجز تجربة فانتوم الخاصة بك",
          subtitle: "اختبر قمة الرفاهية في عالم السيارات مع رولز رويس فانتوم في دبي"
        }
      },
      rentNow: "استأجر الآن"
    },
    pricing: {
      daily: "في اليوم",
      weekly: "في الأسبوع",
      monthly: "في الشهر"
    }
  },
  ru: {
    fleet: {
      phantom: {
        name: "Rolls-Royce Phantom",
        description: "Вершина автомобильной роскоши, икона автомобильного совершенства и индивидуального мастерства.",
        featuresTitle: "Эксклюзивные Особенности Phantom",
        specsTitle: "Технические Характеристики",
        galleryTitle: "Галерея Phantom",
        features: [
          {
            icon: "👑",
            title: "Поездка на 'Волшебном ковре'",
            desc: "Наслаждайтесь безмятежной и плавной поездкой благодаря современной самовыравнивающейся пневматической подвеске, которая поглощает любые неровности дороги."
          },
          {
            icon: "🌟",
            title: "Потолок 'Звездное небо'",
            desc: "Взгляните на небесный пейзаж мечты с изготовленной на заказ крышей из оптоволокна, создающей иллюзию звездного ночного неба."
          },
          {
            icon: "🎭",
            title: "Задний кинотеатр",
            desc: "Развлекайте своих гостей с помощью двух 12-дюймовых HD-экранов, аудиосистемы на заказ и центральной консоли с холодильником для напитков."
          },
          {
            icon: "🔇",
            title: "Тихая палата",
            desc: "Наслаждайтесь непревзойденным спокойствием в салоне Phantom благодаря более чем 130 кг звукоизоляции для шепотно тихой поездки."
          }
        ],
        specs: {
          engine: "6.75л V12 Twin-Turbo",
          power: "563 л.с. @ 5000 об/мин",
          torque: "900 Нм @ 1700 об/мин",
          acceleration: "0-100 км/ч за 5.3с",
          topSpeed: "250 км/ч (ограничено)",
          seats: "4-5",
          transmission: "8-ступенчатая автоматическая",
          drivetrain: "Задний привод"
        },
        gallery: {
          exteriorAlt: "Величественный экстерьер Rolls-Royce Phantom в Дубае",
          interiorAlt: "Роскошный интерьер Rolls-Royce Phantom со звездным потолком"
        },
        cta: {
          title: "Забронируйте свой опыт с Phantom",
          subtitle: "Испытайте вершину автомобильной роскоши с Rolls-Royce Phantom в Дубае"
        }
      },
      rentNow: "Арендовать сейчас"
    },
    pricing: {
      daily: "В день",
      weekly: "В неделю",
      monthly: "В месяц"
    }
  },
  fr: {
    fleet: {
      phantom: {
        name: "Rolls-Royce Phantom",
        description: "Le summum du luxe automobile, une icône de l'excellence automobile et de l'artisanat sur mesure.",
        featuresTitle: "Caractéristiques Exclusives de la Phantom",
        specsTitle: "Spécifications Techniques",
        galleryTitle: "Galerie de la Phantom",
        features: [
          {
            icon: "👑",
            title: "Conduite Tapis Volant",
            desc: "Vivez un voyage serein et doux avec la suspension pneumatique à nivellement automatique de pointe qui absorbe toutes les imperfections de la route."
          },
          {
            icon: "🌟",
            title: "Ciel de Toit Étoilé",
            desc: "Contemplez un paysage de rêve céleste avec un toit en fibre optique sur mesure, créant l'illusion d'un ciel nocturne rempli d'étoiles."
          },
          {
            icon: "🎭",
            title: "Configuration Théâtre Arrière",
            desc: "Divertissez vos invités avec deux écrans HD de 12 pouces, un système audio sur mesure et une console centrale avec un compartiment à boissons."
          },
          {
            icon: "🔇",
            title: "La Chambre Silencieuse",
            desc: "Profitez d'une tranquillité inégalée dans l'habitacle de la Phantom, grâce à plus de 130 kg d'isolation phonique pour une conduite silencieuse."
          }
        ],
        specs: {
          engine: "V12 bi-turbo de 6,75 L",
          power: "563 ch à 5 000 tr/min",
          torque: "900 Nm à 1 700 tr/min",
          acceleration: "0-100 km/h en 5,3 s",
          topSpeed: "250 km/h (limitée)",
          seats: "4-5",
          transmission: "Automatique à 8 vitesses",
          drivetrain: "Propulsion"
        },
        gallery: {
          exteriorAlt: "Extérieur majestueux de la Rolls-Royce Phantom à Dubaï",
          interiorAlt: "Intérieur luxueux de la Rolls-Royce Phantom avec ciel de toit étoilé"
        },
        cta: {
          title: "Réservez votre expérience Phantom",
          subtitle: "Découvrez le summum du luxe automobile avec la Rolls-Royce Phantom à Dubaï"
        }
      },
      rentNow: "Louer maintenant"
    },
    pricing: {
      daily: "Par jour",
      weekly: "Par semaine",
      monthly: "Par mois"
    }
  },
  zh: {
    fleet: {
      phantom: {
        name: "劳斯莱斯幻影",
        description: "汽车奢华的巅峰之作，卓越汽车工艺和定制化服务的标志。",
        featuresTitle: "幻影独家特色",
        specsTitle: "技术规格",
        galleryTitle: "幻影画廊",
        features: [
          {
            icon: "👑",
            title: "魔毯般平稳的行驶体验",
            desc: "体验宁静平顺的旅程，最先进的自调平空气悬挂系统可吸收任何路面颠簸。"
          },
          {
            icon: "🌟",
            title: "星光顶篷",
            desc: "凝视定制的光纤车顶，欣赏梦幻般的星空，营造出繁星满天的夜空幻境。"
          },
          {
            icon: "🎭",
            title: "后排影院系统",
            desc: "双12英寸高清屏幕、定制音响系统和带饮料柜的中央控制台，为您的客人提供娱乐。"
          },
          {
            icon: "🔇",
            title: "静谧座舱",
            desc: "幻影车舱内超过130公斤的隔音材料，为您带来无与伦比的宁静，享受耳语般安静的驾乘体验。"
          }
        ],
        specs: {
          engine: "6.75升双涡轮增压V12发动机",
          power: "563马力 @ 5000转/分",
          torque: "900牛·米 @ 1700转/分",
          acceleration: "0-100公里/小时 5.3秒",
          topSpeed: "250公里/小时（电子限速）",
          seats: "4-5",
          transmission: "8速自动变速箱",
          drivetrain: "后轮驱动"
        },
        gallery: {
          exteriorAlt: "劳斯莱斯幻影在迪拜的雄伟外观",
          interiorAlt: "劳斯莱斯幻影的豪华内饰，配有星光顶篷"
        },
        cta: {
          title: "预订您的幻影体验",
          subtitle: "在迪拜体验劳斯莱斯幻影的极致汽车奢华"
        }
      },
      rentNow: "立即租赁"
    },
    pricing: {
      daily: "每日",
      weekly: "每周",
      monthly: "每月"
    }
  },
  hi: {
    fleet: {
      phantom: {
        name: "रोल्स-रॉयस फैंटम",
        description: "ऑटोमोटिव उत्कृष्टता और विशेष शिल्प कौशल का प्रतीक, मोटरिंग विलासिता का शिखर।",
        featuresTitle: "फैंटम की विशिष्ट विशेषताएं",
        specsTitle: "तकनीकी विनिर्देश",
        galleryTitle: "फैंटम गैलरी",
        features: [
          {
            icon: "👑",
            title: "मैजिक कार्पेट राइड",
            desc: "अत्याधुनिक सेल्फ-लेवलिंग एयर सस्पेंशन के साथ एक शांत और सहज यात्रा का अनुभव करें जो किसी भी सड़क की खामियों को सोख लेता है।"
          },
          {
            icon: "🌟",
            title: "स्टारलाइट हेडलाइनर",
            desc: "एक कस्टम-निर्मित फाइबर ऑप्टिक छत के साथ एक दिव्य स्वप्नलोक को निहारें, जो तारों से भरे रात के आकाश का भ्रम पैदा करता है।"
          },
          {
            icon: "🎭",
            title: "रियर थिएटर कॉन्फ़िगरेशन",
            desc: "डुअल 12-इंच एचडी स्क्रीन, एक बेस्पोक ऑडियो सिस्टम, और ड्रिंक्स कैबिनेट के साथ सेंटर कंसोल के साथ अपने मेहमानों का मनोरंजन करें।"
          },
          {
            icon: "🔇",
            title: "मौन कक्ष",
            desc: "130 किलो से अधिक साउंड इंसुलेशन के लिए धन्यवाद, फैंटम के केबिन के भीतर अपरिवर्तित शांति का आनंद लें, जो एक फुसफुसाहट-शांत सवारी के लिए है।"
          }
        ],
        specs: {
          engine: "6.75L ट्विन-टर्बोचार्ज्ड V12",
          power: "563 एचपी @ 5,000 आरपीएम",
          torque: "900 एनएम @ 1,700 आरपीएम",
          acceleration: "0-100 किमी/घंटा 5.3 सेकंड में",
          topSpeed: "250 किमी/घंटा (सीमित)",
          seats: "4-5",
          transmission: "8-स्पीड ऑटोमेटिक",
          drivetrain: "रियर-व्हील ड्राइव"
        },
        gallery: {
          exteriorAlt: "दुबई में रोल्स-रॉयस फैंटम का राजसी बाहरी भाग",
          interiorAlt: "स्टारलाइट हेडलाइनर के साथ रोल्स-रॉयस फैंटम का शानदार इंटीरियर"
        },
        cta: {
          title: "अपना फैंटम अनुभव आरक्षित करें",
          subtitle: "दुबई में रोल्स-रॉयस फैंटम के साथ ऑटोमोटिव लक्जरी के अंतिम अनुभव करें"
        }
      },
      rentNow: "अब किराए पर लें"
    },
    pricing: {
      daily: "प्रति दिन",
      weekly: "प्रति सप्ताह",
      monthly: "प्रति माह"
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
 * إضافة ترجمات فانتوم للغة معينة
 */
function addPhantomTranslations(language, translations) {
  const commonPath = path.join(__dirname, '..', 'public', 'locales', language, 'common.json');
  
  try {
    let existingTranslations = {};
    if (fs.existsSync(commonPath)) {
      existingTranslations = JSON.parse(fs.readFileSync(commonPath, 'utf8'));
    }
    
    const updatedTranslations = mergeTranslations(existingTranslations, translations);
    
    fs.writeFileSync(commonPath, JSON.stringify(updatedTranslations, null, 2), 'utf8');
    console.log(`✅ تم تحديث ترجمة ${language} لصفحة فانتوم`);
    
  } catch (error) {
    console.error(`❌ خطأ في تحديث ${language}:`, error.message);
  }
}

/**
 * التشغيل الرئيسي
 */
console.log('🔧 بدء إصلاح ترجمات صفحة فانتوم...\n');

LANGUAGES.forEach(lang => {
  if (PHANTOM_TRANSLATIONS[lang]) {
    addPhantomTranslations(lang, PHANTOM_TRANSLATIONS[lang]);
  }
});

console.log('\n✅ تم إصلاح جميع ترجمات صفحة فانتوم!');
console.log('\n📋 ما تم إضافته/تحديثه:');
console.log('- fleet.phantom.* - جميع مفاتيح صفحة فانتوم');
console.log('- fleet.phantom.features - قائمة الميزات الحصرية');
console.log('- fleet.phantom.specs - المواصفات الفنية الكاملة');
console.log('- fleet.phantom.gallery - وصف صور المعرض');
console.log('- fleet.phantom.cta - دعوة للعمل');
console.log('- fleet.rentNow - زر الاستئجار');
console.log('- pricing.* - أسعار الإيجار');

console.log('\n🌍 اللغات المحدثة:');
console.log('- English (EN)');
console.log('- العربية (AR)');
console.log('- Русский (RU)');
console.log('- Français (FR)');
console.log('- 中文 (ZH)');
console.log('- हिन्दी (HI)');

console.log('\n🔗 الآن يمكن الوصول إلى صفحة فانتوم بجميع اللغات:');
console.log('http://localhost:3000/fleet/phantom');
console.log('http://localhost:3000/ar/fleet/phantom');
console.log('http://localhost:3000/ru/fleet/phantom');
console.log('http://localhost:3000/fr/fleet/phantom');
console.log('http://localhost:3000/zh/fleet/phantom');
console.log('http://localhost:3000/hi/fleet/phantom'); 
const fs = require('fs');
const path = require('path');

// Mercedes comparison translations for all languages with Rolls-Royce favorability
const translations = {
  en: {
    compare: {
      mercedes: {
        hero: {
          title: {
            rollsRoyce: "Rolls-Royce",
            vs: "vs",
            mercedes: "Mercedes-Benz"
          },
          subtitle: "Experience the Unmatched Excellence of British Bespoke Luxury",
          exploreFleet: "Explore Our Fleet",
          bookNow: "Book Rolls-Royce Now"
        },
        quickSummary: {
          rollsRoyce: {
            title: "Rolls-Royce",
            point1: "Unparalleled bespoke customization",
            point2: "World's quietest and smoothest ride",
            point3: "Ultimate symbol of success and prestige"
          },
          mercedes: {
            title: "Mercedes-Benz",
            point1: "Mass-produced luxury vehicles",
            point2: "Technology-focused approach",
            point3: "Corporate executive choice"
          }
        },
        cta: {
          title: "Experience True Luxury with Rolls-Royce",
          subtitle: "While Mercedes offers quality, Rolls-Royce delivers an incomparable experience",
          viewFleet: "View Rolls-Royce Fleet",
          bookNow: "Book Your Rolls-Royce"
        },
        verdict: {
          title: "The Clear Choice for Ultimate Luxury",
          p1: "While Mercedes-Benz offers impressive German engineering and technology, Rolls-Royce remains in a league of its own.",
          p2: "Choose Rolls-Royce for an experience that transcends mere transportation."
        }
      }
    }
  },
  ar: {
    compare: {
      mercedes: {
        hero: {
          title: {
            rollsRoyce: "رولز رويس",
            vs: "مقابل",
            mercedes: "مرسيدس بنز"
          },
          subtitle: "اختبر التميز الذي لا مثيل له للفخامة البريطانية المصممة خصيصاً",
          exploreFleet: "استكشف أسطولنا",
          bookNow: "احجز رولز رويس الآن"
        },
        quickSummary: {
          rollsRoyce: {
            title: "رولز رويس",
            point1: "تخصيص لا مثيل له حسب الطلب",
            point2: "أهدأ وأنعم رحلة في العالم",
            point3: "الرمز الأعلى للنجاح والهيبة"
          },
          mercedes: {
            title: "مرسيدس بنز",
            point1: "مركبات فاخرة منتجة بكميات كبيرة",
            point2: "نهج يركز على التكنولوجيا",
            point3: "اختيار المديرين التنفيذيين"
          }
        },
        cta: {
          title: "اختبر الفخامة الحقيقية مع رولز رويس",
          subtitle: "بينما تقدم مرسيدس الجودة، تقدم رولز رويس تجربة لا تضاهى",
          viewFleet: "عرض أسطول رولز رويس",
          bookNow: "احجز رولز رويس الخاصة بك"
        },
        verdict: {
          title: "الاختيار الواضح للفخامة المطلقة",
          p1: "بينما تقدم مرسيدس بنز هندسة وتقنية ألمانية مثيرة للإعجاب، تبقى رولز رويس في فئة خاصة بها.",
          p2: "اختر رولز رويس لتجربة تتجاوز مجرد النقل."
        }
      }
    }
  },
  fr: {
    compare: {
      mercedes: {
        hero: {
          title: {
            rollsRoyce: "Rolls-Royce",
            vs: "vs",
            mercedes: "Mercedes-Benz"
          },
          subtitle: "Découvrez l'Excellence Inégalée du Luxe Britannique Sur Mesure",
          exploreFleet: "Explorer Notre Flotte",
          bookNow: "Réserver Rolls-Royce Maintenant"
        },
        quickSummary: {
          rollsRoyce: {
            title: "Rolls-Royce",
            point1: "Personnalisation sur mesure inégalée",
            point2: "La conduite la plus silencieuse et douce au monde",
            point3: "Symbole ultime de succès et de prestige"
          },
          mercedes: {
            title: "Mercedes-Benz",
            point1: "Véhicules de luxe produits en masse",
            point2: "Approche axée sur la technologie",
            point3: "Choix des cadres d'entreprise"
          }
        },
        cta: {
          title: "Vivez le Vrai Luxe avec Rolls-Royce",
          subtitle: "Alors que Mercedes offre la qualité, Rolls-Royce offre une expérience incomparable",
          viewFleet: "Voir la Flotte Rolls-Royce",
          bookNow: "Réservez Votre Rolls-Royce"
        },
        verdict: {
          title: "Le Choix Évident pour le Luxe Ultime",
          p1: "Bien que Mercedes-Benz offre une ingénierie et une technologie allemandes impressionnantes, Rolls-Royce reste dans une classe à part.",
          p2: "Choisissez Rolls-Royce pour une expérience qui transcende le simple transport."
        }
      }
    }
  },
  hi: {
    compare: {
      mercedes: {
        hero: {
          title: {
            rollsRoyce: "रोल्स-रॉयस",
            vs: "बनाम",
            mercedes: "मर्सिडीज-बेंज"
          },
          subtitle: "ब्रिटिश बेस्पोक लक्जरी की बेमिसाल उत्कृष्टता का अनुभव करें",
          exploreFleet: "हमारा फ्लीट देखें",
          bookNow: "रोल्स-रॉयस अभी बुक करें"
        },
        quickSummary: {
          rollsRoyce: {
            title: "रोल्स-रॉयस",
            point1: "अद्वितीय बेस्पोक कस्टमाइज़ेशन",
            point2: "दुनिया की सबसे शांत और चिकनी सवारी",
            point3: "सफलता और प्रतिष्ठा का अंतिम प्रतीक"
          },
          mercedes: {
            title: "मर्सिडीज-बेंज",
            point1: "बड़े पैमाने पर उत्पादित लक्जरी वाहन",
            point2: "प्रौद्योगिकी-केंद्रित दृष्टिकोण",
            point3: "कॉर्पोरेट कार्यकारी विकल्प"
          }
        },
        cta: {
          title: "रोल्स-रॉयस के साथ सच्ची लक्जरी का अनुभव करें",
          subtitle: "जबकि मर्सिडीज गुणवत्ता प्रदान करती है, रोल्स-रॉयस एक अतुलनीय अनुभव प्रदान करती है",
          viewFleet: "रोल्स-रॉयस फ्लीट देखें",
          bookNow: "अपनी रोल्स-रॉयस बुक करें"
        },
        verdict: {
          title: "परम लक्जरी के लिए स्पष्ट विकल्प",
          p1: "जबकि मर्सिडीज-बेंज प्रभावशाली जर्मन इंजीनियरिंग और तकनीक प्रदान करती है, रोल्स-रॉयस अपनी एक अलग श्रेणी में रहती है।",
          p2: "केवल परिवहन से परे एक अनुभव के लिए रोल्स-रॉयस चुनें।"
        }
      }
    }
  },
  ru: {
    compare: {
      mercedes: {
        hero: {
          title: {
            rollsRoyce: "Роллс-Ройс",
            vs: "против",
            mercedes: "Мерседес-Бенц"
          },
          subtitle: "Испытайте Непревзойденное Превосходство Британской Индивидуальной Роскоши",
          exploreFleet: "Изучить Наш Автопарк",
          bookNow: "Забронировать Роллс-Ройс Сейчас"
        },
        quickSummary: {
          rollsRoyce: {
            title: "Роллс-Ройс",
            point1: "Непревзойденная индивидуальная настройка",
            point2: "Самая тихая и плавная поездка в мире",
            point3: "Высший символ успеха и престижа"
          },
          mercedes: {
            title: "Мерседес-Бенц",
            point1: "Массово производимые роскошные автомобили",
            point2: "Технологический подход",
            point3: "Корпоративный выбор"
          }
        },
        cta: {
          title: "Испытайте Истинную Роскошь с Роллс-Ройс",
          subtitle: "В то время как Мерседес предлагает качество, Роллс-Ройс предоставляет несравненный опыт",
          viewFleet: "Посмотреть Автопарк Роллс-Ройс",
          bookNow: "Забронировать Ваш Роллс-Ройс"
        },
        verdict: {
          title: "Очевидный Выбор для Абсолютной Роскоши",
          p1: "Хотя Мерседес-Бенц предлагает впечатляющую немецкую инженерию и технологии, Роллс-Ройс остается в своей собственной лиге.",
          p2: "Выберите Роллс-Ройс для опыта, который превосходит простую транспортировку."
        }
      }
    }
  },
  zh: {
    compare: {
      mercedes: {
        hero: {
          title: {
            rollsRoyce: "劳斯莱斯",
            vs: "对比",
            mercedes: "梅赛德斯-奔驰"
          },
          subtitle: "体验无与伦比的英式定制奢华卓越",
          exploreFleet: "探索我们的车队",
          bookNow: "立即预订劳斯莱斯"
        },
        quickSummary: {
          rollsRoyce: {
            title: "劳斯莱斯",
            point1: "无与伦比的定制化定制",
            point2: "世界上最安静、最平稳的驾驶",
            point3: "成功和声望的终极象征"
          },
          mercedes: {
            title: "梅赛德斯-奔驰",
            point1: "大规模生产的豪华车",
            point2: "以技术为中心的方法",
            point3: "企业高管选择"
          }
        },
        cta: {
          title: "与劳斯莱斯一起体验真正的奢华",
          subtitle: "虽然梅赛德斯提供品质，但劳斯莱斯提供无与伦比的体验",
          viewFleet: "查看劳斯莱斯车队",
          bookNow: "预订您的劳斯莱斯"
        },
        verdict: {
          title: "终极奢华的明确选择",
          p1: "虽然梅赛德斯-奔驰提供令人印象深刻的德国工程和技术，但劳斯莱斯仍然处于自己的联盟中。",
          p2: "选择劳斯莱斯，获得超越单纯交通的体验。"
        }
      }
    }
  }
};

// Function to update translation files
function updateTranslations() {
  const localesDir = path.join(__dirname, '../public/locales');
  
  Object.keys(translations).forEach(lang => {
    const filePath = path.join(localesDir, lang, 'common.json');
    
    try {
      // Read existing file
      let existingData = {};
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        existingData = JSON.parse(fileContent);
      }
      
      // Deep merge the translations
      if (!existingData.compare) {
        existingData.compare = {};
      }
      
      existingData.compare.mercedes = translations[lang].compare.mercedes;
      
      // Write back to file
      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf8');
      console.log(`✅ Updated ${lang}/common.json with Mercedes comparison translations`);
    } catch (error) {
      console.error(`❌ Error updating ${lang}/common.json:`, error.message);
    }
  });
}

// Run the update
updateTranslations();
console.log('\n✨ Mercedes comparison translations added successfully!');
const fs = require('fs');
const path = require('path');

// Translation content for Rolls-Royce vs Ferrari comparison
const translations = {
  en: {
    compare: {
      "rolls-royce-vs-ferrari": {
        title: "Rolls-Royce vs Ferrari Rental in Dubai | Smart Luxury Choice",
        description: "Compare Rolls-Royce vs Ferrari rental in Dubai. Discover why Rolls-Royce offers superior value, comfort, and prestige for luxury car rental. All-inclusive rates, professional chauffeur service, and unmatched luxury experience."
      },
      ferrari: {
        hero: {
          title: "Rolls-Royce vs Ferrari Rental in Dubai",
          subtitle: "Discover why Rolls-Royce is the intelligent choice for luxury car rental in Dubai",
          bookRollsRoyce: "Book Rolls-Royce Now",
          seeComparison: "See Full Comparison"
        },
        aspects: {
          rental: { name: "Rental Experience" },
          comfort: { name: "Comfort & Luxury" },
          occasion: { name: "Perfect Occasions" },
          service: { name: "Service & Support" },
          value: { name: "Value Proposition" },
          experience: { name: "Dubai Experience" }
        },
        winner: {
          title: "Why Smart Clients Choose Rolls-Royce",
          subtitle: "The numbers speak for themselves - Rolls-Royce delivers superior value, comfort, and prestige"
        },
        detailed: {
          comparison: "Comparison"
        },
        packages: {
          title: "Rental Packages - The Real Cost",
          summary: "Save up to 40% with Rolls-Royce all-inclusive rental",
          cta: "Book Smart - Choose Rolls-Royce"
        },
        testimonials: {
          title: "What Our Clients Say"
        },
        finalCta: {
          title: "The Smart Choice is Clear",
          message: "Join thousands of satisfied clients who choose Rolls-Royce for the ultimate luxury rental experience in Dubai.",
          bookNow: "Reserve Your Rolls-Royce",
          viewFleet: "View Our Fleet",
          urgency: "⏰ Limited availability - Book now to secure your dates"
        },
        contact: {
          title: "Ready to Experience True Luxury?",
          subtitle: "Our team is available 24/7 to assist you"
        }
      }
    }
  },
  ar: {
    compare: {
      "rolls-royce-vs-ferrari": {
        title: "مقارنة تأجير رولز رويس وفيراري في دبي | الاختيار الذكي للفخامة",
        description: "قارن بين تأجير رولز رويس وفيراري في دبي. اكتشف لماذا تقدم رولز رويس قيمة وراحة ومكانة متفوقة لتأجير السيارات الفاخرة. أسعار شاملة وخدمة سائق محترف وتجربة فخامة لا مثيل لها."
      },
      ferrari: {
        hero: {
          title: "تأجير رولز رويس مقابل فيراري في دبي",
          subtitle: "اكتشف لماذا رولز رويس هي الخيار الذكي لتأجير السيارات الفاخرة في دبي",
          bookRollsRoyce: "احجز رولز رويس الآن",
          seeComparison: "شاهد المقارنة الكاملة"
        },
        aspects: {
          rental: { name: "تجربة التأجير" },
          comfort: { name: "الراحة والفخامة" },
          occasion: { name: "المناسبات المثالية" },
          service: { name: "الخدمة والدعم" },
          value: { name: "القيمة المقترحة" },
          experience: { name: "تجربة دبي" }
        },
        winner: {
          title: "لماذا يختار العملاء الأذكياء رولز رويس",
          subtitle: "الأرقام تتحدث عن نفسها - رولز رويس تقدم قيمة وراحة ومكانة متفوقة"
        },
        detailed: {
          comparison: "المقارنة"
        },
        packages: {
          title: "باقات التأجير - التكلفة الحقيقية",
          summary: "وفر حتى 40% مع تأجير رولز رويس الشامل",
          cta: "احجز بذكاء - اختر رولز رويس"
        },
        testimonials: {
          title: "ماذا يقول عملاؤنا"
        },
        finalCta: {
          title: "الخيار الذكي واضح",
          message: "انضم إلى آلاف العملاء الراضين الذين يختارون رولز رويس لتجربة تأجير الفخامة المطلقة في دبي.",
          bookNow: "احجز رولز رويس الخاصة بك",
          viewFleet: "شاهد أسطولنا",
          urgency: "⏰ التوفر محدود - احجز الآن لتأمين تواريخك"
        },
        contact: {
          title: "مستعد لتجربة الفخامة الحقيقية؟",
          subtitle: "فريقنا متاح 24/7 لمساعدتك"
        }
      }
    }
  },
  fr: {
    compare: {
      "rolls-royce-vs-ferrari": {
        title: "Location Rolls-Royce vs Ferrari à Dubaï | Choix de Luxe Intelligent",
        description: "Comparez la location Rolls-Royce vs Ferrari à Dubaï. Découvrez pourquoi Rolls-Royce offre une valeur, un confort et un prestige supérieurs pour la location de voitures de luxe. Tarifs tout compris, service de chauffeur professionnel et expérience de luxe inégalée."
      },
      ferrari: {
        hero: {
          title: "Location Rolls-Royce vs Ferrari à Dubaï",
          subtitle: "Découvrez pourquoi Rolls-Royce est le choix intelligent pour la location de voitures de luxe à Dubaï",
          bookRollsRoyce: "Réserver Rolls-Royce Maintenant",
          seeComparison: "Voir la Comparaison Complète"
        },
        aspects: {
          rental: { name: "Expérience de Location" },
          comfort: { name: "Confort et Luxe" },
          occasion: { name: "Occasions Parfaites" },
          service: { name: "Service et Support" },
          value: { name: "Proposition de Valeur" },
          experience: { name: "Expérience Dubai" }
        },
        winner: {
          title: "Pourquoi les Clients Intelligents Choisissent Rolls-Royce",
          subtitle: "Les chiffres parlent d'eux-mêmes - Rolls-Royce offre une valeur, un confort et un prestige supérieurs"
        },
        detailed: {
          comparison: "Comparaison"
        },
        packages: {
          title: "Forfaits de Location - Le Coût Réel",
          summary: "Économisez jusqu'à 40% avec la location tout compris Rolls-Royce",
          cta: "Réservez Intelligemment - Choisissez Rolls-Royce"
        },
        testimonials: {
          title: "Ce Que Disent Nos Clients"
        },
        finalCta: {
          title: "Le Choix Intelligent est Clair",
          message: "Rejoignez des milliers de clients satisfaits qui choisissent Rolls-Royce pour l'expérience de location de luxe ultime à Dubaï.",
          bookNow: "Réservez Votre Rolls-Royce",
          viewFleet: "Voir Notre Flotte",
          urgency: "⏰ Disponibilité limitée - Réservez maintenant pour sécuriser vos dates"
        },
        contact: {
          title: "Prêt à Vivre le Vrai Luxe?",
          subtitle: "Notre équipe est disponible 24/7 pour vous aider"
        }
      }
    }
  },
  zh: {
    compare: {
      "rolls-royce-vs-ferrari": {
        title: "迪拜劳斯莱斯vs法拉利租赁 | 智能豪华选择",
        description: "比较迪拜劳斯莱斯vs法拉利租赁。了解为什么劳斯莱斯在豪华汽车租赁方面提供卓越的价值、舒适性和声望。全包价格、专业司机服务和无与伦比的豪华体验。"
      },
      ferrari: {
        hero: {
          title: "迪拜劳斯莱斯vs法拉利租赁",
          subtitle: "了解为什么劳斯莱斯是迪拜豪华汽车租赁的智能选择",
          bookRollsRoyce: "立即预订劳斯莱斯",
          seeComparison: "查看完整比较"
        },
        aspects: {
          rental: { name: "租赁体验" },
          comfort: { name: "舒适与豪华" },
          occasion: { name: "完美场合" },
          service: { name: "服务与支持" },
          value: { name: "价值主张" },
          experience: { name: "迪拜体验" }
        },
        winner: {
          title: "为什么明智的客户选择劳斯莱斯",
          subtitle: "数字不言自明 - 劳斯莱斯提供卓越的价值、舒适性和声望"
        },
        detailed: {
          comparison: "比较"
        },
        packages: {
          title: "租赁套餐 - 真实成本",
          summary: "使用劳斯莱斯全包租赁节省高达40%",
          cta: "明智预订 - 选择劳斯莱斯"
        },
        testimonials: {
          title: "客户评价"
        },
        finalCta: {
          title: "明智的选择很明显",
          message: "加入成千上万满意的客户，选择劳斯莱斯，在迪拜获得终极豪华租赁体验。",
          bookNow: "预订您的劳斯莱斯",
          viewFleet: "查看我们的车队",
          urgency: "⏰ 名额有限 - 立即预订以确保您的日期"
        },
        contact: {
          title: "准备体验真正的豪华？",
          subtitle: "我们的团队24/7为您服务"
        }
      }
    }
  },
  ru: {
    compare: {
      "rolls-royce-vs-ferrari": {
        title: "Аренда Rolls-Royce против Ferrari в Дубае | Умный выбор роскоши",
        description: "Сравните аренду Rolls-Royce и Ferrari в Дубае. Узнайте, почему Rolls-Royce предлагает превосходную ценность, комфорт и престиж для аренды роскошных автомобилей. Цены «все включено», профессиональная служба шофера и непревзойденный опыт роскоши."
      },
      ferrari: {
        hero: {
          title: "Аренда Rolls-Royce против Ferrari в Дубае",
          subtitle: "Узнайте, почему Rolls-Royce - это разумный выбор для аренды роскошных автомобилей в Дубае",
          bookRollsRoyce: "Забронировать Rolls-Royce сейчас",
          seeComparison: "Посмотреть полное сравнение"
        },
        aspects: {
          rental: { name: "Опыт аренды" },
          comfort: { name: "Комфорт и роскошь" },
          occasion: { name: "Идеальные случаи" },
          service: { name: "Сервис и поддержка" },
          value: { name: "Ценностное предложение" },
          experience: { name: "Опыт Дубая" }
        },
        winner: {
          title: "Почему умные клиенты выбирают Rolls-Royce",
          subtitle: "Цифры говорят сами за себя - Rolls-Royce обеспечивает превосходную ценность, комфорт и престиж"
        },
        detailed: {
          comparison: "Сравнение"
        },
        packages: {
          title: "Пакеты аренды - Реальная стоимость",
          summary: "Сэкономьте до 40% с арендой Rolls-Royce «все включено»",
          cta: "Бронируйте с умом - Выбирайте Rolls-Royce"
        },
        testimonials: {
          title: "Что говорят наши клиенты"
        },
        finalCta: {
          title: "Умный выбор очевиден",
          message: "Присоединяйтесь к тысячам довольных клиентов, которые выбирают Rolls-Royce для получения максимального опыта аренды роскошных автомобилей в Дубае.",
          bookNow: "Забронируйте свой Rolls-Royce",
          viewFleet: "Посмотреть наш автопарк",
          urgency: "⏰ Ограниченная доступность - Бронируйте сейчас, чтобы обеспечить свои даты"
        },
        contact: {
          title: "Готовы испытать настоящую роскошь?",
          subtitle: "Наша команда доступна 24/7, чтобы помочь вам"
        }
      }
    }
  },
  hi: {
    compare: {
      "rolls-royce-vs-ferrari": {
        title: "दुबई में रोल्स-रॉयस बनाम फेरारी किराया | स्मार्ट लक्जरी विकल्प",
        description: "दुबई में रोल्स-रॉयस बनाम फेरारी किराये की तुलना करें। जानें कि रोल्स-रॉयस लक्जरी कार किराये के लिए बेहतर मूल्य, आराम और प्रतिष्ठा क्यों प्रदान करती है। सर्व-समावेशी दरें, पेशेवर चालक सेवा और बेजोड़ लक्जरी अनुभव।"
      },
      ferrari: {
        hero: {
          title: "दुबई में रोल्स-रॉयस बनाम फेरारी किराया",
          subtitle: "जानें कि दुबई में लक्जरी कार किराये के लिए रोल्स-रॉयस बुद्धिमान विकल्प क्यों है",
          bookRollsRoyce: "अभी रोल्स-रॉयस बुक करें",
          seeComparison: "पूर्ण तुलना देखें"
        },
        aspects: {
          rental: { name: "किराये का अनुभव" },
          comfort: { name: "आराम और विलासिता" },
          occasion: { name: "सही अवसर" },
          service: { name: "सेवा और समर्थन" },
          value: { name: "मूल्य प्रस्ताव" },
          experience: { name: "दुबई अनुभव" }
        },
        winner: {
          title: "स्मार्ट ग्राहक रोल्स-रॉयस क्यों चुनते हैं",
          subtitle: "संख्याएं अपने आप बोलती हैं - रोल्स-रॉयस बेहतर मूल्य, आराम और प्रतिष्ठा प्रदान करती है"
        },
        detailed: {
          comparison: "तुलना"
        },
        packages: {
          title: "किराये के पैकेज - वास्तविक लागत",
          summary: "रोल्स-रॉयस ऑल-इनक्लूसिव किराये के साथ 40% तक बचाएं",
          cta: "स्मार्ट बुक करें - रोल्स-रॉयस चुनें"
        },
        testimonials: {
          title: "हमारे ग्राहक क्या कहते हैं"
        },
        finalCta: {
          title: "स्मार्ट विकल्प स्पष्ट है",
          message: "हजारों संतुष्ट ग्राहकों में शामिल हों जो दुबई में अंतिम लक्जरी किराये के अनुभव के लिए रोल्स-रॉयस चुनते हैं।",
          bookNow: "अपनी रोल्स-रॉयस आरक्षित करें",
          viewFleet: "हमारा बेड़ा देखें",
          urgency: "⏰ सीमित उपलब्धता - अपनी तारीखें सुरक्षित करने के लिए अभी बुक करें"
        },
        contact: {
          title: "वास्तविक विलासिता का अनुभव करने के लिए तैयार हैं?",
          subtitle: "हमारी टीम आपकी सहायता के लिए 24/7 उपलब्ध है"
        }
      }
    }
  }
};

// Function to update translation files
function updateTranslations() {
  Object.keys(translations).forEach(locale => {
    const filePath = path.join(__dirname, '..', 'public', 'locales', locale, 'common.json');
    const seoFilePath = path.join(__dirname, '..', 'public', 'locales', locale, 'seo.json');
    
    try {
      // Update common.json
      let commonData = {};
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        commonData = JSON.parse(fileContent);
      }
      
      // Merge translations
      if (!commonData.compare) {
        commonData.compare = {};
      }
      
      commonData.compare = {
        ...commonData.compare,
        ...translations[locale].compare
      };
      
      // Write back
      fs.writeFileSync(filePath, JSON.stringify(commonData, null, 2), 'utf8');
      console.log(`✅ Updated ${locale}/common.json`);
      
      // Update seo.json
      let seoData = {};
      if (fs.existsSync(seoFilePath)) {
        const seoContent = fs.readFileSync(seoFilePath, 'utf8');
        seoData = JSON.parse(seoContent);
      }
      
      // Add SEO data for the comparison page
      if (!seoData.compare) {
        seoData.compare = {};
      }
      
      if (translations[locale].compare['rolls-royce-vs-ferrari']) {
        seoData.compare['rolls-royce-vs-ferrari'] = translations[locale].compare['rolls-royce-vs-ferrari'];
      }
      
      fs.writeFileSync(seoFilePath, JSON.stringify(seoData, null, 2), 'utf8');
      console.log(`✅ Updated ${locale}/seo.json`);
      
    } catch (error) {
      console.error(`❌ Error updating ${locale} translations:`, error);
    }
  });
}

// Run the update
updateTranslations();
console.log('\n✅ All Ferrari comparison translations have been added successfully!');
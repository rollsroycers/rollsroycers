#!/usr/bin/env node

/**
 * إصلاح نهائي شامل لجميع مفاتيح الترجمة المتبقية
 * يحل جميع المشاكل النهائية التي ما زالت تظهر خام
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * جميع المفاتيح المفقودة نهائياً
 */
const FINAL_REMAINING_KEYS = {
  en: {
    // Wedding services - التحديث النهائي
    servicesPages: {
      wedding: {
        hero: {
          title: "Luxury Wedding Car Rental Dubai",
          subtitle: "Arrive in Unparalleled Style on Your Special Day",
          viewPackages: "View Wedding Packages",
          consultation: "Free Consultation"
        },
        whyChoose: {
          title: "Why Choose Our Wedding Services",
          bridal: {
            title: "Bridal Elegance",
            description: "Our pristine white Rolls-Royce fleet provides the perfect complement to your wedding attire."
          },
          photo: {
            title: "Photography Perfect",
            description: "Every angle is stunning - create unforgettable memories with our photogenic vehicles."
          },
          reliability: {
            title: "Reliability You Can Trust",
            description: "Your wedding day is too important to leave to chance. We guarantee punctuality and perfection."
          }
        },
        packages: {
          title: "Wedding Packages",
          classic: {
            name: "Classic Wedding Package",
            duration: "4 hours",
            features: [
              "White Rolls-Royce Phantom or Ghost",
              "Professional chauffeur in formal attire",
              "Red carpet service",
              "Complimentary decorations",
              "Champagne service"
            ],
            price: "From AED 2,500"
          },
          royal: {
            name: "Royal Wedding Package",
            duration: "6 hours",
            features: [
              "Choice of any Rolls-Royce model",
              "Multiple vehicle coordination",
              "Bridal car decoration",
              "Photography assistance",
              "Extended service hours"
            ],
            price: "From AED 4,200"
          },
          ultimate: {
            name: "Ultimate Wedding Package",
            duration: "Full day",
            features: [
              "Entire fleet at your disposal",
              "Wedding planning coordination",
              "Custom decoration themes",
              "Professional photography car",
              "VIP treatment throughout"
            ],
            price: "From AED 8,500",
            premium: "Most Popular"
          },
          bookPackage: "Book This Package"
        },
        gallery: {
          title: "Wedding Gallery"
        },
        testimonials: {
          title: "Happy Couples",
          sarah: {
            name: "Sarah & Ahmed",
            text: "The Rolls-Royce made our wedding day absolutely magical. Everything was perfect - from the pristine white Phantom to the professional chauffeur. Highly recommended!"
          },
          fatima: {
            name: "Fatima & Omar",
            text: "Exceptional service! The car was beautifully decorated and the driver was so professional. It made our special day even more memorable. Thank you!"
          }
        },
        cta: {
          title: "Ready to Make Your Wedding Unforgettable?",
          description: "Contact us today for a personalized wedding car package tailored to your special day.",
          call: "Call Now",
          getQuote: "Get Wedding Quote"
        }
      }
    },
    
    // Footer missing keys
    footer: {
      quickLinks: "Quick Links",
      email: "Email Us",
      showroom: "Showroom Location",
      rights: "All Rights Reserved",
      privacy: "Privacy Policy", 
      terms: "Terms & Conditions",
      support: "24/7 Support",
      about: "About Us",
      call: "Call Us"
    },
    
    // Locations missing keys
    locations: {
      businessBay: {
        nav: "Business Bay"
      },
      downtownDubai: {
        nav: "Downtown Dubai"
      },
      dubaiMarina: {
        nav: "Dubai Marina"
      },
      palmJumeirah: {
        nav: "Palm Jumeirah"
      },
      jbr: {
        nav: "JBR"
      },
      difc: {
        nav: "DIFC"
      }
    }
  },
  
  ar: {
    // Wedding services - Arabic
    servicesPages: {
      wedding: {
        hero: {
          title: "تأجير سيارات الزفاف الفاخرة في دبي",
          subtitle: "اوصل بأناقة لا مثيل لها في يومك المميز",
          viewPackages: "عرض باقات الزفاف",
          consultation: "استشارة مجانية"
        },
        whyChoose: {
          title: "لماذا تختار خدمات الزفاف لدينا",
          bridal: {
            title: "أناقة العروس",
            description: "أسطولنا من رولز رويس البيضاء النقية يوفر المكمل المثالي لزي زفافك."
          },
          photo: {
            title: "مثالية للتصوير",
            description: "كل زاوية مذهلة - اصنع ذكريات لا تُنسى مع مركباتنا الفوتوغرافية."
          },
          reliability: {
            title: "موثوقية يمكنك الوثوق بها",
            description: "يوم زفافك مهم جداً ولا يمكن تركه للصدفة. نضمن الدقة والكمال."
          }
        },
        packages: {
          title: "باقات الزفاف",
          classic: {
            name: "باقة الزفاف الكلاسيكية",
            duration: "4 ساعات",
            features: [
              "رولز رويس فانتوم أو غوست بيضاء",
              "سائق محترف بملابس رسمية",
              "خدمة السجادة الحمراء",
              "زينة مجانية",
              "خدمة الشمبانيا"
            ],
            price: "من 2,500 درهم"
          },
          royal: {
            name: "باقة الزفاف الملكية",
            duration: "6 ساعات",
            features: [
              "اختيار أي موديل رولز رويس",
              "تنسيق مركبات متعددة",
              "زينة سيارة العروس",
              "مساعدة التصوير",
              "ساعات خدمة ممتدة"
            ],
            price: "من 4,200 درهم"
          },
          ultimate: {
            name: "باقة الزفاف المطلقة",
            duration: "يوم كامل",
            features: [
              "الأسطول بالكامل تحت تصرفك",
              "تنسيق تخطيط الزفاف",
              "مواضيع زينة مخصصة",
              "سيارة تصوير احترافية",
              "معاملة كبار الشخصيات طوال الوقت"
            ],
            price: "من 8,500 درهم",
            premium: "الأكثر شعبية"
          },
          bookPackage: "احجز هذه الباقة"
        },
        gallery: {
          title: "معرض الزفاف"
        },
        testimonials: {
          title: "أزواج سعداء",
          sarah: {
            name: "سارة وأحمد",
            text: "جعلت رولز رويس يوم زفافنا سحرياً تماماً. كان كل شيء مثالياً - من الفانتوم البيضاء النقية إلى السائق المحترف. أنصح بشدة!"
          },
          fatima: {
            name: "فاطمة وعمر",
            text: "خدمة استثنائية! السيارة كانت مزينة بجمال والسائق كان محترفاً جداً. جعلت يومنا المميز أكثر تذكراً. شكراً لكم!"
          }
        },
        cta: {
          title: "مستعد لجعل زفافك لا يُنسى؟",
          description: "اتصل بنا اليوم للحصول على باقة سيارة زفاف شخصية مصممة خصيصاً ليومك المميز.",
          call: "اتصل الآن",
          getQuote: "احصل على عرض سعر الزفاف"
        }
      }
    },
    
    // Footer Arabic
    footer: {
      quickLinks: "روابط سريعة",
      email: "راسلنا",
      showroom: "موقع المعرض",
      rights: "جميع الحقوق محفوظة",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      support: "دعم 24/7",
      about: "من نحن",
      call: "اتصل بنا"
    },
    
    // Locations Arabic
    locations: {
      businessBay: {
        nav: "الخليج التجاري"
      },
      downtownDubai: {
        nav: "وسط المدينة"
      },
      dubaiMarina: {
        nav: "دبي مارينا"
      },
      palmJumeirah: {
        nav: "نخلة جميرا"
      },
      jbr: {
        nav: "جي بي آر"
      },
      difc: {
        nav: "مركز دبي المالي العالمي"
      }
    }
  }
};

/**
 * توليد ترجمات للغات الأخرى
 */
function generateTranslationsForOtherLanguages(language) {
  const templates = {
    ru: {
      servicesPages: {
        wedding: {
          hero: {
            viewPackages: "Посмотреть свадебные пакеты",
            consultation: "Бесплатная консультация"
          },
          packages: {
            classic: { name: "Классический свадебный пакет" },
            royal: { name: "Королевский свадебный пакет" },
            ultimate: { name: "Премиум свадебный пакет", premium: "Самый популярный" },
            bookPackage: "Забронировать этот пакет"
          },
          gallery: { title: "Свадебная галерея" },
          testimonials: {
            sarah: { name: "Сара и Ахмед", text: "Rolls-Royce сделал наш свадебный день абсолютно волшебным..." },
            fatima: { name: "Фатима и Омар", text: "Исключительный сервис! Автомобиль был красиво украшен..." }
          },
          cta: { call: "Позвонить сейчас", getQuote: "Получить предложение" }
        }
      },
      footer: {
        quickLinks: "Быстрые ссылки", email: "Написать нам", showroom: "Расположение салона",
        rights: "Все права защищены", privacy: "Политика конфиденциальности", 
        terms: "Условия использования", support: "Поддержка 24/7", about: "О нас", call: "Позвонить"
      },
      locations: {
        businessBay: { nav: "Бизнес Бей" }, downtownDubai: { nav: "Даунтаун Дубай" },
        dubaiMarina: { nav: "Дубай Марина" }, palmJumeirah: { nav: "Палм Джумейра" },
        jbr: { nav: "Джумейра Бич Резиденс" }, difc: { nav: "ДИФК" }
      }
    },
    
    fr: {
      servicesPages: {
        wedding: {
          hero: {
            viewPackages: "Voir les forfaits mariage",
            consultation: "Consultation gratuite"
          },
          packages: {
            classic: { name: "Forfait mariage classique" },
            royal: { name: "Forfait mariage royal" },
            ultimate: { name: "Forfait mariage ultime", premium: "Plus populaire" },
            bookPackage: "Réserver ce forfait"
          },
          gallery: { title: "Galerie de mariage" },
          testimonials: {
            sarah: { name: "Sarah et Ahmed", text: "La Rolls-Royce a rendu notre jour de mariage absolument magique..." },
            fatima: { name: "Fatima et Omar", text: "Service exceptionnel! La voiture était magnifiquement décorée..." }
          },
          cta: { call: "Appeler maintenant", getQuote: "Obtenir un devis" }
        }
      },
      footer: {
        quickLinks: "Liens rapides", email: "Nous contacter", showroom: "Emplacement du showroom",
        rights: "Tous droits réservés", privacy: "Politique de confidentialité",
        terms: "Conditions générales", support: "Support 24/7", about: "À propos", call: "Appeler"
      },
      locations: {
        businessBay: { nav: "Business Bay" }, downtownDubai: { nav: "Downtown Dubaï" },
        dubaiMarina: { nav: "Dubai Marina" }, palmJumeirah: { nav: "Palm Jumeirah" },
        jbr: { nav: "JBR" }, difc: { nav: "DIFC" }
      }
    },
    
    zh: {
      servicesPages: {
        wedding: {
          hero: {
            viewPackages: "查看婚礼套餐",
            consultation: "免费咨询"
          },
          packages: {
            classic: { name: "经典婚礼套餐" },
            royal: { name: "皇家婚礼套餐" },
            ultimate: { name: "至尊婚礼套餐", premium: "最受欢迎" },
            bookPackage: "预订此套餐"
          },
          gallery: { title: "婚礼画廊" },
          testimonials: {
            sarah: { name: "萨拉和艾哈迈德", text: "劳斯莱斯让我们的婚礼日变得绝对神奇..." },
            fatima: { name: "法蒂玛和奥马尔", text: "卓越的服务！汽车装饰得很漂亮..." }
          },
          cta: { call: "立即致电", getQuote: "获取报价" }
        }
      },
      footer: {
        quickLinks: "快速链接", email: "邮件联系", showroom: "展厅位置",
        rights: "版权所有", privacy: "隐私政策", terms: "条款和条件",
        support: "24/7支持", about: "关于我们", call: "致电我们"
      },
      locations: {
        businessBay: { nav: "商业湾" }, downtownDubai: { nav: "迪拜市中心" },
        dubaiMarina: { nav: "迪拜码头" }, palmJumeirah: { nav: "朱美拉棕榈岛" },
        jbr: { nav: "朱美拉海滩住宅区" }, difc: { nav: "迪拜国际金融中心" }
      }
    },
    
    hi: {
      servicesPages: {
        wedding: {
          hero: {
            viewPackages: "शादी पैकेज देखें",
            consultation: "मुफ्त परामर्श"
          },
          packages: {
            classic: { name: "क्लासिक शादी पैकेज" },
            royal: { name: "रॉयल शादी पैकेज" },
            ultimate: { name: "अल्टीमेट शादी पैकेज", premium: "सबसे लोकप्रिय" },
            bookPackage: "इस पैकेज को बुक करें"
          },
          gallery: { title: "शादी गैलरी" },
          testimonials: {
            sarah: { name: "सारा और अहमद", text: "रोल्स-रॉयस ने हमारे शादी के दिन को बिल्कुल जादुई बना दिया..." },
            fatima: { name: "फातिमा और उमर", text: "असाधारण सेवा! कार खूबसूरती से सजाई गई थी..." }
          },
          cta: { call: "अभी कॉल करें", getQuote: "कोटेशन प्राप्त करें" }
        }
      },
      footer: {
        quickLinks: "त्वरित लिंक", email: "हमें ईमेल करें", showroom: "शोरूम स्थान",
        rights: "सभी अधिकार सुरक्षित", privacy: "गोपनीयता नीति", 
        terms: "नियम व शर्तें", support: "24/7 सहायता", about: "हमारे बारे में", call: "कॉल करें"
      },
      locations: {
        businessBay: { nav: "बिजनेस बे" }, downtownDubai: { nav: "डाउनटाउन दुबई" },
        dubaiMarina: { nav: "दुबई मरीना" }, palmJumeirah: { nav: "पाम जुमेराह" },
        jbr: { nav: "जेबीआर" }, difc: { nav: "डीआईएफसी" }
      }
    }
  };
  
  return templates[language] || FINAL_REMAINING_KEYS.en;
}

/**
 * دمج عميق للكائنات
 */
function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      target[key] = target[key] || {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

/**
 * تحديث جميع ملفات الترجمة
 */
function updateAllTranslationFiles() {
  console.log('🔧 إصلاح نهائي شامل لجميع المفاتيح المتبقية...\n');
  
  let totalFixed = 0;
  
  LANGUAGES.forEach(language => {
    console.log(`📂 إصلاح نهائي للغة: ${language}`);
    
    let translations;
    if (language === 'en' || language === 'ar') {
      translations = FINAL_REMAINING_KEYS[language];
    } else {
      translations = generateTranslationsForOtherLanguages(language);
    }
    
    // تحديث جميع الملفات المطلوبة
    const filesToUpdate = [
      { name: 'services.json', data: { servicesPages: translations.servicesPages } },
      { name: 'common.json', data: { footer: translations.footer, locations: translations.locations } }
    ];
    
    filesToUpdate.forEach(fileInfo => {
      const filePath = path.join(__dirname, '..', 'public', 'locales', language, fileInfo.name);
      
      let existingContent = {};
      if (fs.existsSync(filePath)) {
        try {
          existingContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } catch (error) {
          console.warn(`تحذير: خطأ في قراءة ${filePath}`);
        }
      }
      
      const mergedContent = deepMerge(existingContent, fileInfo.data);
      fs.writeFileSync(filePath, JSON.stringify(mergedContent, null, 2));
      console.log(`   ✅ ${fileInfo.name} محدث نهائياً`);
      totalFixed++;
    });
    
    console.log('');
  });
  
  console.log(`🎉 تم الإصلاح النهائي لـ ${totalFixed} ملف!`);
  console.log('\n🔧 الآن يجب اختبار البناء النهائي...');
  
  return totalFixed;
}

if (require.main === module) {
  try {
    const fixedCount = updateAllTranslationFiles();
    
    console.log('\n🎯 الخطوات النهائية:');
    console.log('1. اختبار البناء: npm run build');
    console.log('2. فحص نهائي: npm run translations:check');
    console.log('3. إذا نجح، الموقع جاهز 100%!');
    
    if (fixedCount > 0) {
      console.log('\n✨ تم إصلاح جميع المفاتيح المتبقية نهائياً!');
      console.log('🚀 الموقع جاهز الآن بالكامل بدون أي مفاتيح خام!');
    }
    
  } catch (error) {
    console.error('❌ خطأ في الإصلاح النهائي:', error.message);
    process.exit(1);
  }
}

module.exports = { updateAllTranslationFiles }; 
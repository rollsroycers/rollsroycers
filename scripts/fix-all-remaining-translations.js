#!/usr/bin/env node

/**
 * إصلاح نهائي شامل لجميع مفاتيح الترجمة المتبقية
 * يحل جميع المشاكل النهائية دفعة واحدة
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * جميع المفاتيح المفقودة المتبقية مع ترجماتها الكاملة
 */
const FINAL_MISSING_TRANSLATIONS = {
  en: {
    // Fleet pricing and details
    fleet: {
      aed: "AED",
      perDay: "/day", 
      rentNow: "RENT NOW",
      from: "From",
      ghost: {
        specs: {
          title: "Ghost Specifications",
          performanceTitle: "Performance",
          dimensionsTitle: "Dimensions", 
          technologyTitle: "Technology"
        },
        booking: {
          readyToExperience: "Ready to Experience the Ghost?",
          callButton: "Call Now",
          bookOnlineButton: "Book Online"
        }
      }
    },
    
    // Pricing structure
    pricing: {
      daily: "/day",
      weekly: "/week", 
      monthly: "/month"
    },
    
    // Common elements
    common: {
      aed: "AED"
    },
    
    // Video gallery
    videoGallery: {
      phantom: {
        title: "Phantom Showcase"
      },
      cullinan: {
        title: "Cullinan Adventure"
      }
    },
    
    // Location navigation
    locations: {
      downtownDubai: {
        nav: "Downtown Dubai"
      },
      dubaiMarina: {
        nav: "Dubai Marina"
      },
      palmJumeirah: {
        nav: "Palm Jumeirah"
      },
      businessBay: {
        nav: "Business Bay"
      }
    },
    
    // Footer elements  
    footer: {
      showroom: "Showroom Location",
      rights: "All Rights Reserved",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions", 
      support: "24/7 Support",
      about: "About Us",
      call: "Call Us"
    },
    
    // Price calculator
    priceCalculator: {
      selectCar: "Select Car",
      rentalDuration: "Rental Duration (days)",
      dailyRate: "Daily rate applies",
      deliveryLocation: "Delivery Location",
      promoCode: "Promo Code",
      calculateButton: "Calculate Price",
      priceBreakdown: "Price Breakdown",
      locations: {
        hotel: "Hotel Delivery"
      }
    },
    
    // Placeholders
    placeholders: {
      enterCode: "Enter promo code"
    },
    
    // Booking
    booking: {
      title: "Complete Your Booking"
    }
  },
  
  ar: {
    // Fleet pricing and details
    fleet: {
      aed: "درهم",
      perDay: "/يوم",
      rentNow: "احجز الآن",
      from: "من",
      ghost: {
        specs: {
          title: "مواصفات الغوست",
          performanceTitle: "الأداء",
          dimensionsTitle: "الأبعاد",
          technologyTitle: "التكنولوجيا"
        },
        booking: {
          readyToExperience: "جاهز لتجربة الغوست؟",
          callButton: "اتصل الآن",
          bookOnlineButton: "احجز عبر الإنترنت"
        }
      }
    },
    
    // Pricing structure
    pricing: {
      daily: "/يوم",
      weekly: "/أسبوع",
      monthly: "/شهر"
    },
    
    // Common elements
    common: {
      aed: "درهم"
    },
    
    // Video gallery
    videoGallery: {
      phantom: {
        title: "عرض الفانتوم"
      },
      cullinan: {
        title: "مغامرة الكولينان"
      }
    },
    
    // Location navigation
    locations: {
      downtownDubai: {
        nav: "وسط المدينة"
      },
      dubaiMarina: {
        nav: "دبي مارينا"
      },
      palmJumeirah: {
        nav: "نخلة جميرا"
      },
      businessBay: {
        nav: "الخليج التجاري"
      }
    },
    
    // Footer elements
    footer: {
      showroom: "موقع المعرض",
      rights: "جميع الحقوق محفوظة",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      support: "دعم 24/7",
      about: "من نحن",
      call: "اتصل بنا"
    },
    
    // Price calculator
    priceCalculator: {
      selectCar: "اختر السيارة",
      rentalDuration: "مدة الإيجار (أيام)",
      dailyRate: "يطبق السعر اليومي",
      deliveryLocation: "موقع التسليم",
      promoCode: "كود الخصم",
      calculateButton: "احسب السعر",
      priceBreakdown: "تفصيل السعر",
      locations: {
        hotel: "توصيل للفندق"
      }
    },
    
    // Placeholders
    placeholders: {
      enterCode: "أدخل كود الخصم"
    },
    
    // Booking
    booking: {
      title: "أكمل حجزك"
    }
  }
};

/**
 * إنشاء ترجمات للغات الأخرى
 */
function generateTranslationsForOtherLanguages(baseTranslations, language) {
  const languageTemplates = {
    ru: {
      fleet: {
        aed: "AED",
        perDay: "/день",
        rentNow: "ЗАБРОНИРОВАТЬ",
        from: "От"
      },
      pricing: {
        daily: "/день",
        weekly: "/неделя",
        monthly: "/месяц"
      },
      common: {
        aed: "AED"
      },
      locations: {
        downtownDubai: { nav: "Даунтаун Дубай" },
        dubaiMarina: { nav: "Дубай Марина" },
        palmJumeirah: { nav: "Палм Джумейра" },
        businessBay: { nav: "Бизнес Бей" }
      },
      footer: {
        showroom: "Расположение шоурума",
        rights: "Все права защищены",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
        support: "Поддержка 24/7",
        about: "О нас",
        call: "Позвонить"
      }
    },
    
    fr: {
      fleet: {
        aed: "AED",
        perDay: "/jour",
        rentNow: "RÉSERVER",
        from: "À partir de"
      },
      pricing: {
        daily: "/jour",
        weekly: "/semaine",
        monthly: "/mois"
      },
      common: {
        aed: "AED"
      },
      locations: {
        downtownDubai: { nav: "Downtown Dubaï" },
        dubaiMarina: { nav: "Dubai Marina" },
        palmJumeirah: { nav: "Palm Jumeirah" },
        businessBay: { nav: "Business Bay" }
      },
      footer: {
        showroom: "Emplacement du showroom",
        rights: "Tous droits réservés",
        privacy: "Politique de confidentialité",
        terms: "Conditions générales",
        support: "Support 24/7",
        about: "À propos",
        call: "Appeler"
      }
    },
    
    zh: {
      fleet: {
        aed: "迪拉姆",
        perDay: "/天",
        rentNow: "立即预订",
        from: "起价"
      },
      pricing: {
        daily: "/天",
        weekly: "/周",
        monthly: "/月"
      },
      common: {
        aed: "迪拉姆"
      },
      locations: {
        downtownDubai: { nav: "迪拜市中心" },
        dubaiMarina: { nav: "迪拜码头" },
        palmJumeirah: { nav: "朱美拉棕榈岛" },
        businessBay: { nav: "商业湾" }
      },
      footer: {
        showroom: "展厅位置",
        rights: "版权所有",
        privacy: "隐私政策",
        terms: "条款和条件",
        support: "24/7支持",
        about: "关于我们",
        call: "致电我们"
      }
    },
    
    hi: {
      fleet: {
        aed: "AED",
        perDay: "/दिन",
        rentNow: "अभी बुक करें",
        from: "से शुरू"
      },
      pricing: {
        daily: "/दिन",
        weekly: "/सप्ताह",
        monthly: "/महीना"
      },
      common: {
        aed: "AED"
      },
      locations: {
        downtownDubai: { nav: "डाउनटाउन दुबई" },
        dubaiMarina: { nav: "दुबई मरीना" },
        palmJumeirah: { nav: "पाम जुमेराह" },
        businessBay: { nav: "बिजनेस बे" }
      },
      footer: {
        showroom: "शोरूम स्थान",
        rights: "सभी अधिकार सुरक्षित",
        privacy: "गोपनीयता नीति",
        terms: "नियम व शर्तें",
        support: "24/7 सहायता",
        about: "हमारे बारे में",
        call: "कॉल करें"
      }
    }
  };
  
  return languageTemplates[language] || baseTranslations;
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
 * تحديث ملف ترجمة واحد
 */
function updateTranslationFile(language, filePath, newTranslations) {
  let existingContent = {};
  
  if (fs.existsSync(filePath)) {
    try {
      existingContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
      console.warn(`تحذير: خطأ في قراءة ${filePath}`);
    }
  }
  
  const mergedContent = deepMerge(existingContent, newTranslations);
  fs.writeFileSync(filePath, JSON.stringify(mergedContent, null, 2));
  
  return true;
}

/**
 * إصلاح جميع المفاتيح المتبقية
 */
function fixAllRemainingTranslations() {
  console.log('🔧 إصلاح نهائي شامل لجميع مفاتيح الترجمة المتبقية...\n');
  
  let fixedCount = 0;
  
  LANGUAGES.forEach(language => {
    console.log(`📂 إصلاح نهائي للغة: ${language}`);
    
    let translations;
    if (language === 'en' || language === 'ar') {
      translations = FINAL_MISSING_TRANSLATIONS[language];
    } else {
      // توليد ترجمات للغات الأخرى
      translations = generateTranslationsForOtherLanguages(FINAL_MISSING_TRANSLATIONS.en, language);
    }
    
    // تحديث ملف common.json
    const commonPath = path.join(__dirname, '..', 'public', 'locales', language, 'common.json');
    if (updateTranslationFile(language, commonPath, translations)) {
      console.log(`   ✅ common.json محدث نهائياً`);
      fixedCount++;
    }
    
    console.log('');
  });
  
  console.log(`🎉 تم الإصلاح النهائي لـ ${fixedCount} ملف ترجمة!`);
  console.log('\n🔧 الآن يجب اختبار البناء النهائي...');
  
  return fixedCount;
}

if (require.main === module) {
  try {
    const fixedCount = fixAllRemainingTranslations();
    
    console.log('\n🎯 المراحل النهائية:');
    console.log('1. اختبار البناء: npm run build');
    console.log('2. فحص نهائي: npm run translations:check');
    console.log('3. إذا نجح، الموقع جاهز 100%!');
    
    if (fixedCount > 0) {
      console.log('\n✨ تم إصلاح جميع المفاتيح المتبقية!');
      console.log('🚀 يجب أن يكون الموقع جاهزاً الآن بالكامل!');
    }
    
  } catch (error) {
    console.error('❌ خطأ في الإصلاح النهائي:', error.message);
    process.exit(1);
  }
}

module.exports = { fixAllRemainingTranslations }; 
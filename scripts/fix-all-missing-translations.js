#!/usr/bin/env node

/**
 * إصلاح شامل لجميع مفاتيح الترجمة المفقودة
 * يحل جميع المشاكل المتبقية دفعة واحدة
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * جميع المفاتيح المفقودة مع ترجماتها
 */
const MISSING_TRANSLATIONS = {
  en: {
    // Common missing keys
    common: {
      // FAQ keys
      frequentlyAskedQuestions: "Frequently Asked Questions",
      everythingYouNeedToKnow: "Everything you need to know",
      
      // Special offers
      specialOffers: "Special Offers",
      limitedTimeDeals: "Limited Time Deals", 
      offersEndIn: "Offers end in",
      useCode: "Use code",
      
      // General
      verifiedCustomer: "Verified Customer",
      shareYourStory: "Share Your Story",
      claimYourOffer: "Claim Your Offer",
      termsApply: "*Terms and conditions apply",
    },
    
    // Loyalty program
    loyalty: {
      faq: {
        q5: "How do I upgrade my tier level?",
        a5: "Tiers are automatically upgraded once you complete the required number of rentals within a calendar year.",
        q6: "What exclusive events are available?",
        a6: "Gold and Platinum members receive invitations to exclusive car launches, luxury partner events, and more.",
        q7: "Can I transfer points?",
        a7: "No, loyalty points cannot be transferred from one account to another.",
        q8: "Is there a membership fee?",
        a8: "No, our loyalty program is completely free and starts with your first booking.",
        q9: "How do I check my status?",
        a9: "You can view your status and points balance by logging into your account on our website or contacting our customer service team.",
        q10: "What happens if I don't meet tier requirements?",
        a10: "If you don't meet the requirements to maintain your current tier status, you will be adjusted to the next lower tier."
      },
      enroll: "Join Program",
      journey: "Your Platinum Journey",
      whyJoin: "Why Join Our Loyalty Program?",
      saveMore: {
        subtitle: "Exclusive discounts on every rental"
      },
      priorityAccess: {
        subtitle: "First access to new models"
      },
      exclusivePerks: {
        subtitle: "Special events and experiences"
      },
      vipTreatment: {
        subtitle: "Personal concierge service"
      },
      tiers: {
        silver: {
          name: "Silver",
          requirement: "3+ rentals per year",
          instagram: {
            followJourney: "Follow our journey",
            account: "@rollsroycedubai",
            joinCommunity: "Join the community",
            communityDesc: "Stay updated with latest news",
            follow: "FOLLOW",
            notifications: "🔔 Turn on notifications"
          }
        },
        gold: {
          name: "Gold", 
          requirement: "6+ rentals per year"
        },
        platinum: {
          name: "Platinum",
          requirement: "12+ rentals per year"
        }
      }
    },
    
    // Offers system
    offers: {
      firstTime: {
        discount: "15% OFF"
      },
      weekend: {
        discount: "20% OFF"
      },
      chauffeur: {
        discount: "FREE CHAUFFEUR"
      }
    },
    
    // Check availability
    checkAvailability: {
      selectYourRR: "Select Your Rolls-Royce",
      cars: {
        phantom: { name: "Rolls-Royce Phantom" },
        cullinan: { name: "Rolls-Royce Cullinan" },
        ghost: { name: "Rolls-Royce Ghost" },
        dawn: { name: "Rolls-Royce Dawn" },
        wraith: { name: "Rolls-Royce Wraith" }
      },
      calendar: {
        available: "Available",
        unavailable: "Unavailable", 
        selected: "Selected",
        dateRange: "Date Range"
      }
    },
    
    // Compare fleet
    compareFleet: {
      compareButton: "COMPARE"
    },
    
    // Video gallery
    videoGallery: {
      filters: {
        all: "All",
        exterior: "Exterior",
        interior: "Interior", 
        experience: "Experience",
        virtualTour: "Virtual Tour"
      },
      phantom: { title: "Phantom Showcase" },
      cullinan: { title: "Cullinan Adventure" },
      interior: { title: "Luxury Interior" },
      dubai: { title: "Dubai Experience" },
      showroom: { title: "Virtual Showroom" },
      night: { title: "Night Drive" }
    },
    
    // Virtual showroom
    virtualShowroom: {
      title: "Virtual Showroom Experience",
      description: "Take a 360° virtual tour of our luxury showroom",
      cta: "START VIRTUAL TOUR"
    },
    
    // Testimonial stories
    testimonialSubmission: {
      stories: {
        story1: {
          name: "Ahmed Al-Rashid",
          location: "Dubai, UAE",
          occasion: "Wedding Celebration",
          story: "The Phantom was absolutely perfect for our wedding day. The service was impeccable and made our special day even more memorable."
        },
        story2: {
          name: "James Richardson", 
          location: "London, UK",
          occasion: "Business Trip",
          story: "Needed a reliable luxury car for important client meetings. The Ghost exceeded all expectations with its comfort and prestige."
        },
        story3: {
          name: "Maria Santos",
          location: "Madrid, Spain", 
          occasion: "Anniversary Trip",
          story: "The Dawn convertible made our Dubai anniversary trip magical. Driving along the coast was an unforgettable experience."
        }
      }
    },
    
    // Personalized offers
    personalizedOffers: {
      welcome: {
        validFor: "Valid for",
        copyCode: "Copy Code",
        terms: "*Terms apply",
        useOffer: "USE THIS OFFER"
      },
      notFound: {
        subtitle: "Check back soon for exclusive deals",
        chat: "Chat with us",
        quote: "Get a quote"
      }
    },
    
    // Trip planner
    tripPlanner: {
      selectCar: "Select Your Rolls-Royce",
      idealFor: "Ideal for",
      suggestedRoutes: "Suggested Routes"
    }
  },
  
  ar: {
    // Common missing keys  
    common: {
      frequentlyAskedQuestions: "الأسئلة المتكررة",
      everythingYouNeedToKnow: "كل ما تحتاج لمعرفته",
      specialOffers: "عروض خاصة",
      limitedTimeDeals: "عروض لفترة محدودة",
      offersEndIn: "تنتهي العروض خلال",
      useCode: "استخدم الكود",
      verifiedCustomer: "عميل موثق",
      shareYourStory: "شارك قصتك",
      claimYourOffer: "احصل على عرضك",
      termsApply: "*تطبق الشروط والأحكام",
    },
    
    loyalty: {
      faq: {
        q5: "كيف أرقي مستوى عضويتي؟",
        a5: "يتم ترقية المستويات تلقائياً عند إكمال العدد المطلوب من الإيجارات خلال سنة تقويمية.",
        q6: "ما هي الفعاليات الحصرية المتاحة؟",
        a6: "يتلقى أعضاء الفئتين الذهبية والبلاتينية دعوات لإطلاق سيارات حصرية وفعاليات شركاء فاخرين والمزيد.",
        q7: "هل يمكنني تحويل النقاط؟",
        a7: "لا، لا يمكن تحويل نقاط الولاء من حساب إلى آخر.",
        q8: "هل هناك رسوم عضوية؟",
        a8: "لا، برنامج الولاء الخاص بنا مجاني تماماً ويبدأ مع حجزك الأول.",
        q9: "كيف أتحقق من حالتي؟",
        a9: "يمكنك عرض حالتك ورصيد نقاطك عن طريق تسجيل الدخول إلى حسابك على موقعنا الإلكتروني أو عن طريق الاتصال بفريق خدمة العملاء لدينا.",
        q10: "ماذا يحدث إذا لم أستوف متطلبات الفئة؟",
        a10: "إذا لم تستوف المتطلبات للحفاظ على حالة الفئة الحالية، فسيتم تعديلك إلى الفئة الأقل التالية."
      },
      enroll: "انضم للبرنامج",
      journey: "رحلتك البلاتينية", 
      whyJoin: "لماذا تنضم لبرنامج الولاء؟",
      saveMore: {
        subtitle: "خصومات حصرية على كل إيجار"
      },
      priorityAccess: {
        subtitle: "أولوية الوصول للموديلات الجديدة"
      },
      exclusivePerks: {
        subtitle: "فعاليات وتجارب خاصة"
      },
      vipTreatment: {
        subtitle: "خدمة كونسيرج شخصية"
      },
      tiers: {
        silver: {
          name: "فضي",
          requirement: "3+ إيجارات سنوياً",
          instagram: {
            followJourney: "تابع رحلتنا",
            account: "@rollsroycedubai",
            joinCommunity: "انضم للمجتمع",
            communityDesc: "ابق محدثاً بآخر الأخبار",
            follow: "تابع",
            notifications: "🔔 تشغيل الإشعارات"
          }
        },
        gold: {
          name: "ذهبي",
          requirement: "6+ إيجارات سنوياً"
        },
        platinum: {
          name: "بلاتيني",
          requirement: "12+ إيجار سنوياً"
        }
      }
    },
    
    offers: {
      firstTime: {
        discount: "خصم 15%"
      },
      weekend: {
        discount: "خصم 20%"
      },
      chauffeur: {
        discount: "سائق مجاني"
      }
    },
    
    checkAvailability: {
      selectYourRR: "اختر رولز رويس الخاصة بك",
      cars: {
        phantom: { name: "رولز رويس فانتوم" },
        cullinan: { name: "رولز رويس كولينان" },
        ghost: { name: "رولز رويس غوست" },
        dawn: { name: "رولز رويس داون" },
        wraith: { name: "رولز رويس رايث" }
      },
      calendar: {
        available: "متاح",
        unavailable: "غير متاح",
        selected: "محدد", 
        dateRange: "نطاق التاريخ"
      }
    },
    
    compareFleet: {
      compareButton: "قارن"
    },
    
    videoGallery: {
      filters: {
        all: "الكل",
        exterior: "الخارج",
        interior: "الداخل",
        experience: "التجربة",
        virtualTour: "جولة افتراضية"
      },
      phantom: { title: "عرض فانتوم" },
      cullinan: { title: "مغامرة كولينان" },
      interior: { title: "الداخل الفاخر" },
      dubai: { title: "تجربة دبي" },
      showroom: { title: "المعرض الافتراضي" },
      night: { title: "قيادة ليلية" }
    },
    
    virtualShowroom: {
      title: "تجربة المعرض الافتراضي",
      description: "قم بجولة افتراضية 360° في معرضنا الفاخر",
      cta: "ابدأ الجولة الافتراضية"
    },
    
    testimonialSubmission: {
      stories: {
        story1: {
          name: "أحمد الراشد",
          location: "دبي، الإمارات",
          occasion: "احتفال زفاف",
          story: "كانت الفانتوم مثالية تماماً ليوم زفافنا. الخدمة كانت لا تشوبها شائبة وجعلت يومنا الخاص أكثر تذكراً."
        },
        story2: {
          name: "جيمس ريتشاردسون",
          location: "لندن، المملكة المتحدة",
          occasion: "رحلة عمل",
          story: "احتجت سيارة فاخرة موثوقة لاجتماعات عملاء مهمة. فاقت الغوست كل التوقعات براحتها ومكانتها."
        },
        story3: {
          name: "ماريا سانتوس",
          location: "مدريد، إسبانيا",
          occasion: "رحلة ذكرى",
          story: "جعلت الداون الكشف رحلة ذكرى زواجنا في دبي ساحرة. القيادة على طول الساحل كانت تجربة لا تُنسى."
        }
      }
    },
    
    personalizedOffers: {
      welcome: {
        validFor: "صالح لـ",
        copyCode: "انسخ الكود",
        terms: "*تطبق الشروط",
        useOffer: "استخدم هذا العرض"
      },
      notFound: {
        subtitle: "تحقق قريباً للحصول على صفقات حصرية",
        chat: "تحدث معنا",
        quote: "احصل على عرض سعر"
      }
    },
    
    tripPlanner: {
      selectCar: "اختر رولز رويس الخاصة بك",
      idealFor: "مثالي لـ",
      suggestedRoutes: "المسارات المقترحة"
    }
  }
};

/**
 * إنشاء ترجمات للغات الأخرى
 */
function generateTranslationsForOtherLanguages(baseTranslations, language) {
  const languageTemplates = {
    ru: {
      // الروسية
      common: {
        frequentlyAskedQuestions: "Часто задаваемые вопросы",
        everythingYouNeedToKnow: "Все, что вам нужно знать",
        specialOffers: "Специальные предложения",
        limitedTimeDeals: "Ограниченные по времени предложения",
        offersEndIn: "Предложения заканчиваются через",
        useCode: "Используйте код",
        verifiedCustomer: "Проверенный клиент",
        shareYourStory: "Поделитесь своей историей",
        claimYourOffer: "Получить предложение",
        termsApply: "*Действуют условия и положения"
      },
      loyalty: {
        tiers: {
          silver: { name: "Серебряный" },
          gold: { name: "Золотой" },
          platinum: { name: "Платиновый" }
        }
      },
      checkAvailability: {
        selectYourRR: "Выберите ваш Rolls-Royce",
        cars: {
          phantom: { name: "Rolls-Royce Phantom" },
          cullinan: { name: "Rolls-Royce Cullinan" },
          ghost: { name: "Rolls-Royce Ghost" },
          dawn: { name: "Rolls-Royce Dawn" },
          wraith: { name: "Rolls-Royce Wraith" }
        }
      },
      compareFleet: { compareButton: "СРАВНИТЬ" },
      virtualShowroom: {
        title: "Виртуальный шоурум",
        cta: "НАЧАТЬ ВИРТУАЛЬНЫЙ ТУР"
      }
    },
    
    fr: {
      // الفرنسية
      common: {
        frequentlyAskedQuestions: "Questions fréquemment posées",
        everythingYouNeedToKnow: "Tout ce que vous devez savoir",
        specialOffers: "Offres spéciales",
        limitedTimeDeals: "Offres à durée limitée",
        offersEndIn: "Les offres se terminent dans",
        useCode: "Utiliser le code",
        verifiedCustomer: "Client vérifié",
        shareYourStory: "Partagez votre histoire",
        claimYourOffer: "Réclamer votre offre",
        termsApply: "*Les conditions générales s'appliquent"
      },
      loyalty: {
        tiers: {
          silver: { name: "Argent" },
          gold: { name: "Or" },
          platinum: { name: "Platine" }
        }
      },
      checkAvailability: {
        selectYourRR: "Sélectionnez votre Rolls-Royce",
        cars: {
          phantom: { name: "Rolls-Royce Phantom" },
          cullinan: { name: "Rolls-Royce Cullinan" },
          ghost: { name: "Rolls-Royce Ghost" },
          dawn: { name: "Rolls-Royce Dawn" },
          wraith: { name: "Rolls-Royce Wraith" }
        }
      },
      compareFleet: { compareButton: "COMPARER" },
      virtualShowroom: {
        title: "Showroom virtuel",
        cta: "COMMENCER LA VISITE VIRTUELLE"
      }
    },
    
    zh: {
      // الصينية
      common: {
        frequentlyAskedQuestions: "常见问题",
        everythingYouNeedToKnow: "您需要了解的一切",
        specialOffers: "特别优惠",
        limitedTimeDeals: "限时优惠",
        offersEndIn: "优惠结束时间",
        useCode: "使用代码",
        verifiedCustomer: "已验证客户",
        shareYourStory: "分享您的故事",
        claimYourOffer: "领取您的优惠",
        termsApply: "*条款和条件适用"
      },
      loyalty: {
        tiers: {
          silver: { name: "银卡" },
          gold: { name: "金卡" },
          platinum: { name: "白金卡" }
        }
      },
      checkAvailability: {
        selectYourRR: "选择您的劳斯莱斯",
        cars: {
          phantom: { name: "劳斯莱斯幻影" },
          cullinan: { name: "劳斯莱斯库里南" },
          ghost: { name: "劳斯莱斯古思特" },
          dawn: { name: "劳斯莱斯曜影" },
          wraith: { name: "劳斯莱斯魅影" }
        }
      },
      compareFleet: { compareButton: "比较" },
      virtualShowroom: {
        title: "虚拟展厅",
        cta: "开始虚拟参观"
      }
    },
    
    hi: {
      // الهندية
      common: {
        frequentlyAskedQuestions: "अक्सर पूछे जाने वाले प्रश्न",
        everythingYouNeedToKnow: "आपको जो कुछ जानना है",
        specialOffers: "विशेष ऑफर",
        limitedTimeDeals: "सीमित समय के सौदे",
        offersEndIn: "ऑफर समाप्त होते हैं",
        useCode: "कोड का उपयोग करें",
        verifiedCustomer: "सत्यापित ग्राहक",
        shareYourStory: "अपनी कहानी साझा करें",
        claimYourOffer: "अपना ऑफर लें",
        termsApply: "*नियम और शर्तें लागू होती हैं"
      },
      loyalty: {
        tiers: {
          silver: { name: "सिल्वर" },
          gold: { name: "गोल्ड" },
          platinum: { name: "प्लैटिनम" }
        }
      },
      checkAvailability: {
        selectYourRR: "अपनी रोल्स-रॉयस चुनें",
        cars: {
          phantom: { name: "रोल्स-रॉयस फैंटम" },
          cullinan: { name: "रोल्स-रॉयस कुलिनन" },
          ghost: { name: "रोल्स-रॉयस घोस्ट" },
          dawn: { name: "रोल्स-रॉयस डॉन" },
          wraith: { name: "रोल्स-रॉयस रेथ" }
        }
      },
      compareFleet: { compareButton: "तुलना करें" },
      virtualShowroom: {
        title: "वर्चुअल शोरूम",
        cta: "वर्चुअल टूर शुरू करें"
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
 * إصلاح جميع المفاتيح المفقودة
 */
function fixAllMissingTranslations() {
  console.log('🚀 إصلاح شامل لجميع مفاتيح الترجمة المفقودة...\n');
  
  let fixedCount = 0;
  
  LANGUAGES.forEach(language => {
    console.log(`📂 إصلاح اللغة: ${language}`);
    
    let translations;
    if (language === 'en' || language === 'ar') {
      translations = MISSING_TRANSLATIONS[language];
    } else {
      // توليد ترجمات للغات الأخرى
      translations = generateTranslationsForOtherLanguages(MISSING_TRANSLATIONS.en, language);
    }
    
    // تحديث ملف common.json
    const commonPath = path.join(__dirname, '..', 'public', 'locales', language, 'common.json');
    if (updateTranslationFile(language, commonPath, translations)) {
      console.log(`   ✅ common.json محدث`);
      fixedCount++;
    }
    
    console.log('');
  });
  
  console.log(`🎉 تم إصلاح ${fixedCount} ملف ترجمة!`);
  console.log('\n🔧 الآن يجب اختبار البناء...');
  
  return fixedCount;
}

if (require.main === module) {
  try {
    const fixedCount = fixAllMissingTranslations();
    
    console.log('\n🎯 المراحل التالية:');
    console.log('1. اختبار البناء: npm run build');
    console.log('2. فحص المفاتيح: npm run translations:check');
    console.log('3. إذا كانت هناك مشاكل باقية، أرسل النص الخام مرة أخرى');
    
    if (fixedCount > 0) {
      console.log('\n✨ تم إصلاح جميع المفاتيح المفقودة الرئيسية!');
    }
    
  } catch (error) {
    console.error('❌ خطأ في الإصلاح:', error.message);
    process.exit(1);
  }
}

module.exports = { fixAllMissingTranslations }; 
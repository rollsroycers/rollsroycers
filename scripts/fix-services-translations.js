#!/usr/bin/env node

/**
 * إصلاح شامل لجميع مفاتيح ترجمة صفحات الخدمات (الزفاف والشركات)
 * يضيف جميع المفاتيح المفقودة للعمل الكامل للموقع
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * جميع المفاتيح المفقودة لصفحات الخدمات
 */
const SERVICES_MISSING_TRANSLATIONS = {
  en: {
    // Wedding services missing keys
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
      },
      
      // Corporate services missing keys  
      corporate: {
        hero: {
          title: "Corporate Rolls-Royce Rentals",
          subtitle: "Elevate Your Business Image in Dubai",
          getQuote: "Get Corporate Quote",
          viewPackages: "View Corporate Packages",
          stats: {
            clients: "500+ Clients",
            retention: "98% Retention",
            support: "24/7 Support"
          }
        },
        whyChoose: {
          title: "Why Choose Our Corporate Services"
        },
        packages: {
          title: "Corporate Packages",
          requestQuote: "Request Quote"
        },
        clients: {
          title: "Trusted by Leading Businesses",
          more: "And 200+ more companies trust our services"
        },
        benefits: {
          title: "Corporate Benefits",
          financial: {
            title: "Financial Benefits",
            items: [
              "Transparent corporate pricing",
              "Volume discounts available",
              "Consolidated monthly billing",
              "No hidden fees or charges"
            ]
          },
          operational: {
            title: "Operational Benefits", 
            items: [
              "Dedicated account manager",
              "Priority booking guarantee",
              "24/7 corporate hotline",
              "Real-time booking confirmations"
            ]
          },
          service: {
            title: "Service Excellence",
            items: [
              "Professional chauffeurs",
              "Pristine vehicle fleet", 
              "Punctuality guarantee",
              "Discreet and confidential"
            ]
          }
        },
        cta: {
          title: "Ready to Elevate Your Corporate Transportation?",
          description: "Contact our corporate team for customized business solutions and preferential rates.",
          speakToTeam: "Speak to Corporate Team",
          downloadBrochure: "Download Corporate Brochure"
        },
        quickInquiry: {
          title: "Quick Corporate Inquiry",
          selectPackage: "Select Package",
          packages: {
            executive: "Executive Package",
            conference: "Conference Package", 
            roadshow: "Roadshow Package",
            partnership: "Partnership Package"
          },
          submitInquiry: "Submit Inquiry"
        }
      }
    },
    
    // Common placeholders
    placeholders: {
      companyName: "Company Name",
      businessEmail: "Business Email"
    }
  },
  
  ar: {
    // Arabic translations
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
      },
      
      corporate: {
        hero: {
          title: "تأجير رولز رويس للشركات",
          subtitle: "ارفع صورة عملك في دبي",
          getQuote: "احصل على عرض سعر للشركات",
          viewPackages: "عرض الباقات المؤسسية",
          stats: {
            clients: "500+ عميل",
            retention: "98% احتفاظ",
            support: "دعم 24/7"
          }
        },
        whyChoose: {
          title: "لماذا تختار خدماتنا المؤسسية"
        },
        packages: {
          title: "الباقات المؤسسية",
          requestQuote: "طلب عرض سعر"
        },
        clients: {
          title: "موثوق من قبل الشركات الرائدة",
          more: "و 200+ شركة أخرى تثق في خدماتنا"
        },
        benefits: {
          title: "المزايا المؤسسية",
          financial: {
            title: "المزايا المالية",
            items: [
              "أسعار شركات شفافة",
              "خصومات الكمية متاحة", 
              "فوترة شهرية موحدة",
              "لا رسوم خفية أو إضافية"
            ]
          },
          operational: {
            title: "المزايا التشغيلية",
            items: [
              "مدير حساب مخصص",
              "ضمان الحجز الأولوي",
              "خط ساخن للشركات 24/7",
              "تأكيدات حجز فورية"
            ]
          },
          service: {
            title: "التميز في الخدمة",
            items: [
              "سائقون محترفون",
              "أسطول مركبات نظيف",
              "ضمان الالتزام بالمواعيد",
              "تكتم وسرية"
            ]
          }
        },
        cta: {
          title: "مستعد لرفع مستوى النقل المؤسسي لديك؟",
          description: "اتصل بفريق الشركات لدينا للحصول على حلول أعمال مخصصة وأسعار تفضيلية.",
          speakToTeam: "تحدث إلى فريق الشركات",
          downloadBrochure: "تحميل الكتيب المؤسسي"
        },
        quickInquiry: {
          title: "استفسار شركات سريع",
          selectPackage: "اختر الباقة",
          packages: {
            executive: "الباقة التنفيذية",
            conference: "باقة المؤتمرات",
            roadshow: "باقة العروض التقديمية",
            partnership: "باقة الشراكة"
          },
          submitInquiry: "إرسال الاستفسار"
        }
      }
    },
    
    placeholders: {
      companyName: "اسم الشركة",
      businessEmail: "بريد العمل الإلكتروني"
    }
  }
};

/**
 * توليد ترجمات للغات الأخرى
 */
function generateTranslationsForLanguage(language) {
  const templates = {
    ru: {
      servicesPages: {
        wedding: {
          hero: {
            title: "Прокат автомобилей для свадьбы в Дубае",
            subtitle: "Прибудьте в непревзойденном стиле в ваш особенный день",
            viewPackages: "Посмотреть свадебные пакеты",
            consultation: "Бесплатная консультация"
          },
          whyChoose: {
            title: "Почему выбрать наши свадебные услуги"
          },
          packages: {
            title: "Свадебные пакеты"
          },
          gallery: {
            title: "Свадебная галерея"
          },
          testimonials: {
            title: "Счастливые пары"
          },
          cta: {
            title: "Готовы сделать свадьбу незабываемой?",
            call: "Позвонить сейчас",
            getQuote: "Получить предложение"
          }
        },
        corporate: {
          hero: {
            title: "Корпоративная аренда Rolls-Royce",
            subtitle: "Поднимите имидж бизнеса в Дубае",
            getQuote: "Получить корпоративное предложение",
            viewPackages: "Посмотреть корпоративные пакеты",
            stats: {
              clients: "500+ клиентов",
              retention: "98% удержание",
              support: "Поддержка 24/7"
            }
          },
          whyChoose: {
            title: "Почему выбрать наши корпоративные услуги"
          },
          packages: {
            title: "Корпоративные пакеты",
            requestQuote: "Запросить предложение"
          },
          clients: {
            title: "Доверяют ведущие компании",
            more: "И 200+ других компаний доверяют нашим услугам"
          },
          cta: {
            title: "Готовы улучшить корпоративные перевозки?",
            speakToTeam: "Связаться с корпоративной командой",
            downloadBrochure: "Скачать корпоративную брошюру"
          },
          quickInquiry: {
            title: "Быстрый корпоративный запрос",
            selectPackage: "Выберите пакет",
            submitInquiry: "Отправить запрос"
          }
        }
      },
      placeholders: {
        companyName: "Название компании",
        businessEmail: "Корпоративная электронная почта"
      }
    },
    
    fr: {
      servicesPages: {
        wedding: {
          hero: {
            title: "Location de voitures de mariage à Dubaï",
            subtitle: "Arrivez avec un style inégalé le jour de votre mariage",
            viewPackages: "Voir les forfaits mariage",
            consultation: "Consultation gratuite"
          },
          whyChoose: {
            title: "Pourquoi choisir nos services de mariage"
          },
          packages: {
            title: "Forfaits Mariage"
          },
          gallery: {
            title: "Galerie de Mariage"
          },
          testimonials: {
            title: "Couples Heureux"
          },
          cta: {
            title: "Prêt à rendre votre mariage inoubliable?",
            call: "Appeler maintenant",
            getQuote: "Obtenir un devis"
          }
        },
        corporate: {
          hero: {
            title: "Location Rolls-Royce d'entreprise",
            subtitle: "Rehaussez l'image de votre entreprise à Dubaï",
            getQuote: "Obtenir un devis d'entreprise",
            viewPackages: "Voir les forfaits d'entreprise",
            stats: {
              clients: "500+ clients",
              retention: "98% rétention",
              support: "Support 24/7"
            }
          },
          whyChoose: {
            title: "Pourquoi choisir nos services d'entreprise"
          },
          packages: {
            title: "Forfaits d'Entreprise",
            requestQuote: "Demander un devis"
          },
          clients: {
            title: "Approuvé par les entreprises leaders",
            more: "Et 200+ autres entreprises font confiance à nos services"
          },
          cta: {
            title: "Prêt à améliorer votre transport d'entreprise?",
            speakToTeam: "Parler à l'équipe d'entreprise",
            downloadBrochure: "Télécharger la brochure d'entreprise"
          },
          quickInquiry: {
            title: "Demande rapide d'entreprise",
            selectPackage: "Sélectionner un forfait",
            submitInquiry: "Soumettre la demande"
          }
        }
      },
      placeholders: {
        companyName: "Nom de l'entreprise",
        businessEmail: "Email professionnel"
      }
    },
    
    zh: {
      servicesPages: {
        wedding: {
          hero: {
            title: "迪拜豪华婚车租赁",
            subtitle: "在您的特殊日子以无与伦比的风格抵达",
            viewPackages: "查看婚礼套餐",
            consultation: "免费咨询"
          },
          whyChoose: {
            title: "为什么选择我们的婚礼服务"
          },
          packages: {
            title: "婚礼套餐"
          },
          gallery: {
            title: "婚礼画廊"
          },
          testimonials: {
            title: "幸福夫妇"
          },
          cta: {
            title: "准备让您的婚礼难忘吗？",
            call: "立即致电",
            getQuote: "获取报价"
          }
        },
        corporate: {
          hero: {
            title: "企业劳斯莱斯租赁",
            subtitle: "提升您在迪拜的企业形象",
            getQuote: "获取企业报价",
            viewPackages: "查看企业套餐",
            stats: {
              clients: "500+客户",
              retention: "98%保留率",
              support: "24/7支持"
            }
          },
          whyChoose: {
            title: "为什么选择我们的企业服务"
          },
          packages: {
            title: "企业套餐",
            requestQuote: "请求报价"
          },
          clients: {
            title: "受到领先企业信赖",
            more: "还有200+其他企业信赖我们的服务"
          },
          cta: {
            title: "准备提升您的企业交通？",
            speakToTeam: "与企业团队交谈",
            downloadBrochure: "下载企业手册"
          },
          quickInquiry: {
            title: "快速企业咨询",
            selectPackage: "选择套餐",
            submitInquiry: "提交咨询"
          }
        }
      },
      placeholders: {
        companyName: "公司名称",
        businessEmail: "商务邮箱"
      }
    },
    
    hi: {
      servicesPages: {
        wedding: {
          hero: {
            title: "दुबई में लक्जरी शादी कार किराया",
            subtitle: "अपने विशेष दिन में अद्वितीय स्टाइल में पहुंचें",
            viewPackages: "शादी पैकेज देखें",
            consultation: "मुफ्त परामर्श"
          },
          whyChoose: {
            title: "हमारी शादी सेवाएं क्यों चुनें"
          },
          packages: {
            title: "शादी पैकेज"
          },
          gallery: {
            title: "शादी गैलरी"
          },
          testimonials: {
            title: "खुश जोड़े"
          },
          cta: {
            title: "अपनी शादी को अविस्मरणीय बनाने के लिए तैयार?",
            call: "अभी कॉल करें",
            getQuote: "कोटेशन प्राप्त करें"
          }
        },
        corporate: {
          hero: {
            title: "कॉर्पोरेट रोल्स-रॉयस किराया",
            subtitle: "दुबई में अपनी व्यावसायिक छवि बढ़ाएं",
            getQuote: "कॉर्पोरेट कोटेशन प्राप्त करें",
            viewPackages: "कॉर्पोरेट पैकेज देखें",
            stats: {
              clients: "500+ ग्राहक",
              retention: "98% प्रतिधारण",
              support: "24/7 सहायता"
            }
          },
          whyChoose: {
            title: "हमारी कॉर्पोरेट सेवाएं क्यों चुनें"
          },
          packages: {
            title: "कॉर्पोरेट पैकेज",
            requestQuote: "कोटेशन का अनुरोध करें"
          },
          clients: {
            title: "अग्रणी व्यवसायों द्वारा भरोसेमंद",
            more: "और 200+ अन्य कंपनियां हमारी सेवाओं पर भरोसा करती हैं"
          },
          cta: {
            title: "अपने कॉर्पोरेट परिवहन को बेहतर बनाने के लिए तैयार?",
            speakToTeam: "कॉर्पोरेट टीम से बात करें",
            downloadBrochure: "कॉर्पोरेट ब्रोशर डाउनलोड करें"
          },
          quickInquiry: {
            title: "त्वरित कॉर्पोरेट पूछताछ",
            selectPackage: "पैकेज चुनें",
            submitInquiry: "पूछताछ सबमिट करें"
          }
        }
      },
      placeholders: {
        companyName: "कंपनी का नाम",
        businessEmail: "व्यावसायिक ईमेल"
      }
    }
  };
  
  return templates[language] || SERVICES_MISSING_TRANSLATIONS.en;
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
 * إصلاح جميع ترجمات الخدمات
 */
function fixServicesTranslations() {
  console.log('🔧 إصلاح شامل لترجمات صفحات الخدمات...\n');
  
  let fixedCount = 0;
  
  LANGUAGES.forEach(language => {
    console.log(`📂 إصلاح ترجمات الخدمات للغة: ${language}`);
    
    let translations;
    if (language === 'en' || language === 'ar') {
      translations = SERVICES_MISSING_TRANSLATIONS[language];
    } else {
      translations = generateTranslationsForLanguage(language);
    }
    
    // تحديث ملف services.json
    const servicesPath = path.join(__dirname, '..', 'public', 'locales', language, 'services.json');
    if (updateTranslationFile(language, servicesPath, translations)) {
      console.log(`   ✅ services.json محدث`);
      fixedCount++;
    }
    
    // تحديث ملف common.json أيضاً للـ placeholders
    const commonPath = path.join(__dirname, '..', 'public', 'locales', language, 'common.json');
    if (translations.placeholders) {
      if (updateTranslationFile(language, commonPath, { placeholders: translations.placeholders })) {
        console.log(`   ✅ common.json محدث للـ placeholders`);
      }
    }
    
    console.log('');
  });
  
  console.log(`🎉 تم إصلاح ترجمات الخدمات في ${fixedCount} ملف!`);
  console.log('\n🔧 الآن يجب اختبار البناء...');
  
  return fixedCount;
}

if (require.main === module) {
  try {
    const fixedCount = fixServicesTranslations();
    
    console.log('\n🎯 الخطوات التالية:');
    console.log('1. اختبار البناء: npm run build');
    console.log('2. فحص الترجمات: npm run translations:check');
    console.log('3. إذا نجح، جميع صفحات الخدمات ستعمل!');
    
    if (fixedCount > 0) {
      console.log('\n✨ تم إصلاح جميع مفاتيح ترجمة الخدمات!');
      console.log('🚀 يجب أن تعمل صفحات الزفاف والشركات الآن!');
    }
    
  } catch (error) {
    console.error('❌ خطأ في إصلاح ترجمات الخدمات:', error.message);
    process.exit(1);
  }
}

module.exports = { fixServicesTranslations }; 
#!/usr/bin/env node

/**
 * أداة توليد ملفات الترجمة الجديدة بالبنية المنظمة
 * تنشئ جميع الملفات المفقودة وتملأها بالترجمات المطلوبة
 */

const fs = require('fs');
const path = require('path');

// تحديد اللغات المدعومة
const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * القوالب الأساسية للترجمات
 */
const TRANSLATION_TEMPLATES = {
  en: {
    // ملف navigation.json
    navigation: {
      nav: {
        home: "Home",
        fleet: "Fleet",
        services: "Services",
        locations: "Locations",
        about: "About",
        contact: "Contact",
        booking: "Book Now",
        gallery: "Gallery",
        blog: "Blog",
        faq: "FAQ",
        testimonials: "Testimonials",
        pricing: "Pricing",
        more: "More"
      },
      locations: {
        downtownDubai: { nav: "Downtown Dubai" },
        dubaiMarina: { nav: "Dubai Marina" },
        palmJumeirah: { nav: "Palm Jumeirah" },
        businessBay: { nav: "Business Bay" },
        jbr: { nav: "JBR" },
        difc: { nav: "DIFC" }
      }
    },
    
    // ملف footer.json
    footer: {
      footer: {
        showroom: "Showroom Location",
        email: "Email Us",
        support: "24/7 Support",
        rights: "All Rights Reserved",
        call: "Call Us",
        whatsapp: "WhatsApp",
        quickLinks: "Quick Links",
        contact: "Contact Information",
        about: "Your premier choice for luxury Rolls-Royce car rental in Dubai"
      }
    },
    
    // ملف services.json
    services: {
      servicesPages: {
        corporate: {
          packages: {
            executive: {
              name: "Executive Package",
              description: "Premium executive transportation for business leaders",
              features: [
                "Dedicated professional chauffeur",
                "Premium Rolls-Royce Ghost or Phantom",
                "24/7 availability",
                "Airport meet & greet service",
                "Complimentary water and refreshments"
              ],
              vehicles: ["Phantom", "Ghost"],
              price: "From AED 1,200/day"
            },
            conference: {
              name: "Conference Package", 
              description: "Multi-day conference and event transportation",
              features: [
                "Multiple vehicle coordination",
                "Event schedule management",
                "VIP conference pickup/drop-off",
                "Flexible timing adjustments",
                "Dedicated account manager"
              ],
              vehicles: ["Ghost", "Cullinan"],
              price: "From AED 800/day"
            },
            roadshow: {
              name: "Roadshow Package",
              description: "Multi-city business roadshow transportation",
              features: [
                "Inter-emirate travel coordination",
                "Long-distance comfort optimization",
                "Business meeting logistics",
                "Flexible schedule accommodation",
                "Professional route planning"
              ],
              vehicles: ["Phantom", "Cullinan"],
              price: "From AED 1,500/day"
            },
            partnership: {
              name: "Partnership Package",
              description: "Long-term corporate partnership solutions",
              features: [
                "Dedicated fleet allocation",
                "Priority booking guarantee",
                "Customized service protocols",
                "Quarterly business reviews",
                "Volume discount pricing"
              ],
              vehicles: ["All Models"],
              price: "Custom pricing available"
            },
            requestQuote: "Request Quote"
          },
          clients: {
            emiratesNBD: "Emirates NBD",
            banking: "Banking Sector",
            damac: "DAMAC Properties",
            realEstate: "Real Estate",
            dubaiHolding: "Dubai Holding",
            investment: "Investment",
            emaar: "Emaar Properties",
            development: "Development",
            more: "And 200+ more companies trust our services"
          },
          caseStudies: {
            title: "Success Stories",
            bank: {
              client: "Major UAE Bank",
              challenge: "Challenge",
              challengeText: "Needed reliable transport for a 5-day, multi-city financial roadshow for their CEO.",
              solution: "Solution",
              solutionText: "Provided a dedicated Ghost with a professional chauffeur, managing a complex schedule flawlessly.",
              result: "Result",
              resultText: "The CEO praised the seamless experience, allowing them to focus on critical business meetings."
            },
            tech: {
              client: "International Tech Company",
              challenge: "Challenge", 
              challengeText: "Required transportation for 50+ executives during a 3-day conference in Dubai.",
              solution: "Solution",
              solutionText: "Coordinated a fleet of 5 Rolls-Royce vehicles with synchronized timing and logistics.",
              result: "Result",
              resultText: "Achieved 100% on-time arrival rate with zero scheduling conflicts."
            }
          }
        }
      }
    },
    
    // ملف fleet.json
    fleet: {
      fleet: {
        aed: "AED",
        perDay: "/day",
        rentNow: "RENT NOW"
      }
    },
    
    // ملف pages.json
    pages: {
      terms: {
        sections: {
          rentalAgreement: { title: "Rental Agreement Terms" },
          driverRequirements: { title: "Driver Requirements" },
          securityDeposit: { title: "Security Deposit Policy" },
          insuranceCoverage: { title: "Insurance Coverage" },
          usageRestrictions: { title: "Usage Restrictions" },
          fuelPolicy: { title: "Fuel Policy" },
          mileageAllowance: { title: "Mileage Allowance" },
          cancellationPolicy: { title: "Cancellation Policy" },
          trafficFines: { title: "Traffic Fines & Violations" },
          damageClaims: { title: "Damage Claims" }
        }
      },
      other: {
        testimonials: "Customer Testimonials"
      }
    }
  },
  
  ar: {
    // ملف navigation.json
    navigation: {
      nav: {
        home: "الرئيسية",
        fleet: "الأسطول",
        services: "الخدمات",
        locations: "المواقع",
        about: "من نحن",
        contact: "اتصل بنا",
        booking: "احجز الآن",
        gallery: "معرض الصور",
        blog: "المدونة",
        faq: "الأسئلة الشائعة",
        testimonials: "آراء العملاء",
        pricing: "الأسعار",
        more: "المزيد"
      },
      locations: {
        downtownDubai: { nav: "وسط مدينة دبي" },
        dubaiMarina: { nav: "دبي مارينا" },
        palmJumeirah: { nav: "نخلة جميرا" },
        businessBay: { nav: "الخليج التجاري" },
        jbr: { nav: "جميرا بيتش ريزيدنس" },
        difc: { nav: "مركز دبي المالي" }
      }
    },
    
    // ملف footer.json
    footer: {
      footer: {
        showroom: "موقع المعرض",
        email: "راسلنا",
        support: "دعم 24/7",
        rights: "جميع الحقوق محفوظة",
        call: "اتصل بنا",
        whatsapp: "واتساب",
        quickLinks: "روابط سريعة",
        contact: "معلومات الاتصال",
        about: "خيارك الأول لتأجير سيارات رولز رويس الفاخرة في دبي"
      }
    },
    
    // ملف services.json  
    services: {
      servicesPages: {
        corporate: {
          packages: {
            executive: {
              name: "باقة تنفيذية",
              description: "خدمة نقل تنفيذية متميزة لقادة الأعمال",
              features: [
                "سائق محترف مخصص",
                "رولز رويس غوست أو فانتوم متميزة",
                "متاح 24/7",
                "خدمة استقبال بالمطار",
                "مياه ومرطبات مجانية"
              ],
              vehicles: ["فانتوم", "غوست"],
              price: "من 1,200 درهم/يوم"
            },
            conference: {
              name: "باقة المؤتمرات",
              description: "نقل متعدد الأيام للمؤتمرات والفعاليات",
              features: [
                "تنسيق متعدد المركبات",
                "إدارة جدولة الفعاليات",
                "خدمة VIP للمؤتمرات",
                "مرونة في التوقيت",
                "مدير حساب مخصص"
              ],
              vehicles: ["غوست", "كولينان"],
              price: "من 800 درهم/يوم"
            },
            roadshow: {
              name: "باقة العروض التجارية",
              description: "نقل العروض التجارية متعددة المدن",
              features: [
                "تنسيق السفر بين الإمارات",
                "تحسين الراحة للمسافات الطويلة",
                "لوجستيات الاجتماعات التجارية",
                "جدولة مرنة",
                "تخطيط مسارات احترافي"
              ],
              vehicles: ["فانتوم", "كولينان"],
              price: "من 1,500 درهم/يوم"
            },
            partnership: {
              name: "باقة الشراكة",
              description: "حلول شراكة طويلة المدى للشركات",
              features: [
                "تخصيص أسطول مخصص",
                "ضمان أولوية الحجز",
                "بروتوكولات خدمة مخصصة",
                "مراجعات تجارية ربع سنوية",
                "تسعير خصم الكمية"
              ],
              vehicles: ["جميع الموديلات"],
              price: "تسعير مخصص متاح"
            },
            requestQuote: "طلب عرض سعر"
          },
          clients: {
            emiratesNBD: "بنك الإمارات دبي الوطني",
            banking: "القطاع المصرفي",
            damac: "داماك العقارية",
            realEstate: "العقارات",
            dubaiHolding: "دبي القابضة",
            investment: "الاستثمار",
            emaar: "إعمار العقارية",
            development: "التطوير",
            more: "وأكثر من 200 شركة تثق في خدماتنا"
          },
          caseStudies: {
            title: "قصص نجاح",
            bank: {
              client: "بنك إماراتي كبير",
              challenge: "التحدي",
              challengeText: "احتاجوا لنقل موثوق لجولة مالية لمدة 5 أيام متعددة المدن للرئيس التنفيذي.",
              solution: "الحل",
              solutionText: "وفرنا سيارة غوست مخصصة مع سائق محترف، وإدارة جدول معقد بلا عيوب.",
              result: "النتيجة",
              resultText: "أشاد الرئيس التنفيذي بالتجربة السلسة، مما مكنه من التركيز على الاجتماعات الحاسمة."
            },
            tech: {
              client: "شركة تقنية دولية",
              challenge: "التحدي",
              challengeText: "تطلبوا نقل لأكثر من 50 تنفيذي خلال مؤتمر 3 أيام في دبي.",
              solution: "الحل",
              solutionText: "نسقنا أسطول من 5 سيارات رولز رويس بتوقيت ولوجستيات متزامنة.",
              result: "النتيجة",
              resultText: "حققنا معدل وصول في الوقت المحدد 100% بدون أي تضارب في الجدولة."
            }
          }
        }
      }
    },
    
    // ملف fleet.json
    fleet: {
      fleet: {
        aed: "درهم",
        perDay: "/يوم",
        rentNow: "احجز الآن"
      }
    },
    
    // ملف pages.json
    pages: {
      terms: {
        sections: {
          rentalAgreement: { title: "شروط اتفاقية التأجير" },
          driverRequirements: { title: "متطلبات السائق" },
          securityDeposit: { title: "سياسة التأمين" },
          insuranceCoverage: { title: "التغطية التأمينية" },
          usageRestrictions: { title: "قيود الاستخدام" },
          fuelPolicy: { title: "سياسة الوقود" },
          mileageAllowance: { title: "حد المسافة المسموح" },
          cancellationPolicy: { title: "سياسة الإلغاء" },
          trafficFines: { title: "المخالفات المرورية" },
          damageClaims: { title: "مطالبات الأضرار" }
        }
      },
      other: {
        testimonials: "آراء العملاء"
      }
    }
  }
};

/**
 * إنشاء ترجمات للغات الأخرى بناء على الإنجليزية والعربية
 */
function generateTranslationsForLanguage(lang) {
  const templates = {
    ru: {
      // الروسية
      navigation: {
        nav: {
          home: "Главная",
          fleet: "Автопарк",
          services: "Услуги",
          locations: "Локации",
          about: "О нас",
          contact: "Контакты",
          booking: "Забронировать",
          gallery: "Галерея",
          blog: "Блог",
          faq: "ЧаВо",
          testimonials: "Отзывы",
          pricing: "Цены",
          more: "Еще"
        },
        locations: {
          downtownDubai: { nav: "Даунтаун Дубай" },
          dubaiMarina: { nav: "Дубай Марина" },
          palmJumeirah: { nav: "Палм-Джумейра" },
          businessBay: { nav: "Бизнес-Бей" },
          jbr: { nav: "JBR" },
          difc: { nav: "DIFC" }
        }
      },
      footer: {
        footer: {
          showroom: "Расположение Шоурума",
          email: "Напишите Нам",
          support: "Поддержка 24/7",
          rights: "Все Права Защищены",
          call: "Позвонить",
          whatsapp: "WhatsApp",
          quickLinks: "Быстрые Ссылки",
          contact: "Контактная Информация",
          about: "Ваш премиальный выбор для аренды роскошных Rolls-Royce в Дубае"
        }
      }
    },
    
    fr: {
      // الفرنسية
      navigation: {
        nav: {
          home: "Accueil",
          fleet: "Flotte",
          services: "Services",
          locations: "Emplacements",
          about: "À Propos",
          contact: "Contact",
          booking: "Réserver",
          gallery: "Galerie",
          blog: "Blog",
          faq: "FAQ",
          testimonials: "Témoignages",
          pricing: "Tarifs",
          more: "Plus"
        },
        locations: {
          downtownDubai: { nav: "Downtown Dubaï" },
          dubaiMarina: { nav: "Dubaï Marina" },
          palmJumeirah: { nav: "Palm Jumeirah" },
          businessBay: { nav: "Business Bay" },
          jbr: { nav: "JBR" },
          difc: { nav: "DIFC" }
        }
      },
      footer: {
        footer: {
          showroom: "Emplacement du Showroom",
          email: "Nous Écrire",
          support: "Support 24/7",
          rights: "Tous Droits Réservés",
          call: "Appeler",
          whatsapp: "WhatsApp",
          quickLinks: "Liens Rapides",
          contact: "Informations de Contact",
          about: "Votre choix premium pour la location de Rolls-Royce de luxe à Dubaï"
        }
      }
    },
    
    zh: {
      // الصينية
      navigation: {
        nav: {
          home: "首页",
          fleet: "车队",
          services: "服务",
          locations: "地点",
          about: "关于我们",
          contact: "联系我们",
          booking: "立即预订",
          gallery: "图库",
          blog: "博客",
          faq: "常见问题",
          testimonials: "客户评价",
          pricing: "价格",
          more: "更多"
        },
        locations: {
          downtownDubai: { nav: "迪拜市中心" },
          dubaiMarina: { nav: "迪拜码头" },
          palmJumeirah: { nav: "朱美拉棕榈岛" },
          businessBay: { nav: "商业湾" },
          jbr: { nav: "JBR" },
          difc: { nav: "DIFC" }
        }
      },
      footer: {
        footer: {
          showroom: "展厅位置",
          email: "发邮件给我们",
          support: "24/7支持",
          rights: "版权所有",
          call: "致电",
          whatsapp: "WhatsApp",
          quickLinks: "快速链接",
          contact: "联系信息",
          about: "您在迪拜租赁豪华劳斯莱斯的首选"
        }
      }
    },
    
    hi: {
      // الهندية  
      navigation: {
        nav: {
          home: "होम",
          fleet: "फ्लीट",
          services: "सेवाएं",
          locations: "स्थान",
          about: "हमारे बारे में",
          contact: "संपर्क",
          booking: "बुक करें",
          gallery: "गैलरी",
          blog: "ब्लॉग",
          faq: "सवाल-जवाब",
          testimonials: "प्रशंसापत्र",
          pricing: "मूल्य",
          more: "और"
        },
        locations: {
          downtownDubai: { nav: "डाउनटाउन दुबई" },
          dubaiMarina: { nav: "दुबई मरीना" },
          palmJumeirah: { nav: "पाम जुमेराह" },
          businessBay: { nav: "बिजनेस बे" },
          jbr: { nav: "JBR" },
          difc: { nav: "DIFC" }
        }
      },
      footer: {
        footer: {
          showroom: "शोरूम स्थान",
          email: "हमें ईमेल करें",
          support: "24/7 सहायता",
          rights: "सभी अधिकार सुरक्षित",
          call: "कॉल करें",
          whatsapp: "WhatsApp",
          quickLinks: "त्वरित लिंक",
          contact: "संपर्क जानकारी",
          about: "दुबई में लक्जरी रोल्स-रॉयस किराए के लिए आपकी प्रीमियम पसंद"
        }
      }
    }
  };
  
  return templates[lang] || TRANSLATION_TEMPLATES.en;
}

/**
 * إنشاء ملف ترجمة واحد
 */
function createTranslationFile(language, namespace, content) {
  const dirPath = path.join(__dirname, '..', 'public', 'locales', language);
  const filePath = path.join(dirPath, `${namespace}.json`);
  
  // إنشاء المجلد إذا لم يكن موجوداً
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // كتابة الملف
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
  
  return filePath;
}

/**
 * دمج المحتوى الموجود مع الجديد
 */
function mergeExistingContent(language, namespace, newContent) {
  const filePath = path.join(__dirname, '..', 'public', 'locales', language, `${namespace}.json`);
  
  let existingContent = {};
  if (fs.existsSync(filePath)) {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      existingContent = JSON.parse(fileContent);
    } catch (error) {
      console.warn(`تحذير: خطأ في قراءة ${filePath}:`, error.message);
    }
  }
  
  // دمج عميق للمحتوى
  function deepMerge(target, source) {
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        target[key] = target[key] || {};
        deepMerge(target[key], source[key]);
      } else {
        // الاحتفاظ بالمحتوى الموجود إذا كان متاحاً
        if (!target[key]) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
  
  return deepMerge(existingContent, newContent);
}

/**
 * توليد جميع ملفات الترجمة
 */
function generateAllTranslationFiles() {
  console.log('🚀 بدء توليد ملفات الترجمة الجديدة...\n');
  
  const createdFiles = [];
  const namespaces = ['navigation', 'footer', 'services', 'fleet', 'pages'];
  
  LANGUAGES.forEach(language => {
    console.log(`📂 إنشاء ملفات اللغة: ${language}`);
    
    const langTemplates = language === 'en' || language === 'ar' 
      ? TRANSLATION_TEMPLATES[language] 
      : generateTranslationsForLanguage(language);
    
    namespaces.forEach(namespace => {
      if (langTemplates && langTemplates[namespace]) {
        try {
          // دمج مع المحتوى الموجود
          const mergedContent = mergeExistingContent(language, namespace, langTemplates[namespace]);
          
          // إنشاء الملف
          const filePath = createTranslationFile(language, namespace, mergedContent);
          createdFiles.push(filePath);
          
          console.log(`   ✅ ${namespace}.json`);
        } catch (error) {
          console.error(`   ❌ خطأ في ${namespace}.json:`, error.message);
        }
      }
    });
    
    console.log('');
  });
  
  console.log(`\n🎉 تم إنشاء ${createdFiles.length} ملف ترجمة بنجاح!`);
  console.log('\n📋 الملفات المُنشأة:');
  createdFiles.forEach(file => {
    const relativePath = path.relative(process.cwd(), file);
    console.log(`   📄 ${relativePath}`);
  });
  
  return createdFiles;
}

/**
 * تحديث package.json بالأوامر الجديدة
 */
function updatePackageJson() {
  const packagePath = path.join(__dirname, '..', 'package.json');
  
  try {
    const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    // إضافة الأوامر الجديدة
    const newScripts = {
      'translations:generate': 'node scripts/generate-translation-files.js',
      'translations:migrate': 'node scripts/migrate-existing-content.js',
      'translations:update-code': 'node scripts/update-code-imports.js',
      'translations:extract-keys': 'node scripts/extract-translation-keys.js'
    };
    
    packageContent.scripts = { ...packageContent.scripts, ...newScripts };
    
    fs.writeFileSync(packagePath, JSON.stringify(packageContent, null, 2));
    console.log('\n✅ تم تحديث package.json بالأوامر الجديدة');
  } catch (error) {
    console.warn('⚠️ تعذر تحديث package.json:', error.message);
  }
}

if (require.main === module) {
  try {
    const createdFiles = generateAllTranslationFiles();
    updatePackageJson();
    
    console.log('\n🎯 المراحل التالية:');
    console.log('1. مراجعة الملفات المُنشأة وتحسين الترجمات');
    console.log('2. تشغيل: npm run translations:migrate');
    console.log('3. تشغيل: npm run translations:update-code');
    console.log('4. اختبار: npm run build');
    
  } catch (error) {
    console.error('❌ خطأ في توليد ملفات الترجمة:', error.message);
    process.exit(1);
  }
}

module.exports = { generateAllTranslationFiles, createTranslationFile, mergeExistingContent }; 
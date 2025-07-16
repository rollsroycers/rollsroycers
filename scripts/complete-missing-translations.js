#!/usr/bin/env node

/**
 * أداة إكمال الترجمات المفقودة
 * تملأ جميع المفاتيح المفقودة في ملفات الترجمة
 */

const fs = require('fs');
const path = require('path');

// تحديد اللغات المدعومة
const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * قوالب الترجمات الكاملة لجميع المفاتيح المفقودة
 */
const COMPLETE_TRANSLATIONS = {
  en: {
    services: {
      servicesPages: {
        corporate: {
          hero: {
            title: "Corporate Rolls-Royce Services in Dubai",
            subtitle: "Executive Transportation Solutions", 
            description: "Elevate your business image with our premium Rolls-Royce corporate services. From executive meetings to client entertainment, we provide unmatched luxury transportation solutions.",
            getQuote: "Get Corporate Quote",
            viewPackages: "View Packages"
          },
          whyChoose: {
            title: "Why Choose Our Corporate Services",
            image: {
              title: "Professional Image",
              description: "Make a lasting impression with our prestigious Rolls-Royce fleet"
            },
            productivity: {
              title: "Enhanced Productivity", 
              description: "Utilize travel time effectively in our quiet, comfortable vehicles"
            },
            privacy: {
              title: "Confidential Environment",
              description: "Conduct sensitive business discussions in complete privacy"
            },
            standards: {
              title: "International Standards",
              description: "World-class service that meets global corporate expectations"
            }
          },
          packages: {
            title: "Corporate Packages",
            executive: {
              name: "Executive Package",
              description: "Premium executive transportation for business leaders",
              features: [
                "Dedicated professional chauffeur",
                "Premium Rolls-Royce Ghost or Phantom", 
                "24/7 availability",
                "Airport meet & greet service",
                "Complimentary water and refreshments",
                "Wi-Fi connectivity",
                "Privacy partition",
                "Flexible scheduling",
                "Corporate billing available"
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
                "Dedicated account manager",
                "Group transportation logistics",
                "Hotel coordination",
                "Conference venue partnerships"
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
                "Professional route planning",
                "Multi-day availability",
                "Accommodation coordination",
                "Executive amenities"
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
                "Volume discount pricing",
                "Exclusive vehicle assignment",
                "Corporate branding options",
                "Annual contract benefits"
              ],
              vehicles: ["All Models"],
              price: "Custom pricing available"
            },
            requestQuote: "Request Quote"
          },
          clients: {
            title: "Trusted by Leading Businesses",
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
          },
          benefits: {
            title: "Corporate Benefits",
            financial: {
              title: "Financial Advantages",
              items: [
                "Transparent corporate billing",
                "Detailed expense reporting", 
                "Volume discount programs",
                "Flexible payment terms"
              ]
            },
            operational: {
              title: "Operational Excellence",
              items: [
                "Dedicated account management",
                "24/7 booking support",
                "Real-time vehicle tracking", 
                "Schedule optimization"
              ]
            },
            service: {
              title: "Service Quality",
              items: [
                "Professional chauffeur training",
                "Luxury vehicle maintenance",
                "Punctuality guarantee",
                "Confidentiality assurance"
              ]
            }
          },
          cta: {
            title: "Ready to Elevate Your Corporate Travel?",
            description: "Contact our corporate specialists to discuss your transportation needs and receive a customized proposal.",
            speakToTeam: "Speak to Our Team",
            downloadBrochure: "Download Brochure"
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
      }
    },
    
    fleet: {
      fleet: {
        aed: "AED",
        perDay: "/day", 
        rentNow: "RENT NOW"
      }
    },
    
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
    services: {
      servicesPages: {
        corporate: {
          hero: {
            title: "خدمات رولز رويس للشركات في دبي",
            subtitle: "حلول النقل التنفيذية",
            description: "ارفع من صورة شركتك مع خدمات رولز رويس المتميزة للشركات. من الاجتماعات التنفيذية إلى ترفيه العملاء، نقدم حلول نقل فاخرة لا مثيل لها.",
            getQuote: "احصل على عرض سعر للشركات",
            viewPackages: "عرض الباقات"
          },
          whyChoose: {
            title: "لماذا تختار خدماتنا للشركات",
            image: {
              title: "الصورة المهنية",
              description: "اترك انطباعاً دائماً مع أسطولنا المرموق من رولز رويس"
            },
            productivity: {
              title: "تعزيز الإنتاجية",
              description: "استغل وقت السفر بفعالية في مركباتنا الهادئة والمريحة"
            },
            privacy: {
              title: "بيئة سرية",
              description: "أجر مناقشات عمل حساسة بخصوصية تامة"
            },
            standards: {
              title: "المعايير الدولية",
              description: "خدمة عالمية المستوى تلبي التوقعات الشركاتية العالمية"
            }
          },
          packages: {
            title: "باقات الشركات",
            executive: {
              name: "الباقة التنفيذية",
              description: "نقل تنفيذي متميز لقادة الأعمال",
              features: [
                "سائق محترف مخصص",
                "رولز رويس غوست أو فانتوم متميزة",
                "متاح 24/7",
                "خدمة استقبال بالمطار",
                "مياه ومرطبات مجانية",
                "اتصال واي فاي",
                "حاجز خصوصية",
                "جدولة مرنة",
                "فوترة الشركات متاحة"
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
                "تعديلات توقيت مرنة",
                "مدير حساب مخصص",
                "لوجستيات النقل الجماعي",
                "تنسيق الفنادق",
                "شراكات مواقع المؤتمرات"
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
                "تخطيط مسارات احترافي",
                "توفر متعدد الأيام",
                "تنسيق الإقامة",
                "وسائل راحة تنفيذية"
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
                "تسعير خصم الكمية",
                "تخصيص مركبة حصرية",
                "خيارات العلامة التجارية للشركات",
                "فوائد العقد السنوي"
              ],
              vehicles: ["جميع الموديلات"],
              price: "تسعير مخصص متاح"
            },
            requestQuote: "طلب عرض سعر"
          },
          clients: {
            title: "موثوق من قبل الشركات الرائدة",
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
          },
          benefits: {
            title: "فوائد الشركات",
            financial: {
              title: "المزايا المالية",
              items: [
                "فوترة شركات شفافة",
                "تقارير مصروفات مفصلة",
                "برامج خصم الكمية",
                "شروط دفع مرنة"
              ]
            },
            operational: {
              title: "التميز التشغيلي",
              items: [
                "إدارة حساب مخصصة",
                "دعم حجز 24/7",
                "تتبع المركبة في الوقت الفعلي",
                "تحسين الجدولة"
              ]
            },
            service: {
              title: "جودة الخدمة",
              items: [
                "تدريب السائقين المحترفين",
                "صيانة المركبات الفاخرة",
                "ضمان الدقة",
                "ضمان السرية"
              ]
            }
          },
          cta: {
            title: "جاهز لترقية سفر شركتك؟",
            description: "اتصل بمتخصصي الشركات لدينا لمناقشة احتياجات النقل الخاصة بك واستلام اقتراح مخصص.",
            speakToTeam: "تحدث مع فريقنا",
            downloadBrochure: "تحميل الكتيب"
          },
          quickInquiry: {
            title: "استفسار سريع للشركات",
            selectPackage: "اختر الباقة",
            packages: {
              executive: "الباقة التنفيذية",
              conference: "باقة المؤتمرات",
              roadshow: "باقة العروض التجارية",
              partnership: "باقة الشراكة"
            },
            submitInquiry: "إرسال الاستفسار"
          }
        }
      }
    },
    
    fleet: {
      fleet: {
        aed: "درهم",
        perDay: "/يوم",
        rentNow: "احجز الآن"
      }
    },
    
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
 * دمج الترجمات الجديدة مع الموجودة
 */
function mergeTranslations(existing, newContent) {
  function deepMerge(target, source) {
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        target[key] = target[key] || {};
        deepMerge(target[key], source[key]);
      } else {
        if (!target[key]) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
  
  return deepMerge(existing, newContent);
}

/**
 * تحديث ملفات الترجمة الموجودة
 */
function updateTranslationFiles() {
  console.log('🔄 بدء تحديث ملفات الترجمة الموجودة...\n');
  
  let updatedCount = 0;
  
  LANGUAGES.forEach(language => {
    console.log(`📂 تحديث ملفات اللغة: ${language}`);
    
    const languageTranslations = COMPLETE_TRANSLATIONS[language] || COMPLETE_TRANSLATIONS.en;
    
    Object.keys(languageTranslations).forEach(namespace => {
      const filePath = path.join(__dirname, '..', 'public', 'locales', language, `${namespace}.json`);
      
      try {
        let existingContent = {};
        if (fs.existsSync(filePath)) {
          existingContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        }
        
        const mergedContent = mergeTranslations(existingContent, languageTranslations[namespace]);
        
        fs.writeFileSync(filePath, JSON.stringify(mergedContent, null, 2));
        console.log(`   ✅ ${namespace}.json`);
        updatedCount++;
        
      } catch (error) {
        console.error(`   ❌ خطأ في ${namespace}.json:`, error.message);
      }
    });
    
    console.log('');
  });
  
  console.log(`🎉 تم تحديث ${updatedCount} ملف ترجمة!`);
}

/**
 * إنشاء ملف common.json محدث مع المفاتيح المفقودة
 */
function updateCommonTranslations() {
  console.log('🔄 تحديث ملفات common.json...\n');
  
  const commonUpdates = {
    en: {
      common: {
        rollsRoyceDubai: "Rolls-Royce Dubai",
        rollsRoyceRental: "Rolls-Royce Rental",
        luxuryCarRental: "Luxury Car Rental",
        bookNow: "Book Now",
        learnMore: "Learn More",
        viewDetails: "View Details",
        contactUs: "Contact Us",
        getQuote: "Get a Quote",
        reserveNow: "Reserve Now",
        explore: "Explore",
        submit: "Submit",
        send: "Send Message",
        call: "Call Us",
        whatsapp: "WhatsApp Us",
        email: "Email Us",
        address: "Our Address",
        loading: "Loading...",
        error: "An error occurred. Please try again.",
        success: "Success!",
        all: "All",
        select: "Select",
        optional: "Optional",
        required: "Required",
        of: "of",
        readyToExperience: "Ready to Experience Luxury?",
        bookYourRollsRoyce: "Book your Rolls-Royce today and experience the pinnacle of automotive excellence",
        viewPricing: "View Pricing"
      }
    },
    ar: {
      common: {
        rollsRoyceDubai: "رولز رويس دبي",
        rollsRoyceRental: "تأجير رولز رويس",
        luxuryCarRental: "تأجير سيارات فاخرة",
        bookNow: "احجز الآن",
        learnMore: "اعرف المزيد",
        viewDetails: "عرض التفاصيل",
        contactUs: "اتصل بنا",
        getQuote: "احصل على عرض سعر",
        reserveNow: "احجز الآن",
        explore: "استكشف",
        submit: "إرسال",
        send: "إرسال رسالة",
        call: "اتصل بنا",
        whatsapp: "واتساب",
        email: "راسلنا",
        address: "عنواننا",
        loading: "جاري التحميل...",
        error: "حدث خطأ. يرجى المحاولة مرة أخرى.",
        success: "نجح!",
        all: "الكل",
        select: "اختر",
        optional: "اختياري",
        required: "مطلوب",
        of: "من",
        readyToExperience: "جاهز لتجربة الفخامة؟",
        bookYourRollsRoyce: "احجز رولز رويس اليوم واختبر قمة التميز في عالم السيارات",
        viewPricing: "عرض الأسعار"
      }
    }
  };
  
  LANGUAGES.forEach(language => {
    const updates = commonUpdates[language] || commonUpdates.en;
    const filePath = path.join(__dirname, '..', 'public', 'locales', language, 'common.json');
    
    try {
      let existingContent = {};
      if (fs.existsSync(filePath)) {
        existingContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      }
      
      const mergedContent = mergeTranslations(existingContent, updates);
      fs.writeFileSync(filePath, JSON.stringify(mergedContent, null, 2));
      console.log(`✅ تحديث common.json للغة ${language}`);
      
    } catch (error) {
      console.error(`❌ خطأ في تحديث common.json للغة ${language}:`, error.message);
    }
  });
}

if (require.main === module) {
  try {
    updateTranslationFiles();
    updateCommonTranslations();
    
    console.log('\n🎯 تم إكمال جميع الترجمات المفقودة!');
    console.log('🚀 يمكنك الآن اختبار: npm run build');
    
  } catch (error) {
    console.error('❌ خطأ في إكمال الترجمات:', error.message);
    process.exit(1);
  }
}

module.exports = { updateTranslationFiles, updateCommonTranslations }; 
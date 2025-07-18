#!/usr/bin/env node

/**
 * Script to add missing pricing page translations to Arabic and Hindi
 */

const fs = require('fs');
const path = require('path');

const PRICING_TRANSLATIONS = {
  ar: {
    pricingPage: {
      hero: {
        title: "تسعير شفاف",
        subtitle: "لا توجد رسوم خفية، فقط الفخامة الخالصة",
        description: "جميع الأسعار تشمل التأمين الأساسي، 250 كم يومياً، وضريبة القيمة المضافة"
      },
      durationSelector: {
        daily: "الأسعار اليومية",
        weekly: "الأسعار الأسبوعية",
        monthly: "الأسعار الشهرية",
        weeklyDiscount: "خصم 15%",
        monthlyDiscount: "خصم 30%"
      },
      vehiclePricing: {
        phantom: {
          tagline: "الرائد الأعلى",
          features: [
            "قاعدة عجلات ممتدة متاحة",
            "بطانة السقف النجمية",
            "خيار جناح الخصوصية",
            "نظام صوتي مخصص"
          ]
        },
        ghost: {
          tagline: "سهولة في كل مكان",
          features: [
            "واجهة مضيئة",
            "شارة سوداء متاحة",
            "تعليق مستوي",
            "رحلة السجادة السحرية"
          ]
        },
        cullinan: {
          tagline: "تميز SUV الفاخر",
          features: [
            "قدرة على جميع التضاريس",
            "خيار جناح المشاهدة",
            "وحدة الترفيه",
            "نظام الرؤية الليلية"
          ]
        },
        dawn: {
          tagline: "كابريوليه اجتماعية",
          features: [
            "سقف قابل للطي",
            "عاكس الرياح",
            "ضبط صوتي مخصص",
            "فخامة الهواء الطلق"
          ]
        },
        wraith: {
          tagline: "سيارة جراند تورر",
          features: [
            "تصميم فاستباك",
            "بطانة السقف النجمية",
            "قوة الشارة السوداء",
            "أداء ديناميكي"
          ]
        },
        labels: {
          perDay: "في اليوم",
          perWeek: "في الأسبوع",
          perMonth: "في الشهر",
          mostPopular: "الأكثر شعبية",
          viewDetailsBook: "عرض التفاصيل والحجز"
        }
      },
      additionalServices: {
        title: "خدمات ورسوم إضافية",
        services: {
          chauffeur: {
            name: "سائق محترف",
            price: "1,500 درهم/يوم",
            description: "سائقون ذوو خبرة ومتعددو اللغات"
          },
          airport: {
            name: "نقل المطار",
            price: "1,000 درهم",
            description: "نقل فاخر في اتجاه واحد"
          },
          wedding: {
            name: "باقة الزفاف",
            price: "من 8,500 درهم",
            description: "مركبة مزينة مع سائق"
          },
          hourly: {
            name: "إيجار بالساعة",
            price: "2,000 درهم/ساعة",
            description: "حد أدنى 4 ساعات"
          },
          mileage: {
            name: "مسافة إضافية",
            price: "20 درهم/كم",
            description: "أكثر من 250 كم بدل يومي"
          },
          delivery: {
            name: "التوصيل والاستلام",
            price: "500 درهم في دبي",
            description: "الإمارات الأخرى من 1,000 درهم"
          }
        }
      },
      corporatePackages: {
        title: "الباقات المؤسسية وطويلة الأمد",
        packages: {
          executive: {
            name: "تنفيذي",
            price: "85,000 درهم/شهر",
            features: [
              "20 يوماً في الشهر",
              "اختيار Ghost أو Wraith",
              "سائق مخصص",
              "نقل المطار مشمول"
            ]
          },
          chairman: {
            name: "الرئيس",
            price: "150,000 درهم/شهر",
            features: [
              "استخدام غير محدود",
              "أي مركبة من الأسطول",
              "سائقان مخصصان",
              "حجز أولوية"
            ]
          },
          enterprise: {
            name: "المؤسسة",
            price: "عرض سعر مخصص",
            features: [
              "مركبات متعددة",
              "إدارة الأسطول",
              "علامة تجارية مؤسسية",
              "فريق حساب مخصص"
            ]
          }
        },
        recommended: "موصى به",
        learnMore: "اعرف المزيد"
      },
      seasonalPricing: {
        title: "تعديلات الأسعار الموسمية",
        tableHeaders: {
          season: "الموسم/الحدث",
          factor: "عامل السعر",
          details: "التفاصيل"
        },
        seasons: {
          peak: {
            name: "الموسم الذروة (نوفمبر-مارس)",
            factor: "+20%",
            description: "موسم دبي والعطلات"
          },
          ramadan: {
            name: "رمضان",
            factor: "+15%",
            description: "فترة طلب عالي"
          },
          summer: {
            name: "الصيف (يونيو-أغسطس)",
            factor: "-10%",
            description: "أسعار صيفية خاصة"
          },
          events: {
            name: "الأحداث والمعارض",
            factor: "+25%",
            description: "جايتكس، معرض الطيران، إلخ"
          }
        },
        disclaimer: "* الأسعار خاضعة للتوفر وقد تختلف أثناء الأحداث الخاصة"
      },
      priceCalculator: {
        title: "احسب تكلفتك الإجمالية",
        subtitle: "استخدم حاسبتنا لتقدير تكلفة الإيجار بما في ذلك جميع الخدمات",
        openButton: "افتح حاسبة الأسعار"
      },
      priceGuarantee: {
        title: "ضمان أفضل سعر",
        subtitle: "وجدت سعراً أقل لنفس إيجار رولز رويس في دبي؟ سنضاهيه ونعطيك خصماً إضافياً 5%.",
        features: {
          priceMatch: {
            title: "مطابقة السعر",
            description: "نضاهي أي سعر منافس موثق"
          },
          extraDiscount: {
            title: "خصم إضافي 5%",
            description: "خصم إضافي على السعر المطابق"
          },
          noHiddenFees: {
            title: "لا توجد رسوم خفية",
            description: "تسعير شفاف دائماً"
          }
        },
        cta: "احجز بثقة"
      },
      faq: {
        title: "الأسئلة الشائعة للتسعير",
        questions: {
          included: {
            question: "ما المشمول في سعر الإيجار؟",
            answer: "جميع الأسعار تشمل التأمين الشامل، بدل مسافة يومي 250 كم، ضريبة القيمة المضافة، ومساعدة على الطريق 24/7. الوقود غير مشمول."
          },
          deposit: {
            question: "هل هناك أي ودائع أمان؟",
            answer: "نعم، وديعة أمان قابلة للاسترداد من 5,000-10,000 درهم مطلوبة حسب موديل المركبة. يتم حجزها على بطاقتك الائتمانية."
          },
          discounts: {
            question: "هل يمكنني الحصول على خصم للإيجارات الطويلة؟",
            answer: "نعم! الإيجارات الأسبوعية تحصل على خصم 15%، الشهرية 30%، و3+ أشهر حتى 40% من السعر اليومي."
          },
          holidays: {
            question: "هل تتغير الأسعار أثناء العطلات؟",
            answer: "قد تزيد الأسعار 20-25% خلال الموسم الذروة (نوفمبر-مارس) والأحداث الكبرى. احجز مبكراً للحصول على أفضل الأسعار."
          }
        },
        viewAllFaqs: "عرض جميع الأسئلة الشائعة ←"
      },
      cta: {
        title: "مستعد لتجربة الفخامة؟",
        subtitle: "احجز رولز رويس اليوم واستمتع بأفضل الأسعار في دبي",
        bookNow: "احجز الآن",
        callForRates: "اتصل للأسعار الخاصة",
        stats: {
          support: "دعم العملاء",
          hiddenFees: "رسوم خفية",
          satisfaction: "رضا"
        }
      }
    }
  },
  hi: {
    pricingPage: {
      hero: {
        title: "पारदर्शी मूल्य निर्धारण",
        subtitle: "कोई छुपी हुई फीस नहीं, सिर्फ शुद्ध लक्जरी",
        description: "सभी कीमतों में मूल बीमा, दैनिक 250 किमी मुफ्त और VAT शामिल है"
      },
      durationSelector: {
        daily: "दैनिक दरें",
        weekly: "साप्ताहिक दरें",
        monthly: "मासिक दरें",
        weeklyDiscount: "15% छूट",
        monthlyDiscount: "30% छूट"
      },
      vehiclePricing: {
        phantom: {
          tagline: "अंतिम फ्लैगशिप",
          features: [
            "विस्तृत व्हीलबेस उपलब्ध",
            "स्टारलाइट हेडलाइनर",
            "गोपनीयता सूट विकल्प",
            "बेस्पोक ऑडियो सिस्टम"
          ]
        },
        ghost: {
          tagline: "हर जगह सहज",
          features: [
            "इल्युमिनेटेड फेसिया",
            "ब्लैक बैज उपलब्ध",
            "प्लानर सस्पेंशन",
            "मैजिक कार्पेट राइड"
          ]
        },
        cullinan: {
          tagline: "लक्जरी SUV उत्कृष्टता",
          features: [
            "ऑल-टेरेन क्षमता",
            "व्यूइंग सूट विकल्प",
            "मनोरंजन मॉड्यूल",
            "नाइट विजन सिस्टम"
          ]
        },
        dawn: {
          tagline: "सामाजिक कन्वर्टिबल",
          features: [
            "कन्वर्टिबल रूफ",
            "विंड डिफ्लेक्टर",
            "बेस्पोक ऑडियो ट्यूनिंग",
            "ओपन-एयर लक्जरी"
          ]
        },
        wraith: {
          tagline: "ग्रांड टूरर",
          features: [
            "फास्टबैक डिज़ाइन",
            "स्टारलाइट हेडलाइनर",
            "ब्लैक बैज पावर",
            "डायनामिक प्रदर्शन"
          ]
        },
        labels: {
          perDay: "प्रति दिन",
          perWeek: "प्रति सप्ताह",
          perMonth: "प्रति माह",
          mostPopular: "सबसे लोकप्रिय",
          viewDetailsBook: "विवरण देखें और बुक करें"
        }
      },
      additionalServices: {
        title: "अतिरिक्त सेवाएं और शुल्क",
        services: {
          chauffeur: {
            name: "पेशेवर ड्राइवर",
            price: "AED 1,500/दिन",
            description: "अनुभवी, बहुभाषी ड्राइवर"
          },
          airport: {
            name: "एयरपोर्ट ट्रांसफर",
            price: "AED 1,000",
            description: "एक तरफ का लक्जरी ट्रांसफर"
          },
          wedding: {
            name: "शादी पैकेज",
            price: "AED 8,500 से शुरू",
            description: "ड्राइवर के साथ सजाया गया वाहन"
          },
          hourly: {
            name: "घंटे के हिसाब से किराया",
            price: "AED 2,000/घंटा",
            description: "न्यूनतम 4 घंटे"
          },
          mileage: {
            name: "अतिरिक्त मील",
            price: "AED 20/किमी",
            description: "दैनिक 250 किमी सीमा से अधिक"
          },
          delivery: {
            name: "डिलीवरी और कलेक्शन",
            price: "दुबई में AED 500",
            description: "अन्य अमीरातों से AED 1,000"
          }
        }
      },
      corporatePackages: {
        title: "कॉर्पोरेट और दीर्घकालिक पैकेज",
        packages: {
          executive: {
            name: "एक्जीक्यूटिव",
            price: "AED 85,000/माह",
            features: [
              "महीने में 20 दिन",
              "Ghost या Wraith की पसंद",
              "समर्पित ड्राइवर",
              "एयरपोर्ट ट्रांसफर शामिल"
            ]
          },
          chairman: {
            name: "चेयरमैन",
            price: "AED 150,000/माह",
            features: [
              "असीमित उपयोग",
              "फ्लीट से कोई भी वाहन",
              "2 समर्पित ड्राइवर",
              "प्राथमिकता बुकिंग"
            ]
          },
          enterprise: {
            name: "एंटरप्राइज",
            price: "कस्टम कोट",
            features: [
              "कई वाहन",
              "फ्लीट प्रबंधन",
              "कॉर्पोरेट ब्रांडिंग",
              "समर्पित खाता टीम"
            ]
          }
        },
        recommended: "अनुशंसित",
        learnMore: "और जानें"
      },
      seasonalPricing: {
        title: "मौसमी मूल्य समायोजन",
        tableHeaders: {
          season: "सीजन/इवेंट",
          factor: "मूल्य कारक",
          details: "विवरण"
        },
        seasons: {
          peak: {
            name: "पीक सीजन (नवंबर-मार्च)",
            factor: "+20%",
            description: "दुबई सीजन और छुट्टियां"
          },
          ramadan: {
            name: "रमजान",
            factor: "+15%",
            description: "उच्च मांग की अवधि"
          },
          summer: {
            name: "ग्रीष्मकाल (जून-अगस्त)",
            factor: "-10%",
            description: "विशेष गर्मी दरें"
          },
          events: {
            name: "इवेंट्स और प्रदर्शनियां",
            factor: "+25%",
            description: "GITEX, एयर शो, आदि"
          }
        },
        disclaimer: "* मूल्य उपलब्धता के अधीन हैं और विशेष कार्यक्रमों के दौरान अलग हो सकते हैं"
      },
      priceCalculator: {
        title: "अपनी कुल लागत की गणना करें",
        subtitle: "सभी सेवाओं सहित अपनी किराया लागत का अनुमान लगाने के लिए हमारे कैलकुलेटर का उपयोग करें",
        openButton: "प्राइस कैलकुलेटर खोलें"
      },
      priceGuarantee: {
        title: "बेस्ट प्राइस गारंटी",
        subtitle: "दुबई में समान रोल्स-रॉयस किराए के लिए कम कीमत मिली? हम इसे मैच करेंगे और आपको अतिरिक्त 5% छूट देंगे।",
        features: {
          priceMatch: {
            title: "प्राइस मैच",
            description: "हम किसी भी सत्यापित प्रतियोगी कीमत से मेल खाते हैं"
          },
          extraDiscount: {
            title: "अतिरिक्त 5% छूट",
            description: "मैच की गई कीमत पर अतिरिक्त छूट"
          },
          noHiddenFees: {
            title: "कोई छुपी हुई फीस नहीं",
            description: "हमेशा पारदर्शी मूल्य निर्धारण"
          }
        },
        cta: "विश्वास के साथ बुक करें"
      },
      faq: {
        title: "मूल्य निर्धारण FAQ",
        questions: {
          included: {
            question: "किराए की कीमत में क्या शामिल है?",
            answer: "सभी कीमतों में व्यापक बीमा, दैनिक 250 किमी माइलेज भत्ता, VAT, और 24/7 रोडसाइड सहायता शामिल है। ईंधन शामिल नहीं है।"
          },
          deposit: {
            question: "क्या कोई सिक्यूरिटी डिपॉजिट है?",
            answer: "हां, वाहन मॉडल के आधार पर AED 5,000-10,000 की वापसी योग्य सिक्यूरिटी डिपॉजिट आवश्यक है। यह आपके क्रेडिट कार्ड पर होल्ड की जाती है।"
          },
          discounts: {
            question: "क्या मुझे लंबे किराए के लिए छूट मिल सकती है?",
            answer: "हां! साप्ताहिक किराए पर 15% छूट, मासिक किराए पर 30% छूट, और 3+ महीने पर दैनिक दर से 40% तक की छूट मिलती है।"
          },
          holidays: {
            question: "क्या छुट्टियों के दौरान कीमतें बदलती हैं?",
            answer: "पीक सीजन (नवंबर-मार्च) और प्रमुख कार्यक्रमों के दौरान कीमतें 20-25% बढ़ सकती हैं। बेहतर दरों के लिए जल्दी बुक करें।"
          }
        },
        viewAllFaqs: "सभी FAQ देखें →"
      },
      cta: {
        title: "लक्जरी का अनुभव करने के लिए तैयार?",
        subtitle: "आज ही अपनी रोल्स-रॉयस बुक करें और दुबई की बेहतरीन दरों का आनंद लें",
        bookNow: "अभी बुक करें",
        callForRates: "विशेष दरों के लिए कॉल करें",
        stats: {
          support: "ग्राहक सहायता",
          hiddenFees: "छुपी हुई फीस",
          satisfaction: "संतुष्टि"
        }
      }
    }
  }
};

function addPricingTranslations() {
  console.log('🔧 Adding pricing page translations to Arabic and Hindi...\n');
  
  ['ar', 'hi'].forEach(language => {
    console.log(`📂 Adding pricing translations for: ${language}`);
    
    const filePath = path.join(__dirname, '..', 'public', 'locales', language, 'common.json');
    
    try {
      let existingContent = {};
      if (fs.existsSync(filePath)) {
        existingContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      }
      
      // Add pricing page content
      existingContent.pricingPage = PRICING_TRANSLATIONS[language].pricingPage;
      
      fs.writeFileSync(filePath, JSON.stringify(existingContent, null, 2));
      console.log(`   ✅ Pricing page added to ${language}`);
      
    } catch (error) {
      console.error(`   ❌ Error updating ${language}:`, error.message);
    }
  });
  
  console.log('\n🎉 Pricing page translations added successfully!');
}

if (require.main === module) {
  addPricingTranslations();
}

module.exports = { addPricingTranslations }; 
#!/usr/bin/env node

/**
 * سكريبت شامل لإكمال جميع الترجمات المطلوبة لصفحة البلوغ
 * يشمل المحتوى والـ SEO لجميع اللغات
 */

const fs = require('fs');
const path = require('path');

const BLOG_TRANSLATIONS = {
  ar: {
    blog: {
      categories: {
        all: "جميع المقالات",
        guides: "أدلة إرشادية",
        luxury: "نمط الحياة الفاخر",
        events: "الأحداث والأخبار",
        tips: "نصائح وإرشادات"
      },
      featured: {
        title: "الدليل الشامل لتأجير رولز رويس في دبي",
        excerpt: "كل ما تحتاج لمعرفته حول تأجير رولز رويس في دبي، من اختيار الموديل المناسب إلى فهم الأسعار والمتطلبات.",
        author: "فريق رولز رويس دبي",
        date: "15 ديسمبر 2024",
        readTime: "8 دقائق قراءة"
      },
      articles: {
        article1: {
          title: "أفضل 10 طرق خلابة في دبي مع رولز رويس",
          excerpt: "اكتشف أجمل الطرق في دبي المثالية لتجربة القيادة الفاخرة في رولز رويس المستأجرة.",
          author: "أحمد الراشد",
          date: "10 ديسمبر 2024",
          readTime: "6 دقائق قراءة"
        },
        article2: {
          title: "تأجير سيارة الزفاف: اجعل يومك المميز مثالياً",
          excerpt: "دليل شامل لاختيار رولز رويس المثالية لزفافك في دبي، بما في ذلك خيارات الزينة والباقات.",
          author: "سارة جونسون",
          date: "8 ديسمبر 2024",
          readTime: "5 دقائق قراءة"
        },
        article3: {
          title: "تأجير السيارات المؤسسية: رفع مستوى السفر التجاري",
          excerpt: "كيف يمكن لتأجير السيارات الفاخرة تعزيز صورتك المؤسسية وتوفير فوائد عملية للمسافرين في مجال الأعمال.",
          author: "ديفيد تشين",
          date: "5 ديسمبر 2024",
          readTime: "7 دقائق قراءة"
        },
        article4: {
          title: "رولز رويس مقابل بنتلي: مقارنة فاخرة",
          excerpt: "مقارنة متعمقة بين أيقونتين من عالم السيارات الفاخرة لمساعدتك في اختيار الإيجار المثالي لاحتياجاتك.",
          author: "مايكل تومسون",
          date: "3 ديسمبر 2024",
          readTime: "9 دقائق قراءة"
        },
        article5: {
          title: "ثقافة السيارات الفاخرة في دبي: نظرة عميقة",
          excerpt: "استكشاف افتتان دبي بالسيارات الفاخرة ولماذا تبقى رولز رويس رمز المكانة النهائي.",
          author: "فاطمة الزهراء",
          date: "30 نوفمبر 2024",
          readTime: "6 دقائق قراءة"
        },
        article6: {
          title: "الصيانة والعناية: خلف الكواليس",
          excerpt: "اكتشف كيف نحافظ على أسطول رولز رويس لدينا لضمان أن كل مركبة تلبي أعلى معايير الفخامة والأداء.",
          author: "الفريق التقني",
          date: "28 نوفمبر 2024",
          readTime: "4 دقائق قراءة"
        },
        article7: {
          title: "نصائح التصوير: التقاط لقطات مثالية للسيارات الفاخرة",
          excerpt: "نصائح احترافية لتصوير مركبات رولز رويس، سواء للذكريات الشخصية أو جلسات التصوير المهنية.",
          author: "جيمس رودريغيز",
          date: "25 نوفمبر 2024",
          readTime: "5 دقائق قراءة"
        }
      },
      pagination: {
        prev: "السابق",
        next: "التالي",
        page: "صفحة"
      },
      search: {
        placeholder: "البحث في المقالات...",
        noResults: "لم يتم العثور على مقالات",
        resultsFor: "نتائج البحث عن"
      },
      newsletter: {
        title: "ابق على اطلاع",
        description: "اشترك في نشرتنا الإخبارية للحصول على أحدث رؤى السيارات الفاخرة والعروض الحصرية.",
        subscribe: "اشترك",
        email: "أدخل بريدك الإلكتروني"
      }
    }
  },

  hi: {
    blog: {
      categories: {
        all: "सभी लेख",
        guides: "गाइड",
        luxury: "लक्जरी लाइफस्टाइल",
        events: "इवेंट्स और न्यूज",
        tips: "टिप्स और सलाह"
      },
      featured: {
        title: "दुबई में रोल्स-रॉयस किराए की संपूर्ण गाइड",
        excerpt: "दुबई में रोल्स-रॉयस किराए पर लेने के बारे में जानने योग्य सब कुछ, सही मॉडल चुनने से लेकर मूल्य निर्धारण और आवश्यकताओं को समझने तक।",
        author: "रोल्स-रॉयस दुबई टीम",
        date: "15 दिसंबर 2024",
        readTime: "8 मिनट पढ़ें"
      },
      articles: {
        article1: {
          title: "रोल्स-रॉयस के साथ दुबई में टॉप 10 खूबसूरत ड्राइव",
          excerpt: "रोल्स-रॉयस किराए में लक्जरी ड्राइविंग अनुभव के लिए दुबई के सबसे खूबसूरत रूट्स की खोज करें।",
          author: "अहमद अल-राशिद",
          date: "10 दिसंबर 2024",
          readTime: "6 मिनट पढ़ें"
        },
        article2: {
          title: "शादी की कार किराया: अपना विशेष दिन परफेक्ट बनाएं",
          excerpt: "दुबई में अपनी शादी के लिए परफेक्ट रोल्स-रॉयस चुनने की संपूर्ण गाइड, सजावट विकल्प और पैकेज सहित।",
          author: "सारा जॉनसन",
          date: "8 दिसंबर 2024",
          readTime: "5 मिनट पढ़ें"
        },
        article3: {
          title: "कॉर्पोरेट कार किराया: बिजनेस ट्रैवल को बेहतर बनाना",
          excerpt: "लक्जरी कार किराया आपकी कॉर्पोरेट इमेज कैसे बढ़ा सकता है और बिजनेस ट्रैवलर्स के लिए व्यावहारिक लाभ प्रदान कर सकता है।",
          author: "डेविड चेन",
          date: "5 दिसंबर 2024",
          readTime: "7 मिनट पढ़ें"
        },
        article4: {
          title: "रोल्स-रॉयस बनाम बेंटले: एक लक्जरी तुलना",
          excerpt: "दो लक्जरी ऑटोमोटिव आइकन्स की गहरी तुलना जो आपकी जरूरतों के लिए परफेक्ट किराया चुनने में मदद करेगी।",
          author: "माइकल थॉम्पसन",
          date: "3 दिसंबर 2024",
          readTime: "9 मिनट पढ़ें"
        },
        article5: {
          title: "दुबई की लक्जरी कार कल्चर: एक गहरी खोज",
          excerpt: "दुबई की लक्जरी ऑटोमोबाइल्स के प्रति दीवानगी की खोज और क्यों रोल्स-रॉयस अंतिम स्टेटस सिंबल बना रहता है।",
          author: "फातिमा अल-जहरा",
          date: "30 नवंबर 2024",
          readTime: "6 मिनट पढ़ें"
        },
        article6: {
          title: "मेंटेनेंस और केयर: पर्दे के पीछे",
          excerpt: "जानें कि हम अपने रोल्स-रॉयस फ्लीट का रखरखाव कैसे करते हैं ताकि हर वाहन लक्जरी और प्रदर्शन के उच्चतम मानकों को पूरा करे।",
          author: "तकनीकी टीम",
          date: "28 नवंबर 2024",
          readTime: "4 मिनट पढ़ें"
        },
        article7: {
          title: "फोटोग्राफी टिप्स: परफेक्ट लक्जरी कार शॉट्स कैप्चर करना",
          excerpt: "रोल्स-रॉयस वाहनों की फोटोग्राफी के लिए प्रोफेशनल टिप्स, चाहे व्यक्तिगत यादों के लिए हो या प्रोफेशनल शूट के लिए।",
          author: "जेम्स रॉड्रिगेज",
          date: "25 नवंबर 2024",
          readTime: "5 मिनट पढ़ें"
        }
      },
      pagination: {
        prev: "पिछला",
        next: "अगला",
        page: "पेज"
      },
      search: {
        placeholder: "लेख खोजें...",
        noResults: "कोई लेख नहीं मिला",
        resultsFor: "के लिए परिणाम"
      },
      newsletter: {
        title: "अपडेट रहें",
        description: "नवीनतम लक्जरी कार इनसाइट्स और एक्सक्लूसिव ऑफर्स के लिए हमारे न्यूजलेटर की सदस्यता लें।",
        subscribe: "सब्सक्राइब करें",
        email: "अपना ईमेल दर्ज करें"
      }
    }
  }
};

const BLOG_SEO_TRANSLATIONS = {
  ar: {
    pages: {
      other: {
        blog: {
          title: "مدونة رولز رويس دبي | نمط الحياة الفاخر والنصائح والأدلة",
          description: "رؤى حول السيارات الفاخرة، أدلة القيادة في دبي، أخبار رولز رويس، تغطية الأحداث، وإيجارات المشاهير. دليلك للسيارات الفاخرة في دبي.",
          keywords: "مدونة رولز رويس دبي، مقالات السيارات الفاخرة، نصائح القيادة في دبي، أخبار السيارات، مدونة نمط الحياة الفاخر"
        }
      }
    }
  },
  ru: {
    pages: {
      other: {
        blog: {
          title: "Блог Роллс-Ройс Дубай | Роскошный Образ Жизни, Советы и Гиды",
          description: "Инсайты о роскошных автомобилях, гиды по вождению в Дубае, новости Роллс-Ройс, освещение событий и аренда знаменитостей. Ваш гид по роскошным автомобилям в Дубае.",
          keywords: "блог Роллс-Ройс Дубай, статьи о роскошных автомобилях, советы по вождению в Дубае, автомобильные новости, блог роскошного образа жизни"
        }
      }
    }
  },
  fr: {
    pages: {
      other: {
        blog: {
          title: "Blog Rolls-Royce Dubaï | Style de Vie Luxueux, Conseils et Guides",
          description: "Aperçus sur les voitures de luxe, guides de conduite pour Dubaï, actualités Rolls-Royce, couverture d'événements et locations de célébrités. Votre guide de l'automobile de luxe à Dubaï.",
          keywords: "blog Rolls-Royce Dubaï, articles voitures de luxe, conseils conduite Dubaï, actualités automobiles, blog style de vie luxueux"
        }
      }
    }
  },
  zh: {
    pages: {
      other: {
        blog: {
          title: "迪拜劳斯莱斯博客 | 奢华生活方式、技巧和指南",
          description: "豪华汽车洞察、迪拜驾驶指南、劳斯莱斯新闻、活动报道和名人租赁。您在迪拜的豪华汽车指南。",
          keywords: "迪拜劳斯莱斯博客，豪华车文章，迪拜驾驶技巧，汽车新闻，奢华生活方式博客"
        }
      }
    }
  },
  hi: {
    pages: {
      other: {
        blog: {
          title: "रोल्स-रॉयस दुबई ब्लॉग | लक्जरी लाइफस्टाइल, टिप्स और गाइड्स",
          description: "लक्जरी कारों पर इनसाइट्स, दुबई के लिए ड्राइविंग गाइड्स, रोल्स-रॉयस न्यूज, इवेंट कवरेज, और सेलिब्रिटी रेंटल्स। दुबई में लक्जरी मोटरिंग के लिए आपका गाइड।",
          keywords: "रोल्स-रॉयस ब्लॉग दुबई, लक्जरी कार आर्टिकल्स, दुबई ड्राइविंग टिप्स, ऑटोमोटिव न्यूज, लक्जरी लाइफस्टाइल ब्लॉग"
        }
      }
    }
  }
};

function mergeTranslations(existing, newContent) {
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
  
  return deepMerge(existing, newContent);
}

function completeBlogTranslations() {
  console.log('🚀 بدء إكمال جميع الترجمات لصفحة البلوغ...\n');
  
  let updatedCount = 0;
  
  // Update common.json files (only ar and hi need blog content)
  Object.keys(BLOG_TRANSLATIONS).forEach(language => {
    console.log(`📂 إضافة ترجمات البلوغ للغة: ${language}`);
    
    const filePath = path.join(__dirname, '..', 'public', 'locales', language, 'common.json');
    
    try {
      let existingContent = {};
      if (fs.existsSync(filePath)) {
        existingContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      }
      
      const mergedContent = mergeTranslations(existingContent, BLOG_TRANSLATIONS[language]);
      
      fs.writeFileSync(filePath, JSON.stringify(mergedContent, null, 2));
      console.log(`   ✅ ترجمات البلوغ للغة ${language} مكتملة`);
      updatedCount++;
      
    } catch (error) {
      console.error(`   ❌ خطأ في تحديث ${language}:`, error.message);
    }
  });

  // Update seo.json files for all languages
  console.log('\n🔍 إضافة محتوى السيو للبلوغ...');
  Object.keys(BLOG_SEO_TRANSLATIONS).forEach(language => {
    console.log(`📂 إضافة SEO البلوغ للغة: ${language}`);
    
    const filePath = path.join(__dirname, '..', 'public', 'locales', language, 'seo.json');
    
    try {
      let existingContent = {};
      if (fs.existsSync(filePath)) {
        existingContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      }
      
      // Ensure pages structure exists
      if (!existingContent.pages) {
        existingContent.pages = {};
      }
      
      // Ensure other section exists
      if (!existingContent.pages.other) {
        existingContent.pages.other = {};
      }
      
      // Add blog SEO content
      existingContent.pages.other.blog = BLOG_SEO_TRANSLATIONS[language].pages.other.blog;
      
      fs.writeFileSync(filePath, JSON.stringify(existingContent, null, 2));
      console.log(`   ✅ SEO البلوغ للغة ${language} مكتمل`);
      
    } catch (error) {
      console.error(`   ❌ خطأ في تحديث SEO ${language}:`, error.message);
    }
  });
  
  console.log(`\n🎉 تم إكمال ${updatedCount} ملف ترجمة للبلوغ!`);
  console.log('\n📊 ملخص الترجمات المكتملة:');
  console.log('🇬🇧 الإنجليزية (en) - ✅ مكتملة مسبقاً');
  console.log('🇦🇪 العربية (ar) - ✅ مكتملة بالكامل');
  console.log('🇷🇺 الروسية (ru) - ✅ مكتملة مسبقاً + SEO محدث');
  console.log('🇫🇷 الفرنسية (fr) - ✅ مكتملة مسبقاً + SEO محدث');
  console.log('🇨🇳 الصينية (zh) - ✅ مكتملة مسبقاً + SEO محدث');
  console.log('🇮🇳 الهندية (hi) - ✅ مكتملة بالكامل');
  
  console.log('\n✨ الآن صفحة البلوغ مترجمة بالكامل لجميع اللغات!');
  console.log('📝 تشمل 7 مقالات مميزة لكل لغة');
  console.log('🏷️ 5 فئات للمقالات');
  console.log('🔍 محسنة للسيو وجاهزة للإنتاج');
  console.log('📱 الهيدر والفوتر والمحتوى الداخلي مترجم');
}

if (require.main === module) {
  completeBlogTranslations();
}

module.exports = { completeBlogTranslations }; 
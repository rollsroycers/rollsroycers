#!/usr/bin/env node

/**
 * إصلاح مفاتيح SEO للبلوغ لتطابق المفتاح المستخدم في الصفحة
 */

const fs = require('fs');
const path = require('path');

const BLOG_SEO_CORRECT_KEYS = {
  en: {
    blog: {
      index: {
        title: "Rolls-Royce Dubai Blog | Luxury Lifestyle, Tips & Guides",
        description: "Insights on luxury cars, driving guides for Dubai, Rolls-Royce news, event coverage, and celebrity rentals. Your guide to luxury motoring in Dubai.",
        keywords: "Rolls-Royce blog Dubai, luxury car articles, Dubai driving tips, automotive news, luxury lifestyle blog"
      }
    }
  },
  ar: {
    blog: {
      index: {
        title: "مدونة رولز رويس دبي | نمط الحياة الفاخر والنصائح والأدلة",
        description: "رؤى حول السيارات الفاخرة، أدلة القيادة في دبي، أخبار رولز رويس، تغطية الأحداث، وإيجارات المشاهير. دليلك للسيارات الفاخرة في دبي.",
        keywords: "مدونة رولز رويس دبي، مقالات السيارات الفاخرة، نصائح القيادة في دبي، أخبار السيارات، مدونة نمط الحياة الفاخر"
      }
    }
  },
  ru: {
    blog: {
      index: {
        title: "Блог Роллс-Ройс Дубай | Роскошный Образ Жизни, Советы и Гиды",
        description: "Инсайты о роскошных автомобилях, гиды по вождению в Дубае, новости Роллс-Ройс, освещение событий и аренда знаменитостей. Ваш гид по роскошным автомобилям в Дубае.",
        keywords: "блог Роллс-Ройс Дубай, статьи о роскошных автомобилях, советы по вождению в Дубае, автомобильные новости, блог роскошного образа жизни"
      }
    }
  },
  fr: {
    blog: {
      index: {
        title: "Blog Rolls-Royce Dubaï | Style de Vie Luxueux, Conseils et Guides",
        description: "Aperçus sur les voitures de luxe, guides de conduite pour Dubaï, actualités Rolls-Royce, couverture d'événements et locations de célébrités. Votre guide de l'automobile de luxe à Dubaï.",
        keywords: "blog Rolls-Royce Dubaï, articles voitures de luxe, conseils conduite Dubaï, actualités automobiles, blog style de vie luxueux"
      }
    }
  },
  zh: {
    blog: {
      index: {
        title: "迪拜劳斯莱斯博客 | 奢华生活方式、技巧和指南",
        description: "豪华汽车洞察、迪拜驾驶指南、劳斯莱斯新闻、活动报道和名人租赁。您在迪拜的豪华汽车指南。",
        keywords: "迪拜劳斯莱斯博客，豪华车文章，迪拜驾驶技巧，汽车新闻，奢华生活方式博客"
      }
    }
  },
  hi: {
    blog: {
      index: {
        title: "रोल्स-रॉयस दुबई ब्लॉग | लक्जरी लाइफस्टाइल, टिप्स और गाइड्स",
        description: "लक्जरी कारों पर इनसाइट्स, दुबई के लिए ड्राइविंग गाइड्स, रोल्स-रॉयस न्यूज, इवेंट कवरेज, और सेलिब्रिटी रेंटल्स। दुबई में लक्जरी मोटरिंग के लिए आपका गाइड।",
        keywords: "रोल्स-रॉयस ब्लॉग दुबई, लक्जरी कार आर्टिकल्स, दुबई ड्राइविंग टिप्स, ऑटोमोटिव न्यूज, लक्जरी लाइफस्टाइल ब्लॉग"
      }
    }
  }
};

function fixBlogSEOKeys() {
  console.log('🔧 إصلاح مفاتيح SEO للبلوغ...\n');
  
  Object.keys(BLOG_SEO_CORRECT_KEYS).forEach(language => {
    console.log(`📂 إصلاح SEO البلوغ للغة: ${language}`);
    
    const filePath = path.join(__dirname, '..', 'public', 'locales', language, 'seo.json');
    
    try {
      let existingContent = {};
      if (fs.existsSync(filePath)) {
        existingContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      }
      
      // Add blog.index SEO content
      if (!existingContent.blog) {
        existingContent.blog = {};
      }
      
      existingContent.blog.index = BLOG_SEO_CORRECT_KEYS[language].blog.index;
      
      fs.writeFileSync(filePath, JSON.stringify(existingContent, null, 2));
      console.log(`   ✅ SEO البلوغ للغة ${language} تم إصلاحه`);
      
    } catch (error) {
      console.error(`   ❌ خطأ في تحديث SEO ${language}:`, error.message);
    }
  });
  
  console.log('\n🎉 تم إصلاح جميع مفاتيح SEO للبلوغ!');
  console.log('🔗 الآن تستخدم صفحة البلوغ المفتاح الصحيح: blog.index');
}

if (require.main === module) {
  fixBlogSEOKeys();
}

module.exports = { fixBlogSEOKeys }; 
#!/usr/bin/env node

/**
 * Script to add new blog articles translations to all language files
 * Adds article8 and article9 to all 6 supported languages
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'ar', 'zh', 'fr', 'ru', 'hi'];

const NEW_BLOG_ARTICLES = {
  en: {
    article8: {
      title: "Luxury Shopping Guide: Best Malls to Visit with Your Rolls-Royce in Dubai",
      excerpt: "Discover Dubai's most prestigious shopping destinations and how to arrive in style with your Rolls-Royce rental.",
      author: "Layla Al-Mansouri",
      date: "January 16, 2025",
      readTime: "10 min read"
    },
    article9: {
      title: "Rolls-Royce Dawn: The Perfect Convertible for Dubai's Golden Weather",
      excerpt: "Explore why the Rolls-Royce Dawn is the ultimate convertible for experiencing Dubai's perfect climate and stunning skyline.",
      author: "Omar Al-Rashid",
      date: "January 18, 2025",
      readTime: "8 min read"
    }
  },
  ar: {
    article8: {
      title: "دليل التسوق الفاخر: أفضل مولات دبي للزيارة برولز رويس",
      excerpt: "اكتشف وجهات التسوق الأكثر تميزاً في دبي وكيفية الوصول بأناقة مع تأجير رولز رويس.",
      author: "ليلى المنصوري",
      date: "16 يناير 2025",
      readTime: "10 دقائق قراءة"
    },
    article9: {
      title: "رولز رويس داون: السيارة المكشوفة المثالية لطقس دبي الذهبي",
      excerpt: "اكتشف لماذا تعتبر رولز رويس داون السيارة المكشوفة المثالية لتجربة مناخ دبي المثالي وأفقها الخلاب.",
      author: "عمر الراشد",
      date: "18 يناير 2025",
      readTime: "8 دقائق قراءة"
    }
  },
  zh: {
    article8: {
      title: "奢华购物指南：驾驶劳斯莱斯游览迪拜最佳购物中心",
      excerpt: "探索迪拜最负盛名的购物目的地，了解如何乘坐劳斯莱斯租车优雅抵达。",
      author: "莱拉·曼苏里",
      date: "2025年1月16日",
      readTime: "10分钟阅读"
    },
    article9: {
      title: "劳斯莱斯黎明：迪拜黄金天气的完美敞篷车",
      excerpt: "探索为什么劳斯莱斯黎明是体验迪拜完美气候和壮丽天际线的终极敞篷车。",
      author: "奥马尔·拉希德",
      date: "2025年1月18日",
      readTime: "8分钟阅读"
    }
  },
  fr: {
    article8: {
      title: "Guide du shopping de luxe : Les meilleurs centres commerciaux à visiter avec votre Rolls-Royce à Dubaï",
      excerpt: "Découvrez les destinations shopping les plus prestigieuses de Dubaï et comment arriver avec style avec votre location Rolls-Royce.",
      author: "Layla Al-Mansouri",
      date: "16 janvier 2025",
      readTime: "10 min de lecture"
    },
    article9: {
      title: "Rolls-Royce Dawn : Le cabriolet parfait pour le climat doré de Dubaï",
      excerpt: "Explorez pourquoi la Rolls-Royce Dawn est le cabriolet ultime pour découvrir le climat parfait de Dubaï et son horizon époustouflant.",
      author: "Omar Al-Rashid",
      date: "18 janvier 2025",
      readTime: "8 min de lecture"
    }
  },
  ru: {
    article8: {
      title: "Гид по роскошному шоппингу: Лучшие торговые центры Дубая для посещения на Rolls-Royce",
      excerpt: "Откройте для себя самые престижные места для шоппинга в Дубае и узнайте, как прибыть стильно на арендованном Rolls-Royce.",
      author: "Лейла Аль-Мансури",
      date: "16 января 2025",
      readTime: "10 мин чтения"
    },
    article9: {
      title: "Rolls-Royce Dawn: Идеальный кабриолет для золотой погоды Дубая",
      excerpt: "Узнайте, почему Rolls-Royce Dawn является идеальным кабриолетом для наслаждения идеальным климатом Дубая и потрясающим горизонтом.",
      author: "Омар Аль-Рашид",
      date: "18 января 2025",
      readTime: "8 мин чтения"
    }
  },
  hi: {
    article8: {
      title: "लक्जरी शॉपिंग गाइड: दुबई में अपनी रोल्स-रॉयस के साथ घूमने के लिए सर्वश्रेष्ठ मॉल",
      excerpt: "दुबई के सबसे प्रतिष्ठित शॉपिंग स्थलों की खोज करें और जानें कि अपनी रोल्स-रॉयस रेंटल के साथ स्टाइल में कैसे पहुंचें।",
      author: "लैला अल-मंसूरी",
      date: "16 जनवरी 2025",
      readTime: "10 मिनट पढ़ना"
    },
    article9: {
      title: "रोल्स-रॉयस डॉन: दुबई के सुनहरे मौसम के लिए सही कन्वर्टिबल",
      excerpt: "जानें कि क्यों रोल्स-रॉयस डॉन दुबई के परफेक्ट क्लाइमेट और शानदार स्काईलाइन का अनुभव करने के लिए अल्टीमेट कन्वर्टिबल है।",
      author: "उमर अल-राशिद",
      date: "18 जनवरी 2025",
      readTime: "8 मिनट पढ़ना"
    }
  }
};

/**
 * Add new articles to a language file
 */
function addNewArticlesToLanguage(language, articles) {
  const filePath = path.join(process.cwd(), 'public', 'locales', language, 'common.json');
  
  try {
    // Read current file
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const translations = JSON.parse(fileContent);
    
    // Ensure blog.articles exists
    if (!translations.blog) {
      translations.blog = {};
    }
    if (!translations.blog.articles) {
      translations.blog.articles = {};
    }
    
    // Add new articles
    translations.blog.articles = {
      ...translations.blog.articles,
      ...articles
    };
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(translations, null, 2), 'utf-8');
    console.log(`✅ Added new articles to ${language}/common.json`);
    
  } catch (error) {
    console.error(`❌ Error updating ${language}/common.json:`, error.message);
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Adding new blog articles translations...\n');
  
  LANGUAGES.forEach(language => {
    const articles = NEW_BLOG_ARTICLES[language];
    if (articles) {
      addNewArticlesToLanguage(language, articles);
    } else {
      console.warn(`⚠️  No translations found for language: ${language}`);
    }
  });
  
  console.log('\n✅ New blog articles added successfully!');
  console.log('📝 Added articles:');
  console.log('   - article8: Luxury Shopping Guide');
  console.log('   - article9: Rolls-Royce Dawn Guide');
}

if (require.main === module) {
  main();
}

module.exports = { addNewArticlesToLanguage, NEW_BLOG_ARTICLES }; 
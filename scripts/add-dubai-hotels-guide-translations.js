const fs = require('fs');
const path = require('path');

// دالة للقراءة الآمنة لملف JSON
function readJSONFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return null;
  }
}

// دالة للكتابة الآمنة لملف JSON
function writeJSONFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Successfully updated ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error writing ${filePath}:`, error.message);
    return false;
  }
}

// ترجمات SEO للمقال
const hotelSEOTranslations = {
  'blog.dubai-luxury-hotels-guide.title': {
    en: 'Dubai\'s Most Luxurious Hotels: Arriving in Style with Rolls-Royce',
    ar: 'أفخم فنادق دبي: الوصول بأناقة مع رولز رويس',
    fr: 'Les Hôtels Les Plus Luxueux de Dubaï : Arriver avec Style en Rolls-Royce',
    ru: 'Самые Роскошные Отели Дубая: Прибытие с Шиком на Rolls-Royce',
    zh: '迪拜最豪华的酒店：乘坐劳斯莱斯优雅抵达',
    hi: 'दुबई के सबसे शानदार होटल: रोल्स-रॉयस के साथ शैली में पहुंचना'
  },
  'blog.dubai-luxury-hotels-guide.description': {
    en: 'Explore Dubai\'s finest 5-star hotels and resorts. Discover the perfect pairing of luxury accommodation with Rolls-Royce chauffeur services.',
    ar: 'استكشف أرقى فنادق ومنتجعات 5 نجوم في دبي. اكتشف التناغم المثالي بين الإقامة الفاخرة وخدمات سائق رولز رويس.',
    fr: 'Explorez les meilleurs hôtels et complexes 5 étoiles de Dubaï. Découvrez l\'association parfaite entre hébergement de luxe et services de chauffeur Rolls-Royce.',
    ru: 'Исследуйте лучшие 5-звездочные отели и курорты Дубая. Откройте для себя идеальное сочетание роскошного размещения с услугами шофера Rolls-Royce.',
    zh: '探索迪拜最好的五星级酒店和度假村。发现豪华住宿与劳斯莱斯司机服务的完美结合。',
    hi: 'दुबई के बेहतरीन 5-सितारा होटल और रिसॉर्ट्स का अन्वेषण करें। लक्जरी आवास और रोल्स-रॉयस चालक सेवाओं के परफेक्ट जोड़ी की खोज करें।'
  },
  'blog.dubai-luxury-hotels-guide.keywords': {
    en: 'Dubai luxury hotels, 5-star hotels Dubai, Rolls-Royce hotel transfer, Burj Al Arab, Atlantis The Palm, luxury accommodation Dubai, hotel chauffeur service',
    ar: 'فنادق دبي الفاخرة، فنادق 5 نجوم دبي، نقل رولز رويس للفنادق، برج العرب، أتلانتس النخلة، إقامة فاخرة دبي، خدمة سائق الفندق',
    fr: 'hôtels de luxe Dubaï, hôtels 5 étoiles Dubaï, transfert hôtel Rolls-Royce, Burj Al Arab, Atlantis The Palm, hébergement de luxe Dubaï, service de chauffeur hôtel',
    ru: 'роскошные отели Дубая, 5-звездочные отели Дубай, трансфер Rolls-Royce отель, Burj Al Arab, Atlantis The Palm, роскошное размещение Дубай, услуги шофера отеля',
    zh: '迪拜豪华酒店，迪拜五星级酒店，劳斯莱斯酒店接送，帆船酒店，亚特兰蒂斯棕榈岛，迪拜豪华住宿，酒店司机服务',
    hi: 'दुबई लक्जरी होटल, 5-सितारा होटल दुबई, रोल्स-रॉयस होटल ट्रांसफर, बुर्ज अल अरब, अटलांटिस द पाम, लक्जरी आवास दुबई, होटल चालक सेवा'
  }
};

// تحديث ملفات SEO
function updateSEOFiles() {
  const locales = ['en', 'ar', 'fr', 'ru', 'zh', 'hi'];
  
  locales.forEach(locale => {
    const seoFilePath = path.join(__dirname, '..', 'public', 'locales', locale, 'seo.json');
    const seoData = readJSONFile(seoFilePath) || {};
    
    // إضافة ترجمات SEO الجديدة
    Object.keys(hotelSEOTranslations).forEach(key => {
      if (hotelSEOTranslations[key][locale]) {
        seoData[key] = hotelSEOTranslations[key][locale];
      }
    });
    
    writeJSONFile(seoFilePath, seoData);
  });
}

// إضافة ترجمات صفحات للمحتوى
const hotelPageTranslations = {
  'hotels.burjalarab.title': {
    en: 'Burj Al Arab: The World\'s Most Luxurious Hotel',
    ar: 'برج العرب: أفخم فندق في العالم',
    fr: 'Burj Al Arab : L\'Hôtel Le Plus Luxueux du Monde',
    ru: 'Burj Al Arab: Самый Роскошный Отель в Мире',
    zh: '帆船酒店：世界上最豪华的酒店',
    hi: 'बुर्ज अल अरब: दुनिया का सबसे शानदार होटल'
  },
  'hotels.atlantis.title': {
    en: 'Atlantis, The Palm: Marine Paradise Luxury',
    ar: 'أتلانتس النخلة: جنة بحرية فاخرة',
    fr: 'Atlantis, The Palm : Paradis Marin de Luxe',
    ru: 'Atlantis, The Palm: Морской Рай Роскоши',
    zh: '亚特兰蒂斯棕榈岛：海洋天堂奢华',
    hi: 'अटलांटिस, द पाम: समुद्री स्वर्ग विलासिता'
  },
  'hotels.fourseasons.title': {
    en: 'Four Seasons Resort Dubai at Jumeirah Beach',
    ar: 'فور سيزونز دبي في شاطئ جميرا',
    fr: 'Four Seasons Resort Dubai à Jumeirah Beach',
    ru: 'Four Seasons Resort Dubai на Пляже Джумейра',
    zh: '迪拜朱美拉海滩四季度假村',
    hi: 'फोर सीज़न्स रिसॉर्ट दुबई जुमेराह बीच पर'
  },
  'hotels.armani.title': {
    en: 'Armani Hotel Dubai: Designer Luxury in Burj Khalifa',
    ar: 'فندق أرماني دبي: فخامة المصمم في برج خليفة',
    fr: 'Armani Hotel Dubai : Luxe Design dans Burj Khalifa',
    ru: 'Armani Hotel Dubai: Дизайнерская Роскошь в Burj Khalifa',
    zh: '迪拜阿玛尼酒店：哈利法塔的设计师奢华',
    hi: 'अरमानी होटल दुबई: बुर्ज खलीफा में डिज़ाइनर लक्जरी'
  },
  'hotels.bvlgari.title': {
    en: 'Bvlgari Resort Dubai: Italian Riviera in the Middle East',
    ar: 'منتجع بولغاري دبي: الريفيرا الإيطالية في الشرق الأوسط',
    fr: 'Bvlgari Resort Dubai : Riviera Italienne au Moyen-Orient',
    ru: 'Bvlgari Resort Dubai: Итальянская Ривьера на Ближнем Востоке',
    zh: '迪拜宝格丽度假村：中东的意大利里维埃拉',
    hi: 'बुल्गारी रिसॉर्ट दुबई: मध्य पूर्व में इतालवी रिवेरा'
  },
  'hotels.oneonly.title': {
    en: 'One&Only The Palm: Boutique Beach Resort Excellence',
    ar: 'ون آند أونلي النخلة: تميز منتجع الشاطئ البوتيكي',
    fr: 'One&Only The Palm : Excellence du Resort de Plage Boutique',
    ru: 'One&Only The Palm: Превосходство Бутик-Пляжного Курорта',
    zh: 'One&Only棕榈岛：精品海滩度假村卓越',
    hi: 'वन एंड ओनली द पाम: बुटीक बीच रिसॉर्ट उत्कृष्टता'
  },
  'hotels.mandarin.title': {
    en: 'Mandarin Oriental Jumeira: Contemporary Asian Luxury',
    ar: 'ماندارين أورينتال جميرا: الفخامة الآسيوية المعاصرة',
    fr: 'Mandarin Oriental Jumeira : Luxe Asiatique Contemporain',
    ru: 'Mandarin Oriental Jumeira: Современная Азиатская Роскошь',
    zh: '文华东方朱美拉：当代亚洲奢华',
    hi: 'मंदारिन ओरिएंटल जुमेरा: समकालीन एशियाई विलासिता'
  },
  'hotels.ritzcarlton.title': {
    en: 'The Ritz-Carlton, Dubai JBR: Beachfront Sophistication',
    ar: 'ريتز كارلتون دبي جي بي آر: الرقي على الشاطئ',
    fr: 'The Ritz-Carlton, Dubai JBR : Sophistication en Bord de Mer',
    ru: 'The Ritz-Carlton, Dubai JBR: Изысканность на Пляже',
    zh: '丽思卡尔顿迪拜JBR：海滨精致',
    hi: 'द रिट्ज़-कार्लटन, दुबई JBR: समुद्र तट परिष्कार'
  },
  'hotels.edition.title': {
    en: 'EDITION Dubai: Modern Luxury Redefined',
    ar: 'إيديشن دبي: إعادة تعريف الفخامة الحديثة',
    fr: 'EDITION Dubai : Luxe Moderne Redéfini',
    ru: 'EDITION Dubai: Современная Роскошь Переопределена',
    zh: 'EDITION迪拜：重新定义现代奢华',
    hi: 'EDITION दुबई: आधुनिक विलासिता पुनर्परिभाषित'
  },
  'hotels.palazzo.title': {
    en: 'Palazzo Versace Dubai: Fashion House Hospitality',
    ar: 'قصر فيرساتشي دبي: ضيافة دار الأزياء',
    fr: 'Palazzo Versace Dubai : Hospitalité de Maison de Mode',
    ru: 'Palazzo Versace Dubai: Гостеприимство Модного Дома',
    zh: '范思哲宫殿迪拜：时装屋款待',
    hi: 'पलाज़ो वर्साचे दुबई: फैशन हाउस आतिथ्य'
  },
  'hotels.packages.title': {
    en: 'Exclusive Hotel & Rolls-Royce Packages',
    ar: 'باقات حصرية للفنادق ورولز رويس',
    fr: 'Forfaits Exclusifs Hôtel & Rolls-Royce',
    ru: 'Эксклюзивные Пакеты Отель & Rolls-Royce',
    zh: '独家酒店与劳斯莱斯套餐',
    hi: 'विशेष होटल और रोल्स-रॉयस पैकेज'
  },
  'hotels.tips.title': {
    en: 'Insider Tips for Hotel & Rolls-Royce Experiences',
    ar: 'نصائح داخلية لتجارب الفنادق ورولز رويس',
    fr: 'Conseils d\'Initiés pour les Expériences Hôtel & Rolls-Royce',
    ru: 'Инсайдерские Советы для Отельных и Rolls-Royce Впечатлений',
    zh: '酒店与劳斯莱斯体验的内幕贴士',
    hi: 'होटल और रोल्स-रॉयस अनुभवों के लिए इनसाइडर टिप्स'
  },
  'hotels.seasonal.title': {
    en: 'Seasonal Hotel Experiences with Rolls-Royce',
    ar: 'تجارب الفنادق الموسمية مع رولز رويس',
    fr: 'Expériences Hôtelières Saisonnières avec Rolls-Royce',
    ru: 'Сезонные Отельные Впечатления с Rolls-Royce',
    zh: '劳斯莱斯的季节性酒店体验',
    hi: 'रोल्स-रॉयस के साथ मौसमी होटल अनुभव'
  }
};

// تحديث ملفات الصفحات
function updatePageTranslations() {
  const locales = ['en', 'ar', 'fr', 'ru', 'zh', 'hi'];
  
  locales.forEach(locale => {
    const pagesFilePath = path.join(__dirname, '..', 'public', 'locales', locale, 'pages.json');
    const pagesData = readJSONFile(pagesFilePath) || {};
    
    // إضافة ترجمات الصفحات الجديدة
    Object.keys(hotelPageTranslations).forEach(key => {
      if (hotelPageTranslations[key][locale]) {
        pagesData[key] = hotelPageTranslations[key][locale];
      }
    });
    
    writeJSONFile(pagesFilePath, pagesData);
  });
}

// تنفيذ التحديثات
console.log('🚀 Adding Dubai Luxury Hotels Guide translations...\n');

updateSEOFiles();
updatePageTranslations();

console.log('\n✨ Dubai Luxury Hotels Guide translations have been successfully added!');
console.log('📝 Updated files:');
console.log('  - SEO translations for all locales');
console.log('  - Page content translations for all locales');
console.log('\n🎉 The blog article is now fully translated and ready!');
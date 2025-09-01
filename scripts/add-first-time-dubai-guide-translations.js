const fs = require('fs');
const path = require('path');

// Helper function to read JSON file
function readJSON(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return {};
  }
}

// Helper function to write JSON file
function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✅ Updated ${filePath}`);
}

// Main function to add translations
function addFirstTimeDubaiGuideTranslations() {
  const languages = ['en', 'ar', 'fr', 'hi', 'ru', 'zh'];
  
  // SEO translations for each language
  const seoTranslations = {
    en: {
      title: "First Time in Dubai? Your Complete Luxury Car Guide 2025",
      description: "The ultimate guide for first-time visitors to Dubai exploring luxury car rentals. Everything you need to know about experiencing Dubai in a Rolls-Royce, from requirements to insider tips and must-visit destinations.",
      keywords: "first time Dubai, Dubai luxury guide, Rolls-Royce rental guide Dubai, Dubai visitor guide, luxury car rental Dubai beginners, Dubai tourism luxury cars, first Dubai trip, Dubai travel tips, luxury experience Dubai, Dubai car rental guide"
    },
    ar: {
      title: "زيارتك الأولى لدبي؟ دليلك الشامل لسيارات الفخامة 2025",
      description: "الدليل الشامل للزوار الجدد في دبي لاستكشاف تأجير السيارات الفاخرة. كل ما تحتاج معرفته عن تجربة دبي في رولز رويس، من المتطلبات إلى النصائح والوجهات التي يجب زيارتها.",
      keywords: "أول مرة في دبي، دليل دبي الفاخر، دليل تأجير رولز رويس دبي، دليل زوار دبي، تأجير سيارات فاخرة دبي للمبتدئين، السياحة في دبي سيارات فاخرة، أول رحلة دبي، نصائح السفر دبي، تجربة فاخرة دبي، دليل تأجير السيارات دبي"
    },
    fr: {
      title: "Première Fois à Dubaï? Votre Guide Complet des Voitures de Luxe 2025",
      description: "Le guide ultime pour les nouveaux visiteurs à Dubaï explorant la location de voitures de luxe. Tout ce que vous devez savoir sur l'expérience de Dubaï en Rolls-Royce, des exigences aux conseils d'initiés et destinations incontournables.",
      keywords: "première fois Dubaï, guide luxe Dubaï, guide location Rolls-Royce Dubaï, guide visiteurs Dubaï, location voitures luxe Dubaï débutants, tourisme Dubaï voitures luxe, premier voyage Dubaï, conseils voyage Dubaï, expérience luxe Dubaï, guide location voitures Dubaï"
    },
    hi: {
      title: "दुबई में पहली बार? आपका संपूर्ण लक्जरी कार गाइड 2025",
      description: "दुबई में पहली बार आने वाले आगंतुकों के लिए लक्जरी कार रेंटल की खोज करने का अंतिम गाइड। रोल्स-रॉयस में दुबई का अनुभव करने के बारे में सब कुछ, आवश्यकताओं से लेकर इनसाइडर टिप्स और अवश्य देखने योग्य स्थलों तक।",
      keywords: "पहली बार दुबई, दुबई लक्जरी गाइड, रोल्स-रॉयस रेंटल गाइड दुबई, दुबई विज़िटर गाइड, लक्जरी कार रेंटल दुबई शुरुआती, दुबई पर्यटन लक्जरी कारें, पहली दुबई यात्रा, दुबई यात्रा टिप्स, लक्जरी अनुभव दुबई, दुबई कार रेंटल गाइड"
    },
    ru: {
      title: "Впервые в Дубае? Ваш Полный Гид по Роскошным Автомобилям 2025",
      description: "Полное руководство для первых посетителей Дубая по аренде роскошных автомобилей. Все, что нужно знать об опыте Дубая на Rolls-Royce, от требований до инсайдерских советов и обязательных мест для посещения.",
      keywords: "впервые в Дубае, гид по роскоши Дубая, руководство по аренде Rolls-Royce Дубай, гид для посетителей Дубая, аренда роскошных авто Дубай для начинающих, туризм Дубай роскошные автомобили, первая поездка в Дубай, советы путешествия Дубай, роскошный опыт Дубай, руководство по аренде авто Дубай"
    },
    zh: {
      title: "第一次来迪拜？您的2025年豪华汽车完整指南",
      description: "为第一次来迪拜的游客探索豪华汽车租赁的终极指南。关于在劳斯莱斯中体验迪拜的一切，从要求到内部提示和必游目的地。",
      keywords: "第一次迪拜，迪拜豪华指南，劳斯莱斯租赁指南迪拜，迪拜游客指南，豪华汽车租赁迪拜初学者，迪拜旅游豪华汽车，第一次迪拜之旅，迪拜旅游提示，豪华体验迪拜，迪拜汽车租赁指南"
    }
  };

  // Blog article translations for common.json
  const blogTranslations = {
    en: {
      title: "First Time in Dubai? Your Complete Luxury Car Guide 2025",
      description: "The ultimate guide for first-time visitors to Dubai exploring luxury car rentals",
      readTime: "18 min read",
      category: "Guides",
      author: "Editorial Team",
      cta: {
        text: "Ready to begin your Dubai luxury adventure? Our expert team is ready to match you with the perfect Rolls-Royce for your first Dubai experience.",
        buttonText: "Start Your Dubai Journey"
      }
    },
    ar: {
      title: "زيارتك الأولى لدبي؟ دليلك الشامل لسيارات الفخامة 2025",
      description: "الدليل الشامل للزوار الجدد في دبي لاستكشاف تأجير السيارات الفاخرة",
      readTime: "18 دقيقة قراءة",
      category: "أدلة",
      author: "فريق التحرير",
      cta: {
        text: "هل أنت مستعد لبدء مغامرتك الفاخرة في دبي؟ فريق الخبراء لدينا جاهز لمطابقتك مع رولز رويس المثالية لتجربتك الأولى في دبي.",
        buttonText: "ابدأ رحلتك في دبي"
      }
    },
    fr: {
      title: "Première Fois à Dubaï? Votre Guide Complet des Voitures de Luxe 2025",
      description: "Le guide ultime pour les nouveaux visiteurs à Dubaï explorant la location de voitures de luxe",
      readTime: "18 min de lecture",
      category: "Guides",
      author: "Équipe Éditoriale",
      cta: {
        text: "Prêt à commencer votre aventure de luxe à Dubaï? Notre équipe d'experts est prête à vous associer à la Rolls-Royce parfaite pour votre première expérience à Dubaï.",
        buttonText: "Commencez Votre Voyage à Dubaï"
      }
    },
    hi: {
      title: "दुबई में पहली बार? आपका संपूर्ण लक्जरी कार गाइड 2025",
      description: "दुबई में पहली बार आने वाले आगंतुकों के लिए लक्जरी कार रेंटल की खोज करने का अंतिम गाइड",
      readTime: "18 मिनट पढ़ें",
      category: "गाइड्स",
      author: "संपादकीय टीम",
      cta: {
        text: "अपने दुबई लक्जरी एडवेंचर को शुरू करने के लिए तैयार हैं? हमारी विशेषज्ञ टीम आपके पहले दुबई अनुभव के लिए सही रोल्स-रॉयस से मैच करने के लिए तैयार है।",
        buttonText: "अपनी दुबई यात्रा शुरू करें"
      }
    },
    ru: {
      title: "Впервые в Дубае? Ваш Полный Гид по Роскошным Автомобилям 2025",
      description: "Полное руководство для первых посетителей Дубая по аренде роскошных автомобилей",
      readTime: "18 мин чтения",
      category: "Гиды",
      author: "Редакционная команда",
      cta: {
        text: "Готовы начать свое роскошное приключение в Дубае? Наша команда экспертов готова подобрать для вас идеальный Rolls-Royce для вашего первого опыта в Дубае.",
        buttonText: "Начните Ваше Путешествие в Дубай"
      }
    },
    zh: {
      title: "第一次来迪拜？您的2025年豪华汽车完整指南",
      description: "为第一次来迪拜的游客探索豪华汽车租赁的终极指南",
      readTime: "18分钟阅读",
      category: "指南",
      author: "编辑团队",
      cta: {
        text: "准备开始您的迪拜豪华冒险了吗？我们的专家团队已准备好为您的第一次迪拜体验匹配完美的劳斯莱斯。",
        buttonText: "开始您的迪拜之旅"
      }
    }
  };

  // Section headings translations
  const sectionHeadings = {
    en: {
      whyDubai: "Why Dubai is the Ultimate Luxury Car Destination",
      first48Hours: "Your First 48 Hours: Essential Dubai Experiences with a Rolls-Royce",
      drivingGuide: "First-Timer's Guide to Dubai Roads and Driving",
      culturalEtiquette: "Cultural Etiquette for Luxury Car Renters",
      mustVisit: "Must-Visit Destinations for Your Rolls-Royce Experience",
      diningDestinations: "Dining Destinations Worth the Drive",
      shopping: "Shopping in Style: Where to Park Your Rolls-Royce",
      weatherConsiderations: "Weather Considerations for Luxury Driving",
      photographySpots: "Photography Hotspots for Your Rolls-Royce",
      businessTravel: "Business Travel: Making an Impression",
      eveningEntertainment: "Evening Entertainment and Nightlife",
      dayTrips: "Day Trips from Dubai in Your Rolls-Royce",
      rentalPackages: "Understanding Rental Packages and Pricing",
      healthSafety: "Health and Safety Considerations",
      makingMemories: "Making Memories: Beyond the Drive",
      practicalTips: "Practical Tips for First-Time Luxury Renters",
      rollsRoyceDifference: "The Rolls-Royce Difference: Why It Matters",
      dubaiStory: "Your Dubai Story Starts Here"
    },
    ar: {
      whyDubai: "لماذا دبي هي الوجهة المثالية لسيارات الفخامة",
      first48Hours: "أول 48 ساعة لك: تجارب دبي الأساسية مع رولز رويس",
      drivingGuide: "دليل المبتدئين للطرق والقيادة في دبي",
      culturalEtiquette: "آداب الثقافة لمستأجري السيارات الفاخرة",
      mustVisit: "الوجهات التي يجب زيارتها لتجربة رولز رويس الخاصة بك",
      diningDestinations: "وجهات تناول الطعام التي تستحق القيادة",
      shopping: "التسوق بأناقة: أين تركن رولز رويس الخاصة بك",
      weatherConsiderations: "اعتبارات الطقس للقيادة الفاخرة",
      photographySpots: "أماكن التصوير لسيارة رولز رويس الخاصة بك",
      businessTravel: "السفر للأعمال: ترك انطباع قوي",
      eveningEntertainment: "الترفيه المسائي والحياة الليلية",
      dayTrips: "رحلات يومية من دبي في رولز رويس الخاصة بك",
      rentalPackages: "فهم باقات التأجير والأسعار",
      healthSafety: "اعتبارات الصحة والسلامة",
      makingMemories: "صنع الذكريات: ما وراء القيادة",
      practicalTips: "نصائح عملية لمستأجري الفخامة لأول مرة",
      rollsRoyceDifference: "فرق رولز رويس: لماذا يهم",
      dubaiStory: "قصتك في دبي تبدأ هنا"
    },
    fr: {
      whyDubai: "Pourquoi Dubaï est la Destination Ultime pour les Voitures de Luxe",
      first48Hours: "Vos Premières 48 Heures: Expériences Essentielles de Dubaï avec une Rolls-Royce",
      drivingGuide: "Guide du Débutant pour les Routes et la Conduite à Dubaï",
      culturalEtiquette: "Étiquette Culturelle pour les Locataires de Voitures de Luxe",
      mustVisit: "Destinations Incontournables pour Votre Expérience Rolls-Royce",
      diningDestinations: "Destinations Gastronomiques Qui Valent le Détour",
      shopping: "Shopping avec Style: Où Garer Votre Rolls-Royce",
      weatherConsiderations: "Considérations Météorologiques pour la Conduite de Luxe",
      photographySpots: "Spots Photo pour Votre Rolls-Royce",
      businessTravel: "Voyage d'Affaires: Faire une Impression",
      eveningEntertainment: "Divertissement du Soir et Vie Nocturne",
      dayTrips: "Excursions d'une Journée depuis Dubaï dans Votre Rolls-Royce",
      rentalPackages: "Comprendre les Forfaits de Location et les Prix",
      healthSafety: "Considérations de Santé et Sécurité",
      makingMemories: "Créer des Souvenirs: Au-delà de la Conduite",
      practicalTips: "Conseils Pratiques pour les Premiers Locataires de Luxe",
      rollsRoyceDifference: "La Différence Rolls-Royce: Pourquoi C'est Important",
      dubaiStory: "Votre Histoire de Dubaï Commence Ici"
    },
    hi: {
      whyDubai: "दुबई अंतिम लक्जरी कार गंतव्य क्यों है",
      first48Hours: "आपके पहले 48 घंटे: रोल्स-रॉयस के साथ आवश्यक दुबई अनुभव",
      drivingGuide: "दुबई सड़कों और ड्राइविंग के लिए शुरुआती गाइड",
      culturalEtiquette: "लक्जरी कार किराएदारों के लिए सांस्कृतिक शिष्टाचार",
      mustVisit: "आपके रोल्स-रॉयस अनुभव के लिए अवश्य देखने योग्य स्थल",
      diningDestinations: "ड्राइव के लायक डाइनिंग गंतव्य",
      shopping: "शैली में खरीदारी: अपनी रोल्स-रॉयस कहां पार्क करें",
      weatherConsiderations: "लक्जरी ड्राइविंग के लिए मौसम संबंधी विचार",
      photographySpots: "आपकी रोल्स-रॉयस के लिए फोटोग्राफी स्पॉट",
      businessTravel: "व्यापार यात्रा: एक प्रभाव बनाना",
      eveningEntertainment: "शाम का मनोरंजन और नाइटलाइफ़",
      dayTrips: "आपकी रोल्स-रॉयस में दुबई से दिन की यात्राएं",
      rentalPackages: "किराये के पैकेज और मूल्य निर्धारण को समझना",
      healthSafety: "स्वास्थ्य और सुरक्षा विचार",
      makingMemories: "यादें बनाना: ड्राइव से परे",
      practicalTips: "पहली बार लक्जरी किराएदारों के लिए व्यावहारिक सुझाव",
      rollsRoyceDifference: "रोल्स-रॉयस अंतर: यह क्यों मायने रखता है",
      dubaiStory: "आपकी दुबई कहानी यहां शुरू होती है"
    },
    ru: {
      whyDubai: "Почему Дубай - Идеальное Место для Роскошных Автомобилей",
      first48Hours: "Ваши Первые 48 Часов: Основные Впечатления от Дубая с Rolls-Royce",
      drivingGuide: "Руководство для Новичков по Дорогам и Вождению в Дубае",
      culturalEtiquette: "Культурный Этикет для Арендаторов Роскошных Автомобилей",
      mustVisit: "Обязательные Места для Вашего Опыта с Rolls-Royce",
      diningDestinations: "Рестораны, Достойные Поездки",
      shopping: "Шоппинг со Стилем: Где Припарковать Ваш Rolls-Royce",
      weatherConsiderations: "Погодные Условия для Роскошного Вождения",
      photographySpots: "Места для Фотосъемки с Вашим Rolls-Royce",
      businessTravel: "Деловые Поездки: Произвести Впечатление",
      eveningEntertainment: "Вечерние Развлечения и Ночная Жизнь",
      dayTrips: "Однодневные Поездки из Дубая на Вашем Rolls-Royce",
      rentalPackages: "Понимание Пакетов Аренды и Ценообразования",
      healthSafety: "Соображения Здоровья и Безопасности",
      makingMemories: "Создание Воспоминаний: За Пределами Вождения",
      practicalTips: "Практические Советы для Новичков в Аренде Роскоши",
      rollsRoyceDifference: "Разница Rolls-Royce: Почему Это Важно",
      dubaiStory: "Ваша История Дубая Начинается Здесь"
    },
    zh: {
      whyDubai: "为什么迪拜是终极豪华汽车目的地",
      first48Hours: "您的前48小时：劳斯莱斯必备迪拜体验",
      drivingGuide: "迪拜道路和驾驶初学者指南",
      culturalEtiquette: "豪华汽车租户的文化礼仪",
      mustVisit: "劳斯莱斯体验必游目的地",
      diningDestinations: "值得驾驶前往的餐饮目的地",
      shopping: "时尚购物：在哪里停放您的劳斯莱斯",
      weatherConsiderations: "豪华驾驶的天气考虑",
      photographySpots: "劳斯莱斯摄影热点",
      businessTravel: "商务旅行：留下深刻印象",
      eveningEntertainment: "晚间娱乐和夜生活",
      dayTrips: "驾驶劳斯莱斯从迪拜出发的一日游",
      rentalPackages: "了解租赁套餐和定价",
      healthSafety: "健康与安全考虑",
      makingMemories: "创造回忆：驾驶之外",
      practicalTips: "首次豪华租赁者的实用技巧",
      rollsRoyceDifference: "劳斯莱斯差异：为什么重要",
      dubaiStory: "您的迪拜故事从这里开始"
    }
  };

  // Process each language
  languages.forEach(lang => {
    // Update SEO file
    const seoFilePath = path.join(__dirname, '..', 'public', 'locales', lang, 'seo.json');
    const seoData = readJSON(seoFilePath);
    
    // Add blog-specific SEO entries
    seoData['blog.first-time-dubai-luxury-guide.title'] = seoTranslations[lang].title;
    seoData['blog.first-time-dubai-luxury-guide.description'] = seoTranslations[lang].description;
    seoData['blog.first-time-dubai-luxury-guide.keywords'] = seoTranslations[lang].keywords;
    
    writeJSON(seoFilePath, seoData);
    
    // Update common.json file
    const commonFilePath = path.join(__dirname, '..', 'public', 'locales', lang, 'common.json');
    const commonData = readJSON(commonFilePath);
    
    // Initialize blog structure if needed
    if (!commonData.blog) {
      commonData.blog = {};
    }
    if (!commonData.blog.articles) {
      commonData.blog.articles = {};
    }
    
    // Add blog article translations
    commonData.blog.articles['first-time-dubai-luxury-guide'] = {
      ...blogTranslations[lang],
      sections: sectionHeadings[lang]
    };
    
    writeJSON(commonFilePath, commonData);
  });
  
  console.log('\n✅ Successfully added translations for first-time-dubai-luxury-guide in all languages!');
  console.log('📝 Updated files:');
  console.log('   - SEO translations in all seo.json files');
  console.log('   - Blog content translations in all common.json files');
}

// Run the function
addFirstTimeDubaiGuideTranslations();
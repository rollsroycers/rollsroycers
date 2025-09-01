const fs = require('fs');
const path = require('path');

// Enhanced SEO content for Phantom page in all languages
const phantomSEOContent = {
  en: {
    title: "Rent Rolls-Royce Phantom Dubai 2025 | AED 5,800/Day | Best Luxury Car | #1 Rated Service",
    description: "Rent Rolls-Royce Phantom in Dubai from AED 5,800/day with professional chauffeur. 2025 Extended Wheelbase model, perfect for weddings, VIP transfers & corporate events. ⭐ 4.9/5 rating from 1,247 reviews. Free delivery, instant booking, 24/7 support. Experience the pinnacle of luxury - Book now!",
    keywords: [
      "rent rolls royce phantom dubai",
      "rolls royce phantom rental dubai price",
      "phantom rental dubai 2025",
      "luxury car rental dubai phantom",
      "phantom with driver dubai",
      "rolls royce phantom wedding car dubai",
      "phantom airport transfer dubai",
      "phantom corporate rental dubai",
      "vip phantom dubai",
      "phantom hourly rental dubai",
      "phantom extended wheelbase dubai",
      "best phantom rental dubai",
      "phantom chauffeur service dubai",
      "phantom day rental dubai",
      "phantom monthly rental dubai"
    ],
    aiKeywords: [
      "how much to rent rolls royce phantom dubai",
      "where to rent rolls royce phantom dubai",
      "best place to rent phantom dubai",
      "phantom rental cost dubai",
      "is rolls royce phantom worth renting",
      "phantom vs maybach rental dubai",
      "can tourists rent phantom dubai",
      "phantom rental requirements dubai",
      "phantom rental reviews dubai",
      "phantom availability dubai"
    ],
    longTailKeywords: [
      "rent white rolls royce phantom for wedding dubai marina",
      "book phantom with chauffeur downtown dubai",
      "phantom rental for photoshoot palm jumeirah",
      "corporate phantom rental business bay dubai",
      "phantom airport transfer dxb to burj khalifa",
      "luxury phantom rental dubai mall arrival",
      "phantom hourly rental jbr beach dubai",
      "monthly phantom rental difc dubai",
      "phantom for special events dubai opera",
      "vip phantom service atlantis dubai"
    ],
    voiceSearchOptimized: [
      "Hey Siri, where can I rent a Rolls-Royce Phantom in Dubai",
      "OK Google, how much does it cost to rent a Phantom in Dubai",
      "Alexa, find Rolls-Royce Phantom rental near me in Dubai",
      "What's the best Phantom rental service in Dubai",
      "Book Rolls-Royce Phantom with driver Dubai"
    ],
    schema: {
      breadcrumb: "Home > Fleet > Rolls-Royce Phantom",
      priceRange: "AED 5,800 - 116,000",
      availability: "InStock",
      rating: "4.9",
      reviewCount: "1247"
    }
  },
  ar: {
    title: "استئجار رولز رويس فانتوم دبي 2025 | 5,800 درهم/يوم | أفضل سيارة فاخرة | خدمة رقم 1",
    description: "استأجر رولز رويس فانتوم في دبي من 5,800 درهم/يوم مع سائق محترف. موديل 2025 بقاعدة عجلات ممتدة، مثالي للأعراس والنقل VIP والفعاليات المؤسسية. ⭐ تقييم 4.9/5 من 1,247 تقييم. توصيل مجاني، حجز فوري، دعم 24/7. اختبر قمة الفخامة - احجز الآن!",
    keywords: [
      "تأجير رولز رويس فانتوم دبي",
      "سعر ايجار رولز رويس فانتوم دبي",
      "فانتوم للإيجار دبي 2025",
      "تأجير سيارات فاخرة دبي فانتوم",
      "فانتوم مع سائق دبي",
      "رولز رويس فانتوم سيارة زفاف دبي",
      "نقل مطار فانتوم دبي",
      "تأجير فانتوم للشركات دبي",
      "فانتوم VIP دبي",
      "تأجير فانتوم بالساعة دبي",
      "فانتوم قاعدة عجلات ممتدة دبي",
      "أفضل تأجير فانتوم دبي",
      "خدمة سائق فانتوم دبي",
      "تأجير فانتوم يومي دبي",
      "تأجير فانتوم شهري دبي"
    ],
    aiKeywords: [
      "كم تكلفة استئجار رولز رويس فانتوم دبي",
      "أين يمكن استئجار رولز رويس فانتوم دبي",
      "أفضل مكان لاستئجار فانتوم دبي",
      "تكلفة إيجار فانتوم دبي",
      "هل يستحق استئجار رولز رويس فانتوم",
      "فانتوم مقابل مايباخ للإيجار دبي",
      "هل يمكن للسياح استئجار فانتوم دبي",
      "متطلبات تأجير فانتوم دبي",
      "تقييمات تأجير فانتوم دبي",
      "توفر فانتوم دبي"
    ]
  },
  fr: {
    title: "Location Rolls-Royce Phantom Dubaï 2025 | 5 800 AED/Jour | Meilleure Voiture de Luxe | Service N°1",
    description: "Louez une Rolls-Royce Phantom à Dubaï à partir de 5 800 AED/jour avec chauffeur professionnel. Modèle 2025 à empattement long, parfait pour mariages, transferts VIP et événements d'entreprise. ⭐ Note 4,9/5 sur 1 247 avis. Livraison gratuite, réservation instantanée, support 24/7. Vivez le summum du luxe - Réservez maintenant!",
    keywords: [
      "location rolls royce phantom dubai",
      "prix location rolls royce phantom dubai",
      "phantom location dubai 2025",
      "location voiture luxe dubai phantom",
      "phantom avec chauffeur dubai",
      "rolls royce phantom voiture mariage dubai",
      "transfert aéroport phantom dubai",
      "location phantom entreprise dubai",
      "phantom vip dubai",
      "location phantom heure dubai",
      "phantom empattement long dubai",
      "meilleure location phantom dubai",
      "service chauffeur phantom dubai",
      "location phantom journée dubai",
      "location phantom mensuelle dubai"
    ]
  },
  zh: {
    title: "迪拜租赁劳斯莱斯幻影 2025 | 5,800迪拉姆/天 | 最佳豪华车 | 第一服务",
    description: "在迪拜租赁劳斯莱斯幻影，每天5,800迪拉姆起，配专业司机。2025年加长轴距版，完美适合婚礼、VIP接送和企业活动。⭐ 1,247条评价中获4.9/5评分。免费送车、即时预订、24/7支持。体验奢华巅峰 - 立即预订！",
    keywords: [
      "迪拜租劳斯莱斯幻影",
      "迪拜劳斯莱斯幻影租赁价格",
      "迪拜幻影租赁2025",
      "迪拜豪华车租赁幻影",
      "迪拜幻影带司机",
      "迪拜劳斯莱斯幻影婚车",
      "迪拜幻影机场接送",
      "迪拜幻影企业租赁",
      "迪拜VIP幻影",
      "迪拜幻影小时租赁",
      "迪拜幻影加长轴距",
      "迪拜最佳幻影租赁",
      "迪拜幻影司机服务",
      "迪拜幻影日租",
      "迪拜幻影月租"
    ]
  },
  ru: {
    title: "Аренда Rolls-Royce Phantom Дубай 2025 | 5,800 AED/День | Лучший Люксовый Автомобиль | Сервис №1",
    description: "Арендуйте Rolls-Royce Phantom в Дубае от 5,800 AED/день с профессиональным водителем. Модель 2025 с удлиненной колесной базой, идеально для свадеб, VIP-трансферов и корпоративных мероприятий. ⭐ Рейтинг 4.9/5 из 1,247 отзывов. Бесплатная доставка, мгновенное бронирование, поддержка 24/7. Испытайте вершину роскоши - Забронируйте сейчас!",
    keywords: [
      "аренда rolls royce phantom дубай",
      "цена аренды rolls royce phantom дубай",
      "phantom аренда дубай 2025",
      "аренда люксовых авто дубай phantom",
      "phantom с водителем дубай",
      "rolls royce phantom свадебный автомобиль дубай",
      "трансфер аэропорт phantom дубай",
      "корпоративная аренда phantom дубай",
      "vip phantom дубай",
      "почасовая аренда phantom дубай",
      "phantom удлиненная база дубай",
      "лучшая аренда phantom дубай",
      "услуги шофера phantom дубай",
      "дневная аренда phantom дубай",
      "месячная аренда phantom дубай"
    ]
  },
  hi: {
    title: "दुबई में रोल्स-रॉयस फैंटम किराए पर लें 2025 | 5,800 AED/दिन | सर्वश्रेष्ठ लक्जरी कार | #1 सेवा",
    description: "दुबई में रोल्स-रॉयस फैंटम 5,800 AED/दिन से किराए पर लें, पेशेवर चालक के साथ। 2025 एक्सटेंडेड व्हीलबेस मॉडल, शादियों, VIP ट्रांसफर और कॉर्पोरेट कार्यक्रमों के लिए एकदम सही। ⭐ 1,247 समीक्षाओं से 4.9/5 रेटिंग। मुफ्त डिलीवरी, तत्काल बुकिंग, 24/7 समर्थन। विलासिता के शिखर का अनुभव करें - अभी बुक करें!",
    keywords: [
      "दुबई में रोल्स रॉयस फैंटम किराए पर",
      "दुबई रोल्स रॉयस फैंटम किराया मूल्य",
      "फैंटम किराया दुबई 2025",
      "दुबई लक्जरी कार किराया फैंटम",
      "ड्राइवर के साथ फैंटम दुबई",
      "रोल्स रॉयस फैंटम शादी की कार दुबई",
      "फैंटम एयरपोर्ट ट्रांसफर दुबई",
      "कॉर्पोरेट फैंटम किराया दुबई",
      "वीआईपी फैंटम दुबई",
      "फैंटम घंटे का किराया दुबई",
      "फैंटम विस्तारित व्हीलबेस दुबई",
      "सर्वश्रेष्ठ फैंटम किराया दुबई",
      "फैंटम चालक सेवा दुबई",
      "फैंटम दैनिक किराया दुबई",
      "फैंटम मासिक किराया दुबई"
    ]
  }
};

// Update SEO.json files for each language
function updateSEOFiles() {
  const localesDir = path.join(__dirname, '..', 'public', 'locales');
  
  Object.keys(phantomSEOContent).forEach(lang => {
    const seoFilePath = path.join(localesDir, lang, 'seo.json');
    
    try {
      // Read existing SEO file
      let seoData = {};
      if (fs.existsSync(seoFilePath)) {
        const fileContent = fs.readFileSync(seoFilePath, 'utf8');
        seoData = JSON.parse(fileContent);
      }
      
      // Ensure structure exists
      if (!seoData.pages) seoData.pages = {};
      if (!seoData.pages.fleet) seoData.pages.fleet = {};
      
      // Update Phantom page SEO data
      seoData.pages.fleet.phantom = {
        title: phantomSEOContent[lang].title,
        description: phantomSEOContent[lang].description,
        keywords: phantomSEOContent[lang].keywords.join(', '),
        aiKeywords: phantomSEOContent[lang].aiKeywords || [],
        longTailKeywords: phantomSEOContent[lang].longTailKeywords || [],
        voiceSearchOptimized: phantomSEOContent[lang].voiceSearchOptimized || [],
        schema: phantomSEOContent[lang].schema || {},
        og: {
          title: phantomSEOContent[lang].title,
          description: phantomSEOContent[lang].description,
          image: "https://www.rollsroycers.com/images/Rolls-royce-phantom.jpg",
          url: `https://www.rollsroycers.com/${lang}/fleet/phantom`
        },
        twitter: {
          card: "summary_large_image",
          title: phantomSEOContent[lang].title,
          description: phantomSEOContent[lang].description,
          image: "https://www.rollsroycers.com/images/Rolls-royce-phantom.jpg"
        }
      };
      
      // Write updated SEO file
      fs.writeFileSync(seoFilePath, JSON.stringify(seoData, null, 2), 'utf8');
      console.log(`✅ Updated SEO for ${lang}/seo.json`);
      
    } catch (error) {
      console.error(`❌ Error updating ${lang}/seo.json:`, error);
    }
  });
}

// Add enhanced content translations for fleet.json
const phantomFleetContent = {
  en: {
    name: "Rolls-Royce Phantom",
    tagline: "The Pinnacle of Luxury",
    description: "Experience automotive perfection with the flagship Rolls-Royce Phantom",
    longDescription: "The Rolls-Royce Phantom stands as the ultimate expression of luxury motoring. With its commanding presence, unparalleled craftsmanship, and revolutionary technology, the Phantom offers an experience that transcends mere transportation. Every journey becomes a celebration of success and refinement.",
    features: [
      {
        title: "Magic Carpet Ride",
        desc: "Revolutionary suspension system for otherworldly comfort",
        icon: "🎯"
      },
      {
        title: "Starlight Headliner",
        desc: "1,340 fiber optic lights create your personal night sky",
        icon: "✨"
      },
      {
        title: "The Gallery",
        desc: "Bespoke artwork space across the dashboard",
        icon: "🎨"
      },
      {
        title: "Whisper Quiet",
        desc: "World's quietest car with 130kg of sound insulation",
        icon: "🔇"
      },
      {
        title: "Extended Wheelbase",
        desc: "Ultimate rear passenger space and comfort",
        icon: "📏"
      },
      {
        title: "Bespoke Audio",
        desc: "18-speaker system tuned to perfection",
        icon: "🎵"
      },
      {
        title: "Champagne Cooler",
        desc: "Integrated cooling for your celebrations",
        icon: "🍾"
      },
      {
        title: "Privacy Suite",
        desc: "Electrochromatic glass for instant privacy",
        icon: "🔒"
      }
    ],
    specs: {
      engine: "6.75L V12 Twin-Turbo",
      power: "563 HP",
      torque: "900 Nm",
      acceleration: "0-100 km/h in 5.4s",
      topSpeed: "250 km/h",
      transmission: "8-Speed Automatic",
      seats: "5 Passengers",
      luggage: "548 Liters",
      fuelType: "Premium Petrol",
      wheelbase: "3,772mm (Extended)",
      length: "5,982mm",
      features: "Starlight, Gallery, Champagne Cooler"
    },
    whyChoose: {
      title: "Why Choose Phantom?",
      reasons: [
        "Unmatched presence and prestige",
        "Revolutionary comfort technology", 
        "Bespoke craftsmanship",
        "Perfect for special occasions",
        "Professional chauffeur included",
        "24/7 concierge support"
      ]
    },
    idealFor: [
      "Weddings & Celebrations",
      "Corporate Events",
      "Airport Transfers",
      "City Tours",
      "Photoshoots",
      "Special Occasions"
    ]
  },
  ar: {
    name: "رولز رويس فانتوم",
    tagline: "قمة الفخامة",
    description: "اختبر الكمال في عالم السيارات مع رولز رويس فانتوم الرائدة",
    longDescription: "تقف رولز رويس فانتوم كأقصى تعبير عن القيادة الفاخرة. مع حضورها المهيب وحرفيتها التي لا مثيل لها والتكنولوجيا الثورية، توفر فانتوم تجربة تتجاوز مجرد النقل. كل رحلة تصبح احتفالاً بالنجاح والرقي."
  },
  fr: {
    name: "Rolls-Royce Phantom",
    tagline: "Le Sommet du Luxe",
    description: "Découvrez la perfection automobile avec la Rolls-Royce Phantom phare",
    longDescription: "La Rolls-Royce Phantom est l'expression ultime de la conduite de luxe. Avec sa présence imposante, son savoir-faire inégalé et sa technologie révolutionnaire, la Phantom offre une expérience qui transcende le simple transport."
  },
  zh: {
    name: "劳斯莱斯幻影",
    tagline: "奢华的巅峰",
    description: "体验劳斯莱斯幻影旗舰车型的汽车完美",
    longDescription: "劳斯莱斯幻影是豪华驾驶的终极表达。凭借其威严的存在感、无与伦比的工艺和革命性的技术，幻影提供了超越单纯交通工具的体验。"
  },
  ru: {
    name: "Роллс-Ройс Фантом",
    tagline: "Вершина Роскоши",
    description: "Испытайте автомобильное совершенство с флагманским Rolls-Royce Phantom",
    longDescription: "Rolls-Royce Phantom является высшим выражением роскошного вождения. С его командным присутствием, непревзойденным мастерством и революционными технологиями."
  },
  hi: {
    name: "रोल्स-रॉयस फैंटम",
    tagline: "विलासिता का शिखर",
    description: "फ्लैगशिप रोल्स-रॉयस फैंटम के साथ ऑटोमोटिव पूर्णता का अनुभव करें",
    longDescription: "रोल्स-रॉयस फैंटम लक्जरी मोटरिंग की अंतिम अभिव्यक्ति के रूप में खड़ी है। अपनी कमांडिंग उपस्थिति, बेजोड़ शिल्प कौशल और क्रांतिकारी तकनीक के साथ।"
  }
};

// Update fleet.json files
function updateFleetFiles() {
  const localesDir = path.join(__dirname, '..', 'public', 'locales');
  
  Object.keys(phantomFleetContent).forEach(lang => {
    const fleetFilePath = path.join(localesDir, lang, 'fleet.json');
    
    try {
      let fleetData = {};
      if (fs.existsSync(fleetFilePath)) {
        const fileContent = fs.readFileSync(fleetFilePath, 'utf8');
        fleetData = JSON.parse(fileContent);
      }
      
      // Update Phantom fleet data
      if (!fleetData.phantom) fleetData.phantom = {};
      Object.assign(fleetData.phantom, phantomFleetContent[lang]);
      
      // Add common elements if not in translation
      if (!fleetData.phantom.features && lang !== 'en') {
        fleetData.phantom.features = phantomFleetContent.en.features;
      }
      if (!fleetData.phantom.specs && lang !== 'en') {
        fleetData.phantom.specs = phantomFleetContent.en.specs;
      }
      if (!fleetData.phantom.whyChoose && lang !== 'en') {
        fleetData.phantom.whyChoose = phantomFleetContent.en.whyChoose;
      }
      if (!fleetData.phantom.idealFor && lang !== 'en') {
        fleetData.phantom.idealFor = phantomFleetContent.en.idealFor;
      }
      
      // Write updated fleet file
      fs.writeFileSync(fleetFilePath, JSON.stringify(fleetData, null, 2), 'utf8');
      console.log(`✅ Updated fleet content for ${lang}/fleet.json`);
      
    } catch (error) {
      console.error(`❌ Error updating ${lang}/fleet.json:`, error);
    }
  });
}

// Run the updates
console.log('🚀 Starting Phantom SEO enhancement...\n');
updateSEOFiles();
updateFleetFiles();
console.log('\n✨ Phantom SEO enhancement completed!');
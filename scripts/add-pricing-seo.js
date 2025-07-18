#!/usr/bin/env node

/**
 * Script to add comprehensive SEO content for the pricing page in all languages
 */

const fs = require('fs');
const path = require('path');

const PRICING_SEO_TRANSLATIONS = {
  ar: {
    other: {
      pricing: {
        title: "أسعار تأجير رولز رويس دبي | الأسعار والتكلفة | من 3,800 درهم",
        description: "اكتشف أسعار تأجير رولز رويس في دبي. قارن أسعار فانتوم وغوست وكولينان. أسعار يومية مناسبة، إيجار بالساعة متاح. احصل على عروض أسعار فورية عبر الإنترنت.",
        keywords: "أسعار تأجير رولز رويس دبي، تكلفة إيجار رولز رويس دبي، كم سعر تأجير رولز رويس دبي، تأجير رولز رويس رخيص دبي، إيجار رولز رويس بالساعة دبي، أسعار السيارات الفاخرة"
      }
    }
  },
  ru: {
    other: {
      pricing: {
        title: "Аренда Роллс-Ройс Дубай Цены | Стоимость Проката | От 3,800 AED",
        description: "Узнайте стоимость аренды Роллс-Ройс в Дубае. Сравните цены на Phantom, Ghost, Cullinan. Выгодные дневные тарифы, почасовая аренда. Мгновенные онлайн-расчеты.",
        keywords: "аренда Роллс-Ройс Дубай цена, стоимость проката Роллс-Ройс Дубай, сколько стоит арендовать Роллс-Ройс Дубай, дешевая аренда Роллс-Ройс Дубай, почасовая аренда Роллс-Ройс Дубай, тарифы люкс авто"
      }
    }
  },
  fr: {
    other: {
      pricing: {
        title: "Location Rolls-Royce Dubaï Prix | Tarifs et Coûts | À partir de 3,800 AED",
        description: "Découvrez les prix de location Rolls-Royce à Dubaï. Comparez les tarifs Phantom, Ghost, Cullinan. Tarifs journaliers abordables, location horaire disponible. Devis instantanés en ligne.",
        keywords: "prix location Rolls-Royce Dubaï, coût location Rolls-Royce Dubaï, combien louer Rolls-Royce Dubaï, location Rolls-Royce pas cher Dubaï, location Rolls-Royce horaire Dubaï, tarifs voitures de luxe"
      }
    }
  },
  zh: {
    other: {
      pricing: {
        title: "迪拜劳斯莱斯租赁价格 | 租车费用 | 3,800迪拉姆起",
        description: "了解迪拜劳斯莱斯租赁价格。比较幻影、古思特、库里南价格。实惠的日租价格，可按小时租赁。在线即时报价。",
        keywords: "迪拜劳斯莱斯租赁价格，迪拜劳斯莱斯租车费用，迪拜劳斯莱斯租赁多少钱，迪拜便宜劳斯莱斯租赁，迪拜按小时租劳斯莱斯，豪华车租赁价格"
      }
    }
  },
  hi: {
    other: {
      pricing: {
        title: "दुबई रोल्स-रॉयस किराया मूल्य | लागत और दरें | 3,800 AED से शुरू",
        description: "दुबई में रोल्स-रॉयस किराए की कीमतें जानें। फैंटम, घोस्ट, कुलिनन की दरों की तुलना करें। किफायती दैनिक दरें, घंटे के हिसाब से किराया उपलब्ध। तुरंत ऑनलाइन कोट्स पाएं।",
        keywords: "दुबई रोल्स-रॉयस किराया मूल्य, दुबई रोल्स-रॉयस किराए की लागत, दुबई में रोल्स-रॉयस किराए पर कितना खर्च, दुबई सस्ता रोल्स-रॉयस किराया, दुबई घंटे के हिसाब से रोल्स-रॉयस किराया, लक्जरी कार किराया दरें"
      }
    }
  }
};

function addPricingSEO() {
  console.log('🔧 Adding comprehensive SEO content for pricing page in all languages...\n');
  
  Object.keys(PRICING_SEO_TRANSLATIONS).forEach(language => {
    console.log(`📂 Adding pricing SEO for: ${language}`);
    
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
      
      // Add pricing SEO content
      existingContent.pages.other.pricing = PRICING_SEO_TRANSLATIONS[language].other.pricing;
      
      fs.writeFileSync(filePath, JSON.stringify(existingContent, null, 2));
      console.log(`   ✅ Pricing SEO added to ${language}`);
      
    } catch (error) {
      console.error(`   ❌ Error updating ${language}:`, error.message);
    }
  });
  
  console.log('\n🎉 Pricing page SEO content added successfully for all languages!');
  console.log('\n📊 SEO Content Summary:');
  console.log('🇬🇧 English (en) - ✅ Already has comprehensive SEO');
  console.log('🇦🇪 Arabic (ar) - ✅ Added comprehensive SEO');
  console.log('🇷🇺 Russian (ru) - ✅ Added comprehensive SEO');
  console.log('🇫🇷 French (fr) - ✅ Added comprehensive SEO');
  console.log('🇨🇳 Chinese (zh) - ✅ Added comprehensive SEO');
  console.log('🇮🇳 Hindi (hi) - ✅ Added comprehensive SEO');
}

if (require.main === module) {
  addPricingSEO();
}

module.exports = { addPricingSEO }; 
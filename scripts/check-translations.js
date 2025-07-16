#!/usr/bin/env node

/**
 * نص فحص اكتمال الترجمات
 * يقوم بفحص جميع ملفات الترجمة والعثور على المفاتيح المفقودة
 */

const fs = require('fs');
const path = require('path');

// قائمة اللغات المدعومة
const languages = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

// قائمة المفاتيح المطلوبة لـ SEO
const requiredSeoKeys = [
  // الصفحة الرئيسية
  'pages.home.title',
  'pages.home.description',
  'pages.home.keywords',
  
  // صفحات الأسطول
  'pages.fleet.phantom.title',
  'pages.fleet.phantom.description',
  'pages.fleet.phantom.keywords',
  'pages.fleet.ghost.title',
  'pages.fleet.ghost.description',
  'pages.fleet.ghost.keywords',
  'pages.fleet.cullinan.title',
  'pages.fleet.cullinan.description',
  'pages.fleet.cullinan.keywords',
  'pages.fleet.dawn.title',
  'pages.fleet.dawn.description',
  'pages.fleet.dawn.keywords',
  'pages.fleet.wraith.title',
  'pages.fleet.wraith.description',
  'pages.fleet.wraith.keywords',
  
  // صفحات الخدمات
  'pages.services.wedding.title',
  'pages.services.wedding.description',
  'pages.services.wedding.keywords',
  'pages.services.chauffeur.title',
  'pages.services.chauffeur.description',
  'pages.services.chauffeur.keywords',
  'pages.services.corporate.title',
  'pages.services.corporate.description',
  'pages.services.corporate.keywords',
  'pages.services.airport-transfer.title',
  'pages.services.airport-transfer.description',
  'pages.services.airport-transfer.keywords',
  'pages.services.tours.title',
  'pages.services.tours.description',
  'pages.services.tours.keywords',
  'pages.services.events.title',
  'pages.services.events.description',
  'pages.services.events.keywords',
  'pages.services.photoshoot.title',
  'pages.services.photoshoot.description',
  'pages.services.photoshoot.keywords',
  
  // صفحات المواقع
  'pages.locations.downtown-dubai.title',
  'pages.locations.downtown-dubai.description',
  'pages.locations.downtown-dubai.keywords',
  'pages.locations.dubai-marina.title',
  'pages.locations.dubai-marina.description',
  'pages.locations.dubai-marina.keywords',
  'pages.locations.palm-jumeirah.title',
  'pages.locations.palm-jumeirah.description',
  'pages.locations.palm-jumeirah.keywords',
  'pages.locations.business-bay.title',
  'pages.locations.business-bay.description',
  'pages.locations.business-bay.keywords',
  'pages.locations.jbr.title',
  'pages.locations.jbr.description',
  'pages.locations.jbr.keywords',
  'pages.locations.difc.title',
  'pages.locations.difc.description',
  'pages.locations.difc.keywords',
  
  // الصفحات الأخرى
  'pages.other.about.title',
  'pages.other.about.description',
  'pages.other.about.keywords',
  'pages.other.contact.title',
  'pages.other.contact.description',
  'pages.other.contact.keywords',
  'pages.other.gallery.title',
  'pages.other.gallery.description',
  'pages.other.gallery.keywords',
  'pages.other.booking.title',
  'pages.other.booking.description',
  'pages.other.booking.keywords',
  'pages.other.faq.title',
  'pages.other.faq.description',
  'pages.other.faq.keywords',
  'pages.other.pricing.title',
  'pages.other.pricing.description',
  'pages.other.pricing.keywords',
  'pages.other.testimonials.title',
  'pages.other.testimonials.description',
  'pages.other.testimonials.keywords',
  'pages.other.privacy.title',
  'pages.other.privacy.description',
  'pages.other.privacy.keywords',
  'pages.other.terms.title',
  'pages.other.terms.description',
  'pages.other.terms.keywords',
  'pages.other.blog.title',
  'pages.other.blog.description',
  'pages.other.blog.keywords',
  
  // صفحات المقارنة
  'pages.compare.rolls-royce-vs-bentley.title',
  'pages.compare.rolls-royce-vs-bentley.description',
  'pages.compare.rolls-royce-vs-bentley.keywords'
];

/**
 * يتحقق من وجود مفتاح في كائن متداخل
 */
function hasNestedKey(obj, keyPath) {
  const keys = keyPath.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return false;
    }
  }
  
  return current !== undefined && current !== null && current !== '';
}

/**
 * يحمل ملف JSON إذا كان موجوداً
 */
function loadJsonFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error(`خطأ في قراءة الملف ${filePath}:`, error.message);
  }
  return null;
}

/**
 * يفحص اكتمال الترجمات
 */
function checkTranslations() {
  console.log('🔍 فحص اكتمال الترجمات...\n');
  
  const results = {
    summary: {},
    missing: {},
    details: {}
  };
  
  languages.forEach(lang => {
    console.log(`📋 فحص اللغة: ${lang}`);
    
    const seoPath = path.join(__dirname, '..', 'public', 'locales', lang, 'seo.json');
    const commonPath = path.join(__dirname, '..', 'public', 'locales', lang, 'common.json');
    
    const seoData = loadJsonFile(seoPath);
    const commonData = loadJsonFile(commonPath);
    
    results.details[lang] = {
      seoExists: !!seoData,
      commonExists: !!commonData,
      missingSeoKeys: [],
      foundSeoKeys: []
    };
    
    if (seoData) {
      // فحص المفاتيح المطلوبة في ملف SEO
      requiredSeoKeys.forEach(key => {
        if (hasNestedKey(seoData, key)) {
          results.details[lang].foundSeoKeys.push(key);
        } else {
          results.details[lang].missingSeoKeys.push(key);
        }
      });
      
      const foundCount = results.details[lang].foundSeoKeys.length;
      const totalCount = requiredSeoKeys.length;
      const percentage = Math.round((foundCount / totalCount) * 100);
      
      results.summary[lang] = {
        completion: percentage,
        found: foundCount,
        missing: results.details[lang].missingSeoKeys.length,
        total: totalCount
      };
      
      console.log(`  ✓ SEO: ${foundCount}/${totalCount} (${percentage}%)`);
      
      if (results.details[lang].missingSeoKeys.length > 0) {
        console.log(`  ❌ مفاتيح مفقودة: ${results.details[lang].missingSeoKeys.length}`);
      }
    } else {
      console.log(`  ❌ ملف seo.json غير موجود`);
      results.summary[lang] = { completion: 0, found: 0, missing: requiredSeoKeys.length, total: requiredSeoKeys.length };
    }
    
    if (!commonData) {
      console.log(`  ❌ ملف common.json غير موجود`);
    }
    
    console.log('');
  });
  
  // طباعة التقرير النهائي
  console.log('📊 ملخص النتائج:\n');
  console.log('اللغة\t\tالاكتمال\tموجود\tمفقود\tالمجموع');
  console.log('─'.repeat(60));
  
  languages.forEach(lang => {
    const summary = results.summary[lang];
    console.log(`${lang}\t\t${summary.completion}%\t\t${summary.found}\t${summary.missing}\t${summary.total}`);
  });
  
  console.log('\n🎯 أولويات الإصلاح:');
  
  // ترتيب اللغات حسب نسبة الاكتمال
  const sortedLangs = languages.sort((a, b) => 
    results.summary[a].completion - results.summary[b].completion
  );
  
  sortedLangs.forEach((lang, index) => {
    const summary = results.summary[lang];
    if (summary.completion < 100) {
      console.log(`${index + 1}. ${lang}: يحتاج ${summary.missing} مفتاح (${100 - summary.completion}% مفقود)`);
    }
  });
  
  // حفظ التقرير التفصيلي
  const reportPath = path.join(__dirname, '..', 'translation-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 تم حفظ التقرير التفصيلي في: ${reportPath}`);
  
  return results;
}

/**
 * ينشئ قالب ملف ترجمة فارغ
 */
function createTranslationTemplate(lang) {
  const template = {
    pages: {
      home: {
        title: "",
        description: "",
        keywords: ""
      },
      fleet: {
        phantom: { title: "", description: "", keywords: "" },
        ghost: { title: "", description: "", keywords: "" },
        cullinan: { title: "", description: "", keywords: "" },
        dawn: { title: "", description: "", keywords: "" },
        wraith: { title: "", description: "", keywords: "" }
      },
      services: {
        wedding: { title: "", description: "", keywords: "" },
        chauffeur: { title: "", description: "", keywords: "" },
        corporate: { title: "", description: "", keywords: "" },
        "airport-transfer": { title: "", description: "", keywords: "" },
        tours: { title: "", description: "", keywords: "" },
        events: { title: "", description: "", keywords: "" },
        photoshoot: { title: "", description: "", keywords: "" }
      },
      locations: {
        "downtown-dubai": { title: "", description: "", keywords: "" },
        "dubai-marina": { title: "", description: "", keywords: "" },
        "palm-jumeirah": { title: "", description: "", keywords: "" },
        "business-bay": { title: "", description: "", keywords: "" },
        jbr: { title: "", description: "", keywords: "" },
        difc: { title: "", description: "", keywords: "" }
      },
      other: {
        about: { title: "", description: "", keywords: "" },
        contact: { title: "", description: "", keywords: "" },
        gallery: { title: "", description: "", keywords: "" },
        booking: { title: "", description: "", keywords: "" },
        faq: { title: "", description: "", keywords: "" },
        pricing: { title: "", description: "", keywords: "" },
        testimonials: { title: "", description: "", keywords: "" },
        privacy: { title: "", description: "", keywords: "" },
        terms: { title: "", description: "", keywords: "" },
        blog: { title: "", description: "", keywords: "" }
      },
      compare: {
        "rolls-royce-vs-bentley": { title: "", description: "", keywords: "" }
      }
    }
  };
  
  const filePath = path.join(__dirname, '..', 'public', 'locales', lang, 'seo.json');
  fs.writeFileSync(filePath, JSON.stringify(template, null, 2));
  console.log(`✅ تم إنشاء قالب ملف seo.json للغة ${lang}`);
}

// تشغيل الفحص
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--create-template')) {
    const lang = args[args.indexOf('--create-template') + 1];
    if (lang && languages.includes(lang)) {
      createTranslationTemplate(lang);
    } else {
      console.log('❌ يرجى تحديد لغة صحيحة:', languages.join(', '));
    }
  } else {
    checkTranslations();
  }
}

module.exports = { checkTranslations, createTranslationTemplate }; 
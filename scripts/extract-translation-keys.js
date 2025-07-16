#!/usr/bin/env node

/**
 * أداة شاملة لاستخراج جميع مفاتيح الترجمة من الكود ومقارنتها مع ملفات JSON
 * لتحديد المفاتيح المفقودة ومشاكل البنية
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * استخراج مفاتيح الترجمة من الكود
 */
function extractTranslationKeys() {
  const allKeys = new Set();
  const keysByFile = {};
  
  // البحث عن جميع ملفات TypeScript وJavaScript
  const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });
  
  files.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileKeys = [];
    
    // البحث عن أنماط مختلفة لاستخدام الترجمة
    const patterns = [
      // t('key')
      /t\(['"`]([^'"`]+)['"`]\)/g,
      // t("key")
      /t\(["']([^"']+)["']\)/g,
      // t(`key`)
      /t\(`([^`]+)`\)/g,
      // getTranslatedArray('key')
      /getTranslatedArray\(['"`]([^'"`]+)['"`]\)/g,
      // pageKey="key"
      /pageKey=['"`]([^'"`]+)['"`]/g
    ];
    
    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const key = match[1];
        allKeys.add(key);
        fileKeys.push(key);
      }
    });
    
    if (fileKeys.length > 0) {
      keysByFile[filePath] = fileKeys;
    }
  });
  
  return { allKeys: Array.from(allKeys), keysByFile };
}

/**
 * تحميل ملفات الترجمة الموجودة
 */
function loadExistingTranslations() {
  const translations = {};
  const localesPath = path.join(__dirname, '..', 'public', 'locales');
  
  if (!fs.existsSync(localesPath)) {
    return translations;
  }
  
  const languages = fs.readdirSync(localesPath);
  
  languages.forEach(lang => {
    const langPath = path.join(localesPath, lang);
    if (!fs.statSync(langPath).isDirectory()) return;
    
    translations[lang] = {};
    
    const files = fs.readdirSync(langPath);
    files.forEach(file => {
      if (file.endsWith('.json')) {
        const namespace = file.replace('.json', '');
        try {
          const content = fs.readFileSync(path.join(langPath, file), 'utf8');
          translations[lang][namespace] = JSON.parse(content);
        } catch (error) {
          console.error(`خطأ في قراءة ${file} للغة ${lang}:`, error.message);
        }
      }
    });
  });
  
  return translations;
}

/**
 * فحص وجود مفتاح في ملفات الترجمة
 */
function keyExists(translations, lang, key) {
  if (!translations[lang]) return false;
  
  const parts = key.split('.');
  let current = translations[lang];
  
  // فحص في جميع namespaces
  for (const namespace in current) {
    let obj = current[namespace];
    let found = true;
    
    for (const part of parts) {
      if (obj && obj[part] !== undefined) {
        obj = obj[part];
      } else {
        found = false;
        break;
      }
    }
    
    if (found && typeof obj === 'string') {
      return { namespace, value: obj };
    }
  }
  
  return false;
}

/**
 * تحليل المفاتيح المفقودة
 */
function analyzeMissingKeys(allKeys, translations) {
  const languages = Object.keys(translations);
  const missingKeys = {};
  const suggestions = {};
  
  languages.forEach(lang => {
    missingKeys[lang] = [];
    suggestions[lang] = {};
  });
  
  allKeys.forEach(key => {
    languages.forEach(lang => {
      const exists = keyExists(translations, lang, key);
      if (!exists) {
        missingKeys[lang].push(key);
        
        // اقتراحات للمفاتيح المشابهة
        const similarKeys = findSimilarKeys(key, translations[lang]);
        if (similarKeys.length > 0) {
          suggestions[lang][key] = similarKeys;
        }
      }
    });
  });
  
  return { missingKeys, suggestions };
}

/**
 * البحث عن مفاتيح مشابهة
 */
function findSimilarKeys(targetKey, languageTranslations) {
  const allKeys = [];
  
  function extractKeys(obj, prefix = '') {
    for (const key in obj) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === 'object') {
        extractKeys(obj[key], fullKey);
      } else {
        allKeys.push(fullKey);
      }
    }
  }
  
  Object.values(languageTranslations).forEach(namespace => {
    extractKeys(namespace);
  });
  
  // البحث عن مفاتيح مشابهة بناء على التشابه النصي
  return allKeys.filter(key => {
    const similarity = calculateSimilarity(targetKey, key);
    return similarity > 0.6; // 60% تشابه
  }).slice(0, 3); // أفضل 3 اقتراحات
}

/**
 * حساب التشابه بين نصين
 */
function calculateSimilarity(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix = Array(len2 + 1).fill().map(() => Array(len1 + 1).fill(0));
  
  for (let i = 0; i <= len1; i++) matrix[0][i] = i;
  for (let j = 0; j <= len2; j++) matrix[j][0] = j;
  
  for (let j = 1; j <= len2; j++) {
    for (let i = 1; i <= len1; i++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[j][i] = matrix[j - 1][i - 1];
      } else {
        matrix[j][i] = Math.min(
          matrix[j - 1][i] + 1,
          matrix[j][i - 1] + 1,
          matrix[j - 1][i - 1] + 1
        );
      }
    }
  }
  
  const maxLen = Math.max(len1, len2);
  return (maxLen - matrix[len2][len1]) / maxLen;
}

/**
 * اقتراح بنية جديدة للملفات
 */
function suggestFileStructure(allKeys) {
  const structure = {
    'common.json': {
      description: 'المحتوى العام والمشترك',
      keys: []
    },
    'seo.json': {
      description: 'عناوين الصفحات والأوصاف',
      keys: []
    },
    'navigation.json': {
      description: 'عناصر التنقل والقوائم',
      keys: []
    },
    'pages.json': {
      description: 'محتوى الصفحات المحدد',
      keys: []
    },
    'services.json': {
      description: 'محتوى الخدمات',
      keys: []
    },
    'fleet.json': {
      description: 'معلومات السيارات',
      keys: []
    },
    'locations.json': {
      description: 'معلومات المواقع',
      keys: []
    }
  };
  
  allKeys.forEach(key => {
    if (key.startsWith('pages.') && (key.includes('.title') || key.includes('.description') || key.includes('.keywords'))) {
      structure['seo.json'].keys.push(key);
    } else if (key.startsWith('nav.') || key.includes('.nav')) {
      structure['navigation.json'].keys.push(key);
    } else if (key.startsWith('fleet.') || key.includes('.phantom') || key.includes('.ghost') || key.includes('.cullinan')) {
      structure['fleet.json'].keys.push(key);
    } else if (key.startsWith('services.') || key.startsWith('servicesPages.')) {
      structure['services.json'].keys.push(key);
    } else if (key.startsWith('locations.') || key.includes('downtownDubai') || key.includes('dubaiMarina')) {
      structure['locations.json'].keys.push(key);
    } else if (key.startsWith('pages.') || key.includes('Page.')) {
      structure['pages.json'].keys.push(key);
    } else {
      structure['common.json'].keys.push(key);
    }
  });
  
  return structure;
}

/**
 * إنشاء تقرير شامل
 */
function generateReport() {
  console.log('🔍 استخراج مفاتيح الترجمة من الكود...');
  const { allKeys, keysByFile } = extractTranslationKeys();
  
  console.log('📂 تحميل ملفات الترجمة الموجودة...');
  const translations = loadExistingTranslations();
  
  console.log('🔍 تحليل المفاتيح المفقودة...');
  const { missingKeys, suggestions } = analyzeMissingKeys(allKeys, translations);
  
  console.log('🏗️  اقتراح بنية جديدة للملفات...');
  const suggestedStructure = suggestFileStructure(allKeys);
  
  const report = {
    summary: {
      totalKeys: allKeys.length,
      totalFiles: Object.keys(keysByFile).length,
      languages: Object.keys(translations),
      missingKeysCount: Object.values(missingKeys).reduce((sum, keys) => sum + keys.length, 0)
    },
    allKeys: allKeys.sort(),
    keysByFile,
    missingKeys,
    suggestions,
    suggestedStructure,
    currentStructure: Object.keys(translations).reduce((acc, lang) => {
      acc[lang] = Object.keys(translations[lang]);
      return acc;
    }, {})
  };
  
  // حفظ التقرير
  const reportPath = path.join(__dirname, '..', 'translation-keys-analysis.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log('\n📊 تقرير التحليل:');
  console.log('═'.repeat(80));
  console.log(`📝 إجمالي المفاتيح المستخدمة: ${report.summary.totalKeys}`);
  console.log(`📄 عدد الملفات: ${report.summary.totalFiles}`);
  console.log(`🌍 اللغات المدعومة: ${report.summary.languages.join(', ')}`);
  console.log(`❌ المفاتيح المفقودة: ${report.summary.missingKeysCount}`);
  
  console.log('\n❌ المفاتيح المفقودة لكل لغة:');
  Object.entries(missingKeys).forEach(([lang, keys]) => {
    if (keys.length > 0) {
      console.log(`\n🔴 ${lang}: ${keys.length} مفتاح مفقود`);
      keys.slice(0, 10).forEach(key => console.log(`   - ${key}`));
      if (keys.length > 10) {
        console.log(`   ... و ${keys.length - 10} مفتاح آخر`);
      }
    }
  });
  
  console.log('\n🏗️  البنية المقترحة للملفات:');
  Object.entries(suggestedStructure).forEach(([file, info]) => {
    console.log(`\n📄 ${file} (${info.keys.length} مفتاح)`);
    console.log(`   💡 ${info.description}`);
    if (info.keys.length > 0) {
      console.log(`   🔑 أمثلة: ${info.keys.slice(0, 3).join(', ')}`);
    }
  });
  
  console.log(`\n💾 تم حفظ التقرير الكامل في: ${reportPath}`);
  
  return report;
}

if (require.main === module) {
  try {
    generateReport();
  } catch (error) {
    console.error('❌ خطأ في تشغيل التحليل:', error.message);
    process.exit(1);
  }
}

module.exports = { extractTranslationKeys, loadExistingTranslations, generateReport }; 
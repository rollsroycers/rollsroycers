#!/usr/bin/env node

/**
 * نص تشخيص مشاكل الترجمة
 * يفحص القيم الفعلية للمفاتيح ويحدد سبب ظهور المفاتيح بدلاً من النصوص
 */

const fs = require('fs');
const path = require('path');

const languages = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * يحمل ملف JSON ويعرض تفاصيل الأخطاء
 */
function loadJsonFileDebug(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(content);
      return { success: true, data, error: null };
    } else {
      return { success: false, data: null, error: 'File not found' };
    }
  } catch (error) {
    return { success: false, data: null, error: error.message };
  }
}

/**
 * يتحقق من وجود مفتاح ويعرض قيمته
 */
function checkKey(obj, keyPath) {
  const keys = keyPath.split('.');
  let current = obj;
  let path = '';
  
  for (const key of keys) {
    path += (path ? '.' : '') + key;
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return {
        exists: false,
        value: null,
        failedAt: path,
        type: 'missing_key'
      };
    }
  }
  
  const valueType = typeof current;
  const isEmpty = current === '' || current === null || current === undefined;
  
  return {
    exists: true,
    value: current,
    isEmpty,
    type: valueType,
    length: typeof current === 'string' ? current.length : null
  };
}

/**
 * يختبر مفاتيح محددة بناءً على الأمثلة المُعطاة من المستخدم
 */
function testSpecificKeys() {
  console.log('🔍 اختبار المفاتيح المُشكلة من الأمثلة:\n');
  
  const problematicKeys = [
    'pages.other.about.title',
    'pages.fleet.phantom.title',
    'pages.services.chauffeur.title',
    'pages.other.gallery.title',
    'pages.other.booking.title',
    'pages.locations.downtown-dubai.title',
    'pages.other.blog.title',
    'pages.services.tours.title',
    'pages.locations.palm-jumeirah.title'
  ];
  
  languages.forEach(lang => {
    console.log(`\n📋 فحص اللغة: ${lang}`);
    console.log('═'.repeat(50));
    
    const seoPath = path.join(__dirname, '..', 'public', 'locales', lang, 'seo.json');
    const seoResult = loadJsonFileDebug(seoPath);
    
    if (!seoResult.success) {
      console.log(`❌ خطأ في تحميل ملف SEO: ${seoResult.error}`);
      return;
    }
    
    problematicKeys.forEach(keyPath => {
      const result = checkKey(seoResult.data, keyPath);
      
      if (!result.exists) {
        console.log(`❌ ${keyPath}: مفقود (فشل في ${result.failedAt})`);
      } else if (result.isEmpty) {
        console.log(`⚠️  ${keyPath}: فارغ (${result.type})`);
      } else {
        console.log(`✅ ${keyPath}: موجود (${result.length} حرف)`);
        // إظهار بداية المحتوى للتأكيد
        const preview = typeof result.value === 'string' 
          ? result.value.substring(0, 50) + (result.value.length > 50 ? '...' : '')
          : JSON.stringify(result.value);
        console.log(`   ↳ "${preview}"`);
      }
    });
  });
}

/**
 * يفحص بنية ملفات SEO للتأكد من صحتها
 */
function validateSeoStructure() {
  console.log('\n🏗️  فحص بنية ملفات SEO:\n');
  
  languages.forEach(lang => {
    const seoPath = path.join(__dirname, '..', 'public', 'locales', lang, 'seo.json');
    const result = loadJsonFileDebug(seoPath);
    
    if (!result.success) {
      console.log(`❌ ${lang}: ${result.error}`);
      return;
    }
    
    const data = result.data;
    
    // فحص البنية الأساسية
    const hasPages = data && typeof data === 'object' && 'pages' in data;
    const hasOther = hasPages && data.pages && 'other' in data.pages;
    const hasFleet = hasPages && data.pages && 'fleet' in data.pages;
    const hasServices = hasPages && data.pages && 'services' in data.pages;
    const hasLocations = hasPages && data.pages && 'locations' in data.pages;
    
    console.log(`📄 ${lang}:`);
    console.log(`   pages: ${hasPages ? '✅' : '❌'}`);
    console.log(`   pages.other: ${hasOther ? '✅' : '❌'}`);
    console.log(`   pages.fleet: ${hasFleet ? '✅' : '❌'}`);
    console.log(`   pages.services: ${hasServices ? '✅' : '❌'}`);
    console.log(`   pages.locations: ${hasLocations ? '✅' : '❌'}`);
    
    // فحص محتوى pages.other.about
    if (hasOther && data.pages.other && 'about' in data.pages.other) {
      const about = data.pages.other.about;
      console.log(`   pages.other.about.title: ${about.title ? '✅' : '❌'}`);
      console.log(`   pages.other.about.description: ${about.description ? '✅' : '❌'}`);
      console.log(`   pages.other.about.keywords: ${about.keywords ? '✅' : '❌'}`);
    } else {
      console.log(`   ❌ pages.other.about غير موجود`);
    }
  });
}

/**
 * يقارن محتوى المفاتيح بين اللغات
 */
function compareLanguages() {
  console.log('\n🔄 مقارنة المحتوى بين اللغات:\n');
  
  const testKey = 'pages.other.about.title';
  
  languages.forEach(lang => {
    const seoPath = path.join(__dirname, '..', 'public', 'locales', lang, 'seo.json');
    const result = loadJsonFileDebug(seoPath);
    
    if (result.success) {
      const check = checkKey(result.data, testKey);
      console.log(`${lang}: ${check.exists ? (check.isEmpty ? 'فارغ' : `"${check.value}"`) : 'مفقود'}`);
    } else {
      console.log(`${lang}: خطأ في الملف`);
    }
  });
}

/**
 * يختبر مكون SEO منطق بناء المفاتيح
 */
function testSeoKeyBuilding() {
  console.log('\n🔧 اختبار منطق بناء مفاتيح SEO:\n');
  
  const testCases = [
    { pageKey: 'other.about', expectedKeys: ['pages.other.about.title', 'pages.other.about.description'] },
    { pageKey: 'fleet.phantom', expectedKeys: ['pages.fleet.phantom.title', 'pages.fleet.phantom.description'] },
    { pageKey: 'services.chauffeur', expectedKeys: ['pages.services.chauffeur.title'] },
    { pageKey: 'locations.downtown-dubai', expectedKeys: ['pages.locations.downtown-dubai.title'] }
  ];
  
  testCases.forEach(testCase => {
    console.log(`🧪 pageKey: "${testCase.pageKey}"`);
    
    testCase.expectedKeys.forEach(expectedKey => {
      // محاكاة منطق مكون SEO
      let fullKey = '';
      const pageKey = testCase.pageKey;
      const key = expectedKey.split('.').pop(); // title, description, etc.
      
      if (pageKey === 'home') {
        fullKey = `pages.home.${key}`;
      } else if (pageKey === 'blog.index') {
        fullKey = `pages.other.blog.${key}`;
      } else if (pageKey.startsWith('fleet.')) {
        fullKey = `pages.fleet.${pageKey.split('.')[1]}.${key}`;
      } else if (pageKey.startsWith('services.')) {
        fullKey = `pages.services.${pageKey.split('.')[1]}.${key}`;
      } else if (pageKey.startsWith('locations.')) {
        fullKey = `pages.locations.${pageKey.split('.')[1]}.${key}`;
      } else if (pageKey.startsWith('other.')) {
        fullKey = `pages.other.${pageKey.split('.')[1]}.${key}`;
      } else if (pageKey.startsWith('compare.')) {
        fullKey = `pages.compare.${pageKey.split('.')[1]}.${key}`;
      } else {
        fullKey = `pages.${pageKey}.${key}`;
      }
      
      console.log(`   ${key} → ${fullKey} ${fullKey === expectedKey ? '✅' : '❌'}`);
    });
    
    console.log();
  });
}

// تشغيل جميع الاختبارات
function runDiagnostics() {
  console.log('🚀 تشغيل تشخيص شامل للترجمات\n');
  console.log('═'.repeat(60));
  
  testSpecificKeys();
  validateSeoStructure();
  compareLanguages();
  testSeoKeyBuilding();
  
  console.log('\n✨ انتهى التشخيص');
}

if (require.main === module) {
  runDiagnostics();
}

module.exports = { 
  testSpecificKeys, 
  validateSeoStructure, 
  compareLanguages, 
  testSeoKeyBuilding,
  runDiagnostics 
}; 
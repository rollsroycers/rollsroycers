#!/usr/bin/env node

/**
 * نص إصلاح namespaces لمكون SEO
 * يضيف 'seo' إلى serverSideTranslations في جميع الصفحات التي تستخدم مكون SEO
 */

const fs = require('fs');
const path = require('path');

/**
 * قائمة الصفحات التي تحتاج إصلاح (تستخدم SEO لكن لا تحمل 'seo' namespace)
 */
const pagesToFix = [
  'src/pages/about.tsx',
  'src/pages/testimonials.tsx', 
  'src/pages/gallery.tsx',
  'src/pages/contact.tsx',
  'src/pages/booking.tsx',
  'src/pages/terms.tsx',
  'src/pages/pricing.tsx',
  'src/pages/faq.tsx',
  'src/pages/privacy.tsx',
  'src/pages/blog/index.tsx',
  'src/pages/blog/[slug].tsx',
  'src/pages/services/tours.tsx',
  'src/pages/services/chauffeur.tsx',
  'src/pages/services/airport-transfer.tsx',
  'src/pages/services/events.tsx',
  'src/pages/services/photoshoot.tsx',
  'src/pages/locations/downtown-dubai.tsx',
  'src/pages/locations/dubai-marina.tsx',
  'src/pages/locations/palm-jumeirah.tsx',
  'src/pages/locations/business-bay.tsx',
  'src/pages/locations/jbr.tsx',
  'src/pages/locations/difc.tsx',
  'src/pages/compare/rolls-royce-vs-bentley.tsx'
];

/**
 * يفحص ما إذا كانت الصفحة تستخدم مكون SEO
 */
function usesSEOComponent(content) {
  return content.includes('<SEO ') || content.includes('<SEO>');
}

/**
 * يفحص ما إذا كانت الصفحة تحمل 'seo' namespace بالفعل
 */
function hasSeoNamespace(content) {
  const getStaticPropsMatch = content.match(/serverSideTranslations\([^)]+\)/);
  if (getStaticPropsMatch) {
    return getStaticPropsMatch[0].includes("'seo'") || getStaticPropsMatch[0].includes('"seo"');
  }
  return false;
}

/**
 * يضيف 'seo' إلى serverSideTranslations
 */
function addSeoNamespace(content) {
  // البحث عن نمط serverSideTranslations
  const pattern = /serverSideTranslations\([^,]+,\s*\[([^\]]+)\]/g;
  
  return content.replace(pattern, (match, namespaces) => {
    // تنظيف المسافات والاقتباسات
    const cleanNamespaces = namespaces.trim();
    
    // التحقق من وجود 'seo' بالفعل
    if (cleanNamespaces.includes("'seo'") || cleanNamespaces.includes('"seo"')) {
      return match; // لا حاجة للتغيير
    }
    
    // إضافة 'seo' إلى قائمة namespaces
    const newNamespaces = cleanNamespaces + ", 'seo'";
    return match.replace(`[${cleanNamespaces}]`, `[${newNamespaces}]`);
  });
}

/**
 * معالجة ملف واحد
 */
function processFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  الملف غير موجود: ${filePath}`);
    return false;
  }
  
  const content = fs.readFileSync(fullPath, 'utf8');
  
  // التحقق من استخدام مكون SEO
  if (!usesSEOComponent(content)) {
    console.log(`ℹ️  الملف لا يستخدم مكون SEO: ${filePath}`);
    return false;
  }
  
  // التحقق من وجود namespace 'seo' بالفعل
  if (hasSeoNamespace(content)) {
    console.log(`✅ الملف يحمل 'seo' namespace بالفعل: ${filePath}`);
    return false;
  }
  
  // إضافة 'seo' namespace
  const updatedContent = addSeoNamespace(content);
  
  if (updatedContent === content) {
    console.log(`❌ فشل في تحديث الملف: ${filePath}`);
    return false;
  }
  
  // حفظ الملف المحدث
  fs.writeFileSync(fullPath, updatedContent);
  console.log(`🔧 تم إصلاح الملف: ${filePath}`);
  return true;
}

/**
 * معالجة جميع الملفات
 */
function fixAllFiles() {
  console.log('🚀 بدء إصلاح namespaces لمكون SEO...\n');
  
  let fixedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  
  pagesToFix.forEach(filePath => {
    try {
      const wasFixed = processFile(filePath);
      if (wasFixed) {
        fixedCount++;
      } else {
        skippedCount++;
      }
    } catch (error) {
      console.error(`❌ خطأ في معالجة ${filePath}:`, error.message);
      errorCount++;
    }
  });
  
  console.log('\n📊 ملخص النتائج:');
  console.log(`✅ تم إصلاح: ${fixedCount} ملف`);
  console.log(`⏭️  تم تخطي: ${skippedCount} ملف`);
  console.log(`❌ أخطاء: ${errorCount} ملف`);
  
  if (fixedCount > 0) {
    console.log('\n🎉 تم إصلاح مشكلة namespaces بنجاح!');
    console.log('الآن يجب أن تظهر جميع النصوص المترجمة بدلاً من المفاتيح.');
  }
}

/**
 * فحص حالة الملفات قبل الإصلاح
 */
function auditFiles() {
  console.log('🔍 فحص حالة الملفات...\n');
  
  const report = {
    useSeoButMissingNamespace: [],
    useSeoAndHasNamespace: [],
    dontUseSeo: [],
    fileNotFound: []
  };
  
  pagesToFix.forEach(filePath => {
    const fullPath = path.join(__dirname, '..', filePath);
    
    if (!fs.existsSync(fullPath)) {
      report.fileNotFound.push(filePath);
      return;
    }
    
    const content = fs.readFileSync(fullPath, 'utf8');
    
    if (!usesSEOComponent(content)) {
      report.dontUseSeo.push(filePath);
    } else if (hasSeoNamespace(content)) {
      report.useSeoAndHasNamespace.push(filePath);
    } else {
      report.useSeoButMissingNamespace.push(filePath);
    }
  });
  
  console.log('📋 تقرير الحالة:');
  console.log(`❌ يستخدم SEO لكن لا يحمل 'seo': ${report.useSeoButMissingNamespace.length}`);
  console.log(`✅ يستخدم SEO ويحمل 'seo': ${report.useSeoAndHasNamespace.length}`);
  console.log(`ℹ️  لا يستخدم SEO: ${report.dontUseSeo.length}`);
  console.log(`⚠️  ملفات غير موجودة: ${report.fileNotFound.length}`);
  
  if (report.useSeoButMissingNamespace.length > 0) {
    console.log('\n🔧 الملفات التي تحتاج إصلاح:');
    report.useSeoButMissingNamespace.forEach(file => {
      console.log(`   - ${file}`);
    });
  }
  
  return report;
}

if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--audit')) {
    auditFiles();
  } else if (args.includes('--fix')) {
    fixAllFiles();
  } else {
    console.log('الاستخدام:');
    console.log('  node scripts/fix-seo-namespaces.js --audit   # فحص الحالة');
    console.log('  node scripts/fix-seo-namespaces.js --fix     # إصلاح المشاكل');
  }
}

module.exports = { fixAllFiles, auditFiles, processFile }; 
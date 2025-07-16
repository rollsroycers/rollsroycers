#!/usr/bin/env node

/**
 * أداة تحديث الكود لاستخدام البنية الجديدة للترجمات
 * تضيف namespace المناسب لكل صفحة وتحدث imports
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * خريطة الصفحات و namespace المطلوب
 */
const PAGE_NAMESPACE_MAP = {
  // الصفحات العامة
  'src/pages/index.tsx': ['common', 'seo', 'navigation'],
  'src/pages/about.tsx': ['common', 'seo', 'navigation'],
  'src/pages/contact.tsx': ['common', 'seo', 'navigation'],
  'src/pages/gallery.tsx': ['common', 'seo', 'navigation'],
  'src/pages/testimonials.tsx': ['common', 'seo', 'navigation'],
  'src/pages/pricing.tsx': ['common', 'seo', 'navigation'],
  'src/pages/faq.tsx': ['common', 'seo', 'navigation'],
  'src/pages/booking.tsx': ['common', 'seo', 'navigation'],
  'src/pages/blog/index.tsx': ['common', 'seo', 'navigation'],
  'src/pages/blog/[slug].tsx': ['common', 'seo', 'navigation'],
  
  // صفحات الشروط والخصوصية
  'src/pages/terms.tsx': ['common', 'seo', 'navigation', 'pages'],
  'src/pages/privacy.tsx': ['common', 'seo', 'navigation', 'pages'],
  
  // صفحات الخدمات
  'src/pages/services/tours.tsx': ['common', 'seo', 'navigation', 'services'],
  'src/pages/services/chauffeur.tsx': ['common', 'seo', 'navigation', 'services'],
  'src/pages/services/airport-transfer.tsx': ['common', 'seo', 'navigation', 'services'],
  'src/pages/services/events.tsx': ['common', 'seo', 'navigation', 'services'],
  'src/pages/services/photoshoot.tsx': ['common', 'seo', 'navigation', 'services'],
  'src/pages/services/corporate.tsx': ['common', 'seo', 'navigation', 'services'],
  'src/pages/services/wedding.tsx': ['common', 'seo', 'navigation', 'services'],
  
  // صفحات المواقع
  'src/pages/locations/downtown-dubai.tsx': ['common', 'seo', 'navigation'],
  'src/pages/locations/dubai-marina.tsx': ['common', 'seo', 'navigation'],
  'src/pages/locations/palm-jumeirah.tsx': ['common', 'seo', 'navigation'],
  'src/pages/locations/business-bay.tsx': ['common', 'seo', 'navigation'],
  'src/pages/locations/jbr.tsx': ['common', 'seo', 'navigation'],
  'src/pages/locations/difc.tsx': ['common', 'seo', 'navigation'],
  
  // صفحات الأسطول
  'src/pages/fleet/phantom.tsx': ['common', 'seo', 'navigation', 'fleet'],
  'src/pages/fleet/ghost.tsx': ['common', 'seo', 'navigation', 'fleet'],
  'src/pages/fleet/cullinan.tsx': ['common', 'seo', 'navigation', 'fleet'],
  'src/pages/fleet/dawn.tsx': ['common', 'seo', 'navigation', 'fleet'],
  'src/pages/fleet/wraith.tsx': ['common', 'seo', 'navigation', 'fleet'],
  
  // صفحات المقارنة
  'src/pages/compare/rolls-royce-vs-bentley.tsx': ['common', 'seo', 'navigation'],
  
  // المكونات المهمة
  'src/components/Layout.tsx': ['navigation', 'footer'],
  'src/components/Navbar.tsx': ['navigation'],
  'src/components/Footer.tsx': ['footer']
};

/**
 * تحديث getStaticProps في ملف
 */
function updateGetStaticProps(filePath, namespaces) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // البحث عن getStaticProps
  const getStaticPropsPattern = /export const getStaticProps: GetStaticProps = async \(\{ locale[^}]*\}\) => \{[^}]*return \{[^}]*props: \{[^}]*\(await serverSideTranslations\([^)]*\)\)[^}]*\}[^}]*\}[^}]*\}/;
  
  if (getStaticPropsPattern.test(content)) {
    // استبدال getStaticProps الموجود
    const newGetStaticProps = `export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ${JSON.stringify(namespaces)})),
    },
  }
}`;
    
    content = content.replace(getStaticPropsPattern, newGetStaticProps);
  } else {
    // إضافة getStaticProps جديد إذا لم يكن موجوداً
    const newGetStaticProps = `
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ${JSON.stringify(namespaces)})),
    },
  }
}`;
    
    content += newGetStaticProps;
  }
  
  // التأكد من وجود imports المطلوبة
  if (!content.includes("import { GetStaticProps }")) {
    content = `import { GetStaticProps } from 'next'\n` + content;
  }
  
  if (!content.includes("import { serverSideTranslations }")) {
    content = `import { serverSideTranslations } from 'next-i18next/serverSideTranslations'\n` + content;
  }
  
  return content;
}

/**
 * تحديث المكونات لاستخدام namespace المتعدد
 */
function updateComponentImports(filePath, namespaces) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // إضافة useTranslation مع namespaces متعددة إذا لزم الأمر
  if (namespaces.length > 1) {
    const useTranslationPattern = /const \{ t[^}]*\} = useTranslation\([^)]*\)/;
    if (useTranslationPattern.test(content)) {
      // تحديث useTranslation لاستخدام namespaces متعددة
      content = content.replace(
        useTranslationPattern,
        `const { t } = useTranslation(${JSON.stringify(namespaces)})`
      );
    }
  }
  
  return content;
}

/**
 * معالجة ملف واحد
 */
function updateSingleFile(filePath) {
  // تحويل المسار المطلق إلى نسبي للمقارنة
  const relativePath = path.relative(path.join(__dirname, '..'), filePath);
  const namespaces = PAGE_NAMESPACE_MAP[relativePath];
  
  if (!namespaces) {
    console.log(`⏭️  تخطي: ${relativePath} (غير محدد في الخريطة)`);
    return false;
  }
  
  console.log(`🔧 تحديث: ${relativePath}`);
  console.log(`   📦 Namespaces: ${namespaces.join(', ')}`);
  
  try {
    let updatedContent = fs.readFileSync(filePath, 'utf8');
    
    // تحديث getStaticProps للصفحات
    if (relativePath.includes('src/pages/')) {
      updatedContent = updateGetStaticProps(filePath, namespaces);
    }
    
    // تحديث المكونات
    if (relativePath.includes('src/components/')) {
      updatedContent = updateComponentImports(filePath, namespaces);
    }
    
    // حفظ الملف المحدث
    fs.writeFileSync(filePath, updatedContent);
    console.log(`   ✅ تم بنجاح`);
    return true;
    
  } catch (error) {
    console.error(`   ❌ خطأ: ${error.message}`);
    return false;
  }
}

/**
 * إنشاء ملف تكوين للمكونات التي تحتاج namespace خاص
 */
function createComponentConfig(filePath, namespaces) {
  const configDir = path.join(__dirname, '..', 'config');
  const configFile = path.join(configDir, 'translation-namespaces.json');
  
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }
  
  let config = {};
  if (fs.existsSync(configFile)) {
    try {
      config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
    } catch (error) {
      console.warn('تحذير: خطأ في قراءة ملف التكوين');
    }
  }
  
  // استخدام المسار النسبي للتكوين
  const relativePath = path.relative(path.join(__dirname, '..'), filePath);
  config[relativePath] = namespaces;
  fs.writeFileSync(configFile, JSON.stringify(config, null, 2));
}

/**
 * معالجة جميع الملفات
 */
function updateAllFiles() {
  console.log('🚀 بدء تحديث جميع ملفات الكود...\n');
  
  let updatedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  
  // معالجة الملفات المحددة في الخريطة
  Object.keys(PAGE_NAMESPACE_MAP).forEach(relativePath => {
    const fullPath = path.join(__dirname, '..', relativePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  ملف غير موجود: ${relativePath}`);
      skippedCount++;
      return;
    }
    
    try {
      const success = updateSingleFile(fullPath);
      if (success) {
        updatedCount++;
        // إنشاء تكوين للمكونات
        createComponentConfig(fullPath, PAGE_NAMESPACE_MAP[relativePath]);
      } else {
        skippedCount++;
      }
    } catch (error) {
      console.error(`❌ خطأ في معالجة ${relativePath}:`, error.message);
      errorCount++;
    }
  });
  
  console.log('\n📊 ملخص التحديثات:');
  console.log(`✅ تم تحديث: ${updatedCount} ملف`);
  console.log(`⏭️  تم تخطي: ${skippedCount} ملف`);
  console.log(`❌ أخطاء: ${errorCount} ملف`);
  
  return { updatedCount, skippedCount, errorCount };
}

/**
 * إنشاء ملف مساعد للمكونات
 */
function createTranslationHelper() {
  const helperContent = `/**
 * مساعد للترجمة مع دعم namespace متعدد
 */
import { useTranslation } from 'next-i18next';

export function useMultipleNamespaces(namespaces: string[]) {
  const { t, i18n } = useTranslation(namespaces);
  
  return {
    t,
    i18n,
    // مساعد للوصول لمفاتيح namespace محدد
    tNamespace: (namespace: string, key: string) => {
      return t(\`\${namespace}:\${key}\`);
    }
  };
}

export function useNavigation() {
  return useTranslation('navigation');
}

export function useFooter() {
  return useTranslation('footer');
}

export function useServices() {
  return useTranslation('services');
}

export function useFleet() {
  return useTranslation('fleet');
}

export function usePages() {
  return useTranslation('pages');
}
`;
  
  const helperPath = path.join(__dirname, '..', 'src', 'hooks', 'useTranslations.ts');
  const helperDir = path.dirname(helperPath);
  
  if (!fs.existsSync(helperDir)) {
    fs.mkdirSync(helperDir, { recursive: true });
  }
  
  fs.writeFileSync(helperPath, helperContent);
  console.log(`\n📁 تم إنشاء مساعد الترجمة: src/hooks/useTranslations.ts`);
}

/**
 * التحقق من صحة الملفات بعد التحديث
 */
function validateUpdatedFiles() {
  console.log('\n🔍 التحقق من صحة الملفات المحدثة...');
  
  let validCount = 0;
  let invalidCount = 0;
  
  Object.keys(PAGE_NAMESPACE_MAP).forEach(filePath => {
    const fullPath = path.join(__dirname, '..', filePath);
    
    if (!fs.existsSync(fullPath)) return;
    
    try {
      const content = fs.readFileSync(fullPath, 'utf8');
      const namespaces = PAGE_NAMESPACE_MAP[filePath];
      
      // فحص وجود getStaticProps للصفحات
      if (filePath.includes('src/pages/')) {
        if (content.includes('serverSideTranslations') && 
            namespaces.every(ns => content.includes(ns))) {
          validCount++;
          console.log(`✅ ${filePath}`);
        } else {
          invalidCount++;
          console.log(`❌ ${filePath} - مفقود namespace أو serverSideTranslations`);
        }
      } else {
        validCount++;
        console.log(`✅ ${filePath}`);
      }
      
    } catch (error) {
      invalidCount++;
      console.log(`❌ ${filePath} - خطأ في القراءة: ${error.message}`);
    }
  });
  
  console.log(`\n📋 نتائج التحقق:`);
  console.log(`✅ ملفات صحيحة: ${validCount}`);
  console.log(`❌ ملفات تحتاج مراجعة: ${invalidCount}`);
  
  return invalidCount === 0;
}

if (require.main === module) {
  try {
    const results = updateAllFiles();
    createTranslationHelper();
    const allValid = validateUpdatedFiles();
    
    console.log('\n🎯 الخطوات التالية:');
    console.log('1. مراجعة الملفات المحدثة');
    console.log('2. اختبار: npm run build');
    console.log('3. فحص: npm run translations:check');
    
    if (allValid) {
      console.log('\n🎉 تم تحديث جميع الملفات بنجاح!');
    } else {
      console.log('\n⚠️ بعض الملفات تحتاج مراجعة يدوية');
    }
    
  } catch (error) {
    console.error('❌ خطأ في تحديث الكود:', error.message);
    process.exit(1);
  }
}

module.exports = { updateAllFiles, updateSingleFile, validateUpdatedFiles }; 
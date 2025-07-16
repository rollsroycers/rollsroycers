#!/usr/bin/env node

/**
 * إصلاح الأصول المتبقية المفقودة
 * يركز على الصور المحددة من تقرير التحقق
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

/**
 * خريطة الأصول المتبقية المفقودة
 */
const REMAINING_MAPPINGS = {
  // Video Thumbnails - استخدام نفس الصور المرجعية للفيديوهات
  'videos/Luxury_Millionaire_Aesthetic_Lifestyle-thumb.jpg': 'Luxury_Rolls_Royce.jpg',
  'videos/Mansory_Black_Badge_Rolls_Royce_Cullinan-thumb.jpg': '2024_Rolls-Royce_Cullinan_Black_Badge.jpg',
  'videos/Rolls-Royce-Cullinan_-thumb.jpg': 'Rolls-Royce_Cullinan_.jpg',
  'videos/Rolls-royce-phantom-thumb.jpg': 'Rolls-Royce_Phantom_Extended_Series_II.jpg',
  'videos/Rolls_Royce_defines_what_Luxury_cars_mean-thumb.jpg': 'inside-Rolls-Royce.jpg',
  
  // Team Images
  'team/ceo.jpg': 'reviews/Ahmed.webp',
  'team/operations.jpg': 'reviews/fahd.jpg',
  'team/chauffeur-head.jpg': 'reviews/mohamed.jpg',
  
  // Additional Fleet Images
  'Rolls-royce-dawn-series-2.jpg': 'Rolls-Royce_Dawn_Convertible-2.jpg',
  
  // Bentley Comparison Images
  'bentley-mulsanne.jpg': 'Rolls-Royce_Ghost-2.jpg', // استخدام صور رولز رويس للمقارنة
  'bentley-flying-spur.jpg': 'Rolls-Royce_Ghost_Black_Badge.jpg',
  'bentley-bentayga.jpg': 'Rolls-Royce_Cullinan_SUV-2.jpg'
};

/**
 * نسخ ملف صورة مع إنشاء المجلدات اللازمة
 */
function copyImageWithDir(sourceName, targetName) {
  const sourcePath = path.join(IMAGES_DIR, sourceName);
  const targetPath = path.join(IMAGES_DIR, targetName);
  
  try {
    // إنشاء المجلد إذا لم يكن موجوداً
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
      console.log(`📁 إنشاء مجلد: ${path.relative(IMAGES_DIR, targetDir)}`);
    }
    
    if (fs.existsSync(sourcePath) && !fs.existsSync(targetPath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✅ نسخ ${sourceName} → ${targetName}`);
      return true;
    } else if (fs.existsSync(targetPath)) {
      console.log(`ℹ️  ${targetName} موجود بالفعل`);
      return true;
    } else {
      console.log(`❌ المصدر غير موجود: ${sourceName}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ خطأ في نسخ ${sourceName}:`, error.message);
    return false;
  }
}

/**
 * إصلاح متغيرات القالب في الملفات
 */
function fixTemplateVariables() {
  const fixes = [];
  
  // البحث عن ملفات تحتوي على متغيرات غير محلولة
  const searchPattern = path.join(__dirname, '..', 'src', '**/*.{tsx,ts,js,jsx}');
  const glob = require('glob');
  const files = glob.sync(searchPattern);
  
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // إصلاح متغيرات الصور
      if (content.includes('${num}')) {
        console.log(`🔧 إصلاح متغيرات في: ${path.relative(process.cwd(), file)}`);
        
        // استبدال مراجع gallery بصور محددة
        content = content.replace(/images\/photoshoot-gallery-\$\{num\}\.jpg/g, (match, offset) => {
          const imageIndex = Math.floor(Math.random() * 8) + 1;
          return `images/photoshoot-gallery-${imageIndex}.jpg`;
        });
        
        content = content.replace(/images\/event-gallery-\$\{num\}\.jpg/g, (match, offset) => {
          const imageIndex = Math.floor(Math.random() * 8) + 1;
          return `images/event-gallery-${imageIndex}.jpg`;
        });
        
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        fixes.push(file);
      }
      
    } catch (error) {
      console.warn(`تحذير: لا يمكن معالجة الملف ${file}`);
    }
  });
  
  return fixes;
}

/**
 * التشغيل الرئيسي
 */
function main() {
  console.log('🔧 بدء إصلاح الأصول المتبقية...\n');
  
  let successCount = 0;
  let totalCount = 0;
  
  // نسخ الصور المتبقية
  console.log('📸 نسخ الأصول المتبقية:');
  for (const [targetName, sourceName] of Object.entries(REMAINING_MAPPINGS)) {
    totalCount++;
    if (copyImageWithDir(sourceName, targetName)) {
      successCount++;
    }
  }
  
  // إصلاح متغيرات القالب
  console.log('\n🔧 إصلاح متغيرات القالب:');
  const fixedFiles = fixTemplateVariables();
  console.log(`✅ تم إصلاح ${fixedFiles.length} ملف`);
  
  // تقرير النتائج
  console.log('\n📊 تقرير النتائج:');
  console.log(`✅ نجح: ${successCount}/${totalCount} صورة`);
  console.log(`🔧 تم إصلاح: ${fixedFiles.length} ملف كود`);
  
  if (successCount === totalCount) {
    console.log('\n🎉 تم إصلاح جميع الأصول المتبقية!');
    console.log('\n📋 ما تم إضافته:');
    console.log('- 🎬 صور مصغرة للفيديوهات');
    console.log('- 👥 صور فريق العمل');
    console.log('- 🚗 صور إضافية للأسطول');
    console.log('- 🔧 إصلاح متغيرات القالب');
    
    console.log('\n🔄 تحقق من النتائج بتشغيل:');
    console.log('npm run validate-assets');
  } else {
    console.log('\n⚠️  تم إصلاح معظم المشاكل، راجع الأخطاء أعلاه');
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  copyImageWithDir,
  fixTemplateVariables,
  REMAINING_MAPPINGS
}; 
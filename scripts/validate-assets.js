#!/usr/bin/env node

/**
 * التحقق من صحة جميع الأصول (الصور والفيديوهات والأيقونات)
 * يتأكد من عدم وجود مراجع مفقودة
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const PROJECT_ROOT = path.join(__dirname, '..');
const IMAGES_DIR = path.join(PROJECT_ROOT, 'public', 'images');
const PAGES_DIR = path.join(PROJECT_ROOT, 'src', 'pages');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'src', 'components');

/**
 * البحث عن مراجع الصور في الملفات
 */
function findImageReferences() {
  const imageReferences = new Set();
  
  // البحث في الصفحات والمكونات
  const searchPattern = path.join(PROJECT_ROOT, 'src/**/*.{tsx,ts,js,jsx}');
  const files = glob.sync(searchPattern);
  
  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      // البحث عن مراجع الصور
      const imageRegex = /['"`]\/images\/[^'"`\s]+\.(jpg|jpeg|png|gif|webp|avif|svg)['"`]/g;
      const videoRegex = /['"`]\/images\/videos\/[^'"`\s]+\.(mp4|mov|avi|webm)['"`]/g;
      
      let match;
      while ((match = imageRegex.exec(content)) !== null) {
        const imagePath = match[0].replace(/['"``]/g, '').substring(1); // Remove quotes and leading /
        imageReferences.add(imagePath);
      }
      
      while ((match = videoRegex.exec(content)) !== null) {
        const videoPath = match[0].replace(/['"``]/g, '').substring(1); // Remove quotes and leading /
        imageReferences.add(videoPath);
      }
      
    } catch (error) {
      console.warn(`تحذير: لا يمكن قراءة الملف ${file}`);
    }
  });
  
  return Array.from(imageReferences);
}

/**
 * التحقق من وجود الملف
 */
function checkFileExists(relativePath) {
  const fullPath = path.join(PROJECT_ROOT, 'public', relativePath);
  return fs.existsSync(fullPath);
}

/**
 * الحصول على جميع الصور الموجودة
 */
function getExistingImages() {
  const images = [];
  
  function scanDirectory(dir, prefix = '') {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath, prefix + item + '/');
      } else if (/\.(jpg|jpeg|png|gif|webp|avif|svg|mp4|mov|avi|webm)$/i.test(item)) {
        images.push('images/' + prefix + item);
      }
    });
  }
  
  scanDirectory(IMAGES_DIR);
  return images;
}

/**
 * إنشاء تقرير الأصول
 */
function generateAssetReport() {
  console.log('🔍 بدء فحص الأصول...\n');
  
  const imageReferences = findImageReferences();
  const existingImages = getExistingImages();
  
  console.log('📊 إحصائيات الأصول:');
  console.log(`- المراجع الموجودة في الكود: ${imageReferences.length}`);
  console.log(`- الصور الموجودة فعلياً: ${existingImages.length}`);
  
  // التحقق من الصور المفقودة
  const missingImages = imageReferences.filter(ref => !checkFileExists(ref));
  const unusedImages = existingImages.filter(img => !imageReferences.includes(img));
  
  console.log('\n🔍 نتائج الفحص:');
  
  if (missingImages.length === 0) {
    console.log('✅ جميع مراجع الصور صحيحة - لا توجد صور مفقودة!');
  } else {
    console.log(`❌ صور مفقودة (${missingImages.length}):`);
    missingImages.forEach(img => {
      console.log(`   - ${img}`);
    });
  }
  
  console.log(`\n📈 صور غير مستخدمة (${unusedImages.length}):`);
  if (unusedImages.length > 0) {
    unusedImages.slice(0, 10).forEach(img => {
      console.log(`   - ${img}`);
    });
    if (unusedImages.length > 10) {
      console.log(`   ... و ${unusedImages.length - 10} صور أخرى`);
    }
  } else {
    console.log('   - جميع الصور مستخدمة');
  }
  
  // التحقق من ملف الأيقونات
  const iconsPath = path.join(PROJECT_ROOT, 'public', 'icons.json');
  const iconComponentPath = path.join(PROJECT_ROOT, 'src', 'components', 'Icon.tsx');
  
  console.log('\n🎭 فحص الأيقونات:');
  console.log(`✅ ملف الأيقونات: ${fs.existsSync(iconsPath) ? 'موجود' : 'مفقود'}`);
  console.log(`✅ مكون الأيقونات: ${fs.existsSync(iconComponentPath) ? 'موجود' : 'مفقود'}`);
  
  // إحصائيات الفيديوهات
  const videoReferences = imageReferences.filter(ref => /\.(mp4|mov|avi|webm)$/i.test(ref));
  console.log(`\n🎬 الفيديوهات: ${videoReferences.length} مراجع`);
  videoReferences.forEach(video => {
    const exists = checkFileExists(video);
    console.log(`   ${exists ? '✅' : '❌'} ${video}`);
  });
  
  // خلاصة الحالة
  console.log('\n📋 خلاصة الحالة:');
  if (missingImages.length === 0) {
    console.log('🎉 جميع الأصول صحيحة ومتاحة!');
    console.log('🚀 الموقع جاهز للعمل بدون أخطاء 404');
  } else {
    console.log('⚠️  يحتاج إلى إصلاح بعض المراجع المفقودة');
    console.log('💡 قم بتشغيل: npm run fix-missing-assets');
  }
  
  return {
    totalReferences: imageReferences.length,
    existingAssets: existingImages.length,
    missingCount: missingImages.length,
    unusedCount: unusedImages.length,
    videoCount: videoReferences.length,
    missingImages,
    unusedImages
  };
}

/**
 * التشغيل الرئيسي
 */
if (require.main === module) {
  try {
    const report = generateAssetReport();
    
    // إنشاء تقرير JSON
    const reportPath = path.join(PROJECT_ROOT, 'asset-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📄 تم حفظ التقرير في: asset-report.json`);
    
    process.exit(report.missingCount > 0 ? 1 : 0);
  } catch (error) {
    console.error('❌ خطأ في فحص الأصول:', error.message);
    process.exit(1);
  }
}

module.exports = {
  findImageReferences,
  checkFileExists,
  getExistingImages,
  generateAssetReport
}; 
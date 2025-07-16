#!/usr/bin/env node

/**
 * التحقق من تحميل ملفات الترجمة بشكل صحيح
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 فحص تحميل ملفات الترجمة...\n');

// التحقق من ملف services.json الإنجليزي
const servicesPath = path.join(__dirname, '..', 'public', 'locales', 'en', 'services.json');

if (fs.existsSync(servicesPath)) {
  try {
    const servicesContent = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));
    
    console.log('✅ تم العثور على ملف services.json');
    
    // التحقق من وجود مفاتيح wedding
    const wedding = servicesContent?.servicesPages?.wedding;
    
    if (wedding) {
      console.log('✅ تم العثور على قسم wedding');
      
      // فحص المفاتيح المطلوبة
      const requiredKeys = [
        'hero.viewPackages',
        'hero.consultation', 
        'packages.ultimate.name',
        'packages.ultimate.premium',
        'packages.royal.name',
        'packages.classic.name',
        'packages.bookPackage',
        'gallery.title',
        'testimonials.sarah.name',
        'testimonials.sarah.text',
        'testimonials.fatima.name', 
        'testimonials.fatima.text',
        'cta.call',
        'cta.getQuote'
      ];
      
      console.log('\n🔍 فحص المفاتيح المطلوبة:');
      
      requiredKeys.forEach(keyPath => {
        const keys = keyPath.split('.');
        let value = wedding;
        
        for (const key of keys) {
          value = value?.[key];
        }
        
        if (value) {
          console.log(`✅ ${keyPath}: "${value}"`);
        } else {
          console.log(`❌ ${keyPath}: مفقود`);
        }
      });
      
    } else {
      console.log('❌ لم يتم العثور على قسم wedding');
    }
    
  } catch (error) {
    console.error('❌ خطأ في قراءة services.json:', error.message);
  }
} else {
  console.log('❌ لم يتم العثور على ملف services.json');
}

// التحقق من ملف common.json للمفاتيح الأخرى
const commonPath = path.join(__dirname, '..', 'public', 'locales', 'en', 'common.json');

if (fs.existsSync(commonPath)) {
  try {
    const commonContent = JSON.parse(fs.readFileSync(commonPath, 'utf8'));
    
    console.log('\n✅ تم العثور على ملف common.json');
    
    // فحص مفتاح locations.businessBay.nav
    const businessBayNav = commonContent?.locations?.businessBay?.nav;
    
    if (businessBayNav) {
      console.log(`✅ locations.businessBay.nav: "${businessBayNav}"`);
    } else {
      console.log('❌ locations.businessBay.nav: مفقود');
    }
    
  } catch (error) {
    console.error('❌ خطأ في قراءة common.json:', error.message);
  }
}

console.log('\n📋 ملخص:');
console.log('- يجب أن تكون جميع المفاتيح موجودة الآن');
console.log('- إذا كان السيرفر المحلي يعمل، جرب تحديث الصفحة (Ctrl+F5)');
console.log('- أو توقف السيرفر وشغله مرة أخرى');

console.log('\n🔧 إذا استمرت المشكلة:');
console.log('1. أوقف السيرفر: Ctrl+C');
console.log('2. امسح الـ cache: rm -rf .next');
console.log('3. شغل السيرفر: npm run dev'); 
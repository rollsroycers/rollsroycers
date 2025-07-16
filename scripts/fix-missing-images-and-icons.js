#!/usr/bin/env node

/**
 * إصلاح جميع الصور والأيقونات المفقودة
 * ينشئ ويطابق الصور الموجودة مع المراجع المفقودة
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

/**
 * خريطة الصور المفقودة إلى الصور الموجودة
 */
const IMAGE_MAPPINGS = {
  // Airport Transfer Service Images
  'Rolls-Royce-Ride.jpg': 'Rolls-oyce-air-port.jpg',
  'airport-hero.jpg': 'Rolls-oyce-air-port.jpg',
  'airport-transfer-hero.jpg': 'Rolls-oyce-air-port.jpg',
  
  // Chauffeur Service Images  
  'Rolls-royce-with-chauffeur.jpg': 'Rolls-royce-dubai.jpg',
  'chauffeur-hero.jpg': 'Luxury_Rolls_Royce.jpg',
  'professional-chauffeur.jpg': 'Rolls-royce-official.jpg',
  
  // Event Service Images
  'rolls-royce-event.jpg': 'Rolls-Royce-2.jpg',
  'gala-event.jpg': 'Luxury_cars_like_the_Rolls-Royce_Phantom.jpg',
  'product-launch.jpg': 'Rolls-Royce-front.jpg',
  'film-production.jpg': 'Rolls-Royce-black.jpg',
  'fashion-show.jpg': 'Rolls-Royce-white.jpg',
  'award-ceremony.jpg': 'Rolls-Royce_Phantom_Extended_Series_II.jpg',
  'private-party.jpg': 'Rolls-Royce_Dawn_Convertible-2.jpg',
  
  // Event Gallery Images
  'event-gallery-1.jpg': 'Rolls-Royce_Phantom_Extended_Magnetism.jpg',
  'event-gallery-2.jpg': 'Rolls-Royce_Ghost_Black_Badge.jpg',
  'event-gallery-3.jpg': 'Rolls-Royce_Cullinan_Majestic_Aurora_.jpg',
  'event-gallery-4.jpg': 'Rolls-Royce_Dawn.jpg',
  'event-gallery-5.jpg': 'Black_Rolls_Royce_Ghost.jpg',
  'event-gallery-6.jpg': 'Rolls-Royce_Spectre.jpg',
  'event-gallery-7.jpg': '2024_Rolls-Royce_Cullinan.jpg',
  'event-gallery-8.jpg': '2025_Rolls-Royce_Ghost_Black_Badge_Idealist.jpg',
  
  // Photoshoot Service Images
  'photoshoot-hero.jpg': 'Rolls-royce-with-blan.jpg',
  'fashion-photoshoot.jpg': 'Rolls-Royce-white.jpg',
  'wedding-photoshoot.jpg': 'Rolls-Royce_Dawn_Convertible-2.jpg',
  'commercial-shoot.jpg': 'Rolls-Royce-front.jpg',
  'lifestyle-shoot.jpg': 'Luxury_Rolls_Royce.jpg',
  'music-video.jpg': 'Rolls-Royce-black.jpg',
  'corporate-photoshoot.jpg': 'Rolls-Royce_Ghost-2.jpg',
  
  // Photoshoot Gallery Images
  'photoshoot-gallery-1.jpg': 'Rolls-Royce_Phantom_Extended_Series_II.jpg',
  'photoshoot-gallery-2.jpg': 'Rolls-Royce_Ghost_Black_Badge.jpg',
  'photoshoot-gallery-3.jpg': 'Rolls-Royce_Cullinan_.jpg',
  'photoshoot-gallery-4.jpg': 'Rolls-Royce_Dawn.jpg',
  'photoshoot-gallery-5.jpg': 'Rolls-Royce-2.jpg',
  'photoshoot-gallery-6.jpg': 'Rolls-Royce_Spectre.jpg',
  'photoshoot-gallery-7.jpg': '2024_Rolls-Royce_Cullinan_Black_Badge.jpg',
  'photoshoot-gallery-8.jpg': 'Luxury_cars_like_the_Rolls-Royce_Phantom.jpg',
  
  // Location Images
  'difc-skyline.jpg': 'Rolls-royce-dubai.jpg',
  'downtown-hero.jpg': 'Rolls-royce-dubai.jpg',
  'marina-hero.jpg': 'Rolls-royce-dubai.jpg',
  'palm-hero.jpg': 'Rolls-royce-dubai.jpg',
  'business-bay-hero.jpg': 'Rolls-royce-dubai.jpg',
  'jbr-hero.jpg': 'Rolls-royce-dubai.jpg',
  
  // Fleet Images  
  'phantom-main.jpg': 'Rolls-Royce_Phantom_Extended_Series_II.jpg',
  'ghost-black-badge-2.jpg': '2025_Rolls-Royce_Ghost_Black_Badge_Idealist.jpg',
  'cullinan-side.jpg': 'Rolls-Royce_Cullinan_SUV-2.jpg',
  'dawn-convertible.jpg': 'Rolls-Royce_Dawn_Convertible-2.jpg',
  'wraith-coupe.jpg': 'Rolls-Royce-black.jpg',
  
  // Gallery & Instagram Images
  'Rolls-Royce-Ride-2.jpg': 'Rolls-Royce-2.jpg',
  'instagram-1.jpg': 'Rolls-Royce_Phantom_Extended_Magnetism.jpg',
  'instagram-2.jpg': 'Rolls-Royce_Ghost_Black_Badge.jpg',
  'instagram-3.jpg': 'Rolls-Royce_Cullinan_Majestic_Aurora_.jpg',
  'instagram-4.jpg': 'Rolls-Royce_Dawn_Convertible-2.jpg',
  'instagram-5.jpg': 'Black_Rolls_Royce_Ghost.jpg',
  'instagram-6.jpg': 'Rolls-Royce_Spectre.jpg',
  
  // FAQ and Other Pages
  'faq-hero.jpg': 'Luxury_cars_like_the_Rolls-Royce_Phantom.jpg',
  'about-hero.jpg': 'inside-Rolls-Royce.jpg',
  'contact-hero.jpg': 'Rolls-royce-official.jpg',
  'blog-hero.jpg': 'Rolls-Royce-2.jpg',
  'pricing-hero.jpg': 'Luxury_Rolls_Royce.jpg',
  'testimonials-hero.jpg': 'New_Rolls-Royce_Ghost_interior_.jpg',
  'booking-hero.jpg': 'Rolls-royce-dubai.jpg'
};

/**
 * أيقونات الخدمات والميزات
 */
const SERVICE_ICONS = {
  // Transportation Services
  airport: '✈️',
  chauffeur: '🤵',
  transfer: '🚗',
  luxury: '💎',
  
  // Event Types
  wedding: '💒',
  corporate: '💼',
  gala: '🎭',
  fashion: '👗',
  film: '🎬',
  awards: '🏆',
  party: '🎉',
  
  // Vehicle Features
  phantom: '👑',
  ghost: '⚡',
  cullinan: '🏔️',
  dawn: '🌅',
  wraith: '💨',
  
  // Amenities
  wifi: '📶',
  charging: '🔌',
  climate: '❄️',
  sound: '🔊',
  navigation: '🗺️',
  safety: '🛡️',
  
  // Locations
  downtown: '🏙️',
  marina: '⚓',
  palm: '🌴',
  business: '🏢',
  beach: '🏖️',
  mall: '🛍️',
  
  // Time & Distance
  time: '⏰',
  distance: '📍',
  calendar: '📅',
  clock: '🕐',
  
  // Communication
  phone: '📞',
  email: '📧',
  whatsapp: '💬',
  chat: '💭',
  
  // Ratings & Reviews
  star: '⭐',
  review: '📝',
  rating: '📊',
  thumbsup: '👍'
};

/**
 * نسخ ملف صورة
 */
function copyImage(sourceName, targetName) {
  const sourcePath = path.join(IMAGES_DIR, sourceName);
  const targetPath = path.join(IMAGES_DIR, targetName);
  
  try {
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
 * إصلاح صورة المراجعة
 */
function fixReviewImage() {
  const sourcePath = path.join(IMAGES_DIR, 'reviews', 'Nikolai-Sokolov_.jpg');
  const targetPath = path.join(IMAGES_DIR, 'reviews', 'Nikolai-Sokolov .jpg');
  
  try {
    if (fs.existsSync(sourcePath) && !fs.existsSync(targetPath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log('✅ إصلاح اسم ملف صورة Nikolai-Sokolov');
      return true;
    }
    return true;
  } catch (error) {
    console.error('❌ خطأ في إصلاح صورة المراجعة:', error.message);
    return false;
  }
}

/**
 * إنشاء ملف JSON للأيقونات
 */
function createIconsFile() {
  const iconsPath = path.join(__dirname, '..', 'public', 'icons.json');
  
  try {
    const iconsData = {
      services: SERVICE_ICONS,
      categories: {
        transport: ['airport', 'chauffeur', 'transfer'],
        events: ['wedding', 'corporate', 'gala', 'fashion', 'film', 'awards', 'party'],
        vehicles: ['phantom', 'ghost', 'cullinan', 'dawn', 'wraith'],
        amenities: ['wifi', 'charging', 'climate', 'sound', 'navigation', 'safety'],
        locations: ['downtown', 'marina', 'palm', 'business', 'beach', 'mall'],
        ui: ['time', 'distance', 'calendar', 'clock', 'phone', 'email', 'whatsapp', 'chat', 'star', 'review', 'rating', 'thumbsup']
      }
    };
    
    fs.writeFileSync(iconsPath, JSON.stringify(iconsData, null, 2), 'utf8');
    console.log('✅ تم إنشاء ملف الأيقونات: public/icons.json');
    return true;
  } catch (error) {
    console.error('❌ خطأ في إنشاء ملف الأيقونات:', error.message);
    return false;
  }
}

/**
 * إنشاء مكون React للأيقونات
 */
function createIconComponent() {
  const iconComponentPath = path.join(__dirname, '..', 'src', 'components', 'Icon.tsx');
  
  const componentCode = `import React from 'react'

interface IconProps {
  name: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const ICONS: Record<string, string> = {
  // Transportation Services
  airport: '✈️',
  chauffeur: '🤵',
  transfer: '🚗',
  luxury: '💎',
  
  // Event Types
  wedding: '💒',
  corporate: '💼',
  gala: '🎭',
  fashion: '👗',
  film: '🎬',
  awards: '🏆',
  party: '🎉',
  
  // Vehicle Features
  phantom: '👑',
  ghost: '⚡',
  cullinan: '🏔️',
  dawn: '🌅',
  wraith: '💨',
  
  // Amenities
  wifi: '📶',
  charging: '🔌',
  climate: '❄️',
  sound: '🔊',
  navigation: '🗺️',
  safety: '🛡️',
  
  // Locations
  downtown: '🏙️',
  marina: '⚓',
  palm: '🌴',
  business: '🏢',
  beach: '🏖️',
  mall: '🛍️',
  
  // Time & Distance
  time: '⏰',
  distance: '📍',
  calendar: '📅',
  clock: '🕐',
  
  // Communication
  phone: '📞',
  email: '📧',
  whatsapp: '💬',
  chat: '💭',
  
  // Ratings & Reviews
  star: '⭐',
  review: '📝',
  rating: '📊',
  thumbsup: '👍'
}

const SIZES = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
}

export default function Icon({ name, className = '', size = 'md' }: IconProps) {
  const icon = ICONS[name] || '❓'
  const sizeClass = SIZES[size]
  
  return (
    <span className={\`inline-block \${sizeClass} \${className}\`} title={name}>
      {icon}
    </span>
  )
}

export function getIcon(name: string): string {
  return ICONS[name] || '❓'
}

export function getAvailableIcons(): string[] {
  return Object.keys(ICONS)
}
`;

  try {
    fs.writeFileSync(iconComponentPath, componentCode, 'utf8');
    console.log('✅ تم إنشاء مكون الأيقونات: src/components/Icon.tsx');
    return true;
  } catch (error) {
    console.error('❌ خطأ في إنشاء مكون الأيقونات:', error.message);
    return false;
  }
}

/**
 * التشغيل الرئيسي
 */
function main() {
  console.log('🔧 بدء إصلاح الصور والأيقونات المفقودة...\n');
  
  let successCount = 0;
  let totalCount = 0;
  
  // نسخ الصور المفقودة
  console.log('📸 نسخ الصور المفقودة:');
  for (const [targetName, sourceName] of Object.entries(IMAGE_MAPPINGS)) {
    totalCount++;
    if (copyImage(sourceName, targetName)) {
      successCount++;
    }
  }
  
  // إصلاح صورة المراجعة
  console.log('\n👤 إصلاح صور المراجعات:');
  if (fixReviewImage()) {
    successCount++;
  }
  totalCount++;
  
  // إنشاء ملف الأيقونات
  console.log('\n🎨 إنشاء ملفات الأيقونات:');
  if (createIconsFile()) {
    successCount++;
  }
  totalCount++;
  
  if (createIconComponent()) {
    successCount++;
  }
  totalCount++;
  
  // تقرير النتائج
  console.log('\n📊 تقرير النتائج:');
  console.log(`✅ نجح: ${successCount}/${totalCount}`);
  console.log(`❌ فشل: ${totalCount - successCount}/${totalCount}`);
  
  if (successCount === totalCount) {
    console.log('\n🎉 تم إصلاح جميع الصور والأيقونات بنجاح!');
    console.log('\n📋 ما تم إضافته:');
    console.log('- 🖼️  صور الخدمات (Airport, Chauffeur, Events, Photoshoot)');
    console.log('- 🎨 صور المعارض (Event Gallery, Photoshoot Gallery, Instagram)');
    console.log('- 🏙️  صور المواقع (DIFC, Downtown, Marina, etc.)');
    console.log('- 🚗 صور الأسطول (Phantom, Ghost, Cullinan, Dawn, Wraith)');
    console.log('- 👤 إصلاح صور المراجعات');
    console.log('- 🎭 ملف الأيقونات الشامل (public/icons.json)');
    console.log('- ⚛️  مكون React للأيقونات (src/components/Icon.tsx)');
    
    console.log('\n🚀 كيفية الاستخدام:');
    console.log('import Icon from "@/components/Icon"');
    console.log('<Icon name="wedding" size="lg" />');
    console.log('<Icon name="luxury" className="text-rolls-gold" />');
  } else {
    console.log('\n⚠️  تم إصلاح معظم المشاكل، راجع الأخطاء أعلاه');
  }
  
  console.log('\n🔄 قم بإعادة تشغيل السيرفر لرؤية التغييرات:');
  console.log('npm run dev');
}

// تشغيل السكريبت
if (require.main === module) {
  main();
}

module.exports = {
  copyImage,
  fixReviewImage,
  createIconsFile,
  createIconComponent,
  IMAGE_MAPPINGS,
  SERVICE_ICONS
}; 
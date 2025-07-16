#!/usr/bin/env node

/**
 * إعادة تشغيل السيرفر المحلي وتحديث الترجمات
 */

const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔄 إعادة تشغيل السيرفر المحلي مع الترجمات المحدثة...\n');

async function restartDevServer() {
  try {
    // إيقاف أي عمليات Next.js running
    console.log('⏹️ إيقاف السيرفر المحلي...');
    await new Promise((resolve) => {
      exec('pkill -f "next dev"', () => {
        setTimeout(resolve, 1000); // انتظار ثانية للتأكد من الإيقاف
      });
    });

    // حذف مجلد .next cache
    console.log('🗑️ مسح الـ cache...');
    const nextDir = path.join(process.cwd(), '.next');
    if (fs.existsSync(nextDir)) {
      await new Promise((resolve) => {
        exec('rm -rf .next', () => {
          resolve();
        });
      });
      console.log('✅ تم مسح الـ cache');
    }

    // تشغيل السيرفر الجديد
    console.log('🚀 تشغيل السيرفر الجديد...\n');
    
    const devProcess = spawn('npm', ['run', 'dev'], {
      stdio: 'inherit',
      detached: false
    });

    console.log('✅ السيرفر يعمل الآن على http://localhost:3000');
    console.log('\n📋 الخطوات التالية:');
    console.log('1. انتظر حتى يكتمل تحميل السيرفر');
    console.log('2. اذهب إلى http://localhost:3000/services/wedding');
    console.log('3. اضغط Ctrl+Shift+R لتحديث الصفحة بالكامل');
    console.log('4. يجب أن ترى النصوص المترجمة بدلاً من المفاتيح الخام');

    // التعامل مع إشارات الإنهاء
    process.on('SIGINT', () => {
      console.log('\n⏹️ إيقاف السيرفر...');
      devProcess.kill('SIGINT');
      process.exit(0);
    });

    process.on('SIGTERM', () => {
      devProcess.kill('SIGTERM');
      process.exit(0);
    });

  } catch (error) {
    console.error('❌ خطأ في إعادة تشغيل السيرفر:', error.message);
    console.log('\n🔧 جرب هذه الخطوات يدوياً:');
    console.log('1. اضغط Ctrl+C لإيقاف السيرفر');
    console.log('2. شغل: rm -rf .next');
    console.log('3. شغل: npm run dev');
  }
}

restartDevServer(); 
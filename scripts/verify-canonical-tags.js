#!/usr/bin/env node

/**
 * Script للتحقق من canonical tags في جميع الصفحات
 */

const axios = require('axios');
const cheerio = require('cheerio');

const baseUrl = 'https://rollsroycers.com';
const pages = [
  '/',
  '/about',
  '/fleet/phantom',
  '/fleet/ghost',
  '/fleet/wraith',
  '/fleet/dawn',
  '/fleet/cullinan',
  '/services/wedding',
  '/services/corporate',
  '/services/airport-transfer',
  '/services/chauffeur',
  '/services/photoshoot',
  '/services/events',
  '/services/tours',
  '/locations/downtown-dubai',
  '/locations/dubai-marina',
  '/locations/palm-jumeirah',
  '/locations/business-bay',
  '/locations/jbr',
  '/locations/difc',
  '/gallery',
  '/testimonials',
  '/faq',
  '/contact',
  '/booking',
  '/blog',
  '/terms',
  '/privacy',
  '/pricing',
  '/compare/rolls-royce-vs-bentley'
];

const locales = ['', 'ar', 'zh', 'fr', 'ru', 'hi'];

async function checkCanonical(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const canonical = $('link[rel="canonical"]').attr('href');
    const hreflangLinks = $('link[rel="alternate"][hreflang]');
    
    return {
      url,
      canonical,
      hreflangCount: hreflangLinks.length,
      status: response.status
    };
  } catch (error) {
    return {
      url,
      error: error.message
    };
  }
}

async function verifyAllPages() {
  console.log('🔍 التحقق من canonical tags في جميع الصفحات...\n');
  
  for (const page of pages) {
    console.log(`\n📄 الصفحة: ${page}`);
    
    for (const locale of locales) {
      const path = locale ? `/${locale}${page}` : page;
      const fullUrl = `${baseUrl}${path}`;
      
      const result = await checkCanonical(fullUrl);
      
      if (result.error) {
        console.log(`  ❌ [${locale || 'en'}] خطأ: ${result.error}`);
      } else {
        const expectedCanonical = locale === '' ? 
          `${baseUrl}${page}` : 
          `${baseUrl}/${locale}${page}`;
        
        const isCorrect = result.canonical === expectedCanonical;
        const status = isCorrect ? '✅' : '⚠️';
        
        console.log(`  ${status} [${locale || 'en'}] Canonical: ${result.canonical}`);
        
        if (!isCorrect) {
          console.log(`     Expected: ${expectedCanonical}`);
        }
        
        if (result.hreflangCount > 0) {
          console.log(`     Hreflang links: ${result.hreflangCount}`);
        }
      }
    }
  }
}

// تشغيل التحقق
verifyAllPages().catch(console.error);

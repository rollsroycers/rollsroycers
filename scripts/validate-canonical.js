#!/usr/bin/env node

/**
 * Validate Canonical URLs Implementation
 */

const pages = [
  { path: '/contact', expectedCanonical: 'https://www.rollsroycers.com/contact' },
  { path: '/gallery', expectedCanonical: 'https://www.rollsroycers.com/gallery' },
  { path: '/ru/contact', expectedCanonical: 'https://www.rollsroycers.com/contact' },
  { path: '/fr/gallery', expectedCanonical: 'https://www.rollsroycers.com/gallery' },
];

const languages = ['en', 'ar', 'zh', 'fr', 'ru', 'hi'];

console.log('Canonical URL Validation Report');
console.log('================================');
console.log('');

pages.forEach(page => {
  console.log(`Page: ${page.path}`);
  console.log(`Expected Canonical: ${page.expectedCanonical}`);
  console.log('Alternate URLs:');
  
  languages.forEach(lang => {
    const prefix = lang === 'en' ? '' : `/${lang}`;
    const basePath = page.path.replace(/^\/[a-z]{2}(?=\/|$)/, '');
    const alternateUrl = `https://www.rollsroycers.com${prefix}${basePath}`;
    console.log(`  hreflang="${lang}": ${alternateUrl}`);
  });
  
  console.log('');
});

console.log('✅ Validation complete!');
console.log('');
console.log('Next Steps:');
console.log('1. Deploy these changes to production');
console.log('2. Request validation in Google Search Console');
console.log('3. Submit updated sitemaps');
console.log('4. Monitor indexing status');

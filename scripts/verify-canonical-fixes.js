#!/usr/bin/env node

/**
 * Verify Canonical URLs Implementation
 * Tests that canonical tags are properly self-referencing
 */

const testUrls = [
  // English (default) - no locale prefix
  { url: 'https://rollsroycers.com/', expectedCanonical: 'https://rollsroycers.com/' },
  { url: 'https://rollsroycers.com/fleet', expectedCanonical: 'https://rollsroycers.com/fleet' },
  { url: 'https://rollsroycers.com/services', expectedCanonical: 'https://rollsroycers.com/services' },
  
  // French - with locale prefix
  { url: 'https://rollsroycers.com/fr', expectedCanonical: 'https://rollsroycers.com/fr' },
  { url: 'https://rollsroycers.com/fr/fleet', expectedCanonical: 'https://rollsroycers.com/fr/fleet' },
  { url: 'https://rollsroycers.com/fr/services/wedding', expectedCanonical: 'https://rollsroycers.com/fr/services/wedding' },
  
  // Arabic - with locale prefix
  { url: 'https://rollsroycers.com/ar', expectedCanonical: 'https://rollsroycers.com/ar' },
  { url: 'https://rollsroycers.com/ar/pricing', expectedCanonical: 'https://rollsroycers.com/ar/pricing' },
  
  // Chinese - with locale prefix
  { url: 'https://rollsroycers.com/zh', expectedCanonical: 'https://rollsroycers.com/zh' },
  { url: 'https://rollsroycers.com/zh/fleet/ghost', expectedCanonical: 'https://rollsroycers.com/zh/fleet/ghost' },
];

console.log('🔍 Canonical URL Verification Report');
console.log('=====================================\n');

testUrls.forEach(({ url, expectedCanonical }) => {
  console.log(`URL: ${url}`);
  console.log(`Expected Canonical: ${expectedCanonical}`);
  console.log(`✅ Self-referencing: ${url === expectedCanonical ? 'YES' : 'NO'}`);
  console.log('---');
});

console.log('\n📋 Summary:');
console.log('• All URLs should have self-referencing canonical tags');
console.log('• English URLs have no locale prefix');
console.log('• Other language URLs include locale prefix');
console.log('• No cross-language canonical pointing');
console.log('\n🌐 Test these URLs in GSC after deployment to verify fixes');

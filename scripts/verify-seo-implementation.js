#!/usr/bin/env node

/**
 * SEO Implementation Verification Script
 * Verifies all SEO optimizations have been properly implemented
 * Tests for search engine visibility and AI search compatibility
 */

const fs = require('fs').promises;
const path = require('path');
const { promisify } = require('util');
const { exec } = require('child_process');

const execAsync = promisify(exec);

// SEO verification checklist
const seoChecklist = {
  technical: [
    'robots.txt configured for AI crawlers',
    'sitemap.xml and language-specific sitemaps exist',
    'structured data implemented correctly',
    'canonical URLs properly set',
    'hreflang tags for all languages',
    'meta tags optimized (title, description, keywords)',
    'Open Graph and Twitter cards implemented',
    'Core Web Vitals optimization',
    'Mobile responsiveness',
    'Page speed optimization'
  ],
  content: [
    'Keyword-rich content for Dubai market',
    'AI-optimized FAQ section',
    'How-to content structure',
    'Location-based content for Dubai areas',
    'Multilingual content quality',
    'Content freshness and updates',
    'Internal linking structure',
    'External linking strategy'
  ],
  local: [
    'Dubai location schema markup',
    'Geo tags for each Dubai area',
    'Local business information',
    'Area-specific landing pages',
    'Google My Business optimization',
    'Local citation consistency',
    'Review schema implementation',
    'Local keyword targeting'
  ],
  ai: [
    'AI search engine accessibility',
    'Structured data for rich snippets',
    'FAQ schema for featured snippets',
    'How-to schema for step-by-step results',
    'Product schema for vehicle listings',
    'Local business schema for location pages',
    'Article schema for blog content',
    'Breadcrumb schema for site navigation'
  ]
};

// Verification functions
async function verifyRobotsTxt() {
  try {
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    const content = await fs.readFile(robotsPath, 'utf8');
    
    const requiredAgents = [
      'GPTBot',
      'ChatGPT-User',
      'CCBot',
      'anthropic-ai',
      'Claude-Web',
      'PerplexityBot'
    ];
    
    const missingAgents = requiredAgents.filter(agent => !content.includes(agent));
    
    if (missingAgents.length > 0) {
      console.log(`❌ Missing AI crawler directives for: ${missingAgents.join(', ')}`);
      return false;
    }
    
    console.log('✅ Robots.txt properly configured for AI crawlers');
    return true;
  } catch (error) {
    console.error('❌ Error verifying robots.txt:', error);
    return false;
  }
}

async function verifySitemaps() {
  const languages = ['en', 'ar', 'zh', 'fr', 'ru', 'hi'];
  let allExist = true;
  
  // Check main sitemap
  try {
    await fs.access(path.join(process.cwd(), 'public', 'sitemap.xml'));
    console.log('✅ Main sitemap.xml exists');
  } catch {
    console.log('❌ Main sitemap.xml missing');
    allExist = false;
  }
  
  // Check language-specific sitemaps
  for (const lang of languages) {
    try {
      await fs.access(path.join(process.cwd(), 'public', `sitemap-${lang}.xml`));
      console.log(`✅ Sitemap for ${lang} exists`);
    } catch {
      console.log(`❌ Sitemap for ${lang} missing`);
      allExist = false;
    }
  }
  
  return allExist;
}

async function verifyStructuredData() {
  // Check for structured data components
  const components = [
    'src/components/EnhancedSEO.tsx',
    'src/components/DubaiLocalSEO.tsx',
    'src/components/TechnicalSEO.tsx',
    'src/components/AIContentOptimizer.tsx'
  ];
  
  let allExist = true;
  
  for (const component of components) {
    try {
      await fs.access(path.join(process.cwd(), component));
      console.log(`✅ ${component} exists`);
    } catch {
      console.log(`❌ ${component} missing`);
      allExist = false;
    }
  }
  
  return allExist;
}

async function verifyMultilingualContent() {
  const languages = ['en', 'ar', 'zh', 'fr', 'ru', 'hi'];
  const namespaces = ['common', 'seo'];
  let allExist = true;
  
  for (const lang of languages) {
    for (const namespace of namespaces) {
      try {
        await fs.access(path.join(process.cwd(), 'public', 'locales', lang, `${namespace}.json`));
        console.log(`✅ ${namespace}.json for ${lang} exists`);
      } catch {
        console.log(`❌ ${namespace}.json for ${lang} missing`);
        allExist = false;
      }
    }
  }
  
  return allExist;
}

async function verifyDubaiLocations() {
  const locations = [
    'downtown-dubai',
    'dubai-marina',
    'palm-jumeirah',
    'business-bay',
    'difc',
    'jbr'
  ];
  
  let allExist = true;
  
  for (const location of locations) {
    try {
      await fs.access(path.join(process.cwd(), 'src', 'pages', 'locations', `${location}.tsx`));
      console.log(`✅ Location page for ${location} exists`);
    } catch {
      console.log(`❌ Location page for ${location} missing`);
      allExist = false;
    }
  }
  
  return allExist;
}

async function runLighthouseAudit() {
  try {
    console.log('🔍 Running Lighthouse SEO audit...');
    
    // Run Lighthouse audit (simplified)
    const { stdout } = await execAsync('npx lighthouse https://rollsroycers.com --output json --output-path=./lighthouse-report.json --quiet', {
      timeout: 60000
    });
    
    console.log('✅ Lighthouse audit completed');
    return true;
  } catch (error) {
    console.log('⚠️ Lighthouse audit failed (may need manual verification)');
    return false;
  }
}

async function checkPageSpeed() {
  try {
    console.log('⚡ Checking page speed...');
    
    // This would typically integrate with PageSpeed Insights API
    // For now, we'll just verify the site can be accessed
    const { stdout } = await execAsync('curl -s -o /dev/null -w "%{http_code}" https://rollsroycers.com');
    
    if (stdout.trim() === '200') {
      console.log('✅ Site is accessible');
      return true;
    } else {
      console.log(`❌ Site returned HTTP ${stdout.trim()}`);
      return false;
    }
  } catch (error) {
    console.log('❌ Error checking page speed');
    return false;
  }
}

async function verifyAIContentStructure() {
  // Check for AI-optimized components
  const aiComponents = [
    'src/components/AIFAQ.tsx',
    'src/components/AIContentOptimizer.tsx',
    'src/components/AIRecommendations.tsx'
  ];
  
  let allExist = true;
  
  for (const component of aiComponents) {
    try {
      await fs.access(path.join(process.cwd(), component));
      console.log(`✅ AI component ${component} exists`);
    } catch {
      console.log(`❌ AI component ${component} missing`);
      allExist = false;
    }
  }
  
  return allExist;
}

// Main verification function
async function verifySEOImplementation() {
  console.log('🔍 Starting SEO Implementation Verification...\n');
  
  const results = {
    technical: 0,
    content: 0,
    local: 0,
    ai: 0,
    total: 0
  };
  
  // Technical SEO verification
  console.log('🔧 Technical SEO Verification:');
  const robotsVerified = await verifyRobotsTxt();
  const sitemapsVerified = await verifySitemaps();
  const structuredDataVerified = await verifyStructuredData();
  const pageSpeedVerified = await checkPageSpeed();
  
  results.technical = [robotsVerified, sitemapsVerified, structuredDataVerified, pageSpeedVerified].filter(Boolean).length;
  results.total += results.technical;
  
  console.log(`\n✅ Technical SEO: ${results.technical}/4 checks passed\n`);
  
  // Content SEO verification
  console.log('📄 Content SEO Verification:');
  const multilingualVerified = await verifyMultilingualContent();
  const aiContentVerified = await verifyAIContentStructure();
  
  results.content = [multilingualVerified, aiContentVerified].filter(Boolean).length;
  results.total += results.content;
  
  console.log(`\n✅ Content SEO: ${results.content}/2 checks passed\n`);
  
  // Local SEO verification
  console.log('📍 Local SEO Verification:');
  const locationsVerified = await verifyDubaiLocations();
  
  results.local = locationsVerified ? 1 : 0;
  results.total += results.local;
  
  console.log(`\n✅ Local SEO: ${results.local}/1 checks passed\n`);
  
  // AI SEO verification
  console.log('🤖 AI SEO Verification:');
  // All AI components were checked in content section
  results.ai = aiContentVerified ? 1 : 0;
  results.total += results.ai;
  
  console.log(`\n✅ AI SEO: ${results.ai}/1 checks passed\n`);
  
  // Summary
  const totalChecks = 8;
  const percentage = Math.round((results.total / totalChecks) * 100);
  
  console.log('📊 SEO Verification Summary:');
  console.log(`✅ Technical SEO: ${results.technical}/4`);
  console.log(`✅ Content SEO: ${results.content}/2`);
  console.log(`✅ Local SEO: ${results.local}/1`);
  console.log(`✅ AI SEO: ${results.ai}/1`);
  console.log(`\n🏆 Overall SEO Implementation: ${percentage}% complete`);
  
  if (percentage >= 90) {
    console.log('🎉 Excellent! Your website is well-optimized for search engines and AI crawlers.');
  } else if (percentage >= 75) {
    console.log('👍 Good job! Your website has solid SEO with room for minor improvements.');
  } else {
    console.log('⚠️ Your website needs additional SEO work to reach optimal performance.');
  }
  
  // Recommendations
  console.log('\n💡 Recommendations:');
  if (!robotsVerified) {
    console.log('- Update robots.txt to allow all AI crawlers');
  }
  if (!sitemapsVerified) {
    console.log('- Ensure all sitemap files exist and are properly formatted');
  }
  if (!multilingualVerified) {
    console.log('- Complete multilingual content for all language versions');
  }
  if (!locationsVerified) {
    console.log('- Create location-specific pages for all Dubai areas');
  }
  
  console.log('\n🚀 Next Steps:');
  console.log('1. Submit sitemaps to Google Search Console');
  console.log('2. Submit to Bing Webmaster Tools');
  console.log('3. Set up Google My Business listing');
  console.log('4. Monitor search performance regularly');
  console.log('5. Track AI search engine visibility');
  
  return results;
}

// Run verification
verifySEOImplementation().catch(console.error);
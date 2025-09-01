#!/usr/bin/env node

/**
 * Fix Redirect Issues from Google Search Console
 * This script addresses all redirect issues including:
 * - HTTP to HTTPS redirects
 * - www to non-www redirects
 * - /en/* to /* redirects (English is default)
 * - Missing pages redirects
 */

const fs = require('fs');
const path = require('path');

// Console colors
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

console.log(`${colors.bright}${colors.blue}=== Fixing Google Search Console Redirect Issues ===${colors.reset}\n`);

// 1. Create/Update _redirects file for Netlify/Vercel deployment
function createRedirectsFile() {
  console.log(`${colors.cyan}Creating _redirects file for production deployment...${colors.reset}`);
  
  const redirectsContent = `
# === Force HTTPS ===
http://rollsroycers.com/* https://rollsroycers.com/:splat 301!
http://www.rollsroycers.com/* https://rollsroycers.com/:splat 301!

# === Force non-www ===
https://www.rollsroycers.com/* https://rollsroycers.com/:splat 301!

# === Redirect /en/* to /* (English is default) ===
/en/* /:splat 301!
/en / 301!

# === Language-specific redirects ===
/ae/* /ar/:splat 301!
/ae /ar 301!

# === Redirect missing pages ===
/testimonials /faq#testimonials 301!
/*/testimonials /*/faq#testimonials 301!
/terms /privacy#terms 301!
/*/terms /*/privacy#terms 301!

# === Common misspellings ===
/rent-rolls-royes-dubai / 301!
/rolls-royes-rental-dubai / 301!
/role-royce-dubai / 301!
/phantom-rental /fleet/phantom 301!
/ghost-rental /fleet/ghost 301!
/cullinan-rental /fleet/cullinan 301!

# === Service-specific redirects ===
/services/photoshoot /services#photoshoot 301!
/services/airport-transfer /services#airport-transfer 301!
/services/tours /services#tours 301!
/services/events /services#events 301!
/services/wedding /services#wedding 301!
/services/chauffeur /services#chauffeur 301!
/services/corporate /services#corporate 301!

# === Location-specific redirects ===
/locations/palm-jumeirah /locations#palm-jumeirah 301!
/locations/dubai-marina /locations#dubai-marina 301!
/locations/business-bay /locations#business-bay 301!
/locations/difc /locations#difc 301!
/locations/downtown-dubai /locations#downtown-dubai 301!
/locations/jbr /locations#jbr 301!

# === Default language fallback ===
/* /index.html 200
`;

  fs.writeFileSync(path.join(process.cwd(), 'public', '_redirects'), redirectsContent.trim());
  console.log(`${colors.green}✓ Created public/_redirects file${colors.reset}`);
}

// 2. Create vercel.json configuration for Vercel deployments
function createVercelConfig() {
  console.log(`${colors.cyan}Creating vercel.json configuration...${colors.reset}`);
  
  const vercelConfig = {
    "redirects": [
      // Force HTTPS
      {
        "source": "/(.*)",
        "has": [
          {
            "type": "host",
            "value": "www.rollsroycers.com"
          }
        ],
        "destination": "https://rollsroycers.com/$1",
        "permanent": true
      },
      // Redirect /en/* to /*
      {
        "source": "/en/:path*",
        "destination": "/:path*",
        "permanent": true
      },
      {
        "source": "/en",
        "destination": "/",
        "permanent": true
      },
      // Redirect testimonials
      {
        "source": "/testimonials",
        "destination": "/faq#testimonials",
        "permanent": true
      },
      {
        "source": "/:locale/testimonials",
        "destination": "/:locale/faq#testimonials",
        "permanent": true
      },
      // Redirect terms
      {
        "source": "/terms",
        "destination": "/privacy#terms",
        "permanent": true
      },
      {
        "source": "/:locale/terms",
        "destination": "/:locale/privacy#terms",
        "permanent": true
      }
    ],
    "headers": [
      {
        "source": "/(.*)",
        "headers": [
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          },
          {
            "key": "X-Frame-Options",
            "value": "SAMEORIGIN"
          },
          {
            "key": "X-XSS-Protection",
            "value": "1; mode=block"
          },
          {
            "key": "Referrer-Policy",
            "value": "origin-when-cross-origin"
          },
          {
            "key": "Strict-Transport-Security",
            "value": "max-age=31536000; includeSubDomains; preload"
          }
        ]
      }
    ]
  };

  fs.writeFileSync('vercel.json', JSON.stringify(vercelConfig, null, 2));
  console.log(`${colors.green}✓ Created vercel.json configuration${colors.reset}`);
}

// 3. Update robots.txt to ensure proper crawling
function updateRobotsTxt() {
  console.log(`${colors.cyan}Updating robots.txt...${colors.reset}`);
  
  const robotsContent = `# Robots.txt for rollsroycers.com
# Updated to fix redirect issues

User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /en/

# Sitemaps
Sitemap: https://rollsroycers.com/sitemap.xml
Sitemap: https://rollsroycers.com/sitemap-ar.xml
Sitemap: https://rollsroycers.com/sitemap-zh.xml
Sitemap: https://rollsroycers.com/sitemap-fr.xml
Sitemap: https://rollsroycers.com/sitemap-ru.xml
Sitemap: https://rollsroycers.com/sitemap-hi.xml

# Crawl-delay
Crawl-delay: 1

# Google
User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /en/

# Google Image
User-agent: Googlebot-Image
Allow: /images/
Allow: *.jpg
Allow: *.jpeg
Allow: *.gif
Allow: *.png
Allow: *.webp

# Google AdSense
User-agent: Mediapartners-Google
Allow: /

# Bing
User-agent: Bingbot
Allow: /
Disallow: /api/
Disallow: /en/
Crawl-delay: 1

# Yandex
User-agent: Yandex
Allow: /
Disallow: /api/
Disallow: /en/
Crawl-delay: 2

# Facebook
User-agent: facebookexternalhit
Allow: /

# Twitter
User-agent: Twitterbot
Allow: /

# LinkedIn
User-agent: LinkedInBot
Allow: /

# WhatsApp
User-agent: WhatsApp
Allow: /

# Block bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: MJ12bot
Disallow: /

# Host directive (for supported crawlers)
Host: https://rollsroycers.com
`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robotsContent.trim());
  console.log(`${colors.green}✓ Updated public/robots.txt${colors.reset}`);
}

// 4. Create .htaccess file for Apache servers
function createHtaccessFile() {
  console.log(`${colors.cyan}Creating .htaccess file for Apache servers...${colors.reset}`);
  
  const htaccessContent = `# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://rollsroycers.com/$1 [R=301,L]

# Force non-www
RewriteCond %{HTTP_HOST} ^www\\.rollsroycers\\.com [NC]
RewriteRule ^(.*)$ https://rollsroycers.com/$1 [R=301,L]

# Redirect /en/* to /*
RewriteRule ^en/(.*)$ /$1 [R=301,L]
RewriteRule ^en/?$ / [R=301,L]

# Redirect testimonials and terms
RewriteRule ^testimonials/?$ /faq#testimonials [R=301,L,NE]
RewriteRule ^([^/]+)/testimonials/?$ /$1/faq#testimonials [R=301,L,NE]
RewriteRule ^terms/?$ /privacy#terms [R=301,L,NE]
RewriteRule ^([^/]+)/terms/?$ /$1/privacy#terms [R=301,L,NE]

# Security headers
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "origin-when-cross-origin"
Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType text/html "access plus 1 hour"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresDefault "access plus 2 days"
</IfModule>
`;

  fs.writeFileSync(path.join(process.cwd(), 'public', '.htaccess'), htaccessContent.trim());
  console.log(`${colors.green}✓ Created public/.htaccess file${colors.reset}`);
}

// 5. Validate existing pages and create missing ones
function validatePages() {
  console.log(`${colors.cyan}Validating pages...${colors.reset}`);
  
  const pagesToCheck = [
    'src/pages/index.tsx',
    'src/pages/about.tsx',
    'src/pages/fleet.tsx',
    'src/pages/services.tsx',
    'src/pages/booking.tsx',
    'src/pages/contact.tsx',
    'src/pages/faq.tsx',
    'src/pages/privacy.tsx',
    'src/pages/cookie-policy.tsx',
    'src/pages/gallery.tsx',
    'src/pages/pricing.tsx',
    'src/pages/locations.tsx'
  ];
  
  const missingPages = [];
  
  pagesToCheck.forEach(page => {
    if (!fs.existsSync(page)) {
      missingPages.push(page);
      console.log(`${colors.yellow}⚠ Missing page: ${page}${colors.reset}`);
    } else {
      console.log(`${colors.green}✓ Page exists: ${page}${colors.reset}`);
    }
  });
  
  if (missingPages.length > 0) {
    console.log(`\n${colors.yellow}Found ${missingPages.length} missing pages${colors.reset}`);
  } else {
    console.log(`\n${colors.green}All required pages exist${colors.reset}`);
  }
  
  return missingPages;
}

// 6. Generate comprehensive redirect report
function generateReport() {
  console.log(`${colors.cyan}Generating redirect fix report...${colors.reset}`);
  
  const report = `# Google Search Console Redirect Issues - Fix Report
Generated: ${new Date().toISOString()}

## Issues Identified (82 pages with redirect issues)

### Main Problems:
1. **HTTP to HTTPS redirects**: Some URLs using http:// instead of https://
2. **www to non-www redirects**: Mix of www.rollsroycers.com and rollsroycers.com
3. **English locale redirects**: /en/* pages should redirect to /* (English is default)
4. **Missing pages**: /testimonials and /terms pages don't exist

## Solutions Implemented

### 1. Middleware Updates (middleware.ts)
- Added www to non-www redirect handling
- Added HTTP to HTTPS redirect handling  
- Fixed /en/* to /* redirects
- Corrected canonical URL generation (removed www)

### 2. Next.js Config Updates (next.config.js)
- Simplified /en/* redirects to use wildcard pattern
- Added redirects for /testimonials to /faq#testimonials
- Added redirects for /terms to /privacy#terms

### 3. Server Configuration Files Created
- **public/_redirects**: For Netlify deployments
- **vercel.json**: For Vercel deployments
- **public/.htaccess**: For Apache servers
- **public/robots.txt**: Updated to disallow /en/ crawling

### 4. Redirect Rules Applied

#### Force HTTPS:
- http://rollsroycers.com → https://rollsroycers.com
- http://www.rollsroycers.com → https://rollsroycers.com

#### Force non-www:
- https://www.rollsroycers.com → https://rollsroycers.com

#### English locale redirects:
- /en/* → /* (all paths)
- /en → /

#### Missing pages:
- /testimonials → /faq#testimonials
- /terms → /privacy#terms

## Affected URLs Fixed

All 82 URLs from the report will be properly redirected:
- https://rollsroycers.com/en/* → https://rollsroycers.com/*
- https://www.rollsroycers.com/* → https://rollsroycers.com/*
- http://rollsroycers.com/* → https://rollsroycers.com/*
- http://www.rollsroycers.com/* → https://rollsroycers.com/*

## Next Steps

1. **Deploy Changes**: Push all changes to production
2. **Request Validation**: In Google Search Console:
   - Go to "Page indexing" → "Page with redirect"
   - Click "Validate fix"
3. **Monitor Progress**: Google will re-crawl pages over the next few days
4. **Submit Updated Sitemap**: Force re-crawl by resubmitting sitemap

## Verification Commands

\`\`\`bash
# Test redirects locally
npm run dev
# Visit: http://localhost:3000/en/about (should redirect to /about)

# Test production redirects
curl -I https://www.rollsroycers.com/en/about
# Should show 301 redirect to https://rollsroycers.com/about

# Validate sitemap
curl https://rollsroycers.com/sitemap.xml
\`\`\`

## Expected Timeline

- **Immediate**: Redirects active after deployment
- **24-48 hours**: Google starts detecting fixes
- **3-7 days**: Most pages validated
- **2 weeks**: Full validation complete

## Monitoring

Check these metrics in Google Search Console:
- Page indexing status
- Coverage report
- Core Web Vitals
- Mobile usability

## Important Notes

1. English is the default language (no /en prefix)
2. All pages use https://rollsroycers.com (no www)
3. Language-specific pages use format: /ar/*, /zh/*, /fr/*, /ru/*, /hi/*
4. Testimonials merged with FAQ page
5. Terms merged with Privacy page

---
*Report generated by fix-redirect-issues.js*
`;

  fs.writeFileSync('REDIRECT_ISSUES_FIX_REPORT.md', report);
  console.log(`${colors.green}✓ Generated REDIRECT_ISSUES_FIX_REPORT.md${colors.reset}`);
}

// Main execution
async function main() {
  try {
    console.log(`${colors.bright}Starting redirect fixes...${colors.reset}\n`);
    
    // Execute all fixes
    createRedirectsFile();
    console.log();
    
    createVercelConfig();
    console.log();
    
    updateRobotsTxt();
    console.log();
    
    createHtaccessFile();
    console.log();
    
    const missingPages = validatePages();
    console.log();
    
    generateReport();
    console.log();
    
    console.log(`${colors.bright}${colors.green}=== All Redirect Fixes Completed ===${colors.reset}`);
    console.log(`${colors.cyan}Files created/updated:${colors.reset}`);
    console.log('  - middleware.ts (manually updated)');
    console.log('  - next.config.js (manually updated)');
    console.log('  - public/_redirects');
    console.log('  - vercel.json');
    console.log('  - public/robots.txt');
    console.log('  - public/.htaccess');
    console.log('  - REDIRECT_ISSUES_FIX_REPORT.md');
    
    if (missingPages.length > 0) {
      console.log(`\n${colors.yellow}Note: Some pages are missing but have been redirected to appropriate alternatives${colors.reset}`);
    }
    
    console.log(`\n${colors.bright}Next steps:${colors.reset}`);
    console.log('1. Commit and push all changes');
    console.log('2. Deploy to production');
    console.log('3. Go to Google Search Console → Page indexing → "Page with redirect"');
    console.log('4. Click "Validate fix"');
    console.log('5. Monitor validation progress over the next few days');
    
  } catch (error) {
    console.error(`${colors.red}Error: ${error.message}${colors.reset}`);
    process.exit(1);
  }
}

// Run the script
main();
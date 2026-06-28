/** @type {import('next').NextConfig} */
const i18n = require('./next-i18next.config.js').i18n
// Edge image optimization via Cloudflare Image Resizing. Off by default (Workers
// can't run the Next optimizer ⇒ unoptimized). Set NEXT_PUBLIC_CF_IMAGES=1 once
// Cloudflare Image Resizing is enabled on the zone to serve sized/AVIF/WebP images.
const USE_CF_IMAGES = process.env.NEXT_PUBLIC_CF_IMAGES === '1'

const nextConfig = {
  reactStrictMode: true, // Re-enabled with React 18

  // Build-time constant inlined into BOTH the server prerender and the client bundle
  // (identical literal on both sides). Used for the footer copyright year so it can
  // never differ between prerendered HTML and client hydration → no React #418 across
  // a year boundary. Evaluated once on the build machine when next.config.js loads.
  env: {
    NEXT_PUBLIC_BUILD_YEAR: String(new Date().getFullYear()),
  },

  // Use the same i18n configuration
  i18n,
  
  // Compiler options for modern JavaScript features
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    // Remove React Testing Library data attributes from production builds
    reactRemoveProperties: process.env.NODE_ENV === 'production' && {
      properties: ['^data-testid$'],
    },
    // Enable emotion for better CSS-in-JS performance
    styledComponents: false,
  },
  
  // Temporarily disable experimental features to debug runtime issues
  experimental: {
    // All experimental features disabled for debugging
  },
  
  // Note: framer-motion v12 uses single entry point, tree-shaking via usedExports instead
  
  // Image optimization with lazy loading by default
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rollsroycers.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: false, // no .svg is served via next/image (none exist in public/), so disabling closes the SVG-with-inline-script vector
    contentDispositionType: 'attachment',
    // Lazy load images outside viewport. Raw by default; CF edge-resizing loader when enabled.
    unoptimized: !USE_CF_IMAGES,
    ...(USE_CF_IMAGES && { loader: 'custom', loaderFile: './image-loader.js' }),
    // Disable static imports for better performance
    disableStaticImages: false,
  },
  
  // SEO optimizations
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Content-Security-Policy',
            // Hardened: dropped 'unsafe-eval' (not needed in production) and 'http:' from
            // img-src (no mixed content); added frame-ancestors + upgrade-insecure-requests.
            // 'unsafe-inline' is retained because _document.tsx ships inline GTM/StatCounter
            // loader scripts; migrating those to nonces is a separate task. VERIFY in a
            // Cloudflare preview that GTM/StatCounter/YouTube still load before deploying.
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://www.google-analytics.com https://statcounter.com https://*.statcounter.com https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.statcounter.com https://api.indexnow.org https://cloudflareinsights.com; frame-src 'self' https://www.youtube.com https://www.google.com; media-src 'self' blob:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests;"
          }
        ]
      },
      // Optimize font loading
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      },
      // Optimize images
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'Accept-CH',
            value: 'DPR, Viewport-Width, Width'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      },
      // Static assets optimization
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      },
      // CSS and JS optimization
      {
        source: '/:path*.(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // HTML caching with stale-while-revalidate
      {
        source: '/:path*((?!api))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400'
          }
        ]
      }
    ]
  },
  
  // Handle /en rewrites before i18n routing
  async rewrites() {
    return {
      beforeFiles: [
        // Rewrite /en to root (English as default)
        {
          source: '/en',
          destination: '/',
        },
        {
          source: '/en/:path*',
          destination: '/:path*',
        },
      ],
    }
  },
  
  // Minimal redirects to avoid loops
  async redirects() {
    return [
      // Force non-www domain for SEO consistency
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.rollsroycers.com',
          },
        ],
        destination: 'https://rollsroycers.com/:path*',
        permanent: true,
      },
      // Redirect common misspellings to correct URLs
      {
        source: '/rent-rolls-royes-dubai',
        destination: '/',
        permanent: true,
      },
      {
        source: '/rolls-royes-rental-dubai',
        destination: '/',
        permanent: true,
      },
      {
        source: '/role-royce-dubai',
        destination: '/',
        permanent: true,
      },
      {
        source: '/phantom-rental',
        destination: '/fleet/phantom',
        permanent: true,
      },
      {
        source: '/ghost-rental',
        destination: '/fleet/ghost',
        permanent: true,
      },
      {
        source: '/cullinan-rental',
        destination: '/fleet/cullinan',
        permanent: true,
      },
      // Language-specific redirects
      {
        source: '/ae',
        destination: '/ar',
        permanent: true,
      },
      {
        source: '/ae/:path*',
        destination: '/ar/:path*',
        permanent: true,
      },
      // Site reduced to en/ar/ru — 301 the removed locales (fr/zh/hi) to their
      // English equivalents so any indexed URLs pass equity instead of 404ing.
      { source: '/fr', destination: '/', permanent: true, locale: false },
      { source: '/fr/:path*', destination: '/:path*', permanent: true, locale: false },
      { source: '/zh', destination: '/', permanent: true, locale: false },
      { source: '/zh/:path*', destination: '/:path*', permanent: true, locale: false },
      { source: '/hi', destination: '/', permanent: true, locale: false },
      { source: '/hi/:path*', destination: '/:path*', permanent: true, locale: false },
      // Cookie policy alternative route (to avoid ad blocker issues)
      {
        source: '/cookies',
        destination: '/cookie-policy',
        permanent: false,
      },

      // NOTE: /terms and /testimonials are intentionally NOT redirected — they are real,
      // fully-translated, internally-linked pages (terms.tsx, testimonials.tsx) and are
      // listed in sitemap-pages.xml. The old /terms -> /privacy#terms redirect was removed
      // to end the page-vs-redirect conflict (the #terms anchor never existed on /privacy).

      // === Fix Google Search Console 404 errors ===
      {
        source: '/week',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/month',
        destination: '/pricing',
        permanent: true,
      },
    ]
  },
  
  // Optimize bundle size
  webpack: (config, { isServer, dev, webpack }) => {
    // Production optimizations
    if (!dev) {
      // Add webpack bundle analyzer in development
      if (process.env.ANALYZE === 'true') {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',
            openAnalyzer: false,
          })
        )
      }

      // Optimize for client-side bundle
      if (!isServer) {
        // Add ModuleConcatenationPlugin for better tree shaking
        config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())

        // Replace React with Preact in production (optional - for even smaller bundles)
        if (process.env.USE_PREACT === 'true') {
          config.resolve.alias = {
            ...config.resolve.alias,
            'react': 'preact/compat',
            'react-dom': 'preact/compat',
            'react/jsx-runtime': 'preact/jsx-runtime',
          };
        }

        // Ignore moment locales to reduce bundle size
        config.plugins.push(
          new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/,
          })
        );
      }

      // Server-side optimizations
      if (isServer) {
        // Externalize node modules for server bundle
        config.externals = [...(config.externals || []), 'sharp', 'canvas'];
      }
    }

    // Development optimizations
    if (dev) {
      // Faster rebuilds in development
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    
    return config;
  },
  
  // Enable compression
  compress: true,
  
  // Generate ETags for caching
  generateEtags: true,
  
  // Disable powered-by header
  poweredByHeader: false,
  
  // Trailing slash handling for SEO consistency
  trailingSlash: false,
  
  
  // Build optimization
  productionBrowserSourceMaps: false, // Disable source maps in production
  
  // Enable static exports for better performance
  generateBuildId: async () => {
    // Deterministic build ID from the git commit, NOT Date.now(). A timestamp id
    // changed on every build, so each deploy purged the previous /_next/data/<id>/*
    // paths and any open tab (or in-flight prefetch) 503'd on its now-missing data —
    // surfacing as "sometimes doesn't navigate" + console 503s after a deploy.
    // A content-based id only changes when the code changes, so redeploys of the same
    // commit keep tabs valid and the id is identical across all edge worker instances.
    try {
      const sha = require('child_process')
        .execSync('git rev-parse --short=12 HEAD', { stdio: ['ignore', 'pipe', 'ignore'] })
        .toString().trim();
      if (/^[0-9a-f]{7,40}$/.test(sha)) return `rrx-${sha}`;
    } catch (_) { /* git unavailable (e.g. shallow CI) → fall through */ }
    return process.env.NEXT_PUBLIC_BUILD_ID || 'rrx-stable';
  },
}

module.exports = nextConfig

if (process.env.NODE_ENV === 'development') {
  const { initOpenNextCloudflareForDev } = require('@opennextjs/cloudflare')
  initOpenNextCloudflareForDev()
}
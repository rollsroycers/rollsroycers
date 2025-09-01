/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  
  // i18n configuration - English without /en prefix
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'ru', 'fr', 'zh', 'hi'],
    localeDetection: false,
  },
  
  
  // Compiler options for modern JavaScript features
  compiler: {
    // Enable modern JavaScript features
    removeConsole: process.env.NODE_ENV === 'production',
    // Remove React Testing Library data attributes from production builds
    reactRemoveProperties: process.env.NODE_ENV === 'production' && {
      properties: ['^data-testid$'],
    },
  },
  
  // Experimental features for modern JS
  experimental: {
    // Enable modern features
    esmExternals: true,
    optimizeCss: true, // Enable CSS optimization
    scrollRestoration: true,
    // Reduce JavaScript payload
    optimizePackageImports: ['framer-motion', 'swiper', 'react-intersection-observer'],
  },
  
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
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
      // HTML caching
      {
        source: '/:path*((?!api))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=31536000, stale-while-revalidate=59'
          }
        ]
      }
    ]
  },
  
  // Minimal redirects to avoid loops
  async redirects() {
    return [
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
      // Cookie policy alternative route (to avoid ad blocker issues)
      {
        source: '/cookies',
        destination: '/cookie-policy',
        permanent: false,
      },
      
      // === Redirect testimonials to appropriate page ===
      {
        source: '/testimonials',
        destination: '/faq#testimonials',
        permanent: true,
      },
      
      // === Fix for terms page (redirect to privacy if terms doesn't exist) ===
      {
        source: '/terms',
        destination: '/privacy#terms',
        permanent: true,
      }
    ]
  },
  
  // Optimize bundle size
  webpack: (config, { isServer, dev }) => {
    // Production optimizations
    if (!dev) {
      // Optimize for client-side bundle
      if (!isServer) {
        config.optimization = {
          ...config.optimization,
          minimize: true,
          runtimeChunk: 'single',
          moduleIds: 'deterministic',
          splitChunks: {
            chunks: 'all',
            maxInitialRequests: 25,
            minSize: 20000,
            cacheGroups: {
              default: false,
              vendors: false,
              // Framework chunks
              framework: {
                name: 'framework',
                chunks: 'all',
                test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
                priority: 40,
                enforce: true,
              },
              // Libraries chunk
              lib: {
                test(module) {
                  return module.size() > 160000 &&
                    /node_modules[/\\]/.test(module.identifier());
                },
                name(module) {
                  const hash = require('crypto')
                    .createHash('sha1');
                  hash.update(module.identifier());
                  return hash.digest('hex').substring(0, 8);
                },
                priority: 30,
                minChunks: 1,
                reuseExistingChunk: true,
              },
              commons: {
                name: 'commons',
                chunks: 'all',
                minChunks: 2,
                priority: 20,
              },
              // Separate i18n
              i18n: {
                name: 'i18n',
                test: /[\\/]node_modules[\\/](next-i18next|react-i18next|i18next)[\\/]/,
                chunks: 'all',
                priority: 35,
              },
              // Separate animation libraries
              animations: {
                name: 'animations',
                test: /[\\/]node_modules[\\/](framer-motion|swiper)[\\/]/,
                chunks: 'all',
                priority: 35,
              },
            },
          },
        };

        // Alias react to preact in production for smaller bundle
        if (process.env.PREACT === 'true') {
          config.resolve.alias = {
            ...config.resolve.alias,
            'react': 'preact/compat',
            'react-dom': 'preact/compat',
          };
        }
      }
    }
    
    return config;
  },
  
  // Compression
  compress: true,
  
  // Generate ETags for caching
  generateEtags: true,
  
  // Powered by header
  poweredByHeader: false,
  
  // Trailing slash handling for SEO consistency
  trailingSlash: false,
  
  // Output optimization
  output: 'standalone',
  
  // Disable x-powered-by header
  poweredByHeader: false,
}

module.exports = nextConfig
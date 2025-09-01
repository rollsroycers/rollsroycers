/** @type {import('next').NextConfig} */
const i18n = require('./next-i18next.config.js').i18n

const nextConfig = {
  reactStrictMode: true,
  
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
  
  // Experimental features for modern JS
  experimental: {
    // Enable CSS optimization
    optimizeCss: true,
    scrollRestoration: true,
    // Reduce JavaScript payload
    optimizePackageImports: [
      'framer-motion',
      'swiper',
      'react-intersection-observer'
    ],
  },
  
  // Enable modular imports for libraries
  modularizeImports: {
    'framer-motion': {
      transform: 'framer-motion/{{member}}',
    },
    'lodash': {
      transform: 'lodash/{{member}}',
    },
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
    // Lazy load images outside viewport
    loader: 'default',
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
          // Optimize resource loading - removed duplicate preconnect hints to avoid conflicts with _document.tsx
          {
            key: 'X-UA-Compatible',
            value: 'IE=edge'
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
        
        config.optimization = {
          ...config.optimization,
          minimize: true,
          runtimeChunk: 'single',
          moduleIds: 'deterministic',
          usedExports: true,
          sideEffects: false,
          mangleExports: false,
          splitChunks: {
            chunks: 'all',
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            minSize: 20000,
            maxSize: 244000, // Split chunks larger than 244KB
            cacheGroups: {
              default: false,
              vendors: false,
              // React framework
              framework: {
                name: 'framework',
                chunks: 'all',
                test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
                priority: 50,
                enforce: true,
                reuseExistingChunk: true,
              },
              // Next.js internals
              nextjs: {
                name: 'nextjs',
                chunks: 'all',
                test: /[\\/]node_modules[\\/](next|@next)[\\/]/,
                priority: 45,
                enforce: true,
                reuseExistingChunk: true,
              },
              // i18n libraries
              i18n: {
                name: 'i18n',
                test: /[\\/]node_modules[\\/](next-i18next|react-i18next|i18next)[\\/]/,
                chunks: 'all',
                priority: 40,
                reuseExistingChunk: true,
              },
              // Animation libraries (load on demand)
              animations: {
                name: 'animations',
                test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
                chunks: 'async',
                priority: 35,
                reuseExistingChunk: true,
              },
              // Swiper (load on demand)
              swiper: {
                name: 'swiper',
                test: /[\\/]node_modules[\\/](swiper)[\\/]/,
                chunks: 'async',
                priority: 35,
                reuseExistingChunk: true,
              },
              // Polyfills
              polyfills: {
                name: 'polyfills',
                test: /[\\/]node_modules[\\/](core-js|regenerator-runtime)[\\/]/,
                chunks: 'all',
                priority: 60,
                reuseExistingChunk: true,
              },
              // Common modules
              commons: {
                name: 'commons',
                chunks: 'all',
                minChunks: 2,
                priority: 20,
                reuseExistingChunk: true,
              },
              // Vendor libraries
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name(module) {
                  // Get the package name safely
                  const match = module.context && module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
                  const packageName = match ? match[1] : 'vendor';
                  // Create a vendor chunk per package
                  return `vendor-${packageName.replace('@', '')}`;
                },
                chunks: 'all',
                priority: 10,
                reuseExistingChunk: true,
              },
            },
          },
        };

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
  
  // Output optimization
  output: 'standalone',
  
  // Build optimization
  productionBrowserSourceMaps: false, // Disable source maps in production
  
  // Enable static exports for better performance
  generateBuildId: async () => {
    // Generate a unique build ID based on timestamp
    return `build-${Date.now()}`;
  },
}

module.exports = nextConfig
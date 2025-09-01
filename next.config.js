/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    ...i18n,
    localeDetection: false, // Disable automatic locale detection to avoid 307 redirects
  },
  
  // Compiler options for modern JavaScript features
  compiler: {
    // Enable modern JavaScript features
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Experimental features for modern JS
  experimental: {
    // Enable modern features
    esmExternals: true,
  },
  
  // Image optimization
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
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },
  
  // SEO-friendly redirects
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
      }
    ]
  },
  
  // Optimize bundle size
  webpack: (config, { isServer }) => {
    // Optimize for client-side bundle
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
          },
          react: {
            name: 'react',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            chunks: 'all',
            priority: 10,
          },
        },
      };
    }
    
    return config;
  },
  
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  
  // Compression
  compress: true,
  
  // Generate ETags for caching
  generateEtags: true,
  
  // Powered by header
  poweredByHeader: false,
  
  // Trailing slash handling for SEO consistency
  trailingSlash: false,
}

module.exports = nextConfig
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/inter-v12-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter-v12-latin-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Critical CSS - inline for fastest render */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS for above-the-fold content */
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              
              html {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.5;
                -webkit-text-size-adjust: 100%;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              
              body {
                margin: 0;
                padding: 0;
                min-height: 100vh;
                background: #ffffff;
                color: #1a1a1a;
              }
              
              /* Hide elements until fonts load */
              .fonts-loading {
                opacity: 0;
              }
              
              .fonts-loaded {
                opacity: 1;
                transition: opacity 0.3s ease-in-out;
              }
              
              /* Prevent layout shift */
              img, video {
                max-width: 100%;
                height: auto;
                display: block;
              }
              
              /* Loading skeleton animation */
              .skeleton {
                animation: skeleton-loading 1s linear infinite alternate;
              }
              
              @keyframes skeleton-loading {
                0% {
                  background-color: hsl(200, 20%, 80%);
                }
                100% {
                  background-color: hsl(200, 20%, 95%);
                }
              }
              
              /* Reduce motion for accessibility */
              @media (prefers-reduced-motion: reduce) {
                *,
                *::before,
                *::after {
                  animation-duration: 0.01ms !important;
                  animation-iteration-count: 1 !important;
                  transition-duration: 0.01ms !important;
                  scroll-behavior: auto !important;
                }
              }
            `,
          }}
        />
        
        {/* Load non-critical fonts asynchronously */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          />
        </noscript>
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#1a1a1a" />
        
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <body>
        {/* Add performance mark */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Mark the start of body parsing
              if (window.performance && window.performance.mark) {
                window.performance.mark('body-start');
              }
              
              // Add JS enabled class immediately
              document.documentElement.classList.add('js-enabled');
              
              // Detect webp support
              function checkWebP(callback) {
                var webP = new Image();
                webP.onload = webP.onerror = function () {
                  callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
              }
              
              checkWebP(function(support) {
                if (support) {
                  document.documentElement.classList.add('webp');
                } else {
                  document.documentElement.classList.add('no-webp');
                }
              });
              
              // Connection detection for adaptive loading
              if ('connection' in navigator) {
                const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                if (connection) {
                  document.documentElement.setAttribute('data-connection', connection.effectiveType || '4g');
                  if (connection.saveData) {
                    document.documentElement.classList.add('save-data');
                  }
                }
              }
            `,
          }}
        />
        
        <Main />
        <NextScript />
        
        {/* Defer loading of Google Analytics */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Only load GA in production
              if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
                  page_path: window.location.pathname,
                  send_page_view: true
                });
                
                // Lazy load the GA script
                var script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID';
                
                // Use requestIdleCallback if available
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(function() {
                    document.head.appendChild(script);
                  }, { timeout: 2000 });
                } else {
                  setTimeout(function() {
                    document.head.appendChild(script);
                  }, 2000);
                }
              }
            `,
          }}
        />
        
        {/* Performance monitoring script */}
        <Script
          id="performance-monitoring"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Simple performance monitoring
              window.addEventListener('load', function() {
                if (window.performance && window.performance.timing) {
                  var timing = window.performance.timing;
                  var loadTime = timing.loadEventEnd - timing.navigationStart;
                  var domContentLoaded = timing.domContentLoadedEventEnd - timing.navigationStart;
                  var firstPaint = 0;
                  
                  // Get First Paint timing
                  if (window.performance.getEntriesByType) {
                    var paintEntries = window.performance.getEntriesByType('paint');
                    if (paintEntries.length > 0) {
                      paintEntries.forEach(function(entry) {
                        if (entry.name === 'first-contentful-paint') {
                          firstPaint = Math.round(entry.startTime);
                        }
                      });
                    }
                  }
                  
                  // Log performance metrics
                  console.log('Performance Metrics:', {
                    loadTime: loadTime + 'ms',
                    domContentLoaded: domContentLoaded + 'ms',
                    firstPaint: firstPaint + 'ms'
                  });
                  
                  // Send to analytics if available
                  if (window.gtag) {
                    window.gtag('event', 'page_timing', {
                      event_category: 'Performance',
                      event_label: 'Load Time',
                      value: loadTime,
                      non_interaction: true
                    });
                  }
                }
              });
            `,
          }}
        />
        
        {/* Resource hints for next navigation */}
        <Script
          id="resource-hints"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              // Prefetch resources for likely next navigation
              document.addEventListener('DOMContentLoaded', function() {
                // Find all internal links
                var links = document.querySelectorAll('a[href^="/"]');
                var prefetched = new Set();
                
                links.forEach(function(link) {
                  link.addEventListener('mouseenter', function() {
                    var href = link.getAttribute('href');
                    if (href && !prefetched.has(href)) {
                      // Create prefetch link
                      var prefetchLink = document.createElement('link');
                      prefetchLink.rel = 'prefetch';
                      prefetchLink.href = href;
                      document.head.appendChild(prefetchLink);
                      prefetched.add(href);
                    }
                  }, { passive: true });
                });
              });
            `,
          }}
        />
      </body>
    </Html>
  )
}
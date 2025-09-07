import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Essential Mobile Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
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
        
        {/* Load fonts properly with correct crossorigin */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        
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
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
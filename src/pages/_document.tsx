import { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import Document from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & { locale: string }> {
    const initialProps = await Document.getInitialProps(ctx)
    const locale = ctx.locale || 'en'
    return { ...initialProps, locale }
  }

  render() {
    const { locale } = this.props as any
    const dir = locale === 'ar' ? 'rtl' : 'ltr'
    
    return (
      <Html lang={locale} dir={dir}>
      <Head>
        {/* Google Search Console Verification - Replace YOUR_GSC_VERIFICATION_CODE with your actual code */}
        <meta name="google-site-verification" content="YOUR_GSC_VERIFICATION_CODE" />
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.statcounter.com" />
        <link rel="dns-prefetch" href="https://c.statcounter.com" />
        
        {/* Google Fonts - non-render-blocking with display=swap */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Montserrat:wght@300;400;500;600;700&family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap"
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
        
        {/* StatCounter Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var sc_project=13143252; 
              var sc_invisible=1; 
              var sc_security="e91ea536";
            `,
          }}
        />
        <script
          type="text/javascript"
          src="https://www.statcounter.com/counter/counter.js"
          async
        />
        <noscript>
          <div className="statcounter">
            <a title="Web Analytics" href="https://statcounter.com/" target="_blank" rel="noopener noreferrer">
              <img
                className="statcounter"
                src="https://c.statcounter.com/13143252/0/e91ea536/1/"
                alt="Web Analytics"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}

export default MyDocument
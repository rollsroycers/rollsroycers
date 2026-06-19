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
    // GTM container id from env — render GTM only when configured (avoids the broken GTM-XXXXXXX placeholder)
    const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
    // GSC HTML-tag verification — only render when a real code is set (was a hardcoded
    // YOUR_GSC_VERIFICATION_CODE placeholder). If you verify via Cloudflare DNS, leave it unset.
    const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION
    // GA4 Measurement ID (G-XXXXXXXXXX) — loads gtag.js directly; reportWebVitals (in _app.tsx)
    // forwards LCP/INP/CLS to window.gtag, so Core Web Vitals flow to GA4 automatically.
    const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

    return (
      <Html lang={locale} dir={dir}>
      <Head>
        {/* Google Search Console Verification (set NEXT_PUBLIC_GSC_VERIFICATION, or verify via DNS) */}
        {gscVerification && <meta name="google-site-verification" content={gscVerification} />}

        {/* DNS prefetch for third-party domains */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.statcounter.com" />
        <link rel="dns-prefetch" href="https://c.statcounter.com" />
        
        {/* Critical CSS - inline for fastest render */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
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
                0% { background-color: hsl(200, 20%, 80%); }
                100% { background-color: hsl(200, 20%, 95%); }
              }
              
              /* Reduce motion for accessibility */
              @media (prefers-reduced-motion: reduce) {
                *, *::before, *::after {
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
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
        {/* Google Tag Manager (noscript) — only when a real container id is configured */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Main />
        <NextScript />
        {/* GTM - deferred to after page content loads; only when a real container id is configured */}
        {gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${gtmId}');
                  }, 1500);
                });
              `,
            }}
          />
        )}
        {/* Google Analytics 4 (gtag.js) — deferred; only when a real Measurement ID is configured */}
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { anonymize_ip: true });
                `,
              }}
            />
          </>
        )}
        {/* StatCounter - deferred to idle */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                var idle = window.requestIdleCallback || function(cb) { setTimeout(cb, 2000); };
                idle(function() {
                  window.sc_project=13143252;
                  window.sc_invisible=1;
                  window.sc_security="e91ea536";
                  var s=document.createElement('script');
                  s.type='text/javascript';
                  s.async=true;
                  s.src='https://www.statcounter.com/counter/counter.js';
                  document.body.appendChild(s);
                }, {timeout: 5000});
              });
            `,
          }}
        />
      </body>
    </Html>
    )
  }
}

export default MyDocument
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  // Next.js Document does not receive router, but Next sets documentElement.lang at runtime.
  // We can still default to en and set dir based on a heuristic via inline script early in Head.
  return (
    <Html lang="en" dir="ltr">
      <Head>
        {/* Critical resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preload critical fonts for better LCP */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon and App Icons - optimize with smaller sizes */}
        <link rel="icon" type="image/jpeg" href="/images/Rolls-Royce-car-icon.jpg" />
        <link rel="apple-touch-icon" href="/images/Rolls-Royce-car-icon.jpg" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Mobile App Meta Tags */}
        <meta name="theme-color" content="#C4A570" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="RR Dubai" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rolls-Royce Dubai Luxury Car Rental" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LuxuryCarRental",
              "name": "Rolls-Royce Dubai Luxury Car Rental",
              "image": "https://rollsroycers.com/images/logo.jpg",
              "telephone": "+971558164922",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.2048,
                "longitude": 55.2708
              },
              "url": "https://rollsroycers.com",
              "sameAs": [
                "https://www.facebook.com/rollsroycers",
                "https://www.instagram.com/rollsroycers",
                "https://www.twitter.com/rollsroycers"
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "priceRange": "$$$$$",
              "servesCuisine": "Luxury Car Rental",
              "acceptsReservations": true
            })
          }}
        />

        {/* Critical inline CSS for above-the-fold content */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS for initial page load */
              body {
                margin: 0;
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              * {
                box-sizing: border-box;
              }
              /* Prevent layout shift from loading fonts */
              .font-loading * {
                transition: none !important;
              }
            `
          }}
        />

        {/* Set initial html lang/dir as early as possible based on URL prefix */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  try{
    var path = location.pathname || '/';
    var m = path.match(/^\/(en|ar|zh|fr|ru|hi)(?=\/|$)/);
    var lang = m ? m[1] : 'en';
    var dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', dir);
    
    // Add font-loading class
    document.documentElement.classList.add('font-loading');
    
    // Remove font-loading class when fonts are loaded
    if ('fonts' in document) {
      Promise.all([
        document.fonts.load('400 1em Inter'),
        document.fonts.load('700 1em Inter')
      ]).then(function() {
        document.documentElement.classList.remove('font-loading');
      });
    }
  }catch(e){}
})();
          `
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* Defer non-critical scripts */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              defer
              dangerouslySetInnerHTML={{
                __html: `
                  // Load StatCounter after page load
                  window.addEventListener('load', function() {
                    setTimeout(function() {
                      var sc_project=13143252;
                      var sc_invisible=1;
                      var sc_security="e91ea536";
                      var sc_text=2;
                      var scJsHost = "https://www.statcounter.com/";
                      var script = document.createElement('script');
                      script.src = scJsHost + "counter/counter.js";
                      script.async = true;
                      document.body.appendChild(script);
                    }, 3000); // Delay analytics by 3 seconds
                  });
                `,
              }}
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
          </>
        )}
      </body>
    </Html>
  )
}
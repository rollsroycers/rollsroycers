import React from 'react';
import Head from 'next/head';

interface TechnicalSEOProps {
  pageKey: string;
  title: string;
  description: string;
  image?: string;
  canonicalUrl: string;
  alternateUrls?: Array<{ lang: string; url: string }>;
  jsonLd?: any;
  preloadImages?: string[];
  preloadFonts?: string[];
  criticalCss?: string;
}

const TechnicalSEO: React.FC<TechnicalSEOProps> = ({
  pageKey,
  title,
  description,
  image,
  canonicalUrl,
  alternateUrls = [],
  jsonLd,
  preloadImages = [],
  preloadFonts = [],
  criticalCss
}) => {
  const baseUrl = 'https://rollsroycers.com';
  const ogImage = image || `${baseUrl}/images/og-image.jpg`;
  
  return (
    <Head>
      {/* Essential Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate Language URLs */}
      {alternateUrls.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Preload Critical Resources */}
      {preloadImages.map((img, index) => (
        <link key={`preload-img-${index}`} rel="preload" as="image" href={img} />
      ))}
      
      {preloadFonts.map((font, index) => (
        <link key={`preload-font-${index}`} rel="preload" as="font" href={font} crossOrigin="anonymous" />
      ))}
      
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Critical CSS */}
      {criticalCss && (
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
      )}
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Rolls-Royce Dubai" />
      
      {/* Twitter Card */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      
      {/* Performance Optimization */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#000000" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Rolls-Royce Dubai" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Security Headers - CSP handled by middleware */}
      <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Cache Control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      <meta httpEquiv="Expires" content={new Date(Date.now() + 31536000000).toUTCString()} />
      
      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* PWA Manifest */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/logo-512.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/logo-512.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/logo-512.png" />
      
      {/* Prefetch Key Resources */}
      <link rel="prefetch" href="/api/availability" />
      <link rel="prefetch" href="/api/pricing" />
      
      {/* Early Hints for Critical Pages */}
      {pageKey === 'home' && (
        <>
          <link rel="prefetch" href="/fleet" />
          <link rel="prefetch" href="/booking" />
          <link rel="prefetch" href="/pricing" />
        </>
      )}
      
      {/* Service Worker */}
      <link rel="serviceworker" href="/sw.js" />
    </Head>
  );
};

export default TechnicalSEO;
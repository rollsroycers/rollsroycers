import Head from 'next/head'

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LuxuryCarRental",
    "@id": "https://rollsroycers.com/#organization",
    "name": "Rolls Roycers Dubai",
    "alternateName": "Rolls Royce Rental Dubai",
    "url": "https://rollsroycers.com",
    "logo": "https://rollsroycers.com/images/logo-512.png",
    "image": "https://rollsroycers.com/images/Rolls-Royce-black.jpg",
    "description": "Premium Rolls-Royce rental service in Dubai offering luxury chauffeur services, wedding cars, and corporate transportation",
    "telephone": "+971501234567",
    "email": "info@rollsroycers.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sheikh Zayed Road",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.0780,
      "longitude": 55.1403
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$$",
    "servesCuisine": "Luxury Car Rental",
    "acceptsReservations": true,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Ahmed Hassan"
        },
        "datePublished": "2025-08-15",
        "reviewBody": "Exceptional service! The Rolls-Royce Phantom was immaculate and the chauffeur was professional."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "datePublished": "2025-08-20",
        "reviewBody": "Perfect for our wedding day. The Dawn convertible was stunning and service was flawless."
      }
    ],
    "sameAs": [
      "https://www.facebook.com/rollsroycersdubai",
      "https://www.instagram.com/rollsroycersdubai",
      "https://twitter.com/rollsroycersdxb",
      "https://www.linkedin.com/company/rollsroycersdubai",
      "https://www.youtube.com/rollsroycersdubai"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Rolls-Royce Fleet",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Car",
            "name": "Rolls-Royce Phantom",
            "brand": "Rolls-Royce",
            "model": "Phantom",
            "vehicleConfiguration": "Luxury Sedan"
          },
          "price": "3500",
          "priceCurrency": "AED",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Car",
            "name": "Rolls-Royce Ghost",
            "brand": "Rolls-Royce",
            "model": "Ghost",
            "vehicleConfiguration": "Luxury Sedan"
          },
          "price": "3000",
          "priceCurrency": "AED",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Car",
            "name": "Rolls-Royce Cullinan",
            "brand": "Rolls-Royce",
            "model": "Cullinan",
            "vehicleConfiguration": "Luxury SUV"
          },
          "price": "4000",
          "priceCurrency": "AED",
          "availability": "https://schema.org/InStock"
        }
      ]
    }
  }
  
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  )
}
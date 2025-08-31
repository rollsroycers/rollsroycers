import React from 'react';
import Head from 'next/head';

interface Vehicle {
  name: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  currency: string;
  image: string;
}

interface ComparisonStructuredDataProps {
  vehicle1: Vehicle;
  vehicle2: Vehicle;
}

const ComparisonStructuredData: React.FC<ComparisonStructuredDataProps> = ({ vehicle1, vehicle2 }) => {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${vehicle1.name} vs ${vehicle2.name} Comparison`,
    "description": `Detailed comparison between ${vehicle1.name} and ${vehicle2.name} for luxury car rental in Dubai. Compare features, performance, luxury, and pricing.`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Car",
            "name": vehicle1.name,
            "brand": {
              "@type": "Brand",
              "name": vehicle1.brand
            },
            "model": vehicle1.model,
            "modelDate": vehicle1.year,
            "image": vehicle1.image,
            "offers": {
              "@type": "Offer",
              "priceCurrency": vehicle1.currency,
              "price": vehicle1.pricePerDay,
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": vehicle1.pricePerDay,
                "priceCurrency": vehicle1.currency,
                "unitText": "DAY"
              },
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Rolls-Royce Dubai",
                "url": "https://rollsroycers.com"
              }
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Car",
            "name": vehicle2.name,
            "brand": {
              "@type": "Brand",
              "name": vehicle2.brand
            },
            "model": vehicle2.model,
            "modelDate": vehicle2.year,
            "image": vehicle2.image,
            "offers": {
              "@type": "Offer",
              "priceCurrency": vehicle2.currency,
              "price": vehicle2.pricePerDay,
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": vehicle2.pricePerDay,
                "priceCurrency": vehicle2.currency,
                "unitText": "DAY"
              },
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Rolls-Royce Dubai",
                "url": "https://rollsroycers.com"
              }
            }
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rollsroycers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Compare",
        "item": "https://rollsroycers.com/compare"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${vehicle1.name} vs ${vehicle2.name}`,
        "item": "https://rollsroycers.com/compare/phantom-vs-maybach"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is more luxurious: Rolls-Royce Phantom or Mercedes-Maybach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Rolls-Royce Phantom is generally considered more luxurious with its handcrafted interiors, Starlight headliner, and bespoke customization options. However, the Mercedes-Maybach offers cutting-edge technology and modern luxury features."
        }
      },
      {
        "@type": "Question",
        "name": "What's the price difference between renting a Phantom and Maybach in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Rolls-Royce Phantom typically costs AED 3,500 per day to rent in Dubai, while the Mercedes-Maybach S-Class costs around AED 3,000 per day, making the Maybach about 15% more affordable."
        }
      },
      {
        "@type": "Question",
        "name": "Which car has better performance: Phantom or Maybach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both offer excellent performance. The Phantom has a larger 6.75L V12 engine with 563 HP, while the Maybach has a 6.0L V12 with 550 HP. The Maybach accelerates slightly faster (5.0s vs 5.4s to 100km/h)."
        }
      },
      {
        "@type": "Question",
        "name": "Which is better for business travel in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both are excellent for business travel. The Phantom offers unmatched prestige and traditional luxury, perfect for making a statement. The Maybach provides advanced technology and modern amenities, ideal for tech-savvy executives."
        }
      },
      {
        "@type": "Question",
        "name": "Can I rent both cars for a comparison experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer special packages where you can experience both vehicles. Contact our luxury car specialists at +971 50 123 4567 to arrange a comparison rental package in Dubai."
        }
      }
    ]
  };

  const productComparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Luxury Car Rental Comparison",
    "description": "Compare Rolls-Royce Phantom vs Mercedes-Maybach for luxury car rental in Dubai",
    "category": "Luxury Car Rental",
    "isRelatedTo": [
      {
        "@type": "Product",
        "name": vehicle1.name,
        "image": vehicle1.image,
        "offers": {
          "@type": "Offer",
          "price": vehicle1.pricePerDay,
          "priceCurrency": vehicle1.currency
        }
      },
      {
        "@type": "Product",
        "name": vehicle2.name,
        "image": vehicle2.image,
        "offers": {
          "@type": "Offer",
          "price": vehicle2.pricePerDay,
          "priceCurrency": vehicle2.currency
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "287",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productComparisonSchema) }}
      />
    </Head>
  );
};

export default ComparisonStructuredData;
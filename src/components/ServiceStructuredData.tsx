import React from 'react'
import Head from 'next/head'

interface ServiceStructuredDataProps {
  serviceName: string
  serviceType: 'wedding' | 'corporate' | 'airport' | 'chauffeur' | 'events' | 'photoshoot' | 'tours' | 'main'
  price?: string
  description: string
  image?: string
}

const ServiceStructuredData: React.FC<ServiceStructuredDataProps> = ({
  serviceName,
  serviceType,
  price,
  description,
  image
}) => {
  const baseUrl = 'https://rollsroycers.com'
  
  const getServiceSchema = () => {
    const baseSchema: any = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": description,
      "provider": {
        "@type": "Organization",
        "name": "Rolls-Royce Dubai",
        "url": baseUrl,
        "logo": `${baseUrl}/images/logo.jpg`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+971558164922",
          "contactType": "customer service",
          "availableLanguage": ["en", "ar", "fr", "zh", "ru", "hi"],
          "areaServed": {
            "@type": "Place",
            "name": "Dubai, UAE"
          }
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Dubai",
        "containedInPlace": {
          "@type": "Country",
          "name": "United Arab Emirates"
        }
      },
      "serviceType": serviceName,
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": `${baseUrl}/services/${serviceType === 'main' ? '' : serviceType}`,
        "servicePhone": "+971558164922",
        "availableLanguage": ["en", "ar", "fr", "zh", "ru", "hi"]
      }
    }

    if (price) {
      baseSchema["offers"] = {
        "@type": "Offer",
        "price": price,
        "priceCurrency": "AED",
        "availability": "https://schema.org/InStock",
        "validFrom": new Date().toISOString()
      }
    }

    if (image) {
      baseSchema["image"] = `${baseUrl}${image}`
    }

    // Add specific schema enhancements based on service type
    switch (serviceType) {
      case 'wedding':
        return {
          ...baseSchema,
          "@type": ["Service", "Event"],
          "eventType": "Wedding",
          "isAccessibleForFree": false,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Wedding Packages",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Classic Wedding Package",
                  "description": "4 hours service with decorated Rolls-Royce"
                },
                "price": "2500",
                "priceCurrency": "AED"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Royal Wedding Package",
                  "description": "6 hours service with multiple vehicles"
                },
                "price": "4200",
                "priceCurrency": "AED"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ultimate Wedding Package",
                  "description": "Full day service with entire fleet"
                },
                "price": "8500",
                "priceCurrency": "AED"
              }
            ]
          }
        }

      case 'corporate':
        return {
          ...baseSchema,
          "@type": ["Service", "ProfessionalService"],
          "category": "Transportation Service",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Corporate Packages",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Executive Package",
                  "description": "Premium executive transportation"
                },
                "price": "1200",
                "priceCurrency": "AED",
                "unitCode": "DAY"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Conference Package",
                  "description": "Multi-day conference transportation"
                },
                "price": "800",
                "priceCurrency": "AED",
                "unitCode": "DAY"
              }
            ]
          }
        }

      case 'airport':
        return {
          ...baseSchema,
          "@type": ["Service", "TaxiService"],
          "serviceOutput": {
            "@type": "Trip",
            "arrivalTime": "Variable",
            "departureTime": "Variable",
            "itinerary": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "City",
                  "name": "Dubai International Airport (DXB)"
                },
                {
                  "@type": "City",
                  "name": "Al Maktoum International Airport (DWC)"
                },
                {
                  "@type": "City",
                  "name": "Abu Dhabi International Airport (AUH)"
                }
              ]
            }
          }
        }

      case 'tours':
        return {
          ...baseSchema,
          "@type": ["Service", "TouristTrip"],
          "touristType": "Luxury Tour",
          "itinerary": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "TouristAttraction",
                "name": "Burj Khalifa",
                "description": "World's tallest building"
              },
              {
                "@type": "TouristAttraction",
                "name": "Dubai Marina",
                "description": "Waterfront district"
              },
              {
                "@type": "TouristAttraction",
                "name": "Palm Jumeirah",
                "description": "Artificial archipelago"
              }
            ]
          }
        }

      default:
        return baseSchema
    }
  }

  const getBreadcrumbSchema = () => {
    const items = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${baseUrl}/services`
      }
    ]

    if (serviceType !== 'main') {
      items.push({
        "@type": "ListItem",
        "position": 3,
        "name": serviceName,
        "item": `${baseUrl}/services/${serviceType}`
      })
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items
    }
  }

  const getLocalBusinessSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Rolls-Royce Dubai",
      "description": "Premium Rolls-Royce rental services in Dubai",
      "url": baseUrl,
      "telephone": "+971558164922",
      "priceRange": "AED 800 - AED 8,500",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sheikh Zayed Road",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.2048,
        "longitude": 55.2708
      },
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
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1200",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  }

  const getFAQSchema = () => {
    const faqs = []
    
    switch (serviceType) {
      case 'wedding':
        faqs.push(
          {
            "@type": "Question",
            "name": "How much does it cost to rent a Rolls-Royce for a wedding in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wedding packages start from AED 2,500 for our Classic Package (4 hours). Royal Package is AED 4,200 (6 hours) and Ultimate Package is AED 8,500 (full day)."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide decoration for wedding cars?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide custom floral decorations, Just Married signs, ribbons, and red carpet service. Decorations can be customized to match your wedding theme."
            }
          }
        )
        break
      
      case 'airport':
        faqs.push(
          {
            "@type": "Question",
            "name": "How much is Rolls-Royce airport transfer in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Airport transfer starts from AED 1,200 for Dubai airports (DXB/DWC). Abu Dhabi airport (AUH) transfer is from AED 3,800. Price includes meet & greet and 60 minutes free waiting."
            }
          },
          {
            "@type": "Question",
            "name": "Do you track flight arrivals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we track all flights in real-time and adjust pickup times accordingly. Free waiting time is 60 minutes for international flights and 30 minutes for domestic."
            }
          }
        )
        break
        
      case 'corporate':
        faqs.push(
          {
            "@type": "Question",
            "name": "What corporate packages do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer Executive Package (AED 1,200/day), Conference Package (AED 800/day), Roadshow Package (AED 1,500/day), and custom Partnership Packages with volume discounts."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer corporate billing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide corporate billing with NET 30 payment terms, consolidated monthly invoices, and dedicated account management for businesses."
            }
          }
        )
        break
    }

    if (faqs.length > 0) {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs
      }
    }
    
    return null
  }

  const schemas: any[] = [
    getServiceSchema(),
    getBreadcrumbSchema(),
    getLocalBusinessSchema()
  ]
  
  const faqSchema = getFAQSchema()
  if (faqSchema) {
    schemas.push(faqSchema)
  }

  return (
    <Head>
      {schemas.map((schema, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  )
}

export default ServiceStructuredData
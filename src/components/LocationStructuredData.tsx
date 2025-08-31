import React from 'react'
import Head from 'next/head'

interface LocationStructuredDataProps {
  locationName: string
  locationType?: 'main' | 'downtown' | 'marina' | 'palm' | 'businessBay' | 'jbr' | 'difc'
  description: string
  image?: string
}

const LocationStructuredData: React.FC<LocationStructuredDataProps> = ({
  locationName,
  locationType = 'main',
  description,
  image
}) => {
  const baseUrl = 'https://rollsroycers.com'
  
  const getLocationSchema = () => {
    const baseSchema: any = {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": locationName,
      "description": description,
      "url": `${baseUrl}/locations${locationType === 'main' ? '' : `/${locationType}`}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "geo": getLocationCoordinates(locationType),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Rolls-Royce Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Wedding Car Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corporate Transportation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Airport Transfer"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Chauffeur Service"
            }
          }
        ]
      }
    }

    if (image) {
      baseSchema["image"] = `${baseUrl}${image}`
    }

    // Add specific details based on location type
    switch (locationType) {
      case 'downtown':
        baseSchema["containedInPlace"] = {
          "@type": "TouristDestination",
          "name": "Downtown Dubai",
          "touristType": "Business and Leisure",
          "includesAttraction": [
            {
              "@type": "TouristAttraction",
              "name": "Burj Khalifa"
            },
            {
              "@type": "ShoppingCenter",
              "name": "Dubai Mall"
            },
            {
              "@type": "TouristAttraction",
              "name": "Dubai Fountain"
            }
          ]
        }
        break
        
      case 'marina':
        baseSchema["containedInPlace"] = {
          "@type": "TouristDestination",
          "name": "Dubai Marina",
          "touristType": "Waterfront Lifestyle",
          "includesAttraction": [
            {
              "@type": "TouristAttraction",
              "name": "Marina Walk"
            },
            {
              "@type": "ShoppingCenter",
              "name": "Marina Mall"
            },
            {
              "@type": "Restaurant",
              "name": "Pier 7"
            }
          ]
        }
        break
        
      case 'palm':
        baseSchema["containedInPlace"] = {
          "@type": "TouristDestination",
          "name": "Palm Jumeirah",
          "touristType": "Luxury Island Resort",
          "includesAttraction": [
            {
              "@type": "Hotel",
              "name": "Atlantis The Palm"
            },
            {
              "@type": "TouristAttraction",
              "name": "The Pointe"
            },
            {
              "@type": "Beach",
              "name": "Palm West Beach"
            }
          ]
        }
        break
    }

    return baseSchema
  }

  const getLocationCoordinates = (type: string) => {
    const coordinates: any = {
      main: { latitude: 25.2048, longitude: 55.2708 },
      downtown: { latitude: 25.1972, longitude: 55.2744 },
      marina: { latitude: 25.0805, longitude: 55.1403 },
      palm: { latitude: 25.1124, longitude: 55.1390 },
      businessBay: { latitude: 25.1850, longitude: 55.2650 },
      jbr: { latitude: 25.0750, longitude: 55.1340 },
      difc: { latitude: 25.2110, longitude: 55.2820 }
    }
    
    return {
      "@type": "GeoCoordinates",
      "latitude": coordinates[type]?.latitude || coordinates.main.latitude,
      "longitude": coordinates[type]?.longitude || coordinates.main.longitude
    }
  }

  const getServiceAreaSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ServiceArea",
      "provider": {
        "@type": "Organization",
        "name": "Rolls-Royce Dubai",
        "url": baseUrl
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Dubai",
          "containedInPlace": {
            "@type": "Country",
            "name": "United Arab Emirates"
          }
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Service Locations",
        "itemListElement": [
          "Downtown Dubai",
          "Dubai Marina",
          "Palm Jumeirah",
          "Business Bay",
          "JBR & The Walk",
          "DIFC"
        ].map(location => ({
          "@type": "Place",
          "name": location
        }))
      }
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
        "name": "Locations",
        "item": `${baseUrl}/locations`
      }
    ]

    if (locationType !== 'main') {
      items.push({
        "@type": "ListItem",
        "position": 3,
        "name": locationName,
        "item": `${baseUrl}/locations/${locationType}`
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
      "@type": "LuxuryCarRental",
      "name": `Rolls-Royce ${locationName}`,
      "description": description,
      "url": `${baseUrl}/locations${locationType === 'main' ? '' : `/${locationType}`}`,
      "telephone": "+971558164922",
      "priceRange": "AED 250 - AED 8,500",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": getStreetAddress(locationType),
        "addressLocality": locationName,
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", 
          "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": getLocationCoordinates(locationType),
        "geoRadius": "50000"
      }
    }
  }

  const getStreetAddress = (type: string) => {
    const addresses: any = {
      downtown: "Sheikh Mohammed bin Rashid Blvd",
      marina: "Marina Walk",
      palm: "The Palm Jumeirah",
      businessBay: "Al Khaleej Al Tejari 2",
      jbr: "The Walk, JBR",
      difc: "Gate District, DIFC",
      main: "Sheikh Zayed Road"
    }
    return addresses[type] || addresses.main
  }

  const getFAQSchema = () => {
    const faqs = []
    
    if (locationType === 'main') {
      faqs.push(
        {
          "@type": "Question",
          "name": "Which areas in Dubai does Rolls-Royce service cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide comprehensive coverage across all major Dubai locations including Downtown Dubai, Dubai Marina, Palm Jumeirah, Business Bay, JBR, and DIFC with average response time of 15 minutes."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can I get a Rolls-Royce to my location in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our average response time is 15 minutes to any location in Dubai. We have vehicles strategically positioned across the city for rapid deployment."
          }
        }
      )
    } else if (locationType === 'downtown') {
      faqs.push(
        {
          "@type": "Question",
          "name": "Can I book a Rolls-Royce for Dubai Mall shopping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide premium Rolls-Royce service for Dubai Mall shopping trips with professional chauffeurs who can wait while you shop. Service starts from AED 250."
          }
        }
      )
    } else if (locationType === 'marina') {
      faqs.push(
        {
          "@type": "Question",
          "name": "Do you provide Rolls-Royce service for Marina yacht events?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in luxury transportation for Dubai Marina Yacht Club events, waterfront dining, and Marina Walk experiences."
          }
        }
      )
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
    getLocationSchema(),
    getBreadcrumbSchema(),
    getLocalBusinessSchema()
  ]
  
  if (locationType === 'main') {
    schemas.push(getServiceAreaSchema())
  }
  
  const faqSchema = getFAQSchema()
  if (faqSchema) {
    schemas.push(faqSchema)
  }

  return (
    <Head>
      {schemas.map((schema, index) => (
        <script
          key={`location-structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  )
}

export default LocationStructuredData
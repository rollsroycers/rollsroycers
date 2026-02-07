import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

interface GEOOptimizerProps {
  pageKey: string
  title: string
  description: string
  entityType?: string
  primaryTopic?: string
  contentSummary?: string
  facts?: string[]
  pricing?: {
    currency: string
    items: { name: string; price: string; unit: string }[]
  }
  faqs?: { question: string; answer: string }[]
  howTo?: { name: string; steps: { name: string; text: string }[] }
}

export default function GEOOptimizer({
  pageKey,
  title,
  description,
  entityType = 'CarRentalBusiness',
  primaryTopic = 'Rolls-Royce Rental Dubai',
  contentSummary,
  facts = [],
  pricing,
  faqs = [],
  howTo
}: GEOOptimizerProps) {
  const router = useRouter()
  const { i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const baseUrl = 'https://rollsroycers.com'

  const rawPath = (router.asPath || '/').split('#')[0].split('?')[0]
  // Strip any locale prefix from the path
  const cleanPath = rawPath
    .replace(/^\/(en|ar|zh|fr|ru|hi)(\/|$)/, '/$2')
    .replace(/^\/+$/, '/')
  const localePath = currentLang === 'en' ? '' : `/${currentLang}`
  const canonicalUrl = `${baseUrl}${localePath}${cleanPath === '/' ? '' : cleanPath}`

  const langNameMap: Record<string, string> = {
    en: 'English', ar: 'Arabic', fr: 'French', ru: 'Russian', zh: 'Chinese', hi: 'Hindi'
  }

  // Speakable Schema - tells AI which parts of the page are most useful to read aloud
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "inLanguage": currentLang,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1",
        "[data-speakable='true']",
        ".page-description",
        ".faq-answer"
      ]
    },
    "url": canonicalUrl
  }

  // FAQ Schema for AEO (Answer Engine Optimization)
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "inLanguage": currentLang,
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "inLanguage": currentLang
      }
    }))
  } : null

  // HowTo Schema for process-based content
  const howToSchema = howTo ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howTo.name,
    "inLanguage": currentLang,
    "step": howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    })),
    "totalTime": "PT15M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "AED",
      "value": "3800"
    }
  } : null

  // Pricing/Offer Schema for commercial pages
  const pricingSchema = pricing ? {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": `${primaryTopic} - Pricing`,
    "itemListElement": pricing.items.map((item, index) => ({
      "@type": "Offer",
      "position": index + 1,
      "itemOffered": {
        "@type": "Service",
        "name": item.name
      },
      "price": item.price,
      "priceCurrency": pricing.currency,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": item.price,
        "priceCurrency": pricing.currency,
        "unitText": item.unit
      },
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Rolls Roycers Dubai",
        "url": baseUrl
      }
    }))
  } : null

  return (
    <Head>
      {/* GEO Meta Tags - Help AI crawlers understand page context */}
      <meta name="ai-content-type" content={entityType} />
      <meta name="ai-primary-topic" content={primaryTopic} />
      {contentSummary && (
        <meta name="ai-content-summary" content={contentSummary} />
      )}
      <meta name="ai-language" content={currentLang} />
      <meta name="ai-language-name" content={langNameMap[currentLang] || 'English'} />
      <meta name="ai-business-type" content="AutoRental" />
      <meta name="ai-location" content="Dubai, UAE" />
      <meta name="content-language" content={currentLang} />
      
      {/* Key facts as structured meta for AI parsing */}
      {facts.length > 0 && (
        <meta name="ai-key-facts" content={facts.join(' | ')} />
      )}

      {/* Speakable Schema for Voice Search / AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      {/* FAQ Schema for AEO */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* HowTo Schema */}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      {/* Pricing Schema */}
      {pricingSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
        />
      )}
    </Head>
  )
}

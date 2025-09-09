import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'

interface BreadcrumbItem {
  name: string
  href: string
}

export default function Breadcrumbs() {
  const router = useRouter()
  const { t } = useTranslation('common')
  const pathSegments = router.pathname.split('/').filter(segment => segment)
  
  const breadcrumbs: BreadcrumbItem[] = [
    { name: t('nav.home'), href: '/' }
  ]
  
  // Build breadcrumb trail
  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    
    // Skip dynamic routes like [slug]
    if (segment.startsWith('[') && segment.endsWith(']')) {
      return
    }
    
    let name = segment
    
    // Translate common segments
    switch (segment) {
      case 'fleet':
        name = t('nav.fleet')
        break
      case 'services':
        name = t('nav.services')
        break
      case 'locations':
        name = t('nav.locations')
        break
      case 'blog':
        name = t('nav.blog')
        break
      case 'about':
        name = t('nav.about')
        break
      case 'contact':
        name = t('nav.contact')
        break
      case 'booking':
        name = t('nav.booking')
        break
      case 'pricing':
        name = t('nav.pricing')
        break
      case 'gallery':
        name = t('nav.gallery')
        break
      case 'faq':
        name = t('nav.faq')
        break
      case 'testimonials':
        name = t('nav.testimonials')
        break
      default:
        // Capitalize and replace hyphens with spaces
        name = segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
    }
    
    breadcrumbs.push({
      name,
      href: currentPath
    })
  })
  
  // Generate schema markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://rollsroycers.com${crumb.href}`
    }))
  }
  
  // Don't show breadcrumbs on homepage
  if (pathSegments.length === 0) {
    return null
  }
  
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      
      <nav aria-label="Breadcrumb" className="bg-gray-50 dark:bg-gray-900 py-3 mt-20">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.href} className="flex items-center">
                {index > 0 && (
                  <svg
                    className="w-4 h-4 text-gray-400 mx-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-500 dark:text-gray-400">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="text-rolls-gold hover:text-rolls-gold-dark transition-colors"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
} 
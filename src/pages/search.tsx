import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SEO from '@/components/SEO'

interface SearchResult {
  title: string
  url: string
  description: string
  type: 'page' | 'service' | 'fleet' | 'location'
}

export default function SearchPage() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Get search query from URL parameters
  useEffect(() => {
    const { q } = router.query
    if (q && typeof q === 'string') {
      setSearchQuery(q)
      performSearch(q)
    }
  }, [router.query])

  const performSearch = async (query: string) => {
    if (!query.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)

    // Simple client-side search through predefined pages
    const searchablePages: SearchResult[] = [
      // Fleet pages
      { title: 'Rolls-Royce Phantom', url: '/fleet/phantom', description: 'Luxury sedan rental in Dubai', type: 'fleet' },
      { title: 'Rolls-Royce Ghost', url: '/fleet/ghost', description: 'Premium luxury car rental', type: 'fleet' },
      { title: 'Rolls-Royce Cullinan', url: '/fleet/cullinan', description: 'Luxury SUV rental in Dubai', type: 'fleet' },
      { title: 'Rolls-Royce Dawn', url: '/fleet/dawn', description: 'Convertible luxury car rental', type: 'fleet' },
      { title: 'Rolls-Royce Wraith', url: '/fleet/wraith', description: 'Sports luxury coupe rental', type: 'fleet' },
      
      // Services
      { title: 'Airport Transfer', url: '/services/airport-transfer', description: 'Luxury airport transfer service', type: 'service' },
      { title: 'Wedding Car Rental', url: '/services/wedding', description: 'Wedding car rental service', type: 'service' },
      { title: 'Corporate Services', url: '/services/corporate', description: 'Corporate car rental services', type: 'service' },
      { title: 'Chauffeur Services', url: '/services/chauffeur', description: 'Professional chauffeur services', type: 'service' },
      { title: 'Events & Occasions', url: '/services/events', description: 'Special event car rental', type: 'service' },
      { title: 'Photography & Photoshoot', url: '/services/photoshoot', description: 'Car rental for photoshoots', type: 'service' },
      { title: 'City Tours', url: '/services/tours', description: 'Dubai city tours with luxury cars', type: 'service' },
      
      // Locations
      { title: 'Downtown Dubai', url: '/locations/downtown-dubai', description: 'Car rental in Downtown Dubai', type: 'location' },
      { title: 'Dubai Marina', url: '/locations/dubai-marina', description: 'Car rental in Dubai Marina', type: 'location' },
      { title: 'Palm Jumeirah', url: '/locations/palm-jumeirah', description: 'Car rental in Palm Jumeirah', type: 'location' },
      { title: 'JBR - Jumeirah Beach Residence', url: '/locations/jbr', description: 'Car rental in JBR', type: 'location' },
      { title: 'Business Bay', url: '/locations/business-bay', description: 'Car rental in Business Bay', type: 'location' },
      { title: 'DIFC', url: '/locations/difc', description: 'Car rental in Dubai International Financial Centre', type: 'location' },
      
      // Main pages
      { title: 'Fleet', url: '/fleet', description: 'Our complete fleet of luxury cars', type: 'page' },
      { title: 'Services', url: '/services', description: 'All our luxury car rental services', type: 'page' },
      { title: 'Locations', url: '/locations', description: 'Service locations across Dubai', type: 'page' },
      { title: 'Pricing', url: '/pricing', description: 'Rental prices and packages', type: 'page' },
      { title: 'About Us', url: '/about', description: 'About Rolls-Royce Dubai rental', type: 'page' },
      { title: 'Contact', url: '/contact', description: 'Contact us for bookings', type: 'page' },
      { title: 'Gallery', url: '/gallery', description: 'Photo gallery of our luxury cars', type: 'page' },
      { title: 'Testimonials', url: '/testimonials', description: 'Customer reviews and testimonials', type: 'page' },
      { title: 'FAQ', url: '/faq', description: 'Frequently asked questions', type: 'page' },
      { title: 'Compare Cars', url: '/compare', description: 'Compare different Rolls-Royce models', type: 'page' },
    ]

    // Filter results based on search query
    const filteredResults = searchablePages.filter(page =>
      page.title.toLowerCase().includes(query.toLowerCase()) ||
      page.description.toLowerCase().includes(query.toLowerCase()) ||
      page.url.toLowerCase().includes(query.toLowerCase())
    )

    setResults(filteredResults)
    setIsLoading(false)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <>
      <SEO
        pageKey="search"
        title={`Search Results${searchQuery ? ` - ${searchQuery}` : ''}`}
        description={`Search results for luxury car rental services in Dubai${searchQuery ? ` - ${searchQuery}` : ''}`}
      />

      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Search Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('search.title', 'Search')}
              </h1>
              <p className="text-xl text-gray-300">
                {t('search.subtitle', 'Find the perfect luxury car rental service')}
              </p>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="mb-12">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('search.placeholder', 'Search for cars, services, locations...')}
                  className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-500"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-gold-500 text-black font-semibold rounded-lg hover:bg-gold-400 transition-colors disabled:opacity-50"
                >
                  {isLoading ? t('search.searching', 'Searching...') : t('search.search', 'Search')}
                </button>
              </div>
            </form>

            {/* Search Results */}
            {searchQuery && (
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  {t('search.resultsFor', 'Results for')}: "{searchQuery}"
                </h2>

                {results.length > 0 ? (
                  <div className="space-y-6">
                    {results.map((result, index) => (
                      <div
                        key={index}
                        className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gold-500 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-2 py-1 text-xs font-semibold rounded ${
                                result.type === 'fleet' ? 'bg-blue-900 text-blue-300' :
                                result.type === 'service' ? 'bg-green-900 text-green-300' :
                                result.type === 'location' ? 'bg-purple-900 text-purple-300' :
                                'bg-gray-700 text-gray-300'
                              }`}>
                                {result.type.toUpperCase()}
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gold-500 mb-2">
                              <a
                                href={result.url}
                                className="hover:text-gold-400 transition-colors"
                              >
                                {result.title}
                              </a>
                            </h3>
                            <p className="text-gray-300 mb-3">
                              {result.description}
                            </p>
                            <p className="text-sm text-gray-500">
                              rollsroycers.com{result.url}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-4">
                      {t('search.noResults', 'No results found')}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {t('search.noResultsDesc', 'Try searching for different keywords or browse our main categories:')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a href="/fleet" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                        {t('navigation.fleet', 'Fleet')}
                      </a>
                      <a href="/services" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                        {t('navigation.services', 'Services')}
                      </a>
                      <a href="/locations" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                        {t('navigation.locations', 'Locations')}
                      </a>
                      <a href="/pricing" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                        {t('navigation.pricing', 'Pricing')}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* No search query */}
            {!searchQuery && (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold mb-4">
                  {t('search.popular', 'Popular Searches')}
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Phantom', 'Ghost', 'Cullinan', 'Wedding', 'Airport Transfer', 'Downtown Dubai', 'Marina'].map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        setSearchQuery(term)
                        router.push(`/search?q=${encodeURIComponent(term)}`)
                      }}
                      className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}

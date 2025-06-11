import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SearchResult {
  type: 'car' | 'service' | 'page' | 'faq'
  title: string
  description: string
  link: string
  keywords: string[]
}

export default function SmartSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  const searchDatabase: SearchResult[] = [
    // Cars
    {
      type: 'car',
      title: 'Rolls-Royce Phantom',
      description: 'The pinnacle of luxury - AED 2,500/day',
      link: '#fleet',
      keywords: ['phantom', 'luxury', 'sedan', 'flagship']
    },
    {
      type: 'car',
      title: 'Rolls-Royce Cullinan',
      description: 'Ultimate luxury SUV - AED 2,800/day',
      link: '#fleet',
      keywords: ['cullinan', 'suv', '4x4', 'family']
    },
    {
      type: 'car',
      title: 'Rolls-Royce Ghost',
      description: 'Modern luxury sedan - AED 2,200/day',
      link: '#fleet',
      keywords: ['ghost', 'sedan', 'business', 'executive']
    },
    {
      type: 'car',
      title: 'Rolls-Royce Dawn',
      description: 'Convertible elegance - AED 2,400/day',
      link: '#fleet',
      keywords: ['dawn', 'convertible', 'cabriolet', 'open-top']
    },
    {
      type: 'car',
      title: 'Rolls-Royce Wraith',
      description: 'Grand touring coupe - AED 2,300/day',
      link: '#fleet',
      keywords: ['wraith', 'coupe', 'sport', 'performance']
    },
    // Services
    {
      type: 'service',
      title: 'Airport Transfer',
      description: 'Complimentary pickup for 3+ day rentals',
      link: '#services',
      keywords: ['airport', 'transfer', 'pickup', 'delivery', 'dxb', 'dubai airport']
    },
    {
      type: 'service',
      title: 'Chauffeur Service',
      description: 'Professional drivers available 24/7',
      link: '#services',
      keywords: ['chauffeur', 'driver', 'service', 'professional']
    },
    {
      type: 'service',
      title: 'Wedding Packages',
      description: 'Special rates for wedding events',
      link: '#services',
      keywords: ['wedding', 'event', 'special', 'package', 'ceremony']
    },
    // Pages
    {
      type: 'page',
      title: 'Price Calculator',
      description: 'Get instant quotes for your rental',
      link: '#price-calculator',
      keywords: ['price', 'cost', 'calculator', 'quote', 'estimate']
    },
    {
      type: 'page',
      title: 'Availability',
      description: 'Check real-time car availability',
      link: '#availability',
      keywords: ['availability', 'booking', 'calendar', 'schedule']
    },
    {
      type: 'page',
      title: 'Elite Club',
      description: 'Join our loyalty program for exclusive benefits',
      link: '#loyalty',
      keywords: ['loyalty', 'membership', 'elite', 'club', 'rewards']
    },
    // FAQs
    {
      type: 'faq',
      title: 'Rental Requirements',
      description: 'Valid license, passport, credit card. Min age 25.',
      link: '#faq',
      keywords: ['requirements', 'documents', 'license', 'age', 'id']
    },
    {
      type: 'faq',
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance included in all rentals',
      link: '#faq',
      keywords: ['insurance', 'coverage', 'protection', 'damage']
    },
    {
      type: 'faq',
      title: 'Cancellation Policy',
      description: 'Free cancellation up to 48 hours before rental',
      link: '#faq',
      keywords: ['cancel', 'cancellation', 'refund', 'policy']
    }
  ]

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches')
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }

    // Add keyboard shortcut
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const handleSearch = (searchQuery: string) => {
    const trimmedQuery = searchQuery.trim().toLowerCase()
    if (!trimmedQuery) {
      setResults([])
      return
    }

    const searchResults = searchDatabase.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(trimmedQuery)
      const descMatch = item.description.toLowerCase().includes(trimmedQuery)
      const keywordMatch = item.keywords.some(keyword => 
        keyword.toLowerCase().includes(trimmedQuery)
      )
      return titleMatch || descMatch || keywordMatch
    })

    // Sort by relevance
    searchResults.sort((a, b) => {
      const aTitle = a.title.toLowerCase().startsWith(trimmedQuery) ? 2 : 0
      const bTitle = b.title.toLowerCase().startsWith(trimmedQuery) ? 2 : 0
      const aKeyword = a.keywords.some(k => k.startsWith(trimmedQuery)) ? 1 : 0
      const bKeyword = b.keywords.some(k => k.startsWith(trimmedQuery)) ? 1 : 0
      return (bTitle + bKeyword) - (aTitle + aKeyword)
    })

    setResults(searchResults.slice(0, 8))
  }

  const saveRecentSearch = (search: string) => {
    const updated = [search, ...recentSearches.filter(s => s !== search)].slice(0, 5)
    setRecentSearches(updated)
    localStorage.setItem('recentSearches', JSON.stringify(updated))
  }

  const handleResultClick = (result: SearchResult) => {
    saveRecentSearch(result.title)
    setIsOpen(false)
    setQuery('')
    // Smooth scroll to section
    const element = document.querySelector(result.link)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'car':
        return '🚗'
      case 'service':
        return '🌟'
      case 'page':
        return '📄'
      case 'faq':
        return '❓'
      default:
        return '🔍'
    }
  }

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-32 z-50 px-4 py-2 bg-rolls-black/80 backdrop-blur-sm border border-rolls-gold/30 rounded-lg flex items-center gap-2 hover:bg-rolls-gold/20 transition-colors"
      >
        <svg className="w-4 h-4 text-rolls-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-sm text-white hidden md:inline">Search</span>
        <kbd className="hidden md:inline text-xs text-rolls-gold bg-rolls-navy/50 px-1.5 py-0.5 rounded">⌘K</kbd>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 pt-20"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="w-full max-w-2xl bg-rolls-black border border-rolls-gold/30 rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="p-4 border-b border-rolls-gold/20">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-rolls-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value)
                      handleSearch(e.target.value)
                    }}
                    placeholder="Search for cars, services, or information..."
                    className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {query ? (
                  results.length > 0 ? (
                    <div className="p-2">
                      {results.map((result, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => handleResultClick(result)}
                          className="w-full p-3 flex items-start gap-3 hover:bg-rolls-gold/10 rounded-lg transition-colors text-left"
                        >
                          <span className="text-2xl">{getIcon(result.type)}</span>
                          <div className="flex-1">
                            <h3 className="text-white font-semibold">{result.title}</h3>
                            <p className="text-sm text-gray-400">{result.description}</p>
                          </div>
                          <span className="text-xs text-rolls-gold bg-rolls-navy/50 px-2 py-1 rounded">
                            {result.type}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p>No results found for "{query}"</p>
                    </div>
                  )
                ) : (
                  <>
                    {/* Recent Searches */}
                    {recentSearches.length > 0 && (
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-gray-400 mb-3">Recent Searches</h3>
                        <div className="space-y-1">
                          {recentSearches.map((search, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setQuery(search)
                                handleSearch(search)
                              }}
                              className="w-full p-2 flex items-center gap-2 hover:bg-rolls-gold/10 rounded-lg transition-colors text-left"
                            >
                              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-white">{search}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quick Links */}
                    <div className="p-4 border-t border-rolls-gold/20">
                      <h3 className="text-sm font-semibold text-gray-400 mb-3">Quick Links</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleResultClick({
                            type: 'page',
                            title: 'Book Now',
                            description: 'Start your luxury experience',
                            link: '#contact',
                            keywords: []
                          })}
                          className="p-3 bg-rolls-gold/10 hover:bg-rolls-gold/20 rounded-lg transition-colors"
                        >
                          <span className="text-rolls-gold">📅</span>
                          <span className="text-sm text-white ml-2">Book Now</span>
                        </button>
                        <button
                          onClick={() => handleResultClick({
                            type: 'page',
                            title: 'Special Offers',
                            description: 'View current promotions',
                            link: '#offers',
                            keywords: []
                          })}
                          className="p-3 bg-rolls-gold/10 hover:bg-rolls-gold/20 rounded-lg transition-colors"
                        >
                          <span className="text-rolls-gold">🎁</span>
                          <span className="text-sm text-white ml-2">Offers</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
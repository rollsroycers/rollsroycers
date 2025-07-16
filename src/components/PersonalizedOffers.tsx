import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'

interface PersonalizedOffer {
  id: string
  title: string
  description: string
  discount: number
  validFor: string
  code: string
  conditions: string[]
  expiresIn: number // hours
  type: 'percentage' | 'fixed' | 'upgrade' | 'addon'
}

interface UserPreferences {
  visitCount: number
  lastVisit: Date
  interests: string[]
  budget: 'economy' | 'premium' | 'luxury'
  preferredDuration: number
}

export default function PersonalizedOffers() {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [personalizedOffers, setPersonalizedOffers] = useState<PersonalizedOffer[]>([])
  const [showOfferDetails, setShowOfferDetails] = useState<string | null>(null)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState<Record<string, number>>({})

  // Simulate user preferences (in real app, this would come from analytics/cookies)
  const userPreferences: UserPreferences = {
    visitCount: 3,
    lastVisit: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    interests: ['luxury', 'business', 'long-term'],
    budget: 'premium',
    preferredDuration: 5
  }

  const allOffers: PersonalizedOffer[] = [
    {
      id: 'return-visitor',
      title: 'Welcome Back! Exclusive 20% Off',
      description: 'As a valued returning visitor, enjoy this special discount on your next booking',
      discount: 20,
      validFor: 'All vehicles',
      code: 'WELCOME20',
      conditions: ['Minimum 3-day rental', 'Valid for next 48 hours', 'Cannot combine with other offers'],
      expiresIn: 48,
      type: 'percentage'
    },
    {
      id: 'weekend-special',
      title: 'Weekend Luxury Upgrade',
      description: 'Book a Ghost, get upgraded to Phantom for the same price',
      discount: 0,
      validFor: 'Weekend bookings',
      code: 'WEEKENDVIP',
      conditions: ['Friday to Sunday rentals', 'Subject to availability', 'Book within 24 hours'],
      expiresIn: 24,
      type: 'upgrade'
    },
    {
      id: 'long-term',
      title: 'Extended Journey: 30% Off Weekly Rentals',
      description: 'Perfect for your extended Dubai experience',
      discount: 30,
      validFor: '7+ day rentals',
      code: 'WEEK30',
      conditions: ['Minimum 7-day rental', 'All vehicles included', 'Limited time offer'],
      expiresIn: 72,
      type: 'percentage'
    },
    {
      id: 'business-package',
      title: 'Executive Package: Free Chauffeur',
      description: 'Complimentary professional chauffeur service with any rental',
      discount: 500,
      validFor: 'Business bookings',
      code: 'BIZFREE',
      conditions: ['Valid Monday-Friday', 'Minimum 2-day rental', 'Advance booking required'],
      expiresIn: 96,
      type: 'addon'
    },
    {
      id: 'early-bird',
      title: 'Early Bird Special: AED 500 Off',
      description: 'Book 7 days in advance and save',
      discount: 500,
      validFor: 'Advance bookings',
      code: 'EARLY500',
      conditions: ['Book 7+ days ahead', 'Minimum 3-day rental', 'All vehicles'],
      expiresIn: 120,
      type: 'fixed'
    },
    {
      id: 'first-timer',
      title: 'First-Time Special: 15% Off + Free Delivery',
      description: 'Welcome to the Rolls-Royce family',
      discount: 15,
      validFor: 'New customers',
      code: 'FIRST15',
      conditions: ['First booking only', 'Free hotel delivery', 'Valid 30 days'],
      expiresIn: 720,
      type: 'percentage'
    }
  ]

  useEffect(() => {
    // Generate personalized offers based on user behavior
    const generatePersonalizedOffers = () => {
      let offers: PersonalizedOffer[] = []

      // Return visitor offer
      if (userPreferences.visitCount > 1) {
        offers.push(allOffers.find(o => o.id === 'return-visitor')!)
      }

      // Weekend special
      const today = new Date().getDay()
      if (today >= 4 || today === 0) { // Thursday to Sunday
        offers.push(allOffers.find(o => o.id === 'weekend-special')!)
      }

      // Long-term preference
      if (userPreferences.preferredDuration >= 5) {
        offers.push(allOffers.find(o => o.id === 'long-term')!)
      }

      // Business interest
      if (userPreferences.interests.includes('business')) {
        offers.push(allOffers.find(o => o.id === 'business-package')!)
      }

      // Early bird (always show)
      offers.push(allOffers.find(o => o.id === 'early-bird')!)

      // First-timer
      if (userPreferences.visitCount === 1) {
        offers.push(allOffers.find(o => o.id === 'first-timer')!)
      }

      // Limit to 4 offers
      setPersonalizedOffers(offers.slice(0, 4))

      // Initialize countdown timers
      const initialTimers: Record<string, number> = {}
      offers.forEach(offer => {
        initialTimers[offer.id] = offer.expiresIn * 3600 // Convert hours to seconds
      })
      setTimeLeft(initialTimers)
    }

    generatePersonalizedOffers()
  }, [])

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        const updated = { ...prev }
        Object.keys(updated).forEach(key => {
          if (updated[key] > 0) {
            updated[key] -= 1
          }
        })
        return updated
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    
    if (days > 0) return `${days}d ${hours}h`
    if (hours > 0) return `${hours}h ${minutes}m`
    return `${minutes}m`
  }

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const getOfferIcon = (type: string) => {
    switch (type) {
      case 'percentage': return '🏷️'
      case 'fixed': return '💰'
      case 'upgrade': return '⬆️'
      case 'addon': return '🎁'
      default: return '🌟'
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-white mb-4">{t('personalizedOffers.title')}</h2>
          <p className="text-xl text-rolls-gold">{t('personalizedOffers.subtitle')}</p>
          
          {/* AI Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-full"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">{t('personalizedOffers.ai')}</span>
          </motion.div>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {personalizedOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 h-full hover:border-rolls-gold/50 transition-all">
                {/* Timer Badge */}
                {timeLeft[offer.id] > 0 && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ⏱️ {formatTime(timeLeft[offer.id])}
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{getOfferIcon(offer.type)}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{offer.title}</h3>
                    <p className="text-gray-300 text-sm">{offer.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{t('personalizedOffers.welcome.validFor')}</span>
                    <span className="text-sm text-rolls-gold font-semibold">{offer.validFor}</span>
                  </div>
                  
                  {/* Promo Code */}
                  <div className="bg-rolls-navy/50 border border-rolls-gold/30 rounded-lg p-3 flex items-center justify-between">
                    <code className="text-lg font-mono text-rolls-gold">{offer.code}</code>
                    <button
                      onClick={() => handleCopyCode(offer.code)}
                      className="text-sm text-white hover:text-rolls-gold transition-colors"
                    >
                      {copiedCode === offer.code ? t('personalizedOffers.welcome.copied') : t('personalizedOffers.welcome.copyCode')}
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setShowOfferDetails(showOfferDetails === offer.id ? null : offer.id)}
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  {t('personalizedOffers.welcome.terms')}
                  <svg className={`w-4 h-4 transition-transform ${showOfferDetails === offer.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {showOfferDetails === offer.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-3 space-y-1">
                        {offer.conditions.map((condition, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex items-start">
                            <span className="text-rolls-gold mr-2">•</span>
                            {condition}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.a
                  href="#booking"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full mt-4 text-center"
                >
                  {t('personalizedOffers.welcome.useOffer')}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Create Custom Deal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-rolls-gold/20 to-rolls-gold/10 backdrop-blur-sm border border-rolls-gold/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {t('personalizedOffers.notFound.title')}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('personalizedOffers.notFound.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {t('personalizedOffers.notFound.chat')}
              </button>
              <button className="btn-primary flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                {t('personalizedOffers.notFound.quote')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
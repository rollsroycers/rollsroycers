import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'

interface Destination {
  id: string
  name: string
  distance: string
  duration: string
  description: string
  recommended: boolean
  icon: string
}

interface TripPlan {
  car: string
  destinations: string[]
  totalDistance: number
  estimatedTime: string
  recommendedStops: string[]
}

export default function TripPlanner() {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCar, setSelectedCar] = useState('cullinan')
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([])
  const [showPlan, setShowPlan] = useState(false)
  const [tripPlan, setTripPlan] = useState<TripPlan | null>(null)

  const destinations: Destination[] = [
    {
      id: 'burj-khalifa',
      name: 'Burj Khalifa',
      distance: '15 km',
      duration: '25 min',
      description: 'World\'s tallest building with stunning views',
      recommended: true,
      icon: '🏢'
    },
    {
      id: 'palm-jumeirah',
      name: 'Palm Jumeirah',
      distance: '25 km',
      duration: '35 min',
      description: 'Iconic palm-shaped island with luxury resorts',
      recommended: true,
      icon: '🌴'
    },
    {
      id: 'dubai-marina',
      name: 'Dubai Marina',
      distance: '30 km',
      duration: '40 min',
      description: 'Waterfront promenade with dining and yacht clubs',
      recommended: false,
      icon: '⛵'
    },
    {
      id: 'burj-al-arab',
      name: 'Burj Al Arab',
      distance: '20 km',
      duration: '30 min',
      description: 'Luxury hotel shaped like a sail',
      recommended: true,
      icon: '🏨'
    },
    {
      id: 'dubai-creek',
      name: 'Dubai Creek',
      distance: '10 km',
      duration: '20 min',
      description: 'Historic waterway with traditional souks',
      recommended: false,
      icon: '🛶'
    },
    {
      id: 'jbr-beach',
      name: 'JBR Beach',
      distance: '28 km',
      duration: '38 min',
      description: 'Popular beach with restaurants and activities',
      recommended: true,
      icon: '🏖️'
    },
    {
      id: 'dubai-frame',
      name: 'Dubai Frame',
      distance: '12 km',
      duration: '22 min',
      description: 'Architectural landmark connecting old and new Dubai',
      recommended: false,
      icon: '🖼️'
    },
    {
      id: 'desert-safari',
      name: 'Desert Safari Point',
      distance: '45 km',
      duration: '50 min',
      description: 'Starting point for desert adventures',
      recommended: true,
      icon: '🏜️'
    }
  ]

  const routeSuggestions = {
    luxury: {
      name: 'Luxury Experience Route',
      stops: ['burj-khalifa', 'burj-al-arab', 'palm-jumeirah'],
      description: 'Visit Dubai\'s most exclusive landmarks'
    },
    scenic: {
      name: 'Scenic Coastal Drive',
      stops: ['dubai-marina', 'jbr-beach', 'palm-jumeirah'],
      description: 'Beautiful coastal views and beach stops'
    },
    cultural: {
      name: 'Cultural Heritage Tour',
      stops: ['dubai-creek', 'dubai-frame', 'burj-khalifa'],
      description: 'Experience both traditional and modern Dubai'
    },
    adventure: {
      name: 'Adventure Seeker Route',
      stops: ['desert-safari', 'dubai-marina', 'jbr-beach'],
      description: 'From desert dunes to coastal thrills'
    }
  }

  const handleDestinationToggle = (destinationId: string) => {
    if (selectedDestinations.includes(destinationId)) {
      setSelectedDestinations(selectedDestinations.filter(id => id !== destinationId))
    } else if (selectedDestinations.length < 5) {
      setSelectedDestinations([...selectedDestinations, destinationId])
    }
  }

  const applyRouteSuggestion = (routeKey: keyof typeof routeSuggestions) => {
    setSelectedDestinations(routeSuggestions[routeKey].stops)
  }

  const generateTripPlan = () => {
    if (selectedDestinations.length === 0) return

    const totalDistance = selectedDestinations.length * 25 // Simplified calculation
    const estimatedTime = `${selectedDestinations.length * 45} minutes`
    const recommendedStops = [
      'Luxury shopping at Dubai Mall',
      'Sunset photoshoot at Jumeirah Beach',
      'Fine dining at Atlantis'
    ]

    setTripPlan({
      car: selectedCar,
      destinations: selectedDestinations,
      totalDistance,
      estimatedTime,
      recommendedStops
    })
    setShowPlan(true)
  }

  const carOptions = [
    { id: 'phantom', name: 'Phantom', ideal: 'City touring' },
    { id: 'cullinan', name: 'Cullinan', ideal: 'All destinations' },
    { id: 'dawn', name: 'Dawn', ideal: 'Coastal drives' },
    { id: 'ghost', name: 'Ghost', ideal: 'Business districts' },
    { id: 'wraith', name: 'Wraith', ideal: 'Highway cruising' }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-white mb-4">{t('tripPlanner.title')}</h2>
          <p className="text-xl text-rolls-gold">{t('tripPlanner.subtitle')}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Car Selection & Route Suggestions */}
            <div className="lg:col-span-1 space-y-6">
              {/* Car Selection */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{t('tripPlanner.selectCar')}</h3>
                <div className="space-y-3">
                  {carOptions.map((car) => (
                    <button
                      key={car.id}
                      onClick={() => setSelectedCar(car.id)}
                      className={`w-full p-3 rounded-lg border transition-all ${
                        selectedCar === car.id
                          ? 'bg-rolls-gold/20 border-rolls-gold text-white'
                          : 'bg-rolls-navy/30 border-rolls-gold/20 text-gray-300 hover:bg-rolls-gold/10'
                      }`}
                    >
                      <div className="text-left">
                        <div className="font-semibold">{car.name}</div>
                        <div className="text-xs opacity-75">{t('tripPlanner.idealFor')}: {car.ideal}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Route Suggestions */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{t('tripPlanner.suggestedRoutes')}</h3>
                <div className="space-y-3">
                  {Object.entries(routeSuggestions).map(([key, route]) => (
                    <button
                      key={key}
                      onClick={() => applyRouteSuggestion(key as keyof typeof routeSuggestions)}
                      className="w-full p-3 bg-rolls-navy/30 border border-rolls-gold/20 rounded-lg hover:bg-rolls-gold/10 transition-all text-left group"
                    >
                      <div className="font-semibold text-white group-hover:text-rolls-gold transition-colors">
                        {route.name}
                      </div>
                      <div className="text-xs text-gray-400">{route.description}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Destination Selection */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">{t('tripPlanner.chooseDestinations')}</h3>
                  <span className="text-sm text-gray-400">
                    {selectedDestinations.length}/5 {t('tripPlanner.selected')}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {destinations.map((destination) => (
                    <motion.button
                      key={destination.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleDestinationToggle(destination.id)}
                      disabled={!selectedDestinations.includes(destination.id) && selectedDestinations.length >= 5}
                      className={`p-4 rounded-lg border transition-all ${
                        selectedDestinations.includes(destination.id)
                          ? 'bg-rolls-gold/20 border-rolls-gold'
                          : selectedDestinations.length >= 5
                          ? 'bg-rolls-navy/20 border-rolls-gold/10 opacity-50 cursor-not-allowed'
                          : 'bg-rolls-navy/30 border-rolls-gold/20 hover:bg-rolls-gold/10'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{destination.icon}</span>
                        <div className="flex-1 text-left">
                          <div className="font-semibold text-white flex items-center gap-2">
                            {destination.name}
                            {destination.recommended && (
                              <span className="text-xs bg-rolls-gold/30 text-rolls-gold px-2 py-0.5 rounded-full">
                                {t('tripPlanner.recommended')}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {destination.distance} • {destination.duration}
                          </div>
                          <div className="text-xs text-gray-300 mt-1">
                            {destination.description}
                          </div>
                        </div>
                        {selectedDestinations.includes(destination.id) && (
                          <svg className="w-5 h-5 text-rolls-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {selectedDestinations.length > 0 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={generateTripPlan}
                    className="btn-primary w-full"
                  >
                    {t('tripPlanner.generatePlan')}
                  </motion.button>
                )}
              </motion.div>
            </div>
          </div>

          {/* Trip Plan Display */}
          {showPlan && tripPlan && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {t('tripPlanner.yourPlan')}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">🚗</div>
                  <div className="text-sm text-gray-400">{t('tripPlanner.vehicle')}</div>
                  <div className="text-lg font-semibold text-white">
                    Rolls-Royce {carOptions.find(c => c.id === tripPlan.car)?.name}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📍</div>
                  <div className="text-sm text-gray-400">{t('tripPlanner.totalDistance')}</div>
                  <div className="text-lg font-semibold text-white">{tripPlan.totalDistance} km</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⏱️</div>
                  <div className="text-sm text-gray-400">{t('tripPlanner.estimatedTime')}</div>
                  <div className="text-lg font-semibold text-white">{tripPlan.estimatedTime}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-rolls-gold mb-3">{t('tripPlanner.yourRoute')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tripPlan.destinations.map((destId, index) => {
                      const dest = destinations.find(d => d.id === destId)
                      return (
                        <div key={destId} className="flex items-center">
                          <div className="bg-rolls-gold/20 border border-rolls-gold/30 rounded-lg px-3 py-2 flex items-center gap-2">
                            <span>{dest?.icon}</span>
                            <span className="text-sm text-white">{dest?.name}</span>
                          </div>
                          {index < tripPlan.destinations.length - 1 && (
                            <svg className="w-6 h-6 text-rolls-gold mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-rolls-gold mb-3">{t('tripPlanner.recommendedStops')}</h4>
                  <ul className="space-y-2">
                    {tripPlan.recommendedStops.map((stop, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {stop}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex-1 text-center"
                >
                  {t('tripPlanner.bookExperience')}
                </motion.a>
                <button
                  onClick={() => {
                    setShowPlan(false)
                    setSelectedDestinations([])
                  }}
                  className="btn-secondary flex-1"
                >
                  {t('tripPlanner.createPlan')}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
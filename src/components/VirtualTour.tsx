import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'

interface TourSpot {
  id: string
  name: string
  description: string
  position: { x: number; y: number }
  details: string[]
}

export default function VirtualTour() {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeCar, setActiveCar] = useState('phantom')
  const [activeSpot, setActiveSpot] = useState<string | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const tourSpots: Record<string, TourSpot[]> = {
    phantom: [
      {
        id: 'dashboard',
        name: 'Bespoke Dashboard',
        description: 'Hand-crafted luxury at your fingertips',
        position: { x: 50, y: 60 },
        details: [
          'Gallery wood veneer',
          'Precision timepiece',
          'Customizable ambient lighting',
          'Gold-plated controls'
        ]
      },
      {
        id: 'starlight',
        name: 'Starlight Headliner',
        description: '1,340 fiber optic lights creating a celestial scene',
        position: { x: 50, y: 20 },
        details: [
          'Hand-woven constellation',
          'Shooting star feature',
          'Adjustable brightness',
          'Bespoke patterns available'
        ]
      },
      {
        id: 'seats',
        name: 'Lounge Seating',
        description: 'Supreme comfort with massage functions',
        position: { x: 30, y: 70 },
        details: [
          'Lambswool carpets',
          'Heated & ventilated seats',
          '10-point massage',
          'Memory settings'
        ]
      },
      {
        id: 'spirit',
        name: 'Spirit of Ecstasy',
        description: 'The iconic symbol of luxury',
        position: { x: 70, y: 40 },
        details: [
          'Retractable mechanism',
          'Illuminated crystal',
          'Anti-theft protection',
          'Customizable finish'
        ]
      }
    ]
  }

  const cars = [
    { id: 'phantom', name: 'Phantom', image: '/images/Rolls-royce-phantom.jpg' },
    { id: 'cullinan', name: 'Cullinan', image: '/images/Rolls-Royce-Cullinan_.jpg' },
    { id: 'ghost', name: 'Ghost', image: '/images/Rolls-Royce-black.jpg' }
  ]

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

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
          <h2 className="heading-2 text-white mb-4">360° Virtual Experience</h2>
          <p className="text-xl text-rolls-gold">Explore every detail from anywhere</p>
        </motion.div>

        {/* Car Selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          {cars.map((car) => (
            <button
              key={car.id}
              onClick={() => {
                setActiveCar(car.id)
                setActiveSpot(null)
              }}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCar === car.id
                  ? 'bg-rolls-gold text-rolls-black font-semibold'
                  : 'bg-rolls-black/50 text-white border border-rolls-gold/20 hover:bg-rolls-gold/20'
              }`}
            >
              {car.name} Interior
            </button>
          ))}
        </motion.div>

        {/* Virtual Tour Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden">
            {/* 360 View Simulator */}
            <div className="relative h-[600px] bg-gradient-to-b from-rolls-navy/50 to-rolls-black/50">
              {/* Background Image */}
              <img
                src={cars.find(c => c.id === activeCar)?.image}
                alt={t('virtualTour.alt.interiorView')}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              
              {/* Interactive Hotspots */}
              {tourSpots[activeCar]?.map((spot) => (
                <motion.button
                  key={spot.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setActiveSpot(spot.id)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                    activeSpot === spot.id ? 'z-20' : 'z-10'
                  }`}
                  style={{ left: `${spot.position.x}%`, top: `${spot.position.y}%` }}
                >
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      activeSpot === spot.id
                        ? 'bg-rolls-gold scale-125'
                        : 'bg-rolls-gold/30 hover:bg-rolls-gold/50'
                    }`}>
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    </div>
                    
                    {/* Tooltip */}
                    {activeSpot === spot.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-rolls-black/90 border border-rolls-gold/30 rounded-lg p-4 z-30"
                      >
                        <h4 className="font-semibold text-white mb-2">{spot.name}</h4>
                        <p className="text-sm text-gray-300 mb-3">{spot.description}</p>
                        <ul className="space-y-1">
                          {spot.details.map((detail, idx) => (
                            <li key={idx} className="text-xs text-gray-400 flex items-start">
                              <span className="text-rolls-gold mr-2">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              ))}

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white/10 mb-2">RR</div>
                  <p className="text-sm text-white/30">Click hotspots to explore</p>
                </div>
              </div>

              {/* Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <button className="p-2 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg text-white hover:bg-rolls-gold/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="p-2 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg text-white hover:bg-rolls-gold/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg text-white hover:bg-rolls-gold/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    Zoom
                  </button>
                  <button
                    onClick={handleFullscreen}
                    className="flex items-center gap-2 px-4 py-2 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg text-white hover:bg-rolls-gold/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5h-4m4 0v-4m0 4l-5-5" />
                    </svg>
                    {isFullscreen ? 'Exit' : 'Fullscreen'}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rolls-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm text-white">Interactive Tour</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="text-lg font-semibold text-white mb-2">Interactive Controls</h3>
              <p className="text-sm text-gray-400">Navigate with mouse or touch gestures</p>
            </div>
            <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Detailed Exploration</h3>
              <p className="text-sm text-gray-400">Zoom in to see craftsmanship details</p>
            </div>
            <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg font-semibold text-white mb-2">Mobile Compatible</h3>
              <p className="text-sm text-gray-400">Experience on any device, anywhere</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-8"
          >
            <p className="text-gray-400 mb-4">Want to experience this luxury in person?</p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block"
            >
              Schedule a Private Viewing
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
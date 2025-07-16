import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Icon from './Icon'

interface CarSpec {
  id: string
  name: string
  tagline: string
  image: string
  price: number
  category: string
  specs: {
    engine: string
    power: number
    torque: number
    acceleration: string
    topSpeed: string
    seats: number
    doors: number
    length: number
    width: number
    height: number
    wheelbase: number
    fuelCapacity: number
    bootSpace: number
  }
  metrics: {
    luxury: number
    performance: number
    comfort: number
    technology: number
    presence: number
    versatility: number
  }
  bestFor: string[]
  uniqueFeatures: string[]
  standardFeatures: string[]
}

export default function ComparisonTool() {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCars, setSelectedCars] = useState<string[]>([])
  const [showComparison, setShowComparison] = useState(false)
  const [activeTab, setActiveTab] = useState('specs')

  const carSpecs: Record<string, CarSpec> = t('compareFleet.cars', { returnObjects: true }) as Record<string, CarSpec>

  // Filter out any invalid car objects
  const validCarSpecs = Object.fromEntries(
    Object.entries(carSpecs || {}).filter(([key, car]) => 
      car && typeof car === 'object' && car.name && car.id
    )
  )

  const handleCarSelect = (carId: string) => {
    if (selectedCars.includes(carId)) {
      setSelectedCars(selectedCars.filter(id => id !== carId))
    } else if (selectedCars.length < 3) {
      setSelectedCars([...selectedCars, carId])
    }
  }

  const resetSelection = () => {
    setSelectedCars([])
  }

  const getComparisonData = () => {
    return selectedCars.map(id => validCarSpecs[id]).filter(Boolean)
  }

  const renderMetricBar = (value: number, label: string) => (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-400 w-20 text-right">{label}</span>
      <div className="flex-1 bg-gray-700 rounded-full h-2 max-w-[120px]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-gradient-to-r from-rolls-gold to-yellow-400 h-full rounded-full"
        />
      </div>
      <span className="text-xs text-rolls-gold font-semibold w-8">{value}</span>
    </div>
  )

  const renderBestForIcons = (bestFor: string[]) => (
    <div className="flex gap-2 mt-2">
      {(bestFor || []).map((item) => (
        <div key={item} className="relative group">
          <div className="w-8 h-8 bg-rolls-gold/20 rounded-full flex items-center justify-center">
            <Icon name={item} className="text-rolls-gold" size="sm" />
          </div>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-rolls-black text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none z-10">
            {t(`compareFleet.bestFor.${item}`)}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(191, 158, 76, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(191, 158, 76, 0.3) 0%, transparent 50%)',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-rolls-gold/10 backdrop-blur-sm border border-rolls-gold/20 rounded-full px-6 py-2 mb-6">
            <svg className="w-5 h-5 text-rolls-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4" />
            </svg>
            <span className="text-rolls-gold font-medium">{t('compareFleet.title')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('compareFleet.subtitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('compareFleet.description')}
          </p>
        </motion.div>

        {/* Selection Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-4 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg px-6 py-3">
            <svg className="w-5 h-5 text-rolls-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-300">{t('compareFleet.selectUpTo')}</span>
            {selectedCars.length > 0 && (
              <span className="text-rolls-gold font-semibold">
                {t('compareFleet.selectedCount', { count: selectedCars.length })}
              </span>
            )}
          </div>
        </motion.div>

        {/* Vehicle Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Object.values(validCarSpecs).map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  selectedCars.includes(car.id)
                    ? 'scale-105'
                    : selectedCars.length >= 3 && !selectedCars.includes(car.id)
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:scale-102'
                }`}
                onClick={() => handleCarSelect(car.id)}
              >
                <div className={`relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 border-2 transition-all duration-300 ${
                  selectedCars.includes(car.id)
                    ? 'border-rolls-gold shadow-lg shadow-rolls-gold/20'
                    : 'border-gray-700 hover:border-rolls-gold/50'
                }`}>
                  {/* Vehicle Image */}
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Selection Badge */}
                    <AnimatePresence>
                      {selectedCars.includes(car.id) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="absolute top-2 right-2 w-6 h-6 bg-rolls-gold rounded-full flex items-center justify-center shadow-lg"
                        >
                          <svg className="w-4 h-4 text-rolls-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Price Badge */}
                    <div className="absolute top-2 left-2 bg-rolls-black/80 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-rolls-gold text-xs font-semibold">AED {car.price}</span>
                    </div>
                  </div>

                  {/* Vehicle Info */}
                  <div className="p-4">
                    <h3 className="text-white font-bold text-sm mb-1 leading-tight">
                      {car.name ? car.name.split(' ').slice(-1)[0] : 'Unknown'}
                    </h3>
                    <p className="text-gray-400 text-xs mb-2">{car.category || 'Unknown Category'}</p>
                    
                    {/* Best For Icons */}
                    {renderBestForIcons(car.bestFor)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <AnimatePresence>
          {selectedCars.length >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowComparison(true)}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-rolls-gold to-yellow-600 text-rolls-black font-bold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-rolls-gold/30 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4" />
                  </svg>
                  {t('compareFleet.compareButton', { count: selectedCars.length })}
                </button>
                
                <button
                  onClick={resetSelection}
                  className="inline-flex items-center gap-3 bg-transparent border-2 border-gray-600 text-gray-300 font-semibold px-6 py-4 rounded-full hover:border-rolls-gold hover:text-rolls-gold transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  {t('compareFleet.resetSelection')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Comparison Modal */}
        <AnimatePresence>
          {showComparison && selectedCars.length >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 overflow-y-auto"
              onClick={() => setShowComparison(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gradient-to-b from-rolls-black to-rolls-navy border border-rolls-gold/30 rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-gradient-to-r from-rolls-black to-rolls-navy border-b border-rolls-gold/30 p-6 flex justify-between items-center backdrop-blur-sm">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{t('compareFleet.modalTitle')}</h3>
                    <p className="text-gray-400">{t('compareFleet.selectedCount', { count: selectedCars.length })}</p>
                  </div>
                  <button
                    onClick={() => setShowComparison(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-all duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Tab Navigation */}
                <div className="flex border-b border-gray-700 bg-rolls-black/50">
                  {[
                    { id: 'specs', label: t('compareFleet.specifications'), icon: '⚙️' },
                    { id: 'metrics', label: t('compareFleet.performance'), icon: '📊' },
                    { id: 'features', label: t('compareFleet.luxury'), icon: '✨' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-6 py-4 font-semibold transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'text-rolls-gold border-b-2 border-rolls-gold bg-rolls-gold/5'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Content Area */}
                <div className="p-6 max-h-[60vh] overflow-y-auto">
                  {/* Vehicle Headers */}
                  <div className="grid gap-6 mb-8" style={{ gridTemplateColumns: `minmax(200px, 1fr) repeat(${selectedCars.length}, minmax(300px, 1fr))` }}>
                    <div></div>
                    {getComparisonData().map((car) => (
                      <div key={car.id} className="text-center">
                        <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4">
                          <Image
                            src={car.image}
                            alt={car.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-1">{car.name}</h4>
                        <p className="text-rolls-gold font-semibold mb-1">AED {car.price}/day</p>
                        <p className="text-gray-400 text-sm">{car.tagline}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tab Content */}
                  {activeTab === 'specs' && (
                    <div className="space-y-4">
                      {[
                        'engine', 'power', 'torque', 'acceleration', 'topSpeed',
                        'seats', 'doors', 'length', 'width', 'height'
                      ].map((spec) => (
                        <div key={spec} className="grid gap-6" style={{ gridTemplateColumns: `minmax(200px, 1fr) repeat(${selectedCars.length}, minmax(300px, 1fr))` }}>
                          <div className="flex items-center text-gray-300 font-medium">
                            {t(`compareFleet.specs.${spec}`)}
                          </div>
                          {getComparisonData().map((car) => (
                            <div key={car.id} className="text-center">
                              <div className="bg-rolls-black/30 border border-gray-700 rounded-lg p-3">
                                <span className="text-white font-semibold">
                                  {car.specs[spec as keyof typeof car.specs]}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'metrics' && (
                    <div className="space-y-6">
                      {selectedCars.length > 0 && validCarSpecs[selectedCars[0]]?.metrics && Object.keys(validCarSpecs[selectedCars[0]].metrics).map((metric) => (
                        <div key={metric} className="grid gap-6" style={{ gridTemplateColumns: `minmax(200px, 1fr) repeat(${selectedCars.length}, minmax(300px, 1fr))` }}>
                          <div className="flex items-center text-gray-300 font-medium">
                            {t(`compareFleet.metrics.${metric}`)}
                          </div>
                          {getComparisonData().map((car) => (
                            <div key={car.id} className="text-center">
                              <div className="bg-rolls-black/30 border border-gray-700 rounded-lg p-4">
                                {renderMetricBar(car.metrics[metric as keyof typeof car.metrics], '')}
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'features' && (
                    <div className="space-y-8">
                      <div>
                        <h5 className="text-lg font-semibold text-rolls-gold mb-4">{t('compareFleet.features.uniqueFeatures')}</h5>
                        <div className="grid gap-6" style={{ gridTemplateColumns: `minmax(200px, 1fr) repeat(${selectedCars.length}, minmax(300px, 1fr))` }}>
                          <div></div>
                          {getComparisonData().map((car) => (
                            <div key={car.id}>
                              <div className="bg-rolls-black/30 border border-gray-700 rounded-lg p-4">
                                <ul className="space-y-2">
                                  {car.uniqueFeatures.slice(0, 4).map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                      <span className="text-rolls-gold mt-1">•</span>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-rolls-gold mb-4">{t('compareFleet.bestFor.title')}</h5>
                        <div className="grid gap-6" style={{ gridTemplateColumns: `minmax(200px, 1fr) repeat(${selectedCars.length}, minmax(300px, 1fr))` }}>
                          <div></div>
                          {getComparisonData().map((car) => (
                            <div key={car.id}>
                              <div className="bg-rolls-black/30 border border-gray-700 rounded-lg p-4">
                                <div className="flex flex-wrap gap-2">
                                  {car.bestFor.map((item) => (
                                    <span key={item} className="bg-rolls-gold/20 text-rolls-gold px-3 py-1 rounded-full text-xs font-medium">
                                      {t(`compareFleet.bestFor.${item}`)}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="border-t border-gray-700 p-6 bg-rolls-black/50">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="btn-primary flex-1 sm:flex-none">
                      {t('compareFleet.actions.bookSelected')}
                    </button>
                    <button className="btn-secondary flex-1 sm:flex-none">
                      {t('compareFleet.actions.requestQuote')}
                    </button>
                    <button
                      onClick={() => {
                        setShowComparison(false)
                        setSelectedCars([])
                      }}
                      className="border border-gray-600 text-gray-300 px-6 py-3 rounded-full hover:border-rolls-gold hover:text-rolls-gold transition-all duration-200 flex-1 sm:flex-none"
                    >
                      {t('compareFleet.startComparison')}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
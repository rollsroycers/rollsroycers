import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'

interface CarSpec {
  id: string
  name: string
  image: string
  price: number
  specs: {
    seats: number
    doors: number
    engine: string
    horsepower: number
    topSpeed: string
    acceleration: string
    transmission: string
    fuelType: string
  }
  features: {
    category: string
    items: string[]
  }[]
  ratings: {
    luxury: number
    performance: number
    comfort: number
    technology: number
    value: number
  }
}

export default function ComparisonTool() {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCars, setSelectedCars] = useState<string[]>(['phantom', 'cullinan'])
  const [showComparison, setShowComparison] = useState(false)

  const carSpecs: Record<string, CarSpec> = t('compareFleet.cars', { returnObjects: true }) as Record<string, CarSpec>

  const handleCarSelect = (carId: string) => {
    if (selectedCars.includes(carId)) {
      setSelectedCars(selectedCars.filter(id => id !== carId))
    } else if (selectedCars.length < 3) {
      setSelectedCars([...selectedCars, carId])
    }
  }

  const getComparisonData = () => {
    return selectedCars.map(id => carSpecs[id]).filter(Boolean)
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
          <h2 className="heading-2 text-white mb-4">{t('compareFleet.title')}</h2>
          <p className="text-xl text-rolls-gold">{t('compareFleet.subtitle')}</p>
        </motion.div>

        {/* Car Selection */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.values(carSpecs).map((car) => (
              <button
                key={car.id}
                onClick={() => handleCarSelect(car.id)}
                disabled={!selectedCars.includes(car.id) && selectedCars.length >= 3}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  selectedCars.includes(car.id)
                    ? 'ring-2 ring-rolls-gold scale-105'
                    : selectedCars.length >= 3
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:scale-102'
                }`}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rolls-black/80 to-transparent flex items-end p-3">
                  <div className="text-left w-full">
                    <p className="text-sm text-white font-semibold">{car.name ? car.name.split(' ').pop() : ''}</p>
                    <p className="text-xs text-rolls-gold">{t('fleet.aed')} {car.price}{t('fleet.perDay')}</p>
                  </div>
                </div>
                {selectedCars.includes(car.id) && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-rolls-gold rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-rolls-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
          
          {selectedCars.length >= 2 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowComparison(true)}
                className="btn-primary"
              >
                {t('compareFleet.compareButton', { count: selectedCars.length })}
              </button>
            </div>
          )}
        </motion.div>

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
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-rolls-black border border-rolls-gold/30 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-rolls-black border-b border-rolls-gold/30 p-6 flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-white">{t('compareFleet.modalTitle')}</h3>
                  <button
                    onClick={() => setShowComparison(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left text-rolls-gold py-4 pr-4 sticky left-0 bg-rolls-black">{t('compareFleet.feature')}</th>
                          {getComparisonData().map((car) => (
                            <th key={car.id} className="text-center px-4 py-4">
                              <img src={car.image} alt={car.name} className="w-32 h-20 object-cover rounded-lg mx-auto mb-2" />
                              <div className="text-white font-semibold">{car.name}</div>
                              <div className="text-rolls-gold">{t('fleet.aed')} {car.price}{t('fleet.perDay')}</div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {/* Specifications */}
                        <tr>
                          <td colSpan={selectedCars.length + 1} className="pt-6 pb-2">
                            <h4 className="text-lg font-semibold text-rolls-gold">{t('compareFleet.specifications')}</h4>
                          </td>
                        </tr>
                        {['seats', 'doors', 'engine', 'horsepower', 'topSpeed', 'acceleration', 'transmission', 'fuelType'].map((spec) => (
                          <tr key={spec} className="border-b border-rolls-gold/10">
                            <td className="py-3 pr-4 text-gray-400 capitalize sticky left-0 bg-rolls-black">
                              {t(`compareFleet.specs.${spec}`)}
                            </td>
                            {getComparisonData().map((car) => (
                              <td key={car.id} className="py-3 px-4 text-center text-white">
                                {car.specs[spec as keyof typeof car.specs]}
                              </td>
                            ))}
                          </tr>
                        ))}

                        {/* Ratings */}
                        <tr>
                          <td colSpan={selectedCars.length + 1} className="pt-6 pb-2">
                            <h4 className="text-lg font-semibold text-rolls-gold">{t('compareFleet.ratings')}</h4>
                          </td>
                        </tr>
                        {Object.keys(carSpecs.phantom.ratings).map((rating) => (
                          <tr key={rating} className="border-b border-rolls-gold/10">
                            <td className="py-3 pr-4 text-gray-400 capitalize sticky left-0 bg-rolls-black">{t(`compareFleet.ratingsItems.${rating}`)}</td>
                            {getComparisonData().map((car) => (
                              <td key={car.id} className="py-3 px-4">
                                <div className="flex items-center justify-center gap-2">
                                  <div className="flex-1 bg-rolls-navy/50 rounded-full h-2 max-w-[100px]">
                                    <div
                                      className="bg-gradient-to-r from-rolls-gold to-yellow-600 h-full rounded-full"
                                      style={{ width: `${car.ratings[rating as keyof typeof car.ratings]}%` }}
                                    />
                                  </div>
                                  <span className="text-xs text-rolls-gold">{car.ratings[rating as keyof typeof car.ratings]}</span>
                                </div>
                              </td>
                            ))}
                          </tr>
                        ))}

                        {/* Features */}
                        <tr>
                          <td colSpan={selectedCars.length + 1} className="pt-6 pb-2">
                            <h4 className="text-lg font-semibold text-rolls-gold">{t('compareFleet.keyFeatures')}</h4>
                          </td>
                        </tr>
                        {['Luxury', 'Technology', 'Comfort'].map((category) => (
                          <tr key={category} className="border-b border-rolls-gold/10">
                            <td className="py-3 pr-4 text-gray-400 align-top sticky left-0 bg-rolls-black">{t(`compareFleet.featureCategories.${category.toLowerCase()}`)}</td>
                            {getComparisonData().map((car) => {
                              const features = car.features.find(f => f.category === category)
                              return (
                                <td key={car.id} className="py-3 px-4 align-top">
                                  <ul className="space-y-1">
                                    {features?.items.map((item, idx) => (
                                      <li key={idx} className="text-sm text-gray-300 flex items-start">
                                        <span className="text-rolls-gold mr-2">•</span>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </td>
                              )
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href="#contact"
                      className="btn-primary flex-1 text-center"
                      onClick={() => setShowComparison(false)}
                    >
                      {t('compareFleet.bookYourSelection')}
                    </a>
                    <button
                      onClick={() => {
                        setShowComparison(false)
                        setSelectedCars([])
                      }}
                      className="btn-secondary flex-1"
                    >
                      {t('compareFleet.startNewComparison')}
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
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCars, setSelectedCars] = useState<string[]>(['phantom', 'cullinan'])
  const [showComparison, setShowComparison] = useState(false)

  const carSpecs: Record<string, CarSpec> = {
    phantom: {
      id: 'phantom',
      name: 'Rolls-Royce Phantom',
      image: '/images/Rolls-royce-phantom.jpg',
      price: 5800,
      specs: {
        seats: 5,
        doors: 4,
        engine: '6.75L V12',
        horsepower: 563,
        topSpeed: '250 km/h',
        acceleration: '5.3s (0-100)',
        transmission: '8-Speed Automatic',
        fuelType: 'Petrol'
      },
      features: [
        {
          category: 'Luxury',
          items: ['Starlight Headliner', 'Lambswool Floor Mats', 'Bespoke Audio System', 'Hand-stitched Leather']
        },
        {
          category: 'Technology',
          items: ['Night Vision', 'Adaptive Cruise Control', '360° Camera', 'WiFi Hotspot']
        },
        {
          category: 'Comfort',
          items: ['Massage Seats', 'Climate Control 4-Zone', 'Air Suspension', 'Silent Drive']
        }
      ],
      ratings: {
        luxury: 100,
        performance: 85,
        comfort: 100,
        technology: 90,
        value: 80
      }
    },
    cullinan: {
      id: 'cullinan',
      name: 'Rolls-Royce Cullinan',
      image: '/images/Rolls-Royce-Cullinan_.jpg',
      price: 6500,
      specs: {
        seats: 5,
        doors: 5,
        engine: '6.75L V12',
        horsepower: 563,
        topSpeed: '250 km/h',
        acceleration: '5.0s (0-100)',
        transmission: '8-Speed Automatic',
        fuelType: 'Petrol'
      },
      features: [
        {
          category: 'Luxury',
          items: ['Viewing Suite', 'Recreation Module', 'Partition Glass', 'Panoramic Roof']
        },
        {
          category: 'Technology',
          items: ['All-Wheel Drive', 'Off-Road Assistant', 'Head-Up Display', 'Gesture Control']
        },
        {
          category: 'Comfort',
          items: ['Individual Rear Seats', 'Rear Entertainment', 'Cooled/Heated Cupholders', 'Picnic Tables']
        }
      ],
      ratings: {
        luxury: 95,
        performance: 90,
        comfort: 95,
        technology: 95,
        value: 85
      }
    },
    ghost: {
      id: 'ghost',
      name: 'Rolls-Royce Ghost',
      image: '/images/Rolls-Royce-black.jpg',
      price: 4800,
      specs: {
        seats: 5,
        doors: 4,
        engine: '6.75L V12',
        horsepower: 563,
        topSpeed: '250 km/h',
        acceleration: '4.8s (0-100)',
        transmission: '8-Speed Automatic',
        fuelType: 'Petrol'
      },
      features: [
        {
          category: 'Luxury',
          items: ['Illuminated Fascia', 'Shooting Star Headliner', 'Bespoke Clock', 'Crystal Decanter']
        },
        {
          category: 'Technology',
          items: ['Planar Suspension', 'Satellite Aided Transmission', 'Park Assist', 'Digital Dashboard']
        },
        {
          category: 'Comfort',
          items: ['Micro-Environment Purification', 'Champagne Cooler', 'Executive Lounge Seats', 'Acoustic Insulation']
        }
      ],
      ratings: {
        luxury: 90,
        performance: 95,
        comfort: 92,
        technology: 93,
        value: 90
      }
    },
    dawn: {
      id: 'dawn',
      name: 'Rolls-Royce Dawn',
      image: '/images/Rolls-Royce-white.jpg',
      price: 5500,
      specs: {
        seats: 4,
        doors: 2,
        engine: '6.6L V12',
        horsepower: 563,
        topSpeed: '250 km/h',
        acceleration: '4.9s (0-100)',
        transmission: '8-Speed Automatic',
        fuelType: 'Petrol'
      },
      features: [
        {
          category: 'Luxury',
          items: ['Canadel Wood Paneling', 'Soft-Close Doors', 'Convertible Roof', 'Wind Deflector']
        },
        {
          category: 'Technology',
          items: ['Active Roll Stabilization', 'Dynamic Safety', 'Connected Services', 'Premium Sound']
        },
        {
          category: 'Comfort',
          items: ['Neck Warmers', 'Heated Armrests', 'Climate Comfort Seats', 'Silent Roof Mechanism']
        }
      ],
      ratings: {
        luxury: 88,
        performance: 88,
        comfort: 85,
        technology: 85,
        value: 82
      }
    },
    wraith: {
      id: 'wraith',
      name: 'Rolls-Royce Wraith',
      image: '/images/Rolls-Royce-front.jpg',
      price: 5000,
      specs: {
        seats: 4,
        doors: 2,
        engine: '6.6L V12',
        horsepower: 624,
        topSpeed: '250 km/h',
        acceleration: '4.4s (0-100)',
        transmission: '8-Speed Automatic',
        fuelType: 'Petrol'
      },
      features: [
        {
          category: 'Luxury',
          items: ['Starlight Headliner', 'Hand-Built Interior', 'Bespoke Options', 'Coach Doors']
        },
        {
          category: 'Technology',
          items: ['GPS Aided Transmission', 'Dynamic Traction Control', 'Sport Mode', 'Launch Control']
        },
        {
          category: 'Comfort',
          items: ['Power Everything', 'Dual-Zone Climate', 'Premium Leather', 'Sound Insulation']
        }
      ],
      ratings: {
        luxury: 87,
        performance: 92,
        comfort: 86,
        technology: 88,
        value: 85
      }
    }
  }

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
          <h2 className="heading-2 text-white mb-4">Compare Our Fleet</h2>
          <p className="text-xl text-rolls-gold">Select up to 3 vehicles to compare side by side</p>
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
                    <p className="text-sm text-white font-semibold">{car.name.split(' ').pop()}</p>
                    <p className="text-xs text-rolls-gold">AED {car.price}/day</p>
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
                Compare {selectedCars.length} Vehicles
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
                  <h3 className="text-2xl font-semibold text-white">Vehicle Comparison</h3>
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
                          <th className="text-left text-rolls-gold py-4 pr-4 sticky left-0 bg-rolls-black">Feature</th>
                          {getComparisonData().map((car) => (
                            <th key={car.id} className="text-center px-4 py-4">
                              <img src={car.image} alt={car.name} className="w-32 h-20 object-cover rounded-lg mx-auto mb-2" />
                              <div className="text-white font-semibold">{car.name}</div>
                              <div className="text-rolls-gold">AED {car.price}/day</div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {/* Specifications */}
                        <tr>
                          <td colSpan={selectedCars.length + 1} className="pt-6 pb-2">
                            <h4 className="text-lg font-semibold text-rolls-gold">Specifications</h4>
                          </td>
                        </tr>
                        {['seats', 'doors', 'engine', 'horsepower', 'topSpeed', 'acceleration', 'transmission', 'fuelType'].map((spec) => (
                          <tr key={spec} className="border-b border-rolls-gold/10">
                            <td className="py-3 pr-4 text-gray-400 capitalize sticky left-0 bg-rolls-black">
                              {spec.replace(/([A-Z])/g, ' $1').trim()}
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
                            <h4 className="text-lg font-semibold text-rolls-gold">Ratings</h4>
                          </td>
                        </tr>
                        {Object.keys(carSpecs.phantom.ratings).map((rating) => (
                          <tr key={rating} className="border-b border-rolls-gold/10">
                            <td className="py-3 pr-4 text-gray-400 capitalize sticky left-0 bg-rolls-black">{rating}</td>
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
                            <h4 className="text-lg font-semibold text-rolls-gold">Key Features</h4>
                          </td>
                        </tr>
                        {['Luxury', 'Technology', 'Comfort'].map((category) => (
                          <tr key={category} className="border-b border-rolls-gold/10">
                            <td className="py-3 pr-4 text-gray-400 align-top sticky left-0 bg-rolls-black">{category}</td>
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
                      Book Your Selection
                    </a>
                    <button
                      onClick={() => {
                        setShowComparison(false)
                        setSelectedCars([])
                      }}
                      className="btn-secondary flex-1"
                    >
                      Start New Comparison
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
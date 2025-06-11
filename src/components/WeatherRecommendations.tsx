import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface WeatherData {
  temp: number
  condition: string
  humidity: number
  windSpeed: number
  icon: string
}

interface CarRecommendation {
  model: string
  reason: string
  features: string[]
  image: string
}

export default function WeatherRecommendations() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [weather, setWeather] = useState<WeatherData>({
    temp: 32,
    condition: 'sunny',
    humidity: 45,
    windSpeed: 12,
    icon: '☀️'
  })
  const [recommendation, setRecommendation] = useState<CarRecommendation | null>(null)
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'afternoon' | 'evening' | 'night'>('afternoon')

  useEffect(() => {
    // Get current time of day
    const hour = new Date().getHours()
    if (hour >= 5 && hour < 12) setTimeOfDay('morning')
    else if (hour >= 12 && hour < 17) setTimeOfDay('afternoon')
    else if (hour >= 17 && hour < 20) setTimeOfDay('evening')
    else setTimeOfDay('night')

    // Simulate weather data (in real app, would use weather API)
    const weatherConditions = [
      { temp: 45, condition: 'hot', humidity: 30, windSpeed: 8, icon: '🌡️' },
      { temp: 32, condition: 'sunny', humidity: 45, windSpeed: 12, icon: '☀️' },
      { temp: 28, condition: 'cloudy', humidity: 60, windSpeed: 18, icon: '☁️' },
      { temp: 25, condition: 'rainy', humidity: 80, windSpeed: 25, icon: '🌧️' },
      { temp: 35, condition: 'sandstorm', humidity: 20, windSpeed: 40, icon: '🌪️' }
    ]

    // Random weather for demo
    const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)]
    setWeather(randomWeather)

    // Generate recommendation based on weather
    generateRecommendation(randomWeather, timeOfDay)
  }, [])

  const generateRecommendation = (weatherData: WeatherData, time: string) => {
    let rec: CarRecommendation

    if (weatherData.condition === 'hot' || weatherData.temp > 40) {
      rec = {
        model: 'Rolls-Royce Cullinan',
        reason: `With ${weatherData.temp}°C heat, the Cullinan's superior climate control and spacious interior provide ultimate comfort`,
        features: [
          'Advanced 4-zone climate control',
          'Cooled seats with massage',
          'UV-protected panoramic roof',
          'Refrigerated compartment'
        ],
        image: '/images/Rolls-Royce-Cullinan_.jpg'
      }
    } else if (weatherData.condition === 'rainy') {
      rec = {
        model: 'Rolls-Royce Ghost',
        reason: 'Perfect for rainy conditions with all-wheel drive and advanced safety systems',
        features: [
          'All-wheel drive system',
          'Rain-sensing wipers',
          'Adaptive LED headlights',
          'Enhanced traction control'
        ],
        image: '/images/Rolls-Royce-black.jpg'
      }
    } else if (time === 'evening' || time === 'night') {
      rec = {
        model: 'Rolls-Royce Wraith',
        reason: 'The perfect grand tourer for Dubai\'s stunning evening drives',
        features: [
          'Starlight headliner',
          'Night vision assist',
          'Adaptive cruise control',
          'Ambient interior lighting'
        ],
        image: '/images/Rolls-Royce-front.jpg'
      }
    } else if (weatherData.condition === 'sunny' && time === 'afternoon') {
      rec = {
        model: 'Rolls-Royce Dawn',
        reason: 'Enjoy Dubai\'s beautiful weather with the luxury convertible',
        features: [
          'Retractable soft-top',
          'Wind deflector system',
          'Neck warmers',
          'Silent operation roof'
        ],
        image: '/images/Rolls-Royce-white.jpg'
      }
    } else {
      rec = {
        model: 'Rolls-Royce Phantom',
        reason: 'The ultimate luxury experience for any condition',
        features: [
          'Magic Carpet Ride',
          'Acoustic insulation',
          'Lounge seating',
          'Bespoke entertainment'
        ],
        image: '/images/Rolls-royce-phantom.jpg'
      }
    }

    setRecommendation(rec)
  }

  const getTimeGreeting = () => {
    switch (timeOfDay) {
      case 'morning': return 'Good morning!'
      case 'afternoon': return 'Good afternoon!'
      case 'evening': return 'Good evening!'
      case 'night': return 'Good night!'
    }
  }

  const getActivitySuggestions = () => {
    const suggestions = {
      morning: ['Business meetings in DIFC', 'Breakfast at Atlantis', 'Golf at Emirates Club'],
      afternoon: ['Shopping at Dubai Mall', 'Lunch at Burj Al Arab', 'Beach time at JBR'],
      evening: ['Sunset drive to Palm Jumeirah', 'Dinner at La Petite Maison', 'Dubai Fountain show'],
      night: ['Night cityscape tour', 'Late dining at Zuma', 'Marina walk experience']
    }
    return suggestions[timeOfDay]
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
          <h2 className="heading-2 text-white mb-4">Weather-Smart Recommendations</h2>
          <p className="text-xl text-rolls-gold">Perfect car for today's conditions</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Weather Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-rolls-black/50 to-rolls-navy/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 mb-8"
          >
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-6">
                <div className="text-6xl">{weather.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{weather.temp}°C</h3>
                  <p className="text-rolls-gold capitalize">{weather.condition}</p>
                  <p className="text-sm text-gray-400 mt-1">{getTimeGreeting()}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-gray-400">Humidity</div>
                  <div className="text-white font-semibold">{weather.humidity}%</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-400">Wind</div>
                  <div className="text-white font-semibold">{weather.windSpeed} km/h</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Car Recommendation */}
          {recommendation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={recommendation.image}
                    alt={recommendation.model}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-rolls-black/50"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-400">AI Recommendation</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{recommendation.model}</h3>
                  <p className="text-gray-300 mb-6">{recommendation.reason}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-rolls-gold">Perfect Features for Today:</h4>
                    {recommendation.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-rolls-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <motion.a
                    href="#booking"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary inline-block"
                  >
                    Book {recommendation.model.split(' ').pop()} Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Activity Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Perfect Activities for Your {recommendation?.model.split(' ').pop()}:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {getActivitySuggestions().map((activity, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <span className="text-rolls-gold">📍</span>
                  <span className="text-gray-300">{activity}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Live Weather Updates Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Live weather data updates every hour</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
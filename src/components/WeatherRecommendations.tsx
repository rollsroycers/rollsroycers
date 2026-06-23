import { useState, useEffect } from 'react'
import { m as motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { useInView } from 'react-intersection-observer'

interface WeatherData {
  temp: number
  condition: 'hot' | 'sunny' | 'cloudy' | 'rainy' | 'sandstorm'
  humidity: number
  windSpeed: number
  icon: string
}

type RecKey = 'hot' | 'rainy' | 'evening' | 'sunny' | 'default'
const REC_IMAGE: Record<RecKey, string> = {
  hot: '/images/Rolls-Royce-Cullinan_.jpg',
  rainy: '/images/Rolls-Royce-black.jpg',
  evening: '/images/Rolls-Royce-front.jpg',
  sunny: '/images/Rolls-Royce-white.jpg',
  default: '/images/Rolls-royce-phantom.jpg',
}

export default function WeatherRecommendations() {
  // All display strings come from the `weatherRec` keys (weatherrec.json), resolved via
  // i18next fallbackNS — see scripts/i18n-gen.mjs. Pages that render this load `weatherrec`.
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [weather, setWeather] = useState<WeatherData>({ temp: 32, condition: 'sunny', humidity: 45, windSpeed: 12, icon: '☀️' })
  const [recKey, setRecKey] = useState<RecKey>('default')
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'afternoon' | 'evening' | 'night'>('afternoon')

  useEffect(() => {
    const hour = new Date().getHours()
    const time: typeof timeOfDay = hour >= 5 && hour < 12 ? 'morning' : hour >= 12 && hour < 17 ? 'afternoon' : hour >= 17 && hour < 20 ? 'evening' : 'night'
    setTimeOfDay(time)

    const conditions: WeatherData[] = [
      { temp: 45, condition: 'hot', humidity: 30, windSpeed: 8, icon: '🌡️' },
      { temp: 32, condition: 'sunny', humidity: 45, windSpeed: 12, icon: '☀️' },
      { temp: 28, condition: 'cloudy', humidity: 60, windSpeed: 18, icon: '☁️' },
      { temp: 25, condition: 'rainy', humidity: 80, windSpeed: 25, icon: '🌧️' },
      { temp: 35, condition: 'sandstorm', humidity: 20, windSpeed: 40, icon: '🌪️' },
    ]
    const w = conditions[Math.floor(Math.random() * conditions.length)]
    setWeather(w)

    let key: RecKey = 'default'
    if (w.condition === 'hot' || w.temp > 40) key = 'hot'
    else if (w.condition === 'rainy') key = 'rainy'
    else if (time === 'evening' || time === 'night') key = 'evening'
    else if (w.condition === 'sunny' && time === 'afternoon') key = 'sunny'
    setRecKey(key)
  }, [])

  const fullModel = t(`weatherRec.recommendations.${recKey}.model`)
  const shortModel = fullModel.split(' ').pop() || fullModel
  const features = t(`weatherRec.recommendations.${recKey}.features`, { returnObjects: true }) as unknown
  const featureList = Array.isArray(features) ? (features as string[]) : []
  const activities = t(`weatherRec.activities.${timeOfDay}`, { returnObjects: true }) as unknown
  const activityList = Array.isArray(activities) ? (activities as string[]) : []

  return (
    <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="heading-2 text-white mb-4">{t('weatherRec.title')}</h2>
          <p className="text-xl text-rolls-gold">{t('weatherRec.subtitle')}</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Weather Display */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gradient-to-r from-rolls-black/50 to-rolls-navy/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-6">
                <div className="text-6xl">{weather.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{weather.temp}°C</h3>
                  <p className="text-rolls-gold">{t(`weatherRec.conditions.${weather.condition}`)}</p>
                  <p className="text-sm text-gray-400 mt-1">{t(`weatherRec.greetings.${timeOfDay}`)}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-gray-400">{t('weatherRec.humidity')}</div>
                  <div className="text-white font-semibold">{weather.humidity}%</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-400">{t('weatherRec.wind')}</div>
                  <div className="text-white font-semibold">{weather.windSpeed} km/h</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Car Recommendation */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img src={REC_IMAGE[recKey]} alt={fullModel} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-rolls-black/50"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">{t('weatherRec.recommendedBadge')}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{fullModel}</h3>
                <p className="text-gray-300 mb-6">{t(`weatherRec.recommendations.${recKey}.reason`, { temp: weather.temp })}</p>
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-rolls-gold">{t('weatherRec.featuresTitle')}</h4>
                  {featureList.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-rolls-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                <motion.a href="#booking" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary inline-block">
                  {t('weatherRec.bookNow', { model: shortModel })}
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Activity Suggestions */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.6 }} className="mt-8 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">{t('weatherRec.activitiesTitle', { model: shortModel })}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activityList.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <span className="text-rolls-gold">📍</span>
                  <span className="text-gray-300">{activity}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recommendation note */}
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.8 }} className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-full">
              <span className="text-sm text-gray-400">{t('weatherRec.updateNote')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

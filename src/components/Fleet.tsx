import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useState } from 'react'

import { TFunction } from 'next-i18next'

export default function Fleet({ t }: { t: TFunction }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCar, setSelectedCar] = useState<number | null>(null)

  const getFeatures = (key: string): (string | { title: string })[] => {
    const features = t(key, { returnObjects: true });
    if (Array.isArray(features)) {
      return features.map(feature => {
        if (typeof feature === 'object' && feature !== null && 'title' in feature) {
          return feature as { title: string };
        }
        return feature as string;
      });
    }
    return [];
  };

  const cars = [
    {
      id: 1,
      name: t('fleet.phantom.name'),
      description: t('fleet.phantom.description'),
      features: getFeatures('fleet.phantom.features'),
      image: '/images/Rolls-royce-phantom.jpg',
      video: '/images/videos/Rolls-royce-phantom.mp4',
      price: `${t('common.aed', 'AED')} 5,800`
    },
    {
      id: 2,
      name: t('fleet.cullinan.name'),
      description: t('fleet.cullinan.description'),
      features: getFeatures('fleet.cullinan.features'),
      image: '/images/Rolls-Royce-Cullinan_.jpg',
      video: '/images/videos/Rolls-Royce-Cullinan_.mp4',
      price: `${t('common.aed', 'AED')} 6,500`
    },
    {
      id: 3,
      name: t('fleet.ghost.name'),
      description: t('fleet.ghost.description'),
      features: getFeatures('fleet.ghost.features'),
      image: '/images/Rolls-Royce-white.jpg',
      price: `${t('common.aed', 'AED')} 4,800`
    },
    {
      id: 4,
      name: t('fleet.dawn.name'),
      description: t('fleet.dawn.description'),
      features: getFeatures('fleet.dawn.features'),
      image: '/images/Rolls-royce-dubai.jpg',
      price: `${t('common.aed', 'AED')} 5,500`
    },
    {
      id: 5,
      name: t('fleet.wraith.name'),
      description: t('fleet.wraith.description'),
      features: getFeatures('fleet.wraith.features'),
      image: '/images/Rolls-Royce-black.jpg',
      price: `${t('common.aed', 'AED')} 5,000`
    }
  ]

  return (
    <section id="fleet" className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-white mb-4">{t('fleet.title')}</h2>
          <p className="text-xl text-rolls-gold">{t('fleet.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-rolls-black/50 rounded-lg overflow-hidden glass-effect luxury-shadow"
              onMouseEnter={() => setSelectedCar(car.id)}
              onMouseLeave={() => setSelectedCar(null)}
            >
              {/* Image/Video Container */}
              <div className="relative h-64 overflow-hidden">
                {car.video && selectedCar === car.id ? (
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  >
                    <source src={car.video} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-rolls-black/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">{car.name}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 line-clamp-2">{car.description}</p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {car.features && car.features.length > 0 ? (
                    car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <svg className="w-4 h-4 text-rolls-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {typeof feature === 'string' ? feature : feature.title}
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 text-sm text-gray-400">No features available</div>
                  )}
                </div>

                {/* Price and CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs sm:text-sm text-gray-400">{t('fleet.from')}</span>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-rolls-gold">
                      {car.price} <span className="text-xs sm:text-sm font-normal">{t('fleet.perDay')}</span>
                    </div>
                  </div>
                  <a href="#contact" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto btn-secondary group-hover:bg-rolls-gold group-hover:text-rolls-black touch-action-manipulation">
                      {t('fleet.rentNow')}
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
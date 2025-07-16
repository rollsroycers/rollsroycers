import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function About() {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const reasons = t('about.reasons', { returnObjects: true }) as Record<string, string>
  const stats = [
    { number: '100%', label: t('about.stats.satisfaction') },
    { number: '24/7', label: t('about.stats.availability') },
    { number: '10+', label: t('about.stats.experience') },
    { number: '5★', label: t('about.stats.rating') },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-2 text-white mb-4">{t('about.title')}</h2>
            <h3 className="text-2xl text-rolls-gold mb-6">{t('about.subtitle')}</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>

            <h4 className="text-xl font-semibold text-white mb-6">{t('about.whyChoose')}</h4>
            
            <div className="space-y-4">
              {Object.entries(reasons).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rolls-gold/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-rolls-gold" />
                  </div>
                  <p className="text-gray-300">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/inside-Rolls-Royce.jpg"
                    alt="Rolls-Royce Interior"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Rolls-royce-official.jpg"
                    alt="Rolls-Royce Official"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Rolls-oyce-air-port.jpg"
                    alt="Rolls-Royce Airport"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Rolls-royce-with-blan.jpg"
                    alt="Rolls-Royce Experience"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-rolls-gold/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-rolls-gold/10 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-rolls-gold mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
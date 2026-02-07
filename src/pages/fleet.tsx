import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'
import ComparisonTool from '@/components/ComparisonTool'
import { createWhatsAppLinkProps } from '@/utils/whatsapp'

export default function FleetPage() {
  const { t } = useTranslation(['common', 'fleet'])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-rotate hero images
  const heroImages = [
    { src: '/images/Rolls-royce-official.jpg', alt: 'Rolls-Royce Fleet Dubai' },
    { src: '/images/Phantom_Extended.jpg', alt: 'Rolls-Royce Phantom Extended' },
    { src: '/images/Rolls-Royce_Cullinan_Majestic_Aurora_.jpg', alt: 'Rolls-Royce Cullinan' },
    { src: '/images/Rolls-Royce_Ghost_Black_Badge.jpg', alt: 'Rolls-Royce Ghost Black Badge' },
    { src: '/images/Rolls-Royce_Dawn_Convertible-2.jpg', alt: 'Rolls-Royce Dawn Convertible' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const categories = [
    { id: 'all', name: t('fleet:categories.all'), count: '6' },
    { id: 'sedan', name: t('fleet:categories.sedan'), count: '2' },
    { id: 'suv', name: t('fleet:categories.suv'), count: '1' },
    { id: 'convertible', name: t('fleet:categories.convertible'), count: '1' },
    { id: 'coupe', name: t('fleet:categories.coupe'), count: '2' }
  ]

  const fleetData = [
    {
      id: 'phantom',
      name: t('fleet:vehicles.phantom.name'),
      category: 'sedan',
      tagline: t('fleet:vehicles.phantom.tagline'),
      description: t('fleet:vehicles.phantom.description'),
      price: 'AED 5,800',
      originalPrice: 'AED 6,200',
      image: '/images/Phantom_Extended.jpg',
      gallery: [
        '/images/Phantom_Extended.jpg',
        '/images/new_Rolls-Royce_Extended_Wheelbase_Phantom.jpg',
        '/images/Rolls-Royce_Phantom_Extended_Series_II.jpg'
      ],
      features: Array.isArray(t('fleet:vehicles.phantom.features', { returnObjects: true })) 
        ? t('fleet:vehicles.phantom.features', { returnObjects: true }) as string[]
        : [],
      specifications: t('fleet:vehicles.phantom.specifications', { returnObjects: true }),
      href: '/fleet/phantom',
      badge: t('fleet:badges.flagship'),
      popular: true
    },
    {
      id: 'cullinan',
      name: t('fleet:vehicles.cullinan.name'),
      category: 'suv',
      tagline: t('fleet:vehicles.cullinan.tagline'),
      description: t('fleet:vehicles.cullinan.description'),
      price: 'AED 6,500',
      originalPrice: 'AED 7,000',
      image: '/images/2024_Rolls-Royce_Cullinan.jpg',
      gallery: [
        '/images/2024_Rolls-Royce_Cullinan.jpg',
        '/images/Rolls-Royce_Cullinan_Majestic_Aurora_.jpg',
        '/images/Rolls-Royce_Cullinan_SUV-2.jpg'
      ],
      features: Array.isArray(t('fleet:vehicles.cullinan.features', { returnObjects: true })) 
        ? t('fleet:vehicles.cullinan.features', { returnObjects: true }) as string[]
        : [],
      specifications: t('fleet:vehicles.cullinan.specifications', { returnObjects: true }),
      href: '/fleet/cullinan',
      badge: t('fleet:badges.ultimate_suv'),
      popular: false
    },
    {
      id: 'ghost',
      name: t('fleet:vehicles.ghost.name'),
      category: 'sedan',
      tagline: t('fleet:vehicles.ghost.tagline'),
      description: t('fleet:vehicles.ghost.description'),
      price: 'AED 4,800',
      originalPrice: 'AED 5,200',
      image: '/images/Rolls-Royce_Ghost_Black_Badge.jpg',
      gallery: [
        '/images/Rolls-Royce_Ghost_Black_Badge.jpg',
        '/images/Black_Rolls_Royce_Ghost.jpg',
        '/images/ghost-black-badge-2.jpg'
      ],
      features: Array.isArray(t('fleet:vehicles.ghost.features', { returnObjects: true })) 
        ? t('fleet:vehicles.ghost.features', { returnObjects: true }) as string[]
        : [],
      specifications: t('fleet:vehicles.ghost.specifications', { returnObjects: true }),
      href: '/fleet/ghost',
      badge: t('fleet:badges.best_value'),
      popular: true
    },
    {
      id: 'dawn',
      name: t('fleet:vehicles.dawn.name'),
      category: 'convertible',
      tagline: t('fleet:vehicles.dawn.tagline'),
      description: t('fleet:vehicles.dawn.description'),
      price: 'AED 5,500',
      originalPrice: 'AED 5,900',
      image: '/images/Rolls-Royce_Dawn_Convertible-2.jpg',
      gallery: [
        '/images/Rolls-Royce_Dawn_Convertible-2.jpg',
        '/images/Rolls-Royce_Dawn.jpg',
        '/images/dawn-convertible.jpg'
      ],
      features: Array.isArray(t('fleet:vehicles.dawn.features', { returnObjects: true })) 
        ? t('fleet:vehicles.dawn.features', { returnObjects: true }) as string[]
        : [],
      specifications: t('fleet:vehicles.dawn.specifications', { returnObjects: true }),
      href: '/fleet/dawn',
      badge: t('fleet:badges.convertible'),
      popular: false
    },
    {
      id: 'wraith',
      name: t('fleet:vehicles.wraith.name'),
      category: 'coupe',
      tagline: t('fleet:vehicles.wraith.tagline'),
      description: t('fleet:vehicles.wraith.description'),
      price: 'AED 5,000',
      originalPrice: 'AED 5,400',
      image: '/images/wraith-coupe.jpg',
      gallery: [
        '/images/wraith-coupe.jpg',
        '/images/Rolls-Royce-black.jpg'
      ],
      features: Array.isArray(t('fleet:vehicles.wraith.features', { returnObjects: true })) 
        ? t('fleet:vehicles.wraith.features', { returnObjects: true }) as string[]
        : [],
      specifications: t('fleet:vehicles.wraith.specifications', { returnObjects: true }),
      href: '/fleet/wraith',
      badge: t('fleet:badges.grand_tourer'),
      popular: false
    },
    {
      id: 'spectre',
      name: t('fleet:vehicles.spectre.name'),
      category: 'coupe',
      tagline: t('fleet:vehicles.spectre.tagline'),
      description: t('fleet:vehicles.spectre.description'),
      price: 'AED 7,500',
      originalPrice: 'AED 8,500',
      image: '/images/2024_Rolls-Royce_Spectre.jpg',
      gallery: [
        '/images/2024_Rolls-Royce_Spectre.jpg'
      ],
      features: Array.isArray(t('fleet:vehicles.spectre.features', { returnObjects: true })) 
        ? t('fleet:vehicles.spectre.features', { returnObjects: true }) as string[]
        : [],
      specifications: t('fleet:vehicles.spectre.specifications', { returnObjects: true }),
      href: '/fleet/spectre',
      badge: t('fleet:badges.electric'),
      popular: true
    }
  ]

  const filteredFleet = selectedCategory === 'all' 
    ? fleetData 
    : fleetData.filter(vehicle => vehicle.category === selectedCategory)

  const stats = [
    { number: '6', label: t('fleet:stats.models') },
    { number: '24/7', label: t('fleet:stats.availability') },
    { number: '1200+', label: t('fleet:stats.satisfied_clients') },
    { number: '15', label: t('fleet:stats.years_experience') }
  ]

  return (
    <>
      <SEO pageKey="fleet.index" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              fill
              className="object-cover transition-opacity duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/60 via-transparent to-rolls-black/90"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center max-w-5xl mx-auto"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                {t('fleet:hero.title')}
              </h1>
              <p className="text-2xl md:text-3xl text-rolls-gold mb-4">
                {t('fleet:hero.subtitle')}
              </p>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                {t('fleet:hero.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.a
                  {...createWhatsAppLinkProps('fleet')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4"
                >
                  {t('fleet:hero.call_button')}
                </motion.a>
                <Link href="/booking" className="btn-secondary text-lg px-8 py-4">
                  {t('fleet:hero.book_button')}
                </Link>
              </div>
            </motion.div>

            {/* Image Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-rolls-gold' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-5xl font-bold text-rolls-gold mb-2">{stat.number}</p>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Categories */}
        <section className="py-8 bg-rolls-black sticky top-0 z-40 border-b border-rolls-gold/20">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-4 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-rolls-gold text-rolls-black font-semibold'
                      : 'bg-rolls-black/50 text-white border border-rolls-gold/20 hover:border-rolls-gold/40'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Overview */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('fleet:overview.title')}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('fleet:overview.description')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {filteredFleet.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-xl overflow-hidden hover:border-rolls-gold/40 transition-all duration-500"
                >
                  {/* Popular Badge */}
                  {vehicle.popular && (
                    <div className="absolute top-4 left-4 z-10 bg-rolls-gold text-rolls-black px-3 py-1 rounded-full text-sm font-semibold">
                      {t('fleet:badges.popular')}
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-rolls-black/80 text-rolls-gold px-3 py-1 rounded-full text-sm font-medium border border-rolls-gold/30">
                    {vehicle.badge}
                  </div>

                  {/* Image Gallery */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rolls-black/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{vehicle.name}</h3>
                        <p className="text-rolls-gold font-medium">{vehicle.tagline}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-rolls-gold">{vehicle.price}</div>
                        <div className="text-sm text-gray-400 line-through">{vehicle.originalPrice}</div>
                        <div className="text-sm text-gray-400">{t('fleet:per_day')}</div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{vehicle.description}</p>

                    {/* Key Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {vehicle.features && vehicle.features.slice(0, 4).map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <svg className="w-4 h-4 text-rolls-gold mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        href={vehicle.href}
                        className="flex-1 bg-rolls-gold text-rolls-black text-center py-3 px-4 rounded-lg font-semibold hover:bg-white transition-colors"
                      >
                        View {vehicle.name} Details
                      </Link>
                      <a
                        {...createWhatsAppLinkProps(vehicle.id as any)}
                        className="flex-1 bg-transparent border border-rolls-gold text-rolls-gold text-center py-3 px-4 rounded-lg font-semibold hover:bg-rolls-gold hover:text-rolls-black transition-colors"
                      >
                        Rent {vehicle.name} Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Fleet */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t('fleet:why_choose.title')}
                </h2>
                <p className="text-xl text-gray-300">
                  {t('fleet:why_choose.subtitle')}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.isArray(t('fleet:why_choose.reasons', { returnObjects: true })) && 
                  (t('fleet:why_choose.reasons', { returnObjects: true }) as any[]).map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center hover:border-rolls-gold/40 transition-colors"
                    >
                      <div className="text-4xl mb-4">{reason.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                      <p className="text-gray-300">{reason.description}</p>
                    </motion.div>
                  ))
                }
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Tool */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                {t('fleet:comparison.title')}
              </h2>
              <p className="text-xl text-gray-300">
                {t('fleet:comparison.subtitle')}
              </p>
            </motion.div>
            <ComparisonTool />
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('fleet:cta.title')}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {t('fleet:cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  {...createWhatsAppLinkProps('booking')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4"
                >
                  {t('fleet:cta.call_button')}
                </motion.a>
                <Link href="/booking" className="btn-secondary text-lg px-8 py-4">
                  {t('fleet:cta.book_button')}
                </Link>
                <a
                  {...createWhatsAppLinkProps('quote')}
                  className="btn-outline text-lg px-8 py-4"
                >
                  {t('fleet:cta.whatsapp_button')}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <WhatsAppButton />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'fleet', 'seo', 'navigation', 'pages'])),
    },
  }
}

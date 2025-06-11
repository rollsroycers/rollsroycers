import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function RollsRoyceVsBentleyPage() {
  const [selectedAspect, setSelectedAspect] = useState('overview')

  const aspects = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'luxury', name: 'Luxury & Comfort', icon: '💎' },
    { id: 'performance', name: 'Performance', icon: '🏎️' },
    { id: 'technology', name: 'Technology', icon: '📱' },
    { id: 'heritage', name: 'Heritage', icon: '🏛️' },
    { id: 'price', name: 'Price & Value', icon: '💰' }
  ]

  const comparisonData = {
    overview: {
      'rolls-royce': {
        title: 'The Pinnacle of Luxury',
        points: [
          'Ultimate luxury and refinement',
          'Bespoke craftsmanship',
          'Whisper-quiet ride',
          'Timeless design philosophy',
          'Exclusive ownership experience'
        ],
        summary: 'Rolls-Royce represents the absolute pinnacle of automotive luxury, focusing on creating the most refined and comfortable vehicles in the world.'
      },
      'bentley': {
        title: 'Performance Luxury',
        points: [
          'Blend of luxury and performance',
          'Handcrafted British excellence',
          'Sporty driving dynamics',
          'Contemporary design approach',
          'Racing heritage influence'
        ],
        summary: 'Bentley combines traditional British luxury with impressive performance capabilities, appealing to those who enjoy spirited driving.'
      }
    },
    luxury: {
      'rolls-royce': {
        title: 'Unmatched Refinement',
        points: [
          'Magic Carpet Ride suspension',
          'Starlight Headliner with 1,340 lights',
          'Finest leather and wood veneers',
          'Double-glazed windows for silence',
          'Bespoke customization program'
        ],
        summary: 'Every Rolls-Royce is designed to cocoon occupants in supreme comfort, with attention to detail that borders on obsessive.'
      },
      'bentley': {
        title: 'Sporting Luxury',
        points: [
          'Diamond-quilted leather seats',
          'Knurled metal controls',
          'Premium wood and metal finishes',
          'Naim audio systems',
          'Mulliner customization'
        ],
        summary: 'Bentley offers exceptional luxury with a sporting edge, combining comfort with driver engagement.'
      }
    },
    performance: {
      'rolls-royce': {
        title: 'Effortless Power',
        points: [
          '6.75L V12 engines standard',
          'Power delivered smoothly',
          'Focus on refinement over speed',
          '0-60 mph in ~5 seconds',
          'Emphasis on torque delivery'
        ],
        summary: 'Rolls-Royce engines provide abundant power delivered in a refined, unobtrusive manner.'
      },
      'bentley': {
        title: 'Exhilarating Performance',
        points: [
          'W12 and V8 engine options',
          'Up to 650 horsepower',
          '0-60 mph in under 4 seconds',
          'Active all-wheel drive',
          'Sport-tuned suspension available'
        ],
        summary: 'Bentley emphasizes performance alongside luxury, with some models capable of supercar speeds.'
      }
    },
    technology: {
      'rolls-royce': {
        title: 'Subtle Innovation',
        points: [
          'Satellite Aided Transmission',
          'Night Vision with wildlife detection',
          'Bespoke Audio system',
          'Spirit of Ecstasy retraction',
          'Laser headlight technology'
        ],
        summary: 'Technology in Rolls-Royce serves comfort and safety, integrated seamlessly without overwhelming the experience.'
      },
      'bentley': {
        title: 'Modern Tech Integration',
        points: [
          'Rotating Display technology',
          'Digital instrument cluster',
          'Advanced driver assistance',
          'Bentley Dynamic Ride',
          'My Bentley connected services'
        ],
        summary: 'Bentley embraces modern technology more overtly, offering cutting-edge features for tech-savvy luxury buyers.'
      }
    },
    heritage: {
      'rolls-royce': {
        title: '120 Years of Excellence',
        points: [
          'Founded 1906 by Rolls & Royce',
          'Spirit of Ecstasy since 1911',
          'Supplier to royalty worldwide',
          'Handbuilt in Goodwood, England',
          'BMW Group ownership since 2003'
        ],
        summary: 'Rolls-Royce has maintained its position as the ultimate luxury marque for over a century.'
      },
      'bentley': {
        title: 'Racing Heritage',
        points: [
          'Founded 1919 by W.O. Bentley',
          '5 Le Mans victories in 1920s',
          'Flying B mascot',
          'Handbuilt in Crewe, England',
          'Volkswagen Group since 1998'
        ],
        summary: 'Bentley\'s racing heritage continues to influence its blend of luxury and performance.'
      }
    },
    price: {
      'rolls-royce': {
        title: 'Ultimate Investment',
        points: [
          'Starting from $400,000+',
          'Extensive bespoke options',
          'Strong resale value',
          'Exclusive ownership benefits',
          'Unparalleled prestige'
        ],
        summary: 'Rolls-Royce commands premium prices reflecting its status as the ultimate luxury automobile.'
      },
      'bentley': {
        title: 'Accessible Ultra-Luxury',
        points: [
          'Starting from $200,000+',
          'Competitive lease options',
          'Good value retention',
          'Wider model range',
          'More attainable entry point'
        ],
        summary: 'Bentley offers a more accessible entry into ultra-luxury motoring while maintaining exclusivity.'
      }
    }
  }

  const modelComparisons = [
    {
      rollsRoyce: {
        model: 'Phantom',
        image: '/images/Rolls-royce-phantom.jpg',
        price: 'From $650,000',
        type: 'Flagship Sedan'
      },
      bentley: {
        model: 'Mulsanne',
        image: '/images/bentley-mulsanne.jpg',
        price: 'From $350,000',
        type: 'Flagship Sedan'
      }
    },
    {
      rollsRoyce: {
        model: 'Ghost',
        image: '/images/Black_Rolls_Royce_Ghost.jpg',
        price: 'From $480,000',
        type: 'Executive Sedan'
      },
      bentley: {
        model: 'Flying Spur',
        image: '/images/bentley-flying-spur.jpg',
        price: 'From $250,000',
        type: 'Sport Sedan'
      }
    },
    {
      rollsRoyce: {
        model: 'Cullinan',
        image: '/images/Rolls-Royce-Cullinan_.jpg',
        price: 'From $550,000',
        type: 'Luxury SUV'
      },
      bentley: {
        model: 'Bentayga',
        image: '/images/bentley-bentayga.jpg',
        price: 'From $200,000',
        type: 'Performance SUV'
      }
    }
  ]

  const rentalComparison = {
    rollsRoyce: {
      daily: 'AED 5,500 - 6,500',
      weekly: 'AED 33,000 - 39,000',
      monthly: 'AED 110,000 - 130,000',
      benefits: [
        'Ultimate prestige',
        'Unmatched comfort',
        'Perfect for special occasions',
        'Iconic status symbol',
        'Exclusive experience'
      ]
    },
    bentley: {
      daily: 'AED 3,500 - 4,500',
      weekly: 'AED 21,000 - 27,000',
      monthly: 'AED 70,000 - 90,000',
      benefits: [
        'Performance luxury',
        'Sporty driving experience',
        'More model variety',
        'Contemporary styling',
        'Better value proposition'
      ]
    }
  }

  return (
    <>
      <Head>
        <title>Rolls-Royce vs Bentley Comparison Dubai | Luxury Car Rental Guide</title>
        <meta name="description" content="Compare Rolls-Royce vs Bentley luxury cars in Dubai. Detailed comparison of features, performance, heritage, and rental prices to help you choose." />
        <meta name="keywords" content="Rolls Royce vs Bentley, luxury car comparison Dubai, Phantom vs Mulsanne, Ghost vs Flying Spur, Cullinan vs Bentayga" />
        <link rel="canonical" href="https://rollsroycers.com/compare/rolls-royce-vs-bentley" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Rolls-Royce vs Bentley: The Ultimate Luxury Car Comparison",
              "description": "Comprehensive comparison between Rolls-Royce and Bentley luxury vehicles",
              "author": {
                "@type": "Organization",
                "name": "Rolls-Royce Dubai"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Rolls-Royce Dubai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://rollsroycers.com/images/logo.jpg"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://rollsroycers.com/compare/rolls-royce-vs-bentley"
              }
            })
          }}
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="grid grid-cols-2 h-full">
              <div className="relative">
                <Image
                  src="/images/Rolls-royce-official.jpg"
                  alt="Rolls-Royce"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-rolls-black/80 to-transparent"></div>
              </div>
              <div className="relative">
                <Image
                  src="/images/Black_Rolls_Royce_Ghost.jpg"
                  alt="Bentley"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-l from-rolls-black/80 to-transparent"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rolls-black/50 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Rolls-Royce <span className="text-rolls-gold">vs</span> Bentley
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The ultimate comparison between two titans of British luxury motoring
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-12 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Rolls-Royce</h2>
                <p className="text-gray-300 mb-4">
                  "The Best Car in the World" - A statement of ultimate luxury, refinement, and exclusivity.
                </p>
                <div className="space-y-2">
                  <p className="text-rolls-gold">✓ Ultimate luxury and comfort</p>
                  <p className="text-rolls-gold">✓ Bespoke craftsmanship</p>
                  <p className="text-rolls-gold">✓ Timeless prestige</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 rounded-lg p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Bentley</h2>
                <p className="text-gray-300 mb-4">
                  "Be Extraordinary" - Where luxury meets performance in perfect British harmony.
                </p>
                <div className="space-y-2">
                  <p className="text-emerald-400">✓ Performance luxury blend</p>
                  <p className="text-emerald-400">✓ Sporting heritage</p>
                  <p className="text-emerald-400">✓ Driver engagement</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Aspect Selector */}
        <section className="py-8 bg-gradient-to-b from-rolls-navy to-rolls-black sticky top-0 z-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {aspects.map((aspect) => (
                <motion.button
                  key={aspect.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedAspect(aspect.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center space-x-2 ${
                    selectedAspect === aspect.id
                      ? 'bg-rolls-gold text-rolls-black'
                      : 'bg-rolls-black/50 text-white border border-rolls-gold/20 hover:border-rolls-gold/40'
                  }`}
                >
                  <span className="text-xl">{aspect.icon}</span>
                  <span>{aspect.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                key={selectedAspect}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                  {aspects.find(a => a.id === selectedAspect)?.name} Comparison
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Rolls-Royce */}
                  <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white">Rolls-Royce</h3>
                      <div className="w-16 h-16 bg-rolls-gold/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">👑</span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-rolls-gold mb-4">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['rolls-royce'].title}
                    </h4>
                    
                    <ul className="space-y-3 mb-6">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['rolls-royce'].points.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-gray-400 italic">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['rolls-royce'].summary}
                    </p>
                  </div>

                  {/* Bentley */}
                  <div className="bg-rolls-black/50 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white">Bentley</h3>
                      <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🦅</span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-emerald-400 mb-4">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['bentley'].title}
                    </h4>
                    
                    <ul className="space-y-3 mb-6">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['bentley'].points.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-gray-400 italic">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['bentley'].summary}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Model Comparisons */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Model-to-Model Comparison
            </h2>
            
            <div className="space-y-12 max-w-6xl mx-auto">
              {modelComparisons.map((comparison, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  {/* Rolls-Royce Model */}
                  <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={comparison.rollsRoyce.image}
                        alt={comparison.rollsRoyce.model}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {comparison.rollsRoyce.model}
                      </h3>
                      <p className="text-rolls-gold mb-2">{comparison.rollsRoyce.type}</p>
                      <p className="text-2xl font-bold text-white">{comparison.rollsRoyce.price}</p>
                    </div>
                  </div>

                  {/* Bentley Model */}
                  <div className="bg-rolls-black/50 backdrop-blur-sm border border-emerald-500/20 rounded-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={comparison.rollsRoyce.image} 
                        alt={comparison.bentley.model}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {comparison.bentley.model}
                      </h3>
                      <p className="text-emerald-400 mb-2">{comparison.bentley.type}</p>
                      <p className="text-2xl font-bold text-white">{comparison.bentley.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rental Comparison */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Rental Price Comparison in Dubai
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Rolls-Royce Rental */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-b from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Rolls-Royce Rental</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Daily Rate:</span>
                    <span className="text-xl font-bold text-rolls-gold">{rentalComparison.rollsRoyce.daily}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Weekly Rate:</span>
                    <span className="text-xl font-bold text-rolls-gold">{rentalComparison.rollsRoyce.weekly}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monthly Rate:</span>
                    <span className="text-xl font-bold text-rolls-gold">{rentalComparison.rollsRoyce.monthly}</span>
                  </div>
                </div>
                
                <h4 className="text-white font-semibold mb-3">Why Choose Rolls-Royce:</h4>
                <ul className="space-y-2 mb-6">
                  {rentalComparison.rollsRoyce.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-rolls-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <Link href="/booking" className="btn-primary w-full text-center">
                  Book Rolls-Royce
                </Link>
              </motion.div>

              {/* Bentley Rental */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-b from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Bentley Rental</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Daily Rate:</span>
                    <span className="text-xl font-bold text-emerald-400">{rentalComparison.bentley.daily}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Weekly Rate:</span>
                    <span className="text-xl font-bold text-emerald-400">{rentalComparison.bentley.weekly}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monthly Rate:</span>
                    <span className="text-xl font-bold text-emerald-400">{rentalComparison.bentley.monthly}</span>
                  </div>
                </div>
                
                <h4 className="text-white font-semibold mb-3">Why Choose Bentley:</h4>
                <ul className="space-y-2 mb-6">
                  {rentalComparison.bentley.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full transition-all w-full">
                  Inquire About Bentley
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Which Should You Choose? */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Which Should You Choose?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-2xl font-bold text-rolls-gold mb-4">Choose Rolls-Royce If You:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-rolls-gold mr-3">•</span>
                    <span className="text-gray-300">Value ultimate luxury and comfort above all else</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rolls-gold mr-3">•</span>
                    <span className="text-gray-300">Want to make the strongest possible impression</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rolls-gold mr-3">•</span>
                    <span className="text-gray-300">Prefer a serene, refined driving experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rolls-gold mr-3">•</span>
                    <span className="text-gray-300">Appreciate traditional craftsmanship and heritage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rolls-gold mr-3">•</span>
                    <span className="text-gray-300">Need the ultimate wedding or special event vehicle</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">Choose Bentley If You:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3">•</span>
                    <span className="text-gray-300">Want luxury with sporting performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3">•</span>
                    <span className="text-gray-300">Enjoy spirited driving and handling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3">•</span>
                    <span className="text-gray-300">Prefer contemporary design and technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3">•</span>
                    <span className="text-gray-300">Want better value for ultra-luxury</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3">•</span>
                    <span className="text-gray-300">Like the combination of luxury and speed</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Verdict */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                The Verdict
              </h2>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-12">
                <p className="text-xl text-gray-300 mb-6">
                  Both Rolls-Royce and Bentley represent the pinnacle of British luxury motoring, but they cater to different preferences. 
                  Rolls-Royce remains the ultimate choice for those seeking uncompromising luxury, refinement, and prestige. 
                  Bentley offers a compelling alternative for those who want luxury with a sporting edge.
                </p>
                <p className="text-2xl text-rolls-gold font-semibold mb-8">
                  In Dubai, where luxury is a lifestyle, Rolls-Royce continues to reign supreme as the ultimate status symbol.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/fleet" className="btn-primary">
                    Explore Rolls-Royce Fleet
                  </Link>
                  <Link href="/booking" className="btn-secondary">
                    Book Your Experience
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Comparisons */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              More Luxury Comparisons
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">Rolls-Royce vs Mercedes</h3>
                <p className="text-gray-400 mb-4">Ultimate luxury vs German engineering</p>
                <Link href="/compare/rolls-royce-vs-mercedes" className="text-rolls-gold hover:text-white transition-colors">
                  Coming Soon →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">Rolls-Royce vs Ferrari</h3>
                <p className="text-gray-400 mb-4">Luxury comfort vs supercar performance</p>
                <Link href="/compare/rolls-royce-vs-ferrari" className="text-rolls-gold hover:text-white transition-colors">
                  Coming Soon →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">Phantom vs Maybach</h3>
                <p className="text-gray-400 mb-4">The ultimate flagship comparison</p>
                <Link href="/compare/phantom-vs-maybach" className="text-rolls-gold hover:text-white transition-colors">
                  Coming Soon →
                </Link>
              </motion.div>
            </div>
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
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}
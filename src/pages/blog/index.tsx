import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'

export default function BlogPage() {
  const { t } = useTranslation('common')
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: t('blog.categories.all') },
    { id: 'guides', name: t('blog.categories.guides') },
    { id: 'luxury', name: t('blog.categories.luxury') },
    { id: 'events', name: t('blog.categories.events') },
    { id: 'tips', name: t('blog.categories.tips') }
  ]

  const featuredArticle = {
    id: 1,
    title: t('blog.featured.title'),
    excerpt: t('blog.featured.excerpt'),
    category: 'guides',
    author: t('blog.featured.author'),
    date: t('blog.featured.date'),
    readTime: t('blog.featured.readTime'),
    image: '/images/Rolls-royce-dubai.jpg',
    slug: 'ultimate-guide-rolls-royce-rental-dubai'
  }

  const articles = [
    {
      id: 2,
      title: t('blog.articles.article1.title'),
      excerpt: t('blog.articles.article1.excerpt'),
      category: 'guides',
      author: t('blog.articles.article1.author'),
      date: t('blog.articles.article1.date'),
      readTime: t('blog.articles.article1.readTime'),
      image: '/images/Rolls-Royce-Ride-2.jpg',
      slug: 'top-scenic-drives-dubai'
    },
    {
      id: 3,
      title: t('blog.articles.article2.title'),
      excerpt: t('blog.articles.article2.excerpt'),
      category: 'luxury',
      author: t('blog.articles.article2.author'),
      date: t('blog.articles.article2.date'),
      readTime: t('blog.articles.article2.readTime'),
      image: '/images/Rolls-Royce-white.jpg',
      slug: 'rolls-royce-wedding-car-dubai'
    },
    {
      id: 4,
      title: t('blog.articles.article3.title'),
      excerpt: t('blog.articles.article3.excerpt'),
      category: 'luxury',
      author: t('blog.articles.article3.author'),
      date: t('blog.articles.article3.date'),
      readTime: t('blog.articles.article3.readTime'),
      image: '/images/Rolls-royce-with-chauffeur.jpg',
      slug: 'business-travel-rolls-royce'
    },
    {
      id: 5,
      title: t('blog.articles.article4.title'),
      excerpt: t('blog.articles.article4.excerpt'),
      category: 'events',
      author: t('blog.articles.article4.author'),
      date: t('blog.articles.article4.date'),
      readTime: t('blog.articles.article4.readTime'),
      image: '/images/Rolls-Royce-black.jpg',
      slug: 'dubai-motor-show-2024'
    },
    {
      id: 6,
      title: t('blog.articles.article5.title'),
      excerpt: t('blog.articles.article5.excerpt'),
      category: 'tips',
      author: t('blog.articles.article5.author'),
      date: t('blog.articles.article5.date'),
      readTime: t('blog.articles.article5.readTime'),
      image: '/images/Rolls-Royce-front.jpg',
      slug: 'first-time-dubai-luxury-guide'
    },
    {
      id: 7,
      title: t('blog.articles.article6.title'),
      excerpt: t('blog.articles.article6.excerpt'),
      category: 'luxury',
      author: t('blog.articles.article6.author'),
      date: t('blog.articles.article6.date'),
      readTime: t('blog.articles.article6.readTime'),
      image: '/images/Rolls-royce-phantom.jpg',
      slug: 'evolution-rolls-royce-history'
    },
    {
      id: 8,
      title: t('blog.articles.article7.title'),
      excerpt: t('blog.articles.article7.excerpt'),
      category: 'guides',
      author: t('blog.articles.article7.author'),
      date: t('blog.articles.article7.date'),
      readTime: t('blog.articles.article7.readTime'),
      image: '/images/Rolls-oyce-air-port.jpg',
      slug: 'dubai-luxury-hotels-guide'
    },
    {
      id: 9,
      title: t('blog.articles.article8.title'),
      excerpt: t('blog.articles.article8.excerpt'),
      category: 'tips',
      author: t('blog.articles.article8.author'),
      date: t('blog.articles.article8.date'),
      readTime: t('blog.articles.article8.readTime'),
      image: '/images/downtown-hero.jpg',
      slug: 'luxury-shopping-dubai-rolls-royce'
    },
    {
      id: 10,
      title: t('blog.articles.article9.title'),
      excerpt: t('blog.articles.article9.excerpt'),
      category: 'luxury',
      author: t('blog.articles.article9.author'),
      date: t('blog.articles.article9.date'),
      readTime: t('blog.articles.article9.readTime'),
      image: '/images/Rolls-Royce_Dawn_Convertible-2.jpg',
      slug: 'rolls-royce-dawn-convertible-dubai'
    },
    {
      id: 11,
      title: t('blog.articles.chauffeurGuide.title', 'Rolls-Royce Chauffeur Service in Dubai: Executive Guide 2025'),
      excerpt: t('blog.articles.chauffeurGuide.excerpt', 'When to choose chauffeur service, pricing, routes, etiquette, and booking tips.'),
      category: 'guides',
      author: t('blog.articles.chauffeurGuide.author', 'Editorial Team'),
      date: t('blog.articles.chauffeurGuide.date', 'Aug 8, 2025'),
      readTime: t('blog.articles.chauffeurGuide.readTime', '9 min read'),
      image: '/images/Rolls-royce-with-chauffeur.jpg',
      slug: 'rolls-royce-chauffeur-dubai-guide'
    },
    {
      id: 12,
      title: t('blog.articles.airportTransfer.title', 'Rolls-Royce Airport Transfer Dubai: Seamless Arrivals & Departures'),
      excerpt: t('blog.articles.airportTransfer.excerpt', 'Plan a flawless DXB/DWC transfer with timing, routes, terminals, and baggage support.'),
      category: 'guides',
      author: t('blog.articles.airportTransfer.author', 'Editorial Team'),
      date: t('blog.articles.airportTransfer.date', 'Aug 8, 2025'),
      readTime: t('blog.articles.airportTransfer.readTime', '8 min read'),
      image: '/images/Rolls-oyce-air-port.jpg',
      slug: 'rolls-royce-airport-transfer-dubai'
    },
    {
      id: 13,
      title: t('blog.articles.luxuryGuide2025.title', '2025 Dubai Luxury Car Experience Guide: Why Rolls-Royce Reigns Supreme'),
      excerpt: t('blog.articles.luxuryGuide2025.excerpt', 'The ultimate 2025 guide to luxury car rentals in Dubai. Compare Rolls-Royce vs Bentley, Ferrari, Lamborghini with pricing, features, and insider tips.'),
      category: 'guides',
      author: t('blog.articles.luxuryGuide2025.author', 'Editorial Team'),
      date: t('blog.articles.luxuryGuide2025.date', 'Jan 20, 2025'),
      readTime: t('blog.articles.luxuryGuide2025.readTime', '15 min read'),
      image: '/images/Rolls-royce-dubai.jpg',
      slug: 'dubai-luxury-car-guide-2025'
    },
    {
      id: 14,
      title: t('blog.articles.article10.title', 'The Art of Arriving in Style: Rolls-Royce for Special Events in Dubai'),
      excerpt: t('blog.articles.article10.excerpt', 'Discover how to make unforgettable entrances at galas, red carpet events, corporate functions, and celebrations with Dubai\'s most prestigious luxury cars.'),
      category: 'luxury',
      author: t('blog.articles.article10.author', 'Layla Al-Mansouri'),
      date: t('blog.articles.article10.date', 'October 1, 2025'),
      readTime: t('blog.articles.article10.readTime', '10 min read'),
      image: '/images/Rolls-Royce-Ride-2.jpg',
      slug: 'art-of-arriving-special-events-dubai'
    },
    {
      id: 15,
      title: t('blog.articles.article11.title', 'Dubai After Dark: The Ultimate Rolls-Royce Night Experience Guide'),
      excerpt: t('blog.articles.article11.excerpt', 'Discover Dubai\'s most spectacular nighttime destinations and experiences, from illuminated skylines to exclusive venues, all from the luxury of your Rolls-Royce.'),
      category: 'luxury',
      author: t('blog.articles.article11.author', 'Khalid Al-Mansoori'),
      date: t('blog.articles.article11.date', 'October 4, 2025'),
      readTime: t('blog.articles.article11.readTime', '12 min read'),
      image: '/images/Rolls-Royce-black.jpg',
      slug: 'dubai-night-experience-rolls-royce'
    }
  ]

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  return (
    <>
      <SEO pageKey="blog.index" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-official.jpg"
              alt="Rolls-Royce Dubai Blog"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/70 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Luxury Insights
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                Your Guide to Rolls-Royce Excellence in Dubai
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-rolls-black sticky top-0 z-40 border-b border-rolls-gold/20">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-4 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    selectedCategory === category.id
                      ? 'bg-rolls-gold text-rolls-black font-semibold'
                      : 'bg-rolls-black/50 text-white border border-rolls-gold/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-rolls-gold text-rolls-black px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span>{featuredArticle.author}</span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 text-rolls-gold hover:text-white transition-colors"
                  >
                    Read Full Article
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden hover:border-rolls-gold/40 transition-all"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rolls-black/80 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span className="bg-rolls-gold/20 text-rolls-gold px-2 py-1 rounded">
                        {categories.find(cat => cat.id === article.category)?.name}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <p>{article.author}</p>
                        <p>{article.date}</p>
                      </div>
                      <Link 
                        href={`/blog/${article.slug}`}
                        className="text-rolls-gold hover:text-white transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn-secondary">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get exclusive insights, special offers, and Dubai luxury travel tips delivered to your inbox
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t('placeholders.enterEmail')}
                  className="flex-1 px-6 py-3 bg-rolls-black/50 border border-rolls-gold/20 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-rolls-gold"
                />
                <button type="submit" className="btn-primary">
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-400 mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Popular Topics
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                'Rolls-Royce Phantom',
                'Wedding Car Rental',
                'Dubai Marina',
                'Airport Transfer',
                'Chauffeur Service',
                'Business Travel',
                'Luxury Hotels',
                'Dubai Attractions',
                'Corporate Events',
                'Photography Spots',
                'Desert Safari',
                'Night Life'
              ].map((topic, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-black/50 border border-rolls-gold/20 px-4 py-2 rounded-full text-gray-300 hover:text-white hover:border-rolls-gold/40 transition-all"
                >
                  {topic}
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Your Luxury Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Turn these insights into reality. Book your Rolls-Royce today and create your own Dubai story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Call: +971 55 816 4922
              </motion.a>
              <Link href="/fleet" className="btn-secondary">
                Explore Our Fleet
              </Link>
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation"])),
    },
  }
}
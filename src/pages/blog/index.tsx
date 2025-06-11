import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'guides', name: 'Dubai Guides' },
    { id: 'luxury', name: 'Luxury Lifestyle' },
    { id: 'events', name: 'Events & News' },
    { id: 'tips', name: 'Travel Tips' }
  ]

  const featuredArticle = {
    id: 1,
    title: 'Ultimate Guide to Renting a Rolls-Royce in Dubai 2024',
    excerpt: 'Everything you need to know about luxury car rental in Dubai, from choosing the right model to understanding local regulations.',
    category: 'guides',
    author: 'Ahmed Salem',
    date: 'December 15, 2024',
    readTime: '8 min read',
    image: '/images/Rolls-royce-dubai.jpg',
    slug: 'ultimate-guide-rolls-royce-rental-dubai'
  }

  const articles = [
    {
      id: 2,
      title: 'Top 10 Scenic Drives in Dubai with a Rolls-Royce',
      excerpt: 'Discover the most breathtaking routes in Dubai perfect for your luxury car experience.',
      category: 'guides',
      author: 'Sarah Johnson',
      date: 'December 10, 2024',
      readTime: '5 min read',
      image: '/images/Rolls-Royce-Ride-2.jpg',
      slug: 'top-scenic-drives-dubai'
    },
    {
      id: 3,
      title: 'Rolls-Royce Wedding Car: Making Your Special Day Extraordinary',
      excerpt: 'How to incorporate the elegance of Rolls-Royce into your Dubai wedding celebration.',
      category: 'luxury',
      author: 'Fatima Al Rashid',
      date: 'December 8, 2024',
      readTime: '6 min read',
      image: '/images/Rolls-Royce-white.jpg',
      slug: 'rolls-royce-wedding-car-dubai'
    },
    {
      id: 4,
      title: 'Business Travel in Style: Corporate Car Rental Solutions',
      excerpt: 'Why executives choose Rolls-Royce for business transportation in Dubai.',
      category: 'luxury',
      author: 'James Mitchell',
      date: 'December 5, 2024',
      readTime: '4 min read',
      image: '/images/Rolls-royce-with-chauffeur.jpg',
      slug: 'business-travel-rolls-royce'
    },
    {
      id: 5,
      title: 'Dubai International Motor Show 2024: Rolls-Royce Highlights',
      excerpt: 'Exclusive coverage of the latest Rolls-Royce models showcased at Dubai Motor Show.',
      category: 'events',
      author: 'Omar Hassan',
      date: 'December 3, 2024',
      readTime: '7 min read',
      image: '/images/Rolls-Royce-black.jpg',
      slug: 'dubai-motor-show-2024'
    },
    {
      id: 6,
      title: 'First-Time in Dubai? Your Luxury Transportation Guide',
      excerpt: 'Essential tips for tourists looking to explore Dubai in ultimate comfort and style.',
      category: 'tips',
      author: 'Maria Fernandez',
      date: 'November 28, 2024',
      readTime: '5 min read',
      image: '/images/Rolls-Royce-front.jpg',
      slug: 'first-time-dubai-luxury-guide'
    },
    {
      id: 7,
      title: 'The Evolution of Rolls-Royce: From Classic to Contemporary',
      excerpt: 'Journey through the history of Rolls-Royce and its impact on luxury automotive.',
      category: 'luxury',
      author: 'David Chen',
      date: 'November 25, 2024',
      readTime: '10 min read',
      image: '/images/Rolls-royce-phantom.jpg',
      slug: 'evolution-rolls-royce-history'
    },
    {
      id: 8,
      title: 'Exclusive: Inside Dubai\'s Most Luxurious Hotels with Valet Service',
      excerpt: 'Where to stay when you\'re arriving in a Rolls-Royce in Dubai.',
      category: 'guides',
      author: 'Sophie Laurent',
      date: 'November 20, 2024',
      readTime: '6 min read',
      image: '/images/Rolls-oyce-air-port.jpg',
      slug: 'dubai-luxury-hotels-guide'
    }
  ]

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  return (
    <>
      <Head>
        <title>Rolls-Royce Dubai Blog | Luxury Car Rental Tips & Guides</title>
        <meta name="description" content="Expert insights on Rolls-Royce rental in Dubai. Luxury travel guides, wedding tips, business solutions, and exclusive event coverage. Your ultimate resource." />
        <meta name="keywords" content="Rolls Royce Dubai blog, luxury car rental tips, Dubai travel guide, wedding car advice, business travel Dubai" />
        <link rel="canonical" href="https://rollsroycers.com/blog" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Rolls-Royce Dubai Blog",
              "description": "Luxury car rental insights and Dubai travel guides",
              "url": "https://rollsroycers.com/blog",
              "publisher": {
                "@type": "Organization",
                "name": "Rolls-Royce Dubai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://rollsroycers.com/logo.png"
                }
              },
              "blogPost": [
                {
                  "@type": "BlogPosting",
                  "headline": featuredArticle.title,
                  "description": featuredArticle.excerpt,
                  "author": {
                    "@type": "Person",
                    "name": featuredArticle.author
                  },
                  "datePublished": "2024-12-15",
                  "image": featuredArticle.image
                }
              ]
            })
          }}
        />
      </Head>

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
                  placeholder="Enter your email"
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
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}
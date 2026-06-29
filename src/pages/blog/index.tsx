import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { m as motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'
import GEOOptimizer from '@/components/GEOOptimizer'
import { listFileSlugs, getFileArticle } from '@/data/blogFileStore'
import { blogArticles, localizedArticles } from '@/data/blogArticlesData'
import blogTranslations from '@/data/blogTranslations.json'
import blogSlugs from '@/data/blogSlugs.json'

type CardText = Record<string, { title: string; excerpt: string; readTime: string }>

export default function BlogPage({ filePosts = [], cardText = {} }: { filePosts?: any[]; cardText?: CardText }) {
  const { t } = useTranslation('common')
  const [selectedCategory, setSelectedCategory] = useState('all')
  // Numbered, in-place pagination (URL stays /blog): only a window of cards mounts
  // per page, so the index never loads hundreds of cover images at once and scales to 1000+.
  const PAGE_SIZE = 12
  const [page, setPage] = useState(1)
  
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
    // NOTE: Removed 2 cards (slugs 'art-of-arriving-special-events-dubai' and
    // 'dubai-night-experience-rolls-royce') — they had no entry in blog/[slug].tsx
    // getStaticPaths (fallback:false) and were returning hard 404s. Re-add here only
    // after authoring the matching articles + adding their slugs to getStaticPaths.
    {
      id: 16,
      title: 'Rolls-Royce Spectre: The World\'s First Ultra-Luxury Electric Car Now in Dubai',
      excerpt: 'Rent the all-electric Rolls-Royce Spectre in Dubai from AED 7,500/day. 577 HP, 530km range, zero emissions luxury.',
      category: 'guides',
      author: 'Ahmed Salem',
      date: 'Feb 1, 2026',
      readTime: '8 min read',
      image: '/images/2024_Rolls-Royce_Spectre.jpg',
      slug: 'rolls-royce-spectre-electric-dubai'
    },
    {
      id: 17,
      title: 'Rolls-Royce Black Badge Dubai: The Dark Side of Luxury',
      excerpt: 'Rent Black Badge editions in Dubai. Cullinan BB from AED 8,500/day, Ghost BB from AED 5,500/day. Darker, more powerful.',
      category: 'guides',
      author: 'Ahmed Salem',
      date: 'Feb 2, 2026',
      readTime: '9 min read',
      image: '/images/2024_Rolls-Royce_Cullinan_Black_Badge.jpg',
      slug: 'rolls-royce-black-badge-dubai'
    },
    {
      id: 18,
      title: 'Rolls-Royce Birthday Car Rental Dubai: Make It Unforgettable',
      excerpt: 'Surprise birthday celebrations with a decorated Rolls-Royce. Packages from AED 3,500 with champagne and chauffeur.',
      category: 'tips',
      author: 'Fatima Al Rashid',
      date: 'Feb 3, 2026',
      readTime: '7 min read',
      image: '/images/Rolls-Royce-white.jpg',
      slug: 'rolls-royce-birthday-car-dubai'
    },
    {
      id: 19,
      title: 'Hourly Rolls-Royce Rental in Dubai: Luxury on Your Schedule',
      excerpt: 'Rent a Rolls-Royce by the hour from AED 800/hr. All 6 models with chauffeur. Minimum 2-hour booking.',
      category: 'guides',
      author: 'James Thompson',
      date: 'Feb 4, 2026',
      readTime: '6 min read',
      image: '/images/Rolls-royce-with-chauffeur.jpg',
      slug: 'hourly-rolls-royce-rental-dubai'
    },
    {
      id: 20,
      title: 'Rolls-Royce Cullinan vs Bentley Bentayga: Dubai Luxury SUV Comparison',
      excerpt: 'Comparing the two most luxurious SUVs for rent in Dubai. Cullinan from AED 6,500/day. Specs, comfort, and pricing.',
      category: 'guides',
      author: 'Sarah Mitchell',
      date: 'Jan 25, 2026',
      readTime: '10 min read',
      image: '/images/2024_Rolls-Royce_Cullinan.jpg',
      slug: 'rolls-royce-cullinan-vs-bentley-bentayga'
    },
    {
      id: 21,
      title: 'Rolls-Royce Photoshoot Guide Dubai: Best Locations, Models & Tips',
      excerpt: 'Complete guide to Rolls-Royce photoshoots. Best locations, recommended models, and pro tips from AED 1,200/hour.',
      category: 'tips',
      author: 'Layla Al-Mansouri',
      date: 'Jan 28, 2026',
      readTime: '8 min read',
      image: '/images/Rolls-Royce_Dawn.jpg',
      slug: 'rolls-royce-photoshoot-dubai-guide'
    },
    {
      id: 22,
      title: 'Dubai New Year\'s Eve 2026: Rolls-Royce Rental for the Ultimate Celebration',
      excerpt: 'Ring in 2026 in a Rolls-Royce. NYE packages with fireworks viewing, chauffeur, and champagne from AED 8,000.',
      category: 'events',
      author: 'Ahmed Salem',
      date: 'Jan 20, 2026',
      readTime: '7 min read',
      image: '/images/downtown-hero.jpg',
      slug: 'dubai-new-year-luxury-car-rental'
    },
    {
      id: 23,
      title: 'Rolls-Royce Phantom vs Ghost: Which Should You Rent in Dubai?',
      excerpt: 'Detailed comparison of Phantom (AED 5,800/day) vs Ghost (AED 3,800/day). Specs, comfort, and best use cases.',
      category: 'guides',
      author: 'James Thompson',
      date: 'Jan 22, 2026',
      readTime: '9 min read',
      image: '/images/Rolls-royce-phantom.jpg',
      slug: 'rolls-royce-phantom-vs-ghost-comparison'
    }
  ]

  // File-based posts (src/data/blog/*.json) come first (newest), then the legacy
  // curated list — so newly added posts surface automatically and /blog scales to 1000+.
  // Localize legacy card title/excerpt/readTime to the current page language
  // (cardText is resolved per-slug from blogTranslations in getStaticProps).
  const localizedLegacy = articles.map((a) => (cardText[a.slug] ? { ...a, ...cardText[a.slug] } : a))
  // Newest first across BOTH file-based and legacy posts (locale-independent date parse).
  const allArticles = [...filePosts, ...localizedLegacy].sort(
    (a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0)
  )
  const filteredArticles = selectedCategory === 'all'
    ? allArticles
    : allArticles.filter(article => article.category === selectedCategory)
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const visibleArticles = filteredArticles.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
  // Windowed page numbers (max 7, like the reference control).
  const PAGER_WINDOW = 7
  const pgEndRaw = Math.min(totalPages, Math.max(1, currentPage - Math.floor(PAGER_WINDOW / 2)) + PAGER_WINDOW - 1)
  const pgStart = Math.max(1, pgEndRaw - PAGER_WINDOW + 1)
  const pageNumbers: number[] = []
  for (let i = pgStart; i <= pgEndRaw; i++) pageNumbers.push(i)
  const goToPage = (n: number) => {
    setPage(Math.min(Math.max(1, n), totalPages))
    if (typeof document !== 'undefined') {
      document.getElementById('blog-articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <SEO pageKey="blog.index" />
      <GEOOptimizer
        pageKey="blog.index"
        title="Rolls-Royce Dubai Blog — Luxury Insights & Guides"
        description="Expert guides, tips, and insights about Rolls-Royce rental in Dubai. Wedding, corporate, scenic drives, model comparisons, and more."
        entityType="Blog"
        primaryTopic="Rolls-Royce Blog Dubai"
        contentSummary="Expert blog covering Rolls-Royce rental in Dubai: model comparison guides, wedding car tips, scenic drive routes, corporate transportation advice, photography location guides, and luxury lifestyle insights."
        facts={['20+ in-depth articles','Model comparison guides','Wedding car rental tips','Scenic drive routes in Dubai','Corporate transportation advice']}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Rolls-Royce Dubai Blog",
            "description": "Expert guides and insights about luxury Rolls-Royce rental in Dubai.",
            "url": "https://rollsroycers.com/blog",
            "publisher": { "@id": "https://rollsroycers.com/#organization" },
            "mainEntity": {
              "@type": "Blog",
              "name": "Rolls-Royce Dubai Blog",
              "description": "Luxury car rental guides, tips, and insights for Dubai",
              "blogPost": [
                { "@type": "BlogPosting", "headline": "The Ultimate Guide to Rolls-Royce Rental in Dubai", "url": "https://rollsroycers.com/blog/ultimate-guide-rolls-royce-rental-dubai" },
                { "@type": "BlogPosting", "headline": "Top 10 Scenic Drives in Dubai with a Rolls-Royce", "url": "https://rollsroycers.com/blog/top-scenic-drives-dubai" },
                { "@type": "BlogPosting", "headline": "Why Rolls-Royce is the Perfect Wedding Car in Dubai", "url": "https://rollsroycers.com/blog/rolls-royce-wedding-car-dubai" },
                { "@type": "BlogPosting", "headline": "Rolls-Royce for Business: Making the Right Impression", "url": "https://rollsroycers.com/blog/business-travel-rolls-royce" },
                { "@type": "BlogPosting", "headline": "Rolls-Royce Phantom vs Ghost: Which Should You Rent?", "url": "https://rollsroycers.com/blog/rolls-royce-phantom-vs-ghost-comparison" }
              ]
            }
          }) }}
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
                {t('blog.hero.title')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('blog.hero.subtitle')}
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
                  onClick={() => { setSelectedCategory(category.id); setPage(1) }}
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
                    {t('blog.featuredBadge')}
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
                    {t('blog.readFullArticle')}
                    <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Articles Grid */}
        <section id="blog-articles" className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black scroll-mt-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('blog.latestArticles')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {visibleArticles.map((article, index) => (
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
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
            {totalPages > 1 && (
              <nav aria-label="Blog pagination" className="flex items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-rolls-gold/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all rtl:rotate-180"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                {pageNumbers.map((n) => (
                  <button
                    key={n}
                    onClick={() => goToPage(n)}
                    aria-current={n === currentPage ? 'page' : undefined}
                    className={`min-w-[2.5rem] h-10 px-3 flex items-center justify-center rounded-lg font-semibold transition-all ${
                      n === currentPage
                        ? 'bg-rolls-gold text-rolls-black shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-rolls-gold/10'
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-rolls-gold/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all rtl:rotate-180"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </nav>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                {t('blog.newsletter.title')}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {t('blog.newsletter.description')}
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t('blog.newsletter.email')}
                  className="flex-1 px-6 py-3 bg-rolls-black/50 border border-rolls-gold/20 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-rolls-gold"
                />
                <button type="submit" className="btn-primary">
                  {t('blog.newsletter.subscribe')}
                </button>
              </form>
              <p className="text-sm text-gray-400 mt-4">
                {t('blog.newsletter.privacy')}
              </p>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('blog.popularTopics.title')}
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {(t('blog.popularTopics.tags', { returnObjects: true }) as string[]).map((topic, index) => (
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
              {t('blog.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('blog.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/971558164922" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                {t('blog.cta.call')}
              </motion.a>
              <Link href="/fleet" className="btn-secondary">
                {t('blog.cta.exploreFleet')}
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
  const loc = locale || 'en'
  // Surface every PUBLISHED file-based post (src/data/blog/<slug>.json) in the index,
  // so the blog scales to 1000+ posts with zero code edits per post. Build-time only.
  const filePosts = (listFileSlugs()
    .map((slug) => {
      const a = getFileArticle(slug, loc)
      return a
        ? {
            id: `file-${slug}`,
            slug,
            title: a.title,
            excerpt: a.description,
            category: a.category,
            author: a.author,
            date: a.date,
            readTime: a.readTime,
            image: a.image,
          }
        : null
    })
    .filter((p) => p !== null) as any[])
    .sort((x, y) => (new Date(y.date).getTime() || 0) - (new Date(x.date).getTime() || 0))

  // Localized card text for the legacy posts, resolved per-slug in the CURRENT locale
  // (same resolution as the article page) so /blog cards aren't stuck in English.
  const cardText: CardText = {}
  for (const slug of blogSlugs as string[]) {
    const base =
      (localizedArticles[loc] && localizedArticles[loc][slug]) ||
      (localizedArticles['en'] && localizedArticles['en'][slug]) ||
      blogArticles[slug]
    if (!base) continue
    const tr = loc !== 'en' ? (blogTranslations as Record<string, any>)[slug]?.[loc] : null
    const a = tr ? { ...base, ...tr } : base
    cardText[slug] = { title: a.title, excerpt: a.description, readTime: a.readTime }
  }

  return {
    props: {
      ...(await serverSideTranslations(loc, ['common', 'navigation', 'page_blog', 'seo_other'])),
      filePosts,
      cardText,
    },
  }
}
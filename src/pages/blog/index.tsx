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


export default function BlogPage({ filePosts = [] }: { filePosts?: any[] }) {
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

  const allArticles = [...filePosts].sort(
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

  return {
    props: {
      ...(await serverSideTranslations(loc, ['common', 'navigation', 'page_blog', 'seo_other'])),
      filePosts,
    },
  }
}
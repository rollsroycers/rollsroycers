import { GetStaticProps, GetStaticPaths } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { m as motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'
import blogSlugs from '@/data/blogSlugs.json'
import blogTranslations from '@/data/blogTranslations.json'
import { listFileSlugs, getFileArticle, getFileArticleMeta } from '@/data/blogFileStore'
import { blogArticles, localizedArticles, BlogArticle } from '@/data/blogArticlesData'


interface BlogPageProps {
  article: BlogArticle | null
  relatedArticlesData: { slug: string; title: string; image: string; category: string; readTime: string }[]
}

export default function BlogArticlePage({ article, relatedArticlesData }: BlogPageProps) {
  const router = useRouter()
  const { t } = useTranslation('common')
  const { slug } = router.query

  if (!article) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
            <Link href="/blog" className="text-rolls-gold hover:text-white transition-colors">
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  const renderContent = (content: any[]) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return (
            <p
              key={index}
              className="text-gray-300 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: block.text }}
            />
          )

        case 'heading':
          return (
            <h2
              key={index}
              className="text-2xl font-bold text-white mb-4 mt-8"
            >
              {block.text}
            </h2>
          )

        case 'list':
          return (
            <ul
              key={index}
              className={`space-y-3 mb-6 ${block.ordered ? 'list-decimal' : 'list-disc'} list-inside`}
            >
              {block.items.map((item: string, i: number) => (
                <li
                  key={i}
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          )

        case 'image':
          return (
            <figure
              key={index}
              className="my-8"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
              {block.caption && (
                <figcaption className="text-center text-gray-400 text-sm mt-2">{block.caption}</figcaption>
              )}
            </figure>
          )

        case 'cta':
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-8 my-8 text-center"
            >
              <p className="text-xl text-white mb-4">{block.text}</p>
              <Link href={block.buttonLink} className="btn-primary">
                {block.buttonText}
              </Link>
            </div>
          )
        
        default:
          return null
      }
    })
  }

  return (
    <>
      <SEO
        pageKey={`blog.${slug}`}
        title={article.title}
        description={article.description}
      />
      <Head>
        <meta property="article:published_time" content={article.date} />
        <meta property="article:modified_time" content={article.date} />
        <meta property="article:author" content={article.author} />
        <meta property="article:section" content={article.category} />
        <meta property="article:tag" content="Rolls-Royce" />
        <meta property="article:tag" content="Dubai" />
        <meta property="article:tag" content="Luxury Car Rental" />
        <meta property="article:tag" content={article.category} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.description,
            "image": `https://rollsroycers.com${article.image}`,
            "author": {
              "@type": "Person",
              "name": article.author,
              "jobTitle": "Luxury Automotive Specialist",
              "worksFor": { "@id": "https://rollsroycers.com/#organization" }
            },
            "publisher": { "@id": "https://rollsroycers.com/#organization" },
            "datePublished": article.date,
            "dateModified": article.date,
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://rollsroycers.com/blog/${slug}` }
          }) }}
        />
      </Head>
      <Layout>
        {/* <article> wraps the hero header + body so AI/search engines can isolate the
            citable unit. Related Articles below is intentionally outside <article>. */}
        <article>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/50 via-rolls-black/70 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <header>
                <p className="text-rolls-gold mb-4">{article.category}</p>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
                  {article.title}
                </h1>
                <div className="flex items-center justify-center space-x-6 text-gray-300">
                  <span>{article.author}</span>
                  <span>•</span>
                  <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</time>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </header>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-invert max-w-none"
              >
                {renderContent(article.content)}
              </motion.div>

              {/* Share Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-12 pt-12 border-t border-rolls-gold/20"
              >
                <h3 className="text-xl font-bold text-white mb-4">{t('common.blog.shareArticle')}</h3>
                <div className="flex space-x-4">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://rollsroycers.com/blog/${slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rolls-gold/10 hover:bg-rolls-gold/20 p-3 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6 text-rolls-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=https://rollsroycers.com/blog/${slug}&text=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rolls-gold/10 hover:bg-rolls-gold/20 p-3 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6 text-rolls-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(article.title + ' - https://rollsroycers.com/blog/' + slug)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rolls-gold/10 hover:bg-rolls-gold/20 p-3 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6 text-rolls-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Author Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-12 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">{t('common.blog.aboutAuthor')}</h3>
                <p className="text-gray-300">
                  {t('common.blog.authorBio', { author: article.author })}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        </article>

        {/* Related Articles */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">{t('common.blog.relatedArticles')}</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedArticlesData.map((related, index: number) => {
                if (!related) return null
                
                return (
                  <motion.div
                    key={related.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/blog/${related.slug}`}
                      className="block bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden hover:border-rolls-gold/40 transition-all"
                    >
                      <div className="aspect-video relative">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-rolls-gold text-sm mb-2">{related.category}</p>
                        <h3 className="text-xl font-bold text-white mb-2">{related.title}</h3>
                        <p className="text-gray-400 text-sm">{related.readTime}</p>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-6">{t('common.blog.newsletterTitle')}</h2>
              <p className="text-xl text-gray-300 mb-8">
                {t('common.blog.newsletterDesc')}
              </p>
              <Link href="/contact" className="btn-primary">{t('common.blog.subscribe')}</Link>
            </motion.div>
          </div>
        </section>

        <WhatsAppButton />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Single source of truth for blog slugs — shared with the sitemap generator
  // (scripts/generate-sitemap.mjs) so the sitemap can never list an unbuilt slug.
  const baseSlugs = Object.keys(blogArticles)
  const unique = Array.from(new Set([...baseSlugs, ...blogSlugs, ...listFileSlugs()]))
  
  // Generate paths for all locales
  const locales = ['en', 'ar', 'ru']
  const paths = []
  
  for (const locale of locales) {
    for (const slug of unique) {
      paths.push({
        params: { slug },
        locale
      })
    }
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug as string
  const currentLocale = locale || 'en'
  
  // Resolve article: English base + full ar/ru translation overrides when available.
  const baseArticle = (
    (localizedArticles[currentLocale] && localizedArticles[currentLocale][slug]) ||
    (localizedArticles['en'] && localizedArticles['en'][slug]) ||
    blogArticles[slug] ||
    null
  )
  const translatedArticle = currentLocale !== 'en'
    ? (blogTranslations as Record<string, any>)[slug]?.[currentLocale]
    : null
  // File-based articles (src/data/blog/<slug>.json) are self-contained per locale —
  // used as the fallback for everything not defined inline above. This lets the blog
  // scale to hundreds of posts without bloating this file or blogTranslations.json.
  const article = baseArticle
    ? (translatedArticle ? { ...baseArticle, ...translatedArticle } : baseArticle)
    : getFileArticle(slug, currentLocale)

  // Resolve related articles data (only send minimal data to client)
  const relatedArticlesData = article?.relatedArticles?.map((relSlug: string) => {
    const rel = blogArticles[relSlug]
    if (rel) return { slug: relSlug, title: rel.title, image: rel.image, category: rel.category, readTime: rel.readTime }
    return getFileArticleMeta(relSlug)
  }).filter(Boolean) || []
  
  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ['common', 'navigation', 'seo_other'])),
      article: article ? JSON.parse(JSON.stringify(article)) : null,
      relatedArticlesData,
    },
  }
}
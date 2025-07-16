import { GetStaticProps, GetStaticPaths } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'

// Blog articles data - في الإنتاج يمكن نقلها لـ CMS
const blogArticles: Record<string, BlogArticle> = {
  'ultimate-guide-rolls-royce-rental-dubai': {
    title: 'The Ultimate Guide to Rolls-Royce Rental in Dubai 2025',
    description: 'Everything you need to know about renting a Rolls-Royce in Dubai. From requirements to insider tips.',
    author: 'Ahmed Salem',
    date: '2025-01-10',
    readTime: '12 min read',
    category: 'Guides',
    image: '/images/Rolls-royce-dubai.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Dubai, the city of luxury and opulence, offers the perfect backdrop for experiencing the pinnacle of automotive excellence - Rolls-Royce. Whether you\'re a resident looking to make a statement or a visitor wanting to explore the city in ultimate style, renting a Rolls-Royce in Dubai is an experience like no other.'
      },
      {
        type: 'heading',
        text: 'Why Choose Rolls-Royce in Dubai?'
      },
      {
        type: 'paragraph',
        text: 'Dubai\'s infrastructure and lifestyle are perfectly suited for luxury vehicles. With its wide, well-maintained roads, iconic landmarks, and culture that appreciates fine automobiles, a Rolls-Royce feels right at home here.'
      },
      {
        type: 'image',
        src: '/images/Rolls-Royce-front.jpg',
        alt: 'Rolls-Royce Front View Dubai',
        caption: 'The iconic Spirit of Ecstasy leading the way through Dubai'
      },
      {
        type: 'heading',
        text: 'Which Rolls-Royce Model Should You Choose?'
      },
      {
        type: 'list',
        items: [
          '<strong>Phantom:</strong> The flagship sedan for ultimate luxury and presence',
          '<strong>Ghost:</strong> Perfect balance of luxury and performance',
          '<strong>Cullinan:</strong> The SUV for those who want luxury with versatility',
          '<strong>Dawn:</strong> Convertible luxury for enjoying Dubai\'s weather',
          '<strong>Wraith:</strong> The grand tourer for spirited drives'
        ]
      },
      {
        type: 'heading',
        text: 'Requirements for Renting a Rolls-Royce in Dubai'
      },
      {
        type: 'paragraph',
        text: 'To rent a Rolls-Royce in Dubai, you\'ll need to meet certain requirements:'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Minimum age of 25 years',
          'Valid UAE driving license or international permit',
          'Passport and visa copy',
          'Security deposit (AED 10,000-20,000)',
          'Proof of accommodation in Dubai'
        ]
      },
      {
        type: 'heading',
        text: 'Best Places to Drive Your Rolls-Royce in Dubai'
      },
      {
        type: 'paragraph',
        text: 'Dubai offers numerous scenic routes and destinations perfect for your Rolls-Royce experience:'
      },
      {
        type: 'image',
        src: '/images/Rolls-Royce-white.jpg',
        alt: 'White Rolls-Royce in Dubai',
        caption: 'Cruising through Dubai Marina in style'
      },
      {
        type: 'list',
        items: [
          '<strong>Sheikh Zayed Road:</strong> The main artery with stunning skyline views',
          '<strong>Palm Jumeirah:</strong> Scenic coastal drives on the iconic palm-shaped island',
          '<strong>Downtown Dubai:</strong> Home to Burj Khalifa and Dubai Mall',
          '<strong>JBR & Marina:</strong> Waterfront promenades perfect for evening drives',
          '<strong>Al Qudra Road:</strong> Desert landscapes for a different experience'
        ]
      },
      {
        type: 'heading',
        text: 'Insider Tips for Your Rolls-Royce Rental'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Book at least 3-7 days in advance for better rates and availability',
          'Consider chauffeur service for a truly relaxing experience',
          'Take advantage of hotel delivery services',
          'Ask about weekly rates for extended rentals',
          'Ensure you understand the insurance coverage'
        ]
      },
      {
        type: 'heading',
        text: 'Cost Considerations'
      },
      {
        type: 'paragraph',
        text: 'Rolls-Royce rental prices in Dubai typically range from AED 4,800 to AED 6,500 per day, depending on the model and season. Here\'s what affects pricing:'
      },
      {
        type: 'list',
        items: [
          'Model selection (Cullinan being the most expensive)',
          'Rental duration (longer rentals get better rates)',
          'Season (peak season: November-March)',
          'Additional services (chauffeur, delivery, etc.)',
          'Insurance options'
        ]
      },
      {
        type: 'heading',
        text: 'Making the Most of Your Experience'
      },
      {
        type: 'paragraph',
        text: 'A Rolls-Royce rental in Dubai is more than just transportation - it\'s an experience. Plan your routes, book restaurants that offer valet parking, and consider hiring a photographer to capture your luxury moments.'
      },
      {
        type: 'cta',
        text: 'Ready to experience the pinnacle of luxury? Book your Rolls-Royce today and discover Dubai in unparalleled style.',
        buttonText: 'Book Your Rolls-Royce',
        buttonLink: '/booking'
      }
    ],
    relatedArticles: [
      'top-scenic-drives-dubai',
      'rolls-royce-wedding-car-dubai',
      'business-travel-rolls-royce'
    ]
  },
  'top-scenic-drives-dubai': {
    title: 'Top 10 Scenic Drives in Dubai with a Rolls-Royce',
    description: 'Discover the most breathtaking routes in Dubai perfect for your luxury car experience.',
    author: 'Sarah Mitchell',
    date: '2025-01-08',
    readTime: '8 min read',
    category: 'Travel',
    image: '/images/Rolls-royce-official.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Dubai offers some of the most spectacular driving routes in the world, and there\'s no better way to experience them than from behind the wheel of a Rolls-Royce. From coastal highways to desert roads, here are the top 10 scenic drives that will make your luxury car rental unforgettable.'
      },
      {
        type: 'heading',
        text: '1. Palm Jumeirah Crescent Road'
      },
      {
        type: 'paragraph',
        text: 'The Palm Jumeirah\'s crescent offers 11 kilometers of pristine coastal driving with views of the Arabian Gulf on one side and Dubai\'s skyline on the other. The smooth roads and gentle curves are perfect for enjoying your Rolls-Royce\'s refined handling.'
      },
      {
        type: 'image',
        src: '/images/Rolls-Royce-black.jpg',
        alt: 'Black Rolls-Royce on Palm Jumeirah',
        caption: 'Experience coastal luxury on the Palm Jumeirah'
      },
      {
        type: 'heading',
        text: '2. Al Qudra Road to Bab Al Shams'
      },
      {
        type: 'paragraph',
        text: 'Escape the city and drive through the desert landscape. This route offers a completely different perspective of Dubai, with sand dunes and occasional wildlife sightings. The contrast of your luxury vehicle against the desert backdrop creates stunning photo opportunities.'
      },
      {
        type: 'heading',
        text: '3. Sheikh Zayed Road at Night'
      },
      {
        type: 'paragraph',
        text: 'Dubai\'s main highway transforms into a river of lights after dark. Drive past illuminated skyscrapers and architectural marvels while enjoying the Rolls-Royce\'s starlight headliner mimicking the city lights above.'
      },
      {
        type: 'heading',
        text: '4. Jumeirah Beach Road'
      },
      {
        type: 'paragraph',
        text: 'This coastal route runs parallel to the beach, offering glimpses of the Arabian Gulf between luxury villas and hotels. Stop at La Mer or Kite Beach for a seaside break.'
      },
      {
        type: 'heading',
        text: '5. Dubai Marina Loop'
      },
      {
        type: 'paragraph',
        text: 'Navigate through the Marina\'s impressive architecture and waterfront promenades. The area comes alive in the evening with yacht lights reflecting on the water.'
      },
      {
        type: 'image',
        src: '/images/Rolls-Royce-Cullinan_.jpg',
        alt: 'Rolls-Royce Cullinan in Dubai',
        caption: 'The Cullinan conquers both city streets and desert roads'
      },
      {
        type: 'heading',
        text: '6. Business Bay to Downtown Dubai'
      },
      {
        type: 'paragraph',
        text: 'This route takes you through the heart of modern Dubai, past the Burj Khalifa and Dubai Mall. Time your drive for the evening fountain show for a magical experience.'
      },
      {
        type: 'heading',
        text: '7. Al Khawaneej Road'
      },
      {
        type: 'paragraph',
        text: 'A lesser-known gem, this road offers a peaceful drive through residential areas with traditional architecture and date palm farms.'
      },
      {
        type: 'heading',
        text: '8. Hatta Mountain Drive'
      },
      {
        type: 'paragraph',
        text: 'For a longer excursion, the drive to Hatta offers mountain scenery and winding roads. Your Rolls-Royce\'s advanced suspension ensures comfort even on challenging terrain.'
      },
      {
        type: 'heading',
        text: '9. Dubai Creek Harbor Loop'
      },
      {
        type: 'paragraph',
        text: 'This developing area offers views of the Creek Tower (under construction) and beautiful waterfront vistas. It\'s particularly stunning at sunset.'
      },
      {
        type: 'heading',
        text: '10. DIFC to City Walk'
      },
      {
        type: 'paragraph',
        text: 'A short but impressive urban route that showcases Dubai\'s business district transitioning into lifestyle destinations. Perfect for an evening drive to dinner.'
      },
      {
        type: 'heading',
        text: 'Tips for Scenic Drives in Your Rolls-Royce'
      },
      {
        type: 'list',
        items: [
          'Plan drives during golden hour (sunrise/sunset) for best photography',
          'Use the Rolls-Royce\'s massage seats on longer routes',
          'Take advantage of the panoramic sunroof in the Dawn',
          'Keep the Spirit of Ecstasy retracted in busy areas',
          'Use the night vision feature for desert drives after dark'
        ]
      },
      {
        type: 'cta',
        text: 'Ready to explore Dubai\'s most scenic routes in ultimate luxury?',
        buttonText: 'Book Your Scenic Drive',
        buttonLink: '/booking'
      }
    ],
    relatedArticles: [
      'ultimate-guide-rolls-royce-rental-dubai',
      'rolls-royce-wedding-car-dubai',
      'luxury-car-photography-spots-dubai'
    ]
  },
  'rolls-royce-wedding-car-dubai': {
    title: 'Why Rolls-Royce is the Perfect Wedding Car in Dubai',
    description: 'Make your special day unforgettable with the ultimate luxury wedding transportation.',
    author: 'Fatima Al Rashid',
    date: '2025-01-05',
    readTime: '10 min read',
    category: 'Weddings',
    image: '/images/Rolls-Royce_Dawn.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Your wedding day deserves nothing but perfection, and in Dubai, that means arriving in a Rolls-Royce. As the ultimate symbol of luxury and elegance, a Rolls-Royce adds an unforgettable touch to your special day.'
      },
      {
        type: 'heading',
        text: 'The Rolls-Royce Wedding Experience'
      },
      {
        type: 'paragraph',
        text: 'Imagine stepping out of a pristine Rolls-Royce Phantom, your dress flowing gracefully as you make your grand entrance. The Spirit of Ecstasy hood ornament gleaming in the Dubai sun, announcing your arrival with understated elegance.'
      },
      {
        type: 'image',
        src: '/images/Rolls-royce-phantom.jpg',
        alt: 'White Rolls-Royce Phantom for weddings',
        caption: 'The Phantom: A classic choice for traditional elegance'
      },
      {
        type: 'heading',
        text: 'Best Rolls-Royce Models for Weddings'
      },
      {
        type: 'list',
        items: [
          '<strong>Phantom:</strong> The traditional choice, offering supreme comfort and presence',
          '<strong>Ghost:</strong> Modern elegance for contemporary couples',
          '<strong>Dawn:</strong> Perfect for outdoor weddings with its convertible top',
          '<strong>Cullinan:</strong> Ideal for larger wedding parties or destination weddings'
        ]
      },
      {
        type: 'heading',
        text: 'Popular Wedding Venues and Routes'
      },
      {
        type: 'paragraph',
        text: 'Dubai\'s most prestigious wedding venues are perfectly complemented by Rolls-Royce arrivals:'
      },
      {
        type: 'list',
        items: [
          'Burj Al Arab - The iconic sail-shaped hotel',
          'Atlantis, The Palm - Underwater elegance',
          'One&Only Royal Mirage - Arabian luxury',
          'Bvlgari Resort - Italian sophistication',
          'Four Seasons Resort - Beachfront beauty'
        ]
      },
      {
        type: 'heading',
        text: 'Wedding Photography with Rolls-Royce'
      },
      {
        type: 'paragraph',
        text: 'A Rolls-Royce provides stunning photo opportunities. Popular shots include:'
      },
      {
        type: 'list',
        items: [
          'Bride stepping out of the car with dress flowing',
          'Couple portraits with the Spirit of Ecstasy',
          'Wedding party grouped around the vehicle',
          'Sunset shots with the car silhouette',
          'Detail shots of rings on the RR emblem'
        ]
      },
      {
        type: 'image',
        src: '/images/Rolls-Royce-with-blan.jpg',
        alt: 'Decorated Rolls-Royce for wedding',
        caption: 'Elegant decoration enhances the luxury experience'
      },
      {
        type: 'heading',
        text: 'Cultural Considerations'
      },
      {
        type: 'paragraph',
        text: 'Rolls-Royce wedding services in Dubai cater to diverse cultural needs:'
      },
      {
        type: 'list',
        items: [
          'Arabic weddings: Multiple car convoys available',
          'Indian weddings: Decoration with flowers and traditional elements',
          'Western weddings: Classic white ribbons and minimal decoration',
          'Privacy options: Tinted windows for conservative preferences'
        ]
      },
      {
        type: 'heading',
        text: 'Wedding Package Inclusions'
      },
      {
        type: 'list',
        items: [
          'Professional uniformed chauffeur',
          'Complimentary decoration (ribbons and flowers)',
          'Red carpet service',
          'Champagne for the couple (non-alcoholic options available)',
          'Multiple pickup/drop-off locations',
          'Extended photo session time'
        ]
      },
      {
        type: 'heading',
        text: 'Booking Tips for Wedding Cars'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Book at least 2-3 months in advance',
          'Consider the wedding dress when choosing models',
          'Coordinate colors with your wedding theme',
          'Plan routes to avoid traffic',
          'Book multiple cars for the wedding party',
          'Arrange a viewing before the wedding day'
        ]
      },
      {
        type: 'cta',
        text: 'Make your wedding day truly magical with a Rolls-Royce. Our wedding specialists are ready to help plan every detail.',
        buttonText: 'Plan Your Wedding Transportation',
        buttonLink: '/services/wedding'
      }
    ],
    relatedArticles: [
      'ultimate-guide-rolls-royce-rental-dubai',
      'luxury-wedding-venues-dubai',
      'wedding-photography-rolls-royce'
    ]
  },
  'business-travel-rolls-royce': {
    title: 'Rolls-Royce for Business: Making the Right Impression in Dubai',
    description: 'How luxury transportation elevates your business presence in Dubai\'s competitive market.',
    author: 'James Thompson',
    date: '2025-01-03',
    readTime: '7 min read',
    category: 'Business',
    image: '/images/Black_Rolls_Royce_Ghost.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'In Dubai\'s competitive business landscape, first impressions matter. Arriving at meetings in a Rolls-Royce sends a clear message about your success, attention to detail, and appreciation for quality.'
      },
      {
        type: 'heading',
        text: 'Why Business Executives Choose Rolls-Royce'
      },
      {
        type: 'paragraph',
        text: 'Dubai\'s business culture values success and prestige. A Rolls-Royce aligns perfectly with these values while providing practical benefits for busy executives.'
      },
      {
        type: 'list',
        items: [
          'Silent cabin for confidential calls',
          'WiFi connectivity for productivity',
          'Massage seats for relaxation between meetings',
          'Impressive arrival at client locations',
          'Spacious interior for mobile meetings'
        ]
      },
      {
        type: 'image',
        src: '/images/inside-Rolls-Royce.jpg',
        alt: 'Rolls-Royce interior business setup',
        caption: 'The perfect mobile office with ultimate comfort'
      },
      {
        type: 'heading',
        text: 'Key Business Districts for Rolls-Royce Service'
      },
      {
        type: 'list',
        items: [
          '<strong>DIFC:</strong> Financial center requiring sophisticated transportation',
          '<strong>Business Bay:</strong> Growing business hub with modern offices',
          '<strong>Downtown Dubai:</strong> Premium location for high-end businesses',
          '<strong>Dubai Marina:</strong> International business community',
          '<strong>Dubai Internet City:</strong> Tech companies and startups'
        ]
      },
      {
        type: 'heading',
        text: 'Corporate Benefits'
      },
      {
        type: 'paragraph',
        text: 'Using Rolls-Royce for business offers tangible advantages:'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Enhanced company image and brand perception',
          'Improved client relationships and trust',
          'Productive travel time with mobile office features',
          'Stress-free transportation with professional chauffeurs',
          'Flexible booking for varying business needs'
        ]
      },
      {
        type: 'heading',
        text: 'Corporate Account Benefits'
      },
      {
        type: 'paragraph',
        text: 'Our corporate packages offer exclusive advantages for businesses:'
      },
      {
        type: 'list',
        items: [
          'Priority booking and guaranteed availability',
          'Dedicated account manager',
          'Monthly billing and invoicing',
          'Special rates for long-term arrangements',
          'Multiple vehicle coordination for events'
        ]
      },
      {
        type: 'heading',
        text: 'Success Stories'
      },
      {
        type: 'paragraph',
        text: 'Leading companies in Dubai trust Rolls-Royce for their executive transportation needs. From Fortune 500 companies to successful local enterprises, our service has become integral to their business operations.'
      },
      {
        type: 'cta',
        text: 'Elevate your business presence with Rolls-Royce corporate services.',
        buttonText: 'Explore Corporate Solutions',
        buttonLink: '/services/corporate'
      }
    ],
    relatedArticles: [
      'ultimate-guide-rolls-royce-rental-dubai',
      'difc-rolls-royce-service',
      'executive-transportation-dubai'
    ]
  }
}

interface BlogArticle {
  title: string
  description: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  content: any[]
  relatedArticles: string[]
}

export default function BlogArticlePage() {
  const router = useRouter()
  const { slug } = router.query
  
  const article = slug ? blogArticles[slug as string] : null

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
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="text-gray-300 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: block.text }}
            />
          )
        
        case 'heading':
          return (
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="text-2xl font-bold text-white mb-4 mt-8"
            >
              {block.text}
            </motion.h2>
          )
        
        case 'list':
          return (
            <motion.ul
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`space-y-3 mb-6 ${block.ordered ? 'list-decimal' : 'list-disc'} list-inside`}
            >
              {block.items.map((item: string, i: number) => (
                <li 
                  key={i} 
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </motion.ul>
          )
        
        case 'image':
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="my-8"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  className="object-cover"
                />
              </div>
              {block.caption && (
                <p className="text-center text-gray-400 text-sm mt-2">{block.caption}</p>
              )}
            </motion.div>
          )
        
        case 'cta':
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gradient-to-r from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-8 my-8 text-center"
            >
              <p className="text-xl text-white mb-4">{block.text}</p>
              <Link href={block.buttonLink} className="btn-primary">
                {block.buttonText}
              </Link>
            </motion.div>
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
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={article.image}
              alt={article.title}
              fill
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
              <p className="text-rolls-gold mb-4">{article.category}</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
                {article.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-300">
                <span>{article.author}</span>
                <span>•</span>
                <span>{new Date(article.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
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
                <h3 className="text-xl font-bold text-white mb-4">Share this article</h3>
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
                <h3 className="text-xl font-bold text-white mb-4">About the Author</h3>
                <p className="text-gray-300">
                  {article.author} is a luxury automotive expert with extensive experience in Dubai's premium car rental market. 
                  Passionate about delivering exceptional experiences through the world's finest automobiles.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {article.relatedArticles.map((relatedSlug: string, index: number) => {
                const related = blogArticles[relatedSlug]
                if (!related) return null
                
                return (
                  <motion.div
                    key={relatedSlug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/blog/${relatedSlug}`}
                      className="block bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden hover:border-rolls-gold/40 transition-all"
                    >
                      <div className="aspect-video relative">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
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
              <h2 className="text-3xl font-bold text-white mb-6">
                Stay Updated with Luxury Insights
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to receive exclusive content about luxury car rentals and Dubai experiences
              </p>
              <Link href="/contact" className="btn-primary">
                Subscribe to Newsletter
              </Link>
            </motion.div>
          </div>
        </section>

        <WhatsAppButton />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(blogArticles).map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation"])),
    },
  }
}
import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import SEO from '@/components/SEO'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function TestimonialsPage() {
  const { t } = useTranslation('common')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null)

  const filters = [
    { id: 'all', name: t('testimonialsPage.filters.allReviews'), count: 25 },
    { id: 'wedding', name: t('testimonialsPage.filters.wedding'), count: 8 },
    { id: 'corporate', name: t('testimonialsPage.filters.corporate'), count: 7 },
    { id: 'tourism', name: t('testimonialsPage.filters.tourism'), count: 6 },
    { id: 'events', name: t('testimonialsPage.filters.events'), count: 4 }
  ]

  const testimonials = [
    // Wedding Testimonials
    {
      id: 1,
      name: 'Ahmed & Fatima Al-Rashid',
      location: 'Dubai, UAE',
      rating: 5,
      category: 'wedding',
      vehicle: 'Phantom & Ghost Fleet',
      image: '/images/reviews/ahmed.webp',
      date: '2024-12-15',
      title: 'A Dream Wedding Made Perfect',
      review: 'Our wedding day was made absolutely magical with the Rolls-Royce fleet. We had a Phantom for the bride and two Ghosts for the wedding party. The cars were immaculate, decorated beautifully with white roses, and the chauffeurs were professional beyond words. The photographer captured stunning shots with the cars, and our guests were thoroughly impressed. Worth every dirham!',
      highlights: ['Professional chauffeurs', 'Beautiful decoration', 'Perfect timing', 'Stunning photos']
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      location: 'London, UK',
      rating: 5,
      category: 'wedding',
      vehicle: 'Dawn Convertible',
      image: '/images/reviews/faten.webp',
      date: '2024-11-20',
      title: 'Beach Wedding Perfection',
      review: 'The Dawn convertible was the perfect choice for our beach wedding at Jumeirah. The sunset photos with the car are absolutely breathtaking. The team went above and beyond, even providing umbrellas when it got sunny and ensuring my dress was perfectly arranged for photos. A truly memorable experience!',
      highlights: ['Convertible experience', 'Beach photos', 'Attentive service', 'Dress assistance']
    },
    // Corporate Testimonials
    {
      id: 3,
      name: 'Mohamed Hassan',
      location: 'Cairo, Egypt',
      rating: 5,
      category: 'corporate',
      vehicle: 'Phantom',
      image: '/images/reviews/mohamed.jpg',
      date: '2024-12-01',
      title: 'Excellence in Corporate Transportation',
      review: 'As CEO of a multinational company, I needed transportation that reflects our brand values during the Dubai Expo. The Phantom exceeded all expectations. The silent cabin allowed for confidential calls, the WiFi was perfect for work, and arriving at meetings made the right impression. We now use their monthly corporate package.',
      highlights: ['Silent cabin', 'Mobile office', 'Professional image', 'Reliable service']
    },
    {
      id: 4,
      name: 'Wang Jun',
      location: 'Shanghai, China',
      rating: 5,
      category: 'corporate',
      vehicle: 'Ghost Black Badge',
      image: '/images/reviews/Wang-Jun_.jpg',
      date: '2024-10-15',
      title: 'Impressed Our Chinese Delegation',
      review: '我们的商务代表团对劳斯莱斯的服务印象深刻。司机会说中文，车辆完美无瑕，准时性无可挑剔。这帮助我们与迪拜合作伙伴建立了良好的关系。强烈推荐！(Our business delegation was impressed with the Rolls-Royce service. The chauffeur spoke Chinese, the vehicle was immaculate, and punctuality was impeccable. This helped us establish excellent relationships with our Dubai partners. Highly recommended!)',
      highlights: ['Multilingual chauffeur', 'Cultural awareness', 'Business success', 'Punctuality']
    },
    // Tourism Testimonials
    {
      id: 5,
      name: 'Dmitry & Elena Ivanov',
      location: 'Moscow, Russia',
      rating: 5,
      category: 'tourism',
      vehicle: 'Cullinan',
      image: '/images/reviews/Dmitry-Ivanov.jpg',
      date: '2024-11-10',
      title: 'Роскошное путешествие по Дубаю',
      review: 'Мы арендовали Cullinan на неделю для изучения Дубая. От пустынного сафари до поездок по городу - этот автомобиль справился со всем идеально. Водитель был отличным гидом, показал нам скрытые жемчужины города. Особенно понравилась поездка в Хатту - горные виды из Rolls-Royce незабываемы! (We rented the Cullinan for a week to explore Dubai. From desert safari to city tours - this car handled everything perfectly. The driver was an excellent guide. The trip to Hatta was especially memorable!)',
      highlights: ['Desert capability', 'City comfort', 'Knowledgeable guide', 'Mountain drives']
    },
    {
      id: 6,
      name: 'Antoine & Marie Lefèvre',
      location: 'Paris, France',
      rating: 5,
      category: 'tourism',
      vehicle: 'Dawn',
      image: '/images/reviews/Antoine-Lefèvre_.jpg',
      date: '2024-09-20',
      title: 'Une Expérience Inoubliable',
      review: 'Nous avons loué la Dawn pour notre anniversaire à Dubaï. La voiture décapotable était parfaite pour les soirées. Le service était impeccable, avec du champagne et des roses pour notre célébration. Les photos au coucher du soleil sur Palm Jumeirah sont magnifiques! (We rented the Dawn for our anniversary in Dubai. The convertible was perfect for the evenings. Impeccable service with champagne and roses. The sunset photos on Palm Jumeirah are magnificent!)',
      highlights: ['Anniversary special', 'Sunset drives', 'Romantic setup', 'Palm Jumeirah']
    },
    // More Wedding Reviews
    {
      id: 7,
      name: 'Khalid & Aisha Al-Maktoum',
      location: 'Abu Dhabi, UAE',
      rating: 5,
      category: 'wedding',
      vehicle: 'Phantom Extended',
      image: '/images/reviews/fahd.jpg',
      date: '2024-08-15',
      title: 'Royal Treatment for Our Big Day',
      review: 'The Phantom Extended was perfect for our traditional Emirati wedding. The space accommodated my elaborate wedding dress beautifully. The convoy of 5 Rolls-Royce vehicles for our families was coordinated flawlessly. The team understood our cultural requirements and delivered beyond expectations.',
      highlights: ['Traditional wedding', 'Fleet coordination', 'Cultural respect', 'Spacious interior']
    },
    {
      id: 8,
      name: 'Pooja & Raj Sharma',
      location: 'Mumbai, India',
      rating: 5,
      category: 'wedding',
      vehicle: 'Ghost & Wraith',
      image: '/images/reviews/pouja.webp',
      date: '2024-07-25',
      title: 'Perfect for Indian Wedding',
      review: 'हमारी शादी के लिए रोल्स-रॉयस बिल्कुल सही थी। टीम ने कारों को फूलों से सजाया और हमारे बारात के लिए कई कारों का समन्वय किया। ड्राइवर बहुत धैर्यवान थे और फोटोग्राफी के लिए कई स्टॉप के साथ सहयोग करते थे। (The Rolls-Royce was perfect for our wedding. The team decorated the cars with flowers and coordinated multiple cars for our baraat. Drivers were patient with multiple photography stops.)',
      highlights: ['Baraat arrangement', 'Floral decoration', 'Multiple vehicles', 'Photography stops']
    },
    // More Corporate Reviews
    {
      id: 9,
      name: 'James Thompson',
      location: 'New York, USA',
      rating: 5,
      category: 'corporate',
      vehicle: 'Ghost',
      image: '/images/reviews/mahdy.jpg',
      date: '2024-06-10',
      title: 'Sealed the Deal in Style',
      review: 'Used the Ghost for a week of critical business meetings in Dubai. The car became my mobile office - took calls, reviewed documents, even conducted a video conference. My clients were impressed before I even entered the boardroom. The monthly corporate package is now essential for our Dubai operations.',
      highlights: ['Mobile office', 'Client impression', 'Video conferencing', 'Business success']
    },
    {
      id: 10,
      name: 'Abdulla Al-Rashid',
      location: 'Riyadh, KSA',
      rating: 5,
      category: 'corporate',
      vehicle: 'Phantom',
      image: '/images/reviews/abdallah.jpg',
      date: '2024-05-20',
      title: 'تجربة تليق بكبار رجال الأعمال',
      review: 'استخدمت الفانتوم لاستقبال شركائنا من اليابان. السيارة والخدمة كانت على أعلى مستوى. السائق يتحدث العربية والإنجليزية بطلاقة، والسيارة مجهزة بكل وسائل الراحة. ساعدت هذه الخدمة في إنجاح صفقة بملايين الدراهم.',
      highlights: ['VIP reception', 'Bilingual chauffeur', 'Deal success', 'Premium comfort']
    },
    // Event Reviews
    {
      id: 11,
      name: 'Nikolai Sokolov',
      location: 'Saint Petersburg, Russia',
      rating: 5,
      category: 'events',
      vehicle: 'Wraith Black Badge',
      image: '/images/reviews/Nikolai-Sokolov .jpg',
      date: '2024-04-15',
      title: 'Film Festival Red Carpet',
      review: 'Прибытие на кинофестиваль в Дубае на Wraith Black Badge произвело фурор. Черный автомобиль идеально подходил для красной дорожки. Водитель точно знал, где остановиться для фотографов. Это добавило гламура всему мероприятию. (Arriving at the Dubai Film Festival in the Wraith Black Badge caused a sensation. The black car was perfect for the red carpet. The driver knew exactly where to stop for photographers.)',
      highlights: ['Red carpet arrival', 'Photographer coordination', 'Event glamour', 'Perfect timing']
    },
    {
      id: 12,
      name: 'Isabella Rodriguez',
      location: 'Barcelona, Spain',
      rating: 5,
      category: 'events',
      vehicle: 'Dawn',
      image: '/images/reviews/ibtsam.jpg',
      date: '2024-03-20',
      title: 'Fashion Week Sensation',
      review: 'The Dawn was our choice for Dubai Fashion Week. The convertible allowed for dramatic arrivals, and the car complemented our haute couture perfectly. The chauffeur understood the fashion world and helped coordinate with photographers. Several designers asked about the car for their shows!',
      highlights: ['Fashion coordination', 'Dramatic arrivals', 'Photography ready', 'Industry connections']
    },
    // More Tourism Reviews
    {
      id: 13,
      name: 'Chen Jie',
      location: 'Beijing, China',
      rating: 5,
      category: 'tourism',
      vehicle: 'Cullinan',
      image: '/images/reviews/Chen-Jie.avif',
      date: '2024-02-10',
      title: '迪拜豪华之旅',
      review: '我们一家人租了库里南一周游览迪拜。从城市到沙漠，这辆车都表现完美。特别是去哈达山的旅程，山路驾驶非常平稳。司机是excellent的导游，带我们去了很多当地人才知道的地方。孩子们特别喜欢星光顶篷！',
      highlights: ['Family comfort', 'Desert adventure', 'Local insights', 'Starlight headliner']
    },
    {
      id: 14,
      name: 'Robert & Linda Williams',
      location: 'Sydney, Australia',
      rating: 5,
      category: 'tourism',
      vehicle: 'Ghost',
      image: '/images/reviews/omran.jpg',
      date: '2024-01-15',
      title: 'Bucket List Experience',
      review: 'Always dreamed of driving a Rolls-Royce, and Dubai was the perfect place to tick this off our bucket list. The Ghost was sublime - whisper quiet, incredibly comfortable, and turned heads everywhere. Our chauffeur Ali was fantastic, sharing stories about Dubai and ensuring we saw everything. The night drive past Burj Khalifa was unforgettable!',
      highlights: ['Bucket list', 'Knowledgeable chauffeur', 'Night tours', 'Iconic landmarks']
    },
    // Recent Reviews
    {
      id: 15,
      name: 'Sergey Volkov',
      location: 'Kiev, Ukraine',
      rating: 5,
      category: 'wedding',
      vehicle: 'Phantom',
      image: '/images/reviews/Sergey-Volkov.webp',
      date: '2024-12-20',
      title: 'Свадьба мечты в Дубае',
      review: 'Наша свадьба в Дубае была идеальной благодаря Rolls-Royce. Фантом был украшен цветами, водитель был в костюме, и все было организовано безупречно. Особенно запомнилась поездка на закате по Пальме Джумейра. Фотографии получились потрясающие! Спасибо за незабываемый день!',
      highlights: ['Sunset drive', 'Professional attire', 'Floral decoration', 'Perfect organization']
    },
    {
      id: 16,
      name: 'Mustafa Al-Rasheed',
      location: 'Kuwait City, Kuwait',
      rating: 5,
      category: 'corporate',
      vehicle: 'Cullinan',
      image: '/images/reviews/mostafa.webp',
      date: '2024-12-18',
      title: 'مثالي للوفود التجارية',
      review: 'استأجرنا كولينان لنقل وفد تجاري من الكويت. السيارة واسعة ومريحة، والخدمة كانت استثنائية. السائق كان محترفًا ويعرف دبي جيدًا. ساعدت هذه الخدمة في ترك انطباع ممتاز لدى شركائنا. سنستخدم الخدمة مرة أخرى بالتأكيد.',
      highlights: ['Spacious SUV', 'Business delegation', 'Local knowledge', 'Repeat customer']
    },
    {
      id: 17,
      name: 'Julien Dubois',
      location: 'Monaco',
      rating: 5,
      category: 'events',
      vehicle: 'Wraith',
      image: '/images/reviews/Julien-Dubois_.jpg',
      date: '2024-12-10',
      title: 'Grand Prix Style in Dubai',
      review: 'Accustomed to luxury in Monaco, but the Rolls-Royce service in Dubai exceeded expectations. The Wraith was perfect for the F1 weekend events. Seamless coordination between venues, VIP access, and the car performed beautifully. The Black Badge edition added the perfect sporty touch to the luxury.',
      highlights: ['F1 events', 'VIP coordination', 'Sports luxury', 'Monaco standards']
    },
    {
      id: 18,
      name: 'Zhang Tao',
      location: 'Hong Kong',
      rating: 5,
      category: 'tourism',
      vehicle: 'Ghost Extended',
      image: '/images/reviews/Zhang-Tao.jpg',
      date: '2024-12-05',
      title: '香港富豪的迪拜体验',
      review: '作为香港的企业家，我对豪华车很挑剔。迪拜的劳斯莱斯服务超出了预期。Ghost Extended的后座就像移动的贵宾室。司机带我们去了最好的餐厅和购物场所。整个体验无可挑剔。已经预订了下次访问的车辆。',
      highlights: ['Hong Kong standards', 'VIP experience', 'Luxury shopping', 'Return booking']
    },
    {
      id: 19,
      name: 'Ivan Petrov',
      location: 'Moscow, Russia',
      rating: 5,
      category: 'wedding',
      vehicle: 'Dawn',
      image: '/images/reviews/Ivan-Petrov.jpg',
      date: '2024-11-30',
      title: 'Предложение на закате',
      review: 'Я сделал предложение своей девушке в Dawn на закате в Пальме Джумейра. Команда помогла организовать все идеально - шампанское, розы, и даже фотограф. Момент был волшебным, и кабриолет добавил романтики. Теперь планируем свадьбу и обязательно возьмем Rolls-Royce!',
      highlights: ['Proposal setup', 'Sunset timing', 'Romantic touches', 'Future booking']
    },
    {
      id: 20,
      name: 'Abdullah Hassan',
      location: 'Doha, Qatar',
      rating: 5,
      category: 'corporate',
      vehicle: 'Phantom',
      image: '/images/reviews/fahd.jpg',
      date: '2024-11-25',
      title: 'خدمة تليق بالشيوخ',
      review: 'استخدمت الفانتوم لاستقبال ضيوف مهمين من قطر. السيارة كانت في حالة ممتازة، والسائق محترف للغاية. التنسيق كان مثالياً، من المطار إلى الفندق إلى مواقع الاجتماعات. هذه الخدمة تعكس الضيافة العربية الأصيلة.',
      highlights: ['VIP guests', 'Airport service', 'Arabic hospitality', 'Flawless coordination']
    },
    // Latest Reviews
    {
      id: 21,
      name: 'Michael & Emma Johnson',
      location: 'Toronto, Canada',
      rating: 5,
      category: 'tourism',
      vehicle: 'Cullinan',
      image: '/images/reviews/mahdy.jpg',
      date: '2025-01-05',
      title: 'Canadian Couple\'s Dream Vacation',
      review: 'We celebrated our 25th anniversary with a week in Dubai, and the Cullinan made it extraordinary. From the airport pickup to daily excursions, everything was perfect. The SUV handled the desert safari beautifully, and the city tours were incredibly comfortable. Our chauffeur became like a friend, sharing local tips and ensuring we experienced the best of Dubai.',
      highlights: ['Anniversary trip', 'Week-long rental', 'Desert capability', 'Personal service']
    },
    {
      id: 22,
      name: 'Sofia Fernandez',
      location: 'Mexico City, Mexico',
      rating: 5,
      category: 'events',
      vehicle: 'Ghost',
      image: '/images/reviews/faten.webp',
      date: '2025-01-03',
      title: 'Art Gallery Opening',
      review: 'For my art gallery opening in Alserkal Avenue, the Ghost was the perfect choice. Its understated elegance matched the artistic atmosphere perfectly. The chauffeur helped coordinate arrivals for VIP guests and media. The car became part of the art experience, with many guests photographing it as part of the event.',
      highlights: ['Art event', 'Media coordination', 'Elegant presence', 'Guest impression']
    },
    {
      id: 23,
      name: 'Rashid Al-Thani',
      location: 'Bahrain',
      rating: 5,
      category: 'wedding',
      vehicle: 'Phantom & Fleet',
      image: '/images/reviews/abdallah.jpg',
      date: '2025-01-02',
      title: 'خدمة ملكية لزفاف ملكي',
      review: 'نظمنا زفافاً كبيراً في دبي واستأجرنا 7 سيارات رولز رويس. التنسيق كان مذهلاً - كل سيارة وصلت في الوقت المحدد، مزينة بشكل مثالي، والسائقون كانوا في غاية الاحترافية. الضيوف من البحرين والسعودية كانوا معجبين جداً. خدمة تستحق 10 نجوم!',
      highlights: ['7-car fleet', 'GCC wedding', 'Perfect timing', 'Professional team']
    },
    {
      id: 24,
      name: 'Dr. Priya Patel',
      location: 'London, UK',
      rating: 5,
      category: 'corporate',
      vehicle: 'Ghost',
      image: '/images/reviews/pouja.webp',
      date: '2024-12-28',
      title: 'Medical Conference Excellence',
      review: 'As a keynote speaker at a medical conference, I needed reliable, professional transportation. The Ghost exceeded expectations - quiet for call preparation, comfortable for long days, and impressive for evening events. The chauffeur knew every venue and helped me stay on schedule. Will definitely use again for future conferences.',
      highlights: ['Conference transport', 'Schedule management', 'Professional image', 'Quiet comfort']
    },
    {
      id: 25,
      name: 'Alessandro Romano',
      location: 'Milan, Italy',
      rating: 5,
      category: 'tourism',
      vehicle: 'Dawn',
      image: '/images/reviews/omran.jpg',
      date: '2024-12-22',
      title: 'La Dolce Vita in Dubai',
      review: 'Coming from Milan, I have high standards for luxury. The Dawn convertible was perfection - especially for evening drives along JBR. The service reminded me of the best Italian hospitality. We enjoyed sunset drives, visited the best Italian restaurants, and felt like movie stars. Bravisimo!',
      highlights: ['Italian standards', 'Convertible experience', 'Evening drives', 'Lifestyle match']
    }
  ]

  const filteredTestimonials = selectedFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedFilter)

  const stats = {
    totalReviews: testimonials.length,
    averageRating: 5.0,
    categories: {
      wedding: testimonials.filter(t => t.category === 'wedding').length,
      corporate: testimonials.filter(t => t.category === 'corporate').length,
      tourism: testimonials.filter(t => t.category === 'tourism').length,
      events: testimonials.filter(t => t.category === 'events').length
    }
  }

  return (
    <>
      <SEO pageKey="other.testimonials" />

      <Layout>
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-with-blan.jpg"
              alt="Rolls-Royce Customer Experiences"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/60 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {t('testimonialsPage.title')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-4">
                {t('testimonialsPage.subtitle')}
              </p>
              <div className="flex items-center justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-white text-xl ml-2">5.0 ({stats.totalReviews} Reviews)</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-rolls-gold">{stats.totalReviews}+</p>
                <p className="text-gray-300">{t('home.stats.happyCustomers')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-rolls-gold">5.0</p>
                <p className="text-gray-300">{t('testimonialsPage.stats.averageRating')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-rolls-gold">100%</p>
                <p className="text-gray-300">{t('testimonialsPage.stats.recommendationRate')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-rolls-gold">15+</p>
                <p className="text-gray-300">{t('testimonialsPage.stats.countriesServed')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-gradient-to-b from-rolls-navy to-rolls-black sticky top-0 z-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedFilter === filter.id
                      ? 'bg-rolls-gold text-rolls-black'
                      : 'bg-rolls-black/50 text-white border border-rolls-gold/20 hover:border-rolls-gold/40'
                  }`}
                >
                  {filter.name} ({filter.count})
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 hover:border-rolls-gold/40 transition-all cursor-pointer"
                  onClick={() => setSelectedTestimonial(testimonial.id)}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm">{testimonial.location}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Vehicle */}
                  <h4 className="text-lg font-bold text-white mb-2">{testimonial.title}</h4>
                  <p className="text-rolls-gold text-sm mb-3">{testimonial.vehicle}</p>

                  {/* Review Text */}
                  <p className="text-gray-300 line-clamp-4 mb-4">{testimonial.review}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {testimonial.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-rolls-gold/10 text-rolls-gold px-3 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                    {testimonial.highlights.length > 2 && (
                      <span className="text-xs text-gray-400">+{testimonial.highlights.length - 2} more</span>
                    )}
                  </div>

                  {/* Date */}
                  <p className="text-gray-500 text-xs mt-4">
                    {new Date(testimonial.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Modal */}
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-rolls-black/95 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute -top-12 right-0 text-white hover:text-rolls-gold transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {(() => {
                const testimonial = testimonials.find(t => t.id === selectedTestimonial)
                if (!testimonial) return null
                
                return (
                  <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden">
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex items-center space-x-6 mb-6">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{testimonial.name}</h3>
                          <p className="text-gray-400">{testimonial.location}</p>
                          <div className="flex items-center mt-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg key={i} className="w-6 h-6 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h4 className="text-2xl font-bold text-white mb-2">{testimonial.title}</h4>
                      <p className="text-rolls-gold mb-6">{testimonial.vehicle} • {testimonial.category}</p>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">{testimonial.review}</p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h5 className="text-white font-semibold mb-3">{t('testimonialsPage.labels.experienceHighlights')}</h5>
                        <div className="flex flex-wrap gap-3">
                          {testimonial.highlights.map((highlight, idx) => (
                            <span key={idx} className="bg-rolls-gold/10 text-rolls-gold px-4 py-2 rounded-full">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-6 border-t border-rolls-gold/20">
                        <p className="text-gray-400">
                          {new Date(testimonial.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </p>
                        <Link 
                          href={`/services/${testimonial.category}`} 
                          className="text-rolls-gold hover:text-white transition-colors"
                        >
                          View {testimonial.category} Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                {t('testimonialsPage.cta.title')}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('testimonialsPage.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-primary">
                  {t('testimonialsPage.cta.bookButton')}
                </Link>
                <Link href="/fleet" className="btn-secondary">
                  {t('testimonialsPage.cta.exploreButton')}
                </Link>
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation"])),
    },
  }
}
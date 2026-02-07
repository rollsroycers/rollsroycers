import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface Review {
  id: number
  name: string
  image: string
  rating: number
  date: string
  car: string
  review: string
  nationality: string
}

export default function Reviews() {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expandedReview, setExpandedReview] = useState<number | null>(null)

  const reviews: Review[] = [
    {
      id: 1,
      name: t('reviews.review1.name'),
      image: "/images/reviews/ahmed.webp",
      rating: 5,
      date: t('reviews.review1.date'),
      car: t('reviews.review1.car'),
      review: t('reviews.review1.review'),
      nationality: t('reviews.review1.location')
    },
    {
      id: 2,
      name: t('reviews.review2.name'),
      image: "/images/reviews/Dmitry-Ivanov.jpg",
      rating: 5,
      date: t('reviews.review2.date'),
      car: t('reviews.review2.car'),
      review: t('reviews.review2.review'),
      nationality: t('reviews.review2.location')
    },
    {
      id: 3,
      name: t('reviews.review3.name'),
      image: "/images/reviews/faten.webp",
      rating: 5,
      date: t('reviews.review3.date'),
      car: t('reviews.review3.car'),
      review: t('reviews.review3.review'),
      nationality: t('reviews.review3.location')
    },
    {
      id: 4,
      name: t('reviews.review4.name'),
      image: "/images/reviews/Julien-Dubois_.jpg",
      rating: 5,
      date: t('reviews.review4.date'),
      car: t('reviews.review4.car'),
      review: t('reviews.review4.review'),
      nationality: t('reviews.review4.location')
    },
    {
      id: 5,
      name: t('reviews.review5.name'),
      image: "/images/reviews/Chen-Jie.avif",
      rating: 5,
      date: t('reviews.review5.date'),
      car: t('reviews.review5.car'),
      review: t('reviews.review5.review'),
      nationality: t('reviews.review5.location')
    },
    {
      id: 6,
      name: t('reviews.review6.name'),
      image: "/images/reviews/pouja.webp",
      rating: 5,
      date: t('reviews.review6.date'),
      car: t('reviews.review6.car'),
      review: t('reviews.review6.review'),
      nationality: t('reviews.review6.location')
    },
    {
      id: 7,
      name: t('reviews.review7.name'),
      image: "/images/reviews/Sergey-Volkov.webp",
      rating: 5,
      date: t('reviews.review7.date'),
      car: t('reviews.review7.car'),
      review: t('reviews.review7.review'),
      nationality: t('reviews.review7.location')
    },
    {
      id: 8,
      name: t('reviews.review8.name'),
      image: "/images/reviews/mohamed.jpg",
      rating: 5,
      date: t('reviews.review8.date'),
      car: t('reviews.review8.car'),
      review: t('reviews.review8.review'),
      nationality: t('reviews.review8.location')
    },
    {
      id: 9,
      name: t('reviews.review9.name'),
      image: "/images/reviews/Julien-Dubois_.jpg",
      rating: 5,
      date: t('reviews.review9.date'),
      car: t('reviews.review9.car'),
      review: t('reviews.review9.review'),
      nationality: t('reviews.review9.location')
    },
    {
      id: 10,
      name: t('reviews.review10.name'),
      image: "/images/reviews/Wang-Jun_.jpg",
      rating: 5,
      date: t('reviews.review10.date'),
      car: t('reviews.review10.car'),
      review: t('reviews.review10.review'),
      nationality: t('reviews.review10.location')
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-rolls-gold' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-white mb-4">{t('reviews.title')}</h2>
          <p className="text-xl text-rolls-gold">{t('reviews.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="reviews-swiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-rolls-black/50 rounded-lg p-6 glass-effect h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                      <p className="text-sm text-gray-400">{review.nationality}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span className="text-xs text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Car Badge */}
                  <div className="inline-flex items-center bg-rolls-gold/20 text-rolls-gold px-3 py-1 rounded-full text-sm mb-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {review.car}
                  </div>

                  {/* Review Text */}
                  <div className="flex-grow">
                    <p className={`text-gray-300 leading-relaxed ${expandedReview === review.id ? '' : 'line-clamp-4'}`}>
                      "{review.review}"
                    </p>
                    {review.review.length > 150 && (
                      <button
                        onClick={() => setExpandedReview(expandedReview === review.id ? null : review.id)}
                        className="text-rolls-gold text-sm mt-2 hover:underline"
                      >
                        {expandedReview === review.id ? t('reviews.showLess') : t('reviews.readMore')}
                      </button>
                    )}
                  </div>

                  {/* Verified Badge */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-rolls-gold/20">
                    <span className="text-xs text-gray-500 flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t('reviews.verified')}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center bg-rolls-black/50 glass-effect px-8 py-4 rounded-lg">
            <div className="text-center mr-8">
              <div className="text-4xl font-bold text-rolls-gold">5.0</div>
              <div className="flex mt-2">{renderStars(5)}</div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-semibold text-white">{t('common.excellent')}</div>
              <div className="text-sm text-gray-400">{t('common.basedOnReviews', { count: reviews.length })}</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .reviews-swiper {
          padding-bottom: 50px;
        }
        .reviews-swiper .swiper-pagination-bullet {
          background: rgba(196, 165, 112, 0.3);
          width: 10px;
          height: 10px;
          opacity: 1;
        }
        .reviews-swiper .swiper-pagination-bullet-active {
          background: #C4A570;
          width: 30px;
          border-radius: 5px;
        }
        .reviews-swiper .swiper-button-next,
        .reviews-swiper .swiper-button-prev {
          color: #C4A570;
          width: 40px;
          height: 40px;
        }
        .reviews-swiper .swiper-button-next:after,
        .reviews-swiper .swiper-button-prev:after {
          font-size: 20px;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
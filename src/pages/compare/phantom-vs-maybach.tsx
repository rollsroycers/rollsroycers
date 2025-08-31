import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ComparisonStructuredData from '../../components/ComparisonStructuredData';

interface ComparisonMetric {
  category: string;
  phantom: string | number;
  maybach: string | number;
  winner?: 'phantom' | 'maybach' | 'tie';
}

const PhantomVsMaybach: React.FC = () => {
  const { t } = useTranslation(['compare', 'common', 'seo']);
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: t('compare:categories.all'), icon: '🎯' },
    { id: 'performance', name: t('compare:categories.performance'), icon: '⚡' },
    { id: 'luxury', name: t('compare:categories.luxury'), icon: '💎' },
    { id: 'technology', name: t('compare:categories.technology'), icon: '📱' },
    { id: 'comfort', name: t('compare:categories.comfort'), icon: '🛋️' },
    { id: 'pricing', name: t('compare:categories.pricing'), icon: '💰' },
  ];

  const comparisonData: ComparisonMetric[] = [
    // Performance
    {
      category: 'performance',
      phantom: '6.75L V12',
      maybach: '6.0L V12',
      winner: 'phantom',
    },
    {
      category: 'performance',
      phantom: '563 HP',
      maybach: '550 HP',
      winner: 'phantom',
    },
    {
      category: 'performance',
      phantom: '900 Nm',
      maybach: '900 Nm',
      winner: 'tie',
    },
    {
      category: 'performance',
      phantom: '5.4s',
      maybach: '5.0s',
      winner: 'maybach',
    },
    // Luxury
    {
      category: 'luxury',
      phantom: t('compare:metrics.starlight'),
      maybach: t('compare:metrics.ambient'),
      winner: 'phantom',
    },
    {
      category: 'luxury',
      phantom: t('compare:metrics.handcrafted'),
      maybach: t('compare:metrics.executive'),
      winner: 'phantom',
    },
    // Technology
    {
      category: 'technology',
      phantom: t('compare:metrics.spirit'),
      maybach: t('compare:metrics.mbux'),
      winner: 'maybach',
    },
    {
      category: 'technology',
      phantom: t('compare:metrics.bespoke_audio'),
      maybach: t('compare:metrics.burmester'),
      winner: 'tie',
    },
    // Comfort
    {
      category: 'comfort',
      phantom: '5 Seats',
      maybach: '4-5 Seats',
      winner: 'phantom',
    },
    {
      category: 'comfort',
      phantom: '5,982mm',
      maybach: '5,469mm',
      winner: 'phantom',
    },
    // Pricing
    {
      category: 'pricing',
      phantom: 'AED 3,500/day',
      maybach: 'AED 3,000/day',
      winner: 'maybach',
    },
  ];

  const filteredData = activeCategory === 'all' 
    ? comparisonData 
    : comparisonData.filter(item => item.category === activeCategory);

  const advantages = {
    phantom: [
      t('compare:advantages.phantom.heritage'),
      t('compare:advantages.phantom.craftsmanship'),
      t('compare:advantages.phantom.presence'),
      t('compare:advantages.phantom.customization'),
      t('compare:advantages.phantom.quietness'),
    ],
    maybach: [
      t('compare:advantages.maybach.technology'),
      t('compare:advantages.maybach.performance'),
      t('compare:advantages.maybach.innovation'),
      t('compare:advantages.maybach.efficiency'),
      t('compare:advantages.maybach.sportiness'),
    ],
  };

  return (
    <>
      <Head>
        <title>{t('seo:compare.phantom_vs_maybach.title')}</title>
        <meta name="description" content={t('seo:compare.phantom_vs_maybach.description')} />
        <meta name="keywords" content={t('seo:compare.phantom_vs_maybach.keywords')} />
        <meta property="og:title" content={t('seo:compare.phantom_vs_maybach.og_title')} />
        <meta property="og:description" content={t('seo:compare.phantom_vs_maybach.og_description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://rollsroycers.com${router.asPath}`} />
        <meta property="og:image" content="https://rollsroycers.com/images/compare-phantom-maybach.jpg" />
        <link rel="canonical" href={`https://rollsroycers.com${router.pathname}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo:compare.phantom_vs_maybach.title')} />
        <meta name="twitter:description" content={t('seo:compare.phantom_vs_maybach.description')} />
      </Head>

      <ComparisonStructuredData
        vehicle1={{
          name: 'Rolls-Royce Phantom',
          brand: 'Rolls-Royce',
          model: 'Phantom',
          year: 2024,
          pricePerDay: 3500,
          currency: 'AED',
          image: 'https://rollsroycers.com/images/fleet/phantom.jpg',
        }}
        vehicle2={{
          name: 'Mercedes-Maybach S-Class',
          brand: 'Mercedes-Benz',
          model: 'Maybach S-Class',
          year: 2024,
          pricePerDay: 3000,
          currency: 'AED',
          image: 'https://rollsroycers.com/images/maybach-s-class.jpg',
        }}
      />

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-transparent to-gray-600" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {t('compare:hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                {t('compare:hero.subtitle')}
              </p>
            </motion.div>

            {/* Vehicle Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Phantom Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-yellow-600/30">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src="/images/Phantom_Extended.jpg"
                      alt="Rolls-Royce Phantom"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-3xl font-bold text-yellow-400">Rolls-Royce Phantom</h2>
                      <span className="text-2xl">👑</span>
                    </div>
                    <p className="text-gray-300 mb-6">{t('compare:vehicles.phantom.tagline')}</p>
                    <div className="space-y-3">
                      {advantages.phantom.slice(0, 3).map((adv, idx) => (
                        <div key={idx} className="flex items-center text-gray-400">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>{adv}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-800">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">{t('compare:pricing.starting_from')}</span>
                        <span className="text-2xl font-bold text-yellow-400">AED 3,500/day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Maybach Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-600/30">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src="/images/Mercedes-Benz_Maybach.avif"
                      alt="Mercedes-Maybach S-Class"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-3xl font-bold text-gray-400">Mercedes-Maybach</h2>
                      <span className="text-2xl">⭐</span>
                    </div>
                    <p className="text-gray-300 mb-6">{t('compare:vehicles.maybach.tagline')}</p>
                    <div className="space-y-3">
                      {advantages.maybach.slice(0, 3).map((adv, idx) => (
                        <div key={idx} className="flex items-center text-gray-400">
                          <span className="text-gray-500 mr-2">✓</span>
                          <span>{adv}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-800">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">{t('compare:pricing.starting_from')}</span>
                        <span className="text-2xl font-bold text-gray-400">AED 3,000/day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            >
              <div className="bg-gray-900/50 rounded-xl p-6 text-center border border-gray-800">
                <div className="text-3xl mb-2">🏎️</div>
                <div className="text-2xl font-bold text-yellow-400">563 HP</div>
                <div className="text-sm text-gray-400">Phantom Power</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 text-center border border-gray-800">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-2xl font-bold text-gray-400">550 HP</div>
                <div className="text-sm text-gray-400">Maybach Power</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 text-center border border-gray-800">
                <div className="text-3xl mb-2">🛡️</div>
                <div className="text-2xl font-bold text-yellow-400">5,982mm</div>
                <div className="text-sm text-gray-400">Phantom Length</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 text-center border border-gray-800">
                <div className="text-3xl mb-2">📏</div>
                <div className="text-2xl font-bold text-gray-400">5,469mm</div>
                <div className="text-sm text-gray-400">Maybach Length</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Detailed Comparison Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {t('compare:comparison.title')}
              </h2>
              <p className="text-xl text-gray-400">
                {t('compare:comparison.subtitle')}
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-full transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-yellow-600 to-yellow-700 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Comparison Table */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/50">
                      <th className="px-6 py-4 text-left text-gray-400">{t('compare:table.feature')}</th>
                      <th className="px-6 py-4 text-center">
                        <div className="text-yellow-400 font-bold">Rolls-Royce Phantom</div>
                      </th>
                      <th className="px-6 py-4 text-center">
                        <div className="text-gray-400 font-bold">Mercedes-Maybach</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((metric, idx) => (
                      <tr key={idx} className="border-t border-gray-800">
                        <td className="px-6 py-4 text-gray-300">
                          {t(`compare:features.${metric.category}`)}
                        </td>
                        <td className={`px-6 py-4 text-center ${
                          metric.winner === 'phantom' ? 'text-yellow-400 font-bold' : 'text-gray-400'
                        }`}>
                          {metric.phantom}
                          {metric.winner === 'phantom' && <span className="ml-2">👑</span>}
                        </td>
                        <td className={`px-6 py-4 text-center ${
                          metric.winner === 'maybach' ? 'text-gray-300 font-bold' : 'text-gray-400'
                        }`}>
                          {metric.maybach}
                          {metric.winner === 'maybach' && <span className="ml-2">⭐</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {t('compare:cta.title')}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {t('compare:cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-lg hover:from-yellow-700 hover:to-yellow-800 transition-all text-lg font-semibold">
                    {t('compare:cta.book_phantom')}
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all text-lg font-semibold">
                    {t('compare:cta.contact_us')}
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Comparison Images Section */}
        <section className="py-20 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {t('compare:gallery.title', 'Visual Comparison')}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/new_Rolls-Royce_Extended_Wheelbase_Phantom.jpg"
                    alt="Rolls-Royce Phantom Extended Wheelbase"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-yellow-400">Rolls-Royce Phantom EWB</h3>
                    <p className="text-gray-300">{t('compare:gallery.phantom_desc', 'Extended Wheelbase Luxury')}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/Mercedes_Maybach_GLS.jpeg"
                    alt="Mercedes-Maybach GLS"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-gray-400">Mercedes-Maybach GLS</h3>
                    <p className="text-gray-300">{t('compare:gallery.maybach_desc', 'Ultimate SUV Alternative')}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Interior Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/New_Rolls-Royce_Ghost_interior_.jpg"
                    alt="Rolls-Royce Interior"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-yellow-400">{t('compare:gallery.phantom_interior', 'Phantom Interior')}</h3>
                    <p className="text-gray-300">{t('compare:gallery.phantom_interior_desc', 'Handcrafted British Excellence')}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative group"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/inside-Rolls-Royce.jpg"
                    alt="Luxury Interior Comparison"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-gray-400">{t('compare:gallery.luxury_interior', 'Luxury Defined')}</h3>
                    <p className="text-gray-300">{t('compare:gallery.luxury_interior_desc', 'Where Comfort Meets Technology')}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['compare', 'common', 'seo'])),
    },
  };
};

export default PhantomVsMaybach;
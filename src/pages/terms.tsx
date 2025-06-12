import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'

export default function TermsPage() {
  const sections = [
    {
      title: '1. Rental Agreement',
      content: [
        'By renting a vehicle from Rolls-Royce Dubai, you agree to these terms and conditions in full.',
        'The rental agreement is between Rolls-Royce Dubai (the "Company") and the person or entity named in the rental agreement (the "Renter").',
        'The minimum rental period is 24 hours for self-drive and 4 hours for chauffeur services.',
        'All rentals are subject to vehicle availability.'
      ]
    },
    {
      title: '2. Driver Requirements',
      content: [
        'Minimum age for rental is 25 years old.',
        'Valid UAE driving license or international driving permit required.',
        'Minimum 2 years of driving experience.',
        'Copy of passport and visa required for all rentals.',
        'Credit card in the name of the main driver required for security deposit.'
      ]
    },
    {
      title: '3. Security Deposit',
      content: [
        'Security deposit ranges from AED 15,000 to AED 35,000 depending on vehicle model.',
        'Deposit is held on credit card and released within 21 days after vehicle return.',
        'Deposit covers traffic fines, damages, and any additional charges.',
        'Cash deposits are not accepted.'
      ]
    },
    {
      title: '4. Insurance Coverage',
      content: [
        'Basic insurance included in all rentals with AED 15,000 excess.',
        'Premium insurance available to reduce excess to AED 5,000.',
        'Insurance does not cover damage to wheels, tires, undercarriage, or interior.',
        'Personal belongings are not covered under vehicle insurance.',
        'Driver must report any accident immediately to police and company.'
      ]
    },
    {
      title: '5. Usage Restrictions',
      content: [
        'Vehicles must not be used for racing, rallying, or any motorsport activities.',
        'Off-road driving is strictly prohibited except for designated areas with Cullinan.',
        'Smoking is not permitted in any vehicle.',
        'Pets are allowed only with prior approval and additional cleaning fee.',
        'Maximum 2 additional drivers permitted with prior authorization.'
      ]
    },
    {
      title: '6. Fuel Policy',
      content: [
        'Vehicles are provided with full tank and must be returned with full tank.',
        'Premium fuel (98 octane or higher) required for all vehicles.',
        'Refueling service available at AED 800 plus fuel cost.',
        'Wrong fuel type will result in full engine repair costs to renter.'
      ]
    },
    {
      title: '7. Mileage Allowance',
      content: [
        'Daily rentals include 200 km per day.',
        'Weekly rentals include 1,500 km per week.',
        'Monthly rentals include 4,000 km per month.',
        'Extra mileage charged at AED 15 per kilometer.',
        'Unlimited mileage packages available on request.'
      ]
    },
    {
      title: '8. Cancellation Policy',
      content: [
        'Free cancellation up to 48 hours before rental start.',
        '50% charge for cancellations within 48-24 hours.',
        'Full charge for cancellations within 24 hours.',
        'No-show results in full charge plus AED 1,500 administrative fee.',
        'Modifications subject to availability and price changes.'
      ]
    },
    {
      title: '9. Traffic Fines & Violations',
      content: [
        'Renter is responsible for all traffic fines during rental period.',
        'AED 150 administrative fee per fine for processing.',
        'Salik (toll) charges will be added to final invoice.',
        'Parking fines are the responsibility of the renter.',
        'Serious violations may result in immediate termination of rental.'
      ]
    },
    {
      title: '10. Vehicle Return',
      content: [
        'Late returns charged at hourly rate up to 3 hours, then full day rate.',
        'Vehicle must be returned clean; cleaning fee AED 800 if required.',
        'All personal belongings must be removed; company not responsible for lost items.',
        'Vehicle inspection conducted upon return in presence of renter.',
        'Return location different from pickup incurs AED 800 relocation fee.'
      ]
    },
    {
      title: '11. Liability & Indemnification',
      content: [
        'Renter liable for all damage not covered by insurance.',
        'Company not liable for consequential or indirect damages.',
        'Renter indemnifies company against all third-party claims.',
        'Maximum liability limited to rental charges paid.',
        'Force majeure events release company from obligations.'
      ]
    },
    {
      title: '12. Governing Law',
      content: [
        'These terms governed by UAE federal law and Dubai local law.',
        'Disputes subject to exclusive jurisdiction of Dubai courts.',
        'English version of terms prevails in case of translation conflicts.',
        'Severability clause: invalid provisions do not affect remaining terms.'
      ]
    }
  ]

  const lastUpdated = 'January 1, 2024'

  return (
    <>
      <SEO pageKey="other.terms" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-rolls-black to-rolls-navy"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Terms & Conditions
              </h1>
              <p className="text-xl text-rolls-gold">
                Last Updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8 mb-8"
              >
                <p className="text-gray-300 leading-relaxed">
                  Welcome to Rolls-Royce Dubai. These terms and conditions outline the rules and regulations 
                  for the use of our luxury car rental services. By accessing our services and renting a vehicle, 
                  you accept these terms and conditions in full. If you disagree with any part of these terms, 
                  please do not use our services.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-12 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-black/30 backdrop-blur-sm border border-rolls-gold/10 rounded-lg p-8"
                >
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <span className="text-rolls-gold mr-3 mt-1">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-12 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-300 mb-4">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="text-rolls-gold">Phone:</span> +971 55 816 4922
                  </p>
                  <p>
                    <span className="text-rolls-gold">Email:</span> legal@rollsroycers.com
                  </p>
                  <p>
                    <span className="text-rolls-gold">Address:</span> Downtown Dubai, UAE
                  </p>
                  <p>
                    <span className="text-rolls-gold">Office Hours:</span> 24/7 Customer Service
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-8 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-300 mb-4">
                  By proceeding with a rental, you acknowledge that:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    You have read and understood these terms and conditions
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    You agree to be bound by these terms
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    You meet all eligibility requirements
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    You will comply with all applicable laws and regulations
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Experience Luxury?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you agree to our terms and conditions, proceed to book your Rolls-Royce experience.
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
                View Our Fleet
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-8">
              By booking, you agree to these terms and conditions
            </p>
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
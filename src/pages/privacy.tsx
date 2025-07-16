import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          items: [
            'Full name and contact details (email, phone number, address)',
            'Date of birth and nationality',
            'Driving license details and passport/ID information',
            'Credit card and payment information',
            'Booking history and preferences'
          ]
        },
        {
          subtitle: 'Automatic Information',
          items: [
            'IP address and device information',
            'Browser type and language preferences',
            'Pages visited and time spent on our website',
            'Referring website addresses',
            'Location data (with your consent)'
          ]
        }
      ]
    },
    {
      title: '2. How We Use Your Information',
      content: [
        {
          subtitle: 'Service Delivery',
          items: [
            'Process rental bookings and payments',
            'Verify driving license and identity',
            'Communicate booking confirmations and updates',
            'Provide customer support and assistance',
            'Handle insurance claims if necessary'
          ]
        },
        {
          subtitle: 'Business Operations',
          items: [
            'Improve our services and website functionality',
            'Send promotional offers and newsletters (with consent)',
            'Conduct market research and analytics',
            'Prevent fraud and ensure security',
            'Comply with legal and regulatory requirements'
          ]
        }
      ]
    },
    {
      title: '3. Information Sharing',
      content: [
        {
          subtitle: 'We may share your information with:',
          items: [
            'Insurance providers for coverage purposes',
            'Government authorities as required by law',
            'Payment processors for transaction handling',
            'Marketing partners (only with your consent)',
            'Service providers who assist our operations'
          ]
        },
        {
          subtitle: 'We will never:',
          items: [
            'Sell your personal information to third parties',
            'Share sensitive data without your explicit consent',
            'Use your information for purposes other than stated',
            'Transfer data to countries without adequate protection'
          ]
        }
      ]
    },
    {
      title: '4. Data Security',
      content: [
        {
          subtitle: 'Security Measures',
          items: [
            'SSL encryption for all data transmission',
            'Secure servers with firewall protection',
            'Regular security audits and updates',
            'Limited access to personal information',
            'PCI DSS compliance for payment processing'
          ]
        }
      ]
    },
    {
      title: '5. Your Rights',
      content: [
        {
          subtitle: 'You have the right to:',
          items: [
            'Access your personal information we hold',
            'Request correction of inaccurate data',
            'Request deletion of your information',
            'Opt-out of marketing communications',
            'Withdraw consent at any time',
            'File a complaint with data protection authorities'
          ]
        }
      ]
    },
    {
      title: '6. Cookies Policy',
      content: [
        {
          subtitle: 'We use cookies for:',
          items: [
            'Essential website functionality',
            'Remembering your preferences',
            'Analytics and performance tracking',
            'Personalized content and advertising',
            'Social media integration'
          ]
        }
      ]
    },
    {
      title: '7. Data Retention',
      content: [
        {
          subtitle: 'Retention Periods',
          items: [
            'Booking information: 7 years for legal compliance',
            'Marketing data: Until consent withdrawn',
            'Website analytics: 2 years',
            'Payment records: As required by financial regulations',
            'CCTV footage: 30 days (office and vehicle cameras)'
          ]
        }
      ]
    },
    {
      title: '8. International Transfers',
      content: [
        {
          subtitle: 'Cross-Border Data',
          items: [
            'Data may be processed in countries where we operate',
            'We ensure adequate protection for international transfers',
            'EU-UAE data transfer agreements are respected',
            'You can request information about transfer safeguards'
          ]
        }
      ]
    },
    {
      title: '9. Children\'s Privacy',
      content: [
        {
          subtitle: 'Age Restrictions',
          items: [
            'Our services are not intended for children under 18',
            'We do not knowingly collect data from minors',
            'Parents may contact us to remove any such data',
            'Age verification required for all rentals'
          ]
        }
      ]
    },
    {
      title: '10. Updates to Privacy Policy',
      content: [
        {
          subtitle: 'Policy Changes',
          items: [
            'We may update this policy periodically',
            'Significant changes will be notified via email',
            'Continued use constitutes acceptance of updates',
            'Previous versions available upon request'
          ]
        }
      ]
    }
  ]

  const lastUpdated = 'January 1, 2024'
  const effectiveDate = 'January 1, 2024'

  return (
    <>
      <SEO pageKey="other.privacy" />
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
                Privacy Policy
              </h1>
              <p className="text-xl text-rolls-gold">
                Your Privacy Matters to Us
              </p>
              <p className="text-gray-400 mt-4">
                Last Updated: {lastUpdated} | Effective Date: {effectiveDate}
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
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Our Commitment to Your Privacy
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  At Rolls-Royce Dubai, we understand that your privacy is important. This Privacy Policy explains 
                  how we collect, use, disclose, and safeguard your information when you use our services or visit 
                  our website. We are committed to protecting your personal data and respecting your privacy rights.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This policy complies with the UAE Federal Law No. 45 of 2021 on the Protection of Personal Data 
                  and international privacy standards including GDPR where applicable.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
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
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    {section.title}
                  </h2>
                  {section.content.map((subsection, subIndex) => (
                    <div key={subIndex} className="mb-6 last:mb-0">
                      <h3 className="text-lg font-medium text-rolls-gold mb-3">
                        {subsection.subtitle}
                      </h3>
                      <ul className="space-y-2">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-gray-300">
                            <span className="text-rolls-gold mr-3 mt-1">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Data Protection Officer
                </h2>
                <p className="text-gray-300 mb-6">
                  For any privacy-related questions or to exercise your rights, please contact our Data Protection Officer:
                </p>
                <div className="space-y-3 text-gray-300">
                  <p>
                    <span className="text-rolls-gold">Email:</span> privacy@rollsroycers.com
                  </p>
                  <p>
                    <span className="text-rolls-gold">Phone:</span> +971 55 816 4922
                  </p>
                  <p>
                    <span className="text-rolls-gold">Address:</span> Rolls-Royce Dubai, Downtown Dubai, UAE
                  </p>
                  <p>
                    <span className="text-rolls-gold">Response Time:</span> Within 48 hours
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
                  Your Consent
                </h2>
                <p className="text-gray-300 mb-4">
                  By using our services, you consent to:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    The collection and processing of your personal data as described
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    The use of cookies and similar technologies
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    The transfer of data as necessary for service delivery
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Receiving service communications and updates
                  </li>
                </ul>
                <p className="text-gray-300 mt-6">
                  You may withdraw your consent at any time by contacting our Data Protection Officer.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                Related Policies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                  href="/terms"
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4 text-center hover:border-rolls-gold/40 transition-colors"
                >
                  <svg className="w-8 h-8 text-rolls-gold mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-white">Terms & Conditions</p>
                </Link>
                
                <Link 
                  href="/cookie-policy"
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4 text-center hover:border-rolls-gold/40 transition-colors"
                >
                  <svg className="w-8 h-8 text-rolls-gold mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-white">Cookie Policy</p>
                </Link>
                
                <Link 
                  href="/contact"
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4 text-center hover:border-rolls-gold/40 transition-colors"
                >
                  <svg className="w-8 h-8 text-rolls-gold mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-white">Contact Us</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Your Privacy is Our Priority
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We are committed to protecting your personal information and providing transparency in how we handle your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:privacy@rollsroycers.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Contact Privacy Team
              </motion.a>
              <Link href="/fleet" className="btn-secondary">
                Continue to Fleet
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation","pages"])),
    },
  }
}
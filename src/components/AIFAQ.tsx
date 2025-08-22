import React from 'react';
import { useTranslation } from 'next-i18next';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQData {
  [key: string]: FAQItem[];
}

const AIFAQ = () => {
  const { t, i18n } = useTranslation('common');
  const currentLang = i18n.language || 'en';
  
  const faqs: FAQData = {
    "en": [
      {
        "q": "How much does it cost to rent a Rolls-Royce in Dubai?",
        "a": "Renting a Rolls-Royce in Dubai starts from AED 3,800 per day for the Ghost model. Phantom costs AED 5,800/day, Cullinan SUV AED 6,500/day, Dawn convertible AED 5,500/day, and Wraith AED 5,000/day. All prices include professional chauffeur, insurance, and 24/7 support."
      },
      {
        "q": "Can tourists rent a Rolls-Royce in Dubai?",
        "a": "Yes, tourists can rent a Rolls-Royce in Dubai. Requirements include: valid passport, international driving license (if self-driving), minimum age 25 years, and credit card for security deposit. We offer chauffeur services for tourists without international licenses."
      },
      {
        "q": "What's included in Rolls-Royce rental in Dubai?",
        "a": "Our Rolls-Royce rental includes: professional multilingual chauffeur, comprehensive insurance, 24/7 roadside assistance, complimentary water and WiFi, airport pickup/drop-off, flexible booking with free cancellation up to 48 hours, and VIP customer service."
      },
      {
        "q": "Where can I rent a Rolls-Royce in Dubai?",
        "a": "You can rent a Rolls-Royce from our showroom in Downtown Dubai with free delivery to all major locations including Dubai Marina, Palm Jumeirah, Business Bay, DIFC, JBR, and both DXB and DWC airports. Same-day booking available with 15-minute delivery."
      },
      {
        "q": "What are the best Rolls-Royce models to rent in Dubai?",
        "a": "For weddings: Phantom Extended Wheelbase (most luxurious). For business: Ghost Series II (perfect balance). For families: Cullinan SUV (7-seater). For beach drives: Dawn convertible. For sports luxury: Wraith coupe. All 2025 models available."
      }
    ],
    "ar": [
      {
        "q": "كم تكلفة استئجار رولز رويس في دبي؟",
        "a": "يبدأ تأجير رولز رويس في دبي من 3,800 درهم يومياً لموديل جوست. فانتوم بسعر 5,800 درهم/يوم، كولينان SUV بسعر 6,500 درهم/يوم، داون المكشوفة 5,500 درهم/يوم، وريث 5,000 درهم/يوم. جميع الأسعار تشمل سائق محترف، تأمين، ودعم 24/7."
      },
      {
        "q": "هل يمكن للسياح استئجار رولز رويس في دبي؟",
        "a": "نعم، يمكن للسياح استئجار رولز رويس في دبي. المتطلبات: جواز سفر ساري، رخصة قيادة دولية (للقيادة الذاتية)، الحد الأدنى للعمر 25 سنة، وبطاقة ائتمان للوديعة. نوفر خدمات السائق للسياح بدون رخصة دولية."
      }
    ]
  };
  
  const currentFAQs = faqs[currentLang] || faqs['en'];
  
  return (
    <div className="ai-faq-section bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gold-500 mb-12 text-center">
          {currentLang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {currentFAQs.map((faq, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">
                {faq.q}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Schema markup for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": currentFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
    </div>
  );
};

export default AIFAQ;
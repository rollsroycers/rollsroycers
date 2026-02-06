import React from 'react';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQData {
  [key: string]: FAQItem[];
}

const headings: Record<string, string> = {
  en: 'Frequently Asked Questions',
  ar: 'الأسئلة الشائعة',
  fr: 'Questions Fréquemment Posées',
  ru: 'Часто Задаваемые Вопросы',
  zh: '常见问题',
  hi: 'अक्सर पूछे जाने वाले प्रश्न'
};

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
        "a": "For weddings: Phantom Extended Wheelbase (most luxurious). For business: Ghost Series II (perfect balance). For families: Cullinan SUV (7-seater). For beach drives: Dawn convertible. For sports luxury: Wraith coupe. All 2026 models available."
      },
      {
        "q": "How do I book a Rolls-Royce in Dubai?",
        "a": "Book online at rollsroycers.com, call or WhatsApp +971558164922, or visit our Downtown Dubai showroom. Instant confirmation, free cancellation up to 48 hours. We deliver to any location in Dubai within 15-30 minutes."
      },
      {
        "q": "Do you offer Rolls-Royce for weddings in Dubai?",
        "a": "Yes, we offer premium wedding car packages starting from AED 2,500. White Phantom and Ghost available with floral decoration, red carpet, Just Married signage, and professional chauffeur in formal attire. Free photographer included for 4+ hour bookings."
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
      },
      {
        "q": "ماذا يشمل تأجير رولز رويس في دبي؟",
        "a": "يشمل تأجير رولز رويس لدينا: سائق محترف متعدد اللغات، تأمين شامل، مساعدة على الطريق 24/7، مياه وواي فاي مجانية، توصيل من/إلى المطار، حجز مرن مع إلغاء مجاني حتى 48 ساعة، وخدمة عملاء VIP."
      },
      {
        "q": "أين يمكنني استئجار رولز رويس في دبي؟",
        "a": "يمكنك استئجار رولز رويس من صالة العرض في وسط دبي مع توصيل مجاني لجميع المواقع الرئيسية بما في ذلك دبي مارينا، نخلة جميرا، الخليج التجاري، مركز دبي المالي، جي بي آر، ومطاري DXB وDWC. الحجز في نفس اليوم متاح مع توصيل خلال 15 دقيقة."
      },
      {
        "q": "ما هي أفضل موديلات رولز رويس للتأجير في دبي؟",
        "a": "للأعراس: فانتوم بقاعدة عجلات ممتدة (الأكثر فخامة). للأعمال: جوست سيريز 2 (التوازن المثالي). للعائلات: كولينان SUV (7 مقاعد). لرحلات الشاطئ: داون المكشوفة. للرياضة الفاخرة: ريث كوبيه. جميع موديلات 2026 متاحة."
      },
      {
        "q": "كيف أحجز رولز رويس في دبي؟",
        "a": "احجز أونلاين عبر rollsroycers.com، أو اتصل/واتساب +971558164922، أو قم بزيارة صالة العرض في وسط دبي. تأكيد فوري، إلغاء مجاني حتى 48 ساعة. نوصل لأي مكان في دبي خلال 15-30 دقيقة."
      },
      {
        "q": "هل توفرون رولز رويس للأعراس في دبي؟",
        "a": "نعم، نوفر باقات سيارات زفاف مميزة تبدأ من 2,500 درهم. فانتوم وجوست باللون الأبيض متاحة مع تزيين بالورود، سجادة حمراء، لافتة Just Married، وسائق محترف بملابس رسمية. مصور مجاني للحجوزات أكثر من 4 ساعات."
      }
    ],
    "fr": [
      {
        "q": "Combien coûte la location d'une Rolls-Royce à Dubaï ?",
        "a": "La location d'une Rolls-Royce à Dubaï commence à 3 800 AED par jour pour le modèle Ghost. Phantom coûte 5 800 AED/jour, Cullinan SUV 6 500 AED/jour, Dawn décapotable 5 500 AED/jour, et Wraith 5 000 AED/jour. Tous les prix incluent chauffeur professionnel, assurance et support 24h/24."
      },
      {
        "q": "Les touristes peuvent-ils louer une Rolls-Royce à Dubaï ?",
        "a": "Oui, les touristes peuvent louer une Rolls-Royce à Dubaï. Conditions requises : passeport valide, permis de conduire international (si conduite autonome), âge minimum 25 ans, et carte de crédit pour le dépôt. Nous offrons un service de chauffeur pour les touristes sans permis international."
      },
      {
        "q": "Que comprend la location de Rolls-Royce à Dubaï ?",
        "a": "Notre location comprend : chauffeur professionnel multilingue, assurance complète, assistance routière 24h/24, eau et WiFi gratuits, transfert aéroport, réservation flexible avec annulation gratuite jusqu'à 48 heures, et service client VIP."
      },
      {
        "q": "Où puis-je louer une Rolls-Royce à Dubaï ?",
        "a": "Vous pouvez louer une Rolls-Royce depuis notre showroom à Downtown Dubai avec livraison gratuite dans tous les principaux quartiers : Dubai Marina, Palm Jumeirah, Business Bay, DIFC, JBR, et les aéroports DXB et DWC. Livraison en 15 minutes."
      },
      {
        "q": "Proposez-vous des Rolls-Royce pour les mariages à Dubaï ?",
        "a": "Oui, nous proposons des forfaits voiture de mariage à partir de 2 500 AED. Phantom et Ghost blanches disponibles avec décoration florale, tapis rouge et chauffeur en tenue formelle. Photographe offert pour les réservations de plus de 4 heures."
      }
    ],
    "ru": [
      {
        "q": "Сколько стоит аренда Rolls-Royce в Дубае?",
        "a": "Аренда Rolls-Royce в Дубае начинается от 3 800 дирхамов в день за модель Ghost. Phantom стоит 5 800 дирхамов/день, Cullinan SUV 6 500 дирхамов/день, Dawn кабриолет 5 500 дирхамов/день и Wraith 5 000 дирхамов/день. Все цены включают профессионального водителя, страховку и поддержку 24/7."
      },
      {
        "q": "Могут ли туристы арендовать Rolls-Royce в Дубае?",
        "a": "Да, туристы могут арендовать Rolls-Royce в Дубае. Требования: действующий паспорт, международные водительские права (при самостоятельном вождении), минимальный возраст 25 лет и кредитная карта для залога. Мы предлагаем услуги водителя для туристов без международных прав."
      },
      {
        "q": "Что включено в аренду Rolls-Royce в Дубае?",
        "a": "Наша аренда включает: профессионального многоязычного водителя, полную страховку, круглосуточную помощь на дороге, бесплатную воду и WiFi, трансфер из/в аэропорт, гибкое бронирование с бесплатной отменой за 48 часов и VIP-обслуживание."
      },
      {
        "q": "Где можно арендовать Rolls-Royce в Дубае?",
        "a": "Вы можете арендовать Rolls-Royce в нашем шоуруме в Downtown Dubai с бесплатной доставкой во все основные районы: Dubai Marina, Palm Jumeirah, Business Bay, DIFC, JBR и аэропорты DXB и DWC. Доставка за 15 минут."
      },
      {
        "q": "Предлагаете ли вы Rolls-Royce для свадьбы в Дубае?",
        "a": "Да, мы предлагаем свадебные пакеты от 2 500 дирхамов. Белые Phantom и Ghost с цветочным украшением, красной дорожкой и профессиональным водителем в формальной одежде. Бесплатный фотограф при бронировании от 4 часов."
      }
    ],
    "zh": [
      {
        "q": "在迪拜租一辆劳斯莱斯要多少钱？",
        "a": "在迪拜租劳斯莱斯的价格从每天3,800迪拉姆起（Ghost车型）。Phantom每天5,800迪拉姆，Cullinan SUV每天6,500迪拉姆，Dawn敞篷车每天5,500迪拉姆，Wraith每天5,000迪拉姆。所有价格包含专业司机、保险和全天候24/7支持。"
      },
      {
        "q": "游客可以在迪拜租劳斯莱斯吗？",
        "a": "是的，游客可以在迪拜租劳斯莱斯。要求包括：有效护照、国际驾照（如需自驾）、最低年龄25岁、信用卡作为押金。我们为没有国际驾照的游客提供司机服务。"
      },
      {
        "q": "迪拜劳斯莱斯租赁包含什么？",
        "a": "我们的租赁服务包括：专业多语种司机、综合保险、24/7道路救援、免费饮用水和WiFi、机场接送、灵活预订（提前48小时免费取消）和VIP客户服务。"
      },
      {
        "q": "在迪拜哪里可以租劳斯莱斯？",
        "a": "您可以从我们位于迪拜市中心的展厅租车，免费送达所有主要地点：迪拜码头、棕榈岛、商业湾、迪拜国际金融中心、JBR以及DXB和DWC机场。15分钟内送达。"
      },
      {
        "q": "你们提供婚礼用劳斯莱斯吗？",
        "a": "是的，我们提供婚礼用车套餐，起价2,500迪拉姆。白色Phantom和Ghost可配花卉装饰、红毯和穿正装的专业司机。预订4小时以上可获免费摄影师服务。"
      }
    ],
    "hi": [
      {
        "q": "दुबई में रोल्स रॉयस किराए पर लेने की कीमत कितनी है?",
        "a": "दुबई में रोल्स रॉयस का किराया Ghost मॉडल के लिए प्रति दिन 3,800 दिरहम से शुरू होता है। Phantom 5,800 दिरहम/दिन, Cullinan SUV 6,500 दिरहम/दिन, Dawn कन्वर्टिबल 5,500 दिरहम/दिन, और Wraith 5,000 दिरहम/दिन। सभी कीमतों में प्रोफेशनल ड्राइवर, बीमा और 24/7 सपोर्ट शामिल है।"
      },
      {
        "q": "क्या पर्यटक दुबई में रोल्स रॉयस किराए पर ले सकते हैं?",
        "a": "हां, पर्यटक दुबई में रोल्स रॉयस किराए पर ले सकते हैं। आवश्यकताएं: वैध पासपोर्ट, अंतरराष्ट्रीय ड्राइविंग लाइसेंस (सेल्फ-ड्राइविंग के लिए), न्यूनतम आयु 25 वर्ष, और सुरक्षा जमा के लिए क्रेडिट कार्ड। हम अंतरराष्ट्रीय लाइसेंस के बिना पर्यटकों के लिए ड्राइवर सेवा प्रदान करते हैं।"
      },
      {
        "q": "दुबई में रोल्स रॉयस किराए में क्या शामिल है?",
        "a": "हमारे किराए में शामिल है: प्रोफेशनल बहुभाषी ड्राइवर, व्यापक बीमा, 24/7 सड़क सहायता, मुफ्त पानी और WiFi, एयरपोर्ट पिकअप/ड्रॉप, 48 घंटे पहले मुफ्त रद्दीकरण, और VIP ग्राहक सेवा।"
      },
      {
        "q": "दुबई में रोल्स रॉयस कहां किराए पर ले सकते हैं?",
        "a": "आप हमारे डाउनटाउन दुबई शोरूम से रोल्स रॉयस किराए पर ले सकते हैं। सभी प्रमुख स्थानों पर मुफ्त डिलीवरी: दुबई मरीना, पाम जुमेराह, बिजनेस बे, DIFC, JBR, और DXB व DWC एयरपोर्ट। 15 मिनट में डिलीवरी।"
      },
      {
        "q": "क्या आप दुबई में शादी के लिए रोल्स रॉयस प्रदान करते हैं?",
        "a": "हां, हम 2,500 दिरहम से शुरू होने वाले वेडिंग कार पैकेज प्रदान करते हैं। सफेद Phantom और Ghost फूलों की सजावट, रेड कार्पेट और फॉर्मल ड्रेस में प्रोफेशनल ड्राइवर के साथ उपलब्ध हैं। 4+ घंटे की बुकिंग पर मुफ्त फोटोग्राफर।"
      }
    ]
  };
  
  const currentFAQs = faqs[currentLang] || faqs['en'];
  
  return (
    <div className="ai-faq-section bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gold-500 mb-12 text-center">
          {headings[currentLang] || headings['en']}
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {currentFAQs.map((faq, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg" itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-semibold text-white mb-3" itemProp="name" data-speakable="true">
                {faq.q}
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-300 leading-relaxed faq-answer" itemProp="text" data-speakable="true">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Schema markup for FAQ */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "dateModified": "2026-02-06",
              "inLanguage": currentLang,
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
      </Head>
    </div>
  );
};

export default AIFAQ;
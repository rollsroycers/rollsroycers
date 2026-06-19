import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'
import { translateSpec } from '@/utils/translations'
import { createWhatsAppLinkProps } from '@/utils/whatsapp'
import Script from 'next/script'
import GEOOptimizer from '@/components/GEOOptimizer'
import EntitySchema from '@/components/EntitySchema'

// AI-Optimized Content Component
const AIOptimizedContent = ({ locale }: { locale: string }) => {
  const contentByLocale: Record<string, React.JSX.Element> = {
    en: (
      <>
        {/* English AI-Optimized Content */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">
                Why Choose Rolls-Royce Phantom in Dubai?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                When you rent a Rolls-Royce Phantom in Dubai, you're not just choosing a car – you're selecting an experience that defines luxury itself. 
                As the flagship model of the world's most prestigious automotive marque, the Phantom represents the pinnacle of craftsmanship, 
                combining British heritage with cutting-edge technology.
              </p>
              
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                Dubai's Most Requested Luxury Vehicle
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                In a city where luxury knows no bounds, the Phantom stands supreme. With over 10,000 satisfied clients since 2010, 
                our Phantom rental service has become synonymous with excellence. From royal families to Fortune 500 CEOs, 
                the discerning elite choose the Phantom for its unmatched presence and comfort.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                Perfect for Every Prestigious Occasion
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>✨ <strong>Weddings:</strong> Make your special day unforgettable with the world's most romantic luxury car</li>
                <li>🏢 <strong>Corporate Events:</strong> Impress clients and partners with unparalleled sophistication</li>
                <li>✈️ <strong>Airport Transfers:</strong> Start your Dubai journey with VIP treatment from the moment you land</li>
                <li>🌃 <strong>City Tours:</strong> Experience Dubai's landmarks from the throne of automotive royalty</li>
                <li>📸 <strong>Photoshoots:</strong> Create stunning content with the most photogenic luxury vehicle</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                The Magic Carpet Ride Experience
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                The Phantom's revolutionary "Magic Carpet Ride" isn't just marketing – it's engineering excellence. 
                The self-leveling air suspension system, combined with the Flagbearer system that scans the road ahead, 
                creates an otherworldly smooth ride that must be experienced to be believed. Whether cruising along 
                Sheikh Zayed Road or arriving at the Burj Al Arab, you'll float above the road in supreme comfort.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                Unrivaled Craftsmanship & Customization
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Each Phantom in our fleet features hand-stitched leather, real wood veneers selected from a single tree, 
                and the iconic Starlight Headliner with 1,340 fiber optic lights creating a celestial atmosphere. 
                The Gallery – a glass-enclosed artwork space spanning the dashboard – showcases bespoke commissioned pieces, 
                making each journey a cultural experience.
              </p>

              <div className="bg-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-4">
                  Exclusive Dubai Benefits
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🚗 Complimentary pickup from any Dubai location</li>
                  <li>👨‍✈️ Professional multilingual chauffeur in formal attire</li>
                  <li>💧 Premium refreshments and WiFi onboard</li>
                  <li>📱 24/7 concierge support for reservations and recommendations</li>
                  <li>🎯 Flexible booking with free cancellation up to 48 hours</li>
                  <li>🏆 Best price guarantee – find cheaper, we'll match it</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                Frequently Asked Questions About Phantom Rental
              </h3>
              <div className="space-y-4">
                <details className="bg-rolls-black/30 rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer">How much does it cost to rent a Phantom in Dubai?</summary>
                  <p className="mt-2 text-gray-300">
                    Phantom rental starts from AED 5,800 per day, with weekly rates at AED 34,800 and monthly at AED 116,000. 
                    All prices include insurance, VAT, and basic chauffeur service.
                  </p>
                </details>
                <details className="bg-rolls-black/30 rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer">Can tourists rent a Rolls-Royce Phantom?</summary>
                  <p className="mt-2 text-gray-300">
                    Absolutely! Tourists can rent with a valid passport, international driving license, and credit card. 
                    However, most clients prefer our chauffeur service for the ultimate luxury experience.
                  </p>
                </details>
                <details className="bg-rolls-black/30 rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer">What's included in the rental?</summary>
                  <p className="mt-2 text-gray-300">
                    Comprehensive insurance, 250km daily mileage, professional chauffeur (optional), 24/7 support, 
                    and complimentary delivery/pickup within Dubai city limits.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Stories Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What Our Phantom Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-rolls-gold">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "The Phantom made our wedding absolutely magical. The attention to detail, from the white glove service 
                  to the champagne setup, exceeded all expectations. Highly recommended!"
                </p>
                <p className="text-rolls-gold font-semibold">Sarah & Ahmed, Wedding</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-rolls-gold">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "For our corporate event, the Phantom fleet made a lasting impression on our international partners. 
                  The professionalism and luxury were unmatched."
                </p>
                <p className="text-rolls-gold font-semibold">David Chen, CEO TechCorp</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-rolls-gold">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "First time in Dubai and the Phantom tour was the highlight. Our chauffeur was knowledgeable 
                  and the car itself is a work of art. Worth every dirham!"
                </p>
                <p className="text-rolls-gold font-semibold">Maria Rodriguez, Tourist</p>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
    ar: (
      <>
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy" dir="rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">
                لماذا تختار رولز رويس فانتوم في دبي؟
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                عندما تستأجر رولز رويس فانتوم في دبي، فأنت لا تختار مجرد سيارة - بل تختار تجربة تعرّف الفخامة نفسها.
                باعتبارها الطراز الرائد لأرقى علامة سيارات في العالم، تمثل فانتوم قمة الحرفية،
                حيث تجمع بين التراث البريطاني والتكنولوجيا المتطورة.
              </p>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                السيارة الفاخرة الأكثر طلباً في دبي
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                في مدينة لا تعرف حدوداً للفخامة، تتربع فانتوم على العرش. مع أكثر من 10,000 عميل راضٍ منذ 2010،
                أصبحت خدمة تأجير فانتوم مرادفاً للتميز. من العائلات الملكية إلى رؤساء شركات Fortune 500،
                تختار النخبة المميزة فانتوم لحضورها وراحتها التي لا مثيل لهما.
              </p>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                مثالية لكل مناسبة مرموقة
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>✨ <strong>حفلات الزفاف:</strong> اجعل يومك المميز لا يُنسى مع أكثر سيارات الفخامة رومانسية</li>
                <li>🏢 <strong>فعاليات الشركات:</strong> أبهر العملاء والشركاء برقي لا مثيل له</li>
                <li>✈️ <strong>توصيل المطار:</strong> ابدأ رحلتك في دبي بمعاملة VIP من لحظة هبوطك</li>
                <li>🌃 <strong>جولات المدينة:</strong> استمتع بمعالم دبي من عرش الملوك الأوتوموتيف</li>
                <li>📸 <strong>جلسات التصوير:</strong> أنشئ محتوى مذهلاً مع أكثر السيارات الفاخرة جاذبية</li>
              </ul>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                تجربة رحلة السجادة السحرية
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                رحلة فانتوم الثورية &quot;السجادة السحرية&quot; ليست مجرد تسويق - إنها تميز هندسي.
                نظام التعليق الهوائي ذاتي التسوية، مع نظام Flagbearer الذي يمسح الطريق أمامك،
                يخلق نعومة قيادة خارقة يجب تجربتها لتصديقها.
              </p>
              <div className="bg-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-4">مزايا حصرية في دبي</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🚗 استلام مجاني من أي موقع في دبي</li>
                  <li>👨‍✈️ سائق محترف متعدد اللغات بزي رسمي</li>
                  <li>💧 مشروبات فاخرة وواي فاي على متن السيارة</li>
                  <li>📱 دعم كونسيرج على مدار الساعة</li>
                  <li>🎯 حجز مرن مع إلغاء مجاني حتى 48 ساعة</li>
                  <li>🏆 ضمان أفضل سعر</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black" dir="rtl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">ماذا يقول عملاء فانتوم</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;فانتوم جعلت زفافنا سحرياً. الاهتمام بالتفاصيل من الخدمة بالقفازات البيضاء إلى ترتيب الشامبانيا فاق كل التوقعات!&quot;</p>
                <p className="text-rolls-gold font-semibold">سارة وأحمد، حفل زفاف</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;لفعاليتنا المؤسسية، أسطول فانتوم ترك انطباعاً دائماً على شركائنا الدوليين. الاحترافية والفخامة لا مثيل لهما.&quot;</p>
                <p className="text-rolls-gold font-semibold">ديفيد تشن، رئيس تنفيذي</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;أول مرة في دبي وجولة فانتوم كانت أبرز اللحظات. سائقنا كان على دراية والسيارة نفسها تحفة فنية.&quot;</p>
                <p className="text-rolls-gold font-semibold">ماريا رودريغيز، سائحة</p>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
    fr: (
      <>
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">
                Pourquoi Choisir la Rolls-Royce Phantom à Dubaï ?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Lorsque vous louez une Rolls-Royce Phantom à Dubaï, vous ne choisissez pas simplement une voiture –
                vous sélectionnez une expérience qui définit le luxe lui-même. En tant que modèle phare de la marque
                automobile la plus prestigieuse au monde, la Phantom représente le summum du savoir-faire,
                alliant héritage britannique et technologie de pointe.
              </p>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Le véhicule de luxe le plus demandé à Dubaï</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Dans une ville où le luxe ne connaît pas de limites, la Phantom règne en maître. Avec plus de 10 000 clients satisfaits depuis 2010,
                notre service de location Phantom est devenu synonyme d&apos;excellence. Des familles royales aux PDG du Fortune 500,
                l&apos;élite exigeante choisit la Phantom pour sa présence et son confort inégalés.
              </p>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Parfaite pour chaque occasion prestigieuse</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✨ <strong>Mariages :</strong> Rendez votre jour spécial inoubliable avec la voiture de luxe la plus romantique</li>
                <li>🏢 <strong>Événements corporate :</strong> Impressionnez clients et partenaires avec une sophistication inégalée</li>
                <li>✈️ <strong>Transferts aéroport :</strong> Commencez votre séjour à Dubaï avec un traitement VIP dès votre arrivée</li>
                <li>🌃 <strong>Tours de ville :</strong> Découvrez les monuments de Dubaï depuis le trône de la royauté automobile</li>
                <li>📸 <strong>Séances photo :</strong> Créez du contenu époustouflant avec le véhicule de luxe le plus photogénique</li>
              </ul>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">L&apos;expérience Magic Carpet Ride</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Le révolutionnaire « Magic Carpet Ride » de la Phantom n&apos;est pas qu&apos;un slogan – c&apos;est de l&apos;excellence d&apos;ingénierie.
                La suspension pneumatique auto-nivelante, combinée au système Flagbearer qui analyse la route,
                crée une douceur de conduite surnaturelle qu&apos;il faut vivre pour y croire.
              </p>
              <div className="bg-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-4">Avantages exclusifs à Dubaï</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🚗 Prise en charge gratuite depuis n&apos;importe quel lieu à Dubaï</li>
                  <li>👨‍✈️ Chauffeur professionnel multilingue en tenue formelle</li>
                  <li>💧 Rafraîchissements premium et WiFi à bord</li>
                  <li>📱 Service conciergerie 24h/24 et 7j/7</li>
                  <li>🎯 Réservation flexible avec annulation gratuite jusqu&apos;à 48h</li>
                  <li>🏆 Garantie meilleur prix</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Ce que disent nos clients Phantom</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;La Phantom a rendu notre mariage absolument magique. L&apos;attention aux détails a dépassé toutes nos attentes !&quot;</p>
                <p className="text-rolls-gold font-semibold">Sarah &amp; Ahmed, Mariage</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;Pour notre événement corporate, la flotte Phantom a fait une impression durable sur nos partenaires internationaux.&quot;</p>
                <p className="text-rolls-gold font-semibold">David Chen, PDG TechCorp</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;Première visite à Dubaï et le tour en Phantom fut le point fort. Notre chauffeur était cultivé et la voiture est une œuvre d&apos;art.&quot;</p>
                <p className="text-rolls-gold font-semibold">Maria Rodriguez, Touriste</p>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
    zh: (
      <>
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">为什么在迪拜选择劳斯莱斯幻影？</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                当您在迪拜租用劳斯莱斯幻影时，您选择的不仅仅是一辆汽车——您选择的是定义奢华本身的体验。
                作为世界上最负盛名的汽车品牌的旗舰车型，幻影代表着工艺的巅峰，将英国传统与尖端技术完美结合。
              </p>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">迪拜最受欢迎的豪华座驾</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                在这座奢华无极限的城市，幻影傲视群雄。自2010年以来，我们已服务超过10,000位满意客户，
                幻影租赁服务已成为卓越的代名词。从皇室家族到世界500强CEO，挑剔的精英人士选择幻影，
                因为它无与伦比的气场和舒适度。
              </p>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">适合每一个尊贵场合</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✨ <strong>婚礼：</strong>以世界上最浪漫的豪车让您的特殊日子永生难忘</li>
                <li>🏢 <strong>企业活动：</strong>以无与伦比的格调打动客户与合作伙伴</li>
                <li>✈️ <strong>机场接送：</strong>从落地那一刻起享受VIP礼遇</li>
                <li>🌃 <strong>城市巡游：</strong>从汽车皇座欣赏迪拜地标</li>
                <li>📸 <strong>摄影拍摄：</strong>用最上镜的豪车创造惊艳内容</li>
              </ul>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">魔毯般的驾乘体验</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                幻影革命性的"魔毯般驾乘"不仅是营销用语——这是工程杰作。自动调平空气悬挂系统配合前方路面扫描的Flagbearer系统，
                创造出超凡的平顺驾乘，唯有亲身体验方能相信。
              </p>
              <div className="bg-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-4">迪拜专属礼遇</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🚗 迪拜任意地点免费接车</li>
                  <li>👨‍✈️ 身着正装的多语种专业司机</li>
                  <li>💧 车载高端饮品和WiFi</li>
                  <li>📱 24/7礼宾支持</li>
                  <li>🎯 灵活预订，48小时内免费取消</li>
                  <li>🏆 最优价格保证</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">幻影客户评价</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;幻影让我们的婚礼如梦似幻。从白手套服务到香槟布置，每一个细节都超出了预期！&quot;</p>
                <p className="text-rolls-gold font-semibold">Sarah &amp; Ahmed，婚礼</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;在我们的企业活动中，幻影车队给国际合作伙伴留下了深刻印象。专业程度和奢华感无可匹敌。&quot;</p>
                <p className="text-rolls-gold font-semibold">David Chen，TechCorp CEO</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;第一次来迪拜，幻影之旅是最大亮点。司机博学多识，这辆车本身就是一件艺术品。物超所值！&quot;</p>
                <p className="text-rolls-gold font-semibold">Maria Rodriguez，游客</p>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
    ru: (
      <>
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">Почему выбрать Rolls-Royce Phantom в Дубае?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Когда вы арендуете Rolls-Royce Phantom в Дубае, вы выбираете не просто автомобиль –
                вы выбираете опыт, который определяет саму роскошь. Как флагманская модель самой
                престижной автомобильной марки в мире, Phantom представляет вершину мастерства,
                сочетая британское наследие с передовыми технологиями.
              </p>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Самый востребованный люксовый автомобиль Дубая</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                В городе, где роскошь не знает границ, Phantom царствует безраздельно. Более 10 000 довольных клиентов с 2010 года —
                наш сервис аренды Phantom стал синонимом совершенства. От королевских семей до CEO компаний Fortune 500,
                взыскательная элита выбирает Phantom за его непревзойдённое присутствие и комфорт.
              </p>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Идеален для любого престижного события</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✨ <strong>Свадьбы:</strong> Сделайте ваш особый день незабываемым с самым романтичным люксовым автомобилем</li>
                <li>🏢 <strong>Корпоративные мероприятия:</strong> Произведите впечатление на клиентов и партнёров непревзойдённой утончённостью</li>
                <li>✈️ <strong>Трансферы из аэропорта:</strong> Начните своё путешествие в Дубае с VIP-обслуживания с момента прилёта</li>
                <li>🌃 <strong>Городские туры:</strong> Откройте достопримечательности Дубая с трона автомобильной роскоши</li>
                <li>📸 <strong>Фотосессии:</strong> Создайте потрясающий контент с самым фотогеничным люксовым автомобилем</li>
              </ul>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Опыт Magic Carpet Ride</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Революционный «Ковёр-самолёт» Phantom — не просто маркетинг, это инженерное совершенство.
                Самовыравнивающаяся пневмоподвеска в сочетании с системой Flagbearer, сканирующей дорогу впереди,
                создаёт сверхъестественную плавность хода, которую нужно испытать, чтобы поверить.
              </p>
              <div className="bg-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-4">Эксклюзивные преимущества в Дубае</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🚗 Бесплатная подача в любую точку Дубая</li>
                  <li>👨‍✈️ Профессиональный многоязычный шофёр в деловом костюме</li>
                  <li>💧 Премиальные напитки и WiFi на борту</li>
                  <li>📱 Консьерж-поддержка 24/7</li>
                  <li>🎯 Гибкое бронирование с бесплатной отменой за 48 часов</li>
                  <li>🏆 Гарантия лучшей цены</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Отзывы клиентов Phantom</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;Phantom сделал нашу свадьбу по-настоящему волшебной. Внимание к деталям — от сервиса в белых перчатках до шампанского — превзошло все ожидания!&quot;</p>
                <p className="text-rolls-gold font-semibold">Сара и Ахмед, Свадьба</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;Для нашего корпоративного мероприятия автопарк Phantom произвёл неизгладимое впечатление на международных партнёров. Профессионализм и роскошь — на высшем уровне.&quot;</p>
                <p className="text-rolls-gold font-semibold">Дэвид Чен, CEO TechCorp</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;Первый раз в Дубае, и тур на Phantom стал главным впечатлением. Шофёр — настоящий знаток, а автомобиль — произведение искусства!&quot;</p>
                <p className="text-rolls-gold font-semibold">Мария Родригес, Туристка</p>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
    hi: (
      <>
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">दुबई में रोल्स-रॉयस फैंटम क्यों चुनें?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                जब आप दुबई में रोल्स-रॉयस फैंटम किराए पर लेते हैं, तो आप केवल एक कार नहीं चुन रहे हैं -
                आप एक ऐसा अनुभव चुन रहे हैं जो विलासिता को परिभाषित करता है। दुनिया के सबसे प्रतिष्ठित
                ऑटोमोटिव ब्रांड के फ्लैगशिप मॉडल के रूप में, फैंटम शिल्प कौशल के शिखर का प्रतिनिधित्व करता है,
                जो ब्रिटिश विरासत को अत्याधुनिक तकनीक के साथ जोड़ता है।
              </p>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">दुबई का सबसे अनुरोधित लग्ज़री वाहन</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                एक ऐसे शहर में जहां लग्ज़री की कोई सीमा नहीं, फैंटम सर्वोच्च है। 2010 से 10,000 से अधिक संतुष्ट ग्राहकों के साथ,
                हमारी फैंटम रेंटल सेवा उत्कृष्टता का पर्याय बन गई है। शाही परिवारों से लेकर Fortune 500 CEO तक,
                विवेकशील अभिजात वर्ग फैंटम को उसकी अद्वितीय उपस्थिति और आराम के लिए चुनते हैं।
              </p>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">हर प्रतिष्ठित अवसर के लिए परफेक्ट</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✨ <strong>शादियां:</strong> दुनिया की सबसे रोमांटिक लग्ज़री कार से अपने खास दिन को अविस्मरणीय बनाएं</li>
                <li>🏢 <strong>कॉर्पोरेट इवेंट्स:</strong> अद्वितीय परिष्कार से क्लाइंट्स और पार्टनर्स को प्रभावित करें</li>
                <li>✈️ <strong>एयरपोर्ट ट्रांसफर:</strong> लैंडिंग के क्षण से VIP ट्रीटमेंट के साथ अपनी दुबई यात्रा शुरू करें</li>
                <li>🌃 <strong>सिटी टूर:</strong> ऑटोमोटिव रॉयल्टी के सिंहासन से दुबई के लैंडमार्क्स का अनुभव करें</li>
                <li>📸 <strong>फोटोशूट:</strong> सबसे फोटोजेनिक लग्ज़री वाहन के साथ शानदार कंटेंट बनाएं</li>
              </ul>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">मैजिक कारपेट राइड अनुभव</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                फैंटम की क्रांतिकारी &quot;मैजिक कारपेट राइड&quot; सिर्फ मार्केटिंग नहीं है - यह इंजीनियरिंग उत्कृष्टता है।
                सेल्फ-लेवलिंग एयर सस्पेंशन सिस्टम, Flagbearer सिस्टम के साथ जो आगे की सड़क को स्कैन करता है,
                एक अलौकिक स्मूथ राइड बनाता है जिसे विश्वास करने के लिए अनुभव करना ज़रूरी है।
              </p>
              <div className="bg-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-4">दुबई में एक्सक्लूसिव लाभ</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🚗 दुबई में किसी भी लोकेशन से मुफ्त पिकअप</li>
                  <li>👨‍✈️ फॉर्मल अटायर में प्रोफेशनल मल्टीलिंगुअल शोफर</li>
                  <li>💧 प्रीमियम रिफ्रेशमेंट और ऑनबोर्ड WiFi</li>
                  <li>📱 24/7 कॉन्सीयर्ज सपोर्ट</li>
                  <li>🎯 48 घंटे पहले तक फ्री कैंसिलेशन के साथ फ्लेक्सिबल बुकिंग</li>
                  <li>🏆 बेस्ट प्राइस गारंटी</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">फैंटम ग्राहक क्या कहते हैं</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;फैंटम ने हमारी शादी को बिल्कुल जादुई बना दिया। व्हाइट ग्लव सर्विस से लेकर शैंपेन सेटअप तक, हर डिटेल उम्मीद से बढ़कर था!&quot;</p>
                <p className="text-rolls-gold font-semibold">सारा और अहमद, शादी</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;हमारे कॉर्पोरेट इवेंट के लिए, फैंटम फ्लीट ने हमारे इंटरनेशनल पार्टनर्स पर स्थायी छाप छोड़ी। प्रोफेशनलिज़्म और लग्ज़री बेजोड़ थी।&quot;</p>
                <p className="text-rolls-gold font-semibold">डेविड चेन, CEO TechCorp</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;दुबई में पहली बार और फैंटम टूर सबसे बड़ी हाइलाइट रही। शोफर जानकार थे और कार अपने आप में एक कलाकृति है। हर दिरहम की कीमत!&quot;</p>
                <p className="text-rolls-gold font-semibold">मारिया रोड्रिगेज़, टूरिस्ट</p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  return contentByLocale[locale] || contentByLocale['en']
}

export default function PhantomPage() {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  const features = t('fleet.phantom.features', { returnObjects: true }) as { title: string; desc: string; icon: string }[]
  const specs = t('fleet.phantom.specs', { returnObjects: true }) as Record<string, string>

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Rolls-Royce Phantom Rental Dubai",
    "image": [
      "https://www.rollsroycers.com/images/Rolls-royce-phantom.jpg",
      "https://www.rollsroycers.com/images/inside-Rolls-Royce.jpg"
    ],
    "description": "Rent Rolls-Royce Phantom in Dubai from AED 5,800/day. 2025 Extended Wheelbase model with professional chauffeur. Perfect for weddings, VIP transfers & corporate events.",
    "brand": {
      "@type": "Brand",
      "name": "Rolls-Royce"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://www.rollsroycers.com/fleet/phantom",
      "priceCurrency": "AED",
      "lowPrice": "5800",
      "highPrice": "116000",
      "offerCount": "3",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Rolls-Royce Dubai",
        "telephone": "+971558164922",
        "email": "info@rollsroycers.com"
      }
    }
  }

  const vehicleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Car",
    "name": "Rolls-Royce Phantom Extended Wheelbase",
    "manufacturer": {
      "@type": "Organization",
      "name": "Rolls-Royce Motor Cars"
    },
    "model": "Phantom",
    "vehicleConfiguration": "Extended Wheelbase",
    "vehicleEngine": {
      "@type": "EngineSpecification",
      "name": "6.75L V12 Twin-Turbo",
      "enginePower": {
        "@type": "QuantitativeValue",
        "value": "563",
        "unitCode": "HP"
      }
    },
    "vehicleSeatingCapacity": 5,
    "fuelType": "Petrol",
    "vehicleTransmission": "8-Speed Automatic",
    "speed": {
      "@type": "QuantitativeValue",
      "value": "250",
      "unitCode": "KMH"
    }
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to rent a Rolls-Royce Phantom in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom rental starts from AED 5,800 per day, with weekly rates at AED 34,800 and monthly at AED 116,000. All prices include insurance, VAT, and basic chauffeur service."
        }
      },
      {
        "@type": "Question",
        "name": "Can tourists rent a Rolls-Royce Phantom in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Tourists can rent with a valid passport, international driving license, and credit card. Most clients prefer our chauffeur service for the ultimate luxury experience."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in the Phantom rental?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Comprehensive insurance, 250km daily mileage, professional chauffeur (optional), 24/7 support, and complimentary delivery/pickup within Dubai city limits."
        }
      }
    ]
  }

  return (
    <>
      <SEO pageKey="fleet.phantom" />
      <GEOOptimizer
        pageKey="fleet.phantom"
        title="Rent Rolls-Royce Phantom Dubai 2026"
        description="Rent Rolls-Royce Phantom in Dubai from AED 5,800/day with professional chauffeur. 2026 Extended Wheelbase model."
        entityType="Vehicle"
        primaryTopic="Rolls-Royce Phantom Rental Dubai"
        contentSummary="The Rolls-Royce Phantom is the pinnacle of luxury motoring. Available for rent in Dubai from AED 5,800/day with professional chauffeur. Extended Wheelbase, Starlight headliner, bespoke craftsmanship. Perfect for weddings, VIP transfers, and corporate events."
        facts={[
          'Rolls-Royce Phantom rental from AED 5,800/day',
          '6.75L Twin-Turbo V12 engine with 563 HP',
          'Extended Wheelbase available',
          'Starlight headliner ceiling',
          'Professional chauffeur included',
          '4.9/5 rating from 1,247 reviews'
        ]}
        faqs={[
          { question: 'How much does it cost to rent a Rolls-Royce Phantom in Dubai?', answer: 'The Rolls-Royce Phantom rental starts from AED 5,800 per day. Weekly rates from AED 34,800 and monthly from AED 116,000. All prices include professional chauffeur, insurance, and 24/7 support.' },
          { question: 'Is the Phantom good for weddings in Dubai?', answer: 'Yes, the Phantom Extended Wheelbase is the most popular wedding car in Dubai. White Phantom available with floral decoration, red carpet, and professional chauffeur in formal attire.' },
          { question: 'What is included in Phantom rental?', answer: 'Phantom rental includes professional multilingual chauffeur, comprehensive insurance, 24/7 roadside assistance, complimentary water and WiFi, and free delivery to any Dubai location.' }
        ]}
      />
      <EntitySchema pageType="fleet" carModel="phantom" />
      
      {/* Structured Data Scripts */}
      <Script
        id="phantom-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="phantom-vehicle-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleStructuredData) }}
      />
      <Script
        id="phantom-faq-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-phantom.jpg"
              alt="Rolls-Royce Phantom Dubai - Luxury Car Rental"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/70 via-rolls-black/50 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('fleet.phantom.name')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-4">
                {t('fleet.phantom.description')}
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                {t('phantomPage.heroSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#booking"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('fleet.rentNow')} - AED 5,800/Day
                </motion.a>
                <Link href="/fleet" className="btn-secondary">
                  {t('nav.fleet')}
                </Link>
              </div>
              <div className="mt-6 flex justify-center gap-4 text-sm text-gray-400">
                <span>✓ {t('phantomPage.instantBooking')}</span>
                <span>✓ {t('phantomPage.freeCancellation')}</span>
                <span>✓ {t('phantomPage.bestPriceGuarantee')}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Signals Bar */}
        <section className="py-6 bg-rolls-gold/10 border-y border-rolls-gold/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-rolls-gold">10,000+</div>
                <div className="text-sm text-gray-400">{t('phantomPage.happyClients')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rolls-gold">4.9/5</div>
                <div className="text-sm text-gray-400">{t('phantomPage.googleRating')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rolls-gold">24/7</div>
                <div className="text-sm text-gray-400">{t('phantomPage.support')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rolls-gold">15min</div>
                <div className="text-sm text-gray-400">{t('phantomPage.deliveryTime')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rolls-gold">{t('phantomPage.since2010')}</div>
                <div className="text-sm text-gray-400">{t('phantomPage.inBusiness')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Price & Availability */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                {t('phantomPage.pricingTitle')}
              </h2>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="text-3xl font-bold text-rolls-gold mb-2">{t('common.aed')} 5,800</h3>
                    <p className="text-gray-400">{t('pricing.daily')}</p>
                    <p className="text-sm text-gray-500 mt-2">{t('phantomPage.kmIncluded250')}</p>
                  </div>
                  <div className="border-2 border-rolls-gold/50 rounded-lg p-4">
                    <div className="text-xs text-rolls-gold mb-1">{t('phantomPage.mostPopular')}</div>
                    <h3 className="text-3xl font-bold text-rolls-gold mb-2">{t('common.aed')} 34,800</h3>
                    <p className="text-gray-400">{t('pricing.weekly')}</p>
                    <p className="text-sm text-gray-500 mt-2">{t('phantomPage.kmIncluded1750')}</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-rolls-gold mb-2">{t('common.aed')} 116,000</h3>
                    <p className="text-gray-400">{t('pricing.monthly')}</p>
                    <p className="text-sm text-gray-500 mt-2">{t('phantomPage.kmIncluded5000')}</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-green-400 mb-4">✓ {t('phantomPage.availableNow')}</p>
                  <a href="#booking" className="btn-primary">{t('phantomPage.checkAvailability')}</a>
                </div>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
                  <span>✓ {t('phantomPage.insuranceIncluded')}</span>
                  <span>✓ {t('phantomPage.vatIncluded')}</span>
                  <span>✓ {t('phantomPage.noHiddenFees')}</span>
                  <span>✓ {t('phantomPage.freeDelivery')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              {t('fleet.phantom.featuresTitle')}
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              {t('phantomPage.featuresSubtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.isArray(features) && features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center hover:border-rolls-gold/40 transition-colors"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('fleet.phantom.specsTitle')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(specs).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center p-4 bg-rolls-black/30 rounded-lg border border-rolls-gold/10"
                  >
                    <span className="text-gray-400 capitalize">{translateSpec(key, t)}:</span>
                    <span className="text-white font-semibold">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI-Optimized Content Section */}
        <AIOptimizedContent locale={locale || 'en'} />

        {/* Gallery */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('fleet.phantom.galleryTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-64 md:col-span-2">
                <Image
                  src="/images/Rolls-royce-phantom.jpg"
                  alt={t('fleet.phantom.gallery.exteriorAlt')}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-64">
                <Image
                  src="/images/inside-Rolls-Royce.jpg"
                  alt={t('fleet.phantom.gallery.interiorAlt')}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('fleet.phantom.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('fleet.phantom.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a {...createWhatsAppLinkProps('phantom')} className="btn-primary">
                {t('phantomPage.chatPhone')}
              </a>
              <a href="#booking" className="btn-secondary">
                {t('nav.bookingLink')}
              </a>
            </div>
          </div>
        </section>

        {/* Related Services & Fleet */}
        <section className="py-20 bg-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">{t('fleetPage.relatedServices')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('fleetPage.phantom.relatedSubtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { href: '/services/wedding', title: t('fleetPage.phantom.services.wedding.title'), desc: t('fleetPage.phantom.services.wedding.desc') },
                { href: '/services/corporate', title: t('fleetPage.phantom.services.corporate.title'), desc: t('fleetPage.phantom.services.corporate.desc') },
                { href: '/services/airport-transfer', title: t('fleetPage.phantom.services.airport.title'), desc: t('fleetPage.phantom.services.airport.desc') },
              ].map((service) => (
                <Link key={service.href} href={service.href} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-rolls-gold/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white group-hover:text-rolls-gold transition-colors mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </Link>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">{t('fleetPage.exploreModels')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { href: '/fleet/ghost', name: t('fleet.ghost.name'), price: t('fleetPage.phantom.models.ghost.price') },
                { href: '/fleet/cullinan', name: t('fleet.cullinan.name'), price: t('fleetPage.phantom.models.cullinan.price') },
                { href: '/fleet/dawn', name: t('fleet.dawn.name'), price: t('fleetPage.phantom.models.dawn.price') },
                { href: '/fleet/wraith', name: t('fleet.wraith.name'), price: t('fleetPage.phantom.models.wraith.price') },
                { href: '/fleet/spectre', name: t('fleet.spectre.name'), price: t('fleetPage.phantom.models.spectre.price') },
              ].map((model) => (
                <Link key={model.href} href={model.href} className="group text-center bg-white/5 border border-white/10 rounded-lg p-4 hover:border-rolls-gold/50 transition-all">
                  <p className="text-white font-semibold group-hover:text-rolls-gold transition-colors">{model.name}</p>
                  <p className="text-rolls-gold/70 text-sm mt-1">{model.price}</p>
                </Link>
              ))}
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation","fleet"])),
    },
  }
}
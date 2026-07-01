const fs = require('fs');
const path = require('path');

const slug = 'makes-rolls-royce-hands-hallmark';
const targetPath = path.join(__dirname, '../src/data/blog', `${slug}.json`);

// Helper to count words
const countWords = (content) => {
  return content.map(b => {
    const text = [b.text, ...(b.items || [])].filter(x => typeof x === 'string').join(' ');
    return text.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  }).reduce((a, b) => a + b, 0);
};

// ==========================================
// 1. ENGLISH CONTENT (en)
// ==========================================
const en_title = "Who Makes the Rolls-Royce? The Hands Behind the Hallmark";
const en_description = "Who makes the Rolls-Royce? Discover the Goodwood artisans behind the hallmark, BMW's engineering support, and rental rates in Dubai at Naqra FZE. Book today.";
const en_content = [
  {
    type: "paragraph",
    text: "<div style=\"background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 Quick Answer:</strong> The modern Rolls-Royce is handcrafted by skilled artisans at the Goodwood factory in West Sussex, England, while utilizing premium drivetrains and technical engineering from its parent company, the BMW Group. In Dubai, you can experience these hand-assembled masterpieces by renting from Naqra FZE. Our fleet pricing starts at <strong>AED 3,800 per day</strong> for the <a href=\"/fleet/ghost\">Rolls-Royce Ghost</a>, <strong>AED 6,500 per day</strong> for the <a href=\"/fleet/cullinan\">Rolls-Royce Cullinan</a>, <strong>AED 5,800 per day</strong> for the <a href=\"/fleet/phantom\">Rolls-Royce Phantom</a>, and <strong>AED 7,500 per day</strong> for the all-electric Spectre. Check our complete <a href=\"/fleet\">Rolls-Royce fleet</a> or contact us via WhatsApp at <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a> to book.</div>"
  },
  {
    type: "paragraph",
    text: "<div style=\"background:#0f0f0f;border:1px solid #2a2a2a;border-left:4px solid #c9a227;padding:20px;margin:32px 0;border-radius:8px;\"><p style=\"color:#c9a227;font-weight:bold;margin:0 0 8px;\">🛎️ From Our Dubai Concierge Operations</p><p style=\"margin:0;line-height:1.8;\">To ensure an flawless rental experience across the UAE, we manage every Rolls-Royce in our collection with the utmost care, reflecting the standards established at the Goodwood estate. When a vehicle is reserved, our operations team conducts a thorough multi-point inspection, checking every detail from the leather surfaces to the dynamic air suspension. We offer complimentary delivery and retrieval directly to your location in Dubai, whether it is a luxury hotel in Downtown Dubai, a private residence in Palm Jumeirah, a corporate office in DIFC, or the VIP terminal at Dubai International Airport (DXB). Our concierge will walk you through the cabin, showing you how to adjust the suspension settings, activate the starlight headliner, and utilize the bespoke vehicle systems. For corporate clients, we coordinate custom weekly and monthly leasing, providing corporate-compliant documentation and invoices.</p></div>"
  },
  {
    type: "heading",
    text: "The Sanctuary at Goodwood: Where Rolls-Royce is Born"
  },
  {
    type: "paragraph",
    text: "On paper, a motor car is a collection of components, steel, and wiring. Yet, a Rolls-Royce is built with a level of care that sets it apart from standard vehicles. The story of who makes the Rolls-Royce begins in the quiet countryside of West Sussex, England. Since 2003, the Goodwood estate near Chichester has served as the global headquarters and sole manufacturing facility for Rolls-Royce Motor Cars. Designed by architect Sir Nicholas Grimshaw, the facility is an eco-friendly architectural marvel, featuring a living green roof that allows it to blend seamlessly into the surrounding West Sussex landscape. Inside this sanctuary, the traditional concept of an automotive factory is completely redefined. There are no noisy conveyor belts, no automated robots welding body panels, and no hurried assembly lines. The atmosphere is quiet, clean, and highly focused, resembling a high-end atelier or art studio rather than an industrial plant. Here, a dedicated team of over two thousand specialists, craftspeople, and engineers work in harmony to build every single vehicle. Each Rolls-Royce is assembled by hand, allowing the brand to maintain its legendary attention to detail and offering clients an infinite degree of personal choice through the Bespoke program. From the initial chassis assembly to the final polish, every step of the creation process is guided by human hands. This slow, deliberate approach ensures that no two vehicles leaving West Sussex are ever identical, giving each one a unique personality and soul that automated production lines simply cannot replicate."
  },
  {
    type: "heading",
    text: "The Hallmark of the Hand: Coachlines, Veneers, and Leathers"
  },
  {
    type: "paragraph",
    text: "The true character of a Rolls-Royce is defined by the handcrafted features that adorn its cabin and exterior, each representing hours of dedicated work by master artisans. The most famous of these features is the single-stroke exterior coachline. Running along the five-meter length of the vehicle's body, this elegant pin-stripe is painted entirely by hand. Mark Court is the resident craftsman at Goodwood who possesses the skill to apply this detail. Using a custom brush made from select squirrel hair, he paints the line in a single, continuous stroke, with no room for error. The paint bonds instantly with the car's lacquer, meaning that any slip of the hand would require the entire vehicle to be repainted. Inside the cabin, the craftsmanship is equally impressive, particularly in the creation of the custom wood veneers. Every piece of wood wood veneer used is sourced from sustainable forests and prepared by hand in the woodshop. Artisans use a technique called book-matching, where consecutive sheets of veneer are laid out to create perfectly symmetrical grain patterns across the dashboard and door panels. These veneers are hand-lacquered and polished to a mirror-like shine, highlighting the natural beauty of the wood. The leather interiors represent another peak of craftsmanship. The tailoring team uses leather sourced exclusively from bulls raised in high-altitude Alpine pastures, where the climate prevents mosquitoes and the lack of barbed wire fences ensures the hides are free from blemishes. These hides are drum-dyed to ensure the color runs deep, and are hand-cut, stitched, and fitted to the seats and dashboard, ensuring a soft, supple feel and absolute structural perfection."
  },
  {
    type: "heading",
    text: "British Artistry Meets German Engineering: The BMW Synergy"
  },
  {
    type: "paragraph",
    text: "While the heart and soul of Rolls-Royce remain rooted in British craftsmanship at Goodwood, its modern success is built on a synergy with its parent company, the BMW Group. BMW acquired the rights to the Rolls-Royce name and logo in 1998, establishing the Chichester facility and taking full control of the brand in 2003. This partnership has allowed Rolls-Royce to combine classic craftsmanship with advanced German engineering and technical support. BMW provides the digital architecture, active safety systems, and drivetrain development that make modern Rolls-Royce vehicles as reliable and easy to drive as they are luxurious. The twin-turbocharged 6.75-litre V12 engine is developed with BMW's engineering support, designed to deliver effortless torque and smooth power in near-total silence. Similarly, the brand's new all-electric platform, showcased in the Spectre, utilizes BMW's latest battery technology and electric motors, adapted to provide the signature silent ride. Furthermore, every model undergoes rigorous climate and durability testing, including high-temperature desert trials in the UAE and sub-zero testing near the Arctic Circle, ensuring that the advanced electronics and drivetrains function flawlessly under any environmental conditions. This backing from a major automotive group ensures that Rolls-Royce cars are not fragile works of art, but robust, reliable vehicles built to be driven daily."
  },
  {
    type: "list",
    items: [
      "<strong>The 6.75L V12 Engine:</strong> Developed with BMW technical support to deliver 563 horsepower (600 hp in Black Badge models) and silent acceleration.",
      "<strong>Bespoke Electronic Architecture:</strong> Integrating advanced active safety, driver assistance, and cabin climate controls seamlessly into the traditional interior.",
      "<strong>Magic Carpet Ride Chassis:</strong> An active air suspension system that reads the road ahead and adjusts the dampers in milliseconds for a smooth ride.",
      "<strong>All-Electric EV Drivetrain:</strong> Developed for the Spectre, combining BMW's battery technology with Goodwood's soundproofing for a silent cabin.",
      "<strong>Extreme Climate Testing:</strong> Rigorous hot-weather desert trials in the UAE to guarantee that the electronics, engine cooling, and climate systems perform flawlessly."
    ]
  },
  {
    type: "heading",
    text: "Experiencing Goodwood Craftsmanship on Dubai Roads"
  },
  {
    type: "paragraph",
    text: "Experiencing the craftsmanship of a Goodwood-built Rolls-Royce along the highways of Dubai is an experience like no other. The acoustic isolation, featuring double-glazed windows and more than 100 kilograms of soundproofing material, creates a quiet sanctuary that completely isolates you from the busy roads of the city. As you drive down Sheikh Zayed Road or park in the plazas of Downtown Dubai, the presence of the vehicle is unmistakable. You can feel the quality of the hand-stitched leather and the perfectly balanced wood veneers as you cruise toward Palm Jumeirah or Dubai Marina. For visitors and residents who want to experience this luxury without the financial commitments of ownership, renting is the ideal solution. Naqra FZE offers access to these hand-assembled motor cars, ensuring they are maintained in pristine condition. To elevate your experience, we also provide a <a href=\"/services/chauffeur\">professional chauffeur service</a>, allowing you to relax in the rear cabin and enjoy the ride while a trained driver handles the traffic, adhering to RTA regulations."
  },
  {
    type: "image",
    src: "/images/blog/makes-rolls-royce-hands-hallmark-inline.webp",
    alt: "Bespoke wood veneer crafting and hand-stitched leather inside a Rolls-Royce cabin",
    caption: "Goodwood craftsmanship meets the modern roads of Dubai."
  },
  {
    type: "heading",
    text: "The Naqra FZE Fleet: Curated Mastery and Daily Rates"
  },
  {
    type: "paragraph",
    text: "Our fleet at Naqra FZE is carefully curated to offer the best of Goodwood’s creations. For daily rentals, we offer the elegant Ghost for AED 3,800, which is perfect for business travel or city drives. If you need more space, the Cullinan SUV is available for AED 6,500 per day. For a modern, sustainable statement, the all-electric Spectre is priced at AED 7,500 per day. The flagship Phantom, which offers the ultimate rear-seat luxury, can be rented for AED 5,800 per day. All rentals require a minimum age of 25 years, a valid UAE driving license (or international driving permit for visitors), and a refundable security deposit. We provide free delivery and collection directly to your hotel, villa, or airport terminal in Dubai. To reserve your vehicle or discuss custom configurations, send a message to our reservations team on WhatsApp at +971558164922."
  },
  {
    type: "heading",
    text: "Frequently Asked Questions"
  },
  {
    type: "heading",
    text: "Who actually owns the Rolls-Royce car company?"
  },
  {
    type: "paragraph",
    text: "Rolls-Royce Motor Cars is a wholly-owned subsidiary of the BMW Group. BMW acquired the rights to the Rolls-Royce name and logo in 1998 and established a new manufacturing facility at Goodwood in 2003. This ownership ensures that the British brand benefits from German engineering and financial backing while maintaining its unique identity and hand-built heritage. It is separate from Rolls-Royce plc, which manufactures aircraft engines."
  },
  {
    type: "heading",
    text: "Where are Rolls-Royce cars manufactured and assembled?"
  },
  {
    type: "paragraph",
    text: "Every single Rolls-Royce motor car is manufactured and hand-assembled exclusively at the home of Rolls-Royce in Goodwood, West Sussex, England. The facility houses the design studios, woodshop, leather shop, paint shop, and assembly lines, ensuring that all aspects of the vehicle's creation are managed by skilled British artisans."
  },
  {
    type: "heading",
    text: "How much does it cost to rent a Rolls-Royce in Dubai?"
  },
  {
    type: "paragraph",
    text: "At Naqra FZE, rental rates start at AED 3,800 per day for the Rolls-Royce Ghost. The luxury SUV Cullinan is available for AED 6,500 per day, the all-electric Spectre for AED 7,500 per day, and the flagship Phantom saloon for AED 5,800 per day. These rates include comprehensive insurance and free delivery within Dubai."
  },
  {
    type: "heading",
    text: "How is the hand-painted coachline created on a Rolls-Royce?"
  },
  {
    type: "paragraph",
    text: "The exterior coachline is painted entirely by hand using a special brush made from select squirrel hair. Mark Court, the resident craftsman at Goodwood, is the only person authorized to apply this detail. It is a single, uninterrupted six-meter line painted on each side of the vehicle, requiring immense focus and precision."
  },
  {
    type: "heading",
    text: "What are the requirements to rent a Rolls-Royce from Naqra FZE?"
  },
  {
    type: "paragraph",
    text: "To rent a Rolls-Royce in Dubai, drivers must be at least 25 years old. UAE residents need a valid UAE driving license and Emirates ID. International visitors must provide their passport, visit visa, and a valid national driving license from their home country or an international driving permit. A refundable security deposit is pre-authorized on a credit card."
  },
  {
    type: "cta",
    text: "Experience the pinnacle of Goodwood craftsmanship on Dubai roads today.",
    buttonText: "Reserve Your Rolls-Royce",
    buttonLink: "/booking"
  }
];

// ==========================================
// 2. ARABIC CONTENT (ar)
// ==========================================
const ar_title = "من يصنع سيارة رولز رويس؟ الأيدي الحرفية وراء التوقيع التاريخي";
const ar_description = "من يصنع رولز رويس؟ اكتشف الحرفية اليدوية في غودوود، والدعم الهندسي من بي إم دبليو، وأسعار تأجير الأسطول الفخم في دبي لدى نقرة (Naqra FZE). تواصل معنا الآن.";
const ar_content = [
  {
    type: "paragraph",
    text: "<div style=\"background:#1a1a1a;border-right:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 الإجابة السريعة:</strong> يتم تصنيع وتجميع سيارات رولز رويس المعاصرة يدوياً بواسطة حرفيين مهرة في مصنع غودوود الواقع في غرب ساسكس بإنجلترا، مع الاستفادة من أنظمة المحركات والهندسة المتقدمة المقدمة من الشركة الأم، مجموعة بي إم دبليو (BMW Group). في دبي، يمكنك تجربة هذه التحف الفنية الفريدة من خلال استئجارها من شركة نقرة (Naqra FZE). تبدأ أسعار الإيجار اليومي من <strong>3,800 درهم إماراتي</strong> لسيارة <a href=\"/ar/fleet/ghost\">رولز رويس جوست</a>، و<strong>6,500 درهم إماراتي</strong> لسيارة <a href=\"/ar/fleet/cullinan\">رولز رويس كولينان</a>، و<strong>5,800 درهم إماراتي</strong> لسيارة الفانتوم الرائدة <a href=\"/ar/fleet/phantom\">رولز رويس فانتوم</a>، و<strong>7,500 درهم إماراتي</strong> لسيارة سبكتر الكهربائية بالكامل. تصفح <a href=\"/ar/fleet\">أسطول رولز رويس</a> بالكامل أو تواصل معنا مباشرة عبر واتساب على الرقم <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a> للحجز.</div>"
  },
  {
    type: "paragraph",
    text: "<div style=\"background:#0f0f0f;border:1px solid #2a2a2a;border-right:4px solid #c9a227;padding:20px;margin:32px 0;border-radius:8px;\"><p style=\"color:#c9a227;font-weight:bold;margin:0 0 8px;direction:rtl;\">🛎️ من عمليات الكونسيرج الخاصة بنا في دبي</p><p style=\"margin:0;line-height:1.8;direction:rtl;\">لضمان تقديم تجربة تأجير فاخرة تليق بعملائنا في دولة الإمارات، نقوم بإدارة كل سيارة رولز رويس في أسطولنا بعناية فائقة تحاكي المعايير الصارمة المعتمدة في مقر غودوود التاريخي. بمجرد تأكيد الحجز، يقوم فريق العمليات التابع لنا بإجراء فحص فني شامل يغطي كافة تفاصيل المركبة، من جودة الأسطح الجلدية الطبيعية وحتى كفاءة نظام التعليق الهوائي الديناميكي. نوفر خدمة تسليم واستلام مجانية للسيارة في أي مكان داخل دبي, بما في ذلك الفنادق الفاخرة في منطقة داون تاون دبي، والفلل الخاصة في نخلة جميرا، والمكاتب التنفيذية في مركز دبي المالي العالمي (DIFC)، بالإضافة إلى مبنى الطيران الخاص بمطار دبي الدولي (DXB). سيقوم موظف الكونسيرج بمرافقتكم لتوضيح كيفية عمل أنظمة المقصورة، مثل ضبط التعليق، وتشغيل سقف النجوم، واستخدام الأنظمة الرقمية المدمجة. لعملاء الشركات، نوفر باقات تأجير أسبوعية وشهرية مخصصة، مع إصدار فواتير ووثائق متوافقة مع المتطلبات المؤسسية بالكامل.</p></div>"
  },
  {
    type: "heading",
    text: "صرح غودوود: مهد ولادة أسطورة رولز رويس"
  },
  {
    type: "paragraph",
    text: "على الورق، تبدو السيارة مجرد تجمع للمكونات الميكانيكية والهياكل المعدنية والأسلاك المعقدة. ومع ذلك، فإن رولز رويس تُصنع بمستوى من الرعاية الحرفية يجعلها في مرتبة مختلفة تماماً عن باقي السيارات في العالم. تبدأ قصة تصنيع هذه التحفة الفنية في الريف الإنجليزي الهادئ بمقاطعة غرب ساسكس. منذ عام 2003، يمثل مقر غودوود بالقرب من مدينة تشيتشستر الموطن العالمي الوحيد ومصنع تجميع سيارات رولز رويس موتور كارز. صُمم هذا الصرح الفريد بواسطة المهندس المعماري الشهير سير نيكولاس غريمشو، ليكون معجزة معمارية صديقة للبيئة، حيث يتميز بسقف مغطى بالنباتات الحية يتيح للمبنى الاندماج بالكامل مع تلال غرب ساسكس الخضراء. داخل هذا الملاذ، يُعاد تعريف المفهوم التقليدي لمصانع السيارات بشكل كامل؛ فلا وجود لخطوط النقل الآلية الصاخبة، ولا للروبوتات الضخمة التي تقوم بلحام الهياكل، ولا لعجلة الإنتاج المتسارعة. تسود المكان أجواء من الهدوء والنظافة والتركيز الشديد، تشبه ورشة لتصميم الأزياء الراقية أو استوديو فني لإنتاج اللوحات الثمينة بدلاً من منشأة صناعية. في هذا المكان، يعمل فريق يضم أكثر من ألفي متخصص من المصممين والمهندسين والحرفيين المهرة بتناغم تام لبناء كل سيارة بشكل فردي. يتم تجميع كل سيارة يدوياً، مما يسمح للعلامة التجارية بالحفاظ на الاهتمام المطلق بالتفاصيل الدقيقة وتقديم إمكانيات تخصيص لا نهائية للعملاء من خلال برنامج التخصيص الفريد (Bespoke). من تجميع الهيكل الأولي وحتى التلميع النهائي باليد، تتم صياغة كل خطوة تحت إشراف الأيدي البشرية الخبيرة. هذا الأسلوب الدقيق والمتأني يضمن عدم تطابق أي سيارتين تخرجان من غرب ساسكس، مما يمنح كل مركبة شخصية فريدة وروحاً خاصة لا يمكن لخطوط الإنتاج المؤتمتة محاكاتها أبداً."
  },
  {
    type: "heading",
    text: "بصمة اليد البشرية: الخطوط الأيقونية، الأخشاب الفاخرة، والجلود المطرزة"
  },
  {
    type: "paragraph",
    text: "تتجسد الفخامة الحقيقية لسيارات رولز رويس في التفاصيل المصنوعة يدوياً والتي تزين مقصورتها وهيكلها الخارجي، حيث تمثل كل تفصيلة ساعات طويلة من العمل الشاق والمبدع على أيدي كبار الحرفيين. ولعل الميزة الأكثر شهرة بين هذه التفاصيل هي خط الهيكل الجانبي المرسوم بضربة فرشاة واحدة (Coachline). يمتد هذا الخط الأنيق على طول الهيكل الخارجي للسيارة البالغ خمسة أمتار، ويتم رسمه يدوياً بالكامل دون استخدام أي آلات. مارك كورت هو الحرفي الوحيد في مصنع غودوود الذي يمتلك المهارة والتركيز اللازمين لتطبيق هذا التفصيل الحاسم. باستخدام فرشاة مخصصة مصنوعة من شعر السنجاب النقي، يقوم برسم الخط في حركة متواصلة واحدة خالية من الأخطاء؛ حيث يلتصق الطلاء فوراً بطلاء السيارة الخارجي، مما يعني أن أي خطأ بسيط قد يتطلب إعادة طلاء الهيكل بالكامل. داخل المقصورة، تظهر الحرفية اليدوية بمستوى لا يقل إبهاراً، لا سيма في صناعة القشرة الخشبية الفاخرة المخصصة. يتم جلب الأخشاب المستخدمة من مصادر مستدامة في غابات عالمية منتقاة، وتجهيزها يدوياً في ورشة الخشب الخاصة بالمعمل. يطبق الحرفيون تقنية مطابقة قشرة الخشب المتطابقة (Book-Matching)، حيث يتم وضع شرائح الخشب المتتالية بطريقة هندسية لخلق أنмаط متناظرة تماماً تمتد عبر لوحة القيادة وألواح الأبواب. يتم طلاء هذه القشور وتلميعها يدوياً عدة مرات للحصول على بريق مرآتي رائع يبرز الجمال الطبيعي لعروق الخشب. وتأتي جلود المقصورة لتمثل قمة أخرى للحرفية اليدوية؛ حيث يستخدم فريق الخياطة جلوداً يتم جلبها حصرياً من ثيران ترعى في المروج الألبية المرتفعة، حيث يمنع المناخ البارد وجود البعوض ويضمن عدم استخدام الأسلاك الشائكة خلو الجلود من العيوب والخدوش الطبيعية. تُصبغ هذه الجلود في براميل خاصة لضمان تغلغل الألوان في الأعماق، ثم تُقص وتُخيط وتُثبت يدوياً على المقاعد ولوحة القيادة لضمان ملمس ناعم وراحة فائقة ومتانة تدوم طويلاً."
  },
  {
    type: "heading",
    text: "حين تلتقي الحرفية البريطانية بالهندسة الألمانية: التناغم مع بي إم دبليو"
  },
  {
    type: "paragraph",
    text: "على الرغم من أن روح رولز رويس وهويتها تظلان مرتبطتين بالحرفية البريطانية العريقة في غودوود، فإن نجاحها الحديث يعتمد بشكل أساسي على التكامل مع الشركة الأم، مجموعة بي إم دبليو (BMW Group). استحوذت بي إم دبليو على حقوق اسم وشعار رولز رويس في عام 1998، وقامت بإنشاء منشأة تشيتشستر وبدأت الإشراف الكامل على العلامة التجارية في عام 2003. أتاح هذا التعاون لسيارات رولز رويس الجمع بين الطابع الحرفي الكلاسيكي والهندسة الألمانية المتقدمة والدعم الفني الفائق. توفر بي إм دبليو الأنظمة الرقمية الحديثة، وأنظمة الأمان النشطة، وتقنيات المحركات التي تجعل سيارات رولز رويس المعاصرة تتميز باعتمادية فائقة وسهولة في القيادة توازي فخامتها الاستثنائية. تم تطوير محرك V12 ذو الشاحن التوربيني المزدوج بسعة 6.75 لتر بالتعاون مع مهندسي بي إم دبليو، ليوفر عزماً هائلاً وقوة جبارة بصمت مطبق. وبالمثل، تستخدم المنصة الكهربائية بالكامل للعلامة التجارية، الممثلة في طراز سبكتر، أحدث تقنيات البطاريات والمحركات الكهربائية من بي إم دبليو، والتي تم تكييفها لتمنح القيادة الصامتة المميزة للعلامة. بالإضافة إلى ذلك، تخضع جميع الموديلات لاختبارات متطرفة لقوة التحمل والمناخ، بما في ذلك اختبارات الطقس الحار في صحراء دولة الإمارات واختبارات درجات الحرارة المتدنية بالقرب من القطب الشمالي، مما يضمن عمل الأنظمة الإلكترونية والمحركات بكفاءة تامة في كافة الظروف الجوية. يضمن هذا الدعم التقني والمالي من مجموعة سيارات عالمية أن سيارات رولز رويس ليست مجرد قطع فنية هشة، بل مركبات قوية ومتينة صُممت لتُقاد يومياً بثقة وأمان."
  },
  {
    type: "list",
    items: [
      "<strong>محرك V12 بسعة 6.75 لتر:</strong> تم تطويره بدعم تقني من بي إم دبليو ليولّد قوة 563 حصاناً (و600 حصان في طرازات Black Badge) مع تسارع صامت بالكامل.",
      "<strong>الأنظمة الرقمية المدمجة:</strong> دمج أنظمة الأمان النشطة، ومساعدة السائق، والتحكم الذكي بالمناخ بسلاسة داخل المقصورة الخشبية والجلدية التقليدية دون تشويه هويتها الكلاسيكية.",
      "<strong>نظام التعليق (Magic Carpet Ride):</strong> نظام تعليق هوائي نشط يقرأ تفاصيل الطريق أمام السيارة ويضبط المساعدين في أجزاء من الثانية لضمان انسيابية فائقة.",
      "<strong>منظومة الدفع الكهربائي بالكامل:</strong> تم تطويرها لطراز سبكتر، لتجمع بين تقنية بطاريات بي إم دبليو المتطورة وأنظمة العزل الصوتي الفائقة لغودوود لتوفير مقصورة صامتة كلياً.",
      "<strong>اختبارات المناخ المتطرفة:</strong> تجارب شاقة في صحراء الإمارات لضمان كفاءة أنظمة التبريد والإلكترونيات والمحرك تحت درجات حرارة الصيف المرتفعة."
    ]
  },
  {
    type: "heading",
    text: "تجربة حرفية غودوود على طرقات دبي الفارهة"
  },
  {
    type: "paragraph",
    text: "إن الاستمتاع بالحرفية اليدوية الفريدة لسيارة رولز رويس المصنوعة في غودوود أثناء القيادة على طرق دبي يمثل تجربة استثنائية بكل المقاييس. يوفر العزل الصوتي الفائق للمقصورة، والذي يضم زجاجاً مزدوجاً وأكثر من 100 كيلوغرام من المواد العازلة، بيئة هادئة تعزلك بالكامل عن صخب الشوارع الخارجية. أثناء القيادة في شارع الشيخ زايد أو ركن السيارة أمام واجهات داون تاون دبي البراقة، تفرض السيارة هيبتها وحضورها الفريد على الجميع. يمكنك أن تلمس جودة الجلد الطبيعي المخيط يدوياً وتفاصيل الخشب المتناظر أثناء توجهك نحو نخلة جميرا أو دبي مارينا. للزوار والمقيمين الذين يتطلعون لتجربة هذه الفخامة المطلقة دون الحاجة لتحمل أعباء وتكاليف الاقتناء والصيانة، يبرز خيار التأجير كحل مثالي ومتاح. توفر شركة نقرة (Naqra FZE) وصولاً سهلاً لهذه التحف الفنية المتحركة، مع ضمان صيانتها بأعلى معايير الجودة الأصلية للمصنع. ولإضفاء مزيد من الراحة والرفاهية على رحلتك، نوفر أيضاً <a href=\"/ar/services/chauffeur\">خدمة السائق الخاص المحترف</a>، مما يتيح لك الاسترخاء في المقاعد الخلفية الفاخرة والاستمتاع بتفاصيل الرحلة بينما يتولى سائقونا المدربون قيادة السيارة والالتزام الكامل بقوانين المرور في دبي."
  },
  {
    type: "image",
    src: "/images/blog/makes-rolls-royce-hands-hallmark-inline.webp",
    alt: "حرفية تصنيع الخشب الفاخر والجلد المخيط يدوياً داخل مقصورة رولز رويس",
    caption: "حرفية غودوود تلتقي مع حداثة طرقات دبي."
  },
  {
    type: "heading",
    text: "أسطول نقرة (Naqra FZE): روائع منتقاة بأسعار معلنة"
  },
  {
    type: "paragraph",
    text: "تم انتقاء أسطولنا في شركة نقرة (Naqra FZE) بعناية فائقة لنقدم لضيوفنا أفضل ما أنتجته أيدي حرفيي غودوود. بالنسبة للتأجير اليومي، نوفر سيارة رولز رويس جوست الأنيقة بسعر يبدأ من 3,800 درهم إماراتي، وهي خيار مثالي لرحلات العمل والتنقل الراقي داخل المدينة. وإذا كنت تبحث عن مساحة أكبر وقوة تلائم الرحلات العائلية، تتوفر سيارة الدفع الرباعي الفاخرة رولز رويس كولينان بمبلغ 6,500 درهم إماراتي لليوم الواحد. ولعشاق الاستدامة والمستقبل الكهربائي الفاخر، نقدم سيارة سبكتر الكهربائية بالكامل بسعر 7,500 درهم إماراتي لليوم. أما سيارة الفانتوم الرائدة، التي توفر قمة الفخامة والخصوصية في المقاعد الخلفية، فيمكن استئجارها بمبلغ 5,800 درهم إماراتي لليوم الواحد. تتطلب جميع عمليات التأجير أن يكون عمر السائق 25 عاماً فما فوق، مع تقديم رخصة قيادة إماراتية سارية للمقيمين (أو رخصة دولية سارية للزوار الدوليين)، بالإضافة إلى تفويض وديعة تأمين مستردة. نوفر خدمة التوصيل واستلام مجاناً إلى مقر إقامتكم أو فندقكم أو المطار في دبي. لحجز سيارتكم المفضلة وتحديد موعد الاستلام، يرجى التواصل مع فريق الحجوزات لدينا مباشرة عبر واتساب على الرقم +971558164922."
  },
  {
    type: "heading",
    text: "الأسئلة الشائعة"
  },
  {
    type: "heading",
    text: "من يملك شركة سيارات رولز رويس فعلياً؟"
  },
  {
    type: "paragraph",
    text: "تعتبر شركة رولز رويس موتور كارز (Rolls-Royce Motor Cars) مملوكة بالكامل لمجموعة بي إم دبليو (BMW Group) الألمانية منذ عام 1998. قامت بي إم دبليو ببناء المنشأة الإنتاجية الحالية في غودوود وتطوير الأسطول تحت إشرافها الكامل منذ عام 2003. يضمن هذا الاستحواذ تمتع العلامة البريطانية بالدعم المالي والهندسي الألماني مع الحفاظ على هويتها المستقلة وحرفيتها اليدوية التاريخية. وهي منفصلة تماماً عن شركة رولز رويس القابضة (Rolls-Royce plc) المتخصصة في صناعة محركات الطائرات."
  },
  {
    type: "heading",
    text: "أين يتم تصنيع وتجميع سيارات رولز رويس؟"
  },
  {
    type: "paragraph",
    text: "يتم تصنيع وتجميع جميع سيارات رولز رويس يدوياً وحصرياً في المقر العالمي للشركة بمدينة غودوود في غرب ساسكس، إنجلترا. تضم هذه المنشأة المتكاملة استوديوهات التصميم، وورش الأخشاب، والجلود، وأقسام الطلاء، وخطوط التجميع النهائية، مما يضمن خروج كل مركبة تحت إشراف وتدقيق دقيق من أمهر الحرفيين البريطانيين."
  },
  {
    type: "heading",
    text: "كم تبلغ تكلفة استئجار سيارة رولز رويس في دبي؟"
  },
  {
    type: "paragraph",
    text: "تبدأ أسعار التأجير لدى شركة نقرة (Naqra FZE) من 3,800 درهم إماراتي في اليوم لسيارة رولز رويس جوست. وتبلغ تكلفة استئجار رولز رويس كولينان 6,500 درهم إماراتي لليوم، وسيارة سبكتر الكهربائية بالكامل 7,500 درهم إماراتي لليوم، بينما تبلغ تكلفة سيارة الفانتوم الرائدة 5,800 درهم إماراتي لليوم الواحد. تشمل هذه الأسعار التأمين الشامل والتوصيل المجاني داخل دبي."
  },
  {
    type: "heading",
    text: "كيف يتم رسم خط الهيكل الجانبي يدوياً في رولز رويس؟"
  },
  {
    type: "paragraph",
    text: "يتم رسم خط الهيكل الجانبي (Coachline) يدوياً بالكامل باستخدام فرشاة مصنوعة خصيصاً من شعر السنجاب الطبيعي. يتولى هذه المهمة الدقيقة حرفي واحد متخصص في مصنع غودوود وهو مارك كورت. يتطلب رسم هذا الخط الممتد بطول ستة أمتار على جانبي السيارة تركيزاً استثنائياً ويداً ثابتة لضمان استقامته التامة وبدون أي عيوب."
  },
  {
    type: "heading",
    text: "ما هي متطلبات استئجار رولز رويس من شركة نقرة (Naqra FZE)؟"
  },
  {
    type: "paragraph",
    text: "يشترط لاستئجار رولز رويس في دبي أن لا يقل عمر المستأجر عن 25 عاماً. يتطلب الحجز للمقيمين تقديم رخصة قيادة إماراتية سارية وبطاقة الهوية الإماراتية. أما للزوار الأجانب، فيلزم تقديم جواز السفر مع تأشيرة الدخول ورخصة القيادة المحلية من بلدهم الأصلي أو رخصة دولية سارية، بالإضافة إلى إجراء تفويض مسبق لوديعة التأمين المستردة عبر بطاقة الائتمان."
  },
  {
    type: "cta",
    text: "اختبر قمة الفخامة الحرفية لسيارات غودوود على طرقات دبي اليوم.",
    buttonText: "احجز سيارتك الرولز رويس الآن",
    buttonLink: "/booking"
  }
];

// ==========================================
// 3. RUSSIAN CONTENT (ru)
// ==========================================
const ru_title = "Кто создает Rolls-Royce? Мастера за легендарным качеством";
const ru_description = "Кто создает Rolls-Royce? Узнайте о мастерах из Гудвуда, инженерной поддержке BMW и ценах на аренду премиум-авто в Дубае от Naqra FZE. Забронируйте сегодня.";
const ru_content = [
  {
    type: "paragraph",
    text: "<div style=\"background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 Быстрый ответ:</strong> Современные автомобили Rolls-Royce собираются вручную высококлассными мастерами на заводе в Гудвуде (Западный Суссекс, Англия) с использованием передовых силовых агрегатов и инженерных разработок материнской компании BMW Group. В Дубае вы можете арендовать эти шедевры ручной работы в компании Naqra FZE. Стоимость аренды начинается от <strong>3 800 AED в сутки</strong> за <a href=\"/ru/fleet/ghost\">Rolls-Royce Ghost</a>, <strong>6 500 AED в сутки</strong> за внедорожник <a href=\"/ru/fleet/cullinan\">Rolls-Royce Cullinan</a>, <strong>5 800 AED в сутки</strong> за флагманский седан <a href=\"/ru/fleet/phantom\">Rolls-Royce Phantom</a> и <strong>7 500 AED в день</strong> за полностью электрический Spectre. Ознакомьтесь с полным <a href=\"/ru/fleet\">парком Rolls-Royce</a> или свяжитесь с нами через WhatsApp по телефону <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a> для бронирования.</div>"
  },
  {
    type: "paragraph",
    text: "<div style=\"background:#0f0f0f;border:1px solid #2a2a2a;border-left:4px solid #c9a227;padding:20px;margin:32px 0;border-radius:8px;\"><p style=\"color:#c9a227;font-weight:bold;margin:0 0 8px;\">🛎️ От службы консьерж-сервиса в Дубае</p><p style=\"margin:0;line-height:1.8;\">Чтобы гарантировать безупречный опыт аренды в ОАЭ, мы управляем каждым автомобилем Rolls-Royce в нашей коллекции с максимальной заботой, полностью соответствуя стандартам, установленным в поместье Гудвуд. При бронировании автомобиля наша операционная команда проводит детальную техническую инспекцию по многим пунктам, проверяя все элементы от кожаной отделки салона до активной пневматической подвески. Мы предоставляем бесплатную доставку и возврат автомобиля в любую точку Дубая, будь то роскошный отель в Даунтауне, частная вилла на Пальм-Джумейра, бизнес-центр в DIFC или VIP-терминал Международного аэропорта Дубая (DXB). Наш консьерж подробно покажет вам функции салона, объяснит настройки подвески, включит звездное небо и поможет настроить мультимедийные системы. Для корпоративных клиентов мы предлагаем специальные условия еженедельной и ежемесячной аренды с предоставлением всех необходимых закрывающих документов.</p></div>"
  },
  {
    type: "heading",
    text: "Святилище в Гудвуде: где рождается Rolls-Royce"
  },
  {
    type: "paragraph",
    text: "На бумаге любой современный автомобиль — это лишь совокупность механических деталей, листового металла, электрических плат и сложной проводки. Однако Rolls-Royce создается с таким уровнем внимания, заботы и уважения к традициям, который ставит его в совершенно особый, недосягаемый класс. История создания Rolls-Royce начинается в тихой сельской местности Западного Суссекса на юге Англии. С 2003 года поместье Гудвуд около Чичестера служит глобальной штаб-квартирой и единственным производственным предприятием Rolls-Royce Motor Cars. Спроектированный знаменитым британским архитектором сэром Николасом Гримшоу, этот комплекс является экологическим шедевром с живой зеленой крышей, которая позволяет зданиям полностью гармонировать с холмистым английским ландшафтом и минимизировать тепловые потери. Внутри этого святилища полностью переосмылена традиционная концепция автозавода. Здесь вы не услышите шума конвейерных лент, не увидите громоздких роботов, сваривающих панели кузова, и суетливых рабочих. Атмосфера тихая, чистая и максимально сосредоточенная, больше напоминающая высококлассное ателье мод или художественную студию, нежели промышленный объект. В этих стенах трудятся более двух тысяч дизайнеров, инженеров и мастеров, работающих в абсолютном согласии. Каждый автомобиль собирается исключительно вручную, что позволяет бренду сохранять бескомпромиссное качество деталей и предоставлять клиентам безграничные возможности индивидуализации в рамках программы Bespoke. От сборки шасси до финальной ручной полировки кузова — каждый этап создания контролируется человеческими руками. Такой медленный, вдумчивый и осознанный подход гарантирует, что ни один автомобиль, покидающий Гудвуд, не будет точной копией другого, приобретая собственную уникальную индивидуальность и душу."
  },
  {
    type: "heading",
    text: "Отличительные черты ручной работы: линии кузова, шпон и кожа"
  },
  {
    type: "paragraph",
    text: "Истинная роскошь Rolls-Royce кроется в деталях ручной работы, украшающих его кузов и интерьер, на создание каждого из которых уходят десятки часов кропотливого труда мастеров. Пожалуй, самая известная деталь экстерьера — это тонкая декоративная линия на кузове (Coachline). Проходящая вдоль всего пятиметрового кузова автомобиля, эта линия наносится полностью вручную без использования трафаретов или автоматических лент. Марк Корт — единственный мастер на заводе в Гудвуде, обладающий достаточным навыком и твердостью руки для выполнения этой задачи. Используя специальную кисть из ворса белки, он наносит линию одним непрерывным движением; краска мгновенно сцепляется с лаком автомобиля, поэтому малейшая ошибка потребует полной перекраски кузова. Внутри салона уровень мастерства столь же высок, особенно в изготовлении деревянных панелей. Вся древесина поставляется из возобновляемых лесов и обрабатывается вручную. Мастера применяют метод симметричного подбора шпона (Book-Matching), при котором последовательные листы дерева укладываются так, чтобы создать идеально зеркальные узоры на передней панели и дверях. Панели покрываются лаком и полируются вручную до зеркального блеска, подчеркивая естественную красоту волокон дерева. Кожаная отделка также представляет собой вершину ручного труда; мастера используют шкуры быков, выращенных исключительно на высокогорных альпийских пастбищах, где прохладный климат исключает появление насекомых, а отсутствие заборов из колючей проволоки гарантирует отсутствие шрамов и дефектов. Шкуры окрашиваются по специальной технологии, после чего раскраиваются, сшиваются и натягиваются вручную на сиденья и переднюю панель, обеспечивая непревзойденную мягкость и долговечность."
  },
  {
    type: "heading",
    text: "Британское искусство и немецкая инженерия: синергия с BMW"
  },
  {
    type: "paragraph",
    text: "Несмотря на то, что дух и наследие Rolls-Royce остаются неразрывно связанными с британским мастерством в Гудвуде, его современный технический успех во многом обусловлен партнерством с материнской компанией BMW Group. Немецкий концерн приобрел права на имя и марку Rolls-Royce в 1998 году, открыв производство в Чичестере в 2003 году. Это партнерство позволило бренду объединить классический британский шарм с передовыми разработками и финансовой стабильностью BMW. Материнская компания поставляет цифровую архитектуру, активные электронные системы безопасности и элементы привода, которые делают современные автомобили Rolls-Royce столь же надежными и простыми в повседневном управлении, сколь и комфортными. Знаменитый 6,75-литровый двигатель V12 с двойным турбонаддувом был доработан при инженерной поддержке BMW для обеспечения колоссального крутящего момента в абсолютной тишине. Новейшая электрическая платформа, дебютировавшая на Spectre, также использует передовую технологию батарей и электродвигателей BMW, адаптированную под фирменный плавный ход марки. Кроме того, все прототипы проходят строгие климатические испытания в пустынях ОАЭ при высоких температурах и за Полярным кругом, гарантируя безупречную работу сложной электроники в любых условиях. Такая поддержка гарантирует, что Rolls-Royce — это не капризный выставочный экспонат, а надежный автомобиль для ежедневных поездок."
  },
  {
    type: "list",
    items: [
      "<strong>Двигатель V12 объемом 6.75 л:</strong> Разработан при поддержке мотористов BMW, выдает 563 л.с. (600 л.с. в версиях Black Badge) для бесшумного и мгновенного ускорения.",
      "<strong>Цифровая бортовая сеть:</strong> Интеграция современных систем безопасности, ассистентов вождения и климат-контроля без ущерба для классического дизайна салона.",
      "<strong>Подвеска Magic Carpet Ride:</strong> Активная пневмоподвеска, которая сканирует дорогу перед машиной и за миллисекунды меняет жесткость амортизаторов для идеальной плавности.",
      "<strong>Электрическая силовая установка:</strong> Создана для купе Spectre на базе батарейных технологий BMW, обеспечивая бесшумный запас хода до 530 км.",
      "<strong>Ресурсные тесты в ОАЭ:</strong> Испытания в условиях экстремальной жары пустыни для гарантии надежности охлаждения двигателя и бесперебойной работы кондиционера."
    ]
  },
  {
    type: "heading",
    text: "Ощущение мастерства Гудвуда на дорогах Дубая"
  },
  {
    type: "paragraph",
    text: "Ощутить все величие ручной работы Rolls-Royce на автомагистралях Дубая — это ни с чем не сравнимое удовольствие. Превосходная шумоизоляция, состоящая из двойных акустических стекол и более 100 кг изоляционных материалов, создает внутри салона тихую капсулу, отсекающую вас от внешнего мира. Во время движения по шоссе Шейха Зайда или на парковке у Burj Al Arab ваш статус подчеркивается без лишних слов. Приятная текстура мягкой кожи и симметричный деревянный шпон радуют глаз во время поездки на Пальм-Джумейра или в район Дубай Марина. Для туристов и жителей эмирата, желающих прикоснуться к этой роскоши без необходимости покупки и содержания автомобиля, идеальным решением становится аренда. Компания Naqra FZE предоставляет доступ к этим шедеврам автомобильного искусства в безупречном техническом состоянии. Чтобы сделать вашу поездку максимально расслабленной, мы также предлагаем услуги <a href=\"/ru/services/chauffeur\">профессионального личного водителя</a>, что позволит вам наслаждаться каждой минутой путешествия на заднем сиденье, доверив управление опытному специалисту, отлично знающему дорожные правила RTA."
  },
  {
    type: "image",
    src: "/images/blog/makes-rolls-royce-hands-hallmark-inline.webp",
    alt: "Процесс ручной обработки шпона и кожаных элементов в салоне Rolls-Royce",
    caption: "Мастерство Гудвуда встречается с современной дорожной сетью Дубая."
  },
  {
    type: "heading",
    text: "Автопарк Naqra FZE: кураторское мастерство и суточные тарифы"
  },
  {
    type: "paragraph",
    text: "Наш автопарк в компании Naqra FZE составлен с большим вниманием, чтобы предложить гостям лучшие творения мастеров из Гудвуда. Для ежедневных поездок мы предлагаем элегантный седан Ghost по цене от 3 800 AED в день. Если вам требуется простор для всей семьи, отличным выбором станет Cullinan за 6 500 AED в сутки. Для тех, кто предпочитает современные экологичные технологии, доступен электрический Spectre по цене 7 500 AED в сутки. Флагманский седан Phantom, предлагающий абсолютный уровень приватности на заднем ряду, можно арендовать за 5 800 AED в день. Для аренды любого автомобиля водитель должен быть не моложе 25 лет, иметь действующее водительское удостоверение ОАЭ (или международное удостоверение для туристов), а также кредитную карту для холдирования возвратного депозита. Мы бесплатно доставим и заберем автомобиль прямо у вашего отеля, виллы или терминала аэропорта. Для резервирования автомобиля свяжитесь с нашим отделом бронирования по WhatsApp: +971558164922."
  },
  {
    type: "heading",
    text: "Часто задаваемые вопросы"
  },
  {
    type: "heading",
    text: "Кто на самом деле владеет автомобильной компанией Rolls-Royce?"
  },
  {
    type: "paragraph",
    text: "Автомобильная компания Rolls-Royce Motor Cars является стопроцентным дочерним предприятием немецкого концерна BMW Group с 1998 года. BMW построила современный завод в Гудвуде и полностью перезапустила бренд в 2003 году. Это владение гарантирует британской марке доступ к передовым немецким технологиям и инвестициям при сохранении ее исторической идентичности и традиций ручной сборки. Данная компания полностью независима от Rolls-Royce plc, производящей авиационные двигатели."
  },
  {
    type: "heading",
    text: "Где производятся и собираются автомобили Rolls-Royce?"
  },
  {
    type: "paragraph",
    text: "Все без исключения автомобили Rolls-Royce собираются вручную на единственном заводе марки в Гудвуде, Западный Суссекс, Англия. На этой сборочной площадке расположены дизайн-студии, цех деревообработки, кожевенный цех, покрасочные камеры и сборочные линии, что позволяет контролировать каждый шаг создания шедевра."
  },
  {
    type: "heading",
    text: "Сколько стоит аренда Rolls-Royce в Дубае?"
  },
  {
    type: "paragraph",
    text: "В компании Naqra FZE посуточный тариф на аренду Rolls-Royce Ghost начинается от 3 800 AED. Внедорожник Cullinan доступен по цене от 6 500 AED в день, электрический Spectre — от 7 500 AED в сутки, а флагманский Phantom — от 5 800 AED за один день аренды. В указанную стоимость включена комплексная страховка и доставка автомобиля по Дубаю."
  },
  {
    type: "heading",
    text: "Как создается наносимая вручную линия кузова на Rolls-Royce?"
  },
  {
    type: "paragraph",
    text: "Декоративная линия кузова (Coachline) наносится вручную с помощью специальной кисти из ворса белки. На заводе в Гудвуде эту тонкую работу выполняет единственный мастер — Марк Корт. Процесс требует колоссальной концентрации и твердости рук, так как краска сразу схватывается с лаком, не оставляя возможности исправить ошибку."
  },
  {
    type: "heading",
    text: "Каковы требования для аренды Rolls-Royce в Naqra FZE?"
  },
  {
    type: "paragraph",
    text: "Для аренды Rolls-Royce в Дубае минимальный возраст водителя составляет 25 лет. Резидентам ОАЭ понадобятся водительское удостоверение ОАЭ и Emirates ID. Туристам необходимо предоставить оригинал паспорта, туристическую визу и национальное водительское удостоверение или МВУ. Также требуется блокировка возвратного страхового депозита на кредитной карте."
  },
  {
    type: "cta",
    text: "Оцените вершину британского автомобильного искусства на дорогах Дубая уже сегодня.",
    buttonText: "Забронировать Rolls-Royce",
    buttonLink: "/booking"
  }
];

// ==========================================
// 4. VALIDATE WORD COUNTS BEFORE WRITING
// ==========================================
const en_wc = countWords(en_content);
const ar_wc = countWords(ar_content);
const ru_wc = countWords(ru_content);

console.log('--- Word Count Validation ---');
console.log(`English (en) Word Count: ${en_wc} (target >= 1500)`);
console.log(`Arabic (ar) Word Count: ${ar_wc} (target >= 1500)`);
console.log(`Russian (ru) Word Count: ${ru_wc} (target >= 1500)`);

if (en_wc < 1500 || ar_wc < 1500 || ru_wc < 1500) {
  console.error('❌ Error: Word count target of 1500 words per language not met!');
  process.exit(1);
}
console.log('✅ Word count target met for all languages.');

// ==========================================
// 5. ASSEMBLE JSON AND WRITE FILE
// ==========================================
const finalJson = {
  en: {
    title: en_title,
    description: en_description,
    author: "Ahmed Salem",
    date: "2026-08-30",
    readTime: "10 min read",
    category: "Guides",
    image: `/images/blog/${slug}-cover.jpg`,
    content: en_content,
    relatedArticles: [
      "rolls-royce-built-goodwood-home-luxury",
      "where-are-rolls-royce-cars-made",
      "who-makes-rolls-royce-engines"
    ]
  },
  ar: {
    title: ar_title,
    description: ar_description,
    author: "Ahmed Salem",
    date: "2026-08-30",
    readTime: "10 دقائق قراءة",
    category: "Guides",
    image: `/images/blog/${slug}-cover.jpg`,
    content: ar_content,
    relatedArticles: [
      "rolls-royce-built-goodwood-home-luxury",
      "where-are-rolls-royce-cars-made",
      "who-makes-rolls-royce-engines"
    ]
  },
  ru: {
    title: ru_title,
    description: ru_description,
    author: "Ahmed Salem",
    date: "2026-08-30",
    readTime: "10 мин чтения",
    category: "Guides",
    image: `/images/blog/${slug}-cover.jpg`,
    content: ru_content,
    relatedArticles: [
      "rolls-royce-built-goodwood-home-luxury",
      "where-are-rolls-royce-cars-made",
      "who-makes-rolls-royce-engines"
    ]
  },
  publishAt: "2026-08-30T04:03:11+04:00"
};

fs.mkdirSync(path.dirname(targetPath), { recursive: true });
fs.writeFileSync(targetPath, JSON.stringify(finalJson, null, 2), 'utf8');
console.log(`✅ JSON file successfully written to: ${targetPath}`);

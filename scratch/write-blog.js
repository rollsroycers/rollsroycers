const fs = require('fs');
const path = require('path');

const slug = 'started-rolls-royce-1904-meeting-began-all';
const targetPath = path.join(__dirname, '../src/data/blog', `${slug}.json`);

// Helper to count words in the content block
function countWords(blocks) {
  return blocks.reduce((sum, b) => {
    const text = [b.text, ...(b.items || [])].filter(x => typeof x === 'string').join(' ');
    const cleaned = text.replace(/<[^>]+>/g, ' ');
    const count = cleaned.split(/\s+/).filter(Boolean).length;
    return sum + count;
  }, 0);
}

const enContent = [
  {
    "type": "paragraph",
    "text": "There are names in the history of industry that merely designate products, and then there are names that become the absolute measure of human capability. When connoisseurs and collectors ask who started Rolls-Royce, they are rarely looking for a dry date on a commercial registry or a simple filing in a government archive. The alliance that defined the zenith of luxury motoring was not born in a sterile solicitor's office, nor was it the result of cold corporate planning. It was sparked by a legendary meeting in May 1904, in a quiet, wood-paneled dining room of a hotel in Manchester, where two men from entirely opposite ends of British society sat down to discuss a shared obsession. What emerged from that fateful encounter was not just a car company, but an enduring philosophy of mechanical perfection and aesthetic refinement that has survived, untarnished, for over a century. Today, as our modern fleet of hand-assembled motor cars glides through the sun-drenched, hyper-modern boulevards of Dubai, we are constantly reminded that every single mile we travel is built upon that original, uncompromising promise to construct the best motor cars in the world, which you can experience firsthand through our <a href=\"/fleet\">exclusive rental collection</a>."
  },
  {
    "type": "paragraph",
    "text": "<div style=\"background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 Quick Answer:</strong> Rolls-Royce was started by the historic partnership of visionary engineer <strong>Henry Royce</strong> and elite salesman <strong>Charles Rolls</strong>, following their famous meeting on May 4, 1904, at the Midland Hotel in Manchester, guided by business manager <strong>Claude Johnson</strong>. Today, you can rent their modern descendants in Dubai starting at <strong>AED 3,800 per day</strong>. Contact Naqra FZE on WhatsApp at <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a> to book.</div>"
  },
  {
    "type": "heading",
    "text": "The Midland Hotel Meeting: The Spark of May 1904"
  },
  {
    "type": "paragraph",
    "text": "On the afternoon of May 4, 1904, the dining room of Manchester's Midland Hotel became the unlikely birthplace of an empire. The meeting was arranged by Henry Edmunds, a mutual acquaintance and pioneering electrical engineer who possessed the rare foresight to see that two men from completely different worlds were searching for the exact same thing. Charles Rolls, a graduate of Cambridge and the son of Lord Llangattock, was running a fashionable motor dealership in London, C.S. Rolls & Co. He was deeply frustrated by the loud, vibrating, and unreliable French imports that dominated the British market and was desperate to find a high-quality, British-built car that could bear his name. Henry Royce, on the other hand, was a practical, self-taught engineer who had built a small, two-cylinder 10 hp car in his Manchester workshop. Royce's car did not shake, it did not smoke, and it did not roar; it simply hummed with a quiet, mechanical precision that was unheard of in 1904. When Rolls took the vehicle for a test drive, he realized within minutes that he had found his answer. The aristocrat agreed to sell every car the engineer could build, provided they were sold under the name of Rolls-Royce. This simple handshake agreement laid the foundations for a century of luxury. It was a partnership based not on marketing convenience, but on a shared understanding that mechanical noise was a design flaw, and that silence was the ultimate luxury, a standard that we maintain in our fleet today."
  },
  {
    "type": "heading",
    "text": "The Alchemy of Opposites: Henry Royce and Charles Rolls"
  },
  {
    "type": "paragraph",
    "text": "To understand the magic that makes a Rolls-Royce feel different from any other vehicle, one must look at the contrasting geniuses of the two men who gave it their names. Charles Rolls was a man of the air and the open road. He was a pioneer aviator, a competitive balloonist, and a daring motorist who loved the thrill of speed. He understood the aristocratic market in London, knew exactly what the wealthy elite desired, and possessed the capital and connections to build a global brand. Henry Royce, by contrast, was a man of the workshop. Born into poverty and largely self-taught, he had started his working life as a newspaper boy before securing an apprenticeship with the Great Northern Railway. Royce was a perfectionist to a degree that bordered on the obsessive; he would famously work for days without sleep, subsisting on milk and bread while refining a single piston or bearing. His motto, 'Strive for perfection in everything you do,' became the guiding philosophy of the company. Rolls brought the vision, the marketing genius, and the aristocratic client base, while Royce provided the tireless, uncompromising engineering standards. Without Rolls' business acumen, Royce's cars would have remained a local secret; without Royce's engineering brilliance, Rolls would have had nothing unique to sell. Their alliance was a perfect harmony of commerce and craft."
  },
  {
    "type": "heading",
    "text": "The Silver Ghost and Claude Johnson: Defining the Legend"
  },
  {
    "type": "paragraph",
    "text": "While the names Rolls and Royce are immortalized on the radiator grille, the marque might not have survived without the genius of a third man: Claude Johnson. Often described as 'the hyphen in Rolls-Royce,' Johnson was the company's first managing director and the commercial mastermind who turned the founders' talents into a sustainable empire. A close associate of Rolls, Johnson possessed brilliant organizational skills and an innate understanding of public relations. He managed the business with a steady hand, organizing the famous reliability trials that proved the marque's mechanical superiority. In 1906, the newly incorporated company introduced the 40/50 hp model, later known as the Silver Ghost, featuring an exceptionally smooth six-cylinder engine—a direct ancestor of the V12 engines that power our fleet on the roads of Dubai today. To demonstrate its reliability, the company entered the Silver Ghost into a 14,371-mile non-stop reliability trial in 1907. Under strict observation, the car drove back and forth between London and Glasgow day and night, completing the entire distance without a single mechanical breakdown. When the vehicle was dismantled afterward, the independent inspectors found virtually no measurable wear on any of its moving parts. The motoring press had no choice but to declare it 'the best car in the world.' It was Johnson who coined this phrase, ensuring that the company's branding reflected the quiet elegance of Royce's engineering. Without his stewardship, the partnership might have remained a brilliant but short-lived experiment."
  },
  {
    "type": "list",
    "items": [
      "<strong>1904:</strong> The historic meeting between Charles Rolls and Henry Royce at the Midland Hotel in Manchester.",
      "<strong>1906:</strong> The official incorporation of Rolls-Royce Limited and the launch of the legendary Silver Ghost.",
      "<strong>Modern Ghost:</strong> The balanced luxury saloon suitable for business and daily drives, available in our <a href=\"/fleet\">exclusive fleet</a> starting at <a href=\"/fleet/ghost\">AED 3,800 per day</a>.",
      "<strong>Modern Cullinan:</strong> The absolute pinnacle of luxury SUVs, perfect for presence and family trips, starting at <a href=\"/fleet/cullinan\">AED 6,500 per day</a>.",
      "<strong>Modern Spectre:</strong> The first all-electric Rolls-Royce coupe, combining silent motoring with futuristic design, starting at AED 7,500 per day.",
      "<strong>Modern Phantom:</strong> The legendary flagship saloon with ultimate rear-cabin luxury, starting at <a href=\"/fleet/phantom\">AED 5,800 per day</a>."
    ]
  },
  {
    "type": "heading",
    "text": "The Goodwood Era: Preserving Handcrafted Legacy Under BMW"
  },
  {
    "type": "paragraph",
    "text": "As the automotive world transitioned into the modern era, the challenge was to preserve the unique handcrafted legacy of Rolls-Royce while introducing modern technology. This balance was achieved in 1998, when the BMW Group acquired the rights to Rolls-Royce Motor Cars. In 2003, BMW opened the brand's new headquarters and manufacturing facility at Goodwood, West Sussex. Built on the estate of the Duke of Richmond, the Goodwood facility was designed to be environmentally friendly, blending seamlessly into the English countryside. Rather than setting up a mass-production line, BMW preserved the traditional handcrafting methods that Royce had championed. At Goodwood, every vehicle is built to order, with skilled artisans spending hundreds of hours on each car. The wood shop matches veneers from a single tree to ensure grain consistency, while the leather shop hand-stitches hides from bulls raised in high-altitude pastures where there are no barbed-wire fences to scar the leather. This meticulous attention to detail ensures that every modern motor car remains a bespoke work of art. The BMW Group's stewardship has allowed Rolls-Royce to combine German electronic and chassis engineering with traditional British craft, ensuring that the legacy of 1904 remains alive in the twenty-first century."
  },
  {
    "type": "image",
    "src": "/images/blog/started-rolls-royce-1904-meeting-began-all-inline.webp",
    "alt": "Close-up of the early entwined RR monogram badge on a 1904 Rolls-Royce model.",
    "caption": "The entwined RR monogram: a symbol of motoring perfection since the marque's earliest years."
  },
  {
    "type": "heading",
    "text": "Renting a 120-Year Legacy with Naqra FZE in Dubai"
  },
  {
    "type": "paragraph",
    "text": "There is a profound connection between the quiet country lanes of West Sussex where these cars are born and the sweeping, multi-lane highways of Dubai. When you rent a vehicle from Naqra FZE, you are not merely renting a luxury car; you are stepping into a 120-year-old lineage of motoring perfection. Imagine driving a modern Spectre or a flagship Phantom down Sheikh Zayed Road, past the architectural marvels of the Museum of the Future and the towering presence of the Burj Khalifa. The contrast between the historical 10 hp motor of 1904 and the modern V12 and electric powerhouses in our fleet is vast, yet the fundamental feeling remains identical. The absolute isolation from road noise, the sensation of floating over the asphalt on our active air suspension, and the presence that commands respect at every valet entrance in Downtown Dubai or Jumeirah Beach are exactly what Rolls and Royce set out to achieve. For those landing at Dubai International Airport (DXB), our professional <a href=\"/services/chauffeur\">chauffeur service</a> provides a seamless, VIP transition from the sky to the road. Whether you are visiting for business in the Financial Centre (DIFC) or celebrating a wedding, our fleet offers the ultimate statement of success. By offering these modern masterpieces, we allow our clients to experience a legendary heritage in the most dynamic city in the world."
  },
  {
    "type": "heading",
    "text": "Frequently Asked Questions"
  },
  {
    "type": "heading",
    "text": "Who were the original founders of Rolls-Royce?"
  },
  {
    "type": "paragraph",
    "text": "The original founders of Rolls-Royce were Henry Royce, an exceptionally talented engineer, and Charles Rolls, a prominent London car dealer and adventurer. The partnership was formally supported by Claude Johnson, who served as the first managing director. Johnson is historically referred to as 'the hyphen in Rolls-Royce' due to his vital role in organizing the business, directing the brand's early publicity campaigns, and turning the founders' individual talents into a unified, internationally recognized symbol of prestige and mechanical perfection."
  },
  {
    "type": "heading",
    "text": "What happened at the Midland Hotel meeting on May 4, 1904?"
  },
  {
    "type": "paragraph",
    "text": "On May 4, 1904, Charles Rolls and Henry Royce met for the first time at the Midland Hotel in Manchester, England. Arranged by their mutual friend Henry Edmunds, the meeting allowed Rolls to inspect and test-drive the quiet, smooth two-cylinder 10 hp car that Royce had engineered. Intrigued by its mechanical silence and lack of vibration, Rolls agreed on the spot to sell all the cars Royce could produce, establishing the handshake agreement that gave birth to the legendary Rolls-Royce brand."
  },
  {
    "type": "heading",
    "text": "Who was Claude Johnson and why is he called the hyphen in Rolls-Royce?"
  },
  {
    "type": "paragraph",
    "text": "Claude Johnson was the company's first managing director and the business mastermind who structured the commercial operations of the marque. He is known as 'the hyphen in Rolls-Royce' because his organizational skills, public relations genius, and strategic vision held the partnership together. Johnson protected Henry Royce from commercial pressures so he could focus on pure engineering, managed Charles Rolls' restless adventurous spirit, and directed the legendary reliability trials that established the marque's global reputation."
  },
  {
    "type": "heading",
    "text": "How did the Silver Ghost establish the brand's reputation for reliability?"
  },
  {
    "type": "paragraph",
    "text": "The Silver Ghost established the brand's reputation in 1907 by completing a rigorous 14,371-mile non-stop reliability trial under independent supervision by the Royal Automobile Club. The car drove continuously between London and Glasgow without a single mechanical failure. Upon disassembly, inspectors found virtually no measurable wear on any of the moving parts, prompting the motoring press to declare it the best car in the world and cementing the brand's association with mechanical durability."
  },
  {
    "type": "heading",
    "text": "How can I rent a modern Rolls-Royce in Dubai through Naqra FZE?"
  },
  {
    "type": "paragraph",
    "text": "You can rent a modern Rolls-Royce in Dubai through Naqra FZE by selecting from our premium fleet, which includes the Ghost at AED 3,800/day, the Cullinan at AED 6,500/day, the all-electric Spectre at AED 7,500/day, and the flagship Phantom at AED 5,800/day. Drivers must be at least 25 years old and hold a valid UAE driving license or an international driving permit. We provide complimentary delivery to major locations including DXB Airport. Contact us via WhatsApp at <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a> to arrange your booking."
  },
  {
    "type": "cta",
    "text": "Ready to step into motoring history? Reserve your Rolls-Royce today.",
    "buttonText": "Reserve Your Rolls-Royce",
    "buttonLink": "/booking"
  }
];

const arContent = [
  {
    "type": "paragraph",
    "text": "ثمة أسماء في تاريخ الصناعة لا تكتفي بوضع ملصقات تجارية على منتجاتها، بل تتحول بمرور الزمن إلى مقياس مطلق للقدرة الميكانيكية والرفاهية البشرية. عندما يتساءل النخبة والمهتمون عن مؤسس رولز رويس، فإنهم نادرًا ما يبحثون عن تاريخ جاف في سجل تجاري بارد أو وثيقة تأسيس منسية في أرشيف حكومي قديم. إن هذا التحالف الفريد الذي صاغ القمة المطلقة في عالم السيارات الفاخرة لم يولد في مكتب محاماة تقليدي، ولم يكن نتاج تخطيط مؤسسي بارد؛ بل بدأ بلقاء تاريخي استثنائي في مايو من عام 1904، داخل صالون هادئ مبطن بالخشب في فندق ميدلاند العريق بمدينة مانشستر الإنجليزية، حيث التقى رجلان من خلفيتين اجتماعيتين مختلفتين تماماً لمناقشة هوس مشترك بالكمال الهندسي. لم تسفر تلك المحادثة الهادئة عن مجرد شركة سيارات جديدة، بل أرست فلسفة هندسية وجمالية راسخة صمدت لأكثر من قرن من الزمان دون أن تفقد بريقها. واليوم، بينما ينساب أسطولنا الحديث من السيارات المجمعة يدويًا عبر شوارع دبي الساحرة المضاءة بأحدث المعالم العالمية، نتذكر دائماً أن كل ميل نقطعه يعتمد على ذلك الوعد الأصيل وغير المساوم لبناء أفضل السيارات في العالم، وهو ما نتطلع لتقديمه لكم من خلال <a href=\"/ar/fleet\">مجموعتنا الحصرية للإيجار</a>."
  },
  {
    "type": "paragraph",
    "text": "<div style=\"background:#1a1a1a;border-right:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;direction:rtl;\"><strong>💡 الإجابة السريعة:</strong> تأسست شراكة رولز رويس بلقاء تاريخي جمع المهندس العبقري <strong>هنري رويس</strong> والتاجر الطموح <strong>تشارلز رولز</strong> في <strong>4 مايو 1904</strong> بفندق ميدلاند في مانشستر، بإدارة المدير التجاري الفذ <strong>كلود جونسون</strong>. وتوفر نقرة إف زد إي في دبي تجربة هذا الإرث العريق من خلال أسطولها الفاخر بأسعار تبدأ من <strong>3,800 درهم إماراتي يومياً</strong>. للتواصل والحجز الفوري عبر واتساب <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a>.</div>"
  },
  {
    "type": "heading",
    "text": "اللقاء التاريخي في فندق ميدلاند: شرارة مايو 1904"
  },
  {
    "type": "paragraph",
    "text": "في بعد ظهر يوم الرابع من مايو لعام 1904، كان صالون الطعام بفندق ميدلاند في مانشستر شاهداً على ولادة إمبراطورية ميكانيكية غيرت وجه التاريخ. تم تنسيق هذا اللقاء التاريخي بواسطة هنري إدموندز، وهو مهندس كهربائي رائد وصديق مشترك للطرفين، كان يمتلك نظرة ثاقبة جعلته يدرك أن هذين الرجلين يمثلان نصفين لجسد واحد يبحث عن الكمال الميكانيكي. كان تشارلز رولز، خريج جامعة كامبريدج العريقة وابن اللورد لانغاتوك، يدير معرضاً فخماً لبيع السيارات في لندن تحت اسم C.S. Rolls & Co، وكان يشعر بإحباط عميق من الأصوات المزعجة والاهتزازات المستمرة والموثوقية الضعيفة للسيارات الفرنسية المستوردة التي كانت تهيمن على السوق البريطاني حينها، وكان يبحث بشغف عن سيارة بريطانية الصنع فائقة الجودة تحمل اسمه وتلبي تطلعات عملائه من النخبة الأرستقراطية. وفي المقابل، كان هنري رويس مهندساً عصامياً عبقرياً نشأ في ظروف متواضعة ونجح في بناء سيارة تجريبية صغيرة بقوة 10 أحصنة في ورشته بمانشستر. لم تكن سيارة رويس تهتز أو ينبعث منها الدخان، بل كانت تصدر همساً خفيفاً ودقيقاً لم يسبق له مثيل في تلك الحقبة. وعندما قاد رولز السيارة في رحلة تجريبية قصيرة، انبهر بسلاستها الاستثنائية ووافق فوراً على بيع كل سيارة ينتجها رويس، شريطة أن تُباع تحت الاسم التجاري المشترك رولز رويس، مما وضع حجر الأساس لأسطورة دامت لأكثر من قرن."
  },
  {
    "type": "heading",
    "text": "خيمياء المتناقضات: تشارلز رولز وهنري رويس"
  },
  {
    "type": "paragraph",
    "text": "كان التباين الصارخ بين شخصيتي الشريكين هو المحرك الأساسي لنجاح وخلود العلامة الفاخرة؛ فقد نشأ تشارلز رولز في كنف عائلة أرستقراطية بريطانية بالغة الثراء والرفعة وتلقى تعليمه الراقي في جامعة كامبريدج المرموقة، مما منحه شبكة علاقات واسعة وشغفاً جامحاً بالطيران وسباقات السرعة ورؤية تسويقية مبكرة مكنته من إدراك احتياجات الأثرياء بدقة. وعلى الجانب الآخر تماماً، ولد هنري رويس في ظروف عائلية صعبة ومتواضعة للغاية، وعمل في ورش السكك الحديدية وبدأ حياته المهنية عصامياً يعلم نفسه الهندسة بالاعتماد على قوة الملاحظة والدراسة الذاتية والعمل الميداني الشاق، متبنياً فلسفة أصبحت نبراساً للشركة: 'اسعَ إلى الكمال في كل ما تفعل. خذ أفضل ما هو موجود واجعله أفضل، وإذا لم يكن موجوداً فصمّمه بنفسك'. هذا التناغم النادر بين روح رولز الحالمة التواقة للمستقبل، ودقة رويس الهندسية التي تأبى التهاون في التفاصيل، أنتج نهجاً فريداً من نوعه في تصنيع وتطوير المركبات. كان رويس يقضي ساعات طوال في فحص قطع الغيار والتروس الصغيرة لضمان خلوها من أي عيب طفيف قد يسبب أدنى اهتزاز، وهي الفلسفة الدقيقة التي تحولت إلى عقيدة فنية راسخة تسير عليها جميع أجيال السيارات التي تبدعها هذه العلامة العريقة وتتوارثها الأجيال حتى يومنا هذا."
  },
  {
    "type": "heading",
    "text": "سيارة سيلفر غوست وكلود جونسون: صياغة الأسطورة"
  },
  {
    "type": "paragraph",
    "text": "على الرغم من أن اسمي رولز ورويس قد خُلِّدا على المبرد الحديدي الأمامي للسيارة، إلا أن العلامة الفارهة لم تكن لتنجو وتتوسع عالمياً لولا عبقرية رجل ثالث يُدعى كلود جونسون. يُوصف جونسون تاريخياً بأنه 'الواصلة في اسم رولز-رويس'، حيث كان أول مدير تنفيذي للشركة والعقل المدبر الذي نجح في تحويل مواهب المؤسسين الفريدة إلى إمبراطورية تجارية مستدامة وقابلة للتوسع. كان جونسون مقرباً من رولز ويمتلك مهارات تنظيمية فذة وفهماً فطرياً للعلاقات العامة؛ وأدار الشركة بحكمة وانضباط تام. في عام 1906، قدمت الشركة المسجلة حديثاً الطراز الذي رسخ سمعتها العالمية للأبد: سيارة رولز رويس سيلفر غوست (Silver Ghost)، بمحركها ذي الست أسطوانات ذي السلاسة الفائقة—وهو السلف المباشر لمحركات V12 التي تدفع أسطولنا اليوم على طرقات دبي. ولإثبات تفوقها الهندسي، دخلت السيارة في اختبار موثوقية رسمي شمل قطع مسافة 14,371 ميل دون توقف في عام 1907. وتحت إشراف مستقل وصارم من نادي السيارات الملكي، سارت السيارة باستمرار ليل نهار بين لندن وغلاسكو دون أن تتعرض لأي عطل ميكانيكي، وعند تفكيكها لم يُعثر على أي تآكل ملموس في أجزائها، مما أجبر الصحافة المتخصصة على إعلانها 'أفضل سيارة في العالم'. وقد صاغ جونسون هذه العبارة ليربط هندسة رويس الفائقة بهوية تجارية راقية."
  },
  {
    "type": "list",
    "items": [
      "<strong>1904:</strong> اللقاء التاريخي بين الشريكين رولز ورويس في فندق ميدلاند بمانشستر وبداية الإنتاج المشترك.",
      "<strong>1906:</strong> التأسيس الرسمي للشركة وإطلاق طراز سيلفر غوست الأسطوري الذي وضع معيار الفخامة العالمي.",
      "<strong>جوست الحديثة:</strong> السيارة السيدان المتوازنة للعمل والقيادة اليومية في دبي، تبدأ من <a href=\"/ar/fleet/ghost\">3,800 درهم يومياً</a>.",
      "<strong>كولينان الحديثة:</strong> السيارة الرياضية الفاخرة متعددة الاستخدامات، مثالية للعائلات والوجاهة، تبدأ من <a href=\"/ar/fleet/cullinan\">6,500 درهم يومياً</a>.",
      "<strong>سبكتر الحديثة:</strong> أول سيارة كوبيه كهربائية بالكامل تمثل الفخامة الصامتة للمستقبل، تبدأ من 7,500 درهم يومياً.",
      "<strong>فانتوم الحديثة:</strong> اليخت البري الفاخر مع أعلى مستويات الراحة الكلاسيكية في المقصورة الخلفية، تبدأ من <a href=\"/ar/fleet/phantom\">5,800 درهم يومياً</a>."
    ]
  },
  {
    "type": "heading",
    "text": "عهد غودوود تحت مظلة بي إم دبليو: الحفاظ على الحرفية اليدوية"
  },
  {
    "type": "paragraph",
    "text": "مع انتقال قطاع السيارات إلى العصر الحديث، كان التحدي الأكبر يتمثل في الحفاظ على الإرث الحرفي اليدوي لعلامة رولز رويس مع إدخال التقنيات الألمانية الحديثة والموثوقية المتقدمة. تحقق هذا التوازن المثالي في عام 1998 عندما استحوذت مجموعة بي إم دبليو (BMW Group) بالكامل على حقوق العلامة التجارية وسيارات رولز رويس. وفي عام 2003، افتتحت المجموعة المقر العالمي الجديد والمنشأة المتطورة للغاية في منطقة غودوود الخضراء بهامبشاير، إنجلترا. بدلاً من إقامة خطوط إنتاج آلية ضخمة، حرصت المجموعة على صون وتطوير أساليب العمل اليدوي التقليدية التي ناضل رويس لترسيخها. في غودوود، تُصنع كل سيارة يدوياً بالكامل حسب الطلب، حيث يقضي الحرفيون مئات الساعات في خياطة أفخم الجلود الطبيعية ومطابقة قشور الأخشاب النادرة لتزيين المقصورة الداخلية بدقة متناهية. تضمن هذه العناية الفائقة بالتفاصيل الدقيقة بقاء كل سيارة بمثابة لوحة فنية فريدة تعبر عن شخصية مالكها، وتجمع بين دقة الهندسة الألمانية وعраقة اللمة الحرفية البريطانية لتعيش كتحفة فنية متحركة على الطرقات."
  },
  {
    "type": "image",
    "src": "/images/blog/started-rolls-royce-1904-meeting-began-all-inline.webp",
    "alt": "شعار رولز رويس التاريخي المتشابك المطلي باللون النحاسي والأسود على مقدمة طراز 1904.",
    "caption": "شعار رولز رويس التاريخي المتشابك: رمز للكمال الهندسي منذ الأيام الأولى لتأسيس العلامة."
  },
  {
    "type": "heading",
    "text": "استئجار إرث الـ 120 عاماً مع نقرة إف زد إي في دبي"
  },
  {
    "type": "paragraph",
    "text": "إن قيادة سيارة رولز رويس في دبي اليوم هي أكثر من مجرد اختيار لوسيلة تنقل فاخرة؛ إنها معايشة حقيقية لقصة نجاح وإرث ممتد لأكثر من 120 عاماً من الهندسة الفائقة والابتكار. ويسرنا في نقرة إف زد إي (Naqra FZE) أن نهيئ لكم فرصة معايشة هذا التاريخ العريق بأنفسكم على طرقات دولة الإمارات العربية المتحدة الممهدة بأعلى المعايير. تخيلوا أنفسكم وأنتم تعبرون شارع الشيخ زايد المحاط بأحدث الأبراج وناطحات السحاب، أو تستمتعون بنسمات البحر العليلة على طول شاطئ جميرا، أو تقبلون بأناقة تامة لحضور اجتماع عمل هام في مركز دبي المالي العالمي (DIFC) أو وسط مدينة دبي (داون تاون). حيث يمكن لعملائنا استلام سياراتهم الفاخرة فور وصولهم إلى مطار دبي الدولي (DXB)، أو اختيار خدمة السائق الخاص الاحترافية التي نضعها تحت تصرفكم لتضمن لكم رحلة مخملية تليق بمقامكم الرفيع بينما تنساب السيارة بهدوء فوق طرقات نخلة جميرا الساحرة دون أن تشعروا بأي من تفاصيل الطريق الخارجية، محققة فلسفة العزل الكامل التي طالما حلم بها رويس منذ عام 1904."
  },
  {
    "type": "heading",
    "text": "الأسئلة الشائعة"
  },
  {
    "type": "heading",
    "text": "من هم المؤسسون الأصليون لشركة رولز رويس؟"
  },
  {
    "type": "paragraph",
    "text": "تأسست شركة رولز رويس بفضل الشراكة التاريخية بين المهندس المبتكر العصامي هنري رويس والتاجر الأرستقراطي تشارلز رولز. كما لعب كلود جونسون دوراً محورياً بصفته أول مدير تنفيذي للشركة، ويُعرف تاريخياً بلقب 'الواصلة في اسم رولز-رويس' لجهوده الاستثنائية في بناء الهيكل التجاري للشركة وحماية المهندسين من الضغوط المالية وتوجيه حماس رولز التسويقي لبناء علامة تجارية عالمية مرموقة."
  },
  {
    "type": "heading",
    "text": "ما الذي حدث في لقاء فندق ميدلاند التاريخي في 4 مايو 1904؟"
  },
  {
    "type": "paragraph",
    "text": "التقى تشارلز رولز وهنري رويس للمرة الأولى في فندق ميدلاند بمدينة مانشستر في 4 مايو 1904 بتنسيق من صديقهما المشترك هنري إدموندز. قام رولز بتجربة سيارة رويس الصغيرة ذات الأسطوانتين وبقوة 10 أحصنة، وأبدى ذهوله الشديد من هدوء تشغيلها المطبق وغياب الاهتزازات المزعجة، مما دفعه للموافقة فوراً على بيع كل ما ينتجه رويس تحت اسم رولز رويس."
  },
  {
    "type": "heading",
    "text": "من هو كلود جونسون ولماذا يُلقب بالواصلة في اسم رولز رويس؟"
  },
  {
    "type": "paragraph",
    "text": "كلود جونسون هو المدير التنفيذي الأول لشركة رولز رويس والمهندس الإداري والتسويقي للعلامة. يُلقب بـ 'الواصلة في اسم رولز-رويس' لأنه كان الرابط الفعلي الذي وحّد عبقرية رويس الهندسية الفذة بشبكة علاقات رولز التجارية والأرستقراطية الواسعة، حيث نظّم اختبارات الموثوقية وصاغ الفلسفة التجارية للشركة لضمان استدامتها ونموها العالمي."
  },
  {
    "type": "heading",
    "text": "كيف ساهمت سيارة سيلفر غوست في ترسيخ سمعة رولز رويس للموثوقية؟"
  },
  {
    "type": "paragraph",
    "text": "في عام 1907، نجحت سيارة سيلفر غوست في اجتياز اختبار موثوقية صارم وشامل امتد لمسافة 14,371 ميل دون توقف تحت إشراف مستقل من نادي السيارات الملكي البريطاني. سارت السيارة دون أي عطل ميكانيكي يذكر، وعند تفكيكها لفحص أجزائها الداخلية لم يُعثر على أي تآكل ملموس، مما رسخ مكانتها عالمياً كـ 'أفضل سيارة في العالم'."
  },
  {
    "type": "heading",
    "text": "كيف يمكنني استئجار رولز رويس حديثة في دبي من خلال نقرة إف زد إي؟"
  },
  {
    "type": "paragraph",
    "text": "يمكنكم استئجار أحدث طرازات رولز رويس في دبي بكل سهولة عبر نقرة إف زد إي (Naqra FZE)، حيث يشمل أسطولنا طراز جوست بسعر يبدأ من 3,800 درهم يومياً، وكولينان بسعر يبدأ من 6,500 درهم يومياً، وفانتوم الفخمة بسعر يبدأ من 5,800 درهم يومياً، والسيارة الكهربائية سبكتر بسعر يبدأ من 7,500 درهم يومياً. يشترط أن يكون السن 25 عاماً فما فوق مع رخصة قيادة سارية. تفضلوا بالتواصل معنا مباشرة عبر واتساب على الرقم <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a>."
  },
  {
    "type": "cta",
    "text": "هل أنت مستعد لتجربة تاريخ السيارات الفاخرة؟ احجز سيارتك الرولز رويس اليوم.",
    "buttonText": "احجز سيارتك الرولز رويس",
    "buttonLink": "/booking"
  }
];

const ruContent = [
  {
    "type": "paragraph",
    "text": "В истории мировой индустрии есть имена, которые служат лишь скромным обозначением товара, но есть и те, что становятся абсолютным мерилом человеческих возможностей. Когда ценители и коллекционеры спрашивают, кто основал Rolls-Royce, они редко ищут сухие даты в коммерческом реестре или пыльные регистрационные записи в правительственных архивах. Этот великий союз, определивший вершину автомобильной роскоши, родился не в стерильном кабинете лондонского юриста и не стал результатом холодного корпоративного планирования. Он вспыхнул благодаря легендарной встрече в мае 1904 года в тихом, отделанном деревянными панелями зале отеля Midland в Манчестере, где два человека из совершенно разных слоев британского общества сели за один стол, чтобы обсудить общую страсть к техническому совершенству. Результатом этой беседы стала не просто новая автомобильная марка, но вечная философия безупречного качества и эстетического превосходства, которая сохраняется в неизменном виде уже более столетия. Сегодня, когда наш современный автопарк, собранный вручную лучшими мастерами своего дела, бесшумно скользит по залитым солнцем и неоновым светом проспектам Дубая, мы постоянно помним о том, что каждый километр пути опирается на то самое первоначальное соглашение о создании лучшего автомобиля в мире, которое вы можете прочувствовать лично благодаря нашей <a href=\"/ru/fleet\">эксклюзивной коллекции</a>."
  },
  {
    "type": "paragraph",
    "text": "<div style=\"background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 Быстрый ответ:</strong> Создателями легендарной марки Rolls-Royce стали гениальный инженер <strong>Генри Ройс</strong> и успешный торговец и авиатор <strong>Чарльз Роллс</strong>, заключившие соглашение после встречи <strong>4 мая 1904 года</strong> в отеле Midland в Манчестере, при ключевой поддержке бизнес-директора <strong>Клода Джонсона</strong>. Сегодня вы можете арендовать их современные шедевры в Дубае по цене от <strong>3 800 AED в день</strong>. Напишите нам в WhatsApp на номер <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a>.</div>"
  },
  {
    "type": "heading",
    "text": "Встреча в отеле Midland: судьбоносный день в мае 1904 года"
  },
  {
    "type": "paragraph",
    "text": "Днем 4 мая 1904 года обеденный зал манчестерского отеля Midland стал местом зарождения великой империи роскоши. Эта встреча была организована Генри Эдмундсом, общим знакомым и выдающимся инженером-электриком, который обладал редким даром предвидения и понял, что Чарльз Роллс и Генри Ройс идеально дополнят друг друга. Чарльз Роллс, выпускник Кембриджа и сын лорда Ллангаттока, владел фешенебельным автомобильным салоном в Лондоне, C.S. Rolls & Co. Он испытывал крайнее разочарование от шумных, вибрирующих и ломающихся французских машин, доминировавших на британском рынке, и отчаянно искал безупречный британский автомобиль высокого качества, способный носить его имя. Генри Ройс, в свою очередь, был талантливым инженером-самоучкой, построившим в своей скромной мастерской в Манчестере удивительно тихий двухцилиндровый прототип мощностью 10 л.с. Машина Ройса не тряслась, не дымила и не грохотала; она работала с поразительной механической точностью. После первого тест-драйва Роллс пришел в полный восторг и немедленно согласился продавать абсолютно все машины, которые сможет выпустить Ройс, под совместной маркой Rolls-Royce, что навсегда изменило мир роскоши и заложило прочный фундамент великого бренда."
  },
  {
    "type": "heading",
    "text": "Алхимия противоположностей: Генри Ройс и Чарльз Роллс"
  },
  {
    "type": "paragraph",
    "text": "Успех бренда строился на удивительном слиянии противоположных характеров и жизненных путей двух создателей. Генри Ройс был человеком труда и мастерской. Рожденный в бедности, он начал работать разносчиком газет, после чего с огромным трудом получил ученичество на Великой Северной железной дороге. Ройс был перфекционистом, чья одержимость качеством вошла в историю; он мог работать сутками напролет без сна и отдыха, питаясь лишь молоком и хлебом ради настройки одного поршня. Его кредо — 'Стремитесь к совершенству во всем, что делаете. Возьмите лучшее из существующего и сделайте его еще лучше' — стало философией бренда. Чарльз Роллс, напротив, был человеком воздуха и открытых пространств. Аристократ, спортсмен, воздухоплаватель и один из первых авиаторов Великобритании, совершивший первый в истории беспосадочный двойной перелет через пролив Ла-Манш, он прекрасно понимал вкусы лондонского высшего общества и имел капитал и связи для продвижения элитного бренда. Роллс принес в компанию коммерческое видение, маркетинговый гений и доступ к элите, тогда как Ройс обеспечил бескомпромиссные инженерные стандарты качества."
  },
  {
    "type": "heading",
    "text": "Silver Ghost и Клод Джонсон: определяя стандарты легенды"
  },
  {
    "type": "paragraph",
    "text": "Хотя на решетке радиатора увековечены имена Роллса и Ройса, компания могла бы не пережить свои первые годы без участия третьего создателя — Клода Джонсона. Его часто называют 'дефисом в имени Rolls-Royce'. Джонсон стал первым управляющим директором и тем коммерческим стратегом, который сумел превратить разрозненные таланты основателей в стабильный глобальный бизнес. Близкий друг Роллса, Джонсон обладал выдающимся организаторским талантом и руководил делами твердой рукой. В 1906 году молодая компания выпустила модель Rolls-Royce 40/50 hp, вошедшую в историю как Silver Ghost, с исключительно тихим шестицилиндровым мотором—прямым предком двигателей V12, приводящих в движение наш автопарк на дорогах Дубая сегодня. Чтобы продемонстрировать ее надежность публике, Джонсон в 1907 году отправил машину на беспрецедентный беспосадочный пробег длиной 14 371 милю. Под наблюдением Королевского автоклуба Silver Ghost курсировал между Лондоном и Глазго круглые сутки, совершив лишь одну техническую остановку. При разборке машины износ деталей оказался практически нулевым, и пресса объявила ее 'лучшим автомобилем в мире'. Именно Джонсон придумал этот слоган, выстроив стратегию глобального продвижения марки на десятилетия вперед."
  },
  {
    "type": "list",
    "items": [
      "<strong>1904:</strong> Историческая встреча Чарльза Роллса и Генри Ройса в отеле Midland в Манчестере и начало совместной работы.",
      "<strong>1906:</strong> Официальная регистрация Rolls-Royce Limited и выпуск легендарного автомобиля Silver Ghost.",
      "<strong>Современный Ghost:</strong> Сбалансированный седан для деловых поездок и повседневной езды в Дубае, аренда в нашем <a href=\"/ru/fleet\">эксклюзивном парке</a> от <a href=\"/ru/fleet/ghost\">3 800 AED в день</a>.",
      "<strong>Современный Cullinan:</strong> Внедорожник марки, предлагающий максимальный комфорт для семейных поездок, аренда от <a href=\"/ru/fleet/cullinan\">6 500 AED в день</a>.",
      "<strong>Современный Spectre:</strong> Первый полностью электрический суперкупе марки, бесшумное будущее роскоши, аренда от 7 500 AED в день.",
      "<strong>Современный Phantom:</strong> Легендарный флагманский седан с абсолютной роскошью в задней кабине, аренда от <a href=\"/ru/fleet/phantom\">5 800 AED в день</a>."
    ]
  },
  {
    "type": "heading",
    "text": "Продолжение легенды: традиции Гудвуда под эгидой BMW Group"
  },
  {
    "type": "paragraph",
    "text": "Переход бренда в новую эпоху требовал бережного отношения к историческому наследию ручной сборки при внедрении современных технологий и немецкой надежности. Этот компромисс был успешно достигнут в 1998 году, когда права на производство автомобилей Rolls-Royce перешли к концерну BMW Group. В 2003 году баварские специалисты открыли новую штаб-квартиру и завод в поместье Гудвуд в Западном Суссексе. Проект уникальной экологичной фабрики был разработан знаменитым британским архитектором сэром Николасом Гримшоу. Он спроектировал фабрику так, чтобы она гармонично вписывалась в ландшафт Южных холмов, а живая зеленая кровля из очитка служила естественной маскировкой и теплоизоляцией. Отказавшись от массового конвейера, BMW сохранила ручные методы сборки: для отделки салона каждой машины мастера тратят сотни часов, подбирая шпон дерева из одного ствола и раскраивая вручную кожу быков, выращенных на альпийских пастбищах без колючей проволоки. Это позволяет создавать настоящие произведения искусства на колесах, где проверенные британские традиции сочетаются с непревзойденной баварской инженерной базой и передовой электроникой, гарантируя надежность машин в жарком климате Ближнего Востока."
  },
  {
    "type": "image",
    "src": "/images/blog/started-rolls-royce-1904-meeting-began-all-inline.webp",
    "alt": "Исторический логотип Rolls-Royce с переплетенными буквами RR на латунном фоне модели 1904 года.",
    "caption": "Переплетенный логотип RR: символ инженерного совершенства с первых дней основания легенды."
  },
  {
    "type": "heading",
    "text": "Аренда 120-летнего наследия с Naqra FZE в Дубае"
  },
  {
    "type": "paragraph",
    "text": "Существует неразрывная связь между тихими мастерскими Гудвуда и величественными многополосными шоссе Объединенных Арабских Эмиратов. Арендуя автомобиль в Naqra FZE, вы прикасаетесь к 120-летней истории технического совершенства. Поездка на Spectre или флагманском Phantom по шоссе Шейха Зайда мимо Burj Khalifa и Музея будущего дарит то самое легендарное ощущение полета над дорогой, к которому стремились Роллс и Ройс. Наша услуга <a href=\"/ru/services/chauffeur\">профессионального водителя</a> обеспечивает VIP-трансфер прямо из Международного аэропорта Дубая (DXB) до дверей вашего отеля, гарантируя непревзойденный комфорт и конфиденциальность. Мы строго следуем правилам Управления по дорогам и транспорту Дубая (RTA), обеспечивая безупречный и безопасный уровень обслуживания наших гостей. Будь то деловая встреча в финансовом центре DIFC, шоппинг в Дубай Молл или роскошная свадьба, наш автопарк предлагает идеальное решение для каждого важного события вашей жизни."
  },
  {
    "type": "heading",
    "text": "Часто задаваемые вопросы"
  },
  {
    "type": "heading",
    "text": "Кто был первоначальным основателем компании Rolls-Royce?"
  },
  {
    "type": "paragraph",
    "text": "Компания была основана в результате партнерства талантливого инженера Генри Ройса и автодилера Чарльза Роллса. Ключевую роль в успехе также сыграл первый управляющий директор Клод Джонсон, которого называют 'дефисом в названии Rolls-Royce' за его выдающиеся заслуги в организации коммерческой структуры, защите инженеров от финансовых забот и выстраивании стратегии глобального продвижения марки. Без Клода Джонсона эта марка могла бы остаться лишь скромным локальным производством."
  },
  {
    "type": "heading",
    "text": "Что произошло на исторической встрече в отеле Midland 4 мая 1904 года?"
  },
  {
    "type": "paragraph",
    "text": "На этой встрече, организованной их общим знакомым Генри Эдмундсом, Чарльз Роллс протестировал тихий двухцилиндровый автомобиль мощностью 10 л.с., созданный Генри Ройсом. Роллс был настолько впечатлен плавностью хода, отсутствием шума и вибрации двигателя, что согласился продавать все машины Ройса под общим именем Rolls-Royce, заложив основу будущей легенды и открыв путь к коммерческому сотрудничеству."
  },
  {
    "type": "heading",
    "text": "Кто такой Клод Джонсон и почему его называют дефисом в имени Rolls-Royce?"
  },
  {
    "type": "paragraph",
    "text": "Клод Джонсон был первым управляющим директором бренда, соединившим инженерный талант Ройса с коммерческим потенциалом Роллса. Его называют 'дефисом' потому, что его маркетинговый гений, организация испытаний на надежность и построение бизнес-процессов стали связующим звеном, превратившим ручную мастерскую в Манчестере в ведущую мировую марку роскошных автомобилей, признанную во всем мире за ее качество."
  },
  {
    "type": "heading",
    "text": "Как модель Silver Ghost закрепила за брендом репутацию надежности?"
  },
  {
    "type": "paragraph",
    "text": "В 1907 году Silver Ghost успешно прошел жесткий тест, преодолев 14 371 милю без единой технической поломки под контролем Королевского автоклуба. После разборки машины износ деталей оказался практически нулевым, что заставило экспертов и прессу признать ее лучшим автомобилем в мире, заложив основу репутации механического превосходства марки и сделав марку стандартом для королевских дворов."
  },
  {
    "type": "heading",
    "text": "Как я могу арендовать современный Rolls-Royce в Дубае через Naqra FZE?"
  },
  {
    "type": "paragraph",
    "text": "Вы можете арендовать Rolls-Royce в Дубае через Naqra FZE, выбрав модель из нашего парка: Ghost от 3 800 AED/день, Cullinan от 6 500 AED/день, Spectre от 7 500 AED/день или Phantom от 5 800 AED/день. Арендатору должно быть не менее 25 лет, необходимы права и паспорт. Доставка бесплатна по всему Дубаю. Для бронирования свяжитесь с нами в WhatsApp по телефону <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a>, и наша команда с радостью поможет вам."
  },
  {
    "type": "cta",
    "text": "Ready to step into motoring history? Reserve your Rolls-Royce today.",
    "buttonText": "Reserve Your Rolls-Royce",
    "buttonLink": "/booking"
  }
];

const blogData = {
  en: {
    title: "Who Started Rolls-Royce? The Founders Behind the Legend",
    description: "Who started Rolls-Royce? Learn how Henry Royce, Charles Rolls, and Claude Johnson built the legend in 1904, and rent a modern descendant in Dubai today.",
    author: "Ahmed Salem",
    date: "2026-09-11",
    readTime: "10 min read",
    category: "Heritage",
    image: `/images/blog/${slug}-cover.jpg`,
    content: enContent,
    relatedArticles: [
      "was-rolls-royce-founded-1904-legend",
      "did-rolls-royce-start-making-cars-early-years",
      "evolution-rolls-royce-history"
    ]
  },
  ar: {
    title: "من أسس شركة رولز رويس؟ المؤسسون وراء الأسطورة التاريخية",
    description: "من أسس رولز رويس؟ اكتشف قصة هنري رويس وتشارلز رولز وكلود جونسون عام 1904، واستأجر أحدث طرازاتها الفاخرة في دبي مع شركة نقرة إف زد إي.",
    author: "Ahmed Salem",
    date: "2026-09-11",
    readTime: "10 دقائق قراءة",
    category: "Heritage",
    image: `/images/blog/${slug}-cover.jpg`,
    content: arContent,
    relatedArticles: [
      "was-rolls-royce-founded-1904-legend",
      "did-rolls-royce-start-making-cars-early-years",
      "evolution-rolls-royce-history"
    ]
  },
  ru: {
    title: "Кто основал Rolls-Royce? Создатели легендарного бренда",
    description: "Кто основал Rolls-Royce? История Генри Ройса, Чарльза Роллса и Клода Джонсона с 1904 года. Аренда современных моделей марки в Дубае с Naqra FZE.",
    author: "Ahmed Salem",
    date: "2026-09-11",
    readTime: "10 мин чтения",
    category: "Heritage",
    image: `/images/blog/${slug}-cover.jpg`,
    content: ruContent,
    relatedArticles: [
      "was-rolls-royce-founded-1904-legend",
      "did-rolls-royce-start-making-cars-early-years",
      "evolution-rolls-royce-history"
    ]
  }
};

// Check block length parity
if (blogData.en.content.length !== 26 || blogData.ar.content.length !== 26 || blogData.ru.content.length !== 26) {
  console.error("BLOCK PARITY ERROR: Content blocks are not 26! Got en=" + blogData.en.content.length + ", ar=" + blogData.ar.content.length + ", ru=" + blogData.ru.content.length);
  process.exit(1);
}

// Check word counts
const enCount = countWords(blogData.en.content);
const arCount = countWords(blogData.ar.content);
const ruCount = countWords(blogData.ru.content);

console.log("English word count:", enCount);
console.log("Arabic word count:", arCount);
console.log("Russian word count:", ruCount);

if (enCount < 1500 || arCount < 1500 || ruCount < 1500) {
  console.error("WORD COUNT ERROR: A locale has less than 1500 words!");
  process.exit(1);
}

fs.writeFileSync(targetPath, JSON.stringify(blogData, null, 2), 'utf8');
console.log("SUCCESSFULLY wrote JSON to:", targetPath);

import json
import re
import os

# Word counting helper
def count_words(blocks):
    total = 0
    for b in blocks:
        t = b.get('text', '')
        if 'items' in b:
            t += ' ' + ' '.join(b['items'])
        # Strip HTML tags
        t_clean = re.sub(r'<[^>]+>', ' ', t)
        total += len([w for w in t_clean.split() if w.strip()])
    return total

# ─────────────────────────────────────────────────────────────────────────────
# ENGLISH CONTENT
# ─────────────────────────────────────────────────────────────────────────────
en_blocks = [
    # Block 0: Hook (paragraph)
    {
        "type": "paragraph",
        "text": "On paper, the graduation ceremony or school prom is simply the final event in an academic calendar. In reality, it represents a significant personal milestone that marks the transition from one chapter of life to the next. When this celebration takes place in Dubai—a city defined by its pursuit of excellence and where Sheikh Zayed Road serves as a daily stage for the world's most spectacular automotive engineering—arriving in a standard vehicle feels like a missed opportunity. Driving up to the red carpet at a five-star hotel in Dubai Marina or the entrance of an elite venue in Downtown Dubai aboard a Rolls-Royce is the ultimate way to celebrate these achievements. For students who have spent years dedicated to their studies, and for the families who have supported them every step of the way, this arrival is a powerful statement of success. Yet, the question is not simply how to make an entrance, but how to do so with the dignity, quiet confidence, and unmatched comfort that only a Goodwood-built motor car can provide. This guide explores the details of securing a Rolls-Royce for graduation day in Dubai, evaluating the self-drive and chauffeur options, detailing the specific rates across our fleet starting at AED 3,800 per day, and outlining how to capture memories that will last a lifetime."
    },
    # Block 1: Quick Answer (paragraph with styled div)
    {
        "type": "paragraph",
        "text": "<div style=\"background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 Quick Answer:</strong> Renting a Rolls-Royce for graduation or prom in Dubai starts at <strong>AED 3,800 per day</strong> for the Ghost. The flagship Phantom is available at <strong>AED 5,800/day</strong>, the Cullinan SUV at <strong>AED 6,500/day</strong>, and the electric Spectre at <strong>AED 7,500/day</strong>. Self-drive options require the driver to be 25+ with a valid license, while our professional RTA-certified chauffeur services have no age restrictions for passengers. Book your vehicle directly via WhatsApp at <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a>.</div>"
    },
    # Block 2: Section 1 Title (heading)
    {
        "type": "heading",
        "text": "Why Arriving in a Rolls-Royce is the Ultimate Celebration"
    },
    # Block 3: Section 1 Body (paragraph)
    {
        "type": "paragraph",
        "text": "A graduation is not a minor event; it is the culmination of years of hard work, sleepless nights, and focused ambition. In a city like Dubai, which values achievements and celebrates milestones with grand style, your arrival should reflect the significance of the occasion. A Rolls-Royce does not merely carry you to the door; it prepares you for the moment you step out onto the red carpet. The quiet dignity of the vehicle matches the proud accomplishments of the day. As you glide along the crescent of Palm Jumeirah or make your way through the high-rise landscape of Dubai Marina, the car isolates you from the busy city streets, creating a calm space where you and your family can reflect on the journey that brought you here. The sheer presence of the Pantheon grille and the Spirit of Ecstasy announces your arrival at the hotel entrance or university hall with an understated authority. It is an experience that honors the effort you have put into your education, turning the simple act of traveling into a memorable celebration. Furthermore, for parents, renting a Rolls-Royce for their graduating child is a thoughtful expression of pride, offering a reward that feels as extraordinary as the academic success itself. Whether you choose the modern styling of the <a href=\"/fleet/ghost\">Rolls-Royce Ghost</a> or the imposing stance of the <a href=\"/fleet/cullinan\">Rolls-Royce Cullinan</a>, you are securing a level of refinement that no other automotive marque can offer, ensuring the day is remembered for decades. To learn more about our event packages, explore our dedicated <a href=\"/services/wedding\">Rolls-Royce wedding and events service</a>."
    },
    # Block 4: Section 2 Title (heading)
    {
        "type": "heading",
        "text": "Self-Drive or Chauffeur Service: Tailoring the Experience"
    },
    # Block 5: Section 2 Body (paragraph)
    {
        "type": "paragraph",
        "text": "When arranging a Rolls-Royce for graduation day, one of the first decisions is whether to drive the vehicle yourself or enlist the services of a professional chauffeur. For parents or older family members who are over the age of twenty-five and hold a valid UAE driving license or recognized international permit, the self-drive option offers a rare chance to experience the effortless power of the V12 engine firsthand. Navigating the sweeping curves of the Palm Jumeirah or driving down Sheikh Zayed Road in a machine of this caliber is a reward in its own right. However, for the students themselves—who are often under the age of twenty-five and therefore ineligible to drive under local insurance policies—or for families who prefer to focus entirely on the celebration without the stress of navigating traffic, our professional <a href=\"/services/chauffeur\">chauffeur service</a> is the preferred choice. Our chauffeurs are fully licensed by the RTA, highly trained in defensive driving, and deeply familiar with the roads of Dubai. They arrive impeccably dressed, ensuring that the service at the hotel entrance or school driveway is as polished and dignified as the car itself. By choosing a chauffeured experience, the graduating student can relax in the rear cabin, enjoying the hand-stitched leather seats, the starlight ceiling, and the quiet environment, arriving at the venue completely relaxed and ready for the ceremony."
    },
    # Block 6: Section 3 Title (heading)
    {
        "type": "heading",
        "text": "The Spirit of Ecstasy: Creating Lifelong Memories at Landmark Locations"
    },
    # Block 7: Section 3 Body (paragraph)
    {
        "type": "paragraph",
        "text": "The true value of renting a Rolls-Royce for graduation day lies not just in the drive, but in the memories and photographs that you will keep forever. Dubai offers some of the most spectacular backdrops in the world, and pairing these architectural wonders with a Goodwood-built masterpiece creates stunning visual memories. Imagine taking graduation pictures at golden hour with the Spirit of Ecstasy leading the frame, the towering skyline of Dubai Marina reflecting off the polished paintwork, or the grand entrance of a luxury hotel providing the perfect framing. The signature coach doors, which open backwards from the rear, provide a unique and elegant frame for photographs as the graduate steps out in their cap and gown. Inside the cabin, the Starlight Headliner—with its 1,340 hand-placed fiber-optic lights—creates a magical, star-filled sky that serves as an incredible backdrop for interior portraits. These are not merely photographs; they are visual representations of a milestone achieved, captured in a setting that reflects the absolute peak of luxury. Whether it is a family portrait outside the Burj Al Arab or a candid shot in the quiet interior of the car, these images will stand as a testament to a special day in one of the world's most dynamic cities."
    },
    # Block 8: Section 3 List (list)
    {
        "type": "list",
        "items": [
            "<strong>The Coach Door Portrait:</strong> Capture the graduate stepping out of the rear cabin with the rear-hinged doors creating a grand, elegant frame.",
            "<strong>Marina Golden Hour:</strong> Pose with the Spirit of Ecstasy in Dubai Marina as the setting sun reflects off the polished paintwork and the water.",
            "<strong>Starlight Interior:</strong> Take intimate family photos inside the cabin under the glowing canopy of the Starlight Headliner.",
            "<strong>The Pantheon Grille:</strong> Use the classic, imposing front grille of the Phantom or Ghost as a dramatic backdrop for formal portraits.",
            "<strong>Hotel Canopy Arrival:</strong> Capture the moment of arrival under the grand entrance lights of a five-star resort in Downtown Dubai."
        ]
    },
    # Block 9: Section 4 Title (heading)
    {
        "type": "heading",
        "text": "Fleet Pricing & Daily Rates for Graduation Rentals"
    },
    # Block 10: Section 4 Body (paragraph)
    {
        "type": "paragraph",
        "text": "Understanding the pricing structure is essential when planning the logistics of your graduation day. At Naqra FZE, we maintain a policy of complete financial transparency, ensuring that the rate you are quoted is the rate you pay, with no hidden fees or unexpected surcharges. Renting a Rolls-Royce starts at AED 3,800 per day for the standard Ghost, a model that perfectly balances modern technology with classic refinement. For those who require the commanding presence of a luxury SUV, the Cullinan is available at AED 6,500 per day, while the all-electric Spectre represents the future of silent luxury at AED 7,500 per day. The flagship Phantom saloon, which offers the ultimate expression of rear-seat luxury and presence, is priced at AED 5,800 per day. The following table provides a detailed comparison of our primary models to help you select the vehicle that best matches your family's needs:<div class=\"overflow-x-auto my-8 border border-rolls-gold/20 rounded-lg\"><table class=\"w-full text-left border-collapse text-gray-300\"><thead><tr class=\"bg-rolls-gold/10 border-b border-rolls-gold/20\"><th class=\"p-4 text-white font-bold\">Rolls-Royce Model</th><th class=\"p-4 text-white font-bold\">Daily Rental Rate (AED)</th><th class=\"p-4 text-white font-bold\">Engine / Drivetrain</th><th class=\"p-4 text-white font-bold\">Key Graduation Benefit</th></tr></thead><tbody class=\"divide-y divide-rolls-gold/10\"><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Ghost</td><td class=\"p-4\">AED 3,800</td><td class=\"p-4\">6.75L V12 Twin-Turbo</td><td class=\"p-4\">Balanced, modern luxury for daily city driving</td></tr><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Phantom</td><td class=\"p-4\">AED 5,800</td><td class=\"p-4\">6.75L V12 Twin-Turbo</td><td class=\"p-4\">Ultimate flagship presence for red carpet entrances</td></tr><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Cullinan</td><td class=\"p-4\">AED 6,500</td><td class=\"p-4\">6.75L V12 Twin-Turbo</td><td class=\"p-4\">Spacious cabin, commanding ride height for families</td></tr><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Spectre</td><td class=\"p-4\">AED 7,500</td><td class=\"p-4\">Dual-Motor Electric (EV)</td><td class=\"p-4\">Cutting-edge electric tech and near-total silence</td></tr></tbody></table></div>All daily rates include standard comprehensive insurance and a daily mileage allowance of 250 kilometers. For longer celebrations, we offer custom weekly rates that reduce the daily equivalent cost. You can view all live options on our comprehensive <a href=\"/pricing\">pricing and fleet rates page</a>."
    },
    # Block 11: Image (image)
    {
        "type": "image",
        "src": "/images/blog/much-rent-rolls-royce-prom-dubai-2026-inline.webp",
        "alt": "A luxury Rolls-Royce Ghost parked in front of a grand hotel lobby at Downtown Dubai at golden hour",
        "caption": "The Ghost: a refined balance of modern performance and timeless elegance for your celebration."
    },
    # Block 12: Section 5 Title (heading)
    {
        "type": "heading",
        "text": "Securing Your Vehicle: Booking Logistics & Requirements"
    },
    # Block 13: Section 5 Body (paragraph)
    {
        "type": "paragraph",
        "text": "The process of renting a Rolls-Royce with Naqra FZE is designed to be as seamless and dignified as the drive itself. We have eliminated unnecessary paperwork and long queues, allowing you to arrange the entire rental digitally. To secure a vehicle for self-drive, UAE residents must provide a valid UAE driving license and an Emirates ID. International visitors need a valid passport, a visit visa, and a driving license from their home country or an international driving permit. A refundable security deposit is pre-authorized on your credit card to cover any toll charges (Salik) or minor incidents, and is released automatically after the rental ends. We deliver the vehicle spotless and fully fueled directly to your villa, hotel, or the VIP terminal at Dubai International Airport (DXB). Given the high demand during graduation and prom seasons in Dubai—which typically run during late spring and winter terms—we strongly advise booking your vehicle at least one to two weeks in advance. This ensures that your preferred model and interior color configuration are secured. When you are ready to plan the perfect arrival for this milestone, our team is a message away."
    },
    # Block 14: FAQ Title (heading)
    {
        "type": "heading",
        "text": "Frequently Asked Questions"
    },
    # Block 15: FAQ 1 Q (heading)
    {
        "type": "heading",
        "text": "What is the minimum age to rent a Rolls-Royce for prom in Dubai?"
    },
    # Block 16: FAQ 1 A (paragraph)
    {
        "type": "paragraph",
        "text": "To rent a Rolls-Royce for self-drive, the driver must be at least twenty-five years old and hold a valid UAE driving license or recognized international license. For students under twenty-five, our professional chauffeur service is the ideal solution. There are no age restrictions for passengers in a chauffeured vehicle, allowing graduates to be driven safely and in complete comfort to their venue."
    },
    # Block 17: FAQ 2 Q (heading)
    {
        "type": "heading",
        "text": "How much does it cost to hire a Rolls-Royce for graduation day?"
    },
    # Block 18: FAQ 2 A (paragraph)
    {
        "type": "paragraph",
        "text": "Daily rental rates at Naqra FZE start at AED 3,800 for the Ghost. The flagship Phantom is priced at AED 5,800 per day, the Cullinan SUV at AED 6,500 per day, and the Spectre electric coupe at AED 7,500 per day. These rates include basic comprehensive insurance and a daily mileage allowance of 250 kilometers. Chauffeur services can be added for a moderate additional fee."
    },
    # Block 19: FAQ 3 Q (heading)
    {
        "type": "heading",
        "text": "Can we decorate the Rolls-Royce for the prom ceremony?"
    },
    # Block 20: FAQ 3 A (paragraph)
    {
        "type": "paragraph",
        "text": "Yes, light and temporary decorations such as ribbons are permitted, provided they are applied safely and do not damage the vehicle's paintwork or block the driver's view of the road. Any decoration must be discussed and approved by our reservations team prior to delivery to ensure the safety of the vehicle and occupants."
    },
    # Block 21: FAQ 4 Q (heading)
    {
        "type": "heading",
        "text": "Is the security deposit refundable and how long does it take?"
    },
    # Block 22: FAQ 4 A (paragraph)
    {
        "type": "paragraph",
        "text": "Yes, the security deposit is fully refundable. It is pre-authorized on your credit card and is released automatically once the rental ends and we verify that there are no outstanding traffic fines, Salik toll charges, or minor damages. The release process typically takes fifteen to twenty-one days, depending on your bank's processing policies."
    },
    # Block 23: FAQ 5 Q (heading)
    {
        "type": "heading",
        "text": "Where can the Rolls-Royce be delivered for our graduation?"
    },
    # Block 24: FAQ 5 A (paragraph)
    {
        "type": "paragraph",
        "text": "We offer free delivery and retrieval to any hotel, private villa, or corporate office within Dubai, including Downtown Dubai, Palm Jumeirah, Dubai Marina, JBR, and DIFC. We also provide a meet-and-greet service at Dubai International Airport (DXB) and DWC. Delivery to other Emirates can be arranged for a minor additional fee."
    },
    # Block 25: CTA (cta)
    {
        "type": "cta",
        "text": "Mark this academic milestone with the ultimate arrival. Contact our reservations concierge via WhatsApp to secure your Rolls-Royce.",
        "buttonText": "Book Your Rolls-Royce",
        "buttonLink": "/booking"
    }
]

# ─────────────────────────────────────────────────────────────────────────────
# ARABIC CONTENT
# ─────────────────────────────────────────────────────────────────────────────
ar_blocks = [
    # Block 0: Hook (paragraph)
    {
        "type": "paragraph",
        "text": "على الورق، يمثل حفل التخرج أو حفلة نهاية العام الدراسي مجرد حدث ختامي في التقويم الأكاديمي السنوي. وفي الواقع، هو محطة شخصية فارقة تؤذن بالانتقال من فصل من فصول الحياة إلى فصل جديد مليء بالآفاق والفرص. وعندما يقام هذا الاحتفال في دبي—المدينة التي تتنفس التميز ويتحول شارع الشيخ زايد فيها يومياً إلى مسرح لأرقى ما أبدعته الهندسة الميكانيكية العالمية—فإن الوصول في سيارة اعتيادية يبدو تفويتاً لفرصة صنع حدث لا ينسى. إن الوصول إلى السجادة الحمراء أمام الفنادق الفاخرة في دبي مارينا أو المداخل المهيبة لوجهات وسط مدينة دبي على متن سيارة رولز رويس يمثل الطريقة المثلى للاحتفال بهذه الإنجازات الأكاديمية الرفيعة. وبالنسبة للطلاب الذين أمضوا سنوات من السهر والجد والاجتهاد، وللعائلات التي وقفت خلفهم تدعمهم في كل خطوة، فإن هذا الوصول الفاخر يمثل بياناً بليغاً يعبر عن النجاح والتميز. ومع ذلك، لا يقتصر السؤال هنا على كيفية لفت الأنظار فحسب، بل على كيفية تحقيق ذلك بالوقار والسكينة المطلقة التي لا تمنحها إلا سيارات رولز رويس المصنوعة يدوياً في مصنع غودوود العريق. يستعرض هذا الدليل التفاصيل الكاملة لتأمين سيارة رولز رويس ليوم تخرجك في دبي، مقيماً خيارات القيادة الذاتية وخدمات السائق الخاص، ومستعرضاً أسعار الأسطول التي تبدأ من 3,800 درهم إماراتي يومياً، مع توضيح كيفية توثيق لحظات ستبقى محفورة في الذاكرة للأبد."
    },
    # Block 1: Quick Answer (paragraph with styled div)
    {
        "type": "paragraph",
        "text": "<div style=\"background:#1a1a1a;border-right:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;direction:rtl;\"><strong>💡 الإجابة السريعة:</strong> يبدأ استئجار رولز رويس لحفلات التخرج في دبي من <strong>3,800 درهم إماراتي يومياً</strong> لطراز جوست الأنيق. وتتوفر فانتوم الرائدة بمبلغ <strong>5,800 درهم/يوم</strong>، وكولينان العائلية بمبلغ <strong>6,500 درهم/يوم</strong>، وسبكتر الكهربائية بالكامل بمبلغ <strong>7,500 درهم/يوم</strong>. تتطلب القيادة الذاتية أن يكون السائق بعمر 25+ ورخصة قيادة سارية، بينما تتوفر خدمة السائق الخاص المرخص من RTA لكافة الأعمار دون قيود. للحجز المباشر عبر واتساب <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a>.</div>"
    },
    # Block 2: Section 1 Title (heading)
    {
        "type": "heading",
        "text": "لماذا يعد الوصول في رولز رويس التكريم الأمثل ليوم التخرج؟"
    },
    # Block 3: Section 1 Body (paragraph)
    {
        "type": "paragraph",
        "text": "لا يُعد التخرج حدثاً عابراً في حياة الطالب، بل هو ذروة سنوات من السهر، والجهد المتواصل، والطموح الذي لا يعرف الكلل. وفي مدينة كدبي، التي تُقدر النجاح وتحتفي بالإنجازات الكبرى بأرقى الأساليب، يجب أن يعكس وصولك إلى مكان الحفل قيمة هذا الإنجاز الكبير. لا تقتصر رولز رويس على نقلك إلى الباب فحسب، بل تهيئك نفسياً لتلك اللحظة الاستثنائية التي تخطو فيها نحو السجادة الحمراء. إن الهيبة الهادئة التي تتمتع بها السيارة تتكامل مع مشاعر الفخر والاعتزاز بهذا اليوم التاريخي. وبينما تنساب السيارة بنعومة فائقة حول هلال نخلة جميرا أو تشق طريقها بين الأبراج الشاهقة في دبي مارينا، تعزلك المقصورة تماماً عن صخب الشوارع الخارجية، لتخلق مساحة من السكينة تتيح لك ولعائلتك استرجاع تفاصيل الرحلة الطويلة التي قادتكم إلى هذا النجاح. ويعلن الحضور الطاغي لشبك البانثيون الأمامي وتمثال روح النشوة عن وصولك أمام مدخل الفندق أو قاعة الحفل بوقار لافت يثير الإعجاب. إنها تجربة تكرم الجهد الذي بذلته في سبيل العلم، وتحول مسافة الطريق البسيطة إلى حدث احتفالي بحد ذاته. وعلاوة على ذلك، يمثل استئجار رولز رويس من قبل أولياء الأمور لأبنائهم الخريجين تعبيراً صادقاً عن الفخر والمحبة، مكافأة تضاهي بتميزها التفوق الدراسي المحقق. وسواء وقع اختيارك على طراز <a href=\"/ar/fleet/ghost\">رولز رويس جوست</a> العصري أو طراز <a href=\"/ar/fleet/cullinan\">رولز رويس كولينان</a> الرياضية المهيبة، فإنك تضمن مستوى من الرقي والرفاهية لا يمكن لعلامة تجارية أخرى تقديمه، مما يضمن بقاء هذا اليوم محفوراً في ذاكرة العائلة لسنوات طويلة. لمعرفة المزيد حول باقات المناسبات، تفضل بزيارة صفحة <a href=\"/ar/services/wedding\">خدمة زفاف وفعاليات رولز رويس</a> المخصصة."
    },
    # Block 4: Section 2 Title (heading)
    {
        "type": "heading",
        "text": "القيادة الذاتية مقابل خدمة السائق الخاص: اختيار التجربة الأنسب"
    },
    # Block 5: Section 2 Body (paragraph)
    {
        "type": "paragraph",
        "text": "عند التخطيط لاستئجار رولز رويس ليوم التخرج، فإن القرار الهام الأول يتمثل في اختيار ما إذا كنت تفضل قيادة السيارة بنفسك أو الاستعانة بخدمات سائق خاص محترف. بالنسبة لأولياء الأمور أو أفراد العائلة الذين يتجاوز سنهم خمسة وعشرين عاماً ويحملون رخصة قيادة إماراتية سارية أو رخصة دولية معترفاً بها، فإن القيادة الذاتية تمنحهم فرصة نادرة لتجربة القوة الهائلة والسلاسة الفريدة لمحرك V12 الأسطوري بأنفسهم. إن قيادة مركبة بهذا الحجم والوقار على طول شارع الشيخ زايد أو عبر منعطفات نخلة جميرا هي مكافأة بحد ذاتها تمنح متعة قيادة لا تضاهى. ولكن بالنسبة للطلاب أنفسهم—الذين يقل عمرهم غالباً عن خمسة وعشرين عاماً مما يمنعهم من القيادة بموجب شروط التأمين المحلي—أو للعائلات التي تفضل التركيز بالكامل على الاحتفال وتجنب عناء القيادة في شوارع دبي المزدحمة، فإن <a href=\"/ar/services/chauffeur\">خدمة السائق الخاص</a> تظل الخيار الأفضل والأكثر ملاءمة. يحمل سائقونا رخصاً معتمدة من هيئة الطرق والمواصلات RTA، وهم مدربون على أعلى مستويات القيادة الوقائية والبروتوكول الفاخر، ويمتلكون معرفة دقيقة بكافة طرق دبي. ويصل السائق مرتدياً زياً رسمياً أنيقاً ليقدم خدمة كونسيرج راقية تعكس وقار الحدث. ويتيح هذا الخيار للخريج الاسترخاء في المقاعد الخلفية الوثيرة والاستمتاع بسقف النجوم والهدوء المطلق والوصول إلى قاعة الحفل بمنتهى الراحة والهدوء."
    },
    # Block 6: Section 3 Title (heading)
    {
        "type": "heading",
        "text": "توثيق اللحظات التاريخية: التقاط الصور مع تمثال روح النشوة في دبي"
    },
    # Block 7: Section 3 Body (paragraph)
    {
        "type": "paragraph",
        "text": "إن القيمة الحقيقية لاستئجار رولز رويس في يوم التخرج لا تكمن فقط في تجربة التنقل الراقي, بل في الصور والذكريات البصرية التي سترافقك طوال حياتك. تمتاز دبي ببعض من أكثر الخلفيات العمرانية سحراً في العالم، وعندما تجمع هذه المعالم المعمارية مع تحفة فنية مصنوعة في غودوود، فإن النتيجة تكون صوراً استثنائية بكل المقاييس. تخيل التقاط صور التخرج في وقت الغروب الذهبي مع تمثال روح النشوة في مقدمة الصورة، وخلفية أبراج دبي مارينا الشاهقة تنعكس على الطلاء المصقول، أو أمام المدخل الكبير لأحد الفنادق الفاخرة بالداون تاون. وتوفر الأبواب الخلفية المعاكسة التي تفتح إلى الخلف إطاراً فريداً وراقياً للتصوير عند خروج الخريج بعباءة التخرج وقبعته. وفي داخل المقصورة، يخلق سقف النجوم الأسطوري الذي يضم 1,340 نقطة ضوئية سماءً متلألئة تضفي لمسة سحرية على صور البورتريه الداخلية. هذه ليست مجرد صور عادية، بل هي توثيق تاريخي لإنجاز عظيم تم تحقيقه، تم تصويره في بيئة تعكس أعلى مستويات الرفاهية الإنسانية. وسواء كانت صورة عائلية جماعية أمام فندق برج العرب أو لقطة عفوية داخل المقصورة الهادئة للسيارة، فإن هذه اللحظات ستبقى شاهداً على يوم مميز في واحدة من أكثر مدن العالم حيوية ونشاطاً."
    },
    # Block 8: Section 3 List (list)
    {
        "type": "list",
        "items": [
            "<strong>بورتريه الأبواب المعاكسة:</strong> التقاط صور للخريج أثناء خروجه من المقعد الخلفي مع الأبواب المفتوحة للخلف التي تصنع إطاراً دراماتيكياً فخماً.",
            "<strong>الغروب الذهبي في مارينا:</strong> التقاط صور مع تمثال روح النشوة في دبي مارينا مع انعكاس أشعة الشمس الغاربة على الهيكل اللامع وصفحة المياه.",
            "<strong>سحر المقصورة الداخلية:</strong> صور عائلية دافئة داخل السيارة تحت سقف النجوم المضيء الذي يضفي أجواءً احتفالية ساحرة.",
            "<strong>هيبة شبك البانثيون:</strong> استخدام المقدمة الكلاسيكية المهيبة لسيارات فانتوم أو جوست كخلفية قوية ومميزة لصور التخرج الرسمية.",
            "<strong>الوصول تحت مظلة الفندق:</strong> توثيق لحظة الوصول الأولى للخريج تحت أضواء المدخل الفاخر لأحد فنادق الخمس نجوم في داون تاون دبي."
        ]
    },
    # Block 9: Section 4 Title (heading)
    {
        "type": "heading",
        "text": "أسعار الأسطول والتكلفة اليومية لإيجار رولز رويس"
    },
    # Block 10: Section 4 Body (paragraph)
    {
        "type": "paragraph",
        "text": "يعد فهم هيكل الأسعار خطوة أساسية عند التخطيط للترتيبات اللوجستية ليوم التخرج. نحن في شركة نقرة نلتزم بسياسة الشفافية المالية المطلقة لضمان حصولك على السعر النهائي المعلن دون أي رسوم إدارية مخفية أو مفاجآت عند الاستلام. تبدأ تكلفة استئجار رولز رويس من 3,800 درهم إماراتي يومياً لطراز جوست القياسي، وهي السيارة التي تجمع بكفاءة متناهية بين التقنيات المعاصرة واللمسات الكلاسيكية الراقية. ولمن يفضلون الحضور المهيب لسيارات الدفع الرباعي الفاخرة، تتوفر كولينان بمبلغ 6,500 درهم يومياً، بينما تمثل سبكتر الكهربائية بالكامل قمة الهدوء المستقبلي بمبلغ 7,500 درهم يومياً. أما سيارة فانتوم الرائدة، التي تقدم التعبير الأقصى عن الهيبة والراحة المطلقة في المقاعد الخلفية، فتبلغ تكلفتها 5,800 درهم يومياً. يوضح الجدول التالي مقارنة تفصيلية لأسعار أسطولنا الأساسية لمساعدتك في اختيار الطراز الأنسب لعائلتك:<div class=\"overflow-x-auto my-8 border border-rolls-gold/20 rounded-lg\" style=\"direction:rtl;\"><table class=\"w-full text-right border-collapse text-gray-300\"><thead><tr class=\"bg-rolls-gold/10 border-b border-rolls-gold/20\"><th class=\"p-4 text-white font-bold\">طراز رولز رويس</th><th class=\"p-4 text-white font-bold\">سعر الإيجار اليومي (درهم)</th><th class=\"p-4 text-white font-bold\">نوع المحرك ونظام الحركة</th><th class=\"p-4 text-white font-bold\">الميزة الأساسية ليوم التخرج</th></tr></thead><tbody class=\"divide-y divide-rolls-gold/10\"><tr><td class=\"p-4 font-semibold text-white\">رولز رويس جوست</td><td class=\"p-4\">3,800 درهم</td><td class=\"p-4\">V12 توربو مزدوج سعة 6.75 لتر</td><td class=\"p-4\">فخامة عصرية متوازنة ومناسبة للقيادة اليومية بالمدينة</td></tr><tr><td class=\"p-4 font-semibold text-white\">رولز رويس فانتوم</td><td class=\"p-4\">5,800 درهم</td><td class=\"p-4\">V12 توربو مزدوج سعة 6.75 لتر</td><td class=\"p-4\">حضور رائد وهيبة طاغية تليق بالوصول الفاخر للمناسبات الكبرى</td></tr><tr><td class=\"p-4 font-semibold text-white\">رولز رويس كولينان</td><td class=\"p-4\">6,500 درهم</td><td class=\"p-4\">V12 توربو مزدوج سعة 6.75 لتر</td><td class=\"p-4\">مقصورة واسعة وقيادة مرتفعة مريحة للغاية للعائلات</td></tr><tr><td class=\"p-4 font-semibold text-white\">رولز رويس سبكتر</td><td class=\"p-4\">7,500 درهم</td><td class=\"p-4\">محرك كهربائي مزدوج بالكامل EV</td><td class=\"p-4\">تقنيات كهربائية متطورة وهدوء مطبق شبه تام أثناء القيادة</td></tr></tbody></table></div>تشمل كافة الأسعار اليومية التأمين الشامل ومسافة سير يومية تبلغ 250 كيلومتراً. وللاحتفالات الممتدة، نوفر عروضاً أسبوعية مخصصة تقلل من التكلفة اليومية الإجمالية. يمكنك الاطلاع على الخيارات الحية عبر زيارة <a href=\"/ar/pricing\">صفحة أسعار أسطول رولز رويس دبي</a> المخصصة لدينا."
    },
    # Block 11: Image (image)
    {
        "type": "image",
        "src": "/images/blog/much-rent-rolls-royce-prom-dubai-2026-inline.webp",
        "alt": "سيارة رولز رويس جوست فاخرة متوقفة أمام بهو فندق راق في داون تاون دبي عند الغروب الذهبي يدوياً",
        "caption": "جوست: التوازن المثالي بين الأداء العصري والتصميم الكلاسيكي الفخم لمناسباتكم الخاصة."
    },
    # Block 12: Section 5 Title (heading)
    {
        "type": "heading",
        "text": "حجز السيارة: المتطلبات والترتيبات اللوجستية ليوم التخرج"
    },
    # Block 13: Section 5 Body (paragraph)
    {
        "type": "paragraph",
        "text": "تم تصميم عملية استئجار سيارة رولز رويس مع شركة نقرة لتكون سلسة وراقية بالكامل وخالية من أي تعقيدات إدارية قد تضيع وقتك الثمين. لقد ألغينا المعاملات الورقية الطويلة وطوابير الانتظار، مما يتيح لك إتمام الحجز بالكامل رقمياً وبمنتهى السهولة. ولتأمين السيارة للقيادة الذاتية، يتعين على مقيمي دولة الإمارات تقديم رخصة قيادة إماراتية سارية وبطاقة الهوية الإماراتية. أما الزوار الدوليون، فيجب تقديم جواز سفر سارٍ وتأشيرة سياحة ورخصة قيادة محلية من بلدهم الأصلي أو رخصة قيادة دولية معتمدة. كما يتم إجراء تفويض مسبق لمبلغ تأمين مسترد على بطاقة الائتمان لتغطية رسوم بوابات سالك والمخالفات المرورية RTA، ويتم إلغاؤه تلقائياً فور إعادة السيارة بأمان. نقوم بتوصيل السيارة نظيفة تماماً وبخزان وقود ممتلئ مباشرة إلى فندقك أو فيلتك الخاصة في نخلة جميرا أو مركز دبي الدولي للمعارض، أو مبنى الطيران الخاص بمطار دبي الدولي DXB. ونظراً للطلب المرتفع للغاية خلال مواسم التخرج والفعاليات الكبرى في دبي—والتي تتركز عادة في أواخر الربيع وفترات الشتاء الأكاديمية—ننصح بشدة بحجز سيارتك قبل أسبوع أو أسبوعين على الأقل من موعد الحفل لضمان توفر الطراز المفضل واللون الذي تفضله. وحين تقرر الطراز الأنسب ليومك المميز، فإن فريقنا في الكونسيرج بانتظار رسالتك."
    },
    # Block 14: FAQ Title (heading)
    {
        "type": "heading",
        "text": "الأسئلة الشائعة"
    },
    # Block 15: FAQ 1 Q (heading)
    {
        "type": "heading",
        "text": "ما هو السن القانوني لاستئجار رولز رويس لحفلات التخرج في دبي؟"
    },
    # Block 16: FAQ 1 A (paragraph)
    {
        "type": "paragraph",
        "text": "لاستئجار سيارة رولز رويس وقيادتها بنفسك، يجب ألا يقل عمر السائق عن خمسة وعشرين عاماً مع رخصة قيادة إماراتية أو دولية معترف بها. أما بالنسبة للطلاب الخريجين الذين يقل عمرهم عن 25 عاماً، فإن خدمة السائق الخاص لدينا هي الحل الأمثل؛ حيث لا توجد أي قيود على عمر الركاب في السيارات التي يقودها سائقونا، مما يتيح للخريجين فرصة الاستمتاع بالوصول الفاخر بأمان وراحة كاملة."
    },
    # Block 17: FAQ 2 Q (heading)
    {
        "type": "heading",
        "text": "كم تبلغ تكلفة استئجار رولز رويس ليوم التخرج؟"
    },
    # Block 18: FAQ 2 A (paragraph)
    {
        "type": "paragraph",
        "text": "تبدأ الأسعار اليومية لدينا من 3,800 درهم إماراتي لطراز جوست الأنيق. وتبلها تكلفة فانتوم الرائدة 5,800 درهم يومياً، وكولينان العائلية 6,500 درهم يومياً، وسبكتر الكهربائية بالكامل 7,500 درهم يومياً. تشمل هذه الأسعار التأمين الشامل ومسافة سير يومية تبلغ 250 كيلومتراً، ويمكن إضافة خدمة السائق الخاص مقابل رسوم تشغيلية طفيفة ومحددة مسبقاً."
    },
    # Block 19: FAQ 3 Q (heading)
    {
        "type": "heading",
        "text": "هل يمكننا تزيين سيارة رولز رويس لحفل التخرج؟"
    },
    # Block 20: FAQ 3 A (paragraph)
    {
        "type": "paragraph",
        "text": "نعم، يُسمح بالزينة الخفيفة والمؤقتة مثل الأشرطة الأنيقة، بشرط أن يتم تركيبها بطريقة آمنة لا تؤثر على طلاء السيارة الفاخر ولا تعيق رؤية السائق للطريق أو تغطي أجهزة الاستشعار. يرجى مناقشة تفاصيل الزينة المقترحة مع فريق الكونسيرج لدينا أثناء عملية الحجز للحصول على الموافقة المسبقة وتجنب أي رسوم إضافية."
    },
    # Block 21: FAQ 4 Q (heading)
    {
        "type": "heading",
        "text": "كيف تعمل وديعة التأمين وما هي فترة استردادها؟"
    },
    # Block 22: FAQ 4 A (paragraph)
    {
        "type": "paragraph",
        "text": "تعتبر وديعة التأمين مستردة بالكامل؛ حيث يتم إجراء تفويض مسبق بمبلغ التأمين على بطاقتك الائتمانية قبل بدء الإيجار. ويتم إلغاء التفويض تلقائياً فور إعادة السيارة بأمان والتحقق من عدم وجود أي مخالفات مرورية RTA أو رسوم سالك أو أضرار غير مغطاة بالتأمين. وتستغرق هذه العملية عادةً من 15 إلى 21 يوماً بحسب سياسات البنك الخاص بك."
    },
    # Block 23: FAQ 5 Q (heading)
    {
        "type": "heading",
        "text": "أين يمكن توصيل واستلام سيارة رولز رويس المستأجرة في دبي؟"
    },
    # Block 24: FAQ 5 A (paragraph)
    {
        "type": "paragraph",
        "text": "نوفر خدمة توصيل واستلام مجانية بالكامل إلى أي موقع تختاره في دبي، بما في ذلك فنادق ومنتجعات الخمس نجوم في داون تاون دبي، ونخلة جميرا، ودبي مارينا، وجي بي آر، ومركز دبي المالي العالمي DIFC. كما نوفر خدمة الاستقبال والتوصيل الخاصة في مطار دبي الدولي DXB ومطار آل مكتوم DWC، ويمكن التوصيل للإمارات الأخرى برسوم نقل إضافية بسيطة."
    },
    # Block 25: CTA (cta)
    {
        "type": "cta",
        "text": "اجعل حفل تخرجك حدثاً تاريخياً يُخلد في ذاكرة العائلة. تواصل مع فريق الكونسيرج لدينا اليوم عبر واتساب لحجز سيارتك المفضلة.",
        "buttonText": "احجز رولز رويس الآن",
        "buttonLink": "/booking"
    }
]

# ─────────────────────────────────────────────────────────────────────────────
# RUSSIAN CONTENT
# ─────────────────────────────────────────────────────────────────────────────
ru_blocks = [
    # Block 0: Hook (paragraph)
    {
        "type": "paragraph",
        "text": "На бумаге выпускной вечер или окончание учебного года — это просто финальное событие в академическом календаре. В реальности же это важнейшая личная веха, знаменующая переход от одной главы жизни к другой, полной новых перспектив. Когда это торжество проходит в Дубае — городе, который славится своим стремлением к абсолютному совершенству и где шоссе Шейха Зайда ежедневно служит подиумом для лучших достижений мирового автопрома, — прибытие на обычном автомобиле кажется упущенной возможностью. Поездка к красной дорожке у пятизвездочного отеля in Dubai Marina или к парадному входу роскошного зала в Даунтаун Дубае на Rolls-Royce — это лучший способ отпраздновать свои достижения. Для студентов, посвятивших годы упорной учебе, и для семей, поддерживавших их на каждом этапе пути, это появление становится ярким символом успеха. При этом вопрос заключается не только в том, как произвести впечатление, но и в том, как сделать это с тем достоинством, уверенностью и непревзойденным комфортом, которые может обеспечить только собранный вручную автомобиль из Гудвуда. В этом руководстве подробно рассматриваются вопросы аренды Rolls-Royce на выпускной в Дубае, оцениваются варианты самостоятельного вождения и заказа услуг личного водителя, приводятся конкретные тарифы на модели нашего автопарка, начинающиеся от 3 800 AED в сутки, и даются советы по созданию памятных снимков."
    },
    # Block 1: Quick Answer (paragraph with styled div)
    {
        "type": "paragraph",
        "text": "<div style=\"background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 Быстрый ответ:</strong> Стоимость аренды Rolls-Royce на выпускной в Дубае начинается от <strong>3 800 AED в сутки</strong> за модель Ghost. Флагманский седан Phantom обойдется в <strong>5 800 AED/день</strong>, внедорожник Cullinan — в <strong>6 500 AED/день</strong>, а электромобиль Spectre — в <strong>7 500 AED/день</strong>. Для самостоятельного вождения требуется возраст от 25 лет и водительские права, а услуги профессионального водителя RTA доступны для пассажиров любого возраста. Забронируйте автомобиль через WhatsApp: <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a>.</div>"
    },
    # Block 2: Section 1 Title (heading)
    {
        "type": "heading",
        "text": "Почему прибытие на Rolls-Royce — это главный символ академического успеха"
    },
    # Block 3: Section 1 Body (paragraph)
    {
        "type": "paragraph",
        "text": "Выпускной — событие не рядовое; это кульминация многолетнего упорного труда, бессонных ночей и амбициозных устремлений. В таком городе, как Дубай, где ценят достижения и празднуют успехи с особым размахом, ваше прибытие должно соответствовать масштабу этого дня. Rolls-Royce не просто доставляет вас к месту проведения церемонии; он создает правильный настрой еще до того, как вы сделаете первый шаг на красную дорожку. Спокойное достоинство автомобиля подчеркивает важность момента. Когда вы плавно движетесь по полумесяцу Пальм-Джумейра или проезжаете среди небоскребов Дубай Марина, салон полностью изолирует вас от городской суеты, создавая уединенное пространство, где вы можете провести время с семьей. Внушительный вид решетки радиатора Pantheon и статуэтки Дух экстаза заявляет о вашем прибытии с тихой уверенностью. Это опыт, который отдает должное вашему труду и превращает обычную поездку в настоящий праздник. Для родителей аренда Rolls-Royce для своего выпускника — это прекрасный способ выразить гордость и сделать подарок, соответствующий важности академических успехов. Выберете ли вы современный <a href=\"/ru/fleet/ghost\">Rolls-Royce Ghost</a> или величественный <a href=\"/ru/fleet/cullinan\">Rolls-Royce Cullinan</a>, вы получите уровень роскоши, с которым не сравнится ни один другой бренд, что гарантирует сохранение воспоминаний о празднике на долгие годы. Чтобы узнать больше о наших пакетах для праздничных мероприятий, перейдите на страницу <a href=\"/ru/services/wedding\">свадебных и праздничных услуг Rolls-Royce</a>."
    },
    # Block 4: Section 2 Title (heading)
    {
        "type": "heading",
        "text": "Самостоятельное вождение или профессиональный шофер: выбор лучшего формата"
    },
    # Block 5: Section 2 Body (paragraph)
    {
        "type": "paragraph",
        "text": "При планировании аренды Rolls-Royce на выпускной необходимо решить: управлять ли автомобилем самостоятельно или заказать услуги личного водителя. Для родителей или старших членов семьи, которые старше двадцати пяти лет и имеют действующее водительское удостоверение ОАЭ или признанные международные права, самостоятельное вождение дает редкую возможность ощутить мощь легендарного двигателя V12. Управление машиной такого уровня на шоссе Шейха Зайда или на Пальм-Джумейра — это отдельное удовольствие. Однако для самих выпускников, которые часто моложе двадцати пяти лет и не могут быть допущены к управлению по условиям местного страхования, или для семей, желающих полностью расслабиться и посвятить день торжеству, оптимальным выбором станет <a href=\"/ru/services/chauffeur\">профессиональный водитель</a>. Наши шоферы сертифицированы RTA, прошли строгую подготовку по безопасному вождению и превосходно знают Дубай. Они прибывают в строгих костюмах, обеспечивая безупречный сервис на высшем уровне. Выбирая поездку с водителем, выпускник может с комфортом расположиться на заднем сиденье, наслаждаясь отделкой из мягкой кожи, звездным небом на потолке и тишиной, чтобы прибыть на церемонию свежим и отдохнувшим."
    },
    # Block 6: Section 3 Title (heading)
    {
        "type": "heading",
        "text": "Создание уникальных кадров: фотосессия с Духом экстаза в Дубае"
    },
    # Block 7: Section 3 Body (paragraph)
    {
        "type": "paragraph",
        "text": "Настоящая ценность аренды Rolls-Royce на выпускной вечер заключается не только в самой поездке, но и в великолепных фотографиях, которые сохранят этот день в памяти. Дубай предлагает потрясающие архитектурные фоны, и сочетание этих пейзажей со шедевром из Гудвуда позволяет делать снимки невероятной красоты. Представьте кадры, сделанные в золотой час, где статуэтка Дух экстаза находится на переднем плане, а небоскребы Дубай Марина отражаются в безупречном лаке кузова. Фирменные двери Coach Doors, открывающиеся против хода движения, создают красивое обрамление для снимка выпускника в мантии и академической шапочке при выходе из автомобиля. В салоне система Starlight Headliner с 1 340 вручную установленными светодиодами создает эффект звездного неба, служа волшебным фоном для семейных портретов. Это не просто фотографии, а художественное воплощение важного жизненного достижения, запечатленное в атмосфере исключительной роскоши. Совместный портрет у отеля Burj Al Arab или кадр внутри тихой кабины автомобиля станут ярким напоминанием о празднике в одном из самых динамичных мегаполисов мира."
    },
    # Block 8: Section 3 List (list)
    {
        "type": "list",
        "items": [
            "<strong>Портрет у открытых дверей:</strong> Фотография выпускника, выходящего из салона через распахнутые назад двери, создающие величественную раму.",
            "<strong>Золотой час в Дубай Марина:</strong> Кадры на фоне силуэта Марины на закате, когда мягкие лучи солнца отражаются от полированного кузова.",
            "<strong>Семейное фото под звездами:</strong> Уютные портреты в салоне автомобиля под мягким свечением потолка Starlight Headliner.",
            "<strong>Решетка Pantheon Grille:</strong> Использование массивной и узнаваемой передней части Phantom или Ghost в качестве строгого фонда для портретов.",
            "<strong>Кадр под навесом отеля:</strong> Запечатлейте момент прибытия под яркими огнями парадного входа пятизвездочного курорта в Даунтаун Дубае."
        ]
    },
    # Block 9: Section 4 Title (heading)
    {
        "type": "heading",
        "text": "Суточные тарифы и стоимость аренды автомобилей премиального класса"
    },
    # Block 10: Section 4 Body (paragraph)
    {
        "type": "paragraph",
        "text": "Понимание финансовой составляющей важно при планировании логистики праздника. В Naqra FZE мы придерживаемся принципа полной финансовой прозрачности: заявленная цена является окончательной, без скрытых сборов и непредвиденных доплат при получении. Аренда Rolls-Royce начинается от 3 800 AED в сутки за модель Ghost, сочетающую в себе передовые технологии и классическую изысканность. Если вам необходим внушительный внедорожник, Cullinan доступен по цене 6 500 AED в сутки, а полностью электрический Spectre, олицетворяющий будущее бесшумного движения, стоит 7 500 AED в сутки. Флагманский седан Phantom, предлагающий абсолютный уровень комфорта на задних сиденьях, предлагается по цене 5 800 AED в сутки. В следующей таблице приведено детальное сравнение моделей для выбора наиболее подходящего варианта:<div class=\"overflow-x-auto my-8 border border-rolls-gold/20 rounded-lg\"><table class=\"w-full text-left border-collapse text-gray-300\"><thead><tr class=\"bg-rolls-gold/10 border-b border-rolls-gold/20\"><th class=\"p-4 text-white font-bold\">Модель Rolls-Royce</th><th class=\"p-4 text-white font-bold\">Суточный тариф (AED)</th><th class=\"p-4 text-white font-bold\">Двигатель / Трансмиссия</th><th class=\"p-4 text-white font-bold\">Главное преимущество для выпускного</th></tr></thead><tbody class=\"divide-y divide-rolls-gold/10\"><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Ghost</td><td class=\"p-4\">3 800 AED</td><td class=\"p-4\">6.75L V12 Twin-Turbo</td><td class=\"p-4\">Сбалансированная современная роскошь для поездок по городу</td></tr><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Phantom</td><td class=\"p-4\">5 800 AED</td><td class=\"p-4\">6.75L V12 Twin-Turbo</td><td class=\"p-4\">Флагманский статус для самых торжественных выездов</td></tr><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Cullinan</td><td class=\"p-4\">6 500 AED</td><td class=\"p-4\">6.75L V12 Twin-Turbo</td><td class=\"p-4\">Просторный салон и высокая посадка, идеально для семей</td></tr><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Spectre</td><td class=\"p-4\">7 500 AED</td><td class=\"p-4\">Dual-Motor Electric (EV)</td><td class=\"p-4\">Электрические технологии будущего и абсолютная тишина</td></tr></tbody></table></div>Все суточные тарифы включают базовую комплексную страховку и суточный пробег 250 километров. Для продолжительных мероприятий мы предлагаем специальные недельные тарифы, снижающие суточную стоимость. Ознакомиться со всеми актуальными предложениями можно на нашей <a href=\"/ru/pricing\">странице тарифов и стоимости автопарка</a>."
    },
    # Block 11: Image (image)
    {
        "type": "image",
        "src": "/images/blog/much-rent-rolls-royce-prom-dubai-2026-inline.webp",
        "alt": "Роскошный Rolls-Royce Ghost припаркован перед лобби отеля в Даунтаун Дубае на закате",
        "caption": "Ghost: гармоничное сочетание динамики и классического стиля для вашего праздника."
    },
    # Block 12: Section 5 Title (heading)
    {
        "type": "heading",
        "text": "Бронирование автомобиля: требования и логистика в день праздника"
    },
    # Block 13: Section 5 Body (paragraph)
    {
        "type": "paragraph",
        "text": "Процесс аренды Rolls-Royce в Naqra FZE организован так, чтобы быть максимально быстрым и комфортным. Мы исключили лишнюю бумажную волокиту и очереди, позволяя оформить весь прокат онлайн. Для самостоятельного вождения резидентам ОАЭ понадобятся водительское удостоверение страны и Emirates ID. Иностранным гостям необходимо предоставить паспорт, туристическую визу и права домашней страны или международное водительское удостоверение. Сумма залога (депозита) временно блокируется на вашей кредитной карте для покрытия платы за проезд по дорогам (Salik) или штрафов RTA и автоматически возвращается после окончания проката. Мы доставляем автомобиль чистым и полностью заправленным в ваш отель, на виллу или в VIP-терминал Международного аэропорта Дубая (DXB). Учитывая высокий спрос в сезоны выпускных вечеров в Дубае (в конце весны и зимние периоды), мы настоятельно рекомендуем бронировать машину за одну-две недели. Это гарантирует наличие нужной модели и цвета салона. Когда вы будете готовы запланировать идеальное появление на празднике, наша команда будет на связи."
    },
    # Block 14: FAQ Title (heading)
    {
        "type": "heading",
        "text": "Часто задаваемые вопросы"
    },
    # Block 15: FAQ 1 Q (heading)
    {
        "type": "heading",
        "text": "Каков минимальный возраст для аренды Rolls-Royce на выпускной в Дубае?"
    },
    # Block 16: FAQ 1 A (paragraph)
    {
        "type": "paragraph",
        "text": "Для самостоятельного вождения Rolls-Royce водитель должен быть не моложе двадцати пяти лет и иметь действующие водительские права ОАЭ или признанное международное удостоверение. Для выпускников младше 25 лет оптимальным выбором являются услуги профессионального водителя. В этом случае возрастные ограничения для пассажиров отсутствуют, что позволяет безопасно прибыть на мероприятие с максимальным комфортом."
    },
    # Block 17: FAQ 2 Q (heading)
    {
        "type": "heading",
        "text": "Сколько стоит прокат Rolls-Royce на выпускной вечер?"
    },
    # Block 18: FAQ 2 A (paragraph)
    {
        "type": "paragraph",
        "text": "Суточный тариф на аренду Rolls-Royce в Naqra FZE начинается от 3 800 AED за модель Ghost. Флагманский Phantom стоит 5 800 AED в день, Cullinan — 6 500 AED в день, а электрический Spectre — 7 500 AED в день. В тарифы включены страховка и пробег 250 километров в сутки. Услуги шофера предоставляются за небольшую дополнительную плату."
    },
    # Block 19: FAQ 3 Q (heading)
    {
        "type": "heading",
        "text": "Можно ли украсить Rolls-Royce перед праздничной церемонией?"
    },
    # Block 20: FAQ 3 A (paragraph)
    {
        "type": "paragraph",
        "text": "Да, допускается легкое и временное украшение автомобиля (например, лентами), при условии, что это делается аккуратно, не повреждает лакокрасочное покрытие кузова и не мешает обзору водителя. Любые элементы декора должны быть согласованы с нашей службой бронирования до момента доставки машины заказчику."
    },
    # Block 21: FAQ 4 Q (heading)
    {
        "type": "heading",
        "text": "Как работает страховка и что входит в базовый тариф?"
    },
    # Block 22: FAQ 4 A (paragraph)
    {
        "type": "paragraph",
        "text": "Все тарифы в Naqra FZE включают комплексное страхование в соответствии с государственными требованиями RTA Дубая. Это обеспечивает надежную защиту для вас и для автомобиля. При возникновении вопросов по условиям покрытия наш специалист предоставит подробную консультацию во время оформления заказа."
    },
    # Block 23: FAQ 5 Q (heading)
    {
        "type": "heading",
        "text": "Куда может быть доставлен Rolls-Royce для нашего праздника?"
    },
    # Block 24: FAQ 5 A (paragraph)
    {
        "type": "paragraph",
        "text": "Мы предлагаем бесплатную доставку и возврат автомобиля в любой отель, частную виллу или офис на территории Дубая, включая Даунтаун Дубай, Пальм-Джумейра, Дубай Марина, JBR и DIFC. Также доступна услуга встречи в Международном аэропорту Дубая (DXB) и DWC. Доставка в другие Эмираты согласовывается отдельно за небольшую плату."
    },
    # Block 25: CTA (cta)
    {
        "type": "cta",
        "text": "Сделайте этот академический рубеж по-настоящему историческим событием. Свяжитесь с нами в WhatsApp для бронирования вашего автомобиля.",
        "buttonText": "Забронировать Rolls-Royce",
        "buttonLink": "/booking"
    }
]

# ─────────────────────────────────────────────────────────────────────────────
# BUILD JSON
# ─────────────────────────────────────────────────────────────────────────────
article = {
    "en": {
        "title": "Graduation Day Rolls-Royce: How Much to Rent in Dubai",
        "description": "Rent a Rolls-Royce for graduation or prom in Dubai from AED 3,800/day. Compare Ghost, Cullinan, Phantom & Spectre rates, chauffeur rules, and booking tips.",
        "author": "Ahmed Salem",
        "date": "2026-11-17",
        "readTime": "10 min read",
        "category": "Events",
        "image": "/images/blog/much-rent-rolls-royce-prom-dubai-2026-cover.jpg",
        "content": en_blocks,
        "relatedArticles": [
            "rent-rolls-royce-wedding-dubai-packages-models",
            "ultimate-guide-rolls-royce-rental-dubai",
            "hourly-rolls-royce-rental-dubai",
            "rolls-royce-wedding-car-dubai",
            "much-does-cost-rent-rolls-royce-dubai-2026"
        ]
    },
    "ar": {
        "title": "رولز رويس ليوم التخرج: كم يبلغ سعر الإيجار في دبي؟",
        "description": "استأجر رولز رويس لحفل التخرج في دبي من 3,800 درهم/اليوم. قارن أسعار جوست، وكولينان، وفانتوم، وسبكتر، وتعرف على شروط السائق وخطوات الحجز.",
        "author": "Ahmed Salem",
        "date": "2026-11-17",
        "readTime": "10 دقائق قراءة",
        "category": "Events",
        "image": "/images/blog/much-rent-rolls-royce-prom-dubai-2026-cover.jpg",
        "content": ar_blocks,
        "relatedArticles": [
            "rent-rolls-royce-wedding-dubai-packages-models",
            "ultimate-guide-rolls-royce-rental-dubai",
            "hourly-rolls-royce-rental-dubai",
            "rolls-royce-wedding-car-dubai",
            "much-does-cost-rent-rolls-royce-dubai-2026"
        ]
    },
    "ru": {
        "title": "Rolls-Royce на выпускной: сколько стоит аренда в Дубае",
        "description": "Аренда Rolls-Royce на выпускной в Дубае от 3 800 AED/день. Сравните Ghost, Cullinan, Phantom и Spectre, правила аренды с водителем и условия бронирования.",
        "author": "Ahmed Salem",
        "date": "2026-11-17",
        "readTime": "10 мин чтения",
        "category": "Events",
        "image": "/images/blog/much-rent-rolls-royce-prom-dubai-2026-cover.jpg",
        "content": ru_blocks,
        "relatedArticles": [
            "rent-rolls-royce-wedding-dubai-packages-models",
            "ultimate-guide-rolls-royce-rental-dubai",
            "hourly-rolls-royce-rental-dubai",
            "rolls-royce-wedding-car-dubai",
            "much-does-cost-rent-rolls-royce-dubai-2026"
        ]
    }
}

# Verify word count limits before writing
wc_en = count_words(article["en"]["content"])
wc_ar = count_words(article["ar"]["content"])
wc_ru = count_words(article["ru"]["content"])

print(f"EN word count: {wc_en} (>=1500? {wc_en >= 1500})")
print(f"AR word count: {wc_ar} (>=1500? {wc_ar >= 1500})")
print(f"RU word count: {wc_ru} (>=1500? {wc_ru >= 1500})")

# Write to target path
target_path = "/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com/src/data/blog/much-rent-rolls-royce-prom-dubai-2026.json"
os.makedirs(os.path.dirname(target_path), exist_ok=True)
with open(target_path, "w", encoding="utf-8") as f:
    json.dump(article, f, ensure_ascii=False, indent=2)

print(f"Successfully wrote JSON file to {target_path}")

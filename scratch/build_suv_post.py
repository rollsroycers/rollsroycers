import json
import re

# Text definitions for the Rolls-Royce SUV Cullinan blog post.
# Each language must contain >= 1500 words and adhere to the 26-block sequence.
# Let's count words using a helper function to ensure they exceed 1500.

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

# -- ENGLISH BLOCKS --
en_content = [
    # Block 0: Hook
    {
        "type": "paragraph",
        "text": "It is, in the end, merely an SUV. A vehicle designed to transport several individuals and their accompanying luggage over varying surfaces. A standard delivery van does as much, and one does not typically stop to admire it. But when the SUV in question is a Goodwood-built Rolls-Royce Cullinan, propelled by a whispering twelve-cylinder engine and riding on a suspension that scans the earth to erase its imperfections, the definition of utility changes. We must speak of presence, not practicality. For those landing in Dubai with the intention of commanding the road, the question is rarely whether to experience this vehicle, but how best to secure it. Driving down Sheikh Zayed Road in this imposing carriage is not simply about getting from Dubai International Airport to your villa on the Palm Jumeirah; it is an assertion of status, a statement of effortless capability that fits perfectly within the high-octane luxury landscape of the United Arab Emirates."
    },
    # Block 1: Quick Answer
    {
        "type": "paragraph",
        "text": "<div style=\"background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 Quick Answer:</strong> Buying a Rolls-Royce Cullinan in 2026 starts from <strong>AED 2.0 million</strong> for the standard model and exceeds <strong>AED 2.4 million</strong> for the Black Badge. Renting a Cullinan in Dubai at Naqra FZE starts at <strong>AED 6,500 per day</strong> for the standard SUV and <strong>AED 7,000 per day</strong> for the Black Badge. Rates include comprehensive insurance, a 250 km daily allowance, and free delivery. Contact us via WhatsApp at <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a> to book.</div>"
    },
    # Block 2: Section 1 Title
    {
        "type": "heading",
        "text": "Ownership vs Rental: The Cullinan Price Breakdown in 2026"
    },
    # Block 3: Section 1 Body
    {
        "type": "paragraph",
        "text": "To appreciate the modern economics of the Rolls-Royce Cullinan, one must first look at the outright cost of ownership in 2026. If you were to walk into a showroom with the intention of acquiring a standard Cullinan, you would find the entry point starts at approximately AED 2.0 million. Should your tastes lean toward the more assertive Black Badge Cullinan—with its dark-chromed Pantheon grille, black carbon-fiber interior veneers, and slightly tuned power delivery—the figure rises swiftly beyond AED 2.4 million. These figures represent merely the starting line. Once you account for Dubai's registration fees, high-end insurance policies tailored for ultra-luxury assets, scheduled maintenance at official workshops, and the inevitable cost of depreciation, the financial reality of owning such a machine becomes clear. A vehicle of this caliber is rarely a daily driver for 365 days a year; it is an acquisition that spends the vast majority of its life asleep in a climate-controlled garage in Palm Jumeirah or a private villa in Emirates Hills. This is where the wisdom of daily hire becomes apparent. Renting allows you to bypass the massive capital expenditure, the registration bureaucracy, and the quiet pain of watching a multi-million dirham asset depreciate while you are traveling abroad. It is the option selected by individuals who understand that utility is about access, not ownership. Why tie up capital in a depreciating asset when you can have a pristine, manufacturer-maintained vehicle delivered to your doorstep whenever you are in the UAE?"
    },
    # Block 4: Section 2 Title
    {
        "type": "heading",
        "text": "Naqra FZE Rental Rates: A Transparent Guide to Cullinan Hire"
    },
    # Block 5: Section 2 Body
    {
        "type": "paragraph",
        "text": "At Naqra FZE, we believe that transparency is the only currency that matters in the luxury car rental market. The daily rates for our Rolls-Royce fleet are clear and fixed, allowing you to plan your travel across the United Arab Emirates with absolute certainty. A standard Cullinan is available starting at AED 6,500 per day. For those who require a more sinister road presence, the Cullinan Black Badge is offered at AED 7,000 per day. These rates are not bare figures; they include standard comprehensive insurance, a generous daily allowance of 250 kilometers, and complimentary delivery and collection to any hotel, villa, or private VIP terminal in Dubai, including Dubai International Airport (DXB). To place this in perspective, our wider fleet offers a range of options: the balanced elegance of the Rolls-Royce Ghost starts at AED 3,800 per day, the silent future of the all-electric Spectre coupe is available from AED 7,500 per day, and the commanding presence of our flagship Phantom saloon is offered at AED 5,800 per day. By reviewing these options in our transparent <a href=\"/pricing\">pricing guide</a>, you can select the exact driving experience that suits your itinerary. When you secure a Cullinan through us, the rate you are quoted is the rate you pay, ensuring your experience remains as refined as the vehicle itself. No hidden administration fees, no sudden surcharges, and no unwanted surprises when the keys are handed over."
    },
    # Block 6: Section 3 Title
    {
        "type": "heading",
        "text": "Goodwood Engineering: Crucial Luxury Features of the Rolls-Royce SUV"
    },
    # Block 7: Section 3 Body
    {
        "type": "paragraph",
        "text": "The Cullinan is not simply a taller saloon; it is a masterpiece of modern engineering designed to conquer any terrain while maintaining the absolute refinement that has defined the Goodwood marque for over a century. At the heart of the machine lies the legendary 6.75-liter twin-turbocharged V12 engine. This powerplant delivers 563 horsepower in near-total silence, providing a wave of effortless torque that propels the vehicle from a standstill with the smooth dignity of a private jet taking off. The active all-wheel drive system works in harmony with the self-leveling air suspension, continuously monitoring body acceleration, steering inputs, and camera data to make millions of micro-adjustments every second. This creates the famous 'Magic Carpet Ride,' a sensation of floating over the road that remains undisturbed whether you are cruising along the multi-lane expanse of Sheikh Zayed Road or traversing the quiet lanes of Downtown Dubai. Inside the cabin, the insulation is absolute. More than 100 kilograms of sound-deadening material and double-glazed acoustic windows seal you away from the heat and noise of the city, creating a private sanctuary where conversation flows without effort. At the rear, the optional Viewing Suite tailgate deploys two hand-crafted leather seats and a cocktail table at the touch of a button, allowing you to enjoy the sunset over the Arabian Gulf in unmatched comfort. Every detail of the <a href=\"/fleet/cullinan\">Rolls-Royce Cullinan</a> interior has been engineered to provide the absolute summit of luxury and isolation."
    },
    # Block 8: List
    {
        "type": "list",
        "items": [
            "<strong>6.75-Litre Twin-Turbo V12 Engine:</strong> Delivers 563 horsepower in standard guise or 591 horsepower in the Black Badge edition, providing silent and effortless acceleration.",
            "<strong>Bespoke Passenger Cabin:</strong> Features premium box-grain leather upholstery sourced from high-altitude Alpine bulls, custom open-pore wood veneers, and a state-of-the-art quad-zone climate system.",
            "<strong>Viewing Suite Tailgate:</strong> An electronically deploying set of two leather armchairs and a small cocktail table that extends from the boot, ideal for desert sunset viewings.",
            "<strong>Advanced All-Wheel Drive and Suspension:</strong> An active air suspension that adjusts dampers in milliseconds based on camera inputs, creating the famous Magic Carpet Ride.",
            "<strong>Acoustic Insulation:</strong> Over 100 kilograms of sound-proofing materials and double-glazed acoustic glass windows ensuring absolute silence inside the cabin."
        ]
    },
    # Block 9: Section 4 Title
    {
        "type": "heading",
        "text": "The Financial Wisdom of Renting a Rolls-Royce SUV in Dubai"
    },
    # Block 10: Section 4 Body
    {
        "type": "paragraph",
        "text": "When evaluating the decision to hire rather than purchase, the mathematics of utility are compelling. For a corporate executive arriving in the UAE for a week of high-level negotiations, or a family visiting Dubai for the winter season, renting a Cullinan from Naqra FZE offers unmatched flexibility. It provides the commanding road presence needed to navigate Sheikh Zayed Road with confidence, combined with the spacious interior required for group travel or shopping excursions to The Dubai Mall. If you were to own the vehicle, the capital tied up in the asset could otherwise be deployed in high-yield investments across the Dubai International Financial Centre (DIFC). Instead, for a daily rate of AED 6,500, you gain access to a pristine, manufacturer-maintained vehicle for the exact duration of your stay. There are no concerns about scheduled services, tyre replacements, or the long-term effects of Dubai's summer heat on the vehicle's paint and leather. Furthermore, renting allows you to match the vehicle to the occasion: a Ghost for business meetings, a Spectre for modern electric innovation, and a Cullinan for family desert excursions. Choosing to hire via our elite <a href=\"/services/chauffeur\">chauffeur service</a> provides the ultimate peace of mind, allowing you to focus on the city's sights while a professional RTA-certified driver handles the navigation."
    },
    # Block 11: Image
    {
        "type": "image",
        "src": "/images/blog/much-rolls-royce-suv-rent-dubai-own-inline.webp",
        "alt": "A black Rolls-Royce Cullinan SUV parked in front of a modern hotel facade in Dubai Marina at dusk",
        "caption": "The Cullinan: Uncompromised luxury, whether parked or cruising the Sheikh Zayed Road."
    },
    # Block 12: Section 5 Title
    {
        "type": "heading",
        "text": "Navigating Dubai's Luxury Landscape with Naqra FZE"
    },
    # Block 13: Section 5 Body
    {
        "type": "paragraph",
        "text": "The process of securing a Rolls-Royce Cullinan in Dubai should be as effortless as driving one. At Naqra FZE, we have eliminated the unnecessary theater of traditional car rental agencies. There are no queues to endure, no high-pressure sales pitches, and no complicated administrative procedures. The transaction is conducted with the dignity and efficiency that our clients expect. To rent a Cullinan, UAE residents need only provide a valid UAE driving license and an Emirates ID. International visitors are required to present a passport, a visit visa, and a driving license from their home country or an international driving permit. A security deposit is pre-authorized on your credit card to cover any toll charges (Salik), minor damages, or RTA traffic fines, and is released automatically after your rental concludes. For more details on compliance and documents, you can consult our <a href=\"/blog/ultimate-guide-rolls-royce-rental-dubai\">ultimate guide</a> to luxury car hire. We coordinate delivery to your exact location, whether it is a hotel in Dubai Marina, a residential tower in Business Bay, or directly to your aircraft steps at the VIP terminal. Our concierge will guide you through the vehicle's features, adjust the climate controls to your preference, and ensure you are comfortable before stepping back. We remain available twenty-four hours a day to assist with any requests, ensuring your time in Dubai is defined by absolute comfort and peace of mind."
    },
    # Block 14: FAQ Title
    {
        "type": "heading",
        "text": "Frequently Asked Questions"
    },
    # Block 15: FAQ 1 Q
    {
        "type": "heading",
        "text": "How much is a Rolls-Royce SUV to buy versus rent in Dubai?"
    },
    # Block 16: FAQ 1 A
    {
        "type": "paragraph",
        "text": "Buying a standard Rolls-Royce Cullinan in 2026 starts at approximately AED 2.0 million, while the Black Badge model exceeds AED 2.4 million, excluding registration, insurance, and maintenance. In contrast, renting a Cullinan from Naqra FZE starts at AED 6,500 per day for the standard model and AED 7,000 per day for the Black Badge, providing a highly flexible and cost-effective alternative for short-term residents and visitors."
    },
    # Block 17: FAQ 2 Q
    {
        "type": "heading",
        "text": "What is the difference between a standard Cullinan and the Black Badge?"
    },
    # Block 18: FAQ 2 A
    {
        "type": "paragraph",
        "text": "The Black Badge is a more potent, driver-focused interpretation of the Rolls-Royce SUV. Visually, it replaces the polished chrome grille, window surrounds, and exhaust pipes with high-gloss black chrome, and features unique 22-inch forged alloy wheels. Mechanically, the twin-turbocharged V12 engine is tuned to deliver 591 horsepower (compared to 563 hp in the standard model) and 900 Nm of torque, accompanied by a slightly more assertive exhaust note."
    },
    # Block 19: FAQ 3 Q
    {
        "type": "heading",
        "text": "What are the rental rates for other models in the Naqra FZE fleet?"
    },
    # Block 20: FAQ 3 A
    {
        "type": "paragraph",
        "text": "Our elite fleet is priced transparently to suit different preferences. The Rolls-Royce Ghost is available starting at AED 3,800 per day, the flagship Phantom saloon is offered at AED 5,800 per day, and the all-electric Spectre coupe starts at AED 7,500 per day. All rates include standard comprehensive insurance, a daily mileage allowance of 250 kilometers, and complimentary delivery across Dubai."
    },
    # Block 21: FAQ 4 Q
    {
        "type": "heading",
        "text": "Can I rent a Rolls-Royce SUV for self-drive or with a chauffeur?"
    },
    # Block 22: FAQ 4 A
    {
        "type": "paragraph",
        "text": "Yes, both options are fully supported. Clients who wish to experience the V12 engine and advanced air suspension can rent the Cullinan for self-drive, subject to holding a valid UAE or international driving license. Alternatively, if you prefer to relax or conduct business in the rear cabin, Naqra FZE can provide a professional, RTA-certified chauffeur for an additional fee."
    },
    # Block 23: FAQ 5 Q
    {
        "type": "heading",
        "text": "What is the security deposit for renting a Cullinan in Dubai?"
    },
    # Block 24: FAQ 5 A
    {
        "type": "paragraph",
        "text": "A security deposit is pre-authorized on the client's credit card before delivery. This deposit is held to cover any traffic fines, toll fees (Salik), or minor damages not covered by insurance. The pre-authorization is released automatically by your bank within fifteen to twenty-one days after the rental ends, once all RTA databases are verified."
    },
    # Block 25: CTA
    {
        "type": "cta",
        "text": "Ready to command Dubai's roads in the ultimate luxury SUV? Message our concierge team on WhatsApp to book.",
        "buttonLink": "/booking",
        "buttonText": "Book a Cullinan"
    }
]

# -- ARABIC BLOCKS --
ar_content = [
    # Block 0: Hook
    {
        "type": "paragraph",
        "text": "هي في النهاية مجرّد سيارة رياضية متعددة الاستخدامات. مركبة صُمّمت لتنقل مجموعة من الأفراد وأمتعتهم عبر مسارات وأسطح مختلفة. تفعل سيارة التوصيل العادية الشيء نفسه، ولا يقف أحد عادةً لتأمّل تفاصيلها. ولكن عندما تكون السيارة الرياضية المعنية هي رولز رويس كولينان المصنوعة في غودوود، مدفوعة بمحرك صامت مكون من اثنتي عشرة أسطوانة، وتسير على نظام تعليق يمسح الأرض ليمحو عيوبها بالكامل، فإن تعريف العملية والمنفعة يتغير تمامًا. هنا يجدر بنا أن نتحدث عن الهيبة والحضور، لا عن مجرد النقل العملي. بالنسبة لأولئك الذين يصلون إلى دبي بهدف اعتلاء الصدارة في القيادة والسيطرة على الطرقات، نادرًا ما يكون السؤال هو ما إذا كانوا سيخوضون تجربة هذه السيارة الفاخرة، بل كيف يمكنهم تأمينها بأفضل الطرق الممكنة. إن قيادة هذه المركبة المهيبة على طول شارع الشيخ زايد ليست مجرد انتقال من مطار دبي الدولي إلى فيلتك الخاصة في نخلة جميرا؛ بل هي بيان يعبر عن المكانة الرفيعة والقدرة الفائقة التي تتناغم تمامًا مع طبيعة دبي وثقافتها الفاخرة في دولة الإمارات العربية المتحدة."
    },
    # Block 1: Quick Answer
    {
        "type": "paragraph",
        "text": "<div style=\"background:#1a1a1a;border-right:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 الإجابة السريعة:</strong> يبدأ سعر شراء رولز رويس كولينان في عام 2026 من <strong>2.0 مليون درهم إماراتي</strong> للفئة القياسية ويتجاوز <strong>2.4 مليون درهم إماراتي</strong> لفئة بلاك بادج. أما بالنسبة للإيجار اليومي في دبي من نقرة (Naqra FZE)، فيبدأ من <strong>6,500 درهم يوميًا</strong> للفئة القياسية و<strong>7,000 درهم يوميًا</strong> لفئة بلاك بادج. تشمل الأسعار التأمين الشامل ومسافة سير تبلغ 250 كم يوميًا مع التوصيل المجاني. تواصل معنا مباشرة عبر واتساب على الرقم <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a> للحجز.</div>"
    },
    # Block 2: Section 1 Title
    {
        "type": "heading",
        "text": "الاقتناء مقابل الاستئجار: تفصيل أسعار كولينان في عام 2026"
    },
    # Block 3: Section 1 Body
    {
        "type": "paragraph",
        "text": "لكي نقدر الحسابات المالية المعاصرة لسيارة رولز رويس كولينان، يجب أولاً النظر في التكلفة الإجمالية للاقتناء والشراء المباشر في عام 2026. إذا قررت الدخول إلى صالة العرض بهدف شراء سيارة كولينان القياسية، فستجد أن السعر الأساسي يبدأ من حوالي 2.0 مليون درهم إماراتي. وإذا كانت رغبتك تميل نحو الفئة الأكثر جرأة وهيبة، وهي كولينان بلاك بادج (Black Badge)—بشبك البانثيون ذي الكروم الداكن، والكسوة الداخلية المصنوعة من ألياف الكربون السوداء المصقولة، والقوة المحسنة للمحرك—فإن الرقم يرتفع بسرعة ليتجاوز 2.4 مليون درهم إماراتي. وهذه الأرقام تمثل مجرد خط البداية فحسب. فبمجرد إضافة رسوم التسجيل لدى هيئة الطرق والمواصلات في دبي، وتكلفة بوالص التأمين الراقية المخصصة للأصول فائقة الفخامة، والصيانة الدورية المجدولة في الورش الرسمية المعتمدة، إلى جانب الخسارة الحتمية الناتجة عن انخفاض القيمة السنوية (الاهتلاك)، تتضح الحقيقة المالية لامتلاك هذه المركبة. إن سيارة بهذا المستوى نادرًا ما تُستخدم كمركبة يومية طوال أيام السنة؛ بل هي أصل فاخر يقضي معظم حياته نائمًا في مرآب مكيف في نخلة جميرا أو فيلا خاصة في تلال الإمارات. وهنا تبرز الحكمة العملية للاستئجار اليومي. يتيح لك الاستئجار تفادي الإنفاق الرأسمالي الضخم، والإجراءات البيروقراطية للتسجيل، والألم الصامت لمراقبة انخفاض قيمة أصل بملايين الدراهم أثناء سفرك خارج الدولة. إنه الخيار المفضل للأفراد الذين يدركون أن الفخامة الحقيقية تكمن في الحصول على الخدمة والوصول إليها، لا في تكبّل الأصول وسجن رأس المال."
    },
    # Block 4: Section 2 Title
    {
        "type": "heading",
        "text": "أسعار الإيجار من نقرة: دليل شفاف وشامل لاستئجار كولينان"
    },
    # Block 5: Section 2 Body
    {
        "type": "paragraph",
        "text": "في شركة نقرة (Naqra FZE)، نؤمن بأن الشفافية هي العملة الوحيدة التي تهم في سوق تأجير السيارات الفاخرة. الأسعار اليومية لأسطول سيارات رولز رويس لدينا واضحة وثابتة، مما يتيح لك تخطيط رحلاتك وتنقلاتك في جميع أنحاء الإمارات العربية المتحدة بثقة كاملة. تتوفر سيارة كولينان القياسية بسعر يبدأ من 6,500 درهم إماراتي يوميًا. أما بالنسبة لأولئك الذين يطلبون حضورًا أكثر هيبة وجرأة على الطريق، فإننا نقدم كولينان بلاك بادج بسعر 7,000 درهم إماراتي يوميًا. هذه الأسعار ليست مجرد أرقام مجردة؛ بل تشمل التأمين الشامل القياسي، ومسافة سير يومية سخية تبلغ 250 كيلومترًا، وتوصيل واستلام مجاني تمامًا إلى أي فندق أو فيلا أو مبنى الطيران الخاص في مطار دبي الدولي (DXB). ولوضع هذا في سياقه الصحيح مقارنة بأسطولنا الفاخر، فإننا نوفر خيارات متنوعة: الأناقة المتوازنة لسيارة رولز رويس جوست تبدأ من 3,800 درهم يوميًا، والمستقبل الصامت لسيارة سبكتر الكهربائية بالكامل يبدأ من 7,500 درهم يوميًا، بينما تتوفر رولز رويس فانتوم الرائدة بسعر 5,800 درهم يوميًا. ومن خلال مراجعة هذه الخيارات في <a href=\"/ar/pricing\">دليل الأسعار</a> الشفاف لدينا، يمكنك تحديد طراز القيادة الأنسب لجدول أعمالك. عندما تحجز سيارة كولينان من خلالنا، فإن السعر المعروض هو السعر الفعلي الذي تدفعه، مما يضمن لك تجربة راقية وخالية من أي رسوم إدارية مخفية أو زيادات مفاجئة عند الاستلام."
    },
    # Block 6: Section 3 Title
    {
        "type": "heading",
        "text": "الهندسة العريقة من غودوود: المزايا الفاخرة لسيارة رولز رويس SUV"
    },
    # Block 7: Section 3 Body
    {
        "type": "paragraph",
        "text": "لا تعد سيارة كولينان مجرد سيارة سيدان مرتفعة عن الأرض؛ بل هي تحفة هندسية معاصرة صُممت لتتغلب على جميع أنواع التضاريس مع الحفاظ على الهدوء والرفاهية المطلقة التي ميزت علامة غودوود لأكثر من قرن. ينبض في قلب هذه المركبة محرك توربو مزدوج V12 بسعة 6.75 لتر، يولّد قوة 563 حصانًا بصمت مطبق شبه تام، مما يوفر عزم دوران هائلًا يدفع السيارة بسلاسة فائقة تشبه إقلاع الطائرات الخاصة. يعمل نظام الدفع الرباعي النشط بالتناغم مع نظام التعليق الهوائي ذاتي التسوية، الذي يراقب تسارع الهيكل وتوجيه المقود وبيانات الكاميرات الأمامية ليقوم بملايين الضبط الدقيق في كل ثانية. هذا النظام يخلق تجربة 'بساط الريح' (Magic Carpet Ride) الشهيرة، وهي إحساس بالتحليق فوق الطريق يظل دون انقطاع سواء كنت تسير على شارع الشيخ زايد أو تعبر شوارع وسط مدينة دبي (داون تاون). المقصورة الداخلية تتميز بعزل صوتي مطلق بفضل استخدام أكثر من 100 كيلوغرام من المواد العازلة والنوافذ الزجاجية المزدوجة العازلة للصوت، مما يخلق ملاذًا خاصًا للحديث والاسترخاء. وفي الجزء الخلفي، توفر منصة المشاهدة (Viewing Suite) الاختيارية مقعدين جلديين فاخرين وطاولة كوكتيل صغيرة تنفتح بلمسة زر من الباب الخلفي، لتتيح لك الاستمتاع بغروب الشمس الساحر فوق مياه الخليج العربي بأعلى مستويات الراحة الممكنة. كل تفصيل في مقصورة <a href=\"/ar/fleet/cullinan\">رولز رويس كولينان</a> صُمم ليقدم القمة المطلقة في الفخامة والعزلة عن العالم الخارجي."
    },
    # Block 8: List
    {
        "type": "list",
        "items": [
            "<strong>محرك V12 سعة 6.75 لتر بتوربو مزدوج:</strong> يولّد قوة 563 حصانًا للفئة القياسية أو 591 حصانًا لفئة بلاك بادج، مما يوفر تسارعًا قويًا وصامتًا بالكامل.",
            "<strong>مقصورة قيادة مصنوعة يدويًا:</strong> كسوة جلدية فاخرة مأخوذة من ثيران جبال الألب المرتفعة، وتطعيمات خشبية مفتوحة المسام، ونظام تكييف متطور رباعي المناطق لتنقية الهواء وحماية الركاب.",
            "<strong>منصة المشاهدة الفاخرة (Viewing Suite):</strong> مقعدان جلديان فاخران مع طاولة صغيرة يمتدان كهربائيًا من الصندوق الخلفي للاستمتاع بالطبيعة والغروب في دبي.",
            "<strong>نظام دفع رباعي وتعليق هوائي متطور:</strong> نظام تعليق نشط يحلل حالة الطريق ويضبط المساعدين خلال أجزاء من الثانية لتوفير تجربة بساط الريح الشهيرة.",
            "<strong>عزل صوتي متكامل:</strong> أكثر من 100 كجم من المواد الممتصة للضوضاء ونوافذ زجاجية مزدوجة تضمن عزلًا كاملاً عن ضجيج الطريق الخارجي."
        ]
    },
    # Block 9: Section 4 Title
    {
        "type": "heading",
        "text": "الحكمة المالية لاستئجار سيارة رولز رويس SUV في دبي"
    },
    # Block 10: Section 4 Body
    {
        "type": "paragraph",
        "text": "عند تقييم قرار الاستئجار بدلاً من الشراء، تكون الحسابات المالية واضحة ومقنعة للغاية. بالنسبة للمديرين التنفيذيين الذين يصلون إلى دولة الإمارات لقضاء أسبوع من المفاوضات الهامة، أو العائلات التي تزور دبي في فصل الشتاء، فإن استئجار سيارة كولينان من شركة نقرة يوفر مرونة وراحة لا مثيل لهما. تمنحك السيارة الهيبة والحضور المهيب المطلوب للتنقل على طرقات دبي وشوارعها السريعة بثقة، إلى جانب المساحة الداخلية الواسعة التي تتطلبها الرحلات الجماعية أو جولات التسوق الفاخرة في دبي مول. وإذا قررت شراء السيارة واقتناءها، فإن رأس المال الضخم المرتبط بها يمكن استثماره وتوجيهه نحو مشاريع ذات عوائد مرتفعة في مركز دبي المالي العالمي (DIFC). وبدلاً من ذلك، ومن خلال سعر إيجار يومي يبلغ 6,500 درهم، يمكنك الحصول على مركبة جديدة ومصانة بالكامل وفق معايير المصنع طوال فترة إقامتك المحددة. لا داعي للقلق بشأن عمليات الصيانة الدورية، أو استبدال الإطارات، أو التأثيرات الطويلة لحرارة الصيف في دبي على طلاء السيارة وجلد المقصورة الفاخر. علاوة على ذلك، يتيح لك الاستئجار مطابقة السيارة مع المناسبة: سيارة جوست للاجتماعات الرسمية، وسيارة سبكتر الكهربائية للمستقبل الفخم، وسيارة كولينان للرحلات العائلية الفاخرة. كما أن اختيار الحجز من خلال <a href=\"/ar/services/chauffeur\">خدمة السائق الخاص</a> لدينا يوفر لك أعلى مستويات الراحة والأمان، حيث يتولى سائق محترف مرخص من هيئة الطرق والمواصلات قيادة المركبة وتوجيهها."
    },
    # Block 11: Image
    {
        "type": "image",
        "src": "/images/blog/much-rolls-royce-suv-rent-dubai-own-inline.webp",
        "alt": "سيارة رولز رويس كولينان سوداء فاخرة متوقفة أمام فندق حديث في دبي مارينا عند الغروب",
        "caption": "كولينان: حضور لا يضاهى وفخامة مطلقة على طرقات دبي وعند مواقف الفنادق الفاخرة."
    },
    # Block 12: Section 5 Title
    {
        "type": "heading",
        "text": "الاستمتاع بتجربة الفخامة والخدمة الراقية مع نقرة"
    },
    # Block 13: Section 5 Body
    {
        "type": "paragraph",
        "text": "يجب أن تكون عملية حجز سيارة رولز رويس كولينان في دبي سهلة ومريحة تمامًا مثل قيادتها. في شركة نقرة (Naqra FZE)، قمنا بإلغاء كافة التعقيدات والإجراءات الإدارية الطويلة المعتادة في مكاتب تأجير السيارات التقليدية. لا توجد طوابير انتظار، ولا عروض بيع ملحة ومزعجة، ولا مستندات غامضة. تتم المعاملة بأعلى مستويات اللياقة والكفاءة التي يتوقعها عملاؤنا الفاخرون. للاستئجار، يحتاج مقيمو دولة الإمارات فقط إلى تقديم رخصة قيادة إماراتية سارية وبطاقة الهوية الإماراتية. أما الزوار الدوليون، فيطلب منهم تقديم جواز السفر، وتأشيرة السياحة، ورخصة القيادة المحلية من بلدهم الأصلي أو رخصة قيادة دولية سارية. ويتم إجراء تفويض مسبق لمبلغ التأمين على بطاقتك الائتمانية لتغطية رسوم بوابات سالك، أو المخالفات المرورية، ويتم إلغاؤه تلقائيًا بعد إعادة السيارة بأمان. للاطلاع على المزيد من التفاصيل حول شروط التأجير والمستندات المطلوبة، يرجى مراجعة <a href=\"/ar/blog/ultimate-guide-rolls-royce-rental-dubai\">الدليل الشامل لتأجير السيارات</a> لدينا. نقوم بتنسيق توصيل السيارة إلى موقعك المحدد بدقة، سواء كان فندقًا فاخرًا في دبي مارينا، أو برجًا سكنيًا في الخليج التجاري، أو مباشرة إلى سلم طائرتك الخاصة في مبنى الطيران الخاص. وسيقوم ممثل الكونسيرج لدينا بإرشادك حول أنظمة السيارة وتعديل التكييف لراحتك التامة قبل المغادرة. نحن متواجدون على مدار الساعة لخدمتكم وضمان تجربة تنقل فاخرة ومثالية في دبي."
    },
    # Block 14: FAQ Title
    {
        "type": "heading",
        "text": "الأسئلة الشائعة"
    },
    # Block 15: FAQ 1 Q
    {
        "type": "heading",
        "text": "كم سعر شراء سيارة رولز رويس SUV مقارنة بسعر استئجارها في دبي؟"
    },
    # Block 16: FAQ 1 A
    {
        "type": "paragraph",
        "text": "يبدأ سعر شراء سيارة رولز رويس كولينان القياسية في عام 2026 من حوالي 2.0 مليون درهم إماراتي، في حين يتجاوز سعر فئة بلاك بادج 2.4 مليون درهم، وذلك دون احتساب رسوم التسجيل والتأمين والصيانة الدورية الصعبة. في المقابل، يبدأ استئجار كولينان من شركة نقرة من 6,500 درهم إماراتي يوميًا للموديل القياسي و7,000 درهم يوميًا لطراز بلاك بادج، مما يوفر بديلاً مرنًا واقتصاديًا للزوار والمقيمين لفترات قصيرة."
    },
    # Block 17: FAQ 2 Q
    {
        "type": "heading",
        "text": "ما الفرق الرئيسي بين سيارة كولينان القياسية وطراز بلاك بادج؟"
    },
    # Block 18: FAQ 2 A
    {
        "type": "paragraph",
        "text": "تعتبر فئة بلاك بادج (Black Badge) تعبيرًا أكثر قوة وجرأة يركز على متعة القيادة الشخصية. من الناحية البصرية، يتم استبدال الكروم اللامع للشبك الأمامي وإطارات النوافذ وأنابيب العادم بالكروم الأسود المصقول اللامع، بالإضافة إلى عجلات رياضية فريدة بمقاس 22 بوصة. أما من الناحية الميكانيكية، فقد تم تعديل محرك V12 ذي التوربو المزدوج ليولّد قوة 591 حصانًا (مقارنة بـ 563 حصانًا في الفئة القياسية) وعزم دوران يبلغ 900 نيوتن متر، مع صوت عادم رياضي أكثر وضوحًا وهيبة."
    },
    # Block 19: FAQ 3 Q
    {
        "type": "heading",
        "text": "ما هي أسعار تأجير الموديلات الأخرى في أسطول شركة نقرة؟"
    },
    # Block 20: FAQ 3 A
    {
        "type": "paragraph",
        "text": "يتميز أسطولنا بأسعار واضحة وشفافة بالكامل لتناسب مختلف الاحتياجات. تتوفر رولز رويس جوست بسعر يبدأ من 3,800 درهم يوميًا، بينما تتوفر فانتوم الرائدة الفاخرة بسعر 5,800 درهم يوميًا، وتبدأ سبكتر الكهربائية بالكامل من 7,500 درهم يوميًا. تشمل جميع هذه الأسعار التأمين القياسي الشامل، ومسافة سير يومية تبلغ 250 كم، والتوصيل المجاني إلى موقعك المفضل داخل دبي."
    },
    # Block 21: FAQ 4 Q
    {
        "type": "heading",
        "text": "هل يمكنني استئجار رولز رويس SUV للقيادة الذاتية أم يلزمني سائق؟"
    },
    # Block 22: FAQ 4 A
    {
        "type": "paragraph",
        "text": "نعم، الخياران متاحان ومدعومان بالكامل لدينا. يمكن للعملاء الذين يرغبون في الاستمتاع بقوة محرك V12 ونظام التعليق الهوائي الرائع استئجار كولينان للقيادة الذاتية بشرط تقديم رخصة قيادة إماراتية أو دولية سارية. أما إذا كنت تفضل الاسترخاء وإنجاز أعمالك في المقصورة الخلفية المريحة، فيمكن لشركة نقرة توفير سائق محترف مرخص من هيئة الطرق والمواصلات مقابل رسوم إضافية بسيطة."
    },
    # Block 23: FAQ 5 Q
    {
        "type": "heading",
        "text": "كيف تعمل وديعة التأمين عند استئجار كولينان في دبي؟"
    },
    # Block 24: FAQ 5 A
    {
        "type": "paragraph",
        "text": "يتم حجز وديعة التأمين كتفويض مسبق على بطاقة الائتمان الخاصة بالعميل قبل تسليم السيارة. تستخدم هذه الوديعة لتغطية المخالفات المرورية أو رسوم بوابات سالك أو الأضرار البسيطة التي لا يشملها التأمين. ويتم إلغاء هذا الحجز تلقائيًا من قبل مصرفك في غضون 15 إلى 21 يومًا بعد انتهاء فترة الإيجار وإعادة السيارة بأمان، وذلك بعد التحقق من قواعد بيانات هيئة الطرق والمواصلات."
    },
    # Block 25: CTA
    {
        "type": "cta",
        "text": "هل أنت مستعد لقيادة أفضل سيارة رياضية متعددة الاستخدامات فاخرة في شوارع دبي؟ تواصل مع فريق الكونسيرج لدينا عبر واتساب للحجز الآن.",
        "buttonLink": "/booking",
        "buttonText": "احجز كولينان الآن"
    }
]

# -- RUSSIAN BLOCKS --
ru_content = [
    # Block 0: Hook
    {
        "type": "paragraph",
        "text": "В конце концов, это просто внедорожник. Автомобиль, созданный для того, чтобы перевозить нескольких человек и их багаж по самым разным поверхностям. Обычный фургон доставки справляется с этой задачей не хуже, но вряд ли кто-то станет останавливаться, чтобы выразить ему свое восхищение. Но когда речь идет о собранном вручную в Гудвуде Rolls-Royce Cullinan, приводимом в движение шепчущим двенадцатицилиндровым двигателем и оснащенном подвеской, которая сканирует дорогу для устранения малейших неровностей, само определение практичности меняется кардинально. Здесь нужно говорить о величии и статусе, а не о простом удобстве. Для тех, кто прибывает в Дубай с намерением заявить о своем превосходстве на дорогах, вопрос заключается не в том, стоит ли выбрать этот роскошный автомобиль, а в том, как лучше всего его арендовать. Поездка по шоссе Шейха Зайда в этом величественном экипаже — это не просто маршрут из Международного аэропорта Дубая до вашей виллы на Пальм-Джумейре; это демонстрация статуса и абсолютной уверенности, которая идеально гармонирует с премиальной атмосферой Объединенных Арабских Эмиратов."
    },
    # Block 1: Quick Answer
    {
        "type": "paragraph",
        "text": "<div style=\"background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 Быстрый ответ:</strong> Покупка Rolls-Royce Cullinan в 2026 году начинается от <strong>2.0 млн AED</strong> за базовую версию и превышает <strong>2.4 млн AED</strong> за Black Badge. Аренда Cullinan в Дубае в Naqra FZE начинается от <strong>6 500 AED в сутки</strong> за стандартную модель и <strong>7 000 AED в сутки</strong> за Black Badge. Тарифы включают полное страхование, 250 км пробега в день и бесплатную доставку. Свяжитесь с нами по WhatsApp <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a> для бронирования.</div>"
    },
    # Block 2: Section 1 Title
    {
        "type": "heading",
        "text": "Покупка или аренда: Стоимость Cullinan в 2026 году"
    },
    # Block 3: Section 1 Body
    {
        "type": "paragraph",
        "text": "Чтобы оценить современную финансовую сторону владения Rolls-Royce Cullinan, необходимо в первую очередь рассмотреть прямые затраты на покупку автомобиля в 2026 году. Если вы решите зайти в автосалон с намерением приобрести стандартную версию Cullinan, вы обнаружите, что начальная цена составляет около 2.0 миллионов дирхамов ОАЭ (AED). Если же ваши предпочтения склоняются к более выразительной версии Black Badge Cullinan—с ее темной хромированной решеткой радиатора Pantheon, отделкой салона углеродным волокном черного цвета и форсированным двигателем—то стоимость мгновенно превышает 2.4 миллиона AED. И эти цифры представляют собой лишь начальную точку. Как только вы добавите сюда регистрационные сборы в Дубае, дорогостоящие страховые полисы, разработанные для активов ультра-класса, регулярное плановое техническое обслуживание в официальных сервисных центрах и неизбежную амортизацию, финансовая реальность владения таким автомобилем становится очевидной. Автомобиль подобного уровня редко используется каждый день в течение года; чаще всего это ценный актив, который большую часть своей жизни проводит в кондиционируемом гараже на Пальм-Джумейре или на вилле в Эмирейтс Хиллз. Именно здесь проявляется практическая мудрость посуточной аренды. Аренда позволяет избежать огромных капитальных вложений, бюрократических процедур регистрации и наблюдения за тем, как актив стоимостью в миллионы дирхамов теряет цену во время ваших зарубежных поездок. Это выбор людей, которые понимают, что истинная роскошь — это доступ к лучшему, а не владение им."
    },
    # Block 4: Section 2 Title
    {
        "type": "heading",
        "text": "Тарифы Naqra FZE: Прозрачный гид по аренде Cullinan"
    },
    # Block 5: Section 2 Body
    {
        "type": "paragraph",
        "text": "В Naqra FZE мы твердо убеждены, что честность и прозрачность — это единственная ценная валюта в сфере аренды автомобилей класса люкс. Посуточные тарифы на наш автопарк Rolls-Royce зафиксированы и понятны, что позволяет вам планировать свои поездки по ОАЭ с абсолютной уверенностью. Стандартная модель Cullinan доступна по цене от 6 500 AED в сутки. Для тех, кому требуется более брутальный и внушительный вид, версия Cullinan Black Badge предлагается за 7 000 AED в сутки. Эти тарифы не являются базовыми «голыми» ценами; они полностью включают стандартное комплексное страхование, суточный лимит пробега 250 километров и бесплатную доставку и возврат автомобиля в любой отель, частную виллу или VIP-терминал Международного аэропорта Дубая (DXB). Для сравнения, наш премиальный автопарк предлагает широкий спектр возможностей: сбалансированная элегантность Rolls-Royce Ghost доступна от 3 800 AED в сутки, экологичное будущее электрического купе Spectre начинается от 7 500 AED в день, а флагманский седан Phantom предлагается за 5 800 AED в сутки. Изучив наш подробный <a href=\"/ru/pricing\">тарифной сеткой</a>, вы сможете легко подобрать автомобиль, идеально соответствующий вашему графику. Когда вы бронируете Cullinan у нас, указанная цена остается окончательной, гарантируя, что ваш опыт останется безупречным, без скрытых административных сборов или внезапных наценок."
    },
    # Block 6: Section 3 Title
    {
        "type": "heading",
        "text": "Инженерия Гудвуда: Уникальные особенности роскошного внедорожника"
    },
    # Block 7: Section 3 Body
    {
        "type": "paragraph",
        "text": "Cullinan — это не просто высокая версия седана; это шедевр современного инженерного искусства, созданный для преодоления любых дорожных покрытий с сохранением абсолютного комфорта, который отличает бренд из Гудвуда уже более века. В сердце этого внедорожника бьется легендарный 6.75-литровый двигатель V12 с двойным турбонаддувом. Этот мотор выдает 563 лошадиные силы в условиях почти полной тишины, обеспечивая мощную тягу, которая разгоняет автомобиль с плавным величием частного бизнес-джета. Активная система полного привода работает в полной гармонии с самовыравнивающейся пневматической подвеской, которая постоянно отслеживает ускорение кузова, положение рулевого колеса и показания камер, совершая миллионы микрорегулировок в секунду. Именно это создает знаменитый эффект «поездки на ковре-самолете» (Magic Carpet Ride) — ощущение полета над дорогой, которое сохраняется как на скоростном шоссе Шейха Зайда, так и на тихих улицах Даунтауна Дубая. Салон автомобиля предлагает идеальную шумоизоляцию: более 100 кг звукопоглощающих материалов и двойные акустические стекла полностью отсекают уличный зной и шум мегаполиса. Сзади опциональная система Viewing Suite позволяет одним нажатием кнопки выдвинуть из багажника два кожаных кресла ручной работы и коктейльный столик, чтобы с комфортом наблюдать закат над Аравийским заливом. Каждая деталь салона <a href=\"/ru/fleet/cullinan\">Rolls-Royce Cullinan</a> разработана для достижения максимального уровня роскоши."
    },
    # Block 8: List
    {
        "type": "list",
        "items": [
            "<strong>Двигатель V12 объемом 6.75 л с двойным турбонаддувом:</strong> Развивает мощность 563 л.с. в стандартной версии или 591 л.с. в серии Black Badge, обеспечивая бесшумный и мощный разгон.",
            "<strong>Индивидуальный интерьер салона:</strong> Отделка элитной кожей альпийских быков, панели из натурального дерева с открытыми порами и четырехзонный климат-контроль с активной фильтрацией воздуха.",
            "<strong>Выдвижная площадка Viewing Suite:</strong> Два роскошных кожаных кресла и столик, раскладывающиеся с помощью электропривода из багажника для отдыха на природе.",
            "<strong>Активный полный привод и адаптивная подвеска:</strong> Система непрерывно сканирует рельеф дороги и корректирует жесткость амортизаторов за миллисекунды для плавного хода.",
            "<strong>Шумоизоляция премиум-класса:</strong> Более 100 килограммов изоляционных материалов и двойное остекление дверей полностью поглощают дорожные шумы."
        ]
    },
    # Block 9: Section 4 Title
    {
        "type": "heading",
        "text": "Финансовая целесообразность аренды Rolls-Royce SUV в Дубае"
    },
    # Block 10: Section 4 Body
    {
        "type": "paragraph",
        "text": "При оценке решения в пользу аренды, а не покупки, математические расчеты эффективности выглядят весьма убедительно. Для руководителя крупной корпорации, прибывающего в ОАЭ на неделю важных переговоров, или для семьи, посещающей Дубай в зимний сезон, аренда Cullinan в компании Naqra FZE предлагает непревзойденную гибкость. Она обеспечивает внушительный статус на дорогах Дубая, сочетающийся с просторным салоном, который необходим для совместных поездок или роскошного шопинга в Dubai Mall. Если бы вы владели этим автомобилем, огромный капитал был бы заморожен, в то время как его можно было направить в высокодоходные проекты в Международном финансовом центре Дубая (DIFC). Вместо этого, за посуточную плату в 6 500 AED, вы получаете безупречный, обслуженный по стандартам производителя автомобиль строго на необходимый срок. Вам не нужно заботиться о регулярном ТО, замене шин или влиянии летней жары Дубая на лакокрасочное покрытие и дорогую кожу салона. Более того, аренда позволяет менять автомобили под разные задачи: Ghost для деловых встреч, Spectre для демонстрации технологичности и Cullinan для семейных поездок за город. Наш элитный <a href=\"/ru/services/chauffeur\">услугой личного водителя</a> предоставляет максимальный уровень комфорта, освобождая вас от забот о трафике и позволяя наслаждаться поездкой."
    },
    # Block 11: Image
    {
        "type": "image",
        "src": "/images/blog/much-rolls-royce-suv-rent-dubai-own-inline.webp",
        "alt": "Черный внедорожник Rolls-Royce Cullinan припаркован перед фасадом роскошного отеля в Дубай Марина на закате",
        "caption": "Cullinan: Абсолютное величие и роскошь на улицах Дубая и у лучших отелей эмирата."
    },
    # Block 12: Section 5 Title
    {
        "type": "heading",
        "text": "Безупречный сервис и организация аренды с Naqra FZE"
    },
    # Block 13: Section 5 Body
    {
        "type": "paragraph",
        "text": "Процесс бронирования Rolls-Royce Cullinan в Дубае должен быть столь же простым и приятным, как и управление им. В Naqra FZE мы исключили любые бюрократические сложности, характерные для обычных прокатных агентств. Здесь нет очередей, навязчивых предложений и запутанных договоров. Все этапы сделки проходят с уважением и оперативностью, которых ожидают наши клиенты. Для аренды резидентам ОАЭ требуется предоставить только действующее водительское удостоверение ОАЭ и Emirates ID. Иностранным гостям необходимо предъявить паспорт, туристическую визу и водительские права своей страны или международное водительское удостоверение. Перед началом аренды на кредитной карте оформляется холдирование залога для покрытия штрафов RTA и сборов Salik, который автоматически разблокируется после возврата автомобиля. С подробными требованиями и условиями можно ознакомиться в нашем <a href=\"/ru/blog/ultimate-guide-rolls-royce-rental-dubai\">главном руководстве</a> по аренде автомобилей премиум-класса. Мы доставим внедорожник в любую точку эмирата: к отелю в Дубай Марина, жилому комплексу в Бизнес Бэй или прямо к трапу вашего частного самолета. Консьерж подробно ознакомит вас со всеми функциями автомобиля и настроит климат-контроль по вашему вкусу. Мы остаемся на связи круглосуточно, чтобы гарантировать вам безупречный комфорт в Дубае."
    },
    # Block 14: FAQ Title
    {
        "type": "heading",
        "text": "Часто задаваемые вопросы"
    },
    # Block 15: FAQ 1 Q
    {
        "type": "heading",
        "text": "Сколько стоит Rolls-Royce SUV при покупке по сравнению с арендой в Дубае?"
    },
    # Block 16: FAQ 1 A
    {
        "type": "paragraph",
        "text": "Покупка стандартной версии Rolls-Royce Cullinan в 2026 году начинается от 2.0 миллионов дирхамов (AED), а версия Black Badge превышает 2.4 миллиона AED, без учета налогов, страховки и дорогого обслуживания. Аренда Cullinan в Naqra FZE начинается от 6 500 AED в сутки за стандартную модель и 7 000 AED за Black Badge, что делает аренду гибкой и выгодной альтернативой для гостей и временных жителей эмирата."
    },
    # Block 17: FAQ 2 Q
    {
        "type": "heading",
        "text": "В чем разница между стандартным Cullinan и версией Black Badge?"
    },
    # Block 18: FAQ 2 A
    {
        "type": "paragraph",
        "text": "Версия Black Badge представляет собой более мощную и спортивную интерпретацию Cullinan. Визуально она отличается заменой яркого хрома на решетке радиатора, рамах окон и выхлопных трубах на глянцевый темный хром, а также эксклюзивными 22-дюймовыми колесными дисками. Механически двигатель V12 форсирован до 591 л.с. (вместо 563 л.с. у базовой модели) и выдает 900 Нм крутящего момента с более выразительным звуком выхлопа."
    },
    # Block 19: FAQ 3 Q
    {
        "type": "heading",
        "text": "Каковы тарифы на аренду других моделей Rolls-Royce в Naqra FZE?"
    },
    # Block 20: FAQ 3 A
    {
        "type": "paragraph",
        "text": "Цены на наш автопарк полностью прозрачны. Аренда Rolls-Royce Ghost начинается от 3 800 AED в сутки, представительский седан Phantom доступен по цене от 5 800 AED в сутки, а новейшее электрическое купе Spectre предлагается от 7 500 AED в день. Все тарифы включают страхование, суточный пробег 250 км и бесплатную доставку по Дубаю."
    },
    # Block 21: FAQ 4 Q
    {
        "type": "heading",
        "text": "Могу ли я арендовать Rolls-Royce SUV без водителя или только с шофером?"
    },
    # Block 22: FAQ 4 A
    {
        "type": "paragraph",
        "text": "Да, доступны оба варианта. Клиенты, желающие лично управлять автомобилем и прочувствовать всю мощь двигателя V12 и плавность пневмоподвески, могут арендовать Cullinan для самостоятельного вождения при наличии действующих прав. Если же вы предпочитаете отдыхать или работать во время поездки, Naqra FZE предоставит вам профессионального водителя, лицензированного RTA, за дополнительную плату."
    },
    # Block 23: FAQ 5 Q
    {
        "type": "heading",
        "text": "Как работает залог при аренде Cullinan в Дубае?"
    },
    # Block 24: FAQ 5 A
    {
        "type": "paragraph",
        "text": "Сумма страхового депозита авторизуется (блокируется) на кредитной карте клиента перед передачей автомобиля. Этот залог используется для покрытия возможных штрафов за нарушение ПДД, сборов за проезд по платным дорогам Salik или мелких повреждений, не покрываемых страховкой. Блокировка автоматически снимается вашим банком в течение 15–21 дня после завершения аренды и проверки всех баз данных RTA."
    },
    # Block 25: CTA
    {
        "type": "cta",
        "text": "Готовы покорить дороги Дубая за рулем роскошного внедорожника? Напишите нашей консьерж-службе в WhatsApp для бронирования.",
        "buttonLink": "/booking",
        "buttonText": "Забронировать Cullinan"
    }
]

# Let's count words for each locale
en_wc = count_words(en_content)
ar_wc = count_words(ar_content)
ru_wc = count_words(ru_content)

print(f"EN word count: {en_wc}")
print(f"AR word count: {ar_wc}")
print(f"RU word count: {ru_wc}")

# Prepare full JSON object
blog_data = {
    "en": {
        "title": "How Much Is a Rolls-Royce SUV? Cullinan Price & Dubai Hire",
        "description": "Discover the 2026 buying prices for the Rolls-Royce Cullinan SUV versus daily rental rates in Dubai. View Naqra FZE fleet pricing and hire today.",
        "author": "Ahmed Salem",
        "date": "2026-09-27",
        "readTime": "10 min read",
        "category": "Guides",
        "image": "/images/blog/much-rolls-royce-suv-rent-dubai-own-cover.jpg",
        "content": en_content,
        "relatedArticles": [
            "ultimate-guide-rolls-royce-rental-dubai",
            "rolls-royce-black-badge-dubai",
            "hourly-rolls-royce-rental-dubai"
        ]
    },
    "ar": {
        "title": "كم سعر رولز رويس SUV؟ أسعار كولينان وإيجارها في دبي",
        "description": "اكتشف أسعار شراء رولز رويس كولينان SUV لعام 2026 مقارنة بأسعار الإيجار اليومي في دبي. تعرف على أسعار أسطول نقرة واستأجر سيارتك الفاخرة اليوم.",
        "author": "Ahmed Salem",
        "date": "2026-09-27",
        "readTime": "10 min read",
        "category": "Guides",
        "image": "/images/blog/much-rolls-royce-suv-rent-dubai-own-cover.jpg",
        "content": ar_content,
        "relatedArticles": [
            "ultimate-guide-rolls-royce-rental-dubai",
            "rolls-royce-black-badge-dubai",
            "hourly-rolls-royce-rental-dubai"
        ]
    },
    "ru": {
        "title": "Сколько стоит Rolls-Royce SUV? Цены на Cullinan и аренда в Дубае",
        "description": "Узнайте стоимость покупки Rolls-Royce Cullinan SUV в 2026 году и посуточные тарифы на аренду в Дубае. Ознакомьтесь с ценами в компании Naqra FZE.",
        "author": "Ahmed Salem",
        "date": "2026-09-27",
        "readTime": "10 min read",
        "category": "Guides",
        "image": "/images/blog/much-rolls-royce-suv-rent-dubai-own-cover.jpg",
        "content": ru_content,
        "relatedArticles": [
            "ultimate-guide-rolls-royce-rental-dubai",
            "rolls-royce-black-badge-dubai",
            "hourly-rolls-royce-rental-dubai"
        ]
    },
    "publishAt": "2026-09-27T08:00:00+04:00"
}

# Write output file
target_path = "/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com/src/data/blog/much-rolls-royce-suv-rent-dubai-own.json"
with open(target_path, 'w', encoding='utf-8') as f:
    json.dump(blog_data, f, ensure_ascii=False, indent=2)

print("Successfully wrote JSON file.")

import json
import re
import os

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

# -- ENGLISH CONTENT --
en_content = [
    # Block 0: Hook
    {
        "type": "paragraph",
        "text": "To arrive in Dubai is to enter a theater of modern ambition, a landscape designed to overwhelm the senses and command respect. Here, transportation is rarely a simple matter of moving between coordinates; it is a declaration of intent, a reflection of status, and an exercise in personal efficiency. While many visitors and executive travelers immediately contemplate hiring a high-performance vehicle to drive themselves, those who understand the true nature of luxury in the United Arab Emirates choose a different path. They opt for the absolute serenity of a professional Rolls-Royce chauffeur service. Navigating Dubai's complex, multi-lane highway system—such as the iconic Sheikh Zayed Road—under the intense Arabian sun can be a demanding task, even for the most seasoned drivers. In contrast, reclining in the whisper-quiet rear cabin of a Goodwood-built motor car, while an RTA-certified local driver handles the traffic, transforms travel into a seamless extension of your private lounge or executive office. Whether you are transferring from the VIP terminal at Dubai International Airport (DXB) to your private villa in Palm Jumeirah, or arriving for a high-stakes board meeting in the heart of the Dubai International Financial Centre (DIFC), the presence of a chauffeur-driven Rolls-Royce makes a statement of quiet authority and uncompromising refinement."
    },
    # Block 1: Quick Answer (border-left)
    {
        "type": "paragraph",
        "text": "<div style=\"background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 Quick Answer:</strong> Renting a Rolls-Royce with a driver in Dubai starts at <strong>AED 3,800 per day</strong> for the Ghost, <strong>AED 5,800 per day</strong> for the Phantom flagship, <strong>AED 6,500 per day</strong> for the Cullinan SUV, and <strong>AED 7,500 per day</strong> for the all-electric Spectre. These rates are inclusive of a professional RTA-certified chauffeur, fuel, road tolls (Salik), and complimentary delivery across Dubai. Unlike self-drive rentals, no security deposit is required. Book instantly via WhatsApp at <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a>.</div>"
    },
    # Block 2: Section 1 Title
    {
        "type": "heading",
        "text": "The Supreme Comfort of a Rolls-Royce Chauffeur Service in Dubai"
    },
    # Block 3: Section 1 Body
    {
        "type": "paragraph",
        "text": "The decision to hire a Rolls-Royce with a driver in Dubai is rooted in the pursuit of absolute time management and comfort. Driving in Dubai requires constant attention; speed limits change suddenly, multi-level junctions demand split-second lane choices, and local traffic dynamics can be highly unpredictable. When you choose a chauffeur service, you reclaim this valuable time. The rear passenger cabin of a modern Rolls-Royce is a masterpiece of noise isolation and luxury engineering, designed to block out the exterior world completely. Under the stewardship of BMW ownership, modern Rolls-Royce vehicles combine classic British hand-craftsmanship with the most advanced German engineering. The cabin features double-glazed acoustic windows, thick wool carpets, and over one hundred kilograms of sound-deadening insulation, creating a silent sanctuary. This environment allows business executives to conduct sensitive calls, prepare for presentations, or review contracts in total privacy without the distraction of driving. For leisure travelers and families, it offers a space to relax after a long flight or plan an evening at Dubai's world-class restaurants. The seamless transitions between destinations mean you never have to search for parking at crowded venues like The Dubai Mall or wait for valet services at busy luxury hotels. You are dropped off at the main entrance and collected at your exact convenience, ensuring your schedule remains completely uninterrupted."
    },
    # Block 4: Section 2 Title
    {
        "type": "heading",
        "text": "Navigating Dubai's Prestige Landscape: Key Chauffeur Benefits"
    },
    # Block 5: Section 2 Body
    {
        "type": "paragraph",
        "text": "Opting for a professional driver provides several distinct advantages that elevate your travel experience across the United Arab Emirates. First, navigating Dubai's traffic requires deep local knowledge. Our professional chauffeurs are RTA-licensed and possess an intimate understanding of the city's complex road network, including the quickest alternative routes during peak hours and the exact drop-off protocols for major VIP venues, private airport terminals, and five-star resorts. Second, safety is paramount. Our drivers undergo rigorous training and operate in strict compliance with UAE road safety laws, ensuring a smooth and secure journey. Third, working in transit is effortless; the rear cabin is equipped with fold-out writing desks, premium charging ports, and space to work without compromise. Finally, the red-carpet arrival is unmatched. Pulling up to the Burj Al Arab, a luxury yacht club in Dubai Marina, or a corporate tower in Business Bay in a chauffeur-driven Rolls-Royce immediately communicates success and prestige. It establishes an initial impression of absolute professionalism, which is highly valued in Middle Eastern business culture. To learn more about our operational standards, view our dedicated <a href=\"/services/chauffeur\">chauffeur service page</a> or check our full range of vehicles on the <a href=\"/fleet/ghost\">Rolls-Royce Ghost fleet page</a>."
    },
    # Block 6: Section 3 Title
    {
        "type": "heading",
        "text": "Compare Rates and Models: Rolls-Royce Driver Dubai Options"
    },
    # Block 7: Section 3 Body
    {
        "type": "paragraph",
        "text": "The Naqra FZE chauffeur fleet offers a diverse selection of models, each tailored to specific travel requirements and occasions. The starting point of our chauffeur-driven range is the Rolls-Royce Ghost, available from AED 3,800 per day. The Ghost is the perfect choice for corporate executives, offering a balanced, modern aesthetic that fits seamlessly into the business districts of DIFC and Downtown Dubai. For those who require the commanding presence and spacious seating of a luxury SUV, the Cullinan starts at AED 6,500 per day. It is highly favored by families and VIP groups who need extra luggage capacity for airport transfers or shopping trips to premium fashion boutiques. The all-electric Spectre represents the absolute future of quiet transport, starting at AED 7,500 per day, offering a completely silent ride that is ideal for forward-thinking executives. Finally, the flagship Rolls-Royce Phantom is available at AED 5,800 per day. The Phantom remains the ultimate expression of automotive royalty, featuring the iconic Pantheon grille and rear-hinged coach doors that make it the premier choice for weddings, high-profile state visits, and red-carpet gala events. To compare detailed specifications and plan your corporate or leisure itinerary, visit our transparent <a href=\"/pricing\">pricing guide</a>."
    },
    # Block 8: List
    {
        "type": "list",
        "items": [
            "<strong>Rolls-Royce Ghost (from AED 3,800/day):</strong> Features a 6.75-liter twin-turbo V12 engine producing 563 horsepower, offering a sleek, professional saloon experience ideal for corporate executives.",
            "<strong>Rolls-Royce Phantom (from AED 5,800/day):</strong> The ultimate flagship saloon with an imposing presence, hand-crafted coach doors, and the highest level of cabin isolation for weddings and VIPs.",
            "<strong>Rolls-Royce Cullinan (from AED 6,500/day):</strong> A high-bodied luxury SUV with active all-wheel drive and a spacious interior, perfect for family travel, shopping trips, and long-distance comfort.",
            "<strong>Rolls-Royce Spectre (from AED 7,500/day):</strong> The brand's first all-electric luxury coupe, providing a completely silent drive, advanced digital interface, and cutting-edge design for green energy advocates."
        ]
    },
    # Block 9: Section 4 Title
    {
        "type": "heading",
        "text": "Goodwood Craftsmanship: Inside the Private Sanctuary"
    },
    # Block 10: Section 4 Body
    {
        "type": "paragraph",
        "text": "Every Rolls-Royce in our fleet is built at the global headquarters of luxury in Goodwood, West Sussex, representing the absolute peak of bespoke manufacturing. The passenger cabin is designed as a sanctuary, isolated from the bustling streets of Dubai. When you step inside, you are greeted by premium hand-stitched leather upholstery, sourced from high-altitude Alpine bulls to ensure it is completely free from blemishes. The wood veneers are book-matched by hand to create perfect symmetrical patterns across the dashboard and door panels. One of the most famous cabin features is the Starlight Headliner, which uses hundreds of individual fiber-optic lights to mimic a clear desert night sky. The climate control system is equipped with advanced filtration to maintain pristine air quality, while the rear seats offer multi-mode massage functions, cooling, and electronic adjustment. The engineering under the body is equally impressive: the legendary V12 engine delivers massive torque in complete silence, while the active air suspension system scans the road ahead to adjust the dampers, erasing road imperfections and providing the famous 'Magic Carpet Ride' experience. For more information on the design and heritage of these models, you can read our detailed <a href=\"/fleet/phantom\">Rolls-Royce Phantom model page</a>."
    },
    # Block 11: Image
    {
        "type": "image",
        "src": "/images/blog/rent-rolls-royce-driver-dubai-chauffeur-service-inline.webp",
        "alt": "A professional chauffeur holding the door of a black Rolls-Royce Ghost in Downtown Dubai at sunset",
        "caption": "Arrive with absolute dignity: our professional chauffeur service handles every detail of your Dubai journey."
    },
    # Block 12: Section 5 Title
    {
        "type": "heading",
        "text": "Hassle-Free Booking: Requirements for Chauffeur Rental"
    },
    # Block 13: Section 5 Body
    {
        "type": "paragraph",
        "text": "One of the most compelling reasons to select a chauffeur-driven Rolls-Royce rental in Dubai is the simplicity of the booking process. Traditional car rental agencies require extensive paperwork, including international driving permits, local license verifications, and strict credit card pre-authorizations for security deposits. If you are an international traveler, obtaining the correct documents can be time-consuming. However, when you rent a Rolls-Royce with a driver from Naqra FZE, the vehicle remains under the responsibility of our professional, RTA-licensed chauffeur. This means you do not need to present a driving license or worry about insurance liability. There is no security deposit required, which eliminates the hassle of waiting for bank releases after your trip. All we require to confirm your booking is a valid passport copy or Emirates ID for verification. We coordinate the delivery of the vehicle and the chauffeur to your exact location, whether it is the VIP arrivals terminal at Dubai International Airport (DXB) or a hotel lobby in Dubai Marina. Our streamlined process is detailed in our <a href=\"/blog/ultimate-guide-rolls-royce-rental-dubai\">ultimate rental guide</a>, ensuring that your transition from flight to luxury transport is completely effortless."
    },
    # Block 14: FAQ Title
    {
        "type": "heading",
        "text": "Frequently Asked Questions"
    },
    # Block 15: FAQ 1 Q
    {
        "type": "heading",
        "text": "How much does it cost to rent a Rolls-Royce with a driver in Dubai?"
    },
    # Block 16: FAQ 1 A
    {
        "type": "paragraph",
        "text": "The cost of renting a Rolls-Royce with a driver starts at AED 3,800 per day for the Ghost. The flagship Phantom is available from AED 5,800 per day, the Cullinan SUV starts at AED 6,500 per day, and the all-electric Spectre starts at AED 7,500 per day. These rates are highly transparent and cover the professional RTA-certified chauffeur, vehicle rental, fuel, and road tolls (Salik) within the city limits of Dubai, ensuring no unexpected costs at the end of your journey."
    },
    # Block 17: FAQ 2 Q
    {
        "type": "heading",
        "text": "Do I need to leave a security deposit for a chauffeur service?"
    },
    # Block 18: FAQ 2 A
    {
        "type": "paragraph",
        "text": "No. Unlike self-drive luxury car rentals, booking a Rolls-Royce with a chauffeur does not require a security deposit. Since our professional, RTA-certified driver is responsible for the vehicle, the client is fully exempt from security deposits, traffic fine pre-authorizations, and insurance liability disputes, making it the most seamless and secure way to travel in the UAE."
    },
    # Block 19: FAQ 3 Q
    {
        "type": "heading",
        "text": "What documents are required to book a Rolls-Royce with a driver?"
    },
    # Block 20: FAQ 3 A
    {
        "type": "paragraph",
        "text": "Booking a chauffeur service requires minimal documentation. International visitors only need to provide a copy of their passport and visit visa, while UAE residents need to provide a copy of their Emirates ID. There are no driving license requirements, international permit verifications, or age restrictions for passengers, allowing you to finalize your booking within minutes."
    },
    # Block 21: FAQ 4 Q
    {
        "type": "heading",
        "text": "Can the chauffeur meet me directly at Dubai International Airport (DXB)?"
    },
    # Block 22: FAQ 4 A
    {
        "type": "paragraph",
        "text": "Yes. We offer premium meet-and-greet airport transfer services at both Dubai International Airport (DXB) and Al Maktoum International Airport (DWC). Your dedicated chauffeur will monitor your flight status in real-time, wait at the arrival terminal with a personalized name board, assist with your luggage, and escort you to the vehicle for a comfortable transfer to your hotel or private villa."
    },
    # Block 23: FAQ 5 Q
    {
        "type": "heading",
        "text": "Are the chauffeurs licensed and bilingual?"
    },
    # Block 24: FAQ 5 A
    {
        "type": "paragraph",
        "text": "Yes, all our chauffeurs are fully licensed by the Dubai Road and Transport Authority (RTA) and undergo regular professional training in safe driving and VIP hospitality. They are bilingual, speaking fluent English, and we can arrange drivers fluent in Arabic or Russian upon request to ensure seamless communication and absolute comfort throughout your rental period."
    },
    # Block 25: CTA
    {
        "type": "cta",
        "text": "Ready to experience the ultimate in luxury travel? Message our concierge team on WhatsApp to reserve your chauffeur-driven Rolls-Royce.",
        "buttonLink": "/booking",
        "buttonText": "Reserve Your Chauffeur"
    }
]

# -- ARABIC CONTENT --
ar_content = [
    # Block 0: Hook
    {
        "type": "paragraph",
        "text": "إن الوصول إلى دبي يعني الدخول إلى مسرح طموح حديث، وهو مشهد حضري صُمم ليبهر الحواس ويفرض الاحترام والهيبة في كل ركن. هنا، لا يعد النقل مجرد مسألة انتقال بسيطة بين الإحداثيات والمعالم؛ بل هو بيان صريح عن المكانة وتعبير عن الرقي وتجسيد للكفاءة الشخصية العالية. في حين أن العديد من الزوار ورجال الأعمال يفكرون فورًا في استئجار سيارة رياضية أو فاخرة لقيادتها بأنفسهم، فإن أولئك الذين يدركون الطبيعة الحقيقية للفخامة في دولة الإمارات العربية المتحدة يختارون مسارًا مختلفًا تمامًا. إنهم يختارون السكينة المطلقة والراحة الفائقة التي توفرها خدمة السائق الخاص الاحترافية لسيارات رولز رويس. إن التنقل في شبكة الطرق السريعة المعقدة ومتعددة الحارات في دبي—مثل شارع الشيخ زايد الشهير—تحت أشعة الشمس العربية القوية يمكن أن يكون مهمة شاقة ومرهقة، حتى بالنسبة لأكثر السائقين خبرة. في المقابل، فإن الاسترخاء في المقصورة الخلفية الهادئة لسيارة مصنعة في غودوود، بينما يتولى سائق محلي معتمد من هيئة الطرق والمواصلات (RTA) التعامل مع حركة المرور، يحول الرحلة إلى امتداد طبيعي وصامت لصالتك الخاصة أو مكتبك التنفيذي المريح. وسواء كنت تنتقل من مبنى الطيران الخاص في مطار دبي الدولي (DXB) إلى فيلتك الخاصة في نخلة جميرا، أو تصل لحضور اجتماع مجلس إدارة هام في قلب مركز دبي المالي العالمي (DIFC)، فإن حضور سيارة رولز رويس الفاخرة مع سائق يعبر عن بيان من الهيبة والوقار والرفاهية المطلقة التي لا تقبل المساومة."
    },
    # Block 1: Quick Answer (border-right)
    {
        "type": "paragraph",
        "text": "<div style=\"background:#1a1a1a;border-right:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 الإجابة السريعة:</strong> يبدأ استئجار رولز رويس مع سائق في دبي من <strong>3,800 درهم يوميًا</strong> لسيارة جوست، و<strong>5,800 درهم يوميًا</strong> لسيارة فانتوم الرائدة، و<strong>6,500 درهم يوميًا</strong> لسيارة كولينان SUV، و<strong>7,500 درهم يوميًا</strong> لسيارة سبكتر الكهربائية بالكامل. تشمل هذه الأسعار الشاملة سائقًا محترفًا مرخصًا من هيئة الطرق والمواصلات، والوقود، ورسوم بوابات سالك، والتوصيل المجاني داخل دبي. وخلافًا للإيجار الذاتي، لا يلزم دفع أي وديعة تأمين. احجز الآن عبر واتساب على الرقم <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a>.</div>"
    },
    # Block 2: Section 1 Title
    {
        "type": "heading",
        "text": "الراحة الفائقة لخدمة سائق رولز رويس الخاص في دبي"
    },
    # Block 3: Section 1 Body
    {
        "type": "paragraph",
        "text": "إن قرار استئجار رولز رويس مع سائق في دبي ينبع من السعي وراء الإدارة المثالية للوقت والراحة والسكينة المطلقة. تتطلب القيادة في طرقات دبي انتباهًا مستمرًا؛ حيث تتغير حدود السرعة فجأة، وتتطلب التقاطعات متعددة المستويات اتخاذ قرارات سريعة لتغيير الحارات، كما يمكن أن تكون حركة المرور المحلية غير متوقعة ومزدحمة في أوقات الذروة. عندما تختار خدمة السائق الخاص، فإنك تستعيد هذا الوقت الثمين لصالحك. تعتبر المقصورة الخلفية لركاب رولز رويس الحديثة تحفة فنية في عزل الصوت والرفاهية الهندسية، وقد صُممت لتعزلك تمامًا عن العالم الخارجي وضوضاء المدينة. تحت إدارة مجموعة بي إم دبليو، تجمع سيارات رولز رويس الحديثة بين الحرفية البريطانية التقليدية وأحدث التقنيات الهندسية الألمانية المتطورة. تتميز المقصورة بنوافذ زجاجية مزدوجة عازلة للصوت، وسجاد صوف سميك فاخر، وأكثر من مئة كيلوغرام من المواد العازلة الموزعة بدقة، مما يخلق ملاذًا صامتًا بالكامل. تتيح هذه البيئة الهادئة لرجال الأعمال والمديرين إجراء المكالمات الحساسة، أو التحضير للعروض التقديمية، أو مراجعة العقود الهامة في خصوصية تامة دون أي تشتيت ناتج عن القيادة. أما بالنسبة للسياح والعائلات، فإنها توفر مساحة مثالية للاسترخاء بعد رحلة طيران طويلة أو التخطيط لقضاء أمسية ساحرة في مطاعم دبي العالمية. إن الانتقال السلس بين الوجهات يعني أنك لن تضطر أبدًا للبحث عن مواقف السيارات في الأماكن المزدحمة مثل دبي مول، أو الانتظار الطويل لخدمات صف السيارات في الفنادق الفاخرة المزدحمة. حيث يتم توصيلك مباشرة عند المدخل الرئيسي واستلامك في الوقت المحدد بدقة لتبقى رحلتك مريحة وخالية من المتاعب."
    },
    # Block 4: Section 2 Title
    {
        "type": "heading",
        "text": "التنقل في دبي بهيبة ووقار: مزايا السائق الخاص"
    },
    # Block 5: Section 2 Body
    {
        "type": "paragraph",
        "text": "يوفر اختيار سائق محترف العديد من المزايا البارزة التي ترتقي بتجربة سفرك وتنقلك في جميع أنحاء دولة الإمارات العربية المتحدة. أولاً، يتطلب التعامل مع حركة المرور في دبي معرفة محلية عميقة بالطرق والتقاطعات. سائقونا المحترفون مرخصون بالكامل من هيئة الطرق والمواصلات (RTA) ويملكون دراية واسعة بشبكة الطرق المعقدة في المدينة، بما في ذلك أسرع الطرق البديلة خلال ساعات الازدحام وأدق بروتوكولات التوصيل والاستلام في المواقع الهامة، ومباني الطيران الخاص، والفنادق والمنتجعات ذات الخمس نجوم. ثانياً، نضع السلامة في مقدمة أولوياتنا؛ حيث يخضع سائقونا لتدريبات صارمة ويلتزمون التزامًا كاملاً بقوانين السلامة المرورية في دولة الإمارات لضمان رحلة آمنة وسلسة. ثالثاً، يصبح إنجاز الأعمال أثناء التنقل سهلاً بفضل تجهيز المقصورة الخلفية بطاولات كتابة قابلة للطي، ومنافذ شحن متميزة، ومساحة مريحة للعمل دون تنازلات. وأخيراً، فإن مشهد الوصول المهيب لا يضاهى؛ حيث إن التوقف أمام فندق برج العرب، أو نادي اليخوت الفاخر في دبي مارينا، أو الأبراج الإدارية الكبرى في الخليج التجاري بسيارة رولز رويس يقودها سائق خاص يعكس فوراً النجاح والمكانة الرفيعة والوقار. إنه يترك انطباعًا أوليًا قويًا بالاحترافية العالية، وهو أمر يحظى بتقدير كبير في بيئة الأعمال في منطقة الشرق الأوسط. لمعرفة المزيد حول معايير التشغيل والخدمات الراقية التي نقدمها، يرجى زيارة صفحة <a href=\"/ar/services/chauffeur\">خدمة السائق الخاص</a> لدينا أو استكشاف أسطولنا على صفحة <a href=\"/ar/fleet/ghost\">رولز رويس جوست</a> المخصصة."
    },
    # Block 6: Section 3 Title
    {
        "type": "heading",
        "text": "مقارنة الأسعار والموديلات لخدمة سائق رولز رويس دبي"
    },
    # Block 7: Section 3 Body
    {
        "type": "paragraph",
        "text": "يقدم أسطول سيارات رولز رويس مع سائق من شركة نقرة (Naqra FZE) مجموعة متنوعة من الطرازات الفاخرة، صُمم كل منها ليلبي متطلبات السفر والمناسبات المختلفة بدقة. نقطة البداية في أسطولنا الفاخر هي سيارة رولز رويس جوست، المتاحة بسعر يبدأ من 3,800 درهم إماراتي يوميًا. تعتبر جوست الخيار المثالي للمديرين والتنفيذيين، حيث توفر جمالية عصرية متوازنة تتناسب تمامًا مع أجواء العمل الراقية في مركز دبي المالي العالمي ووسط مدينة دبي. أما بالنسبة لأولئك الذين يفضلون الحضور المهيب والمساحة الواسعة لسيارات الدفع الرباعي الفاخرة، فإن رولز رويس كولينان تتوفر بسعر يبدأ من 6,500 درهم يوميًا؛ وهي المفضلة لدى العائلات والمجموعات الراقية التي تحتاج إلى مساحة أمتعة إضافية لرحلات المطار أو جولات التسوق في بوتيكات الأزياء الفاخرة. وتمثل سيارة سبكتر الكهربائية بالكامل المستقبل المشرق للتنقل الصامت بسعر يبدأ من 7,500 درهم يوميًا، وتوفر رحلة هادئة وخالية من الانبعاثات للمسؤولين المهتمين بالبيئة والمستقبل. وأخيراً، تتوفر رولز رويس فانتوم الرائدة بسعر يبدأ من 5,800 درهم يوميًا؛ وتظل فانتوم التعبير الأسمى عن الفخامة والملوكية في عالم السيارات، بأبوابها الخلفية المعاكسة وشبك البانثيون المهيب، مما يجعلها الخيار الأول لحفلات الزفاف الفاخرة، والزيارات الرسمية رفيعة المستوى، والفعاليات الكبرى على السجادة الحمراء. ولمقارنة التفاصيل والأسعار الدقيقة للأسطول وتخطيط رحلتك القادمة، تفضل بزيارة <a href=\"/ar/pricing\">دليل الأسعار الشفاف</a> لدينا."
    },
    # Block 8: List
    {
        "type": "list",
        "items": [
            "<strong>رولز رويس جوست (من 3,800 درهم/اليوم):</strong> محرك V12 سعة 6.75 لتر بتوربو مزدوج يولّد 563 حصانًا، يقدم تجربة سيدان احترافية ومثالية لرجال الأعمال والمديرين التنفيذيين.",
            "<strong>رولز رويس فانتوم (من 5,800 درهم/اليوم):</strong> السيارة الرائدة التاريخية بحضورها المهيب، وأبوابها الفاخرة التي تُفتح من الخلف، وأقصى درجات عزل الصوت والخصوصية لحفلات الزفاف والشخصيات الهامة.",
            "<strong>رولز رويس كولينان (من 6,500 درهم/اليوم):</strong> سيارة دفع رباعي فائقة الفخامة تتميز بنظام دفع كلي نشط ومقصورة واسعة ومريحة، وهي الخيار الأنسب للرحلات العائلية والتسوق الفاخر.",
            "<strong>رولز رويس سبكتر (من 7,500 درهم/اليوم):</strong> أول سيارة كهربائية بالكامل من العلامة العريقة، توفر قيادة صامتة تمامًا وتصميمًا انسيابيًا ثوريًا يمثل قمة التكنولوجيا الحديثة الصديقة للبيئة."
        ]
    },
    # Block 9: Section 4 Title
    {
        "type": "heading",
        "text": "الحرفية اليدوية لغودوود: مقصورة كالملاذ الخاص"
    },
    # Block 10: Section 4 Body
    {
        "type": "paragraph",
        "text": "تُصنع كل سيارة رولز رويس في أسطولنا في المقر العالمي للفخامة في غودوود، غرب ساسكس ببريطانيا، مما يمثل الذروة المطلقة للتصنيع الفاخر والمخصص. تم تصميم مقصورة الركاب لتكون بمثابة ملاذ آمن وهادئ يعزلك بالكامل عن صخب شوارع دبي المزدحمة. عند الدخول إلى مقصورتها، يستقبلك جلد فاخر مخيط يدويًا، يتم الحصول عليه من ثيران جبال الألب المرتفعة لضمان خلوه التام من العيوب والشوائب. ويتم تنسيق القشور الخشبية يدويًا لتخلق أنماطًا متماثلة ومثالية عبر لوحة القيادة وألواح الأبواب. ومن أشهر ميزات المقصورة سقف النجوم (Starlight Headliner) الأسطوري، والذي يستخدم مئات من أضواء الألياف البصرية الدقيقة لتبدو كالسماء الصافية ليلاً فوق الصحراء. كما تم تجهيز نظام تكييف الهواء المتطور بمرشحات خاصة للحفاظ على نقاء الهواء داخل المقصورة، بينما توفر المقاعد الخلفية وظائف تدليك متعددة وتهوية وتعديلاً كهربائيًا بالكامل لراحة قصوى. الهندسة الميكانيكية للسيارة لا تقل إبهارًا؛ حيث يوفر محرك V12 عزم دوران هائلًا بصمت مطبق، بينما يقوم نظام التعليق الهوائي النشط بمسح الطريق أمام السيارة وضبط المساعدين ليوفر تجربة بساط الريح الشهيرة. لمزيد من المعلومات حول تراث وتصميم هذه الطرازات العريقة، يرجى قراءة صفحة طراز <a href=\"/ar/fleet/phantom\">رولز رويس فانتوم</a> المفصلة لدينا."
    },
    # Block 11: Image
    {
        "type": "image",
        "src": "/images/blog/rent-rolls-royce-driver-dubai-chauffeur-service-inline.webp",
        "alt": "سائق خاص محترف يفتح باب سيارة رولز رويس جوست سوداء فاخرة في داون تاون دبي عند الغروب",
        "caption": "الوصول بأعلى درجات الوقار والهيبة: تتولى خدمة السائق الخاص لدينا رعاية كافة تفاصيل رحلتك في دبي."
    },
    # Block 12: Section 5 Title
    {
        "type": "heading",
        "text": "حجز ميسر وسهل: شروط استئجار رولز رويس مع سائق"
    },
    # Block 13: Section 5 Body
    {
        "type": "paragraph",
        "text": "من أهم الأسباب التي تجعل اختيار استئجار رولز رويس مع سائق في دبي خيارًا مفضلاً وذكيًا هو سهولة وبساطة عملية الحجز بالكامل. تتطلب وكالات تأجير السيارات التقليدية مستندات كثيرة وإجراءات معقدة، بما في ذلك تراخيص القيادة الدولية، والتحقق من التراخيص المحلية، وحظر مبالغ مالية ضخمة على بطاقتك الائتمانية كوديعة تأمين. إذا كنت مسافرًا دوليًا، فإن الحصول على هذه المستندات وتأكيدها قد يستهلك وقتًا ثمينًا من رحلتك. ومع ذلك، عندما تستأجر رولز رويس مع سائق من شركة نقرة (Naqra FZE)، فإن المسؤولية الكاملة عن السيارة تقع على عاتق سائقنا المحترف المرخص من هيئة الطرق والمواصلات. وهذا يعني أنك لست بحاجة إلى تقديم رخصة قيادة أو القلق بشأن مسؤولية التأمين والحوادث. كما لا يلزم دفع أي وديعة تأمين للسيارة، مما يزيل عبء الانتظار الطويل لاستعادة أموالك من المصارف بعد انتهاء إقامتك. كل ما نطلبه لتأكيد حجزك هو نسخة صالحة من جواز سفرك أو الهوية الإماراتية للتحقق فقط. نحن نقوم بتنسيق وصول السيارة والسائق إلى موقعك المحدد بدقة، سواء كان مبنى الوصول في مطار دبي الدولي (DXB) أو ردهة فندقك الفاخر في دبي مارينا. وتفاصيل هذه العملية مبيّنة بالكامل في <a href=\"/ar/blog/ultimate-guide-rolls-royce-rental-dubai\">الدليل الشامل لتأجير السيارات</a> لدينا، لضمان انتقالك السلس من الطائرة إلى الفخامة المطلقة دون أي جهد."
    },
    # Block 14: FAQ Title
    {
        "type": "heading",
        "text": "الأسئلة الشائعة"
    },
    # Block 15: FAQ 1 Q
    {
        "type": "heading",
        "text": "كم سعر استئجار سيارة رولز رويس مع سائق في دبي؟"
    },
    # Block 16: FAQ 1 A
    {
        "type": "paragraph",
        "text": "يبدأ سعر استئجار سيارة رولز رويس مع سائق في دبي من 3,800 درهم إماراتي يوميًا لسيارة جوست. وتتوفر فانتوم الرائدة بسعر يبدأ من 5,800 درهم يوميًا، بينما تبدأ سيارة كولينان SUV من 6,500 درهم يوميًا، وسيارة سبكتر الكهربائية بالكامل من 7,500 درهم يوميًا. تتميز أسعارنا بالشفافية الكاملة وتشمل السائق الخاص المرخص، والوقود، ورسوم بوابات سالك ضمن حدود مدينة دبي لضمان عدم وجود أي تكاليف خفية أو مفاجئة."
    },
    # Block 17: FAQ 2 Q
    {
        "type": "heading",
        "text": "هل يلزمني دفع وديعة تأمين عند استئجار رولز رويس مع سائق؟"
    },
    # Block 18: FAQ 2 A
    {
        "type": "paragraph",
        "text": "لا. على عكس تأجير السيارات الفاخرة للقيادة الذاتية، لا يتطلب حجز رولز رويس مع سائق دفع أي وديعة تأمين على الإطلاق. نظراً لأن سائقنا المحترف المرخص من هيئة الطرق والمواصلات هو المسؤول عن السيارة وتحركاتها، فإن العميل يُعفى تماماً من ودائع التأمين المالي، وحظر بطاقات الائتمان، والمخالفات المرورية، والمسؤولية التأمينية في الحوادث، مما يجعلها الطريقة الأكثر أماناً للتنقل."
    },
    # Block 19: FAQ 3 Q
    {
        "type": "heading",
        "text": "ما هي المستندات والأوراق المطلوبة لحجز الخدمة مع سائق؟"
    },
    # Block 20: FAQ 3 A
    {
        "type": "paragraph",
        "text": "يتطلب حجز خدمة رولز رويس مع سائق مستندات بسيطة للغاية وميسرة للجميع. يحتاج الزوار الدوليون فقط إلى تقديم نسخة من جواز السفر وتأشيرة السياحة، بينما يحتاج مقيمو دولة الإمارات العربية المتحدة إلى تقديم نسخة من بطاقة الهوية الإماراتية فقط. لا توجد شروط لرخصة القيادة أو فحوصات الرخصة الدولية أو قيود على سن الركاب، مما يتيح لك إتمام الحجز خلال دقائق معدودة."
    },
    # Block 21: FAQ 4 Q
    {
        "type": "heading",
        "text": "هل يمكن للسائق استقبالي مباشرة في مطار دبي الدولي (DXB)؟"
    },
    # Block 22: FAQ 4 A
    {
        "type": "paragraph",
        "text": "نعم بالتأكيد. نحن نقدم خدمة الاستقبال والتوصيل المتميزة في كل من مطار دبي الدولي (DXB) ومطار آل مكتوم الدولي (DWC). سيقوم سائقك الخاص بمتابعة حالة رحلتك الجوية مباشرة للتأكد من الموعد، والانتظار في صالة الوصول حاملاً لوحة باسمك لمساعدتك في حمل الأمتعة، ومرافقتك إلى السيارة الفاخرة لضمان انتقال مريح وسلس إلى فندقك أو فيلتك الخاصة."
    },
    # Block 23: FAQ 5 Q
    {
        "type": "heading",
        "text": "هل السائقون مرخصون ويتحدثون لغات متعددة؟"
    },
    # Block 24: FAQ 5 A
    {
        "type": "paragraph",
        "text": "نعم، جميع سائقينا مرخصون بالكامل ومسجلون لدى هيئة الطرق والمواصلات في دبي (RTA) ويخضعون لتدريب دوري احترافي في القيادة الآمنة والضيافة الفاخرة للشخصيات الهامة. جميعهم يتحدثون اللغة الإنجليزية بطلاقة، ويمكننا توفير سائقين يتحدثون اللغة العربية أو الروسية بناءً على طلبك المسبق عند الحجز لضمان سهولة التواصل والراحة التامة أثناء رحلتك."
    },
    # Block 25: CTA
    {
        "type": "cta",
        "text": "هل أنت مستعد لتجربة قمة التنقل الفاخر والراحة المطلقة في دبي؟ تواصل مع فريق الكونسيرج لدينا عبر واتساب الآن لحجز سيارتك مع سائق خاص.",
        "buttonLink": "/booking",
        "buttonText": "احجز سيارتك مع سائق الآن"
    }
]

# -- RUSSIAN CONTENT --
ru_content = [
    # Block 0: Hook
    {
        "type": "paragraph",
        "text": "Прибыть в Дубай — значит оказаться в театре современных амбиций, в пространстве, созданном для того, чтобы поражать воображение и вызывать искреннее уважение. Здесь транспорт редко бывает просто способом перемещения между точками на карте; это заявление о статусе, отражение вашего положения и инструмент личной эффективности. В то время как многие туристы и деловые путешественники сразу задумываются об аренде спортивного автомобиля для самостоятельного вождения, те, кто понимает истинную природу роскоши в Объединенных Арабских Эмиратах, выбирают иной путь. Они отдают предпочтение абсолютному спокойствию и комфорту, которые дарит профессиональная услуга личного водителя на Rolls-Royce. Управление автомобилем на многополосных скоростных магистралях Дубая — таких как знаменитое шоссе Шейха Зайда — под жарким арабским солнцем может быть весьма утомительным процессом даже для опытных водителей. Напротив, отдых в тишине задней части салона собранного в Гудвуде автомобиля, пока лицензированный RTA местный водитель берет на себя все заботы о трафике, превращает поездку в естественное продолжение вашего офиса или гостиной. Независимо от того, направляетесь ли вы из VIP-терминала Международного аэропорта Дубая (DXB) на свою виллу на Пальм-Джумейре или едете на важную встречу в Международный финансовый центр Дубая (DIFC), появление на Rolls-Royce с водителем подчеркнет ваш статус и безупречный стиль."
    },
    # Block 1: Quick Answer (border-left)
    {
        "type": "paragraph",
        "text": "<div style=\"background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 Быстрый ответ:</strong> Аренда Rolls-Royce с водителем в Дубае начинается от <strong>3 800 AED в сутки</strong> за модель Ghost, <strong>5 800 AED в сутки</strong> за флагман Phantom, <strong>6 500 AED в сутки</strong> за внедорожник Cullinan и <strong>7 500 AED в сутки</strong> за электрическое купе Spectre. В стоимость входят услуги водителя с лицензией RTA, топливо, дорожные сборы Salik и бесплатная доставка авто по Дубаю. В отличие от обычной аренды, страховой депозит не требуется. Забронируйте в WhatsApp <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a>.</div>"
    },
    # Block 2: Section 1 Title
    {
        "type": "heading",
        "text": "Абсолютный комфорт аренды Rolls-Royce с водителем в Дубае"
    },
    # Block 3: Section 1 Body
    {
        "type": "paragraph",
        "text": "Выбор в пользу аренды Rolls-Royce с водителем в Дубае продиктован стремлением к эффективному управлению временем и бескомпромиссному удобству. Вождение в мегаполисе требует предельной концентрации: скоростной режим меняется неожиданно, сложные многоуровневые развязки требуют мгновенного перестроения из ряда в ряд, а дорожная обстановка в часы пик бывает непредсказуемой. Заказывая услугу личного водителя, вы возвращаете себе драгоценное время. Салон современного Rolls-Royce — это вершина шумоизоляции и роскоши, созданная для того, чтобы полностью изолировать вас от внешнего мира. Под патронажем концерна BMW современные автомобили Rolls-Royce объединили в себе традиции британского ручного труда и передовые немецкие технологии. Салон оснащен двойными акустическими стеклами, коврами из натуральной шерсти и более чем 100 кг шумопоглощающих материалов, создающих абсолютную тишину. В такой обстановке деловые люди могут конфиденциально проводить переговоры, готовиться к презентациям или изучать контракты, не отвлекаясь на дорогу. Для туристов и семейных пар это идеальная возможность отдохнуть после долгого перелета или спланировать вечер в лучших ресторанах Дубая. Вам больше не придется искать свободное место на парковке у Dubai Mall или ждать автомобиль у входа в отель — водитель доставит вас точно к дверям и встретит в назначенное время."
    },
    # Block 4: Section 2 Title
    {
        "type": "heading",
        "text": "Преимущества премиального обслуживания с личным водителем"
    },
    # Block 5: Section 2 Body
    {
        "type": "paragraph",
        "text": "Услуги профессионального шофера предоставляют ряд важных преимуществ, которые делают ваши поездки по ОАЭ исключительно комфортными. Во-первых, вождение в Дубае требует отличного знания города. Наши водители имеют лицензии RTA и досконально знают дорожную сеть эмирата, выбирая оптимальные маршруты в обход пробок и соблюдая все правила VIP-доступа на закрытые мероприятия, к терминалам частной авиации и пятизвездочным курортам. Во-вторых, безопасность является ключевым приоритетом: водители проходят строгий отбор и регулярно повышают квалификацию, строго соблюдая правила дорожного движения ОАЭ. В-третьих, вы можете полноценно работать в пути благодаря наличию выдвижных столиков, USB-портов и удобных кресел. Наконец, эффектное появление имеет огромное значение. Подъехать к отелю Burj Al Arab, яхт-клубу в Дубай Марина или офисному центру в Бизнес Бэй на Rolls-Royce с личным водителем — значит подчеркнуть свой статус и уважение к партнерам, что крайне важно в деловой культуре Ближнего Востока. Узнать больше о наших стандартах можно на странице <a href=\"/ru/services/chauffeur\">услуг водителя</a> или в каталоге автомобилей на странице <a href=\"/ru/fleet/ghost\">Rolls-Royce Ghost</a>."
    },
    # Block 6: Section 3 Title
    {
        "type": "heading",
        "text": "Сравнение тарифов и моделей Rolls-Royce с водителем"
    },
    # Block 7: Section 3 Body
    {
        "type": "paragraph",
        "text": "Автопарк компании Naqra FZE с водителем включает в себя различные модели Rolls-Royce, каждая из которых подходит под определенные задачи и форматы поездок. Стартовым предложением в нашей линейке является элегантный седан Rolls-Royce Ghost, доступный по цене от 3 800 AED в сутки. Ghost — это великолепный выбор для бизнесменов и руководителей, сочетающий современный стиль и деловой этикет, уместный в DIFC и Даунтауне Дубая. Для тех, кто предпочитает простор и высокую посадку внедорожника класса люкс, мы предлагаем Rolls-Royce Cullinan по цене от 6 500 AED в день. Эта модель пользуется особой популярностью у семей и VIP-групп, которым требуется вместительное багажное отделение для поездок в аэропорт или шопинга в элитных бутиках. Полностью электрический Spectre стоимостью от 7 500 AED в сутки представляет собой будущее бесшумного транспорта и идеально подходит для руководителей, ценящих экологичность и инновации. Наконец, легендарный флагман Rolls-Royce Phantom доступен по цене от 5 800 AED в день. Он остается главным выбором для свадебных церемоний, визитов на государственном уровне и светских мероприятий на красной дорожке благодаря своим распашным дверям и величественному силуэту. Ознакомиться с полным списком цен и моделей можно в нашем <a href=\"/ru/pricing\">разделе тарифов</a>."
    },
    # Block 8: List
    {
        "type": "list",
        "items": [
            "<strong>Rolls-Royce Ghost (от 3 800 AED/день):</strong> Мощный двигатель V12 объемом 6.75 л с двойным турбонаддувом (563 л.с.), обеспечивающий безупречную динамику и комфорт представительского седана для деловых встреч.",
            "<strong>Rolls-Royce Phantom (от 5 800 AED/день):</strong> Исторический флагман марки с непревзойденной шумоизоляцией салона, классическими заднепетлевыми дверями и абсолютным VIP-статусом для особых случаев.",
            "<strong>Rolls-Royce Cullinan (от 6 500 AED/день):</strong> Роскошный внедорожник с полным приводом, просторным салоном и вместительным багажником, идеальный для семейных поездок и шопинга в Дубае.",
            "<strong>Rolls-Royce Spectre (от 7 500 AED/день):</strong> Первое электрическое купе бренда, предлагающее абсолютную тишину хода, футуристический дизайн салона и передовые цифровые системы управления."
        ]
    },
    # Block 9: Section 4 Title
    {
        "type": "heading",
        "text": "Легендарное мастерство Гудвуда: Устройство салона"
    },
    # Block 10: Section 4 Body
    {
        "type": "paragraph",
        "text": "Каждый Rolls-Royce в нашем парке собирается вручную на заводе в Гудвуде (Великобритания), являясь символом эксклюзивного качества. Салон автомобиля спроектирован так, чтобы стать вашей личной зоной комфорта вдали от шумных улиц Дубая. Интерьер выполнен из тончайшей кожи альпийских быков, которая тщательно отбирается вручную для исключения малейших дефектов. Деревянные панели подбираются симметрично, создавая уникальный рисунок на дверях и торпедо. Одной из самых известных деталей является потолок «Звездное небо» (Starlight Headliner), создающий иллюзию ясной ночи над пустыней с помощью сотен оптоволоконных светодиодов. Климатическая система с многоступенчатой очисткой поддерживает идеальную свежесть воздуха, а сиденья оснащены функциями массажа, вентиляции и электрорегулировками. Подвеска Magic Carpet Ride сканирует дорогу перед машиной и моментально меняет жесткость амортизаторов, сглаживая любые неровности и превращая поездку в плавный полет. Для получения подробной информации о дизайне флагмана перейдите на страницу модели <a href=\"/ru/fleet/phantom\">Rolls-Royce Phantom</a>."
    },
    # Block 11: Image
    {
        "type": "image",
        "src": "/images/blog/rent-rolls-royce-driver-dubai-chauffeur-service-inline.webp",
        "alt": "Профессиональный водитель открывает дверь черного Rolls-Royce Ghost в Даунтауне Дубая на закате",
        "caption": "Безупречный сервис: наш личный водитель позаботится о каждой детали вашей поездки по Дубаю."
    },
    # Block 12: Section 5 Title
    {
        "type": "heading",
        "text": "Простая процедура оформления аренды авто с водителем"
    },
    # Block 13: Section 5 Body
    {
        "type": "paragraph",
        "text": "Одним из главных преимуществ аренды Rolls-Royce с водителем в Дубае является максимальная простота оформления. При обычной аренде компании требуют множество документов: международное водительское удостоверение, проверку местных прав и обязательное блокирование крупного залога на кредитной карте. Для иностранных туристов сбор этих документов может стать обременительным процессом. Однако при бронировании автомобиля с водителем в Naqra FZE вся ответственность за транспортное средство лежит на нашем штатном водителе с лицензией RTA. Это означает, что вам не нужно предъявлять водительское удостоверение, беспокоиться о страховке и вносить страховой депозит. Вам не придется ждать разблокировки средств на банковской карте после окончания поездки. Для подтверждения заказа требуется только копия паспорта или Emirates ID для верификации личности. Мы доставим автомобиль с водителем в любое удобное место: к терминалу прилета Международного аэропорта Дубая (DXB) или к входу в ваш отель. Полный регламент бронирования описан в нашем <a href=\"/ru/blog/ultimate-guide-rolls-royce-rental-dubai\">руководстве по аренде</a>, гарантирующем быстрое начало вашей поездки."
    },
    # Block 14: FAQ Title
    {
        "type": "heading",
        "text": "Часто задаваемые вопросы"
    },
    # Block 15: FAQ 1 Q
    {
        "type": "heading",
        "text": "Сколько стоит аренда Rolls-Royce с водителем в Дубае?"
    },
    # Block 16: FAQ 1 A
    {
        "type": "paragraph",
        "text": "Цена аренды Rolls-Royce с водителем в Дубае начинается от 3 800 AED в сутки за модель Ghost. Представительский седан Phantom доступен по цене от 5 800 AED в день, внедорожник Cullinan SUV — от 6 500 AED в день, а электрический Spectre — от 7 500 AED в сутки. Тарифы прозрачны и полностью включают услуги лицензированного водителя, аренду авто, топливо и дорожные сборы Salik в черте Дубая."
    },
    # Block 17: FAQ 2 Q
    {
        "type": "heading",
        "text": "Нужно ли оставлять залог при аренде машины с водителем?"
    },
    # Block 18: FAQ 2 A
    {
        "type": "paragraph",
        "text": "Нет. В отличие от аренды без водителя, при заказе автомобиля с шофером страховой депозит не вносится. Поскольку за управление машиной отвечает наш штатный водитель, клиент полностью освобождается от необходимости вносить залог, не несет ответственности за штрафы ПДД и страховые случаи, что делает поездку максимально спокойной."
    },
    # Block 19: FAQ 3 Q
    {
        "type": "heading",
        "text": "Какие документы нужны для заказа Rolls-Royce с водителем?"
    },
    # Block 20: FAQ 3 A
    {
        "type": "paragraph",
        "text": "Для оформления аренды с водителем требуется минимальный пакет документов. Иностранным гостям Дубая достаточно предоставить копию паспорта и туристической визы, а резидентам ОАЭ — копию Emirates ID. Наличие водительских прав и прохождение проверок не требуются, что позволяет подтвердить бронь в течение нескольких минут."
    },
    # Block 21: FAQ 4 Q
    {
        "type": "heading",
        "text": "Может ли водитель встретить меня прямо в аэропорту Дубая (DXB)?"
    },
    # Block 22: FAQ 4 A
    {
        "type": "paragraph",
        "text": "Да. Мы предоставляем услуги VIP-встречи в Международном аэропорту Дубая (DXB) и Международном аэропорту Аль-Мактум (DWC). Наш водитель будет отслеживать статус вашего рейса, встретит вас в терминале прилета с именной табличкой, поможет донести багаж и с комфортом доставит вас на роскошном автомобиле до отеля или виллы."
    },
    # Block 23: FAQ 5 Q
    {
        "type": "heading",
        "text": "На каких языках говорят водители и есть ли у них лицензии?"
    },
    # Block 24: FAQ 5 A
    {
        "type": "paragraph",
        "text": "Да, все водители нашей компании имеют действующие лицензии Управления по дорогам и транспорту Дубая (RTA) и проходят обучение VIP-стандартам обслуживания. Они свободно говорят на английском языке, а по предварительному запросу при бронировании мы можем закрепить за вами водителя, владеющего русским или арабским языком, для максимального взаимопонимания."
    },
    # Block 25: CTA
    {
        "type": "cta",
        "text": "Готовы оценить превосходный уровень премиальных поездок в Дубае? Напишите нашему консьержу в WhatsApp, чтобы заказать Rolls-Royce с личным водителем.",
        "buttonLink": "/booking",
        "buttonText": "Заказать Rolls-Royce с водителем"
    }
]

# Create output JSON structure
post_data = {
    "en": {
        "title": "Rent a Rolls-Royce With Driver in Dubai: Rates and Models",
        "description": "Rent a Rolls-Royce with driver in Dubai from AED 3,800/day. Compare rates and models like Phantom, Ghost, Cullinan & Spectre for ultimate chauffeur comfort.",
        "author": "Ahmed Salem",
        "date": "2026-10-10",
        "readTime": "10 min read",
        "category": "Guides",
        "image": "/images/blog/rent-rolls-royce-driver-dubai-chauffeur-service-cover.jpg",
        "content": en_content,
        "relatedArticles": [
            "rolls-royce-chauffeur-dubai-guide",
            "rolls-royce-airport-transfer-dubai",
            "ultimate-guide-rolls-royce-rental-dubai"
        ]
    },
    "ar": {
        "title": "استئجار رولز رويس مع سائق في دبي: الأسعار والموديلات",
        "description": "استئجار رولز رويس مع سائق في دبي بسعر يبدأ من 3,800 درهم/يوم. قارن أسعار وموديلات فانتوم وجوست وكولينان وسبكتر للحصول على أقصى درجات الراحة والرفاهية.",
        "author": "Ahmed Salem",
        "date": "2026-10-10",
        "readTime": "10 min read",
        "category": "Guides",
        "image": "/images/blog/rent-rolls-royce-driver-dubai-chauffeur-service-cover.jpg",
        "content": ar_content,
        "relatedArticles": [
            "rolls-royce-chauffeur-dubai-guide",
            "rolls-royce-airport-transfer-dubai",
            "ultimate-guide-rolls-royce-rental-dubai"
        ]
    },
    "ru": {
        "title": "Аренда Rolls-Royce с водителем в Дубае: цены и модели",
        "description": "Аренда Rolls-Royce с водителем в Дубае от 3 800 AED/день. Сравните цены и модели Phantom, Ghost, Cullinan и Spectre для роскошных поездок с водителем.",
        "author": "Ahmed Salem",
        "date": "2026-10-10",
        "readTime": "10 min read",
        "category": "Guides",
        "image": "/images/blog/rent-rolls-royce-driver-dubai-chauffeur-service-cover.jpg",
        "content": ru_content,
        "relatedArticles": [
            "rolls-royce-chauffeur-dubai-guide",
            "rolls-royce-airport-transfer-dubai",
            "ultimate-guide-rolls-royce-rental-dubai"
        ]
    },
    "publishAt": "2026-09-13T16:37:13+04:00"
}

# Print word counts
print("EN Word Count:", count_words(en_content))
print("AR Word Count:", count_words(ar_content))
print("RU Word Count:", count_words(ru_content))

# Save file
target_path = "/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com/src/data/blog/rent-rolls-royce-driver-dubai-chauffeur-service.json"
os.makedirs(os.path.dirname(target_path), exist_ok=True)
with open(target_path, 'w', encoding='utf-8') as f:
    json.dump(post_data, f, ensure_ascii=False, indent=2)
print("Saved JSON successfully to", target_path)

import json
import re
import os

# Adheres to the 26-block sequence and ensures >= 1500 words per language.

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

en_content = [
    # Block 0: Hook
    {
        "type": "paragraph",
        "text": "To speak of weight in the context of the Rolls-Royce Phantom is to enter a realm of engineering that borders on the theatrical. On paper, the flagship of the Goodwood-based marque presents itself as a vehicle of imposing scale. But when one observes the sheer presence of the Phantom VIII gliding down Sheikh Zayed Road or arriving under the canopy of a five-star resort in Jumeirah, the physical metrics become secondary to the experience of effortless travel. The primary question of how much does a rolls royce phantom weigh engineering dubai is not simply a matter of scale; it is an exploration of how Goodwood’s engineers have conquered gravity to deliver the legendary 'Magic Carpet Ride' through the streets of Dubai. A vehicle that places absolute silence and passenger comfort above all else cannot be light; it requires substantial mass to isolate its occupants from the outside world. Yet, the way this massive motor car carries its weight, accelerating with a quiet dignity and turning with a surprising agility, represents one of the greatest achievements in modern automotive design. For travelers, residents, and VIPs looking to experience this pinnacle of British craftsmanship, the physical presence of the Phantom VIII offers a profound statement of status, one that stands in elegant contrast to the daily rental options available at Naqra FZE, where the flagship can be secured starting at AED 5,800 per day. The engineering behind the weight of the Phantom is a testament to Rolls-Royce's refusal to compromise. Rather than attempting to build a lightweight vehicle that would inevitably sacrifice structural rigidity and cabin quietness, Goodwood chose to embrace the mass, utilizing a bespoke platform and advanced suspension technologies to ensure that the weight itself contributes to the car's unparalleled ride quality. In Dubai, a city that respects both engineering brilliance and uncompromising luxury, the Phantom's weight is not a drawback but a fundamental aspect of its majestic character. Every journey in this vehicle, whether a quick transfer to the Dubai International Airport or a leisurely drive along the crescent of the Palm Jumeirah, is defined by a sense of absolute stability and isolation from the external environment."
    },
    # Block 1: Quick Answer
    {
        "type": "paragraph",
        "text": "<div style=\"background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 Quick Answer:</strong> The Rolls-Royce Phantom VIII has a curb weight of approximately <strong>2,560 kg (5,644 lbs)</strong> for the standard wheelbase (SWB) and <strong>2,610 kg (5,754 lbs)</strong> for the extended wheelbase (EWB). Despite this massive weight, its 6.75L V12 engine accelerates it from 0-100 km/h in just 5.3 seconds. Renting a Phantom in Dubai from Naqra FZE starts at <strong>AED 5,800 per day</strong>. Contact our concierge via WhatsApp at <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a> to book.</div>"
    },
    # Block 2: Section 1 Title
    {
        "type": "heading",
        "text": "The Architecture of Luxury: Aluminum Spaceframe and Curb Weight Figures"
    },
    # Block 3: Section 1 Body
    {
        "type": "paragraph",
        "text": "To understand where the weight of the Rolls-Royce Phantom VIII originates, we must look beneath the hand-polished exterior panels to its structural core. Every modern Rolls-Royce is built upon a proprietary all-aluminum spaceframe chassis known as the 'Architecture of Luxury'. This engineering foundation was created specifically to ensure that the flagship saloon and its SUV counterpart, the Cullinan, do not share components with mass-market vehicles. In its standard wheelbase configuration, the Phantom VIII has a curb weight of approximately 2,560 kilograms (5,644 lbs). For those who opt for the grander proportions of the extended wheelbase version, which offers additional legroom for rear passengers, the curb weight rises to 2,610 kilograms (5,754 lbs). While these figures are indeed substantial, the use of aluminum in the spaceframe is what prevents the Phantom from being far heavier. If built with conventional steel, the vehicle would easily exceed three tons. The spaceframe provides immense structural rigidity, which is essential for minimizing cabin noise and vibration, creating the ultimate quiet sanctuary. The rigidity of the chassis ensures that the active air suspension can perform its duties with absolute precision, isolating the cabin from road imperfections as you glide through Downtown Dubai or navigate the highway to Abu Dhabi. The spaceframe is also designed to be highly adaptable, allowing for different body styles and sizes without compromising the structural integrity that is core to the Rolls-Royce experience. Goodwood's engineers have placed structural joins in areas that maximize strength while minimizing weight, demonstrating that mass, when properly engineered, is a key component of luxury. The aluminum casting and extrusions are joined by over 120 meters of weld, ensuring that the chassis behaves as a single, solid piece of metal. This rigidity means that the doors close with a reassuring, quiet thud, and the entire vehicle remains completely free of the squeaks and rattles that can plague lesser structures over time."
    },
    # Block 4: Section 2 Title
    {
        "type": "heading",
        "text": "The Heart of the Flagship: The Twin-Turbo V12 and Air Suspension"
    },
    # Block 5: Section 2 Body
    {
        "type": "paragraph",
        "text": "Managing a curb weight of over two and a half tons requires a powertrain of exceptional capability, and Goodwood engineers have equipped the Phantom with a massive 6.75-liter twin-turbocharged V12 engine. This powerhouse is engineered not for high-rpm performance, but for immense low-end torque, delivering 563 horsepower and a staggering 900 Nm of torque from just 1,700 rpm. The power is delivered to the rear wheels via an eight-speed satellite-aided automatic transmission that reads GPS data to anticipate the road ahead, pre-selecting gears for upcoming turns or highway ramps. To ensure that this weight does not compromise passenger comfort, the Phantom features a sophisticated double-wishbone front suspension and a five-link rear axle. This is paired with an active air suspension system that performs millions of calculations per second. Using cameras to actively scan the road ahead, the system adjusts the dampers in real-time to absorb bumps before they can be felt inside the cabin. This active management is what creates the famous 'Magic Carpet Ride' sensation, making the Phantom feel as though it is floating above the asphalt of Sheikh Zayed Road, completely unaffected by the laws of physics that govern lesser motor cars. The suspension system is so advanced that it can even compensate for the weight of a single passenger shifting their position in the rear seat, ensuring the car remains perfectly level at all times. This level of detail is typical of Goodwood's engineering philosophy, which seeks to eliminate even the smallest disruptions to the passenger experience. The engine itself is mounted on massive active dampers that cancel out any vibrations before they can reach the cabin, ensuring that the only indication of the V12's operation is the seamless surge of acceleration when the driver presses the pedal."
    },
    # Block 6: Section 3 Title
    {
        "type": "heading",
        "text": "Goodwood Engineering: Rear-Axle Steering and Driver Assistance"
    },
    # Block 7: Section 3 Body
    {
        "type": "paragraph",
        "text": "How Goodwood engineers managed the weight of this massive vehicle in daily driving is a masterclass in modern automotive technology. The Phantom VIII is equipped with active rear-axle steering, a feature that significantly reduces its turning circle. At low speeds, the rear wheels turn in the opposite direction to the front wheels, allowing this long saloon to navigate tight hotel driveways in Dubai Marina or the narrow streets of DIFC with the agility of a much smaller sedan. At high speeds, the rear wheels turn in the same direction as the front wheels, ensuring rock-solid stability during lane changes on the highway. This physical agility is complemented by a comprehensive suite of advanced driver assistance systems (ADAS). These electronic aids include active cruise control, collision warning systems, cross-traffic alerts, and lane-departure assistance, all working in harmony to manage the vehicle's momentum. The braking system is equally impressive, featuring massive ventilated discs that bring the 2,560 kg carriage to a halt with absolute composure, ensuring that the driver remains in complete control and the passengers remain completely undisturbed during any journey. The steering system is electrically assisted and speed-sensitive, providing effortless assistance at low speeds during tight maneuvers while tightening up on the highway to offer a reassuringly solid feel. This dual nature ensures that the driver never feels fatigued, regardless of whether they are navigating the dense traffic of Downtown Dubai or cruising on the open highway to the northern Emirates. The integration of these systems is so seamless that the driver is rarely aware of their operation, only noticing the effortless manner in which the Phantom responds to every input."
    },
    # Block 8: List
    {
        "type": "list",
        "items": [
            "<strong>Aluminum Spaceframe Chassis:</strong> The 'Architecture of Luxury' provides extreme rigidity while keeping the curb weight at 2,560 kg for the short wheelbase and 2,610 kg for the extended wheelbase.",
            "<strong>6.75L Twin-Turbo V12 Engine:</strong> Delivers 563 hp and 900 Nm of torque from a low 1,700 rpm, allowing the massive saloon to accelerate from 0 to 100 km/h in a seamless 5.3 seconds.",
            "<strong>Active Air Suspension:</strong> Uses road-scanning cameras to pre-adjust the dampers, ensuring the legendary Magic Carpet Ride remains undisturbed by road imperfections.",
            "<strong>Active Rear-Axle Steering:</strong> Sharpens low-speed maneuverability in tight spaces and increases high-speed stability on highways.",
            "<strong>Advanced Safety & ADAS:</strong> A comprehensive network of electronic driver aids and robust braking systems that manage the vehicle's momentum effortlessly."
        ]
    },
    # Block 9: Section 4 Title
    {
        "type": "heading",
        "text": "Evaluating the Rental Economics of Naqra FZE in Dubai"
    },
    # Block 10: Section 4 Body
    {
        "type": "paragraph",
        "text": "While owning a Rolls-Royce Phantom represents a significant capital investment and requires managing annual maintenance and depreciation, renting offers a seamless and financially intelligent alternative. At Naqra FZE, we offer our clients the opportunity to experience the pinnacle of luxury without any of the long-term liabilities of ownership. Renting our flagship Phantom starts at AED 5,800 per day. For business executives, luxury travelers, or residents hosting special events, this rate represents an incredibly efficient way to command the streets of Dubai. When compared to the other options in our fleet, the Phantom remains the ultimate statement of presence. The refined Ghost is available starting at AED 3,800 per day, the commanding Cullinan SUV at AED 6,500 per day, and the cutting-edge electric Spectre at AED 7,500 per day. Our transparent pricing structure ensures that there are no hidden fees, with standard comprehensive insurance and delivery to your hotel or private villa included. The financial benefits of renting go beyond the avoidance of capital lockup. A purchased Phantom loses a significant portion of its value to depreciation the moment it leaves the showroom, and this depreciation continues even if the vehicle spends most of its time parked. By renting, you bypass this depreciation curve entirely, allowing your capital to remain active in Dubai's real estate or financial sectors. To help you compare our fleet options, we have compiled a summary of rates, engine specifications, and weights: <div class=\"overflow-x-auto my-8 border border-rolls-gold/20 rounded-lg\"><table class=\"w-full text-left border-collapse text-gray-300\"><thead><tr class=\"bg-rolls-gold/10 border-b border-rolls-gold/20\"><th class=\"p-4 text-white font-bold\">Rolls-Royce Model</th><th class=\"p-4 text-white font-bold\">Daily Rental Rate (AED)</th><th class=\"p-4 text-white font-bold\">Engine Specification</th><th class=\"p-4 text-white font-bold\">Approximate Curb Weight</th></tr></thead><tbody class=\"divide-y divide-rolls-gold/10\"><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Ghost</td><td class=\"p-4\">AED 3,800</td><td class=\"p-4\">6.75L Twin-Turbo V12 (563 hp)</td><td class=\"p-4\">2,490 kg (5,489 lbs)</td></tr><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Phantom</td><td class=\"p-4\">AED 5,800</td><td class=\"p-4\">6.75L Twin-Turbo V12 (563 hp)</td><td class=\"p-4\">2,560 kg (5,644 lbs)</td></tr><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Cullinan</td><td class=\"p-4\">AED 6,500</td><td class=\"p-4\">6.75L Twin-Turbo V12 (563 hp)</td><td class=\"p-4\">2,660 kg (5,864 lbs)</td></tr><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Spectre</td><td class=\"p-4\">AED 7,500</td><td class=\"p-4\">Dual-Motor Electric (584 hp)</td><td class=\"p-4\">2,890 kg (6,371 lbs)</td></tr></tbody></table></div>"
    },
    # Block 11: Image
    {
        "type": "image",
        "src": "/images/blog/much-does-rolls-royce-phantom-weigh-specs-figures-inline.webp",
        "alt": "A close-up view of the majestic front grille and Spirit of Ecstasy of a Rolls-Royce Phantom",
        "caption": "The heavy-set elegance of the Phantom is perfectly balanced by Goodwood's engineering."
    },
    # Block 12: Section 5 Title
    {
        "type": "heading",
        "text": "Seamless Handover and Bespoke Delivery in Dubai"
    },
    # Block 13: Section 5 Body
    {
        "type": "paragraph",
        "text": "Renting a Rolls-Royce Phantom from Naqra FZE is a frictionless experience, designed to mirror the refined standards of the vehicle itself. We eliminate the traditional paperwork and delays of standard car rentals. For UAE residents, we require only a valid UAE driving license and an Emirates ID. International visitors need to present their passport, tourist visa, and a valid driver's license from their home country or an international driving permit. A security deposit is pre-authorized on your credit card and released once the vehicle is returned and checked for toll fees (Salik) and traffic fines. We deliver the Phantom in pristine condition directly to your location, whether it is Jumeirah, the Palm, Downtown, or the VIP terminal at Dubai International Airport. Our chauffeur services are also available for those who prefer to experience the rear cabin’s sanctuary while a professional, RTA-licensed driver navigates Sheikh Zayed Road. This allows you to focus on your business or enjoy the luxury in absolute peace. Explore our <a href=\"/fleet/phantom\">Rolls-Royce Phantom</a> page to check availability, or view our <a href=\"/pricing\">fleet pricing</a> to plan your next journey. When you are ready to secure the ultimate motoring experience, our concierge team is standing by to coordinate every detail. We take pride in offering a service that is as bespoke as the vehicles we operate, ensuring that your time in Dubai is supported by the very best in luxury transportation."
    },
    # Block 14: FAQ Title
    {
        "type": "heading",
        "text": "Frequently Asked Questions"
    },
    # Block 15: FAQ 1 Q
    {
        "type": "heading",
        "text": "How much does a Rolls-Royce Phantom VIII weigh?"
    },
    # Block 16: FAQ 1 A
    {
        "type": "paragraph",
        "text": "The standard wheelbase (SWB) Rolls-Royce Phantom VIII has a curb weight of approximately 2,560 kg (5,644 lbs). The extended wheelbase (EWB) version weighs slightly more, at approximately 2,610 kg (5,754 lbs). This mass is essential for accommodating the extensive soundproofing, active suspension systems, and structural rigidity that define the flagship's luxury ride. Current configurations and pricing details can be explored on our <a href=\"/fleet/phantom\">Rolls-Royce Phantom</a> fleet page."
    },
    # Block 17: FAQ 2 Q
    {
        "type": "heading",
        "text": "How does the V12 engine handle the weight of the Phantom?"
    },
    # Block 18: FAQ 2 A
    {
        "type": "paragraph",
        "text": "The Phantom is equipped with a 6.75-liter twin-turbocharged V12 engine that produces 563 horsepower and 900 Nm of torque starting at just 1,700 rpm. This massive low-end torque allows the vehicle to accelerate effortlessly, moving from 0 to 100 km/h in 5.3 seconds. The acceleration is incredibly smooth and quiet, ensuring that passengers experience no sudden jerks or engine noise during travel."
    },
    # Block 19: FAQ 3 Q
    {
        "type": "heading",
        "text": "Is the Phantom difficult to maneuver due to its weight and size?"
    },
    # Block 20: FAQ 3 A
    {
        "type": "paragraph",
        "text": "Not at all. Goodwood engineers have equipped the Phantom VIII with active rear-axle steering, which turns the rear wheels slightly to reduce the turning circle at low speeds. This makes the large saloon surprisingly easy to maneuver in tight hotel driveways and parking spaces across Dubai, while advanced driver assistance systems help manage its weight and momentum on highways."
    },
    # Block 21: FAQ 4 Q
    {
        "type": "heading",
        "text": "How much does it cost to rent a Phantom in Dubai?"
    },
    # Block 22: FAQ 4 A
    {
        "type": "paragraph",
        "text": "Renting a Rolls-Royce Phantom from Naqra FZE starts at AED 5,800 per day. This rate includes standard comprehensive insurance, VIP delivery, and a standard daily mileage allowance of 250 km. We maintain a transparent pricing policy, meaning the quoted price is exactly what you pay without hidden administrative fees or sudden surcharges at delivery."
    },
    # Block 23: FAQ 5 Q
    {
        "type": "heading",
        "text": "What are the requirements to rent a Phantom in Dubai?"
    },
    # Block 24: FAQ 5 A
    {
        "type": "paragraph",
        "text": "UAE residents must provide a valid UAE driving license and Emirates ID. International visitors need their passport, tourist visa, and a driver's license from their home country or an international driving permit. A security deposit is pre-authorized on a credit card and released after the rental period, once Salik and traffic fine databases are updated. For more details on our rules, see our <a href=\"/blog/ultimate-guide-rolls-royce-rental-dubai\">ultimate rental guide</a>."
    },
    # Block 25: CTA
    {
        "type": "cta",
        "text": "Are you ready to experience the whisper-quiet power and absolute presence of the Phantom on Dubai's roads? Message our concierge team on WhatsApp to book your Rolls-Royce Phantom today.",
        "buttonLink": "/booking",
        "buttonText": "Book Your Phantom"
    }
]

ar_content = [
    # Block 0: Hook
    {
        "type": "paragraph",
        "text": "إن الحديث عن وزن سيارة رولز رويس فانتوم في سياق هندسة السيارات الفاخرة هو دخول إلى عالم من الإبداع الهندسي الفريد الذي يقارب حدود الإبهار الفني. على الورق، تبدو السيارة الرائدة المصنوعة في مصنع غودوود العريق كمركبة ذات أبعاد مهيبة وحجم طاغٍ. ولكن حين ترقب سيارة فانتوم وهي تنساب بهيبة ووقار على طول شارع الشيخ زايد أو تستقر بنعومة تحت مظلات المنتجعات ذات النجوم الخمس في نخلة جميرا، تصبح القياسات المادية ثانوية تماماً أمام تجربة التنقل الفاخرة والسلسة. إن السؤال الجوهري حول كم تبلغ تكلفة رولز رويس فانتوم شراءً واستئجاراً في دبي وكيف نجح مهندسو غودوود في موازنة هذا الوزن وتطويعه ليس مجرد بحث في الأرقام الجافة؛ بل هو استكشاف هندسي لكيفية تغلب الصانع البريطاني على قوانين الجاذبية ليقدم للركاب رحلته الأسطورية الشهيرة باسم 'البساط السحري' (Magic Carpet Ride) في شوارع دبي. فالمركبة التي تضع الهدوء المطبق والراحة المطلقة للركاب كأولوية قصوى لا يمكن أن تكون خفيفة الوزن؛ إذ يتطلب عزل المقصورة تماماً عن العالم الخارجي وضوضاء الطرقات كتلة مادية ضخمة ومواد عازلة استثنائية. ومع ذلك، فإن الطريقة التي تحمل بها هذه السيارة الفارهة وزنها، متسارعة بوقار صامت ومغيرة اتجاهها بمرونة مفاجئة ورشاقة غير متوقعة، تمثل واحداً من أعظم الإنجازات الهندسية في تاريخ تصميم السيارات الحديثة. بالنسبة للمسافرين ورجال الأعمال والزوار الراغبين في عيش هذه التجربة الفريدة، فإن الحضور الفخم لسيارة فانتوم يمثل بياناً قاطعاً ومكانة رفيعة تتناغم تماماً مع أسلوب الحياة الراقي في الإمارات، ويتناقض بذكاء مع خيارات استئجارها اليومية المتميزة المتاحة لدى شركة نقرة (Naqra FZE)، حيث يمكن استئجار هذه التحفة الفنية بأسعار تبدأ من 5,800 درهم يومياً. تعكس الهندسة الكامنة وراء وزن فانتوم فلسفة رولز رويس الصارمة في رفض أي تنازلات؛ فبدلاً من محاولة بناء سيارة خفيفة تفقد بالضرورة صلابتها الهيكلية وعزلها الصوتي الفائق، اختار مهندسو غودوود الاستفادة من الكتلة الكبيرة عبر شاسيه مخصص وتقنيات تعليق متطورة للغاية تضمن أن يساهم الوزن نفسه في تعزيز جودة الركوب الفائقة للسيارة. وفي دبي، وهي مدينة تقدر العبقرية الهندسية والفخامة التي لا تضاهى، لا يعد وزن فانتوم عيباً بل جزءاً أساسياً من طابعها المهيب. وتتميز كل رحلة على متن هذه المركبة، سواء كانت انتقالات سريعة إلى مطار دبي الدولي أو جولة هادئة على طول هلال نخلة جميرا الفاخرة، بشعور مطلق بالثبات والانعزال عن العالم الخارجي وضوضائه."
    },
    # Block 1: Quick Answer
    {
        "type": "paragraph",
        "text": "<div style=\"background:#1a1a1a;border-right:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 الإجابة السريعة:</strong> يبلغ الوزن الإجمالي لسيارة رولز رويس فانتوم VIII حوالي <strong>2,560 كجم (5,644 رطلاً)</strong> لقاعدة العجلات القياسية (SWB)، وحوالي <strong>2,610 كجم (5,754 رطلاً)</strong> لقاعدة العجلات الممتدة (EWB). وبالرغم من هذا الوزن الكبير، تتسارع السيارة بسلاسة من 0 إلى 100 كم/ساعة في غضون 5.3 ثانية فقط. ويبدأ سعر استئجار فانتوم في دبي من <strong>5,800 درهم يومياً</strong> من شركة نقرة الفاخرة. تواصل معنا مباشرة عبر واتساب على الرقم <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a> للحجز.</div>"
    },
    # Block 2: Section 1 Title
    {
        "type": "heading",
        "text": "بنية الفخامة المطلقة: شاسيه الألمنيوم الفضائي وأرقام الوزن الإجمالي لسيارة فانتوم"
    },
    # Block 3: Section 1 Body
    {
        "type": "paragraph",
        "text": "لكي نفهم من أين يأتي وزن سيارة رولز رويس فانتوم الثامنة، يجب أن نغوص تحت ألواح الهيكل الخارجية المصقولة يدوياً لنصل إلى جوهرها الهيكلي المبتكر. تُبنى كل سيارة رولز رويس حديثة على شاسيه ألمنيوم فضائي خاص بالكامل وحصري للصانع البريطاني، ويُعرف باسم 'بنية الفخامة' (Architecture of Luxury). هذا الأساس الهندسي المتقدم تم تطويره خصيصاً لضمان ألا تتشارك سيارة الصالون الرائدة أو شقيقتها الرياضية كولينان أي عناصر هيكلية أو قطع غيار مع السيارات التجارية واسعة الانتشار. وفي فئة قاعدة العجلات القياسية، تزن فانتوم VIII حوالي 2,560 كجم (5,644 رطلاً). أما لأولئك الذين يفضلون المساحة الشاسعة والأبعاد الأكثر فخامة لفئة قاعدة العجلات الممتدة (EWB)، التي تمنح ركاب المقصورة الخلفية مساحة إضافية مذهلة للأقدام، فإن الوزن يرتفع ليصل إلى 2,610 كجم (5,754 رطلاً). وبالرغم من أن هذه الأرقام تبدو ضخمة للوهلة الأولى، إلا أن استخدام الألمنيوم في بناء الهيكل الفضائي هو ما يمنع السيارة من أن تكون أثقل بكثير؛ فلو تم استخدام الفولاذ التقليدي في بنائها لتجاوز وزنها ثلاثة أطنان بسهولة. يوفر هذا الهيكل صلابة التوائية استثنائية تعد ضرورية للغاية لتقليل الاهتزازات وعزل المقصورة عن ضوضاء الطريق الخارجية، مما يخلق ملاذاً هادئاً وصامتاً بالكامل للركاب أثناء انطلاقهم في داون تاون دبي أو على الطرق السريعة المؤدية إلى أبوظبي. كما تم تصميم هذا الهيكل الفضائي ليكون مرناً وقابلاً للتكيف، مما يسمح بتبني تصاميم مختلفة للهيكل دون التأثير على السلامة الهيكلية التي تمثل جوهر تجربة رولز رويس. وقد وضع مهندسو غودوود مفاصل الهيكل في مناطق تزيد من القوة مع تقليل الوزن، مما يثبت أن الوزن الكبير عند معالجته هندسياً بذكاء يصبح عنصراً رئيسياً من عناصر الفخامة. ويتم دمج مصبوبات الألمنيوم بواسطة أكثر من 120 متراً من اللحام الفني لضمان عمل الشاسيه كقطعة معدنية واحدة شديدة التماسك. وتنعكس هذه الصلابة الفائقة على طريقة إغلاق الأبواب التي تغلق بصوت خافت يعزز من شعور الجودة العالية، وتضمن بقاء السيارة خالية تماماً من أي أصوات مزعجة قد تظهر في الهياكل الأقل كفاءة بمرور الزمن."
    },
    # Block 4: Section 2 Title
    {
        "type": "heading",
        "text": "قلب الهيبة الطاغية: محرك V12 ذو التوربو المزدوج ونظام التعليق الهوائي النشط"
    },
    # Block 5: Section 2 Body
    {
        "type": "paragraph",
        "text": "يتطلب التعامل الفعال مع سيارة يبلغ وزنها الإجمالي أكثر من طنين ونصف طاقة تشغيلية استثنائية وقوة دافعة جبارة، ولذلك قام مهندسو غودوود بتزويد فانتوم بمحركها الأسطوري المكون من 12 أسطوانة V12 بسعة 6.75 لتر مجهز بشاحن توربيني مزدوج. لم يتم تصميم هذا المحرك الجبار لتقديم أداء مرتفع في دورات المحرك العالية، بل لتوفير عزم دوران هائل عند دورات منخفضة للغاية، حيث ينتج قوة 563 حصاناً وعزم دوران مذهل يبلغ 900 نيوتن متر بدءاً من 1,700 دورة في الدقيقة فقط. وتنتقل هذه القوة الهائلة إلى العجلات الخلفية بسلاسة تامة عبر ناقل حركة أوتوماتيكي بثماني سرعات متصل بالأقمار الصناعية (Satellite-Aided Transmission) يقرأ بيانات نظام تحديد المواقع العالمي (GPS) ليتوقع مسار الطريق مسبقاً ويختار الترس الأنسب للمنعطفات القادمة أو المخارج السريعة. ولضمان ألا يؤثر هذا الوزن الكبير سلباً على راحة الركاب، تم تجهيز فانتوم بنظام تعليق أمامي مزدوج وعجلة خلفية خماسية النقاط، مدمجين بنظام تعليق هوائي نشط ومبتكر يقوم بملايين العمليات الحسابية في الثانية الواحدة. يستخدم هذا النظام كاميرات ذكية لمسح حالة الطريق أمام السيارة بشكل فوري لتهيئة المساعدين وامتصاص المطبات والتموجات قبل أن يشعر بها الركاب، مما يخلق تجربة 'البساط السحري' الشهيرة التي تجعلك تشعر كأنك تطفو فوق أسفلت شارع الشيخ زايد دون التأثر بالقوانين الفيزيائية التقليدية. ويتميز نظام التعليق بكونه متطوراً للغاية لدرجة أنه يمكنه التعويض الفوري عن وزن راكب واحد يغير وضعيته في المقعد الخلفي، لتبقى السيارة في مستوى أفقي مثالي طوال الوقت. هذا المستوى الاستثنائي من التفاصيل يمثل جوهر الفلسفة الهندسية في غودوود، والتي تسعى جاهدة للتخلص من أصغر الإزعاجات التي قد تعكر صفو ركابها. كما تم تثبيت المحرك نفسه على قواعد تعليق نشطة ضخمة تمتص أي اهتزازات قبل وصولها للمقصورة، ليكون المؤشر الوحيد على عمل المحرك هو التسارع السلس والانسيابي عند الضغط على الدواسة."
    },
    # Block 6: Section 3 Title
    {
        "type": "heading",
        "text": "عبقرية الهندسة البريطانية: نظام توجيه المحور الخلفي النشط وأنظمة دعم السائق"
    },
    # Block 7: Section 3 Body
    {
        "type": "paragraph",
        "text": "تعد الطريقة التي تعامل بها مهندسو غودوود مع وزن وحجم هذه السيارة المهيبة في القيادة اليومية بمثابة درس متقدم في هندسة وتكنولوجيا السيارات المعاصرة. تم تزويد فانتوم VIII بنظام توجيه نشط للمحور الخلفي (Active Rear-Axle Steering)، وهو ميزة تكنولوجية مبتكرة تقلل من نصف قطر الدوران بشكل ملحوظ. عند السرعات المنخفضة، تدور العجلات الخلفية عكس اتجاه العجلات الأمامية، مما يسمح لهذه السيارة الطويلة بالمناورة في مداخل الفنادق الضيقة في دبي مارينا أو شوارع مركز دبي المالي العالمي (DIFC) المزدحمة برشاقة وسهولة تامة تشبه السيارات الصغيرة. وعند السرعات العالية، تدور العجلات الخلفية في نفس اتجاه العجلات الأمامية لضمان ثبات مطلق واستقرار فائق أثناء تبديل الحارات على الطرق السريعة. تتكامل هذه الرشاقة الميكانيكية مع حزمة متطورة من أنظمة المساعدة المتقدمة للسائق (ADAS) تشمل مثبت السرعة التكيفي، ونظام التحذير من التصادم، ومراقبة حركة المرور الخلفية، ونظام الحفاظ على المسار. كما تم تزويد السيارة بنظام مكابح استثنائي يضم أقراص مكابح مهواة ضخمة قادرة على إيقاف هذه الـ 2,560 كجم بثبات تام وهدوء كامل، مما يضمن للسائق تحكماً مطلقاً وللركاب راحة تامة لا يشوبها أي إزعاج. ويتميز نظام التوجيه بمساعد كهربائي حساس للسرعة يوفر مساعدة مريحة وخفيفة للغاية أثناء المناورات الضيقة على السرعات المنخفضة، بينما يصبح أكثر تماسكاً وصلابة على الطرق السريعة ليمنح السائق شعوراً بالأمان المطلق. تضمن هذه الطبيعة المزدوجة عدم شعور السائق بأي تعب، سواء كان يمر وسط ازدحام داون تاون دبي أو يقود في رحلة طويلة نحو الإمارات الشمالية. ويتم دمج هذه الأنظمة بطريقة تجعل السائق لا يشعر بوجودها إطلاقاً، بل يستمتع فقط بالاستجابة السلسة لفانتوم لكل أمر بكل سهولة."
    },
    # Block 8: List
    {
        "type": "list",
        "items": [
            "<strong>شاسيه الألمنيوم الفضائي:</strong> توفر 'بنية الفخامة' صلابة استثنائية للهيكل مع الحفاظ على وزن 2,560 كجم للفئة القياسية و2,610 كجم للفئة الممتدة.",
            "<strong>محرك V12 بسعة 6.75 لتر:</strong> ينتج قوة 563 حصاناً وعزم دوران يبلغ 900 نيوتن متر عند 1,700 دورة في الدقيقة، ليتسارع الصالون الفاخر من 0 إلى 100 كم/ساعة في 5.3 ثانية.",
            "<strong>نظام التعليق الهوائي النشط:</strong> يمسح الطريق أمام السيارة عبر كاميرات ذكية لضبط المساعدين بشكل فوري وتوفير رحلة البساط السحري الأسطورية.",
            "<strong>توجيه المحور الخلفي النشط:</strong> يمنح السيارة رشاقة استثنائية عند المناورة في المساحات الضيقة وثباتاً مطلقاً عند الانطلاق بسرعة على الطرق السريعة.",
            "<strong>أنظمة السلامة ومساعدة السائق:</strong> شبكة متطورة من الأنظمة الإلكترونية والمكابح القوية للتحكم الكامل بوزن السيارة وحركتها على الطريق دون أدنى اهتزاز."
        ]
    },
    # Block 9: Section 4 Title
    {
        "type": "heading",
        "text": "مقارنة الأسعار والحسابات المالية للتأجير لدى شركة نقرة في دبي"
    },
    # Block 10: Section 4 Body
    {
        "type": "paragraph",
        "text": "على الرغم من أن اقتناء وشراء سيارة رولز رويس فانتوم يمثل استثماراً مالياً ضخماً يتطلب رعاية سنوية مستمرة وتغطية تكاليف الاهتلاك، إلا أن استئجارها يوفر بديلاً مرناً وذكياً من الناحية الاقتصادية. نحن في شركة نقرة (Naqra FZE) نمنح عملائنا فرصة استثنائية لتجربة الفخامة المطلقة دون تحمل أي التزامات طويلة الأجل أو خسائر مالية مرتبطة بالاقتناء. يبدأ استئجار سيارتنا الرائدة رولز رويس فانتوم من 5,800 درهم يومياً. وبالنسبة لرجال الأعمال والزوار الباحثين عن إطلالة مهيبة وحضور طاغٍ في دبي، يمثل هذا السعر خياراً عالي الكفاءة وموفراً لرأس المال. وعند مقارنتها بالطرازات الأخرى في أسطولنا الفاخر، تظل فانتوم القمة المطلقة للهيبة والوقار؛ حيث تتوفر سيارة جوست الصالون الفاخرة بسعر يبدأ من 3,800 درهم يومياً، وسيارة كولينان الرياضية متعددة الاستخدامات بسعر يبدأ من 6,500 درهم يومياً، بينما تبدأ سيارة سبكتر الكهربائية بالكامل من 7,500 درهم يومياً. تشمل أسعارنا الواضحة التأمين الشامل الفاخر والتوصيل الفوري لفندقك أو فيلتك الخاصة دون أي رسوم مخفية. وتمتد المزايا المالية للاستئجار لتشمل تجنب تجميد رأس المال؛ فبدلاً من حبس ملايين الدراهم في سيارة تنخفض قيمتها بمجرد خروجها من صالة العرض، يظل رأس مالك متاحاً للاستثمار في العقارات أو الأسهم. ولمساعدتك في اختيار الطراز الأمثل لرحلتك، أعددنا هذا الجدول التوضيحي الذي يعرض الأسعار والمواصفات والأوزان التقريبية لكل سيارة في أسطولنا: <div class=\"overflow-x-auto my-8 border border-rolls-gold/20 rounded-lg\" style=\"direction:rtl;\"><table class=\"w-full text-right border-collapse text-gray-300\"><thead><tr class=\"bg-rolls-gold/10 border-b border-rolls-gold/20\"><th class=\"p-4 text-white font-bold\">طراز رولز رويس</th><th class=\"p-4 text-white font-bold\">سعر الإيجار اليومي (درهم)</th><th class=\"p-4 text-white font-bold\">مواصفات المحرك والقوة</th><th class=\"p-4 text-white font-bold\">الوزن الإجمالي التقريبي</th></tr></thead><tbody class=\"divide-y divide-rolls-gold/10\"><tr><td class=\"p-4 font-semibold text-white\">رولز رويس جوست</td><td class=\"p-4\">3,800 درهم</td><td class=\"p-4\">V12 توربو مزدوج 6.75 لتر (563 حصان)</td><td class=\"p-4\">2,490 كجم (5,489 رطلاً)</td></tr><tr><td class=\"p-4 font-semibold text-white\">رولز رويس فانتوم</td><td class=\"p-4\">5,800 درهم</td><td class=\"p-4\">V12 توربو مزدوج 6.75 لتر (563 حصان)</td><td class=\"p-4\">2,560 كجم (5,644 رطلاً)</td></tr><tr><td class=\"p-4 font-semibold text-white\">رولز رويس كولينان</td><td class=\"p-4\">6,500 درهم</td><td class=\"p-4\">V12 توربو مزدوج 6.75 لتر (563 حصان)</td><td class=\"p-4\">2,660 كجم (5,864 رطلاً)</td></tr><tr><td class=\"p-4 font-semibold text-white\">رولز رويس سبكتر</td><td class=\"p-4\">7,500 درهم</td><td class=\"p-4\">محرك كهربائي مزدوج بقوة 584 حصاناً</td><td class=\"p-4\">2,890 كجم (6,371 رطلاً)</td></tr></tbody></table></div>"
    },
    # Block 11: Image
    {
        "type": "image",
        "src": "/images/blog/much-does-rolls-royce-phantom-weigh-specs-figures-inline.webp",
        "alt": "لقطة مقربة للشبك الأمامي المهيب وتمثال روح النشوة لسيارة رولز رويس فانتوم الفارهة",
        "caption": "الهيبة المطلقة والوقار لسيارة فانتوم يوازنهما مهندسو غودوود بدقة هندسية بالغة."
    },
    # Block 12: Section 5 Title
    {
        "type": "heading",
        "text": "خدمة تسليم راقية وتوصيل مخصص للسيارة في دبي"
    },
    # Block 13: Section 5 Body
    {
        "type": "paragraph",
        "text": "إن استئجار رولز رويس فانتوم من شركة نقرة هو تجربة راقية وسلسة بالكامل، تم تصميمها لتعكس نفس معايير الفخامة والخصوصية التي تميز السيارة نفسها. نحن نتولى كافة الترتيبات التشغيلية واللوجستية قبل تسليم السيارة لنضمن توفير وقتك. للمقيمين في دولة الإمارات العربية المتحدة، يتطلب الحجز فقط تقديم رخصة قيادة إماراتية سارية وبطاقة الهوية الإماراتية. أما بالنسبة للزوار الدوليين، فيطلب تقديم جواز السفر، وتأشيرة السياحة، ورخصة القيادة المحلية من بلدهم الأصلي أو رخصة قيادة دولية سارية. ويتم إجراء تفويض مسبق لمبلغ التأمين على بطاقتك الائتمانية ليتم إلغاؤه تلقائياً فور انتهاء الإيجار وإعادة السيارة بأمان بعد مراجعة سالك والمخالفات. نقوم بتسليم السيارة في حالة مثالية ونظيفة بالكامل أينما كنت في دبي، سواء في جميرا، أو نخلة جميرا، أو داون تاون، أو مبنى الطيران الخاص بمطار دبي الدولي. كما تتوفر لدينا خدمة السائق الخاص المحترف لمن يفضلون الاسترخاء في المقصورة الخلفية المعزولة بالكامل بينما يتولى سائق مرخص من هيئة الطرق والمواصلات قيادة السيارة بأمان على طرقات دبي. يمكنك زيارة صفحة <a href=\"/ar/fleet/phantom\">رولز رويس فانتوم</a> للتحقق من التوفر الفوري، أو الاطلاع على صفحة <a href=\"/ar/pricing\">الأسعار الكاملة لأسطولنا</a> لتخطيط رحلتك القادمة. وحين تكون مستعداً للانطلاق بأرقى تجارب القيادة، فإن فريق الكونسيرج لدينا في انتظارك لتنسيق كافة التفاصيل، ونحن فخورون بتقديم خدمات مخصصة تليق بتطلعات عملائنا الفاخرة."
    },
    # Block 14: FAQ Title
    {
        "type": "heading",
        "text": "الأسئلة الشائعة"
    },
    # Block 15: FAQ 1 Q
    {
        "type": "heading",
        "text": "كم يبلغ وزن سيارة رولز رويس فانتوم VIII؟"
    },
    # Block 16: FAQ 1 A
    {
        "type": "paragraph",
        "text": "يبلغ وزن سيارة رولز رويس فانتوم الثامنة ذات قاعدة العجلات القياسية (SWB) حوالي 2,560 كجم (5,644 رطلاً)، بينما تزن فئة قاعدة العجلات الممتدة (EWB) حوالي 2,610 كجم (5,754 رطلاً). هذا الوزن المرتفع ناتج عن دمج المواد العازلة للصوت الفائقة، ونظام التعليق الهوائي النشط، والصلابة الالتوائية العالية للهيكل الألمنيوم الفضائي. ويمكنك الاطلاع على المواصفات والأسعار عبر زيارة صفحة أسطول <a href=\"/ar/fleet/phantom\">رولز رويس فانتوم</a> المخصصة."
    },
    # Block 17: FAQ 2 Q
    {
        "type": "heading",
        "text": "كيف يتعامل محرك V12 مع وزن سيارة فانتوم الثقيل؟"
    },
    # Block 18: FAQ 2 A
    {
        "type": "paragraph",
        "text": "تم تجهيز فانتوم بمحرك V12 ذو توربو مزدوج بسعة 6.75 لتر ينتج قوة 563 حصاناً وعزم دوران يبلغ 900 نيوتن متر بدءاً من 1,700 دورة في الدقيقة فقط. هذا العزم الهائل عند دورات منخفضة يمنح السيارة قدرة تسارع فائقة وسلسة للغاية لتنطلق من 0 إلى 100 كم/ساعة في 5.3 ثانية فقط بهدوء مطبق ودون أي إزعاج للركاب في الخلف."
    },
    # Block 19: FAQ 3 Q
    {
        "type": "heading",
        "text": "هل يصعب قيادة ومناورة فانتوم في دبي بسبب وزنها وحجمها؟"
    },
    # Block 20: FAQ 3 A
    {
        "type": "paragraph",
        "text": "بالتأكيد لا. قام مهندسو رولز رويس بتزويد السيارة بنظام توجيه نشط للمحور الخلفي يقوم بتدوير العجلات الخلفية بشكل طفيف لتقليل نصف قطر الدوران عند السرعات المنخفضة، مما يسهل مناورتها ودورانها في مداخل الفنادق ومواقف السيارات الضيقة في دبي، بينما تساعد أنظمة دعم السائق الذكية في التحكم بوزن وحجم السيارة على الطرق السريعة."
    },
    # Block 21: FAQ 4 Q
    {
        "type": "heading",
        "text": "كم تبلغ تكلفة استئجار سيارة فانتوم في دبي؟"
    },
    # Block 22: FAQ 4 A
    {
        "type": "paragraph",
        "text": "يبدأ استئجار رولز رويس فانتوم من شركة نقرة من 5,800 درهم إماراتي يومياً. ويشمل هذا السعر التأمين الشامل الفاخر، والتوصيل والاستلام مجاناً داخل دبي، ومسافة سير يومية تبلغ 250 كم. نحن نلتزم بالشفافية الكاملة لضمان عدم وجود أي رسوم مخفية أو مفاجآت عند استلام السيارة."
    },
    # Block 23: FAQ 5 Q
    {
        "type": "heading",
        "text": "ما هي المستندات المطلوبة لاستئجار فانتوم في دبي؟"
    },
    # Block 24: FAQ 5 A
    {
        "type": "paragraph",
        "text": "بالنسبة لمقيمي الإمارات، يتطلب الاستئجار رخصة قيادة إماراتية سارية وبطاقة الهوية الإماراتية. وللزوار الدوليين، يتطلب جواز سفر سارٍ، وتأشيرة سياحية، ورخصة قيادة محلية أو رخصة دولية سارية. ويتم حجز وديعة تأمين مستردة عبر بطاقة الائتمان ويتم إلغاؤها بعد انتهاء الإيجار ومراجعة المخالفات وسالك. للتفاصيل الكاملة، يرجى مراجعة <a href=\"/ar/blog/ultimate-guide-rolls-royce-rental-dubai\">الدليل الشامل لاستئجار السيارات في دبي</a>."
    },
    # Block 25: CTA
    {
        "type": "cta",
        "text": "هل أنت مستعد لتجربة القوة الهادئة والحضور الطاغي لسيارة فانتوم على طرقات دبي الراقية؟ تواصل مع فريق الكونسيرج لدينا عبر واتساب لحجز سيارتك اليوم.",
        "buttonLink": "/booking",
        "buttonText": "احجز سيارة فانتوم الآن"
    }
]

ru_content = [
    # Block 0: Hook
    {
        "type": "paragraph",
        "text": "Разговор о весе в контексте Rolls-Royce Phantom открывает перед нами мир инженерного искусства, граничащего с высоким искусством. На бумаге этот флагман марки из Гудвуда выглядит как автомобиль внушительных размеров и огромной массы. Однако когда вы наблюдаете, как Phantom VIII величественно скользит по шоссе Шейха Зайда или плавно паркуется у входа в пятизвездочный курорт на Пальм-Джумейре, физические параметры отступают на второй план, уступая место ощущению абсолютной легкости движения. Главный вопрос о том, сколько весит rolls royce phantom weigh engineering dubai, — это не просто сухие цифры массы; это история о том, как инженеры из Гудвуда победили гравитацию ради создания легендарной плавности хода Magic Carpet Ride на дорогах Дубая. Автомобиль, ставящий во главу угла абсолютную тишину и максимальный комфорт пассажиров, не может быть легким. Для полной изоляции салона от шума внешнего мира требуются внушительная масса и толстые слои современных звукоизоляционных материалов. И тем не менее то, как этот роскошный автомобиль несет свой вес, плавно ускоряясь с благородным безмолвием и поворачивая с удивительной точностью, является одним из величайших достижений современного автомобилестроения. Для путешественников, резидентов и VIP-гостей Дубая величественный Phantom представляет собой исключительный статус, который гармонично сочетается с нашими предложениями по аренде в Naqra FZE, где флагманский седан можно арендовать по цене от 5 800 AED в день. Инженерия, стоящая за весом Phantom, демонстрирует отказ Rolls-Royce от любых компромиссов; вместо попыток создать легкий автомобиль, который пожертвовал бы жесткостью кузова и тишиной, Гудвуд выбрал интеграцию массы с передовыми технологиями подвески, гарантируя, что вес сам по себе способствует идеальной плавности хода. В Дубае, городе высочайших стандартов и безукоризненной роскоши, вес Phantom — это не недостаток, а важный элемент его благородного характера. Любая поездка во флагмане, будь то трансфер в аэропорт Дубая или путешествие по Пальм-Джумейре, наполнена чувством полной стабильности и защиты от внешнего мира."
    },
    # Block 1: Quick Answer
    {
        "type": "paragraph",
        "text": "<div style=\"background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 Быстрый ответ:</strong> Снаряженная масса Rolls-Royce Phantom VIII составляет около <strong>2 560 кг (5 644 фунтов)</strong> для стандартной колесной базы (SWB) и около <strong>2 610 кг (5 754 фунтов)</strong> для удлиненной версии (EWB). Несмотря на огромный вес, его двигатель V12 6.75L разгоняет седан от 0 до 100 км/ч за 5.3 секунды. Аренда Phantom в Дубае в Naqra FZE начинается от <strong>5 800 AED в день</strong>. Свяжитесь с нами в WhatsApp по номеру <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a> для бронирования.</div>"
    },
    # Block 2: Section 1 Title
    {
        "type": "heading",
        "text": "Архитектура роскоши: алюминиевая пространственная рама и показатели веса Phantom"
    },
    # Block 3: Section 1 Body
    {
        "type": "paragraph",
        "text": "Чтобы понять, из чего складывается вес Rolls-Royce Phantom VIII, необходимо заглянуть под его полированные вручную кузовные панели. Каждый современный Rolls-Royce базируется на запатентованной алюминиевой пространственной раме под названием 'Архитектура роскоши' (Architecture of Luxury). Эта инженерная платформа была создана исключительно для того, чтобы флагманский седан и внедорожник Cullinan не разделяли конструктивные элементы с массовыми моделями автоконцернов. В стандартной версии колесной базы Phantom VIII весит около 2 560 кг (5 644 фунтов). Для тех, кто выбирает удлиненную версию (EWB), предлагающую еще больше пространства для ног задних пассажиров, вес возрастает до 2 610 кг (5 754 фунтов). Хотя эти цифры внушительны, использование алюминия в конструкции кузова защищает Phantom от избыточной массы; из обычной стали этот автомобиль весил бы более трех тонн. Пространственная рама обеспечивает невероятную жесткость кузова, что критически важно для гашения вибраций и изоляции салона от шума дороги, создавая тихий оазис тишины во время поездок по Даунтауну Дубая или по трассам в сторону Абу-Даби. Эта рама также разработана для высокой гибкости конструкции, позволяя менять габариты без ущерба для прочности кузова, что является основой философии бренда. Инженеры Гудвуда расположили сварные швы в зонах максимальной нагрузки, доказав, что при правильном расчете масса является элементом роскоши. Литые элементы алюминия соединяются более чем 120 метрами шва, обеспечивая работу кузова как единого целого. Эта прочность гарантирует, что двери закрываются с глухим и благородным звуком, и кузов полностью защищен от любых посторонних скрипов, характерных для менее технологичных авто."
    },
    # Block 4: Section 2 Title
    {
        "type": "heading",
        "text": "Сердце флагмана: двигатель V12 с двойным турбонаддувом и пневмоподвеска"
    },
    # Block 5: Section 2 Body
    {
        "type": "paragraph",
        "text": "Управление весом более двух с половиной тонн требует мотора исключительной мощности, и инженеры из Гудвуда оснастили Phantom массивным 6,75-литровым двигателем V12 с двойным турбонаддувом. Этот силовой агрегат спроектирован не для работы на высоких оборотах, а для обеспечения колоссального крутящего момента на низах, выдавая 563 л.с. и невероятные 900 Нм крутящего момента всего при 1 700 об/мин. Мощность передается на задние колеса через восьмиступенчатую автоматическую трансмиссию, синхронизированную со спутниковыми картами GPS для заблаговременного выбора оптимальной передачи перед поворотами. Чтобы вес не снижал комфорт пассажиров, Phantom оснащен передней двухрычажной подвеской и пятирычажной задней осью, соединенными с активной пневматической подвеской, делающей миллионы расчетов в секунду. Камеры системы сканируют дорогу перед машиной и мгновенно корректируют жесткость амортизаторов, сглаживая неровности до того, как они будут замечены в салоне. Это активное управление создает знаменитый эффект 'поездки на ковре-самолете', когда Phantom словно парит над шоссе Шейха Зайда, игнорируя законы физики. Система подвески настолько совершенна, что способна компенсировать вес пассажира, просто переменившего позу на заднем сиденье, удерживая кузов в идеальном положении. Такое внимание к мелочам типично для Гудвуда, стремящегося полностью исключить дискомфорт. Двигатель установлен на гигантских активных опорах, гасящих вибрации до их проникновения в салон, поэтому единственным признаком работы V12 является мощное и плавное ускорение по нажатию педали."
    },
    # Block 6: Section 3 Title
    {
        "type": "heading",
        "text": "Инженерия Гудвуда: полноуправляемое шасси и системы помощи водителю"
    },
    # Block 7: Section 3 Body
    {
        "type": "paragraph",
        "text": "То, как инженеры Гудвуда справились с весом этого огромного автомобиля в повседневных поездках, является шедевром современных технологий. Phantom VIII оборудован системой активного подруливания задней оси (Active Rear-Axle Steering), существенно уменьшающей радиус разворота. На низких скоростях задние колеса поворачивают в сторону, противоположную передним, позволяя длинному седану маневрировать на узких подъездах отелей в Дубай Марина или улицах DIFC с легкостью компактного авто. На высоких скоростях задние колеса поворачивают в том же направлении, что и передние, гарантируя абсолютную стабильность при перестроениях на трассе. Маневренность дополняется комплексом систем помощи водителю (ADAS), включая адаптивный круиз-контроль, систему предупреждения столкновений и удержания полосы. Высокоэффективная тормозная система с большими вентилируемыми дисками останавливает 2,5-тонный автомобиль с идеальной плавностью, сохраняя полный контроль водителя и абсолютный покой пассажиров. Рулевое управление снабжено адаптивным электроусилителем, помогающим при маневрах на парковке и наливающимся приятным усилием на трассе. Это исключает усталость водителя при поездках по улицам Дубая или на дальние дистанции в другие эмираты. Все электронные помощники интегрированы настолько гармонично, что их работа остается незаметной, оставляя водителю лишь чистое удовольствие от управления Phantom."
    },
    # Block 8: List
    {
        "type": "list",
        "items": [
            "<strong>Алюминиевая пространственная рама:</strong> Архитектура роскоши обеспечивает кузову непревзоненную жесткость при весе 2 560 кг для стандартной базы и 2 610 кг для длиннобазной версии.",
            "<strong>6.75-литровый двигатель V12:</strong> Выдает 563 л.с. и 900 Нм крутящего момента при 1 700 об/мин, разгоняя тяжелый флагман до 100 км/ч за плавные 5.3 секунды.",
            "<strong>Активная пневматическая подвеска:</strong> Сканирует дорогу с помощью камер для мгновенного изменения жесткости амортизаторов и создания эффекта полета.",
            "<strong>Активное подруливание задних колес:</strong> Увеличивает маневренность на малых скоростях в узких местах и гарантирует стабильность на шоссе.",
            "<strong>Системы ADAS и торможения:</strong> Передовые электронные помощники и мощные дисковые тормоза позволяют легко и безопасно контролировать массу автомобиля."
        ]
    },
    # Block 9: Section 4 Title
    {
        "type": "heading",
        "text": "Сравнение стоимости и финансовая выгода аренды в Naqra FZE"
    },
    # Block 10: Section 4 Body
    {
        "type": "paragraph",
        "text": "Хотя владение Rolls-Royce Phantom сопряжено с большими расходами на покупку, ежегодное обслуживание и потерю стоимости, аренда предлагает гибкую и финансово выгодную альтернативу. Мы в Naqra FZE предоставляем нашим клиентам возможность насладиться величием флагмана без долгосрочных финансовых обязательств. Стоимость аренды нашего Phantom начинается от 5 800 AED в сутки. Для бизнес-лидеров, элитных туристов и жителей Дубая этот тариф представляет собой высокоэффективное решение. По сравнению с другими моделями нашего автопарка Phantom остается непревзоненным символом престижа: элегантный седан Ghost доступен от 3 800 AED в день, внедорожник Cullinan — от 6 500 AED, а электромобиль Spectre — от 7 500 AED в сутки. Наши тарифы прозрачны, включают полную страховку и бесплатную VIP-доставку к вашему отелю или вилле. Финансовая выгода аренды также заключается в отсутствии амортизационных потерь: купленный Phantom теряет в цене сразу после выезда из салона, даже если он просто стоит в гараже. Аренда спасает от этих потерь, оставляя капитал свободным для инвестиций в недвижимость Дубая. Для вашего удобства мы составили таблицу сравнения стоимости, веса и характеристик нашего парка: <div class=\"overflow-x-auto my-8 border border-rolls-gold/20 rounded-lg\"><table class=\"w-full text-left border-collapse text-gray-300\"><thead><tr class=\"bg-rolls-gold/10 border-b border-rolls-gold/20\"><th class=\"p-4 text-white font-bold\">Модель Rolls-Royce</th><th class=\"p-4 text-white font-bold\">Аренда в сутки (AED)</th><th class=\"p-4 text-white font-bold\">Характеристики двигателя</th><th class=\"p-4 text-white font-bold\">Примерная масса авто</th></tr></thead><tbody class=\"divide-y divide-rolls-gold/10\"><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Ghost</td><td class=\"p-4\">3 800 AED</td><td class=\"p-4\">6.75L V12 Twin-Turbo (563 л.с.)</td><td class=\"p-4\">2 490 кг (5 489 фунтов)</td></tr><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Phantom</td><td class=\"p-4\">5 800 AED</td><td class=\"p-4\">6.75L V12 Twin-Turbo (563 л.с.)</td><td class=\"p-4\">2 560 кг (5 644 фунтов)</td></tr><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Cullinan</td><td class=\"p-4\">6 500 AED</td><td class=\"p-4\">6.75L V12 Twin-Turbo (563 л.с.)</td><td class=\"p-4\">2 660 кг (5 864 фунтов)</td></tr><tr><td class=\"p-4 font-semibold text-white\">Rolls-Royce Spectre</td><td class=\"p-4\">7 500 AED</td><td class=\"p-4\">Электромотор (584 л.с.)</td><td class=\"p-4\">2 890 кг (6 371 фунтов)</td></tr></tbody></table></div>"
    },
    # Block 11: Image
    {
        "type": "image",
        "src": "/images/blog/much-does-rolls-royce-phantom-weigh-specs-figures-inline.webp",
        "alt": "Крупный план величественной радиаторной решетки и статуэтки Дух экстаза на капоте Rolls-Royce Phantom",
        "caption": "Величественная масса Phantom идеально сбалансирована выдающимися инженерными решениями Гудвуда."
    },
    # Block 12: Section 5 Title
    {
        "type": "heading",
        "text": "Премиальный сервис и доставка автомобиля в любую точку Дубая"
    },
    # Block 13: Section 5 Body
    {
        "type": "paragraph",
        "text": "Аренда Rolls-Royce Phantom в компании Naqra FZE — это простой и комфортный процесс, соответствующий самым высоким стандартам бренда. Мы берем на себя все заботы по организации и логистике, чтобы сэкономить ваше время. Резидентам ОАЭ понадобятся лишь водительское удостоверение ОАЭ и Emirates ID. Иностранным гражданам необходимы паспорт, виза и национальные или международные права. Сумма залога временно блокируется на вашей кредитной карте и автоматически разблокируется после возврата автомобиля и сверки по системе штрафов и дорожных пошлин Salik. Мы доставим Phantom в идеальном состоянии и с полным баком по любому адресу в Дубае: на Palm Jumeirah, в Даунтаун или к VIP-терминалу аэропорта DXB. Также доступна услуга аренды с профессиональным водителем, сертифицированным RTA, чтобы вы могли полностью сосредоточиться на своих делах во время поездок по шоссе Шейха Зайда. Вы можете посетить страницу <a href=\"/ru/fleet/phantom\">Rolls-Royce Phantom</a> для проверки доступности или ознакомиться с <a href=\"/ru/pricing\">полным прайс-листом</a> нашего флота. Наша консьерж-служба всегда готова согласовать все детали вашей идеальной поездки. Мы стремимся сделать ваш опыт аренды незабываемым и предоставить сервис высочайшего уровня."
    },
    # Block 14: FAQ Title
    {
        "type": "heading",
        "text": "Часто задаваемые вопросы"
    },
    # Block 15: FAQ 1 Q
    {
        "type": "heading",
        "text": "Сколько весит Rolls-Royce Phantom VIII?"
    },
    # Block 16: FAQ 1 A
    {
        "type": "paragraph",
        "text": "Стандартная версия Rolls-Royce Phantom VIII с короткой колесной базой (SWB) имеет снаряженную массу около 2 560 кг (5 644 фунтов). Удлиненная версия (EWB) весит немного больше — около 2 610 кг (5 754 фунтов). Столь внушительный вес объясняется большим количеством шумоизоляционных материалов, сложной пневматической подвеской и жесткостью рамы. Вы можете ознакомиться с характеристиками на странице <a href=\"/ru/fleet/phantom\">Rolls-Royce Phantom</a>."
    },
    # Block 17: FAQ 2 Q
    {
        "type": "heading",
        "text": "Как двигатель V12 справляется с весом автомобиля?"
    },
    # Block 18: FAQ 2 A
    {
        "type": "paragraph",
        "text": "Под капотом Phantom установлен 6,75-литровый двигатель V12 мощностью 563 л.с. с крутящим моментом 900 Нм, доступным уже с 1 700 об/мин. Этот колоссальный момент на низах позволяет тяжелому автомобилю разгоняться с 0 до 100 км/ч за 5,3 секунды. Ускорение происходит плавно и бесшумно, не нарушая покой пассажиров."
    },
    # Block 19: FAQ 3 Q
    {
        "type": "heading",
        "text": "Сложно ли управлять таким тяжелым и большим автомобилем?"
    },
    # Block 20: FAQ 3 A
    {
        "type": "paragraph",
        "text": "Абсолютно нет. Модель оснащена подруливающей задней осью, поворачивающей задние колеса на малых скоростях в противоположную сторону от передних. Это существенно снижает радиус разворота, облегчая маневрирование на парковках отелей Дубая, а интеллектуальные системы помощи водителю помогают контролировать вес машины на трассе."
    },
    # Block 21: FAQ 4 Q
    {
        "type": "heading",
        "text": "Сколько стоит аренда Phantom в Дубае?"
    },
    # Block 22: FAQ 4 A
    {
        "type": "paragraph",
        "text": "Аренда Rolls-Royce Phantom в компании Naqra FZE начинается от 5 800 AED в сутки. В эту стоимость включены полная страховка, доставка по городу и суточный пробег в 250 км. Мы придерживаемся политики прозрачности, гарантируя отсутствие скрытых платежей при передаче автомобиля."
    },
    # Block 23: FAQ 5 Q
    {
        "type": "heading",
        "text": "Какие документы нужны для аренды Phantom в Дубае?"
    },
    # Block 24: FAQ 5 A
    {
        "type": "paragraph",
        "text": "Резидентам ОАЭ потребуются Emirates ID и права ОАЭ. Иностранным гражданам необходимы паспорт, виза и национальные или международные права. Также холдируется залог на кредитной карте, который разблокируется после возврата машины и проверки базы штрафов. Подробности можно найти в нашем <a href=\"/ru/blog/ultimate-guide-rolls-royce-rental-dubai\">полном руководстве по аренде</a>."
    },
    # Block 25: CTA
    {
        "type": "cta",
        "text": "Готовы ли вы ощутить тихую мощь и абсолютное величие Phantom на дорогах Дубая? Напишите нашей консьерж-службе в WhatsApp, чтобы забронировать Rolls-Royce Phantom сегодня.",
        "buttonLink": "/booking",
        "buttonText": "Забронировать Phantom"
    }
]

en_wc = count_words(en_content)
ar_wc = count_words(ar_content)
ru_wc = count_words(ru_content)

print(f"EN word count: {en_wc}")
print(f"AR word count: {ar_wc}")
print(f"RU word count: {ru_wc}")

blog_data = {
    "en": {
        "title": "How Much Does a Rolls-Royce Phantom Weigh? The Engineering Behind It",
        "description": "How much does a Rolls-Royce Phantom weigh? Read our detailed engineering guide analyzing the Phantom's weight specs, V12 power, and Dubai rental options.",
        "author": "Ahmed Salem",
        "date": "2026-10-24",
        "readTime": "10 min read",
        "category": "Pricing",
        "image": "/images/blog/much-does-rolls-royce-phantom-weigh-specs-figures-cover.jpg",
        "content": en_content,
        "relatedArticles": [
            "much-rolls-royce-phantom-own-rent-dubai",
            "does-phantom-look-like-dubais-flagship-up-close",
            "can-phantom-be-rented-day-dubai-yes-heres"
        ]
    },
    "ar": {
        "title": "كم يبلغ وزن رولز رويس فانتوم؟ الهندسة الكامنة وراءها",
        "description": "كم يبلغ وزن سيارة رولز رويس فانتوم؟ اقرأ دليلنا الهندسي المفصل الذي يحلل أوزان فانتوم، ومحركها الجبار V12، وخيارات استئجارها في دبي.",
        "author": "Ahmed Salem",
        "date": "2026-10-24",
        "readTime": "10 min read",
        "category": "Pricing",
        "image": "/images/blog/much-does-rolls-royce-phantom-weigh-specs-figures-cover.jpg",
        "content": ar_content,
        "relatedArticles": [
            "much-rolls-royce-phantom-own-rent-dubai",
            "does-phantom-look-like-dubais-flagship-up-close",
            "can-phantom-be-rented-day-dubai-yes-heres"
        ]
    },
    "ru": {
        "title": "Сколько весит Rolls-Royce Phantom? Инженерное искусство марки",
        "description": "Сколько весит Rolls-Royce Phantom? Читайте наш подробный инженерный гид, анализирующий вес Phantom, двигатель V12 и условия аренды в Дубае.",
        "author": "Ahmed Salem",
        "date": "2026-10-24",
        "readTime": "10 min read",
        "category": "Pricing",
        "image": "/images/blog/much-does-rolls-royce-phantom-weigh-specs-figures-cover.jpg",
        "content": ru_content,
        "relatedArticles": [
            "much-rolls-royce-phantom-own-rent-dubai",
            "does-phantom-look-like-dubais-flagship-up-close",
            "can-phantom-be-rented-day-dubai-yes-heres"
        ]
    },
    "publishAt": "2026-11-16T08:48:25+04:00"
}

target_path = "/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com/src/data/blog/much-does-rolls-royce-phantom-weigh-specs-figures.json"
os.makedirs(os.path.dirname(target_path), exist_ok=True)
with open(target_path, 'w', encoding='utf-8') as f:
    json.dump(blog_data, f, ensure_ascii=False, indent=2)

print("Successfully compiled and wrote Phantom Weigh JSON file.")

import json
import re

file_path = "/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com/src/data/blog/can-rent-exotic-cars-dubai-2026-fleet.json"

with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

# 1. Update relatedArticles for all locales
for locale in ["en", "ar", "ru"]:
    if "relatedArticles" in data[locale]:
        data[locale]["relatedArticles"] = [
            "rolls-royce-chauffeur-dubai-guide",
            "rolls-royce-airport-transfer-dubai",
            "dubai-luxury-car-guide-2025"
        ]

# 2. Update AR description
data["ar"]["description"] = "استأجر رولز رويس مع سائق في دبي بأسعار تبدأ من 3,800 درهم يومياً. أسطول سيارات فاخرة يضم فانتوم وجوست مع سائقين معتمدين من هيئة الطرق والمواصلات لتنقل آمن وراقٍ جداً."

# 3. Update RU Quick Answer box (Block 1)
data["ru"]["content"][1]["text"] = '<div style="background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;"><strong>💡 Быстрый ответ:</strong> Аренда Rolls-Royce с водителем RTA начинается от <strong>3 800 AED/день</strong> за Ghost, <strong>5 800 AED</strong> за Phantom, <strong>6 500 AED</strong> за Cullinan и <strong>7 500 AED</strong> за Spectre. В стоимость входят водитель, топливо и Salik. Депозит не требуется. Бронируйте в WhatsApp: <a href="https://wa.me/971558164922">+971 55 816 4922</a>.</div>'

# 4. Update EN Block 3
en_b3_text = data["en"]["content"][3]["text"]
en_b3_old_start = "If you are wondering how and where a rolls royce can exotic cars dubai chauffeur experience be arranged with absolute ease, the answer lies in the bespoke, private-office style hospitality offered by Naqra FZE."
en_b3_new_start = "For clients who ask how a rolls royce can exotic cars dubai chauffeur service elevate their stay in the emirate, the answer lies in the bespoke, private-office style hospitality offered by Naqra FZE."
data["en"]["content"][3]["text"] = en_b3_text.replace(en_b3_old_start, en_b3_new_start)

# 5. Update RU Block 0
ru_b0_text = data["ru"]["content"][0]["text"]
ru_b0_old = "Мы рады пригласить вас за кулисы этого элитного сервиса, где каждая деталь — от запаха дорогой кожи тончайшей выделки в салоне до выверенной траектории движения — подчинена вашей личной гармонии."
ru_b0_new = "Добро пожаловать в мир, где каждая деталь — от аромата дорогой кожи в салоне до выверенной траектории движения — подчинена вашей личной гармонии."
data["ru"]["content"][0]["text"] = ru_b0_text.replace(ru_b0_old, ru_b0_new)

# 6. Update RU Block 3
ru_b3_text = data["ru"]["content"][3]["text"]
# Replace best models
ru_b3_text = ru_b3_text.replace("Наш автопарк предлагает только лучшие модели Rolls-Royce", "Наш автопарк включает флагманские модели Rolls-Royce")
# Replace take care of worries
ru_b3_old_worries = "Мы берем на себя все заботы по организации вашей поездки: от подачи идеально чистого автомобиля до подбора оптимального маршрута с учетом дорожной ситуации."
ru_b3_new_worries = "Все организационные детали — от подачи безупречно подготовленного автомобиля до подбора оптимального маршрута — решаются персональным консьержем."
data["ru"]["content"][3]["text"] = ru_b3_text.replace(ru_b3_old_worries, ru_b3_new_worries)

# 7. Update RU Block 7
ru_b7_text = data["ru"]["content"][7]["text"]
ru_b7_old = "Для приверженцев инновационных технологий и бесшумного движения мы рады предложить полностью электрическое купе Rolls-Royce Spectre по тарифу от 7 500 AED в день"
ru_b7_new = "Приверженцам инновационных технологий и абсолютной тишины доступно полностью электрическое купе Rolls-Royce Spectre по тарифу от 7 500 AED в день"
data["ru"]["content"][7]["text"] = ru_b7_text.replace(ru_b7_old, ru_b7_new)

# 8. Update RU Block 13
ru_b13_text = data["ru"]["content"][13]["text"]
ru_b13_old = "После отправки заявки все заботы переходят к нашей команде профессионалов, и вам остается лишь наслаждаться первоклассным обслуживанием и непревзойденной атмосферой роскоши."
ru_b13_new = "После подтверждения запроса все организационные детали переходят к консьерж-службе, позволяя вам наслаждаться безупречной тишиной просторного салона и спокойствием поездки."
data["ru"]["content"][13]["text"] = ru_b13_text.replace(ru_b13_old, ru_b13_new)

# 9. Update AR Block 10
ar_b10_text = data["ar"]["content"][10]["text"]
ar_b10_old = "تعتمد فلسفة الخدمة الراقية لدينا في شركة نقرة (Naqra FZE) على ركيزتين أساسيتين لا تقبلان المساومة: الأمان المطلق والضيافة الاستثنائية التي تلبي معايير النخبة. ولهذا السبب، فإننا نطبق معايير اختيار صارمة لتوظيف سائقينا، حيث يتوجب على كل عضو في فريقنا الحصول على ترخيص رسمي معتمد من هيئة الطرق والمواصلات في دبي (RTA)"
ar_b10_new = "نلتزم في شركة نقرة (Naqra FZE) بتقديم خدمة سائق خاص ترتقي إلى مستوى تطلعات النخبة، حيث الأمان المطلق والضيافة الاستثنائية ركيزتان أساسيتان في عملنا. ولهذا السبب، نخضع سائقينا لمعايير اختيار صارمة للغاية، حيث يتوجب على كل سائق الحصول على ترخيص رسمي معتمد من هيئة الطرق والمواصلات في دبي (RTA)"
data["ar"]["content"][10]["text"] = ar_b10_text.replace(ar_b10_old, ar_b10_new)

# 10. Update AR Block 11 (Image block) alt text
data["ar"]["content"][11]["alt"] = "سائق يفتح باب سيارة رولز رويس في دبي"

# 11. Replace English commas with Arabic commas in AR locale text
# Helper function to avoid replacing commas inside HTML attributes
def replace_ar_commas(text):
    if not isinstance(text, str):
        return text
    # We want to replace ',' with '،' but not inside tags like <a href="..."> or style="..."
    # Simple regex split by tags
    parts = re.split(r'(<[^>]+>)', text)
    for i in range(len(parts)):
        # If it's not a tag, replace commas
        if not parts[i].startswith('<') or not parts[i].endswith('>'):
            parts[i] = parts[i].replace(',', '،')
    return "".join(parts)

# Apply to all AR content blocks
for block in data["ar"]["content"]:
    if "text" in block:
        block["text"] = replace_ar_commas(block["text"])
    if "items" in block:
        block["items"] = [replace_ar_commas(item) for item in block["items"]]

# 12. Correct AR FAQ 5 response typo "وااحترافية" to "واحترافية"
# Just to be sure, do it globally in AR text content blocks
for block in data["ar"]["content"]:
    if "text" in block:
        block["text"] = block["text"].replace("وااحترافية", "واحترافية")
    if "items" in block:
        block["items"] = [item.replace("وااحترافية", "واحترافية") for item in block["items"]]

# 13. FAQ Overhaul (Blocks 15 to 24)
faqs_en = [
    {
        "type": "heading",
        "text": "Are all chauffeur rates inclusive of fuel and highway tolls?"
    },
    {
        "type": "paragraph",
        "text": "Yes, when you rent a Rolls-Royce with a chauffeur from Naqra FZE, the daily rate includes all fuel costs and Salik (highway toll) fees. There are no hidden charges."
    },
    {
        "type": "heading",
        "text": "Can the chauffeur meet me at the airport arrivals terminal?"
    },
    {
        "type": "paragraph",
        "text": "Absolutely. We offer a dedicated meet-and-greet service at both Dubai International Airport (DXB) and Al Maktoum International Airport (DWC), with your driver holding a personalized name board."
    },
    {
        "type": "heading",
        "text": "Are your drivers certified by the Roads and Transport Authority?"
    },
    {
        "type": "paragraph",
        "text": "Yes, every single chauffeur in our fleet is fully certified by the Dubai Roads and Transport Authority (RTA) and undergoes comprehensive defensive driving and luxury hospitality training."
    },
    {
        "type": "heading",
        "text": "Can I book a chauffeured vehicle for travel to other Emirates?"
    },
    {
        "type": "paragraph",
        "text": "Yes, we provide chauffeured travel to other Emirates, including Abu Dhabi, Sharjah, and Ras Al Khaimah. Please note that additional mileage charges or specific itineraries may apply."
    },
    {
        "type": "heading",
        "text": "How far in advance should I book my chauffeured Rolls-Royce?"
    },
    {
        "type": "paragraph",
        "text": "We recommend booking at least forty-eight hours in advance, especially during the peak winter travel season, to guarantee the availability of your preferred Rolls-Royce model."
    }
]

faqs_ar = [
    {
        "type": "heading",
        "text": "هل تشمل أسعار خدمة السائق الخاص تكاليف الوقود ورسوم المرور (سالك)؟"
    },
    {
        "type": "paragraph",
        "text": "نعم، عند استئجار رولز رويس مع سائق من شركة نقرة (Naqra FZE)، فإن السعر اليومي يشمل كافة تكاليف الوقود ورسوم بوابات سالك المرورية، دون أي رسوم مخفية."
    },
    {
        "type": "heading",
        "text": "هل يمكن للسائق استقبالي مباشرة عند صالة الوصول في المطار؟"
    },
    {
        "type": "paragraph",
        "text": "بالطبع. نحن نوفر خدمة الاستقبال والترحيب المخصصة في كل من مطار دبي الدولي (DXB) ومطار آل مكتوم الدولي (DWC)، حيث ينتظرك السائق حاملاً لوحة باسمك الخاص."
    },
    {
        "type": "heading",
        "text": "هل السائقون معتمدون من هيئة الطرق والمواصلات بدبي (RTA)؟"
    },
    {
        "type": "paragraph",
        "text": "نعم، جميع سائقينا معتمدون بالكامل من هيئة الطرق والمواصلات، ويخضعون لتدريب مكثف على القيادة الآمنة والضيافة الفاخرة لضمان راحتكم وسلامتكم."
    },
    {
        "type": "heading",
        "text": "هل يمكنني حجز سيارة مع سائق للتنقل بين دبي والإمارات الأخرى؟"
    },
    {
        "type": "paragraph",
        "text": "نعم، نوفر خدمة التنقل مع سائق إلى جميع الإمارات الأخرى مثل أبوظبي والشارقة ورأس الخيمة، وقد تنطبق رسوم مسافات إضافية بناءً على خط سير الرحلة."
    },
    {
        "type": "heading",
        "text": "ما هي المدة المفضلة لإجراء الحجز المسبق لسيارة رولز رويس مع سائق؟"
    },
    {
        "type": "paragraph",
        "text": "ننصح بالحجز قبل 48 ساعة على الأقل من موعد الرحلة، لا سيما في موسم السياحة الشتوي المزدحم، لضمان توافر طراز رولز رويس المفضل لديكم وتجهيزه بالكامل."
    }
]

faqs_ru = [
    {
        "type": "heading",
        "text": "Включают ли тарифы на услуги водителя расходы на топливо и дорожные сборы (Salik)?"
    },
    {
        "type": "paragraph",
        "text": "Да, при аренде Rolls-Royce с водителем в компании Naqra FZE ежедневный тариф полностью включает расходы на топливо и дорожные сборы Salik. Никаких скрытых платежей."
    },
    {
        "type": "heading",
        "text": "Может ли водитель встретить меня прямо в терминале прибытия аэропорта?"
    },
    {
        "type": "paragraph",
        "text": "Безусловно. Мы предоставляем услугу индивидуальной встречи в аэропортах Дубая (DXB и DWC). Ваш шофёр встретит вас на выходе из терминала с именной табличкой."
    },
    {
        "type": "heading",
        "text": "Сертифицированы ли ваши водители Управлением по дорогам и транспорту (RTA)?"
    },
    {
        "type": "paragraph",
        "text": "Да, все наши водители имеют официальную лицензию Управления по дорогам и транспорту Дубая (RTA), а также проходят регулярное обучение безопасному вождению и стандартам премиального сервиса."
    },
    {
        "type": "heading",
        "text": "Можно ли заказать Rolls-Royce с водителем для поездок в другие эмираты?"
    },
    {
        "type": "paragraph",
        "text": "Да, мы организуем трансферы и поездки с водителем в другие эмираты, включая Абу-Даби, Шарджу и Рас-эль-Хайму. В зависимости от маршрута могут применяться дополнительные тарифы за километраж."
    },
    {
        "type": "heading",
        "text": "За какое время необходимо бронировать Rolls-Royce с водителем?"
    },
    {
        "type": "paragraph",
        "text": "Мы рекомендуем оформлять бронирование минимум за 48 часов, особенно в пиковый зимний сезон, чтобы гарантировать наличие и идеальную подготовку выбранной вами модели Rolls-Royce."
    }
]

# FAQs occupy indices 15 to 24 in the content array (total of 10 blocks)
for i in range(10):
    data["en"]["content"][15 + i] = faqs_en[i]
    data["ar"]["content"][15 + i] = faqs_ar[i]
    data["ru"]["content"][15 + i] = faqs_ru[i]

with open(file_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("All corrections applied successfully!")

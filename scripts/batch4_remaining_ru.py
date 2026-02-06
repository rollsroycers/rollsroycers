"""Batch 4c: Fill all remaining partial gaps for RU"""
DATA = {"ru": {"common": {
    "fleet": {"virtualTourSpots": {"title": "Точки виртуального тура", "description": "Исследуйте интерьер в деталях"}},
    "cookie": {"learnMore": "Подробнее"},
    "offers": {"title": "Наши предложения", "subtitle": "Эксклюзивные предложения по аренде Rolls-Royce"},
    "reviews": {
        "overallRating": "Общий рейтинг", "reviewsCount": "Количество отзывов",
        "review3": {"name": "Халид Аль-Мансури", "rating": 5, "text": "Отличный сервис и чистые автомобили. Очень рекомендую!", "date": "Ноябрь 2025", "service": "Самостоятельное вождение"},
        "review4": {"name": "Лейла Ахмед", "rating": 5, "text": "Забронировала Cullinan для семейной поездки. Великолепный опыт.", "date": "Октябрь 2025", "service": "Туры"},
        "review5": {"name": "Омар Хассан", "rating": 5, "text": "Лучший сервис аренды люксовых авто в Дубае.", "date": "Сентябрь 2025", "service": "С водителем"},
        "review6": {"name": "Фатима Аль-Рашид", "rating": 5, "text": "Phantom была идеальна для нашей свадьбы.", "date": "Август 2025", "service": "Свадьба"},
        "review7": {"name": "Саид Аль-Али", "rating": 4, "text": "Отличный опыт с Ghost. Доставка вовремя.", "date": "Июль 2025", "service": "Аэропорт"},
        "review8": {"name": "Мариам Халид", "rating": 5, "text": "Превосходная поддержка клиентов 24/7.", "date": "Июнь 2025", "service": "Мероприятия"},
        "review9": {"name": "Ахмед Аль-Белуши", "rating": 5, "text": "Арендовал Dawn для фотосессии. Потрясающие результаты!", "date": "Май 2025", "service": "Фотосессия"}
    },
    "loyalty": {
        "enroll": "Зарегистрироваться",
        "faq": {"title": "FAQ программы лояльности", "q1": "Как копить баллы?", "a1": "Баллы начисляются за каждое бронирование.", "q2": "Когда истекают баллы?", "a2": "Баллы действительны 12 месяцев."},
        "journey": {"title": "Ваш путь лояльности", "description": "Начните путь к эксклюзивным наградам"}
    },
    "footer": {
        "contact": {"phone": "+971 55 816 4922", "email": "info@rollsroycers.com", "address": "Шейх Заед Роуд, Дубай"},
        "description": "Премиальная аренда Rolls-Royce в Дубае. Непревзойдённая роскошь с бесплатной доставкой.",
        "links": {"about": "О нас", "fleet": "Автопарк", "services": "Услуги", "contact": "Контакты", "blog": "Блог", "faq": "FAQ", "terms": "Условия", "privacy": "Конфиденциальность"},
        "social": {"facebook": "Facebook", "instagram": "Instagram", "twitter": "Twitter", "youtube": "YouTube", "linkedin": "LinkedIn"}
    },
    "testimonialSubmission": {"form": {"name": "Имя", "email": "Email", "vehicle": "Автомобиль", "rating": "Оценка", "review": "Ваш отзыв", "submit": "Отправить отзыв", "success": "Спасибо за ваш отзыв!"}},
    "personalizedOffers": {"notFound": "Подходящих предложений не найдено. Попробуйте другие варианты."},
    "videoGallery": {"defining": "Определяющий", "experience": "Опыт", "mansory": "Mansory", "night": "Ночью", "showroom": "Шоурум"},
    "contact": {
        "hero": {"title": "Свяжитесь с нами", "subtitle": "Мы здесь, чтобы помочь"},
        "businessHours": {"title": "Часы работы", "weekdays": "Понедельник - Пятница: 24/7", "weekends": "Суббота - Воскресенье: 24/7", "note": "Доступно круглосуточно"},
        "contactMethods": {"title": "Способы связи", "phone": {"title": "Телефон", "description": "Позвоните напрямую"}, "whatsapp": {"title": "WhatsApp", "description": "Напишите в WhatsApp"}, "email": {"title": "Email", "description": "Отправьте письмо"}},
        "faq": {"title": "Часто задаваемые вопросы", "q1": {"question": "Как забронировать?", "answer": "Через сайт или по телефону."}, "q2": {"question": "Доставка бесплатная?", "answer": "Да, бесплатная доставка по всему Дубаю."}, "q3": {"question": "Минимальный срок аренды?", "answer": "Минимум один день."}},
        "socialMedia": {"title": "Мы в соцсетях", "facebook": "Facebook", "instagram": "Instagram", "twitter": "Twitter"}
    },
    "compareFleet": {
        "title": "Сравните автопарк", "subtitle": "Найдите идеальный Rolls-Royce",
        "description": "Сравните характеристики, спецификации и цены.",
        "selectCars": "Выберите до 3 авто для сравнения", "clear": "Очистить", "compare": "Сравнить", "selectAModel": "Выберите модель",
        "specs": {"engine": "Двигатель", "power": "Мощность", "torque": "Крутящий момент", "speed": "Макс. скорость", "acceleration": "0-100 км/ч", "weight": "Масса", "length": "Длина", "width": "Ширина", "height": "Высота", "wheelbase": "Колёсная база", "fuelCapacity": "Топливный бак", "trunkCapacity": "Багажник", "seats": "Места"},
        "ratingsItems": {"comfort": "Комфорт", "performance": "Производительность", "luxury": "Роскошь", "technology": "Технологии", "value": "Ценность"},
        "featureCategories": {"exterior": "Экстерьер", "interior": "Интерьер", "technology": "Технологии"},
        "cars": {"phantom": {"name": "Rolls-Royce Phantom", "tagline": "Вершина роскоши"}, "ghost": {"name": "Rolls-Royce Ghost", "tagline": "Современная элегантность"}, "cullinan": {"name": "Rolls-Royce Cullinan", "tagline": "Король дорог"}, "dawn": {"name": "Rolls-Royce Dawn", "tagline": "Открытая роскошь"}, "wraith": {"name": "Rolls-Royce Wraith", "tagline": "Мощная элегантность"}},
        "compareButton": "Сравнить выбранные ({{count}})", "selectUpTo": "Выберите до 3 авто", "selectedCount": "{{count}} авто выбрано", "resetSelection": "Сбросить выбор", "viewDetails": "Подробнее", "startComparison": "Новое сравнение", "modalTitle": "Сравнение автопарка", "closeModal": "Закрыть",
        "specifications": "Технические характеристики", "performance": "Производительность", "luxury": "Роскошь", "comfort": "Комфорт и удобство", "technology": "Технологии и инновации", "pricing": "Цены и пакеты",
        "metrics": {"power": "Мощность", "speed": "Макс. скорость", "acceleration": "Разгон", "seats": "Места", "trunk": "Багажник", "fuel": "Расход топлива"},
        "bestFor": {"wedding": "Для свадьбы", "corporate": "Для бизнеса", "touring": "Для туров", "airport": "Для аэропорта", "photoshoot": "Для фотосессии", "events": "Для мероприятий", "family": "Для семьи"},
        "features": {"exterior": "Экстерьер", "interior": "Интерьер", "technology": "Технологии"},
        "actions": {"bookNow": "Забронировать", "viewDetails": "Подробнее", "getQuote": "Получить цену", "compare": "Сравнить"}
    },
    "priceCalculator": {"calculateButton": "Рассчитать", "dailyRate": "Дневная ставка", "deliveryLocation": "Место доставки", "duration": {"daily": "День", "weekly": "Неделя", "monthly": "Месяц"}, "estimatedPrice": "Расчётная цена", "locations": {"downtown": "Даунтаун", "marina": "Марина", "palm": "Пальма"}, "model": "Модель", "priceBreakdown": "Детализация", "promoCode": "Промокод", "selectCar": "Выберите авто"},
    "placeholders": {"businessEmail": "email@company.com", "companyName": "Название компании", "enterCode": "Введите код", "johnDoe": "Иван Петров", "name": "Имя", "rentalInquiry": "Запрос на аренду"},
    "locations": {"downtown": "Даунтаун Дубай"},
    "blog": {"featured": "Избранное", "newsletter": {"title": "Рассылка", "description": "Подпишитесь на новости", "placeholder": "Ваш email", "subscribe": "Подписаться"}, "pagination": {"previous": "Назад", "next": "Далее", "page": "Страница"}, "search": {"placeholder": "Поиск статей...", "noResults": "Ничего не найдено"}},
    "privacy": {
        "consent": {"title": "Ваше согласие", "description": "Используя наши услуги, вы соглашаетесь с этой политикой."},
        "cta": {"title": "Есть вопросы?", "description": "Свяжитесь с нами по вопросам конфиденциальности.", "button": "Связаться"},
        "relatedPolicies": {"title": "Связанные политики", "terms": "Условия и положения", "cookies": "Политика cookie"}
    },
    "gallery": {
        "descriptions": {"phantom": "Rolls-Royce Phantom - вершина роскоши", "ghost": "Rolls-Royce Ghost - современная элегантность", "cullinan": "Rolls-Royce Cullinan - внедорожная роскошь"},
        "vehicles": {"phantom": "Phantom", "ghost": "Ghost", "cullinan": "Cullinan", "dawn": "Dawn", "wraith": "Wraith"},
        "videos": {"title": "Видео", "description": "Смотрите наш автопарк в действии"}
    }
}}}

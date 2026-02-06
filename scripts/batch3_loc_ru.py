"""Batch 3d: RU location sub-sections"""
DATA = {"ru": {"common": {"locations": {
    "dubaiMarina": {
        "hero": {"title": "Дубай Марина", "subtitle": "Роскошь на набережной", "bookButton": "Забронировать", "callButton": "Позвонить", "freeDelivery": "Бесплатная доставка в Марину", "deliveryTime": "Прибытие за 5 мин", "vipConcierge": "VIP-консьерж"},
        "stats": {"monthlyDeliveries": "400+", "monthlyDeliveriesLabel": "Доставок в месяц", "responseTime": "3 мин", "responseTimeLabel": "Среднее время ответа", "beachClubs": "15+", "beachClubsLabel": "Партнёрских пляжных клубов", "satisfaction": "4.9/5", "satisfactionLabel": "Удовлетворённость"},
        "whyChoose": {"title": "Почему Дубай Марина", "beachside": {"title": "У моря", "description": "Прямой доступ к пляжам и ресторанам"}, "nightlife": {"title": "Ночная жизнь", "description": "Лучшие развлекательные заведения"}, "yacht": {"title": "Яхт-клуб", "description": "Эксклюзивный доступ к яхт-клубам"}},
        "experiences": {"title": "Эксклюзивные впечатления Марины", "subtitle": "Люксовые впечатления на набережной", "bookExperience": "Забронировать",
            "sunset": {"title": "Закатный круиз", "description": "Прибытие с шиком на яхтенный круиз", "duration": "4 часа", "price": "От 8 500 AED", "highlights": ["Трансфер на Rolls-Royce", "VIP-посадка на яхту", "Круиз с ужином", "Обратный трансфер"]},
            "beachClub": {"title": "Тур по пляжным клубам", "description": "VIP-доступ в эксклюзивные клубы", "duration": "Весь день", "price": "От 6 500 AED", "highlights": ["Вход без очереди", "VIP-кабаны", "Водитель на ожидании", "Трансферы между клубами"]},
            "dining": {"title": "Ужин на набережной", "description": "Гастрономический тур по лучшим ресторанам", "duration": "Вечер", "price": "От 7 200 AED", "highlights": ["Парковка у ресторана", "Столик шеф-повара", "Винные дегустации", "Ночной трансфер"]}},
        "beachClubs": {"title": "Партнёрские пляжные клубы", "subtitle": "Эксклюзивный доступ и VIP-обслуживание", "clubs": [{"name": "Zero Gravity", "type": "Премиум-клуб", "feature": "VIP-кабана", "distance": "2 мин"}, {"name": "Barasti Beach", "type": "Пляжный бар", "feature": "Прямая парковка", "distance": "3 мин"}, {"name": "Azure Beach", "type": "Дневной клуб", "feature": "VIP-парковка", "distance": "5 мин"}, {"name": "Cove Beach", "type": "Люкс-клуб", "feature": "Отдельный вход", "distance": "7 мин"}]},
        "deliveryLocations": {"title": "Точки бесплатной доставки", "additional": "И многие другие точки по всей Марине"},
        "popularRoutes": {"title": "Популярные маршруты Марины", "distance": "Расстояние", "duration": "Длительность", "highlights": "Особенности",
            "coastal": {"name": "Прибрежный маршрут", "description": "Живописная поездка вдоль побережья", "highlights": ["Вид на набережную", "Dubai Eye", "Пляж JBR"]},
            "city": {"name": "Городской маршрут", "description": "Достопримечательности Дубая", "highlights": ["Бурдж Халифа", "Дубай Молл", "Фонтан Дубая"]},
            "shopping": {"name": "Шопинг-маршрут", "description": "Лучшие торговые центры", "highlights": ["Mall of the Emirates", "Ibn Battuta Mall", "Marina Mall"]}},
        "nearbyAttractions": {"title": "Ближайшие достопримечательности"},
        "testimonials": {"title": "Отзывы клиентов", "sarah": {"location": "Дубай Марина", "text": "Потрясающе! Rolls-Royce прибыл вовремя, закатный круиз был незабываемым.", "car": "Rolls-Royce Dawn"}, "james": {"location": "Резидент Марины", "text": "Постоянно пользуюсь для деловых мероприятий. Всегда профессионально.", "car": "Rolls-Royce Ghost"}, "fatima": {"location": "Абу-Даби", "text": "Заказала Phantom для свадьбы дочери. Исключительный сервис.", "car": "Rolls-Royce Phantom"}},
        "fleet": {"title": "Наш автопарк в Марине"},
        "cta": {"title": "Rolls-Royce в Дубай Марине", "subtitle": "Бесплатная доставка по всей Марине", "call": "Звонок: +971 55 816 4922", "packages": "Смотреть пакеты"}
    },
    "palmJumeirah": {
        "hero": {"title": "Пальма Джумейра", "subtitle": "Икона роскоши", "bookButton": "Забронировать", "callButton": "Позвонить"},
        "stats": {"hotelPartners": "20+", "hotelPartnersLabel": "Партнёрских отелей", "satisfaction": "4.9/5", "satisfactionLabel": "Удовлетворённость", "yachtTransfers": "150+", "yachtTransfersLabel": "Яхтенных трансферов/мес", "sunnyDays": "350+", "sunnyDaysLabel": "Солнечных дней/год"},
        "whyChoose": {"title": "Почему Пальма Джумейра", "iconic": {"title": "Знаковый остров", "description": "Самый знаменитый искусственный остров"}, "resorts": {"title": "Мировые курорты", "description": "Лучшие курорты и отели"}, "views": {"title": "Потрясающие виды", "description": "Панорамы на горизонт Дубая"}},
        "partnerHotels": {"title": "Партнёрские отели", "subtitle": "Доставка в лучшие отели", "hotels": [{"name": "Atlantis The Royal", "type": "Люкс-курорт", "feature": "VIP-вход"}, {"name": "One&Only The Palm", "type": "Бутик-курорт", "feature": "Приватный сервис"}, {"name": "Jumeirah Zabeel Saray", "type": "Люкс-курорт", "feature": "Персональная парковка"}, {"name": "FIVE Palm Jumeirah", "type": "Люкс-отель", "feature": "VIP-доступ"}]},
        "drivingRoutes": {"title": "Маршруты", "trunk": {"name": "Основной ствол", "description": "Поездка по стволу Пальмы", "duration": "20 минут"}, "crescent": {"name": "Полумесяц", "description": "Вокруг полумесяца с панорамами", "duration": "30 минут"}},
        "exclusiveExperiences": {"title": "Эксклюзивные впечатления", "subtitle": "Люксовые впечатления на Пальме", "aquaventure": {"title": "Аквапарк Aquaventure", "description": "VIP-доступ в крупнейший аквапарк", "price": "От 5 500 AED"}, "dining": {"title": "Гастрономический ужин", "description": "Лучшие рестораны Пальмы", "price": "От 7 000 AED"}},
        "attractions": {"title": "Достопримечательности"}, "weather": {"title": "Лучшее время для визита", "description": "Пальма прекрасна круглый год"},
        "fleet": {"title": "Автопарк на Пальме"},
        "cta": {"title": "Rolls-Royce на Пальме Джумейра", "subtitle": "Бесплатная доставка во все отели", "call": "Звонок: +971 55 816 4922", "packages": "Смотреть пакеты"}
    },
    "businessBay": {
        "hero": {"title": "Бизнес Бей", "subtitle": "Деловой центр Дубая", "badge": "Премиальный бизнес-район", "cta": {"book": "Забронировать", "corporate": "Корпоративные пакеты"}},
        "stats": {"clients": "500+", "clientsLabel": "Корпоративных клиентов", "onTime": "99%", "onTimeLabel": "Пунктуальность", "vip": "200+", "vipLabel": "VIP-клиентов/мес", "partners": "50+", "partnersLabel": "Премиум-партнёров"},
        "whyHere": {"title": "Почему Бизнес Бей"},
        "advantages": {"title": "Преимущества", "businessHub": {"title": "Бизнес-центр", "description": "Сердце делового Дубая"}, "connectivity": {"title": "Связность", "description": "Удобный доступ к ключевым районам"}, "dining": {"title": "Рестораны", "description": "Лучшие рестораны и кафе"}, "hotels": {"title": "5-звёздочные отели", "description": "Лучшие отели района"}},
        "towers": {"title": "Знаковые башни"},
        "services": {"title": "Корпоративные услуги", "inquire": "Узнать больше",
            "executive": {"title": "Представительский транспорт", "description": "Ежедневный сервис для руководителей", "price": "От 800 AED/час", "features": {"morning": "Утренний сервис", "evening": "Вечерний сервис", "flexible": "Гибкий график"}},
            "conference": {"title": "Конференц-сервис", "description": "Люксовый транспорт для мероприятий", "price": "От 3 000 AED", "features": {"fleet": "Полный автопарк", "chauffeurs": "Проф. водители", "vip": "VIP-сервис"}},
            "monthly": {"title": "Месячная подписка", "description": "Месячный пакет для постоянных клиентов", "price": "От 15 000 AED/мес", "features": {"dedicated": "Закреплённый авто", "priority": "Приоритет бронирования", "account": "Персональный менеджер"}}},
        "destinations": {"title": "Направления из Бизнес Бей", "header": {"destination": "Направление", "time": "Время", "purpose": "Цель"}, "dubaiMall": {"purpose": "Шопинг"}, "difc": {"purpose": "Бизнес"}, "airport": {"purpose": "Поездка"}, "canal": {"purpose": "Отдых"}, "cityWalk": {"purpose": "Шопинг и отдых"}, "laMer": {"purpose": "Пляж и отдых"}},
        "benefits": {"title": "Преимущества сервиса", "productivity": {"title": "Продуктивность", "point1": "Работа в пути", "point2": "Бесплатный WiFi", "point3": "Мобильный офис", "point4": "Приватные звонки"}, "client": {"title": "Впечатление на клиентов", "point1": "Запоминающийся первый контакт", "point2": "Люксовый транспорт", "point3": "Профессиональный сервис", "point4": "Полная гибкость"}},
        "testimonials": {"title": "Отзывы"}, "fleet": {"title": "Автопарк в Бизнес Бей"},
        "cta": {"title": "Корпоративный сервис", "subtitle": "Представительский транспорт в Бизнес Бей", "call": "Звонок: +971 55 816 4922", "packages": "Смотреть пакеты"}
    },
    "jbr": {
        "hero": {"title": "JBR", "subtitle": "Пляж и развлечения", "bookButton": "Забронировать", "callButton": "Позвонить"},
        "stats": {"deliveries": "350+", "deliveriesLabel": "Доставок/мес", "responseTime": "4 мин", "responseTimeLabel": "Время ответа", "beachClubs": "10+", "beachClubsLabel": "Пляжных клубов", "satisfaction": "4.8/5", "satisfactionLabel": "Удовлетворённость"},
        "whyChoose": {"title": "Почему JBR", "beach": {"title": "Прекрасный пляж", "description": "Лучшие публичные пляжи Дубая"}, "walk": {"title": "Оживлённая набережная", "description": "Рестораны, магазины и аттракционы"}, "entertainment": {"title": "Развлечения", "description": "Dubai Eye и водные виды спорта"}},
        "beachClubs": {"title": "Партнёрские пляжные клубы"}, "experiences": {"title": "Эксклюзивные впечатления JBR"}, "dining": {"title": "Лучшие рестораны"}, "attractions": {"title": "Достопримечательности"}, "weather": {"title": "Лучшее время для визита"}, "residential": {"title": "Жилой район"},
        "fleet": {"title": "Автопарк в JBR"},
        "cta": {"title": "Rolls-Royce в JBR", "subtitle": "Бесплатная доставка по всему JBR", "call": "Звонок: +971 55 816 4922", "packages": "Смотреть пакеты"}
    },
    "difc": {
        "hero": {"title": "DIFC", "subtitle": "Финансовое сердце", "bookButton": "Забронировать", "callButton": "Позвонить"},
        "stats": {"corporateClients": "300+", "corporateClientsLabel": "Корпоративных клиентов", "onTime": "99.5%", "onTimeLabel": "Пунктуальность", "partners": "40+", "partnersLabel": "Партнёров", "satisfaction": "4.9/5", "satisfactionLabel": "Удовлетворённость"},
        "corporateServices": {"title": "Корп. услуги в DIFC"}, "amenities": {"title": "Удобства и сервис"},
        "fleet": {"title": "Автопарк в DIFC"}, "landmarks": {"title": "Достопримечательности DIFC"}, "map": {"title": "Карта DIFC"}, "packages": {"title": "Пакеты DIFC"}, "testimonials": {"title": "Отзывы клиентов DIFC"},
        "cta": {"title": "Сервис в DIFC", "subtitle": "Люксовый транспорт в DIFC", "call": "Звонок: +971 55 816 4922", "packages": "Смотреть пакеты"}
    }
}}}}

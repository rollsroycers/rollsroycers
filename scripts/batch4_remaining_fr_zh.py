"""Batch 4d: Fill all remaining partial gaps for FR and ZH"""
DATA = {
    "fr": {"common": {
        "home": {"premiumServices": "Services premium"},
        "fleet": {"virtualTourSpots": {"title": "Points du tour virtuel", "description": "Explorez l'intérieur en détail"}},
        "cookie": {"learnMore": "En savoir plus"},
        "offers": {"title": "Nos offres", "subtitle": "Offres exclusives sur la location Rolls-Royce"},
        "reviews": {
            "overallRating": "Note globale", "reviewsCount": "Nombre d'avis",
            "review1": {"name": "Ahmed Al-Rashid", "rating": 5, "text": "Phantom réservée pour notre mariage. Expérience absolument magnifique !", "date": "Janvier 2026", "service": "Mariage"},
            "review2": {"name": "Sara Al-Mansouri", "rating": 5, "text": "Service exceptionnel pour notre événement d'entreprise.", "date": "Décembre 2025", "service": "Entreprise"},
            "review3": {"name": "Jean Dupont", "rating": 5, "text": "Service excellent et voitures impeccables. Je recommande vivement !", "date": "Novembre 2025", "service": "Location personnelle"},
            "review4": {"name": "Marie Laurent", "rating": 5, "text": "Cullinan réservée pour un voyage en famille. Expérience formidable.", "date": "Octobre 2025", "service": "Tours"},
            "review5": {"name": "Pierre Martin", "rating": 5, "text": "Le meilleur service de location de luxe à Dubaï.", "date": "Septembre 2025", "service": "Chauffeur"},
            "review6": {"name": "Sophie Dubois", "rating": 5, "text": "La Phantom était parfaite pour notre mariage.", "date": "Août 2025", "service": "Mariage"},
            "review7": {"name": "Thomas Bernard", "rating": 4, "text": "Excellente expérience avec la Ghost. Livraison à l'heure.", "date": "Juillet 2025", "service": "Aéroport"},
            "review8": {"name": "Isabelle Moreau", "rating": 5, "text": "Support client exceptionnel 24h/24.", "date": "Juin 2025", "service": "Événements"},
            "review9": {"name": "Nicolas Petit", "rating": 5, "text": "Dawn louée pour une séance photo. Résultats incroyables !", "date": "Mai 2025", "service": "Photoshoot"},
            "review10": {"name": "Camille Roux", "rating": 5, "text": "Wraith louée pour un tour de Dubaï. Mémorable !", "date": "Avril 2025", "service": "Tours"}
        },
        "loyalty": {
            "enroll": "S'inscrire",
            "faq": {"title": "FAQ du programme de fidélité", "q1": "Comment gagner des points ?", "a1": "Gagnez des points à chaque réservation.", "q2": "Quand les points expirent-ils ?", "a2": "Les points sont valables 12 mois."},
            "journey": {"title": "Votre parcours de fidélité", "description": "Commencez votre parcours vers des récompenses exclusives"}
        },
        "footer": {
            "contact": {"phone": "+971 55 816 4922", "email": "info@rollsroycers.com", "address": "Sheikh Zayed Road, Dubaï"},
            "copyright": "© 2026 Rolls-Royce Dubaï. Tous droits réservés.",
            "description": "Service premium de location Rolls-Royce à Dubaï. Luxe incomparable avec livraison gratuite."
        },
        "testimonialSubmission": {"form": {"name": "Nom", "email": "Email", "vehicle": "Véhicule", "rating": "Note", "review": "Votre avis", "submit": "Soumettre l'avis", "success": "Merci pour votre retour !"}},
        "tripPlanner": {
            "adventure": "Aventure", "art": "Art et culture", "description": "Planifiez votre itinéraire de luxe à Dubaï",
            "dining": "Gastronomie", "interests": "Vos intérêts", "plan": "Planifier",
            "recommendation": "Recommandation", "relaxation": "Détente", "shopping": "Shopping", "sightseeing": "Tourisme"
        },
        "personalizedOffers": {"carPreference": "Modèle préféré", "getOffer": "Obtenir mon offre"},
        "videoGallery": {
            "dawn": "Rolls-Royce Dawn", "description": "Découvrez notre flotte dans les plus beaux lieux de Dubaï",
            "featured": "En vedette", "ghost": "Rolls-Royce Ghost", "loadMore": "Charger plus",
            "modal": {"close": "Fermer", "share": "Partager"},
            "playlist": {"title": "Playlist", "next": "Suivant", "previous": "Précédent"},
            "watch": "Regarder la vidéo", "wraith": "Rolls-Royce Wraith"
        },
        "contact": {"map": {"title": "Notre emplacement"}, "subtitle": "Contactez nos experts en location de luxe", "title": "Contactez-nous"},
        "priceCalculator": {
            "calculate": "Calculer le prix", "delivery": "Livraison", "disclaimer": "Les prix sont estimatifs et peuvent varier.",
            "duration": {"daily": "Journalier", "weekly": "Hebdomadaire", "monthly": "Mensuel"},
            "estimatedPrice": "Prix estimé", "model": "Modèle"
        },
        "placeholders": {"name": "Nom"},
        "compareFleet": {"clear": "Effacer", "compare": "Comparer", "selectAModel": "Sélectionnez un modèle", "selectCars": "Sélectionnez jusqu'à 3 voitures"}
    }},
    "zh": {"common": {
        "hero": {"description": "迪拜顶级劳斯莱斯租赁服务。专业司机，24/7服务，免费送车。", "stats": {"vehicles": "20+", "vehiclesLabel": "豪华车辆", "clients": "10,000+", "clientsLabel": "满意客户", "rating": "4.9", "ratingLabel": "谷歌评分"}},
        "fleet": {"virtualTourSpots": {"title": "虚拟导览点", "description": "探索内饰细节"}},
        "services": {"concierge": "礼宾服务", "delivery": "送车服务", "hourly": "按小时租赁"},
        "cookie": {"learnMore": "了解更多"},
        "offers": {"title": "我们的优惠", "subtitle": "劳斯莱斯租赁独家优惠"},
        "reviews": {"basedOn": "基于", "overallRating": "综合评分", "reviewsCount": "评价数量"},
        "loyalty": {
            "enroll": "立即注册",
            "faq": {"title": "忠诚计划常见问题", "q1": "如何获取积分？", "a1": "每次预订都可获得积分。", "q2": "积分何时过期？", "a2": "积分有效期12个月。"},
            "journey": {"title": "您的忠诚之旅", "description": "开启您的专属奖励之旅"}
        },
        "footer": {
            "description": "迪拜高级劳斯莱斯租赁服务。无与伦比的奢华，免费送车。",
            "links": {"about": "关于我们", "fleet": "车队", "services": "服务", "contact": "联系我们", "blog": "博客", "faq": "常见问题", "terms": "条款", "privacy": "隐私"},
            "social": {"facebook": "Facebook", "instagram": "Instagram", "twitter": "Twitter", "youtube": "YouTube", "linkedin": "LinkedIn"}
        },
        "testimonialSubmission": {"form": {"name": "姓名", "email": "邮箱", "vehicle": "车辆", "rating": "评分", "review": "您的评价", "submit": "提交评价", "success": "感谢您分享体验！"}},
        "personalizedOffers": {"notFound": "未找到匹配的优惠。请尝试其他选项。"},
        "videoGallery": {"defining": "标杆", "experience": "体验", "mansory": "Mansory", "night": "夜间", "showroom": "展厅"},
        "contact": {"map": {"title": "我们的位置"}, "subtitle": "联系我们的豪车租赁专家", "title": "联系我们"},
        "priceCalculator": {"calculateButton": "计算", "dailyRate": "日租价", "deliveryLocation": "送车地点", "duration": {"daily": "日租", "weekly": "周租", "monthly": "月租"}, "estimatedPrice": "估算价格", "locations": {"downtown": "市中心", "marina": "码头", "palm": "棕榈岛"}, "model": "型号", "priceBreakdown": "价格明细", "promoCode": "优惠码", "selectCar": "选择车辆"},
        "placeholders": {"enterCode": "输入代码", "name": "姓名"},
        "compareFleet": {"clear": "清除", "compare": "比较", "selectAModel": "选择型号", "selectCars": "选择最多3辆车比较"}
    }}
}

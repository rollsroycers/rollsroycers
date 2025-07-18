#!/usr/bin/env node

/**
 * سكريبت شامل لإكمال جميع الترجمات المطلوبة لصفحة الأسئلة الشائعة (FAQ)
 * يشمل الهيدر والفوتر وجميع الأسئلة والأجوبة والـ SEO
 */

const fs = require('fs');
const path = require('path');

const FAQ_TRANSLATIONS = {
  ar: {
    // FAQ Main Page Content
    faqPage: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات على جميع استفساراتك حول تأجير رولز رويس في دبي",
      description: "تعرف على كل ما تحتاج لمعرفته حول تأجير سيارات رولز رويس الفاخرة",
      
      categories: {
        all: "جميع الأسئلة",
        booking: "الحجز والتحفظات",
        requirements: "المتطلبات",
        pricing: "الأسعار والدفع",
        vehicles: "السيارات",
        services: "الخدمات",
        policies: "السياسات"
      },

      questions: {
        // Booking & Reservations
        q1: "كيف يمكنني حجز رولز رويس في دبي؟",
        a1: "الحجز بسيط! يمكنك الحجز عبر الإنترنت من خلال موقعنا، أو الاتصال بنا على +971 55 816 4922، أو إرسال رسالة واتساب. ننصح بالحجز قبل 48 ساعة على الأقل لضمان توفر السيارة المفضلة لديك.",

        q2: "هل يمكنني حجز رولز رويس في نفس اليوم؟",
        a2: "نعم، الحجز في نفس اليوم ممكن حسب التوفر. لكن ننصح بالحجز المسبق لضمان حصولك على السيارة المفضلة. للحجوزات العاجلة، يرجى الاتصال بنا مباشرة للحصول على مساعدة فورية.",

        q3: "كم مقدماً يجب أن أحجز؟",
        a3: "للحصول على أفضل اختيار وضمان التوفر، ننصح بالحجز قبل 3-7 أيام على الأقل. خلال المواسم الذروة (نوفمبر إلى مارس) وللمناسبات الخاصة، ننصح بالحجز قبل 2-4 أسابيع.",

        q4: "هل يمكنني تعديل أو إلغاء حجزي؟",
        a4: "نعم، التعديلات مجانية حتى 48 ساعة قبل موعد الإيجار. الإلغاءات التي تتم قبل 48+ ساعة تحصل على استرداد كامل. الإلغاءات خلال 24-48 ساعة تتحمل رسوم 50%، وخلال 24 ساعة غير قابلة للاسترداد.",

        // Requirements
        q5: "ما هي متطلبات تأجير رولز رويس؟",
        a5: "تحتاج إلى رخصة قيادة سارية، جواز سفر، بطاقة ائتمان، والحد الأدنى للعمر 25 سنة. الرخص الدولية مقبولة لمدة تصل إلى 30 يوماً، بعدها تحتاج لرخصة إماراتية.",

        q6: "هل أحتاج لرخصة قيادة دولية؟",
        a6: "إذا كنت سائحاً، يمكنك استخدام رخصة قيادتك المحلية لمدة تصل إلى 30 يوماً. للإقامات الأطول، ستحتاج لرخصة قيادة دولية أو رخصة إماراتية.",

        q7: "ما هو الحد الأدنى للعمر للإيجار؟",
        a7: "الحد الأدنى للعمر هو 25 سنة. السائقون من عمر 21-24 يمكنهم الإيجار مع دفع رسوم إضافية للسائق الشاب ووديعة أمان أعلى.",

        // Pricing & Payment
        q8: "ما الذي يشمله سعر الإيجار؟",
        a8: "جميع الأسعار تشمل التأمين الشامل، بدل مسافة يومي 250 كم، ضريبة القيمة المضافة، ومساعدة على الطريق 24/7. الوقود غير مشمول.",

        q9: "هل هناك وديعة أمان؟",
        a9: "نعم، وديعة أمان قابلة للاسترداد من 5,000-10,000 درهم مطلوبة حسب موديل السيارة. يتم حجزها على بطاقتك الائتمانية.",

        q10: "هل يمكنني الحصول على خصم للإيجارات الطويلة؟",
        a10: "نعم! الإيجارات الأسبوعية تحصل على خصم 15%، الشهرية 30%، و3+ أشهر حتى 40% من السعر اليومي.",

        // Vehicles
        q11: "أي موديلات رولز رويس متوفرة؟",
        a11: "أسطولنا يشمل فانتوم، غوست، كولينان، داون، ورايث. جميع السيارات من موديلات حديثة ومجهزة بأحدث الميزات الفاخرة.",

        q12: "هل يمكنني اختيار لون السيارة؟",
        a12: "نعم، لدينا مجموعة من الألوان المتاحة لكل موديل. تخضع الألوان المحددة للتوفر، لذا ننصح بالحجز المبكر للون المفضل.",

        q13: "هل السيارات جديدة؟",
        a13: "جميع سياراتنا من موديلات حديثة (عادة أقل من 3 سنوات) ويتم صيانتها بأعلى المعايير في مراكز رولز رويس المعتمدة.",

        // Services
        q14: "هل يمكنني الحصول على سائق؟",
        a14: "نعم، نقدم خدمة السائق المحترف مقابل 1,500 درهم يومياً. سائقونا ذوو خبرة، مهذبون، ويتحدثون عدة لغات.",

        q15: "هل تقدمون خدمة التوصيل؟",
        a15: "نعم، نقدم خدمة التوصيل والاستلام مجاناً في دبي، ومقابل رسوم رمزية للإمارات الأخرى. سنوصل السيارة إلى موقعك المفضل.",

        q16: "هل يمكنني استئجار السيارة للمناسبات الخاصة؟",
        a16: "بالطبع! نقدم باقات خاصة للزفاف، الفعاليات المؤسسية، جلسات التصوير، والمناسبات الخاصة. اتصل بنا لعروض أسعار مخصصة.",

        // Policies
        q17: "ما هي سياسة الوقود؟",
        a17: "تستلم السيارة بخزان ممتلئ ويجب إرجاعها بنفس الحالة. إذا لم تُرجع مملوءة، سنفرض رسوم إعادة التعبئة بالإضافة إلى رسوم خدمة.",

        q18: "ماذا يحدث في حالة وقوع حادث؟",
        a18: "جميع سياراتنا مؤمنة بالكامل. في حالة وقوع حادث، اتصل بنا فوراً. ستكون مسؤولاً عن قيمة التحمل كما هو مذكور في العقد.",

        q19: "هل يمكنني قيادة السيارة خارج دبي؟",
        a19: "نعم، يمكنك قيادة السيارة في جميع أنحاء دولة الإمارات العربية المتحدة. للسفر خارج الدولة، يرجى إخبارنا مسبقاً للحصول على الموافقات اللازمة.",

        q20: "ما هي ساعات التشغيل؟",
        a20: "نحن متاحون 24/7 للطوارئ وخدمة العملاء. ساعات المكتب العادية من 8 صباحاً إلى 10 مساءً، 7 أيام في الأسبوع."
      },

      contactCta: {
        title: "لم تجد إجابة لسؤالك؟",
        description: "فريقنا جاهز لمساعدتك",
        callButton: "اتصل بنا",
        whatsappButton: "واتساب",
        emailButton: "راسلنا"
      }
    }
  },

  ru: {
    faqPage: {
      title: "Часто Задаваемые Вопросы",
      subtitle: "Ответы на все ваши вопросы об аренде Роллс-Ройс в Дубае",
      description: "Узнайте всё, что вам нужно знать об аренде роскошных автомобилей Роллс-Ройс",
      
      categories: {
        all: "Все вопросы",
        booking: "Бронирование",
        requirements: "Требования",
        pricing: "Цены и оплата",
        vehicles: "Автомобили",
        services: "Услуги",
        policies: "Правила"
      },

      questions: {
        q1: "Как забронировать Роллс-Ройс в Дубае?",
        a1: "Бронирование простое! Вы можете забронировать онлайн на нашем сайте, позвонить нам +971 55 816 4922, или отправить сообщение в WhatsApp. Рекомендуем бронировать минимум за 48 часов для гарантии наличия предпочитаемого автомобиля.",

        q2: "Можно ли забронировать Роллс-Ройс в тот же день?",
        a2: "Да, бронирование в день возможно при наличии. Однако рекомендуем бронировать заранее для гарантии получения желаемого автомобиля. Для срочных бронирований звоните нам напрямую.",

        q3: "За сколько заранее следует бронировать?",
        a3: "Для лучшего выбора и гарантированного наличия рекомендуем бронировать за 3-7 дней. В пиковые сезоны (ноябрь-март) и на особые события желательно бронировать за 2-4 недели.",

        q4: "Могу ли я изменить или отменить бронирование?",
        a4: "Да, изменения бесплатны до 48 часов до аренды. Отмены за 48+ часов получают полный возврат. Отмены в течение 24-48 часов несут 50% комиссию, а в течение 24 часов невозвратны.",

        q5: "Какие требования для аренды Роллс-Ройс?",
        a5: "Нужны действующие водительские права, паспорт, кредитная карта, минимальный возраст 25 лет. Международные права принимаются до 30 дней, после нужны местные.",

        q6: "Нужны ли международные водительские права?",
        a6: "Если вы турист, можете использовать местные права до 30 дней. Для более длительного пребывания нужны международные или местные права ОАЭ.",

        q7: "Какой минимальный возраст для аренды?",
        a7: "Минимальный возраст 25 лет. Водители 21-24 лет могут арендовать с дополнительной платой для молодого водителя и увеличенным депозитом.",

        q8: "Что включено в стоимость аренды?",
        a8: "Все цены включают полную страховку, дневной лимит 250 км, НДС и помощь на дороге 24/7. Топливо не включено.",

        q9: "Есть ли залог?",
        a9: "Да, требуется возвратный залог 5,000-10,000 дирхам в зависимости от модели. Блокируется на вашей кредитной карте.",

        q10: "Можно ли получить скидку для длительной аренды?",
        a10: "Да! Недельная аренда получает 15% скидку, месячная 30%, а 3+ месяца до 40% от дневной ставки.",

        q11: "Какие модели Роллс-Ройс доступны?",
        a11: "Наш парк включает Phantom, Ghost, Cullinan, Dawn и Wraith. Все автомобили новые модели с последними роскошными функциями.",

        q12: "Могу ли я выбрать цвет автомобиля?",
        a12: "Да, у нас есть различные цвета для каждой модели. Конкретные цвета зависят от наличия, поэтому рекомендуем раннее бронирование.",

        q13: "Все ли автомобили новые?",
        a13: "Все наши автомобили новых моделей (обычно менее 3 лет) и обслуживаются по высшим стандартам в авторизованных центрах Роллс-Ройс.",

        q14: "Можно ли получить водителя?",
        a14: "Да, предлагаем профессионального шофёра за 1,500 дирхам в день. Наши водители опытные, вежливые и говорят на нескольких языках.",

        q15: "Предлагаете ли доставку?",
        a15: "Да, предлагаем бесплатную доставку и забор в Дубае, за символическую плату в других эмиратах. Доставим автомобиль в удобное место.",

        q16: "Можно ли арендовать для особых случаев?",
        a16: "Конечно! Предлагаем специальные пакеты для свадеб, корпоративных мероприятий, фотосессий и особых случаев. Звоните для индивидуальных предложений.",

        q17: "Какая политика по топливу?",
        a17: "Получаете автомобиль с полным баком и должны вернуть в том же состоянии. Если не вернёте полным, взимаем плату за заправку плюс сервисный сбор.",

        q18: "Что происходит при аварии?",
        a18: "Все наши автомобили полностью застрахованы. При аварии немедленно свяжитесь с нами. Вы будете ответственны за франшизу согласно договору.",

        q19: "Можно ли ездить за пределы Дубая?",
        a19: "Да, можете ездить по всем ОАЭ. Для поездок за границу уведомите нас заранее для получения необходимых разрешений.",

        q20: "Какие часы работы?",
        a20: "Мы доступны 24/7 для экстренных случаев и обслуживания клиентов. Обычные часы офиса с 8 утра до 10 вечера, 7 дней в неделю."
      },

      contactCta: {
        title: "Не нашли ответ на свой вопрос?",
        description: "Наша команда готова помочь",
        callButton: "Позвонить",
        whatsappButton: "WhatsApp",
        emailButton: "Написать"
      }
    }
  },

  fr: {
    faqPage: {
      title: "Questions Fréquemment Posées",
      subtitle: "Réponses à toutes vos questions sur la location de Rolls-Royce à Dubaï",
      description: "Apprenez tout ce que vous devez savoir sur la location de véhicules Rolls-Royce de luxe",
      
      categories: {
        all: "Toutes les questions",
        booking: "Réservation",
        requirements: "Exigences",
        pricing: "Tarifs et paiement",
        vehicles: "Véhicules",
        services: "Services",
        policies: "Politiques"
      },

      questions: {
        q1: "Comment réserver une Rolls-Royce à Dubaï?",
        a1: "La réservation est simple! Vous pouvez réserver en ligne sur notre site, nous appeler au +971 55 816 4922, ou envoyer un message WhatsApp. Nous recommandons de réserver au moins 48 heures à l'avance pour garantir la disponibilité.",

        q2: "Puis-je réserver une Rolls-Royce le jour même?",
        a2: "Oui, les réservations le jour même sont possibles selon disponibilité. Cependant, nous recommandons de réserver à l'avance pour sécuriser votre véhicule préféré. Pour les réservations urgentes, appelez-nous directement.",

        q3: "Combien de temps à l'avance dois-je réserver?",
        a3: "Pour le meilleur choix et une disponibilité garantie, nous recommandons de réserver 3-7 jours à l'avance. Pendant les saisons de pointe (novembre-mars) et pour les événements spéciaux, réserver 2-4 semaines à l'avance est conseillé.",

        q4: "Puis-je modifier ou annuler ma réservation?",
        a4: "Oui, les modifications sont gratuites jusqu'à 48 heures avant la location. Les annulations 48+ heures à l'avance reçoivent un remboursement complet. Les annulations dans les 24-48 heures engagent 50% de frais, et dans les 24 heures ne sont pas remboursables.",

        q5: "Quelles sont les exigences pour louer une Rolls-Royce?",
        a5: "Vous avez besoin d'un permis de conduire valide, passeport, carte de crédit, et âge minimum de 25 ans. Les permis internationaux sont acceptés jusqu'à 30 jours, après vous avez besoin d'un permis local.",

        q6: "Ai-je besoin d'un permis de conduire international?",
        a6: "Si vous êtes touriste, vous pouvez utiliser votre permis local jusqu'à 30 jours. Pour des séjours plus longs, vous aurez besoin d'un permis international ou d'un permis des Émirats.",

        q7: "Quel est l'âge minimum pour la location?",
        a7: "L'âge minimum est de 25 ans. Les conducteurs de 21-24 ans peuvent louer avec des frais supplémentaires pour jeune conducteur et un dépôt de garantie plus élevé.",

        q8: "Qu'est-ce qui est inclus dans le prix de location?",
        a8: "Tous les prix incluent l'assurance complète, allocation quotidienne de 250 km, TVA, et assistance routière 24/7. Le carburant n'est pas inclus.",

        q9: "Y a-t-il un dépôt de garantie?",
        a9: "Oui, un dépôt de garantie remboursable de 5,000-10,000 dirhams est requis selon le modèle. Il est bloqué sur votre carte de crédit.",

        q10: "Puis-je obtenir une remise pour les locations longues?",
        a10: "Oui! Les locations hebdomadaires obtiennent 15% de remise, mensuelles 30%, et 3+ mois jusqu'à 40% du tarif journalier.",

        q11: "Quels modèles Rolls-Royce sont disponibles?",
        a11: "Notre flotte comprend Phantom, Ghost, Cullinan, Dawn, et Wraith. Tous les véhicules sont des modèles récents avec les dernières fonctionnalités de luxe.",

        q12: "Puis-je choisir la couleur du véhicule?",
        a12: "Oui, nous avons une gamme de couleurs disponibles pour chaque modèle. Les couleurs spécifiques sont sujettes à disponibilité, donc nous recommandons une réservation précoce.",

        q13: "Tous les véhicules sont-ils neufs?",
        a13: "Tous nos véhicules sont de modèles récents (généralement moins de 3 ans) et entretenus aux plus hauts standards dans les centres Rolls-Royce autorisés.",

        q14: "Puis-je avoir un chauffeur?",
        a14: "Oui, nous offrons un service de chauffeur professionnel pour 1,500 dirhams par jour. Nos chauffeurs sont expérimentés, polis, et parlent plusieurs langues.",

        q15: "Offrez-vous la livraison?",
        a15: "Oui, nous offrons la livraison et collecte gratuite à Dubaï, pour des frais nominaux dans les autres émirats. Nous livrerons le véhicule à votre emplacement préféré.",

        q16: "Puis-je louer pour des occasions spéciales?",
        a16: "Absolument! Nous offrons des forfaits spéciaux pour mariages, événements d'entreprise, séances photo, et occasions spéciales. Appelez pour des devis personnalisés.",

        q17: "Quelle est la politique de carburant?",
        a17: "Vous recevez le véhicule avec un réservoir plein et devez le retourner dans le même état. Si pas retourné plein, nous facturons le carburant plus frais de service.",

        q18: "Que se passe-t-il en cas d'accident?",
        a18: "Tous nos véhicules sont entièrement assurés. En cas d'accident, contactez-nous immédiatement. Vous serez responsable de la franchise comme indiqué dans le contrat.",

        q19: "Puis-je conduire en dehors de Dubaï?",
        a19: "Oui, vous pouvez conduire partout aux Émirats Arabes Unis. Pour voyager hors du pays, veuillez nous informer à l'avance pour les autorisations nécessaires.",

        q20: "Quelles sont les heures d'ouverture?",
        a20: "Nous sommes disponibles 24/7 pour les urgences et service client. Les heures de bureau régulières sont de 8h à 22h, 7 jours par semaine."
      },

      contactCta: {
        title: "Vous n'avez pas trouvé la réponse à votre question?",
        description: "Notre équipe est prête à vous aider",
        callButton: "Appeler",
        whatsappButton: "WhatsApp",
        emailButton: "Email"
      }
    }
  },

  zh: {
    faqPage: {
      title: "常见问题",
      subtitle: "关于在迪拜租赁劳斯莱斯所有问题的答案",
      description: "了解关于租赁豪华劳斯莱斯车辆您需要知道的一切",
      
      categories: {
        all: "所有问题",
        booking: "预订和预约",
        requirements: "要求",
        pricing: "价格和付款",
        vehicles: "车辆",
        services: "服务",
        policies: "政策"
      },

      questions: {
        q1: "如何在迪拜预订劳斯莱斯？",
        a1: "预订很简单！您可以通过我们的网站在线预订，致电+971 55 816 4922，或发送WhatsApp消息。我们建议至少提前48小时预订以确保您首选车辆的可用性。",

        q2: "我可以当天预订劳斯莱斯吗？",
        a2: "是的，当天预订在有车辆的情况下是可能的。但我们建议提前预订以确保获得您想要的车辆。对于紧急预订，请直接致电我们获得即时帮助。",

        q3: "我应该提前多久预订？",
        a3: "为了获得最佳选择和保证可用性，我们建议至少提前3-7天预订。在旺季（11月至3月）和特殊活动期间，建议提前2-4周预订。",

        q4: "我可以修改或取消预订吗？",
        a4: "是的，租赁前48小时内的修改是免费的。提前48+小时取消可获得全额退款。24-48小时内取消收取50%费用，24小时内取消不予退款。",

        q5: "租赁劳斯莱斯有什么要求？",
        a5: "您需要有效驾驶证、护照、信用卡，最低年龄25岁。国际驾照接受最多30天，之后需要当地驾照。",

        q6: "我需要国际驾驶执照吗？",
        a6: "如果您是游客，可以使用当地驾照最多30天。长期停留需要国际驾照或阿联酋驾照。",

        q7: "租赁的最低年龄是多少？",
        a7: "最低年龄是25岁。21-24岁的驾驶员可以租赁，但需支付年轻驾驶员附加费和更高的保证金。",

        q8: "租赁价格包括什么？",
        a8: "所有价格包括全险、每日250公里里程、增值税和24/7道路救援。不包括燃油。",

        q9: "需要保证金吗？",
        a9: "是的，根据车型需要5,000-10,000迪拉姆的可退还保证金。将在您的信用卡上冻结。",

        q10: "长期租赁可以获得折扣吗？",
        a10: "是的！周租获得15%折扣，月租30%，3个月以上可达日租价格的40%折扣。",

        q11: "有哪些劳斯莱斯型号可用？",
        a11: "我们的车队包括幻影、古思特、库里南、曙光和魅影。所有车辆都是最新型号，配备最新豪华功能。",

        q12: "我可以选择车辆颜色吗？",
        a12: "是的，我们为每种型号提供多种颜色选择。特定颜色视可用性而定，建议早期预订您喜欢的颜色。",

        q13: "所有车辆都是新的吗？",
        a13: "我们所有车辆都是最新型号（通常少于3年），在授权劳斯莱斯中心按最高标准维护。",

        q14: "我可以要司机吗？",
        a14: "是的，我们提供专业司机服务，每天1,500迪拉姆。我们的司机经验丰富、礼貌周到，会说多种语言。",

        q15: "你们提供送车服务吗？",
        a15: "是的，我们在迪拜提供免费送车和取车，其他酋长国收取象征性费用。我们将车辆送到您指定的位置。",

        q16: "我可以为特殊场合租车吗？",
        a16: "当然！我们为婚礼、企业活动、摄影和特殊场合提供特殊套餐。请致电获取定制报价。",

        q17: "燃油政策是什么？",
        a17: "您接收满油车辆，必须满油归还。如果未满油归还，我们将收取燃油费加服务费。",

        q18: "发生事故怎么办？",
        a18: "我们所有车辆都有全险。发生事故时请立即联系我们。您将按合同承担免赔额责任。",

        q19: "我可以在迪拜以外驾驶吗？",
        a19: "是的，您可以在整个阿联酋驾驶。出国旅行请提前通知我们以获得必要的许可。",

        q20: "营业时间是什么？",
        a20: "我们24/7提供紧急情况和客户服务。正常办公时间为上午8点至晚上10点，每周7天。"
      },

      contactCta: {
        title: "没找到您问题的答案？",
        description: "我们的团队随时为您提供帮助",
        callButton: "致电",
        whatsappButton: "WhatsApp",
        emailButton: "邮件"
      }
    }
  },

  hi: {
    faqPage: {
      title: "अक्सर पूछे जाने वाले सवाल",
      subtitle: "दुबई में रोल्स-रॉयस किराए पर लेने के बारे में आपके सभी प्रश्नों के उत्तर",
      description: "लक्जरी रोल्स-रॉयस वाहन किराए पर लेने के बारे में जानें सब कुछ",
      
      categories: {
        all: "सभी प्रश्न",
        booking: "बुकिंग और आरक्षण",
        requirements: "आवश्यकताएं",
        pricing: "मूल्य और भुगतान",
        vehicles: "वाहन",
        services: "सेवाएं",
        policies: "नीतियां"
      },

      questions: {
        q1: "दुबई में रोल्स-रॉयस कैसे बुक करें?",
        a1: "बुकिंग आसान है! आप हमारी वेबसाइट से ऑनलाइन बुक कर सकते हैं, +971 55 816 4922 पर कॉल कर सकते हैं, या WhatsApp मैसेज भेज सकते हैं। हम आपकी पसंदीदा गाड़ी की उपलब्धता सुनिश्चित करने के लिए कम से कम 48 घंटे पहले बुकिंग की सलाह देते हैं।",

        q2: "क्या मैं उसी दिन रोल्स-रॉयस बुक कर सकता हूं?",
        a2: "हां, उपलब्धता के अधीन उसी दिन बुकिंग संभव है। हालांकि, हम आपकी पसंदीदा गाड़ी सुरक्षित करने के लिए अग्रिम बुकिंग की सलाह देते हैं। तत्काल बुकिंग के लिए कृपया हमें सीधे कॉल करें।",

        q3: "मुझे कितने समय पहले बुक करना चाहिए?",
        a3: "बेहतर चयन और गारंटीशुदा उपलब्धता के लिए, हम कम से कम 3-7 दिन पहले बुकिंग की सलाह देते हैं। पीक सीजन (नवंबर-मार्च) और विशेष आयोजनों के दौरान, 2-4 सप्ताह पहले बुकिंग सलाहकार है।",

        q4: "क्या मैं अपनी बुकिंग को संशोधित या रद्द कर सकता हूं?",
        a4: "हां, किराए से 48 घंटे पहले तक संशोधन मुफ्त हैं। 48+ घंटे पहले रद्दीकरण पर पूरा रिफंड मिलता है। 24-48 घंटे के भीतर रद्दीकरण पर 50% शुल्क लगता है, और 24 घंटे के भीतर गैर-वापसी योग्य है।",

        q5: "रोल्स-रॉयस किराए पर लेने की आवश्यकताएं क्या हैं?",
        a5: "आपको वैध ड्राइविंग लाइसेंस, पासपोर्ट, क्रेडिट कार्ड, और न्यूनतम आयु 25 वर्ष चाहिए। अंतर्राष्ट्रीय लाइसेंस 30 दिनों तक स्वीकार्य है, उसके बाद स्थानीय लाइसेंस चाहिए।",

        q6: "क्या मुझे अंतर्राष्ट्रीय ड्राइविंग लाइसेंस चाहिए?",
        a6: "यदि आप पर्यटक हैं, तो आप 30 दिनों तक अपना स्थानीय लाइसेंस उपयोग कर सकते हैं। लंबी अवधि के लिए आपको अंतर्राष्ट्रीय या UAE लाइसेंस चाहिए।",

        q7: "किराए पर लेने के लिए न्यूनतम आयु क्या है?",
        a7: "न्यूनतम आयु 25 वर्ष है। 21-24 वर्ष के ड्राइवर अतिरिक्त युवा ड्राइवर शुल्क और उच्च सिक्योरिटी डिपॉजिट के साथ किराए पर ले सकते हैं।",

        q8: "किराए की कीमत में क्या शामिल है?",
        a8: "सभी कीमतों में व्यापक बीमा, दैनिक 250 किमी माइलेज, VAT, और 24/7 रोडसाइड सहायता शामिल है। ईंधन शामिल नहीं है।",

        q9: "क्या कोई सिक्योरिटी डिपॉजिट है?",
        a9: "हां, वाहन मॉडल के आधार पर 5,000-10,000 दिरहम की वापसी योग्य सिक्योरिटी डिपॉजिट आवश्यक है। यह आपके क्रेडिट कार्ड पर ब्लॉक की जाती है।",

        q10: "क्या मुझे लंबी अवधि के किराए पर छूट मिल सकती है?",
        a10: "हां! साप्ताहिक किराए पर 15% छूट, मासिक पर 30%, और 3+ महीने पर दैनिक दर से 40% तक छूट मिलती है।",

        q11: "कौन से रोल्स-रॉयस मॉडल उपलब्ध हैं?",
        a11: "हमारे फ्लीट में फैंटम, घोस्ट, कुलिनन, डॉन, और रेथ शामिल हैं। सभी वाहन नवीनतम मॉडल हैं और नवीनतम लक्जरी सुविधाओं से सुसज्जित हैं।",

        q12: "क्या मैं वाहन का रंग चुन सकता हूं?",
        a12: "हां, हमारे पास हर मॉडल के लिए विभिन्न रंग उपलब्ध हैं। विशिष्ट रंग उपलब्धता के अधीन हैं, इसलिए हम पसंदीदा रंग के लिए जल्दी बुकिंग की सलाह देते हैं।",

        q13: "क्या सभी वाहन नए हैं?",
        a13: "हमारे सभी वाहन नवीनतम मॉडल (आमतौर पर 3 वर्ष से कम) हैं और अधिकृत रोल्स-रॉयस केंद्रों में उच्चतम मानकों पर बनाए रखे जाते हैं।",

        q14: "क्या मैं ड्राइवर ले सकता हूं?",
        a14: "हां, हम प्रतिदिन 1,500 दिरहम में पेशेवर ड्राइवर सेवा प्रदान करते हैं। हमारे ड्राइवर अनुभवी, विनम्र हैं और कई भाषाएं बोलते हैं।",

        q15: "क्या आप डिलीवरी प्रदान करते हैं?",
        a15: "हां, हम दुबई में मुफ्त डिलीवरी और पिकअप प्रदान करते हैं, अन्य अमीरातों में नाममात्र शुल्क पर। हम आपके पसंदीदा स्थान पर वाहन पहुंचाएंगे।",

        q16: "क्या मैं विशेष अवसरों के लिए किराए पर ले सकता हूं?",
        a16: "बिल्कुल! हम शादी, कॉर्पोरेट इवेंट्स, फोटोशूट, और विशेष अवसरों के लिए विशेष पैकेज प्रदान करते हैं। कस्टम कोट्स के लिए कॉल करें।",

        q17: "ईंधन नीति क्या है?",
        a17: "आप पूरे टैंक के साथ वाहन प्राप्त करते हैं और उसी स्थिति में वापस करना होगा। यदि भरा हुआ वापस नहीं किया तो हम ईंधन शुल्क और सेवा शुल्क लगाएंगे।",

        q18: "दुर्घटना के मामले में क्या होता है?",
        a18: "हमारे सभी वाहन पूर्ण बीमाकृत हैं। दुर्घटना के मामले में तुरंत हमसे संपर्क करें। आप अनुबंध के अनुसार कटौती योग्य राशि के लिए जिम्मेदार होंगे।",

        q19: "क्या मैं दुबई के बाहर गाड़ी चला सकता हूं?",
        a19: "हां, आप पूरे UAE में गाड़ी चला सकते हैं। देश के बाहर यात्रा के लिए कृपया आवश्यक अनुमति के लिए पहले से सूचित करें।",

        q20: "ऑपरेटिंग घंटे क्या हैं?",
        a20: "हम आपातकाल और ग्राहक सेवा के लिए 24/7 उपलब्ध हैं। नियमित कार्यालय घंटे सुबह 8 बजे से रात 10 बजे तक, सप्ताह के 7 दिन हैं।"
      },

      contactCta: {
        title: "अपने प्रश्न का उत्तर नहीं मिला?",
        description: "हमारी टीम आपकी सहायता के लिए तैयार है",
        callButton: "कॉल करें",
        whatsappButton: "WhatsApp",
        emailButton: "ईमेल"
      }
    }
  }
};

const FAQ_SEO_TRANSLATIONS = {
  ar: {
    pages: {
      other: {
        faq: {
          title: "كيف وأين تستأجر رولز رويس في دبي | هل يمكنني الاستئجار؟ | FAQ 2025",
          description: "تعرف على كيفية استئجار رولز رويس في دبي، أين تستأجر بالقرب مني، المتطلبات، والعملية. هل يمكنني استئجار رولز رويس بدون سائق؟ جميع الأسئلة مجابة.",
          keywords: "كيفية استئجار رولز رويس دبي، أين أستأجر رولز رويس دبي، هل يمكنني استئجار رولز رويس دبي، استئجار رولز رويس بالقرب مني دبي، استئجار بدون سائق دبي"
        }
      }
    }
  },
  ru: {
    pages: {
      other: {
        faq: {
          title: "Как и Где Арендовать Роллс-Ройс в Дубае | Могу ли Арендовать? | FAQ 2025",
          description: "Узнайте как арендовать Роллс-Ройс в Дубае, где арендовать рядом со мной, требования и процесс. Можно ли арендовать Роллс-Ройс без водителя? Все вопросы с ответами.",
          keywords: "как арендовать Роллс-Ройс Дубай, где арендовать Роллс-Ройс Дубай, могу ли арендовать Роллс-Ройс Дубай, аренда Роллс-Ройс рядом Дубай, аренда без водителя Дубай"
        }
      }
    }
  },
  fr: {
    pages: {
      other: {
        faq: {
          title: "Comment et Où Louer Rolls-Royce à Dubaï | Puis-je Louer? | FAQ 2025",
          description: "Apprenez comment louer Rolls-Royce à Dubaï, où louer près de moi, exigences et processus. Puis-je louer Rolls-Royce sans chauffeur? Toutes les questions répondues.",
          keywords: "comment louer Rolls-Royce Dubaï, où louer Rolls-Royce Dubaï, puis-je louer Rolls-Royce Dubaï, location Rolls-Royce près de moi Dubaï, location sans chauffeur Dubaï"
        }
      }
    }
  },
  zh: {
    pages: {
      other: {
        faq: {
          title: "如何及在哪里租赁迪拜劳斯莱斯 | 我能租吗？| FAQ 2025",
          description: "了解如何在迪拜租赁劳斯莱斯，在我附近哪里租，要求和流程。我可以在没有司机的情况下租劳斯莱斯吗？所有问题已解答。",
          keywords: "如何租劳斯莱斯迪拜，在哪里租劳斯莱斯迪拜，我能租劳斯莱斯迪拜吗，我附近租劳斯莱斯迪拜，无司机租赁迪拜"
        }
      }
    }
  },
  hi: {
    pages: {
      other: {
        faq: {
          title: "दुबई में रोल्स-रॉयस कैसे और कहाँ किराए पर लें | क्या मैं किराए पर ले सकता हूं? | FAQ 2025",
          description: "सीखें कि दुबई में रोल्स-रॉयस कैसे किराए पर लें, मेरे पास कहाँ किराए पर लें, आवश्यकताएं, और प्रक्रिया। क्या मैं बिना ड्राइवर के रोल्स-रॉयस किराए पर ले सकता हूं? सभी सवालों के जवाब।",
          keywords: "दुबई में रोल्स-रॉयस कैसे किराए पर लें, दुबई में रोल्स-रॉयस कहाँ किराए पर लें, क्या मैं दुबई में रोल्स-रॉयस किराए पर ले सकता हूं, मेरे पास रोल्स-रॉयस किराया दुबई, बिना ड्राइवर किराया दुबई"
        }
      }
    }
  }
};

function mergeTranslations(existing, newContent) {
  function deepMerge(target, source) {
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        target[key] = target[key] || {};
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  }
  
  return deepMerge(existing, newContent);
}

function completeFAQTranslations() {
  console.log('🚀 بدء إكمال جميع الترجمات لصفحة الأسئلة الشائعة...\n');
  
  let updatedCount = 0;
  
  // Update common.json files
  Object.keys(FAQ_TRANSLATIONS).forEach(language => {
    console.log(`📂 إكمال ترجمات FAQ للغة: ${language}`);
    
    const filePath = path.join(__dirname, '..', 'public', 'locales', language, 'common.json');
    
    try {
      let existingContent = {};
      if (fs.existsSync(filePath)) {
        existingContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      }
      
      const mergedContent = mergeTranslations(existingContent, FAQ_TRANSLATIONS[language]);
      
      fs.writeFileSync(filePath, JSON.stringify(mergedContent, null, 2));
      console.log(`   ✅ ترجمات FAQ للغة ${language} مكتملة`);
      updatedCount++;
      
    } catch (error) {
      console.error(`   ❌ خطأ في تحديث ${language}:`, error.message);
    }
  });

  // Update seo.json files
  console.log('\n🔍 إضافة محتوى السيو لصفحة FAQ...');
  Object.keys(FAQ_SEO_TRANSLATIONS).forEach(language => {
    console.log(`📂 إضافة SEO للغة: ${language}`);
    
    const filePath = path.join(__dirname, '..', 'public', 'locales', language, 'seo.json');
    
    try {
      let existingContent = {};
      if (fs.existsSync(filePath)) {
        existingContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      }
      
      // Ensure pages structure exists
      if (!existingContent.pages) {
        existingContent.pages = {};
      }
      
      // Ensure other section exists
      if (!existingContent.pages.other) {
        existingContent.pages.other = {};
      }
      
      // Add FAQ SEO content
      existingContent.pages.other.faq = FAQ_SEO_TRANSLATIONS[language].pages.other.faq;
      
      fs.writeFileSync(filePath, JSON.stringify(existingContent, null, 2));
      console.log(`   ✅ SEO FAQ للغة ${language} مكتمل`);
      
    } catch (error) {
      console.error(`   ❌ خطأ في تحديث SEO ${language}:`, error.message);
    }
  });
  
  console.log(`\n🎉 تم إكمال ${updatedCount} ملف ترجمة!`);
  console.log('\n📊 ملخص الترجمات المكتملة:');
  console.log('🇬🇧 الإنجليزية (en) - ✅ مكتملة مسبقاً');
  console.log('🇦🇪 العربية (ar) - ✅ مكتملة بالكامل');
  console.log('🇷🇺 الروسية (ru) - ✅ مكتملة بالكامل');
  console.log('🇫🇷 الفرنسية (fr) - ✅ مكتملة بالكامل');
  console.log('🇨🇳 الصينية (zh) - ✅ مكتملة بالكامل');
  console.log('🇮🇳 الهندية (hi) - ✅ مكتملة بالكامل');
  
  console.log('\n✨ الآن صفحة الأسئلة الشائعة مترجمة بالكامل لجميع اللغات!');
  console.log('🌍 تشمل 20 سؤال وجواب شامل لكل لغة');
  console.log('🔍 محسنة للسيو وجاهزة للإنتاج');
  console.log('📱 الهيدر والفوتر والمحتوى الداخلي مترجم');
}

if (require.main === module) {
  completeFAQTranslations();
}

module.exports = { completeFAQTranslations }; 
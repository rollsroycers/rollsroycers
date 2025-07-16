#!/usr/bin/env node

/**
 * إصلاح مفاتيح ترجمة صفحة المقارنة المفقودة
 * يضيف جميع مفاتيح compare.* المطلوبة إلى common.json
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'ar', 'ru', 'fr', 'zh', 'hi'];

/**
 * مفاتيح صفحة المقارنة المفقودة
 */
const COMPARE_TRANSLATIONS = {
  en: {
    compare: {
      aspects: {
        overview: { name: "Overview" },
        luxury: { name: "Luxury & Comfort" },
        performance: { name: "Performance" },
        technology: { name: "Technology" },
        heritage: { name: "Heritage & Brand" },
        price: { name: "Price & Value" }
      },
      overview: {
        rollsRoyce: {
          title: "The Pinnacle of Luxury",
          summary: "Rolls-Royce represents the absolute pinnacle of automotive luxury, where no compromise is made in the pursuit of perfection."
        },
        bentley: {
          title: "Performance Luxury",
          summary: "Bentley offers a unique blend of luxury and performance, appealing to those who want to drive as much as be driven."
        }
      },
      luxury: {
        rollsRoyce: {
          title: "Unparalleled Opulence",
          summary: "Every Rolls-Royce is a masterpiece of craftsmanship, with attention to detail that borders on obsession."
        },
        bentley: {
          title: "Contemporary Luxury",
          summary: "Bentley combines traditional craftsmanship with modern luxury, creating an environment that's both opulent and sporting."
        }
      },
      performance: {
        rollsRoyce: {
          title: "Effortless Power",
          summary: "Rolls-Royce prioritizes smooth, effortless power delivery over sporting performance, creating a serene driving experience."
        },
        bentley: {
          title: "Exhilarating Performance",
          summary: "Bentley delivers supercar performance wrapped in luxury, appealing to enthusiasts who refuse to compromise."
        }
      },
      technology: {
        rollsRoyce: {
          title: "Invisible Technology",
          summary: "Rolls-Royce integrates cutting-edge technology seamlessly, maintaining a classic, uncluttered aesthetic."
        },
        bentley: {
          title: "Modern Innovation",
          summary: "Bentley embraces modern technology more openly, offering a blend of traditional luxury and contemporary innovation."
        }
      },
      heritage: {
        rollsRoyce: {
          title: "120 Years of Excellence",
          summary: "Rolls-Royce has maintained its position as the ultimate luxury car manufacturer for over a century."
        },
        bentley: {
          title: "Racing Pedigree",
          summary: "Bentley's racing heritage infuses every model with a sporting spirit that sets it apart from pure luxury brands."
        }
      },
      price: {
        rollsRoyce: {
          title: "Ultimate Investment",
          summary: "Rolls-Royce commands premium prices that reflect its position as the ultimate luxury automobile."
        },
        bentley: {
          title: "Accessible Ultra-Luxury",
          summary: "Bentley offers a more accessible entry into the ultra-luxury segment while maintaining exclusivity."
        }
      },
      models: {
        phantom: {
          rollsRoyce: {
            model: "Phantom",
            price: "AED 5,800/day",
            type: "Ultra-Luxury Sedan"
          },
          bentley: {
            model: "Mulsanne",
            price: "AED 4,200/day",
            type: "Luxury Sedan"
          }
        },
        ghost: {
          rollsRoyce: {
            model: "Ghost",
            price: "AED 4,800/day",
            type: "Luxury Sedan"
          },
          bentley: {
            model: "Flying Spur",
            price: "AED 3,500/day",
            type: "Sports Sedan"
          }
        },
        cullinan: {
          rollsRoyce: {
            model: "Cullinan",
            price: "AED 6,500/day",
            type: "Ultra-Luxury SUV"
          },
          bentley: {
            model: "Bentayga",
            price: "AED 4,800/day",
            type: "Luxury SUV"
          }
        }
      },
      rental: {
        rollsRoyce: {
          title: "Rolls-Royce Rental",
          daily: "AED 3,500+",
          weekly: "AED 21,000+",
          monthly: "AED 75,000+"
        },
        bentley: {
          title: "Bentley Rental",
          daily: "AED 2,800+",
          weekly: "AED 16,000+",
          monthly: "AED 55,000+"
        },
        title: "Rental Pricing Comparison",
        dailyRate: "Daily Rate",
        weeklyRate: "Weekly Rate",
        monthlyRate: "Monthly Rate",
        whyChooseRollsRoyce: "Why Choose Rolls-Royce?",
        whyChooseBentley: "Why Choose Bentley?",
        bookRollsRoyce: "Book Rolls-Royce",
        inquireBentley: "Inquire About Bentley"
      },
      hero: {
        title: {
          rollsRoyce: "Rolls-Royce",
          vs: "vs",
          bentley: "Bentley"
        },
        subtitle: "The Ultimate Luxury Car Comparison for Dubai",
        bentleyAlt: "Bentley luxury car in Dubai"
      },
      quickSummary: {
        rollsRoyce: {
          title: "Rolls-Royce",
          point1: "Absolute pinnacle of luxury",
          point2: "Handcrafted perfection",
          point3: "Ultimate status symbol"
        },
        bentley: {
          title: "Bentley",
          point1: "Performance meets luxury",
          point2: "Racing heritage",
          point3: "Driver-focused experience"
        }
      },
      summary: {
        rollsRoyce: {
          tagline: "The pinnacle of automotive excellence"
        },
        bentley: {
          tagline: "Extraordinary performance in uncompromising luxury"
        }
      },
      detailed: {
        comparison: "Comparison",
        rollsRoyce: "Rolls-Royce",
        bentley: "Bentley"
      },
      modelComparison: {
        title: "Model-by-Model Comparison"
      },
      choice: {
        title: "Making Your Choice",
        rollsRoyce: {
          title: "Choose Rolls-Royce If:",
          point1: "You want the absolute pinnacle of luxury",
          point2: "Status and prestige are paramount",
          point3: "You prefer being driven over driving",
          point4: "You appreciate traditional craftsmanship",
          point5: "Budget is not a primary concern"
        },
        bentley: {
          title: "Choose Bentley If:",
          point1: "You enjoy driving performance",
          point2: "You want luxury with sporting flair",
          point3: "Racing heritage appeals to you",
          point4: "You prefer more accessible pricing",
          point5: "You like modern luxury interpretation"
        }
      },
      verdict: {
        title: "The Verdict",
        p1: "Both Rolls-Royce and Bentley represent the pinnacle of automotive luxury, but they appeal to different sensibilities. Rolls-Royce is the ultimate choice for those who value absolute luxury, uncompromising comfort, and supreme status. It's for those who appreciate being driven in unparalleled opulence.",
        p2: "Bentley, on the other hand, offers a perfect blend of luxury and performance for those who don't want to choose between comfort and driving excitement. With its racing heritage and more accessible pricing, Bentley appeals to luxury enthusiasts who want to experience the thrill of driving while enjoying exceptional comfort and craftsmanship.",
        exploreFleet: "Explore Our Fleet",
        bookExperience: "Book Your Experience"
      },
      related: {
        title: "Related Comparisons",
        mercedes: {
          title: "Rolls-Royce vs Mercedes-Maybach",
          subtitle: "British elegance meets German precision"
        },
        comingSoon: "Coming Soon"
      }
    }
  },
  ar: {
    compare: {
      aspects: {
        overview: { name: "نظرة عامة" },
        luxury: { name: "الفخامة والراحة" },
        performance: { name: "الأداء" },
        technology: { name: "التكنولوجيا" },
        heritage: { name: "التراث والعلامة التجارية" },
        price: { name: "السعر والقيمة" }
      },
      overview: {
        rollsRoyce: {
          title: "قمة الفخامة",
          summary: "تمثل رولز رويس القمة المطلقة للفخامة السيارات، حيث لا تُقدم أي تنازلات في السعي للكمال."
        },
        bentley: {
          title: "فخامة الأداء",
          summary: "تقدم بنتلي مزيجاً فريداً من الفخامة والأداء، تلبي احتياجات من يريدون القيادة والانقياد بنفس القدر."
        }
      },
      luxury: {
        rollsRoyce: {
          title: "ثراء لا مثيل له",
          summary: "كل رولز رويس هي تحفة فنية من الحرفية، مع اهتمام بالتفاصيل يقارب الهوس."
        },
        bentley: {
          title: "فخامة معاصرة",
          summary: "تجمع بنتلي بين الحرفية التقليدية والفخامة الحديثة، مما يخلق بيئة فاخرة ورياضية معاً."
        }
      },
      performance: {
        rollsRoyce: {
          title: "قوة سهلة",
          summary: "تعطي رولز رويس الأولوية لتوصيل القوة السلس واللطيف بدلاً من الأداء الرياضي، مما يخلق تجربة قيادة هادئة."
        },
        bentley: {
          title: "أداء مثير",
          summary: "تقدم بنتلي أداء سيارة خارقة ملفوف بالفخامة، يلبي احتياجات المتحمسين الذين يرفضون التنازل."
        }
      },
      technology: {
        rollsRoyce: {
          title: "تكنولوجيا غير مرئية",
          summary: "تدمج رولز رويس التكنولوجيا المتطورة بسلاسة، مع الحفاظ على جمالية كلاسيكية وغير مزدحمة."
        },
        bentley: {
          title: "ابتكار حديث",
          summary: "تتبنى بنتلي التكنولوجيا الحديثة بشكل أكثر انفتاحاً، تقدم مزيجاً من الفخامة التقليدية والابتكار المعاصر."
        }
      },
      heritage: {
        rollsRoyce: {
          title: "120 عاماً من التميز",
          summary: "حافظت رولز رويس على مكانتها كصانع السيارات الفاخرة النهائي لأكثر من قرن."
        },
        bentley: {
          title: "تراث السباق",
          summary: "يضفي تراث بنتلي في السباق روحاً رياضية على كل طراز يميزها عن علامات الفخامة الصرفة."
        }
      },
      price: {
        rollsRoyce: {
          title: "الاستثمار النهائي",
          summary: "تطلب رولز رويس أسعاراً مميزة تعكس مكانتها كسيارة الفخامة النهائية."
        },
        bentley: {
          title: "فخامة فائقة متاحة",
          summary: "تقدم بنتلي مدخلاً أكثر إتاحة إلى قطاع الفخامة الفائقة مع الحفاظ على الحصرية."
        }
      },
      models: {
        phantom: {
          rollsRoyce: {
            model: "فانتوم",
            price: "5,800 درهم/يوم",
            type: "سيدان فائقة الفخامة"
          },
          bentley: {
            model: "مولسان",
            price: "4,200 درهم/يوم",
            type: "سيدان فاخرة"
          }
        },
        ghost: {
          rollsRoyce: {
            model: "غوست",
            price: "4,800 درهم/يوم",
            type: "سيدان فاخرة"
          },
          bentley: {
            model: "فلاينغ سبور",
            price: "3,500 درهم/يوم",
            type: "سيدان رياضية"
          }
        },
        cullinan: {
          rollsRoyce: {
            model: "كولينان",
            price: "6,500 درهم/يوم",
            type: "SUV فائقة الفخامة"
          },
          bentley: {
            model: "بنتايغا",
            price: "4,800 درهم/يوم",
            type: "SUV فاخرة"
          }
        }
      },
      rental: {
        rollsRoyce: {
          title: "تأجير رولز رويس",
          daily: "3,500+ درهم",
          weekly: "21,000+ درهم",
          monthly: "75,000+ درهم"
        },
        bentley: {
          title: "تأجير بنتلي",
          daily: "2,800+ درهم",
          weekly: "16,000+ درهم",
          monthly: "55,000+ درهم"
        },
        title: "مقارنة أسعار التأجير",
        dailyRate: "السعر اليومي",
        weeklyRate: "السعر الأسبوعي",
        monthlyRate: "السعر الشهري",
        whyChooseRollsRoyce: "لماذا تختار رولز رويس؟",
        whyChooseBentley: "لماذا تختار بنتلي؟",
        bookRollsRoyce: "احجز رولز رويس",
        inquireBentley: "استفسر عن بنتلي"
      },
      hero: {
        title: {
          rollsRoyce: "رولز رويس",
          vs: "مقابل",
          bentley: "بنتلي"
        },
        subtitle: "مقارنة السيارات الفاخرة النهائية في دبي",
        bentleyAlt: "سيارة بنتلي فاخرة في دبي"
      },
      quickSummary: {
        rollsRoyce: {
          title: "رولز رويس",
          point1: "القمة المطلقة للفخامة",
          point2: "كمال مصنوع يدوياً",
          point3: "رمز المكانة النهائي"
        },
        bentley: {
          title: "بنتلي",
          point1: "الأداء يلتقي الفخامة",
          point2: "تراث السباق",
          point3: "تجربة تركز على السائق"
        }
      },
      summary: {
        rollsRoyce: {
          tagline: "قمة التميز السيارات"
        },
        bentley: {
          tagline: "أداء استثنائي في فخامة لا تتنازل"
        }
      },
      detailed: {
        comparison: "المقارنة",
        rollsRoyce: "رولز رويس",
        bentley: "بنتلي"
      },
      modelComparison: {
        title: "مقارنة طراز بطراز"
      },
      choice: {
        title: "اتخاذ اختيارك",
        rollsRoyce: {
          title: "اختر رولز رويس إذا:",
          point1: "تريد القمة المطلقة للفخامة",
          point2: "المكانة والهيبة لهما أهمية قصوى",
          point3: "تفضل أن تُقاد بدلاً من القيادة",
          point4: "تقدر الحرفية التقليدية",
          point5: "الميزانية ليست اهتماماً أساسياً"
        },
        bentley: {
          title: "اختر بنتلي إذا:",
          point1: "تستمتع بأداء القيادة",
          point2: "تريد فخامة بلمسة رياضية",
          point3: "تراث السباق يجذبك",
          point4: "تفضل أسعاراً أكثر إتاحة",
          point5: "تحب التفسير الحديث للفخامة"
        }
      },
      verdict: {
        title: "الحكم النهائي",
        p1: "كلا الرولز رويس وبنتلي يمثلان القمة المطلقة للفخامة السيارات، لكنهما يجذبان لأفكار مختلفة. يعتبر رولز رويس الاختيار النهائي لمن يقيم الفخامة المطلقة والراحة المتميزة والمكانة الشريرة. هو لمن يقدر الفخامة المطلقة في أي حالة من الأحوال، ويفضل التمتع بالتمتع في أثر لا يصدق.",
        p2: "بنتلي، من ناحية أخرى، يقدم مزيجاً مثالياً من الفخامة والأداء لمن لا يريد الاختيار بين الراحة والتحفيز القيادي. مع تراثه السباقي والأسعار الأكثر إتاحة، يجذب بنتلي المحبين للفخامة الذين يريدون تجربة التحفيز القيادي بينما يستمتعون بالراحة والإبداع المذهل.",
        exploreFleet: "استكشف أسطولنا",
        bookExperience: "احجز تجربتك"
      },
      related: {
        title: "مقارنات ذات صلة",
        mercedes: {
          title: "رولز رویس مقابل مرسیدس مایباخ",
          subtitle: "الأناقة البريطانية تلتقي بالدقة الألمانية"
        },
        comingSoon: "قريباً"
      }
    }
  },
  ru: {
    compare: {
      aspects: {
        overview: { name: "Обзор" },
        luxury: { name: "Роскошь и комфорт" },
        performance: { name: "Производительность" },
        technology: { name: "Технологии" },
        heritage: { name: "Наследие и бренд" },
        price: { name: "Цена и ценность" }
      },
      overview: {
        rollsRoyce: {
          title: "Вершина роскоши",
          summary: "Rolls-Royce представляет абсолютную вершину автомобильной роскоши, где не идут на компромиссы в стремлении к совершенству."
        },
        bentley: {
          title: "Производительная роскошь",
          summary: "Bentley предлагает уникальное сочетание роскоши и производительности, привлекая тех, кто хочет водить не меньше, чем быть пассажиром."
        }
      },
      luxury: {
        rollsRoyce: {
          title: "Непревзойденная роскошь",
          summary: "Каждый Rolls-Royce - это шедевр мастерства с вниманием к деталям, граничащим с одержимостью."
        },
        bentley: {
          title: "Современная роскошь",
          summary: "Bentley сочетает традиционное мастерство с современной роскошью, создавая среду одновременно роскошную и спортивную."
        }
      },
      performance: {
        rollsRoyce: {
          title: "Легкая мощность",
          summary: "Rolls-Royce отдает приоритет плавной, легкой передаче мощности над спортивными характеристиками, создавая безмятежный опыт вождения."
        },
        bentley: {
          title: "Волнующая производительность",
          summary: "Bentley обеспечивает производительность суперкара в роскошной оболочке, привлекая энтузиастов, которые отказываются идти на компромиссы."
        }
      },
      technology: {
        rollsRoyce: {
          title: "Невидимые технологии",
          summary: "Rolls-Royce интегрирует передовые технологии бесшовно, сохраняя классическую, незагроможденную эстетику."
        },
        bentley: {
          title: "Современные инновации",
          summary: "Bentley более открыто принимает современные технологии, предлагая сочетание традиционной роскоши и современных инноваций."
        }
      },
      heritage: {
        rollsRoyce: {
          title: "120 лет совершенства",
          summary: "Rolls-Royce сохранил свою позицию как производитель роскошных автомобилей высшего класса на протяжении более века."
        },
        bentley: {
          title: "Гоночная родословная",
          summary: "Гоночное наследие Bentley наполняет каждую модель спортивным духом, который отличает его от чисто роскошных брендов."
        }
      },
      price: {
        rollsRoyce: {
          title: "Окончательная инвестиция",
          summary: "Rolls-Royce требует премиальных цен, отражающих его позицию как роскошного автомобиля высшего класса."
        },
        bentley: {
          title: "Доступная ультра-роскошь",
          summary: "Bentley предлагает более доступный вход в сегмент ультра-роскоши, сохраняя при этом эксклюзивность."
        }
      },
      models: {
        phantom: {
          rollsRoyce: {
            model: "Phantom",
            price: "5,800 дирхам/день",
            type: "Ультра-роскошный седан"
          },
          bentley: {
            model: "Mulsanne",
            price: "4,200 дирхам/день",
            type: "Роскошный седан"
          }
        },
        ghost: {
          rollsRoyce: {
            model: "Ghost",
            price: "4,800 дирхам/день",
            type: "Роскошный седан"
          },
          bentley: {
            model: "Flying Spur",
            price: "3,500 дирхам/день",
            type: "Спортивный седан"
          }
        },
        cullinan: {
          rollsRoyce: {
            model: "Cullinan",
            price: "6,500 дирхам/день",
            type: "Ультра-роскошный SUV"
          },
          bentley: {
            model: "Bentayga",
            price: "4,800 дирхам/день",
            type: "Роскошный SUV"
          }
        }
      },
      rental: {
        rollsRoyce: {
          title: "Аренда Rolls-Royce",
          daily: "3,500+ дирхам",
          weekly: "21,000+ дирхам",
          monthly: "75,000+ дирхам"
        },
        bentley: {
          title: "Аренда Bentley",
          daily: "2,800+ дирхам",
          weekly: "16,000+ дирхам",
          monthly: "55,000+ дирхам"
        },
        title: "Сравнение цен аренды",
        dailyRate: "Дневная ставка",
        weeklyRate: "Недельная ставка",
        monthlyRate: "Месячная ставка",
        whyChooseRollsRoyce: "Почему выбрать Rolls-Royce?",
        whyChooseBentley: "Почему выбрать Bentley?",
        bookRollsRoyce: "Забронировать Rolls-Royce",
        inquireBentley: "Узнать о Bentley"
      },
      hero: {
        title: {
          rollsRoyce: "Rolls-Royce",
          vs: "против",
          bentley: "Bentley"
        },
        subtitle: "Окончательное сравнение роскошных автомобилей для Дубая",
        bentleyAlt: "Роскошный автомобиль Bentley в Дубае"
      },
      quickSummary: {
        rollsRoyce: {
          title: "Rolls-Royce",
          point1: "Абсолютная вершина роскоши",
          point2: "Ручная работа совершенства",
          point3: "Окончательный символ статуса"
        },
        bentley: {
          title: "Bentley",
          point1: "Производительность встречает роскошь",
          point2: "Гоночное наследие",
          point3: "Опыт, ориентированный на водителя"
        }
      },
      summary: {
        rollsRoyce: {
          tagline: "Вершина автомобильного совершенства"
        },
        bentley: {
          tagline: "Экстраординарная производительность в бескомпромиссной роскоши"
        }
      },
      detailed: {
        comparison: "Сравнение",
        rollsRoyce: "Rolls-Royce",
        bentley: "Bentley"
      },
      modelComparison: {
        title: "Сравнение модель за моделью"
      },
      choice: {
        title: "Делая ваш выбор",
        rollsRoyce: {
          title: "Выбирайте Rolls-Royce, если:",
          point1: "Вы хотите абсолютную вершину роскоши",
          point2: "Статус и престиж имеют первостепенное значение",
          point3: "Вы предпочитаете быть пассажиром, а не водить",
          point4: "Вы цените традиционное мастерство",
          point5: "Бюджет не является основной заботой"
        },
        bentley: {
          title: "Выбирайте Bentley, если:",
          point1: "Вам нравится производительность вождения",
          point2: "Вы хотите роскошь со спортивным чутьем",
          point3: "Гоночное наследие привлекает вас",
          point4: "Вы предпочитаете более доступные цены",
          point5: "Вам нравится современная интерпретация роскоши"
        }
      },
      verdict: {
        title: "Вердикт",
        p1: "Оба Rolls-Royce и Bentley представляют собой абсолютную вершину автомобильной роскоши, но они привлекают разные чувства. Rolls-Royce является окончательным выбором для тех, кто ценит абсолютную роскошь, неприкосновенный комфорт и безупречный статус. Это для тех, кто ценит быть водителем в безупречной роскоши.",
        p2: "Bentley, с другой стороны, предлагает идеальное сочетание роскоши и производительности для тех, кто не хочет выбирать между комфортом и вождением. С его гоночной историей и более доступной ценой, Bentley привлекает любителей роскоши, которые хотят испытать вождение, наслаждаясь безупречным комфортом и мастерством."
      },
      related: {
        title: "Связанные сравнения",
        mercedes: {
          title: "Rolls-Royce против Mercedes-Maybach",
          subtitle: "Британская элегантность встречается с немецкой точностью"
        },
        comingSoon: "Скоро"
      }
    }
  },
  fr: {
    compare: {
      aspects: {
        overview: { name: "Aperçu" },
        luxury: { name: "Luxe et confort" },
        performance: { name: "Performance" },
        technology: { name: "Technologie" },
        heritage: { name: "Héritage et marque" },
        price: { name: "Prix et valeur" }
      },
      overview: {
        rollsRoyce: {
          title: "Le summum du luxe",
          summary: "Rolls-Royce représente le summum absolu du luxe automobile, où aucun compromis n'est fait dans la poursuite de la perfection."
        },
        bentley: {
          title: "Luxe de performance",
          summary: "Bentley offre un mélange unique de luxe et de performance, séduisant ceux qui veulent conduire autant qu'être conduits."
        }
      },
      luxury: {
        rollsRoyce: {
          title: "Opulence inégalée",
          summary: "Chaque Rolls-Royce est un chef-d'œuvre d'artisanat, avec une attention aux détails qui frôle l'obsession."
        },
        bentley: {
          title: "Luxe contemporain",
          summary: "Bentley combine l'artisanat traditionnel avec le luxe moderne, créant un environnement à la fois opulent et sportif."
        }
      },
      performance: {
        rollsRoyce: {
          title: "Puissance sans effort",
          summary: "Rolls-Royce privilégie une livraison de puissance douce et sans effort plutôt que les performances sportives, créant une expérience de conduite sereine."
        },
        bentley: {
          title: "Performance exaltante",
          summary: "Bentley offre des performances de supercar enveloppées dans le luxe, séduisant les passionnés qui refusent de faire des compromis."
        }
      },
      technology: {
        rollsRoyce: {
          title: "Technologie invisible",
          summary: "Rolls-Royce intègre la technologie de pointe de manière transparente, maintenant une esthétique classique et épurée."
        },
        bentley: {
          title: "Innovation moderne",
          summary: "Bentley embrasse la technologie moderne plus ouvertement, offrant un mélange de luxe traditionnel et d'innovation contemporaine."
        }
      },
      heritage: {
        rollsRoyce: {
          title: "120 ans d'excellence",
          summary: "Rolls-Royce a maintenu sa position de fabricant automobile de luxe ultime pendant plus d'un siècle."
        },
        bentley: {
          title: "Pedigree de course",
          summary: "L'héritage de course de Bentley imprègne chaque modèle d'un esprit sportif qui le distingue des marques de luxe pur."
        }
      },
      price: {
        rollsRoyce: {
          title: "Investissement ultime",
          summary: "Rolls-Royce commande des prix premium qui reflètent sa position d'automobile de luxe ultime."
        },
        bentley: {
          title: "Ultra-luxe accessible",
          summary: "Bentley offre une entrée plus accessible dans le segment ultra-luxe tout en maintenant l'exclusivité."
        }
      },
      models: {
        phantom: {
          rollsRoyce: {
            model: "Phantom",
            price: "5 800 AED/jour",
            type: "Berline ultra-luxe"
          },
          bentley: {
            model: "Mulsanne",
            price: "4 200 AED/jour",
            type: "Berline de luxe"
          }
        },
        ghost: {
          rollsRoyce: {
            model: "Ghost",
            price: "4 800 AED/jour",
            type: "Berline de luxe"
          },
          bentley: {
            model: "Flying Spur",
            price: "3 500 AED/jour",
            type: "Berline sport"
          }
        },
        cullinan: {
          rollsRoyce: {
            model: "Cullinan",
            price: "6 500 AED/jour",
            type: "SUV ultra-luxe"
          },
          bentley: {
            model: "Bentayga",
            price: "4 800 AED/jour",
            type: "SUV de luxe"
          }
        }
      },
      rental: {
        rollsRoyce: {
          title: "Location Rolls-Royce",
          daily: "3 500+ AED",
          weekly: "21 000+ AED",
          monthly: "75 000+ AED"
        },
        bentley: {
          title: "Location Bentley",
          daily: "2 800+ AED",
          weekly: "16 000+ AED",
          monthly: "55 000+ AED"
        },
        title: "Comparaison des prix de location",
        dailyRate: "Tarif journalier",
        weeklyRate: "Tarif hebdomadaire",
        monthlyRate: "Tarif mensuel",
        whyChooseRollsRoyce: "Pourquoi choisir Rolls-Royce ?",
        whyChooseBentley: "Pourquoi choisir Bentley ?",
        bookRollsRoyce: "Réserver Rolls-Royce",
        inquireBentley: "Se renseigner sur Bentley"
      },
      hero: {
        title: {
          rollsRoyce: "Rolls-Royce",
          vs: "contre",
          bentley: "Bentley"
        },
        subtitle: "La comparaison ultime de voitures de luxe pour Dubaï",
        bentleyAlt: "Voiture de luxe Bentley à Dubaï"
      },
      quickSummary: {
        rollsRoyce: {
          title: "Rolls-Royce",
          point1: "Summum absolu du luxe",
          point2: "Perfection artisanale",
          point3: "Symbole de statut ultime"
        },
        bentley: {
          title: "Bentley",
          point1: "La performance rencontre le luxe",
          point2: "Héritage de course",
          point3: "Expérience centrée sur le conducteur"
        }
      },
      summary: {
        rollsRoyce: {
          tagline: "Le summum de l'excellence automobile"
        },
        bentley: {
          tagline: "Performance extraordinaire dans un luxe sans compromis"
        }
      },
      detailed: {
        comparison: "Comparaison",
        rollsRoyce: "Rolls-Royce",
        bentley: "Bentley"
      },
      modelComparison: {
        title: "Comparaison modèle par modèle"
      },
      choice: {
        title: "Faire votre choix",
        rollsRoyce: {
          title: "Choisissez Rolls-Royce si :",
          point1: "Vous voulez le summum absolu du luxe",
          point2: "Le statut et le prestige sont primordiaux",
          point3: "Vous préférez être conduit plutôt que conduire",
          point4: "Vous appréciez l'artisanat traditionnel",
          point5: "Le budget n'est pas une préoccupation principale"
        },
        bentley: {
          title: "Choisissez Bentley si :",
          point1: "Vous aimez les performances de conduite",
          point2: "Vous voulez du luxe avec un flair sportif",
          point3: "L'héritage de course vous séduit",
          point4: "Vous préférez des prix plus accessibles",
          point5: "Vous aimez l'interprétation moderne du luxe"
        }
      },
      verdict: {
        title: "Le verdict",
        p1: "Les deux Rolls-Royce et Bentley représentent la perfection absolue de la voiture de luxe, mais ils attirent des sensibilités différentes. Rolls-Royce est le choix ultime pour ceux qui valorisent la luxueuse absolue, le confort sans compromis et le statut suprême. C'est pour ceux qui apprécient d'être conduits dans l'opulence sans compromis.",
        p2: "Bentley, d'autre part, offre un mélange parfait de luxe et de performance pour ceux qui ne veulent pas choisir entre confort et excitation de conduite. Avec son héritage de course et son prix plus accessible, Bentley attire les amateurs de luxe qui veulent vivre l'excitation de la conduite tout en appréciant le confort exceptionnel et la maîtrise."
      },
      related: {
        title: "Comparaisons liées",
        mercedes: {
          title: "Rolls-Royce contre Mercedes-Maybach",
          subtitle: "L'élégance britannique rencontre la précision allemande"
        },
        comingSoon: "À venir"
      }
    }
  },
  zh: {
    compare: {
      aspects: {
        overview: { name: "概览" },
        luxury: { name: "奢华与舒适" },
        performance: { name: "性能" },
        technology: { name: "技术" },
        heritage: { name: "传承与品牌" },
        price: { name: "价格与价值" }
      },
      overview: {
        rollsRoyce: {
          title: "奢华的巅峰",
          summary: "劳斯莱斯代表汽车奢华的绝对巅峰，在追求完美的过程中不做任何妥协。"
        },
        bentley: {
          title: "性能奢华",
          summary: "宾利提供奢华与性能的独特结合，吸引那些既想驾驶又想被驾驶的人。"
        }
      },
      luxury: {
        rollsRoyce: {
          title: "无与伦比的奢华",
          summary: "每一辆劳斯莱斯都是工艺的杰作，对细节的关注近乎痴迷。"
        },
        bentley: {
          title: "当代奢华",
          summary: "宾利将传统工艺与现代奢华相结合，创造出既奢华又具运动感的环境。"
        }
      },
      performance: {
        rollsRoyce: {
          title: "轻松动力",
          summary: "劳斯莱斯优先考虑平稳、轻松的动力输出而非运动性能，创造宁静的驾驶体验。"
        },
        bentley: {
          title: "令人兴奋的性能",
          summary: "宾利提供包裹在奢华中的超跑性能，吸引拒绝妥协的爱好者。"
        }
      },
      technology: {
        rollsRoyce: {
          title: "隐形技术",
          summary: "劳斯莱斯无缝集成尖端技术，保持经典、简洁的美学。"
        },
        bentley: {
          title: "现代创新",
          summary: "宾利更开放地拥抱现代技术，提供传统奢华与当代创新的融合。"
        }
      },
      heritage: {
        rollsRoyce: {
          title: "120年的卓越",
          summary: "劳斯莱斯在一个多世纪中保持其作为终极奢华汽车制造商的地位。"
        },
        bentley: {
          title: "赛车血统",
          summary: "宾利的赛车传承为每个车型注入运动精神，使其与纯奢华品牌区别开来。"
        }
      },
      price: {
        rollsRoyce: {
          title: "终极投资",
          summary: "劳斯莱斯要求的高端价格反映了其作为终极奢华汽车的地位。"
        },
        bentley: {
          title: "可及的超奢华",
          summary: "宾利为超奢华细分市场提供更容易进入的途径，同时保持独特性。"
        }
      },
      models: {
        phantom: {
          rollsRoyce: {
            model: "幻影",
            price: "5,800迪拉姆/天",
            type: "超奢华轿车"
          },
          bentley: {
            model: "慕尚",
            price: "4,200迪拉姆/天",
            type: "奢华轿车"
          }
        },
        ghost: {
          rollsRoyce: {
            model: "古思特",
            price: "4,800迪拉姆/天",
            type: "奢华轿车"
          },
          bentley: {
            model: "飞驰",
            price: "3,500迪拉姆/天",
            type: "运动轿车"
          }
        },
        cullinan: {
          rollsRoyce: {
            model: "库里南",
            price: "6,500迪拉姆/天",
            type: "超奢华SUV"
          },
          bentley: {
            model: "添越",
            price: "4,800迪拉姆/天",
            type: "奢华SUV"
          }
        }
      },
      rental: {
        rollsRoyce: {
          title: "劳斯莱斯租赁",
          daily: "3,500+迪拉姆",
          weekly: "21,000+迪拉姆",
          monthly: "75,000+迪拉姆"
        },
        bentley: {
          title: "宾利租赁",
          daily: "2,800+迪拉姆",
          weekly: "16,000+迪拉姆",
          monthly: "55,000+迪拉姆"
        },
        title: "租赁价格比较",
        dailyRate: "日租金",
        weeklyRate: "周租金",
        monthlyRate: "月租金",
        whyChooseRollsRoyce: "为什么选择劳斯莱斯？",
        whyChooseBentley: "为什么选择宾利？",
        bookRollsRoyce: "预订劳斯莱斯",
        inquireBentley: "咨询宾利"
      },
      hero: {
        title: {
          rollsRoyce: "劳斯莱斯",
          vs: "对比",
          bentley: "宾利"
        },
        subtitle: "迪拜终极奢华汽车比较",
        bentleyAlt: "迪拜宾利奢华汽车"
      },
      quickSummary: {
        rollsRoyce: {
          title: "劳斯莱斯",
          point1: "奢华的绝对巅峰",
          point2: "手工完美制作",
          point3: "终极身份象征"
        },
        bentley: {
          title: "宾利",
          point1: "性能遇见奢华",
          point2: "赛车传承",
          point3: "以驾驶者为中心的体验"
        }
      },
      summary: {
        rollsRoyce: {
          tagline: "汽车卓越的巅峰"
        },
        bentley: {
          tagline: "不妥协奢华中的非凡性能"
        }
      },
      detailed: {
        comparison: "比较",
        rollsRoyce: "劳斯莱斯",
        bentley: "宾利"
      },
      modelComparison: {
        title: "车型对车型比较"
      },
      choice: {
        title: "做出您的选择",
        rollsRoyce: {
          title: "选择劳斯莱斯如果：",
          point1: "您想要奢华的绝对巅峰",
          point2: "地位和声望至关重要",
          point3: "您更喜欢被驾驶而不是驾驶",
          point4: "您欣赏传统工艺",
          point5: "预算不是主要考虑"
        },
        bentley: {
          title: "选择宾利如果：",
          point1: "您享受驾驶性能",
          point2: "您想要具有运动感的奢华",
          point3: "赛车传承吸引您",
          point4: "您偏好更容易接受的价格",
          point5: "您喜欢现代奢华诠释"
        }
      },
      verdict: {
        title: "最终判断",
        p1: "劳斯莱斯和宾利都代表了汽车奢华的绝对巅峰，但它们吸引不同的感官。劳斯莱斯是那些重视绝对奢华、无妥协舒适和至高无上地位的人的最终选择。这是那些欣赏在无妥协奢华中驾驶的人的选择。",
        p2: "另一方面，宾利为那些不想在舒适和驾驶兴奋之间做出选择的人提供了奢华和性能的完美结合。凭借其赛车传承和更容易接受的价格，宾利吸引了那些想要体验驾驶刺激同时享受卓越舒适和工艺的奢华爱好者。",
        exploreFleet: "探索我们的车队",
        bookExperience: "预订您的体验"
      },
      related: {
        title: "相关比较",
        mercedes: {
          title: "劳斯莱斯对比奔驰迈巴赫",
          subtitle: "英式优雅遇见德式精准"
        },
        comingSoon: "即将推出"
      }
    }
  },
  hi: {
    compare: {
      aspects: {
        overview: { name: "अवलोकन" },
        luxury: { name: "लक्जरी और आराम" },
        performance: { name: "प्रदर्शन" },
        technology: { name: "तकनीक" },
        heritage: { name: "विरासत और ब्रांड" },
        price: { name: "कीमत और मूल्य" }
      },
      overview: {
        rollsRoyce: {
          title: "लक्जरी का शिखर",
          summary: "रोल्स-रॉयस ऑटोमोटिव लक्जरी के पूर्ण शिखर का प्रतिनिधित्व करता है, जहां पूर्णता की खोज में कोई समझौता नहीं किया जाता।"
        },
        bentley: {
          title: "प्रदर्शन लक्जरी",
          summary: "बेंटले लक्जरी और प्रदर्शन का अनूठा मिश्रण प्रदान करता है, उन लोगों को आकर्षित करता है जो ड्राइव करना चाहते हैं और ड्राइव किए जाना भी चाहते हैं।"
        }
      },
      luxury: {
        rollsRoyce: {
          title: "अतुलनीय भव्यता",
          summary: "हर रोल्स-रॉयस शिल्पकारी की एक कृति है, विवरणों पर ध्यान के साथ जो जुनून की सीमा पर है।"
        },
        bentley: {
          title: "समकालीन लक्जरी",
          summary: "बेंटले पारंपरिक शिल्पकारी को आधुनिक लक्जरी के साथ जोड़ता है, एक ऐसा माहौल बनाता है जो भव्य और खेल दोनों है।"
        }
      },
      performance: {
        rollsRoyce: {
          title: "सहज शक्ति",
          summary: "रोल्स-रॉयस खेल प्रदर्शन पर चिकनी, सहज शक्ति वितरण को प्राथमिकता देता है, एक शांत ड्राइविंग अनुभव बनाता है।"
        },
        bentley: {
          title: "रोमांचक प्रदर्शन",
          summary: "बेंटले लक्जरी में लिपटे सुपरकार प्रदर्शन प्रदान करता है, उत्साही लोगों को आकर्षित करता है जो समझौता करने से इनकार करते हैं।"
        }
      },
      technology: {
        rollsRoyce: {
          title: "अदृश्य तकनीक",
          summary: "रोल्स-रॉयस अत्याधुनिक तकनीक को निर्बाध रूप से एकीकृत करता है, एक क्लासिक, बिना भरी हुई सौंदर्य बनाए रखता है।"
        },
        bentley: {
          title: "आधुनिक नवाचार",
          summary: "बेंटले आधुनिक तकनीक को अधिक खुले तौर पर अपनाता है, पारंपरिक लक्जरी और समकालीन नवाचार का मिश्रण प्रदान करता है।"
        }
      },
      heritage: {
        rollsRoyce: {
          title: "120 साल की उत्कृष्टता",
          summary: "रोल्स-रॉयस ने एक सदी से अधिक समय तक अंतिम लक्जरी कार निर्माता के रूप में अपनी स्थिति बनाए रखी है।"
        },
        bentley: {
          title: "रेसिंग वंशावली",
          summary: "बेंटले की रेसिंग विरासत हर मॉडल को एक खेल भावना के साथ भरती है जो इसे शुद्ध लक्जरी ब्रांडों से अलग करती है।"
        }
      },
      price: {
        rollsRoyce: {
          title: "अंतिम निवेश",
          summary: "रोल्स-रॉयस प्रीमियम कीमतों की मांग करता है जो अंतिम लक्जरी ऑटोमोबाइल के रूप में इसकी स्थिति को दर्शाती है।"
        },
        bentley: {
          title: "पहुंच योग्य अल्ट्रा-लक्जरी",
          summary: "बेंटले अल्ट्रा-लक्जरी खंड में अधिक पहुंच योग्य प्रवेश प्रदान करता है जबकि विशिष्टता बनाए रखता है।"
        }
      },
      models: {
        phantom: {
          rollsRoyce: {
            model: "फैंटम",
            price: "5,800 दिरहम/दिन",
            type: "अल्ट्रा-लक्जरी सेडान"
          },
          bentley: {
            model: "मुल्सेन",
            price: "4,200 दिरहम/दिन",
            type: "लक्जरी सेडान"
          }
        },
        ghost: {
          rollsRoyce: {
            model: "घोस्ट",
            price: "4,800 दिरहम/दिन",
            type: "लक्जरी सेडान"
          },
          bentley: {
            model: "फ्लाइंग स्पर",
            price: "3,500 दिरहम/दिन",
            type: "स्पोर्ट्स सेडान"
          }
        },
        cullinan: {
          rollsRoyce: {
            model: "कुलिनन",
            price: "6,500 दिरहम/दिन",
            type: "अल्ट्रा-लक्जरी SUV"
          },
          bentley: {
            model: "बेंटायगा",
            price: "4,800 दिरहम/दिन",
            type: "लक्जरी SUV"
          }
        }
      },
      rental: {
        rollsRoyce: {
          title: "रोल्स-रॉयस रेंटल",
          daily: "3,500+ दिरहम",
          weekly: "21,000+ दिरहम",
          monthly: "75,000+ दिरहम"
        },
        bentley: {
          title: "बेंटले रेंटल",
          daily: "2,800+ दिरहम",
          weekly: "16,000+ दिरहम",
          monthly: "55,000+ दिरहम"
        },
        title: "किराया मूल्य तुलना",
        dailyRate: "दैनिक दर",
        weeklyRate: "साप्ताहिक दर",
        monthlyRate: "मासिक दर",
        whyChooseRollsRoyce: "रोल्स-रॉयस क्यों चुनें?",
        whyChooseBentley: "बेंटले क्यों चुनें?",
        bookRollsRoyce: "रोल्स-रॉयस बुक करें",
        inquireBentley: "बेंटले के बारे में पूछताछ करें"
      },
      hero: {
        title: {
          rollsRoyce: "रोल्स-रॉयस",
          vs: "बनाम",
          bentley: "बेंटले"
        },
        subtitle: "दुबई के लिए अंतिम लक्जरी कार तुलना",
        bentleyAlt: "दुबई में बेंटले लक्जरी कार"
      },
      quickSummary: {
        rollsRoyce: {
          title: "रोल्स-रॉयस",
          point1: "लक्जरी का पूर्ण शिखर",
          point2: "हस्तनिर्मित पूर्णता",
          point3: "अंतिम स्टेटस सिंबल"
        },
        bentley: {
          title: "बेंटले",
          point1: "प्रदर्शन लक्जरी से मिलता है",
          point2: "रेसिंग विरासत",
          point3: "ड्राइवर-केंद्रित अनुभव"
        }
      },
      summary: {
        rollsRoyce: {
          tagline: "ऑटोमोटिव उत्कृष्टता का शिखर"
        },
        bentley: {
          tagline: "असामान्य लक्जरी में असाधारण प्रदर्शन"
        }
      },
      detailed: {
        comparison: "तुलना",
        rollsRoyce: "रोल्स-रॉयस",
        bentley: "बेंटले"
      },
      modelComparison: {
        title: "मॉडल-दर-मॉडल तुलना"
      },
      choice: {
        title: "अपनी पसंद बनाना",
        rollsRoyce: {
          title: "रोल्स-रॉयस चुनें यदि:",
          point1: "आप लक्जरी का पूर्ण शिखर चाहते हैं",
          point2: "स्टेटस और प्रतिष्ठा सर्वोपरि है",
          point3: "आप ड्राइविंग पर ड्राइव किए जाने को प्राथमिकता देते हैं",
          point4: "आप पारंपरिक शिल्पकारी की सराहना करते हैं",
          point5: "बजट प्राथमिक चिंता नहीं है"
        },
        bentley: {
          title: "बेंटले चुनें यदि:",
          point1: "आप ड्राइविंग प्रदर्शन का आनंद लेते हैं",
          point2: "आप खेल स्वभाव के साथ लक्जरी चाहते हैं",
          point3: "रेसिंग विरासत आपको आकर्षित करती है",
          point4: "आप अधिक पहुंच योग्य मूल्य निर्धारण पसंद करते हैं",
          point5: "आप लक्जरी की आधुनिक व्याख्या पसंद करते हैं"
        }
      },
      verdict: {
        title: "अंतिम फैसला",
        p1: "كلا الرولز رويس وبنتلي يمثلان القمة المطلقة للفخامة السيارات، لكنهما يجذبان لأفكار مختلفة. يعتبر رولز رويس الاختيار النهائي لمن يقيم الفخامة المطلقة والراحة المتميزة والمكانة الشريرة. هو لمن يقدر الفخامة المطلقة في أي حالة من الأحوال، ويفضل التمتع بالتمتع في أثر لا يصدق.",
        p2: "بنتلي، من ناحية أخرى، يقدم مزيجاً مثالياً من الفخامة والأداء لمن لا يريد الاختيار بين الراحة والتحفيز القيادي. مع تراثه السباقي والأسعار الأكثر إتاحة، يجذب بنتلي المحبين للفخامة الذين يريدون تجربة التحفيز القيادي بينما يستمتعون بالراحة والإبداع المذهل.",
        exploreFleet: "استكشف أسطولنا",
        bookExperience: "احجز تجربتك"
      },
      related: {
        title: "مقارنات ذات صلة",
        mercedes: {
          title: "رولز رویس مقابل مرسیدس مایباخ",
          subtitle: "الأناقة البريطانية تلتقي بالدقة الألمانية"
        },
        comingSoon: "قريباً"
      }
    }
  }
};

/**
 * دمج المفاتيح الجديدة مع الملف الموجود
 */
function mergeTranslations(existingTranslations, newTranslations) {
  const result = { ...existingTranslations };
  
  for (const [key, value] of Object.entries(newTranslations)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result[key] = mergeTranslations(result[key] || {}, value);
    } else {
      result[key] = value;
    }
  }
  
  return result;
}

/**
 * إضافة المفاتيح للغة معينة
 */
function addCompareKeys(language, translations) {
  const commonPath = path.join(__dirname, '..', 'public', 'locales', language, 'common.json');
  
  try {
    let existingTranslations = {};
    if (fs.existsSync(commonPath)) {
      existingTranslations = JSON.parse(fs.readFileSync(commonPath, 'utf8'));
    }
    
    const updatedTranslations = mergeTranslations(existingTranslations, translations);
    
    fs.writeFileSync(commonPath, JSON.stringify(updatedTranslations, null, 2), 'utf8');
    console.log(`✅ تم تحديث ترجمة ${language}`);
    
  } catch (error) {
    console.error(`❌ خطأ في تحديث ${language}:`, error.message);
  }
}

/**
 * التشغيل الرئيسي
 */
console.log('🔧 بدء إصلاح مفاتيح ترجمة صفحة المقارنة...\n');

LANGUAGES.forEach(lang => {
  if (COMPARE_TRANSLATIONS[lang]) {
    addCompareKeys(lang, COMPARE_TRANSLATIONS[lang]);
  }
});

console.log('\n✅ تم إصلاح جميع مفاتيح ترجمة صفحة المقارنة!');
console.log('\n📋 ما تم إضافته:');
console.log('- compare.aspects.* - جوانب المقارنة');
console.log('- compare.overview.* - نظرة عامة على العلامات التجارية');
console.log('- compare.luxury.* - مقارنة الفخامة');
console.log('- compare.performance.* - مقارنة الأداء');
console.log('- compare.technology.* - مقارنة التكنولوجيا');
console.log('- compare.heritage.* - مقارنة التراث');
console.log('- compare.price.* - مقارنة الأسعار');
console.log('- compare.models.* - مقارنة الطرازات');
console.log('- compare.rental.* - مقارنة التأجير');
console.log('- compare.hero.* - قسم البطل');
console.log('- compare.choice.* - توجيهات الاختيار');

console.log('\n🔄 إعادة تشغيل السيرفر مطلوبة لتحميل التغييرات:');
console.log('npm run dev:restart'); 
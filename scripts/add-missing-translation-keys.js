const fs = require('fs');
const path = require('path');

// المفاتيح الجديدة التي يجب إضافتها
const newKeys = {
  cookie: {
    title: {
      ru: "Этот сайт использует файлы cookie",
      zh: "本网站使用Cookie",
      hi: "यह वेबसाइट कुकीज़ का उपयोग करती है"
    },
    description: {
      ru: "Мы используем файлы cookie для улучшения вашего опыта на нашем сайте. Продолжая использовать наш сайт, вы соглашаетесь с использованием файлов cookie",
      zh: "我们使用Cookie来改善您在我们网站上的体验。继续使用我们的网站，即表示您同意我们使用Cookie",
      hi: "हम अपनी साइट पर आपके अनुभव को बेहतर बनाने के लिए कुकीज़ का उपयोग करते हैं। हमारी साइट का उपयोग जारी रखकर, आप कुकीज़ के हमारे उपयोग से सहमत हैं"
    },
    accept: {
      ru: "ПРИНЯТЬ",
      zh: "接受",
      hi: "स्वीकार करें"
    },
    decline: {
      ru: "Отклонить",
      zh: "拒绝",
      hi: "अस्वीकार करें"
    }
  },
  voiceSearch: {
    button: {
      ru: "Голосовой поиск",
      zh: "语音搜索",
      hi: "वॉयस सर्च"
    },
    listening: {
      ru: "Слушаю...",
      zh: "正在听...",
      hi: "सुन रहे हैं..."
    },
    speak: {
      ru: "Говорите сейчас",
      zh: "现在说话",
      hi: "अब बोलें"
    }
  },
  offers: {
    weekend: {
      title: {
        ru: "Выходные предложения",
        zh: "周末特惠",
        hi: "सप्ताहांत विशेष"
      },
      discount: {
        ru: "Скидка 20%",
        zh: "20%折扣",
        hi: "20% छूट"
      },
      description: {
        ru: "Забронируйте на выходные и получите скидку 20%",
        zh: "预订周末，享受20%折扣",
        hi: "सप्ताहांत के लिए बुक करें और 20% छूट पाएं"
      }
    },
    firstTime: {
      title: {
        ru: "Новый клиент",
        zh: "首次客户",
        hi: "पहली बार ग्राहक"
      },
      discount: {
        ru: "Скидка 15%",
        zh: "15%折扣",
        hi: "15% छूट"
      },
      description: {
        ru: "Специальная скидка для новых клиентов",
        zh: "新客户特别折扣",
        hi: "नए ग्राहकों के लिए विशेष छूट"
      }
    },
    monthly: {
      title: {
        ru: "Месячная аренда",
        zh: "月租",
        hi: "मासिक किराया"
      },
      discount: {
        ru: "Скидка 30%",
        zh: "30%折扣",
        hi: "30% छूट"
      },
      description: {
        ru: "Большая экономия на месячной аренде",
        zh: "月租享受大幅优惠",
        hi: "मासिक किराए पर बड़ी बचत"
      }
    },
    chauffeur: {
      title: {
        ru: "Бесплатный водитель",
        zh: "免费司机",
        hi: "मुफ्त चालक"
      },
      discount: {
        ru: "Бесплатный водитель",
        zh: "免费司机",
        hi: "मुफ्त ड्राइवर"
      },
      description: {
        ru: "Получите бесплатного водителя при бронировании от 3 дней",
        zh: "预订3天或以上可获得免费司机",
        hi: "3+ दिनों की बुकिंग के साथ मुफ्त चालक पाएं"
      }
    }
  },
  socialProof: {
    booking: {
      someone: {
        ru: "Кто-то только что забронировал",
        zh: "有人刚刚预订了",
        hi: "किसी ने अभी बुक किया"
      },
      luxury: {
        ru: "Люксовый пакет забронирован на",
        zh: "豪华套餐已预订",
        hi: "लक्जरी पैकेज बुक किया गया"
      },
      vip: {
        ru: "VIP-клиент забронировал",
        zh: "VIP客户预订了",
        hi: "VIP ग्राहक ने आरक्षित किया"
      }
    },
    view: {
      people: {
        ru: "{{count}} человек просматривают",
        zh: "{{count}}人正在查看",
        hi: "{{count}} लोग देख रहे हैं"
      },
      viewing: {
        ru: "{{count}} человек смотрят",
        zh: "{{count}}人正在浏览",
        hi: "{{count}} लोग देख रहे हैं"
      }
    },
    inquiry: {
      new: {
        ru: "Новый запрос получен для",
        zh: "收到新询价",
        hi: "नई पूछताछ प्राप्त हुई"
      },
      corporate: {
        ru: "Корпоративный запрос на",
        zh: "企业询价",
        hi: "कॉर्पोरेट पूछताछ"
      }
    },
    review: {
      leftReview: {
        ru: "{{name}} оставил 5-звездочный отзыв о",
        zh: "{{name}}给了5星评价",
        hi: "{{name}} ने 5-स्टार समीक्षा दी"
      }
    },
    cars: {
      phantom: {
        ru: "Rolls-Royce Phantom",
        zh: "劳斯莱斯幻影",
        hi: "रोल्स-रॉयस फैंटम"
      },
      ghost: {
        ru: "Rolls-Royce Ghost",
        zh: "劳斯莱斯古思特",
        hi: "रोल्स-रॉयस घोस्ट"
      },
      cullinan: {
        ru: "Rolls-Royce Cullinan",
        zh: "劳斯莱斯库里南",
        hi: "रोल्स-रॉयस कलिनन"
      },
      dawn: {
        ru: "Rolls-Royce Dawn",
        zh: "劳斯莱斯曜影",
        hi: "रोल्स-रॉयस डॉन"
      },
      wraith: {
        ru: "Rolls-Royce Wraith",
        zh: "劳斯莱斯魅影",
        hi: "रोल्स-रॉयस रेथ"
      },
      weddingPackage: {
        ru: "Свадебный пакет",
        zh: "婚礼套餐",
        hi: "शादी पैकेज"
      },
      specialOffers: {
        ru: "Специальные предложения",
        zh: "特别优惠",
        hi: "विशेष ऑफर"
      },
      fleetRental: {
        ru: "Аренда автопарка",
        zh: "车队租赁",
        hi: "फ्लीट किराया"
      }
    },
    locations: {
      businessBay: {
        ru: "Бизнес-Бэй, Дубай",
        zh: "迪拜商业湾",
        hi: "बिजनेस बे, दुबई"
      },
      dubaiMarina: {
        ru: "Дубай Марина",
        zh: "迪拜码头",
        hi: "दुबई मरीना"
      },
      jumeirah: {
        ru: "Джумейра, Дубай",
        zh: "朱美拉, 迪拜",
        hi: "जुमेराह, दुबई"
      },
      downtown: {
        ru: "Даунтаун Дубай",
        zh: "迪拜市中心",
        hi: "डाउनटाउन दुबई"
      },
      palmJumeirah: {
        ru: "Палм-Джумейра",
        zh: "朱美拉棕榈岛",
        hi: "पाम जुमेराह"
      },
      difc: {
        ru: "DIFC, Дубай",
        zh: "迪拜国际金融中心",
        hi: "DIFC, दुबई"
      },
      abuDhabi: {
        ru: "Абу-Даби",
        zh: "阿布扎比",
        hi: "अबू धाबी"
      },
      uae: {
        ru: "ОАЭ",
        zh: "阿联酋",
        hi: "यूएई"
      }
    },
    time: {
      minutesAgo: {
        ru: "{{count}} минут назад",
        zh: "{{count}}分钟前",
        hi: "{{count}} मिनट पहले"
      },
      justNow: {
        ru: "Только что",
        zh: "刚刚",
        hi: "अभी-अभी"
      },
      rightNow: {
        ru: "Прямо сейчас",
        zh: "现在",
        hi: "अभी"
      },
      days: {
        ru: "{{count}} дней",
        zh: "{{count}}天",
        hi: "{{count}} दिन"
      }
    }
  }
};

// اللغات المستهدفة
const languages = ['ru', 'zh', 'hi'];

languages.forEach(lang => {
  const filePath = path.join(__dirname, '..', 'public', 'locales', lang, 'common.json');
  
  try {
    // قراءة الملف الموجود
    const existingContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(existingContent);
    
    // إضافة المفاتيح الجديدة
    Object.keys(newKeys).forEach(section => {
      if (!data[section]) {
        data[section] = {};
      }
      
      Object.keys(newKeys[section]).forEach(key => {
        if (section === 'socialProof') {
          // معالجة خاصة لـ socialProof لأنه متداخل أكثر
          if (!data[section][key]) {
            data[section][key] = {};
          }
          Object.keys(newKeys[section][key]).forEach(subKey => {
            data[section][key][subKey] = newKeys[section][key][subKey][lang];
          });
        } else if (section === 'offers') {
          // معالجة خاصة لـ offers
          if (!data[section][key]) {
            data[section][key] = {};
          }
          Object.keys(newKeys[section][key]).forEach(subKey => {
            data[section][key][subKey] = newKeys[section][key][subKey][lang];
          });
        } else {
          // للأقسام الأخرى
          data[section][key] = newKeys[section][key][lang];
        }
      });
    });
    
    // كتابة الملف المحدث
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Updated ${lang}/common.json successfully`);
    
  } catch (error) {
    console.error(`❌ Error updating ${lang}/common.json:`, error);
  }
});

console.log('\n✨ Translation keys synchronization completed!');
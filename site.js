/* ============================================================
   site.js — Hind Ali master brand
   Handles: i18n (EN / BM / AR), mobile nav, WhatsApp CTAs
   ============================================================ */

/* ── 1. TRANSLATIONS ─────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
     quoteKicker: "Private, not generic",
quoteTitle: "One trusted name. Three meaningful offers.",
quoteCopy: "Instead of feeling like three separate websites, the new experience presents Hind Ali as one premium personal brand with distinct pathways for travel, learning, and hospitality.",
quoteSource: "Designed as the main destination for hindali.my",
    skipLink: "Skip to content",
    brandTitle: "Hind Ali",
    brandSubtitle: "Travel · Quran · Food",
    menuToggle: "Menu",
    navHome: "Home",
    navTravel: "Travel",
    navQuran: "Quran",
    navFood: "Food",
    navWhatsapp: "WhatsApp",

    pageTitle: "Hind Ali | Premium Travel, Quran, and Food in One Private Brand",
    pageDescription: "Discover hindali.my, the new master brand for private travel in Malaysia, premium Quran tutoring, and refined homemade Arab and Yemeni food.",

    heroEyebrow: "Based in Malaysia",
    heroTitle: 'Three services. One person. <span class="accent">Hind Ali.</span>',
    heroCopy:
      "Private travel guiding for Arabic-speaking visitors, one-to-one Quran tutoring with a native Yemeni teacher, and homemade Arab food for gatherings and gifting — all reached through a single WhatsApp conversation.",
    heroPrimary: "Send a message",
    heroSecondary: "See the services",

    heroStat1Value: "Arabic",
    heroStat1Label: "native speaker, born in Yemen",
    heroStat2Value: "KL-based",
    heroStat2Label: "serving families across Malaysia",
    heroStat3Value: "Direct",
    heroStat3Label: "no middlemen, no booking apps",

    aboutKicker: "About Hind Ali",
    aboutTitle: "Yemeni roots. A life built in Malaysia.",
    aboutCopy:
      "Hind has lived in Kuala Lumpur long enough to know exactly where to take a family, how to teach a nervous student, and what makes a meal feel like home. Everything she offers comes from that same personal knowledge — not a course, not a franchise.",
    aboutContact: "Reach her directly — no agencies, no waiting lists.",

    heroQuote: "I do three things and I do them properly. That has always been enough.",
    heroQuoteSource: "— Hind Ali",

    servicesEyebrow: "The Three Services",
    servicesTitle: "Pick the one that fits your need right now.",
    servicesCopy:
      "Each service has its own page with full details, pricing context, and a direct WhatsApp button. Start there, or message Hind directly if you are not sure which fits.",

    feelEyebrow: "What to Expect",
    feelTitle: "What each service actually feels like.",
    feelCopy: "Not marketing language — honest descriptions of what happens when you book each one.",

    feelTravelLabel: "Travel",
    feelTravelTitle: "You arrive without a plan. You leave knowing Malaysia properly.",
    feelTravelCopy: "Hind handles the route, the timings, the food stops, and the Arabic communication. You focus on your family. No group tours, no rushing, no places that don't suit you.",
    feelTravelCta: "See travel details",

    feelQuranLabel: "Quran",
    feelQuranTitle: "From uncertain recitation to reading with real confidence.",
    feelQuranCopy: "Sessions are built around your current level. Children build the foundation early. Adults correct years of habit. Hind teaches in Arabic, English, or Malay — whichever lands better.",
    feelQuranCta: "See class details",

    feelFoodLabel: "Food",
    feelFoodTitle: "Cooked the morning of. Guests always ask who made it.",
    feelFoodCopy: "The rice, the sauces, the bread — all made fresh by Hind. No catering company. No reheated trays. Just home cooking that makes a gathering feel like a proper occasion.",
    feelFoodCta: "See the menu",

    cardTravelLabel: "Private Travel",
    cardTravelTitle: "Hind Travel",
    cardTravelCopy: "Arabic-speaking private guide for families and solo visitors exploring Malaysia. Custom routes, halal food stops, and pacing that actually suits your group.",
    cardTravelCta: "Travel details",

    cardQuranLabel: "Quran Classes",
    cardQuranTitle: "Hind Qalam",
    cardQuranCopy: "One-to-one Quran lessons with a native Arabic teacher from Yemen. Structured sessions for children, teenagers, and adults at any level.",
    cardQuranCta: "Class details",

    cardFoodLabel: "Homemade Food",
    cardFoodTitle: "Hind Food",
    cardFoodCopy: "Arab and Yemeni home cooking made fresh for your event, family gathering, or gifting. Orders for up to 50 pax — all made by Hind herself.",
    cardFoodCta: "Menu and ordering",

    trustEyebrow: "Why This Brand Works",
    trustTitle: "Luxury here means personal care, not distance.",
    trustCopy: "The reference sites inspired the editorial polish and exclusivity, but the core of hindali.my is still human: direct contact, thoughtful service, and a calm sense of trust.",
    trust1Title: "One face, one voice",
    trust1Copy: "The site keeps Hind Ali visible as the central personal brand so enquiries feel direct and trustworthy from the first click.",
    trust2Title: "High-trust positioning",
    trust2Copy: "Every page uses premium visual hierarchy, concise messaging, and inquiry-led flows instead of cluttered marketplace mechanics.",
    trust3Title: "Clear service separation",
    trust3Copy: "Travel, Quran, and food are distinct enough to understand immediately, while still feeling part of one elegant ecosystem.",
    trust4Title: "Built for direct conversion",
    trust4Copy: "All main actions point to structured WhatsApp conversations with service-specific message templates.",

    previewEyebrow: "What Each Path Feels Like",
    previewTitle: "Three different journeys, one consistent standard.",
    previewCopy: "The homepage previews the tone of each service so guests can decide quickly where they belong before opening the deeper dedicated page.",
    previewTravelLabel: "Travel Preview",
    previewTravelTitle: "Private routes through Malaysia, with calmer planning and Arabic-friendly communication.",
    previewTravelCopy: "From Kuala Lumpur icons to nature, halal-aware food stops, and custom family pacing, Hind Travel is positioned like a discreet concierge service rather than a mass tour listing.",
    previewTravelCta: "Open travel page",
    previewQuranLabel: "Quran Preview",
    previewQuranTitle: "Structured private Quran classes with warmth, discipline, and native Arabic guidance.",
    previewQuranCopy: "The Quran pathway centers on credibility, progress, and clear class structure, making it suitable both for families and serious adult learners.",
    previewQuranCta: "Open Quran page",
    previewFoodLabel: "Food Preview",
    previewFoodTitle: "Homemade Arab and Yemeni cooking for intimate gatherings, gifting, and small events.",
    previewFoodCopy: "The food experience stays warm and inviting, but is elevated with premium presentation, curated menu categories, and a refined ordering flow.",
    previewFoodCta: "Open food page",

    processEyebrow: "How Enquiries Work",
    processTitle: "Simple steps, premium clarity.",
    processCopy: "The new master brand keeps the journey short. People discover the right service, understand the offer fast, and move into a direct WhatsApp conversation with context already prepared.",
    process1Title: "Choose the right pathway",
    process1Copy: "Start from the homepage or go directly into Travel, Quran, or Food depending on the kind of enquiry.",
    process2Title: "Read only what matters",
    process2Copy: "Each page presents the offer through editorial blocks, concise service details, and decision-ready information.",
    process3Title: "Open WhatsApp with context",
    process3Copy: "The main buttons generate service-specific messages so the conversation starts clearly and efficiently.",

    liveEyebrow: "Live Service Sites",
    liveTitle: "The three live domains are ready and easy to open.",
    liveCopy: "hindali.my acts as the premium umbrella experience, while each live site remains open for guests who already know whether they want Travel, Quran, or Food.",
    liveTravelTitle: "Open Hind Travel",
    liveTravelCopy: "Go straight to the live travel site for Malaysia destination inspiration and private route planning.",
    liveTravelBtn: "Open hindtravel.my",
    liveQuranTitle: "Open Hind Qalam",
    liveQuranCopy: "Go straight to the live Quran site for teaching details, pricing, and private class enquiries.",
    liveQuranBtn: "Open hindqalam.my",
    liveFoodTitle: "Open Hind Food",
    liveFoodCopy: "Go straight to the live food site for homemade Arab and Yemeni menu inspiration and direct order enquiries.",
    liveFoodBtn: "Open eatmyfood.my",

    ctaEyebrow: "Ready when you are",
    ctaTitle: "One message is all it takes.",
    ctaCopy: "Whether you know exactly which service you want or you just have a question — Hind reads and replies to every message personally.",

    footerTitle: "Private services in Malaysia — travel, Quran, and home cooking.",
    footerCopy: "Everything runs through Hind directly. No agencies, no platforms, no automated replies. Each enquiry is handled personally.",
    footerLiveSitesTitle: "Live service sites",
    footerLiveSitesCopy: "You can still open each live domain directly if you already know the service you want.",
    footerVisitTravel: "Visit hindtravel.my",
    footerVisitQuran: "Visit hindqalam.my",
    footerVisitFood: "Visit eatmyfood.my",
    footerPrimaryDomain: "Primary domain: hindali.my",
    footerCopyright: "© 2026 Hind Ali. Premium personal services in Malaysia.",
    floatingCta: "Message Hind Ali",

    enquireTravel: "Enquire about Travel",
    enquireQuran: "Enquire about Quran",
    enquireFood: "Enquire about Food",
  },

  /* ── BAHASA MALAYSIA ──────────────────────────────────── */
  bm: {
    skipLink: "Langkau ke kandungan",
    brandTitle: "Hind Ali",
    brandSubtitle: "Pelancongan, Quran, dan Makanan",
    menuToggle: "Menu",
    navHome: "Utama",
    navTravel: "Pelancongan",
    navQuran: "Quran",
    navFood: "Makanan",
    navWhatsapp: "WhatsApp",

    pageTitle: "Hind Ali | Pelancongan, Quran, dan Makanan Premium dalam Satu Jenama Peribadi",
    pageDescription: "Temui hindali.my, jenama utama baharu untuk pelancongan peribadi di Malaysia, pengajaran Quran premium, dan makanan Arab dan Yemeni buatan tangan yang halus.",

    heroEyebrow: "Jenama Utama",
    heroTitle: 'Dunia peribadi yang dibentuk oleh <span class="accent">Hind Ali</span>.',
    heroCopy:
      "hindali.my menyatukan tiga perkhidmatan utama di bawah satu identiti yang halus: panduan pelancongan persendirian di Malaysia, kelas Quran satu-ke-satu, dan makanan buatan tangan Arab dan Yemeni untuk majlis kecil.",
    heroPrimary: "Mulakan pertanyaan peribadi",
    heroSecondary: "Terokai tiga perkhidmatan",

    heroStat1Value: "3",
    heroStat1Label: "tiang perkhidmatan utama",
    heroStat2Value: "AR · EN · BM",
    heroStat2Label: "komunikasi jelas merentasi audiens",
    heroStat3Value: "Terus",
    heroStat3Label: "perkhidmatan peribadi melalui WhatsApp",

    quoteKicker: "Peribadi, bukan generik",
    quoteTitle: "Satu nama dipercayai. Tiga tawaran bermakna.",
    quoteCopy:
      "Berbanding tiga laman berasingan, pengalaman baharu ini mempersembahkan Hind Ali sebagai satu jenama peribadi premium dengan laluan tersendiri untuk pelancongan, pembelajaran, dan hospitaliti.",
    quoteSource: "Direka sebagai destinasi utama hindali.my",

    servicesEyebrow: "Tiga Tiang Utama",
    servicesTitle: "Pilih dunia yang ingin anda masuki dahulu.",
    servicesCopy:
      "Setiap perkhidmatan mengekalkan perwatakannya sendiri, tetapi ketiga-tiganya kini berada dalam satu jenama utama yang halus untuk kejelasan, kepercayaan, dan pertanyaan bernilai tinggi.",

    cardTravelLabel: "Pelancongan Peribadi",
    cardTravelTitle: "Hind Travel",
    cardTravelCopy:
      "Panduan peribadi mesra Arab di Malaysia, inspirasi destinasi, dan itinerari khas untuk keluarga dan tetamu antarabangsa.",
    cardTravelCta: "Terokai pelancongan",

    cardQuranLabel: "Pembelajaran Peribadi",
    cardQuranTitle: "Hind Qalam",
    cardQuranCopy:
      "Kelas Quran peribadi bersama guru Arab asli dari Yaman, direka untuk kanak-kanak, remaja, dan dewasa.",
    cardQuranCta: "Terokai kelas Quran",

    cardFoodLabel: "Hospitaliti Buatan Sendiri",
    cardFoodTitle: "Hind Food",
    cardFoodCopy:
      "Masakan Arab dan Yemeni buatan tangan yang hangat, roti, dan bakeri untuk acara keluarga kecil, hadiah, dan majlis sehingga 50 orang.",
    cardFoodCta: "Terokai pesanan makanan",

    trustEyebrow: "Mengapa Jenama Ini Berkesan",
    trustTitle: "Mewah di sini bermaksud penjagaan peribadi, bukan jarak.",
    trustCopy:
      "Laman rujukan mengilhami kemasan editorial dan eksklusiviti, tetapi teras hindali.my tetap manusiawi: hubungan terus, perkhidmatan penuh perhatian, dan rasa kepercayaan yang tenang.",
    trust1Title: "Satu wajah, satu suara",
    trust1Copy:
      "Laman ini mengekalkan Hind Ali sebagai jenama peribadi utama supaya pertanyaan terasa terus dan dipercayai dari klik pertama.",
    trust2Title: "Penentuan posisi berkepercayaan tinggi",
    trust2Copy:
      "Setiap halaman menggunakan hierarki visual premium, mesej ringkas, dan aliran berasaskan pertanyaan.",
    trust3Title: "Pengasingan perkhidmatan yang jelas",
    trust3Copy:
      "Pelancongan, Quran, dan makanan cukup berbeza untuk difahami serta-merta, sambil tetap terasa sebahagian daripada satu ekosistem yang elegan.",
    trust4Title: "Dibina untuk penukaran terus",
    trust4Copy:
      "Semua tindakan utama menuju perbualan WhatsApp berstruktur dengan templat mesej khusus perkhidmatan.",

    previewEyebrow: "Rasa Setiap Laluan",
    previewTitle: "Tiga perjalanan berbeza, satu standard yang konsisten.",
    previewCopy:
      "Halaman utama mempratonton nada setiap perkhidmatan supaya tetamu boleh memutuskan dengan cepat ke mana mereka hendak pergi.",
    previewTravelLabel: "Pratonton Pelancongan",
    previewTravelTitle: "Laluan peribadi di seluruh Malaysia, dengan perancangan lebih tenang dan komunikasi mesra Arab.",
    previewTravelCopy: "Dari ikon Kuala Lumpur ke alam semula jadi, perhentian makanan halal, dan rentak keluarga khas, Hind Travel diposisikan seperti perkhidmatan concierge diskret.",
    previewTravelCta: "Buka halaman pelancongan",
    previewQuranLabel: "Pratonton Quran",
    previewQuranTitle: "Kelas Quran peribadi berstruktur dengan kehangatan, disiplin, dan bimbingan Arab asli.",
    previewQuranCopy: "Laluan Quran menekankan kredibiliti, kemajuan, dan struktur kelas yang jelas, sesuai untuk keluarga dan pelajar dewasa.",
    previewQuranCta: "Buka halaman Quran",
    previewFoodLabel: "Pratonton Makanan",
    previewFoodTitle: "Masakan Arab dan Yemeni buatan sendiri untuk majlis mesra, hadiah, dan acara kecil.",
    previewFoodCopy: "Pengalaman makanan kekal hangat dan menarik, tetapi ditingkatkan dengan persembahan premium dan aliran pesanan yang halus.",
    previewFoodCta: "Buka halaman makanan",

    processEyebrow: "Cara Pertanyaan Berfungsi",
    processTitle: "Langkah mudah, kejelasan premium.",
    processCopy:
      "Jenama utama baharu ini memendekkan perjalanan. Orang ramai menemui perkhidmatan yang betul, memahami tawaran dengan cepat, dan terus ke perbualan WhatsApp.",
    process1Title: "Pilih laluan yang betul",
    process1Copy: "Mulakan dari halaman utama atau pergi terus ke Pelancongan, Quran, atau Makanan bergantung pada jenis pertanyaan.",
    process2Title: "Baca hanya yang penting",
    process2Copy: "Setiap halaman mempersembahkan tawaran melalui blok editorial, butiran perkhidmatan ringkas, dan maklumat sedia untuk keputusan.",
    process3Title: "Buka WhatsApp dengan konteks",
    process3Copy: "Butang utama menjana mesej khusus perkhidmatan supaya perbualan bermula dengan jelas dan cekap.",

    liveEyebrow: "Laman Perkhidmatan Langsung",
    liveTitle: "Tiga domain langsung sedia dan mudah dibuka.",
    liveCopy: "hindali.my bertindak sebagai pengalaman payung premium, manakala setiap laman langsung kekal terbuka untuk tetamu yang sudah tahu sama ada mereka mahu Pelancongan, Quran, atau Makanan.",
    liveTravelTitle: "Buka Hind Travel",
    liveTravelCopy: "Pergi terus ke laman pelancongan langsung untuk inspirasi destinasi Malaysia dan perancangan laluan peribadi.",
    liveTravelBtn: "Buka hindtravel.my",
    liveQuranTitle: "Buka Hind Qalam",
    liveQuranCopy: "Pergi terus ke laman Quran langsung untuk butiran pengajaran, harga, dan pertanyaan kelas peribadi.",
    liveQuranBtn: "Buka hindqalam.my",
    liveFoodTitle: "Buka Hind Food",
    liveFoodCopy: "Pergi terus ke laman makanan langsung untuk inspirasi menu Arab dan Yemeni buatan sendiri dan pertanyaan pesanan terus.",
    liveFoodBtn: "Buka eatmyfood.my",

    ctaEyebrow: "Mulakan Dengan Hind Ali",
    ctaTitle: "Mulakan dengan satu mesej dan pergi ke perkhidmatan yang betul dari sana.",
    ctaCopy:
      "Gunakan butang pertanyaan umum jika anda masih belum pasti, atau pergi terus ke Pelancongan, Quran, atau Makanan jika keperluan anda sudah jelas.",

    footerTitle: "Dunia peribadi pelancongan, Quran, dan hospitaliti.",
    footerCopy: "Semua urusan dikendalikan terus oleh Hind. Tiada agensi, tiada platform, tiada balasan automatik. Setiap pertanyaan dikendalikan secara peribadi.",
    footerLiveSitesTitle: "Laman perkhidmatan langsung",
    footerLiveSitesCopy: "Anda masih boleh membuka setiap domain langsung secara terus jika anda sudah tahu perkhidmatan yang anda mahu.",
    footerVisitTravel: "Lawati hindtravel.my",
    footerVisitQuran: "Lawati hindqalam.my",
    footerVisitFood: "Lawati eatmyfood.my",
    footerPrimaryDomain: "Domain utama: hindali.my",
    footerCopyright: "© 2026 Hind Ali. Perkhidmatan peribadi premium di Malaysia.",
    floatingCta: "Mesej Hind Ali",

    enquireTravel: "Tanya tentang Pelancongan",
    enquireQuran: "Tanya tentang Quran",
    enquireFood: "Tanya tentang Makanan",
  },

  /* ── ARABIC ───────────────────────────────────────────── */
  ar: {
    skipLink: "تخطى إلى المحتوى",
    brandTitle: "هند علي",
    brandSubtitle: "سفر، قرآن، وطعام",
    menuToggle: "القائمة",
    navHome: "الرئيسية",
    navTravel: "السفر",
    navQuran: "القرآن",
    navFood: "الطعام",
    navWhatsapp: "واتساب",

    pageTitle: "هند علي | سفر، قرآن، وطعام فاخر في علامة تجارية خاصة واحدة",
    pageDescription: "اكتشف hindali.my، العلامة التجارية الرئيسية للسفر الخاص في ماليزيا، وتعليم القرآن المتميز، والطعام العربي واليمني المنزلي الراقي.",

    heroEyebrow: "العلامة التجارية الرئيسية",
    heroTitle: 'عالمٌ خاصٌّ شكّلته <span class="accent">هند علي</span>.',
    heroCopy:
      "يجمع hindali.my ثلاث خدمات مميزة تحت هوية واحدة راقية: إرشاد سياحي خاص في ماليزيا، وتعليم القرآن الكريم فردياً، وطعام عربي ويمني منزلي الصنع للمناسبات الحميمة.",
    heroPrimary: "ابدأ استفساراً خاصاً",
    heroSecondary: "اكتشف الخدمات الثلاث",

    heroStat1Value: "٣",
    heroStat1Label: "ركائز الخدمة الأساسية",
    heroStat2Value: "ع · إن · بم",
    heroStat2Label: "تواصل واضح مع جميع الجماهير",
    heroStat3Value: "مباشر",
    heroStat3Label: "خدمة شخصية عبر واتساب",

    quoteKicker: "خاص، لا عام",
    quoteTitle: "اسمٌ واحد موثوق. ثلاث عروض ذات معنى.",
    quoteCopy:
      "بدلاً من ثلاثة مواقع منفصلة، تقدّم التجربة الجديدة هند علي كعلامة تجارية شخصية متكاملة، بمسارات واضحة للسفر والتعلم والضيافة.",
    quoteSource: "مصمَّم كوجهة رئيسية لـ hindali.my",

    servicesEyebrow: "الركائز الثلاث",
    servicesTitle: "اختر العالم الذي تريد دخوله أولاً.",
    servicesCopy:
      "تحتفظ كل خدمة بشخصيتها الخاصة، لكنها تندرج جميعاً ضمن علامة تجارية رئيسية متكاملة، صُمِّمت للوضوح والثقة والاستفسارات ذات القيمة العالية.",

    cardTravelLabel: "سفر خاص",
    cardTravelTitle: "هند للسفر",
    cardTravelCopy:
      "إرشاد سياحي خاص يناسب المتحدثين بالعربية في ماليزيا، وإلهام للوجهات، وبرامج مُصمَّمة خصيصاً للعائلات والضيوف الدوليين.",
    cardTravelCta: "اكتشف السفر",

    cardQuranLabel: "تعلّم خاص",
    cardQuranTitle: "هند قلم",
    cardQuranCopy:
      "دروس قرآن شخصية مع معلمة عربية أصيلة من اليمن، مُعدَّة للأطفال والمراهقين والبالغين.",
    cardQuranCta: "اكتشف دروس القرآن",

    cardFoodLabel: "ضيافة منزلية",
    cardFoodTitle: "هند للطعام",
    cardFoodCopy:
      "طبخ عربي ويمني منزلي دافئ، وخبز، ومعجنات لمناسبات العائلات الصغيرة والهدايا والتجمعات حتى ٥٠ شخصاً.",
    cardFoodCta: "اكتشف طلب الطعام",

    trustEyebrow: "لماذا تنجح هذه العلامة",
    trustTitle: "الفخامة هنا تعني الاهتمام الشخصي، لا البُعد.",
    trustCopy:
      "استلهمت مواقع الإلهام اللمسة التحريرية والحصرية، لكن جوهر hindali.my يبقى إنسانياً: تواصل مباشر، وخدمة مدروسة، وثقة هادئة.",
    trust1Title: "وجهٌ واحد، صوتٌ واحد",
    trust1Copy:
      "يُبقي الموقع هند علي ظاهرةً بوصفها العلامة الشخصية المركزية لتشعر الاستفسارات بالمباشرة والموثوقية منذ النقرة الأولى.",
    trust2Title: "تموضع عالي الثقة",
    trust2Copy:
      "تستخدم كل صفحة تسلسلاً بصرياً متميزاً، ورسائل موجزة، وتدفقات تعتمد على الاستفسار بدلاً من آليات السوق المزدحمة.",
    trust3Title: "فصلٌ واضح للخدمات",
    trust3Copy:
      "السفر والقرآن والطعام متمايزة بما يكفي للفهم الفوري، مع الانتماء لمنظومة واحدة أنيقة.",
    trust4Title: "مبنيٌّ للتحويل المباشر",
    trust4Copy:
      "تشير جميع الإجراءات الرئيسية إلى محادثات واتساب منظّمة بقوالب رسائل خاصة بكل خدمة.",

    previewEyebrow: "ما يشعر به كل مسار",
    previewTitle: "ثلاث رحلات مختلفة، معيارٌ واحد متسق.",
    previewCopy:
      "تُعاين الصفحة الرئيسية نبرة كل خدمة حتى يتمكن الضيوف من تحديد وجهتهم بسرعة قبل فتح الصفحة المخصصة.",
    previewTravelLabel: "معاينة السفر",
    previewTravelTitle: "مسارات خاصة عبر ماليزيا، بتخطيط أهدأ وتواصل مناسب للمتحدثين بالعربية.",
    previewTravelCopy: "من معالم كوالالمبور إلى الطبيعة ومحطات الطعام الحلال والإيقاع الأسري المُخصَّص، تتموضع هند للسفر كخدمة كونسيرج سرية لا قائمة جولات جماعية.",
    previewTravelCta: "افتح صفحة السفر",
    previewQuranLabel: "معاينة القرآن",
    previewQuranTitle: "دروس قرآن خاصة منظّمة بدفء وانضباط وإرشاد عربي أصيل.",
    previewQuranCopy: "يرتكز مسار القرآن على المصداقية والتقدم وهيكل الدرس الواضح، مما يجعله مناسباً للعائلات والمتعلمين البالغين الجادين.",
    previewQuranCta: "افتح صفحة القرآن",
    previewFoodLabel: "معاينة الطعام",
    previewFoodTitle: "طبخ عربي ويمني منزلي لتجمعات حميمة وهدايا وفعاليات صغيرة.",
    previewFoodCopy: "تبقى تجربة الطعام دافئة وجذابة، مع رُقيٍّ في التقديم وفئات قوائم مختارة وتدفق طلب متقن.",
    previewFoodCta: "افتح صفحة الطعام",

    processEyebrow: "كيف تعمل الاستفسارات",
    processTitle: "خطوات بسيطة، وضوح راقٍ.",
    processCopy:
      "تُقصِّر العلامة التجارية الرئيسية الجديدة رحلة المستخدم. يكتشف الناس الخدمة المناسبة، ويفهمون العرض بسرعة، وينتقلون إلى محادثة واتساب مباشرة مع السياق المُعدّ مسبقاً.",
    process1Title: "اختر المسار الصحيح",
    process1Copy: "ابدأ من الصفحة الرئيسية أو انتقل مباشرة إلى السفر أو القرآن أو الطعام حسب نوع الاستفسار.",
    process2Title: "اقرأ ما يهمك فقط",
    process2Copy: "تقدّم كل صفحة عرضها من خلال كتل تحريرية وتفاصيل خدمة موجزة ومعلومات جاهزة للقرار.",
    process3Title: "افتح واتساب مع السياق",
    process3Copy: "تولّد الأزرار الرئيسية رسائل مخصصة لكل خدمة حتى تبدأ المحادثة بوضوح وكفاءة.",

    liveEyebrow: "مواقع الخدمات المباشرة",
    liveTitle: "النطاقات الثلاثة المباشرة جاهزة وسهلة الفتح.",
    liveCopy: "يعمل hindali.my كتجربة المظلة الفاخرة، بينما يبقى كل موقع مباشر مفتوحاً للضيوف الذين يعرفون ما إذا أرادوا السفر أو القرآن أو الطعام.",
    liveTravelTitle: "افتح هند للسفر",
    liveTravelCopy: "انتقل مباشرة إلى موقع السفر المباشر للحصول على إلهام وجهات ماليزيا وتخطيط المسارات الخاصة.",
    liveTravelBtn: "افتح hindtravel.my",
    liveQuranTitle: "افتح هند قلم",
    liveQuranCopy: "انتقل مباشرة إلى موقع القرآن المباشر للحصول على تفاصيل التدريس والأسعار واستفسارات الصف الخاص.",
    liveQuranBtn: "افتح hindqalam.my",
    liveFoodTitle: "افتح هند للطعام",
    liveFoodCopy: "انتقل مباشرة إلى موقع الطعام المباشر للحصول على إلهام قائمة الطعام العربي واليمني المنزلي واستفسارات الطلب المباشر.",
    liveFoodBtn: "افتح eatmyfood.my",

    ctaEyebrow: "ابدأ مع هند علي",
    ctaTitle: "ابدأ برسالة واحدة وانتقل إلى الخدمة المناسبة من هناك.",
    ctaCopy:
      "استخدم زر الاستفسار العام إن كنت لا تزال تتردد، أو انتقل مباشرة إلى السفر أو القرآن أو الطعام إن كانت حاجتك واضحة.",

    footerTitle: "عالمٌ شخصي من السفر والقرآن والضيافة.",
    footerCopy: "كل شيء يسير مباشرة عبر هند. لا وكالات، لا منصات، لا ردود آلية. كل استفسار يُعالج شخصياً.",
    footerLiveSitesTitle: "مواقع الخدمات المباشرة",
    footerLiveSitesCopy: "لا يزال بإمكانك فتح كل نطاق مباشر مباشرةً إذا كنت تعرف بالفعل الخدمة التي تريدها.",
    footerVisitTravel: "زيارة hindtravel.my",
    footerVisitQuran: "زيارة hindqalam.my",
    footerVisitFood: "زيارة eatmyfood.my",
    footerPrimaryDomain: "النطاق الرئيسي: hindali.my",
    footerCopyright: "© 2026 هند علي. خدمات شخصية متميزة في ماليزيا.",
    floatingCta: "راسل هند علي",

    enquireTravel: "استفسر عن السفر",
    enquireQuran: "استفسر عن القرآن",
    enquireFood: "استفسر عن الطعام",
  },
};

/* ── 2. WHATSAPP MESSAGE TEMPLATES ───────────────────────── */
const WA_MESSAGES = {
  en: {
    general:
      "Hello Hind Ali! I would like to make a private enquiry. Could you please help me?",
    travel:
      "Hello Hind Ali! I am interested in private travel services in Malaysia. Could you tell me more?",
    quran:
      "Hello Hind Ali! I am interested in Quran classes. Could you share details about the programme?",
    food: "Hello Hind Ali! I would like to enquire about food ordering. What is available?",
  },
  bm: {
    general:
      "Salam Hind Ali! Saya ingin membuat pertanyaan peribadi. Boleh tolong saya?",
    travel:
      "Salam Hind Ali! Saya berminat dengan perkhidmatan pelancongan peribadi di Malaysia. Boleh ceritakan lebih lanjut?",
    quran:
      "Salam Hind Ali! Saya berminat dengan kelas Quran. Boleh kongsikan maklumat tentang program ini?",
    food: "Salam Hind Ali! Saya ingin bertanya tentang pesanan makanan. Apa yang ada?",
  },
  ar: {
    general:
      "السلام عليكم هند علي! أودّ تقديم استفسار خاص. هل يمكنك مساعدتي؟",
    travel:
      "السلام عليكم هند علي! أنا مهتم بخدمات السفر الخاص في ماليزيا. هل يمكنك إخباري بالمزيد؟",
    quran:
      "السلام عليكم هند علي! أنا مهتم بدروس القرآن الكريم. هل يمكنك مشاركة تفاصيل البرنامج؟",
    food: "السلام عليكم هند علي! أودّ الاستفسار عن طلب الطعام. ما المتاح لديكم؟",
  },
};

const WA_NUMBER = "601153050524";

/* ── 3. STATE ─────────────────────────────────────────────── */
let currentLang = localStorage.getItem("ha-lang") || "en";

/* ── 4. APPLY TRANSLATIONS ───────────────────────────────── */
function applyTranslations(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Simple text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML nodes (allow inline spans, e.g. accent class)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Page title
  if (t["pageTitle"]) document.title = t["pageTitle"];

  // Meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t["pageDescription"]) metaDesc.setAttribute("content", t["pageDescription"]);

  // Direction + lang attribute
  const isRtl = lang === "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = isRtl ? "rtl" : "ltr";
}

/* ── 5. BUILD WHATSAPP URLS ──────────────────────────────── */
function buildWaUrl(messageKey) {
  const msgs = WA_MESSAGES[currentLang] || WA_MESSAGES.en;
  const text = msgs[messageKey] || msgs.general;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

function updateWaLinks() {
  document.querySelectorAll("[data-message-key]").forEach((el) => {
    const key = el.dataset.messageKey;
    el.href = buildWaUrl(key);
  });
}

/* ── 6. LANGUAGE SWITCHER ────────────────────────────────── */
function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem("ha-lang", lang);

  // Update button pressed states
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.setAttribute("aria-pressed", String(isActive));
    btn.classList.toggle("active", isActive);
  });

  applyTranslations(lang);
  updateWaLinks();
}

/* ── 7. MOBILE NAV ───────────────────────────────────────── */
function initMobileNav() {
  const toggleBtn = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-nav-panel]");
  if (!toggleBtn || !panel) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close nav when any nav link is clicked
  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Close nav on outside click
  document.addEventListener("click", (e) => {
    if (
      document.body.classList.contains("nav-open") &&
      !panel.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      document.body.classList.remove("nav-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Close nav on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
      document.body.classList.remove("nav-open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.focus();
    }
  });
}

/* ── 8. STICKY HEADER SCROLL SHADOW ─────────────────────── */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const observer = new IntersectionObserver(
    ([entry]) => header.classList.toggle("scrolled", !entry.isIntersecting),
    { rootMargin: "-1px 0px 0px 0px", threshold: 0 }
  );
  // Observe a tiny sentinel at the top of the page
  const sentinel = document.createElement("div");
  sentinel.style.cssText = "position:absolute;top:0;height:1px;width:1px;pointer-events:none;";
  document.body.prepend(sentinel);
  observer.observe(sentinel);
}

/* ── 9. BOOT ─────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  // Language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  initMobileNav();
  initHeaderScroll();

  // Apply saved or default language
  setLang(currentLang);
});

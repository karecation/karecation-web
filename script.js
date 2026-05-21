const STORAGE_KEY = "karecation_cart_simple_v1";
const LOCALE_KEY = "karecation_locale_v1";
const SERVICE_RATE = 0.05;
const BOOKING_ENDPOINT = "https://script.google.com/macros/s/AKfycbw3QYQcz4yEfooj5JHimeEjPhEMiwr9d-thze96WrjQJxzgkjCVRDlG1XG6iM6TJEEU/exec";
const ALLINONE_SELECTION_KEY = "karecation_allinone_selection_v1";
const ALLINONE_JOURNEY_KEY = "karecation_allinone_journey_v1";
const RESETTABLE_STATE_KEYS = [
  STORAGE_KEY,
  ALLINONE_SELECTION_KEY,
  ALLINONE_JOURNEY_KEY,
  "cart",
  "karecationCart",
  "selectedPrograms",
  "selectedJourney",
  "allInOneSelection",
  "selectedPath",
  "consultationSelection"
];

const SUPPORTED_LOCALES = [
  { code: "en", label: "EN", htmlLang: "en" },
  { code: "ko", label: "KR", htmlLang: "ko" },
  { code: "zh", label: "訝?뻼", htmlLang: "zh-CN" },
  { code: "ja", label: "?ζ쑍沃?, htmlLang: "ja" }
];

const PROGRAMS = [
  {
    id: "all-in-one-package",
    category: "package",
    startPrice: 1499,
    duration: "Full day+",
    location: "Seoul",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "quick-concierge-consultation",
    category: "starter",
    startPrice: 10,
    duration: "30 mins",
    location: "Online / Seoul",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "skin-clinic-care-1",
    category: "skin",
    startPrice: 150,
    duration: "2 hrs",
    location: "Gangnam, Seoul",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "skin-clinic-care-2",
    category: "skin",
    startPrice: 500,
    duration: "2-3 hrs",
    location: "Gangnam, Seoul",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "scalp-diagnosis-spa",
    category: "wellness",
    startPrice: 100,
    duration: "2-3 hrs",
    location: "Cheongdam, Seoul",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "hair-salon",
    category: "styling",
    startPrice: 100,
    duration: "2 hrs",
    location: "Seoul",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "celebrity-hair-makeup",
    category: "styling",
    startPrice: 200,
    duration: "2 hrs",
    location: "Apgujeong, Seoul",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "nail-care",
    category: "styling",
    startPrice: 80,
    duration: "1-1.5 hrs",
    location: "Seoul",
    image: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "body-massage",
    category: "wellness",
    startPrice: 120,
    duration: "90 mins",
    location: "Seoul",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80"
  }
];

const CATEGORY_ORDER = ["all", "package", "starter", "skin", "wellness", "styling"];
const HIDDEN_PROGRAM_IDS = new Set(["all-in-one-package", "beauty-shopping"]);

const ALLINONE_BUILDER_CONFIG = {
  basePrice: 1499,
  requiredIds: ["skin-clinic-care-1", "skin-clinic-care-2"],
  optionalIds: ["scalp-diagnosis-spa", "hair-salon", "celebrity-hair-makeup", "nail-care", "body-massage", "beauty-shopping"],
  labels: {
    "skin-clinic-care-1": "Skin Clinic Care 1",
    "skin-clinic-care-2": "Skin Clinic Care 2",
    "scalp-diagnosis-spa": "Scalp Care",
    "hair-salon": "Hair Salon",
    "celebrity-hair-makeup": "Hair & Makeup",
    "nail-care": "Nail/Pedi Care",
    "body-massage": "Body Massage",
    "beauty-shopping": "Beauty Shopping"
  },
  addonPrices: {
    "skin-clinic-care-1": 0,
    "skin-clinic-care-2": 150,
    "scalp-diagnosis-spa": 0,
    "hair-salon": 80,
    "celebrity-hair-makeup": 100,
    "nail-care": 0,
    "body-massage": 20,
    "beauty-shopping": 0
  }
};

const CONTACT_CHANNELS = [
  {
    id: "instagram",
    name: "Instagram",
    address: "@karecation",
    qrSrc: "instagram-qr.png",
    qrAlt: "Instagram QR code for Karecation"
  },
  {
    id: "wechat",
    name: "WeChat",
    address: "@karecation",
    qrSrc: "wechat-qr.png",
    qrAlt: "WeChat QR code for Karecation"
  },
  {
    id: "line",
    name: "LINE",
    address: "@karecation",
    qrSrc: "line-qr.png",
    qrAlt: "LINE QR code for Karecation"
  }
];

const CONTACT_CHANNEL_COPY = {
  en: {
    eyebrow: "Contact Channels",
    title: "Choose the channel that works best for you.",
    lead: "Instagram, WeChat, and LINE are available for direct contact.",
    helper: "Scan or tap to connect.",
    openLink: "Open link",
    qrMissing: "Add QR image"
  },
  ko: {
    eyebrow: "Contact Channels",
    title: "?먰븯??梨꾨꼸濡?媛???명븯寃??곌껐?섏꽭??",
    lead: "Instagram, WeChat, LINE?쇰줈 諛붾줈 臾몄쓽?????덉뒿?덈떎.",
    helper: "?ㅼ틪?섍굅????빐???곌껐?섏꽭??",
    openLink: "留곹겕 ?닿린",
    qrMissing: "QR ?대?吏瑜?異붽???二쇱꽭??
  },
  zh: {
    eyebrow: "Contact Channels",
    title: "?됪떓??귛릦鵝좂쉪?붺내歷좈걪??,
    lead: "??싪퓝 Instagram?갮eChat?갟INE ?닸렏?붺내 Karecation??,
    helper: "?ョ쟻?뽫궧?삣뜵??걫楹삠?,
    openLink: "?볟??얏렏",
    qrMissing: "瑥룡렌??QR ?양뎴"
  },
  ja: {
    eyebrow: "Contact Channels",
    title: "?붼꺗?덀겗?덀걚?곥깵?띲꺂?㎯걫?ｇ덧?뤵걽?뺛걚??,
    lead: "Instagram?팛eChat?팊INE ?뗣굢?닸렏?붼ｇ덧?꾠걼?졼걨?얇걲??,
    helper: "?밤궘?ｃ꺍?얇걼??궭?껁깤?㏝ｇ덧?㎯걤?얇걲??,
    openLink: "?ゃ꺍??굮?뗣걦",
    qrMissing: "QR?삣깗?믦옙?졼걮?╉걦?졼걬??
  }
};

const I18N = {
  en: {
    meta: {
      brandSub: "Premium K-Beauty Concierge",
      nav: ["Home", "Programs", "Consultation", "About", "FAQ", "Contact"],
      cart: "Cart",
      footerAbout: "Private K-beauty concierge for international guests in Seoul.",
      browse: "Browse",
      support: "Support"
    },
    cta: {
      viewPrograms: "Explore Programs",
      viewAllPrograms: "View All Programs",
      viewProgram: "View Program",
      addToCart: "Add to Cart",
      requestConsultation: "Request Consultation",
      explorePackage: "Explore Package",
      startPlanning: "Start Planning",
      reviewCart: "Review Cart"
    },
    common: {
      startingFrom: "Price",
      noMatchTitle: "No matching programs",
      noMatchText: "Try another keyword or category.",
      selected: "added to cart.",
      traveler: "traveler",
      travelers: "travelers",
      subtotal: "Subtotal",
      service: "Service (5%)",
      total: "Total",
      remove: "Remove",
      finalScope: "Final scope is confirmed after consultation and availability review.",
      noCartItems: "No cart items"
    },
    categories: {
      all: "All",
      package: "Package",
      starter: "Starter",
      skin: "Skin",
      wellness: "Wellness",
      styling: "Styling"
    },
    home: {
      heroEyebrow: "PREMIUM K-BEAUTY, SIMPLIFIED",
      heroTitle: "Beauty, privately arranged.",
      heroTitleLines: ["Beauty,", "privately arranged."],
      heroLead: "Private K-beauty concierge for international guests visiting Seoul. Explore curated programs or request a private consultation.",
      programsEyebrow: "Featured Programs",
      programsTitle: "Start with the path that fits you best.",
      howEyebrow: "How It Works",
      howTitle: "Choose clearly. Plan privately. Arrive prepared.",
      steps: [
        ["Choose a program", "Browse curated options based on the kind of beauty experience you want in Seoul."],
        ["Save your selections", "Add the paths you want to discuss before making a final decision."],
        ["Request consultation", "Share your dates, goals, language needs, and preferred level of support."],
        ["Get coordinated", "Karecation helps organize the next step with clarity, privacy, and guidance."]
      ],
      trustEyebrow: "Why Karecation",
      trustTitle: "Private support, clearer decisions.",
      trust: [
        ["Tailored planning", "Built around your goals, timing, comfort level, and beauty priorities."],
        ["Trusted discovery", "Explore clinic, beauty, and shopping options with more clarity."],
        ["Multilingual support", "Designed to help international guests navigate the process with ease."]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Before you begin.",
      finalEyebrow: "Start Planning",
      finalTitle: "Ready to plan your Seoul beauty experience?"
    },
    page: {
      programsEyebrow: "Programs",
      programsTitle: "Choose the Seoul beauty path that fits you best.",
      programsLead: "Explore signature itineraries, focused care paths, and private consultation options for international guests.",
      searchPlaceholder: "Search programs",
      sortRecommended: "Sort: Recommended",
      priceAsc: "Price: Low to High",
      priceDesc: "Price: High to Low",
      aboutEyebrow: "About",
      aboutTitle: "Private coordination for international guests visiting Seoul.",
      aboutLead: "Beauty, wellness, and clinic planning with private concierge guidance.",
      aboutCards: [
        ["Curated Matching", "We shortlist options around your goals."],
        ["Seamless Coordination", "Scheduling, timing, and language support stay in one flow."],
        ["Private Request Flow", "Request privately before confirming your schedule."]
      ],
      aboutFlowEyebrow: "Process",
      aboutSteps: [
        ["Share", "Share your goals, dates, and support needs."],
        ["Plan", "Review curated options and a clear Seoul schedule."],
        ["Coordinate", "Confirm reservations with concierge guidance."]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Answers before you book.",
      faqLead: "What we coordinate, and how to start.",
      contactTitle: "Private Concierge Support",
      contactLead: "For tailored planning, request a private consultation with your dates and preferred programs.",
      bookingTitle: "Tell us what you?셝 like to arrange in Seoul.",
      bookingLead: "Share your goals, dates, and preferences.",
      bookingDetails: "Your Information",
      selectedPath: "Selected Path",
      fullName: "Full Name",
      email: "Email",
      nationality: "Nationality",
      requestNote: "Additional Request",
      requestPlaceholder: "Share desired services, preferred dates, language needs, and budget range.",
      cartEyebrow: "Selected Path",
      cartTitle: "Review your request.",
      cartLead: "Confirm programs, guests, and preferred dates before sending.",
      estimatedScope: "Estimated Scope",
      proceed: "Request Consultation",
      exploreMore: "Explore More Paths"
    },
    programs: {
      "all-in-one-package": {
        name: "All-in-One Package",
        location: "Seoul",
        duration: "Full day+",
        tagline: "Guided premium K-beauty.",
        cardDescription: "Best for guests who want a polished one-day beauty plan.<br>Includes clinic care, scalp care, hair & makeup, and beauty shopping.<br>Ideal for guests who want private support throughout the day.",
        description: "A fully curated premium route with private concierge accompaniment throughout the day. Complimentary support includes personal Olive Young shopping and pickup/drop-off coordination.",
        includes: ["Concierge accompaniment", "Personal Olive Young shopping support", "Pickup and drop-off support", "Program coordination and on-site guidance"],
        steps: ["Goal and route planning", "Concierge-accompanied appointments", "Shopping and transfer support"],
        faq: [{ q: "Who is this best for?", a: "Guests who want a smooth, one-day premium experience with direct concierge accompaniment." }]
      },
      "quick-concierge-consultation": {
        name: "Quick Concierge Consultation",
        location: "Online / Seoul",
        duration: "30 mins",
        tagline: "Best first step for new guests.",
        cardDescription: "Best for first-time visitors.<br>Includes private consultation on goals, timing, and support level.<br>Ideal for guests who want clarity before choosing.",
        description: "A focused intake session to map your goals, budget, and travel schedule before selecting premium programs.",
        includes: ["Goal and concern assessment", "Program shortlist recommendation", "Travel-day timing guidance"],
        steps: ["Share your goals and timeline", "Receive curated options", "Finalize a practical route"],
        faq: [
          { q: "Is this refundable?", a: "Full refund up to 7 days before. 50% refund up to 3 days before. No refund after that." },
          { q: "Can I upgrade to full package later?", a: "Yes. This can be credited toward selected premium bundles." }
        ]
      },
      "skin-clinic-care": {
        name: "Skin Clinic Care",
        location: "Gangnam, Seoul",
        duration: "2 hrs",
        tagline: "Clinical skin care with concierge guidance.",
        cardDescription: "Best for guests focused on clinical skin results.<br>Includes diagnostics, treatment planning, and post-care guidance.<br>Ideal for guests who want focused support for skin care in Seoul.",
        description: "Curated clinic matching and streamlined visit support for global guests seeking visible results.",
        includes: ["Skin diagnostics", "Treatment planning", "Post-care briefing"],
        steps: ["Diagnostic consultation", "Customized treatment", "Aftercare check"],
        faq: [{ q: "Is this suitable for sensitive skin?", a: "Yes, protocol is adjusted after diagnosis." }]
      },
      "scalp-diagnosis-spa": {
        name: "Scalp Diagnosis & Spa",
        location: "Cheongdam, Seoul",
        duration: "2-3 hrs",
        tagline: "Calm, restorative scalp wellness.",
        cardDescription: "Best for guests focused on scalp and hair health.<br>Includes scalp diagnosis, restorative treatment, and home care guidance.<br>Ideal for guests who want calm, recovery-first care.",
        description: "Analysis-first scalp care to improve scalp comfort, root environment, and overall hair condition.",
        includes: ["Scalp imaging", "Deep cleansing and treatment", "Home routine guide"],
        steps: ["Scalp scan", "Therapy session", "Maintenance plan"],
        faq: [{ q: "Only for hair-loss cases?", a: "No. It is also popular for stress and balance care." }]
      },
      "celebrity-hair-makeup": {
        name: "Celebrity Hair & Makeup",
        location: "Apgujeong, Seoul",
        duration: "2 hrs",
        tagline: "Editorial-grade K-style finish.",
        cardDescription: "Best for guests preparing for a key event or shoot.<br>Includes look consultation, professional hair styling, and makeup.<br>Ideal for guests who want a polished Seoul-ready finish.",
        description: "Premium salon styling for portraits, events, and high-importance travel moments.",
        includes: ["Look consultation", "Hair design", "Full makeup"],
        steps: ["Look planning", "Hair and makeup session", "Final polish"],
        faq: [{ q: "Can I request natural style?", a: "Yes. Natural to glam options are available." }]
      },
      "personal-color-consultation": {
        name: "Personal Color Consultation",
        location: "Seongsu, Seoul",
        duration: "2 hrs",
        tagline: "Your palette, clarified and usable.",
        cardDescription: "Best for guests refining makeup, hair, and wardrobe choices.<br>Includes color analysis, palette guidance, and beauty shopping direction.<br>Ideal for guests who want confident daily style decisions.",
        description: "A practical tone session that improves makeup, hair, and wardrobe decisions quickly.",
        includes: ["Seasonal diagnosis", "Beauty palette card", "Shopping guidance"],
        steps: ["Color analysis", "Tone mapping", "Action guide"],
        faq: [{ q: "Do I get a report?", a: "Yes, a concise digital summary is included." }]
      }
    },
    faq: [
      ["Do you choose the clinic for me?", "Karecation helps you compare suitable options. Final decisions stay with you and the provider you choose."],
      ["Can you help with translation?", "Multilingual communication support can be arranged depending on service, schedule, and location."],
      ["Can I book only one service?", "Yes. You can request individual coordination for a single visit."],
      ["Is this only for beauty services?", "No. Karecation can also support wellness, clinics, recovery, and private itinerary planning."],
      ["How do I start?", "Choose a program or request a private consultation."]
    ]
  },
  ko: {
    meta: {
      brandSub: "?꾨━誘몄뾼 K-酉고떚 而⑥떆?댁?",
      nav: ["??, "?꾨줈洹몃옩", "?곷떞", "?뚭컻", "FAQ", "臾몄쓽"],
      cart: "移댄듃",
      footerAbout: "?쒓뎅 蹂묒썝, ?대━?? ?곕땲?? 酉고떚 諛⑸Ц??怨꾪쉷?섎뒗 ?멸뎅?몄쓣 ?꾪븳 ?꾨씪?대퉿 而⑥떆?댁?.",
      browse: "蹂닿린",
      support: "吏??
    },
    cta: {
      viewPrograms: "?꾨줈洹몃옩 蹂닿린",
      viewAllPrograms: "?꾩껜 ?꾨줈洹몃옩",
      viewProgram: "?먯꽭??蹂닿린",
      addToCart: "移댄듃???닿린",
      requestConsultation: "?꾨씪?대퉿 ?곷떞 ?붿껌",
      explorePackage: "?⑦궎吏 蹂닿린",
      startPlanning: "怨꾪쉷 ?쒖옉",
      reviewCart: "移댄듃 ?뺤씤"
    },
    common: {
      startingFrom: "?쒖옉媛",
      noMatchTitle: "?쇱튂?섎뒗 ?꾨줈洹몃옩???놁뒿?덈떎",
      noMatchText: "?ㅻⅨ 寃?됱뼱??移댄뀒怨좊━瑜??좏깮??二쇱꽭??",
      selected: "移댄듃???댁븯?듬땲??",
      traveler: "紐?,
      travelers: "紐?,
      subtotal: "?뚭퀎",
      service: "?쒕퉬??(5%)",
      total: "?⑷퀎",
      remove: "??젣",
      finalScope: "理쒖쥌 踰붿쐞???곷떞 諛?媛???쇱젙 ?뺤씤 ???뺤젙?⑸땲??",
      noCartItems: "?좏깮 ??ぉ ?놁쓬"
    },
    categories: {
      all: "?꾩껜",
      package: "?⑦궎吏",
      starter: "?곷떞",
      skin: "?ㅽ궓",
      wellness: "?곕땲??,
      styling: "?ㅽ??쇰쭅"
    },
    home: {
      heroEyebrow: "?꾨━誘몄뾼 K-酉고떚 而⑥떆?댁?",
      heroTitle: "?쒓뎅 酉고떚瑜????쎄쾶.",
      heroTitleLines: ["?쒓뎅 酉고떚瑜?, "???쎄쾶."],
      heroLead: "?⑦궎吏瑜??좏깮?섍굅???뚮옖???붿껌?섏꽭??",
      programsEyebrow: "異붿쿇 ?꾨줈洹몃옩",
      programsTitle: "而⑥떆?댁? 寃쎈줈遺???좏깮?섏꽭??",
      howEyebrow: "?댁슜 諛⑸쾿",
      howTitle: "?좏깮?섍퀬, ?붿껌?섍퀬, 以鍮꾨맂 ?곹깭濡?諛⑸Ц?섏꽭??",
      steps: [["?꾨줈洹몃옩 ?좏깮", "?⑦궎吏? 媛쒕퀎 ?쒕퉬?ㅻ? 鍮꾧탳?섏꽭??"], ["移댄듃???닿린", "?곷떞??寃쎈줈瑜???ν븯?몄슂."], ["?뚮옒???붿껌", "?좎쭨, 紐⑺몴, ?몄뼱 ?붿껌??怨듭쑀?섏꽭??"], ["議곗쑉 吏꾪뻾", "?덉빟怨??쇱젙 ?먮쫫??吏?먰빀?덈떎."]],
      trustEyebrow: "?좊ː",
      trustTitle: "?꾨━誘몄뾼 吏?? 紐낇솗??踰붿쐞.",
      trust: [["?꾨씪?대퉿 ?뚮옒??, "紐⑺몴? ?쇱젙??留욎떠 援ъ꽦?⑸땲??"], ["?대━???먯깋", "?좏깮吏瑜?紐낇솗?섍쾶 鍮꾧탳?⑸땲??"], ["?ㅺ뎅??吏??, "?멸뎅??諛⑸Ц媛앹쓣 ?꾪븳 而ㅻ??덉??댁뀡 吏??"]],
      faqEyebrow: "FAQ",
      faqTitle: "?쒖옉 ???뺤씤?섏꽭??",
      finalEyebrow: "怨꾪쉷 ?쒖옉",
      finalTitle: "?쒓뎅 而⑥떆?댁? 寃쎈줈瑜??좏깮??以鍮꾧? ?섏뀲?섏슂?"
    },
    page: {
      programsEyebrow: "而⑥떆?댁? ?꾨줈洹몃옩",
      programsTitle: "?꾨줈洹몃옩???좏깮?섍퀬 怨꾪쉷???쒖옉?섏꽭??",
      programsLead: "?ъ씤?? ?곷떞, ?ㅽ궓, ?곕땲?? ?ㅽ??쇰쭅.",
      searchPlaceholder: "?꾨줈洹몃옩 寃??,
      sortRecommended: "?뺣젹: 異붿쿇??,
      priceAsc: "媛寃??????,
      priceDesc: "媛寃??믪???,
      aboutEyebrow: "?뚭컻",
      aboutTitle: "?쒓뎅??諛⑸Ц?섎뒗 ?멸뎅?몄쓣 ?꾪븳 ?꾨━誘몄뾼 議곗쑉.",
      aboutLead: "酉고떚, ?곕땲?? ?대━???먯깋, ?덉빟 吏?? ?꾨씪?대퉿 ?쇱젙 ?뚮옒??",
      aboutCards: [
        ["留욎땄 ?먯깋", "紐⑺몴??留욌뒗 ?듭뀡??醫곹옓?덈떎."],
        ["紐낇솗??議곗쑉", "?덉빟怨??쇱젙 ?먮쫫??愿由ы빀?덈떎."],
        ["?붿껌 ?곗꽑 ?먮쫫", "?뺤젙 ???꾨씪?대퉿?섍쾶 臾몄쓽?섏꽭??"]
      ],
      aboutFlowEyebrow: "吏꾪뻾 ?먮쫫",
      aboutSteps: [
        ["怨듭쑀", "紐⑺몴, ?좎쭨, 援?쟻, ?꾩슂??吏?먯쓣 ?뚮젮 二쇱꽭??"],
        ["怨꾪쉷", "?곹빀??寃쎈줈? ?쒓뎅 ?쇱젙??寃?좏빀?덈떎."],
        ["議곗쑉", "?덉빟 吏?먭낵 而⑥떆?댁? ?덈궡濡?吏꾪뻾?⑸땲??"]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "諛⑸Ц 怨꾪쉷 ???꾩슂???듬?.",
      faqLead: "Karecation??議곗쑉?????덈뒗 ?댁슜怨??쒖옉 諛⑸쾿.",
      contactTitle: "而⑥떆?댁? 吏??,
      contactLead: "諛⑸Ц 怨꾪쉷? 紐⑺몴? ?좎쭨瑜??ы븿???꾨씪?대퉿 ?곷떞???붿껌??二쇱꽭??",
      bookingTitle: "?쒓뎅?먯꽌 ?먰븯???쒕퉬?ㅻ? ?뚮젮二쇱꽭??",
      bookingLead: "紐⑺몴, ?좎쭨, 援?쟻, ?꾩슂??吏?먯쓣 怨듭쑀??二쇱꽭??",
      bookingDetails: "湲곕낯 ?뺣낫",
      selectedPath: "?좏깮 寃쎈줈",
      fullName: "?대쫫",
      email: "?대찓??,
      nationality: "援?쟻",
      requestNote: "異붽? ?붿껌",
      requestPlaceholder: "?щ쭩 ?쒕퉬?? 諛⑸Ц ?좎쭨, ?몄뼱 ?붿껌, ?덉궛 踰붿쐞, ?ы뻾 ?쒖빟???곸뼱 二쇱꽭??",
      cartEyebrow: "?좏깮 寃쎈줈",
      cartTitle: "而⑥떆?댁? ?붿껌???뺤씤?섏꽭??",
      cartLead: "?곷떞 ??寃쎈줈, ?몄썝, ?щ쭩 ?좎쭨瑜??뺤씤?섏꽭??",
      estimatedScope: "?덉긽 踰붿쐞",
      proceed: "?곷떞 ?붿껌",
      exploreMore: "?ㅻⅨ 寃쎈줈 蹂닿린"
    },
    programs: {},
    faq: [
      ["蹂묒썝?대굹 ?대━?됱쓣 ????좏깮??二쇰굹??", "紐⑺몴? ?쇱젙??留욌뒗 ?좏깮吏瑜?鍮꾧탳?섎룄濡??뺤뒿?덈떎. 理쒖쥌 ?섎즺 寃곗젙? 蹂몄씤怨??섎즺 ?꾨Ц媛媛 ?댁빞 ?⑸땲??"],
      ["?듭뿭?대굹 而ㅻ??덉??댁뀡 吏?먯씠 媛?ν븳媛??", "?쒕퉬?? ?쇱젙, ?μ냼???곕씪 ?ㅺ뎅??而ㅻ??덉??댁뀡 吏?먯쓣 議곗쑉?????덉뒿?덈떎."],
      ["?쒕퉬???섎굹留??덉빟?????덈굹??", "?? ?⑥씪 諛⑸Ц???꾪븳 媛쒕퀎 議곗쑉???붿껌?????덉뒿?덈떎."],
      ["酉고떚 ?쒕퉬?ㅻ쭔 媛?ν븳媛??", "?꾨땲?? ?곕땲?? ?ㅽ뙆, ?대━?? ?뚮났 以묒떖 諛⑸Ц??吏?먰빀?덈떎."],
      ["?대뼸寃??쒖옉?섎굹??", "?꾨줈洹몃옩???좏깮?섍굅???꾨씪?대퉿 ?곷떞???붿껌?섏꽭??"]
    ]
  },
  zh: {
    meta: {
      brandSub: "遙섊ク K-Beauty 鹽쇔??띶뒦",
      nav: ["腰뽭〉", "窈밭쎅", "?②?", "?념틢", "FAQ", "?붺내"],
      cart: "兀?돥饔?,
      footerAbout: "訝뷸씎?⒴쎖弱긷뙸?곩볜?삠곭풆若방닑?계??삯솫瑥딀??꾣돈鸚뽩??룡룓堊쏁쭅雅븀ㅌ若얍뜌瘟껁?,
      browse: "役뤺쭏",
      support: "??똻"
    },
    cta: {
      viewPrograms: "?η쐦窈밭쎅",
      viewAllPrograms: "?η쐦?③깿窈밭쎅",
      viewProgram: "?η쐦瑥?깄",
      addToCart: "?졾뀯兀?돥饔?,
      requestConsultation: "窯꾤벧燁곦볶?②?",
      explorePackage: "?η쐦也쀩쨶",
      startPlanning: "凉冶뗨쭊??,
      reviewCart: "?η쐦兀?돥饔?
    },
    common: {
      startingFrom: "壅룝뻔",
      noMatchTitle: "亦→쐣?백뀓?꾦」??,
      noMatchText: "瑥룟컼瑥뺝끀餓뽩뀽??칾?뽫굳?ャ?,
      selected: "藥꿨뒥?θ눌?⑵쉐??,
      traveler: "鵝띶?雅?,
      travelers: "鵝띶?雅?,
      subtotal: "弱뤺?",
      service: "?띶뒦兀?(5%)",
      total: "?덅?",
      remove: "燁삯솮",
      finalScope: "?瀯덅똽?닷컛?ⓨ뮜瑥℡뭽??쥋瀛?뿶?당‘溫ㅵ릮簾?츣??,
      noCartItems: "?ら됪떓窈밭쎅"
    },
    categories: {
      all: "?③깿",
      package: "也쀩쨶",
      starter: "?②?",
      skin: "??궎",
      wellness: "佯룟끇",
      styling: "?졾엹"
    },
    home: {
      heroEyebrow: "遙섊ク K-Beauty 鹽쇔??띶뒦",
      heroTitle: "?⒴쎖獰롣맒阿뗦뾽竊뚧쎍嶸?뺛?,
      heroTitleLines: ["?⒴쎖獰롣맒阿뗦뾽竊?, "?당??뺛?],
      heroLead: "?됪떓也쀩쨶竊뚧닑雅ㅷ퍢 Karecation??,
      programsEyebrow: "?②뜍窈밭쎅",
      programsTitle: "餓롣?訝ょㅌ若얕러孃꾢?冶뗣?,
      howEyebrow: "役곭쮮",
      howTitle: "?됪떓?귝룓雅ㅳ귛츎恙껅뒿渦얇?,
      steps: [["?됪떓窈밭쎅", "驪붻푵也쀩쨶?뚦뜒窈방쐨?▲?], ["?졾뀯兀?돥饔?, "岳앭춼?녑뮜瑥®쉪瓮?푶??], ["?먧벡鰲꾢닋", "?딁윥?ζ쐿?곭쎅?뉐뭽瑥???黎귙?], ["?룟풓?뤺컘", "Karecation ?뤷뒰窯꾤벧?뚩죱葉뗦탛葉뗣?]],
      trustEyebrow: "岳▽뻣",
      trustTitle: "遙섊ク??똻竊뚩씁?뚧툍?겹?,
      trust: [["燁곦볶鰲꾢닋", "?방뜮?①쉪??젃?뚧뿶?닷츎?믡?], ["瑥딀??묊렟", "歷끾솻驪붻푵?됪떓??], ["鸚싪?鼇??똻", "訝뷸돈鸚뽬?若€룓堊쎿쿊?싧뜌?⒲?]],
      faqEyebrow: "FAQ",
      faqTitle: "凉冶뗥뎺雅녻㎗??,
      finalEyebrow: "凉冶뗨쭊??,
      finalTitle: "?녶쨭?됪떓?①쉪?⒴쎖鹽쇔?瓮?푶雅녶릹竊?
    },
    page: {
      programsEyebrow: "鹽쇔?窈밭쎅",
      programsTitle: "?됪떓窈밭쎅竊뚦?冶뗨쭊?믡?,
      programsLead: "訝塋쇿폀?곩뮜瑥㏂곭슢?ㅳ곩볜?삠곲졾엹??,
      searchPlaceholder: "?쒐뇨窈밭쎅",
      sortRecommended: "?믣틣竊싨렓??,
      priceAsc: "餓룡졏竊싦퐥?곈쳵",
      priceDesc: "餓룡졏竊싮쳵?겻퐥",
      aboutEyebrow: "?념틢",
      aboutTitle: "訝뷸씎?⒴쎖?꾣돈鸚뽩??룡룓堊쏃쳵塋?뜌瘟껁?,
      aboutLead: "獰롥??곩볜?삠곮칺??묊렟?곲쥋瀛?뜌?⒴뭽燁곦볶烏뚨쮮鰲꾢닋??,
      aboutCards: [
        ["訝ゆ㎩뙑嶺쏃?, "?됬쎅?뉒춿?됧릦?귡됮」??],
        ["歷끾솻?뤺컘", "瀯잋?鸚꾤릤窯꾤벧?뚩죱葉뗣?],
        ["?덂뮜瑥℡릮?녑츣", "簾?츣?띶룾?덄쭅訝뗥뮜瑥㏂?]
      ],
      aboutFlowEyebrow: "役곭쮮",
      aboutSteps: [
        ["?녵벴", "?딂칹?묇뺄??젃?곫뿥?잆곩쎖映띶뭽??똻?黎귙?],
        ["鰲꾢닋", "?η쐦?덆귟러孃꾢뭽?⒴쎖?η쮮??],
        ["?뤺컘", "瀯㎫뺌窯꾤벧?뤷뒰?뚨ㅌ若얏뵱?곥?]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "鰲꾢닋?띸쉪歷끾솻鰲ｇ춸??,
      faqLead: "Karecation ??빳?뤺컘餓阿덌펽餓ε룋倻귚퐬凉冶뗣?,
      contactTitle: "鹽쇔???똻",
      contactLead: "倻귡?鰲꾢닋溫욥뿮竊뚩??먧벡??젃?뚧뿥?잞펽窯꾤벧燁곦볶?②???,
      bookingTitle: "?딂칹?묇뺄?ⓩ꺍?③윪?썲츎?믢?阿덀?,
      bookingLead: "?녵벴??젃?곫뿥?잆곩쎖映띶뭽??똻?黎귙?,
      bookingDetails: "?①쉪岳→겘",
      selectedPath: "藥꿴됭러孃?,
      fullName: "冶볟릫",
      email: "???",
      nationality: "?썹콑",
      requestNote: "烏ε뀉?黎?,
      requestPlaceholder: "?잍쐹?띶뒦?곮???뿥?잆곮?鼇?黎귙곲쥋嶸쀨똽?닷뭽?낁죱?먨댍??,
      cartEyebrow: "藥꿴됭러孃?,
      cartTitle: "簾???①쉪鹽쇔?瑥룡콆??,
      cartLead: "?먧벡?②??랃펽簾??瓮?푶?곦볶?겼뭽?잍쐹?ζ쐿??,
      estimatedScope: "窯꾡섟?껃쎍",
      proceed: "窯꾤벧?②?",
      exploreMore: "?η쐦?닷쩀瓮?푶"
    },
    programs: {},
    faq: [
      ["鵝졽뺄鴉싨쎘?묌됪떓瑥딀??쀯폕", "Karecation 躍?뒰?ⓩ캈渦껃릦?귡됪떓?귝?瀯덂넶若싩뵳?ⓨ뭽??됪쐨?→뼶簾????],
      ["??빳?먧풘玲삭캂?뽪쿊?싨뵱?곩릹竊?, "??졊??쐨?▲곫뿶?닷뭽?곁궧若됪럲鸚싪?鼇亦잓싨뵱?곥?],
      ["?ら쥋瀛╊?訝ゆ쐨?▼룾餓ε릹竊?, "??빳?귝궓??빳?녘??뺞А溫욥뿮?꾢뜒窈밧뜌瘟껁?],
      ["?ら귞뵪雅롧풆若백」??릹竊?, "訝띷삸?괡arecation 阿잍뵱?곩볜?삠곮칺??곫걿鸚띶뭽燁곦볶烏뚨쮮鰲꾢닋??],
      ["倻귚퐬凉冶뗰폕", "?됪떓訝訝ら」??펽?뽭쥋瀛?쭅雅뷴뮜瑥㏂?]
    ]
  },
  ja: {
    meta: {
      brandSub: "?쀣꺃?잆궋??K-Beauty ?녈꺍?룔궒?ャ궦??,
      nav: ["?쎼꺖??, "?쀣꺆?겹꺀??, "?멱쳡", "榮밥퍔", "FAQ", "?ｇ덧"],
      cart: "?ャ꺖??,
      footerAbout: "?볟쎖??뾽?㏂곥궚?ゃ깑?껁궚?곥궑?㎯꺂?띲궧?곭풆若배Ø?뤵굮鼇덄뵽?쇻굥役룟쨼??걡若€쭣?묆걨??깤?⒲궎?쇻꺖?덀궠?녈궥?㎯꺂?멥깷??,
      browse: "誤뗣굥",
      support: "?듐깮?쇈깉"
    },
    cta: {
      viewPrograms: "?쀣꺆?겹꺀?졼굮誤뗣굥",
      viewAllPrograms: "?쇻겧??쫳??,
      viewProgram: "屋녕눗?믦쫳??,
      addToCart: "?ャ꺖?덀겓瓦썲뒥",
      requestConsultation: "?쀣꺀?ㅳ깧?쇈깉?멱쳡",
      explorePackage: "?묆긿?긱꺖?멥굮誤뗣굥",
      startPlanning: "鼇덄뵽?믣쭓?곥굥",
      reviewCart: "?ャ꺖?덄▶沃?
    },
    common: {
      startingFrom: "?뗥쭓堊→졏",
      noMatchTitle: "屋꿨퐪?쇻굥?쀣꺆?겹꺀?졼걣?귙굤?얇걵??,
      noMatchText: "?γ겗??꺖??꺖?됥겲?잆겘?ャ깇?담꺁?믡걡屋╉걮?뤵걽?뺛걚??,
      selected: "?ャ꺖?덀겓瓦썲뒥?쀣겲?쀣걼??,
      traveler: "??,
      travelers: "??,
      subtotal: "弱뤺쮫",
      service: "?듐꺖?볝궧 (5%)",
      total: "?덅쮫",
      remove: "?딃솮",
      finalScope: "?永귞칱?꿔겘?멱쳡?①㈉?띸듁力곥겗閻븃첀孃뚣겓黎뷩겲?듽겲?쇻?,
      noCartItems: "?멩뒢?ゃ걮"
    },
    categories: {
      all: "?쇻겧??,
      package: "?묆긿?긱꺖??,
      starter: "?멱쳡",
      skin: "?밤궘??,
      wellness: "?╉궒?ャ깓??,
      styling: "?밤궭?ㅳ꺁?녈궛"
    },
    home: {
      heroEyebrow: "?쀣꺃?잆궋??K-Beauty ?녈꺍?룔궒?ャ궦??,
      heroTitle: "?볟쎖獰롥??믡곥굚?ｃ겏怜▼뜕?ャ?,
      heroTitleLines: ["?볟쎖獰롥??믡?, "?귙겂?①가?섅겓??],
      heroLead: "?멥겤?뗣갞arecation ?ヤ풚?쇈?,
      programsEyebrow: "?듽걲?쇻굙",
      programsTitle: "?녈꺍?룔궒?ャ궦?η탪瓮?굮?멩뒢??,
      howEyebrow: "役곥굦",
      howTitle: "?멥겤?귚풚?쇈걲?뗣귛츎恙껁걮??댆???,
      steps: [["?쀣꺆?겹꺀?좈겦??, "?묆긿?긱꺖?멥겏?섊떖?듐꺖?볝궧?믤캈雍껁?], ["?ャ꺖?덀겓瓦썲뒥", "?멱쳡?쀣걼?꾢냵若밤굮岳앭춼??], ["鼇덄뵽?믢풚??, "?η쮮?곭쎅?꾠곮?沃욃툕?쎼굮?길쐣??], ["沃욘빐?믣룛?묆굥", "雅덄큵?ⓩ뾽葉뗣겗役곥굦?믡궢?앫꺖?덀?]],
      trustEyebrow: "岳↓졏",
      trustTitle: "訝딂나?ゃ궢?앫꺖?덀곫삇閻뷩겒影꾢쎊??,
      trust: [["?뗥닪鼇덄뵽", "??쉪?ⓩ뿥葉뗣겓?덀굩?쎼겍鼇?쮫??], ["??꺁?뗣긿??렋榮?, "?멩뒢?㏂굮?뤵걢?듽굜?쇻걦驪붻펱??], ["鸚싪?沃욁궢?앫꺖??, "役룟쨼??걡若€쭣?묆걨??ｇ덧??뤃??]],
      faqEyebrow: "FAQ",
      faqTitle: "冶뗣굙?뗥뎺?ャ?,
      finalEyebrow: "鼇덄뵽?뗥쭓",
      finalTitle: "?볟쎖?녈꺍?룔궒?ャ궦?η탪瓮?굮?멥겞?얇걲?뗰폕"
    },
    page: {
      programsEyebrow: "?녈꺍?룔궒?ャ궦?γ깤??궛?⒲깲",
      programsTitle: "?쀣꺆?겹꺀?졼굮?멥굯?㎯곮쮫?삯뼀冶뗣?,
      programsLead: "?묆긿?긱꺖?멥곭쎑獄뉎곥궧??꺍?곥궑?㎯꺂?띲궧?곥궧?욍궎?ゃ꺍?겹?,
      searchPlaceholder: "?쀣꺆?겹꺀?졿쩂榮?,
      sortRecommended: "訝╉겞?욍걟竊싥걡?쇻걲??,
      priceAsc: "堊→졏竊싦퐥?꾦젂",
      priceDesc: "堊→졏竊싮쳵?꾦젂",
      aboutEyebrow: "榮밥퍔",
      aboutTitle: "?볟쎖?믦Ø?뚣굥役룟쨼??걡若€쭣?묆걨??툓蘊ゃ겒沃욘빐??,
      aboutLead: "獰롥??곥궑?㎯꺂?띲궧?곥궚?ゃ깑?껁궚?®뇨?곦틛榮꾣뵱?담곩뗥닪?끿쮮鼇덄뵽??,
      aboutCards: [
        ["?뗥닪?먩죭", "??쉪?ュ릦?녽겦?욆궋?믥턂?듽겲?쇻?],
        ["?롧▶?よた??, "雅덄큵?ⓩ뾽葉뗣굮訝?ㅳ겓嶸←릤??],
        ["?멱쳡?ゅ뀍", "閻뷴츣?띲겓?뗥닪?멱쳡?㎯걤?얇걲??]
      ],
      aboutFlowEyebrow: "役곥굦",
      aboutSteps: [
        ["?길쐣", "??쉪?곫뿥葉뗣곩쎖映띲곩퓚誤곥겒?듐깮?쇈깉?믣뀻?됥?],
        ["鼇덄뵽", "?덀걝永뚩러?③윋?썬겎??틛若싥굮閻븃첀??],
        ["沃욘빐", "雅덄큵??뤃?ⓦ궠?녈궥?㎯꺂?멥깷?듐깮?쇈깉?면꿔겳?얇걲??]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "鼇덄뵽?띲겗?덀걦?귙굥蘊ゅ븦??,
      faqLead: "Karecation ?뚩た?담겎?띲굥?볝겏?ⓨ쭓?곫뼶??,
      contactTitle: "?녈꺍?룔궒?ャ궦?γ궢?앫꺖??,
      contactLead: "鼇ゅ븦鼇덄뵽??곭쎅?꾠겏?η쮮?믤렌?덀겍?쀣꺀?ㅳ깧?쇈깉?멱쳡?믡걫堊앶졏?뤵걽?뺛걚??,
      bookingTitle: "?볟쎖?㎪뎸?띲걮?잆걚?끻??믤븰?덀겍?뤵걽?뺛걚??,
      bookingLead: "??쉪?곫뿥葉뗣곩쎖映띲곩퓚誤곥겒?듐깮?쇈깉?믣뀻?됥걮?╉걦?졼걬?꾠?,
      bookingDetails: "?듿?礪섉깄??,
      selectedPath: "?멩뒢?끻?",
      fullName: "麗뤷릫",
      email: "?▲꺖??,
      nationality: "?썹콑",
      requestNote: "瓦썲뒥?ゃ궚?ⓦ궧??,
      requestPlaceholder: "躍뚧쐹?듐꺖?볝궧?곮Ø?뤸뿥?곮?沃욃툕?쎼곦틛嶸쀣곫뾽葉뗤툓??댍榮꾠?,
      cartEyebrow: "?멩뒢?끻?",
      cartTitle: "?녈꺍?룔궒?ャ궦?δ풚?쇈굮閻븃첀??,
      cartLead: "?멱쳡?띲겓永뚩러?곦볶?겹곩툕?쎿뿥?믥▶沃띲걮?╉걦?졼걬?꾠?,
      estimatedScope: "礖귞츞影꾢쎊",
      proceed: "?멱쳡?믢풚??,
      exploreMore: "餓뽧겗永뚩러?믦쫳??
    },
    programs: {},
    faq: [
      ["??꺁?뗣긿??굮?멥굯?㎯걦?뚣겲?쇻걢竊?, "Karecation ??겑?쀣걼?멩뒢?㏂겗驪붻펱?믡궢?앫꺖?덀걮?얇걲?귝?永귝군若싥겘?듿?礪섅겏?멩뒢?쀣걼?먧풘?끹걣烏뚣걚?얇걲??],
      ["玲삭㉢?꾦ｇ덧?듐깮?쇈깉??걗?듽겲?쇻걢竊?, "?듐꺖?볝궧?곫뿥葉뗣곩졃??ャ굠?듿쩀鼇沃욁궠?잆깷?뗣궞?쇈궥?㎯꺍??뤃?믦た?담겎?띲겲?쇻?],
      ["1?ㅳ겗?듐꺖?볝궧?졼걨雅덄큵?㎯걤?얇걲?뗰폕", "??걚?귛뜕?цØ?뤵겗?뗥닪沃욘빐?믢풚?쇈겎?띲겲?쇻?],
      ["獰롥??듐꺖?볝궧?졼걨?㎯걲?뗰폕", "?꾠걚?덀귙궑?㎯꺂?띲궧?곥궚?ゃ깑?껁궚?곩썮孃⒲곩뗥닪?끿쮮鼇덄뵽?귙궢?앫꺖?덀걮?얇걲??],
      ["?⒲걝冶뗣굙?뚣겙?덀걚?㎯걲?뗰폕", "?쀣꺆?겹꺀?졼굮?멥겤?뗣곥깤?⒲궎?쇻꺖?덄쎑獄뉎굮堊앶졏?쀣겍?뤵걽?뺛걚??]
    ]
  }
};

I18N.ko.programs = {
  "all-in-one-package": {
    name: "?ъ씤???⑦궎吏",
    location: "?쒖슱",
    duration: "?섎（ ?댁긽",
    tagline: "而⑥떆?댁? K-酉고떚 ?ъ젙.",
    description: "而⑥떆?댁?媛 ?섎（ ?쇱젙???숉뻾?섎뒗 ?꾨━誘몄뾼 ?먮젅?댁뀡 猷⑦듃?낅땲??",
    includes: ["而⑥떆?댁? ?숉뻾", "?쇱뒪???щ━釉뚯쁺 ?쇳븨 吏??, "?쎌뾽 諛??쒕∼?ㅽ봽 吏??, "?꾨줈洹몃옩 議곗쑉怨??꾩옣 ?덈궡"],
    steps: ["紐⑺몴? 猷⑦듃 怨꾪쉷", "而⑥떆?댁? ?숉뻾 ?쇱젙", "?쇳븨 諛??대룞 吏??],
    faq: [{ q: "?꾧뎄?먭쾶 ?곹빀?쒓???", a: "?섎（ ?꾨━誘몄뾼 寃쏀뿕??而⑥떆?댁?? ?④퍡 ?명븯寃?吏꾪뻾?섍퀬 ?띠? 怨좉컼?먭쾶 ?곹빀?⑸땲??" }]
  },
  "quick-concierge-consultation": {
    name: "??而⑥떆?댁? ?곷떞",
    location: "?⑤씪??/ ?쒖슱",
    duration: "30遺?,
    tagline: "?쒕퉬???좏깮 ??媛??媛꾨떒??泥??④퀎.",
    description: "紐⑺몴, ?좎쭨, ?몄뼱 ?붿껌, ?덉궛 踰붿쐞, ?ㅼ쓬 ?④퀎瑜??뺣━?섎뒗 吏묒쨷 ?곷떞?낅땲??",
    includes: ["紐⑺몴 ?뺣━", "?쒕퉬??諛⑺뼢", "?쇱젙 媛?대뱶", "異붿쿇 ?ㅼ쓬 ?④퀎"],
    steps: ["紐⑺몴 怨듭쑀", "?좏깮吏 寃??, "?ㅼ쓬 ?④퀎 ?좏깮"],
    faq: [{ q: "?섏쨷???뺤옣?????덈굹??", a: "?? ?곷떞 ???⑦궎吏??媛쒕퀎 議곗쑉濡??댁뼱媛????덉뒿?덈떎." }]
  },
  "skin-clinic-care": {
    name: "?ㅽ궓 ?대━??耳??,
    location: "媛뺣궓, ?쒖슱",
    duration: "2?쒓컙",
    tagline: "而⑥떆?댁? ?덈궡媛 ?뷀빐吏??대━???ㅽ궓 耳??",
    description: "湲濡쒕쾶 怨좉컼???꾪븳 ?대━??留ㅼ묶怨?諛⑸Ц 吏??",
    includes: ["?쇰? 吏꾨떒", "?쒖닠 怨꾪쉷", "?좏봽?곗????덈궡"],
    steps: ["吏꾨떒 ?곷떞", "留욎땄 耳??, "?ы썑 ?덈궡"],
    faq: [{ q: "誘쇨컧???쇰???媛?ν븳媛??", a: "吏꾨떒 ???꾨줈?좎퐳??議곗젙?⑸땲??" }]
  },
  "scalp-diagnosis-spa": {
    name: "?먰뵾 吏꾨떒 & ?ㅽ뙆",
    location: "泥?떞, ?쒖슱",
    duration: "2-3?쒓컙",
    tagline: "李⑤텇?섍퀬 ?뚮났?곸씤 ?먰뵾 ?곕땲??",
    description: "?먰뵾 ?몄븞?④낵 紐⑤컻 而⑤뵒?섏쓣 ?꾪븳 遺꾩꽍 以묒떖 耳??",
    includes: ["?먰뵾 珥ъ쁺", "???대젋吏뺢낵 ?몃━?몃㉫??, "??猷⑦떞 媛?대뱶"],
    steps: ["?먰뵾 ?ㅼ틪", "?뚮씪???몄뀡", "愿由??뚮옖"],
    faq: [{ q: "?덈え 耳?댁뒪留?媛?ν븳媛??", a: "?꾨땲?? ?ㅽ듃?덉뒪? 諛몃윴??耳?대줈???멸린媛 ?덉뒿?덈떎." }]
  },
  "celebrity-hair-makeup": {
    name: "??щ툕由ы떚 ?ㅼ뼱 & 硫붿씠?ъ뾽",
    location: "?뺢뎄?? ?쒖슱",
    duration: "2?쒓컙",
    tagline: "?먮뵒?좊━?쇨툒 K-?ㅽ???留덈Т由?",
    description: "珥ъ쁺, ?대깽?? 以묒슂???ы뻾 ?쒓컙???꾪븳 ?꾨━誘몄뾼 ?대” ?ㅽ??쇰쭅.",
    includes: ["猷??곷떞", "?ㅼ뼱 ?붿옄??, "? 硫붿씠?ъ뾽"],
    steps: ["猷??뚮옒??, "?ㅼ뼱? 硫붿씠?ъ뾽 ?몄뀡", "理쒖쥌 留덈Т由?],
    faq: [{ q: "?먯뿰?ㅻ윭???ㅽ??쇰룄 媛?ν븳媛??", a: "?? ?댁텛?대???湲?④퉴吏 媛?ν빀?덈떎." }]
  },
  "personal-color-consultation": {
    name: "?쇱뒪??而щ윭 ?곷떞",
    location: "?깆닔, ?쒖슱",
    duration: "2?쒓컙",
    tagline: "?섏뿉寃?留욌뒗 ?붾젅?몃? 紐낇솗?섍쾶.",
    description: "硫붿씠?ъ뾽, ?ㅼ뼱, ?섏긽 ?좏깮??鍮좊Ⅴ寃?媛쒖꽑?섎뒗 ?ㅼ슜?곸씤 ???몄뀡.",
    includes: ["?쒖쫵 吏꾨떒", "酉고떚 ?붾젅??移대뱶", "?쇳븨 媛?대뱶"],
    steps: ["而щ윭 遺꾩꽍", "??留ㅽ븨", "?≪뀡 媛?대뱶"],
    faq: [{ q: "由ы룷?몃? 諛쏆쓣 ???덈굹??", a: "?? 媛꾧껐???붿????붿빟???ы븿?⑸땲??" }]
  }
};

I18N.zh.programs = {
  "all-in-one-package": {
    name: "訝塋쇿폀鹽쇔?也쀩쨶",
    location: "腰뽩컮",
    duration: "若싧댍?띌뿴",
    tagline: "遙섊ク K-Beauty 鹽쇔?烏뚨쮮??,
    description: "?끻맜瑥딀??묊렟?곲쥋瀛?뜌?⒲곮죱葉뗨쭊?믣뭽鹽쇔???똻?꾤쭅雅븃러孃꾠?,
    includes: ["燁곦볶?黎귝쿊??, "瑥딀??뽪쐨?▼룕??, "窯꾤벧?뤷뒰", "烏뚨쮮?뤺컘"],
    steps: ["?녵벴?띸궧", "簾??瓮?봇", "簾?츣??똻溫▼닋"],
    faq: [{ q: "?귛릦瘟곻폕", a: "?귛릦躍뚧쐹訝轝▼뜌瘟껈윪?썼???쩀訝ょ렞?귞쉪若€댎?? }]
  },
  "quick-concierge-consultation": {
    name: "燁곦볶?②?",
    location: "瀛요툓 / 腰뽩컮",
    duration: "30?녽뮓",
    tagline: "?됪떓?띶뒦?띷?嶸?뺟쉪寧т?閭γ?,
    description: "歟녕릤??젃?곫뿥?잆곮?鼇?黎귙곲쥋嶸쀨똽?닷뭽訝뗤?閭γ?,
    includes: ["??젃歟녕릤", "?띶뒦?밧릲", "?띌뿴兩븃?", "?②뜍訝뗤?閭?],
    steps: ["?녵벴??젃", "?η쐦?됮」", "?됪떓訝뗤?閭?],
    faq: [{ q: "阿뗥릮??빳?뉒벨?쀯폕", a: "??빳?귛뮜瑥℡릮??퓵?ε쪞繞먩닑?뺡」?뤺컘?? }]
  },
  "skin-clinic-care": {
    name: "?뺡」瑥딀??뤺컘",
    location: "腰뽩컮",
    duration: "?뺞А溫욥뿮",
    tagline: "?삯솫?곮칺??곭풆若방닑佯룟끇?뺡」窯꾤벧??똻??,
    description: "?귛릦藥꿩쐣?띶뒦?밧릲竊뚥퐜?誤곩룕?겹곲쥋瀛╉곫쿊?싧뭽?띌뿴?뤺컘?꾢??룔?,
    includes: ["?띶뒦?숅?, "窯꾤벧瑥룡콆", "?븀?亦잓싨뵱??],
    steps: ["?녵벴?띶뒦?黎?, "?η쐦?됮」", "?뤺컘?띌뿴"],
    faq: [{ q: "??빳?ら쥋瀛╊?轝▼릹竊?, a: "??빳?귝?瓮?푶?귛릦?뺞А?띸궧溫욥뿮?? }]
  },
  "scalp-diagnosis-spa": {
    name: "佯룟끇訝롦걿鸚띹쭊??,
    location: "腰뽩컮",
    duration: "?듿ㄹ壅?,
    tagline: "佯룟끇?곫걿鸚띲갨PA?뚪씆?삯솫?ㅷ릤鰲꾢닋??,
    description: "?당퍞?⒴쎖?쒐븰?띌뿴若됪럲?℡쨳?뗦쐨?▲?,
    includes: ["佯룟끇?띶뒦?묊렟", "?띌뿴鰲꾢닋", "窯꾤벧?뤷뒰"],
    steps: ["?롧‘??젃", "?됪떓?띶뒦瓮?푶", "兩븀쳦烏뚨쮮"],
    faq: [{ q: "?ら솏獰롥??쀯폕", a: "訝띷삸?귚튋??뵱?곩볜?삠갨PA?곮칺??뚧걿鸚띶엹溫욥뿮?? }]
  },
  "celebrity-hair-makeup": {
    name: "獰롥?訝롩졾엹?뤺컘",
    location: "腰뽩컮",
    duration: "?뺞А溫욥뿮",
    tagline: "獰롥??곩룕?뗣곩쫮若밤곮돯壤⒴뭽?졾엹窯꾤벧??,
    description: "?좈??ц눎鸚꾤릤瑥???뚪쥋瀛?펽?녑룾若됪럲遙섊ク獰롥??졾엹?띶뒦??,
    includes: ["獰롥??띶뒦?묊렟", "窯꾤벧瑥룡콆", "?띌뿴兩븃?"],
    steps: ["?녵벴?잍쐹?덃옖", "?η쐦?띶뒦", "?뤺컘窯꾤벧"],
    faq: [{ q: "??빳??똻域삣뒯?녶쨭?쀯폕", a: "??빳?귟??먧풘域삣뒯?ζ쐿?곩쑑?밧뭽?뤷?繇롦졏?? }]
  },
  "personal-color-consultation": {
    name: "遙섊ク若싧댍烏뚨쮮",
    location: "?⒴쎖",
    duration: "鸚싨뿥",
    tagline: "瀯볟릦獰롥??곩볜?삠곮칺??뚩죱葉뗧돥役곭쉪若싧댍溫▼닋??,
    description: "?귛릦鸚싮」窯꾤벧?곩릪烏뚥볶?섉닑?닷츑?닻윪?썼러瀛욜쉪若€댎??,
    includes: ["若싧댍烏뚨쮮", "鸚싮」?띶뒦?뤺컘", "燁곦볶?①봇??똻"],
    steps: ["若싦퉱?껃쎍", "若됪럲?띌뿴", "?뤺컘溫▼닋"],
    faq: [{ q: "??빳?끻맜?뚩죱雅뷴몮?쀯폕", a: "??빳?귛뮜瑥€뿶瑥룩??롥릪烏뚪?黎귙? }]
  }
};

I18N.ja.programs = {
  "all-in-one-package": {
    name: "?ゃ꺖?ャ궎?녈꺈???녈꺍?룔궒?ャ궦?γ깙?껁궞?쇈궦",
    location: "?썬궑??,
    duration: "?ャ궧?욍깲?η쮮",
    tagline: "訝딂나??K-Beauty 鵝볣쮶??,
    description: "??꺁?뗣긿??렋榮㏂곦틛榮꾣뵱?담곫뾽葉뗨쮫?삠곥궠?녈궥?㎯꺂?멥깷?듐깮?쇈깉?믣맜??쀣꺀?ㅳ깧?쇈깉永뚩러?㎯걲??,
    includes: ["?뗥닪?믡궋?ゃ꺍??, "??꺁?뗣긿??겲?잆겘?듐꺖?볝궧?®뇨", "雅덄큵??뤃", "?끿쮮沃욘빐"],
    steps: ["?ゅ뀍雅뗩쟿?믣뀻??, "?ャ꺖?덄▶沃?, "?듐깮?쇈깉鼇덄뵽?믥▶若?],
    faq: [{ q: "沃겹겓?묆걚?╉걚?얇걲?뗰폕", a: "?볟쎖鼇ゅ븦??쨭?계쫨榮졼굮?얇겏?곥겍沃욘빐?쀣걼?꾠걡若€쭣?ラ겑?쀣겍?꾠겲?쇻? }]
  },
  "quick-concierge-consultation": {
    name: "?쀣꺀?ㅳ깧?쇈깉?멱쳡",
    location: "?ゃ꺍?⒲궎??/ ?썬궑??,
    duration: "30??,
    tagline: "?듐꺖?볝궧?멩뒢?띲겗??귞가?섅겒寧т?閭⒲?,
    description: "??쉪?곫뿥葉뗣곮?沃욃툕?쎼곦틛嶸쀣곫А??궧?녴긿?쀣굮?당릤?쀣겲?쇻?,
    includes: ["??쉪?당릤", "?듐꺖?볝궧?밧릲", "?η쮮?㏂깋?먦궎??, "轝▲겗?밤깇?껁깤?먩죭"],
    steps: ["??쉪?길쐣", "?멩뒢?®▶沃?, "轝▲겗?밤깇?껁깤?멩뒢"],
    faq: [{ q: "孃뚣겎?▼섧?㎯걤?얇걲?뗰폕", a: "??걚?귞쎑獄뉐풄?ャ깙?껁궞?쇈궦?꾢뗥닪沃욘빐?면꿔굙?얇걲?? }]
  },
  "skin-clinic-care": {
    name: "?뗥닪??꺁?뗣긿??た??,
    location: "?썬궑??,
    duration: "?섊떖鼇ゅ븦",
    tagline: "?낂솫?곥궚?ゃ깑?껁궚?곭풆若밤곥궑?㎯꺂?띲궧??뜕?т틛榮꾠궢?앫꺖?덀?,
    description: "躍뚧쐹?듐꺖?볝궧?뚣걗?듽곫렋榮㏂곦틛榮꾠곲ｇ덧?곫셽?볢た?담걣恙낁쫨?ゃ걡若€쭣?묆걨?㎯걲??,
    includes: ["?듐꺖?볝궧?숃짒", "雅덄큵堊앶졏", "?뷸쑍?ｇ덧?듐깮?쇈깉"],
    steps: ["躍뚧쐹?듐꺖?볝궧?길쐣", "?멩뒢?®▶沃?, "?귡뼋沃욘빐"],
    faq: [{ q: "1?욁걽?묇틛榮꾠겎?띲겲?쇻걢竊?, a: "??걚?귛뜕?цØ?뤷릲?묆겗永뚩러?㎯걲?? }]
  },
  "scalp-diagnosis-spa": {
    name: "?╉궒?ャ깓??& ?욃쑴?쀣꺀?녈깑?녈궛",
    location: "?썬궑??,
    duration: "?딀뿥餓δ툓",
    tagline: "?╉궒?ャ깓?밤곩썮孃⒲곥궧?묆곲씆?낂솫?긱궋??쮫?삠?,
    description: "?볟쎖譯욃쑉?ュ릦?뤵걵??썮孃⑴내?듐꺖?볝궧?믦쮫?삠걮?얇걲??,
    includes: ["?╉궒?ャ깓?방렋榮?, "?η쮮鼇덄뵽", "雅덄큵??뤃"],
    steps: ["??쉪閻븃첀", "?듐꺖?볝궧永뚩러?멩뒢", "?끿쮮鵝쒏닇"],
    faq: [{ q: "獰롥??졼걨?㎯걲?뗰폕", a: "?꾠걚?덀귙궑?㎯꺂?띲궧?곭풆若밤곥궧?묆곥궚?ゃ깑?껁궚鼇ゅ븦?귛?恙쒌걮?얇걲?? }]
  },
  "celebrity-hair-makeup": {
    name: "獰롥? & ?밤궭?ㅳ꺁?녈궛沃욘빐",
    location: "?썬궑??,
    duration: "?섊떖鼇ゅ븦",
    tagline: "獰롥??곥깦?㏂곥깳?ㅳ궚?곥궖?⒲꺖?곥궧?욍궎?ゃ꺍?겻틛榮꾠?,
    description: "鼇沃욁굜雅덄큵?믢?雅뷩겎嶸←릤?쎼걳?곦툓蘊ゃ겒獰롥??듐꺖?볝궧?믤뎸?띲겎?띲겲?쇻?,
    includes: ["獰롥??듐꺖?볝궧?®뇨", "雅덄큵堊앶졏", "?귡뼋旅덂냵"],
    steps: ["躍뚧쐹?ㅳ깳?쇈궦?길쐣", "?듐꺖?볝궧閻븃첀", "雅덄큵沃욘빐"],
    faq: [{ q: "?ㅳ깧?녈깉繹뽩굺?귛룾?썬겎?쇻걢竊?, a: "??걚?귙궎?쇻꺍?덃뿥?곩졃??곩툕?쎼궧?욍궎?ャ굮?길쐣?쀣겍?뤵걽?뺛걚?? }]
  },
  "personal-color-consultation": {
    name: "?쀣꺃?잆궋???ャ궧?욍깲?끿쮮",
    location: "?볟쎖",
    duration: "筽뉑빊??,
    tagline: "獰롥??곥궑?㎯꺂?띲궧?곥궚?ゃ깑?껁궚?곭㎉?뺛굮永꾠겳?덀굩?쎼걼?뗥닪鼇덄뵽??,
    description: "筽뉑빊雅덄큵?곩릪烏뚩끹곥굠?듿츑?ⓦ겒?볟쎖?ャ꺖?덀걣恙낁쫨?ゃ걡若€쭣?묆걨?㎯걲??,
    includes: ["?ャ궧?욍깲?끿쮮", "筽뉑빊?듐꺖?볝궧沃욘빐", "?쀣꺀?ㅳ깧?쇈깉?뺟퇉?듐깮?쇈깉"],
    steps: ["影꾢쎊若싩쑴", "?η쮮鼇?쮫", "鼇덄뵽沃욘빐"],
    faq: [{ q: "?뚩죱?끹굚?ャ굙?됥굦?얇걲?뗰폕", a: "??걚?귞쎑獄뉑셽?ュ릪烏뚩끹겗誤곫쐹?믡걡?γ굢?쎼걦?졼걬?꾠? }]
  }
};

function isPlainObject(value) {
  return value != null && typeof value === "object" && !Array.isArray(value);
}

function deepMerge(target, source) {
  Object.keys(source).forEach((key) => {
    const next = source[key];
    if (isPlainObject(next)) {
      if (!isPlainObject(target[key])) target[key] = {};
      deepMerge(target[key], next);
      return;
    }
    target[key] = next;
  });
  return target;
}

const LOCALE_PATCH = {
  en: {
    cta: {
      explorePackage: "Add to Cart"
    },
    page: {
      programsLead: "Explore signature itineraries, focused care paths, and private consultation options for international guests.",
      programsHelper: "Not sure where to start? Begin with a Private Consultation.",
      aboutTitle: "Private K-beauty concierge support for international guests visiting Seoul.",
      aboutLead: "Karecation helps guests explore beauty, wellness, clinic, and shopping experiences with more clarity, coordination, and calm.",
      aboutCards: [
        ["Curated discovery", "We help narrow beauty and wellness options around your goals."],
        ["Clear coordination", "Timing, planning, and support stay organized in one guided process."],
        ["Private-first planning", "Review your options and move forward only when the plan feels right."]
      ],
      faqTitle: "Clear answers before you plan.",
      faqLead: "Learn how consultation, coordination, and booking support work.",
      contactTitle: "Concierge support, when you need it.",
      contactLead: "For tailored planning, request a private consultation with your dates and preferred programs.",
      bookingTitle: "Tell us how you want to experience K-beauty in Seoul.",
      bookingLead: "Share your goals, dates, and support needs. Karecation will guide the next step with more clarity and care.",
      requestPlaceholder: "Share your priorities, timing preferences, and support needs.",
      contactChannels: {
        eyebrow: "Contact Channels",
        title: "Choose the channel that works best for you.",
        lead: "Instagram, WeChat, and LINE are available for direct contact.",
        helper: "Scan or tap to connect.",
        openLink: "Open link",
        qrMissing: "Add QR image"
      },
      footer: {
        programs: "Need a starting point? Begin with <strong>Private Consultation ($10)</strong>.",
        about: "Private planning for international guests visiting Seoul.",
        faq: "Still deciding? Request a private consultation.",
        contact: "For faster support, include your dates, preferred programs, and priorities.",
        booking: "Consultation is request-first. Availability, scope, and final payment guidance are confirmed before any visit is finalized.",
        cart: "Prefer to begin with clarity? Add <strong>Private Consultation ($10)</strong>.",
        "program-detail": "Need clarity first? Start with <strong>Private Consultation ($10)</strong>."
      }
    },
    programs: {
      "all-in-one-package": {
        tagline: "Complete itinerary",
        cardDescription: "Best for guests who want a complete Seoul beauty experience.<br>Includes Skin Clinic Care 1, Skin Clinic Care 2, plus any 2 optional programs.<br>Ideal for a polished, private, all-in-one beauty day.",
        description: "A private all-in-one route built for guests who want a complete Seoul beauty day.",
        includes: [
          "Skin Clinic Care 1",
          "Skin Clinic Care 2",
          "Choose any 2 optional programs: Scalp Care, Hair Salon, Hair & Makeup, Nail Care, Body Massage, or Beauty Shopping."
        ],
        steps: [
          "Confirm your two optional programs",
          "Coordinate appointment order and timing",
          "Complete a polished, private beauty itinerary"
        ]
      },
      "quick-concierge-consultation": {
        name: "Private Consultation",
        location: "Online / Seoul",
        duration: "30 mins",
        tagline: "Start with clarity",
        cardDescription: "Best for guests who want tailored guidance before choosing.<br>Includes personalized planning based on goals, timing, and support needs.<br>Ideal if you want clarity before choosing anything else.",
        description: "A focused intake to shape your Seoul beauty plan before selecting programs.",
        includes: [
          "Goal and priority mapping",
          "Timing and support-level planning",
          "Personalized next-step recommendation"
        ]
      },
      "skin-clinic-care-1": {
        name: "Skin Clinic Care 1",
        location: "Gangnam, Seoul",
        duration: "2 hrs",
        tagline: "Tone & texture",
        cardDescription: "Best for guests focused on visible skin refresh.<br>Includes pore care, vitamin tone care, and toning.<br>Optional add-on: beard hair removal for men / underarm or upper-lip hair removal for women.",
        description: "A balanced clinic route designed for tone and texture refresh.",
        includes: [
          "Pore care",
          "Vitamin tone care",
          "Toning"
        ],
        steps: [
          "Skin check and objective setting",
          "Core refresh treatment",
          "Aftercare guidance"
        ],
        faq: [
          { q: "Any optional add-ons?", a: "Beard hair removal for men, or underarm / upper-lip hair removal for women." }
        ]
      },
      "skin-clinic-care-2": {
        name: "Skin Clinic Care 2",
        location: "Gangnam, Seoul",
        duration: "2-3 hrs",
        tagline: "Advanced clinic care",
        cardDescription: "Best for guests who want a more targeted clinic-focused visit.<br>Includes lifting, pigment laser, and wrinkle botox.<br>Final treatment suitability is confirmed through clinic consultation.",
        description: "An advanced clinic path for targeted firmness and pigment-focused results.",
        includes: [
          "Lifting",
          "Pigment laser",
          "Wrinkle botox"
        ],
        steps: [
          "Clinic consultation and candidacy check",
          "Targeted treatment planning",
          "Precision-focused care session"
        ],
        faq: [
          { q: "Is treatment always fixed?", a: "Final treatment suitability is confirmed through clinic consultation." }
        ]
      },
      "scalp-diagnosis-spa": {
        name: "Scalp Care",
        location: "Cheongdam, Seoul",
        duration: "2-3 hrs",
        tagline: "Clean scalp reset",
        cardDescription: "Best for guests who want focused scalp care and a cleaner reset.<br>Includes scalp diagnosis, scaling, and relaxing care.<br>Ideal for a calm, specialized beauty stop.",
        description: "A specialized scalp route for comfort, clarity, and reset.",
        includes: [
          "Scalp diagnosis",
          "Scaling",
          "Relaxing care"
        ]
      },
      "celebrity-hair-makeup": {
        name: "Hair & Makeup",
        location: "Apgujeong, Seoul",
        duration: "2 hrs",
        tagline: "Camera-ready styling",
        cardDescription: "Best for guests who want a styled, polished look.<br>Includes professional hair styling and makeup support.<br>Ideal for events, photos, or a refined day out in Seoul.",
        description: "Professional hair and makeup designed for polished results.",
        includes: [
          "Professional hair styling",
          "Makeup support",
          "Final look balancing"
        ]
      },
      "nail-care": {
        name: "Nail Care",
        location: "Seoul",
        duration: "1-1.5 hrs",
        tagline: "Polished finishing touch",
        cardDescription: "Best for guests who want a neat finishing detail.<br>Includes nail shaping, cuticle care, and color or gel finish.<br>Ideal for a more complete beauty itinerary.",
        description: "A refined nail session for clean detail and polished finish.",
        includes: [
          "Nail shaping",
          "Cuticle care",
          "Color or gel finish"
        ],
        steps: [
          "Shape and prep",
          "Detail care and finishing",
          "Final polish check"
        ],
        faq: [
          { q: "Can I choose color or gel?", a: "Yes. Your preference is confirmed during the session." }
        ]
      },
      "body-massage": {
        name: "Body Massage",
        location: "Seoul",
        duration: "90 mins",
        tagline: "Recovery & relaxation",
        cardDescription: "Best for guests who want recovery, relaxation, and body reset.<br>Includes full-body massage with a focus on comfort and release.<br>Ideal after travel, shopping, or a full beauty day.",
        description: "A comfort-led body reset designed to release tension.",
        includes: [
          "Full-body massage",
          "Comfort-focused pressure adjustment",
          "Recovery-oriented finish"
        ],
        steps: [
          "Condition check",
          "Full-body recovery session",
          "Post-session guidance"
        ],
        faq: [
          { q: "When is this recommended?", a: "It is ideal after travel, shopping, or a full beauty day." }
        ]
      },
      "hair-salon": {
        name: "Hair Salon",
        location: "Seoul",
        duration: "2 hrs",
        tagline: "Cut or clinic",
        cardDescription: "Best for guests who want a refreshed salon finish.<br>Includes a haircut or hair clinic treatment with consultation and finishing.<br>Ideal for a polished Seoul salon experience.",
        description: "A salon path for refreshed structure and finishing detail.",
        includes: [
          "Consultation",
          "Haircut or hair clinic treatment",
          "Finishing"
        ],
        steps: [
          "Consultation and direction",
          "Core salon treatment",
          "Final styling finish"
        ],
        faq: [
          { q: "Can I choose haircut or clinic treatment?", a: "Yes. The final option is confirmed after consultation." }
        ]
      },

    },
    faq: [
      ["What does Karecation help coordinate?", "We help coordinate consultation, scheduling flow, and concierge-level guidance across your preferred programs."],
      ["Can I request only one service?", "Yes. You can request one focused service or build a wider plan."],
      ["Do I need to book a package right away?", "No. You can begin with a private consultation and decide the scope afterward."],
      ["Do you support international guests?", "Yes. Karecation is designed for international guests visiting Seoul."],
      ["Can Karecation help with beauty shopping such as Olive Young?", "Yes. We can include curated beauty shopping support based on your goals and schedule."],
      ["How does payment work?", "Consultation is request-first. Availability, scope, and final payment guidance are confirmed before any visit is finalized."]
    ]
  },
  ko: {
    meta: {
      brandSub: "?꾨━誘몄뾼 K-酉고떚 而⑥떆?댁?",
      nav: ["??, "?꾨줈洹몃옩", "?곷떞", "?뚭컻", "FAQ", "臾몄쓽"],
      cart: "移댄듃",
      footerAbout: "?쒖슱??諛⑸Ц?섎뒗 ?댁쇅 怨좉컼???꾪븳 ?꾨씪?대퉿 K-酉고떚 而⑥떆?댁?.",
      browse: "?섎윭蹂닿린",
      support: "吏??
    },
    cta: {
      viewPrograms: "?꾨줈洹몃옩 蹂닿린",
      viewAllPrograms: "?꾩껜 ?꾨줈洹몃옩",
      viewProgram: "?곸꽭 蹂닿린",
      addToCart: "移댄듃???닿린",
      requestConsultation: "?꾨씪?대퉿 ?곷떞 ?붿껌",
      explorePackage: "移댄듃???닿린",
      startPlanning: "怨꾪쉷 ?쒖옉",
      reviewCart: "移댄듃 ?뺤씤"
    },
    common: {
      startingFrom: "?쒖옉媛",
      noMatchTitle: "?쇱튂?섎뒗 ?꾨줈洹몃옩???놁뒿?덈떎",
      noMatchText: "?ㅻⅨ 寃?됱뼱??移댄뀒怨좊━瑜??쒕룄??蹂댁꽭??",
      selected: "移댄듃???댁븯?듬땲??",
      traveler: "紐?,
      travelers: "紐?,
      subtotal: "?뚭퀎",
      service: "?쒕퉬??5%)",
      total: "?⑷퀎",
      remove: "??젣",
      finalScope: "理쒖쥌 踰붿쐞???곷떞 諛?媛???щ? ?뺤씤 ???뺤젙?⑸땲??",
      noCartItems: "移댄듃???닿릿 ??ぉ???놁뒿?덈떎"
    },
    categories: {
      all: "?꾩껜",
      package: "?⑦궎吏",
      starter: "?곷떞",
      skin: "?ㅽ궓",
      wellness: "?곕땲??,
      styling: "?ㅽ??쇰쭅"
    },
    home: {
      heroEyebrow: "PREMIUM K-BEAUTY, SIMPLIFIED",
      heroTitle: "?쒖슱 K-酉고떚, ?꾨씪?대퉿?섍쾶.",
      heroTitleLines: ["?쒖슱 K-酉고떚,", "?꾨씪?대퉿?섍쾶."],
      heroLead: "?쒖슱??諛⑸Ц?섎뒗 ?댁쇅 怨좉컼???꾪븳 ?꾨씪?대퉿 K-酉고떚 而⑥떆?댁?. ?좊ː?????덈뒗 ?꾨줈洹몃옩???섎윭蹂닿굅??留욎땄 ?곷떞???붿껌??蹂댁꽭??",
      programsEyebrow: "????꾨줈洹몃옩",
      programsTitle: "?섏뿉寃?留욌뒗 寃쎈줈遺???쒖옉?섏꽭??",
      howEyebrow: "?댁슜 諛⑸쾿",
      howTitle: "紐낇솗?섍쾶 ?좏깮?섍퀬, ?꾨씪?대퉿?섍쾶 以鍮꾪븯?몄슂.",
      steps: [
        ["?꾨줈洹몃옩 ?좏깮", "?쒖슱?먯꽌 ?먰븯??酉고떚 寃쏀뿕??留욌뒗 ?먮젅?댁뀡 ?듭뀡??鍮꾧탳?섏꽭??"],
        ["?좏깮 ???, "理쒖쥌 寃곗젙 ?? ?곷떞??寃쎈줈瑜?移댄듃???댁븘 ?뺣━?섏꽭??"],
        ["?곷떞 ?붿껌", "?좎쭨, 紐⑺몴, ?몄뼱 吏?? ?좏샇 吏???섏????뚮젮二쇱꽭??"],
        ["議곗쑉 吏꾪뻾", "Karecation???꾨씪?대쾭?쒕? 吏?ㅻŉ ?ㅼ쓬 ?④퀎瑜??덈궡?⑸땲??"]
      ],
      trustEyebrow: "??Karecation?멸???,
      trustTitle: "???꾨씪?대퉿?섍쾶, ??紐낇솗?섍쾶.",
      trust: [
        ["留욎땄 ?뚮옒??, "紐⑺몴, ?쇱젙, ?좏샇?? 酉고떚 ?곗꽑?쒖쐞??留욎떠 ?ㅺ퀎?⑸땲??"],
        ["?좊ː 湲곕컲 ?먯깋", "?대━?? 酉고떚, ?쇳븨 ?듭뀡????紐낇솗?섍쾶 鍮꾧탳?????덉뒿?덈떎."],
        ["?ㅺ뎅??吏??, "?쒖슱 諛⑸Ц ?댁쇅 怨좉컼???명븯寃?吏꾪뻾?????덈룄濡??ㅺ퀎?덉뒿?덈떎."]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "?쒖옉 ?꾩뿉 ?뺤씤?섏꽭??",
      finalEyebrow: "怨꾪쉷 ?쒖옉",
      finalTitle: "?쒖슱 酉고떚 寃쏀뿕, 以鍮꾨릺?⑤굹??"
    },
    page: {
      programsEyebrow: "?꾨줈洹몃옩",
      programsTitle: "?섏뿉寃?留욌뒗 ?쒖슱 酉고떚 寃쎈줈瑜??좏깮?섏꽭??",
      programsLead: "?꾩꽦???⑦궎吏, 吏묒쨷???쒕퉬?? ?꾨씪?대퉿 ?곷떞 ?듭뀡??鍮꾧탳??蹂댁꽭?? ?대뵒???쒖옉?좎? 怨좊??쒕떎硫??꾨씪?대퉿 ?곷떞遺???쒖옉?섏꽭??",
      searchPlaceholder: "?꾨줈洹몃옩 寃??,
      sortRecommended: "?뺣젹: 異붿쿇??,
      priceAsc: "媛寃? ??? ??,
      priceDesc: "媛寃? ?믪? ??,
      aboutEyebrow: "?뚭컻",
      aboutTitle: "?쒖슱??諛⑸Ц?섎뒗 ?댁쇅 怨좉컼???꾪븳 ?꾨씪?대퉿 K-酉고떚 而⑥떆?댁?.",
      aboutLead: "Karecation? 酉고떚, ?곕땲?? ?대━?? ?쇳븨 寃쏀뿕????紐낇솗?섍퀬 李⑤텇?섍쾶 議곗쑉?⑸땲??",
      aboutCards: [
        ["?먮젅?댁뀡 ?먯깋", "紐⑺몴??留욎떠 酉고떚? ?곕땲???듭뀡??醫곹??쒕┰?덈떎."],
        ["紐낇솗??議곗쑉", "?쇱젙, ?뚮옒?? 吏?먯쓣 ?섎굹??媛?대뱶???먮쫫?쇰줈 ?뺣룉?⑸땲??"],
        ["?꾨씪?대퉿 ?곗꽑 ?뚮옒??, "?뚮옖??異⑸텇??留욌떎怨??먭뺨吏??뚮쭔 ?ㅼ쓬 ?④퀎濡?吏꾪뻾?섏꽭??"]
      ],
      aboutFlowEyebrow: "吏꾪뻾 ?먮쫫",
      aboutSteps: [
        ["怨듭쑀", "紐⑺몴, ?좎쭨, 吏???붿껌???뚮젮二쇱꽭??"],
        ["怨꾪쉷", "?먮젅?댁뀡???듭뀡怨?紐낇솗???쒖슱 ?쇱젙?덉쓣 ?뺤씤?⑸땲??"],
        ["議곗쑉", "而⑥떆?댁? ?덈궡? ?④퍡 ?덉빟 議곗쑉??吏꾪뻾?⑸땲??"]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "怨꾪쉷 ?꾩뿉 ?뺤씤?섏꽭??",
      faqLead: "?곷떞, 議곗쑉, ?덉빟 吏?먯씠 ?대뼸寃?吏꾪뻾?섎뒗吏 ?뚮젮?쒕┰?덈떎.",
      contactTitle: "?꾩슂????諛붾줈 ?곌껐?섎뒗 而⑥떆?댁? 吏??",
      contactLead: "?좏샇 ?좎쭨? ?먰븯???쒕퉬?ㅻ? ?④꺼二쇱떆硫??꾨씪?대퉿 ?곷떞?쇰줈 ?ㅼ쓬 ?④퀎瑜??덈궡?⑸땲??",
      bookingTitle: "?쒖슱?먯꽌 ?대뼡 K-酉고떚 寃쏀뿕???먰븯?붿? ?뚮젮二쇱꽭??",
      bookingLead: "紐⑺몴, ?좎쭨, 吏???붿껌??怨듭쑀??二쇱꽭?? Karecation???ㅼ쓬 ?④퀎瑜?李⑤텇?섍쾶 ?덈궡?⑸땲??",
      bookingDetails: "怨좉컼 ?뺣낫",
      selectedPath: "?좏깮??寃쎈줈",
      fullName: "?대쫫",
      email: "?대찓??,
      nationality: "援?쟻",
      requestNote: "異붽? ?붿껌",
      requestPlaceholder: "?곗꽑?쒖쐞, ?좏샇 ?좎쭨, ?꾩슂??吏???댁슜???곸뼱二쇱꽭??",
      cartEyebrow: "?좏깮??寃쎈줈",
      cartTitle: "?곷떞 ???붿껌 ?댁슜???뺤씤?섏꽭??",
      cartLead: "?꾨줈洹몃옩, ?몄썝, ?좏샇 ?좎쭨瑜??뺤씤?????붿껌??蹂대궡?몄슂.",
      estimatedScope: "?덉긽 湲덉븸",
      proceed: "?꾨씪?대퉿 ?곷떞 ?붿껌",
      exploreMore: "?꾨줈洹몃옩 ??蹂닿린",
      footer: {
        programs: "?쒖옉???대졄?ㅻ㈃ <strong>?꾨씪?대퉿 ?곷떞 ($10)</strong>遺??",
        about: "?쒖슱 諛⑸Ц ?? ?꾨씪?대퉿?섍쾶 寃곗젙?섏꽭??",
        faq: "?꾩쭅 怨좊? 以묒씠?쇰㈃ ?꾨씪?대퉿 ?곷떞???붿껌?섏꽭??",
        contact: "??鍮좊Ⅸ ?덈궡瑜??꾪빐 ?좎쭨쨌?쒕퉬?ㅒ룹슦?좎닚?꾨? ?④퍡 ?④꺼二쇱꽭??",
        booking: "?곷떞? ?붿껌 ?곗꽑 諛⑹떇?낅땲?? 諛⑸Ц ?뺤젙 ??媛???щ?, 踰붿쐞, 理쒖쥌 寃곗젣 ?덈궡瑜??뺤씤?⑸땲??",
        cart: "媛蹂띻쾶 ?쒖옉?섍퀬 ?띕떎硫?<strong>?꾨씪?대퉿 ?곷떞 ($10)</strong>??異붽??섏꽭??",
        "program-detail": "癒쇱? 諛⑺뼢???꾩슂?섎떎硫?<strong>?꾨씪?대퉿 ?곷떞 ($10)</strong>?쇰줈 ?쒖옉?섏꽭??"
      }
    },
    programs: {
      "all-in-one-package": {
        name: "?ъ씤???⑦궎吏",
        location: "?쒖슱",
        duration: "?섎（+",
        tagline: "紐⑤뱺 ?꾨줈洹몃옩 ?ы븿.",
        cardDescription: "?꾩꽦???믪? ?쒖슱 酉고떚 ?섎（瑜??먰븯??遺꾧퍡.<br>?대━??耳?? ?먰뵾 耳?? ?ㅼ뼱쨌硫붿씠?ъ뾽, 酉고떚 ?쇳븨???ы븿?⑸땲??<br>?꾨씪?대퉿 ?숉뻾?쇰줈 ?섎（瑜??뺣룉??吏꾪뻾?섍린 醫뗭뒿?덈떎.",
        includes: [
          "紐⑤뱺 ?꾨줈洹몃옩",
          "臾대즺 ?쒕퉬?? 而⑥떆?댁? ?숉뻾, ?쇱뒪???щ━釉뚯쁺 ?쇳븨 吏?? ?쎌뾽 & ?쒕∼?ㅽ봽 吏??
        ]
      },
      "quick-concierge-consultation": {
        name: "?꾨씪?대퉿 ?곷떞",
        location: "?⑤씪??/ ?쒖슱",
        duration: "30遺?,
        cardDescription: "?좏깮 ?꾩뿉 諛⑺뼢???↔퀬 ?띠? 遺꾧퍡.<br>紐⑺몴, ?쇱젙, ?꾩슂??吏???섏???留욎텣 留욎땄 ?곷떞???ы븿?⑸땲??<br>?덉빟 ??湲곗???紐낇솗???섍퀬 ?띠? 遺꾧퍡 ?곹빀?⑸땲??"
      },
      "skin-clinic-care": {
        name: "?ㅽ궓 ?대━??耳??,
        location: "媛뺣궓, ?쒖슱",
        duration: "2?쒓컙",
        cardDescription: "?쇰? 以묒떖???대━??耳?대? ?먰븯??遺꾧퍡.<br>?대━??議곗쑉怨?媛?대뱶 ?뚮옒?앹쓣 ?ы븿?⑸땲??<br>??紐낇솗?섍퀬 ?먯떊 ?덇쾶 諛⑸Ц??以鍮꾪븷 ???덉뒿?덈떎."
      },
      "scalp-diagnosis-spa": {
        name: "?먰뵾 吏꾨떒 & ?ㅽ뙆",
        location: "泥?떞, ?쒖슱",
        duration: "2-3?쒓컙",
        cardDescription: "吏묒쨷 ?먰뵾 吏꾨떒怨?耳?대? ?먰븯??遺꾧퍡.<br>?먰뵾 ?곷떞怨??몃━?몃㉫??吏?먯쓣 ?ы븿?⑸땲??<br>李⑤텇?섍퀬 ?꾨Ц?곸씤 耳???ㅽ깙?쇰줈 異붿쿇?⑸땲??"
      },
      "celebrity-hair-makeup": {
        name: "??щ툕由ы떚 ?ㅼ뼱 & 硫붿씠?ъ뾽",
        location: "?뺢뎄?? ?쒖슱",
        duration: "2?쒓컙",
        cardDescription: "?ㅽ??쇰뱶?섍퀬 移대찓??以鍮꾨맂 猷⑹쓣 ?먰븯??遺꾧퍡.<br>?꾩꽦???믪? 酉고떚 ?ㅽ??쇰쭅 吏?먯쓣 ?ы븿?⑸땲??<br>?됱궗, 珥ъ쁺, 以묒슂???쇱젙 ??以鍮꾩뿉 ?곹빀?⑸땲??"
      },
      "personal-color-consultation": {
        name: "?쇱뒪??而щ윭 ?곷떞",
        location: "?깆닔, ?쒖슱",
        duration: "2?쒓컙",
        cardDescription: "硫붿씠?ъ뾽쨌?ㅼ뼱쨌?ㅽ????좏깮???뺣━?섍퀬 ?띠? 遺꾧퍡.<br>?쇱뒪??而щ윭 遺꾩꽍怨??ㅼ슜?곸씤 ?붾젅??媛?대뱶瑜??ы븿?⑸땲??<br>?쇱긽 ?ㅽ???寃곗젙????紐낇솗?섍쾶 ?꾩?以띾땲??"
      }
    },
    faq: [
      ["Karecation? ?대뼡 遺遺꾩쓣 議곗쑉??二쇰굹??", "?곷떞, ?쇱젙 ?먮쫫, ?좏깮?섏떊 ?꾨줈洹몃옩 ?꾨컲??而⑥떆?댁? 議곗쑉???꾩??쒕┰?덈떎."],
      ["?쒕퉬???섎굹留??붿껌?대룄 ?섎굹??", "?? ??媛吏 ?쒕퉬?ㅻ쭔 ?⑤룆?쇰줈 ?붿껌?섏떎 ???덉뒿?덈떎."],
      ["泥섏쓬遺???⑦궎吏瑜??덉빟?댁빞 ?섎굹??", "?꾨땲?? ?꾨씪?대퉿 ?곷떞?쇰줈 ?쒖옉????踰붿쐞瑜?寃곗젙?섏뀛???⑸땲??"],
      ["?댁쇅 怨좉컼???댁슜?????덈굹??", "?? Karecation? ?쒖슱??諛⑸Ц?섎뒗 ?댁쇅 怨좉컼???꾪빐 ?ㅺ퀎?섏뿀?듬땲??"],
      ["?щ━釉뚯쁺 媛숈? 酉고떚 ?쇳븨??吏?먰븯?섏슂?", "?? 紐⑺몴? ?쇱젙??留욎떠 ?먮젅?댁뀡???쇳븨 ?숈꽑???④퍡 援ъ꽦?????덉뒿?덈떎."],
      ["寃곗젣???대뼸寃?吏꾪뻾?섎굹??", "?곷떞? ?붿껌 ?곗꽑 諛⑹떇?낅땲?? 諛⑸Ц ?뺤젙 ??媛???щ?, 踰붿쐞, 理쒖쥌 寃곗젣 ?덈궡瑜?癒쇱? ?뺤씤?⑸땲??"]
    ]
  },
  zh: {
    meta: {
      brandSub: "遙섊ク K-Beauty 鹽쇔??띶뒦",
      nav: ["腰뽭〉", "窈밭쎅", "?②?", "?념틢", "FAQ", "?붺내"],
      cart: "兀?돥饔?,
      footerAbout: "訝뷸씎腰뽩컮?꾢쎖?낁?若€룓堊쏁쭅雅?K-Beauty 鹽쇔???똻??,
      browse: "役뤺쭏",
      support: "??똻"
    },
    cta: {
      viewPrograms: "?η쐦窈밭쎅",
      viewAllPrograms: "?η쐦?③깿窈밭쎅",
      viewProgram: "?η쐦瑥?깄",
      addToCart: "?졾뀯兀?돥饔?,
      requestConsultation: "?녘?燁곦벴?②?",
      explorePackage: "?졾뀯兀?돥饔?,
      startPlanning: "凉冶뗨쭊??,
      reviewCart: "?η쐦兀?돥饔?
    },
    common: {
      startingFrom: "壅룝뻔",
      noMatchTitle: "亦→쐣?백뀓?꾦」??,
      noMatchText: "瑥룟컼瑥뺝끀餓뽩뀽??칾?뽩늽映삠?,
      selected: "藥꿨뒥?θ눌?⑵쉐??,
      traveler: "雅?,
      travelers: "雅?,
      subtotal: "弱뤺?",
      service: "?띶뒦兀?(5%)",
      total: "?덅?",
      remove: "?좈솮",
      finalScope: "?瀯덅똽?닷컛?ⓨ뮜瑥℡뭽??쥋瀛?㎫‘溫ㅵ릮簾?츣??,
      noCartItems: "兀?돥饔?쉨?좈」??
    },
    categories: {
      all: "?③깿",
      package: "也쀩쨶",
      starter: "?②?",
      skin: "??궎",
      wellness: "?삥뒪",
      styling: "?졾엹"
    },
    home: {
      heroEyebrow: "PREMIUM K-BEAUTY, SIMPLIFIED",
      heroTitle: "燁곦벴獰롣맒竊뚥퍗若밧츎?믡?,
      heroTitleLines: ["燁곦벴獰롣맒竊?, "餓롥?若됪럲??],
      heroLead: "訝뷸씎腰뽩컮?꾢쎖?낁?若€룓堊쏁쭅雅?K-Beauty 鹽쇔???똻?귛룾役뤺쭏??에窈밭쎅竊뚧닑饔삥씭?녘?若싧댍?②???,
      programsEyebrow: "暎얗됮」??,
      programsTitle: "?덁퍗??귛릦鵝좂쉪瓮?푶凉冶뗣?,
      howEyebrow: "役곭쮮",
      howTitle: "歷끾솻?됪떓竊뚨쭅雅ヨ쭊?믭펽餓롥??계???,
      steps: [
        ["?됪떓窈밭쎅", "?됦퐷?녘쫨?꾦쫿弱붺풆訝썰퐪謠뚧탲鰲덄꼐?됮됮」??],
        ["岳앭춼?됪떓", "?ⓩ?瀯덂넶若싧뎺竊뚧뒍?녘?溫븀쉪瓮?푶?덂뒥?θ눌?⑵쉐??],
        ["?녘??②?", "?딁윥?ζ쐿?곭쎅?뉎곮?鼇?黎귚툗??똻?뤷???],
        ["瓦쎾뀯?뤺컘", "Karecation 弱녵빳?닸툍?겹곭쭅野녺쉪?밧폀?②퓵訝뗤?閭γ?]
      ],
      trustEyebrow: "訝뷰?阿덆됪떓 Karecation",
      trustTitle: "燁곦벴??똻竊뚦넶嶺뽪쎍歷끾솻??,
      trust: [
        ["若싧댍鰲꾢닋", "?당퍞鵝좂쉪??젃?곫뿶?닷뭽鴉섇뀍雅뗩」瓦쏂죱溫얕???],
        ["??에?®뇨", "?닸툍?겼쑑驪붻푵瑥딀??곭풆若밥툗兀?돥?됮」??],
        ["鸚싪?鼇??똻", "躍?뒰?썽솀溫욕??닺슥?얍쑑若뚧닇役곭쮮??]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "凉冶뗥뎺?덁틙鰲ｃ?,
      finalEyebrow: "凉冶뗨쭊??,
      finalTitle: "?녶쨭也썼쭊?믢퐷?꾦쫿弱붺풆訝썰퐪謠뚥틙?쀯폕"
    },
    page: {
      programsEyebrow: "窈밭쎅",
      programsTitle: "?됪떓??귛릦鵝좂쉪腰뽩컮獰롣맒瓮?푶??,
      programsLead: "?®뇨若뚧빐也쀩쨶?곩뜒窈방쐨?▼뭽燁곦벴?②??됮」?귟떏訝띸‘若싦퍗?ら뇤凉冶뗰펽??뀍餓롧쭅雅ュ뮜瑥℡?冶뗣?,
      searchPlaceholder: "?쒐뇨窈밭쎅",
      sortRecommended: "?믣틣竊싨렓??,
      priceAsc: "餓룡졏竊싦퍗鵝롥댆遙?,
      priceDesc: "餓룡졏竊싦퍗遙섇댆鵝?,
      aboutEyebrow: "?념틢",
      aboutTitle: "訝뷸씎腰뽩컮?꾢쎖?낁?若€룓堊쏁쭅雅?K-Beauty 鹽쇔???똻??,
      aboutLead: "Karecation 躍?뒰鵝졽빳?닸툍?겹곫쎍?됬㎥佯뤵곫쎍餓롥??꾣뼶凉뤸렋榮®풆若밤곩끇?ㅳ곮칺?訝롨눌?⒳퐪謠뚣?,
      aboutCards: [
        ["暎얗됪렋榮?, "?방뜮鵝좂쉪??젃竊뚨섄弱뤹풆若밥툗?삥뒪?됮」??],
        ["歷끾솻?뤺컘", "?딀뿶?담곮쭊?믢툗??똻?닷릦?ⓨ릪訝役곭쮮訝??],
        ["燁곦벴鴉섇뀍鰲꾢닋", "?덂??끾뼶旅덌펽簾?츣?덆귛릮?띹퓵?δ툔訝閭γ?]
      ],
      aboutFlowEyebrow: "役곭쮮",
      aboutSteps: [
        ["?먧벡?黎?, "?딂칹?묇뺄鵝좂쉪??젃?곫뿥?잌뭽??똻?黎귙?],
        ["簾???방죭", "?η쐦暎얗됮됮」訝롦툍?곁쉪腰뽩컮烏뚨쮮?귛쪕??],
        ["?뤺컘?②퓵", "?①ㅌ若얏뵱?곦툔?②퓵窯꾤벧訝롥츎?믡?]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "鰲꾢닋?띶뀍?뗦툍璵싥?,
      faqLead: "雅녻㎗?②??곩뜌瘟껂툗窯꾤벧??똻倻귚퐬瓦쏂죱??,
      contactTitle: "?誤곫뿶竊뚪쉹?뜹룾?붺내?꾤ㅌ若얏뵱?곥?,
      contactLead: "倻귡?若싧댍鰲꾢닋竊뚩??먧벡鵝좂쉪?ζ쐿?뚦걦也썸쐨?∽펽?녘?燁곦벴?②???,
      bookingTitle: "?딂칹?묇뺄鵝졾툕?쎾쫩鵝뺜퐪謠뚪쫿弱?K-Beauty??,
      bookingLead: "?녵벴鵝좂쉪??젃?곫뿥?잌뭽??똻?黎귙괡arecation 鴉싦빳?닸툍?겹곭퍏?당쉪?밧폀凉뺝?訝뗤?閭γ?,
      bookingDetails: "鵝좂쉪岳→겘",
      selectedPath: "藥꿴됭러孃?,
      fullName: "冶볟릫",
      email: "???",
      nationality: "?썹콑",
      requestNote: "?꾢뒥?黎?,
      requestPlaceholder: "瑥룟∥?쇾폍?덁틟窈밤곫뿶?닷걦也썲뭽??똻?黎귙?,
      cartEyebrow: "藥꿴됭러孃?,
      cartTitle: "?②??띶뀍簾??鵝좂쉪瑥룡콆??,
      cartLead: "?묌곮?黎귛뎺竊뚩?簾??窈밭쎅?곦볶?겻툗?뤷??ζ쐿??,
      estimatedScope: "窯꾡섟?묌쥫",
      proceed: "?녘?燁곦벴?②?",
      exploreMore: "?η쐦?닷쩀瓮?푶",
      footer: {
        programs: "訝띸‘若싧쫩鵝뺝?冶뗰폕?덁퍗 <strong>燁곦벴?②? ($10)</strong> 凉冶뗣?,
        about: "?ⓨ댆溫욥쫿弱붷뎺竊뚧쎍燁곩칳?겼걳?뷸툍?겼넶若싥?,
        faq: "瓦섇쑉?껇솑訝?폕??뀍?녘?燁곦벴?②???,
        contact: "訝뷸쎍恙ュ썮鸚랃펽瑥룝?亮뜻룓堊쎿뿥?잆곩걦也썸쐨?▼뭽鴉섇뀍雅뗩」??,
        booking: "?②?訝뷜쒎뀍?녘??앮탛葉뗣귛댆溫욜‘溫ㅵ뎺竊뚧닊餓т폏?덄‘溫ㅵ룾窯꾤벧?㎯곫쐨?↑똽?답툗?瀯덁퍡轝얕??롢?,
        cart: "?녘슥?뤷?冶뗰폕??뀍曆삣뒥 <strong>燁곦벴?②? ($10)</strong>??,
        "program-detail": "?녑뀍?롧‘?밧릲竊잌룾餓?<strong>燁곦벴?②? ($10)</strong> 凉冶뗣?
      }
    },
    programs: {
      "all-in-one-package": {
        name: "?ⓨ쪞訝?ζ뼶旅?,
        location: "腰뽩컮",
        duration: "?ⓨㄹ+",
        tagline: "?③깿窈밭쎅藥꿨똿?ャ?,
        cardDescription: "?귛릦躍뚧쐹若뚧빐鵝볣챿腰뽩컮獰롣맒烏뚨쮮?꾥?若㏂?br>?끻맜瑥딀??ㅷ릤?곩ㅄ??뒪?녴곩룕倻녽졾엹訝롧풆倻녻눌?⒲?br>?귛릦?볣좂꼐?담곭쭅雅ョ쉪訝?ε츎?믡?,
        includes: [
          "?③깿窈밭쎅",
          "?띹뉩?띶뒦竊싩ㅌ若얗솵?뚣갣live Young 兀?돥??똻?곫렏?곫뵱??
        ]
      },
      "quick-concierge-consultation": {
        name: "燁곦벴?②?",
        location: "瀛요툓 / 腰뽩컮",
        duration: "30?녽뮓",
        cardDescription: "?귛릦?녑쑉?됪떓?띶뀍?롧‘?밧릲?꾥?若㏂?br>?끻맜?당퍞??젃?곫뿶?답툗??똻?黎귞쉪訝ゆ㎩뙑鰲꾢닋??br>?귛릦?③쥋溫℡뎺?덂뻠塋뗦툍?겼닩???
      },
      "skin-clinic-care": {
        name: "??궎瑥딀??ㅷ릤",
        location: "腰뽩컮",
        duration: "2弱뤸뿶",
        cardDescription: "?귛릦?싩꽗??궎?뽪꼇?쀥엹?ㅷ릤?꾥?若㏂?br>?끻맜瑥딀??뤺컘訝롥폊野쇔폀鰲꾢닋??br>溫⒴댆溫욘쎍歷끾솻?곫쎍若됧퓘??
      },
      "scalp-diagnosis-spa": {
        name: "鸚당슢瑥딀뼪訝롦뒪??,
        location: "腰뽩컮",
        duration: "2-3弱뤸뿶",
        cardDescription: "?귛릦躍뚧쐹瓦쏂죱訝볣」鸚당슢瑥딀뼪訝롦뒪?녺쉪溫욕???br>?끻맜鸚당슢?②?訝롦뒪?녷뵱?곥?br>?귛릦鵝쒍맏若됮쓾?곦툜訝싩쉪?ㅷ릤塋숂궧??
      },
      "celebrity-hair-makeup": {
        name: "?롦삜瀛㎩룕倻녽졾엹",
        location: "腰뽩컮",
        duration: "2弱뤸뿶",
        cardDescription: "?귛릦躍뚧쐹?룟풓訝딃븳暎얕눜?덃옖?꾥?若㏂?br>?끻맜遙섇츑?먨벧?꾦졾엹??똻??br>?귛릦域삣뒯?곫땷?꾣닑?띹쫨烏뚨쮮?띶뇛鸚뉎?
      },
      "personal-color-consultation": {
        name: "訝や볶?꿨쉘?②?",
        location: "腰뽩컮",
        duration: "2弱뤸뿶",
        cardDescription: "?귛릦躍뚧쐹歟녕릤倻녶룕訝롧㈎??됪떓?꾥?若㏂?br>?끻맜訝や볶?꿨쉘?녷옄訝롥츩?③뀓?꿩뙁野쇈?br>躍?뒰?ε만繇롦졏?녕춺?닸툍?겹?
      }
    },
    faq: [
      ["Karecation ??빳?뤺컘?や틳?끻?竊?, "?묇뺄??뜌瘟껃뮜瑥㏂곮죱葉뗨뒄也뤶빳?듾퐷??됮」??쉪鹽쇔???똻??],
      ["??빳?ょ뵵瑥룝?訝ゆ쐨?▼릹竊?, "??빳?귚퐷??빳?ょ뵵瑥룝?訝ゅ뜒窈방쐨?▲?],
      ["?誤곦?凉冶뗥갚窯꾥?也쀩쨶?쀯폕", "訝띺?誤곥귚퐷??빳?덁퍗燁곦벴?②?凉冶뗰펽?띶넶若싨쐨?↑똽?담?],
      ["??똻?썽솀溫욕??쀯폕", "??똻?괡arecation 訝볞맏?계?腰뽩컮?꾢쎖?낁?若??溫▲?],
      ["??빳?뤷뒰 Olive Young 嶺됬풆倻녻눌?⒴릹竊?, "??빳?귝닊餓у룾?방뜮鵝좂쉪??젃訝롦뿥葉뗥뒥?η꼐?됭눌?⒵뵱?곥?],
      ["餓섉Ь倻귚퐬瓦쏂죱竊?, "?②?訝뷜쒎뀍?녘??앮탛葉뗣귛댆溫욜‘溫ㅵ뎺竊뚥폏?덄‘溫ㅵ룾窯꾤벧?㎯곮똽?답툗?瀯덁퍡轝얕??롢?]
    ]
  },
  ja: {
    meta: {
      brandSub: "?쀣꺃?잆궋??K-Beauty ?녈꺍?룔궒?ャ궦??,
      nav: ["?쎼꺖??, "?쀣꺆?겹꺀??, "?멱쳡", "榮밥퍔", "FAQ", "?듿븦?꾢릦?뤵걵"],
      cart: "?ャ꺖??,
      footerAbout: "?썬궑?ャ굮鼇ゃ굦?뗦돈鸚뽧궟?밤깉??걼?곥겗?곥깤?⒲궎?쇻꺖??K-Beauty ?녈꺍?룔궒?ャ궦?γ?,
      browse: "?꿱├",
      support: "?듐깮?쇈깉"
    },
    cta: {
      viewPrograms: "?쀣꺆?겹꺀?졼굮誤뗣굥",
      viewAllPrograms: "?쇻겧?╉겗?쀣꺆?겹꺀??,
      viewProgram: "屋녕눗?믦쫳??,
      addToCart: "?ャ꺖?덀겓瓦썲뒥",
      requestConsultation: "?쀣꺀?ㅳ깧?쇈깉?멱쳡?믢풚??,
      explorePackage: "?ャ꺖?덀겓瓦썲뒥",
      startPlanning: "鼇덄뵽?믣쭓?곥굥",
      reviewCart: "?ャ꺖?덀굮閻븃첀"
    },
    common: {
      startingFrom: "?뗥쭓堊→졏",
      noMatchTitle: "訝?담걲?뗣깤??궛?⒲깲?뚣걗?듽겲?쎼굯",
      noMatchText: "?γ겗??꺖??꺖?됥굜?ャ깇?담꺁?㎯걡屋╉걮?뤵걽?뺛걚??,
      selected: "?믡궖?쇈깉?ヨ옙?졼걮?얇걮?잆?,
      traveler: "??,
      travelers: "??,
      subtotal: "弱뤺쮫",
      service: "?듐꺖?볝궧??(5%)",
      total: "?덅쮫",
      remove: "?딃솮",
      finalScope: "?永귞칱?꿔겘?곭쎑獄뉎겏令뷩걤?뜻퀋閻븃첀孃뚣겓閻뷴츣?쀣겲?쇻?,
      noCartItems: "?ャ꺖?덀겓?끿쎅?뚣걗?듽겲?쎼굯"
    },
    categories: {
      all: "?쇻겧??,
      package: "?묆긿?긱꺖??,
      starter: "?멱쳡",
      skin: "?밤궘??,
      wellness: "?╉궒?ャ깓??,
      styling: "?밤궭?ㅳ꺁?녈궛"
    },
    home: {
      heroEyebrow: "PREMIUM K-BEAUTY, SIMPLIFIED",
      heroTitle: "獰롢걮?뺛굮?곥깤?⒲궎?쇻꺖?덀겓??,
      heroTitleLines: ["獰롢걮?뺛굮??, "?쀣꺀?ㅳ깧?쇈깉?ャ?],
      heroLead: "?썬궑?ャ굮鼇ゃ굦?뗦돈鸚뽧궟?밤깉?묆걨??깤?⒲궎?쇻꺖??K-Beauty ?녈꺍?룔궒?ャ궦?γ귚에?쇈겎?띲굥?쀣꺆?겹꺀?졼굮驪붻펱?쀣곩퓚誤곥겓恙쒌걯??뗥닪?멱쳡?믢풚?쇈겎?띲겲?쇻?,
      programsEyebrow: "力①쎅?쀣꺆?겹꺀??,
      programsTitle: "?귙겒?잆겓?덀걝?ャ꺖?덀걢?됧쭓?곥겲?쀣굟?녴?,
      howEyebrow: "?붷닶?ⓦ겗役곥굦",
      howTitle: "?롧▶?ラ겦?녈곥깤?⒲궎?쇻꺖?덀겓繹뽩굺?쇻굥??,
      steps: [
        ["?쀣꺆?겹꺀?졼굮?멥겤", "?썬궑?ャ겎?뜰걟?잆걚獰롥?鵝볣쮶?ュ릦?뤵걵?╉곩렢?멥궕?쀣궥?㎯꺍?믤캈雍껁걮?얇걲??],
        ["?멩뒢?믢퓷耶?, "?永귝군若싧뎺?ャ곭쎑獄뉎걮?잆걚?ャ꺖?덀굮?ャ꺖?덀겦岳앭춼?쀣겲?쇻?],
        ["?멱쳡?믢풚??, "?η쮮?곭쎅?꾠곮?沃욁궢?앫꺖?덀곩툕?쎼걲?뗦뵱?담꺃?쇻꺂?믣뀻?됥걮?얇걲??],
        ["沃욘빐?믧꿔굙??, "Karecation ?뚣깤?⒲궎?먦궥?쇈굮若덀굤?ゃ걣?됪А??궧?녴긿?쀣굮旅덂냵?쀣겲?쇻?]
      ],
      trustEyebrow: "Karecation ?믧겦?띄릤??,
      trustTitle: "?덀굤?쀣꺀?ㅳ깧?쇈깉?ャ곥굠?딀삇閻뷩겓??,
      trust: [
        ["?녴꺖?⒲꺖?됭Þ鼇?, "??쉪?삥뿥葉뗣꺕?ゅ뀍?녵퐤?ュ릦?뤵걵?╉깤?⒲꺍?믤빐?덀겲?쇻?],
        ["岳↓졏?㎯걤?뗦캈雍?, "??꺁?뗣긿??곭풆若밤곥궥?㎯긿?붵꺍?겹겗?멩뒢?㏂굮?롧▶?ユ캈雍껁겎?띲겲?쇻?],
        ["鸚싪?沃욁궢?앫꺖??, "役룟쨼?꿔궧?덀걣若됧퓘?쀣겍?꿔굙?됥굦?뗣굠?녻Þ鼇덀걮?╉걚?얇걲??]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "冶뗣굙?뗥뎺?ャ?,
      finalEyebrow: "鼇덄뵽?믣쭓?곥굥",
      finalTitle: "?썬궑?ョ풆若밥퐪蟯볝겗繹뽩굺??겎?띲겍?꾠겲?쇻걢竊?
    },
    page: {
      programsEyebrow: "?쀣꺆?겹꺀??,
      programsTitle: "?귙겒?잆겓?덀걝?썬궑?ョ풆若밤꺂?쇈깉?믧겦?녈겲?쀣굟?녴?,
      programsLead: "?뺛꺂?묆긿?긱꺖?멥곲썓訝?궢?앫꺖?덀곩뗥닪?멱쳡?ゃ깤?룔깾?녈굮驪붻펱?㎯걤?얇걲?귟옆?녶졃?덀겘?곥겲?싥깤?⒲궎?쇻꺖?덄쎑獄뉎걢?됧쭓?곥겍?뤵걽?뺛걚??,
      searchPlaceholder: "?쀣꺆?겹꺀?졼굮濾쒐뇨",
      sortRecommended: "訝╉겞?욍걟竊싥걡?쇻걲?곲젂",
      priceAsc: "堊→졏竊싧츎?꾦젂",
      priceDesc: "堊→졏竊싮쳵?꾦젂",
      aboutEyebrow: "榮밥퍔",
      aboutTitle: "?썬궑?ャ굮鼇ゃ굦?뗦돈鸚뽧궟?밤깉??걼?곥겗?곥깤?⒲궎?쇻꺖??K-Beauty ?녈꺍?룔궒?ャ궦?γ?,
      aboutLead: "Karecation ??곭풆若밤꺕?╉궒?ャ깓?밤꺕??꺁?뗣긿??꺕?룔깾?껁깞?녈궛鵝볣쮶?믡곥굠?딀삇閻뷩겎?썬걾??꾠걼役곥굦?ユ빐?덀겲?쇻?,
      aboutCards: [
        ["??깷?с꺖?룔깾?녔렋榮?, "??쉪?ュ릦?뤵걵??풆若밤꺕?╉궒?ャ깓?밤겗?멩뒢?㏂굮永욁굤渦쇈겳?얇걲??],
        ["?롧▶?よた??, "?η쮮?곮쮫?삠곥궢?앫꺖?덀굮訝?ㅳ겗役곥굦?㎪빐?녴걮?얇걲??],
        ["?쀣꺀?ㅳ깧?쇈깉?ゅ뀍鼇?쮫", "?쀣꺀?녈겓榮띶풓?쀣겍?뗣굢轝▲겗?밤깇?껁깤?면꿔굙?얇걲??]
      ],
      aboutFlowEyebrow: "?꿱죱?뺛꺆??,
      aboutSteps: [
        ["?길쐣", "??쉪?곫뿥葉뗣곥궢?앫꺖?덂툕?쎼굮?길쐣?쀣겍?뤵걽?뺛걚??],
        ["鼇덄뵽", "?녜겦?ゃ깤?룔깾?녈겏?롧▶?ゃ궫?╉꺂?η쮮?믥▶沃띲걮?얇걲??],
        ["沃욘빐", "?녈꺍?룔궒?ャ궦?γ겗旅덂냵?㏛틛榮꾥た?담굮?꿔굙?얇걲??]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "鼇덄뵽?띲겓?곩뀍?ョ▶沃띲?,
      faqLead: "?멱쳡?삭た?담꺕雅덄큵?듐깮?쇈깉??탛?뚣굮?뤵걢?듽굜?쇻걦?붹죭?끹걮?얇걲??,
      contactTitle: "恙낁쫨?ゃ겏?띲겓?쇻걧掠듽걦?녈꺍?룔궒?ャ궦?γ궢?앫꺖?덀?,
      contactLead: "躍뚧쐹?η쮮?ⓨ툕?쎼궢?쇈깛?밤굮曆삠걟?╉곥깤?⒲궎?쇻꺖?덄쎑獄뉎굮?붶풚?쇈걦?졼걬?꾠?,
      bookingTitle: "?썬궑?ャ겎?⒲굯??K-Beauty 鵝볣쮶?믣툕?쎼걲?뗣걢?쇻걟?╉걦?졼걬?꾠?,
      bookingLead: "??쉪?곫뿥葉뗣곥궢?앫꺖?덂툕?쎼굮?길쐣?쀣겍?뤵걽?뺛걚?괡arecation ?뚣굠?딀삇閻뷩겎訝곩??ユА??궧?녴긿?쀣굮?붹죭?끹걮?얇걲??,
      bookingDetails: "?듿?礪섉깄??,
      selectedPath: "?멩뒢?쀣걼?ャ꺖??,
      fullName: "?듿릫??,
      email: "?▲꺖??,
      nationality: "?썹콑",
      requestNote: "瓦썲뒥?ゃ궚?ⓦ궧??,
      requestPlaceholder: "?ゅ뀍雅뗩쟿?곩툕?쎿뿥葉뗣곩퓚誤곥겒?듐깮?쇈깉?끻??믡걫鼇섇뀯?뤵걽?뺛걚??,
      cartEyebrow: "?멩뒢?쀣걼?ャ꺖??,
      cartTitle: "?멱쳡?띲겓?끻??믥▶沃띲걮?얇걮?뉎걝??,
      cartLead: "?곦에?띲겓?곥깤??궛?⒲깲?삡볶?겹꺕躍뚧쐹?η쮮?믡걫閻븃첀?뤵걽?뺛걚??,
      estimatedScope: "誤뗧찉?묌죲",
      proceed: "?쀣꺀?ㅳ깧?쇈깉?멱쳡?믢풚??,
      exploreMore: "?삠걢??꺂?쇈깉?믦쫳??,
      footer: {
        programs: "瓦룔겂?잆굢?곥겲??<strong>?쀣꺀?ㅳ깧?쇈깉?멱쳡 ($10)</strong> ?뗣굢??,
        about: "?썬궑?ヨØ?뤷뎺?ャ곥깤?⒲궎?쇻꺖?덀겓?ㅶ뼪?쀣겲?쀣굟?녴?,
        faq: "?얇걽瓦룔겂?╉걚?뗥졃?덀겘?곥깤?⒲궎?쇻꺖?덄쎑獄뉎굮?붶풚?쇈걦?졼걬?꾠?,
        contact: "?덀굤?⒲걚?붹죭?끹겗?잆굙?곫뿥葉뗣꺕躍뚧쐹?듐꺖?볝궧?삣꽛?덁틟?끹굮?붻쮼?γ걦?졼걬?꾠?,
        booking: "?멱쳡??꺁??궓?밤깉?덅죱?㎯걲?귟Ø?뤹▶若싧뎺?ャ곭㈉?띸듁力곥꺕影꾢쎊?삥?永귝군歷덃죭?끹굮閻븃첀?쀣겲?쇻?,
        cart: "邕썬걦冶뗣굙?잆걚?밤겘??strong>?쀣꺀?ㅳ깧?쇈깉?멱쳡 ($10)</strong> ?믦옙?졼걮?╉걦?졼걬?꾠?,
        "program-detail": "?얇걳?밧릲?㎯굮?당릤?쀣걼?꾣뼶???strong>?쀣꺀?ㅳ깧?쇈깉?멱쳡 ($10)</strong> ?뗣굢冶뗣굙?╉걦?졼걬?꾠?
      }
    },
    programs: {
      "all-in-one-package": {
        name: "?ゃ꺖?ャ궎?녈꺈?녈깙?껁궞?쇈궦",
        location: "?썬궑??,
        duration: "永귝뿥+",
        tagline: "?ⓦ깤??궛?⒲깲渦쇈겳??,
        cardDescription: "?썬궑?ョ풆若밤굮渶뤷릦?꾠겓鵝볣쮶?쀣걼?꾣뼶?ャ?br>??꺁?뗣긿??궞?㏂곲젺??궞?㏂곥깦??펵?▲궎??곥깛?γ꺖?녴궍?쇈궥?㎯긿?붵꺍?겹굮?ャ겳?얇걲??br>域쀧럽?뺛굦?잋??γ굮?쀣꺀?ㅳ깧?쇈깉?ョ탡?욍걼?꾣뼶?ユ??⒲겎?쇻?,
        includes: [
          "?ⓦ깤??궛?⒲깲",
          "?→뼑?듐꺖?볝궧竊싥궠?녈궥?㎯꺂?멥깷?뚩죱?갣live Young?룔깾?껁깞?녈궛?듐깮?쇈깉?곲곮퓥?듐깮?쇈깉"
        ]
      },
      "quick-concierge-consultation": {
        name: "?쀣꺀?ㅳ깧?쇈깉?멱쳡",
        location: "?ゃ꺍?⒲궎??/ ?썬궑??,
        duration: "30??,
        cardDescription: "?멥겤?띲겓?밧릲?㎯굮?당릤?쀣걼?꾣뼶?ャ?br>??쉪?삥뿥葉뗣꺕?듐깮?쇈깉躍뚧쐹?ュ릦?뤵걵?잌뗥닪鼇?쮫?믣맜?욍겲?쇻?br>雅덄큵?띲겓?ㅶ뼪邕멥굮?롧▶?ャ걮?잆걚?밤겓?듽걲?쇻굙?㎯걲??
      },
      "skin-clinic-care": {
        name: "?밤궘?녈궚?ゃ깑?껁궚?긱궋",
        location: "?썬궑??,
        duration: "2?귡뼋",
        cardDescription: "?뚣궞?㏂굜?썼죹訝?퓘??Ø?뤵굮躍뚧쐹?쇻굥?밤겓??br>??꺁?뗣긿??た?담겏?с궎?됦퍡?띲깤?⒲꺍?뗣꺍?겹굮?ャ겳?얇걲??br>?덀굤?롧▶?㎩츎恙껁겒鼇ゅ븦繹뽩굺?ャ겇?ゃ걣?듽겲?쇻?
      },
      "scalp-diagnosis-spa": {
        name: "??슢鼇뷸뼪竊녴궞??,
        location: "?썬궑??,
        duration: "2-3?귡뼋",
        cardDescription: "??슢鼇뷸뼪?③썓訝?궞?㏂굮躍뚧쐹?쇻굥?밤겓??br>??슢?ャ궑?녈궩?ゃ꺍?겹겏?썼죹?듐깮?쇈깉?믣맜?욍겲?쇻?br>?썬걾??꾠걼弱귡??긱궋????졼겏?쀣겍??⒲겎?쇻?
      },
      "celebrity-hair-makeup": {
        name: "?섅궋竊녴깳?ㅳ궚?㏂긿??,
        location: "?썬궑??,
        duration: "2?귡뼋",
        cardDescription: "域쀧럽?뺛굦?잆궖?▲꺀?졼걟餓뺜툓?믡굮黎귙굙?뗦뼶?ャ?br>若뚧닇佯╉겗遙섅걚?볝깷?쇈깇?ｃ꺖?밤궭?ㅳ꺁?녈궛??뤃?믣맜?욍겲?쇻?br>?ㅳ깧?녈깉?삥뮢壤긱꺕鸚㎩늾?や틛若싧뎺?ユ??⒲겎?쇻?
      },
      "personal-color-consultation": {
        name: "?묆꺖?썬깏?ャ궖?⒲꺖?멱쳡",
        location: "?썬궑??,
        duration: "2?귡뼋",
        cardDescription: "?▲궎??꺕?섅궋?삭즳?꾠겗?멩뒢?믤빐?덀걼?꾣뼶?ャ?br>?묆꺖?썬깏?ャ궖?⒲꺖?녷옄?ⓨ츪?①쉪?ゃ깙?с긿?덀궗?ㅳ깋?믣맜?욍겲?쇻?br>?ε만??궧?욍궎?ュ닩??굮?덀굤?롧▶?ャ걮?얇걲??
      }
    },
    faq: [
      ["Karecation ??퐬?믦た?담걮?╉걦?뚣겲?쇻걢竊?, "?멱쳡?곫뿥葉뗣깢??꺖?곲겦?욁걮?잆깤??궛?⒲깲?ⓧ퐪??궠?녈궥?㎯꺂?멥깷沃욘빐?믡궢?앫꺖?덀걮?얇걲??],
      ["1?ㅳ겗?듐꺖?볝궧?졼걨?㎯굚堊앶졏?㎯걤?얇걲?뗰폕", "??걚?귛뜕鵝볝궢?쇈깛?밤겗?욍겗堊앶졏?귛룾?썬겎?쇻?],
      ["??앫걢?됥깙?껁궞?쇈궦雅덄큵?뚦퓚誤곥겎?쇻걢竊?, "?꾠걚?덀귙겲?싥깤?⒲궎?쇻꺖?덄쎑獄뉎걢?됧쭓?곥곭칱?꿔굮黎뷩굙?됥굦?얇걲??],
      ["役룟쨼?꿔궧?덀겎?귛닶?ⓦ겎?띲겲?쇻걢竊?, "??걚?괡arecation ??궫?╉꺂?믦Ø?뚣굥役룟쨼?꿔궧?덂릲?묆겓鼇?쮫?뺛굦?╉걚?얇걲??],
      ["Olive Young ?ゃ겑??깛?γ꺖?녴궍?쇈궥?㎯긿?붵꺍?겹굚野얍퓶?㎯걤?얇걲?뗰폕", "??걚?귞쎅?꾠겏?η쮮?ュ릦?뤵걵?╉곥궘?γ꺃?쇈궥?㎯꺍?뺛굦?잆궥?㎯긿?붵꺍?겼컣渶싥굮永꾠겳渦쇈굙?얇걲??],
      ["??돂?꾠겘?⒲겗?덀걝?ラ꿔겳?얇걲?뗰폕", "?멱쳡??꺁??궓?밤깉?덅죱?㎯걲?귟Ø?뤹▶若싧뎺?ョ㈉?띸듁力곥꺕影꾢쎊?삥?永귝군歷덃죭?끹굮閻븃첀?쀣겲?쇻?]
    ]
  }
};

// Keep Programs-page copy and program content aligned across locales.
// This applies the finalized EN program structure to KO/ZH/JA, while
// preserving locale-specific top helper copy for readability.
const PROGRAM_PARITY_IDS = [
  "all-in-one-package",
  "quick-concierge-consultation",
  "skin-clinic-care-1",
  "skin-clinic-care-2",
  "scalp-diagnosis-spa",
  "hair-salon",
  "celebrity-hair-makeup",
  "nail-care",
  "body-massage"
];

const PROGRAM_PAGE_TOP_COPY = {
  ko: {
    programsTitle: "?섏뿉寃?留욌뒗 ?쒖슱 酉고떚 寃쎈줈瑜??좏깮?섏꽭??",
    programsLead: "?꾩꽦???⑦궎吏, 吏묒쨷???쒕퉬?? ?꾨씪?대퉿 ?곷떞 ?듭뀡???댁쇅 諛⑸Ц媛?湲곗??쇰줈 鍮꾧탳??蹂댁꽭??",
    programsHelper: "?대뵒???쒖옉?좎? 怨좊??쒕떎硫??꾨씪?대퉿 ?곷떞遺???쒖옉?섏꽭??"
  },
  zh: {
    programsTitle: "?됪떓??귛릦鵝좂쉪腰뽩컮獰롣맒瓮?푶??,
    programsLead: "?당퍞?썽솀溫욕??黎귨펽驪붻푵若뚧빐也쀩쨶?곩뜒窈방쐨?▽툗燁곦벴?②??됮」??,
    programsHelper: "倻귝옖訝띸‘若싦퍗?ら뇤凉冶뗰펽??뀍餓롧쭅雅ュ뮜瑥℡?冶뗣?
  },
  ja: {
    programsTitle: "?귙겒?잆겓?덀걝?썬궑?ョ풆若밤꺂?쇈깉?믧겦?녈겲?쀣굟?녴?,
    programsLead: "役룟쨼?꿔궧?덂릲?묆겓?곥깢?ャ깙?껁궞?쇈궦?곲썓訝?궢?쇈깛?밤곥깤?⒲궎?쇻꺖?덄쎑獄뉎굮驪붻펱?㎯걤?얇걲??,
    programsHelper: "瓦룔겂?잆굢?곥겲?싥깤?⒲궎?쇻꺖?덄쎑獄뉎걢?됧쭓?곥겍?뤵걽?뺛걚??
  }
};

["ko", "zh", "ja"].forEach((locale) => {
  if (!LOCALE_PATCH[locale]) LOCALE_PATCH[locale] = {};
  if (!LOCALE_PATCH[locale].page) LOCALE_PATCH[locale].page = {};
  if (!LOCALE_PATCH[locale].programs) LOCALE_PATCH[locale].programs = {};

  PROGRAM_PARITY_IDS.forEach((id) => {
    const base = LOCALE_PATCH.en?.programs?.[id];
    if (base) LOCALE_PATCH[locale].programs[id] = JSON.parse(JSON.stringify(base));
  });

  const topCopy = PROGRAM_PAGE_TOP_COPY[locale];
  if (topCopy) deepMerge(LOCALE_PATCH[locale].page, topCopy);
});

Object.keys(LOCALE_PATCH).forEach((locale) => {
  if (I18N[locale]) deepMerge(I18N[locale], LOCALE_PATCH[locale]);
});

const LANGUAGE_SYNC_PATCH = {
  en: {
    meta: {
      brandSub: "Private K-beauty concierge",
      nav: ["Home", "Programs", "Consultation", "About", "FAQ", "Contact"],
      cart: "Cart",
      footerAbout: "Private K-beauty concierge for international guests visiting Seoul.",
      browse: "Browse",
      support: "Support"
    },
    cta: {
      viewPrograms: "Explore Programs",
      requestConsultation: "Request Consultation"
    },
    common: {
      noCartItems: "No cart items",
      noMatchTitle: "No matching programs",
      noMatchText: "Try another keyword or category.",
      traveler: "traveler",
      travelers: "travelers",
      subtotal: "Subtotal",
      service: "Service (5%)",
      total: "Total",
      remove: "Remove",
      selected: "added to cart."
    },
    categories: {
      all: "All",
      package: "Package",
      starter: "Starter",
      skin: "Skin",
      wellness: "Wellness",
      styling: "Styling"
    },
    home: {
      heroEyebrow: "PREMIUM K-BEAUTY, SIMPLIFIED",
      heroTitleLines: ["Beauty,", "privately arranged."],
      heroLead: "Private K-beauty concierge support for international guests in Seoul. Explore trusted programs or request a tailored consultation with ease.",
      howEyebrow: "How It Works",
      howTitle: "Choose clearly. Plan privately. Arrive prepared.",
      steps: [
        ["Choose a program", "Browse curated options based on the kind of beauty experience you want in Seoul."],
        ["Save your selections", "Add the paths you want to discuss before making a final decision."],
        ["Request consultation", "Share your dates, goals, language needs, and preferred level of support."],
        ["Get coordinated", "Karecation helps organize the next step with clarity, privacy, and guidance."]
      ],
      trustEyebrow: "Why Karecation",
      trustTitle: "Private support, clearer decisions.",
      trust: [
        ["Tailored planning", "Built around your goals, timing, comfort level, and beauty priorities."],
        ["Trusted discovery", "Explore clinic, beauty, and shopping options with more clarity."],
        ["Multilingual support", "Designed to help international guests navigate the process with ease."]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Before you begin.",
      finalEyebrow: "Start Planning",
      finalTitle: "Ready to plan your Seoul beauty experience?"
    },
    page: {
      programsEyebrow: "Programs",
      programsTitle: "Choose the Seoul beauty path that fits you best.",
      programsLead: "Explore complete packages, focused services, and private consultation options for international guests.",
      programsHelper: "Not sure where to start? Begin with a Private Consultation.",
      aboutEyebrow: "About",
      aboutTitle: "Private K-beauty concierge support for international guests visiting Seoul.",
      aboutLead: "Karecation helps guests explore beauty, clinic, wellness, and salon experiences with more clarity, coordination, and calm.",
      aboutCards: [
        ["Curated discovery", "We help narrow beauty and wellness options around your goals."],
        ["Clear coordination", "Timing, planning, and support stay organized in one guided process."],
        ["Private-first planning", "Review your options and move forward only when the plan feels right."]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Clear answers before you plan.",
      faqLead: "Learn how consultation, coordination, and booking support work.",
      contactTitle: "Concierge support, when you need it.",
      contactLead: "For tailored planning, request a private consultation with your dates and preferred services.",
      bookingTitle: "Tell us how you want to experience K-beauty in Seoul.",
      bookingLead: "Share your goals, dates, and support needs. Karecation will guide the next step with more clarity and care.",
      bookingDetails: "Your Details",
      selectedPath: "Selected Path",
      searchPlaceholder: "Search concierge path",
      sortRecommended: "Sort: Recommended",
      priceAsc: "Price: Low to High",
      priceDesc: "Price: High to Low",
      fullName: "Full Name",
      email: "Email",
      nationality: "Nationality",
      requestNote: "Additional Request",
      requestPlaceholder: "Share preferred programs, dates, language needs, and support priorities.",
      cartEyebrow: "Preferred Date",
      cartTitle: "Review Your Selections",
      cartLead: "Check your programs and continue to consultation request.",
      estimatedScope: "Estimated Scope",
      proceed: "Proceed to Consultation",
      exploreMore: "Browse More Programs",
      noProgramSelectedTitle: "No program selected yet.",
      noProgramSelectedText: "Please choose a program or build your All-in-One journey first.",
      bookingFillRequired: "Please fill in name, email, and nationality.",
      bookingSending: "Sending request...",
      bookingSent: "Your request has been sent. We?셪l contact you at the information provided within a few hours.",
      bookingFailed: "Failed to send request. Please try again.",
      contactEmailTitle: "Email",
      contactEmailLine: "karecation.official@gmail.com",
      contactInstagramLine: "Instagram: @karecation",
      contactWeChatLine: "WeChat: @karecation",
      contactLineLine: "LINE: @karecation",
      contactHoursTitle: "Hours (KST)",
      contactHoursLine: "Mon-Sat, 10:00-18:00",
      contactNextTitle: "Best Next Step",
      contactNextLine: "Request a private consultation with your preferred programs and dates.",
      allInOneCardEyebrow: "SIGNATURE ITINERARY",
      allInOneCardPrice: "Starting from $1,499",
      allInOneCardDescription: "A private all-in-one Seoul beauty day built around clinic care, salon care, recovery, and optional refinements.",
      allInOneCardNote: "Includes 1 skin clinic care option + 3 optional programs.",
      allInOneCardButton: "Build Your Journey",
      allInOneBuilderTitle: "Build your beauty journey.",
      allInOneBuilderLead: "Choose 1 skin clinic care option and 3 optional programs to complete your All-in-One Package.",
      allInOneBaseLabel: "Base package:",
      allInOneAddonsLabel: "Add-ons:",
      allInOneTotalLabel: "Total:",
      allInOneRequiredLabel: "Required: Choose 1 Skin Clinic Care",
      allInOneOptionalLabel: "Choose 3 Optional Programs",
      allInOneSkin1Title: "Skin Clinic Care 1 (+$0)",
      allInOneSkin1Desc: "Tone, texture, pore care, vitamin tone care, and toning.",
      allInOneSkin2Title: "Skin Clinic Care 2 (+$150)",
      allInOneSkin2Desc: "Lifting, pigment laser, and wrinkle botox.",
      allInOneOptScalpTitle: "Scalp Care (+$0)",
      allInOneOptScalpDesc: "Scalp diagnosis, scaling, and relaxing treatment support.",
      allInOneOptSalonTitle: "Hair Salon (+$80)",
      allInOneOptSalonDesc: "Haircut or hair clinic treatment with consultation and finishing.",
      allInOneOptHMUTitle: "Hair & Makeup (+$100)",
      allInOneOptHMUDesc: "Professional hair styling and makeup for a polished, camera-ready look.",
      allInOneOptNailTitle: "Nail/Pedi Care (+$0)",
      allInOneOptNailDesc: "Nail or pedi care with shaping, cuticle care, and finish.",
      allInOneOptBodyTitle: "Body Massage (+$20)",
      allInOneOptBodyDesc: "Full-body massage focused on recovery, comfort, and release.",
      allInOneOptShopTitle: "Beauty Shopping (+$0)",
      allInOneOptShopDesc: "Guided K-beauty shopping support, including destinations such as Olive Young.",
      allInOneContinueButton: "Continue to Consultation",
      allInOneCounterTemplate: "{count} / 4 selected",
      allInOneReady: "Your journey is ready.",
      allInOneNeedOneMore: "Please choose 1 more program to complete your journey.",
      allInOneNeedMore: "Please choose {n} more program(s) to complete your journey.",
      allInOneMaxPrograms: "You have already selected all 4 programs.",
      allInOneMaxOptional: "You have already selected all 3 optional programs.",
      allInOneSummary: {
        base: "Base package:",
        addons: "Add-ons:",
        total: "Total:"
      },
      footer: {
        programs: "Need a starting point? Begin with <strong>Private Consultation</strong>.",
        about: "Private planning for international guests visiting Seoul.",
        faq: "Need a direct answer? Request a private consultation.",
        contact: "For tailored planning, request a private consultation.",
        booking: "Consultation is request-first. Availability, scope, and final payment guidance are confirmed before any visit is finalized.",
        cart: "Prefer to begin with clarity? Start with <strong>Private Consultation</strong>.",
        "program-detail": "Need clarity first? Start with <strong>Private Consultation</strong>."
      }
    },
    faq: [
      ["What does Karecation help coordinate?", "We help coordinate consultation, scheduling flow, and concierge-level guidance across your preferred programs."],
      ["Do I need to choose a full package right away?", "No. You can begin with a private consultation and decide the scope afterward."],
      ["What is included in the All-in-One Package?", "It includes 1 skin clinic care option and 3 optional programs, coordinated as one private itinerary."],
      ["What is the difference between Skin Clinic Care 1 and Skin Clinic Care 2?", "Skin Clinic Care 1 focuses on tone and texture refresh. Skin Clinic Care 2 is a more advanced, clinic-focused path."],
      ["Can I request only one service?", "Yes. You can request one focused service or build a wider plan."],
      ["Can Karecation help with beauty shopping?", "Yes. We can include guided beauty shopping support, including destinations such as Olive Young."],
      ["How does payment work?", "Consultation is request-first. Availability, scope, and final payment guidance are confirmed before any visit is finalized."]
    ],
    programs: {
      "quick-concierge-consultation": {
        name: "Private Consultation",
        duration: "20 mins",
        tagline: "Start with clarity",
        cardDescription: "Best for guests who want tailored guidance before choosing.<br>Includes personalized planning based on goals, timing, and support needs.<br>Ideal if you want clarity before booking anything else."
      },
      "skin-clinic-care-1": {
        name: "Skin Clinic Care 1",
        duration: "60??0 mins",
        tagline: "Tone & texture",
        cardDescription: "Best for guests focused on visible skin refresh.<br>Includes pore care, vitamin tone care, and toning.<br>Optional add-on: beard hair removal for men / underarm or upper-lip hair removal for women."
      },
      "skin-clinic-care-2": {
        name: "Skin Clinic Care 2",
        duration: "90??20 mins",
        tagline: "Advanced clinic care",
        cardDescription: "Best for guests who want a more targeted clinic-focused visit.<br>Includes lifting, pigment laser, and wrinkle botox.<br>Final treatment suitability is confirmed through clinic consultation."
      },
      "scalp-diagnosis-spa": {
        name: "Scalp Care",
        duration: "60??0 mins",
        tagline: "Clean scalp reset",
        cardDescription: "Best for guests who want focused scalp care and a cleaner reset.<br>Includes scalp diagnosis, scaling, and relaxing care.<br>Ideal for a calm, specialized beauty stop."
      },
      "hair-salon": {
        name: "Hair Salon",
        duration: "60??0 mins",
        tagline: "Cut or clinic",
        cardDescription: "Best for guests who want a refreshed salon finish.<br>Includes a haircut or hair clinic treatment with consultation and finishing.<br>Ideal for a polished Seoul salon experience."
      },
      "celebrity-hair-makeup": {
        name: "Hair & Makeup",
        duration: "90??20 mins",
        tagline: "Camera-ready styling",
        cardDescription: "Best for guests who want a styled, polished look.<br>Includes professional hair styling and makeup support.<br>Ideal for events, photos, or a refined day out in Seoul."
      },
      "nail-care": {
        name: "Nail/Pedi Care",
        duration: "60??0 mins",
        tagline: "Polished finishing touch",
        cardDescription: "Best for guests who want a neat finishing detail.<br>Includes nail shaping, cuticle care, and nail or pedi finish.<br>Ideal for a more complete beauty itinerary."
      },
      "body-massage": {
        name: "Body Massage",
        duration: "90 mins",
        tagline: "Recovery & relaxation",
        cardDescription: "Best for guests who want recovery, relaxation, and body reset.<br>Includes full-body massage with a focus on comfort and release.<br>Ideal after travel, shopping, or a full beauty day."
      }
    }
  },
  ko: {
    meta: {
      brandSub: "?꾨씪?대퉿 K-酉고떚 而⑥떆?댁?",
      nav: ["Home", "?꾨줈洹몃옩", "?곷떞", "?뚭컻", "FAQ", "臾몄쓽"],
      cart: "移댄듃",
      footerAbout: "?쒖슱 諛⑸Ц 援?젣 怨좉컼???꾪븳 ?꾨씪?대퉿 K-酉고떚 而⑥떆?댁?.",
      browse: "硫붾돱",
      support: "吏??
    },
    cta: {
      viewPrograms: "?꾨줈洹몃옩 蹂닿린",
      requestConsultation: "?곷떞 ?붿껌"
    },
    common: {
      noCartItems: "?좏깮????ぉ???놁뒿?덈떎",
      noMatchTitle: "?쇱튂?섎뒗 ?꾨줈洹몃옩???놁뒿?덈떎",
      noMatchText: "寃?됱뼱 ?먮뒗 移댄뀒怨좊━瑜?諛붽퓭蹂댁꽭??",
      traveler: "紐?,
      travelers: "紐?,
      subtotal: "?뚭퀎",
      service: "?쒕퉬??5%)",
      total: "珥앹븸",
      remove: "??젣",
      selected: "移댄듃???닿꼈?듬땲??"
    },
    categories: {
      all: "?꾩껜",
      package: "?⑦궎吏",
      starter: "?곷떞",
      skin: "?ㅽ궓",
      wellness: "耳??,
      styling: "?ㅽ??쇰쭅"
    },
    home: {
      heroEyebrow: "?꾨━誘몄뾼 K-酉고떚, ??媛꾧껐?섍쾶",
      heroTitleLines: ["?쒖슱 K-酉고떚瑜?, "?꾨씪?대퉿?섍쾶."],
      heroLead: "?쒖슱??李얜뒗 援?젣 怨좉컼???꾪븳 ?꾨씪?대퉿 K-酉고떚 而⑥떆?댁?. ?좊ː 媛?ν븳 ?꾨줈洹몃옩???섎윭蹂닿굅??留욎땄 ?곷떞???붿껌?섏꽭??",
      howEyebrow: "?댁슜 諛⑸쾿",
      howTitle: "紐낇솗?섍쾶 ?좏깮?섍퀬, ?꾨씪?대퉿?섍쾶 以鍮꾪븯?몄슂.",
      steps: [
        ["?꾨줈洹몃옩 ?좏깮", "?쒖슱?먯꽌 ?먰븯??酉고떚 寃쏀뿕??留욎떠 ?먮젅?댁뀡???듭뀡??鍮꾧탳?섏꽭??"],
        ["?좏깮 ???, "理쒖쥌 寃곗젙 ?? ?쇱쓽??寃쎈줈瑜??댁븘 ?뺣━?섏꽭??"],
        ["?곷떞 ?붿껌", "?쇱젙, 紐⑺몴, ?몄뼱 吏?? ?좏샇 吏???섏????뚮젮二쇱꽭??"],
        ["議곗쑉 吏꾪뻾", "Karecation???ㅼ쓬 ?④퀎瑜?紐낇솗?섍퀬 ?꾨씪?대퉿?섍쾶 ?덈궡?⑸땲??"]
      ],
      trustEyebrow: "Why Karecation",
      trustTitle: "???꾨씪?대퉿?섍쾶, ??紐낇솗?섍쾶.",
      trust: [
        ["留욎땄 ?ㅺ퀎", "紐⑺몴, ?쇱젙, ?몄븞?? 酉고떚 ?곗꽑?쒖쐞??留욎떠 ?ㅺ퀎?⑸땲??"],
        ["?좊ː 湲곕컲 ?먯깋", "?대━?? 酉고떚, ?쇳븨 ?듭뀡????紐낇솗?섍쾶 鍮꾧탳?????덉뒿?덈떎."],
        ["?ㅺ뎅??吏??, "援?젣 怨좉컼???쒖슱?먯꽌 ?명븯寃?吏꾪뻾?????덈룄濡??ㅺ퀎?덉뒿?덈떎."]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "?쒖옉 ?꾩뿉 ?뺤씤?섏꽭??",
      finalEyebrow: "?쒖옉?섍린",
      finalTitle: "?쒖슱 酉고떚 ?ъ젙??以鍮꾪븷源뚯슂?"
    },
    page: {
      programsEyebrow: "?꾨줈洹몃옩",
      programsTitle: "?섏뿉寃?留욌뒗 ?쒖슱 酉고떚 寃쎈줈瑜??좏깮?섏꽭??",
      programsLead: "?꾩꽦???⑦궎吏, 吏묒쨷 耳?? ?꾨씪?대퉿 ?곷떞 ?듭뀡??援?젣 怨좉컼 湲곗??쇰줈 鍮꾧탳?대낫?몄슂.",
      programsHelper: "?대뵒???쒖옉?좎? 怨좊??쒕떎硫??꾨씪?대퉿 ?곷떞遺???쒖옉?섏꽭??",
      aboutEyebrow: "?뚭컻",
      aboutTitle: "?쒖슱 諛⑸Ц 援?젣 怨좉컼???꾪븳 ?꾨씪?대퉿 K-酉고떚 而⑥떆?댁?.",
      aboutLead: "Karecation? 酉고떚, ?대━?? ?곕땲?? ?대” 寃쏀뿕????紐낇솗?섍퀬 李⑤텇?섍쾶 議곗쑉?⑸땲??",
      aboutCards: [
        ["?먮젅?댄떚???먯깋", "紐⑺몴??留욎떠 ?꾩슂??酉고떚쨌?곕땲???듭뀡留??뺣━?대뱶由쎈땲??"],
        ["紐낇솗??議곗쑉", "?쇱젙, ?뚮줈?? 吏?먯쓣 ?섎굹??媛?대뱶 ?꾨줈?몄뒪濡??뺣━?⑸땲??"],
        ["?꾨씪?대퉿 ?곗꽑 ?뚮옒??, "怨꾪쉷??異⑸텇??留욌떎怨??먭뺨吏????ㅼ쓬 ?④퀎濡?吏꾪뻾?섏꽭??"]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "怨꾪쉷 ?꾩뿉 紐낇솗?섍쾶 ?뺤씤?섏꽭??",
      faqLead: "?곷떞, 議곗쑉, ?덉빟 吏?먯씠 ?대뼸寃?吏꾪뻾?섎뒗吏 ?덈궡?⑸땲??",
      contactTitle: "?꾩슂????諛붾줈 ?곌껐?섎뒗 而⑥떆?댁? 吏??",
      contactLead: "?먰븯???쇱젙怨??쒕퉬?ㅼ? ?④퍡 ?꾨씪?대퉿 ?곷떞???붿껌??二쇱꽭??",
      bookingTitle: "?쒖슱?먯꽌 ?대뼡 K-酉고떚 寃쏀뿕???먰븯?쒕뒗吏 ?뚮젮二쇱꽭??",
      bookingLead: "紐⑺몴, ?쇱젙, 吏???붿껌???④꺼二쇱꽭?? Karecation???ㅼ쓬 ?④퀎瑜?李⑤텇?섍쾶 ?덈궡?⑸땲??",
      bookingDetails: "湲곕낯 ?뺣낫",
      selectedPath: "?좏깮 寃쎈줈",
      searchPlaceholder: "?꾨줈洹몃옩 寃??,
      sortRecommended: "?뺣젹: 異붿쿇??,
      priceAsc: "媛寃? ??? ??,
      priceDesc: "媛寃? ?믪? ??,
      fullName: "?대쫫",
      email: "?대찓??,
      nationality: "援?쟻",
      requestNote: "異붽? ?붿껌",
      requestPlaceholder: "?좏샇 ?꾨줈洹몃옩, ?좎쭨, ?몄뼱 吏?? ?곗꽑?쒖쐞瑜??④꺼二쇱꽭??",
      cartEyebrow: "?щ쭩 ?좎쭨",
      cartTitle: "?좏깮 ?댁슜 ?뺤씤",
      cartLead: "?좏깮 ?꾨줈洹몃옩???뺤씤?섍퀬 ?곷떞 ?붿껌?쇰줈 吏꾪뻾?섏꽭??",
      estimatedScope: "?덉긽 湲덉븸",
      proceed: "?곷떞 ?붿껌 吏꾪뻾",
      exploreMore: "?꾨줈洹몃옩 ??蹂닿린",
      noProgramSelectedTitle: "?꾩쭅 ?좏깮???꾨줈洹몃옩???놁뒿?덈떎.",
      noProgramSelectedText: "?꾨줈洹몃옩???좏깮?섍굅??All-in-One ?ъ젙??癒쇱? 援ъ꽦??二쇱꽭??",
      bookingFillRequired: "?대쫫, ?대찓?? 援?쟻???낅젰??二쇱꽭??",
      bookingSending: "?붿껌???꾩넚?섎뒗 以묒엯?덈떎...",
      bookingSent: "?붿껌???뺤긽?곸쑝濡??꾩넚?섏뿀?듬땲?? ?낅젰?섏떊 ?뺣낫濡?紐??쒓컙 ???곕씫?쒕┫寃뚯슂.",
      bookingFailed: "?붿껌 ?꾩넚???ㅽ뙣?덉뒿?덈떎. ?좎떆 ???ㅼ떆 ?쒕룄??二쇱꽭??",
      contactEmailTitle: "?대찓??,
      contactEmailLine: "karecation.official@gmail.com",
      contactInstagramLine: "Instagram: @karecation",
      contactWeChatLine: "WeChat: @karecation",
      contactLineLine: "LINE: @karecation",
      contactHoursTitle: "?댁쁺?쒓컙 (KST)",
      contactHoursLine: "???? 10:00-18:00",
      contactNextTitle: "媛??鍮좊Ⅸ ?쒖옉",
      contactNextLine: "?먰븯???꾨줈洹몃옩怨??좎쭨瑜??④꺼 ?꾨씪?대퉿 ?곷떞???붿껌?섏꽭??",
      allInOneCardEyebrow: "?쒓렇?덉쿂 ?쇱젙",
      allInOneCardPrice: "$1,499遺??,
      allInOneCardDescription: "?대━??耳?? ?대” 耳?? 由ъ빱踰꾨━, ?좏깮 ?듭뀡源뚯? ??踰덉뿉 ?댁? ?꾨씪?대퉿 ?쒖슱 酉고떚 ?곗씠.",
      allInOneCardNote: "?ㅽ궓 ?대━??1媛?+ ?좏깮 ?꾨줈洹몃옩 3媛??ы븿",
      allInOneCardButton: "?ъ젙 援ъ꽦?섍린",
      allInOneBuilderTitle: "?섎쭔??酉고떚 ?ъ젙??援ъ꽦?섏꽭??",
      allInOneBuilderLead: "?ㅽ궓 ?대━??1媛쒖? ?좏깮 ?꾨줈洹몃옩 3媛쒕? 怨⑤씪 All-in-One ?⑦궎吏瑜??꾩꽦?섏꽭??",
      allInOneBaseLabel: "湲곕낯 ?⑦궎吏:",
      allInOneAddonsLabel: "異붽? ?듭뀡:",
      allInOneTotalLabel: "?⑷퀎:",
      allInOneRequiredLabel: "?꾩닔: ?ㅽ궓 ?대━??1媛??좏깮",
      allInOneOptionalLabel: "?좏깮 ?꾨줈洹몃옩 3媛??좏깮",
      allInOneSkin1Title: "Skin Clinic Care 1 (+$0)",
      allInOneSkin1Desc: "?? 寃? 紐④났, 鍮꾪?誘???耳?댁? ?좊떇 以묒떖 耳??",
      allInOneSkin2Title: "Skin Clinic Care 2 (+$150)",
      allInOneSkin2Desc: "由ы봽?? ?됱냼 ?덉씠?, 二쇰쫫 蹂댄넚??以묒떖 耳??",
      allInOneOptScalpTitle: "Scalp Care (+$0)",
      allInOneOptScalpDesc: "?먰뵾 吏꾨떒, ?ㅼ??쇰쭅, 由대옓??耳??吏??",
      allInOneOptSalonTitle: "Hair Salon (+$80)",
      allInOneOptSalonDesc: "?곷떞 ??而ㅽ듃 ?먮뒗 ?ㅼ뼱 ?대━??耳?댁? 留덈Т由?",
      allInOneOptHMUTitle: "Hair & Makeup (+$100)",
      allInOneOptHMUDesc: "移대찓???덈뵒 猷⑹쓣 ?꾪븳 ?꾨줈 ?ㅼ뼱쨌硫붿씠?ъ뾽.",
      allInOneOptNailTitle: "Nail/Pedi Care (+$0)",
      allInOneOptNailDesc: "?먯씠?? ?먰떚??耳?? ?ㅼ씪 ?먮뒗 ?섎뵒 留덈Т由?",
      allInOneOptBodyTitle: "Body Massage (+$20)",
      allInOneOptBodyDesc: "?뚮났怨??댁셿 以묒떖???諛붾뵒 留덉궗吏.",
      allInOneOptShopTitle: "Beauty Shopping (+$0)",
      allInOneOptShopDesc: "?щ━釉뚯쁺 ??紐⑹쟻吏 以묒떖??K-酉고떚 ?쇳븨 媛?대뱶.",
      allInOneContinueButton: "?곷떞 ?섏씠吏濡??대룞",
      allInOneCounterTemplate: "{count} / 4 ?좏깮??,
      allInOneReady: "?ъ젙 援ъ꽦???꾨즺?섏뿀?듬땲??",
      allInOneNeedOneMore: "?ъ젙???꾩꽦?섎젮硫??꾨줈洹몃옩 1媛쒕? ???좏깮??二쇱꽭??",
      allInOneNeedMore: "?ъ젙???꾩꽦?섎젮硫??꾨줈洹몃옩 {n}媛쒕? ???좏깮??二쇱꽭??",
      allInOneMaxPrograms: "?대? 4媛??꾨줈洹몃옩??紐⑤몢 ?좏깮?섏뀲?듬땲??",
      allInOneMaxOptional: "?좏깮 ?꾨줈洹몃옩 3媛쒕? 紐⑤몢 ?좏깮?섏뀲?듬땲??",
      allInOneSummary: {
        base: "湲곕낯 ?⑦궎吏:",
        addons: "異붽? ?듭뀡:",
        total: "?⑷퀎:"
      },
      footer: {
        programs: "?쒖옉??怨좊??쒕떎硫?<strong>?꾨씪?대퉿 ?곷떞</strong>遺??",
        about: "?쒖슱 諛⑸Ц ?? ???꾨씪?대퉿?섍퀬 紐낇솗??寃곗젙.",
        faq: "鍮좊Ⅸ ?듬????꾩슂?섎㈃ ?꾨씪?대퉿 ?곷떞???붿껌?섏꽭??",
        contact: "留욎땄 怨꾪쉷???꾩슂?섎㈃ ?꾨씪?대퉿 ?곷떞???붿껌?섏꽭??",
        booking: "?곷떞? ?붿껌 ?곗꽑 諛⑹떇?낅땲?? 諛⑸Ц ?뺤젙 ??媛???щ?, 踰붿쐞, 寃곗젣 ?덈궡瑜??뺤씤?⑸땲??",
        cart: "紐낇솗?섍쾶 ?쒖옉?섍퀬 ?띕떎硫?<strong>?꾨씪?대퉿 ?곷떞</strong>??癒쇱? ?좏깮?섏꽭??",
        "program-detail": "諛⑺뼢 ?뺤씤??癒쇱??쇰㈃ <strong>?꾨씪?대퉿 ?곷떞</strong>?쇰줈 ?쒖옉?섏꽭??"
      }
    },
    faq: [
      ["Karecation? 臾댁뾿??議곗쑉?댁＜?섏슂?", "?곷떞, ?쇱젙 ?뚮줈?? ?꾨줈洹몃옩 媛??곌껐, 而⑥떆?댁? 媛?대뱶瑜?以묒떖?쇰줈 議곗쑉?⑸땲??"],
      ["泥섏쓬遺???꾩껜 ?⑦궎吏瑜??좏깮?댁빞 ?섎굹??", "?꾨땲?? ?꾨씪?대퉿 ?곷떞?쇰줈 ?쒖옉????踰붿쐞瑜?寃곗젙?섏뀛???⑸땲??"],
      ["All-in-One Package?먮뒗 臾댁뾿???ы븿?섎굹??", "?ㅽ궓 ?대━??1媛쒖? ?좏깮 ?꾨줈洹몃옩 3媛쒕? ?섎굹???꾨씪?대퉿 ?쇱젙?쇰줈 議곗쑉???쒕┰?덈떎."],
      ["Skin Clinic Care 1怨?2??李⑥씠??臾댁뾿?멸???", "1? ?ㅒ룰껐 以묒떖 由ы봽?덉떆, 2?????源껊맂 ?대━??以묒떖 耳?댁엯?덈떎."],
      ["??媛吏 ?쒕퉬?ㅻ쭔 ?붿껌?????덈굹??", "?? ?⑥씪 ?꾨줈洹몃옩留??붿껌?섍굅???뺤옣 ?뚮옖?쇰줈 援ъ꽦?섏떎 ???덉뒿?덈떎."],
      ["酉고떚 ?쇳븨???꾩?二쇰굹??", "?? ?щ━釉뚯쁺 ??紐⑹쟻吏 以묒떖???쇳븨 媛?대뱶瑜??쇱젙???ы븿?????덉뒿?덈떎."],
      ["寃곗젣???대뼸寃?吏꾪뻾?섎굹??", "?곷떞 ?붿껌 ??媛???щ?? 理쒖쥌 踰붿쐞瑜??뺤씤????寃곗젣 ?덈궡瑜??쒕┰?덈떎."]
    ],
    programs: {
      "quick-concierge-consultation": {
        name: "Private Consultation",
        duration: "20遺?,
        tagline: "紐낇솗???쒖옉",
        cardDescription: "?좏깮 ??諛⑺뼢 ?뺣━媛 ?꾩슂??遺꾧퍡 異붿쿇.<br>紐⑺몴, ?쇱젙, 吏???붿껌??留욎텣 留욎땄 ?뚮옒???ы븿.<br>?덉빟 ??紐낇솗?섍쾶 ?뺣━?섍퀬 ?띕떎硫?媛???곹빀?⑸땲??"
      },
      "skin-clinic-care-1": {
        name: "Skin Clinic Care 1",
        duration: "60??0遺?,
        tagline: "??& 寃?,
        cardDescription: "?덉뿉 蹂댁씠???쇰? 由ы봽?덉떆媛 ?꾩슂??遺꾧퍡 異붿쿇.<br>紐④났, 鍮꾪?誘???耳?? ?좊떇 ?ы븿.<br>?⑥꽦 ?섏뿼 ?쒕え / ?ъ꽦 寃⑤뱶?묒씠쨌?몄쨷 ?쒕え ?듭뀡 異붽? 媛??"
      },
      "skin-clinic-care-2": {
        name: "Skin Clinic Care 2",
        duration: "90??20遺?,
        tagline: "?대뱶諛댁뒪???대━??,
        cardDescription: "???源껊맂 ?대━??耳?닿? ?꾩슂??遺꾧퍡 異붿쿇.<br>由ы봽?? ?됱냼 ?덉씠?, 二쇰쫫 蹂댄넚???ы븿.<br>理쒖쥌 ?쒖닠 ?곹빀?깆? ?대━???곷떞 ???뺤젙?⑸땲??"
      },
      "scalp-diagnosis-spa": {
        name: "Scalp Care",
        duration: "60??0遺?,
        tagline: "?대┛ ?먰뵾 由ъ뀑",
        cardDescription: "吏묒쨷 ?먰뵾 耳?댁? 由ъ뀑???꾩슂??遺꾧퍡 異붿쿇.<br>?먰뵾 吏꾨떒, ?ㅼ??쇰쭅, 由대옓??耳???ы븿.<br>李⑤텇???꾨Ц 耳???ㅽ넲?쇰줈 ?곹빀?⑸땲??"
      },
      "hair-salon": {
        name: "Hair Salon",
        duration: "60??0遺?,
        tagline: "而ㅽ듃 ?먮뒗 ?대━??,
        cardDescription: "?뺣룉???대” ?쇰땲?쒓? ?꾩슂??遺꾧퍡 異붿쿇.<br>?곷떞 ??而ㅽ듃 ?먮뒗 ?ㅼ뼱 ?대━??耳?댁? 留덈Т由??ы븿.<br>?쒖슱 ?대” 寃쏀뿕??源붾걫?섍쾶 ?꾩꽦?섍린 醫뗭뒿?덈떎."
      },
      "celebrity-hair-makeup": {
        name: "Hair & Makeup",
        duration: "90??20遺?,
        tagline: "移대찓???덈뵒 ?ㅽ??쇰쭅",
        cardDescription: "?ㅽ??쇰뱶?섍퀬 ?뺣룉??猷⑹씠 ?꾩슂??遺꾧퍡 異붿쿇.<br>?꾨줈 ?ㅼ뼱 ?ㅽ??쇰쭅怨?硫붿씠?ъ뾽 吏???ы븿.<br>?됱궗, 珥ъ쁺, ?몃젴???곗씠 ?꾩썐???곹빀?⑸땲??"
      },
      "nail-care": {
        name: "Nail/Pedi Care",
        duration: "60??0遺?,
        tagline: "?뺣룉??留덈Т由??뷀뀒??,
        cardDescription: "源붾걫??留덈Т由??뷀뀒?쇱쓣 ?먰븯??遺꾧퍡 異붿쿇.<br>?먯씠?? ?먰떚??耳?? ?ㅼ씪 ?먮뒗 ?섎뵒 留덈Т由??ы븿.<br>?꾩껜 酉고떚 ?쇱젙 ?꾩꽦?꾨? ?믪씠湲?醫뗭뒿?덈떎."
      },
      "body-massage": {
        name: "Body Massage",
        duration: "90遺?,
        tagline: "?뚮났 & ?댁셿",
        cardDescription: "?뚮났, ?댁셿, 諛붾뵒 由ъ뀑???꾩슂??遺꾧퍡 異붿쿇.<br>?몄븞?④낵 ?댁셿 以묒떖???諛붾뵒 留덉궗吏 ?ы븿.<br>?대룞쨌?쇳븨쨌??곗씠 ?쇱젙 ?꾩뿉 ?뱁엳 ?곹빀?⑸땲??"
      }
    }
  },
  zh: {
    meta: {
      brandSub: "燁곦벴 K-beauty 鹽쇔??띶뒦",
      nav: ["腰뽭〉", "窈밭쎅", "?②?", "?념틢", "FAQ", "?붺내"],
      cart: "兀?돥饔?,
      footerAbout: "訝뷴댆溫욥쫿弱붺쉪?썽솀溫욕??먧풘燁곦벴 K-beauty 鹽쇔??띶뒦??,
      browse: "役뤺쭏",
      support: "??똻"
    },
    cta: {
      viewPrograms: "?η쐦窈밭쎅",
      requestConsultation: "?먧벡?②?"
    },
    common: {
      noCartItems: "?귝뿞藥꿴됮」??,
      noMatchTitle: "?ゆ돻?겼뙶?띺」??,
      noMatchText: "瑥룟컼瑥뺝끀餓뽩뀽??칾?뽩늽映삠?,
      traveler: "鵝?,
      travelers: "鵝?,
      subtotal: "弱뤺?",
      service: "?띶뒦兀?(5%)",
      total: "?덅?",
      remove: "燁삯솮",
      selected: "藥꿨뒥?θ눌?⑵쉐??
    },
    categories: {
      all: "?③깿",
      package: "也쀩쨶",
      starter: "?②?",
      skin: "??궎",
      wellness: "?ㅷ릤",
      styling: "?졾엹"
    },
    home: {
      heroEyebrow: "遙섊ク K-BEAUTY竊뚧쎍?졽퍗若?,
      heroTitleLines: ["?③쫿弱뷂펽", "燁곦벴鵝좂쉪獰롣맒若됪럲??],
      heroLead: "訝뷴댆溫욥쫿弱붺쉪?썽솀溫욕??먧풘燁곦벴 K-beauty 鹽쇔??띶뒦?귝탲鰲덂룾岳↓」??펽?뽬슥?얏룓雅ㅵ츣?뜹뮜瑥㏂?,
      howEyebrow: "役곭쮮",
      howTitle: "歷끾솻?됪떓竊뚨쭅雅ヨ쭊?믭펽餓롥??뷴룕??,
      steps: [
        ["?됪떓窈밭쎅", "?방뜮鵝졾쑉腰뽩컮?녘쫨?꾤풆訝썰퐪謠뚳펽役뤺쭏暎얗됪뼶旅덀?],
        ["?덁퓷耶섌됪떓", "?ⓩ?瀯덂넶若싧뎺竊뚧뒍?녘?溫븀쉪瓮?푶?덂뒥?ζ툍?뺛?],
        ["?먧벡?②?", "?딁윥?ζ쐿?곭쎅?뉎곮?鼇?黎귚툗?뤷???똻?밧폀??],
        ["瓦쎾뀯?뤺컘", "Karecation 餓ζ툍?겹곭쭅野녴곩룾?좂쉪?밧폀?②퓵訝뗤?閭γ?]
      ],
      trustEyebrow: "Why Karecation",
      trustTitle: "?당쭅野놅펽阿잍쎍歷끾솻??,
      trust: [
        ["若싧댍鰲꾢닋", "?당퍞鵝좂쉪??젃?곫뿶?담곮닋?귛벧訝롧풆訝썰폍?덄벨?θ?溫▲?],
        ["??에?®뇨", "?닸툍?겼쑑驪붻푵瑥딁뼏?곭풆倻녵툗兀?돥?됮」??],
        ["鸚싪?鼇??똻", "躍?뒰?썽솀溫욕??③쫿弱붻슥?얍츑?먩빐訝ゆ탛葉뗣?]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "凉冶뗥뎺?덁틙鰲ｃ?,
      finalEyebrow: "凉冶뗨쭊??,
      finalTitle: "?녶쨭凉??퐷?꾦쫿弱붺풆訝썰퐪謠뚳폕"
    },
    page: {
      programsEyebrow: "窈밭쎅",
      programsTitle: "?됪떓??귛릦鵝좂쉪腰뽩컮獰롣맒瓮?푶??,
      programsLead: "訝뷴쎖?낁?若€룓堊쎾츑?닷쪞繞먦곩뜒窈방뒪?녵툗燁곦벴?②??됮」??,
      programsHelper: "訝띸윥?볞퍗?ら뇤凉冶뗰폕?덁퍗 Private Consultation 凉冶뗣?,
      aboutEyebrow: "?념틢",
      aboutTitle: "訝뷴댆溫욥쫿弱붺쉪?썽솀溫욕??먧풘燁곦벴 K-beauty 鹽쇔??띶뒦??,
      aboutLead: "Karecation 溫⑴풆倻녴곮칺?쀣곫뒪?녵툗亦숅풖鵝볣챿?닸툍?겹곫쎍?됬㎥佯뤵곫쎍餓롥???,
      aboutCards: [
        ["暎얗됪렋榮?, "?당퍞鵝좂쉪??젃竊뚨춿?됬쐿閭ｉ귛릦?꾤풆倻녵툗?ㅷ릤?됮」??],
        ["歷끾솻?뤺컘", "?띌뿴?곫탛葉뗤툗??똻?닷릦?ⓨ릪訝?▼폊野쇠러孃꾡릎??],
        ["燁곦벴鴉섇뀍鰲꾢닋", "壤볠뼶旅덅떨鸚잍삇簾?곮떨鸚잌츎恙껅뿶?띹퓵?δ툔訝閭γ?]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "鰲꾢닋?띸쉪歷끾솻鰲ｇ춸??,
      faqLead: "雅녻㎗?②??곩뜌瘟껂툗窯꾤벧??똻倻귚퐬瓦쏂죱??,
      contactTitle: "?誤곫뿶竊뚪쉹?띈퓹?ηㅌ若얏뵱?곥?,
      contactLead: "?먧벡鵝좂쉪?ζ쐿訝롥걦也썽」??펽凉??쭅雅ュ뮜瑥㏂?,
      bookingTitle: "?딂칹?묇뺄竊뚥퐷躍뚧쐹倻귚퐬鵝볣챿腰뽩컮 K-beauty??,
      bookingLead: "?녵벴鵝좂쉪??젃?곫뿥?잋툗??똻?黎귙괡arecation 鴉싨툍?겼쑑凉뺝?訝뗤?閭γ?,
      bookingDetails: "鵝좂쉪岳→겘",
      selectedPath: "藥꿴됭러孃?,
      searchPlaceholder: "?쒐뇨窈밭쎅",
      sortRecommended: "?믣틣竊싨렓??,
      priceAsc: "餓룡졏竊싦퍗鵝롥댆遙?,
      priceDesc: "餓룡졏竊싦퍗遙섇댆鵝?,
      fullName: "冶볟릫",
      email: "???",
      nationality: "?썹콑",
      requestNote: "?꾢뒥?黎?,
      requestPlaceholder: "瑥룟∥?쇿걦也썽」??곫뿥?잆곮?鼇?黎귚툗鴉섇뀍雅뗩」??,
      cartEyebrow: "?뤷릲?ζ쐿",
      cartTitle: "簾??鵝좂쉪?됪떓",
      cartLead: "簾??藥꿴됮」??릮瀯㎫뺌?먧벡?②?瑥룡콆??,
      estimatedScope: "窯꾥??묌쥫",
      proceed: "瀯㎫뺌?②?",
      exploreMore: "?η쐦?닷쩀窈밭쎅",
      noProgramSelectedTitle: "?귝쑋?됪떓窈밭쎅??,
      noProgramSelectedText: "瑥룟뀍?됪떓窈밭쎅竊뚧닑?덂츑??All-in-One 瓮?푶?띸쉰??,
      bookingFillRequired: "瑥룟∥?쇿쭞?띲곲궙嶸긷뭽?썹콑??,
      bookingSending: "閭ｅ쑉?먧벡瑥룡콆...",
      bookingSent: "瑥룡콆藥꿨룕?곥귝닊餓т폏?ⓩ빊弱뤸뿶?낂싪퓝鵝졿룓堊쏁쉪?붺내?밧폀訝롣퐷?붺내??,
      bookingFailed: "?묌곩ㅁ兀ο펽瑥루쮰?롩뇥瑥뺛?,
      contactEmailTitle: "???",
      contactEmailLine: "karecation.official@gmail.com",
      contactInstagramLine: "Instagram: @karecation",
      contactWeChatLine: "WeChat: @karecation",
      contactLineLine: "LINE: @karecation",
      contactHoursTitle: "?띶뒦?띌뿴 (KST)",
      contactHoursLine: "?ⓧ??녑뫅?? 10:00-18:00",
      contactNextTitle: "?鵝념툔訝閭?,
      contactNextLine: "?먧벡鵝좂쉪?뤷?窈밭쎅訝롦뿥?잞펽凉冶뗧쭅雅ュ뮜瑥㏂?,
      allInOneCardEyebrow: "SIGNATURE ITINERARY",
      allInOneCardPrice: "$1,499 壅?,
      allInOneCardDescription: "?당퍞瑥딁뼏?ㅷ릤?곫쿃榕숁뒪?녴곫붂?얏걿鸚띴툗??됦폍?뽪돀?좂쉪訝?η쭅雅ラ쫿弱붺풆訝썼죱葉뗣?,
      allInOneCardNote: "?끻맜 1 訝?Skin Clinic Care + 3 訝ゅ룾?됮」??,
      allInOneCardButton: "凉冶뗦엫兩뷸뾽葉?,
      allInOneBuilderTitle: "?꾢뻠鵝좂쉪獰롣맒?끿쮮??,
      allInOneBuilderLead: "?됪떓 1 訝?Skin Clinic Care ?됮」 + 3 訝ゅ룾?됮」??펽若뚧닇 All-in-One Package??,
      allInOneBaseLabel: "?븀?也쀩쨶竊?,
      allInOneAddonsLabel: "?좈」竊?,
      allInOneTotalLabel: "?덅?竊?,
      allInOneRequiredLabel: "恙낂됵폏?됪떓 1 訝?Skin Clinic Care",
      allInOneOptionalLabel: "?됪떓 3 訝ゅ룾?됮」??,
      allInOneSkin1Title: "Skin Clinic Care 1 (+$0)",
      allInOneSkin1Desc: "?싩꽗?ㅸ돯?곮궎兀ⓦ곫캒耶붵곭뺨葉녔룓雅?툗瘟껆릤??,
      allInOneSkin2Title: "Skin Clinic Care 2 (+$150)",
      allInOneSkin2Desc: "?싩꽗?먨뜃?곮돯榮졿??됦툗?긺복?됪캃??,
      allInOneOptScalpTitle: "Scalp Care (+$0)",
      allInOneOptScalpDesc: "鸚당슢瑥딀뼪?곫런掠귝툍域곦툗?얏씭?ㅷ릤??똻??,
      allInOneOptSalonTitle: "Hair Salon (+$80)",
      allInOneOptSalonDesc: "?②??롨퓵烏뚦돦?묉닑?묋뇽?ㅷ릤亮뜹츑?먨츣?뗣?,
      allInOneOptHMUTitle: "Hair & Makeup (+$100)",
      allInOneOptHMUDesc: "訝볞툣?묈엹訝롥쫮若방뵱?곻펽?볣좈븳鸚닷룍也썸븞?쒌?,
      allInOneOptNailTitle: "Nail/Pedi Care (+$0)",
      allInOneOptNailDesc: "?끻맜岳?숱?곮쭜兀ⓩ뒪?녵툗?뗨떨?ⓩ뵸弱얇?,
      allInOneOptBodyTitle: "Body Massage (+$20)",
      allInOneOptBodyDesc: "餓ζ걿鸚띴툗?믥폆訝뷸졇恙껆쉪?②벴?됪뫆??,
      allInOneOptShopTitle: "Beauty Shopping (+$0)",
      allInOneOptShopDesc: "?먧풘 Olive Young 嶺됬쎅?꾢쑑野쇠눌??똻??,
      allInOneContinueButton: "瀯㎫뺌?띶??②?",
      allInOneCounterTemplate: "藥꿴됪떓 {count} / 4",
      allInOneReady: "鵝좂쉪?끿쮮藥꿨뇛鸚뉐갚瀯ゃ?,
      allInOneNeedOneMore: "瓦섌??됪떓 1 訝ら」??뜵??츑?먩뾽葉뗣?,
      allInOneNeedMore: "瓦섌??됪떓 {n} 訝ら」??뜵??츑?먩뾽葉뗣?,
      allInOneMaxPrograms: "鵝졾럴?됪떓譯?4 訝ら」???,
      allInOneMaxOptional: "鵝졾럴?됪떓譯?3 訝ゅ룾?됮」???,
      allInOneSummary: {
        base: "?븀?也쀩쨶竊?,
        addons: "?좈」竊?,
        total: "?덅?竊?
      },
      footer: {
        programs: "倻귝옖訝띸‘若싦퍗?ら뇤凉冶뗰펽??뀍?됪떓 <strong>Private Consultation</strong>??,
        about: "?ⓨ댆溫욥쫿弱붷뎺竊뚦걳?뷸쎍燁곩칳?곫쎍?됪뒍?←쉪?녑츣??,
        faq: "?誤곭쎍?η춸鸚랃폕?먧벡燁곦벴?②??녑룾??,
        contact: "?誤곩츣?띈쭊?믤뿶竊뚩??먧벡燁곦벴?②???,
        booking: "?②??뉒뵪 request-first 役곭쮮?귛댆溫욜‘溫ㅵ뎺鴉싧뀍簾????벧?㎯곮똽?답툗??퍡瑥닸삇??,
        cart: "?ε툕?쎾뀍?롧‘?밧릲竊뚦룾?덂뒥??<strong>Private Consultation</strong>??,
        "program-detail": "?ι?誤곩뀍?롧‘?밧릲竊뚦룾?덁퍗 <strong>Private Consultation</strong> 凉冶뗣?
      }
    },
    faq: [
      ["Karecation ??빳?뤷뒰?뤺컘?や틳?끻?竊?, "?묇뺄??뜌?⒴뮜瑥€쿊?싥곫뿶?닷츎?믡곲」??죺?δ툗鹽쇔?瀛㎩폊野쇗뵱?곥?],
      ["?묌?誤곦?凉冶뗥갚?됪떓若뚧빐也쀩쨶?쀯폕", "訝띺?誤곥귚퐷??빳?덂걳燁곦벴?②?竊뚦냽?녑츣?瀯덅똽?담?],
      ["All-in-One Package ?끻맜餓阿덌폕", "?끻맜 1 訝?Skin Clinic Care ?됮」??3 訝ゅ룾?됮」??펽亮띄뵳?묇뺄?닷릦訝뷰??←쭅雅ヨ죱葉뗣?],
      ["Skin Clinic Care 1 ??2 ?됦?阿덂뙷?ワ폕", "1 ?답쑨?띹궎?꿜툗?ㅸ뇽?뺞뼭竊? ??쎍瓦쏃샄?곭쎅?뉑쎍?롧‘?꾥칺?쀨러孃꾠?],
      ["?묈룾餓ε룵?녘?訝訝ゆ쐨?▼릹竊?, "??빳?귚퐷??뀍餓롥뜒窈방쐨?▼?冶뗰펽阿잌룾?먩??⒴콝??],
      ["??빳?뤷뒰獰롥쫮兀?돥?쀯폕", "??빳?귛룾?됦퐷?꾤쎅?뉐뒥??Olive Young 嶺됬쎅?꾢쑑野쇠눌??똻??],
      ["餓섉Ь倻귚퐬瓦쏂죱竊?, "?②?訝?request-first?귞‘溫ㅵ룾瀛╊툗?瀯덅똽?닷릮竊뚦냽?먧풘??퍡?뉐폊??]
    ],
    programs: {
      "quick-concierge-consultation": {
        name: "Private Consultation",
        duration: "20?녽뮓",
        tagline: "?덃삇簾?뼶??,
        cardDescription: "?귛릦?③됪떓?띶툕?쏂렩孃쀥츣?뜹뻠溫?쉪溫욕???br>?끻맜?뷰틢??젃?곫뿶?답툗??똻?黎귞쉪訝ゆ㎩뙑鰲꾢닋??br>?δ퐷躍뚧쐹?덃툍?겼냽?녑츣竊뚩퓳???也썹쉪壅루궧??
      },
      "skin-clinic-care-1": {
        name: "Skin Clinic Care 1",
        duration: "60??0?녽뮓",
        tagline: "?ㅸ돯訝롨궎兀?,
        cardDescription: "?귛릦躍뚧쐹?룟풓??쭅?뺠궎?덃옖?꾥?若㏂?br>?끻맜驪쎾춸?ㅷ릤?곭뺨葉녔룓雅?툗瘟껆릤??br>??됧뒥窈뱄폏?룡㎬깳窈삭꽦驪?/ 也녔㎬뀑訝뗦닑?뉔깿?길캒??
      },
      "skin-clinic-care-2": {
        name: "Skin Clinic Care 2",
        duration: "90??20?녽뮓",
        tagline: "瓦쏃샄瑥딁뼏?ㅷ릤",
        cardDescription: "?귛릦躍뚧쐹?닺걳??칺?쀥엹?ㅷ릤?꾥?若㏂?br>?끻맜?먨뜃?곮돯榮졿??됦툗?긺복?됪캃??br>?瀯덆귡뀓窈밭쎅餓θ칺???칺瀯볠옖訝뷴뇛??
      },
      "scalp-diagnosis-spa": {
        name: "Scalp Care",
        duration: "60??0?녽뮓",
        tagline: "鸚당슢??뽭뇥??,
        cardDescription: "?귛릦躍뚧쐹瓦쏂죱鸚당슢曆긷벧?ㅷ릤訝롩뇥??쉪溫욕???br>?끻맜鸚당슢瑥딀뼪?곫런掠귝툍域곦툗?믥폆?ㅷ릤??br>??츎?쇻곦툜訝싩쉪?ㅷ릤?쒒씈?밤?
      },
      "hair-salon": {
        name: "Hair Salon",
        duration: "60??0?녽뮓",
        tagline: "?ゅ룕?뽩룕兀ⓩ뒪??,
        cardDescription: "?귛릦躍뚧쐹?룟풓暎얕눜亦숅풖?뜹갼?꾥?若㏂?br>?끻맜?②??롥돦?묉닑?묋뇽?ㅷ릤訝롥츣?뗣?br>?귛릦?볣졾닶?썽쳵瀛㎫쉪腰뽩컮亦숅풖鵝볣챿??
      },
      "celebrity-hair-makeup": {
        name: "Hair & Makeup",
        duration: "90??20?녽뮓",
        tagline: "?쒎ㅄ?뗥??졾엹",
        cardDescription: "?귛릦躍뚧쐹?룟풓若뚧빐?졾엹訝롥쫮?묊쉪溫욕???br>?끻맜訝볞툣?묈엹溫얕?訝롥쫮若방뵱?곥?br>?귞뵪雅롦뉵?ⓦ곫땷?꾣닑暎얕눜?븃죱?γ?
      },
      "nail-care": {
        name: "Nail/Pedi Care",
        duration: "60??0?녽뮓",
        tagline: "暎얕눜?뜹갼瀯녻뒄",
        cardDescription: "?귛릦躍뚧쐹若뚦뻹瀯녻뒄?잏쉪溫욕???br>?끻맜岳?숱?곮쭜兀ⓩ뒪?녵툗?뗨떨?ⓩ뵸弱얇?br>溫⒵빐鵝볡풆訝썼죱葉뗦쎍若뚧빐??
      },
      "body-massage": {
        name: "Body Massage",
        duration: "90?녽뮓",
        tagline: "?℡쨳訝롦붂??,
        cardDescription: "?귛릦躍뚧쐹?℡쨳?곫붂?얌툗翁ヤ퐪?띸쉰?꾥?若㏂?br>?끻맜餓θ닋?귡뇢?얌맏?멨퓘?꾢뀲翁ユ뙃?⒲?br>?귛릦?ⓨ눣烏뚣곮눌?⒵닑譯→뿥葉뗥릮若됪럲??
      }
    }
  },
  ja: {
    meta: {
      brandSub: "?쀣꺀?ㅳ깧?쇈깉 K-beauty ?녈꺍?룔궒?ャ궦??,
      nav: ["?쎼꺖??, "?쀣꺆?겹꺀??, "?멱쳡", "About", "FAQ", "?듿븦?꾢릦?뤵걵"],
      cart: "?ャ꺖??,
      footerAbout: "?썬궑?ャ굮鼇ゃ굦?뗦돈鸚뽧궟?밤깉??걼?곥겗?쀣꺀?ㅳ깧?쇈깉 K-beauty ?녈꺍?룔궒?ャ궦?γ?,
      browse: "?▲깑?γ꺖",
      support: "?듐깮?쇈깉"
    },
    cta: {
      viewPrograms: "?쀣꺆?겹꺀?졼굮誤뗣굥",
      requestConsultation: "?멱쳡?믢풚??
    },
    common: {
      noCartItems: "?멩뒢?뺛굦?잓쟿??겘?귙굤?얇걵??,
      noMatchTitle: "訝?담걲?뗣깤??궛?⒲깲?뚣걗?듽겲?쎼굯",
      noMatchText: "?γ겗??꺖??꺖?됥겲?잆겘?ャ깇?담꺁?믡걡屋╉걮?뤵걽?뺛걚??,
      traveler: "??,
      travelers: "??,
      subtotal: "弱뤺쮫",
      service: "?듐꺖?볝궧??(5%)",
      total: "?덅쮫",
      remove: "?딃솮",
      selected: "?ャ꺖?덀겓瓦썲뒥?쀣겲?쀣걼??
    },
    categories: {
      all: "?쇻겧??,
      package: "?묆긿?긱꺖??,
      starter: "?멱쳡",
      skin: "?밤궘??,
      wellness: "?긱궋",
      styling: "?밤궭?ㅳ꺁?녈궛"
    },
    home: {
      heroEyebrow: "PREMIUM K-BEAUTY, SIMPLIFIED",
      heroTitleLines: ["?썬궑?ャ겗獰롢걮?뺛굮??, "?귙겂?ⓦ깤?⒲궎?쇻꺖?덀겓??],
      heroLead: "?썬궑?ャ굮鼇ゃ굦?뗦돈鸚뽧궟?밤깉?묆걨??깤?⒲궎?쇻꺖??K-beauty ?녈꺍?룔궒?ャ궦?γ귚에?쇈겎?띲굥?쀣꺆?겹꺀?졼굮驪붻펱?쀣곩퓚誤곥겓恙쒌걯??뗥닪?멱쳡?믡걫堊앶졏?뤵걽?뺛걚??,
      howEyebrow: "?붷닶?ⓦ겗役곥굦",
      howTitle: "瓦룔굩?싮겦?녈곲쓾?뗣겓?담걟?곩츎恙껁걮??Ø?뤵겦??,
      steps: [
        ["?쀣꺆?겹꺀?졼굮?멥겤", "?썬궑?ャ겎?뜰걟?잆걚獰롥?鵝볣쮶?ュ릦?뤵걵?╉곩렢?멥궕?쀣궥?㎯꺍?믤캈雍껁걮?얇걲??],
        ["?숃짒?믢퓷耶?, "?永귝군若싧뎺?ャ곭쎑獄뉎걮?잆걚?숃짒?믣뀍?ャ겲?ⓦ굙?얇걲??],
        ["?멱쳡?믢풚??, "?η쮮?곭쎅?꾠곮?沃욁궢?앫꺖?덀곩툕?쎼걲?뗦뵱?담꺃?쇻꺂?믣뀻?됥걮?얇걲??],
        ["沃욘빐?믧뼀冶?, "Karecation ?뚧А??궧?녴긿?쀣굮?롧▶?뗣겇?쀣꺀?ㅳ깧?쇈깉?ャ걫旅덂냵?쀣겲?쇻?]
      ],
      trustEyebrow: "Why Karecation",
      trustTitle: "?덀굤?쀣꺀?ㅳ깧?쇈깉?ャ곥굠?딀삇閻뷩겓??,
      trust: [
        ["??쉪?γ깤?⒲꺍鼇?쮫", "??쮽?곫뿥葉뗣곩엮?⒲걬?곩꽛?덆젂鵝띲겓亦욍겂??Þ鼇덀걮?얇걲??],
        ["岳↓졏?㎯걤?뗦캈雍?, "??꺁?뗣긿??곭풆若밤곥궥?㎯긿?붵꺍?겹겗?멩뒢?㏂굮?당릤?쀣겍驪붻펱?㎯걤?얇걲??],
        ["鸚싪?沃욁궢?앫꺖??, "役룟쨼?꿔궧?덀걣?썬궑?ャ겎若됧퓘?쀣겍?꿔굙?됥굦?뗨Þ鼇덀겎?쇻?]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "??걯?곥굥?띲겓?붺▶沃띲걦?졼걬?꾠?,
      finalEyebrow: "?쀣꺀?녜뼀冶?,
      finalTitle: "?썬궑?ョ풆若밥퐪蟯볝겗繹뽩굺?믣쭓?곥겲?쇻걢竊?
    },
    page: {
      programsEyebrow: "?쀣꺆?겹꺀??,
      programsTitle: "?귙겒?잆겓?덀걝?썬궑?ョ풆若밤겗?볝굮?멥겞?얇걮?뉎걝??,
      programsLead: "役룟쨼?꿔궧?덂릲?묆겓?곩츑?먨엹?묆긿?긱꺖?멥곲썓訝?궞?㏂곥깤?⒲궎?쇻꺖?덄쎑獄뉎궕?쀣궥?㎯꺍?믥뵪?뤵걮?╉걚?얇걲??,
      programsHelper: "瓦룔겂?잆굢?곥겲??Private Consultation ?뗣굢冶뗣굙?╉걦?졼걬?꾠?,
      aboutEyebrow: "About",
      aboutTitle: "?썬궑?ャ굮鼇ゃ굦?뗦돈鸚뽧궟?밤깉??걼?곥겗?쀣꺀?ㅳ깧?쇈깉 K-beauty ?녈꺍?룔궒?ャ궦?γ?,
      aboutLead: "Karecation ??풆若밤곥궚?ゃ깑?껁궚?곥궑?㎯꺂?띲궧?곥궢??꺍鵝볣쮶?믡곥굠?딀삇閻뷩겓?곮맼?←??꾠겍?담걟?얇걲??,
      aboutCards: [
        ["?녜겦?뺛굦?잍룓旅?, "??쉪?ュ릦?뤵걵??퓚誤곥겒獰롥??삠궞??겦?욆궋?믥턂?딂씔?욍겲?쇻?],
        ["?롧▶?ゃ궠?쇈깈?ｃ깓?쇈깉", "?η쮮?곲젂佯뤵곫뵱?담굮訝?ㅳ겗?с궎?됥깤??궩?밤겎?당릤?쀣겲?쇻?],
        ["?쀣꺀?ㅳ깧?쇈깉?ゅ뀍??Þ鼇?, "榮띶풓?㎯걤?뗨쮫?삠겓?ゃ겂?╉걢?됪А??궧?녴긿?쀣겦?꿔굙?얇걲??]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "鼇덄뵽?띲겓?곫삇閻뷩겒嶺붵걟?믡?,
      faqLead: "?멱쳡?곮た?담곦틛榮꾠궢?앫꺖?덀겗?꿔겳?밤굮?붹죭?끹걮?얇걲??,
      contactTitle: "恙낁쫨?ゃ겏?띲겓?곥걲?먨콎?뤵궠?녈궥?㎯꺂?멥깷野얍퓶??,
      contactLead: "?붷툕?쎼겗?η쮮?ⓦ궢?쇈깛?밤굮曆삠걟?╉곥깤?⒲궎?쇻꺖?덄쎑獄뉎굮?붶풚?쇈걦?졼걬?꾠?,
      bookingTitle: "?썬궑?ャ겎?⒲굯??K-beauty 鵝볣쮶?믡걮?잆걚?뗦븰?덀겍?뤵걽?뺛걚??,
      bookingLead: "??쉪?곫뿥葉뗣곥궢?앫꺖?덂툕?쎼굮?길쐣?쀣겍?뤵걽?뺛걚?괡arecation ?뚧А???閭⒲굮訝곩??ャ걫旅덂냵?쀣겲?쇻?,
      bookingDetails: "?듿?礪섉깄??,
      selectedPath: "?멩뒢?끻?",
      searchPlaceholder: "?쀣꺆?겹꺀?졼굮濾쒐뇨",
      sortRecommended: "訝╉겞?욍걟: ?듽걲?쇻굙??,
      priceAsc: "堊→졏: 鵝롢걚??,
      priceDesc: "堊→졏: 遙섅걚??,
      fullName: "?듿릫??,
      email: "?▲꺖??,
      nationality: "?썹콑",
      requestNote: "瓦썲뒥?ゃ궚?ⓦ궧??,
      requestPlaceholder: "躍뚧쐹?쀣꺆?겹꺀?졼곫뿥葉뗣곮?沃욄뵱?담곩꽛?덁틟?끹굮?붻쮼?γ걦?졼걬?꾠?,
      cartEyebrow: "躍뚧쐹??,
      cartTitle: "?멩뒢?끻??믥▶沃?,
      cartLead: "?멩뒢?쀣걼?쀣꺆?겹꺀?졼굮閻븃첀?쀣곭쎑獄뉏풚?쇈겦?꿔굯?㎯걦?졼걬?꾠?,
      estimatedScope: "誤뗧찉?묌죲",
      proceed: "?멱쳡堊앶졏?면꿔?",
      exploreMore: "餓뽧겗?쀣꺆?겹꺀?졼굮誤뗣굥",
      noProgramSelectedTitle: "?얇걽?쀣꺆?겹꺀?졼걣?멩뒢?뺛굦?╉걚?얇걵?볝?,
      noProgramSelectedText: "?덀겓?쀣꺆?겹꺀?졼굮?멥겤?뗣갂ll-in-One ?끿쮮?믢퐳?먦걮?╉걦?졼걬?꾠?,
      bookingFillRequired: "?띶뎺?곥깳?쇈꺂?곩쎖映띲굮?ε뒟?쀣겍?뤵걽?뺛걚??,
      bookingSending: "堊앶졏?믧곦에?쀣겍?꾠겲??..",
      bookingSent: "?붶풚?쇈굮?쀣걨餓섅걨?얇걮?잆귝빊?귡뼋餓ε냵?ュ뀯?쎿깄?긱겦?붼ｇ덧?쀣겲?쇻?,
      bookingFailed: "?곦에?ュㅁ?쀣걮?얇걮?잆귝셽?볝굮?듽걚??냽佯╉걡屋╉걮?뤵걽?뺛걚??,
      contactEmailTitle: "?▲꺖??,
      contactEmailLine: "karecation.official@gmail.com",
      contactInstagramLine: "Instagram: @karecation",
      contactWeChatLine: "WeChat: @karecation",
      contactLineLine: "LINE: @karecation",
      contactHoursTitle: "野얍퓶?귡뼋 (KST)",
      contactHoursLine: "???? 10:00-18:00",
      contactNextTitle: "?듽걲?쇻굙??А???閭?,
      contactNextLine: "躍뚧쐹?쀣꺆?겹꺀?졼겏?η쮮?믤렌?덀겍?곥깤?⒲궎?쇻꺖?덄쎑獄뉎굮?붶풚?쇈걦?졼걬?꾠?,
      allInOneCardEyebrow: "SIGNATURE ITINERARY",
      allInOneCardPrice: "$1,499??,
      allInOneCardDescription: "??꺁?뗣긿??궞?㏂곥궢??꺍?긱궋?곩썮孃⒲곥궕?쀣궥?㎯꺍沃욘빐?믢??γ겓?얇겏?곥걼?쀣꺀?ㅳ깧?쇈깉?썬궑?ョ풆若밤꺂?쇈깉??,
      allInOneCardNote: "Skin Clinic Care 1餓?+ ?ゃ깤?룔깾??餓뜰굮?ャ겳?얇걲",
      allInOneCardButton: "?끿쮮?믥탡?욜쳦?╉굥",
      allInOneBuilderTitle: "?귙겒?잆겗獰롥??멥깵?쇈깑?쇈굮鵝쒏닇??,
      allInOneBuilderLead: "Skin Clinic Care ???ㅳ곥궕?쀣궥?㎯꺍???ㅹ겦?볝겎 All-in-One Package ?믣츑?먦걬?쎼겍?뤵걽?뺛걚??,
      allInOneBaseLabel: "?뷸쑍?묆긿?긱꺖??",
      allInOneAddonsLabel: "瓦썲뒥?ゃ깤?룔깾??",
      allInOneTotalLabel: "?덅쮫:",
      allInOneRequiredLabel: "恙낂젅: Skin Clinic Care ???ㅹ겦??,
      allInOneOptionalLabel: "?ゃ깤?룔깾?녈굮3?ㅹ겦??,
      allInOneSkin1Title: "Skin Clinic Care 1 (+$0)",
      allInOneSkin1Desc: "?덀꺖?녈곥궘?▲곫캒令담곥깛?욍깱?녈깉?쇈꺍?긱궋?곥깉?쇈깑?녈궛訝?퓘?긱궋??,
      allInOneSkin2Title: "Skin Clinic Care 2 (+$150)",
      allInOneSkin2Desc: "?ゃ깢?녴궍?녈궛?곮돯榮졼꺃?쇈궣?쇈곥걮?뤵깭?덀긿??궧訝?퓘?긱궋??,
      allInOneOptScalpTitle: "Scalp Care (+$0)",
      allInOneOptScalpDesc: "??슢鼇뷸뼪?곥궧?긱꺖?ゃ꺍?겹곥꺁?⒲긿??궧?긱궋??뤃??,
      allInOneOptSalonTitle: "Hair Salon (+$80)",
      allInOneOptSalonDesc: "?멱쳡孃뚣곥궖?껁깉?얇걼??깦?㏂궚?ゃ깑?껁궚?긱궋?ⓧ퍞訝듽걩??,
      allInOneOptHMUTitle: "Hair & Makeup (+$100)",
      allInOneOptHMUDesc: "域쀧럽?뺛굦?잆궖?▲꺀?졼걟??걼?곥겗?쀣꺆?섅궋竊녴깳?ㅳ궚??,
      allInOneOptNailTitle: "Nail/Pedi Care (+$0)",
      allInOneOptNailDesc: "?룔궒?ㅳ깤?곥궘?γ꺖?녴궍??꺂?긱궋?곥깓?ㅳ꺂?얇걼??깪?뉎궍餓뺜툓?믡?,
      allInOneOptBodyTitle: "Body Massage (+$20)",
      allInOneOptBodyDesc: "?욃쑴?ⓦ꺁?ゃ꺖?밤굮?띹쫿?쀣걼?뺛꺂?쒌깈?ｃ깯?껁궢?쇈궦??,
      allInOneOptShopTitle: "Beauty Shopping (+$0)",
      allInOneOptShopDesc: "Olive Young ?ゃ겑?믣맜? K-beauty ?룔깾?껁깞?녈궛?с궎?됥?,
      allInOneContinueButton: "?멱쳡?싥꺖?멥겦?꿔?",
      allInOneCounterTemplate: "{count} / 4 ?멩뒢歷덀겳",
      allInOneReady: "?멥깵?쇈깑?쇈겗繹뽩굺?뚧빐?꾠겲?쀣걼??,
      allInOneNeedOneMore: "?멥깵?쇈깑?쇔츑?먦겓??곥걗??餓띌겦?욁걮?╉걦?졼걬?꾠?,
      allInOneNeedMore: "?멥깵?쇈깑?쇔츑?먦겓??곥걗??n}餓띌겦?욁걮?╉걦?졼걬?꾠?,
      allInOneMaxPrograms: "?쇻겎??餓뜰걲?밤겍?멩뒢歷덀겳?㎯걲??,
      allInOneMaxOptional: "?ゃ깤?룔깾??餓뜰겘?쇻겎?ラ겦?욄툑?욍겎?쇻?,
      allInOneSummary: {
        base: "?뷸쑍?묆긿?긱꺖??",
        addons: "瓦썲뒥?ゃ깤?룔깾??",
        total: "?덅쮫:"
      },
      footer: {
        programs: "瓦룔겂?잆굢 <strong>Private Consultation</strong> ?뗣굢冶뗣굙?╉걦?졼걬?꾠?,
        about: "?썬궑?ヨØ?뤷뎺?ャ곥굠?듽깤?⒲궎?쇻꺖?덀겎閻뷩걢?ゅ닩??굮??,
        faq: "?쇻걧?ュ썮嶺붵걣恙낁쫨?ゃ굢?곥깤?⒲궎?쇻꺖?덄쎑獄뉎굮?붶풚?쇈걦?졼걬?꾠?,
        contact: "?뗥닪鼇?쮫?뚦퓚誤곥겒?닷릦??곥깤?⒲궎?쇻꺖?덄쎑獄뉎굮?붶풚?쇈걦?졼걬?꾠?,
        booking: "?멱쳡??request-first ?밧폀?㎯걲?귟Ø?뤹▶若싧뎺?ュ룾?ⓩ㎯곭칱?꿔곫뵱?뺛걚旅덂냵?믥▶沃띲걮?얇걲??,
        cart: "?얇걳?롧▶?ュ쭓?곥굥?ゃ굢 <strong>Private Consultation</strong> ?뗣굢??,
        "program-detail": "?밧릲?당릤?뚦뀍?ゃ굢 <strong>Private Consultation</strong> ?뗣굢冶뗣굙?╉걦?졼걬?꾠?
      }
    },
    faq: [
      ["Karecation ??퐬?믦た?담걮?╉걦?뚣겲?쇻걢竊?, "?멱쳡?곫뿥葉뗣깢??꺖?곥깤??궛?⒲깲?볝겗?ㅳ겒?뚣굤?곥궠?녈궥?㎯꺂?멥깷旅덂냵?믢릎恙껁겓沃욘빐?쀣겲?쇻?],
      ["??앫걢?됥깢?ャ깙?껁궞?쇈궦?믧겦?뜹퓚誤곥걣?귙굤?얇걲?뗰폕", "?꾠걚?덀귙겲?싥깤?⒲궎?쇻꺖?덄쎑獄뉎걢?됧쭓?곥곥걗?ⓦ겎影꾢쎊?믤군?곥굢?뚣겲?쇻?],
      ["All-in-One Package ?ャ겘鵝뺛걣?ャ겲?뚣겲?쇻걢竊?, "Skin Clinic Care 1餓뜰겏?ゃ깤?룔깾??餓뜰굮???ㅳ겗?쀣꺀?ㅳ깧?쇈깉?끿쮮?ⓦ걮??た?담걮?얇걲??],
      ["Skin Clinic Care 1 ??2 ??걬?꾠겘竊?, "1??깉?쇈꺍?삠궘?▲겗?ゃ깢?с긿?룔깷訝?퓘????굠?듽궭?쇈궟?껁깉?믥턂?ｃ걼??꺁?뗣긿??릎恙껁궞?㏂겎?쇻?],
      ["1?ㅳ겗?듐꺖?볝궧?졼걨堊앶졏?㎯걤?얇걲?뗰폕", "??걚?귛뜕鵝볝깤??궛?⒲깲?뗣굢冶뗣굙?뗣걪?ⓦ굚?곩풄?㎪떋凉듐걲?뗣걪?ⓦ굚??꺗?㎯걲??],
      ["獰롥??룔깾?껁깞?녈궛??궢?앫꺖?덀겘?귙굤?얇걲?뗰폕", "??걚?귞쎅?꾠겓?덀굩?쎼겍 Olive Young ?ゃ겑??궥?㎯긿?붵꺍?겹궗?ㅳ깋?믥탡?욤씔?곥겲?쇻?],
      ["??돂?꾠겘?⒲겗?덀걝?ラ꿔겳?얇걲?뗰폕", "?멱쳡??request-first?귛룾?ⓩ㎯겏?永귞칱?꿔굮閻븃첀孃뚣곫뵱?뺛걚旅덂냵?믡걡?곥굤?쀣겲?쇻?]
    ],
    programs: {
      "quick-concierge-consultation": {
        name: "Private Consultation",
        duration: "20??,
        tagline: "?얇걳?롧▶??,
        cardDescription: "?멥겤?띲겓?밧릲?㎯굮?담걟?잆걚?밤겓??⒲?br>??쮽?곫뿥葉뗣곫뵱?닷툕?쎼겓?뷩겈?뤷뗥닪?쀣꺀?녘Þ鼇덀굮?ャ겳?얇걲??br>雅덄큵?띲겓?당릤?쀣걼?꾣뼶?ユ??⒲겎?쇻?
      },
      "skin-clinic-care-1": {
        name: "Skin Clinic Care 1",
        duration: "60??0??,
        tagline: "?덀꺖??& ??깳",
        cardDescription: "??겓誤뗣걟?뗨굦?ゃ깢?с긿?룔깷?믤콆?곥굥?밤겓??⒲?br>驪쏁㈃?긱궋?곥깛?욍깱?녈깉?쇈꺍?긱궋?곥깉?쇈깑?녈궛?믣맜?욍겲?쇻?br>?룡㎯겗?믡궟?길캒 / 也녔㎯겗?뉎꺕?ｅ뀇?길캒?믦옙?졾룾?썬?
      },
      "skin-clinic-care-2": {
        name: "Skin Clinic Care 2",
        duration: "90??20??,
        tagline: "?㏂깋?먦꺍?밤깋??꺁?뗣긿??,
        cardDescription: "?덀굤?욍꺖?꿔긿?덀굮永욁겂?잆궚?ゃ깑?껁궚?긱궋?믤콆?곥굥?밤겓??⒲?br>?ゃ깢?녴궍?녈궛?곮돯榮졼꺃?쇈궣?쇈곥걮?뤵깭?덀긿??궧?믣맜?욍겲?쇻?br>?永귞쉪?ゆ뼺烏볣겑?덀겘??꺁?뗣긿??쎑獄뉎겎閻뷴츣?쀣겲?쇻?
      },
      "scalp-diagnosis-spa": {
        name: "Scalp Care",
        duration: "60??0??,
        tagline: "??꺁?쇈꺍?밤궖?ャ깤?ゃ궩?껁깉",
        cardDescription: "??슢?긱궋?믧썓訝?걮??룛?묆걼?꾣뼶?ユ??⒲?br>??슢鼇뷸뼪?곥궧?긱꺖?ゃ꺍?겹곥꺁?⒲긿??궧?긱궋?믣맜?욍겲?쇻?br>?썬걾??꾠걼弱귡??긱궋??쳦?▼칱?듿뀍?ⓦ걮????⒲겎?쇻?
      },
      "hair-salon": {
        name: "Hair Salon",
        duration: "60??0??,
        tagline: "?ャ긿??or ??꺁?뗣긿??,
        cardDescription: "訝딂나?ゃ궢??꺍餓뺜툓?믡굮黎귙굙?뗦뼶?ユ??⒲?br>?멱쳡孃뚣겗?ャ긿?덀겲?잆겘?섅궋??꺁?뗣긿??궞?㏂겏餓뺜툓?믡굮?ャ겳?얇걲??br>域쀧럽?뺛굦?잆궫?╉꺂?듐꺆?념퐪蟯볝겓??⒲겎?쇻?
      },
      "celebrity-hair-makeup": {
        name: "Hair & Makeup",
        duration: "90??20??,
        tagline: "?ャ깳?⒲꺃?뉎궍?밤궭?ㅳ꺁?녈궛",
        cardDescription: "?담겂?잆궧?욍궎?ャ겏?계괌?꾠겒餓뺜툓?뚣굤?믤콆?곥굥?밤겓??⒲?br>?쀣꺆??깦?㏂궧?욍궎?ゃ꺍?겹겏?▲궎??뵱?담굮?ャ겳?얇걲??br>?ㅳ깧?녈깉?곫뮢壤긱곫킋渶담걬?뚣걼鸚뽩눣?γ겓??⒲겎?쇻?
      },
      "nail-care": {
        name: "Nail/Pedi Care",
        duration: "60??0??,
        tagline: "餓뺜툓?믡겗?뉎궍?녴꺖??,
        cardDescription: "?ⓧ퐪??츑?먨벧?믧쳵?곥걼?꾣뼶?ユ??⒲?br>?룔궒?ㅳ깤?곥궘?γ꺖?녴궍??꺂?긱궋?곥깓?ㅳ꺂?얇걼??깪?뉎궍餓뺜툓?믡굮?ャ겳?얇걲??br>獰롥??끿쮮??퍞訝듽걩?ⓦ걮????⒲겎?쇻?
      },
      "body-massage": {
        name: "Body Massage",
        duration: "90??,
        tagline: "?욃쑴 & ?ゃ꺀??궪?쇈궥?㎯꺍",
        cardDescription: "?욃쑴?곥꺁?⒲긿??궧?곥깭?뉎궍?ゃ궩?껁깉?믤콆?곥굥?밤겓??⒲?br>恙ラ겑?뺛겏?ゃ꺁?쇈궧?ラ뇥?밤굮營?걚?잌뀲翁ャ깯?껁궢?쇈궦?믣맜?욍겲?쇻?br>燁삣땿?삭껭?꾤돥?삠깢?ャ깈?쇔풄?ョ돶?ャ걡?쇻걲?곥겎?쇻?
      }
    }
  }
};

Object.keys(LANGUAGE_SYNC_PATCH).forEach((locale) => {
  if (I18N[locale]) deepMerge(I18N[locale], LANGUAGE_SYNC_PATCH[locale]);
});

const PAYMENT_COPY_PATCH = {
  en: {
    common: {
      subtotal: "Subtotal",
      service: "Service fee included for card payment (5%)",
      cardPaymentTotal: "Card payment total",
      cashBankTransferTotal: "Cash / Bank Transfer Total",
      cashBankDiscountApplied: "5% service fee discount applied for cash or bank transfer."
    },
    page: {
      paymentAfterConfirmationTitle: "Payment after confirmation",
      paymentAfterConfirmationBody: "Karecation confirms availability, scope, and timing before collecting payment. After your request is reviewed, we will share a secure payment link or cash / bank transfer instructions.",
      paymentNote: "Card payments include the 5% service fee. Cash or bank transfer payments receive a 5% service fee discount after availability and final scope are confirmed.",
      preferredVisitDate: "Preferred Visit Date",
      preferredVisitDateHelper: "Final availability will be confirmed by Karecation after reviewing your request.",
      preferredVisitDateRequired: "Please select your preferred visit date.",
      preferredVisitDateNotSelected: "-",
      paymentMethod: "Payment Method",
      paymentMethodPlaceholder: "Select payment method",
      paymentMethodCard: "Card Payment",
      paymentMethodCashBank: "Cash / Bank Transfer",
      paymentMethodRequired: "Please select your payment method.",
      requestNote: "Additional Request",
      payByCard: "Pay by Card",
      requestCashBankInstructions: "Request Cash / Bank Transfer Instructions"
    }
  },
  ko: {
    page: {
      preferredVisitDate: "희망 방문 날짜",
      preferredVisitDateHelper: "최종 가능 일정은 요청 확인 후 Karecation이 별도로 안내드립니다.",
      preferredVisitDateRequired: "희망 방문 날짜를 선택해 주세요.",
      paymentMethod: "결제 방식",
      paymentMethodCard: "카드 결제",
      paymentMethodCashBank: "현금 / 계좌이체",
      paymentMethodRequired: "결제 방식을 선택해 주세요.",
      requestNote: "추가 요청사항"
    }
  },
  zh: {
    page: {
      preferredVisitDate: "期望访问日期",
      preferredVisitDateHelper: "最终可预约时间将在 Karecation 确认请求后另行 안내됩니다.",
      preferredVisitDateRequired: "请选择期望访问日期。",
      paymentMethod: "付款方式",
      paymentMethodCard: "银行卡支付",
      paymentMethodCashBank: "现金 / 银行转账",
      paymentMethodRequired: "请选择支付方式。",
      requestNote: "补充需求"
    }
  },
  ja: {
    page: {
      preferredVisitDate: "ご希望の訪問日",
      preferredVisitDateHelper: "最終的な空き状況はリクエスト確認後、Karecationよりご案内します。",
      preferredVisitDateRequired: "ご希望の訪問日を選択してください。",
      paymentMethod: "お支払い方法",
      paymentMethodCard: "カード決済",
      paymentMethodCashBank: "現金 / 銀行振込",
      paymentMethodRequired: "支払い方法を選択してください。",
      requestNote: "追加リクエスト"
    }
  }
};

Object.keys(PAYMENT_COPY_PATCH).forEach((locale) => {
  if (I18N[locale]) deepMerge(I18N[locale], PAYMENT_COPY_PATCH[locale]);
});function getLocale() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang") || localStorage.getItem(LOCALE_KEY) || "en";
  return I18N[requested] ? requested : "en";
}

let currentLocale = getLocale();
let allInOneState = { skinId: null, optionalIds: [] };

function t() {
  return I18N[currentLocale] || I18N.en;
}

function contactChannelCopy() {
  return CONTACT_CHANNEL_COPY[currentLocale] || CONTACT_CHANNEL_COPY.en;
}

function programText(program) {
  return t().programs[program.id] || I18N.en.programs[program.id];
}

function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function readAllInOneSelection() {
  try {
    const raw = JSON.parse(localStorage.getItem(ALLINONE_SELECTION_KEY) || "{}");
    const skinId = ALLINONE_BUILDER_CONFIG.requiredIds.includes(raw.skinId) ? raw.skinId : null;
    const optionalIds = Array.isArray(raw.optionalIds)
      ? raw.optionalIds.filter((id, index, arr) => ALLINONE_BUILDER_CONFIG.optionalIds.includes(id) && arr.indexOf(id) === index).slice(0, 3)
      : [];
    return { skinId, optionalIds };
  } catch (error) {
    return { skinId: null, optionalIds: [] };
  }
}

function saveAllInOneSelection(selection) {
  localStorage.setItem(ALLINONE_SELECTION_KEY, JSON.stringify(selection));
}

function readAllInOneJourney() {
  try {
    const raw = JSON.parse(localStorage.getItem(ALLINONE_JOURNEY_KEY) || "{}");
    if (!Array.isArray(raw.selectedIds) || !Array.isArray(raw.selectedNames)) return null;
    return raw;
  } catch (error) {
    return null;
  }
}

function saveAllInOneJourney(journey) {
  localStorage.setItem(ALLINONE_JOURNEY_KEY, JSON.stringify(journey));
}

function clearAllInOneJourney() {
  localStorage.removeItem(ALLINONE_JOURNEY_KEY);
}

function clearKarecationStateStorage() {
  RESETTABLE_STATE_KEYS.forEach((key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      // Ignore storage access errors and continue clearing known keys.
    }
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      // Ignore storage access errors and continue clearing known keys.
    }
  });
}

function getNavigationType() {
  try {
    const entries = typeof performance?.getEntriesByType === "function"
      ? performance.getEntriesByType("navigation")
      : [];
    if (entries.length && entries[0]?.type) {
      return entries[0].type;
    }
  } catch (error) {
    // Ignore and use fallback below.
  }

  try {
    if (performance?.navigation && typeof performance.navigation.type === "number") {
      if (performance.navigation.type === 1) return "reload";
      return "navigate";
    }
  } catch (error) {
    // Ignore navigation fallback errors.
  }

  return "";
}

function isReloadNavigation() {
  return getNavigationType() === "reload";
}

function resetHomeBuilderAndCartState() {
  clearKarecationStateStorage();
  allInOneState = { skinId: null, optionalIds: [] };
  const builder = document.getElementById("allInOneBuilder");
  if (builder) builder.hidden = true;
  syncAllInOneBuilderUI();
  updateCartCount();
}

function handleReloadResetAndRouting() {
  if (!isReloadNavigation()) return false;

  clearKarecationStateStorage();

  if (document.body.dataset.page !== "home") {
    window.location.replace("index.html");
    return true;
  }

  allInOneState = { skinId: null, optionalIds: [] };
  const builder = document.getElementById("allInOneBuilder");
  if (builder) builder.hidden = true;
  syncAllInOneBuilderUI();
  updateCartCount();
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  return false;
}

function allInOneSelectedCount() {
  return (allInOneState.skinId ? 1 : 0) + allInOneState.optionalIds.length;
}

function allInOneSelectionNames() {
  const ids = [allInOneState.skinId, ...allInOneState.optionalIds].filter(Boolean);
  return ids.map((id) => ALLINONE_BUILDER_CONFIG.labels[id]).filter(Boolean);
}

function allInOnePriceBreakdown() {
  const selectedIds = [allInOneState.skinId, ...allInOneState.optionalIds].filter(Boolean);
  const addonTotal = selectedIds.reduce((sum, id) => sum + (ALLINONE_BUILDER_CONFIG.addonPrices[id] || 0), 0);
  const basePrice = ALLINONE_BUILDER_CONFIG.basePrice;
  return {
    basePrice,
    addonTotal,
    totalPrice: basePrice + addonTotal,
    selectedAddons: selectedIds.map((id) => ({
      id,
      name: ALLINONE_BUILDER_CONFIG.labels[id],
      addonPrice: ALLINONE_BUILDER_CONFIG.addonPrices[id] || 0
    }))
  };
}

function remainingProgramsMessage(remaining) {
  const copy = t();
  if (remaining <= 0) return "";
  const oneTemplate = copy.page.allInOneNeedOneMore || "Please choose 1 more program to complete your journey.";
  const manyTemplate = copy.page.allInOneNeedMore || "Please choose {n} more program(s) to complete your journey.";
  if (remaining === 1) return oneTemplate;
  return manyTemplate.replace("{n}", String(remaining));
}

function getProgramById(id) {
  return PROGRAMS.find((program) => program.id === id);
}

function readCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(raw)) return [];
    return raw
      .map((item) => ({
        programId: item.programId,
        travelers: Math.max(1, Math.round(Number(item.travelers) || 1)),
        preferredDate: item.preferredDate || ""
      }))
      .filter((item) => getProgramById(item.programId));
  } catch (error) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  updateCartCount();
}

function getCartDetails() {
  const journey = readAllInOneJourney();
  return readCart().map((item) => {
    const program = getProgramById(item.programId);
    const travelers = Math.max(1, Number(item.travelers) || 1);
    const isAllInOne = journey?.packageType === "all-in-one" && item.programId === "all-in-one-package";
    const unit = isAllInOne ? Number(journey.finalTotal || journey.totalPrice || program.startPrice || 0) : program.startPrice;
    return {
      ...item,
      program,
      travelers,
      unit,
      lineTotal: unit * travelers
    };
  });
}

function getCartTotals() {
  const subtotal = getCartDetails().reduce((sum, item) => sum + item.lineTotal, 0);
  const service = Math.round(subtotal * SERVICE_RATE);
  return { subtotal, service, total: subtotal + service };
}

function updateCartCount() {
  const count = readCart().reduce((sum, item) => sum + (Number(item.travelers) || 1), 0);
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = String(count);
  });
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node && value != null) node.textContent = value;
}

function setLineTitle(id, lines) {
  const node = document.getElementById(id);
  if (!node || !Array.isArray(lines)) return;
  node.replaceChildren();
  lines.forEach((line, index) => {
    if (index) node.appendChild(document.createElement("br"));
    node.appendChild(document.createTextNode(line));
  });
}

function setPlaceholder(id, value) {
  const node = document.getElementById(id);
  if (node && value != null) node.placeholder = value;
}

function setFieldLabel(inputId, value) {
  const input = document.getElementById(inputId);
  const label = input?.closest("label");
  if (!label || !value) return;
  [...label.childNodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      node.textContent = `\n                ${value}\n                `;
    }
  });
}

function flashMessage(message, type = "success") {
  const target = document.getElementById("globalFlash");
  if (!target) return;
  target.textContent = message;
  target.className = `status-message ${type}`;
  setTimeout(() => {
    if (target.textContent === message) {
      target.textContent = "";
      target.className = "status-message";
    }
  }, 2000);
}

function insertLanguageSelector() {
  const navRow = document.querySelector(".nav-row");
  const cart = document.querySelector(".cart-entry");
  if (!navRow || !cart || document.querySelector(".language-switcher")) return;

  const switcher = document.createElement("div");
  switcher.className = "language-switcher";
  switcher.setAttribute("aria-label", "Language");
  switcher.innerHTML = SUPPORTED_LOCALES.map((locale) => (
    `<button type="button" class="${locale.code === currentLocale ? "active" : ""}" data-locale="${locale.code}">${locale.label}</button>`
  )).join("");
  navRow.insertBefore(switcher, cart);
}

function setLanguage(locale) {
  if (!I18N[locale]) return;
  currentLocale = locale;
  localStorage.setItem(LOCALE_KEY, locale);
  applyLocale();
}

const PROGRAMS_PAGE_DURATION_MAP = {
  en: {
    "quick-concierge-consultation": "20 mins",
    "skin-clinic-care-1": "60??0 mins",
    "skin-clinic-care-2": "90??20 mins",
    "scalp-diagnosis-spa": "60??0 mins",
    "hair-salon": "60??0 mins",
    "celebrity-hair-makeup": "90??20 mins",
    "nail-care": "60??0 mins",
    "body-massage": "90 mins"
  },
  ko: {
    "quick-concierge-consultation": "20遺?,
    "skin-clinic-care-1": "60??0遺?,
    "skin-clinic-care-2": "90??20遺?,
    "scalp-diagnosis-spa": "60??0遺?,
    "hair-salon": "60??0遺?,
    "celebrity-hair-makeup": "90??20遺?,
    "nail-care": "60??0遺?,
    "body-massage": "90遺?
  },
  zh: {
    "quick-concierge-consultation": "20?녽뮓",
    "skin-clinic-care-1": "60??0?녽뮓",
    "skin-clinic-care-2": "90??20?녽뮓",
    "scalp-diagnosis-spa": "60??0?녽뮓",
    "hair-salon": "60??0?녽뮓",
    "celebrity-hair-makeup": "90??20?녽뮓",
    "nail-care": "60??0?녽뮓",
    "body-massage": "90?녽뮓"
  },
  ja: {
    "quick-concierge-consultation": "20??,
    "skin-clinic-care-1": "60??0??,
    "skin-clinic-care-2": "90??20??,
    "scalp-diagnosis-spa": "60??0??,
    "hair-salon": "60??0??,
    "celebrity-hair-makeup": "90??20??,
    "nail-care": "60??0??,
    "body-massage": "90??
  }
};

// Programs page uses local placeholders so visual assets can be swapped with licensed brand-safe files.
const PROGRAMS_PAGE_MEDIA = {
  "quick-concierge-consultation": {
    image: "private-consultation.jpg",
    imageAlt: "Private K-beauty consultation planning"
  },
  "skin-clinic-care-1": {
    image: "skin-clinic-care-1.jpg",
    imageAlt: "Premium skin refresh treatment"
  },
  "skin-clinic-care-2": {
    image: "skin-clinic-care-2.jpg",
    imageAlt: "Advanced skin clinic care"
  },
  "scalp-diagnosis-spa": {
    image: "scalp-care.jpg",
    imageAlt: "Relaxing scalp care treatment"
  },
  "hair-salon": {
    image: "hair-salon.jpg",
    imageAlt: "Refined Seoul hair salon care"
  },
  "celebrity-hair-makeup": {
    image: "hair-makeup.jpg",
    imageAlt: "Luxury hair and makeup styling"
  },
  "nail-care": {
    image: "nail-pedi-care.jpg",
    imageAlt: "Minimal nail and pedi care"
  },
  "body-massage": {
    image: "body-massage.jpg",
    imageAlt: "Premium body massage and recovery"
  }
};

function getProgramsPageDuration(programId, fallbackDuration) {
  const localeMap = PROGRAMS_PAGE_DURATION_MAP[currentLocale] || PROGRAMS_PAGE_DURATION_MAP.en;
  return localeMap[programId] || fallbackDuration;
}

function applyLocale() {
  const copy = t();
  document.documentElement.lang = SUPPORTED_LOCALES.find((item) => item.code === currentLocale)?.htmlLang || "en";
  document.querySelector(".brand small")?.replaceChildren(document.createTextNode(copy.meta.brandSub));
  document.querySelectorAll(".main-nav a").forEach((link, index) => {
    if (copy.meta.nav[index]) link.textContent = copy.meta.nav[index];
  });
  document.querySelectorAll(".cart-entry, .floating-cart").forEach((node) => {
    const count = node.querySelector("[data-cart-count]");
    const strong = node.querySelector("strong[data-cart-count]");
    node.childNodes[0].textContent = `${copy.meta.cart} `;
    if (count) count.textContent = count.textContent || "0";
    if (strong) strong.textContent = strong.textContent || "0";
  });
  document.querySelectorAll(".language-switcher button").forEach((button) => {
    button.classList.toggle("active", button.dataset.locale === currentLocale);
  });
  renderStaticPageCopy();
  renderHomePrograms();
  renderProgramsPage();
  renderDetailPage();
  renderCartPage();
  renderBookingSummary();
  renderFaqPage();
  updateCartCount();
  syncAllInOneBuilderUI();
}

function setActiveNav() {
  const current = document.body.dataset.page;
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.page === current);
  });
}

function renderStaticPageCopy() {
  const copy = t();
  const page = document.body.dataset.page;

  if (page === "home") {
    setText("homeHeroEyebrow", copy.home.heroEyebrow);
    setLineTitle("homeHeroTitle", copy.home.heroTitleLines || [copy.home.heroTitle]);
    setText("homeHeroLead", copy.home.heroLead);
    setText("homeHeroPrimary", copy.cta.viewPrograms);
    setText("homeHeroSecondary", copy.cta.requestConsultation);
    setText("homeProgramsEyebrow", copy.home.programsEyebrow);
    setText("homeProgramsTitle", copy.home.programsTitle);
    setText("homeProgramsCta", copy.cta.viewAllPrograms);
    setText("homeHowEyebrow", copy.home.howEyebrow);
    setText("homeHowTitle", copy.home.howTitle);
    copy.home.steps.forEach((step, index) => {
      setText(`homeStep${index + 1}Title`, step[0]);
      setText(`homeStep${index + 1}Text`, step[1]);
    });
    setText("homeTrustEyebrow", copy.home.trustEyebrow);
    setText("homeTrustTitle", copy.home.trustTitle);
    copy.home.trust.forEach((item, index) => {
      setText(`homeTrust${index + 1}Title`, item[0]);
      setText(`homeTrust${index + 1}Text`, item[1]);
    });
    setText("homeFaqEyebrow", copy.home.faqEyebrow);
    setText("homeFaqTitle", copy.home.faqTitle);
    setText("homeFinalEyebrow", copy.home.finalEyebrow);
    setText("homeFinalTitle", copy.home.finalTitle);
    setText("homeFinalCta", copy.cta.requestConsultation);
    setText("allInOneCardEyebrow", copy.page.allInOneCardEyebrow);
    setText("allInOneCardPrice", copy.page.allInOneCardPrice);
    setText("allInOneCardDescription", copy.page.allInOneCardDescription);
    setText("allInOneCardNote", copy.page.allInOneCardNote);
    setText("allInOneCardButton", copy.page.allInOneCardButton);
    setText("allInOneBuilderTitle", copy.page.allInOneBuilderTitle);
    setText("allInOneBuilderLead", copy.page.allInOneBuilderLead);
    setText("allInOneBaseLabel", copy.page.allInOneBaseLabel);
    setText("allInOneAddonsLabel", copy.page.allInOneAddonsLabel);
    setText("allInOneTotalLabel", copy.page.allInOneTotalLabel);
    setText("allInOneRequiredLabel", copy.page.allInOneRequiredLabel);
    setText("allInOneOptionalLabel", copy.page.allInOneOptionalLabel);
    setText("allInOneSkin1Title", copy.page.allInOneSkin1Title);
    setText("allInOneSkin1Desc", copy.page.allInOneSkin1Desc);
    setText("allInOneSkin2Title", copy.page.allInOneSkin2Title);
    setText("allInOneSkin2Desc", copy.page.allInOneSkin2Desc);
    setText("allInOneOptScalpTitle", copy.page.allInOneOptScalpTitle);
    setText("allInOneOptScalpDesc", copy.page.allInOneOptScalpDesc);
    setText("allInOneOptSalonTitle", copy.page.allInOneOptSalonTitle);
    setText("allInOneOptSalonDesc", copy.page.allInOneOptSalonDesc);
    setText("allInOneOptHMUTitle", copy.page.allInOneOptHMUTitle);
    setText("allInOneOptHMUDesc", copy.page.allInOneOptHMUDesc);
    setText("allInOneOptNailTitle", copy.page.allInOneOptNailTitle);
    setText("allInOneOptNailDesc", copy.page.allInOneOptNailDesc);
    setText("allInOneOptBodyTitle", copy.page.allInOneOptBodyTitle);
    setText("allInOneOptBodyDesc", copy.page.allInOneOptBodyDesc);
    setText("allInOneOptShopTitle", copy.page.allInOneOptShopTitle);
    setText("allInOneOptShopDesc", copy.page.allInOneOptShopDesc);
    setText("allInOneContinueButton", copy.page.allInOneContinueButton);
  }

  const pageHero = document.querySelector(".page-hero .container");
  if (pageHero && ["programs", "about", "faq", "contact", "booking", "cart"].includes(page)) {
    const eyebrow = pageHero.querySelector(".eyebrow");
    const h1 = pageHero.querySelector("h1");
    const lead = pageHero.querySelector(".lead");
    const map = {
      programs: [copy.page.programsEyebrow, copy.page.programsTitle, copy.page.programsLead],
      about: [copy.page.aboutEyebrow, copy.page.aboutTitle, copy.page.aboutLead],
      faq: [copy.page.faqEyebrow, copy.page.faqTitle, copy.page.faqLead],
      contact: [copy.meta.nav[5], copy.page.contactTitle, copy.page.contactLead],
      booking: [copy.cta.requestConsultation, copy.page.bookingTitle, copy.page.bookingLead],
      cart: [copy.page.cartEyebrow, copy.page.cartTitle, copy.page.cartLead]
    };
    const values = map[page];
    if (eyebrow) eyebrow.textContent = values[0];
    if (h1) h1.textContent = values[1];
    if (lead) lead.textContent = values[2];
  }

  if (page === "programs") {
    setText("programsHelper", copy.page.programsHelper || "Not sure where to start? Begin with a Private Consultation.");
  }

  if (page === "about") {
    copy.page.aboutCards?.forEach((card, index) => {
      setText(`aboutCard${index + 1}Title`, card[0]);
      setText(`aboutCard${index + 1}Text`, card[1]);
    });
    setText("aboutFlowEyebrow", copy.page.aboutFlowEyebrow);
    copy.page.aboutSteps?.forEach((step, index) => {
      setText(`aboutStep${index + 1}Title`, step[0]);
      setText(`aboutStep${index + 1}Text`, step[1]);
    });
  }

  if (page === "contact") {
    setText("contactEmailTitle", copy.page.contactEmailTitle);
    setText("contactEmailLine", copy.page.contactEmailLine);
    setText("contactInstagramLine", copy.page.contactInstagramLine);
    setText("contactWeChatLine", copy.page.contactWeChatLine);
    setText("contactLineLine", copy.page.contactLineLine);
    setText("contactHoursTitle", copy.page.contactHoursTitle);
    setText("contactHoursLine", copy.page.contactHoursLine);
    setText("contactNextTitle", copy.page.contactNextTitle);
    setText("contactNextLine", copy.page.contactNextLine);
  }

  setPlaceholder("programSearch", copy.page.searchPlaceholder);
  const sort = document.getElementById("programSort");
  if (sort) {
    sort.options[0].textContent = copy.page.sortRecommended;
    sort.options[1].textContent = copy.page.priceAsc;
    sort.options[2].textContent = copy.page.priceDesc;
  }

  setText("homeFinalCta", copy.cta.requestConsultation);
  const bookingTitle = document.querySelector(".form-card h3");
  if (bookingTitle && page === "booking") bookingTitle.textContent = copy.page.bookingDetails;
  const summaryTitle = document.querySelector(".summary-card h3");
  if (summaryTitle && page === "booking") summaryTitle.textContent = copy.page.selectedPath;
  if (summaryTitle && page === "cart") summaryTitle.textContent = copy.page.estimatedScope;
  if (page === "booking") {
    setText("bookingPaymentCtaTitle", copy.page.paymentAfterConfirmationTitle || "Payment after confirmation");
    setText("bookingPaymentCtaBody", copy.page.paymentAfterConfirmationBody || "Karecation confirms availability, scope, and timing before collecting payment. After your request is reviewed, we will share a secure payment link or cash / bank transfer instructions.");
    setText("bookingCardPayCta", copy.page.payByCard || "Pay by Card");
    setText("bookingCashBankCta", copy.page.requestCashBankInstructions || "Request Cash / Bank Transfer Instructions");
  }
  setFieldLabel("fullName", copy.page.fullName);
  setFieldLabel("email", copy.page.email);
  setFieldLabel("nationality", copy.page.nationality);
  setFieldLabel("requestNote", copy.page.requestNote);
  setPlaceholder("requestNote", copy.page.requestPlaceholder);
  document.querySelector("button[type='submit']")?.replaceChildren(document.createTextNode(copy.cta.requestConsultation));

  const footerGrid = document.querySelector(".site-footer .footer-grid");
  if (footerGrid && page === "home") {
    const aboutLine = footerGrid.querySelector("div:first-child p");
    if (aboutLine) aboutLine.textContent = copy.meta.footerAbout;

    const titles = footerGrid.querySelectorAll("h4");
    if (titles[1]) titles[1].textContent = copy.meta.browse;
    if (titles[2]) titles[2].textContent = copy.meta.support;

    const browseLinks = footerGrid.querySelectorAll("div:nth-child(2) .footer-links a");
    if (browseLinks[0]) browseLinks[0].textContent = copy.meta.nav[1];
    if (browseLinks[1]) browseLinks[1].textContent = copy.meta.nav[2];

    const supportLinks = footerGrid.querySelectorAll("div:nth-child(3) .footer-links a");
    if (supportLinks[0]) supportLinks[0].textContent = copy.meta.nav[4];
    if (supportLinks[1]) supportLinks[1].textContent = copy.meta.nav[5];
  }

  const pageFooter = document.querySelector(".site-footer .container");
  if (pageFooter && !footerGrid && copy.page?.footer?.[page]) {
    pageFooter.innerHTML = copy.page.footer[page];
  }
}

function programCard(program, useCardDescription = true, options = {}) {
  const copy = t();
  const text = programText(program);
  const isProgramsPageCard = Boolean(options.informationalOnly);
  const media = isProgramsPageCard ? (PROGRAMS_PAGE_MEDIA[program.id] || {}) : {};
  const cardDescription = useCardDescription ? (text.cardDescription || text.tagline) : text.tagline;
  const primaryCta = program.category === "package" ? copy.cta.explorePackage : copy.cta.addToCart;
  const durationText = isProgramsPageCard
    ? getProgramsPageDuration(program.id, text.duration)
    : text.duration;
  const imageSrc = media.image || program.image;
  const imageAlt = media.imageAlt || program.imageAlt || text.name;
  const imageBlock = isProgramsPageCard
    ? `<div class="program-card-image"><img src="${imageSrc}" alt="${imageAlt}" loading="lazy"></div>`
    : `<a class="program-card-image" href="program-detail.html?id=${program.id}"><img src="${imageSrc}" alt="${imageAlt}" loading="lazy"></a>`;
  const tagLine = isProgramsPageCard && text.tagline
    ? `<p class="muted" style="font-size:.78rem; margin-top:2px;">${text.tagline}</p>`
    : "";
  const metaBlock = isProgramsPageCard
    ? `<div class="program-price"><span>${durationText}</span></div>`
    : `<div class="program-price"><strong>${copy.common.startingFrom} ${formatPrice(program.startPrice)}</strong><span>${durationText}</span></div>`;
  const actionsBlock = isProgramsPageCard
    ? ""
    : `<div class="program-actions"><a class="btn btn-secondary" href="program-detail.html?id=${program.id}">${copy.cta.viewProgram}</a><button class="btn btn-primary" type="button" data-add-to-cart="${program.id}">${primaryCta}</button></div>`;
  return `
    <article class="program-card">
      ${imageBlock}
      <div class="program-card-body">
        <div class="program-meta">
          <span class="badge">${copy.categories[program.category]}</span>
          <span class="badge">${text.location}</span>
        </div>
        <h3 class="program-title">${text.name}</h3>
        ${tagLine}
        <p class="program-desc">${cardDescription}</p>
        ${metaBlock}
        ${actionsBlock}
      </div>
    </article>
  `;
}

function renderHomePrograms() {
  const target = document.getElementById("homeFeaturedPrograms");
  if (!target) return;
  const picks = ["all-in-one-package", "skin-clinic-care-1", "quick-concierge-consultation"]
    .map(getProgramById)
    .filter(Boolean);
  target.innerHTML = picks.map((program) => programCard(program, false)).join("");
}

function renderProgramsPage() {
  const grid = document.getElementById("programGrid");
  const filterRoot = document.getElementById("categoryFilters");
  const search = document.getElementById("programSearch");
  const sort = document.getElementById("programSort");
  const activeHolder = document.getElementById("activeCategory");
  if (!grid || !filterRoot || !activeHolder) return;

  const copy = t();
  const visiblePrograms = PROGRAMS.filter((program) => !HIDDEN_PROGRAM_IDS.has(program.id));
  const availableCategories = new Set(visiblePrograms.map((program) => program.category));
  const categoryOrder = CATEGORY_ORDER.filter((name) => name === "all" || availableCategories.has(name));

  if (!categoryOrder.includes(activeHolder.value)) activeHolder.value = "all";
  filterRoot.innerHTML = categoryOrder.map((name, index) => (
    `<button class="chip ${index === 0 ? "active" : ""}" type="button" data-category="${name}">${copy.categories[name]}</button>`
  )).join("");

  function paint() {
    const activeCategory = activeHolder.value || "all";
    const keyword = (search?.value || "").trim().toLowerCase();
    const sortValue = sort?.value || "recommended";
    let list = visiblePrograms.filter((program) => {
      const text = programText(program);
      const catOk = activeCategory === "all" || program.category === activeCategory;
      const searchable = `${text.name} ${copy.categories[program.category]} ${text.tagline}`.toLowerCase();
      return catOk && (!keyword || searchable.includes(keyword));
    });

    if (sortValue === "price-asc") list.sort((a, b) => a.startPrice - b.startPrice);
    if (sortValue === "price-desc") list.sort((a, b) => b.startPrice - a.startPrice);

    grid.innerHTML = list.length
      ? list.map((program) => programCard(program, true, { informationalOnly: true })).join("")
      : `<div class="empty-state" style="grid-column: 1/-1;"><h3 class="display">${copy.common.noMatchTitle}</h3><p class="muted" style="margin-top:6px;">${copy.common.noMatchText}</p></div>`;
  }

  filterRoot.onclick = (event) => {
    const chip = event.target.closest("button[data-category]");
    if (!chip) return;
    activeHolder.value = chip.dataset.category;
    filterRoot.querySelectorAll("button").forEach((btn) => btn.classList.remove("active"));
    chip.classList.add("active");
    paint();
  };

  search?.addEventListener("input", paint);
  sort?.addEventListener("change", paint);
  paint();
}

function renderDetailPage() {
  const name = document.getElementById("pdpName");
  if (!name) return;
  const copy = t();
  const params = new URLSearchParams(window.location.search);
  const program = getProgramById(params.get("id")) || PROGRAMS[0];
  const text = programText(program);

  document.title = `${text.name} | Karecation`;
  document.getElementById("pdpName").textContent = text.name;
  document.getElementById("pdpTagline").textContent = text.tagline;
  document.getElementById("pdpPrice").textContent = `${copy.common.startingFrom} ${formatPrice(program.startPrice)}`;
  document.getElementById("pdpDuration").textContent = text.duration;
  document.getElementById("pdpCategory").textContent = copy.categories[program.category];
  document.getElementById("pdpLocation").textContent = text.location;
  document.getElementById("pdpDescription").textContent = text.description;
  document.getElementById("pdpImage").src = program.image;
  document.getElementById("pdpImage").alt = text.name;
  document.getElementById("pdpIncludes").innerHTML = text.includes.map((item) => `<div class="list-item">${item}</div>`).join("");
  document.getElementById("pdpSteps").innerHTML = text.steps.map((item, idx) => `<div class="list-item"><strong class="step-index">${idx + 1}</strong>${item}</div>`).join("");
  document.getElementById("pdpAddons").innerHTML = `<div class="list-item">${copy.home.trust[2][1]}</div>`;
  document.getElementById("pdpFaq").innerHTML = text.faq.map((item) => `<details class="faq-item"><summary>${item.q}</summary><p>${item.a}</p></details>`).join("");
  document.querySelectorAll("[data-detail-price]").forEach((node) => {
    node.textContent = `${copy.common.startingFrom} ${formatPrice(program.startPrice)}`;
  });
  document.querySelectorAll("[data-detail-add]").forEach((button) => {
    button.setAttribute("data-add-to-cart", program.id);
    button.textContent = copy.cta.addToCart;
  });
  document.querySelector(".pdp-info .btn-secondary")?.replaceChildren(document.createTextNode(copy.cta.reviewCart));
  document.querySelector(".sticky-cta .btn-secondary")?.replaceChildren(document.createTextNode(copy.cta.requestConsultation));
}

function renderCartPage() {
  const root = document.getElementById("cartItems");
  if (!root) return;
  const copy = t();
  const details = getCartDetails();
  const { subtotal, service, total } = getCartTotals();

  if (!details.length) {
    root.innerHTML = `
      <div class="empty-state">
        <h3 class="display">${copy.common.noCartItems}</h3>
        <p class="muted" style="margin-top:6px;">${copy.page.cartLead}</p>
        <a class="btn btn-primary" href="programs.html" style="margin-top:12px;">${copy.cta.viewPrograms}</a>
      </div>
    `;
  } else {
    root.innerHTML = details.map((item) => {
      const text = programText(item.program);
      const travelerLabel = item.travelers > 1 ? copy.common.travelers : copy.common.traveler;
      return `
        <article class="cart-item">
          <div class="cart-head">
            <div>
              <h3>${text.name}</h3>
              <p class="muted" style="font-size:.8rem;">${copy.common.startingFrom} ${formatPrice(item.program.startPrice)} 쨌 ${text.duration}</p>
            </div>
            <strong>${formatPrice(item.lineTotal)}</strong>
          </div>
          <div class="cart-controls">
            <label>${travelerLabel}<input type="number" min="1" max="8" data-cart-travelers data-program-id="${item.program.id}" value="${item.travelers}"></label>
            <label>${copy.page.cartEyebrow}<input type="date" data-cart-date data-program-id="${item.program.id}" value="${item.preferredDate}"></label>
          </div>
          <p class="muted" style="font-size:.78rem; margin-top:8px;">${copy.common.finalScope}</p>
          <div style="margin-top:10px;">
            <button class="btn btn-ghost" type="button" data-cart-remove="${item.program.id}">${copy.common.remove}</button>
          </div>
        </article>
      `;
    }).join("");
  }

  setText("cartSubtotal", formatPrice(subtotal));
  setText("cartService", formatPrice(service));
  setText("cartTotal", formatPrice(total));
  setText("cartCashTotal", formatPrice(subtotal));
  setText("cartSubtotalLabel", copy.common.subtotal);
  setText("cartServiceLabel", copy.common.service || "Service fee included for card payment (5%)");
  setText("cartCardTotalLabel", copy.common.cardPaymentTotal || "Card payment total");
  setText("cartCashTotalLabel", copy.common.cashBankTransferTotal || "Cash / Bank Transfer Total");
  setText("cartCashDiscountLine", copy.common.cashBankDiscountApplied || "5% service fee discount applied for cash or bank transfer.");
  setText("cartPaymentNote", copy.page.paymentNote || "Card payments include the 5% service fee. Cash or bank transfer payments receive a 5% service fee discount after availability and final scope are confirmed.");
  document.querySelector(".summary-card a.btn-primary")?.replaceChildren(document.createTextNode(copy.page.proceed));
  document.querySelector(".summary-card a.btn-secondary")?.replaceChildren(document.createTextNode(copy.page.exploreMore));
}

function renderBookingSummary() {
  const root = document.getElementById("bookingSummary");
  if (!root) return;
  const copy = t();
  const details = getCartDetails();
  const totals = getCartTotals();
  const journey = readAllInOneJourney();
  const hasAllInOneInCart = details.some((item) => item.program?.id === "all-in-one-package");
  const journeyLabels = copy.page.allInOneSummary || {
    base: "Base package:",
    addons: "Add-ons:",
    total: "Total:"
  };
  const journeySummary = hasAllInOneInCart && journey?.packageType === "all-in-one" && journey?.selectedNames?.length
    ? `<div class="list-item"><strong>${journey.packageName || "All-in-One Package"}</strong><p class="muted" style="font-size:.8rem; margin-top:6px;">${journey.selectedNames.join(" / ")}</p><p class="muted" style="font-size:.78rem; margin-top:6px;">${journeyLabels.base} ${formatPrice(journey.basePrice || ALLINONE_BUILDER_CONFIG.basePrice)} / ${journeyLabels.addons} ${formatPrice(journey.addOnsTotal ?? journey.addonTotal ?? 0)} / ${journeyLabels.total} ${formatPrice(journey.finalTotal ?? journey.totalPrice ?? ALLINONE_BUILDER_CONFIG.basePrice)}</p></div>`
    : "";

  if (!details.length) {
    root.innerHTML = `<div class="empty-state"><h3 class="display">${copy.page.noProgramSelectedTitle || "No program selected yet."}</h3><p class="muted" style="margin-top:6px;">${copy.page.noProgramSelectedText || "Please choose a program or build your All-in-One journey first."}</p></div>`;
  } else {
    root.innerHTML = `${journeySummary}${details.map((item) => {
      const text = programText(item.program);
      const travelerLabel = item.travelers > 1 ? copy.common.travelers : copy.common.traveler;
      return `
        <div class="list-item">
          <strong>${text.name}</strong>
          <p class="muted" style="font-size:.8rem; margin-top:4px;">${item.travelers} ${travelerLabel}${item.preferredDate ? ` - ${item.preferredDate}` : ""}</p>
          <p style="margin-top:6px; font-weight:600;">${formatPrice(item.lineTotal)}</p>
        </div>
      `;
    }).join("")}`;
  }

  setText("bookingSubtotal", formatPrice(totals.subtotal));
  setText("bookingService", formatPrice(totals.service));
  setText("bookingTotal", formatPrice(totals.total));
  setText("bookingCashTotal", formatPrice(totals.subtotal));
  setText("bookingSubtotalLabel", copy.common.subtotal);
  setText("bookingServiceLabel", copy.common.service || "Service fee included for card payment (5%)");
  setText("bookingCardTotalLabel", copy.common.cardPaymentTotal || "Card payment total");
  setText("bookingCashTotalLabel", copy.common.cashBankTransferTotal || "Cash / Bank Transfer Total");
  setText("bookingCashDiscountLine", copy.common.cashBankDiscountApplied || "5% service fee discount applied for cash or bank transfer.");
  setText("bookingPaymentNote", copy.page.paymentNote || "Card payments include the 5% service fee. Cash or bank transfer payments receive a 5% service fee discount after availability and final scope are confirmed.");
}

function renderContactChannels() {
  const root = document.getElementById("contactChannelGrid");
  if (!root) return;
  const labels = contactChannelCopy();

  root.innerHTML = CONTACT_CHANNELS.map((channel) => {
    return `
      <article class="contact-channel-card">
        <header class="contact-channel-head">
          <h3>${channel.name}</h3>
          <p class="contact-channel-address">${channel.address}</p>
        </header>
        <figure class="channel-qr-shell">
          <img data-channel-qr src="${channel.qrSrc}" alt="${channel.qrAlt}" loading="lazy" decoding="async">
          <figcaption class="channel-qr-missing">${labels.qrMissing}</figcaption>
        </figure>
      </article>
    `;
  }).join("");

  root.querySelectorAll("[data-channel-qr]").forEach((img) => {
    img.addEventListener("error", () => {
      const shell = img.closest(".channel-qr-shell");
      if (shell) shell.classList.add("is-missing");
      img.remove();
    }, { once: true });
  });
}

function renderFaqPage() {
  const copy = t();
  const roots = [document.getElementById("faqList"), document.getElementById("homeFaqList")].filter(Boolean);
  roots.forEach((root) => {
    root.innerHTML = copy.faq.map((item) => `<details class="faq-item"><summary>${item[0]}</summary><p>${item[1]}</p></details>`).join("");
  });
}

function syncAllInOneBuilderUI() {
  const copy = t();
  const counter = document.getElementById("allInOneCounter");
  const ready = document.getElementById("allInOneReady");
  const basePriceNode = document.getElementById("allInOneBasePrice");
  const addonPriceNode = document.getElementById("allInOneAddonPrice");
  const totalPriceNode = document.getElementById("allInOneTotalPrice");
  if (!counter) return;

  const selectedCount = allInOneSelectedCount();
  const counterTemplate = copy.page.allInOneCounterTemplate || "{count} / 4 selected";
  counter.textContent = counterTemplate.replace("{count}", String(selectedCount));
  const price = allInOnePriceBreakdown();
  if (basePriceNode) basePriceNode.textContent = formatPrice(price.basePrice);
  if (addonPriceNode) addonPriceNode.textContent = formatPrice(price.addonTotal);
  if (totalPriceNode) totalPriceNode.textContent = formatPrice(price.totalPrice);

  if (ready) {
    const isReady = Boolean(allInOneState.skinId) && allInOneState.optionalIds.length === 3;
    ready.hidden = !isReady;
    ready.textContent = copy.page.allInOneReady || "Your journey is ready.";
  }

  document.querySelectorAll("[data-builder-option]").forEach((option) => {
    const group = option.getAttribute("data-builder-group");
    const programId = option.getAttribute("data-program-id");
    const isSelected = group === "skin"
      ? allInOneState.skinId === programId
      : allInOneState.optionalIds.includes(programId);
    option.classList.toggle("is-selected", isSelected);
    option.setAttribute("aria-pressed", isSelected ? "true" : "false");
  });
}

function openAllInOneBuilder(options = {}) {
  const { scrollToBuilder = false } = options;
  const builder = document.getElementById("allInOneBuilder");
  if (!builder) return;
  if (builder.hidden) builder.hidden = false;
  syncAllInOneBuilderUI();

  if (scrollToBuilder) {
    const prefersReducedMotion = typeof window.matchMedia === "function"
      && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = prefersReducedMotion ? "auto" : "smooth";
    requestAnimationFrame(() => {
      builder.scrollIntoView({ behavior, block: "start" });
    });
  }
}

function selectAllInOneOption(group, programId) {
  const copy = t();
  if (group === "skin") {
    allInOneState.skinId = programId;
    saveAllInOneSelection(allInOneState);
    clearAllInOneJourney();
    syncAllInOneBuilderUI();
    return;
  }

  const exists = allInOneState.optionalIds.includes(programId);
  if (exists) {
    allInOneState.optionalIds = allInOneState.optionalIds.filter((id) => id !== programId);
    saveAllInOneSelection(allInOneState);
    clearAllInOneJourney();
    syncAllInOneBuilderUI();
    return;
  }

  if (allInOneSelectedCount() >= 4) {
    alert(copy.page.allInOneMaxPrograms || "You have already selected all 4 programs.");
    return;
  }

  if (allInOneState.optionalIds.length >= 3) {
    alert(copy.page.allInOneMaxOptional || "You have already selected all 3 optional programs.");
    return;
  }

  allInOneState.optionalIds.push(programId);
  saveAllInOneSelection(allInOneState);
  clearAllInOneJourney();
  syncAllInOneBuilderUI();
}

function continueAllInOneJourney() {
  const hasSkin = Boolean(allInOneState.skinId);
  const optionalCount = allInOneState.optionalIds.length;
  const selectedCount = allInOneSelectedCount();

  if (!hasSkin || optionalCount !== 3 || selectedCount !== 4) {
    const remaining = 4 - selectedCount;
    alert(remainingProgramsMessage(remaining));
    return;
  }

  const selectedIds = [allInOneState.skinId, ...allInOneState.optionalIds];
  const selectedNames = selectedIds
    .map((id) => ALLINONE_BUILDER_CONFIG.labels[id])
    .filter(Boolean);
  const pricing = allInOnePriceBreakdown();

  const journey = {
    packageType: "all-in-one",
    packageId: "all-in-one-package",
    packageName: "All-in-One Package",
    selectedIds,
    selectedNames,
    selectedSkinClinic: allInOneState.skinId,
    selectedOptionalPrograms: [...allInOneState.optionalIds],
    selectedAddOns: pricing.selectedAddons,
    selectedAddons: pricing.selectedAddons,
    basePrice: pricing.basePrice,
    addOnsTotal: pricing.addonTotal,
    addonTotal: pricing.addonTotal,
    finalTotal: pricing.totalPrice,
    totalPrice: pricing.totalPrice,
    createdAt: new Date().toISOString()
  };
  saveAllInOneJourney(journey);

  const cart = readCart();
  const existing = cart.find((item) => item.programId === "all-in-one-package");
  if (!existing) {
    cart.push({ programId: "all-in-one-package", travelers: 1, preferredDate: "" });
    saveCart(cart);
  }

  const query = currentLocale ? `?lang=${encodeURIComponent(currentLocale)}` : "";
  window.location.href = `booking.html${query}`;
}

function addToCart(programId) {
  const program = getProgramById(programId);
  if (!program) return;
  const cart = readCart();
  const existing = cart.find((item) => item.programId === programId);
  if (existing) {
    existing.travelers += 1;
  } else {
    cart.push({ programId, travelers: 1, preferredDate: "" });
  }
  saveCart(cart);
  flashMessage(`${programText(program).name} ${t().common.selected}`);
}

function removeFromCart(programId) {
  saveCart(readCart().filter((item) => item.programId !== programId));
  renderCartPage();
  renderBookingSummary();
}

function updateCartItem(programId, patch) {
  const next = readCart().map((item) => item.programId === programId ? { ...item, ...patch } : item);
  saveCart(next);
  renderCartPage();
  renderBookingSummary();
}

async function sendReservationToSheet(payload) {
  const formBody = new URLSearchParams();
  Object.entries(payload).forEach(([key, value]) => {
    formBody.append(key, value == null ? "" : String(value));
  });

  try {
    await fetch(BOOKING_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: formBody.toString()
    });
    return { ok: true, confirmed: false };
  } catch (primaryError) {
    await new Promise((resolve, reject) => {
      try {
        const iframeName = "karecation_sheet_target";
        let iframe = document.querySelector(`iframe[name="${iframeName}"]`);
        if (!iframe) {
          iframe = document.createElement("iframe");
          iframe.name = iframeName;
          iframe.style.display = "none";
          document.body.appendChild(iframe);
        }

        const form = document.createElement("form");
        form.method = "POST";
        form.action = BOOKING_ENDPOINT;
        form.target = iframeName;
        form.style.display = "none";
        Object.entries(payload).forEach(([key, value]) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = value == null ? "" : String(value);
          form.appendChild(input);
        });
        document.body.appendChild(form);
        form.submit();
        setTimeout(() => {
          form.remove();
          resolve();
        }, 1500);
      } catch (fallbackError) {
        reject(fallbackError);
      }
    });
    return { ok: true, confirmed: false };
  }
}

function bindBookingForm() {
  const form = document.getElementById("bookingForm") || document.getElementById("leadForm");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const copy = t();
    const status = document.getElementById("bookingStatus");
    const submitButton = form.querySelector("button[type='submit']");
    const fullName = (form.querySelector("#fullName")?.value || form.querySelector("[name='name']")?.value || "").trim();
    const email = (form.querySelector("#email")?.value || form.querySelector("[name='email']")?.value || "").trim();
    const nationality = (form.querySelector("#nationality")?.value || form.querySelector("[name='nationality']")?.value || "").trim();
    const additionalRequest = (form.querySelector("#requestNote")?.value || form.querySelector("[name='message']")?.value || "").trim();
    const details = getCartDetails();

    if (!fullName || !email || !nationality) {
      status.textContent = copy.page.bookingFillRequired || "Please fill in name, email, and nationality.";
      status.className = "status-message error";
      return;
    }

    const journey = readAllInOneJourney();
    const hasAllInOneInCart = details.some((item) => item.program?.id === "all-in-one-package");
    const journeyBasePrice = hasAllInOneInCart ? (journey?.basePrice ?? ALLINONE_BUILDER_CONFIG.basePrice) : 0;
    const journeyAddonTotal = hasAllInOneInCart ? (journey?.addOnsTotal ?? journey?.addonTotal ?? 0) : 0;
    const journeyTotalPrice = hasAllInOneInCart ? (journey?.finalTotal ?? journey?.totalPrice ?? journeyBasePrice) : 0;
    const journeyAddons = hasAllInOneInCart && Array.isArray(journey?.selectedAddons)
      ? journey.selectedAddons.map((item) => `${item.name} (+${formatPrice(item.addonPrice || 0)})`).join(", ")
      : "";
    const journeySummary = hasAllInOneInCart && journey?.selectedNames?.length
      ? `All-in-One Journey: ${journey.selectedNames.join(", ")}`
      : "";
    const lineItems = details.length
      ? details.map((item) => `${programText(item.program).name} x${item.travelers}${item.preferredDate ? ` (${item.preferredDate})` : ""}`).join(" | ")
      : "";
    const cartSummary = [lineItems, journeySummary].filter(Boolean).join(" | ") || copy.common.noCartItems;

    const payload = {
      "Full Name": fullName,
      Email: email,
      Nationality: nationality,
      "Additional Request": additionalRequest,
      "Cart Summary": cartSummary,
      "All-in-One Journey": journeySummary,
      "All-in-One Base Price": formatPrice(journeyBasePrice),
      "All-in-One Add-ons": formatPrice(journeyAddonTotal),
      "All-in-One Total Price": formatPrice(journeyTotalPrice),
      "All-in-One Add-on Details": journeyAddons,
      Locale: currentLocale,
      fullName,
      name: fullName,
      email,
      nationality,
      additionalRequest,
      message: additionalRequest,
      cartSummary,
      allInOneJourney: journeySummary,
      allInOneBasePrice: journeyBasePrice,
      allInOneAddonTotal: journeyAddonTotal,
      allInOneTotalPrice: journeyTotalPrice,
      allInOneAddonDetails: journeyAddons,
      locale: currentLocale,
      submittedAt: new Date().toISOString()
    };

    try {
      if (submitButton) submitButton.disabled = true;
      status.textContent = copy.page.bookingSending || "Sending request...";
      status.className = "status-message";
      await sendReservationToSheet(payload);
      status.textContent = copy.page.bookingSent || "Your request has been sent. Karecation will contact you with the next step.";
      status.className = "status-message success";
    } catch (error) {
      status.textContent = copy.page.bookingFailed || "Failed to send request. Please try again.";
      status.className = "status-message error";
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}

function bindGlobalEvents() {
  document.body.addEventListener("click", (event) => {
    const localeButton = event.target.closest("[data-locale]");
    if (localeButton) {
      setLanguage(localeButton.dataset.locale);
      return;
    }

    const builderToggle = event.target.closest("[data-builder-toggle]");
    if (builderToggle) {
      openAllInOneBuilder({ scrollToBuilder: true });
      return;
    }

    const builderOption = event.target.closest("[data-builder-option]");
    if (builderOption) {
      const group = builderOption.getAttribute("data-builder-group");
      const programId = builderOption.getAttribute("data-program-id");
      selectAllInOneOption(group, programId);
      return;
    }

    const builderContinue = event.target.closest("[data-builder-continue]");
    if (builderContinue) {
      continueAllInOneJourney();
      return;
    }

    const add = event.target.closest("[data-add-to-cart]");
    if (add) addToCart(add.getAttribute("data-add-to-cart"));

    const remove = event.target.closest("[data-cart-remove]");
    if (remove) removeFromCart(remove.getAttribute("data-cart-remove"));
  });

  document.body.addEventListener("change", (event) => {
    const travelers = event.target.closest("[data-cart-travelers]");
    if (travelers) {
      updateCartItem(travelers.getAttribute("data-program-id"), {
        travelers: Math.max(1, Math.round(Number(travelers.value) || 1))
      });
      return;
    }
    const date = event.target.closest("[data-cart-date]");
    if (date) {
      updateCartItem(date.getAttribute("data-program-id"), {
        preferredDate: date.value || ""
      });
    }
  });
}

function initAllInOneHeroCarousel() {
  const carousel = document.querySelector("[data-allinone-carousel]");
  if (!carousel) return;

  let slides = Array.from(carousel.querySelectorAll(".all-in-one-slide"));
  if (!slides.length) return;

  let timerId = null;
  let activeIndex = 0;

  const motionQuery = typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null;

  const refreshSlides = () => {
    slides = Array.from(carousel.querySelectorAll(".all-in-one-slide"));
    if (!slides.length) return false;
    if (activeIndex >= slides.length) activeIndex = 0;
    return true;
  };

  const setActiveSlide = (nextIndex) => {
    if (!slides.length) return;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === nextIndex);
    });
    activeIndex = nextIndex;
  };

  const stopRotation = () => {
    if (timerId) {
      window.clearInterval(timerId);
      timerId = null;
    }
  };

  const canRotate = () => slides.length > 1 && !(motionQuery && motionQuery.matches);

  const stepSlide = () => {
    const nextIndex = (activeIndex + 1) % slides.length;
    setActiveSlide(nextIndex);
  };

  const startRotation = () => {
    stopRotation();
    if (!canRotate()) return;
    timerId = window.setInterval(stepSlide, 2000);
  };

  const handleMotionChange = () => {
    stopRotation();
    if (!canRotate()) {
      setActiveSlide(0);
      return;
    }
    startRotation();
  };

  const wireSlideErrorFallback = (slide) => {
    slide.addEventListener("error", () => {
      const wasActive = slide.classList.contains("is-active");
      slide.remove();
      if (!refreshSlides()) {
        stopRotation();
        return;
      }
      if (wasActive) {
        setActiveSlide(0);
      }
      startRotation();
    }, { once: true });
  };

  slides.forEach((slide) => {
    if (slide.complete && slide.naturalWidth === 0) {
      slide.remove();
    } else {
      wireSlideErrorFallback(slide);
    }
  });

  if (!refreshSlides()) return;

  activeIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (activeIndex < 0) activeIndex = 0;
  setActiveSlide(0);
  startRotation();

  carousel.addEventListener("mouseenter", stopRotation);
  carousel.addEventListener("mouseleave", startRotation);
  carousel.addEventListener("focusin", stopRotation);
  carousel.addEventListener("focusout", (event) => {
    const nextTarget = event.relatedTarget;
    if (!nextTarget || !carousel.contains(nextTarget)) {
      startRotation();
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopRotation();
    } else {
      startRotation();
    }
  });

  if (motionQuery) {
    if (typeof motionQuery.addEventListener === "function") {
      motionQuery.addEventListener("change", handleMotionChange);
    } else if (typeof motionQuery.addListener === "function") {
      motionQuery.addListener(handleMotionChange);
    }
  }
}

function init() {
  allInOneState = { skinId: null, optionalIds: [] };
  if (handleReloadResetAndRouting()) return;

  updateCartCount();
  insertLanguageSelector();
  setActiveNav();
  bindBookingForm();
  bindGlobalEvents();
  applyLocale();
  initAllInOneHeroCarousel();
}

document.addEventListener("DOMContentLoaded", init);

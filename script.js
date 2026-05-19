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
  { code: "zh", label: "中文", htmlLang: "zh-CN" },
  { code: "ja", label: "日本語", htmlLang: "ja" }
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
    address: "@karecation.official",
    href: "https://www.instagram.com/karecation.official/",
    qrSrc: "assets/qr/instagram-qr.png",
    qrAlt: "Instagram QR code"
  },
  {
    id: "wechat",
    name: "WeChat",
    address: "ID: karecation_official",
    href: "https://weixin.qq.com/",
    qrSrc: "assets/qr/wechat-qr.png",
    qrAlt: "WeChat QR code"
  },
  {
    id: "line",
    name: "LINE",
    address: "@karecation",
    href: "https://line.me/ti/p/@karecation",
    qrSrc: "assets/qr/line-qr.png",
    qrAlt: "LINE QR code"
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
    title: "원하는 채널로 가장 편하게 연결하세요.",
    lead: "Instagram, WeChat, LINE으로 바로 문의할 수 있습니다.",
    helper: "스캔하거나 탭해서 연결하세요.",
    openLink: "링크 열기",
    qrMissing: "QR 이미지를 추가해 주세요"
  },
  zh: {
    eyebrow: "Contact Channels",
    title: "选择最适合你的联系渠道。",
    lead: "可通过 Instagram、WeChat、LINE 直接联系 Karecation。",
    helper: "扫码或点击即可联系。",
    openLink: "打开链接",
    qrMissing: "请添加 QR 图片"
  },
  ja: {
    eyebrow: "Contact Channels",
    title: "ご都合のよいチャネルでご連絡ください。",
    lead: "Instagram・WeChat・LINE から直接ご連絡いただけます。",
    helper: "スキャンまたはタップで連絡できます。",
    openLink: "リンクを開く",
    qrMissing: "QR画像を追加してください"
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
      bookingTitle: "Tell us what you’d like to arrange in Seoul.",
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
      brandSub: "프리미엄 K-뷰티 컨시어지",
      nav: ["홈", "프로그램", "상담", "소개", "FAQ", "문의"],
      cart: "카트",
      footerAbout: "한국 병원, 클리닉, 웰니스, 뷰티 방문을 계획하는 외국인을 위한 프라이빗 컨시어지.",
      browse: "보기",
      support: "지원"
    },
    cta: {
      viewPrograms: "프로그램 보기",
      viewAllPrograms: "전체 프로그램",
      viewProgram: "자세히 보기",
      addToCart: "카트에 담기",
      requestConsultation: "프라이빗 상담 요청",
      explorePackage: "패키지 보기",
      startPlanning: "계획 시작",
      reviewCart: "카트 확인"
    },
    common: {
      startingFrom: "시작가",
      noMatchTitle: "일치하는 프로그램이 없습니다",
      noMatchText: "다른 검색어나 카테고리를 선택해 주세요.",
      selected: "카트에 담았습니다.",
      traveler: "명",
      travelers: "명",
      subtotal: "소계",
      service: "서비스 (5%)",
      total: "합계",
      remove: "삭제",
      finalScope: "최종 범위는 상담 및 가능 일정 확인 후 확정됩니다.",
      noCartItems: "선택 항목 없음"
    },
    categories: {
      all: "전체",
      package: "패키지",
      starter: "상담",
      skin: "스킨",
      wellness: "웰니스",
      styling: "스타일링"
    },
    home: {
      heroEyebrow: "프리미엄 K-뷰티 컨시어지",
      heroTitle: "한국 뷰티를 더 쉽게.",
      heroTitleLines: ["한국 뷰티를", "더 쉽게."],
      heroLead: "패키지를 선택하거나 플랜을 요청하세요.",
      programsEyebrow: "추천 프로그램",
      programsTitle: "컨시어지 경로부터 선택하세요.",
      howEyebrow: "이용 방법",
      howTitle: "선택하고, 요청하고, 준비된 상태로 방문하세요.",
      steps: [["프로그램 선택", "패키지와 개별 서비스를 비교하세요."], ["카트에 담기", "상담할 경로를 저장하세요."], ["플래닝 요청", "날짜, 목표, 언어 요청을 공유하세요."], ["조율 진행", "예약과 일정 흐름을 지원합니다."]],
      trustEyebrow: "신뢰",
      trustTitle: "프리미엄 지원, 명확한 범위.",
      trust: [["프라이빗 플래닝", "목표와 일정에 맞춰 구성합니다."], ["클리닉 탐색", "선택지를 명확하게 비교합니다."], ["다국어 지원", "외국인 방문객을 위한 커뮤니케이션 지원."]],
      faqEyebrow: "FAQ",
      faqTitle: "시작 전 확인하세요.",
      finalEyebrow: "계획 시작",
      finalTitle: "한국 컨시어지 경로를 선택할 준비가 되셨나요?"
    },
    page: {
      programsEyebrow: "컨시어지 프로그램",
      programsTitle: "프로그램을 선택하고 계획을 시작하세요.",
      programsLead: "올인원, 상담, 스킨, 웰니스, 스타일링.",
      searchPlaceholder: "프로그램 검색",
      sortRecommended: "정렬: 추천순",
      priceAsc: "가격 낮은순",
      priceDesc: "가격 높은순",
      aboutEyebrow: "소개",
      aboutTitle: "한국을 방문하는 외국인을 위한 프리미엄 조율.",
      aboutLead: "뷰티, 웰니스, 클리닉 탐색, 예약 지원, 프라이빗 일정 플래닝.",
      aboutCards: [
        ["맞춤 탐색", "목표에 맞는 옵션을 좁힙니다."],
        ["명확한 조율", "예약과 일정 흐름을 관리합니다."],
        ["요청 우선 흐름", "확정 전 프라이빗하게 문의하세요."]
      ],
      aboutFlowEyebrow: "진행 흐름",
      aboutSteps: [
        ["공유", "목표, 날짜, 국적, 필요한 지원을 알려 주세요."],
        ["계획", "적합한 경로와 한국 일정을 검토합니다."],
        ["조율", "예약 지원과 컨시어지 안내로 진행합니다."]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "방문 계획 전 필요한 답변.",
      faqLead: "Karecation이 조율할 수 있는 내용과 시작 방법.",
      contactTitle: "컨시어지 지원",
      contactLead: "방문 계획은 목표와 날짜를 포함해 프라이빗 상담을 요청해 주세요.",
      bookingTitle: "한국에서 원하는 서비스를 알려주세요.",
      bookingLead: "목표, 날짜, 국적, 필요한 지원을 공유해 주세요.",
      bookingDetails: "기본 정보",
      selectedPath: "선택 경로",
      fullName: "이름",
      email: "이메일",
      nationality: "국적",
      requestNote: "추가 요청",
      requestPlaceholder: "희망 서비스, 방문 날짜, 언어 요청, 예산 범위, 여행 제약을 적어 주세요.",
      cartEyebrow: "선택 경로",
      cartTitle: "컨시어지 요청을 확인하세요.",
      cartLead: "상담 전 경로, 인원, 희망 날짜를 확인하세요.",
      estimatedScope: "예상 범위",
      proceed: "상담 요청",
      exploreMore: "다른 경로 보기"
    },
    programs: {},
    faq: [
      ["병원이나 클리닉을 대신 선택해 주나요?", "목표와 일정에 맞는 선택지를 비교하도록 돕습니다. 최종 의료 결정은 본인과 의료 전문가가 해야 합니다."],
      ["통역이나 커뮤니케이션 지원이 가능한가요?", "서비스, 일정, 장소에 따라 다국어 커뮤니케이션 지원을 조율할 수 있습니다."],
      ["서비스 하나만 예약할 수 있나요?", "네. 단일 방문을 위한 개별 조율을 요청할 수 있습니다."],
      ["뷰티 서비스만 가능한가요?", "아니요. 웰니스, 스파, 클리닉, 회복 중심 방문도 지원합니다."],
      ["어떻게 시작하나요?", "프로그램을 선택하거나 프라이빗 상담을 요청하세요."]
    ]
  },
  zh: {
    meta: {
      brandSub: "高端 K-Beauty 礼宾服务",
      nav: ["首页", "项目", "咨询", "关于", "FAQ", "联系"],
      cart: "购物车",
      footerAbout: "为来韩国就医、康养、美容或到访医院诊所的海外客户提供私人礼宾协调。",
      browse: "浏览",
      support: "支持"
    },
    cta: {
      viewPrograms: "查看项目",
      viewAllPrograms: "查看全部项目",
      viewProgram: "查看详情",
      addToCart: "加入购物车",
      requestConsultation: "预约私人咨询",
      explorePackage: "查看套餐",
      startPlanning: "开始规划",
      reviewCart: "查看购物车"
    },
    common: {
      startingFrom: "起价",
      noMatchTitle: "没有匹配的项目",
      noMatchText: "请尝试其他关键词或类别。",
      selected: "已加入购物车。",
      traveler: "位客人",
      travelers: "位客人",
      subtotal: "小计",
      service: "服务费 (5%)",
      total: "合计",
      remove: "移除",
      finalScope: "最终范围将在咨询和可预约时间确认后确定。",
      noCartItems: "未选择项目"
    },
    categories: {
      all: "全部",
      package: "套餐",
      starter: "咨询",
      skin: "皮肤",
      wellness: "康养",
      styling: "造型"
    },
    home: {
      heroEyebrow: "高端 K-Beauty 礼宾服务",
      heroTitle: "韩国美丽之旅，更简单。",
      heroTitleLines: ["韩国美丽之旅，", "更简单。"],
      heroLead: "选择套餐，或交给 Karecation。",
      programsEyebrow: "推荐项目",
      programsTitle: "从一个礼宾路径开始。",
      howEyebrow: "流程",
      howTitle: "选择。提交。安心抵达。",
      steps: [["选择项目", "比较套餐和单项服务。"], ["加入购物车", "保存想咨询的路径。"], ["提交规划", "告知日期、目标和语言需求。"], ["获得协调", "Karecation 协助预约和行程流程。"]],
      trustEyebrow: "信任",
      trustTitle: "高端支持，边界清晰。",
      trust: [["私人规划", "根据您的目标和时间安排。"], ["诊所发现", "清晰比较选择。"], ["多语言支持", "为海外访客提供沟通协助。"]],
      faqEyebrow: "FAQ",
      faqTitle: "开始前了解。",
      finalEyebrow: "开始规划",
      finalTitle: "准备选择您的韩国礼宾路径了吗？"
    },
    page: {
      programsEyebrow: "礼宾项目",
      programsTitle: "选择项目，开始规划。",
      programsLead: "一站式、咨询、皮肤、康养、造型。",
      searchPlaceholder: "搜索项目",
      sortRecommended: "排序：推荐",
      priceAsc: "价格：低到高",
      priceDesc: "价格：高到低",
      aboutEyebrow: "关于",
      aboutTitle: "为来韩国的海外客户提供高端协调。",
      aboutLead: "美容、康养、诊所发现、预约协助和私人行程规划。",
      aboutCards: [
        ["个性化筛选", "按目标筛选合适选项。"],
        ["清晰协调", "统一处理预约和行程。"],
        ["先咨询后决定", "确定前可先私下咨询。"]
      ],
      aboutFlowEyebrow: "流程",
      aboutSteps: [
        ["分享", "告诉我们目标、日期、国籍和支持需求。"],
        ["规划", "查看合适路径和韩国日程。"],
        ["协调", "继续预约协助和礼宾支持。"]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "规划前的清晰解答。",
      faqLead: "Karecation 可以协调什么，以及如何开始。",
      contactTitle: "礼宾支持",
      contactLead: "如需规划访问，请提交目标和日期，预约私人咨询。",
      bookingTitle: "告诉我们您想在韩国安排什么。",
      bookingLead: "分享目标、日期、国籍和支持需求。",
      bookingDetails: "您的信息",
      selectedPath: "已选路径",
      fullName: "姓名",
      email: "邮箱",
      nationality: "国籍",
      requestNote: "补充需求",
      requestPlaceholder: "期望服务、访问日期、语言需求、预算范围和旅行限制。",
      cartEyebrow: "已选路径",
      cartTitle: "确认您的礼宾请求。",
      cartLead: "提交咨询前，确认路径、人数和期望日期。",
      estimatedScope: "预估范围",
      proceed: "预约咨询",
      exploreMore: "查看更多路径"
    },
    programs: {},
    faq: [
      ["你们会替我选择诊所吗？", "Karecation 帮助您比较合适选择。最终决定由您和所选服务方确认。"],
      ["可以提供翻译或沟通支持吗？", "可根据服务、时间和地点安排多语言沟通支持。"],
      ["只预约一个服务可以吗？", "可以。您可以申请单次访问的单项协调。"],
      ["只适用于美容项目吗？", "不是。Karecation 也支持康养、诊所、恢复和私人行程规划。"],
      ["如何开始？", "选择一个项目，或预约私人咨询。"]
    ]
  },
  ja: {
    meta: {
      brandSub: "プレミアム K-Beauty コンシェルジュ",
      nav: ["ホーム", "プログラム", "相談", "紹介", "FAQ", "連絡"],
      cart: "カート",
      footerAbout: "韓国の病院、クリニック、ウェルネス、美容訪問を計画する海外のお客様向けのプライベートコンシェルジュ。",
      browse: "見る",
      support: "サポート"
    },
    cta: {
      viewPrograms: "プログラムを見る",
      viewAllPrograms: "すべて見る",
      viewProgram: "詳細を見る",
      addToCart: "カートに追加",
      requestConsultation: "プライベート相談",
      explorePackage: "パッケージを見る",
      startPlanning: "計画を始める",
      reviewCart: "カート確認"
    },
    common: {
      startingFrom: "開始価格",
      noMatchTitle: "該当するプログラムがありません",
      noMatchText: "別のキーワードまたはカテゴリをお試しください。",
      selected: "カートに追加しました。",
      traveler: "名",
      travelers: "名",
      subtotal: "小計",
      service: "サービス (5%)",
      total: "合計",
      remove: "削除",
      finalScope: "最終範囲は相談と空き状況の確認後に決まります。",
      noCartItems: "選択なし"
    },
    categories: {
      all: "すべて",
      package: "パッケージ",
      starter: "相談",
      skin: "スキン",
      wellness: "ウェルネス",
      styling: "スタイリング"
    },
    home: {
      heroEyebrow: "プレミアム K-Beauty コンシェルジュ",
      heroTitle: "韓国美容を、もっと簡単に。",
      heroTitleLines: ["韓国美容を、", "もっと簡単に。"],
      heroLead: "選ぶか、Karecation に依頼。",
      programsEyebrow: "おすすめ",
      programsTitle: "コンシェルジュ経路を選択。",
      howEyebrow: "流れ",
      howTitle: "選ぶ。依頼する。安心して到着。",
      steps: [["プログラム選択", "パッケージと単独サービスを比較。"], ["カートに追加", "相談したい内容を保存。"], ["計画を依頼", "日程、目的、言語希望を共有。"], ["調整を受ける", "予約と旅程の流れをサポート。"]],
      trustEyebrow: "信頼",
      trustTitle: "上質なサポート、明確な範囲。",
      trust: [["個別計画", "目的と日程に合わせて設計。"], ["クリニック探索", "選択肢をわかりやすく比較。"], ["多言語サポート", "海外のお客様向けの連絡支援。"]],
      faqEyebrow: "FAQ",
      faqTitle: "始める前に。",
      finalEyebrow: "計画開始",
      finalTitle: "韓国コンシェルジュ経路を選びますか？"
    },
    page: {
      programsEyebrow: "コンシェルジュプログラム",
      programsTitle: "プログラムを選んで、計画開始。",
      programsLead: "パッケージ、相談、スキン、ウェルネス、スタイリング。",
      searchPlaceholder: "プログラム検索",
      sortRecommended: "並び替え：おすすめ",
      priceAsc: "価格：低い順",
      priceDesc: "価格：高い順",
      aboutEyebrow: "紹介",
      aboutTitle: "韓国を訪れる海外のお客様向けの上質な調整。",
      aboutLead: "美容、ウェルネス、クリニック探索、予約支援、個別旅程計画。",
      aboutCards: [
        ["個別提案", "目的に合う選択肢を絞ります。"],
        ["明確な調整", "予約と旅程を一つに管理。"],
        ["相談優先", "確定前に個別相談できます。"]
      ],
      aboutFlowEyebrow: "流れ",
      aboutSteps: [
        ["共有", "目的、日程、国籍、必要なサポートを共有。"],
        ["計画", "合う経路と韓国での予定を確認。"],
        ["調整", "予約支援とコンシェルジュサポートへ進みます。"]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "計画前のよくある質問。",
      faqLead: "Karecation が調整できることと始め方。",
      contactTitle: "コンシェルジュサポート",
      contactLead: "訪問計画は、目的と日程を添えてプライベート相談をご依頼ください。",
      bookingTitle: "韓国で手配したい内容を教えてください。",
      bookingLead: "目的、日程、国籍、必要なサポートを共有してください。",
      bookingDetails: "お客様情報",
      selectedPath: "選択内容",
      fullName: "氏名",
      email: "メール",
      nationality: "国籍",
      requestNote: "追加リクエスト",
      requestPlaceholder: "希望サービス、訪問日、言語希望、予算、旅程上の制約。",
      cartEyebrow: "選択内容",
      cartTitle: "コンシェルジュ依頼を確認。",
      cartLead: "相談前に経路、人数、希望日を確認してください。",
      estimatedScope: "概算範囲",
      proceed: "相談を依頼",
      exploreMore: "他の経路を見る"
    },
    programs: {},
    faq: [
      ["クリニックを選んでくれますか？", "Karecation は適した選択肢の比較をサポートします。最終決定はお客様と選択した提供者が行います。"],
      ["翻訳や連絡サポートはありますか？", "サービス、日程、場所により多言語コミュニケーション支援を調整できます。"],
      ["1つのサービスだけ予約できますか？", "はい。単独訪問の個別調整を依頼できます。"],
      ["美容サービスだけですか？", "いいえ。ウェルネス、クリニック、回復、個別旅程計画もサポートします。"],
      ["どう始めればよいですか？", "プログラムを選ぶか、プライベート相談を依頼してください。"]
    ]
  }
};

I18N.ko.programs = {
  "all-in-one-package": {
    name: "올인원 패키지",
    location: "서울",
    duration: "하루 이상",
    tagline: "컨시어지 K-뷰티 여정.",
    description: "컨시어지가 하루 일정에 동행하는 프리미엄 큐레이션 루트입니다.",
    includes: ["컨시어지 동행", "퍼스널 올리브영 쇼핑 지원", "픽업 및 드롭오프 지원", "프로그램 조율과 현장 안내"],
    steps: ["목표와 루트 계획", "컨시어지 동행 일정", "쇼핑 및 이동 지원"],
    faq: [{ q: "누구에게 적합한가요?", a: "하루 프리미엄 경험을 컨시어지와 함께 편하게 진행하고 싶은 고객에게 적합합니다." }]
  },
  "quick-concierge-consultation": {
    name: "퀵 컨시어지 상담",
    location: "온라인 / 서울",
    duration: "30분",
    tagline: "서비스 선택 전 가장 간단한 첫 단계.",
    description: "목표, 날짜, 언어 요청, 예산 범위, 다음 단계를 정리하는 집중 상담입니다.",
    includes: ["목표 정리", "서비스 방향", "일정 가이드", "추천 다음 단계"],
    steps: ["목표 공유", "선택지 검토", "다음 단계 선택"],
    faq: [{ q: "나중에 확장할 수 있나요?", a: "네. 상담 후 패키지나 개별 조율로 이어갈 수 있습니다." }]
  },
  "skin-clinic-care": {
    name: "스킨 클리닉 케어",
    location: "강남, 서울",
    duration: "2시간",
    tagline: "컨시어지 안내가 더해진 클리닉 스킨 케어.",
    description: "글로벌 고객을 위한 클리닉 매칭과 방문 지원.",
    includes: ["피부 진단", "시술 계획", "애프터케어 안내"],
    steps: ["진단 상담", "맞춤 케어", "사후 안내"],
    faq: [{ q: "민감성 피부도 가능한가요?", a: "진단 후 프로토콜을 조정합니다." }]
  },
  "scalp-diagnosis-spa": {
    name: "두피 진단 & 스파",
    location: "청담, 서울",
    duration: "2-3시간",
    tagline: "차분하고 회복적인 두피 웰니스.",
    description: "두피 편안함과 모발 컨디션을 위한 분석 중심 케어.",
    includes: ["두피 촬영", "딥 클렌징과 트리트먼트", "홈 루틴 가이드"],
    steps: ["두피 스캔", "테라피 세션", "관리 플랜"],
    faq: [{ q: "탈모 케이스만 가능한가요?", a: "아니요. 스트레스와 밸런스 케어로도 인기가 있습니다." }]
  },
  "celebrity-hair-makeup": {
    name: "셀러브리티 헤어 & 메이크업",
    location: "압구정, 서울",
    duration: "2시간",
    tagline: "에디토리얼급 K-스타일 마무리.",
    description: "촬영, 이벤트, 중요한 여행 순간을 위한 프리미엄 살롱 스타일링.",
    includes: ["룩 상담", "헤어 디자인", "풀 메이크업"],
    steps: ["룩 플래닝", "헤어와 메이크업 세션", "최종 마무리"],
    faq: [{ q: "자연스러운 스타일도 가능한가요?", a: "네. 내추럴부터 글램까지 가능합니다." }]
  },
  "personal-color-consultation": {
    name: "퍼스널 컬러 상담",
    location: "성수, 서울",
    duration: "2시간",
    tagline: "나에게 맞는 팔레트를 명확하게.",
    description: "메이크업, 헤어, 의상 선택을 빠르게 개선하는 실용적인 톤 세션.",
    includes: ["시즌 진단", "뷰티 팔레트 카드", "쇼핑 가이드"],
    steps: ["컬러 분석", "톤 매핑", "액션 가이드"],
    faq: [{ q: "리포트를 받을 수 있나요?", a: "네. 간결한 디지털 요약이 포함됩니다." }]
  }
};

I18N.zh.programs = {
  "all-in-one-package": {
    name: "一站式礼宾套餐",
    location: "首尔",
    duration: "定制时间",
    tagline: "高端 K-Beauty 礼宾行程。",
    description: "包含诊所发现、预约协助、行程规划和礼宾支持的私人路径。",
    includes: ["私人需求沟通", "诊所或服务发现", "预约协助", "行程协调"],
    steps: ["分享重点", "确认路线", "确定支持计划"],
    faq: [{ q: "适合谁？", a: "适合希望一次协调韩国访问多个环节的客户。" }]
  },
  "quick-concierge-consultation": {
    name: "私人咨询",
    location: "线上 / 首尔",
    duration: "30分钟",
    tagline: "选择服务前最简单的第一步。",
    description: "梳理目标、日期、语言需求、预算范围和下一步。",
    includes: ["目标梳理", "服务方向", "时间建议", "推荐下一步"],
    steps: ["分享目标", "查看选项", "选择下一步"],
    faq: [{ q: "之后可以升级吗？", a: "可以。咨询后可进入套餐或单项协调。" }]
  },
  "skin-clinic-care": {
    name: "单项诊所协调",
    location: "首尔",
    duration: "单次访问",
    tagline: "医院、诊所、美容或康养单项预约支持。",
    description: "适合已有服务方向，但需要发现、预约、沟通和时间协调的客户。",
    includes: ["服务候选", "预约请求", "基础沟通支持"],
    steps: ["分享服务需求", "查看选项", "协调时间"],
    faq: [{ q: "可以只预约一次吗？", a: "可以。此路径适合单次重点访问。" }]
  },
  "scalp-diagnosis-spa": {
    name: "康养与恢复规划",
    location: "首尔",
    duration: "半天起",
    tagline: "康养、恢复、SPA和非医院护理规划。",
    description: "围绕韩国停留时间安排恢复型服务。",
    includes: ["康养服务发现", "时间规划", "预约协助"],
    steps: ["明确目标", "选择服务路径", "建立行程"],
    faq: [{ q: "只限美容吗？", a: "不是。也可支持康养、SPA、诊所和恢复型访问。" }]
  },
  "celebrity-hair-makeup": {
    name: "美容与造型协调",
    location: "首尔",
    duration: "单次访问",
    tagline: "美容、发型、妆容、色彩和造型预约。",
    description: "无需独自处理语言和预约，即可安排高端美容造型服务。",
    includes: ["美容服务发现", "预约请求", "时间建议"],
    steps: ["分享期望效果", "查看服务", "协调预约"],
    faq: [{ q: "可以支持活动准备吗？", a: "可以。请提供活动日期、地点和偏好风格。" }]
  },
  "personal-color-consultation": {
    name: "高端定制行程",
    location: "韩国",
    duration: "多日",
    tagline: "结合美容、康养、诊所和行程物流的定制计划。",
    description: "适合多项预约、同行人员或更完整韩国路线的客户。",
    includes: ["定制行程", "多项服务协调", "私人动线支持"],
    steps: ["定义范围", "安排时间", "协调计划"],
    faq: [{ q: "可以包含同行人员吗？", a: "可以。咨询时请说明同行需求。" }]
  }
};

I18N.ja.programs = {
  "all-in-one-package": {
    name: "オールインワン コンシェルジュパッケージ",
    location: "ソウル",
    duration: "カスタム日程",
    tagline: "上質な K-Beauty 体験。",
    description: "クリニック探索、予約支援、旅程計画、コンシェルジュサポートを含むプライベート経路です。",
    includes: ["個別ヒアリング", "クリニックまたはサービス探索", "予約支援", "旅程調整"],
    steps: ["優先事項を共有", "ルート確認", "サポート計画を確定"],
    faq: [{ q: "誰に向いていますか？", a: "韓国訪問の複数要素をまとめて調整したいお客様に適しています。" }]
  },
  "quick-concierge-consultation": {
    name: "プライベート相談",
    location: "オンライン / ソウル",
    duration: "30分",
    tagline: "サービス選択前の最も簡単な第一歩。",
    description: "目的、日程、言語希望、予算、次のステップを整理します。",
    includes: ["目的整理", "サービス方向", "日程アドバイス", "次のステップ提案"],
    steps: ["目的共有", "選択肢確認", "次のステップ選択"],
    faq: [{ q: "後で拡張できますか？", a: "はい。相談後にパッケージや個別調整へ進めます。" }]
  },
  "skin-clinic-care": {
    name: "個別クリニック調整",
    location: "ソウル",
    duration: "単独訪問",
    tagline: "病院、クリニック、美容、ウェルネスの単独予約サポート。",
    description: "希望サービスがあり、探索、予約、連絡、時間調整が必要なお客様向けです。",
    includes: ["サービス候補", "予約依頼", "基本連絡サポート"],
    steps: ["希望サービス共有", "選択肢確認", "時間調整"],
    faq: [{ q: "1回だけ予約できますか？", a: "はい。単独訪問向けの経路です。" }]
  },
  "scalp-diagnosis-spa": {
    name: "ウェルネス & 回復プランニング",
    location: "ソウル",
    duration: "半日以上",
    tagline: "ウェルネス、回復、スパ、非病院ケアの計画。",
    description: "韓国滞在に合わせて回復系サービスを計画します。",
    includes: ["ウェルネス探索", "日程計画", "予約支援"],
    steps: ["目的確認", "サービス経路選択", "旅程作成"],
    faq: [{ q: "美容だけですか？", a: "いいえ。ウェルネス、美容、スパ、クリニック訪問も対応します。" }]
  },
  "celebrity-hair-makeup": {
    name: "美容 & スタイリング調整",
    location: "ソウル",
    duration: "単独訪問",
    tagline: "美容、ヘア、メイク、カラー、スタイリング予約。",
    description: "言語や予約を一人で管理せず、上質な美容サービスを手配できます。",
    includes: ["美容サービス探索", "予約依頼", "時間案内"],
    steps: ["希望イメージ共有", "サービス確認", "予約調整"],
    faq: [{ q: "イベント準備も可能ですか？", a: "はい。イベント日、場所、希望スタイルを共有してください。" }]
  },
  "personal-color-consultation": {
    name: "プレミアム カスタム旅程",
    location: "韓国",
    duration: "複数日",
    tagline: "美容、ウェルネス、クリニック、移動を組み合わせた個別計画。",
    description: "複数予約、同行者、より完全な韓国ルートが必要なお客様向けです。",
    includes: ["カスタム旅程", "複数サービス調整", "プライベート動線サポート"],
    steps: ["範囲定義", "日程設計", "計画調整"],
    faq: [{ q: "同行者も含められますか？", a: "はい。相談時に同行者の要望をお知らせください。" }]
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
      brandSub: "프리미엄 K-뷰티 컨시어지",
      nav: ["홈", "프로그램", "상담", "소개", "FAQ", "문의"],
      cart: "카트",
      footerAbout: "서울을 방문하는 해외 고객을 위한 프라이빗 K-뷰티 컨시어지.",
      browse: "둘러보기",
      support: "지원"
    },
    cta: {
      viewPrograms: "프로그램 보기",
      viewAllPrograms: "전체 프로그램",
      viewProgram: "상세 보기",
      addToCart: "카트에 담기",
      requestConsultation: "프라이빗 상담 요청",
      explorePackage: "카트에 담기",
      startPlanning: "계획 시작",
      reviewCart: "카트 확인"
    },
    common: {
      startingFrom: "시작가",
      noMatchTitle: "일치하는 프로그램이 없습니다",
      noMatchText: "다른 검색어나 카테고리를 시도해 보세요.",
      selected: "카트에 담았습니다.",
      traveler: "명",
      travelers: "명",
      subtotal: "소계",
      service: "서비스(5%)",
      total: "합계",
      remove: "삭제",
      finalScope: "최종 범위는 상담 및 가능 여부 확인 후 확정됩니다.",
      noCartItems: "카트에 담긴 항목이 없습니다"
    },
    categories: {
      all: "전체",
      package: "패키지",
      starter: "상담",
      skin: "스킨",
      wellness: "웰니스",
      styling: "스타일링"
    },
    home: {
      heroEyebrow: "PREMIUM K-BEAUTY, SIMPLIFIED",
      heroTitle: "서울 K-뷰티, 프라이빗하게.",
      heroTitleLines: ["서울 K-뷰티,", "프라이빗하게."],
      heroLead: "서울을 방문하는 해외 고객을 위한 프라이빗 K-뷰티 컨시어지. 신뢰할 수 있는 프로그램을 둘러보거나 맞춤 상담을 요청해 보세요.",
      programsEyebrow: "대표 프로그램",
      programsTitle: "나에게 맞는 경로부터 시작하세요.",
      howEyebrow: "이용 방법",
      howTitle: "명확하게 선택하고, 프라이빗하게 준비하세요.",
      steps: [
        ["프로그램 선택", "서울에서 원하는 뷰티 경험에 맞는 큐레이션 옵션을 비교하세요."],
        ["선택 저장", "최종 결정 전, 상담할 경로를 카트에 담아 정리하세요."],
        ["상담 요청", "날짜, 목표, 언어 지원, 선호 지원 수준을 알려주세요."],
        ["조율 진행", "Karecation이 프라이버시를 지키며 다음 단계를 안내합니다."]
      ],
      trustEyebrow: "왜 Karecation인가요",
      trustTitle: "더 프라이빗하게, 더 명확하게.",
      trust: [
        ["맞춤 플래닝", "목표, 일정, 선호도, 뷰티 우선순위에 맞춰 설계합니다."],
        ["신뢰 기반 탐색", "클리닉, 뷰티, 쇼핑 옵션을 더 명확하게 비교할 수 있습니다."],
        ["다국어 지원", "서울 방문 해외 고객이 편하게 진행할 수 있도록 설계했습니다."]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "시작 전에 확인하세요.",
      finalEyebrow: "계획 시작",
      finalTitle: "서울 뷰티 경험, 준비되셨나요?"
    },
    page: {
      programsEyebrow: "프로그램",
      programsTitle: "나에게 맞는 서울 뷰티 경로를 선택하세요.",
      programsLead: "완성형 패키지, 집중형 서비스, 프라이빗 상담 옵션을 비교해 보세요. 어디서 시작할지 고민된다면 프라이빗 상담부터 시작하세요.",
      searchPlaceholder: "프로그램 검색",
      sortRecommended: "정렬: 추천순",
      priceAsc: "가격: 낮은 순",
      priceDesc: "가격: 높은 순",
      aboutEyebrow: "소개",
      aboutTitle: "서울을 방문하는 해외 고객을 위한 프라이빗 K-뷰티 컨시어지.",
      aboutLead: "Karecation은 뷰티, 웰니스, 클리닉, 쇼핑 경험을 더 명확하고 차분하게 조율합니다.",
      aboutCards: [
        ["큐레이션 탐색", "목표에 맞춰 뷰티와 웰니스 옵션을 좁혀드립니다."],
        ["명확한 조율", "일정, 플래닝, 지원을 하나의 가이드된 흐름으로 정돈합니다."],
        ["프라이빗 우선 플래닝", "플랜이 충분히 맞다고 느껴질 때만 다음 단계로 진행하세요."]
      ],
      aboutFlowEyebrow: "진행 흐름",
      aboutSteps: [
        ["공유", "목표, 날짜, 지원 요청을 알려주세요."],
        ["계획", "큐레이션된 옵션과 명확한 서울 일정안을 확인합니다."],
        ["조율", "컨시어지 안내와 함께 예약 조율을 진행합니다."]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "계획 전에 확인하세요.",
      faqLead: "상담, 조율, 예약 지원이 어떻게 진행되는지 알려드립니다.",
      contactTitle: "필요할 때 바로 연결되는 컨시어지 지원.",
      contactLead: "선호 날짜와 원하는 서비스를 남겨주시면 프라이빗 상담으로 다음 단계를 안내합니다.",
      bookingTitle: "서울에서 어떤 K-뷰티 경험을 원하는지 알려주세요.",
      bookingLead: "목표, 날짜, 지원 요청을 공유해 주세요. Karecation이 다음 단계를 차분하게 안내합니다.",
      bookingDetails: "고객 정보",
      selectedPath: "선택한 경로",
      fullName: "이름",
      email: "이메일",
      nationality: "국적",
      requestNote: "추가 요청",
      requestPlaceholder: "우선순위, 선호 날짜, 필요한 지원 내용을 적어주세요.",
      cartEyebrow: "선택한 경로",
      cartTitle: "상담 전 요청 내용을 확인하세요.",
      cartLead: "프로그램, 인원, 선호 날짜를 확인한 뒤 요청을 보내세요.",
      estimatedScope: "예상 금액",
      proceed: "프라이빗 상담 요청",
      exploreMore: "프로그램 더 보기",
      footer: {
        programs: "시작이 어렵다면 <strong>프라이빗 상담 ($10)</strong>부터.",
        about: "서울 방문 전, 프라이빗하게 결정하세요.",
        faq: "아직 고민 중이라면 프라이빗 상담을 요청하세요.",
        contact: "더 빠른 안내를 위해 날짜·서비스·우선순위를 함께 남겨주세요.",
        booking: "상담은 요청 우선 방식입니다. 방문 확정 전 가능 여부, 범위, 최종 결제 안내를 확인합니다.",
        cart: "가볍게 시작하고 싶다면 <strong>프라이빗 상담 ($10)</strong>을 추가하세요.",
        "program-detail": "먼저 방향이 필요하다면 <strong>프라이빗 상담 ($10)</strong>으로 시작하세요."
      }
    },
    programs: {
      "all-in-one-package": {
        name: "올인원 패키지",
        location: "서울",
        duration: "하루+",
        tagline: "모든 프로그램 포함.",
        cardDescription: "완성도 높은 서울 뷰티 하루를 원하는 분께.<br>클리닉 케어, 두피 케어, 헤어·메이크업, 뷰티 쇼핑을 포함합니다.<br>프라이빗 동행으로 하루를 정돈해 진행하기 좋습니다.",
        includes: [
          "모든 프로그램",
          "무료 서비스: 컨시어지 동행, 퍼스널 올리브영 쇼핑 지원, 픽업 & 드롭오프 지원"
        ]
      },
      "quick-concierge-consultation": {
        name: "프라이빗 상담",
        location: "온라인 / 서울",
        duration: "30분",
        cardDescription: "선택 전에 방향을 잡고 싶은 분께.<br>목표, 일정, 필요한 지원 수준에 맞춘 맞춤 상담을 포함합니다.<br>예약 전 기준을 명확히 하고 싶은 분께 적합합니다."
      },
      "skin-clinic-care": {
        name: "스킨 클리닉 케어",
        location: "강남, 서울",
        duration: "2시간",
        cardDescription: "피부 중심의 클리닉 케어를 원하는 분께.<br>클리닉 조율과 가이드 플래닝을 포함합니다.<br>더 명확하고 자신 있게 방문을 준비할 수 있습니다."
      },
      "scalp-diagnosis-spa": {
        name: "두피 진단 & 스파",
        location: "청담, 서울",
        duration: "2-3시간",
        cardDescription: "집중 두피 진단과 케어를 원하는 분께.<br>두피 상담과 트리트먼트 지원을 포함합니다.<br>차분하고 전문적인 케어 스탑으로 추천합니다."
      },
      "celebrity-hair-makeup": {
        name: "셀러브리티 헤어 & 메이크업",
        location: "압구정, 서울",
        duration: "2시간",
        cardDescription: "스타일드하고 카메라 준비된 룩을 원하는 분께.<br>완성도 높은 뷰티 스타일링 지원을 포함합니다.<br>행사, 촬영, 중요한 일정 전 준비에 적합합니다."
      },
      "personal-color-consultation": {
        name: "퍼스널 컬러 상담",
        location: "성수, 서울",
        duration: "2시간",
        cardDescription: "메이크업·헤어·스타일 선택을 정리하고 싶은 분께.<br>퍼스널 컬러 분석과 실용적인 팔레트 가이드를 포함합니다.<br>일상 스타일 결정을 더 명확하게 도와줍니다."
      }
    },
    faq: [
      ["Karecation은 어떤 부분을 조율해 주나요?", "상담, 일정 흐름, 선택하신 프로그램 전반의 컨시어지 조율을 도와드립니다."],
      ["서비스 하나만 요청해도 되나요?", "네. 한 가지 서비스만 단독으로 요청하실 수 있습니다."],
      ["처음부터 패키지를 예약해야 하나요?", "아니요. 프라이빗 상담으로 시작한 뒤 범위를 결정하셔도 됩니다."],
      ["해외 고객도 이용할 수 있나요?", "네. Karecation은 서울을 방문하는 해외 고객을 위해 설계되었습니다."],
      ["올리브영 같은 뷰티 쇼핑도 지원하나요?", "네. 목표와 일정에 맞춰 큐레이션된 쇼핑 동선을 함께 구성할 수 있습니다."],
      ["결제는 어떻게 진행되나요?", "상담은 요청 우선 방식입니다. 방문 확정 전 가능 여부, 범위, 최종 결제 안내를 먼저 확인합니다."]
    ]
  },
  zh: {
    meta: {
      brandSub: "高端 K-Beauty 礼宾服务",
      nav: ["首页", "项目", "咨询", "关于", "FAQ", "联系"],
      cart: "购物车",
      footerAbout: "为来首尔的国际访客提供私享 K-Beauty 礼宾支持。",
      browse: "浏览",
      support: "支持"
    },
    cta: {
      viewPrograms: "查看项目",
      viewAllPrograms: "查看全部项目",
      viewProgram: "查看详情",
      addToCart: "加入购物车",
      requestConsultation: "申请私享咨询",
      explorePackage: "加入购物车",
      startPlanning: "开始规划",
      reviewCart: "查看购物车"
    },
    common: {
      startingFrom: "起价",
      noMatchTitle: "没有匹配的项目",
      noMatchText: "请尝试其他关键词或分类。",
      selected: "已加入购物车。",
      traveler: "人",
      travelers: "人",
      subtotal: "小计",
      service: "服务费 (5%)",
      total: "合计",
      remove: "删除",
      finalScope: "最终范围将在咨询和可预约性确认后确定。",
      noCartItems: "购物车暂无项目"
    },
    categories: {
      all: "全部",
      package: "套餐",
      starter: "咨询",
      skin: "皮肤",
      wellness: "养护",
      styling: "造型"
    },
    home: {
      heroEyebrow: "PREMIUM K-BEAUTY, SIMPLIFIED",
      heroTitle: "私享美丽，从容安排。",
      heroTitleLines: ["私享美丽，", "从容安排。"],
      heroLead: "为来首尔的国际访客提供私享 K-Beauty 礼宾支持。可浏览可信项目，或轻松申请定制咨询。",
      programsEyebrow: "精选项目",
      programsTitle: "先从最适合你的路径开始。",
      howEyebrow: "流程",
      howTitle: "清晰选择，私享规划，从容到访。",
      steps: [
        ["选择项目", "按你想要的首尔美丽体验浏览精选选项。"],
        ["保存选择", "在最终决定前，把想讨论的路径先加入购物车。"],
        ["申请咨询", "告知日期、目标、语言需求与支持偏好。"],
        ["进入协调", "Karecation 将以更清晰、私密的方式推进下一步。"]
      ],
      trustEyebrow: "为什么选择 Karecation",
      trustTitle: "私享支持，决策更清晰。",
      trust: [
        ["定制规划", "围绕你的目标、时间和优先事项进行设计。"],
        ["可信探索", "更清晰地比较诊所、美容与购物选项。"],
        ["多语言支持", "帮助国际访客更轻松地完成流程。"]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "开始前先了解。",
      finalEyebrow: "开始规划",
      finalTitle: "准备好规划你的首尔美丽体验了吗？"
    },
    page: {
      programsEyebrow: "项目",
      programsTitle: "选择最适合你的首尔美丽路径。",
      programsLead: "探索完整套餐、单项服务和私享咨询选项。若不确定从哪里开始，可先从私享咨询开始。",
      searchPlaceholder: "搜索项目",
      sortRecommended: "排序：推荐",
      priceAsc: "价格：从低到高",
      priceDesc: "价格：从高到低",
      aboutEyebrow: "关于",
      aboutTitle: "为来首尔的国际访客提供私享 K-Beauty 礼宾支持。",
      aboutLead: "Karecation 帮助你以更清晰、更有秩序、更从容的方式探索美容、养护、诊所与购物体验。",
      aboutCards: [
        ["精选探索", "根据你的目标，缩小美容与养护选项。"],
        ["清晰协调", "把时间、规划与支持整合在同一流程中。"],
        ["私享优先规划", "先审阅方案，确定合适后再进入下一步。"]
      ],
      aboutFlowEyebrow: "流程",
      aboutSteps: [
        ["提交需求", "告诉我们你的目标、日期和支持需求。"],
        ["确认方案", "查看精选选项与清晰的首尔行程节奏。"],
        ["协调推进", "在礼宾支持下推进预约与安排。"]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "规划前先看清楚。",
      faqLead: "了解咨询、协调与预约支持如何进行。",
      contactTitle: "需要时，随时可联系的礼宾支持。",
      contactLead: "如需定制规划，请提交你的日期和偏好服务，申请私享咨询。",
      bookingTitle: "告诉我们你希望如何体验首尔 K-Beauty。",
      bookingLead: "分享你的目标、日期和支持需求。Karecation 会以更清晰、细致的方式引导下一步。",
      bookingDetails: "你的信息",
      selectedPath: "已选路径",
      fullName: "姓名",
      email: "邮箱",
      nationality: "国籍",
      requestNote: "附加需求",
      requestPlaceholder: "请填写优先事项、时间偏好和支持需求。",
      cartEyebrow: "已选路径",
      cartTitle: "咨询前先确认你的请求。",
      cartLead: "发送请求前，请确认项目、人数与偏好日期。",
      estimatedScope: "预估金额",
      proceed: "申请私享咨询",
      exploreMore: "查看更多路径",
      footer: {
        programs: "不确定如何开始？先从 <strong>私享咨询 ($10)</strong> 开始。",
        about: "在到访首尔前，更私密地做出清晰决定。",
        faq: "还在考虑中？可先申请私享咨询。",
        contact: "为更快回复，请一并提供日期、偏好服务和优先事项。",
        booking: "咨询为“先申请”流程。到访确认前，我们会先确认可预约性、服务范围与最终付款说明。",
        cart: "想轻量开始？可先添加 <strong>私享咨询 ($10)</strong>。",
        "program-detail": "想先明确方向？可从 <strong>私享咨询 ($10)</strong> 开始。"
      }
    },
    programs: {
      "all-in-one-package": {
        name: "全套一日方案",
        location: "首尔",
        duration: "全天+",
        tagline: "全部项目已包含。",
        cardDescription: "适合希望完整体验首尔美丽行程的访客。<br>包含诊所护理、头皮护理、发妆造型与美妆购物。<br>适合打造精致、私享的一日安排。",
        includes: [
          "全部项目",
          "免费服务：礼宾陪同、Olive Young 购物支持、接送支持"
        ]
      },
      "quick-concierge-consultation": {
        name: "私享咨询",
        location: "线上 / 首尔",
        duration: "30分钟",
        cardDescription: "适合想在选择前先明确方向的访客。<br>包含围绕目标、时间与支持需求的个性化规划。<br>适合在预订前先建立清晰判断。"
      },
      "skin-clinic-care": {
        name: "皮肤诊所护理",
        location: "首尔",
        duration: "2小时",
        cardDescription: "适合聚焦皮肤或治疗型护理的访客。<br>包含诊所协调与引导式规划。<br>让到访更清晰、更安心。"
      },
      "scalp-diagnosis-spa": {
        name: "头皮诊断与护理",
        location: "首尔",
        duration: "2-3小时",
        cardDescription: "适合希望进行专项头皮诊断与护理的访客。<br>包含头皮咨询与护理支持。<br>适合作为安静、专业的护理站点。"
      },
      "celebrity-hair-makeup": {
        name: "明星级发妆造型",
        location: "首尔",
        duration: "2小时",
        cardDescription: "适合希望获得上镜精致效果的访客。<br>包含高完成度的造型支持。<br>适合活动、拍摄或重要行程前准备。"
      },
      "personal-color-consultation": {
        name: "个人色彩咨询",
        location: "首尔",
        duration: "2小时",
        cardDescription: "适合希望梳理妆发与穿搭选择的访客。<br>包含个人色彩分析与实用配色指导。<br>帮助日常风格决策更清晰。"
      }
    },
    faq: [
      ["Karecation 可以协调哪些内容？", "我们可协调咨询、行程节奏以及你所选项目的礼宾支持。"],
      ["可以只申请一个服务吗？", "可以。你可以只申请一个单项服务。"],
      ["需要一开始就预订套餐吗？", "不需要。你可以先从私享咨询开始，再决定服务范围。"],
      ["支持国际访客吗？", "支持。Karecation 专为到访首尔的国际访客设计。"],
      ["可以协助 Olive Young 等美妆购物吗？", "可以。我们可根据你的目标与日程加入精选购物支持。"],
      ["付款如何进行？", "咨询为“先申请”流程。到访确认前，会先确认可预约性、范围与最终付款说明。"]
    ]
  },
  ja: {
    meta: {
      brandSub: "プレミアム K-Beauty コンシェルジュ",
      nav: ["ホーム", "プログラム", "相談", "紹介", "FAQ", "お問い合わせ"],
      cart: "カート",
      footerAbout: "ソウルを訪れる海外ゲストのための、プライベート K-Beauty コンシェルジュ。",
      browse: "閲覧",
      support: "サポート"
    },
    cta: {
      viewPrograms: "プログラムを見る",
      viewAllPrograms: "すべてのプログラム",
      viewProgram: "詳細を見る",
      addToCart: "カートに追加",
      requestConsultation: "プライベート相談を依頼",
      explorePackage: "カートに追加",
      startPlanning: "計画を始める",
      reviewCart: "カートを確認"
    },
    common: {
      startingFrom: "開始価格",
      noMatchTitle: "一致するプログラムがありません",
      noMatchText: "別のキーワードやカテゴリでお試しください。",
      selected: "をカートに追加しました。",
      traveler: "名",
      travelers: "名",
      subtotal: "小計",
      service: "サービス料 (5%)",
      total: "合計",
      remove: "削除",
      finalScope: "最終範囲は、相談と空き状況確認後に確定します。",
      noCartItems: "カートに項目がありません"
    },
    categories: {
      all: "すべて",
      package: "パッケージ",
      starter: "相談",
      skin: "スキン",
      wellness: "ウェルネス",
      styling: "スタイリング"
    },
    home: {
      heroEyebrow: "PREMIUM K-BEAUTY, SIMPLIFIED",
      heroTitle: "美しさを、プライベートに。",
      heroTitleLines: ["美しさを、", "プライベートに。"],
      heroLead: "ソウルを訪れる海外ゲスト向けのプライベート K-Beauty コンシェルジュ。信頼できるプログラムを比較し、必要に応じて個別相談を依頼できます。",
      programsEyebrow: "注目プログラム",
      programsTitle: "あなたに合うルートから始めましょう。",
      howEyebrow: "ご利用の流れ",
      howTitle: "明確に選び、プライベートに準備する。",
      steps: [
        ["プログラムを選ぶ", "ソウルで叶えたい美容体験に合わせて、厳選オプションを比較します。"],
        ["選択を保存", "最終決定前に、相談したいルートをカートへ保存します。"],
        ["相談を依頼", "日程、目的、言語サポート、希望する支援レベルを共有します。"],
        ["調整を進める", "Karecation がプライバシーを守りながら次のステップを案内します。"]
      ],
      trustEyebrow: "Karecation を選ぶ理由",
      trustTitle: "よりプライベートに、より明確に。",
      trust: [
        ["テーラード設計", "目的・日程・優先順位に合わせてプランを整えます。"],
        ["信頼できる比較", "クリニック、美容、ショッピングの選択肢を明確に比較できます。"],
        ["多言語サポート", "海外ゲストが安心して進められるよう設計しています。"]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "始める前に。",
      finalEyebrow: "計画を始める",
      finalTitle: "ソウル美容体験の準備はできていますか？"
    },
    page: {
      programsEyebrow: "プログラム",
      programsTitle: "あなたに合うソウル美容ルートを選びましょう。",
      programsLead: "フルパッケージ、集中サポート、個別相談オプションを比較できます。迷う場合は、まずプライベート相談から始めてください。",
      searchPlaceholder: "プログラムを検索",
      sortRecommended: "並び替え：おすすめ順",
      priceAsc: "価格：安い順",
      priceDesc: "価格：高い順",
      aboutEyebrow: "紹介",
      aboutTitle: "ソウルを訪れる海外ゲストのための、プライベート K-Beauty コンシェルジュ。",
      aboutLead: "Karecation は、美容・ウェルネス・クリニック・ショッピング体験を、より明確で落ち着いた流れに整えます。",
      aboutCards: [
        ["キュレーション探索", "目的に合わせて美容・ウェルネスの選択肢を絞り込みます。"],
        ["明確な調整", "日程、計画、サポートを一つの流れで整理します。"],
        ["プライベート優先設計", "プランに納得してから次のステップへ進めます。"]
      ],
      aboutFlowEyebrow: "進行フロー",
      aboutSteps: [
        ["共有", "目的、日程、サポート希望を共有してください。"],
        ["計画", "厳選オプションと明確なソウル日程を確認します。"],
        ["調整", "コンシェルジュの案内で予約調整を進めます。"]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "計画前に、先に確認。",
      faqLead: "相談・調整・予約サポートの流れをわかりやすくご案内します。",
      contactTitle: "必要なときにすぐ届くコンシェルジュサポート。",
      contactLead: "希望日程と希望サービスを添えて、プライベート相談をご依頼ください。",
      bookingTitle: "ソウルでどんな K-Beauty 体験を希望するか教えてください。",
      bookingLead: "目的、日程、サポート希望を共有してください。Karecation がより明確で丁寧に次のステップをご案内します。",
      bookingDetails: "お客様情報",
      selectedPath: "選択したルート",
      fullName: "お名前",
      email: "メール",
      nationality: "国籍",
      requestNote: "追加リクエスト",
      requestPlaceholder: "優先事項、希望日程、必要なサポート内容をご記入ください。",
      cartEyebrow: "選択したルート",
      cartTitle: "相談前に内容を確認しましょう。",
      cartLead: "送信前に、プログラム・人数・希望日程をご確認ください。",
      estimatedScope: "見積金額",
      proceed: "プライベート相談を依頼",
      exploreMore: "ほかのルートを見る",
      footer: {
        programs: "迷ったら、まず <strong>プライベート相談 ($10)</strong> から。",
        about: "ソウル訪問前に、プライベートに判断しましょう。",
        faq: "まだ迷っている場合は、プライベート相談をご依頼ください。",
        contact: "より早いご案内のため、日程・希望サービス・優先事項をご記入ください。",
        booking: "相談はリクエスト先行です。訪問確定前に、空き状況・範囲・最終決済案内を確認します。",
        cart: "軽く始めたい方は、<strong>プライベート相談 ($10)</strong> を追加してください。",
        "program-detail": "まず方向性を整理したい方は、<strong>プライベート相談 ($10)</strong> から始めてください。"
      }
    },
    programs: {
      "all-in-one-package": {
        name: "オールインワンパッケージ",
        location: "ソウル",
        duration: "終日+",
        tagline: "全プログラム込み。",
        cardDescription: "ソウル美容を総合的に体験したい方に。<br>クリニックケア、頭皮ケア、ヘア＆メイク、ビューティーショッピングを含みます。<br>洗練された一日をプライベートに組みたい方に最適です。",
        includes: [
          "全プログラム",
          "無料サービス：コンシェルジュ同行、Olive Youngショッピングサポート、送迎サポート"
        ]
      },
      "quick-concierge-consultation": {
        name: "プライベート相談",
        location: "オンライン / ソウル",
        duration: "30分",
        cardDescription: "選ぶ前に方向性を整理したい方に。<br>目的・日程・サポート希望に合わせた個別設計を含みます。<br>予約前に判断軸を明確にしたい方におすすめです。"
      },
      "skin-clinic-care": {
        name: "スキンクリニックケア",
        location: "ソウル",
        duration: "2時間",
        cardDescription: "肌ケアや施術中心の訪問を希望する方に。<br>クリニック調整とガイド付きプランニングを含みます。<br>より明確で安心な訪問準備につながります。"
      },
      "scalp-diagnosis-spa": {
        name: "頭皮診断＆ケア",
        location: "ソウル",
        duration: "2-3時間",
        cardDescription: "頭皮診断と集中ケアを希望する方に。<br>頭皮カウンセリングと施術サポートを含みます。<br>落ち着いた専門ケアの一枠として最適です。"
      },
      "celebrity-hair-makeup": {
        name: "ヘア＆メイクアップ",
        location: "ソウル",
        duration: "2時間",
        cardDescription: "洗練されたカメラ映え仕上げを求める方に。<br>完成度の高いビューティースタイリング支援を含みます。<br>イベント・撮影・大切な予定前に最適です。"
      },
      "personal-color-consultation": {
        name: "パーソナルカラー相談",
        location: "ソウル",
        duration: "2時間",
        cardDescription: "メイク・ヘア・装いの選択を整えたい方に。<br>パーソナルカラー分析と実用的なパレットガイドを含みます。<br>日常のスタイル判断をより明確にします。"
      }
    },
    faq: [
      ["Karecation は何を調整してくれますか？", "相談、日程フロー、選択したプログラム全体のコンシェルジュ調整をサポートします。"],
      ["1つのサービスだけでも依頼できますか？", "はい。単体サービスのみの依頼も可能です。"],
      ["最初からパッケージ予約が必要ですか？", "いいえ。まずプライベート相談から始め、範囲を決められます。"],
      ["海外ゲストでも利用できますか？", "はい。Karecation はソウルを訪れる海外ゲスト向けに設計されています。"],
      ["Olive Young などのビューティーショッピングも対応できますか？", "はい。目的と日程に合わせて、キュレーションされたショッピング導線を組み込めます。"],
      ["支払いはどのように進みますか？", "相談はリクエスト先行です。訪問確定前に空き状況・範囲・最終決済案内を確認します。"]
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
    programsTitle: "나에게 맞는 서울 뷰티 경로를 선택하세요.",
    programsLead: "완성형 패키지, 집중형 서비스, 프라이빗 상담 옵션을 해외 방문객 기준으로 비교해 보세요.",
    programsHelper: "어디서 시작할지 고민된다면 프라이빗 상담부터 시작하세요."
  },
  zh: {
    programsTitle: "选择最适合你的首尔美丽路径。",
    programsLead: "围绕国际访客需求，比较完整套餐、单项服务与私享咨询选项。",
    programsHelper: "如果不确定从哪里开始，可先从私享咨询开始。"
  },
  ja: {
    programsTitle: "あなたに合うソウル美容ルートを選びましょう。",
    programsLead: "海外ゲスト向けに、フルパッケージ、集中サービス、プライベート相談を比較できます。",
    programsHelper: "迷ったら、まずプライベート相談から始めてください。"
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

function getLocale() {
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

function resetHomeBuilderAndCartState() {
  clearKarecationStateStorage();
  allInOneState = { skinId: null, optionalIds: [] };
  syncAllInOneBuilderUI();
  updateCartCount();
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
  if (remaining <= 0) return "";
  if (remaining === 1) return "Please choose 1 more program to complete your journey.";
  return `Please choose ${remaining} more program(s) to complete your journey.`;
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
    "skin-clinic-care-1": "60–90 mins",
    "skin-clinic-care-2": "90–120 mins",
    "scalp-diagnosis-spa": "60–90 mins",
    "hair-salon": "60–90 mins",
    "celebrity-hair-makeup": "90–120 mins",
    "nail-care": "60–90 mins",
    "body-massage": "90 mins"
  },
  ko: {
    "quick-concierge-consultation": "20분",
    "skin-clinic-care-1": "60–90분",
    "skin-clinic-care-2": "90–120분",
    "scalp-diagnosis-spa": "60–90분",
    "hair-salon": "60–90분",
    "celebrity-hair-makeup": "90–120분",
    "nail-care": "60–90분",
    "body-massage": "90분"
  },
  zh: {
    "quick-concierge-consultation": "20分钟",
    "skin-clinic-care-1": "60–90分钟",
    "skin-clinic-care-2": "90–120分钟",
    "scalp-diagnosis-spa": "60–90分钟",
    "hair-salon": "60–90分钟",
    "celebrity-hair-makeup": "90–120分钟",
    "nail-care": "60–90分钟",
    "body-massage": "90分钟"
  },
  ja: {
    "quick-concierge-consultation": "20分",
    "skin-clinic-care-1": "60–90分",
    "skin-clinic-care-2": "90–120分",
    "scalp-diagnosis-spa": "60–90分",
    "hair-salon": "60–90分",
    "celebrity-hair-makeup": "90–120分",
    "nail-care": "60–90分",
    "body-massage": "90分"
  }
};

// Programs page uses local placeholders so visual assets can be swapped with licensed brand-safe files.
const PROGRAMS_PAGE_MEDIA = {
  "quick-concierge-consultation": {
    image: "images/programs/private-consultation.jpg",
    imageAlt: "Private K-beauty consultation planning"
  },
  "skin-clinic-care-1": {
    image: "images/programs/skin-clinic-care-1.jpg",
    imageAlt: "Premium skin refresh treatment"
  },
  "skin-clinic-care-2": {
    image: "images/programs/skin-clinic-care-2.jpg",
    imageAlt: "Advanced skin clinic care"
  },
  "scalp-diagnosis-spa": {
    image: "images/programs/scalp-care.jpg",
    imageAlt: "Relaxing scalp care treatment"
  },
  "hair-salon": {
    image: "images/programs/hair-salon.jpg",
    imageAlt: "Refined Seoul hair salon care"
  },
  "celebrity-hair-makeup": {
    image: "images/programs/hair-makeup.jpg",
    imageAlt: "Luxury hair and makeup styling"
  },
  "nail-care": {
    image: "images/programs/nail-pedi-care.jpg",
    imageAlt: "Minimal nail and pedi care"
  },
  "body-massage": {
    image: "images/programs/body-massage.jpg",
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
  renderContactChannels();
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
    const channel = contactChannelCopy();
    setText("contactChannelsEyebrow", channel.eyebrow);
    setText("contactChannelsTitle", channel.title);
    setText("contactChannelsLead", channel.lead);
    setText("contactChannelsHelper", channel.helper);
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
              <p class="muted" style="font-size:.8rem;">${copy.common.startingFrom} ${formatPrice(item.program.startPrice)} · ${text.duration}</p>
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
  const cartRows = document.querySelectorAll(".summary-card .total-row");
  if (cartRows[0]) cartRows[0].querySelector("span:first-child").textContent = copy.common.subtotal;
  if (cartRows[1]) cartRows[1].querySelector("span:first-child").textContent = copy.common.service;
  if (cartRows[2]) cartRows[2].querySelector("strong:first-child").textContent = copy.common.total;
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
  const journeySummary = hasAllInOneInCart && journey?.packageType === "all-in-one" && journey?.selectedNames?.length
    ? `<div class="list-item"><strong>${journey.packageName || "All-in-One Package"}</strong><p class="muted" style="font-size:.8rem; margin-top:6px;">${journey.selectedNames.join(" / ")}</p><p class="muted" style="font-size:.78rem; margin-top:6px;">Base package: ${formatPrice(journey.basePrice || ALLINONE_BUILDER_CONFIG.basePrice)} / Add-ons: ${formatPrice(journey.addOnsTotal ?? journey.addonTotal ?? 0)} / Total: ${formatPrice(journey.finalTotal ?? journey.totalPrice ?? ALLINONE_BUILDER_CONFIG.basePrice)}</p></div>`
    : "";

  if (!details.length) {
    root.innerHTML = `<div class="empty-state"><h3 class="display">No program selected yet.</h3><p class="muted" style="margin-top:6px;">Please choose a program or build your All-in-One journey first.</p></div>`;
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
  const bookingRows = document.querySelectorAll(".summary-card .total-row");
  if (bookingRows[0]) bookingRows[0].querySelector("span:first-child").textContent = copy.common.subtotal;
  if (bookingRows[1]) bookingRows[1].querySelector("span:first-child").textContent = copy.common.service;
  if (bookingRows[2]) bookingRows[2].querySelector("strong:first-child").textContent = copy.common.total;
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
        <a class="contact-channel-link" href="${channel.href}" target="_blank" rel="noopener noreferrer">${labels.openLink}</a>
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
  const counter = document.getElementById("allInOneCounter");
  const ready = document.getElementById("allInOneReady");
  const basePriceNode = document.getElementById("allInOneBasePrice");
  const addonPriceNode = document.getElementById("allInOneAddonPrice");
  const totalPriceNode = document.getElementById("allInOneTotalPrice");
  if (!counter) return;

  const selectedCount = allInOneSelectedCount();
  counter.textContent = `${selectedCount} / 4 selected`;
  const price = allInOnePriceBreakdown();
  if (basePriceNode) basePriceNode.textContent = formatPrice(price.basePrice);
  if (addonPriceNode) addonPriceNode.textContent = formatPrice(price.addonTotal);
  if (totalPriceNode) totalPriceNode.textContent = formatPrice(price.totalPrice);

  if (ready) {
    const isReady = Boolean(allInOneState.skinId) && allInOneState.optionalIds.length === 3;
    ready.hidden = !isReady;
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

function openAllInOneBuilder() {
  const builder = document.getElementById("allInOneBuilder");
  if (!builder) return;
  if (builder.hidden) builder.hidden = false;
  syncAllInOneBuilderUI();
}

function selectAllInOneOption(group, programId) {
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
    alert("You have already selected all 4 programs.");
    return;
  }

  if (allInOneState.optionalIds.length >= 3) {
    alert("You have already selected all 3 optional programs.");
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
      status.textContent = "Please fill in name, email, and nationality.";
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
      status.textContent = "Sending request...";
      status.className = "status-message";
      await sendReservationToSheet(payload);
      status.textContent = "Your request has been sent. Karecation will contact you with the next step.";
      status.className = "status-message success";
    } catch (error) {
      status.textContent = "Failed to send request. Please try again.";
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
      openAllInOneBuilder();
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

function init() {
  allInOneState = { skinId: null, optionalIds: [] };
  if (document.body.dataset.page === "home") {
    resetHomeBuilderAndCartState();
  }
  insertLanguageSelector();
  setActiveNav();
  bindBookingForm();
  bindGlobalEvents();
  applyLocale();
}

document.addEventListener("DOMContentLoaded", init);

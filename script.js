const STORAGE_KEY = "karecation_cart_simple_v1";
const LOCALE_KEY = "karecation_locale_v1";
const SERVICE_RATE = 0.05;
const BOOKING_ENDPOINT = "https://script.google.com/macros/s/AKfycbw3QYQcz4yEfooj5JHimeEjPhEMiwr9d-thze96WrjQJxzgkjCVRDlG1XG6iM6TJEEU/exec";

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
    id: "skin-clinic-care",
    category: "skin",
    startPrice: 300,
    duration: "2 hrs",
    location: "Gangnam, Seoul",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
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
    id: "celebrity-hair-makeup",
    category: "styling",
    startPrice: 200,
    duration: "2 hrs",
    location: "Apgujeong, Seoul",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "personal-color-consultation",
    category: "styling",
    startPrice: 150,
    duration: "2 hrs",
    location: "Seongsu, Seoul",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
  }
];

const CATEGORY_ORDER = ["all", "package", "starter", "skin", "wellness", "styling"];

const I18N = {
  en: {
    meta: {
      brandSub: "Premium K-Beauty Concierge",
      nav: ["Home", "Programs", "Consultation", "About", "FAQ", "Contact"],
      cart: "Cart",
      footerAbout: "Premium K-beauty concierge support for foreign clients visiting Korea.",
      browse: "Browse",
      support: "Support"
    },
    cta: {
      viewPrograms: "View Programs",
      viewAllPrograms: "View All Programs",
      viewProgram: "View Program",
      addToCart: "Add to Cart",
      requestConsultation: "Request Private Consultation",
      explorePackage: "Explore Package",
      startPlanning: "Start Planning",
      reviewCart: "Review Cart"
    },
    common: {
      startingFrom: "Starting from",
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
      heroEyebrow: "Premium K-Beauty Concierge",
      heroTitle: "Beauty in Korea, made simple.",
      heroTitleLines: ["Beauty in Korea,", "made simple."],
      heroLead: "Choose a package or let Karecation plan it.",
      programsEyebrow: "Featured Programs",
      programsTitle: "Start with a concierge path.",
      howEyebrow: "How It Works",
      howTitle: "Select. Request. Arrive prepared.",
      steps: [
        ["Choose a program", "Compare packages and individual services."],
        ["Add to cart", "Save the path you want to discuss."],
        ["Request planning", "Share dates, goals, and language needs."],
        ["Get coordinated", "Karecation supports booking and itinerary flow."]
      ],
      trustEyebrow: "Trust",
      trustTitle: "Premium support, clear boundaries.",
      trust: [
        ["Private planning", "Built around your goals and schedule."],
        ["Clinic discovery", "Compare options clearly."],
        ["Multilingual support", "Communication help for foreign visitors."]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Before you start.",
      finalEyebrow: "Start Planning",
      finalTitle: "Ready to choose your Korea concierge path?"
    },
    page: {
      programsEyebrow: "Concierge Programs",
      programsTitle: "Choose your program. Start planning.",
      programsLead: "All-in-one, consultation, skin, wellness, and styling.",
      searchPlaceholder: "Search programs",
      sortRecommended: "Sort: Recommended",
      priceAsc: "Price: Low to High",
      priceDesc: "Price: High to Low",
      aboutEyebrow: "About",
      aboutTitle: "Premium coordination for foreign clients visiting Korea.",
      aboutLead: "Beauty, wellness, clinic discovery, reservation help, and private itinerary planning.",
      aboutCards: [
        ["Personalized Discovery", "We narrow beauty, wellness, and clinic options around your goals."],
        ["Clear Coordination", "Reservations, timing, language needs, and itinerary flow stay in one process."],
        ["Request-First Flow", "Ask privately before choosing a package or final schedule."]
      ],
      aboutFlowEyebrow: "Flow",
      aboutSteps: [
        ["Share", "Tell us your goals, dates, nationality, and support needs."],
        ["Plan", "Review suitable paths and a practical Korea schedule."],
        ["Coordinate", "Move forward with reservation assistance and concierge support."]
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Clear answers before you plan.",
      faqLead: "What Karecation can coordinate and how to begin.",
      contactTitle: "Concierge support",
      contactLead: "For planning a visit, request a private consultation with your goals and dates.",
      bookingTitle: "Tell us what you want to arrange in Korea.",
      bookingLead: "Share your goals, dates, nationality, and support needs.",
      bookingDetails: "Your Details",
      selectedPath: "Selected Path",
      fullName: "Full Name",
      email: "Email",
      nationality: "Nationality",
      requestNote: "Additional Request",
      requestPlaceholder: "Desired services, visit dates, language needs, budget range, and travel constraints.",
      cartEyebrow: "Selected Path",
      cartTitle: "Review your concierge request.",
      cartLead: "Clarify the path, travelers, and preferred date before sending your inquiry.",
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
        description: "A fully curated premium route where a concierge accompanies you throughout the day. Free services include personal Olive Young shopping support and pickup/drop-off support.",
        includes: ["Concierge accompaniment", "Personal Olive Young shopping support", "Pickup and drop-off support", "Program coordination and on-site guidance"],
        steps: ["Goal and route planning", "Concierge-accompanied appointments", "Shopping and transfer support"],
        faq: [{ q: "Who is this best for?", a: "Guests who want a smooth, one-day premium experience with direct concierge accompaniment." }]
      },
      "quick-concierge-consultation": {
        name: "Quick Concierge Consultation",
        location: "Online / Seoul",
        duration: "30 mins",
        tagline: "Best first step for new guests.",
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

function getLocale() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang") || localStorage.getItem(LOCALE_KEY) || "en";
  return I18N[requested] ? requested : "en";
}

let currentLocale = getLocale();

function t() {
  return I18N[currentLocale] || I18N.en;
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
  return readCart().map((item) => {
    const program = getProgramById(item.programId);
    const travelers = Math.max(1, Number(item.travelers) || 1);
    return {
      ...item,
      program,
      travelers,
      unit: program.startPrice,
      lineTotal: program.startPrice * travelers
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
}

function programCard(program) {
  const copy = t();
  const text = programText(program);
  const primaryCta = program.category === "package" ? copy.cta.explorePackage : copy.cta.addToCart;
  return `
    <article class="program-card">
      <a class="program-card-image" href="program-detail.html?id=${program.id}">
        <img src="${program.image}" alt="${text.name}" loading="lazy">
      </a>
      <div class="program-card-body">
        <div class="program-meta">
          <span class="badge">${copy.categories[program.category]}</span>
          <span class="badge">${text.location}</span>
        </div>
        <h3 class="program-title">${text.name}</h3>
        <p class="program-desc">${text.tagline}</p>
        <div class="program-price">
          <strong>${copy.common.startingFrom} ${formatPrice(program.startPrice)}</strong>
          <span>${text.duration}</span>
        </div>
        <div class="program-actions">
          <a class="btn btn-secondary" href="program-detail.html?id=${program.id}">${copy.cta.viewProgram}</a>
          <button class="btn btn-primary" type="button" data-add-to-cart="${program.id}">${primaryCta}</button>
        </div>
      </div>
    </article>
  `;
}

function renderHomePrograms() {
  const target = document.getElementById("homeFeaturedPrograms");
  if (!target) return;
  const picks = ["all-in-one-package", "skin-clinic-care", "personal-color-consultation"]
    .map(getProgramById)
    .filter(Boolean);
  target.innerHTML = picks.map(programCard).join("");
}

function renderProgramsPage() {
  const grid = document.getElementById("programGrid");
  const filterRoot = document.getElementById("categoryFilters");
  const search = document.getElementById("programSearch");
  const sort = document.getElementById("programSort");
  const activeHolder = document.getElementById("activeCategory");
  if (!grid || !filterRoot || !activeHolder) return;

  const copy = t();
  if (!CATEGORY_ORDER.includes(activeHolder.value)) activeHolder.value = "all";
  filterRoot.innerHTML = CATEGORY_ORDER.map((name, index) => (
    `<button class="chip ${index === 0 ? "active" : ""}" type="button" data-category="${name}">${copy.categories[name]}</button>`
  )).join("");

  function paint() {
    const activeCategory = activeHolder.value || "all";
    const keyword = (search?.value || "").trim().toLowerCase();
    const sortValue = sort?.value || "recommended";
    let list = PROGRAMS.filter((program) => {
      const text = programText(program);
      const catOk = activeCategory === "all" || program.category === activeCategory;
      const searchable = `${text.name} ${copy.categories[program.category]} ${text.tagline}`.toLowerCase();
      return catOk && (!keyword || searchable.includes(keyword));
    });

    if (sortValue === "price-asc") list.sort((a, b) => a.startPrice - b.startPrice);
    if (sortValue === "price-desc") list.sort((a, b) => b.startPrice - a.startPrice);

    grid.innerHTML = list.length
      ? list.map(programCard).join("")
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

  if (!details.length) {
    root.innerHTML = `<div class="empty-state"><h3 class="display">${copy.common.noCartItems}</h3><p class="muted" style="margin-top:6px;">${copy.page.bookingLead}</p></div>`;
  } else {
    root.innerHTML = details.map((item) => {
      const text = programText(item.program);
      const travelerLabel = item.travelers > 1 ? copy.common.travelers : copy.common.traveler;
      return `
        <div class="list-item">
          <strong>${text.name}</strong>
          <p class="muted" style="font-size:.8rem; margin-top:4px;">${item.travelers} ${travelerLabel}${item.preferredDate ? ` · ${item.preferredDate}` : ""}</p>
          <p style="margin-top:6px; font-weight:600;">${formatPrice(item.lineTotal)}</p>
        </div>
      `;
    }).join("");
  }

  setText("bookingSubtotal", formatPrice(totals.subtotal));
  setText("bookingService", formatPrice(totals.service));
  setText("bookingTotal", formatPrice(totals.total));
  const bookingRows = document.querySelectorAll(".summary-card .total-row");
  if (bookingRows[0]) bookingRows[0].querySelector("span:first-child").textContent = copy.common.subtotal;
  if (bookingRows[1]) bookingRows[1].querySelector("span:first-child").textContent = copy.common.service;
  if (bookingRows[2]) bookingRows[2].querySelector("strong:first-child").textContent = copy.common.total;
}

function renderFaqPage() {
  const copy = t();
  const roots = [document.getElementById("faqList"), document.getElementById("homeFaqList")].filter(Boolean);
  roots.forEach((root) => {
    root.innerHTML = copy.faq.map((item) => `<details class="faq-item"><summary>${item[0]}</summary><p>${item[1]}</p></details>`).join("");
  });
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

    const cartSummary = details.length
      ? details.map((item) => `${programText(item.program).name} x${item.travelers}${item.preferredDate ? ` (${item.preferredDate})` : ""}`).join(" | ")
      : copy.common.noCartItems;

    const payload = {
      "Full Name": fullName,
      Email: email,
      Nationality: nationality,
      "Additional Request": additionalRequest,
      "Cart Summary": cartSummary,
      Locale: currentLocale,
      fullName,
      name: fullName,
      email,
      nationality,
      additionalRequest,
      message: additionalRequest,
      cartSummary,
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
  insertLanguageSelector();
  setActiveNav();
  bindBookingForm();
  bindGlobalEvents();
  applyLocale();
}

document.addEventListener("DOMContentLoaded", init);

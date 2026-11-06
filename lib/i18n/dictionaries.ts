export type Dictionary = typeof en;

export const en = {
  nav: {
    work: "Work",
    experience: "Experience",
    techStack: "Tech Stack",
    about: "About",
    contact: "Contact",
  },
  hero: {
    statusPrefix: "SYSTEM.STATUS: ",
    statusValue: "ONLINE",
    availability: "Available for Freelance & Collaboration",
    titlePrefix: "Engineering",
    titleHighlight: "Systems that Think.",
    descriptionPrefix: "Embedded Systems Engineer bridging ",
    descriptionHighlight1: "robotics & embedded hardware",
    descriptionAnd: " with ",
    descriptionHighlight2: "shipped games & AI systems",
    descriptionSuffix: ".",
    button: "Initialize Protocols",
    cvButton: "Download CV",
  },
  about: {
    subtitle: "About the Engineer",
    description: "I'm an <span className=\"text-white font-medium\">Embedded Systems Engineer</span> and software developer working across <span className=\"text-cyan-400\">robotics &amp; embedded hardware</span> (STM32, Raspberry Pi, ROS/OpenCV) and <span className=\"text-orange-500\">consumer software</span>. I've independently published <span className=\"text-white\">two Unity mobile games</span> to the App Store and Google Play, and I build <span className=\"text-white\">Python &amp; LLM-based</span> automation tools. As an <span className=\"text-white italic\">AUVSI SUAS 2025 mission judge</span> and founder of two award-winning university UAV teams, I pair hands-on hardware with end-to-end product delivery.",
    gpaLabel: "Academic GPA",
    fundingLabel: "Research Funding",
    location: "Agawam, MA",
    role: "Embedded & Software Engineer",
  },
  metrics: {
    items: [
      { value: "2", label: "Published Games" },
      { value: "$170K+", label: "Research Funding" },
      { value: "SUAS '25", label: "Mission Judge" },
      { value: "3.20", label: "Engineering GPA" },
    ],
  },
  skills: {
    titlePrefix: "Technical ",
    titleHighlight: "Expertise",
    subtitleCmd: "./mastered_technologies.sh",
    groups: [
      {
        title: "Embedded & Robotics",
        skills: ["STM32 · ARM (UART/SPI/I2C)", "Raspberry Pi 3/4/5 · Jetson Nano", "ROS · Gazebo · OpenCV", "Firmware · Sensor Integration"]
      },
      {
        title: "Games & Software",
        skills: ["Unity Engine · C#", "AdMob · IAP · Store Release", "Android Studio · Git · Linux", "C++ · VB.NET · HTML/CSS"]
      },
      {
        title: "AI, Web & Automation",
        skills: ["Python · FastAPI", "LLM Integration · Claude API", "React · Next.js · Node/Express", "PostgreSQL · SQL Server · scikit-learn"]
      }
    ]
  },
  projects: {
    titlePrefix: "Flagship ",
    titleHighlight: "Engineering",
    titleSuffix: " Projects",
    items: [
      {
        title: "Lumen — Survive the Darkness",
        tag: "MOBILE GAME · UNITY",
        desc: "A survivor-action space game I designed, built, and self-published to the App Store and Google Play. Full release pipeline: AdMob mediation, in-app purchases, Game Center / Play Games Services, and a custom Python asset pipeline."
      },
      {
        title: "Color Sort — Ball Sort Puzzle",
        tag: "MOBILE GAME · UNITY",
        desc: "A self-published ball-sort puzzle with 100+ procedurally generated levels and full TR/EN localization (130+ keys). Live on Google Play with iOS in App Store review. Tuned AdMob fill-rate to lift revenue."
      },
      {
        title: "AI Trading Assistant",
        tag: "AI · AUTOMATION",
        desc: "An autonomous trading system pairing technical/fundamental analysis with LLM news-sentiment (Anthropic Claude). Alpaca API order execution, a React dashboard, and a Telegram bot for live alerts and remote control."
      },
      {
        title: "Jarvis — Physical AI Assistant",
        tag: "PHYSICAL AI · IN PROGRESS",
        desc: "A desktop-companion AI assistant on a Raspberry Pi 5 + STM32 with a custom sensor array. Currently in the base hardware and system-architecture phase."
      }
    ]
  },
  experience: {
    titlePrefix: "Professional ",
    titleHighlight: "Experience",
    subtitleCmd: "./work_history.log",
    items: [
      { role: "Independent Consultant", org: "Freelance — POS, Embedded Hardware & Web Infra", period: "Jan 2023 – Present", location: "Massachusetts, US", desc: "Ongoing technical support for restaurant clients: POS hardware install, configuration and maintenance across vendor systems, plus client website and backend/data infrastructure upkeep." },
      { role: "Co-Founder", org: "Multi-Tenant SaaS POS & Ordering Platform", period: "Mar – Jun 2026", location: "Remote, US", desc: "Co-founded a multi-tenant restaurant ordering & POS SaaS (React/Vite, Express/TypeScript, PostgreSQL, Stripe Connect) and contributed to the platform architecture." },
      { role: "Private Instructor — Embedded Systems", org: "Freelance / Self-Employed", period: "2023 – Present", location: "Massachusetts, US", desc: "Designed and deliver a self-built Raspberry Pi & Arduino curriculum to high-school students on an ongoing weekly schedule." },
      { role: "Mission Judge — AUVSI SUAS 2025", org: "RoboNation", period: "Jun 2025", location: "Maryland, US", desc: "Evaluated university teams' autonomous UAV mission performance at one of the premier collegiate unmanned-systems competitions." },
      { role: "Embedded Systems Intern", org: "TÜBİTAK UME — National Metrology Institute", period: "Aug – Sep 2021", location: "Kocaeli, Turkey", desc: "Programmed an ARM STM32 for sensor-based temperature measurement with a Nextion LCD interface and a C#/Visual Studio ground-station app." },
      { role: "Mid-Level Software Developer", org: "Atatürk University — ATAUZEM", period: "Oct 2020 – May 2022", location: "Erzurum, Turkey", desc: "Integrated and maintained the Moodle e-learning platform across all university faculties during the COVID-19 transition to remote learning." },
      { role: "Contract Interpreter (Turkish/Kurdish – English)", org: "Baystate Interpreters, Inc.", period: "Feb 2026 – Present", location: "Massachusetts, US", desc: "Provide on-demand interpretation at the RMV and area hospitals, supporting patients and clients in medical and administrative settings." },
      { role: "Computer Systems Analyst", org: "Atatürk University — Office of International Affairs", period: "Feb – Mar 2021", location: "Erzurum, Turkey", desc: "Managed IT infrastructure, hardware/software troubleshooting and systems optimization as emergency IT support for the office." },
      { role: "Software Trainer", org: "TÜBİTAK DENEYAP (T3 Foundation)", period: "May – Aug 2021", location: "Erzurum, Turkey", desc: "Taught software and algorithmic fundamentals to middle-school students in a national TÜBİTAK / T3 Foundation technology workshop program." }
    ]
  },
  education: {
    titlePrefix: "Education & ",
    titleHighlight: "Credentials",
    eduLabel: "Education",
    certLabel: "Certifications",
    langLabel: "Languages",
    education: [
      { degree: "B.S. Computer Engineering", org: "Atatürk University", meta: "GPA 3.20 · 2022" },
      { degree: "Business Administration & Management", org: "Computer Systems Institute", meta: "GPA 4.0 · 2024–2025" },
      { degree: "Intensive English Program (ESL)", org: "IVY Christian College", meta: "2023" }
    ],
    certifications: [
      "Embedded Hardware & Operating Systems — 28DIGITAL (2024)",
      "IoT & Embedded Systems — Coursera / UC Irvine (2024)",
      "Introduction to Software Engineering — IBM (2024)",
      "Software Engineering Essentials — Coursera (2024)",
      "Foundations of Project Management — Google (2024)"
    ],
    languages: [
      { name: "Turkish", level: "Native" },
      { name: "Kurdish", level: "Native" },
      { name: "English", level: "Fluent · Contract Interpreter" }
    ]
  },
  leadership: {
    titlePrefix: "Leadership & ",
    titleHighlight: "Recognition",
    subtitleCmd: "./founded_and_led.sh",
    items: [
      { role: "Founder & Team Captain — ATA UAV Team", org: "Atatürk University", period: "2021 – 2022", desc: "Founded and led a UAV team through AUVSI SUAS qualification and competition in Maryland. Secured ~$50,000 in research funding, earned Teknokent & Rectorate recognition awards, and was featured in Turkish national media." },
      { role: "Founder & Team Captain — ATATEB UAV Team", org: "Atatürk University", period: "2020 – 2021", desc: "Led the team's preparation and participation in the TÜBİTAK Teknofest UAV competition (Free Duty category); secured ~$20,000 in research funding." },
      { role: "Founder & President — Technology & Computer Club (ATATEB)", org: "Atatürk University", period: "2019 – 2022", desc: "Founded and led a student technology club spanning 5 competition teams; secured $100,000+ in combined research and thesis funding, and earned an outstanding achievement award from the university and Technocity." }
    ]
  },
  timeline: {
    title: "./career_roadmap",
    items: [
      { year: "2019–22", title: "Founder & Leader", desc: "Founded a tech club and two UAV teams; raised $170K+ in combined research funding." },
      { year: "2021–22", title: "UAV Captain", desc: "Led the ATA UAV Team to AUVSI SUAS in Maryland; featured in Turkish national media." },
      { year: "2023", title: "Move to the US", desc: "Relocated to Massachusetts; completed academic English at IVY College." },
      { year: "2024–Now", title: "Freelance & Builder", desc: "Consulting, two published games, AI tools, and the Jarvis assistant." }
    ]
  },
  contact: {
    subtitle: "Initialize_Connection",
    titlePrefix: "Let’s ",
    titleHighlight: "Connect",
    description: "Whether you have a question about <span className=\"text-white\">embedded systems</span>, game &amp; AI development, or potential <span className=\"text-orange-400\">collaboration</span>—my inbox is always open.",
    location: "Agawam, MA 01001",
    links: {
      email: "Secure Email Protocol",
      linkedin: "Professional Network",
      github: "Source Code Repository"
    },
    footer: "RH.DEV © 2026 | Engineering Excellence"
  }
};

export const tr: Dictionary = {
  nav: {
    work: "Projeler",
    experience: "Deneyim",
    techStack: "Teknoloji",
    about: "Hakkımda",
    contact: "İletişim",
  },
  hero: {
    statusPrefix: "SİSTEM.DURUMU: ",
    statusValue: "AKTİF",
    availability: "Freelance ve İş Birliği İçin Müsait",
    titlePrefix: "Düşünen ",
    titleHighlight: "Sistemler Kuruyorum.",
    descriptionPrefix: "",
    descriptionHighlight1: "Robotik ve gömülü donanımı",
    descriptionAnd: " ile ",
    descriptionHighlight2: "yayınlanmış oyun ve yapay zekâ sistemlerini",
    descriptionSuffix: " birleştiren Gömülü Sistem Mühendisi.",
    button: "Protokolleri Başlat",
    cvButton: "CV İndir",
  },
  about: {
    subtitle: "Mühendis Hakkında",
    description: "Bir <span className=\"text-white font-medium\">Gömülü Sistem Mühendisi</span> ve yazılım geliştirici olarak hem <span className=\"text-cyan-400\">robotik ve gömülü donanım</span> (STM32, Raspberry Pi, ROS/OpenCV) hem de <span className=\"text-orange-500\">tüketici yazılımı</span> alanında çalışıyorum. App Store ve Google Play'de <span className=\"text-white\">iki Unity mobil oyunu</span> bağımsız olarak yayınladım ve <span className=\"text-white\">Python ve LLM tabanlı</span> otomasyon araçları geliştiriyorum. Bir <span className=\"text-white italic\">AUVSI SUAS 2025 görev jürisi</span> ve iki ödüllü üniversite İHA takımının kurucusu olarak, uygulamalı donanımı uçtan uca ürün geliştirmeyle birleştiriyorum.",
    gpaLabel: "Akademik Ortalama",
    fundingLabel: "Araştırma Fonu",
    location: "Agawam, MA",
    role: "Gömülü ve Yazılım Mühendisi",
  },
  metrics: {
    items: [
      { value: "2", label: "Yayınlanmış Oyun" },
      { value: "$170K+", label: "Araştırma Fonu" },
      { value: "SUAS '25", label: "Görev Jürisi" },
      { value: "3.20", label: "Mühendislik Ortalaması" },
    ],
  },
  skills: {
    titlePrefix: "Teknik ",
    titleHighlight: "Uzmanlık",
    subtitleCmd: "./uzmanlasilan_teknolojiler.sh",
    groups: [
      {
        title: "Gömülü Sistemler & Robotik",
        skills: ["STM32 · ARM (UART/SPI/I2C)", "Raspberry Pi 3/4/5 · Jetson Nano", "ROS · Gazebo · OpenCV", "Firmware · Sensör Entegrasyonu"]
      },
      {
        title: "Oyun & Yazılım",
        skills: ["Unity Oyun Motoru · C#", "AdMob · IAP · Mağaza Yayını", "Android Studio · Git · Linux", "C++ · VB.NET · HTML/CSS"]
      },
      {
        title: "Yapay Zekâ, Web & Otomasyon",
        skills: ["Python · FastAPI", "LLM Entegrasyonu · Claude API", "React · Next.js · Node/Express", "PostgreSQL · SQL Server · scikit-learn"]
      }
    ]
  },
  projects: {
    titlePrefix: "Öne Çıkan ",
    titleHighlight: "Mühendislik",
    titleSuffix: " Projeleri",
    items: [
      {
        title: "Lumen — Survive the Darkness",
        tag: "MOBİL OYUN · UNITY",
        desc: "Tasarlayıp geliştirdiğim ve App Store ile Google Play'de bağımsız yayınladığım survivor-aksiyon uzay oyunu. Tam yayın hattı: AdMob mediation, uygulama içi satın almalar, Game Center / Play Games Services ve özel bir Python asset hattı."
      },
      {
        title: "Color Sort — Ball Sort Bulmaca",
        tag: "MOBİL OYUN · UNITY",
        desc: "100'den fazla prosedürel üretilen bölüm ve tam TR/EN yerelleştirme (130+ anahtar) içeren, bağımsız yayınladığım bir bulmaca oyunu. Google Play'de yayında, iOS App Store incelemesinde. Geliri artırmak için AdMob doluluk oranını iyileştirdim."
      },
      {
        title: "AI Trading Assistant",
        tag: "YAPAY ZEKÂ · OTOMASYON",
        desc: "Teknik/temel analizi LLM haber-duygu analiziyle (Anthropic Claude) birleştiren otonom bir alım-satım sistemi. Alpaca API ile otomatik emir yürütme, React panosu ve canlı uyarılar ile uzaktan kontrol için Telegram botu."
      },
      {
        title: "Jarvis — Fiziksel Yapay Zekâ Asistanı",
        tag: "FİZİKSEL YZ · GELİŞTİRİLİYOR",
        desc: "Raspberry Pi 5 + STM32 ve özel bir sensör dizisi üzerine kurulu masaüstü eşlikçisi yapay zekâ asistanı. Şu anda temel donanım ve sistem mimarisi aşamasında."
      }
    ]
  },
  experience: {
    titlePrefix: "Profesyonel ",
    titleHighlight: "Deneyim",
    subtitleCmd: "./is_gecmisi.log",
    items: [
      { role: "Bağımsız Danışman", org: "Freelance — POS, Gömülü Donanım & Web Altyapısı", period: "Oca 2023 – Günümüz", location: "Massachusetts, ABD", desc: "Restoran müşterilerine sürekli teknik destek: farklı sistemlerde POS donanım kurulumu, yapılandırma ve bakımı; ayrıca müşteri web siteleri ve arka uç/veri altyapısı bakımı." },
      { role: "Kurucu Ortak", org: "Çok Kiracılı SaaS POS & Sipariş Platformu", period: "Mar – Haz 2026", location: "Uzaktan, ABD", desc: "Çok kiracılı bir restoran sipariş & POS SaaS platformunu (React/Vite, Express/TypeScript, PostgreSQL, Stripe Connect) kurdum ve platform mimarisine katkı sağladım." },
      { role: "Özel Eğitmen — Gömülü Sistemler", org: "Freelance / Serbest", period: "2023 – Günümüz", location: "Massachusetts, ABD", desc: "Lise öğrencilerine, kendi hazırladığım Raspberry Pi & Arduino müfredatını haftalık düzende tasarlayıp veriyorum." },
      { role: "Görev Jürisi — AUVSI SUAS 2025", org: "RoboNation", period: "Haz 2025", location: "Maryland, ABD", desc: "Önde gelen kolej insansız sistemler yarışmalarından birinde üniversite takımlarının otonom İHA görev performansını değerlendirdim." },
      { role: "Gömülü Sistemler Stajyeri", org: "TÜBİTAK UME — Ulusal Metroloji Enstitüsü", period: "Ağu – Eyl 2021", location: "Kocaeli, Türkiye", desc: "Sensör tabanlı sıcaklık ölçümü için ARM STM32 programladım; Nextion LCD arayüzü ve C#/Visual Studio yer istasyonu uygulaması geliştirdim." },
      { role: "Orta Düzey Yazılım Geliştirici", org: "Atatürk Üniversitesi — ATAUZEM", period: "Eki 2020 – May 2022", location: "Erzurum, Türkiye", desc: "COVID-19 ile uzaktan eğitime geçiş sürecinde, tüm fakültelerde Moodle e-öğrenme platformunu entegre ettim ve sürdürdüm." },
      { role: "Sözleşmeli Tercüman (Türkçe/Kürtçe – İngilizce)", org: "Baystate Interpreters, Inc.", period: "Şub 2026 – Günümüz", location: "Massachusetts, ABD", desc: "RMV ve bölge hastanelerinde talebe bağlı tercümanlık sağlıyorum; tıbbi ve idari ortamlarda hastalara ve danışanlara destek oluyorum." },
      { role: "Bilgisayar Sistemleri Analisti", org: "Atatürk Üniversitesi — Uluslararası İlişkiler Ofisi", period: "Şub – Mar 2021", location: "Erzurum, Türkiye", desc: "Ofise acil BT desteği olarak BT altyapısını yönettim; donanım/yazılım sorun giderme ve sistem optimizasyonu yaptım." },
      { role: "Yazılım Eğitmeni", org: "TÜBİTAK DENEYAP (T3 Vakfı)", period: "May – Ağu 2021", location: "Erzurum, Türkiye", desc: "Ulusal bir TÜBİTAK / T3 Vakfı teknoloji atölyesinde ortaokul öğrencilerine yazılım ve algoritma temellerini öğrettim." }
    ]
  },
  education: {
    titlePrefix: "Eğitim & ",
    titleHighlight: "Yetkinlikler",
    eduLabel: "Eğitim",
    certLabel: "Sertifikalar",
    langLabel: "Diller",
    education: [
      { degree: "Bilgisayar Mühendisliği Lisans", org: "Atatürk Üniversitesi", meta: "Ortalama 3.20 · 2022" },
      { degree: "İşletme ve Yönetim", org: "Computer Systems Institute", meta: "Ortalama 4.0 · 2024–2025" },
      { degree: "Yoğun İngilizce Programı (ESL)", org: "IVY Christian College", meta: "2023" }
    ],
    certifications: [
      "Gömülü Donanım & İşletim Sistemleri — 28DIGITAL (2024)",
      "IoT & Gömülü Sistemler — Coursera / UC Irvine (2024)",
      "Yazılım Mühendisliğine Giriş — IBM (2024)",
      "Yazılım Mühendisliği Temelleri — Coursera (2024)",
      "Proje Yönetimi Temelleri — Google (2024)"
    ],
    languages: [
      { name: "Türkçe", level: "Ana dil" },
      { name: "Kürtçe", level: "Ana dil" },
      { name: "İngilizce", level: "Akıcı · Sözleşmeli Tercüman" }
    ]
  },
  leadership: {
    titlePrefix: "Liderlik & ",
    titleHighlight: "Başarılar",
    subtitleCmd: "./kurdugum_ve_yonettigim.sh",
    items: [
      { role: "Kurucu & Takım Kaptanı — ATA İHA Takımı", org: "Atatürk Üniversitesi", period: "2021 – 2022", desc: "Bir İHA takımını kurup AUVSI SUAS elemeleri ve Maryland'deki yarışmaya taşıdım. ~50.000 dolar araştırma fonu sağladım; Teknokent ve Rektörlük başarı ödülleri aldım ve takım Türk ulusal medyasında yer aldı." },
      { role: "Kurucu & Takım Kaptanı — ATATEB İHA Takımı", org: "Atatürk Üniversitesi", period: "2020 – 2021", desc: "Takımın TÜBİTAK Teknofest İHA yarışmasına (Serbest Görev kategorisi) hazırlık ve katılımını yönettim; ~20.000 dolar araştırma fonu sağladım." },
      { role: "Kurucu & Başkan — Teknoloji ve Bilgisayar Kulübü (ATATEB)", org: "Atatürk Üniversitesi", period: "2019 – 2022", desc: "5 yarışma takımını kapsayan bir öğrenci teknoloji kulübü kurdum ve yönettim; toplamda 100.000+ dolar araştırma ve tez fonu sağladım; üniversite ve Teknokent'ten üstün başarı ödülü aldım." }
    ]
  },
  timeline: {
    title: "./kariyer_yolculugu",
    items: [
      { year: "2019–22", title: "Kurucu & Lider", desc: "Bir teknoloji kulübü ve iki İHA takımı kurdum; toplamda $170K+ araştırma fonu sağladım." },
      { year: "2021–22", title: "İHA Kaptanı", desc: "ATA İHA Takımını Maryland'deki AUVSI SUAS'a taşıdım; Türk ulusal medyasında yer aldı." },
      { year: "2023", title: "ABD'ye Taşınma", desc: "Massachusetts'e yerleştim; IVY College'da akademik İngilizce tamamladım." },
      { year: "2024–Günümüz", title: "Freelance & Üretim", desc: "Danışmanlık, iki yayınlanmış oyun, yapay zekâ araçları ve Jarvis asistanı." }
    ]
  },
  contact: {
    subtitle: "Baglantiyi_Baslat",
    titlePrefix: "İletişime ",
    titleHighlight: "Geçelim",
    description: "<span className=\"text-white\">Gömülü sistemler</span>, oyun &amp; yapay zekâ geliştirme veya potansiyel bir <span className=\"text-orange-400\">iş birliği</span> hakkında sorunuz varsa, gelen kutum her zaman açıktır.",
    location: "Agawam, MA 01001",
    links: {
      email: "Güvenli E-Posta Protokolü",
      linkedin: "Profesyonel Ağ",
      github: "Kaynak Kod Deposu"
    },
    footer: "RH.DEV © 2026 | Mühendislik Mükemmelliği"
  }
};

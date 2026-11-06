export type Dictionary = typeof en;

export const en = {
  nav: {
    work: "Work",
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
    techStack: "Teknoloji",
    about: "Hakkımda",
    contact: "İletişim",
  },
  hero: {
    statusPrefix: "SİSTEM.DURUMU: ",
    statusValue: "AKTİF",
    availability: "Freelance ve İş Birliği İçin Müsait",
    titlePrefix: "Düşünen ",
    titleHighlight: "Sistemler İnşa Etmek.",
    descriptionPrefix: "",
    descriptionHighlight1: "Robotik ve gömülü donanımı",
    descriptionAnd: " ile ",
    descriptionHighlight2: "yayınlanmış oyun ve yapay zekâ sistemlerini",
    descriptionSuffix: " birleştiren Gömülü Sistem Mühendisi.",
    button: "Protokolleri Başlat",
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

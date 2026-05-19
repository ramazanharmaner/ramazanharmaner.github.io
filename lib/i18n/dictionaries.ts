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
    availability: "Available for Architecture & Engineering",
    titlePrefix: "Engineering",
    titleHighlight: "Systems that Think.",
    descriptionPrefix: "Computer Systems Engineer specializing in ",
    descriptionHighlight1: "Autonomous UAVs",
    descriptionAnd: " and ",
    descriptionHighlight2: "Embedded Architectures",
    descriptionSuffix: ".",
    button: "Initialize Protocols",
  },
  about: {
    subtitle: "About the Engineer",
    description: "As a dedicated <span className=\"text-white font-medium\">Computer Systems Engineer</span> with a 10-year technical legacy, I specialize in the architecture of <span className=\"text-cyan-400\">Autonomous UAVs</span> and high-precision <span className=\"text-orange-500\"> Embedded Systems</span>. My expertise lies in bridging the gap between complex hardware and intelligent software solutions. Having led the <span className=\"text-white italic\">ATA UAV Team</span> to international success and managed over <span className=\"text-white\">$50,000 in research grants</span>, I bring a unique blend of technical mastery and strategic leadership to every system I build.",
    gpaLabel: "Academic GPA",
    fundingLabel: "Research Funding",
    location: "Agawam, MA",
    role: "Embedded Engineer",
  },
  skills: {
    titlePrefix: "Technical ",
    titleHighlight: "Expertise",
    subtitleCmd: "./mastered_technologies.sh",
    groups: [
      {
        title: "Embedded & Hardware",
        skills: ["STM32 / ARM Architecture", "Circuit Design & PCB", "SPI / I2C / UART Protocols", "Arduino / RFID Systems"]
      },
      {
        title: "Autonomous & Vision",
        skills: ["ROS & Gazebo Simulation", "OpenCV Image Processing", "UAV Architectures", "Autonomous Navigation"]
      },
      {
        title: "Software Engineering",
        skills: ["C# / C++ / Python", "Unity Engine Development", "Next.js & React Framework", "SQL Server Management"]
      }
    ]
  },
  projects: {
    titlePrefix: "Flagship ",
    titleHighlight: "Engineering",
    titleSuffix: " Projects",
    items: [
      {
        title: "ATA UAV Team - Founder & Captain",
        tag: "AUTONOMOUS SYSTEMS",
        desc: "Led a multidisciplinary engineering team representing Atatürk University in the international SUAS competition in Maryland, USA. Secured $50,000+ in scientific research grants to develop fully autonomous flight systems."
      },
      {
        title: "TÜBİTAK UME Embedded Solutions",
        tag: "HARDWARE DESIGN",
        desc: "Engineered ARM-based STM32 microcontroller systems for high-precision measurement at the National Metrology Institute. Developed custom C# ground station interfaces for real-time sensor monitoring and data analysis."
      }
    ]
  },
  contact: {
    subtitle: "Initialize_Connection",
    titlePrefix: "Let’s ",
    titleHighlight: "Connect",
    description: "Whether you have a question about <span className=\"text-white\">embedded systems</span>, robotics, or potential <span className=\"text-orange-400\">collaboration</span>—my inbox is always open.",
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
    availability: "Mimari ve Mühendislik İçin Müsait",
    titlePrefix: "Düşünen ",
    titleHighlight: "Sistemler İnşa Etmek.",
    descriptionPrefix: "",
    descriptionHighlight1: "Otonom İHA'lar",
    descriptionAnd: " ve ",
    descriptionHighlight2: "Gömülü Mimariler",
    descriptionSuffix: " alanında uzmanlaşmış Bilgisayar Sistemleri Mühendisi.",
    button: "Protokolleri Başlat",
  },
  about: {
    subtitle: "Mühendis Hakkında",
    description: "10 yıllık teknik birikime sahip, kendini işine adamış bir <span className=\"text-white font-medium\">Bilgisayar Sistemleri Mühendisi</span> olarak, <span className=\"text-cyan-400\">Otonom İHA'lar</span> ve yüksek hassasiyetli <span className=\"text-orange-500\"> Gömülü Sistemler</span> mimarisinde uzmanım. Uzmanlığım, karmaşık donanımlar ile akıllı yazılım çözümleri arasındaki köprüyü kurmaktır. <span className=\"text-white italic\">ATA İHA Takımını</span> uluslararası başarılara taşımış ve <span className=\"text-white\">$50.000'ın üzerinde araştırma fonunu</span> yönetmiş biri olarak, inşa ettiğim her sisteme teknik ustalık ve stratejik liderliğin benzersiz birleşimini yansıtıyorum.",
    gpaLabel: "Akademik Ortalama",
    fundingLabel: "Araştırma Fonu",
    location: "Agawam, MA",
    role: "Gömülü Sistem Mühendisi",
  },
  skills: {
    titlePrefix: "Teknik ",
    titleHighlight: "Uzmanlık",
    subtitleCmd: "./uzmanlasilan_teknolojiler.sh",
    groups: [
      {
        title: "Gömülü Sistemler & Donanım",
        skills: ["STM32 / ARM Mimarisi", "Devre Tasarımı & PCB", "SPI / I2C / UART Protokolleri", "Arduino / RFID Sistemleri"]
      },
      {
        title: "Otonom & Görüntü İşleme",
        skills: ["ROS & Gazebo Simülasyonu", "OpenCV Görüntü İşleme", "İHA Mimarileri", "Otonom Navigasyon"]
      },
      {
        title: "Yazılım Mühendisliği",
        skills: ["C# / C++ / Python", "Unity Oyun Motoru", "Next.js & React", "SQL Server Yönetimi"]
      }
    ]
  },
  projects: {
    titlePrefix: "Öne Çıkan ",
    titleHighlight: "Mühendislik",
    titleSuffix: " Projeleri",
    items: [
      {
        title: "ATA İHA Takımı - Kurucu & Kaptan",
        tag: "OTONOM SİSTEMLER",
        desc: "Atatürk Üniversitesi'ni ABD, Maryland'deki uluslararası SUAS yarışmasında temsil eden multidisipliner bir mühendislik takımını yönettim. Tam otonom uçuş sistemleri geliştirmek için 50.000 dolardan fazla bilimsel araştırma fonu sağladım."
      },
      {
        title: "TÜBİTAK UME Gömülü Çözümler",
        tag: "DONANIM TASARIMI",
        desc: "Ulusal Metroloji Enstitüsü'nde yüksek hassasiyetli ölçüm için ARM tabanlı STM32 mikrodenetleyici sistemleri tasarladım. Gerçek zamanlı sensör izleme ve veri analizi için özel C# yer istasyonu arayüzleri geliştirdim."
      }
    ]
  },
  contact: {
    subtitle: "Baglantiyi_Baslat",
    titlePrefix: "İletişime ",
    titleHighlight: "Geçelim",
    description: "<span className=\"text-white\">Gömülü sistemler</span>, robotik veya potansiyel bir <span className=\"text-orange-400\">işbirliği</span> hakkında sorunuz varsa, gelen kutum her zaman açıktır.",
    location: "Agawam, MA 01001",
    links: {
      email: "Güvenli E-Posta Protokolü",
      linkedin: "Profesyonel Ağ",
      github: "Kaynak Kod Deposu"
    },
    footer: "RH.DEV © 2026 | Mühendislik Mükemmelliği"
  }
};

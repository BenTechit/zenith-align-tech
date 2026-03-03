export type Language = "en" | "he";

export const translations = {
  en: {
    nav: {
      home: "Home",
      businessIT: "Business IT",
      cloud: "Cloud & Backup",
      hardware: "Hardware & Repairs",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "Business IT Infrastructure Partner",
      headline1: "Business IT Infrastructure.",
      headline2: "Built Properly.",
      subtitle: "Microsoft 365 architecture, cloud strategy, advanced hardware expertise, and proactive IT management for businesses in Modi'in and across Israel.",
      ctaPrimary: "Schedule Consultation",
      ctaSecondary: "054-499-1540",
      stats: [
        { value: "Proactive", label: "Not Reactive" },
        { value: "Prevention", label: "First Approach" },
        { value: "Infrastructure", label: "Level Thinking" },
      ],
    },
    problem: {
      title: "Is Your IT Holding You Back?",
      subtitle: "Most businesses don't realize the risk until it's too late.",
      items: [
        "Hours of downtime with no response",
        "No real backup or disaster recovery plan",
        "Reactive fixes instead of prevention",
        "Poorly structured Microsoft 365 setup",
        "No strategic IT roadmap for growth",
      ],
    },
    services: {
      title: "Enterprise-Grade Services",
      subtitle: "Comprehensive IT solutions designed for businesses that take technology seriously.",
      cards: [
        {
          title: "Business IT & Microsoft 365",
          items: [
            "Microsoft 365 tenant architecture & migration",
            "Exchange Online, Teams & SharePoint setup",
            "User provisioning & license optimization",
            "Email security & compliance policies",
            "Endpoint management & device policies",
          ],
        },
        {
          title: "Cloud & Backup Strategy",
          items: [
            "Automated cloud backup solutions",
            "Disaster recovery planning & testing",
            "Azure AD & hybrid identity management",
            "Cloud storage architecture",
            "Business continuity framework",
          ],
        },
        {
          title: "Advanced Infrastructure",
          items: [
            "Network design & security hardening",
            "Server deployment & virtualization",
            "BIOS/UEFI, GPT/MBR disk architecture",
            "Hardware diagnostics & optimization",
            "Vendor coordination & procurement",
          ],
        },
      ],
    },
    hardware: {
      title: "Advanced Hardware & Repair",
      subtitle: "Deep technical capability that goes far beyond surface-level support.",
      items: [
        { title: "Motherboard-Level Diagnostics", desc: "Component-level fault isolation on laptop and desktop boards — not just part swapping." },
        { title: "SSD & NVMe Upgrades", desc: "Performance migrations with proper alignment, firmware verification, and TRIM optimization." },
        { title: "GPT/MBR & Disk Architecture", desc: "Partition table conversion, boot record repair, and disk structure optimization." },
        { title: "BIOS/UEFI Troubleshooting", desc: "Firmware-level configuration, secure boot management, and boot sequence resolution." },
        { title: "Data Recovery & Migration", desc: "Logical and physical recovery scenarios with forensic-grade tools and methodology." },
        { title: "Clean OS Deployments", desc: "Enterprise-grade Windows and macOS installations with driver optimization and security hardening." },
        { title: "Performance Optimization", desc: "Thermal management, resource allocation, and system tuning for peak workstation performance." },
        { title: "Business Workstation Builds", desc: "Custom-specced machines built for specific workflows — CAD, finance, development, creative." },
      ],
    },
    technical: {
      title: "Deep Technical Expertise.",
      titleAccent: "Not Just IT Support.",
      subtitle: "Infrastructure starts at the physical layer. Understanding hardware architecture isn't optional — it's foundational.",
      points: [
        { title: "Hardware Architecture = Business Stability", desc: "Proper disk structure, firmware configuration, and component health directly prevent costly failures." },
        { title: "Firmware-Level Troubleshooting", desc: "BIOS/UEFI issues cause silent failures that surface-level techs miss. We resolve them at the root." },
        { title: "The Physical Layer Matters", desc: "Cloud strategy built on unstable hardware is a liability. We ensure every layer is sound." },
        { title: "Preventive Diagnostics", desc: "Predictive failure analysis using S.M.A.R.T. data, thermal monitoring, and component stress testing." },
      ],
    },
    whyBentech: {
      title: "Why Bentech",
      subtitle: "The difference between having IT support and having an IT partner.",
      reasons: [
        { title: "Independent Consultant", desc: "Direct relationship with a senior engineer, not a call center ticket queue." },
        { title: "On-site in Modi'in", desc: "Local presence with hands-on support when it matters most." },
        { title: "Deep Technical Expertise", desc: "From BIOS-level diagnostics to cloud architecture — real depth." },
        { title: "Vendor Coordination", desc: "Direct communication with Microsoft, hardware vendors, and ISPs on your behalf." },
        { title: "Strategic Mindset", desc: "IT decisions aligned with your business goals, not just quick fixes." },
        { title: "Proactive, Not Reactive", desc: "Prevention-first approach that saves time, money, and stress." },
      ],
    },
    prevention: {
      title: "Reactive vs. Strategic IT",
      subtitle: "The cost of waiting is always higher than the cost of planning.",
      reactiveTitle: "Reactive IT",
      strategicTitle: "Strategic IT",
      reactive: [
        "Emergency calls at the worst times",
        "Data loss with no recovery path",
        "Unpredictable costs and downtime",
        "Band-aid fixes that never hold",
        "No visibility into infrastructure health",
      ],
      strategic: [
        "Scheduled maintenance and monitoring",
        "Automated backups with tested recovery",
        "Predictable costs and zero surprises",
        "Root-cause resolution, not patches",
        "Full infrastructure documentation",
      ],
    },
    cta: {
      title1: "Ready to Build IT",
      title2: "That Actually Works?",
      subtitle: "Schedule a consultation to discuss your infrastructure, identify risks, and build a plan that protects and grows your business.",
      ctaPrimary: "Start the Conversation",
      ctaSecondary: "054-499-1540",
    },
    footer: {
      tagline: "Business IT Infrastructure Partner — Modi'in, Israel",
      copyright: `© ${new Date().getFullYear()} Bentech. All rights reserved.`,
    },
  },
  he: {
    nav: {
      home: "ראשי",
      businessIT: "מחשוב עסקי",
      cloud: "ענן וגיבוי",
      hardware: "חומרה ותיקונים",
      about: "אודות",
      contact: "צור קשר",
    },
    hero: {
      badge: "שותף תשתיות IT לעסקים",
      headline1: "תשתיות IT לעסקים.",
      headline2: "בנויות כמו שצריך.",
      subtitle: "ארכיטקטורת Microsoft 365, אסטרטגיית ענן, מומחיות חומרה מתקדמת וניהול IT יזום לעסקים במודיעין וברחבי ישראל.",
      ctaPrimary: "לתיאום ייעוץ",
      ctaSecondary: "054-499-1540",
      stats: [
        { value: "יזום", label: "לא תגובתי" },
        { value: "מניעה", label: "גישה ראשונה" },
        { value: "תשתית", label: "חשיבה ברמת מערכת" },
      ],
    },
    problem: {
      title: "ה-IT שלך מעכב את העסק?",
      subtitle: "רוב העסקים לא מבינים את הסיכון — עד שכבר מאוחר.",
      items: [
        "שעות של השבתה ללא מענה",
        "אין גיבוי אמיתי או תוכנית שחזור",
        "תיקונים תגובתיים במקום מניעה",
        "מבנה Microsoft 365 לקוי",
        "אין תוכנית IT אסטרטגית לצמיחה",
      ],
    },
    services: {
      title: "שירותים ברמה ארגונית",
      subtitle: "פתרונות IT מקיפים לעסקים שלוקחים טכנולוגיה ברצינות.",
      cards: [
        {
          title: "מחשוב עסקי ו-Microsoft 365",
          items: [
            "ארכיטקטורה והגירה של Microsoft 365",
            "הקמת Exchange Online, Teams ו-SharePoint",
            "ניהול משתמשים ואופטימיזציית רישיונות",
            "אבטחת דוא\"ל ומדיניות תאימות",
            "ניהול נקודות קצה ומדיניות מכשירים",
          ],
        },
        {
          title: "אסטרטגיית ענן וגיבוי",
          items: [
            "פתרונות גיבוי אוטומטיים בענן",
            "תכנון ובדיקת שחזור מאסון",
            "ניהול Azure AD וזהות היברידית",
            "ארכיטקטורת אחסון בענן",
            "מסגרת המשכיות עסקית",
          ],
        },
        {
          title: "תשתיות מתקדמות",
          items: [
            "תכנון רשתות והקשחת אבטחה",
            "פריסת שרתים ווירטואליזציה",
            "ארכיטקטורת BIOS/UEFI ו-GPT/MBR",
            "אבחון חומרה ואופטימיזציה",
            "תיאום מול ספקים ורכש",
          ],
        },
      ],
    },
    hardware: {
      title: "חומרה מתקדמת ותיקונים",
      subtitle: "יכולת טכנית עמוקה שהולכת הרבה מעבר לתמיכה שטחית.",
      items: [
        { title: "אבחון ברמת לוח אם", desc: "זיהוי תקלות ברמת רכיב בלוחות אם של מחשבים ניידים ונייחים — לא רק החלפת חלקים." },
        { title: "שדרוגי SSD ו-NVMe", desc: "הגירת ביצועים עם יישור נכון, אימות קושחה ואופטימיזציית TRIM." },
        { title: "ארכיטקטורת GPT/MBR", desc: "המרת טבלאות מחיצות, תיקון רשומות אתחול ואופטימיזציה של מבנה הדיסק." },
        { title: "פתרון בעיות BIOS/UEFI", desc: "קונפיגורציה ברמת קושחה, ניהול Secure Boot ופתרון בעיות רצף אתחול." },
        { title: "שחזור והגירת נתונים", desc: "תרחישי שחזור לוגיים ופיזיים עם כלים ומתודולוגיה ברמה מקצועית." },
        { title: "התקנות מערכת הפעלה נקיות", desc: "התקנות Windows ו-macOS ברמה ארגונית עם אופטימיזציית דרייברים והקשחת אבטחה." },
        { title: "אופטימיזציית ביצועים", desc: "ניהול תרמי, הקצאת משאבים וכיוון מערכת לביצועי שיא של תחנות עבודה." },
        { title: "בניית תחנות עבודה עסקיות", desc: "מכונות מותאמות אישית לזרימות עבודה ספציפיות — CAD, פיננסים, פיתוח, עיצוב." },
      ],
    },
    technical: {
      title: "מומחיות טכנית עמוקה.",
      titleAccent: "לא סתם תמיכת IT.",
      subtitle: "תשתית מתחילה בשכבה הפיזית. הבנת ארכיטקטורת חומרה אינה אופציונלית — היא הבסיס.",
      points: [
        { title: "ארכיטקטורת חומרה = יציבות עסקית", desc: "מבנה דיסק נכון, קונפיגורציית קושחה ובריאות רכיבים מונעים ישירות כשלים יקרים." },
        { title: "פתרון בעיות ברמת קושחה", desc: "בעיות BIOS/UEFI גורמות לכשלים שקטים שטכנאים שטחיים מפספסים. אנחנו פותרים בשורש." },
        { title: "השכבה הפיזית חשובה", desc: "אסטרטגיית ענן שבנויה על חומרה לא יציבה היא חבות. אנחנו מוודאים שכל שכבה תקינה." },
        { title: "אבחון מונע", desc: "ניתוח כשלים חזוי באמצעות נתוני S.M.A.R.T., ניטור תרמי ובדיקות עומס רכיבים." },
      ],
    },
    whyBentech: {
      title: "למה Bentech",
      subtitle: "ההבדל בין תמיכת IT לבין שותף IT אמיתי.",
      reasons: [
        { title: "יועץ עצמאי", desc: "קשר ישיר עם מהנדס בכיר, לא תור של כרטיסי תמיכה במוקד." },
        { title: "נוכחות במודיעין", desc: "נוכחות מקומית עם תמיכה ידיים-על כשזה באמת חשוב." },
        { title: "מומחיות טכנית עמוקה", desc: "מאבחון ברמת BIOS ועד ארכיטקטורת ענן — עומק אמיתי." },
        { title: "תיאום מול ספקים", desc: "תקשורת ישירה עם Microsoft, ספקי חומרה וספקי אינטרנט מטעמכם." },
        { title: "חשיבה אסטרטגית", desc: "החלטות IT שמותאמות ליעדים העסקיים שלכם, לא רק תיקונים מהירים." },
        { title: "יזום, לא תגובתי", desc: "גישה של מניעה קודם שחוסכת זמן, כסף ולחץ." },
      ],
    },
    prevention: {
      title: "IT תגובתי מול IT אסטרטגי",
      subtitle: "העלות של לחכות תמיד גבוהה מהעלות של לתכנן.",
      reactiveTitle: "IT תגובתי",
      strategicTitle: "IT אסטרטגי",
      reactive: [
        "שיחות חירום בתזמון הכי גרוע",
        "אובדן נתונים ללא אפשרות שחזור",
        "עלויות בלתי צפויות והשבתות",
        "תיקונים זמניים שלעולם לא מחזיקים",
        "אפס נראות למצב התשתית",
      ],
      strategic: [
        "תחזוקה מתוזמנת וניטור שוטף",
        "גיבויים אוטומטיים עם שחזור מאומת",
        "עלויות צפויות ואפס הפתעות",
        "פתרון שורש הבעיה, לא טלאים",
        "תיעוד תשתית מלא",
      ],
    },
    cta: {
      title1: "מוכנים לבנות IT",
      title2: "שבאמת עובד?",
      subtitle: "תאמו ייעוץ כדי לדון בתשתית שלכם, לזהות סיכונים ולבנות תוכנית שמגנה ומצמיחה את העסק.",
      ctaPrimary: "בואו נתחיל שיחה",
      ctaSecondary: "054-499-1540",
    },
    footer: {
      tagline: "שותף תשתיות IT לעסקים — מודיעין, ישראל",
      copyright: `© ${new Date().getFullYear()} Bentech. כל הזכויות שמורות.`,
    },
  },
} as const;

export type Translations = (typeof translations)["en"];

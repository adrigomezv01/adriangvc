export const personalInfo = {
  name: "Adrián Gómez-Valadés Castaño",
  title: "Junior IAM & Cybersecurity Analyst",
  subtitle:
    "Specialized in Identity & Access Management and digital forensics (DFIR). Hands-on experience with SailPoint IdentityIQ · Microsoft SC-900 & AZ-900 certified.",
  location: "Extremadura — Spain",
  availability: "Available immediately · Open to relocation",
  email: "gvcadrian@gmail.com",
  linkedin: "https://www.linkedin.com/in/adriangvc/",
  github: "https://github.com/adrigomezv01",
  portfolio: "https://adriangvc.com",
};

export const skills = [
  {
    category: "Identity & Access Management",
    icon: "shield-check",
    primary: true,
    items: [
      "SailPoint IdentityIQ",
      "Microsoft Entra ID",
      "Active Directory",
      "RBAC / ABAC",
      "Zero Trust",
      "SoD / Access Reviews",
      "LDAP",
      "Automated Provisioning",
    ],
  },
  {
    category: "Cloud & Azure Security",
    icon: "cloud",
    primary: true,
    items: [
      "Microsoft Azure",
      "AZ-900 · SC-900",
      "Conditional Access",
      "MFA / SSPR",
      "Azure Security Center",
      "Microsoft Sentinel",
    ],
  },
  {
    category: "DFIR & Blue Team",
    icon: "search",
    primary: false,
    items: [
      "Volatility 3",
      "Autopsy",
      "Memory Forensics",
      "Disk Forensics",
      "Incident Response",
      "Windows Forensics",
    ],
  },
  {
    category: "Systems & Networking",
    icon: "server",
    primary: false,
    items: [
      "Windows Server",
      "Linux (Ubuntu/Debian)",
      "GPOs / DNS / DHCP",
      "VMware / VirtualBox",
      "TCP/IP · Firewall",
      "PowerShell",
    ],
  },
  {
    category: "Development & Tools",
    icon: "code",
    primary: false,
    items: [
      "Python (basic)",
      "Next.js / React",
      "TypeScript",
      "Git / GitHub",
      "BeanShell / Java (basic)",
      "Jira / Confluence",
    ],
  },
];

export const experience = [
  {
    title: "IAM Consultant",
    type: "Internship",
    company: "STEMDO — Technology Consulting",
    period: "Mar — May 2025",
    location: "Mérida, Spain",
    description:
      "Implementation and configuration of SailPoint IdentityIQ on a real enterprise client project.",
    bullets: [
      "Designed RBAC role models and defined access policies in SailPoint IdentityIQ for an enterprise client.",
      "Managed AD/LDAP connectors for identity synchronization and automated provisioning.",
      "Analyzed and resolved Segregation of Duties (SoD) conflicts applying Zero Trust principles.",
      "Participated in Access Reviews and documented IAM processes aligned with security controls.",
    ],
    tags: ["SailPoint IdentityIQ", "RBAC", "Active Directory", "LDAP", "Zero Trust", "SoD"],
  },
  {
    title: "Systems Technician",
    type: "ASIR Internship",
    company: "SIE Informática",
    period: "2024",
    location: "Córdoba, Spain",
    description: "Windows Server infrastructure administration and technical support.",
    bullets: [
      "Administered Windows Server environment: Active Directory, GPOs, DNS and DHCP in a corporate setting.",
      "Provided N1/N2 technical support, system monitoring and incident management for network and security issues.",
    ],
    tags: ["Windows Server", "Active Directory", "GPOs", "DNS/DHCP"],
  },
  {
    title: "SMR Technician",
    type: "Internship",
    company: "SPEXTREM",
    period: "2022",
    location: "Don Benito, Spain",
    description: "Hardware/software maintenance and end-user support.",
    bullets: [
      "Hardware/software maintenance, local network management and end-user technical support.",
    ],
    tags: ["Hardware", "Networking", "Support"],
  },
];

export const projects = [
  {
    title: "VolatixLab",
    subtitle: "Personal DFIR Laboratory",
    description:
      "Hands-on forensics and Incident Response lab built with enterprise-grade tools. Simulates real-world compromise scenarios, performs RAM and disk analysis, and produces technical case documentation in Spanish.",
    bullets: [
      "RAM forensics with Volatility 3: detection of malicious processes, extraction of network artifacts and credentials from Windows memory dumps.",
      "Disk artifact investigation with Autopsy: registry, prefetch, shellbags and forensic timeline analysis.",
      "Technical case documentation in Spanish for training and professional practice.",
    ],
    tags: ["Volatility 3", "Autopsy", "DFIR", "Incident Response", "Windows Forensics", "Memory Analysis"],
    status: "Active",
    link: "https://github.com/adrigomezv01/VolatixLab",
  },
  {
    title: "adriangvc.com",
    subtitle: "Personal Brand & Web Development",
    description:
      "Professional portfolio built from scratch with Next.js 14, TypeScript and Tailwind CSS. Premium dark mode design, Framer Motion animations and deployed on Vercel.",
    bullets: [
      "Next.js 14 App Router architecture with strict TypeScript and Tailwind CSS.",
      "Animations and transitions with Framer Motion for a premium experience.",
      "SEO optimization, OpenGraph metadata and performance via Vercel Edge Network.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    status: "Active",
    link: "https://adriangvc.com",
  },
];

export const certifications = [
  {
    name: "Microsoft Security, Compliance & Identity Fundamentals",
    code: "SC-900",
    issuer: "Microsoft",
    year: "2025",
    status: "obtained",
    color: "blue",
  },
  {
    name: "Microsoft Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    year: "2025",
    status: "obtained",
    color: "blue",
  },
  {
    name: "SailPoint IdentityIQ — Specialized Training",
    code: "IAM Bootcamp",
    issuer: "SailPoint",
    year: "2025",
    status: "obtained",
    color: "cyan",
  },
  {
    name: "Microsoft Azure Security Technologies",
    code: "AZ-500",
    issuer: "Microsoft",
    year: "2026",
    status: "in-progress",
    color: "amber",
  },
];

export const education = [
  {
    title: "Cybersecurity in ICT Environments — Specialization (CETI)",
    institution: "IES Castelar",
    location: "Córdoba",
    period: "2024 — 2025",
  },
  {
    title: "Higher Technician in Network Systems Administration (ASIR)",
    institution: "Spain",
    period: "2022 — 2024",
  },
  {
    title: "Technician in Microcomputer Systems and Networks (SMR)",
    institution: "Spain",
    period: "2020 — 2022",
  },
];

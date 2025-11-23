import { Job, Education, SkillData, Certification } from './types';
import { Briefcase, Code, Database, Layout, TrendingUp, Cpu, ShieldCheck } from 'lucide-react';

export const HERO_DATA = {
  name: "Anthony Boakye",
  title: "Innovation Unit Head & Tech Strategist",
  tagline: "Bridging the gap between Business Administration and Digital Transformation.",
  subtext: "Dynamic professional with a strong foundation in Banking, Data Analysis, and UI/UX Design. Passionate about driving efficiency through AI, Innovation, and Automation.",
  contact: {
    email: "anthboakye@gmail.com",
    phone: "+233-240-55-7537",
    location: "Accra, Ghana",
    linkedin: "www.linkedin.com/in/aboakye"
  }
};

export const EXPERIENCE_DATA: Job[] = [
  {
    id: '1',
    company: "OmniBSIC Bank Ghana",
    role: "Innovation (CX Transformation)",
    period: "Nov 2024 – Present",
    location: "Accra, Ghana",
    link: "https://omnibsic.com.gh/",
    description: [
      "Led digital transformation across key customer-facing channels.",
      "Delivered prototypes and FRDs for Internet Banking, Mobile App, USSD, and Website.",
      "Researched and recommended emerging CX trends.",
      "Drove cross-functional process reviews across 20+ departments to resolve inefficiencies."
    ],
    techStack: ["Internet & Mobile Banking", "Prototyping", "AI Strategy", "Fintech Partnerships", "Process Improvement", "Product Development"]
  },
  {
    id: '2',
    company: "Parliament of Ghana",
    role: "National Service Personnel - Administration",
    period: "Nov 2023 – Oct 2024",
    location: "Accra, Ghana",
    link: "https://www.parliament.gh/",
    description: [
      "Managed data and records within the Administration Department ensuring accuracy.",
      "Received and dispatched memos promptly, maintaining efficient communication flow.",
      "Facilitated tasks and addressed queries for staff members."
    ],
    techStack: ["Data Management", "Public Sector Admin"]
  },
  {
    id: '3',
    company: "Strategic Business Process Solutions (SBP)",
    role: "Intern - Administration",
    period: "Oct 2022 – Jan 2023",
    location: "Accra, Ghana",
    link: "https://sbpafrica.group/",
    description: [
      "Developed customized Excel VBA software to automate contract tracking.",
      "Significantly reduced manual work and improved efficiency for employees.",
      "Successfully renewed and updated existing contracts."
    ],
    techStack: ["VBA", "Automation", "Excel", "Process Improvement"]
  },
  {
    id: '4',
    company: "Star Micro Insurance",
    role: "Intern - Administration",
    period: "Oct 2021 – Dec 2021",
    location: "Accra, Ghana",
    link: "https://starmicroinsurancegh.com/",
    description: [
      "Used Ms. Excel effectively to clear backlogs of data spanning over 10 years.",
      "Conducted research on industry trends to develop marketing solutions.",
      "Executed optimal sales strategies to achieve commercial goals."
    ],
    techStack: ["Data Cleansing", "Market Research", "Excel"]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    institution: "Kwame Nkrumah University of Science and Technology",
    degree: "BSc. Business Administration (International Business Management)",
    period: "Sept 2019 - Oct 2023",
    location: "Kumasi, Ghana"
  }
];

export const SKILLS_CHART_DATA: SkillData[] = [
  { subject: 'Data Analysis', A: 95, fullMark: 100 },
  { subject: 'UI/UX Design', A: 90, fullMark: 100 },
  { subject: 'Fintech', A: 85, fullMark: 100 },
  { subject: 'VBA/Automation', A: 88, fullMark: 100 },
  { subject: 'Proj Mgmt', A: 80, fullMark: 100 },
  { subject: 'IT Proficiency', A: 92, fullMark: 100 },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate" },
  { name: "ISO/IEC 27001:2022 – ISMS FOUNDATION" },
  { name: "Professional Diploma in Digital Products Management – MTF" },
  { name: "Professional Diploma in Digitalization of Retail Banking – MTF" },
  { name: "Introduction to Artificial Intelligence – IBM" },
  { name: "Global Collaboration Certificate - X-Culture Project" }
];

export const SERVICE_ICONS = {
  Innovation: Cpu,
  Data: Database,
  Design: Layout,
  Strategy: TrendingUp,
  Security: ShieldCheck,
  Business: Briefcase
};

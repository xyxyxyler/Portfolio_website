export interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  link?: string;
  techStack?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'deep-learning' | 'nlp' | 'computer-vision' | 'mlops' | 'data-science' | 'reinforcement-learning' | 'machine-learning';
  metrics: { label: string; value: string }[];
  technologies: string[];
  github?: string;
  demo?: string;
  paper?: string;
  image: string;
  featured: boolean;
  year: number;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'framework' | 'language' | 'tool' | 'cloud' | 'concept';
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'full-time' | 'contract' | 'internship' | 'research';
  description: string;
  achievements: string[];
  stack: string[];
  logo?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'preprint' | 'workshop';
  abstract: string;
  doi?: string;
  arxiv?: string;
  citations?: number;
  tags: string[];
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

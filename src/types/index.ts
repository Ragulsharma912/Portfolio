// Shared TypeScript types used across the portfolio.

export interface NavLink {
  id: string;
  label: string;
}

export interface InfoCard {
  icon: string;
  title: string;
  subtitle: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  description?: string;
}

export interface ExperienceAchievement {
  icon: string;
  text: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  achievements: ExperienceAchievement[];
  skills: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export type ProjectCategory = 'ai' | 'iot' | 'automation' | 'analytics';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  features: string[];
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  icon: string;
  color: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Language {
  name: string;
  level: string;
  proficiency: number; // 0-100
  flag: string;
}

export interface Achievement {
  icon: string;
  value: number;
  suffix: string;
  label: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}

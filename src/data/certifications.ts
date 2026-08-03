import type { Certification, EducationItem, Language, Achievement } from '../types';

export const certifications: Certification[] = [
  {
    id: 'omnex',
    title: 'Certified Automotive Core Tools Engineer',
    issuer: 'OMNEX',
    year: '2023',
    icon: 'Award',
    color: 'from-primary-500 to-secondary',
  },
  {
    id: 'jlpt',
    title: 'Japanese Language Proficiency (N5)',
    issuer: 'JLPT',
    year: '2022',
    icon: 'Languages',
    color: 'from-accent to-primary-500',
  },
  {
    id: 'iatf-auditor',
    title: 'Internal IATF Auditor',
    issuer: 'TÜV SÜD',
    year: '2023',
    icon: 'ShieldCheck',
    color: 'from-success to-secondary',
  },
];

export const education: EducationItem[] = [
  {
    id: 'mba',
    degree: 'MBA - Business Analytics',
    institution: 'Amity University Online',
    period: '2025 – 2027',
    description: 'Specialized in data-driven decision making and business intelligence for manufacturing operations.',
  },
  {
    id: 'be',
    degree: 'Bachelor of Engineering - Mechatronics Engineering',
    institution: 'Sona College of Technology',
    period: '2019 – 2022',
    description: 'Foundational engineering degree combining mechanical, electronics, and automation systems.',
  },
];

export const languages: Language[] = [
  { name: 'Tamil', level: 'Native', proficiency: 100, flag: '🇮🇳' },
  { name: 'English', level: 'Fluent', proficiency: 90, flag: '🇬🇧' },
  { name: 'Japanese', level: 'Elementary (N5)', proficiency: 40, flag: '🇯🇵' },
  { name: 'German', level: 'Beginner', proficiency: 25, flag: '🇩🇪' },
];

export const achievements: Achievement[] = [
  { icon: 'CalendarClock', value: 4, suffix: '+', label: 'Years Experience' },
  { icon: 'TrendingUp', value: 100, suffix: '+', label: 'Process Improvements' },
  { icon: 'Leaf', value: 50, suffix: '+', label: 'Kaizen Events' },
  { icon: 'Rocket', value: 20, suffix: '+', label: 'New Product Launches' },
  { icon: 'Gauge', value: 15, suffix: '%', label: 'Avg. OEE Improvement' },
  { icon: 'Users', value: 30, suffix: '+', label: 'Suppliers Developed' },
];

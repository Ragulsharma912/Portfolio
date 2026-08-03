import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: 'Factory',
    skills: [
      { name: 'APQP', level: 90 },
      { name: 'PPAP', level: 90 },
      { name: 'PFMEA', level: 93 },
      { name: 'Control Plan', level: 95 },
      { name: 'PFD', level: 90 },
      { name: 'SPC', level: 85 },
      { name: 'MSA', level: 85 },
      { name: 'Lean Manufacturing', level: 80 },
      { name: 'Kaizen', level: 92 },
      { name: 'Industrialization', level: 90 },
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    icon: 'Ruler',
    skills: [
      { name: 'AutoCAD', level: 88 },
      { name: 'GD&T', level: 82 },
      { name: 'Engineering Drawings', level: 90 },
      { name: 'DFM', level: 85 },
      { name: 'Manufacturing Feasibility', level: 87 },
    ],
  },
  {
    id: 'software',
    title: 'Software',
    icon: 'Laptop',
    skills: [
      { name: 'Power BI', level: 70 },
      { name: 'Excel Advanced', level: 90 },
      { name: 'SAP', level: 78 },
      { name: 'AutoCAD', level: 88 },
      { name: 'IoT Development', level: 88 },
    ],
  },
];

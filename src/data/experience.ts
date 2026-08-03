import type { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'uno-minda',
    role: 'Senior Officer',
    company: 'Uno Minda Limited',
    period: 'Jun 2022 – Present',
    location: 'Automotive Seating Manufacturing',
    summary:
      'Leading process and manufacturing engineering initiatives across new product industrialization, quality core tools, and AI-driven process automation for automotive seating systems.',
    achievements: [
      { icon: 'Rocket', text: 'Drove Product Development & Industrialization for 20+ new automotive seating programs' },
      { icon: 'ClipboardCheck', text: 'Led APQP and PPAP submissions ensuring on-time, first-pass approval from OEM customers' },
      { icon: 'AlertTriangle', text: 'Authored AIAG-VDA PFMEA and Control Plans to proactively mitigate process risks' },
      { icon: 'LineChart', text: 'Implemented SPC and MSA studies to strengthen process capability and measurement accuracy' },
      { icon: 'Leaf', text: 'Championed Lean Manufacturing and Kaizen events, improving OEE and reducing cycle time' },
      { icon: 'Users', text: 'Managed Supplier Quality development for Injection Moulding and Ultrasonic Welding processes' },
      { icon: 'FlaskConical', text: 'Executed Process Validation studies (Injection Moulding, Ultrasonic Welding) for robust launches' },
      { icon: 'Ruler', text: 'Designed AutoCAD manufacturing layouts to optimize plant floor and material flow' },
      { icon: 'TrendingUp', text: 'Delivered continuous Process Optimization and Cost Reduction projects with measurable savings' },
      { icon: 'Search', text: 'Led Root Cause Analysis, 8D, and CAPA closures to eliminate recurring quality escapes' },
      { icon: 'Bot', text: 'Deployed Process Automation and Poka-Yoke solutions to error-proof manual operations' },
    ],
    skills: [
      'APQP', 'PPAP', 'AIAG-VDA PFMEA', 'Control Plan', 'SPC', 'MSA',
      'Lean Manufacturing', 'Kaizen', 'Supplier Quality', 'Injection Moulding',
      'Ultrasonic Welding', 'Process Validation', 'AutoCAD Layout',
      'Process Optimization', 'OEE Improvement', 'Cost Reduction',
      'Root Cause Analysis', '8D', 'CAPA', 'Process Automation', 'Poka-Yoke',
    ],
  },
];

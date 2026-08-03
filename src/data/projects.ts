import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'manufacturing-ai-copilot',
    title: 'Manufacturing AI Copilot',
    category: 'ai',
    description:
      'An AI-powered manufacturing assistant that helps engineers predict failures, inspect quality in real time, and generate digital work instructions automatically.',
    features: [
      'Predictive Maintenance',
      'AI Quality Inspection',
      'Digital Work Instructions',
      'PFMEA Generator',
      'Root Cause Analysis',
      'Dashboard Analytics',
      'AWS Integration',
    ],
    tech: ['React', 'Python', 'AWS', 'TensorFlow', 'FastAPI'],
    image: '/images/projects/ai-copilot.jpg',
    github: 'https://github.com/ragulsharmam/manufacturing-ai-copilot',
    demo: '#',
    featured: true,
  },
  {
    id: 'digital-work-instruction-ai',
    title: 'Digital Work Instruction AI',
    category: 'ai',
    description:
      'AI system that auto-generates step-by-step digital work instructions from process routing data, reducing documentation time by 70%.',
    features: [
      'Auto-generated SOPs',
      'Multi-language Support',
      'Version Control',
      'Operator Feedback Loop',
    ],
    tech: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    image: '/images/projects/dwi-ai.jpg',
    github: 'https://github.com/ragulsharmam/digital-work-instruction-ai',
    demo: '#',
  },
  {
    id: 'ai-pfmea-generator',
    title: 'AI PFMEA Generator',
    category: 'ai',
    description:
      'A tool that leverages historical failure data and AIAG-VDA guidelines to auto-draft PFMEA sheets, accelerating APQP documentation.',
    features: [
      'AIAG-VDA Compliant',
      'Historical Failure Database',
      'Risk Priority Scoring',
      'Export to Excel/PDF',
    ],
    tech: ['Python', 'React', 'PostgreSQL', 'scikit-learn'],
    image: '/images/projects/pfmea-ai.jpg',
    github: 'https://github.com/ragulsharmam/ai-pfmea-generator',
    demo: '#',
  },
  {
    id: 'industry-4-iot-dashboard',
    title: 'Industry 4.0 IoT Dashboard',
    category: 'iot',
    description:
      'Real-time IoT dashboard monitoring OEE, machine health, and production KPIs across the shop floor with live alerting.',
    features: [
      'Real-time OEE Monitoring',
      'Machine Health Sensors',
      'Live Alerts',
      'Historical Trend Analysis',
    ],
    tech: ['React', 'Node-RED', 'MQTT', 'InfluxDB', 'Grafana'],
    image: '/images/projects/iot-dashboard.jpg',
    github: 'https://github.com/ragulsharmam/industry4-iot-dashboard',
    demo: '#',
  },
];

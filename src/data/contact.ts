import type { ContactInfo } from '../types';
import { profile } from './profile';

export const contactInfoList: ContactInfo[] = [
  { icon: 'Mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'Phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: 'Linkedin', label: 'LinkedIn', value: 'ragulsharma', href: profile.linkedin },
  { icon: 'Github', label: 'GitHub', value: 'ragulsharma', href: profile.github },
  { icon: 'MapPin', label: 'Location', value: profile.location, href: '#' },
];

// EmailJS configuration - replace with your own service/template/public key from https://emailjs.com
export const emailjsConfig = {
  serviceId: 'YOUR_EMAILJS_SERVICE_ID',
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
};

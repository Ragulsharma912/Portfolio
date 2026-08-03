import type { LucideProps } from 'lucide-react';
import {
  CalendarClock,
  BadgeCheck,
  GraduationCap,
  Car,
  Cpu,
  Leaf,
  Sparkles,
  ShieldCheck,
  Rocket,
  ClipboardCheck,
  AlertTriangle,
  LineChart,
  Users,
  FlaskConical,
  Ruler,
  TrendingUp,
  Search,
  Bot,
  Factory,
  Laptop,
  Award,
  Languages,
  Gauge,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
} from 'lucide-react';

// Static icon registry: only icons actually referenced by data files are imported by name,
// which keeps lucide-react tree-shakeable instead of bundling the entire icon set.
const iconMap = {
  CalendarClock,
  BadgeCheck,
  GraduationCap,
  Car,
  Cpu,
  Leaf,
  Sparkles,
  ShieldCheck,
  Rocket,
  ClipboardCheck,
  AlertTriangle,
  LineChart,
  Users,
  FlaskConical,
  Ruler,
  TrendingUp,
  Search,
  Bot,
  Factory,
  Laptop,
  Award,
  Languages,
  Gauge,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
} as const;

interface IconProps extends LucideProps {
  name: string;
}

/**
 * Resolves a lucide-react icon by its string name (as stored in data files),
 * so data and presentation stay decoupled while keeping the bundle tree-shakeable.
 */
export default function Icon({ name, ...props }: IconProps) {
  const LucideIcon = iconMap[name as keyof typeof iconMap];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon {...props} />;
}

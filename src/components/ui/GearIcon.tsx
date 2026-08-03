import { motion } from 'framer-motion';
import { Settings, Cog } from 'lucide-react';

interface GearIconProps {
  size?: number;
  className?: string;
  reverse?: boolean;
  duration?: number;
  variant?: 'settings' | 'cog';
}

/** Slowly-rotating gear icon used as a decorative manufacturing motif. */
export default function GearIcon({
  size = 48,
  className = '',
  reverse = false,
  duration = 14,
  variant = 'settings',
}: GearIconProps) {
  const IconComp = variant === 'cog' ? Cog : Settings;
  return (
    <motion.div
      className={className}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      <IconComp size={size} strokeWidth={1} className="text-secondary/25" />
    </motion.div>
  );
}

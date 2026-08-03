import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

/** Reusable glassmorphism card with an optional hover lift effect. */
export default function GlassCard({ children, className = '', hover = true, onClick }: GlassCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -6, transition: { duration: 0.25 } } : undefined}
      className={`glass-card p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}

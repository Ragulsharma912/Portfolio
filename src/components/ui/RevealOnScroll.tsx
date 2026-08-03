import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';

interface RevealOnScrollProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const directionOffsets: Record<Direction, Record<string, number>> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  scale: {},
  none: {},
};

/** Generic scroll-triggered reveal animation used for cards, list items, and images. */
export default function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
}: RevealOnScrollProps) {
  const offset = directionOffsets[direction];
  const initial = { opacity: 0, ...offset, ...(direction === 'scale' ? { scale: 0.85 } : {}) };
  const animate = { opacity: 1, y: 0, x: 0, scale: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

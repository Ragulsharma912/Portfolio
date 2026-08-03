import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface ParticlesFieldProps {
  count?: number;
  className?: string;
}

/** Lightweight decorative floating-particle field (pure CSS/SVG, no canvas dependency). */
export default function ParticlesField({ count = 30, className = '' }: ParticlesFieldProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 5,
      })),
    [count]
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-secondary/60 shadow-glow-cyan"
          style={{ width: p.size, height: p.size, top: `${p.top}%`, left: `${p.left}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

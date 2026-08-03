import { useId } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CircularProgressProps {
  value: number; // 0 - 100
  label: string;
  size?: number;
  strokeWidth?: number;
}

/** Circular skill chart using an animated SVG stroke-dashoffset reveal. */
export default function CircularProgress({
  value,
  label,
  size = 120,
  strokeWidth = 8,
}: CircularProgressProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const gradientId = useId();
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={`url(#circular-gradient-${gradientId})`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: inView ? offset : circumference }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id={`circular-gradient-${gradientId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-white">{inView ? value : 0}%</span>
        </div>
      </div>
      <span className="text-sm font-medium text-gray-300 text-center">{label}</span>
    </div>
  );
}

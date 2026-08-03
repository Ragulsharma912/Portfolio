import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProgressBarProps {
  label: string;
  level: number; // 0 - 100
  delay?: number;
}

/** Animated horizontal skill progress bar that fills in when scrolled into view. */
export default function ProgressBar({ label, level, delay = 0 }: ProgressBarProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-gray-200">{label}</span>
        <span className="text-secondary font-semibold">{inView ? `${level}%` : '0%'}</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 via-secondary to-accent shadow-glow"
        />
      </div>
    </div>
  );
}

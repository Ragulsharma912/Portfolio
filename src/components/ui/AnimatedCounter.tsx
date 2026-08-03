import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

/** Animates a number counting up from 0 when it scrolls into view. */
export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp end={value} duration={duration} prefix={prefix} suffix={suffix} />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}

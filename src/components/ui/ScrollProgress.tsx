import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin gradient progress bar fixed to the top of the viewport, tracking scroll position. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-primary-500 via-secondary to-accent z-[60]"
    />
  );
}

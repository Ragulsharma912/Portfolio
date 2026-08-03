import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Renders a soft glow that follows the mouse cursor for a premium, futuristic feel.
 * Disabled on touch devices automatically (no mousemove events fire there).
 */
export default function CursorGlow() {
  const [isTouch, setIsTouch] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { damping: 30, stiffness: 200 });
  const springY = useSpring(y, { damping: 30, stiffness: 200 });

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [x, y]);

  if (isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[45] h-72 w-72 rounded-full mix-blend-screen"
      style={{
        translateX: springX,
        translateY: springY,
        x: '-50%',
        y: '-50%',
        background:
          'radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(34,211,238,0.08) 45%, transparent 70%)',
      }}
    />
  );
}

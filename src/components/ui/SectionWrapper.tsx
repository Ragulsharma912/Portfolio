import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

const containerVariants = {
  hidden: {},
  visible: {},
};

/**
 * Wraps a page section with consistent spacing, an optional heading block,
 * and a scroll-triggered fade/slide-up reveal animation.
 */
export default function SectionWrapper({
  id,
  children,
  className = '',
  eyebrow,
  title,
  subtitle,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative section-padding ${className}`}>
      <div className="section-container">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            variants={containerVariants}
            className="mb-14 text-center flex flex-col items-center"
          >
            {eyebrow && (
              <span className="chip mb-4 border-secondary/30 text-secondary">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="section-title">
                <span className="text-white">{title}</span>
              </h2>
            )}
            {subtitle && <p className="section-subtitle mx-auto text-center">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

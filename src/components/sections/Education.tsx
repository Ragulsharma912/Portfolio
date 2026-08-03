import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import RevealOnScroll from '../ui/RevealOnScroll';
import { education } from '../../data/certifications';

/** Education timeline with animated graduation-cap markers. */
export default function Education() {
  return (
    <SectionWrapper
      id="education"
      eyebrow="Academics"
      title="Education"
      subtitle="A strong foundation in engineering, extended with a business analytics MBA."
    >
      <div className="relative mx-auto max-w-3xl space-y-10">
        <div className="absolute left-6 top-2 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-primary-500 via-secondary to-transparent" />
        {education.map((edu, i) => (
          <RevealOnScroll key={edu.id} direction="up" delay={i * 0.12} className="relative pl-16">
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary shadow-glow"
            >
              <GraduationCap size={20} className="text-white" />
            </motion.div>
            <div className="glass-card !p-6">
              <span className="chip mb-2">{edu.period}</span>
              <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
              <p className="mt-1 font-medium text-secondary">{edu.institution}</p>
              {edu.description && <p className="mt-2 text-sm text-gray-400">{edu.description}</p>}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import RevealOnScroll from '../ui/RevealOnScroll';
import Icon from '../ui/Icon';
import { certifications } from '../../data/certifications';

/** Certifications section with animated glowing badge cards. */
export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      eyebrow="Credentials"
      title="Certifications"
      subtitle="Recognized qualifications validating core automotive quality and process expertise."
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <RevealOnScroll key={cert.id} direction="up" delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card group relative flex flex-col items-center gap-4 overflow-hidden !p-8 text-center"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
              />
              <motion.div
                animate={{ boxShadow: ['0 0 0px rgba(56,189,248,0.3)', '0 0 30px rgba(56,189,248,0.5)', '0 0 0px rgba(56,189,248,0.3)'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${cert.color}`}
              >
                <Icon name={cert.icon} size={32} className="text-white" />
              </motion.div>
              <div>
                <h3 className="font-bold text-white">{cert.title}</h3>
                <p className="mt-1 text-sm text-secondary">{cert.issuer}</p>
                <p className="mt-1 text-xs text-gray-500">{cert.year}</p>
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

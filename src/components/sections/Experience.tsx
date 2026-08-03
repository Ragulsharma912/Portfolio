import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import RevealOnScroll from '../ui/RevealOnScroll';
import Icon from '../ui/Icon';
import { experiences } from '../../data/experience';

/** Experience section: vertical animated timeline with achievement icons and skill chips. */
export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      eyebrow="Career Journey"
      title="Professional Experience"
      subtitle="Hands-on impact across product development, quality systems, and manufacturing excellence."
    >
      <div className="relative mx-auto max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary-500 via-secondary to-accent/30 sm:left-1/2" />

        {experiences.map((exp, idx) => (
          <div key={exp.id} className="relative mb-16 pl-16 sm:pl-0">
            {/* Node */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute left-6 top-1 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary shadow-glow sm:left-1/2"
            >
              <Briefcase size={12} className="text-white" />
            </motion.div>

            <RevealOnScroll direction={idx % 2 === 0 ? 'right' : 'left'}>
              <GlassCard className="sm:ml-0" hover={false}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="font-medium text-secondary">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="chip">{exp.period}</span>
                    {exp.location && (
                      <p className="mt-1.5 flex items-center justify-end gap-1 text-xs text-gray-500">
                        <MapPin size={12} /> {exp.location}
                      </p>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-400">{exp.summary}</p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {exp.achievements.map((a, i) => (
                    <motion.div
                      key={a.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex items-start gap-2.5 text-sm text-gray-300"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                        <Icon name={a.icon} size={13} />
                      </span>
                      {a.text}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="chip">{skill}</span>
                  ))}
                </div>
              </GlassCard>
            </RevealOnScroll>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

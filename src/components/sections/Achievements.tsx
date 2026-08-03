import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import AnimatedCounter from '../ui/AnimatedCounter';
import Icon from '../ui/Icon';
import { achievements } from '../../data/certifications';

/** Achievements section: animated statistic cards summarizing overall career impact. */
export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      eyebrow="Impact"
      title="Achievements in Numbers"
      subtitle="Measurable outcomes delivered through process discipline and continuous improvement."
      className="bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"
    >
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {achievements.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-card flex flex-col items-center gap-3 !p-6 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500/20 to-secondary/20">
              <Icon name={item.icon} size={22} className="text-secondary" />
            </div>
            <p className="text-2xl font-bold text-gradient sm:text-3xl">
              <AnimatedCounter value={item.value} suffix={item.suffix} />
            </p>
            <p className="text-xs leading-snug text-gray-400">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

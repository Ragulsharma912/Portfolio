import SectionWrapper from '../ui/SectionWrapper';
import RevealOnScroll from '../ui/RevealOnScroll';
import GlassCard from '../ui/GlassCard';
import ProgressBar from '../ui/ProgressBar';
import { languages } from '../../data/certifications';

/** Languages section presented as professional cards with proficiency bars. */
export default function Languages() {
  return (
    <SectionWrapper
      id="languages"
      eyebrow="Communication"
      title="Languages"
      subtitle="Comfortable collaborating across multicultural, global manufacturing teams."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {languages.map((lang, i) => (
          <RevealOnScroll key={lang.name} direction="up" delay={i * 0.08}>
            <GlassCard className="text-center">
              <span className="text-4xl">{lang.flag}</span>
              <h3 className="mt-3 font-bold text-white">{lang.name}</h3>
              <p className="mb-4 text-xs text-gray-400">{lang.level}</p>
              <ProgressBar label="" level={lang.proficiency} />
            </GlassCard>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

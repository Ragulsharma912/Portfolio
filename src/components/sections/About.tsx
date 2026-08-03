import clsx from 'clsx';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import RevealOnScroll from '../ui/RevealOnScroll';
import AnimatedCounter from '../ui/AnimatedCounter';
import Icon from '../ui/Icon';
import { infoCards, aboutCounters, aboutTimeline } from '../../data/about';
import { profile } from '../../data/profile';

/** About section: photo, bio, info cards, animated timeline, and stat counters. */
export default function About() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About Me"
      title="Engineering Precision, Driving Innovation"
      subtitle="A closer look at my background, credentials, and the journey that shaped my expertise in automotive manufacturing."
    >
      <div className={clsx('grid', 'grid-cols-1', 'gap-14', 'lg:grid-cols-2', 'lg:items-start')}>
        {/* Left: photo + bio */}
        <RevealOnScroll direction="right">
          <div className={clsx('flex', 'flex-col', 'items-center', 'gap-8', 'sm:flex-row', 'sm:items-start')}>
            <div className={clsx('glass-card', 'shrink-0', 'overflow-hidden', 'rounded-2xl', 'p-1.5')}>
              <img
                src={profile.photo}
                alt={profile.name}
                className={clsx('h-48', 'w-48', 'rounded-xl', 'object-cover', 'sm:h-56', 'sm:w-56')}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'data:image/svg+xml;utf8,' +
                    encodeURIComponent(
                      `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="%23111827"/><text x="50%" y="50%" fill="%2338BDF8" font-size="16" text-anchor="middle" dy=".3em">Photo</text></svg>`
                    );
                }}
              />
            </div>
            <div>
              <h3 className={clsx('text-2xl', 'font-bold', 'text-white')}>{profile.name}</h3>
              <p className={clsx('mt-1', 'font-medium', 'text-secondary')}>{profile.currentRole} · {profile.currentCompany}</p>
              <p className={clsx('mt-4', 'text-sm', 'leading-relaxed', 'text-gray-400')}>{profile.intro}</p>
            </div>
          </div>

          {/* Mini timeline */}
          <div className={clsx('mt-10', 'space-y-6', 'border-l', 'border-white/10', 'pl-6')}>
            {aboutTimeline.map((item, i) => (
              <RevealOnScroll key={item.id} direction="left" delay={i * 0.1} className="relative">
                <span className={clsx('absolute', '-left-[31px]', 'top-1', 'h-3.5', 'w-3.5', 'rounded-full', 'border-2', 'border-secondary', 'bg-base', 'shadow-glow-cyan')} />
                <p className={clsx('text-xs', 'font-semibold', 'uppercase', 'tracking-wider', 'text-secondary')}>{item.year}</p>
                <h4 className={clsx('mt-1', 'font-semibold', 'text-white')}>{item.title}</h4>
                <p className={clsx('text-sm', 'text-gray-400')}>{item.organization}</p>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>

        {/* Right: info cards + counters */}
        <div>
          <div className={clsx('grid', 'grid-cols-2', 'gap-4', 'sm:grid-cols-2')}>
            {infoCards.map((card, i) => (
              <RevealOnScroll key={card.title} direction="up" delay={i * 0.07}>
                <GlassCard className={clsx('flex', 'h-full', 'flex-col', 'items-start', 'gap-3', '!p-5')}>
                  <div className={clsx('flex', 'h-11', 'w-11', 'items-center', 'justify-center', 'rounded-xl', 'bg-gradient-to-br', 'from-primary-500/20', 'to-secondary/20')}>
                    <Icon name={card.icon} size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className={clsx('font-bold', 'text-white', 'leading-tight')}>{card.title}</p>
                    <p className={clsx('text-xs', 'text-gray-400')}>{card.subtitle}</p>
                  </div>
                </GlassCard>
              </RevealOnScroll>
            ))}
          </div>

          {/* Stat counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={clsx('glass-card', 'mt-6', 'grid', 'grid-cols-2', 'gap-6', '!p-6', 'sm:grid-cols-4')}
          >
            {aboutCounters.map((c) => (
              <div key={c.label} className="text-center">
                <p className={clsx('text-3xl', 'font-bold', 'text-gradient', 'sm:text-4xl')}>
                  <AnimatedCounter value={c.value} suffix={c.suffix} />
                </p>
                <p className={clsx('mt-1', 'text-xs', 'text-gray-400', 'sm:text-sm')}>{c.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

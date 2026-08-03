import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import ProgressBar from '../ui/ProgressBar';
import CircularProgress from '../ui/CircularProgress';
import Icon from '../ui/Icon';
import { skillCategories } from '../../data/skills';

/** Skills section: category tabs with animated progress bars, plus circular skill highlights. */
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const category = skillCategories.find((c) => c.id === activeCategory) ?? skillCategories[0];

  // Top skills across all categories for the circular chart row.
  const topSkills = skillCategories.flatMap((c) => c.skills).sort((a, b) => b.level - a.level).slice(0, 6);

  return (
    <SectionWrapper
      id="skills"
      eyebrow="Capabilities"
      title="Skills & Expertise"
      subtitle="A blend of manufacturing core tools, engineering fundamentals, and digital/software proficiency."
    >
      {/* Category tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-primary-500 to-secondary text-white shadow-glow'
                : 'glass text-gray-400 hover:text-white'
            }`}
          >
            <Icon name={cat.icon} size={16} />
            {cat.title}
          </button>
        ))}
      </div>

      {/* Progress bars for active category */}
      <GlassCard hover={false} className="mx-auto max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {category.skills.map((skill, i) => (
              <ProgressBar key={skill.name} label={skill.name} level={skill.level} delay={i * 0.06} />
            ))}
          </motion.div>
        </AnimatePresence>
      </GlassCard>

      {/* Circular skill highlights */}
      <div className="mt-16">
        <h3 className="mb-8 text-center text-lg font-semibold text-gray-300">Core Strengths at a Glance</h3>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {topSkills.map((skill) => (
            <CircularProgress key={skill.name} value={skill.level} label={skill.name} size={110} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import TiltCard from '../ui/TiltCard';
import { projects } from '../../data/projects';
import type { ProjectCategory } from '../../types';

const filters: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'iot', label: 'IoT & Industry 4.0' },
  { id: 'automation', label: 'Automation' },
  { id: 'analytics', label: 'Analytics' },
];

/** Projects section with category filtering and hover/tilt animated project cards. */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper
      id="projects"
      eyebrow="Portfolio"
      title="Featured Projects"
      subtitle="AI-powered manufacturing tools and Industry 4.0 solutions built to solve real shop-floor challenges."
    >
      {/* Filter buttons */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              activeFilter === f.id
                ? 'bg-gradient-to-r from-primary-500 to-secondary text-white shadow-glow'
                : 'glass text-gray-400 hover:text-white'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <TiltCard className="glass-card group h-full overflow-hidden !p-0">
                <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {project.featured && (
                    <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary px-3 py-1 text-xs font-semibold text-white shadow-glow">
                      <Sparkles size={12} /> Featured
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.features.slice(0, 4).map((f) => (
                      <span key={f} className="chip !border-secondary/20 !text-secondary/90">{f}</span>
                    ))}
                    {project.features.length > 4 && (
                      <span className="chip">+{project.features.length - 4} more</span>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-md bg-white/5 px-2 py-1 text-[11px] font-medium text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-white/30 hover:text-white"
                      >
                        <Github size={16} /> GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary py-2.5 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.02]"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}

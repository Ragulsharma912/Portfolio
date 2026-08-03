import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, FolderKanban, Mail, ArrowDown } from 'lucide-react';
import { profile } from '../../data/profile';
import TypingText from '../ui/TypingText';
import ParticlesField from '../ui/ParticlesField';
import GearIcon from '../ui/GearIcon';
import { useMousePosition } from '../../hooks/useMousePosition';

/** Hero / landing section with typing effect, parallax background, and animated manufacturing motifs. */
export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Subtle parallax offset for the photo, based on mouse position.
  const parallaxX = typeof window !== 'undefined' ? (x / window.innerWidth - 0.5) * 20 : 0;
  const parallaxY = typeof window !== 'undefined' ? (y / window.innerHeight - 0.5) * 20 : 0;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-base pt-28 pb-16 sm:pt-32"
    >
      {/* Blueprint grid + animated gradient background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-blueprint mask-fade-b" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent/10 animate-gradient-x bg-[length:200%_200%]" />
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float-delayed" />
      <ParticlesField count={26} />

      {/* Decorative rotating gears */}
      <div className="absolute top-24 right-[8%] hidden md:block">
        <GearIcon size={80} duration={20} />
      </div>
      <div className="absolute bottom-16 left-[6%] hidden md:block">
        <GearIcon size={56} reverse duration={16} variant="cog" />
      </div>

      <motion.div style={{ opacity: contentOpacity }} className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left column: text content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="chip mb-6 justify-center border-secondary/30 text-secondary lg:justify-start"
            >
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              Available for new opportunities
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
            >
              Hi, I'm <span className="block sm:inline">{profile.name.split(' ')[0]}</span>
              <span className="mt-2 block text-gradient">{profile.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-4 h-9 text-lg font-medium text-secondary sm:text-xl md:text-2xl"
            >
              <TypingText words={profile.roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg lg:mx-0"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <a href={profile.resumeUrl} download className="btn-primary">
                <Download size={18} /> Download Resume
              </a>
              <button onClick={() => scrollToSection('projects')} className="btn-outline">
                <FolderKanban size={18} /> View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-semibold text-gray-300 transition-colors hover:text-secondary"
              >
                <Mail size={18} /> Contact Me
              </button>
            </motion.div>
          </div>

          {/* Right column: photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 flex justify-center lg:order-2"
          >
            <motion.div
              style={{ x: parallaxX, y: parallaxY }}
              transition={{ type: 'spring', stiffness: 50, damping: 20 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-500 via-secondary to-accent opacity-40 blur-2xl animate-glow" />
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/30 animate-spin-slow" />
              <div className="glass-card relative h-64 w-64 overflow-hidden rounded-full p-1.5 sm:h-80 sm:w-80 md:h-96 md:w-96">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full rounded-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'data:image/svg+xml;utf8,' +
                      encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="%23111827"/><text x="50%" y="50%" fill="%2338BDF8" font-size="20" text-anchor="middle" dy=".3em">Photo</text></svg>`
                      );
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}

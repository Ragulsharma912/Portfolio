import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { profile } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrolled } from '../../hooks/useScrollPosition';
import { useTheme } from '../../context/ThemeContext';

/** Sticky, blur-on-scroll navigation bar with active section highlighting and a mobile menu. */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(30);
  const activeId = useActiveSection(navLinks.map((l) => l.id));
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav border-b border-white/10 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-20 items-center justify-between">
        <button
          onClick={() => handleNavClick('home')}
          className="text-xl font-bold tracking-tight text-white"
        >
          {profile.firstName}
          <span className="text-gradient">.</span>
          <span className="hidden sm:inline"> Sharma</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeId === link.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors hover:text-secondary"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => handleNavClick('contact')} className="btn-primary !px-5 !py-2.5 text-sm">
            Let's Talk
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-nav border-t border-white/10 lg:hidden overflow-hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                      activeId === link.id
                        ? 'bg-white/10 text-white'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="flex gap-3 pt-2">
                <button
                  onClick={toggleTheme}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button onClick={() => handleNavClick('contact')} className="btn-primary flex-1 !py-2.5 text-sm">
                  Let's Talk
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

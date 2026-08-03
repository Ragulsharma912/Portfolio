import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { profile } from '../../data/profile';
import { navLinks } from '../../data/navigation';

/** Site footer with social links, quick nav, and copyright. */
export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const socials = [
    { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
    { icon: Github, href: profile.github, label: 'GitHub' },
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-base-light">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <button onClick={() => handleNavClick('home')} className="text-2xl font-bold text-white">
              {profile.firstName}
              <span className="text-gradient">.</span>
            </button>
            <p className="mt-3 max-w-xs text-sm text-gray-400">{profile.currentRole} at {profile.currentCompany}. Building smarter, leaner, AI-powered manufacturing.</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-sm text-gray-400 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">Connect</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: SocialIcon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all hover:-translate-y-1 hover:border-secondary/50 hover:text-secondary"
                >
                  <SocialIcon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {year} {profile.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-secondary"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

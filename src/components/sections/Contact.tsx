import clsx from 'clsx';
import { useRef, useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import RevealOnScroll from '../ui/RevealOnScroll';
import GlassCard from '../ui/GlassCard';
import Icon from '../ui/Icon';
import { contactInfoList, emailjsConfig } from '../../data/contact';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

/** Contact section: professional form wired to EmailJS, plus contact info cards and a map embed. */
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Get In Touch"
      title="Let's Build Something Great"
      subtitle="Open to new opportunities, collaborations, and conversations about manufacturing innovation."
    >
      <div className={clsx('grid', 'grid-cols-1', 'gap-10', 'lg:grid-cols-5')}>
        {/* Contact info + map */}
        <RevealOnScroll direction="right" className="lg:col-span-2">
          <div className="space-y-4">
            {contactInfoList.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={clsx('glass-card', 'flex', 'items-center', 'gap-4', '!p-4', 'transition-colors', 'hover:border-secondary/40')}
              >
                <div className={clsx('flex', 'h-11', 'w-11', 'shrink-0', 'items-center', 'justify-center', 'rounded-xl', 'bg-gradient-to-br', 'from-primary-500/20', 'to-secondary/20')}>
                  <Icon name={info.icon} size={18} className="text-secondary" />
                </div>
                <div className="min-w-0">
                  <p className={clsx('text-xs', 'text-gray-500')}>{info.label}</p>
                  <p className={clsx('truncate', 'font-medium', 'text-white')}>{info.value}</p>
                </div>
              </a>
            ))}

            <div className={clsx('glass-card', 'overflow-hidden', '!p-0')}>
              <iframe
                title="Location map"
                src="https://www.google.com/maps?q=hosur,Tamil%20Nadu,India&output=embed"
                className={clsx('h-56', 'w-full', 'border-0')}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </RevealOnScroll>

        {/* Contact form */}
        <RevealOnScroll direction="left" className="lg:col-span-3">
          <GlassCard hover={false} className="!p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className={clsx('grid', 'grid-cols-1', 'gap-5', 'sm:grid-cols-2')}>
                <div>
                  <label htmlFor="name" className={clsx('mb-1.5', 'block', 'text-sm', 'font-medium', 'text-gray-300')}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={clsx('w-full', 'rounded-xl', 'border', 'border-white/10', 'bg-white/5', 'px-4', 'py-3', 'text-sm', 'text-white', 'placeholder-gray-500', 'outline-none', 'transition-colors', 'focus:border-secondary/60', 'focus:ring-1', 'focus:ring-secondary/40')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={clsx('mb-1.5', 'block', 'text-sm', 'font-medium', 'text-gray-300')}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={clsx('w-full', 'rounded-xl', 'border', 'border-white/10', 'bg-white/5', 'px-4', 'py-3', 'text-sm', 'text-white', 'placeholder-gray-500', 'outline-none', 'transition-colors', 'focus:border-secondary/60', 'focus:ring-1', 'focus:ring-secondary/40')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className={clsx('mb-1.5', 'block', 'text-sm', 'font-medium', 'text-gray-300')}>
                  Phone <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 00000 00000"
                  className={clsx('w-full', 'rounded-xl', 'border', 'border-white/10', 'bg-white/5', 'px-4', 'py-3', 'text-sm', 'text-white', 'placeholder-gray-500', 'outline-none', 'transition-colors', 'focus:border-secondary/60', 'focus:ring-1', 'focus:ring-secondary/40')}
                />
              </div>

              <div>
                <label htmlFor="message" className={clsx('mb-1.5', 'block', 'text-sm', 'font-medium', 'text-gray-300')}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={clsx('w-full', 'resize-none', 'rounded-xl', 'border', 'border-white/10', 'bg-white/5', 'px-4', 'py-3', 'text-sm', 'text-white', 'placeholder-gray-500', 'outline-none', 'transition-colors', 'focus:border-secondary/60', 'focus:ring-1', 'focus:ring-secondary/40')}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={clsx('btn-primary', 'w-full', 'disabled:cursor-not-allowed', 'disabled:opacity-70')}
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={clsx('flex', 'items-center', 'gap-2', 'text-sm', 'text-success')}
                >
                  <CheckCircle2 size={16} /> Message sent successfully. I'll get back to you soon!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={clsx('flex', 'items-center', 'gap-2', 'text-sm', 'text-red-400')}
                >
                  <XCircle size={16} /> Something went wrong. Please try again or email me directly.
                </motion.p>
              )}
            </form>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

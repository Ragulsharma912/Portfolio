import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';
import { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import RevealOnScroll from '../ui/RevealOnScroll';
import { profile } from '../../data/profile';

/** Resume section with a PDF preview viewer and a prominent download call-to-action. */
export default function Resume() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <SectionWrapper
      id="resume"
      eyebrow="Curriculum Vitae"
      title="My Resume"
      subtitle="A complete summary of my professional experience, skills, and qualifications."
    >
      <RevealOnScroll direction="scale">
        <div className="glass-card mx-auto max-w-3xl overflow-hidden !p-0">
          <div className="flex flex-col items-center gap-6 p-10 text-center sm:flex-row sm:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-secondary shadow-glow">
              <FileText size={36} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">{profile.name} — Resume</h3>
              <p className="mt-1 text-sm text-gray-400">
                Senior Process & Manufacturing Engineer · Updated {new Date().getFullYear()}
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <button onClick={() => setShowPreview((v) => !v)} className="btn-outline !px-5 !py-3 text-sm">
                <Eye size={16} /> {showPreview ? 'Hide' : 'Preview'}
              </button>
              <a href={profile.resumeUrl} download className="btn-primary !px-5 !py-3 text-sm">
                <Download size={16} /> Download PDF
              </a>
            </div>
          </div>

          {showPreview && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="border-t border-white/10 bg-black/30"
            >
              <iframe
                src={profile.resumeUrl}
                title="Resume preview"
                className="h-[70vh] w-full"
              />
            </motion.div>
          )}
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}

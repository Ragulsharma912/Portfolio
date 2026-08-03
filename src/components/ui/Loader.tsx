import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  visible: boolean;
}

/** Full-screen loading animation shown briefly on initial app mount. */
export default function Loader({ visible }: LoaderProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="relative h-16 w-16"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute inset-0 rounded-full border-4 border-white/10" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-secondary border-r-primary-500" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium tracking-widest text-gray-400 uppercase"
            >
              Loading Portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

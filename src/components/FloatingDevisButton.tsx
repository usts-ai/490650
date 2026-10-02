import { motion } from 'framer-motion';

export function FloatingDevisButton() {
  return (
    <motion.a
      href="#contact"
      className="fixed bottom-6 right-4 z-50 flex items-center gap-2 rounded-full bg-[#4A90E2] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4A90E2]/40 sm:bottom-8 sm:right-8 sm:px-6 sm:text-base"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(74,144,226,0.45)' }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="hidden sm:inline">Demande de devis</span>
      <span className="sm:hidden">Devis</span>
      <motion.span
        className="inline-block h-2 w-2 rounded-full bg-white"
        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
    </motion.a>
  );
}

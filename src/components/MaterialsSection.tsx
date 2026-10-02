import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { materials } from '../data/mockData';

export function MaterialsSection() {
  const [active, setActive] = useState(0);
  const current = materials[active];

  return (
    <section id="materiaux" className="relative overflow-hidden bg-[#1a1a1a] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#4A90E2]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#355E3B]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#D2B48C]">Matériaux</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl">
              Pierres sélectionnées
            </h2>
            <p className="mt-4 text-white/65">
              Granit, marbre, quartzite et pierres locales : choisissez la matière qui correspond
              à votre projet et à votre budget.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#D2B48C] px-6 py-3 text-sm text-[#D2B48C] transition hover:bg-[#D2B48C] hover:text-[#1a1a1a]"
          >
            Conseil matériau gratuit
          </a>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-square lg:aspect-[4/5]"
            layout
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current.name}
                src={current.image}
                alt={current.name}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
            <motion.div
              className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/15 bg-black/40 p-5 backdrop-blur-md"
              key={current.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="font-serif text-2xl">{current.name}</h3>
              <p className="mt-1 text-sm text-white/70">
                {current.origin} · Finition {current.finish}
              </p>
            </motion.div>
          </motion.div>

          <div className="flex flex-col justify-center gap-3">
            {materials.map((mat, i) => (
              <motion.button
                key={mat.name}
                type="button"
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 rounded-xl border p-4 text-left transition ${
                  active === i
                    ? 'border-[#4A90E2] bg-[#4A90E2]/10'
                    : 'border-white/10 bg-white/5 hover:border-white/25'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.99 }}
              >
                <img
                  src={mat.image}
                  alt=""
                  className="h-14 w-14 shrink-0 rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium">{mat.name}</p>
                  <p className="text-xs text-white/50">{mat.origin}</p>
                </div>
                <span
                  className={`ml-auto h-2 w-2 rounded-full ${
                    active === i ? 'bg-[#4A90E2]' : 'bg-white/20'
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

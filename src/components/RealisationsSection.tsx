import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { realisations } from '../data/mockData';

const filters = ['Tous', 'Cuisine', 'Salle de bain', 'Revetement', 'Reception'];

export function RealisationsSection() {
  const [filter, setFilter] = useState('Tous');

  const filtered =
    filter === 'Tous'
      ? realisations
      : realisations.filter((r) => r.category === filter);

  return (
    <section id="realisations" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#7D7D7D]">Portfolio</p>
          <h2 className="mt-3 font-serif text-3xl text-[#1a1a1a] sm:text-4xl md:text-5xl">
            Nos réalisations
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition sm:text-sm ${
                filter === f
                  ? 'bg-[#1a1a1a] text-white'
                  : 'bg-[#F5F0EB] text-[#333333] hover:bg-[#D2B48C]/30'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/20 to-transparent opacity-80 transition group-hover:opacity-95" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 transition group-hover:translate-y-0">
                  <span className="text-xs uppercase tracking-widest text-[#D2B48C]">
                    {project.category}
                  </span>
                  <h3 className="mt-1 font-serif text-xl text-white sm:text-2xl">{project.title}</h3>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

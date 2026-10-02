import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1615876230445-0ab694de1dae?auto=format&fit=crop&w=1920&q=80';

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  const titleWords = ['L art', 'de la pierre', 'sur mesure'];

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#1a1a1a]"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <img
          src={HERO_IMAGE}
          alt="Marbre poli en gros plan"
          className="h-[120%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-[#1a1a1a]/30" />
        <div className="absolute inset-0 bg-[#355E3B]/10 mix-blend-multiply" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pb-32 lg:px-8"
        style={{ opacity }}
      >
        <motion.p
          className="mb-4 text-xs uppercase tracking-[0.4em] text-[#D2B48C] sm:text-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Marbrerie artisanale depuis 1999
        </motion.p>

        <h1 className="max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              className="mr-3 inline-block last:mr-0"
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + i * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-6 max-w-xl text-base text-white/75 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          Cuisines, salles de bains et aménagements en marbre, granit et pierre naturelle.
          De la conception à la pose, nous sublimons vos espaces de vie.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#4A90E2] px-8 py-4 text-sm font-semibold text-white sm:text-base"
            whileHover={{ scale: 1.04, boxShadow: '0 16px 40px rgba(74,144,226,0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            Demande de devis
          </motion.a>
          <motion.a
            href="#realisations"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition hover:border-[#D2B48C] hover:text-[#D2B48C] sm:text-base"
            whileHover={{ scale: 1.02 }}
          >
            Voir nos réalisations
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-3 gap-4 border-t border-white/15 pt-8 sm:max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          {[
            { n: '320+', l: 'Projets' },
            { n: '25', l: 'Ans' },
            { n: '4.9', l: 'Avis clients' },
          ].map((stat) => (
            <div key={stat.l}>
              <p className="font-serif text-2xl text-[#D2B48C] sm:text-3xl">{stat.n}</p>
              <p className="text-xs uppercase tracking-wider text-white/50">{stat.l}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-[#D2B48C]" />
        </div>
      </motion.div>
    </section>
  );
}

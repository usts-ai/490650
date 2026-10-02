import { motion } from 'framer-motion';
import { services } from '../data/mockData';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#F5F0EB] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#7D7D7D]">Nos expertises</p>
          <h2 className="mt-3 font-serif text-3xl text-[#1a1a1a] sm:text-4xl md:text-5xl">
            Services sur mesure
          </h2>
          <p className="mt-4 text-[#333333]/80">
            Des pages dédiées pour chaque univers : cuisines, salles de bains et aménagements
            complets, pensées pour convertir vos visiteurs en demandes de devis.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              id={index === 0 ? 'services-cuisines' : index === 1 ? 'services-sdb' : undefined}
              variants={item}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-[#7D7D7D]/10"
              whileHover={{ y: -6 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-[#355E3B] px-3 py-1 text-xs font-medium text-white">
                  {service.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#1a1a1a]">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#333333]/75">{service.description}</p>
                <motion.a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#4A90E2]"
                  whileHover={{ x: 4 }}
                >
                  Demander un devis
                  <span aria-hidden="true">&rarr;</span>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

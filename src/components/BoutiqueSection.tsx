import { motion } from 'framer-motion';
import { boutiqueProducts } from '../data/mockData';

export function BoutiqueSection() {
  return (
    <section id="boutique" className="bg-[#F5F0EB] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#7D7D7D]">Boutique en ligne</p>
            <h2 className="mt-3 font-serif text-3xl text-[#1a1a1a] sm:text-4xl md:text-5xl">
              Accessoires en pierre
            </h2>
            <p className="mt-4 max-w-lg text-[#333333]/80">
              Découvrez une sélection d&apos;objets artisanaux fabriqués à partir de chutes valorisées.
              Paiement sécurisé et livraison soignée (démonstration visuelle).
            </p>
          </motion.div>
          <motion.span
            className="inline-flex items-center gap-2 rounded-full bg-[#355E3B] px-5 py-2 text-sm font-medium text-white"
            animate={{ boxShadow: ['0 0 0 0 rgba(53,94,59,0.4)', '0 0 0 12px rgba(53,94,59,0)', '0 0 0 0 rgba(53,94,59,0)'] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            Nouveau : boutique en ligne
          </motion.span>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boutiqueProducts.map((product, i) => (
            <motion.article
              key={product.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-md"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative aspect-square overflow-hidden bg-[#7D7D7D]/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]/60 opacity-0 transition group-hover:opacity-100"
                  initial={false}
                >
                  <span className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#1a1a1a]">
                    Voir le produit
                  </span>
                </motion.div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="font-medium text-[#1a1a1a]">{product.name}</h3>
                  <p className="mt-1 text-sm text-[#4A90E2]">{product.price}</p>
                </div>
                <button
                  type="button"
                  className="rounded-full border border-[#1a1a1a]/20 px-4 py-2 text-xs font-medium uppercase tracking-wider transition hover:bg-[#1a1a1a] hover:text-white"
                >
                  Panier
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#1a1a1a] py-20 text-white sm:py-28">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(74,144,226,0.25), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(210,180,140,0.15), transparent 40%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#D2B48C]">Contact</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl">
              Demande de devis
            </h2>
            <p className="mt-4 text-white/65">
              Décrivez votre projet : nous vous répondons sous 48 h avec une estimation
              personnalisée. Formulaire démonstratif sans envoi réel.
            </p>

            <ul className="mt-10 space-y-4 text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="text-[#4A90E2]">Adresse</span>
                <span className="text-white/80">12 rue de la Pierre, 69000 Lyon</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#4A90E2]">Telephone</span>
                <span className="text-white/80">04 78 00 00 00</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#4A90E2]">Horaires</span>
                <span className="text-white/80">Lun - Ven, 8h - 18h</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wider text-white/50">
                  Nom complet
                </label>
                <input
                  type="text"
                  readOnly
                  placeholder="Jean Dupont"
                  className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[#4A90E2]"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wider text-white/50">
                  Email
                </label>
                <input
                  type="email"
                  readOnly
                  placeholder="contact@exemple.fr"
                  className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[#4A90E2]"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wider text-white/50">
                  Type de projet
                </label>
                <select
                  className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white outline-none focus:border-[#4A90E2]"
                  defaultValue=""
                  disabled
                >
                  <option value="">Cuisine, salle de bain, autre...</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wider text-white/50">
                  Message
                </label>
                <textarea
                  readOnly
                  rows={4}
                  placeholder="Dimensions, materiau souhaite, delais..."
                  className="w-full resize-none rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[#4A90E2]"
                />
              </div>
              <motion.button
                type="button"
                className="w-full rounded-full bg-[#4A90E2] py-4 font-semibold text-white"
                whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(74,144,226,0.35)' }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer ma demande de devis
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

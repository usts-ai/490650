import { motion } from 'framer-motion';
import { navLinks, socialLinks } from '../data/mockData';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#141414] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-xl tracking-[0.15em] text-[#D2B48C]">MARBRERIE</p>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Artisan marbrier : creation, fabrication et pose de plans de travail et
              aménagements en pierre naturelle pour particuliers et professionnels.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">Navigation</p>
            <ul className="mt-4 space-y-2">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-[#4A90E2]"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">Réseaux sociaux</p>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <motion.a
                    href={social.href}
                    className="group flex items-center gap-3 text-sm text-white/70"
                    whileHover={{ x: 4 }}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition group-hover:border-[#4A90E2] group-hover:bg-[#4A90E2]/20">
                      {social.label.charAt(0)}
                    </span>
                    {social.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">Newsletter</p>
            <p className="mt-4 text-sm text-white/55">
              Recevez nos dernières réalisations et offres boutique.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                readOnly
                placeholder="Votre email"
                className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30"
              />
              <motion.button
                type="button"
                className="shrink-0 rounded-lg bg-[#355E3B] px-4 py-2 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                OK
              </motion.button>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; {year} Marbrerie Artisanale. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Mentions légales', 'Politique de confidentialité', 'CGV boutique'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="transition hover:text-[#D2B48C]"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

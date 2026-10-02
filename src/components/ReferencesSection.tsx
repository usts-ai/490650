import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { references, testimonials } from '../data/mockData';

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function ReferencesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="references" className="relative bg-[#355E3B] py-20 text-white sm:py-28">
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.08) 50%, transparent 52%)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#D2B48C]">Confiance</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Références et témoignages</h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {references.map((refItem, i) => (
            <motion.div
              key={refItem.name}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <p className="font-serif text-3xl text-[#D2B48C] sm:text-4xl">
                <AnimatedCounter
                  value={refItem.value}
                  suffix={refItem.suffix}
                  inView={inView}
                />
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/70 sm:text-sm">
                {refItem.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              className="rounded-2xl bg-[#1a1a1a]/40 p-8 backdrop-blur-md"
              initial={{ opacity: 0, x: i === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-serif text-lg leading-relaxed text-white/90">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <cite className="not-italic font-medium text-[#D2B48C]">{t.author}</cite>
                <p className="text-sm text-white/50">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

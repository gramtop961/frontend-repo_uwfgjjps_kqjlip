import { motion } from "framer-motion";

export default function Heritage() {
  return (
    <section id="heritage" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">A legacy from Varanasi</h2>
            <p className="mt-4 text-amber-100/85 max-w-xl">
              From the ghats of the Ganga to ateliers across the city, our house has preserved the soul of Banaras weaving for over five decades. Each drape carries a lineage of rituals, festivals, and heirloom artistry.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Authenticity Guaranteed",
                "Handloom Mark",
                "Hallmark Zari",
                "Worldwide Shipping",
              ].map((t) => (
                <span key={t} className="rounded-full border border-amber-300/30 bg-amber-50/10 px-3 py-1 text-xs text-amber-100/90">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1601034913915-1810d0a1c595?q=80&w=1974&auto=format&fit=crop"
                alt="Heritage"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-rose-500/10 to-fuchsia-500/10 mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

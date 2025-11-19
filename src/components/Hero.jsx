import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Background gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-20 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-amber-500/20 via-rose-500/10 to-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-[38rem] w-[38rem] rounded-full bg-gradient-to-br from-rose-500/20 via-amber-500/10 to-fuchsia-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Timeless Banarasi Sarees woven in the city of light
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-5 text-lg text-amber-100/90 max-w-xl"
            >
              Handloom masterpieces featuring kadhua motifs, meenakari detailing, and pure zari — crafted by generational artisans of Varanasi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#collections" className="rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-6 py-3 text-white font-medium shadow-lg shadow-rose-900/20 hover:from-amber-400 hover:to-rose-400 transition-colors">Explore Collections</a>
              <a href="#craft" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition">Our Craft</a>
            </motion.div>

            <div className="mt-10 flex items-center gap-6 text-amber-100/80">
              <div className="flex -space-x-4">
                {[1,2,3,4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} alt="Customer" className="h-10 w-10 rounded-full ring-2 ring-amber-300/40" />
                ))}
              </div>
              <p className="text-sm">Trusted by 10,000+ brides and connoisseurs worldwide</p>
            </div>
          </div>

          {/* Visuals */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1619537902109-f8adbb38ea6c?q=80&w=2070&auto=format&fit=crop"
                alt="Banarasi Saree"
                className="h-full w-full object-cover object-center scale-105"
              />

              {/* Floating motif card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -left-6 bottom-8 w-44 rounded-xl border border-amber-300/30 bg-amber-50/10 p-3 backdrop-blur shadow-lg"
              >
                <img src="https://images.unsplash.com/photo-1533399414884-20d4929fb553?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxaYXJpfGVufDB8MHx8fDE3NjM1NzI2Nzl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Zari" className="h-20 w-full rounded-lg object-cover" />
                <div className="mt-2 text-xs text-amber-50/90">Pure silver and gold zari threads</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -right-6 top-8 w-44 rounded-xl border border-rose-300/30 bg-rose-50/10 p-3 backdrop-blur shadow-lg"
              >
                <img src="https://images.unsplash.com/photo-1617694820985-a5476fe22722?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXZWF2aW5nfGVufDB8MHx8fDE3NjM1NzI2Nzl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Weaving" className="h-20 w-full rounded-lg object-cover" />
                <div className="mt-2 text-xs text-rose-50/90">Kadhua weaving on handloom</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

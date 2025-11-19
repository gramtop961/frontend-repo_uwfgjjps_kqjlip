import { motion } from "framer-motion";

export default function Craft() {
  const features = [
    {
      title: "Pure Zari",
      desc: "Ethically sourced silver and gold threads, tested for purity.",
      img: "https://images.unsplash.com/photo-1602351447937-745cb7206129?q=80&w=1974&auto=format&fit=crop",
    },
    {
      title: "Kadhua Weave",
      desc: "Time-intensive technique where motifs are woven into the fabric.",
      img: "https://images.unsplash.com/photo-1601034913927-7cfcae11d206?q=80&w=1974&auto=format&fit=crop",
    },
    {
      title: "Handloom Heritage",
      desc: "Crafted on traditional looms by artisans across Varanasi.",
      img: "https://images.unsplash.com/photo-1601034892519-c171a809a09a?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <section id="craft" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Craft</h2>
            <p className="mt-2 text-amber-100/80">Traditions preserved, techniques perfected, stories woven.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={f.img} alt={f.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-amber-100/85">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

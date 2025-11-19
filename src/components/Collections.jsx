import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Kadhua Jangla",
    color: "Rani Pink",
    price: "₹38,500",
    img: "https://images.unsplash.com/photo-1603575449299-621f6c296a48?q=80&w=1974&auto=format&fit=crop",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Meenakari Booti",
    color: "Emerald Green",
    price: "₹29,900",
    img: "https://images.unsplash.com/photo-1629198735660-7a319ef6933e?q=80&w=1974&auto=format&fit=crop",
    badge: "New",
  },
  {
    id: 3,
    name: "Tilfi Kadua",
    color: "Royal Blue",
    price: "₹46,200",
    img: "https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=2070&auto=format&fit=crop",
    badge: "Limited",
  },
  {
    id: 4,
    name: "Shikargah",
    color: "Maroon",
    price: "₹54,800",
    img: "https://images.unsplash.com/photo-1581783349209-5ab1bcd0d01e?q=80&w=1974&auto=format&fit=crop",
    badge: "Exclusive",
  },
];

export default function Collections() {
  return (
    <section id="collections" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Collections</h2>
            <p className="mt-2 text-amber-100/80">Curated pieces showcasing signature motifs and rare colourways.</p>
          </div>
          <a href="#" className="hidden sm:inline text-amber-200 hover:text-amber-100">View all</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-3 py-1 text-xs font-medium text-white shadow">{p.badge}</div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">{p.name}</h3>
                    <p className="text-xs text-amber-100/80">{p.color}</p>
                  </div>
                  <div className="text-amber-200 font-medium">{p.price}</div>
                </div>
                <button className="mt-3 w-full rounded-xl border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-amber-100 text-sm transition hover:bg-amber-400/20">Quick View</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

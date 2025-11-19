import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/10 via-rose-500/10 to-fuchsia-500/10 p-1 shadow-2xl">
          <div className="rounded-[22px] bg-slate-900/60 p-8 sm:p-12 backdrop-blur">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-white">Bring home an heirloom</h3>
                <p className="mt-3 text-amber-100/85 max-w-xl">Book a virtual appointment or visit our Varanasi studio to explore the full collection with a curator.</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#" className="rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-6 py-3 text-white font-medium shadow-lg shadow-rose-900/20 hover:from-amber-400 hover:to-rose-400 transition-colors">Book Appointment</a>
                  <a href="#" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition">WhatsApp</a>
                </div>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onSubmit={(e) => e.preventDefault()}
                className="grid gap-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/40" placeholder="Name" />
                  <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/40" placeholder="Email" />
                </div>
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/40" placeholder="Phone / WhatsApp" />
                <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/40" placeholder="Tell us what you're looking for"></textarea>
                <button className="mt-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 px-6 py-3 text-white font-medium shadow-lg shadow-rose-900/20 hover:from-amber-400 hover:to-rose-400 transition-colors">Send Inquiry</button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

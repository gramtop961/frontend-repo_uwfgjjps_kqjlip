import { Menu, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 shadow ring-2 ring-white/20" />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-semibold tracking-wide text-white">Banarasi Atelier</span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-amber-200/80">Varanasi • Est. 1968</span>
              </div>
            </motion.a>

            <div className="hidden md:flex items-center gap-8 text-sm">
              {[
                { label: "Collections", href: "#collections" },
                { label: "Craft", href: "#craft" },
                { label: "Heritage", href: "#heritage" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-amber-100 shadow-sm transition hover:bg-amber-400/20">
                <ShoppingBag className="h-4 w-4" />
                <span className="text-sm font-medium">Shop Now</span>
              </button>
              <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

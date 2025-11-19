import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Craft from "./components/Craft";
import Heritage from "./components/Heritage";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
      {/* subtle motif pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <Navbar />
      <Hero />
      <Collections />
      <Craft />
      <Heritage />
      <CTA />

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-rose-500" />
              <span className="text-sm text-white/80">© {new Date().getFullYear()} Banarasi Atelier. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import ToolsGrid from "./components/ToolsGrid";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const fadeClass = useMemo(
    () => (mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"),
    [mounted]
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* subtle grid + glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.6),rgba(2,6,23,0.9))]" />
      </div>

      <main className="relative max-w-7xl mx-auto px-6 md:px-10">
        <Header query={query} onChange={setQuery} />

        <section
          className={`transition-all duration-700 ${fadeClass}`}
        >
          <ToolsGrid query={query} />
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;

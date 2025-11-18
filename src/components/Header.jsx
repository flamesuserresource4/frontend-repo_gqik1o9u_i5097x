import { Search } from "lucide-react";

function Header({ query, onChange }) {
  return (
    <header className="relative pt-16 pb-10 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
        Forensic Toolkit Hub
      </h1>
      <p className="mt-4 text-base md:text-lg text-slate-300 max-w-3xl mx-auto">
        Una collezione curata di strumenti essenziali per l'analisi di sistema e la Digital Forensics.
      </p>

      <div className="mt-8 max-w-2xl mx-auto">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400/70" />
          <input
            type="text"
            value={query}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Cerca un tool..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-900/70 border border-slate-700/60 focus:border-cyan-500/70 outline-none text-slate-100 placeholder:text-slate-400 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)] transition-all"
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5 group-focus-within:ring-cyan-500/20" />
        </div>
      </div>
    </header>
  );
}

export default Header;

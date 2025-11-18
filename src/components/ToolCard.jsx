import { Download, Microscope, Hammer, Search as SearchIcon, Bug, FileSignature, Cpu, Activity, FileCode2, Binary, Box, ShieldQuestion, Hexagon, FileText, ScrollText, ServerCog, Cog, Network } from "lucide-react";

const iconMap = {
  search: SearchIcon,
  hammer: Hammer,
  microscope: Microscope,
  bug: Bug,
  signature: FileSignature,
  cpu: Cpu,
  activity: Activity,
  file: FileCode2,
  binary: Binary,
  box: Box,
  shield: ShieldQuestion,
  hex: Hexagon,
  text: FileText,
  scroll: ScrollText,
  server: ServerCog,
  cog: Cog,
  network: Network,
};

function ToolCard({ icon = "search", name, description, href = "#" }) {
  const Icon = iconMap[icon] || SearchIcon;
  return (
    <div className="group relative bg-[#1A1A1A] border border-transparent rounded-2xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:border-cyan-500/40">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-slate-800/70 flex items-center justify-center ring-1 ring-white/5 group-hover:ring-cyan-500/30 transition-colors">
          <Icon className="h-6 w-6 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.65)]" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
      <p className="text-sm text-slate-300/90 mb-6 leading-relaxed">{description}</p>
      <div className="mt-auto">
        <a
          href={href}
          onClick={(e) => href === "#" && e.preventDefault()}
          className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-white font-semibold shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.55)] hover:bg-cyan-400 transition-all"
        >
          <Download className="h-4 w-4" />
          Download
        </a>
      </div>
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity shadow-[inset_0_0_0_1px_rgba(34,211,238,0.25),0_0_35px_rgba(34,211,238,0.15)]" />
    </div>
  );
}

export default ToolCard;

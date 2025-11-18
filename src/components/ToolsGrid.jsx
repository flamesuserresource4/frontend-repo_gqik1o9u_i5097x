import ToolCard from "./ToolCard";

const tools = [
  { icon: "search", name: "RegScanner", description: "Ricerca avanzata e veloce nel Registro di Sistema di Windows." },
  { icon: "activity", name: "JournalTrace", description: "GUI potente per analizzare la cronologia del file system (USN Journal) con filtri avanzati." },
  { icon: "file", name: "Paths Parser", description: "Analizza liste di percorsi file per verificarne esistenza, firma digitale e caratteristiche sospette." },
  { icon: "activity", name: "BAM Parser", description: "Visualizzatore grafico per le tracce di esecuzione del Background Activity Moderator (BAM)." },
  { icon: "server", name: "Prefetch Parser", description: "Utility per l'analisi dei file Prefetch con funzioni integrate di firma e scansione YARA." },
  { icon: "cog", name: "pcasvc-executed", description: "Estrae e analizza le tracce di esecuzione lasciate dal Program Compatibility Assistant." },
  { icon: "activity", name: "ActivitiesCache-execution", description: "Parser per il database della Windows Timeline (ActivitiesCache.db) per ricostruire l'attività utente." },
  { icon: "file", name: "Replaceparser", description: "Tool specializzato per rilevare operazioni di sostituzione di file (file replacement) dal Journal." },
  { icon: "cpu", name: "Kernel-Live-Dump-Analyzer", description: "Analizza dump della memoria del kernel per trovare comandi e script associati a bypass." },
  { icon: "box", name: "FTK Imager", description: "Strumento essenziale per l'analisi a basso livello del file system e l'accesso a file bloccati." },
  { icon: "box", name: "Recuva", description: "Utility specializzata per il recupero di file cancellati da qualsiasi tipo di drive." },
  { icon: "shield", name: "Detect It Easy (DiE)", description: "Identifica packer, protettori ed entropia di file eseguibili per un'analisi statica rapida." },
  { icon: "hex", name: "HxD Hex Editor", description: "Editor esadecimale leggero per l'analisi e la modifica del contenuto binario dei file." },
  { icon: "file", name: "PEStudio", description: "Potente strumento di analisi statica per file eseguibili (PE) che raccoglie una vasta gamma di informazioni." },
  { icon: "text", name: "Strings", description: "Estrae stringhe di testo (ASCII/Unicode) da file binari per un'analisi rapida." },
  { icon: "scroll", name: "Luyten", description: "Decompilatore Java semplice e veloce, ideale per analizzare mod e client Minecraft (.jar)." },
  { icon: "scroll", name: "Recaf", description: "Moderno editor di bytecode e decompilatore Java per un'analisi interattiva e approfondita." },
  { icon: "server", name: "Process Explorer", description: "Task Manager avanzato per l'analisi dettagliata di processi, DLL e connessioni di rete." },
  { icon: "server", name: "Autoruns", description: "Lo strumento più completo per scovare meccanismi di persistenza e avvio automatico." },
  { icon: "server", name: "ProcMon (Process Monitor)", description: "Monitoraggio in tempo reale di file system, registro e attività dei processi." },
  { icon: "network", name: "TCPView", description: "Visualizza in tempo reale tutte le connessioni di rete TCP e UDP e il processo associato." },
];

function ToolsGrid({ query }) {
  const filtered = tools.filter((t) =>
    `${t.name} ${t.description}`.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filtered.map((tool) => (
        <ToolCard key={tool.name} {...tool} />
      ))}
    </div>
  );
}

export default ToolsGrid;

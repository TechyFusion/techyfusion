import { Code2, Terminal, Brain, Cloud, Database } from "lucide-react";

export default function TechStack() {
  return (
    <section className="py-20 border-y border-border-subtle bg-surface-container-lowest">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <p className="text-center font-mono text-label-caps text-on-surface-variant mb-12 uppercase tracking-widest">
          Trusted Tech Stack For Mission-Critical Systems
        </p>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-50 hover:opacity-100 transition-opacity duration-500">
          <div className="flex flex-col items-center gap-3 group grayscale hover:grayscale-0 transition-all">
            <Code2 className="w-8 h-8 text-on-surface" />
            <span className="font-mono text-label-caps">React / Next.js</span>
          </div>
          <div className="flex flex-col items-center gap-3 group grayscale hover:grayscale-0 transition-all">
            <Terminal className="w-8 h-8 text-on-surface" />
            <span className="font-mono text-label-caps">Node.js</span>
          </div>
          <div className="flex flex-col items-center gap-3 group grayscale hover:grayscale-0 transition-all">
            <Brain className="w-8 h-8 text-on-surface" />
            <span className="font-mono text-label-caps">OpenAI / LLMs</span>
          </div>
          <div className="flex flex-col items-center gap-3 group grayscale hover:grayscale-0 transition-all">
            <Cloud className="w-8 h-8 text-on-surface" />
            <span className="font-mono text-label-caps">AWS / Azure</span>
          </div>
          <div className="flex flex-col items-center gap-3 group grayscale hover:grayscale-0 transition-all">
            <Database className="w-8 h-8 text-on-surface" />
            <span className="font-mono text-label-caps">PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

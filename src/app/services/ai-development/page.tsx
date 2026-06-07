import { Metadata } from "next";
import { BrainCircuit, Cpu, Workflow, Database } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "AI Solutions & LLM Integration | TechyFusion",
  description: "Custom AI development, predictive modeling, and autonomous agents designed to scale enterprise workflows.",
};

const features = [
  { title: "Custom LLMs", desc: "Fine-tuned language models integrated directly into your proprietary data.", icon: BrainCircuit },
  { title: "Autonomous Agents", desc: "Multi-agent systems that execute complex, multi-step workflows autonomously.", icon: Cpu },
  { title: "Data Pipelines", desc: "Automated ingestion and vectorization of enterprise data for semantic search.", icon: Database },
];

const technologies = ["Python", "OpenAI GPT-4", "LangChain", "Pinecone", "PyTorch", "TensorFlow", "Hugging Face"];

export default function AIDevelopmentPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative">
        <div className="bg-glow-spot -top-40 right-0 opacity-50" aria-hidden="true"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <Badge variant="pulse" className="mb-6">AI & ML Ops</Badge>
          <SectionHeading 
            title="Artificial Intelligence Solutions" 
            subtitle="Transform your business operations with custom AI integrations, reducing manual overhead and unlocking new analytical capabilities."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-20">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Card key={i} glow={i === 0}>
                  <Icon className="w-8 h-8 text-indigo-glow mb-6" />
                  <h3 className="text-headline-sm text-on-surface mb-3">{feature.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{feature.desc}</p>
                </Card>
              );
            })}
          </div>

          <div className="border-t border-border-subtle pt-16">
            <h3 className="text-headline-sm text-on-surface mb-6">AI Stack</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map(tech => <Badge key={tech}>{tech}</Badge>)}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

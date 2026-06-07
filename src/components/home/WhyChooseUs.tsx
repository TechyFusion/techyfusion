import { Zap, Terminal, Layers, Brain } from "lucide-react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    title: "Fast Delivery",
    desc: "Agile methodologies and automated CI/CD pipelines ensure rapid time-to-market without compromising code quality or security.",
    icon: Zap,
    color: "text-amber-400",
  },
  {
    title: "Expert Developers",
    desc: "Senior-level engineers with deep domain expertise in scalable architectures, system design, and complex problem-solving.",
    icon: Terminal,
    color: "text-tertiary",
  },
  {
    title: "Modern Stack",
    desc: "Leveraging Next.js, Go, React, and robust cloud infrastructure to build resilient and future-proof digital products.",
    icon: Layers,
    color: "text-electric-blue",
  },
  {
    title: "AI Expertise",
    desc: "Specialized in custom LLM integrations, autonomous agents, and predictive modeling to automate your enterprise workflows.",
    icon: Brain,
    color: "text-indigo-glow",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Context & Heading */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading 
              title="Built for Scale. Delivered with Precision." 
              subtitle="We don't just write code; we engineer solutions. Partner with a team that understands business objectives as well as they understand technical architecture."
              className="mb-0"
            />
            
            <div className="space-y-4 font-mono text-label-caps uppercase tracking-widest text-on-surface-variant">
              <div className="flex items-center gap-4 border-b border-border-subtle pb-4">
                <span className="text-electric-blue text-lg">01</span>
                <span>Requirement Analysis</span>
              </div>
              <div className="flex items-center gap-4 border-b border-border-subtle pb-4">
                <span className="text-electric-blue text-lg">02</span>
                <span>Architecture Design</span>
              </div>
              <div className="flex items-center gap-4 pb-4">
                <span className="text-electric-blue text-lg">03</span>
                <span>Iterative Development</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <Card 
                  key={index} 
                  className="group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-surface-container-high border border-border-subtle flex items-center justify-center ${feature.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-headline-sm text-on-surface text-lg">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-body-sm text-on-surface-variant">
                    {feature.desc}
                  </p>
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

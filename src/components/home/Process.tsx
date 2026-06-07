import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Technical audit and requirements gathering to define architecture, project scope, and KPIs.",
    color: "text-electric-blue border-electric-blue/30",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "System design, database modeling, and technical stack selection for maximum scalability.",
    color: "text-indigo-glow border-border-subtle",
  },
  {
    num: "03",
    title: "Development",
    desc: "Agile sprints with weekly demos, test-driven development, and continuous CI/CD deployments.",
    color: "text-tertiary border-border-subtle",
  },
  {
    num: "04",
    title: "Deployment",
    desc: "Seamless go-live with infrastructure monitoring, load testing, and post-launch support.",
    color: "text-on-surface border-border-subtle",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 overflow-hidden bg-surface-container-lowest">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        
        <SectionHeading 
          title="Engineering-First Process" 
          subtitle="We follow a rigorous methodology to ensure every line of code adds measurable value to your business."
          align="center"
        />
        
        <div className="relative mt-16">
          {/* Connecting Line (Desktop Only) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border-subtle hidden lg:block -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <Card key={index} className="space-y-4 hover:-translate-y-1 transition-transform duration-300">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-sm mb-6 border bg-surface-container ${step.color}`}>
                  {step.num}
                </div>
                <h4 className="text-headline-sm text-lg text-on-surface">{step.title}</h4>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

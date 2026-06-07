import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";

const milestones = [
  {
    year: "2021",
    title: "Agency Foundation",
    desc: "TechyFusion was established with a core team of three senior engineers, focusing on custom full-stack web applications for early-stage startups.",
  },
  {
    year: "2023",
    title: "Enterprise Cloud Expansion",
    desc: "Expanded our capabilities to include enterprise-grade cloud architecture, DevOps automation, and scalable Kubernetes deployments.",
  },
  {
    year: "2024",
    title: "AI & Data Division Launched",
    desc: "Formed a dedicated machine learning team to integrate custom LLMs and autonomous agents into our clients' existing workflows.",
  },
  {
    year: "2026",
    title: "Global Scale & Recognition",
    desc: "Now partnering with international enterprises, managing millions of daily API requests, and maintaining a 99.99% uptime SLA across all client platforms.",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low border-y border-border-subtle">
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading 
          title="Our Evolution" 
          subtitle="A track record of continuous technical growth and scaling."
        />

        <div className="mt-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-subtle before:to-transparent">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12 last:mb-0">
              
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border-subtle bg-surface-container-high group-hover:border-electric-blue text-electric-blue shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-electric-blue group-hover:scale-150 transition-transform"></div>
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-xl glass-card hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="default">{milestone.year}</Badge>
                </div>
                <h3 className="text-headline-sm text-on-surface mb-2">{milestone.title}</h3>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {milestone.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  // Grab the first 3 projects
  const p1 = projects[0];
  const p2 = projects[1];
  const p3 = projects[2];

  return (
    <section id="work" className="py-20 bg-surface-container-low border-y border-border-subtle">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <SectionHeading 
            title="Selected Projects" 
            subtitle="Mission-critical platforms we've architected and deployed for scale."
            className="mb-0"
          />
          <Link 
            href="/portfolio" 
            className="text-electric-blue text-body-md font-semibold flex items-center gap-1 hover:text-indigo-glow transition-colors group pb-2"
          >
            View full portfolio 
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:h-[800px]">
          
          {/* Row 1, Item 1 (Spans 8 cols) */}
          <div className="lg:col-span-8 relative group overflow-hidden rounded-xl border border-border-subtle h-[400px] md:h-auto">
            <img
              alt={p1?.title || "Featured Project"}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={p1?.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex gap-2 mb-4">
                {p1?.tech.slice(0, 2).map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <h3 className="text-headline-md text-on-surface mb-2">
                <Link href={`/portfolio/${p1?.slug}`} className="before:absolute before:inset-0 hover:text-electric-blue transition-colors">
                  {p1?.title}
                </Link>
              </h3>
              <p className="text-body-md text-on-surface-variant mb-4 max-w-xl">
                {p1?.description}
              </p>
              <button className="bg-on-surface text-background px-6 py-2 rounded-lg font-bold pointer-events-none group-hover:bg-electric-blue group-hover:text-white transition-colors">
                View Case Study
              </button>
            </div>
          </div>

          {/* Row 1, Item 2 (Spans 4 cols) */}
          <div className="lg:col-span-4 relative group overflow-hidden rounded-xl border border-border-subtle h-[300px] md:h-auto">
            <img
              alt={p2?.title || "Project"}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={p2?.image || "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee4?auto=format&fit=crop&q=80&w=800"}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <Badge className="mb-4">{p2?.tech[0]}</Badge>
              <h3 className="text-headline-sm text-on-surface">
                <Link href={`/portfolio/${p2?.slug}`} className="before:absolute before:inset-0 hover:text-electric-blue transition-colors">
                  {p2?.title}
                </Link>
              </h3>
              <button className="text-on-surface text-body-md font-semibold mt-2 flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Row 2, Item 1 (Spans 4 cols) */}
          <div className="lg:col-span-4 relative group overflow-hidden rounded-xl border border-border-subtle h-[300px] md:h-auto">
            <img
              alt={p3?.title || "Project"}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={p3?.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <Badge className="mb-4">{p3?.tech[0]}</Badge>
              <h3 className="text-headline-sm text-on-surface">
                <Link href={`/portfolio/${p3?.slug}`} className="before:absolute before:inset-0 hover:text-electric-blue transition-colors">
                  {p3?.title}
                </Link>
              </h3>
              <button className="text-on-surface text-body-md font-semibold mt-2 flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Row 2, Item 2 - Stats / CTA (Spans 8 cols) */}
          <div className="lg:col-span-8 glass-card flex flex-col justify-center items-center text-center p-10 rounded-xl">
            <div className="grid grid-cols-2 gap-10 mb-10 w-full">
              <div>
                <p className="text-electric-blue text-display-lg-mobile font-bold">
                  120+
                </p>
                <p className="font-mono text-label-caps text-on-surface-variant mt-2 uppercase">
                  Products Launched
                </p>
              </div>
              <div>
                <p className="text-electric-blue text-display-lg-mobile font-bold">
                  15+
                </p>
                <p className="font-mono text-label-caps text-on-surface-variant mt-2 uppercase">
                  AI Agents Deployed
                </p>
              </div>
            </div>
            <p className="text-body-lg text-on-surface-variant max-w-sm mb-6">
              Ready to be our next success story?
            </p>
            <Link
              href="#contact"
              className="bg-primary-container text-on-primary-container px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all active:scale-95 inline-block"
            >
              Start Your Project
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import CTA from "@/components/home/CTA";

// Note: Replace this with your actual data layer import
// import { projects } from "@/data/projects";

// Mock data fetcher to demonstrate the required data structure
function getProject(slug: string) {
  // const project = projects.find(p => p.slug === slug);
  
  if (slug !== "fintech-core") return null; // Simulating a 404 for unknown slugs
  
  return {
    title: "FinTech Core Banking Dashboard",
    client: "Global FinTech Corp",
    industry: "Financial Services",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Go", "WebSockets"],
    metrics: [
      { label: "Latency Reduction", value: "85%" },
      { label: "Daily Transactions", value: "10M+" },
      { label: "System Uptime", value: "99.999%" }
    ],
    challenge: "The client was relying on a legacy monolithic architecture that couldn't handle the influx of high-frequency trading data. During peak market hours, the dashboard experienced severe latency, causing traders to execute on stale data. They needed a complete architectural overhaul without any downtime.",
    solution: "We decoupled the monolith into a Go-based microservices architecture. We implemented real-time WebSocket streams for live market data and utilized Next.js for a lightning-fast, server-rendered frontend. PostgreSQL was optimized with read-replicas to handle heavy analytical queries seamlessly.",
  };
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    notFound(); // Triggers Next.js 404 page
  }

  return (
    <>
      <article className="pt-32 pb-20">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          
          {/* Back Button */}
          <Link 
            href="/case-studies" 
            className="inline-flex items-center gap-2 text-body-sm font-mono text-label-caps uppercase text-on-surface-variant hover:text-electric-blue transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>

          {/* Header Section */}
          <div className="max-w-4xl mb-16">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge>{project.industry}</Badge>
              <Badge variant="default">{project.year}</Badge>
            </div>
            <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-body-lg text-on-surface-variant">
              Client: <span className="text-on-surface font-medium">{project.client}</span>
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden glass-card mb-20 p-2">
            <div className="w-full h-full rounded-xl overflow-hidden border border-border-subtle">
              <img 
                src={project.heroImage} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Context (Challenge & Solution) */}
            <div className="lg:col-span-8 space-y-12">
              <section>
                <h2 className="text-headline-md text-on-surface mb-6">The Challenge</h2>
                <p className="text-body-lg text-on-surface-variant leading-relaxed">
                  {project.challenge}
                </p>
              </section>
              
              <section>
                <h2 className="text-headline-md text-on-surface mb-6">The Solution</h2>
                <p className="text-body-lg text-on-surface-variant leading-relaxed">
                  {project.solution}
                </p>
              </section>
            </div>

            {/* Right Column: Metrics & Tech Stack */}
            <div className="lg:col-span-4 space-y-8">
              {/* Business Impact / Metrics */}
              <Card glow className="space-y-6">
                <h3 className="font-mono text-label-caps text-on-surface-variant uppercase tracking-widest border-b border-border-subtle pb-4">
                  Business Impact
                </h3>
                <div className="space-y-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i}>
                      <p className="text-headline-md text-electric-blue font-bold tracking-tight mb-1">
                        {metric.value}
                      </p>
                      <p className="text-body-sm text-on-surface">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Technology Stack */}
              <Card className="space-y-6">
                <h3 className="font-mono text-label-caps text-on-surface-variant uppercase tracking-widest border-b border-border-subtle pb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </Card>
            </div>

          </div>
        </div>
      </article>

      <CTA />
    </>
  );
}

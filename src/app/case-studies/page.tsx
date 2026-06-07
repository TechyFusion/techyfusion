import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Case Studies & Client Success | TechyFusion",
  description: "Read our in-depth case studies to see how we solve complex engineering challenges and deliver measurable business outcomes.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative min-h-screen bg-background">
        <div className="absolute left-0 top-40 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <SectionHeading 
            title="Client Success Stories" 
            subtitle="Discover how we architect scalable solutions that drive revenue, reduce latency, and automate operations for our partners."
            align="center"
          />

          {/* Reusing the grid from Phase 6 */}
          <PortfolioGrid />
        </div>
      </section>
      
      <CTA />
    </>
  );
}

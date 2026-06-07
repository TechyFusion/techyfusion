import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogGrid from "@/components/blog/BlogGrid";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Engineering Insights & Technical Blog | TechyFusion",
  description: "Read the latest engineering tutorials, architecture breakdowns, and AI thought leadership from the TechyFusion team.",
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative min-h-screen">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          
          <SectionHeading 
            title="Engineering Insights" 
            subtitle="Deep technical deep-dives, architectural post-mortems, and thought leadership from our senior engineering team."
            align="center"
          />

          <BlogGrid />

        </div>
      </section>
      
      <CTA />
    </>
  );
}

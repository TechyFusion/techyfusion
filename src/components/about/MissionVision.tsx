import { Target, Compass } from "lucide-react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

export default function MissionVision() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading 
          title="Driven by Engineering Excellence" 
          subtitle="We believe that great software is the foundation of modern business. Our approach strips away the fluff and focuses entirely on robust architecture and measurable results."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Mission Card */}
          <Card className="flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 rounded-lg bg-surface-container-high border border-border-subtle flex items-center justify-center mb-6 text-electric-blue group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-headline-md text-on-surface mb-4">Our Mission</h3>
            <p className="text-body-lg text-on-surface-variant leading-relaxed flex-grow">
              To engineer scalable, high-performance digital solutions that solve complex business challenges. We deliver clean code, secure infrastructure, and intuitive interfaces that drive immediate ROI for our partners.
            </p>
          </Card>

          {/* Vision Card */}
          <Card glow className="flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 rounded-lg bg-surface-container-high border border-border-subtle flex items-center justify-center mb-6 text-indigo-glow group-hover:scale-110 transition-transform">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-headline-md text-on-surface mb-4">Our Vision</h3>
            <p className="text-body-lg text-on-surface-variant leading-relaxed flex-grow">
              To be the premier technical partner for ambitious startups and enterprises worldwide—recognized for our uncompromising technical standards and our ability to seamlessly integrate the latest advancements in AI and cloud computing.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

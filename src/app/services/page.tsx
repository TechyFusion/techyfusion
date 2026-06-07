import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Core Engineering Capabilities | TechyFusion",
  description: "Explore our comprehensive suite of software engineering services, including Web Development, AI Solutions, Mobile Apps, and Cloud Infrastructure.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="bg-glow-spot -top-40 -left-40 opacity-50" aria-hidden="true"></div>
        
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <SectionHeading 
            title="Core Capabilities" 
            subtitle="We engineer high-performance software systems designed for scale, security, and exceptional user experiences."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} glow={service.glow} className="flex flex-col h-full group">
                  <div className={`w-14 h-14 rounded-lg bg-surface-container-high border border-border-subtle flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.iconColor}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-headline-md text-on-surface mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-body-lg text-on-surface-variant flex-grow mb-8">
                    {service.description}
                  </p>
                  
                  <Link 
                    href={`/services/${service.slug}`}
                    className="mt-auto inline-flex items-center gap-2 text-body-md font-semibold text-electric-blue group-hover:text-indigo-glow transition-colors w-fit"
                  >
                    View details
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

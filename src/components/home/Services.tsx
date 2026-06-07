import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <SectionHeading 
            title="Core Engineering Expertise" 
            subtitle="We combine deep technical knowledge with product-led design to build resilient, scalable solutions."
            className="mb-0" // Removes default bottom margin to let flexbox handle spacing
          />
          <Link 
            href="/services" 
            className="text-electric-blue text-body-md font-semibold flex items-center gap-1 hover:text-indigo-glow transition-colors group pb-2"
          >
            View all capabilities 
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Grid for 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <Card key={index} glow={service.glow} className="flex flex-col h-full group">
                <div className={`w-12 h-12 rounded-lg bg-surface-container-high border border-border-subtle flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.iconColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-headline-sm text-on-surface mb-3">
                  {service.title}
                </h3>
                
                <p className="text-body-md text-on-surface-variant flex-grow mb-8">
                  {service.description}
                </p>
                
                <Link 
                  href={`/services/${service.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-body-sm font-mono text-label-caps uppercase text-on-surface-variant group-hover:text-on-surface transition-colors w-fit"
                >
                  Explore Service
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </Card>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

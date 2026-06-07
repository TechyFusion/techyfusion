import { Metadata } from "next";
import { Monitor, Zap, Shield, Search } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Enterprise Web Development Services | TechyFusion",
  description: "High-performance, SEO-optimized web applications and scalable backends built with Next.js, React, and Node.js.",
};

const features = [
  { title: "High Performance", desc: "Sub-second load times utilizing server-side rendering and edge caching.", icon: Zap },
  { title: "SEO Optimized", desc: "Built with technical SEO best practices to ensure maximum search visibility.", icon: Search },
  { title: "Enterprise Security", desc: "Robust data protection, secure authentication, and protection against OWASP top 10.", icon: Shield },
];

const technologies = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "GraphQL"];

export default function WebDevelopmentPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <Badge className="mb-6">Web Engineering</Badge>
          <SectionHeading 
            title="Modern Web Development" 
            subtitle="We build lightning-fast, highly scalable web applications that drive conversions and handle enterprise-level traffic seamlessly."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-20">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Card key={i}>
                  <Icon className="w-8 h-8 text-electric-blue mb-6" />
                  <h3 className="text-headline-sm text-on-surface mb-3">{feature.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{feature.desc}</p>
                </Card>
              );
            })}
          </div>

          <div className="border-t border-border-subtle pt-16">
            <h3 className="text-headline-sm text-on-surface mb-6">Technologies We Master</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map(tech => <Badge key={tech}>{tech}</Badge>)}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

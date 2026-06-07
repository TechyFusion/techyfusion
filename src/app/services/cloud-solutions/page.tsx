import { Metadata } from "next";
import { CloudCog, Server, Activity, Lock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Cloud Infrastructure & DevOps Solutions | TechyFusion",
  description: "Scalable Kubernetes orchestration, CI/CD automation, and secure cloud infrastructure on AWS and Azure.",
};

const features = [
  { title: "CI/CD Automation", desc: "Automated testing and deployment pipelines for zero-downtime releases.", icon: Activity },
  { title: "Auto-Scaling", desc: "Elastic infrastructure that scales resources dynamically based on real-time traffic.", icon: Server },
  { title: "Compliance & Security", desc: "IAM configuration, VPC isolation, and automated backup strategies.", icon: Lock },
];

const technologies = ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Linux"];

export default function CloudSolutionsPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <Badge className="mb-6">DevOps & Cloud</Badge>
          <SectionHeading 
            title="Cloud Infrastructure" 
            subtitle="Architecting resilient, self-healing server environments that guarantee uptime and scale automatically as your user base grows."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-20">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Card key={i}>
                  <Icon className="w-8 h-8 text-primary mb-6" />
                  <h3 className="text-headline-sm text-on-surface mb-3">{feature.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{feature.desc}</p>
                </Card>
              );
            })}
          </div>

          <div className="border-t border-border-subtle pt-16">
            <h3 className="text-headline-sm text-on-surface mb-6">Infrastructure Stack</h3>
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

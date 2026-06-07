import { Metadata } from "next";
import { Smartphone, Layers, WifiOff, Fingerprint } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Cross-Platform Mobile App Development | TechyFusion",
  description: "Native-feel, high-performance cross-platform applications built for iOS and Android.",
};

const features = [
  { title: "Cross-Platform", desc: "Single codebase deployments for both iOS and Android to reduce time-to-market.", icon: Layers },
  { title: "Offline Support", desc: "Robust local caching strategies ensuring app functionality without connectivity.", icon: WifiOff },
  { title: "Native Features", desc: "Seamless integration with device hardware, biometrics, and push notifications.", icon: Fingerprint },
];

const technologies = ["React Native", "Expo", "Swift", "Kotlin", "Firebase", "SQLite", "Redux"];

export default function MobileDevelopmentPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <Badge className="mb-6">Mobile Engineering</Badge>
          <SectionHeading 
            title="Mobile App Development" 
            subtitle="We build intuitive, native-feeling mobile applications that engage users and perform flawlessly across all device types."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-20">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Card key={i}>
                  <Icon className="w-8 h-8 text-tertiary mb-6" />
                  <h3 className="text-headline-sm text-on-surface mb-3">{feature.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{feature.desc}</p>
                </Card>
              );
            })}
          </div>

          <div className="border-t border-border-subtle pt-16">
            <h3 className="text-headline-sm text-on-surface mb-6">Mobile Stack</h3>
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

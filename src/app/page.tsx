import Script from "next/script";
import Hero from "@/components/home/Hero";
import TechStack from "@/components/home/TechStack";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import FadeIn from "@/components/ui/FadeIn";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechyFusion",
  alternateName: "Techy Fusion",
  url: "https://techyfusion.in",
  logo: "https://techyfusion.in/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/techyfusion",
    "https://github.com/TechyFusion",
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      
      <div className="pt-20">
        <FadeIn delay={0.1} direction="up">
          <Hero />
        </FadeIn>
        
        <FadeIn delay={0.2} direction="up">
          <TechStack />
        </FadeIn>
        
        <FadeIn delay={0.3} direction="up">
          <FeaturedProjects />
        </FadeIn>
        
        <FadeIn delay={0.1} direction="up">
          <Services />
        </FadeIn>
        
        <FadeIn delay={0.1} direction="up">
          <Process />
        </FadeIn>
        
        <FadeIn delay={0.1} direction="up">
          <Testimonials />
        </FadeIn>
        
        <FadeIn delay={0.1} direction="up">
          <CTA />
        </FadeIn>
      </div>
    </>
  );
}

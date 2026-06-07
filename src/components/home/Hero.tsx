import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden px-margin-mobile md:px-margin-desktop">
      {/* Background Ambient Glows */}
      <div className="bg-glow-spot -top-40 -left-40 opacity-50" aria-hidden="true"></div>
      
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10 pt-10 md:pt-0">
        
        {/* Left Column: Huge Netguru-style Typography & CTAs */}
        <div className="space-y-8 md:space-y-10 z-10">
          <Badge variant="pulse" className="bg-primary/10 text-primary border-primary/20">
            TechyFusion Engineering
          </Badge>
          
          <h1 className="text-[56px] md:text-[80px] lg:text-[96px] text-white font-bold leading-[1.05] tracking-tighter">
            Accelerate <br />
            <span className="text-primary">Digital</span> <br />
            Evolution.
          </h1>
          
          <p className="text-[18px] md:text-[22px] text-on-surface-variant max-w-xl leading-relaxed font-light">
            We are a digital consulting and software engineering agency. We build high-performance products that shape the future of enterprise technology.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 pt-6">
            {/* Netguru-style Primary CTA (Green with Black Text) */}
            <Link 
              href="/book" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-none font-bold text-lg bg-primary text-black hover:bg-[#00c966] transition-all"
            >
              Start a project <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            {/* Secondary CTA */}
            <Link 
              href="/portfolio" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-none font-bold text-lg border border-border-subtle bg-transparent hover:border-primary text-white transition-all"
            >
              See our work
            </Link>
          </div>
        </div>

        {/* Right Column: Abstract/Device Imagery */}
        <div className="relative group hidden lg:block">
          <div className="relative z-10 w-full aspect-[4/5] overflow-hidden">
            <img 
              alt="Engineering abstract representation" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
              loading="eager"
            />
            {/* Sharp corner overlay for edgy feel */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#131315] -translate-y-16 translate-x-16 rotate-45 border-l border-border-subtle z-20"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

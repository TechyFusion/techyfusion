import Link from "next/link";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden text-center bg-surface-container-lowest" id="contact">
      {/* Background Ambient Glow */}
      <div 
        className="bg-glow-spot bottom-0 left-1/2 -translate-x-1/2 opacity-30 pointer-events-none" 
        aria-hidden="true"
      ></div>
      
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="glass-card p-10 md:p-20 rounded-2xl ai-glow-border max-w-4xl mx-auto shadow-2xl">
          
          <h2 className="text-display-lg-mobile md:text-headline-md text-on-surface mb-6 tracking-tight">
            Ready to Build Your Next Project?
          </h2>
          
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto leading-relaxed">
            Join dozens of successful startups and enterprises who trust TechyFusion for their most critical engineering needs. Let's architect something extraordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/book" className="w-full sm:w-auto">
              <Button size="lg" className="w-full">
                Book Consultation
              </Button>
            </Link>
            
            {/* Optional Secondary Action */}
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full">
                Contact Sales
              </Button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faq";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // Open the first FAQ by default

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-surface-container-low border-y border-border-subtle">
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
        
        <SectionHeading 
          title="Common Questions" 
          align="center"
          className="mb-12"
        />
        
        <div className="divide-y divide-border-subtle border-t border-border-subtle">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            
            return (
              <div key={idx} className="py-2">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-on-surface text-body-md md:text-lg pr-4 group-hover:text-electric-blue transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-on-surface-variant shrink-0 bg-surface-container p-2 rounded-full group-hover:bg-surface-container-high transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-on-surface-variant text-body-sm md:text-body-md leading-relaxed pr-8">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

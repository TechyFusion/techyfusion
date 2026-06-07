"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  const inputClasses = "w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors";
  const labelClasses = "font-mono text-[11px] text-on-surface-variant uppercase tracking-widest mb-2 block";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className={labelClasses}>First Name</label>
          <input type="text" id="firstName" required className={inputClasses} placeholder="John" />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClasses}>Last Name</label>
          <input type="text" id="lastName" required className={inputClasses} placeholder="Doe" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClasses}>Work Email</label>
          <input type="email" id="email" required className={inputClasses} placeholder="john@company.com" />
        </div>
        <div>
          <label htmlFor="company" className={labelClasses}>Company</label>
          <input type="text" id="company" className={inputClasses} placeholder="Acme Corp" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="projectType" className={labelClasses}>Project Type</label>
          <select id="projectType" className={`${inputClasses} appearance-none`} defaultValue="">
            <option value="" disabled>Select a capability...</option>
            <option value="web">Web Application</option>
            <option value="ai">AI / LLM Integration</option>
            <option value="mobile">Mobile App</option>
            <option value="cloud">Cloud / DevOps</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClasses}>Estimated Budget</label>
          <select id="budget" className={`${inputClasses} appearance-none`} defaultValue="">
            <option value="" disabled>Select range...</option>
            <option value="10k-25k">$10k - $25k</option>
            <option value="25k-50k">$25k - $50k</option>
            <option value="50k-100k">$50k - $100k</option>
            <option value="100k+">$100k+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>Project Details</label>
        <textarea 
          id="message" 
          required 
          rows={5} 
          className={`${inputClasses} resize-none`} 
          placeholder="Tell us about your technical requirements and business objectives..."
        ></textarea>
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit Inquiry"}
      </Button>
    </form>
  );
}

"use client";

import React, { useState } from "react";
import { UploadCloud } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/layout/BrandIcons";
import Button from "@/components/ui/Button";

interface ApplicationFormProps {
  jobTitle?: string;
}

export default function ApplicationForm({ jobTitle = "Open Position" }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  const inputClasses = "w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors";
  const labelClasses = "font-mono text-[11px] text-on-surface-variant uppercase tracking-widest mb-2 block";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-8 border-b border-border-subtle pb-6">
        <h3 className="text-headline-sm text-on-surface">Apply for: {jobTitle}</h3>
        <p className="text-body-sm text-on-surface-variant mt-1">Please fill out the details below. We review every application.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className={labelClasses}>Full Name *</label>
          <input type="text" id="fullName" required className={inputClasses} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="appEmail" className={labelClasses}>Email Address *</label>
          <input type="email" id="appEmail" required className={inputClasses} placeholder="jane@example.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="github" className={labelClasses}>
            <span className="flex items-center gap-2"><GithubIcon className="w-3.5 h-3.5" /> GitHub Profile *</span>
          </label>
          <input type="url" id="github" required className={inputClasses} placeholder="https://github.com/username" />
        </div>
        <div>
          <label htmlFor="linkedin" className={labelClasses}>
            <span className="flex items-center gap-2"><LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn Profile</span>
          </label>
          <input type="url" id="linkedin" className={inputClasses} placeholder="https://linkedin.com/in/username" />
        </div>
      </div>

      <div>
        <label htmlFor="portfolio" className={labelClasses}>Portfolio / Personal Website</label>
        <input type="url" id="portfolio" className={inputClasses} placeholder="https://yourwebsite.com" />
      </div>

      {/* Custom File Upload UI */}
      <div>
        <label className={labelClasses}>Resume / CV *</label>
        <div className="relative border-2 border-dashed border-border-subtle rounded-xl p-8 text-center hover:border-electric-blue transition-colors bg-surface-container-lowest group cursor-pointer">
          <input 
            type="file" 
            id="resume" 
            required 
            accept=".pdf,.doc,.docx"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
          />
          <div className="flex flex-col items-center justify-center space-y-3 pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:text-electric-blue transition-colors">
              <UploadCloud className="w-6 h-6" />
            </div>
            <div>
              <p className="text-body-md text-on-surface font-medium">Click to upload or drag and drop</p>
              <p className="text-body-sm text-on-surface-variant mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="coverLetter" className={labelClasses}>Cover Letter / Message</label>
        <textarea 
          id="coverLetter" 
          rows={5} 
          className={`${inputClasses} resize-none`} 
          placeholder="Briefly tell us why you're a great fit for this engineering role..."
        ></textarea>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting Application..." : "Submit Application"}
      </Button>
    </form>
  );
}

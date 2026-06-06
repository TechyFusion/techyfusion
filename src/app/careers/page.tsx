"use client";

import { useState } from "react";
import Link from "next/link";
import { Briefcase, MapPin, Clock, DollarSign, X, CheckCircle, Sparkles, Send, FileText } from "lucide-react";

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  
  // Apply Form states
  const [formState, setFormState] = useState({ name: "", email: "", resume: "", cover: "" });
  const [isApplied, setIsApplied] = useState(false);

  const categories = [
    { id: "all", label: "All Roles" },
    { id: "engineering", label: "Engineering" },
    { id: "design", label: "Design" },
    { id: "operations", label: "Operations" },
  ];

  const jobs = [
    {
      id: "sr_next",
      title: "Senior Next.js Developer",
      category: "engineering",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-Time",
      salary: "$130k - $160k",
      description: "Looking for an expert React/Next.js engineer to lead our frontend client applications, optimize Core Web Vitals, and direct API designs.",
      requirements: ["5+ years React/TypeScript expertise", "Deep understanding of Next.js App Router & Server Components", "Experience with Tailwind CSS and responsive layout systems"]
    },
    {
      id: "ai_eng",
      title: "AI Research & Integration Engineer",
      category: "engineering",
      location: "Remote (US/Canada)",
      type: "Full-Time",
      salary: "$140k - $180k",
      description: "Design, orchestrate, and refine machine learning prompts, LangChain pipelines, Twilio audio agents, and OpenAI API frameworks for corporate databases.",
      requirements: ["3+ years Python & FastAPI backend engineering", "Experience fine-tuning LLMs or deploying custom vector database networks", "Understanding of semantic search architectures"]
    },
    {
      id: "sr_uiux",
      title: "Senior UI/UX Designer",
      category: "design",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-Time",
      salary: "$110k - $140k",
      description: "Lead UI researchers and visual designers. Build interactive Figma prototypes, design brand assets, and collaborate with frontend developers.",
      requirements: ["4+ years digital product design portfolio", "Expertise in typography, layout design, and micro-interaction planning", "Knowledge of Tailwind CSS class tokens is a big plus"]
    },
    {
      id: "tech_pm",
      title: "Technical Project Manager",
      category: "operations",
      location: "Remote (Global)",
      type: "Full-Time",
      salary: "$100k - $130k",
      description: "Manage client development roadmaps, run daily standups, document technical specifications, and coordinate engineering outputs.",
      requirements: ["3+ years managing software development lifecycles", "Excellent technical documentation skills (GitHub, Jira, Notion)", "Background in computer science or programming is preferred"]
    }
  ];

  const filteredJobs = activeCategory === "all"
    ? jobs
    : jobs.filter(job => job.category === activeCategory);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email) {
      setIsApplied(true);
      setTimeout(() => {
        setIsApplied(false);
        setSelectedJob(null);
        setFormState({ name: "", email: "", resume: "", cover: "" });
      }, 5000);
    }
  };

  return (
    <div className="relative min-h-screen pb-20">
      {/* Background Blurs */}
      <div className="absolute top-10 right-10 w-[350px] h-[350px] glow-bg-cyan rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] glow-bg-purple rounded-full pointer-events-none" />

      {/* Page Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-indigo tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            Careers at TechyFusion
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Build the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple">
              Technology Solutions
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
            Join a fast-moving, high-impact group of senior developers, creative designers, and AI specialists constructing modern products.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Continuous Innovation</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We stay at the cutting edge of tech. Work with Next.js, GPT integrations, custom devops orchestrations, and Tailwind v4.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-indigo/10 border border-brand-indigo/25 flex items-center justify-center text-brand-indigo mx-auto">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Flexibility & Autonomy</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We trust our engineers. Benefit from remote work paths, flexible hours, and streamlined meeting structures.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/25 flex items-center justify-center text-brand-purple mx-auto">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Professional Growth</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Annual learning allowances, internal hackathons, code review mentorships, and opportunities to lead client consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <h2 className="text-2xl font-bold text-white">Active Opportunities</h2>
          
          {/* Category Tabs */}
          <div className="flex gap-1 bg-slate-900/50 p-1.5 border border-white/5 rounded-xl backdrop-blur-md">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-brand-cyan to-brand-indigo text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Roles List */}
        <div className="space-y-6">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/20 border border-white/5 rounded-3xl p-10">
              <p className="text-slate-400 text-sm">No openings in this department at this time. Check back later!</p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="glass-card rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-brand-cyan/25 transition-all duration-300"
              >
                <div className="space-y-3 max-w-2xl">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-brand-cyan" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-brand-indigo" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4 text-brand-purple" />
                      {job.salary}
                    </span>
                  </div>
                  <p className="text-slate-350 text-sm leading-relaxed pt-1">
                    {job.description}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-indigo hover:border-transparent transition-all duration-300 flex-shrink-0"
                  >
                    View Details & Apply
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Interactive Modal Form for Application */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card rounded-3xl w-full max-w-2xl overflow-hidden relative border border-white/10 max-h-[90vh] flex flex-col justify-between">
            {/* Header */}
            <div className="p-6.5 border-b border-white/5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedJob.title}</h3>
                <p className="text-slate-400 text-xs mt-0.5">{selectedJob.location} • {selectedJob.type} • {selectedJob.salary}</p>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6.5 overflow-y-auto space-y-6 flex-grow">
              {isApplied ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Application Logged!</h4>
                  <p className="text-slate-350 text-sm leading-relaxed max-w-md">
                    Thank you for applying, {formState.name}! We have received your request for the {selectedJob.title} role. Our operations team will contact you at {formState.email} if your requirements fit our current pipeline.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Job details */}
                  <div className="space-y-3 bg-white/5 p-5 rounded-2xl border border-white/5">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-300">
                      {selectedJob.requirements.map((req: string, idx: number) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Submission Form */}
                  <form onSubmit={handleApplySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="app-name" className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider">Your Name</label>
                        <input
                          type="text"
                          id="app-name"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="app-email" className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          id="app-email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="jane@example.com"
                          className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="app-resume" className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider">Resume PDF URL / Portfolio Link</label>
                      <input
                        type="url"
                        id="app-resume"
                        required
                        value={formState.resume}
                        onChange={(e) => setFormState({ ...formState, resume: e.target.value })}
                        placeholder="https://drive.google.com/your-resume-pdf"
                        className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="app-cover" className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider">Cover Letter / Comments (Optional)</label>
                      <textarea
                        id="app-cover"
                        rows={4}
                        value={formState.cover}
                        onChange={(e) => setFormState({ ...formState, cover: e.target.value })}
                        placeholder="Tell us about yourself and why you want to join TechyFusion..."
                        className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm tracking-wide hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all flex items-center justify-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      Submit Application
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

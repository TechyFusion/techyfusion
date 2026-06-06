"use client";

import Link from "next/link";
import { Users, Award, ShieldCheck, HeartHandshake, Eye, Target, Sparkles } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/BrandIcons";

export default function AboutPage() {
  const values = [
    {
      title: "All Solutions in One Place",
      desc: "We eliminate multi-vendor friction by providing design, frontend, backend, AI agent, and cloud operations expertise in one single workspace.",
      icon: Target,
      color: "text-accent-blue"
    },
    {
      title: "Engineered for Execution",
      desc: "We prioritize clean, self-documenting code, unit test frameworks, CI/CD automated deployments, and continuous system monitoring.",
      icon: ShieldCheck,
      color: "text-accent-blue"
    },
    {
      title: "Long-Term Partnership",
      desc: "Our involvement does not stop at deployment. We scale your backend, refine UI/UX, and install features as your client database expands.",
      icon: HeartHandshake,
      color: "text-accent-blue"
    },
    {
      title: "Transparent Consultation",
      desc: "Clear timelines, predictable budget tiers, and transparent project management interfaces. No surprise charges, ever.",
      icon: Eye,
      color: "text-accent-blue"
    }
  ];

  const team = [
    {
      name: "Hitesh Sharma",
      role: "Founder & Chief Executive",
      bio: "Tech entrepreneur and product designer with 8+ years leading software architecture sprints and client consultations.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      initial: "HS"
    },
    {
      name: "Alex Mercer",
      role: "CTO & Principal Architect",
      bio: "Former cloud infrastructure lead specializing in distributed Node/Postgres systems and scalable AWS integrations.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      initial: "AM"
    },
    {
      name: "Dr. Sarah Chen",
      role: "Head of Artificial Intelligence",
      bio: "Ph.D. in NLP and AI systems. Directs our GPT fine-tuning pipeline implementations and custom agent orchestration designs.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      initial: "SC"
    },
    {
      name: "Mia Johansson",
      role: "Lead UI/UX Experience Designer",
      bio: "Figma master focusing on conversion-driven layouts, responsive web systems, and interactive interface animations.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      initial: "MJ"
    }
  ];

  return (
    <div className="relative min-h-screen pb-20">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 right-10 w-[350px] h-[350px] glow-bg-cyan rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[450px] h-[450px] glow-bg-purple rounded-full pointer-events-none" />

      {/* Page Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-semibold text-accent-blue tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            Who We Are
          </div>
          <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-heading)] italic font-normal text-charcoal tracking-tight">
            Our Mission &{" "}
            <span className="text-accent-blue">
              Team Culture
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
            TechyFusion (also known as Techy Fusion) is a software development company providing Web Development, AI Solutions, Mobile App Development, and Cloud Services.

          </p>
        </div>
      </section>

      {/* Company Story & Bio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="card-soft rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-blue/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="lg:col-span-7 space-y-6 relative z-10">

            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-inter)] font-bold text-charcoal">The TechyFusion Journey</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              We realized that businesses looking to build web applications, connect mobile apps, automate client service with AI, and launch digital marketing campaigns were dealing with 3-4 separate agencies. This led to massive code discrepancies, broken integrations, misaligned schedules, and ballooning budgets.
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              We constructed **TechyFusion** to solve this. By compiling a dedicated panel of experts in frontend code, database management, LLM orchestration, and devops, we provide all technical capabilities under a single roof. This means faster development timelines, cohesive designs, unified security patterns, and predictable project quotes.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative z-10">
            <div className="bg-white/80 border border-border-soft p-6 rounded-2xl text-center space-y-2">
              <div className="text-3xl font-extrabold text-accent-blue">150+</div>
              <div className="text-xs text-text-muted font-semibold uppercase tracking-wider">Projects Launched</div>
            </div>
            <div className="bg-white/80 border border-border-soft p-6 rounded-2xl text-center space-y-2">
              <div className="text-3xl font-extrabold text-accent-blue">98%</div>
              <div className="text-xs text-text-muted font-semibold uppercase tracking-wider">Client Retention</div>
            </div>
            <div className="bg-white/80 border border-border-soft p-6 rounded-2xl text-center space-y-2">
              <div className="text-3xl font-extrabold text-accent-blue">45+</div>
              <div className="text-xs text-text-muted font-semibold uppercase tracking-wider">Tech Partners</div>
            </div>
            <div className="bg-white/80 border border-border-soft p-6 rounded-2xl text-center space-y-2">
              <div className="text-3xl font-extrabold text-accent-blue">24/7</div>
              <div className="text-xs text-text-muted font-semibold uppercase tracking-wider">Support Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-cream py-20 md:py-32 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-accent-blue font-[family-name:var(--font-inter)] font-bold">Guidelines</h2>
            <p className="text-3xl sm:text-4xl font-bold text-charcoal">Our Core Values</p>
            <p className="text-text-muted text-sm md:text-base">
              The foundational principles guiding our designs, codebases, and partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <div key={idx} className="card-soft rounded-2xl p-8 flex gap-5">
                  <div className={`w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center ${val.color} flex-shrink-0`}>
                    <ValIcon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-[family-name:var(--font-inter)] font-semibold text-charcoal">{val.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-accent-blue font-[family-name:var(--font-inter)] font-bold">Leadership</h2>
          <p className="text-3xl sm:text-4xl font-bold text-charcoal">Meet the Tech Leads</p>
          <p className="text-text-muted text-sm md:text-base">
            Engineers, designers, and thinkers with decades of collective experience in scalable platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="card-soft rounded-3xl overflow-hidden group flex flex-col justify-between h-full transition-all duration-300">
              <div className="p-6.5 space-y-6">
                {/* Initial Avatar Block */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
                  {member.initial}
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-[family-name:var(--font-inter)] font-semibold text-charcoal group-hover:text-accent-blue transition-colors">{member.name}</h3>
                  <p className="text-text-muted text-xs font-semibold uppercase tracking-wider">{member.role}</p>
                </div>

                <p className="text-text-muted text-xs leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Icons Footer inside card */}
              <div className="px-6 py-4 bg-white/80 border-t border-border-soft flex gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent-blue transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent-blue transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Code, Laptop, Cpu, Smartphone, Sparkles, FolderOpen, ExternalLink } from "lucide-react";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI Solutions" },
    { id: "custom", label: "Custom Software" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "web",
      description: "A fast, scalable multi-vendor storefront featuring global cart management, customized Stripe splits, and automated invoicing.",
      tech: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe"],
      icon: Laptop,
      color: "text-brand-cyan",
      client: "ShopperZone Global",
      metrics: "+140% Sales Volume"
    },
    {
      title: "School Management System",
      category: "custom",
      description: "An all-in-one educational platform integrating student attendance, automated grading metrics, invoice generation, and parent communications.",
      tech: ["React.js", "Express.js", "PostgreSQL", "Prisma", "AWS"],
      icon: Code,
      color: "text-brand-indigo",
      client: "Horizon Academy",
      metrics: "98% Administrative Efficiency"
    },
    {
      title: "AI Customer Support Bot",
      category: "ai",
      description: "A GPT-based context-aware support bot trained on client manuals, resolving issues and executing ticket rerouting.",
      tech: ["Python", "OpenAI API", "LangChain", "FastAPI", "MongoDB"],
      icon: Cpu,
      color: "text-brand-purple",
      client: "TelcoCorp Customer Care",
      metrics: "40% Lower Ticket Overhead"
    },
    {
      title: "Food Delivery App",
      category: "mobile",
      description: "Dual-application setup (iOS & Android) with live mapping routing APIs, rider dispatching systems, and SMS update notifications.",
      tech: ["Flutter", "Dart", "Firebase", "Google Maps API", "Node.js"],
      icon: Smartphone,
      color: "text-brand-pink",
      client: "SpeedyBites Delivery",
      metrics: "12min Average Delivery Time"
    },
    {
      title: "CRM Dashboard Portal",
      category: "custom",
      description: "A visual sales hub combining lead acquisition pipelines, email campaign creators, user permission states, and detailed export tools.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "MongoDB", "Redux"],
      icon: Code,
      color: "text-brand-blue",
      client: "Apex Enterprise Consulting",
      metrics: "3x Lead Conversions"
    },
    {
      title: "Healthcare Patient Portal",
      category: "web",
      description: "HIPAA-compliant interface providing patient booking slots, secure messaging, medical record PDF vaults, and live video consulting rooms.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL", "WebRTC"],
      icon: Laptop,
      color: "text-emerald-400",
      client: "CoreHealth Diagnostics",
      metrics: "Zero Compliance Breaches"
    },
    {
      title: "FitTrack Fitness Coach",
      category: "mobile",
      description: "Smart workout tracker analyzing motion telemetry, heart-rate API records, and presenting dynamic AI nutrition roadmaps.",
      tech: ["React Native", "Expo", "GraphQL", "Python", "Docker"],
      icon: Smartphone,
      color: "text-brand-cyan",
      client: "PulseFit Analytics",
      metrics: "50k+ Active Mobile Downloads"
    },
    {
      title: "AI Voice Booking Agent",
      category: "ai",
      description: "Voice dispatch pipeline handling caller inquiries, identifying open times, and adding reservations directly to client calendars.",
      tech: ["Python", "Twilio API", "OpenAI Speech", "LangChain", "FastAPI"],
      icon: Cpu,
      color: "text-brand-purple",
      client: "Elite Spa & Salon Services",
      metrics: "90% Appointment Booking Automation"
    },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="relative min-h-screen pb-20">
      {/* Background Glows */}
      <div className="absolute top-10 left-10 w-[350px] h-[350px] glow-bg-cyan rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] glow-bg-purple rounded-full pointer-events-none" />

      {/* Page Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-purple tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            Case Studies & Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Proof in Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple">
              Implementations
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
            Take a look at the applications, integrations, and server structures we have created for startups and enterprises globally.
          </p>
        </div>
      </section>

      {/* Filter Tabs Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-center gap-2 flex-wrap bg-slate-900/50 p-2 border border-white/5 rounded-2xl max-w-2xl mx-auto backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-brand-cyan to-brand-indigo text-white shadow-md shadow-brand-indigo/15 scale-[1.01]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Display Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/20 border border-white/5 rounded-3xl p-10">
            <FolderOpen className="w-16 h-16 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white">No Projects Found</h3>
            <p className="text-slate-400 text-sm mt-1">We are currently updating this category with fresh projects.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => {
              const IconComp = project.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-3xl overflow-hidden group flex flex-col justify-between h-full transition-all duration-300"
                >
                  <div>
                    {/* Visual Graphic Representation */}
                    <div className="aspect-[4/3] w-full bg-slate-950/80 border-b border-white/5 relative flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent group-hover:scale-105 transition-transform duration-300 pointer-events-none" />
                      <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${project.color} group-hover:rotate-6 transition-all duration-300`}>
                        <IconComp className="w-8 h-8" />
                      </div>
                      
                      {/* Metric Tag */}
                      <div className="absolute bottom-4 left-4 px-3 py-1 bg-slate-950/95 border border-white/10 rounded-xl text-xs font-bold text-emerald-400 tracking-wide">
                        {project.metrics}
                      </div>

                      {/* Client Tag */}
                      <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                        Client: {project.client}
                      </div>
                    </div>

                    <div className="p-8 space-y-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-8 pb-8 space-y-6">
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {project.tech.map((t, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-0.5 bg-slate-900 border border-white/5 text-[10px] text-slate-300 rounded-lg font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* View Button */}
                    <div className="pt-2">
                      <Link
                        href="/case-studies"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-indigo hover:border-transparent transition-all duration-300"
                      >
                        Read Case Study
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* CTA section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="text-3xl font-extrabold text-white">Let&apos;s Build Your Product Next</h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Ready to bring your software requirements to reality? Let&apos;s map out your project details.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-base hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.01] transition-transform"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

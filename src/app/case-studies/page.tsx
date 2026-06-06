"use client";

import Link from "next/link";
import { Sparkles, TrendingUp, CheckCircle, ArrowRight, Zap, Target, BarChart3, Users } from "lucide-react";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      company: "ShopperZone Global",
      industry: "E-Commerce Retail",
      title: "Re-platforming for Black Friday: Reaching 140% Sales Growth",
      metrics: "+140% Sales Volume",
      duration: "2 Months",
      impact: "0.4s Page Load Speeds",
      challenge: "ShopperZone was running on a legacy monolith system that frequently crashed under traffic surges. Page loading times averaged 3.8 seconds, causing a 45% checkout abandonment rate during peak hours.",
      solution: "TechyFusion engineered a modern Next.js serverless storefront backed by a fast Postgres database. We integrated Edge caching, a custom Redis cart synchronization flow, and split Stripe checkout modules for high reliability.",
      result: "During the subsequent Black Friday surge, ShopperZone maintained 100% uptime with sub-second response speeds. Cart abandonment dropped to under 12%, triggering a 140% year-over-year revenue increase."
    },
    {
      company: "TelcoCorp Customer Care",
      industry: "Telecommunications",
      title: "Context-Aware AI Automation: Deflecting 40% Support Tickets",
      metrics: "40% Support Deflection",
      duration: "6 Weeks",
      impact: "Saved $120k Monthly",
      challenge: "TelcoCorp support centers were swamped with repetitive user requests regarding router configurations. The average support response delay rose to 4 hours, and processing costs reached $12 per ticket.",
      solution: "We constructed an LLM-powered support bot using OpenAI API, orchestrated with LangChain and pgvector database search. The bot semantic-searches router manuals to resolve technical questions in real-time.",
      result: "Deployed in under 6 weeks, the AI agent successfully resolved 40% of incoming customer requests on first contact without human escalation. Support delays fell to zero, and the firm saved $120,000 in monthly processing costs."
    },
    {
      company: "Horizon Academy",
      industry: "Education Sector",
      title: "Custom ERP Portal: Centralizing Administration for 5,000+ Students",
      metrics: "98% Admin Efficiency",
      duration: "3 Months",
      impact: "Zero Billing Discrepancies",
      challenge: "Horizon Academy managed attendance records, student grades, class schedules, and parental billing invoices across fragmented Excel spreadsheets. This caused massive admin overhead and frequent billing discrepancies.",
      solution: "We designed a unified web ERP database using Node.js, Express, and React. We implemented role-based permissions (for admin, teachers, and parents), automated PDF billing reports, and digital Stripe payment schedules.",
      result: "Horizon consolidated all administrative operations under one screen. Grade reports are published instantly, automated invoices are dispatched monthly, and billing reconciliation errors dropped to zero."
    }
  ];

  return (
    <div className="relative min-h-screen pb-20">
      {/* Background Glows */}
      <div className="absolute top-10 left-10 w-[350px] h-[350px] glow-bg-cyan rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] glow-bg-purple rounded-full pointer-events-none" />

      {/* Page Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-semibold text-accent-blue tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            Empirical Results
          </div>
          <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-heading)] italic font-normal text-charcoal tracking-tight">
            Detailed Case Studies &{" "}
            <span className="text-accent-blue">
              ROI Deliverables
            </span>
          </h1>
          <p className="text-text-muted text-lg md:text-xl font-light leading-relaxed">
            Discover how our custom code architectures, database scaling, and intelligent agent integrations resolved challenges for our clients.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {caseStudies.map((study, idx) => (
          <div key={idx} className="card-soft rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Ambient Background Gradient Glow */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-brand-cyan/10 to-transparent blur-2xl pointer-events-none" />

            <div className="space-y-8">
              {/* Header meta */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border-soft">
                <div>
                  <span className="text-[10px] text-text-muted font-extrabold uppercase tracking-widest bg-black/5 border border-black/10 px-2.5 py-1 rounded-lg">
                    {study.industry}
                  </span>
                  <h2 className="text-2xl font-[family-name:var(--font-inter)] font-bold text-charcoal mt-3">{study.company}</h2>
                </div>
                <div className="flex flex-wrap gap-4 text-xs font-bold text-text-muted">
                  <div className="bg-white border border-border-soft px-4 py-2.5 rounded-2xl flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-accent-blue" />
                    <span>Timeline: {study.duration}</span>
                  </div>
                  <div className="bg-white border border-border-soft px-4 py-2.5 rounded-2xl flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-accent-blue" />
                    <span>Impact: {study.impact}</span>
                  </div>
                </div>
              </div>

              {/* Title banner */}
              <h3 className="text-xl md:text-2xl font-[family-name:var(--font-inter)] font-semibold text-accent-blue leading-snug">
                {study.title}
              </h3>

              {/* Grid challenge / solution / result */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Challenge */}
                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold text-text-muted uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    The Challenge
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold text-text-muted uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
                    The Solution
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Result */}
                <div className="space-y-3 bg-black/5 border border-border-soft p-5.5 rounded-2xl">
                  <h4 className="text-xs font-extrabold text-text-muted uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    The Result
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {study.result}
                  </p>
                  <div className="pt-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-bold text-charcoal">{study.metrics}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="card-soft rounded-3xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-blue/10 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="text-3xl font-[family-name:var(--font-inter)] font-bold text-charcoal">Let&apos;s Replicate These Results for You</h2>
          <p className="text-text-muted text-base max-w-xl mx-auto">
            Ready to design a technical solution that reduces overhead, increases speed, and accelerates conversions?
          </p>
          <div className="pt-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-blue hover:bg-accent-blue-hover text-white font-bold text-base hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.01] transition-transform"
            >
              <Users className="w-5 h-5" />
              Schedule a Discovery Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

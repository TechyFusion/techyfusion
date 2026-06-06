"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  ChevronDown,
  Star,
  ShoppingBag,
  Cpu,
  Activity,
  Target,
  Palette,
  Award,
  Code,
  Globe,
  Sparkles,
  Plus,
  Minus,
} from "lucide-react";

/* ─────────────────────── Data ─────────────────────── */

const stars = [
  { top: "8%", left: "15%", delay: "0s", duration: "3s" },
  { top: "12%", left: "72%", delay: "0.5s", duration: "2.5s" },
  { top: "22%", left: "45%", delay: "1.2s", duration: "4s" },
  { top: "5%", left: "88%", delay: "0.8s", duration: "3.5s" },
  { top: "18%", left: "30%", delay: "2s", duration: "2.8s" },
  { top: "35%", left: "10%", delay: "0.3s", duration: "3.2s" },
  { top: "28%", left: "62%", delay: "1.5s", duration: "4.2s" },
  { top: "40%", left: "85%", delay: "0.7s", duration: "3s" },
  { top: "15%", left: "52%", delay: "2.5s", duration: "2.6s" },
  { top: "45%", left: "38%", delay: "1.8s", duration: "3.8s" },
  { top: "10%", left: "5%", delay: "1s", duration: "3.4s" },
  { top: "32%", left: "78%", delay: "0.2s", duration: "2.9s" },
  { top: "50%", left: "22%", delay: "2.2s", duration: "4.5s" },
  { top: "25%", left: "92%", delay: "1.3s", duration: "3.1s" },
  { top: "42%", left: "55%", delay: "0.6s", duration: "3.6s" },
  { top: "6%", left: "40%", delay: "1.7s", duration: "2.7s" },
  { top: "38%", left: "48%", delay: "2.8s", duration: "4.1s" },
  { top: "20%", left: "18%", delay: "0.9s", duration: "3.3s" },
];

const comets = [
  { top: "15%", left: "60%", delay: "2s", duration: "3s" },
  { top: "35%", left: "20%", delay: "6s", duration: "2.5s" },
  { top: "10%", left: "80%", delay: "10s", duration: "3.5s" },
];

const featuredProjects = [
  {
    name: "E-Commerce Platform",
    tag: "Next.js · Stripe",
    color: "from-orange-400 to-red-500",
    icon: ShoppingBag,
  },
  {
    name: "AI Support Bot",
    tag: "Python · OpenAI",
    color: "from-blue-400 to-indigo-500",
    icon: Cpu,
  },
  {
    name: "Health Portal",
    tag: "React · PostgreSQL",
    color: "from-emerald-400 to-teal-500",
    icon: Activity,
  },
];

const accolades = [
  { label: "Top Tech Partner", source: "Clutch" },
  { label: "5-Star Rated", source: "Google" },
  { label: "Best of 2025", source: "GoodFirms" },
];

const reviews = [
  {
    text: "TechyFusion delivered our telemedicine portal ahead of schedule. Their attention to security and clean UX design was exceptional.",
  },
  {
    text: "Working with TechyFusion to rebuild our CRM dashboard was a game changer. The application is lightning fast and highly responsive.",
  },
  {
    text: "As a startup, speed to market is everything. TechyFusion built our MVP in just 6 weeks. The codebase is incredibly clean.",
  },
  {
    text: "This is an outstanding team that's hard to find anything similar among their peers. The latest project is particularly impressive.",
  },
  {
    text: "Their app is beautifully designed and very easy to use. Also very customizable. Overall amazing work from the team!",
  },
];

const services = [
  {
    title: "Strategy",
    desc: "We help you find the idea inside the idea. Research, positioning, and a clear plan before a single pixel is drawn.",
    icon: Target,
    bg: "bg-blue-500",
  },
  {
    title: "Design",
    desc: "We design software that works, then make it beautiful. Clean interfaces that feel intuitive from the first tap.",
    icon: Palette,
    bg: "bg-teal-500",
  },
  {
    title: "Branding",
    desc: "Clear, simple identities built to last. Logos, type systems, and guidelines that grow with your company.",
    icon: Award,
    bg: "bg-red-500",
  },
  {
    title: "Development",
    desc: "From Figma to production, same hands. We write clean, tested code that ships fast and scales gracefully.",
    icon: Code,
    bg: "bg-orange-500",
  },
  {
    title: "Websites",
    desc: "Marketing sites, landing pages, and docs that load fast and look great on every device.",
    icon: Globe,
    bg: "bg-emerald-500",
  },
  {
    title: "AI & ML",
    desc: "We build AI that actually helps — chatbots, automation pipelines, and intelligent features that save real time.",
    icon: Sparkles,
    bg: "bg-amber-500",
  },
];

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Every project is unique. Our packages start from $1,500 for professional landing pages and scale to custom pricing for complex web apps, ERP systems, and AI platforms. Contact us to receive an accurate, customized quote.",
  },
  {
    q: "How long does development take?",
    a: "Standard website development takes between 2 to 4 weeks. Advanced software platforms, custom dashboards, and AI integrations typically take between 6 to 12 weeks from scoping to deployment.",
  },
  {
    q: "Do you provide support?",
    a: "Yes! We provide 3 months of complimentary post-launch support covering updates, bug fixes, and security patches. We also offer affordable monthly maintenance plans for long-term server administration.",
  },
  {
    q: "Can you build AI solutions?",
    a: "Absolutely. We build customized OpenAI GPT integrations, LangChain orchestration networks, custom voice agents, data analytics pipelines, and automated chatbot infrastructures.",
  },
];

/* ─────────────────────── Component ─────────────────────── */

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

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* ═══════════════════════════════════════════════════
          Section 1 — Hero (Dark Sky + Stars + Comets)
          ═══════════════════════════════════════════════════ */}
      <section className="hero-sky relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Stars */}
        {stars.map((s, i) => (
          <div
            key={`star-${i}`}
            className="star absolute w-1 h-1 rounded-full bg-white"
            style={{
              top: s.top,
              left: s.left,
              "--delay": s.delay,
              "--duration": s.duration,
            } as React.CSSProperties}
          />
        ))}

        {/* Comets */}
        {comets.map((c, i) => (
          <div
            key={`comet-${i}`}
            className="comet"
            style={{
              top: c.top,
              left: c.left,
              "--comet-delay": c.delay,
              "--comet-duration": c.duration,
            } as React.CSSProperties}
          />
        ))}

        {/* Pill Badge */}
        <Link
          href="/services"
          className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-white/80 text-sm font-medium hover:bg-white/10 transition-colors duration-200"
        >
          Explore Our Solutions
          <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
        </Link>

        {/* Heading */}
        <h1 className="font-[family-name:var(--font-heading)] italic text-white text-5xl sm:text-6xl lg:text-7xl font-normal leading-tight max-w-4xl">
          TechyFusion - One Platform for All Your Technology Needs
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed font-[family-name:var(--font-body)]">
          TechyFusion, also known as Techy Fusion, is a software development
          company specializing in Web Development, Mobile App Development, AI
          Solutions, Cloud Services, Custom Software Development, and Digital
          Marketing.
        </p>

        {/* CTA */}
        <Link
          href="/book"
          className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-charcoal transition-all duration-300"
        >
          Get in touch
        </Link>

        {/* Bounce Arrow */}
        <div className="bounce-arrow absolute bottom-10 text-white/50">
          <ChevronDown className="w-7 h-7" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          Section 2 — Featured Projects ("These are ours")
          ═══════════════════════════════════════════════════ */}
      <section className="bg-cream section-padding">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-inter)] font-bold text-charcoal text-3xl sm:text-4xl">
            These are ours
          </h2>
          <p className="mt-4 text-text-muted text-base md:text-lg max-w-xl mx-auto">
            Featured projects we&apos;ve built for clients across industries —
            from e-commerce to healthcare.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-10 md:gap-16">
            {featuredProjects.map((project) => {
              const IconComp = project.icon;
              return (
                <div
                  key={project.name}
                  className="flex flex-col items-center group cursor-default"
                >
                  <div
                    className={`w-28 h-28 rounded-[28px] bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-300`}
                  >
                    <IconComp className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="mt-5 font-semibold text-charcoal text-base">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-text-muted text-sm">{project.tag}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          Section 3 — Trusted by Thousands (Reviews)
          ═══════════════════════════════════════════════════ */}
      <section className="bg-cream section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-inter)] font-bold text-charcoal text-3xl sm:text-4xl">
              Trusted by thousands
            </h2>
            <p className="mt-4 text-text-muted text-base md:text-lg max-w-xl mx-auto">
              Don&apos;t just take our word for it — here&apos;s what our
              clients have to say.
            </p>
          </div>

          {/* Accolade Badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {accolades.map((acc) => (
              <div
                key={acc.label}
                className="px-6 py-3 border border-border-soft rounded-2xl bg-white flex items-center gap-2"
              >
                <span className="font-semibold text-charcoal text-sm">
                  {acc.label}
                </span>
                <span className="text-text-light text-sm">·</span>
                <span className="text-text-muted text-sm">{acc.source}</span>
              </div>
            ))}
          </div>

          {/* Horizontal Scrolling Reviews */}
          <div className="mt-12 relative overflow-hidden flex gap-[20px] marquee-wrapper py-2">
            {/* Edge fade gradients */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

            {/* First Set */}
            <div className="flex shrink-0 gap-[20px] animate-marquee">
              {reviews.map((review, idx) => (
                <div key={`review-1-${idx}`} className="review-card">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-star-gold text-star-gold"
                      />
                    ))}
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>

            {/* Second Set for seamless infinite scroll */}
            <div className="flex shrink-0 gap-[20px] animate-marquee" aria-hidden="true">
              {reviews.map((review, idx) => (
                <div key={`review-2-${idx}`} className="review-card">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-star-gold text-star-gold"
                      />
                    ))}
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          Section 4 — Services ("From idea to launch")
          ═══════════════════════════════════════════════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header — left-aligned */}
          <div className="max-w-xl mb-14">
            <p className="text-text-light text-xs font-semibold uppercase tracking-widest mb-3">
              Services
            </p>
            <h2 className="font-[family-name:var(--font-inter)] font-bold text-charcoal text-3xl sm:text-4xl">
              From idea to launch
            </h2>
            <p className="mt-4 text-text-muted text-base md:text-lg">
              We cover every step of the journey — strategy, design, development,
              and beyond.
            </p>
            <Link
              href="/book"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-blue hover:bg-accent-blue-hover text-white font-semibold text-sm transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>

          {/* 3×2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {services.map((service) => {
              const IconComp = service.icon;
              return (
                <div key={service.title} className="flex gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center shrink-0`}
                  >
                    <IconComp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-base">
                      {service.title}
                    </p>
                    <p className="mt-1 text-text-muted text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          Section 5 — FAQ Accordion
          ═══════════════════════════════════════════════════ */}
      <section className="bg-cream section-padding">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] italic text-charcoal text-3xl sm:text-4xl lg:text-5xl font-normal">
            Common questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto px-6 mt-14 divide-y divide-border-soft">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
              >
                <span className="font-medium text-charcoal text-base md:text-lg pr-4">
                  {faq.q}
                </span>
                <span className="text-text-muted shrink-0 transition-transform duration-300">
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === idx ? "max-h-[300px] pb-6" : "max-h-0"
                }`}
              >
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          Section 6 — Contact CTA ("Think we vibe?")
          ═══════════════════════════════════════════════════ */}
      <section className="bg-cream section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] italic text-charcoal text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Think we vibe?
          </h2>
          <p className="mt-6 text-text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            We take on a handful of projects each year to ensure every client
            gets our full attention. Let&apos;s talk about yours.
          </p>
          <Link
            href="/book"
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-blue hover:bg-accent-blue-hover text-white font-semibold text-lg transition-colors duration-200"
          >
            Say hi
          </Link>
        </div>
      </section>
    </div>
  );
}

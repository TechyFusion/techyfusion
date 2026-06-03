"use client";

import Link from "next/link";
import {
  Code,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  TrendingUp,
  Check,
  Zap,
  ArrowRight,
  Sparkles,
  Server,
  Users
} from "lucide-react";

export default function ServicesPage() {
  const servicesList = [
    {
      id: "web",
      title: "Web Development",
      description: "Fast, custom websites and web applications tailored to your business model.",
      icon: Code,
      color: "text-brand-cyan",
      bgGradient: "from-brand-cyan/20 to-transparent",
      features: [
        "SaaS product architectures",
        "E-commerce stores & checkouts",
        "Business websites & landing pages",
        "Interactive client portals",
        "Custom content management tools",
      ],
      technologies: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
      metric: "99+ Lighthouse performance scores"
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      description: "Intuitive, high-performance apps built for iOS and Android devices.",
      icon: Smartphone,
      color: "text-brand-indigo",
      bgGradient: "from-brand-indigo/20 to-transparent",
      features: [
        "Native Android & iOS engineering",
        "Cross-platform Flutter developments",
        "Location & GPS services integration",
        "Biometric authentication setups",
        "Offline database functionality",
      ],
      technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
      metric: "4.8+ average client app store rating"
    },
    {
      id: "ai",
      title: "AI & Automation Solutions",
      description: "Integrating intelligent networks to automate administrative pipelines.",
      icon: Cpu,
      color: "text-brand-purple",
      bgGradient: "from-brand-purple/20 to-transparent",
      features: [
        "OpenAI & GPT agent architectures",
        "LangChain orchestration flows",
        "Custom customer support chatbots",
        "AI Voice synthesis & dispatch bots",
        "Automated semantic data taggers",
      ],
      technologies: ["OpenAI API", "Python", "LangChain", "HuggingFace", "FastAPI"],
      metric: "Up to 60% customer support automation"
    },
    {
      id: "custom",
      title: "Custom Software Development",
      description: "Tailor-made software designed to align perfectly with your operations.",
      icon: Layers,
      color: "text-brand-pink",
      bgGradient: "from-brand-pink/20 to-transparent",
      features: [
        "Enterprise Resource Planning (ERP)",
        "Customer Relationship Management (CRM)",
        "Human Resource Management Systems",
        "Inventory & Logistics trackers",
        "Legacy system code refactoring",
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "TypeScript"],
      metric: "Reduces data administration errors by 90%"
    },
    {
      id: "cloud",
      title: "Cloud & DevOps Services",
      description: "Secure, reliable, and automated infrastructure frameworks.",
      icon: Server,
      color: "text-brand-blue",
      bgGradient: "from-brand-blue/20 to-transparent",
      features: [
        "AWS & Azure environment builds",
        "Docker container orchestrations",
        "GitHub Actions CI/CD automation",
        "HIPAA / GDPR compliant setups",
        "Database replication & auto-backup",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
      metric: "99.99% continuous system uptime"
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      description: "Data-driven advertising campaigns focused on user conversion and SEO.",
      icon: TrendingUp,
      color: "text-emerald-400",
      bgGradient: "from-emerald-400/20 to-transparent",
      features: [
        "Search Engine Optimization (SEO)",
        "Google & Meta ad account management",
        "Targeted content marketing",
        "Social media strategy planning",
        "Advanced conversion analytics reports",
      ],
      technologies: ["Google Analytics 4", "Semrush", "Meta Ads", "Google Ads"],
      metric: "Avg 2.5x growth in organic traffic"
    },
  ];

  return (
    <div className="relative min-h-screen pb-20">
      {/* Background Decorative glow */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] glow-bg-cyan rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[450px] h-[450px] glow-bg-purple rounded-full pointer-events-none" />

      {/* Services Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-cyan tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            Our Technical Expertise
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services Engineered for Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple">
              Digital Growth
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
            From design mockups to robust production applications, we build solutions that deliver performance, security, and scalability.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {servicesList.map((service, index) => {
          const IconComp = service.icon;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-300 border-l-4 ${
                service.id === "web"
                  ? "border-l-brand-cyan"
                  : service.id === "mobile"
                  ? "border-l-brand-indigo"
                  : service.id === "ai"
                  ? "border-l-brand-purple"
                  : service.id === "custom"
                  ? "border-l-brand-pink"
                  : service.id === "cloud"
                  ? "border-l-brand-blue"
                  : "border-l-emerald-400"
              }`}
            >
              {/* Inner ambient glow background */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${service.bgGradient} blur-3xl pointer-events-none rounded-full`} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                {/* Info block */}
                <div className="lg:col-span-5 space-y-6">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${service.color}`}>
                    <IconComp className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h2>
                  <p className="text-slate-300 text-base leading-relaxed">{service.description}</p>
                  
                  {/* Highlight Metric */}
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-white">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>{service.metric}</span>
                  </div>
                </div>

                {/* Features block */}
                <div className="lg:col-span-4 space-y-4">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">What we deliver</h3>
                  <ul className="space-y-3 text-slate-300">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm">
                        <Check className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech & CTA block */}
                <div className="lg:col-span-3 space-y-6 bg-slate-950/40 p-6 rounded-2xl border border-white/5">
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/book"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm hover:opacity-95 transition-opacity"
                    >
                      Book Free Setup
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom Conversion Area */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-indigo/10 rounded-full blur-[80px] pointer-events-none" />
          
          <h2 className="text-3xl font-extrabold text-white">Need a Specialized Custom Solution?</h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Our engineers excel at solving edge cases, custom data syncing, and API scaling. Let&apos;s map out your systems together.
          </p>
          <div>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple text-white font-bold text-base hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:scale-[1.02] transition-all"
            >
              <Users className="w-5 h-5" />
              Consult Our Tech Leads
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  TrendingUp,
  Activity,
  GraduationCap,
  ShoppingBag,
  Building,
  Home as HomeIcon,
  Truck,
  Utensils,
  Factory,
  ChevronRight,
  CheckCircle,
  Star,
  ChevronLeft,
  Calendar,
  MessageSquare,
  Sparkles,
  Zap,
  Globe,
  Plus,
  Minus
} from "lucide-react";

export default function HomePage() {
  // Solutions tab state
  const [activeSolutionTab, setActiveSolutionTab] = useState("ai");

  // Testimonials slider state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // FAQ state (accordion index toggle)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Contact form state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: "", email: "", phone: "", details: "" });
      }, 5000);
    }
  };

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO, HealthFlow SaaS",
      quote: "TechyFusion delivered our telemedicine portal ahead of schedule. Their attention to security, patient data privacy, and clean UX design was exceptional. They exceeded all our technical expectations.",
      stars: 5,
    },
    {
      name: "Marcus Thorne",
      role: "CTO, Apex Retail Systems",
      quote: "Working with TechyFusion to rebuild our CRM dashboard was a game changer. The application is lightning fast, highly responsive, and the AI customer service chatbot has automated 40% of support queries.",
      stars: 5,
    },
    {
      name: "Elena Rostova",
      role: "Founder, EduSphere Inc.",
      quote: "As a startup, speed to market is everything. TechyFusion built our MVP SaaS product in just 6 weeks. The codebase is incredibly clean, and they continue to provide stellar support.",
      stars: 5,
    },
  ];

  const featuredSolutions = {
    ai: {
      title: "AI Solutions",
      badge: "Scale Intellectually",
      description: "Leverage machine learning to automate complex operations and boost efficiency.",
      items: [
        { name: "AI Chatbots", desc: "Advanced NLP support bots conversing in 20+ languages." },
        { name: "AI Voice Agents", desc: "Automated, human-like voice response systems for client booking." },
        { name: "AI Customer Support", desc: "Ticket analysis, semantic routing, and automated resolution." },
      ]
    },
    business: {
      title: "Business Solutions",
      badge: "Streamline Operations",
      description: "Custom internal tooling to automate tracking, administration, and team alignment.",
      items: [
        { name: "CRM Systems", desc: "Centralized client management, pipeline visualizer, and custom reporting." },
        { name: "ERP Systems", desc: "Resource scheduling, payroll automation, and inventory management." },
        { name: "HRMS Portal", desc: "Employee onboarding, time-off approvals, and performance metrics." },
      ]
    },
    startup: {
      title: "Startup Solutions",
      badge: "Launch Quickly",
      description: "Convert ideas to scalable products utilizing robust agile engineering processes.",
      items: [
        { name: "MVP Development", desc: "Rapid feature prioritization, design, and prototyping in under 6 weeks." },
        { name: "SaaS Platforms", desc: "Multi-tenant architecture, Stripe billing, and user dashboard layouts." },
        { name: "Product Design", desc: "Interactive Figma wireframes, brand guides, and custom logo suites." },
      ]
    }
  };

  const faqs = [
    {
      q: "How much does a website cost?",
      a: "Every project is unique. Our packages start from $1,500 for professional landing pages and scale to custom pricing for complex web apps, ERP systems, and AI platforms. Contact us to receive an accurate, customized quote."
    },
    {
      q: "How long does development take?",
      a: "Standard website development takes between 2 to 4 weeks. Advanced software platforms, custom dashboards, and AI integrations typically take between 6 to 12 weeks from scoping to deployment."
    },
    {
      q: "Do you provide support?",
      a: "Yes! We provide 3 months of complimentary post-launch support covering updates, bug fixes, and security patches. We also offer affordable monthly maintenance plans for long-term server administration."
    },
    {
      q: "Can you build AI solutions?",
      a: "Absolutely. We build customized OpenAI GPT integrations, LangChain orchestration networks, custom voice agents, data analytics pipelines, and automated chatbot infrastructures."
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Glows */}
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] glow-bg-cyan rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] glow-bg-purple rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] glow-bg-blue rounded-full pointer-events-none" />

      {/* 2. Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-cyan tracking-wide animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              All Tech Solutions Under One Roof
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              One Platform for All Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple">
                Technology Needs
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              TechyFusion helps businesses grow with Web Development, Mobile Apps, AI Solutions, Cloud Services, Digital Marketing, and Custom Software Development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple text-white font-bold text-base hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Hero Right - Interactive Mockup Visualization */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="w-full max-w-[450px] aspect-square rounded-3xl bg-slate-900/40 border border-white/10 relative p-6 backdrop-blur-xl overflow-hidden group shadow-2xl shadow-brand-indigo/10">
              {/* Decorative inner code container */}
              <div className="h-full flex flex-col justify-between relative z-10">
                {/* Header buttons */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500 block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 block" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono tracking-wider">TechyFusion.dev</span>
                </div>

                {/* Dashboard visualization graphics */}
                <div className="flex-grow py-6 flex flex-col justify-between gap-4 font-mono text-xs">
                  <div className="bg-slate-950/70 p-3.5 rounded-xl border border-white/5 space-y-2 relative overflow-hidden">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-400">AI AGENT ENGINE</span>
                      <span className="text-emerald-400 animate-pulse flex items-center gap-1">
                        ● ACTIVE
                      </span>
                    </div>
                    <div className="text-brand-cyan text-sm font-bold">Query Orchestration: 98.4%</div>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-cyan to-brand-indigo h-full w-[85%] rounded-full animate-pulse" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-950/70 p-3.5 rounded-xl border border-white/5 flex flex-col justify-center">
                      <span className="text-[9px] text-slate-400">MOBILE SYNC</span>
                      <span className="text-lg font-bold text-white mt-1">2.4ms latency</span>
                    </div>
                    <div className="bg-slate-950/70 p-3.5 rounded-xl border border-white/5 flex flex-col justify-center">
                      <span className="text-[9px] text-slate-400">DATABASE</span>
                      <span className="text-lg font-bold text-brand-purple mt-1">99.99% Uptime</span>
                    </div>
                  </div>

                  {/* Code Line visualization */}
                  <div className="bg-slate-950/90 p-4 rounded-xl border border-white/5 text-[10px] text-slate-400 font-mono overflow-hidden">
                    <span className="text-indigo-400">const</span> techyFusion = <span className="text-emerald-400">async</span> () =&gt; &#123;
                    <div className="pl-4">
                      <span className="text-purple-400">await</span> initAI();<br />
                      <span className="text-purple-400">await</span> deployCloud();<br />
                      <span className="text-purple-400">return</span> <span className="text-brand-cyan">&apos;Awesome Business Success&apos;</span>;
                    </div>
                    &#125;;
                  </div>
                </div>

                <div className="flex justify-between text-[10px] text-slate-500 font-mono pt-4 border-t border-white/5">
                  <span>v2.10.4</span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-brand-cyan" /> Speed Optimized
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trusted By Section (Infinite Marquee) */}
      <section className="bg-slate-950/60 border-y border-dark-border py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
            Empowering Modern Brands with Industry-Leading Technologies
          </p>
        </div>
        <div className="flex select-none overflow-hidden relative w-full">
          {/* Side Gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Marquee Wrapper */}
          <div className="animate-marquee gap-16 py-2">
            {[
              "React",
              "Node.js",
              "Python",
              "AWS",
              "MongoDB",
              "Docker",
              "Next.js",
              "Tailwind CSS",
              "TypeScript",
              "PostgreSQL",
              "FastAPI",
              "Vercel",
            ].map((tech, idx) => (
              <span
                key={idx}
                className="text-slate-400 font-extrabold text-xl md:text-2xl hover:text-brand-cyan cursor-default transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Duplicate for seamless infinite loop */}
          <div className="animate-marquee gap-16 py-2" aria-hidden="true">
            {[
              "React",
              "Node.js",
              "Python",
              "AWS",
              "MongoDB",
              "Docker",
              "Next.js",
              "Tailwind CSS",
              "TypeScript",
              "PostgreSQL",
              "FastAPI",
              "Vercel",
            ].map((tech, idx) => (
              <span
                key={`dup-${idx}`}
                className="text-slate-400 font-extrabold text-xl md:text-2xl hover:text-brand-cyan cursor-default transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-brand-cyan font-bold">What We Do</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white">Services Crafted for Scale</p>
          <p className="text-slate-400 text-base md:text-lg">
            We cover everything from digital consultation to full-scale cloud migrations and custom AI development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              desc: "High-performance business websites, SaaS products, interactive portals, and custom e-commerce engines using modern frameworks.",
              icon: Code,
              color: "text-brand-cyan",
              link: "/services#web"
            },
            {
              title: "Mobile App Development",
              desc: "Native and cross-platform mobile apps for Android, iOS, and hybrid structures built using Flutter, React Native, and Swift.",
              icon: Smartphone,
              color: "text-brand-indigo",
              link: "/services#mobile"
            },
            {
              title: "AI & Automation",
              desc: "Custom intelligent agents, automated support chatbots, OpenAI integrations, and visual operations automations to reduce overhead.",
              icon: Cpu,
              color: "text-brand-purple",
              link: "/services#ai"
            },
            {
              title: "Custom Software",
              desc: "Tailor-made ERP systems, secure client CRMs, logistics planners, and internal admin panels tailored to your workflow.",
              icon: Layers,
              color: "text-brand-pink",
              link: "/services#custom"
            },
            {
              title: "Cloud & DevOps",
              desc: "Architecting cloud foundations on AWS, Azure, CI/CD pipeline automation, Docker containers, and high-performance server config.",
              icon: Cloud,
              color: "text-brand-blue",
              link: "/services#cloud"
            },
            {
              title: "Digital Marketing",
              desc: "Search engine optimization (SEO), target ad campaigns, social media management, and data-driven customer acquisition structures.",
              icon: TrendingUp,
              color: "text-emerald-400",
              link: "/services#marketing"
            },
          ].map((service, idx) => {
            const IconComp = service.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-8 relative flex flex-col justify-between group transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-brand-cyan transition-colors"
                  >
                    Learn More <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Industries We Serve */}
      <section className="bg-slate-950/40 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-brand-purple font-bold">Versatility</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white">Industries We Serve</p>
            <p className="text-slate-400">
              We deliver custom tech solutions engineered to meet the compliance, UI, and performance needs of specialized sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Activity, emoji: "🏥", name: "Healthcare" },
              { icon: GraduationCap, emoji: "🏫", name: "Education" },
              { icon: ShoppingBag, emoji: "🛒", name: "E-Commerce" },
              { icon: Building, emoji: "🏦", name: "Finance" },
              { icon: HomeIcon, emoji: "🏠", name: "Real Estate" },
              { icon: Truck, emoji: "🚚", name: "Logistics" },
              { icon: Utensils, emoji: "🍽", name: "Restaurants" },
              { icon: Factory, emoji: "🏭", name: "Manufacturing" },
            ].map((industry, idx) => {
              const IndIcon = industry.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 text-center space-y-4 group hover:scale-[1.03] transition-transform duration-200"
                >
                  <div className="text-4xl">{industry.emoji}</div>
                  <div className="flex flex-col items-center gap-1">
                    <h3 className="text-base font-semibold text-white group-hover:text-brand-cyan transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Our Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-brand-cyan font-bold">Execution Plan</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white">Our 6-Step Delivery Process</p>
          <p className="text-slate-400">
            How we translate ideas into live software deployments. A systematic approach ensuring clarity and quality.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-6 gap-8">
          {[
            { step: "01", name: "Discovery Call", desc: "Understanding objectives, target demographics, and initial scopes." },
            { step: "02", name: "Requirement Analysis", desc: "Formulating tech specifications, architecture, and timelines." },
            { step: "03", name: "Design & Prototype", desc: "Creating beautiful UI/UX models and wireframes for confirmation." },
            { step: "04", name: "Development", desc: "Writing clean, standard-compliant code with continuous testing." },
            { step: "05", name: "Testing", desc: "Conducting performance audits, security testing, and client review." },
            { step: "06", name: "Launch & Support", desc: "Production deployment, server config, and active maintenance." },
          ].map((processStep, idx) => (
            <div key={idx} className="relative pl-8 pb-10 md:pl-0 md:pb-0 group">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-6 left-0 right-0 h-[1px] bg-white/10 -z-10 group-first:left-1/2 group-last:right-1/2" />

              {/* Number Node */}
              <div className="absolute left-0 top-0 md:relative md:mx-auto w-12 h-12 rounded-xl bg-slate-900 border border-white/15 flex items-center justify-center text-sm font-extrabold text-brand-cyan group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-brand-indigo group-hover:text-white transition-all duration-300 shadow-md">
                {processStep.step}
              </div>

              {/* Contents */}
              <div className="md:text-center mt-4 space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {processStep.name}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-[200px] md:mx-auto">
                  {processStep.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Featured Solutions */}
      <section id="solutions" className="bg-slate-950/60 border-y border-dark-border py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
              <h2 className="text-xs uppercase tracking-widest text-brand-cyan font-bold">Ready Components</h2>
              <p className="text-3xl sm:text-4xl font-bold text-white">Featured Solutions</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Accelerate your business with pre-designed architectural accelerators tailored for rapid configuration.
              </p>

              {/* Tab Selector Buttons */}
              <div className="flex flex-row lg:flex-col gap-3 justify-center lg:justify-start flex-wrap">
                {[
                  { id: "ai", label: "AI Solutions" },
                  { id: "business", label: "Business Solutions" },
                  { id: "startup", label: "Startup Solutions" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSolutionTab(tab.id)}
                    className={`px-5 py-3 rounded-xl text-sm font-semibold tracking-wide border text-left transition-all duration-300 ${
                      activeSolutionTab === tab.id
                        ? "bg-gradient-to-r from-brand-cyan to-brand-indigo text-white border-transparent shadow-lg shadow-brand-cyan/20 scale-[1.02]"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Tab Content */}
            <div className="lg:col-span-8">
              <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-brand-cyan to-brand-indigo text-[10px] uppercase font-extrabold tracking-wider rounded-bl-2xl text-white">
                  {featuredSolutions[activeSolutionTab as keyof typeof featuredSolutions].badge}
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">
                    {featuredSolutions[activeSolutionTab as keyof typeof featuredSolutions].title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                    {featuredSolutions[activeSolutionTab as keyof typeof featuredSolutions].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                    {featuredSolutions[activeSolutionTab as keyof typeof featuredSolutions].items.map((item, idx) => (
                      <div key={idx} className="bg-slate-900/50 border border-white/5 p-5 rounded-2xl hover:border-brand-indigo/35 transition-colors">
                        <h4 className="text-base font-bold text-white mb-2">{item.name}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Portfolio / Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-xs uppercase tracking-widest text-brand-purple font-bold">Featured Projects</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white">Case Implementations</p>
            <p className="text-slate-400 text-sm md:text-base">
              A curated look at software solutions we have constructed for global businesses.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 hover:text-brand-cyan transition-all"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "E-commerce Platform", desc: "A robust multi-vendor shop with lightning fast checkout and real-time inventory management.", tag: "Next.js / Stripe" },
            { title: "School Management System", desc: "Central education hub featuring class tracking, grade portals, and internal communication lines.", tag: "React / Node.js" },
            { title: "AI Customer Support Bot", desc: "Intelligent chatbot integrated into client CRM, automating answers and resolving customer issues.", tag: "Python / OpenAI" },
            { title: "Food Delivery App", desc: "Dynamic mobile tracking app for delivery networks with GPS routing APIs.", tag: "Flutter / Firebase" },
            { title: "CRM Dashboard", desc: "Modern visual dashboard displaying leads, conversions, sales pipelines, and campaign returns.", tag: "React / Express" },
            { title: "Healthcare Portal", desc: "HIPAA-compliant system for booking, digital diagnostics, and secure patient histories.", tag: "Next.js / PostgreSQL" },
          ].map((project, idx) => (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden group">
              {/* Dummy Image Box */}
              <div className="aspect-[4/3] w-full bg-slate-900 relative overflow-hidden flex items-center justify-center">
                {/* Visual Graphic representation inside Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/10 to-brand-purple/10 group-hover:scale-105 transition-transform duration-300" />
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan group-hover:rotate-6 transition-all duration-300">
                  <Code className="w-8 h-8" />
                </div>
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg border border-white/10 text-[10px] text-slate-300 font-semibold uppercase tracking-wider">
                  {project.tag}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {project.desc}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/case-studies`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-cyan hover:text-white transition-colors"
                  >
                    View Case Study <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Why Choose TechyFusion */}
      <section className="bg-slate-950/40 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-brand-pink font-bold">Why Us</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white">Why Choose TechyFusion</p>
            <p className="text-slate-400 text-sm md:text-base">
              We do not just hand over code. We partner to accelerate systems, maximize return, and ensure support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "One-Stop Tech Partner", desc: "No more multi-vendor headaches. We manage design, app dev, cloud server configs, marketing, and support under one roof." },
              { title: "Expert Team", desc: "Veteran senior developers, UI researchers, cloud engineers, and certified project managers aligned to guarantee quality." },
              { title: "Fast Delivery", desc: "Agile sprints, daily standups, and robust codebase structures ensuring you hit production on schedule." },
              { title: "Affordable Pricing", desc: "Predictable, tiered pricing models structured to save cost compared to full-time in-house engineering hires." },
              { title: "Modern Technologies", desc: "Using React, Next.js, FastAPI, Node, PostgreSQL, and AWS to build fast, scalable, and secure systems." },
              { title: "Long-Term Support", desc: "Continuous infrastructure support, code auditing, cloud updates, and design extensions past the launch date." },
            ].map((feature, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6.5 flex gap-4">
                <CheckCircle className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Testimonials Slider */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-brand-cyan font-bold">Testimonials</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white">Client Reviews</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-500">
            {/* Star Icons */}
            <div className="flex gap-1.5 mb-6">
              {[...Array(testimonials[currentTestimonial].stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-white text-lg md:text-xl font-light italic leading-relaxed mb-8">
              &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
            </p>

            {/* Client Bio */}
            <div>
              <h4 className="text-base font-bold text-white">{testimonials[currentTestimonial].name}</h4>
              <p className="text-brand-cyan text-xs font-semibold">{testimonials[currentTestimonial].role}</p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8 px-4">
            <button
              onClick={() =>
                setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
              }
              className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                    currentTestimonial === idx ? "bg-brand-cyan w-6" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
              }
              className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* 11. Technologies We Use */}
      <section className="bg-slate-950/60 border-y border-dark-border py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-brand-purple font-bold">Tech Stack</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white">Technologies We Use</p>
            <p className="text-slate-400 text-sm md:text-base">
              We leverage modern, performant, and secure architectures to construct scalable systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
              { title: "Backend", items: ["Node.js", "Express", "FastAPI", "Go"] },
              { title: "Database", items: ["MongoDB", "PostgreSQL", "Redis", "Supabase"] },
              { title: "AI Stack", items: ["OpenAI API", "LangChain", "Python", "HuggingFace"] },
              { title: "Cloud / DevOps", items: ["AWS", "Vercel", "Docker", "CI / CD Pipelines"] },
            ].map((stack, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 space-y-4">
                <h3 className="text-base font-bold text-brand-cyan tracking-wide border-b border-white/5 pb-2">
                  {stack.title}
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {stack.items.map((item, idy) => (
                    <li key={idy} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Pricing Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-brand-pink font-bold">Pricing Models</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white">Pricing Preview</p>
          <p className="text-slate-400">Transparent packages for companies at different growth stages.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Starter",
              subtitle: "For Small Businesses",
              price: "$2,499",
              features: [
                "Custom 5-Page Responsive Web Design",
                "Basic CMS (Blog/Service integration)",
                "Contact/Consultation Form setup",
                "On-Page SEO Configuration",
                "3 Months Support & Hosting Setup",
              ],
              cta: "Select Starter",
              popular: false,
            },
            {
              title: "Growth",
              subtitle: "For Startups & Scaleups",
              price: "$5,999",
              features: [
                "Full Custom Web App or Mobile App MVP",
                "Admin Dashboard / Management System",
                "Stripe / Payments Gateway Integration",
                "Advanced SEO, Speed Optimization",
                "6 Months Support & Code Maintenance",
              ],
              cta: "Select Growth",
              popular: true,
            },
            {
              title: "Enterprise",
              subtitle: "For Large Infrastructures",
              price: "Custom",
              features: [
                "Custom ERP, CRM, or HRMS Software",
                "Advanced AI Automations & Voice Bots",
                "Compliance Audited Hosting (HIPAA)",
                "CI/CD deployment, server redundancy",
                "Dedicated Engineering Support SLA",
              ],
              cta: "Get Custom Quote",
              popular: false,
            },
          ].map((tier, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-3xl p-8 relative flex flex-col justify-between overflow-hidden ${
                tier.popular ? "border-2 border-brand-cyan/60 scale-[1.03] shadow-lg shadow-brand-cyan/5" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-brand-cyan text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-2xl">
                  Popular
                </div>
              )}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{tier.title}</h3>
                  <p className="text-slate-400 text-xs">{tier.subtitle}</p>
                </div>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-slate-400 text-xs">/project</span>}
                </div>
                <ul className="space-y-3.5 text-sm text-slate-300">
                  {tier.features.map((feature, idy) => (
                    <li key={idy} className="flex items-start gap-2.5">
                      <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <Link
                  href={tier.price === "Custom" ? "/contact" : "/book"}
                  className={`w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide transition-all ${
                    tier.popular
                      ? "bg-gradient-to-r from-brand-cyan to-brand-indigo hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] text-white"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 13. FAQ Section */}
      <section className="bg-slate-950/40 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-brand-cyan font-bold">Answers</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white">Frequently Asked Questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-white text-base md:text-lg">{faq.q}</span>
                  <span className="text-brand-cyan transition-transform duration-300">
                    {openFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openFaq === idx ? "max-h-[300px] border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-slate-300 text-sm md:text-base leading-relaxed bg-slate-950/20">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Background Gradient Blurs */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-purple/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            {/* Header Text */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
              <h2 className="text-xs uppercase tracking-widest text-brand-pink font-bold">Partner With Us</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Let&apos;s Build Something Amazing
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tell us about your objectives. Our tech experts will review your request and get back to you within 24 hours with an actionable roadmap.
              </p>
              <div className="pt-4">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm shadow-md hover:scale-[1.02] transition-transform"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="h-full min-h-[300px] bg-slate-900/60 border border-emerald-500/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Thank You!</h3>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                    Your message has been successfully received. A consultant from TechyFusion will reach out to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="text"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="details" className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
                      Project Details
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      value={formState.details}
                      onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                      placeholder="Tell us about what you want to build, target timeline, etc."
                      className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple text-white font-bold text-sm tracking-wide hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

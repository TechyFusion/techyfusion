"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, CheckCircle, HelpCircle, ArrowRight, Sparkles, Plus, Minus } from "lucide-react";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = [
    {
      title: "Starter",
      subtitle: "For Small Businesses",
      price: "$2,499",
      description: "Establish a modern digital footprint with a custom high-performance business website.",
      cta: "Book Starter Call",
      popular: false,
      href: "/book"
    },
    {
      title: "Growth",
      subtitle: "For Scaleups & Startups",
      price: "$5,999",
      description: "Construct complete digital products, SaaS portals, and custom mobile applications.",
      cta: "Book Growth Call",
      popular: true,
      href: "/book"
    },
    {
      title: "Enterprise",
      subtitle: "For Large Infrastructures",
      price: "Custom",
      description: "Enterprise grade CRM/ERP engines, fine-tuned AI support agents, and cloud systems.",
      cta: "Get Custom Quote",
      popular: false,
      href: "/contact"
    }
  ];

  const featuresMatrix = [
    { name: "Custom design pages", starter: "5 Pages", growth: "Unlimited", enterprise: "Dedicated Scope" },
    { name: "Custom DB & API Integration", starter: "Basic", growth: "Advanced (Relational)", enterprise: "High-Availability / Replicated" },
    { name: "E-Commerce & Billing", starter: "Add-on", growth: "Included (Stripe/PayPal)", enterprise: "Custom Multi-party Billing" },
    { name: "AI Support Chatbot", starter: "❌", growth: "Optional Add-on", enterprise: "Included (Fine-tuned GPT)" },
    { name: "Admin Dashboard / CRM", starter: "❌", growth: "Included", enterprise: "Custom Tailored Panel" },
    { name: "DevOps & Deployment", starter: "Vercel / Netlify", growth: "Vercel / Docker / AWS", enterprise: "AWS / Kubernetes / SLA" },
    { name: "Complimentary Support", starter: "3 Months", growth: "6 Months", enterprise: "Ongoing 24/7 SLA" },
    { name: "Security & Auditing", starter: "SSL Standard", growth: "SSL + OWASP Audited", enterprise: "HIPAA / GDPR Compliant" },
  ];

  const pricingFaqs = [
    {
      q: "Are there any recurring monthly charges?",
      a: "No! All our development work is quoted on a flat, one-time project basis. The only recurring costs you will face are hosting servers (paid directly to AWS/Vercel/Supabase) and third-party API usage fees (such as OpenAI tokens or Twilio credits)."
    },
    {
      q: "Can I upgrade my plan mid-development?",
      a: "Yes! If you start with a Starter package and realize you need custom database routing or user login modules, we adjust your scope sheet and apply the Growth tier pricing."
    },
    {
      q: "Do you offer payment installations?",
      a: "Yes. Our standard payment schedule is 50% upfront deposit upon signing the scope sheet, and 50% upon successful staging review and production launch. For Enterprise projects, we can structure 3 or 4 monthly installments."
    },
    {
      q: "Do I own the software code?",
      a: "100%. Once the final project invoice is cleared, we transfer the GitHub repositories, Figma files, and server credentials directly to your company accounts."
    }
  ];

  return (
    <div className="relative min-h-screen pb-20">
      {/* Background Glows */}
      <div className="absolute top-10 right-10 w-[350px] h-[350px] glow-bg-cyan rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] glow-bg-purple rounded-full pointer-events-none" />

      {/* Page Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-cyan tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Plans for Every Stage of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple">
              Business Growth
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
            Select a structured blueprint below or consult our leads for a customized technical requirements quote.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-3xl p-8 relative flex flex-col justify-between overflow-hidden ${
                plan.popular ? "border-2 border-brand-cyan/60 scale-[1.03] shadow-lg shadow-brand-cyan/5" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-cyan text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-2xl">
                  Popular
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                  <p className="text-slate-400 text-xs mt-1">{plan.subtitle}</p>
                </div>

                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-400 text-xs">/project</span>}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="pt-8">
                <Link
                  href={plan.href}
                  className={`w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-brand-cyan to-brand-indigo hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] text-white"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white">Compare Features Line-by-Line</h2>
          <p className="text-slate-400 text-sm mt-1">Review the specific technical inclusions for each package.</p>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden border border-white/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950/60 border-b border-white/10 text-slate-300 font-bold text-sm">
                  <th className="p-6">Feature Inclusions</th>
                  <th className="p-6 text-brand-cyan">Starter</th>
                  <th className="p-6 text-brand-indigo">Growth</th>
                  <th className="p-6 text-brand-purple">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-slate-300 font-medium">
                {featuresMatrix.map((feat, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-6 text-white font-semibold">{feat.name}</td>
                    <td className="p-6">{feat.starter}</td>
                    <td className="p-6">{feat.growth}</td>
                    <td className="p-6">{feat.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQ Accordions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white">Pricing FAQ</h2>
          <p className="text-slate-400 text-sm mt-1">Common answers regarding contracts, bills, and source ownership.</p>
        </div>

        <div className="space-y-4">
          {pricingFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-white text-base">{faq.q}</span>
                <span className="text-brand-cyan transition-transform duration-300">
                  {openFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openFaq === idx ? "max-h-[300px] border-t border-white/5" : "max-h-0"
                }`}
              >
                <p className="p-6 text-slate-300 text-sm leading-relaxed bg-slate-950/20">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

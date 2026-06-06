"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle, Calendar, Sparkles, Send } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "under_5k",
    timeline: "under_1m",
    details: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          phone: "",
          budget: "under_5k",
          timeline: "under_1m",
          details: "",
        });
      }, 6000);
    }
  };

  return (
    <div className="relative min-h-screen pb-20">
      {/* Background Decorative Glows */}
      <div className="absolute top-10 left-10 w-[350px] h-[350px] glow-bg-cyan rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] glow-bg-purple rounded-full pointer-events-none" />

      {/* Page Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-semibold text-accent-blue tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With Us
          </div>
          <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-heading)] italic font-normal text-charcoal tracking-tight">
            Let&apos;s Build Something{" "}
            <span className="text-accent-blue">
              Amazing Together
            </span>
          </h1>
          <p className="text-text-muted text-lg md:text-xl font-light leading-relaxed">
            Have a project in mind, need technical advice, or want a custom quotation? Fill out our form or book a call.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="card-soft rounded-3xl p-8 space-y-6">
              <h2 className="text-xl font-[family-name:var(--font-inter)] font-bold text-charcoal">Contact Information</h2>
              <p className="text-text-muted text-sm leading-relaxed">
                Reach out to us directly through any of these channels. Our team typically responds within 24 hours.
              </p>

              <ul className="space-y-6 text-sm text-text-muted">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-accent-blue flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-text-light font-semibold uppercase tracking-wider">Email Us</div>
                    <a href="mailto:hello@techyfusion.com" className="hover:text-accent-blue transition-colors text-sm font-semibold">
                      hello@techyfusion.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-accent-blue flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-text-light font-semibold uppercase tracking-wider">Call Us</div>
                    <a href="tel:+18005550199" className="hover:text-accent-blue transition-colors text-sm font-semibold">
                      +1 (800) 555-0199
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-accent-blue flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-text-light font-semibold uppercase tracking-wider">Our Office</div>
                    <span className="text-sm font-semibold leading-relaxed block">
                      100 Tech Innovation Way, Suite 400,<br />
                      Silicon Valley, CA 94025
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-accent-blue flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-text-light font-semibold uppercase tracking-wider">Business Hours</div>
                    <span className="text-sm font-semibold block">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                    </span>
                    <span className="text-xs text-text-muted mt-0.5 block">
                      Saturday - Sunday: Closed (Support active for SLAs)
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Scheduler link */}
            <div className="card-soft rounded-3xl p-8 text-center space-y-4">
              <h3 className="text-lg font-[family-name:var(--font-inter)] font-semibold text-charcoal">Prefer to talk directly?</h3>
              <p className="text-text-muted text-xs leading-relaxed">
                Skip the form and select an open consultation slot directly on our digital calendar.
              </p>
              <div className="pt-2">
                <Link
                  href="/book"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-accent-blue hover:bg-accent-blue-hover text-white font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  <Calendar className="w-4 h-4" />
                  Book Call Now
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Form */}
          <div className="lg:col-span-7">
            <div className="card-soft rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {isSubmitted ? (
                <div className="min-h-[450px] flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-inter)] font-semibold text-charcoal">Message Dispatched!</h3>
                  <p className="text-text-muted text-sm leading-relaxed max-w-sm">
                    Thank you, {formState.name}. We have logged your details. A project manager will review your technical description and contact you via email at {formState.email} within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <h2 className="text-xl font-[family-name:var(--font-inter)] font-bold text-charcoal">Project Intake Form</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs text-text-muted font-semibold uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-white/90 border border-black/10 rounded-xl px-4 py-3 text-sm text-charcoal placeholder-slate-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs text-text-muted font-semibold uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-white/90 border border-black/10 rounded-xl px-4 py-3 text-sm text-charcoal placeholder-slate-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs text-text-muted font-semibold uppercase tracking-wider">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-white/90 border border-black/10 rounded-xl px-4 py-3 text-sm text-charcoal placeholder-slate-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="budget" className="text-xs text-text-muted font-semibold uppercase tracking-wider">
                        Estimated Budget Range
                      </label>
                      <select
                        id="budget"
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        className="w-full bg-cream/80 border border-black/10 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-accent-blue"
                      >
                        <option value="under_5k">Under $5,000</option>
                        <option value="5k_15k">$5,000 - $15,000</option>
                        <option value="15k_50k">$15,000 - $50,000</option>
                        <option value="over_50k">$50,000+ (Enterprise)</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="timeline" className="text-xs text-text-muted font-semibold uppercase tracking-wider">
                        Expected Timeline
                      </label>
                      <select
                        id="timeline"
                        value={formState.timeline}
                        onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                        className="w-full bg-cream/80 border border-black/10 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-accent-blue"
                      >
                        <option value="under_1m">Under 1 Month</option>
                        <option value="1m_3m">1 - 3 Months</option>
                        <option value="3m_6m">3 - 6 Months</option>
                        <option value="flexible">Flexible / Ongoing</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="details" className="text-xs text-text-muted font-semibold uppercase tracking-wider">
                      Project Details & Description
                    </label>
                    <textarea
                      id="details"
                      rows={5}
                      required
                      placeholder="Tell us about the features you require, database dependencies, target launch date..."
                      value={formState.details}
                      onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                      className="w-full bg-white/90 border border-black/10 rounded-xl px-4 py-3 text-sm text-charcoal placeholder-slate-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-accent-blue hover:bg-accent-blue-hover text-white font-bold text-sm tracking-wide hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Project Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Styled Map Area Mock */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="card-soft rounded-3xl p-4 overflow-hidden relative aspect-[21/9] w-full bg-cream border border-black/10 flex items-center justify-center text-center">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="space-y-2 relative z-10 p-6">
            <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/35 flex items-center justify-center text-accent-blue mx-auto">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-[family-name:var(--font-inter)] font-semibold text-charcoal">Silicon Valley Headquarters</h3>
            <p className="text-text-muted text-xs">Latitude: 37.4419° N, Longitude: 122.1430° W</p>
          </div>
        </div>
      </section>
    </div>
  );
}

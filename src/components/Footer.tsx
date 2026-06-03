"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon, TwitterIcon } from "@/components/BrandIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing", href: "/pricing" },
  ];

  const servicesLinks = [
    { name: "Web Development", href: "/services#web" },
    { name: "Mobile App Development", href: "/services#mobile" },
    { name: "AI & Automation", href: "/services#ai" },
    { name: "Custom Software", href: "/services#custom" },
    { name: "Cloud & DevOps", href: "/services#cloud" },
    { name: "Digital Marketing", href: "/services#marketing" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon, color: "hover:text-[#0a66c2]" },
    { name: "GitHub", href: "https://github.com", icon: GithubIcon, color: "hover:text-white" },
    { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon, color: "hover:text-[#e1306c]" },
    { name: "Twitter", href: "https://twitter.com", icon: TwitterIcon, color: "hover:text-[#1da1f2]" },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-dark-border pt-20 pb-10 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[200px] h-[200px] rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-dark-border">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan via-brand-indigo to-brand-purple flex items-center justify-center shadow-lg shadow-brand-indigo/35 group-hover:scale-105 transition-all duration-300">
                <span className="text-white font-black text-xl tracking-tighter">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  Techy<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo">Fusion</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-widest uppercase -mt-1 font-semibold">Tech Solutions</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              All technology solutions under one roof. We help startups, mid-market businesses, and enterprises accelerate growth through Web, Mobile, Cloud, and custom AI products.
            </p>
            {/* Socials */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-base tracking-wider uppercase">Company</h3>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-brand-cyan transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-base tracking-wider uppercase">Services</h3>
            <ul className="space-y-3 text-sm">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-brand-cyan transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-base tracking-wider uppercase">Get In Touch</h3>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                <a href="mailto:hello@techyfusion.com" className="hover:text-white transition-colors">
                  hello@techyfusion.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-indigo flex-shrink-0" />
                <a href="tel:+18005550199" className="hover:text-white transition-colors">
                  +1 (800) 555-0199
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                <span>
                  100 Tech Innovation Way,<br />
                  Silicon Valley, CA 94025
                </span>
              </li>
            </ul>

            {/* Newsletter Input */}
            <div className="pt-2">
              <p className="text-white text-xs font-semibold mb-2">Subscribe to our newsletter</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan w-full"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-90 p-2.5 rounded-xl text-white flex items-center justify-center transition-opacity"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copy Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-slate-500 gap-4">
          <p>© {currentYear} TechyFusion. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { Globe2, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/layout/BrandIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest border-t border-border-subtle pt-20 pb-10 mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Top Section: CTA + Brand */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 border-b border-border-subtle pb-16">
          <div className="max-w-xl">
            <h2 className="text-display-lg-mobile text-white font-bold leading-tight tracking-tighter mb-6">
              Ready to accelerate your <span className="text-primary">digital</span> journey?
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold text-lg hover:bg-[#00c966] transition-colors"
            >
              Get in touch <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <div className="lg:text-right">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight text-white flex items-center lg:justify-end">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-primary">
                  <path d="M4 4L20 20M4 20V4M20 20V4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                TechyFusion
              </span>
            </Link>
            <p className="text-body-md text-on-surface-variant max-w-xs lg:ml-auto">
              Engineering the future of enterprise software, one line of code at a time.
            </p>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          
          {/* Services */}
          <div>
            <h5 className="font-mono text-label-caps text-white mb-6 uppercase tracking-widest">
              Services
            </h5>
            <ul className="space-y-3 text-body-md text-on-surface-variant font-medium">
              <li><Link href="/services/web-development" className="hover:text-white transition-colors">Web Engineering</Link></li>
              <li><Link href="/services/ai-development" className="hover:text-white transition-colors">AI & ML Ops</Link></li>
              <li><Link href="/services/cloud-solutions" className="hover:text-white transition-colors">Cloud Infrastructure</Link></li>
              <li><Link href="/services/mobile" className="hover:text-white transition-colors">Mobile Development</Link></li>
              <li><Link href="/services/design" className="hover:text-white transition-colors">Product Design</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h5 className="font-mono text-label-caps text-white mb-6 uppercase tracking-widest">
              Company
            </h5>
            <ul className="space-y-3 text-body-md text-on-surface-variant font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Client Work</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h5 className="font-mono text-label-caps text-white mb-6 uppercase tracking-widest">
              Legal
            </h5>
            <ul className="space-y-3 text-body-md text-on-surface-variant font-medium">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="font-mono text-label-caps text-white mb-6 uppercase tracking-widest">
              Connect
            </h5>
            <div className="flex flex-col gap-4">
              <Link href="#" className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" /> LinkedIn
              </Link>
              <Link href="#" className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-white transition-colors">
                <GithubIcon className="w-5 h-5" /> GitHub
              </Link>
              <Link href="#" className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-white transition-colors">
                <TwitterIcon className="w-5 h-5" /> Twitter
              </Link>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-body-sm font-mono">
          <p>© {currentYear} TechyFusion. All rights reserved.</p>
          <div className="flex items-center gap-4">
             <span className="flex items-center gap-2"><Globe2 className="w-4 h-4" /> Global / English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

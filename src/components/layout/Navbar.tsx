"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

/* ─────────────────────── TechyFusion Navigation Data ─────────────────────── */

type MenuType = "Services" | "Solutions" | "Portfolio" | "About" | "Resources" | null;

const navData = {
  Services: {
    sidebar: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "AI Development", href: "/services/ai-development" },
      { label: "Mobile Development", href: "/services/mobile" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions" },
      { label: "UI/UX Design", href: "/services/design" },
      { label: "DevOps", href: "/services/devops" },
    ],
    footerLink: { label: "View all services", href: "/services" },
  },
  Solutions: {
    sidebar: [
      { label: "Startup MVP", href: "/solutions/startup-mvp" },
      { label: "SaaS Development", href: "/solutions/saas" },
      { label: "AI Automation", href: "/solutions/ai-automation" },
      { label: "E-Commerce", href: "/solutions/ecommerce" },
      { label: "Business Websites", href: "/solutions/business-websites" },
      { label: "Enterprise Solutions", href: "/solutions/enterprise" },
    ],
    footerLink: { label: "Explore all solutions", href: "/solutions" },
  },
  Portfolio: {
    sidebar: [
      { label: "Projects", href: "/portfolio" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Success Stories", href: "/success-stories" },
    ],
    footerLink: { label: "See all our work", href: "/portfolio" },
    // We can add a featured case study card here to make the dropdown rich
    featured: {
      title: "Featured Case Study",
      headline: "Scaling Core Apps For Delivery Hero",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=400",
      href: "/case-studies/delivery-hero"
    }
  },
  About: {
    sidebar: [
      { label: "Company", href: "/about" },
      { label: "Team", href: "/about#team" },
      { label: "Mission", href: "/about#mission" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    footerLink: { label: "More about us", href: "/about" },
  },
  Resources: {
    sidebar: [
      { label: "Blog", href: "/blog" },
      { label: "AI Guides", href: "/blog/category/ai" },
      { label: "Web Development", href: "/blog/category/web" },
      { label: "Tutorials", href: "/blog/category/tutorials" },
      { label: "Industry Insights", href: "/blog/category/insights" },
    ],
    footerLink: { label: "Read our latest posts", href: "/blog" },
  },
};

const topLevelLinks = ["Services", "Solutions", "Portfolio", "About", "Resources"];

/* ─────────────────────── Component ─────────────────────── */

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: MenuType) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <div onMouseLeave={handleMouseLeave} className="fixed top-0 w-full z-50">
      {/* Main Header Bar */}
      <nav className="bg-white border-b border-gray-200 relative z-20 transition-colors duration-300">
        <div className="max-w-[1440px] mx-auto px-6 h-[88px] flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-30">
            <span className="text-2xl font-bold tracking-tight text-gray-900 flex items-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-primary">
                <path d="M4 4L20 20M4 20V4M20 20V4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              techyfusion
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center h-full ml-auto mr-8">
            {topLevelLinks.map((item) => {
              const isActive = activeMenu === item;

              return (
                <div
                  key={item}
                  className="h-full px-5 flex items-center relative cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(item as MenuType)}
                >
                  <span className={`text-[15px] font-bold transition-colors ${isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>
                    {item}
                  </span>
                  
                  {/* Active Green Underline Indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-30">
            <Link 
              href="/book" 
              className="hidden lg:flex items-center gap-2 bg-primary text-black hover:bg-[#00c966] px-7 py-3.5 font-bold text-[15px] transition-colors"
            >
              Book Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            
            <button 
              className="lg:hidden text-gray-900"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ─────────────────────── Mega Menu Dropdown Overlay ─────────────────────── */}
      <div 
        className={`absolute top-[88px] left-0 w-full bg-white border-b border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out origin-top z-10 ${
          activeMenu ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
        onMouseEnter={() => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }}
      >
        <div className="max-w-[1440px] mx-auto">
          {activeMenu && (
            <div className="flex flex-col md:flex-row min-h-[350px]">
              
              {/* Left Sidebar Links */}
              <div className="w-full md:w-1/3 p-12 border-r border-gray-100 flex flex-col justify-between">
                <ul className="space-y-6">
                  {navData[activeMenu].sidebar.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className="text-gray-900 text-[17px] font-medium hover:text-primary transition-colors flex items-center justify-between group">
                        {link.label}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="pt-8 mt-8">
                  <Link href={navData[activeMenu].footerLink.href} className="text-gray-900 font-bold border-b-2 border-gray-900 hover:border-primary hover:text-primary pb-1 transition-all inline-block">
                    {navData[activeMenu].footerLink.label}
                  </Link>
                </div>
              </div>

              {/* Right Content Area (Featured Content) */}
              <div className="w-full md:w-2/3 p-12">
                {activeMenu === "Portfolio" && navData.Portfolio.featured ? (
                  <div>
                    <h4 className="font-mono text-[11px] tracking-[0.15em] text-gray-500 font-bold mb-6 uppercase">
                      {navData.Portfolio.featured.title}
                    </h4>
                    <Link href={navData.Portfolio.featured.href} className="group block max-w-lg">
                      <div className="overflow-hidden aspect-[16/9] bg-gray-100 mb-5">
                        <img 
                          src={navData.Portfolio.featured.image} 
                          alt="Featured Case Study" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <p className="text-[18px] font-medium text-gray-900 leading-snug group-hover:text-primary transition-colors">
                        {navData.Portfolio.featured.headline}
                      </p>
                    </Link>
                  </div>
                ) : (
                  // Generic Right Content for other menus
                  <div className="flex flex-col justify-center h-full bg-gray-50 p-10 rounded-xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {activeMenu === "Services" ? "Engineering Excellence" : 
                       activeMenu === "Solutions" ? "Built For Scale" : 
                       activeMenu === "About" ? "Our Mission" : 
                       "Latest Insights"}
                    </h3>
                    <p className="text-gray-600 max-w-md mb-6 leading-relaxed">
                      {activeMenu === "Services" ? "We build robust, scalable software architectures that power modern enterprises." : 
                       activeMenu === "Solutions" ? "Solving complex business challenges with tailored, high-performance software." : 
                       activeMenu === "About" ? "We are a team of expert engineers dedicated to building the digital future." : 
                       "Explore our latest articles, tutorials, and engineering best practices."}
                    </p>
                    <Link href={navData[activeMenu].footerLink.href} className="text-primary font-bold flex items-center gap-2 hover:underline">
                      Explore more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

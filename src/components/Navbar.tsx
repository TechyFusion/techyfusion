"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle scroll listener to adjust styling dynamically
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    <nav className="fixed top-4 left-0 w-full z-50 flex flex-col items-center pointer-events-none px-4">
      <div
        className={`nav-capsule pointer-events-auto flex items-center justify-between gap-4 md:gap-6 w-full max-w-3xl transition-all duration-300 ${isScrolled ? "is-scrolled" : ""
          }`}
      >
        {/* Circle logo */}
        <Link
          href="/"
          className="w-10 h-10 flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity duration-200"
        >
          <Image
            src="/TechyFusion_Updated_Logo-removebg-DARK.png"
            alt="TechyFusion Logo"
            width={40}
            height={40}
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${isActive
                  ? "text-accent-blue"
                  : "text-charcoal/70 hover:text-charcoal"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <button
            className="md:hidden transition-colors duration-200 p-1 text-charcoal/80 hover:text-charcoal"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* CTA */}
          <Link
            href="/book"
            className="bg-accent-blue hover:bg-accent-blue-hover text-white rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 whitespace-nowrap"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden mt-3 w-full max-w-3xl pointer-events-auto bg-white rounded-2xl shadow-xl border border-border-soft overflow-hidden transition-all duration-300 ${isOpen
          ? "opacity-100 translate-y-0 max-h-[500px] p-6"
          : "opacity-0 -translate-y-2 max-h-0 p-0 pointer-events-none"
          }`}
      >
        <div className="space-y-0">
          {navLinks.map((link, index) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-medium text-base transition-colors duration-200 ${index < navLinks.length - 1
                  ? "border-b border-border-lighter"
                  : ""
                  } ${isActive
                    ? "text-accent-blue"
                    : "text-charcoal hover:text-accent-blue"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <Link
          href="/book"
          onClick={() => setIsOpen(false)}
          className="mt-4 block w-full text-center bg-accent-blue hover:bg-accent-blue-hover text-white rounded-full py-3 font-semibold transition-colors duration-200"
        >
          Get in touch
        </Link>
      </div>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
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
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl">
      <div className="nav-capsule flex items-center justify-between gap-4 md:gap-6">
        {/* Circle logo */}
        <Link
          href="/"
          className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0 hover:bg-white/25 transition-colors duration-200"
        >
          <span className="text-white font-bold text-sm">T</span>
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
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white"
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
            className="md:hidden text-white/80 hover:text-white transition-colors duration-200 p-1"
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
        className={`md:hidden mt-3 bg-white rounded-2xl shadow-xl border border-border-soft overflow-hidden transition-all duration-300 ${
          isOpen
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
                className={`block py-3 font-medium text-base transition-colors duration-200 ${
                  index < navLinks.length - 1
                    ? "border-b border-border-lighter"
                    : ""
                } ${
                  isActive
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

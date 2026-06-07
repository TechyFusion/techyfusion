"use client";

import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  const links = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Insights", href: "#insights" },
  ];

  return (
    <div className="fixed inset-0 z-[60] bg-surface/95 backdrop-blur-xl md:hidden flex flex-col transition-all duration-300">
      <div className="flex justify-between items-center px-4 h-20 border-b border-border-subtle">
        <Link href="/" className="flex items-center gap-2" onClick={onClose}>
          <span className="text-xl font-bold tracking-tight text-on-surface">
            Techy<span className="text-electric-blue">Fusion</span>
          </span>
        </Link>
        <button 
          onClick={onClose}
          className="p-2 text-on-surface-variant hover:text-on-surface transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-col px-6 py-8 gap-6 overflow-y-auto h-full">
        <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-widest">
          Menu
        </span>
        <nav className="flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="text-headline-sm text-on-surface hover:text-electric-blue transition-colors flex items-center justify-between group"
            >
              {link.label}
              <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-border-subtle">
          <Link
            href="/book"
            onClick={onClose}
            className="w-full flex justify-center items-center bg-primary-container text-on-primary-container px-6 py-4 rounded-lg text-body-md font-bold active:scale-95 transition-all hover:bg-opacity-90"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

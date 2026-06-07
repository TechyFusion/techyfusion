import { Monitor, BrainCircuit, Smartphone, CloudCog, Palette, Layers } from "lucide-react";

export const services = [
  {
    title: "Web Development",
    slug: "web-development",
    description: "Performant, SEO-optimized frontends and robust backend architectures built with Next.js, React, and Node.js.",
    icon: Monitor,
    glow: false,
    iconColor: "text-electric-blue",
  },
  {
    title: "AI Solutions",
    slug: "ai-development",
    description: "Custom LLM integrations, predictive modeling, and autonomous AI agents designed to scale enterprise workflows.",
    icon: BrainCircuit,
    glow: true,
    iconColor: "text-indigo-glow",
  },
  {
    title: "SaaS Platforms",
    slug: "saas-platforms",
    description: "End-to-end multi-tenant product development with integrated billing and analytics.",
    icon: Layers,
    glow: false,
    iconColor: "text-amber-400",
  },
  {
    title: "Cloud / DevOps",
    slug: "cloud-solutions",
    description: "Infrastructure as Code, CI/CD automation, and scalable Kubernetes orchestration deployed on AWS and Azure.",
    icon: CloudCog,
    glow: false,
    iconColor: "text-primary",
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "High-fidelity interfaces following modern design systems for a premium user experience.",
    icon: Palette,
    glow: false,
    iconColor: "text-pink-500",
  },
  {
    title: "Mobile Apps",
    slug: "mobile-development",
    description: "Native-feel, high-performance cross-platform applications built for iOS and Android using React Native and Expo.",
    icon: Smartphone,
    glow: false,
    iconColor: "text-tertiary",
  },
];

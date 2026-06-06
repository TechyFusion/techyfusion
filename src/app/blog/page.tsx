"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, Sparkles, BookOpen, User } from "lucide-react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Insights" },
    { id: "engineering", label: "Engineering" },
    { id: "ai", label: "AI & Automation" },
    { id: "design", label: "UI/UX Design" },
    { id: "business", label: "Startup Tech" },
  ];

  const posts = [
    {
      title: "Why Next.js App Router is the Standard for Modern Web Applications",
      excerpt: "An in-depth breakdown of server components, routing architectures, streaming SSR, and SEO efficiency gains when upgrading to Next.js.",
      category: "engineering",
      author: "Alex Mercer",
      date: "May 28, 2026",
      readTime: "6 min read",
      color: "text-brand-cyan"
    },
    {
      title: "Building Context-Aware Chatbots: Beyond Simple OpenAI API Prompts",
      excerpt: "How to combine vector databases (like pgvector/Pinecone) and LangChain orchestration to create bots that accurately reference corporate manuals.",
      category: "ai",
      author: "Dr. Sarah Chen",
      date: "May 15, 2026",
      readTime: "8 min read",
      color: "text-brand-purple"
    },
    {
      title: "Conversion-Driven UI Design: How Simple Visual Hierarchies Increase Sales",
      excerpt: "Practical rules for mobile CTA button placements, visual feedback cues, card design, and micro-interactions that double landing page conversion rates.",
      category: "design",
      author: "Mia Johansson",
      date: "May 02, 2026",
      readTime: "5 min read",
      color: "text-brand-pink"
    },
    {
      title: "How to Build an MVP SaaS in 6 Weeks: The Agile Scoping Playbook",
      excerpt: "Prioritizing feature components, designing core data relational structures, and setting up Stripe billing early to hit production on schedule.",
      category: "business",
      author: "Hitesh Sharma",
      date: "Apr 20, 2026",
      readTime: "7 min read",
      color: "text-brand-indigo"
    },
    {
      title: "Securing Node.js APIs: Essential Authentication and Rate Limiting Guides",
      excerpt: "Step-by-step instructions to protect server routes, check authorization JWT cookies, set up Redis rate-limiting, and block security vulnerabilities.",
      category: "engineering",
      author: "Alex Mercer",
      date: "Apr 05, 2026",
      readTime: "10 min read",
      color: "text-brand-blue"
    },
    {
      title: "The Rise of AI Voice Agents: Automating Inbound Sales Calendars",
      excerpt: "Integrating Twilio voice pipelines with OpenAI GPT audio processing models to handle phone inquiries and schedule appointments automatically.",
      category: "ai",
      author: "Dr. Sarah Chen",
      date: "Mar 18, 2026",
      readTime: "9 min read",
      color: "text-brand-purple"
    }
  ];

  // Filtering Logic
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen pb-20">
      {/* Background Glows */}
      <div className="absolute top-10 left-10 w-[350px] h-[350px] glow-bg-cyan rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] glow-bg-purple rounded-full pointer-events-none" />

      {/* Page Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-cyan tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            TechyFusion Insights
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Knowledge Hub &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple">
              Tech Updates
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
            Stay up to date with core technical developments, engineering frameworks, design principles, and business insights.
          </p>
        </div>
      </section>

      {/* Search & Category Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Category Tabs */}
          <div className="md:col-span-8 flex gap-2 flex-wrap bg-slate-900/50 p-2 border border-white/5 rounded-2xl backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-brand-cyan to-brand-indigo text-white shadow-md shadow-brand-indigo/15 scale-[1.01]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="md:col-span-4 relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/60 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/20 border border-white/5 rounded-3xl p-10">
            <BookOpen className="w-16 h-16 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white">No Articles Found</h3>
            <p className="text-slate-400 text-sm mt-1">Try refining your search keyword or checking other categories.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <article
                key={idx}
                className="glass-card rounded-3xl overflow-hidden group flex flex-col justify-between h-full transition-all duration-300"
              >
                <div className="p-8 space-y-5">
                  {/* Category Pill & Date */}
                  <div className="flex justify-between items-center text-xs">
                    <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                      {post.category}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer block */}
                <div className="px-8 pb-8 pt-4 border-t border-white/5 bg-slate-950/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <User className="w-4 h-4 text-brand-cyan" />
                    <span>{post.author}</span>
                  </div>
                  <span className="text-slate-500 text-xs flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

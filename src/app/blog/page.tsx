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
      author: "Rahul Sharma",
      date: "May 28, 2026",
      readTime: "6 min read",
      color: "text-accent-blue"
    },
    {
      title: "Building Context-Aware Chatbots: Beyond Simple OpenAI API Prompts",
      excerpt: "How to combine vector databases (like pgvector/Pinecone) and LangChain orchestration to create bots that accurately reference corporate manuals.",
      category: "ai",
      author: "Abhay Singh",
      date: "May 15, 2026",
      readTime: "8 min read",
      color: "text-accent-blue"
    },
    {
      title: "Conversion-Driven UI Design: How Simple Visual Hierarchies Increase Sales",
      excerpt: "Practical rules for mobile CTA button placements, visual feedback cues, card design, and micro-interactions that double landing page conversion rates.",
      category: "design",
      author: "Anshika Sharma",
      date: "May 02, 2026",
      readTime: "5 min read",
      color: "text-accent-blue"
    },
    {
      title: "How to Build an MVP SaaS in 6 Weeks: The Agile Scoping Playbook",
      excerpt: "Prioritizing feature components, designing core data relational structures, and setting up Stripe billing early to hit production on schedule.",
      category: "business",
      author: "Amit Kashyap",
      date: "Apr 20, 2026",
      readTime: "7 min read",
      color: "text-accent-blue"
    },
    {
      title: "Securing Node.js APIs: Essential Authentication and Rate Limiting Guides",
      excerpt: "Step-by-step instructions to protect server routes, check authorization JWT cookies, set up Redis rate-limiting, and block security vulnerabilities.",
      category: "engineering",
      author: "Rahul Sharma",
      date: "Apr 05, 2026",
      readTime: "10 min read",
      color: "text-accent-blue"
    },
    {
      title: "The Rise of AI Voice Agents: Automating Inbound Sales Calendars",
      excerpt: "Integrating Twilio voice pipelines with OpenAI GPT audio processing models to handle phone inquiries and schedule appointments automatically.",
      category: "ai",
      author: "Abhay Singh",
      date: "Mar 18, 2026",
      readTime: "9 min read",
      color: "text-accent-blue"
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-semibold text-accent-blue tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            TechyFusion Insights
          </div>
          <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-heading)] italic font-normal text-charcoal tracking-tight">
            Knowledge Hub &{" "}
            <span className="text-accent-blue">
              Tech Updates
            </span>
          </h1>
          <p className="text-text-muted text-lg md:text-xl font-light leading-relaxed">
            Stay up to date with core technical developments, engineering frameworks, design principles, and business insights.
          </p>
        </div>
      </section>

      {/* Search & Category Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Category Tabs */}
          <div className="md:col-span-8 flex gap-2 flex-wrap bg-white/70 p-2 border border-border-soft rounded-2xl backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-accent-blue hover:bg-accent-blue-hover text-white shadow-md shadow-accent-blue/15 scale-[1.01]"
                    : "text-text-muted hover:text-charcoal hover:bg-black/5"
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
              className="w-full bg-white/90 border border-black/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-charcoal placeholder-slate-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light" />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white/40 border border-border-soft rounded-3xl p-10">
            <BookOpen className="w-16 h-16 text-text-light mx-auto mb-4" />
            <h3 className="text-lg font-[family-name:var(--font-inter)] font-semibold text-charcoal">No Articles Found</h3>
            <p className="text-text-muted text-sm mt-1">Try refining your search keyword or checking other categories.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <article
                key={idx}
                className="card-soft rounded-3xl overflow-hidden group flex flex-col justify-between h-full transition-all duration-300"
              >
                <div className="p-8 space-y-5">
                  {/* Category Pill & Date */}
                  <div className="flex justify-between items-center text-xs">
                    <span className="px-2.5 py-1 bg-black/5 border border-black/10 rounded-lg text-text-muted font-semibold uppercase tracking-wider text-[10px]">
                      {post.category}
                    </span>
                    <span className="text-text-light flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-[family-name:var(--font-inter)] font-semibold text-charcoal group-hover:text-accent-blue transition-colors leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer block */}
                <div className="px-8 pb-8 pt-4 border-t border-border-soft bg-white/40 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-text-muted text-xs">
                    <User className="w-4 h-4 text-accent-blue" />
                    <span>{post.author}</span>
                  </div>
                  <span className="text-text-light text-xs flex items-center gap-1">
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

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Badge from "@/components/ui/Badge";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group glass-card rounded-xl overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-surface-container-lowest aspect-video w-full border-b border-border-subtle">
        <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Top-right category badge overlapping the image */}
        <div className="absolute top-4 right-4 z-20">
          <Badge className="bg-surface/80 backdrop-blur-md border-border-subtle shadow-lg">
            {post.category}
          </Badge>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6 md:p-8">
        
        {/* Meta Data */}
        <div className="flex items-center gap-4 mb-4 text-on-surface-variant font-mono text-[11px] uppercase tracking-widest">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title & Excerpt */}
        <h3 className="text-headline-sm text-on-surface mb-3 group-hover:text-electric-blue transition-colors duration-300 leading-snug">
          <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
            {post.title}
          </Link>
        </h3>
        
        <p className="text-body-sm text-on-surface-variant mb-8 flex-grow line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <div className="mt-auto inline-flex items-center gap-2 text-body-sm font-mono text-label-caps uppercase text-on-surface transition-colors">
          Read Article
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 text-electric-blue transition-transform duration-300" />
        </div>
      </div>
    </article>
  );
}

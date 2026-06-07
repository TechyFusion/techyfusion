import BlogCard, { BlogPost } from "./BlogCard";

// Note: Move this to a dedicated data layer file (e.g., data/blog.ts) in production.
const posts: BlogPost[] = [
  {
    id: "1",
    title: "Architecting for Scale: Moving from Monolith to Go Microservices",
    excerpt: "A deep dive into how we reduced system latency by 85% by migrating a legacy Node.js monolith into highly concurrent Go microservices.",
    date: "JUN 02, 2026",
    category: "Architecture",
    readTime: "8 MIN READ",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    slug: "architecting-for-scale-go-microservices",
  },
  {
    id: "2",
    title: "Integrating Custom LLMs into Enterprise Workflows securely",
    excerpt: "Off-the-shelf AI models are a security risk for enterprise data. Learn how we deploy self-hosted LLMs using LangChain and vector databases.",
    date: "MAY 18, 2026",
    category: "AI & ML",
    readTime: "6 MIN READ",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    slug: "integrating-custom-llms-securely",
  },
  {
    id: "3",
    title: "Optimizing Next.js 14 App Router for Peak Core Web Vitals",
    excerpt: "Practical strategies for leveraging React Server Components, streaming, and edge caching to achieve perfect 100/100 Lighthouse scores.",
    date: "MAY 05, 2026",
    category: "Frontend",
    readTime: "5 MIN READ",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    slug: "optimizing-nextjs-14-core-web-vitals",
  },
  {
    id: "4",
    title: "The Zero-Trust Security Model for Cloud Infrastructure",
    excerpt: "Why perimeter-based security is obsolete, and how to implement identity-aware networking across your AWS and Azure deployments.",
    date: "APR 22, 2026",
    category: "DevOps",
    readTime: "10 MIN READ",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    slug: "zero-trust-security-model-cloud",
  },
  {
    id: "5",
    title: "React Native vs Native in 2026: What CTOs Need to Know",
    excerpt: "Evaluating the performance delta, developer experience, and maintainability of cross-platform frameworks against pure Swift and Kotlin.",
    date: "APR 10, 2026",
    category: "Mobile",
    readTime: "7 MIN READ",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=800",
    slug: "react-native-vs-native-2026",
  },
  {
    id: "6",
    title: "Automating Database Migrations with CI/CD Pipelines",
    excerpt: "Stop running SQL scripts manually. A comprehensive guide to schema versioning, automated rollbacks, and zero-downtime database updates.",
    date: "MAR 28, 2026",
    category: "Database",
    readTime: "6 MIN READ",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    slug: "automating-database-migrations-cicd",
  },
];

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 mb-20">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

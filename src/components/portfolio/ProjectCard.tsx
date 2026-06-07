import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  slug: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group glass-card rounded-xl overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-surface-container-lowest aspect-[4/3] w-full border-b border-border-subtle">
        <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6 md:p-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 3).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {project.tech.length > 3 && (
            <Badge>+{project.tech.length - 3}</Badge>
          )}
        </div>

        <h3 className="text-headline-sm text-on-surface mb-3 group-hover:text-electric-blue transition-colors duration-300">
          <Link href={`/portfolio/${project.slug}`} className="before:absolute before:inset-0">
            {project.title}
          </Link>
        </h3>
        
        <p className="text-body-md text-on-surface-variant mb-8 flex-grow">
          {project.description}
        </p>

        <div className="mt-auto inline-flex items-center gap-2 text-body-sm font-mono text-label-caps uppercase text-on-surface transition-colors">
          View Case Study
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 text-electric-blue transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
}

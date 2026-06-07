import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import Badge from "@/components/ui/Badge";

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  slug: string;
}

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="group glass-card rounded-xl p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-4 border-l-border-subtle hover:border-l-electric-blue">
      
      <div className="flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge>{job.department}</Badge>
          <Badge variant="default" className="bg-transparent border-transparent text-on-surface-variant flex items-center gap-1 px-0">
            <MapPin className="w-3 h-3" /> {job.location}
          </Badge>
          <Badge variant="default" className="bg-transparent border-transparent text-on-surface-variant flex items-center gap-1 px-0">
            <Clock className="w-3 h-3" /> {job.type}
          </Badge>
        </div>
        
        <h3 className="text-headline-sm text-on-surface mb-2 group-hover:text-electric-blue transition-colors">
          <Link href={`/careers/${job.slug}`} className="before:absolute before:inset-0">
            {job.title}
          </Link>
        </h3>
        
        <p className="text-body-md text-on-surface-variant line-clamp-2 max-w-2xl">
          {job.description}
        </p>
      </div>

      <div className="shrink-0">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-surface-container border border-border-subtle text-on-surface group-hover:bg-electric-blue group-hover:text-white transition-colors duration-300">
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>

    </div>
  );
}

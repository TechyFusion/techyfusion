import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/layout/BrandIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const team = [
  {
    name: "Alex Mercer",
    role: "Founder & Lead Architect",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Sarah Chen",
    role: "Head of AI & ML",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
    github: "#",
  },
  {
    name: "David Park",
    role: "Senior Cloud Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
    github: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background Ambient Glow */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <SectionHeading 
            title="Meet the Engineering Team" 
            subtitle="We are a collective of senior developers, system architects, and AI researchers dedicated to pushing the boundaries of what's possible."
            className="mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="p-0 overflow-hidden flex flex-col group">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-surface-container-lowest">
                <div className="absolute inset-0 bg-surface/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              
              {/* Info Container */}
              <div className="p-6 md:p-8 flex flex-col items-center text-center">
                <h3 className="text-headline-sm text-on-surface mb-1">{member.name}</h3>
                <p className="font-mono text-label-caps text-electric-blue uppercase tracking-widest mb-6">
                  {member.role}
                </p>
                
                {/* Social Links */}
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <a href="#" className="text-on-surface-variant hover:text-electric-blue transition-colors">
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                  <a href={member.linkedin} className="text-on-surface-variant hover:text-electric-blue transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a href={member.github} className="text-on-surface-variant hover:text-electric-blue transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

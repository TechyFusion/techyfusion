import { testimonials } from "@/data/testimonials";
import Card from "@/components/ui/Card";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 border-t border-border-subtle relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-glow/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <Card 
              key={test.id} 
              className={`border-l-4 ${test.borderColor} flex flex-col justify-between h-full`}
            >
              <p className="text-body-lg italic mb-10 text-on-surface leading-relaxed">
                "{test.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-surface-container border border-border-subtle overflow-hidden flex items-center justify-center font-bold text-on-surface text-lg">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <p className="text-body-md font-bold text-on-surface">{test.name}</p>
                  <p className="font-mono text-label-caps text-on-surface-variant uppercase mt-1 tracking-wider">
                    {test.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

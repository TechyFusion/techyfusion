import Card from "@/components/ui/Card";

const stats = [
  { value: "120+", label: "Products Launched" },
  { value: "15+", label: "AI Agents Deployed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50M+", label: "API Requests Handled" },
];

export default function Stats() {
  return (
    <section className="py-10 border-y border-border-subtle bg-surface-container-lowest">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 md:divide-x divide-border-subtle">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4">
              <span className="text-display-lg-mobile md:text-5xl font-bold text-electric-blue mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

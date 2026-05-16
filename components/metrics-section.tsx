import { Award, GraduationCap, Globe, Zap } from "lucide-react";

const metrics = [
  { label: "Research Grants", value: "$50K+", icon: Award, color: "text-orange-500" },
  { label: "Engineering GPA", value: "3.20", icon: GraduationCap, color: "text-cyan-400" },
  { label: "Coding Legacy", value: "10+ Years", icon: Zap, color: "text-orange-500" },
  { label: "Location", value: "USA", icon: Globe, color: "text-cyan-400" }
];

export function MetricsSection() {
  return (
    <section className="py-24 bg-[#020203] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {metrics.map((m) => (
            <div key={m.label} className="space-y-4 group">
              <div className={`mx-auto p-4 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-400/50 transition-all ${m.color}`}>
                <m.icon className="size-8" />
              </div>
              <h3 className="text-4xl font-black text-white italic tracking-tighter">{m.value}</h3>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
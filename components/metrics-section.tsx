"use client";

import { Gamepad2, Award, Gavel, GraduationCap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const icons = [Gamepad2, Award, Gavel, GraduationCap];
const colors = ["text-orange-500", "text-cyan-400", "text-orange-500", "text-cyan-400"];

export function MetricsSection() {
  const { dict } = useLanguage();
  return (
    <section className="py-24 bg-[#020203] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {dict.metrics.items.map((m, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={m.label} className="space-y-4 group">
                <div className={`mx-auto p-4 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-400/50 transition-all ${colors[i % colors.length]}`}>
                  <Icon className="size-8" />
                </div>
                <h3 className="text-4xl font-black text-white italic tracking-tighter">{m.value}</h3>
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">{m.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

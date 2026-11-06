"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function TimelineSection() {
  const { dict } = useLanguage();
  return (
    <section className="py-24 bg-[#050505] px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-mono font-bold text-white mb-16 italic tracking-tighter">{dict.timeline.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {dict.timeline.items.map((item) => (
            <div key={item.year} className="border-l-2 border-cyan-400/30 pl-6 py-2">
              <span className="text-orange-500 font-mono text-sm font-bold">{item.year}</span>
              <h4 className="text-white font-bold mt-1">{item.title}</h4>
              <p className="text-zinc-500 text-xs mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

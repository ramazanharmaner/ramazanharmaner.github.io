"use client";

import { motion } from "framer-motion";
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
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="space-y-4 group"
              >
                <div className={`mx-auto p-4 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-400/50 group-hover:scale-110 transition-all duration-500 ${colors[i % colors.length]}`}>
                  <Icon className="size-8" />
                </div>
                <h3 className="text-4xl font-black text-white italic tracking-tighter">{m.value}</h3>
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">{m.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

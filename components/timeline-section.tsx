"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function TimelineSection() {
  const { dict } = useLanguage();
  return (
    <section className="py-24 bg-[#050505] px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-mono font-bold text-white mb-16 italic tracking-tighter"
        >
          {dict.timeline.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {dict.timeline.items.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="border-l-2 border-cyan-400/30 pl-6 py-2 hover:border-orange-500/60 transition-colors duration-500 group"
            >
              <span className="text-orange-500 font-mono text-sm font-bold">{item.year}</span>
              <h4 className="text-white font-bold mt-1 group-hover:text-cyan-300 transition-colors duration-500">{item.title}</h4>
              <p className="text-zinc-500 text-xs mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

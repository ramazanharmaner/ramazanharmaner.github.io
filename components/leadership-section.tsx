"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function LeadershipSection() {
  const { dict } = useLanguage();
  const l = dict.leadership;

  return (
    <section id="leadership" className="py-20 md:py-32 bg-[#020203] px-4 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
            {l.titlePrefix}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-cyan-400">{l.titleHighlight}</span>
          </h2>
          <p className="font-mono text-orange-400/80 text-xs md:text-sm">
            <span className="text-orange-400/80">{'>'}</span> {l.subtitleCmd}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {l.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-[1.5rem] p-6 md:p-8 transition-all duration-700 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.12)] flex flex-col"
            >
              <div className="p-3 w-fit bg-zinc-800/80 rounded-2xl border border-white/5 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-colors duration-500 mb-5">
                <Trophy className="text-orange-500 size-6 drop-shadow-[0_0_10px_rgba(249,115,22,0.6)]" />
              </div>

              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400/90">{item.period}</span>
              <h3 className="text-lg md:text-xl font-bold text-white mt-2 leading-snug group-hover:text-orange-300 transition-colors duration-500">{item.role}</h3>
              <p className="text-zinc-500 text-xs font-medium mt-1">{item.org}</p>
              <p className="text-zinc-400 text-sm leading-relaxed font-light mt-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

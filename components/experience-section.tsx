"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ExperienceSection() {
  const { dict } = useLanguage();

  return (
    <section id="experience" className="py-20 md:py-32 bg-[#020203] px-4 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
            {dict.experience.titlePrefix}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-500">{dict.experience.titleHighlight}</span>
          </h2>
          <p className="font-mono text-cyan-500 text-xs md:text-sm">
            <span className="text-cyan-500">{'>'}</span> {dict.experience.subtitleCmd}
          </p>
        </motion.div>

        {/* Timeline list */}
        <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-8 md:space-y-10">
          {dict.experience.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative pl-6 md:pl-10 group"
            >
              {/* Node */}
              <div className="absolute -left-[7px] top-1.5 size-3.5 rounded-full bg-[#020203] border-2 border-cyan-400/60 group-hover:border-orange-500 group-hover:bg-orange-500/20 transition-colors duration-500"></div>

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-500 flex items-center gap-2">
                  <Briefcase className="size-4 text-cyan-400/70 shrink-0" />
                  {item.role}
                </h3>
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-orange-400/90 shrink-0">{item.period}</span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm text-zinc-400">
                <span className="text-zinc-300 font-medium">{item.org}</span>
                <span className="inline-flex items-center gap-1 text-zinc-500">
                  <MapPin className="size-3" /> {item.location}
                </span>
              </div>

              <p className="mt-3 text-sm md:text-base text-zinc-400 leading-relaxed font-light max-w-3xl">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

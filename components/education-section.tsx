"use client";

import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, Languages } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function EducationSection() {
  const { dict } = useLanguage();
  const e = dict.education;

  return (
    <section id="education" className="py-20 md:py-32 bg-[#050505] px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
            {e.titlePrefix}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-orange-500">{e.titleHighlight}</span>
          </h2>
          <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-cyan-400 to-orange-500 mx-auto rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-[1.5rem] p-6 md:p-8 lg:col-span-2 hover:border-cyan-400/40 transition-colors duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="size-6 text-cyan-400" />
              <h3 className="text-[11px] font-mono uppercase tracking-[0.3em] text-cyan-500">{e.eduLabel}</h3>
            </div>
            <div className="space-y-6">
              {e.education.map((ed, i) => (
                <div key={i} className="border-l-2 border-cyan-400/30 pl-5">
                  <h4 className="text-white font-bold text-base md:text-lg">{ed.degree}</h4>
                  <p className="text-zinc-400 text-sm mt-0.5">{ed.org}</p>
                  <p className="text-orange-400/80 font-mono text-xs mt-1">{ed.meta}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="flex items-center gap-3 mt-8 mb-5">
              <Languages className="size-6 text-orange-500" />
              <h3 className="text-[11px] font-mono uppercase tracking-[0.3em] text-orange-500/90">{e.langLabel}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {e.languages.map((l, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-zinc-300">
                  <span className="text-white font-medium">{l.name}</span>
                  <span className="text-zinc-500"> · {l.level}</span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-[1.5rem] p-6 md:p-8 hover:border-orange-500/40 transition-colors duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <BadgeCheck className="size-6 text-orange-500" />
              <h3 className="text-[11px] font-mono uppercase tracking-[0.3em] text-orange-500/90">{e.certLabel}</h3>
            </div>
            <ul className="space-y-4">
              {e.certifications.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-snug">
                  <span className="mt-1.5 size-1.5 rounded-full bg-cyan-400/70 shrink-0"></span>
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

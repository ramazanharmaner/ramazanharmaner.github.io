"use client";

import { motion } from "framer-motion";
import { Cpu, Code2, Rocket, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const skillGroupStyles = [
  {
    icon: Cpu,
    color: "text-orange-500",
    bgHover: "group-hover:bg-orange-500/10",
    borderHover: "group-hover:border-orange-500/50",
    shadowHover: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
  },
  {
    icon: Rocket,
    color: "text-cyan-400",
    bgHover: "group-hover:bg-cyan-400/10",
    borderHover: "group-hover:border-cyan-400/50",
    shadowHover: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
  },
  {
    icon: Code2,
    color: "text-zinc-100",
    bgHover: "group-hover:bg-white/5",
    borderHover: "group-hover:border-white/30",
    shadowHover: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
  }
];

export function SkillsSection() {
  const { dict } = useLanguage();
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="tech stack" className="py-20 md:py-32 bg-[#020203] px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8"
        >
          <div className="space-y-2 md:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
              {dict.skills.titlePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-500">{dict.skills.titleHighlight}</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] md:text-[11px] uppercase tracking-[0.4em] flex items-center gap-2">
              <span className="text-cyan-500">{'>'}</span> {dict.skills.subtitleCmd}
            </p>
          </div>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent mx-12 hidden md:block mb-6"></div>
          <Zap className="size-8 text-orange-500 animate-pulse hidden md:block mb-4 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
        </motion.div>

        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {dict.skills.groups.map((group, index) => {
            const style = skillGroupStyles[index];
            return (
            <motion.div 
              variants={cardVariant}
              key={index}
              className={`group p-6 md:p-10 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 relative overflow-hidden ${style.borderHover} ${style.shadowHover}`}
            >
              {/* Card Accent Glow */}
              <div className={`absolute -top-24 -right-24 size-48 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${style.bgHover}`}></div>

              <style.icon className={`size-10 mb-8 transition-transform group-hover:scale-110 duration-500 ${style.color}`} />
              
              <h3 className="text-xl font-bold text-white mb-8 tracking-tight uppercase border-b border-white/10 pb-4">{group.title}</h3>
              
              <ul className="space-y-5">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-4 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    <div className={`size-1.5 rounded-full ${style.color} shadow-[0_0_8px_currentColor] opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                    <span className="text-sm font-medium tracking-wide">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
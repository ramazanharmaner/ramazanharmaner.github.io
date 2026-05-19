"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Trophy, Workflow } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const projectStyles = [
  {
    tech: ["ROS", "OPENCV", "PYTHON", "STM32"],
    highlight: "Trophy",
    links: { github: "https://github.com/ramazanharmaner", live: "#" }
  },
  {
    tech: ["C#", "STM32", "UART", "NEXTION"],
    highlight: "Workflow",
    links: { github: "https://github.com/ramazanharmaner", live: "#" }
  }
];

export function ProjectsSection() {
  const { dict } = useLanguage();
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#020203] px-4 md:px-12 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            {dict.projects.titlePrefix}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-orange-500">{dict.projects.titleHighlight}</span>{dict.projects.titleSuffix}
          </h2>
          <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-cyan-400 to-orange-500 mx-auto rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        >
          {dict.projects.items.map((p, index) => {
            const style = projectStyles[index];
            return (
            <motion.div 
              variants={cardVariant}
              key={index} 
              className="group relative bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 transition-all duration-700 hover:border-cyan-400/50 shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]"
            >
              {/* Card Header: Icon & Links */}
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="p-3 md:p-4 bg-zinc-800/80 rounded-2xl border border-white/5 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-colors duration-500 shadow-inner">
                  {style.highlight === "Trophy" ? (
                    <Trophy className="text-cyan-400 size-6 md:size-7 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                  ) : (
                    <Workflow className="text-orange-500 size-6 md:size-7 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                  )}
                </div>
                <div className="flex gap-4 md:gap-5 text-zinc-500">
                  <a href={style.links.github} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all">
                    <Github className="size-5 md:size-6" />
                  </a>
                  <a href={style.links.live} className="hover:text-cyan-400 hover:scale-110 transition-all">
                    <ExternalLink className="size-5 md:size-6" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-3 md:space-y-4 relative z-10">
                <span className="text-[9px] md:text-[11px] font-mono font-bold uppercase tracking-[0.4em] text-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]">
                  {p.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-500">
                  {p.title}
                </h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 md:gap-3 mt-6 md:mt-10 relative z-10">
                {style.tech.map((t, tIndex) => (
                  <span 
                    key={tIndex} 
                    className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 text-[9px] md:text-[11px] font-mono text-zinc-300 uppercase tracking-widest group-hover:border-cyan-400/30 group-hover:bg-cyan-900/20 group-hover:text-cyan-300 transition-all duration-300 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Subtle Decorative Gradient */}
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
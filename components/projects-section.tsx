"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Trophy, Workflow } from "lucide-react";

const projects = [
  {
    title: "ATA UAV Team - Founder & Captain",
    tag: "AUTONOMOUS SYSTEMS",
    desc: "Led a multidisciplinary engineering team representing Atatürk University in the international SUAS competition in Maryland, USA. Secured $50,000+ in scientific research grants to develop fully autonomous flight systems.",
    tech: ["ROS", "OPENCV", "PYTHON", "STM32"],
    highlight: "Trophy",
    links: { github: "https://github.com/ramazanharmaner", live: "#" }
  },
  {
    title: "TÜBİTAK UME Embedded Solutions",
    tag: "HARDWARE DESIGN",
    desc: "Engineered ARM-based STM32 microcontroller systems for high-precision measurement at the National Metrology Institute. Developed custom C# ground station interfaces for real-time sensor monitoring and data analysis.",
    tech: ["C#", "STM32", "UART", "NEXTION"],
    highlight: "Workflow",
    links: { github: "https://github.com/ramazanharmaner", live: "#" }
  }
];

export function ProjectsSection() {
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
    <section id="projects" className="py-32 bg-[#020203] px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-orange-500">Engineering</span> Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-orange-500 mx-auto rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {projects.map((p) => (
            <motion.div 
              variants={cardVariant}
              key={p.title} 
              className="group relative bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 transition-all duration-700 hover:border-cyan-400/50 shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]"
            >
              {/* Card Header: Icon & Links */}
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-zinc-800/80 rounded-2xl border border-white/5 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-colors duration-500 shadow-inner">
                  {p.highlight === "Trophy" ? (
                    <Trophy className="text-cyan-400 size-7 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                  ) : (
                    <Workflow className="text-orange-500 size-7 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                  )}
                </div>
                <div className="flex gap-5 text-zinc-500">
                  <a href={p.links.github} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all">
                    <Github className="size-6" />
                  </a>
                  <a href={p.links.live} className="hover:text-cyan-400 hover:scale-110 transition-all">
                    <ExternalLink className="size-6" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4 relative z-10">
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.4em] text-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]">
                  {p.tag}
                </span>
                <h3 className="text-3xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-500">
                  {p.title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-3 mt-10 relative z-10">
                {p.tech.map((t) => (
                  <span 
                    key={t} 
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300 uppercase tracking-widest group-hover:border-cyan-400/30 group-hover:bg-cyan-900/20 group-hover:text-cyan-300 transition-all duration-300 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Subtle Decorative Gradient */}
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
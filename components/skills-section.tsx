"use client";

import { motion } from "framer-motion";
import { Cpu, Code2, Rocket, Zap } from "lucide-react";

const skillGroups = [
  {
    title: "Embedded & Hardware",
    icon: Cpu,
    skills: ["STM32 / ARM Architecture", "Circuit Design & PCB", "SPI / I2C / UART Protocols", "Arduino / RFID Systems"],
    color: "text-orange-500",
    bgHover: "group-hover:bg-orange-500/10",
    borderHover: "group-hover:border-orange-500/50",
    shadowHover: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
  },
  {
    title: "Autonomous & Vision",
    icon: Rocket,
    skills: ["ROS & Gazebo Simulation", "OpenCV Image Processing", "UAV Architectures", "Autonomous Navigation"],
    color: "text-cyan-400",
    bgHover: "group-hover:bg-cyan-400/10",
    borderHover: "group-hover:border-cyan-400/50",
    shadowHover: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
  },
  {
    title: "Software Engineering",
    icon: Code2,
    skills: ["C# / C++ / Python", "Unity Engine Development", "Next.js & React Framework", "SQL Server Management"],
    color: "text-zinc-100",
    bgHover: "group-hover:bg-white/5",
    borderHover: "group-hover:border-white/30",
    shadowHover: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
  }
];

export function SkillsSection() {
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
    <section id="tech stack" className="py-32 bg-[#020203] px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-500">Expertise</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[11px] uppercase tracking-[0.4em] flex items-center gap-2">
              <span className="text-cyan-500">{'>'}</span> ./mastered_technologies.sh
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillGroups.map((group) => (
            <motion.div 
              variants={cardVariant}
              key={group.title}
              className={`group p-10 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] transition-all duration-500 relative overflow-hidden ${group.borderHover} ${group.shadowHover}`}
            >
              {/* Card Accent Glow */}
              <div className={`absolute -top-24 -right-24 size-48 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${group.bgHover}`}></div>

              <group.icon className={`size-10 mb-8 transition-transform group-hover:scale-110 duration-500 ${group.color}`} />
              
              <h3 className="text-xl font-bold text-white mb-8 tracking-tight uppercase border-b border-white/10 pb-4">{group.title}</h3>
              
              <ul className="space-y-5">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-4 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    <div className={`size-1.5 rounded-full ${group.color} shadow-[0_0_8px_currentColor] opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                    <span className="text-sm font-medium tracking-wide">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
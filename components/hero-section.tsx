"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, TerminalSquare } from "lucide-react";

export function HeroSection() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          className="space-y-12"
        >
          <motion.div custom={0} variants={fadeUpVariant} className="flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.03)]">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
              <span className="text-zinc-300">SYSTEM.STATUS: <span className="text-cyan-400">ONLINE</span></span>
            </div>
            <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 backdrop-blur-xl text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
              <TerminalSquare className="w-3 h-3" />
              Available for Architecture & Engineering
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.h2 custom={1} variants={fadeUpVariant} className="text-zinc-400 text-xl md:text-2xl font-light tracking-wide flex items-center gap-4">
              <span className="w-8 h-[1px] bg-cyan-500/50"></span>
              Ramazan <span className="font-semibold text-white">Harmaner</span>
            </motion.h2>
            
            <motion.h1 custom={2} variants={fadeUpVariant} className="text-6xl md:text-8xl lg:text-[7.5rem] font-black leading-[0.95] tracking-tighter text-white uppercase">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-cyan-300 to-orange-500 drop-shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                Systems that Think.
              </span>
            </motion.h1>
          </div>

          <motion.p custom={3} variants={fadeUpVariant} className="text-zinc-400 text-lg md:text-2xl max-w-2xl font-light leading-relaxed border-l-2 border-orange-500/50 pl-6">
            Computer Systems Engineer specializing in <span className="text-cyan-300 font-medium drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">Autonomous UAVs</span> and 
            <span className="text-orange-400 font-medium drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]"> Embedded Architectures</span>.
          </motion.p>

          <motion.div custom={4} variants={fadeUpVariant} className="flex flex-wrap items-center gap-8 pt-8">
            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-3 group shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]">
              Initialize Protocols <ArrowRight className="size-4 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <div className="flex items-center gap-6 text-zinc-500">
               <a href="https://github.com/ramazanharmaner" target="_blank" rel="noreferrer" className="hover:text-cyan-400 hover:scale-110 transition-all duration-300"><Github className="size-6" /></a>
               <a href="https://linkedin.com/in/ramazanharmaner" target="_blank" rel="noreferrer" className="hover:text-orange-500 hover:scale-110 transition-all duration-300"><Linkedin className="size-6" /></a>
               <a href="mailto:ramazanharmaner@gmail.com" className="hover:text-white hover:scale-110 transition-all duration-300"><Mail className="size-6" /></a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block opacity-10 pointer-events-none mix-blend-overlay">
        <p className="text-[25vh] font-black text-white leading-none rotate-90 select-none uppercase tracking-tighter">
          <span className="text-cyan-500">SYS</span>.ENG
        </p>
      </div>
    </section>
  );
}
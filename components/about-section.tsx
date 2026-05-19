"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Cpu, CircuitBoard } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function AboutSection() {
  const { dict } = useLanguage();
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative py-20 md:py-32 bg-[#020203] px-4 md:px-12 overflow-hidden border-y border-white/5">
      {/* Background Code Texture - Super Subtle */}
      <div className="absolute inset-0 opacity-[0.02] md:opacity-[0.03] pointer-events-none font-mono text-[8px] md:text-[10px] text-cyan-500 overflow-hidden select-none p-4 md:p-10 leading-relaxed mix-blend-screen">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap mb-2">
            {`system.init(); load_uav_module("autonomous_v2"); vision.process(opencv_stream); memory.allocate(0x1F2A);`.repeat(8)}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center"
        >
          {/* FOTOĞRAF ALANI (Sol - 5 Sütun) */}
          <motion.div variants={itemVariant} className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Dinamik Dönen Halkalar */}
              <div className="absolute -inset-6 md:-inset-8 border border-cyan-400/20 rounded-full animate-[spin_15s_linear_infinite] group-hover:border-cyan-400/40 transition-colors duration-700"></div>
              <div className="absolute -inset-3 md:-inset-4 border border-orange-500/20 rounded-full animate-[spin_10s_linear_infinite_reverse] group-hover:border-orange-500/50 transition-colors duration-700 shadow-[0_0_30px_rgba(249,115,22,0.1)]"></div>
              
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border border-zinc-800 shadow-[0_0_60px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] transition-shadow duration-700">
                <Image 
                  src="/me.jpg" 
                  alt="Ramazan Harmaner" 
                  fill 
                  className="object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/30 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>

          {/* METİN ALANI (Sağ - 7 Sütun) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left pt-8 lg:pt-0">
            <motion.div variants={itemVariant} className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Cpu className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-500" />
                <span className="text-[9px] md:text-[11px] font-mono uppercase tracking-[0.5em] text-cyan-500">{dict.about.subtitle}</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase text-white leading-[1.1] md:leading-none">
                Ramazan <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-500">Harmaner</span>
              </h2>
            </motion.div>

            {/* Yeni Mühendislik Paragrafı */}
            <motion.p 
              variants={itemVariant} 
              className="text-zinc-400 text-base md:text-xl font-light leading-relaxed max-w-3xl px-2 md:px-0"
              dangerouslySetInnerHTML={{ __html: dict.about.description }}
            />

            {/* Başarılar ve Sosyal Medya Linkleri */}
            <motion.div variants={itemVariant} className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 md:gap-8 pt-6 border-t border-white/5">
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                <div className="p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm min-w-[120px]">
                  <p className="text-2xl md:text-3xl font-black text-white tracking-tighter">3.20</p>
                  <p className="text-[9px] md:text-[10px] font-mono uppercase text-cyan-500 tracking-widest mt-1">{dict.about.gpaLabel}</p>
                </div>
                <div className="p-3 md:p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm min-w-[120px]">
                  <p className="text-2xl md:text-3xl font-black text-orange-400 tracking-tighter">$50K+</p>
                  <p className="text-[9px] md:text-[10px] font-mono uppercase text-orange-500/80 tracking-widest mt-1">{dict.about.fundingLabel}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 sm:ml-4 mt-4 sm:mt-0">
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-mono text-zinc-300 uppercase tracking-widest">
                    <MapPin className="size-3.5 text-cyan-400" /> {dict.about.location}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-mono text-zinc-300 uppercase tracking-widest">
                    <CircuitBoard className="size-3.5 text-orange-400" /> {dict.about.role}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
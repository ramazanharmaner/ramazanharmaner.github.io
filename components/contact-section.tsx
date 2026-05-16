"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, ArrowUpRight, Terminal } from "lucide-react";

const contactLinks = [
  {
    label: "Secure Email Protocol",
    value: "ramazanharmaner@gmail.com",
    href: "mailto:ramazanharmaner@gmail.com",
    icon: Mail,
    color: "group-hover:text-cyan-400"
  },
  {
    label: "Professional Network",
    value: "linkedin.com/in/ramazanharmaner",
    href: "https://linkedin.com/in/ramazanharmaner",
    icon: Linkedin,
    color: "group-hover:text-blue-500"
  },
  {
    label: "Source Code Repository",
    value: "github.com/ramazanharmaner",
    href: "https://github.com/ramazanharmaner",
    icon: Github,
    color: "group-hover:text-orange-500"
  }
];

export function ContactSection() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#020203] px-4 md:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariant}
          className="bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
            
            {/* Left Side: Text */}
            <div className="space-y-6 md:space-y-8">
              <motion.div variants={itemVariant} className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 mb-2 md:mb-4">
                  <Terminal className="size-4 md:size-5 text-cyan-500" />
                  <span className="text-[9px] md:text-[11px] font-mono text-cyan-500 tracking-[0.4em] uppercase">Initialize_Connection</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                  Let’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">Connect</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-xl font-light leading-relaxed max-w-md border-l-2 border-cyan-500/50 pl-4">
                  Whether you have a question about <span className="text-white">embedded systems</span>, 
                  robotics, or potential <span className="text-orange-400">collaboration</span>—my inbox is always open.
                </p>
              </motion.div>

              <motion.div variants={itemVariant} className="flex flex-wrap items-center gap-2 md:gap-3 text-zinc-400 font-mono text-[9px] md:text-[11px] uppercase tracking-widest bg-black/40 w-max px-3 py-2 md:px-4 md:py-2 rounded-full border border-white/5">
                <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                <MapPin className="size-3.5 md:size-4" />
                Agawam, MA 01001
              </motion.div>
            </div>

            {/* Right Side: Contact Links */}
            <div className="space-y-3 md:space-y-4">
              {contactLinks.map((link) => (
                <motion.a 
                  variants={itemVariant}
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="group flex items-center justify-between p-4 md:p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="p-2 md:p-3 bg-zinc-950/80 rounded-xl group-hover:scale-110 transition-transform duration-500 shadow-inner">
                      <link.icon className={`size-5 md:size-6 text-zinc-400 ${link.color} transition-colors duration-300`} />
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-1">{link.label}</p>
                      <p className="text-sm md:text-base font-semibold text-zinc-200 tracking-wide break-all">{link.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 md:size-5 text-zinc-600 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>

          </div>
        </motion.div>
      </div>

      {/* Final Footer Label */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-20 text-center relative z-10"
      >
        <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-700">
          RH.DEV © 2026 | Engineering Excellence
        </p>
      </motion.div>
    </section>
  );
}
"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";

export function SiteHeader() {
  const { language, toggleLanguage, dict } = useLanguage();

  const navLinks = [
    { href: "work", label: dict.nav.work },
    { href: "tech stack", label: dict.nav.techStack },
    { href: "about", label: dict.nav.about },
    { href: "contact", label: dict.nav.contact },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="px-1.5 py-0.5 md:px-2 md:py-1 border border-cyan-400/50 rounded bg-cyan-400/5 text-cyan-400 font-black text-[10px] md:text-sm tracking-tighter group-hover:border-orange-500/50 group-hover:text-orange-500 transition-all duration-500">
              RH.DEV
            </div>
            <div className="h-3 md:h-4 w-[1px] bg-zinc-700"></div>
            <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.1em] sm:tracking-[0.3em] text-white uppercase italic group-hover:text-cyan-400 transition-colors truncate max-w-[150px] sm:max-w-none">
              Ramazan <span className="text-orange-500">Harmaner</span>
            </span>
          </div>
        </Link>
        
        <div className="flex items-center gap-6 md:gap-10">
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link key={item.href} href={`#${item.href}`} className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 hover:text-cyan-400 transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="group relative flex items-center p-1 bg-zinc-900/80 border border-white/10 rounded-full cursor-pointer overflow-hidden transition-all duration-300 hover:border-cyan-400/50 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            aria-label="Toggle Language"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/20 to-orange-500/20 blur-md pointer-events-none" />
            
            {/* Sliding Pill */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={`absolute top-1 bottom-1 w-8 rounded-full ${language === 'en' ? 'bg-cyan-500/20 border border-cyan-500/50' : 'bg-orange-500/20 border border-orange-500/50'}`}
              initial={false}
              animate={{
                x: language === 'en' ? 4 : 36,
              }}
            />

            {/* EN Text */}
            <span className={`relative z-10 w-8 text-center text-[10px] font-mono font-bold tracking-widest transition-colors duration-300 ${language === 'en' ? 'text-cyan-400' : 'text-zinc-500'}`}>
              EN
            </span>
            
            {/* TR Text */}
            <span className={`relative z-10 w-8 text-center text-[10px] font-mono font-bold tracking-widest transition-colors duration-300 ${language === 'tr' ? 'text-orange-400' : 'text-zinc-500'}`}>
              TR
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
"use client";
import Link from "next/link";

export function SiteHeader() {
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
        
        <nav className="hidden md:flex items-center gap-10">
          {["Work", "Tech Stack", "About", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 hover:text-cyan-400 transition-colors">
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
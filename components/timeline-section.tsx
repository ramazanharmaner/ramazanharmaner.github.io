const roadmap = [
    { year: "2018-2022", title: "B.S. Comp Engineering", desc: "Atatürk University. Embedded Systems Research." },
    { year: "2020-2022", title: "UAV Leadership", desc: "Founded ATA UAV Team. Secured $50K Grants." },
    { year: "2023", title: "Global Expansion", desc: "Moved to USA. IVY College Academic English." },
    { year: "2024-Pres", title: "Strategic Growth", desc: "Business Finance & Freelance Engineering." }
  ];
  
  export function TimelineSection() {
    return (
      <section className="py-24 bg-[#050505] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-mono font-bold text-white mb-16 italic tracking-tighter">./career_roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {roadmap.map((item) => (
              <div key={item.year} className="border-l-2 border-cyan-400/30 pl-6 py-2">
                <span className="text-orange-500 font-mono text-sm font-bold">{item.year}</span>
                <h4 className="text-white font-bold mt-1">{item.title}</h4>
                <p className="text-zinc-500 text-xs mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
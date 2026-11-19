import React from 'react';
import { Building2, ShieldCheck, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export const BrandIdentity: React.FC = () => {
  return (
    <section id="identity" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#075BFF]/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#00E5FF]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-xs font-mono text-[#00E5FF] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>ETHOS & ARCHITECTURE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase">
            Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00BFFF]">Identity</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-light">
            StructureGuard unites world-class civil structural engineering with next-generation predictive cyber-physical telemetry.
          </p>
        </div>

        {/* The Core Dichotomy: STRUCTURE vs GUARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: STRUCTURE */}
          <div className="relative rounded-3xl bg-[#091426]/75 border border-[#CBD5E1]/20 p-8 backdrop-blur-xl shadow-xl tech-corner overflow-hidden group hover:border-[#CBD5E1]/50 transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 text-white/5 font-display font-black text-7xl select-none pointer-events-none">
              01
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-600/40 flex items-center justify-center text-slate-200 mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="inline-block text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                Pillar I • Foundations
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl tracking-wide text-white uppercase flex items-center gap-2">
                <span>STRUCTURE</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/20">
                  METALLIC SILVER
                </span>
              </h3>
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Represents <strong className="text-white font-semibold">buildings, engineering, and structural integrity</strong>. It signifies monolithic stability, load-bearing resilience, bridges, skyscrapers, and infrastructure designed to withstand geological shifts, environmental wear, and extreme physical forces.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-3 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-white">■</span> Civil Engineering
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white">■</span> Concrete & Steel
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white">■</span> High-Rise Towers
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white">■</span> Structural Physics
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: GUARD */}
          <div className="relative rounded-3xl bg-[#091426]/75 border border-[#00E5FF]/30 p-8 backdrop-blur-xl shadow-xl tech-corner overflow-hidden group hover:border-[#00E5FF] hover:shadow-[0_0_35px_rgba(0,229,255,0.2)] transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 text-[#00E5FF]/5 font-display font-black text-7xl select-none pointer-events-none">
              02
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#075BFF]/20 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                <ShieldCheck className="w-6 h-6 text-[#00E5FF]" />
              </div>
              <div className="inline-block text-[11px] font-mono uppercase tracking-widest text-[#00E5FF] mb-2">
                Pillar II • Vigilance
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl tracking-wide text-white uppercase flex items-center gap-2">
                <span className="text-[#00E5FF] text-glow-cyan">GUARD</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30">
                  ELECTRIC CYAN
                </span>
              </h3>
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Represents <strong className="text-white font-semibold">protection, monitoring, safety, and reliability</strong>. It embodies relentless autonomous vigilance, sub-millimeter displacement telemetry, predictive vibration analysis, and instant hazard alerts that safeguard human life.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-3 text-xs font-mono text-[#00E5FF]/80">
                <div className="flex items-center gap-2">
                  <span className="text-[#00E5FF]">■</span> 24/7 IoT Telemetry
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00E5FF]">■</span> Predictive AI Alerts
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00E5FF]">■</span> Fault Diagnostics
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00E5FF]">■</span> Life-Safety Shield
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision Feature Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#075BFF]/20 via-[#091426] to-[#00BFFF]/20 border border-[#00E5FF]/40 p-8 sm:p-12 text-center overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.7)]">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent animate-pulse" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00E5FF] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>ORGANIZATIONAL MISSION</span>
          </div>

          <h3 className="font-mono text-xs sm:text-sm tracking-[0.2em] text-slate-400 uppercase font-semibold">
            Our Vision
          </h3>

          <blockquote className="mt-4 font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide max-w-4xl mx-auto leading-snug">
            “Making structural health monitoring <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#00BFFF] to-[#075BFF]">smarter, accessible, and technology-driven</span>.”
          </blockquote>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
              <span>Real-Time Sensor Fusion</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
              <span>Predictive Anomaly Scoring</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
              <span>Zero Hardware Obsolescence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowDown, Download, ShieldCheck, Sparkles, Activity, Layers, Cpu } from 'lucide-react';

interface HeroProps {
  onDownload: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownload, onExplore }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic Lighting Auras */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[450px] sm:h-[550px] bg-gradient-to-tr from-[#075BFF]/20 via-[#00BFFF]/25 to-[#00E5FF]/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-glow-shift" />
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-[#00E5FF]/10 blur-[90px] rounded-full pointer-events-none -z-10 animate-pulse-subtle" />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Verification Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#091426]/80 border border-[#00E5FF]/40 shadow-[0_0_20px_rgba(0,229,255,0.2)] backdrop-blur-md mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
          </span>
          <span className="text-xs font-mono font-medium tracking-widest text-[#00E5FF] uppercase">
            Official Brand Identity & Asset Portal
          </span>
          <span className="text-slate-500 font-mono text-xs">•</span>
          <span className="text-[11px] font-mono text-slate-300">v1.0 Production Asset</span>
        </div>

        {/* Hero Logo Display Container */}
        <div className="relative w-full max-w-3xl my-4 sm:my-6 group">
          {/* Subtle glowing halo behind the logo */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00E5FF]/10 via-[#00BFFF]/20 to-[#075BFF]/10 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Card framing the official logo */}
          <div className="relative rounded-2xl bg-[#091426]/60 border border-[#00BFFF]/30 backdrop-blur-xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] tech-corner transition-all duration-500 group-hover:border-[#00E5FF]/60 group-hover:shadow-[0_25px_70px_rgba(0,191,255,0.25)]">
            {/* Top scanning laser shimmer line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-75" />

            {/* Official Logo Image */}
            <img
              src="/StructureGuard Tech Logo.png"
              alt="STRUCTUREGUARD – Smart Structural Health Monitoring System Official Logo"
              className="w-full h-auto max-h-[140px] sm:max-h-[190px] object-contain mx-auto filter drop-shadow-[0_10px_25px_rgba(0,191,255,0.35)] transition-transform duration-500 group-hover:scale-[1.015]"
              loading="eager"
            />

            {/* Corner status markers */}
            <div className="absolute bottom-2 right-3 flex items-center gap-1.5 text-[9px] font-mono text-[#00E5FF]/70">
              <Sparkles className="w-2.5 h-2.5" />
              <span>ORIGINAL RGBA ASSET</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="mt-8 space-y-4 max-w-3xl">
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase">
            STRUCTURE<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00BFFF] text-glow-cyan">GUARD</span>
          </h1>

          <p className="font-mono text-xs sm:text-sm lg:text-base tracking-[0.25em] text-[#00E5FF] font-semibold uppercase">
            Smart Structural Health Monitoring System
          </p>

          <p className="text-base sm:text-xl text-slate-300 font-light tracking-wide max-w-2xl mx-auto pt-2">
            "Engineering Confidence. Monitoring Structural Integrity."
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Explore Button */}
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#091426] hover:bg-[#0D1C36] text-white border border-[#00BFFF]/40 hover:border-[#00E5FF] font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,229,255,0.3)] flex items-center justify-center gap-2 group"
          >
            <span>Explore Official Logo</span>
            <ArrowDown className="w-4 h-4 text-[#00E5FF] group-hover:translate-y-1 transition-transform" />
          </button>

          {/* Download Button */}
          <button
            onClick={onDownload}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#075BFF] via-[#00BFFF] to-[#00E5FF] text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(0,191,255,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.7)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 relative overflow-hidden group"
          >
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            <span>Download Logo</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
          </button>
        </div>

        {/* Tech Badges / Micro Telemetry Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#091426]/40 border border-white/5">
            <div className="p-2 rounded-md bg-[#00E5FF]/10 text-[#00E5FF]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Master Resolution</div>
              <div className="text-xs font-mono font-bold text-white">2172 × 724 PX</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#091426]/40 border border-white/5">
            <div className="p-2 rounded-md bg-[#00BFFF]/10 text-[#00BFFF]">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Color Depth</div>
              <div className="text-xs font-mono font-bold text-white">32-bit RGBA Alpha</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#091426]/40 border border-white/5">
            <div className="p-2 rounded-md bg-[#075BFF]/10 text-[#075BFF]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Asset Integrity</div>
              <div className="text-xs font-mono font-bold text-[#00E5FF]">Original & Untouched</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#091426]/40 border border-white/5">
            <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Public Availability</div>
              <div className="text-xs font-mono font-bold text-emerald-400">Direct CDN & GitHub</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

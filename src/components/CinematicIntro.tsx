import React, { useState, useEffect } from 'react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'laser' | 'logo' | 'text' | 'flare' | 'exit'>('laser');

  useEffect(() => {
    // Stage 1: Laser surge (0 - 500ms)
    const t1 = setTimeout(() => setPhase('logo'), 450);

    // Stage 2: Logo reveal & shockwave (500 - 1300ms)
    const t2 = setTimeout(() => setPhase('text'), 1250);

    // Stage 3: Text & Tagline illumination (1300 - 2200ms)
    const t3 = setTimeout(() => setPhase('flare'), 2100);

    // Stage 4: Light sweep & exit transition (2200 - 2900ms)
    const t4 = setTimeout(() => {
      setPhase('exit');
      setTimeout(onComplete, 650);
    }, 2850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div
      onClick={onComplete}
      className={`fixed inset-0 z-50 bg-[#020408] flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-700 ${
        phase === 'exit' ? 'opacity-0 scale-110 pointer-events-none filter blur-sm' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      {/* Center Deep Blue & Cyan Explosive Radial Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000 pointer-events-none ${
          phase === 'laser'
            ? 'w-10 h-10 bg-[#00E5FF] blur-xl opacity-90'
            : phase === 'logo'
            ? 'w-[500px] h-[500px] bg-gradient-to-tr from-[#075BFF]/40 via-[#00BFFF]/50 to-[#00E5FF]/40 blur-[100px] opacity-100'
            : 'w-[750px] h-[750px] bg-gradient-to-tr from-[#075BFF]/30 via-[#00BFFF]/40 to-[#00E5FF]/30 blur-[130px] opacity-80'
        }`}
      />

      {/* Horizontal High-Voltage Laser Beam */}
      <div
        className={`absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent pointer-events-none transition-all duration-500 -translate-y-1/2 ${
          phase === 'laser'
            ? 'scale-x-100 opacity-100 shadow-[0_0_25px_#00E5FF]'
            : 'scale-x-150 opacity-20'
        }`}
      />

      {/* Animated Optical Shockwave Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`rounded-full border border-[#00E5FF]/50 transition-all duration-1000 ${
            phase !== 'laser' ? 'w-[450px] h-[450px] scale-150 opacity-0' : 'w-16 h-16 scale-50 opacity-100'
          }`}
        />
        <div
          className={`rounded-full border border-[#075BFF]/60 transition-all duration-1000 delay-150 ${
            phase !== 'laser' ? 'w-[650px] h-[650px] scale-150 opacity-0' : 'w-10 h-10 scale-50 opacity-100'
          }`}
        />
      </div>

      {/* Center Brand Elements */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-xl mx-auto">
        {/* 3D Shield Logo with Glowing Cyber Frame */}
        <div
          className={`relative transition-all duration-700 ease-out transform ${
            phase === 'laser'
              ? 'scale-0 opacity-0 rotate-[-15deg]'
              : 'scale-100 opacity-100 rotate-0'
          }`}
        >
          {/* Intense Glow Behind Logo */}
          <div className="absolute -inset-6 bg-gradient-to-r from-[#00E5FF] via-[#00BFFF] to-[#075BFF] rounded-3xl blur-2xl opacity-60 animate-pulse pointer-events-none" />

          {/* Logo Frame */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-[#061022]/90 border-2 border-[#00E5FF] p-4 flex items-center justify-center shadow-[0_0_60px_rgba(0,229,255,0.6)] backdrop-blur-xl">
            {/* Shimmer Light Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent rounded-3xl pointer-events-none" />

            <img
              src="/structureguard-icon.png"
              alt="StructureGuard 3D Shield Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_18px_rgba(0,229,255,0.85)]"
            />
          </div>
        </div>

        {/* Wordmark Reveal */}
        <div className="mt-8 overflow-hidden">
          <h1
            className={`font-display font-black text-4xl sm:text-6xl tracking-widest uppercase transition-all duration-700 transform ${
              phase === 'laser' || phase === 'logo'
                ? 'translate-y-12 opacity-0'
                : 'translate-y-0 opacity-100'
            }`}
          >
            <span className="text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              STRUCTURE
            </span>
            <span className="text-[#00E5FF] drop-shadow-[0_0_30px_rgba(0,229,255,0.9)] ml-1">
              GUARD
            </span>
          </h1>
        </div>

        {/* Tagline Reveal */}
        <div className="overflow-hidden mt-3">
          <p
            className={`text-xs sm:text-sm font-mono tracking-[0.3em] text-[#00E5FF]/90 font-bold uppercase transition-all duration-700 delay-100 transform ${
              phase === 'flare' || phase === 'exit'
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            Smart Structural Health Monitoring System
          </p>
        </div>

        {/* Light Flare Sweep across wordmark */}
        <div
          className={`mt-6 h-[1.5px] w-64 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent transition-all duration-700 ${
            phase === 'flare' || phase === 'exit'
              ? 'scale-x-100 opacity-100 shadow-[0_0_15px_#00E5FF]'
              : 'scale-x-0 opacity-0'
          }`}
        />

        {/* Click anywhere hint */}
        <div className="mt-8 text-[11px] font-mono text-slate-500 tracking-wider">
          Click anywhere to enter
        </div>
      </div>
    </div>
  );
};

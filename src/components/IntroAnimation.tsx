import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Fill progress over 2.4 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    // Fade out sequence
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        onComplete();
      }, 700);
    }, 2600);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#020409] flex flex-col items-center justify-center p-4 transition-all duration-700 ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Radial Neon Aura */}
      <div className="absolute w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-gradient-to-tr from-[#075BFF]/25 via-[#00BFFF]/30 to-[#00E5FF]/20 blur-[130px] rounded-full pointer-events-none animate-pulse" />

      {/* Skip Button */}
      <button
        onClick={() => {
          setIsFadingOut(true);
          setTimeout(onComplete, 300);
        }}
        className="absolute top-6 right-6 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#00E5FF]/40 text-xs font-mono text-slate-400 hover:text-white transition-colors"
      >
        Skip [ESC]
      </button>

      <div className="relative z-10 flex flex-col items-center text-center max-w-md mx-auto">
        {/* Animated Glowing Logo Symbol */}
        <div className="relative mb-8 group">
          {/* Pulsing ring aura */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00E5FF] to-[#075BFF] rounded-3xl blur-xl opacity-50 animate-pulse" />

          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-[#061022] border-2 border-[#00E5FF] p-4 flex items-center justify-center shadow-[0_0_50px_rgba(0,229,255,0.4)] animate-in zoom-in-75 duration-700">
            {/* Laser scan line passing over logo */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E5FF]/30 to-transparent h-6 w-full animate-[scanline_2s_linear_infinite] pointer-events-none" />

            <img
              src="/structureguard-icon.png"
              alt="StructureGuard Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,229,255,0.7)]"
            />
          </div>
        </div>

        {/* Brand Name Reveal */}
        <div className="overflow-hidden mb-2">
          <h1 className="font-display font-black text-3xl sm:text-4xl tracking-wider text-white uppercase animate-in slide-in-from-bottom-5 duration-700">
            STRUCTURE<span className="text-[#00E5FF] drop-shadow-[0_0_20px_rgba(0,229,255,0.8)]">GUARD</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-[#00E5FF]/90 uppercase font-semibold mb-8 animate-in fade-in duration-1000">
          Smart Structural Health Monitoring System
        </p>

        {/* High-tech Loading Progress Bar */}
        <div className="w-56 sm:w-64">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-[#00BFFF]/30">
            <div
              className="h-full bg-gradient-to-r from-[#075BFF] via-[#00BFFF] to-[#00E5FF] rounded-full transition-all duration-75 shadow-[0_0_12px_rgba(0,229,255,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-[#00E5FF]">
              <Sparkles className="w-3 h-3 animate-spin" />
              <span>INITIALIZING SYSTEM</span>
            </span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

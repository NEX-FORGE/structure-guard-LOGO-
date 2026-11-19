import React from 'react';
import { ShieldCheck, ArrowUp, ExternalLink } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="relative bg-[#020408] border-t border-[#00BFFF]/20 pt-16 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-t from-[#075BFF]/15 via-[#00BFFF]/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Official StructureGuard Logo Lockup */}
          <div className="w-full max-w-sm sm:max-w-md mb-6 p-4 rounded-2xl bg-[#091426]/40 border border-white/5 backdrop-blur-md">
            <img
              src="/StructureGuard Tech Logo.png"
              alt="StructureGuard Official Brand Logo"
              className="w-full h-auto max-h-[75px] object-contain mx-auto filter drop-shadow-[0_4px_15px_rgba(0,191,255,0.25)]"
              loading="lazy"
            />
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white uppercase">
            STRUCTURE<span className="text-[#00E5FF]">GUARD</span>
          </h3>

          <p className="mt-2 text-xs sm:text-sm font-mono tracking-widest text-[#00E5FF] uppercase font-semibold">
            Smart Structural Health Monitoring System
          </p>

          <p className="mt-3 text-xs text-slate-400 max-w-md mx-auto font-light">
            Engineering Confidence. Monitoring Structural Integrity through autonomous IoT telemetry, vibration sensors, and real-time civil diagnostics.
          </p>

          {/* Nav Quick Jump Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-mono uppercase tracking-wider text-slate-400">
            <a href="#showcase" className="hover:text-[#00E5FF] transition-colors">Official Logo</a>
            <span className="text-slate-700">•</span>
            <a href="#previews" className="hover:text-[#00E5FF] transition-colors">Previews</a>
            <span className="text-slate-700">•</span>
            <a href="#identity" className="hover:text-[#00E5FF] transition-colors">Identity</a>
            <span className="text-slate-700">•</span>
            <a href="#specs" className="hover:text-[#00E5FF] transition-colors">Specifications</a>
            <span className="text-slate-700">•</span>
            <a href="#assets" className="hover:text-[#00E5FF] transition-colors">Asset Hub</a>
          </div>

          {/* Status & GitHub Repo Link */}
          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://github.com/NEX-FORGE/structure-guard"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#091426] border border-white/10 hover:border-[#00E5FF]/40 text-xs font-mono text-slate-300 hover:text-white transition-all group"
            >
              <svg className="w-4 h-4 text-[#00E5FF] fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>NEX-FORGE / structure-guard</span>
              <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#00E5FF] transition-colors" />
            </a>

            <button
              onClick={onScrollToTop}
              className="p-2 rounded-lg bg-[#091426] border border-white/10 hover:border-[#00E5FF]/40 text-slate-300 hover:text-white transition-all"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-[#00E5FF]" />
            </button>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Production Brand Assets</span>
            </div>
            <div>
              © 2026 StructureGuard. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


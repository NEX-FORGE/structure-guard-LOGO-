import React, { useState } from 'react';
import { Eye, Copy, Check } from 'lucide-react';

interface LogoPreviewProps {
  onNotify: (title: string, message: string, type?: 'success' | 'info') => void;
}

export const LogoPreview: React.FC<LogoPreviewProps> = ({ onNotify }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'dark' | 'light' | 'blue'>('all');
  const [copiedBg, setCopiedBg] = useState<string | null>(null);

  const LOGO_SRC = '/StructureGuard Tech Logo.png';

  const previewCards = [
    {
      id: 'dark',
      title: 'Dark Background Preview',
      hex: '#03060D',
      bgDescription: 'Deep Obsidian Space Black with subtle blueprint telemetry grid',
      containerClasses: 'bg-[#03060D] border-[#00BFFF]/30 text-white',
      badgeClass: 'bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/30',
      useCase: 'Primary Native Environment: Cyber Command Center, Dark UI Dashboards, Digital Billboards',
      wcag: 'WCAG AAA Compliant',
      innerPattern: 'bg-tech-grid opacity-30',
    },
    {
      id: 'light',
      title: 'Light Background Preview',
      hex: '#F8FAFC',
      bgDescription: 'Architectural Clean Pearl White with subtle drafting coordinates',
      containerClasses: 'bg-[#F8FAFC] border-slate-300 text-slate-900',
      badgeClass: 'bg-slate-900/10 text-slate-800 border-slate-300',
      useCase: 'Print & Structural Engineering Docs: Schematics, Technical Whitepapers, Hardhat Decals',
      wcag: 'High Contrast Vector Legibility',
      innerPattern: 'opacity-20',
    },
    {
      id: 'blue',
      title: 'Blue Background Preview',
      hex: '#075BFF',
      bgDescription: 'StructureGuard Royal Navy & Electric Cobalt with radial energy dispersion',
      containerClasses: 'bg-gradient-to-br from-[#075BFF] via-[#091426] to-[#03060D] border-[#00E5FF]/40 text-white',
      badgeClass: 'bg-white/10 text-white border-white/20',
      useCase: 'Brand Keynotes & Corporate Media: Annual Structural Reports, Trade Booths, Hero Banners',
      wcag: 'Branded Dynamic Visual Impact',
      innerPattern: 'opacity-40',
    },
  ];

  const handleCopyHex = (hex: string, name: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedBg(hex);
    setTimeout(() => setCopiedBg(null), 2000);
    onNotify('Background Hex Copied', `${name} background code (${hex}) copied to clipboard`, 'info');
  };

  const filteredCards = activeTab === 'all'
    ? previewCards
    : previewCards.filter((card) => card.id === activeTab);

  return (
    <section id="previews" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] mb-4">
            <Eye className="w-3.5 h-3.5" />
            <span>CROSS-ENVIRONMENT RENDERING</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase">
            Logo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00BFFF]">Preview</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-light">
            Preview the unmodified official StructureGuard logo against the brand’s core background environments. Engineered with optimal contrast, metallic reflection, and high legibility across dark, light, and cobalt surfaces.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-[#091426] border border-white/10 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Environments (3)' },
              { id: 'dark', label: 'Dark (#03060D)' },
              { id: 'light', label: 'Light (#F8FAFC)' },
              { id: 'blue', label: 'Royal Blue (#075BFF)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#075BFF] to-[#00BFFF] text-white shadow-[0_0_15px_rgba(0,191,255,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Preview Cards Grid */}
        <div className={`grid gap-8 ${filteredCards.length === 1 ? 'max-w-3xl mx-auto grid-cols-1' : 'grid-cols-1 lg:grid-cols-3'}`}>
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="group relative rounded-3xl bg-[#091426]/70 border border-[#00BFFF]/20 backdrop-blur-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-[#00E5FF]/60 hover:shadow-[0_20px_45px_rgba(0,191,255,0.15)]"
            >
              {/* Card Header Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#03060D]/80">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border ${card.badgeClass}`}>
                    {card.title.split(' ')[0]} MODE
                  </span>
                </div>
                <button
                  onClick={() => handleCopyHex(card.hex, card.title)}
                  className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-[#00E5FF] transition-colors"
                  title="Copy background hex color"
                >
                  {copiedBg === card.hex ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>{card.hex}</span>
                    </>
                  )}
                </button>
              </div>

              {/* The Actual Preview Stage - Displaying the unmodified official logo */}
              <div
                className={`relative min-h-[220px] sm:min-h-[260px] flex items-center justify-center p-8 transition-colors ${card.containerClasses}`}
              >
                {/* Background Pattern Layer */}
                <div className={`absolute inset-0 pointer-events-none ${card.innerPattern}`} />

                {/* Subtitle Accent Glow (For Dark & Blue cards) */}
                {card.id === 'dark' && (
                  <div className="absolute inset-0 bg-radial from-[#00E5FF]/10 via-transparent to-transparent pointer-events-none" />
                )}
                {card.id === 'blue' && (
                  <div className="absolute inset-0 bg-radial from-[#00E5FF]/20 via-[#075BFF]/30 to-transparent pointer-events-none" />
                )}

                {/* The Logo Image itself - preserving 100% original aspect ratio and pixel clarity */}
                <div className="relative z-10 w-full max-w-xs flex items-center justify-center">
                  <img
                    src={LOGO_SRC}
                    alt={`StructureGuard Logo on ${card.title}`}
                    className="w-full h-auto object-contain max-h-[110px] filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 bg-[#03060D]/90 flex-1 flex flex-col justify-between border-t border-white/5 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="font-semibold text-white">{card.title}</span>
                    <span className="text-[10px] text-emerald-400 font-mono">● {card.wcag}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {card.useCase}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Surface: {card.hex}</span>
                  <span className="text-[#00E5FF]">Aspect Ratio 3:1</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

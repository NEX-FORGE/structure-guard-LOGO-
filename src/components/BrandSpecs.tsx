import React, { useState } from 'react';
import { Palette, Copy, Check, Type, Shield, CheckCircle2, XCircle } from 'lucide-react';
import type { BrandColor } from '../types';

interface BrandSpecsProps {
  onNotify: (title: string, message: string, type?: 'success' | 'info') => void;
}

export const BrandSpecs: React.FC<BrandSpecsProps> = ({ onNotify }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const brandColors: BrandColor[] = [
    {
      name: 'Electric Blue',
      role: 'Primary Brand Color',
      hex: '#00BFFF',
      rgb: 'rgb(0, 191, 255)',
      bgClass: 'bg-[#00BFFF]',
      textClass: 'text-[#00BFFF]',
      borderClass: 'border-[#00BFFF]',
      description: 'Dynamic signal energy, high-frequency telemetry, primary buttons, and hero accents.',
    },
    {
      name: 'Deep Royal Blue',
      role: 'Secondary Brand Color',
      hex: '#075BFF',
      rgb: 'rgb(7, 91, 255)',
      bgClass: 'bg-[#075BFF]',
      textClass: 'text-[#075BFF]',
      borderClass: 'border-[#075BFF]',
      description: 'Engineering authority, structural depth, cyber stability, and deep gradient anchors.',
    },
    {
      name: 'Electric Cyan',
      role: 'Accent & Glowing Telemetry',
      hex: '#00E5FF',
      rgb: 'rgb(0, 229, 255)',
      bgClass: 'bg-[#00E5FF]',
      textClass: 'text-[#00E5FF]',
      borderClass: 'border-[#00E5FF]',
      description: 'GUARD wordmark highlight, active laser dividers, micro-indicator LEDs, and interactive glows.',
    },
    {
      name: 'Obsidian Space Black',
      role: 'Canvas Background',
      hex: '#03060D',
      rgb: 'rgb(3, 6, 13)',
      bgClass: 'bg-[#03060D]',
      textClass: 'text-slate-400',
      borderClass: 'border-white/10',
      description: 'Ultra-deep contrast backdrop engineered for maximum luminescence of glowing neon elements.',
    },
    {
      name: 'Dark Navy',
      role: 'Card & Surface Layers',
      hex: '#091426',
      rgb: 'rgb(9, 20, 38)',
      bgClass: 'bg-[#091426]',
      textClass: 'text-slate-300',
      borderClass: 'border-[#00BFFF]/20',
      description: 'Glassmorphic panels, elevation levels, component containers, and structured modules.',
    },
    {
      name: 'Metallic Silver & White',
      role: 'Wordmark & Precision Typography',
      hex: '#CBD5E1',
      rgb: 'rgb(203, 213, 225)',
      bgClass: 'bg-[#CBD5E1]',
      textClass: 'text-[#CBD5E1]',
      borderClass: 'border-slate-400',
      description: 'STRUCTURE wordmark chrome bevels, crisp readable text hierarchies, and metadata.',
    },
  ];

  const handleCopy = (hex: string, name: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
    onNotify('Hex Code Copied', `${name} (${hex}) copied to clipboard`, 'info');
  };

  return (
    <section id="specs" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#075BFF]/10 border border-[#075BFF]/30 text-xs font-mono text-[#00E5FF] mb-4">
            <Palette className="w-3.5 h-3.5" />
            <span>DESIGN STANDARDS & TOKENS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase">
            Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00BFFF]">Specifications</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-light">
            Exact mathematical color tokens, typography architecture, and asset clearspace parameters governing the StructureGuard visual system.
          </p>
        </div>

        {/* Color Palette Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
              <span className="text-[#00E5FF]">01.</span> Official Color Palette
            </h3>
            <span className="text-xs font-mono text-slate-400">Click any card to copy HEX</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandColors.map((color) => {
              const isCopied = copiedHex === color.hex;
              return (
                <div
                  key={color.name}
                  onClick={() => handleCopy(color.hex, color.name)}
                  className="group relative rounded-2xl bg-[#091426]/70 border border-white/10 p-5 backdrop-blur-xl cursor-pointer hover:border-[#00E5FF]/60 hover:shadow-[0_10px_30px_rgba(0,191,255,0.2)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Swatch */}
                    <div className="relative h-28 rounded-xl overflow-hidden mb-4 border border-white/10 flex items-end p-3 shadow-inner">
                      <div className={`absolute inset-0 ${color.bgClass}`} />
                      <div className="relative z-10 w-full flex items-center justify-between">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-black/60 text-white backdrop-blur-md">
                          {color.hex}
                        </span>
                        <div className="p-1.5 rounded-lg bg-black/60 text-white backdrop-blur-md group-hover:scale-110 transition-transform">
                          {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#00E5FF]">
                      {color.role}
                    </div>
                    <div className="text-base font-display font-bold text-white mt-0.5">
                      {color.name}
                    </div>
                    <p className="mt-2 text-xs text-slate-400 font-sans leading-relaxed">
                      {color.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>{color.rgb}</span>
                    <span className="text-slate-400 group-hover:text-[#00E5FF] transition-colors">
                      {isCopied ? 'Copied to Clipboard!' : 'Click to Copy'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Typography & Clearspace Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Typography */}
          <div className="rounded-3xl bg-[#091426]/70 border border-white/10 p-8 backdrop-blur-xl">
            <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
              <Type className="w-5 h-5 text-[#00E5FF]" />
              <span>Typography Stack</span>
            </h3>

            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-[#03060D]/60 border border-white/5">
                <div className="text-[10px] font-mono text-[#00E5FF] uppercase tracking-wider">Primary Display Font</div>
                <div className="text-xl font-display font-extrabold text-white mt-1">Outfit (Google Fonts)</div>
                <p className="text-xs text-slate-400 mt-1 font-sans">
                  Used for bold hero headlines, wordmark lockups, and high-impact structural announcements.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#03060D]/60 border border-white/5">
                <div className="text-[10px] font-mono text-[#00BFFF] uppercase tracking-wider">Body & Interface Text</div>
                <div className="text-base font-sans font-medium text-white mt-1">Inter (Variable System)</div>
                <p className="text-xs text-slate-400 mt-1 font-sans">
                  Optimal legibility across high-density telemetry dashboards, descriptive paragraphs, and UI labels.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#03060D]/60 border border-white/5">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Telemetry & Coordinates</div>
                <div className="text-sm font-mono font-bold text-emerald-400 mt-1">JetBrains Mono</div>
                <p className="text-xs text-slate-400 mt-1 font-sans">
                  Engineered for sensor values, strain gauges, GPS timestamps, filenames, and hex tokens.
                </p>
              </div>
            </div>
          </div>

          {/* Logo Usage Rules (Do's and Don'ts) */}
          <div className="rounded-3xl bg-[#091426]/70 border border-white/10 p-8 backdrop-blur-xl">
            <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#00BFFF]" />
              <span>Asset Preservation Rules</span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-300 block font-display">Maintain 3:1 Aspect Ratio</strong>
                  <span className="text-slate-300">Always scale the logo proportionally. Never squeeze or stretch horizontally or vertically.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-300 block font-display">Preserve Original RGBA Colors</strong>
                  <span className="text-slate-300">Retain the metallic chrome STRUCTURE and electric cyan GUARD color distinction.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-300 block font-display">Do Not Crop The Shield Or Tagline</strong>
                  <span className="text-slate-300">Do not separate the icon from the wordmark without using the designated standalone mark.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-300 block font-display">No Distorting Filters Or Heavy Drop Shadows</strong>
                  <span className="text-slate-300">Do not apply harsh outer bevels or recolor the elements outside brand guidelines.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

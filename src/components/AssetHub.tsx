import React from 'react';
import { Download, Copy, FileImage, Sparkles } from 'lucide-react';
import type { AssetInfo } from '../types';

interface AssetHubProps {
  onNotify: (title: string, message: string, type?: 'success' | 'info' | 'download') => void;
}

export const AssetHub: React.FC<AssetHubProps> = ({ onNotify }) => {
  const assets: AssetInfo[] = [
    {
      id: 'primary-logo',
      title: 'Primary Official Logo (Transparent PNG)',
      filename: 'StructureGuard Tech Logo.png',
      format: 'PNG (Lossless RGBA)',
      dimensions: '2172 × 724 px',
      size: '810 KB',
      aspectRatio: '3:1 Horizontal',
      description: 'The master corporate lockup containing the hexagonal shield, metallic wordmark, and official tagline.',
      url: '/StructureGuard Tech Logo.png',
      isPrimary: true,
    },
    {
      id: 'neon-banner',
      title: 'StructureGuard Neon Tech Banner',
      filename: 'StructureGuard Neon Tech Banner.png',
      format: 'PNG (True Black RGB)',
      dimensions: '2172 × 724 px',
      size: '712 KB',
      aspectRatio: '3:1 Horizontal',
      description: 'Pre-rendered high-contrast dark space background edition tailored for presentation headers & banners.',
      url: '/StructureGuard Neon Tech Banner.png',
    },
    {
      id: 'shield-mark',
      title: 'Isolated Shield Symbol (Square Mark)',
      filename: 'logo-mark.png',
      format: 'PNG (Lossless RGBA)',
      dimensions: '1024 × 1024 px',
      size: '942 KB',
      aspectRatio: '1:1 Square',
      description: 'The standalone geometric building shield symbol for mobile app icons, favicons, and social avatars.',
      url: '/logo-mark.png',
    },
    {
      id: 'vector-svg',
      title: 'Vector Master Favicon (Scalable SVG)',
      filename: 'favicon.svg',
      format: 'Scalable Vector Graphic',
      dimensions: 'Infinite / Vector',
      size: '1.2 KB',
      aspectRatio: '1:1 Square',
      description: 'Resolution-independent SVG vector code with dynamic cyan-to-blue linear gradients and glow filter.',
      url: '/favicon.svg',
    },
  ];

  const handleDownload = (asset: AssetInfo) => {
    const link = document.createElement('a');
    link.href = asset.url;
    link.download = asset.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onNotify('Asset Downloaded', `Downloaded ${asset.filename} (${asset.dimensions})`, 'download');
  };

  const handleCopyLink = (asset: AssetInfo) => {
    const directUrl = `${window.location.origin}${asset.url}`;
    navigator.clipboard.writeText(directUrl);
    onNotify('Image Link Copied', `Direct URL copied: ${directUrl}`, 'success');
  };

  const handleCopyFilename = (asset: AssetInfo) => {
    navigator.clipboard.writeText(asset.filename);
    onNotify('Filename Copied', `Copied filename: ${asset.filename}`, 'info');
  };

  return (
    <section id="assets" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] mb-4">
            <FileImage className="w-3.5 h-3.5" />
            <span>CENTRALIZED REPOSITORY</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase">
            Asset <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00BFFF]">Download Hub</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-light">
            Access the full suite of production-ready brand assets. Every asset is hosted publicly and available for direct CDN link integration or instant download.
          </p>
        </div>

        {/* Asset Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className={`relative rounded-3xl bg-[#091426]/75 border p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${
                asset.isPrimary
                  ? 'border-[#00E5FF]/50 shadow-[0_15px_45px_rgba(0,191,255,0.25)] tech-corner'
                  : 'border-white/10 hover:border-[#00BFFF]/40 shadow-xl'
              }`}
            >
              {/* Primary Ribbon */}
              {asset.isPrimary && (
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/40">
                  <Sparkles className="w-3 h-3" />
                  <span>MASTER ASSET</span>
                </div>
              )}

              <div>
                {/* Visual Preview Box */}
                <div className="relative h-44 rounded-2xl bg-[#03060D]/90 border border-white/5 flex items-center justify-center p-6 overflow-hidden mb-6 group">
                  <div className="absolute inset-0 bg-tech-grid opacity-25" />
                  <img
                    src={asset.url}
                    alt={asset.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="text-[11px] font-mono text-[#00E5FF] uppercase tracking-wider mb-1">
                  {asset.format}
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  {asset.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400 font-sans leading-relaxed">
                  {asset.description}
                </p>

                {/* Technical Specs Tags */}
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono text-slate-300">
                  <span className="px-2.5 py-1 rounded-md bg-[#03060D] border border-white/10">
                    {asset.dimensions}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#03060D] border border-white/10">
                    {asset.size}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#03060D] border border-white/10">
                    {asset.aspectRatio}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => handleDownload(asset)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#075BFF] to-[#00BFFF] hover:from-[#00BFFF] hover:to-[#00E5FF] text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,191,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>

                <button
                  onClick={() => handleCopyLink(asset)}
                  className="py-2.5 px-4 rounded-xl bg-[#03060D] hover:bg-[#0d182b] text-slate-200 border border-white/10 hover:border-[#00E5FF]/40 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
                  title="Copy Direct Public Link"
                >
                  <Copy className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>Link</span>
                </button>

                <button
                  onClick={() => handleCopyFilename(asset)}
                  className="py-2.5 px-4 rounded-xl bg-[#03060D] hover:bg-[#0d182b] text-slate-200 border border-white/10 hover:border-white/30 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
                  title="Copy Original Filename"
                >
                  <span>Name</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

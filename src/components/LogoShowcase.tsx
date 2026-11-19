import React, { useState } from 'react';
import {
  Download,
  Copy,
  FileText,
  ShieldCheck,
  Maximize2,
  Minimize2,
  Grid,
  Check,
  Layers,
  Link2
} from 'lucide-react';

interface LogoShowcaseProps {
  onNotify: (title: string, message: string, type?: 'success' | 'info' | 'download') => void;
}

export const LogoShowcase: React.FC<LogoShowcaseProps> = ({ onNotify }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedFilename, setCopiedFilename] = useState(false);
  const [showCheckerboard, setShowCheckerboard] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [urlType, setUrlType] = useState<'hosted' | 'github'>('hosted');

  const LOGO_FILENAME = 'StructureGuard Tech Logo.png';
  const LOGO_FORMAT = 'PNG (Lossless 2172 × 724 RGBA)';
  const LOGO_DIMENSIONS = '2172 × 724 px';
  const LOGO_FILESIZE = '810 KB';
  const LOGO_ASPECT_RATIO = '3:1 (Ultra-Wide Precision Lockup)';
  const LOGO_STATUS = 'Official Brand Asset';

  const hostedUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/${encodeURIComponent(LOGO_FILENAME)}`
    : `/${LOGO_FILENAME}`;

  const githubRawUrl = 'https://raw.githubusercontent.com/NEX-FORGE/structure-guard/main/public/StructureGuard%20Tech%20Logo.png';

  // 1. Download function
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/${LOGO_FILENAME}`;
    link.download = LOGO_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onNotify(
      'Download Started',
      `Downloading original asset: ${LOGO_FILENAME} (${LOGO_DIMENSIONS})`,
      'download'
    );
  };

  // 2. Copy Image Link function
  const handleCopyLink = async () => {
    const targetUrl = urlType === 'hosted' ? hostedUrl : githubRawUrl;
    try {
      await navigator.clipboard.writeText(targetUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);

      onNotify(
        'Link Copied Successfully',
        `Direct Image URL copied to clipboard: ${targetUrl}`,
        'success'
      );
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = targetUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);

      onNotify(
        'Link Copied Successfully',
        `Direct Image URL copied to clipboard: ${targetUrl}`,
        'success'
      );
    }
  };

  // 3. Copy Filename function
  const handleCopyFilename = async () => {
    try {
      await navigator.clipboard.writeText(LOGO_FILENAME);
      setCopiedFilename(true);
      setTimeout(() => setCopiedFilename(false), 2500);

      onNotify(
        'Filename Copied to Clipboard',
        `Exact filename copied: "${LOGO_FILENAME}"`,
        'info'
      );
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = LOGO_FILENAME;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedFilename(true);
      setTimeout(() => setCopiedFilename(false), 2500);

      onNotify(
        'Filename Copied to Clipboard',
        `Exact filename copied: "${LOGO_FILENAME}"`,
        'info'
      );
    }
  };

  return (
    <section id="showcase" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#00BFFF]/10 to-[#075BFF]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#075BFF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>PRIMARY MASTER REPOSITORY</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase">
            Official Logo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00BFFF]">Showcase</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-light">
            The authentic, high-resolution master asset for StructureGuard. Preserved in lossless RGBA transparency without compression, alteration, or distortion.
          </p>
        </div>

        {/* Master Glassmorphism Showcase Card */}
        <div className="relative rounded-3xl bg-[#091426]/80 border border-[#00BFFF]/30 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden tech-corner transition-all duration-300 hover:border-[#00E5FF]/60 hover:shadow-[0_30px_70px_rgba(0,191,255,0.2)]">
          {/* Top telemetry and tools header bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-white/10 bg-[#03060D]/60">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                  MASTER ASSET LOCKUP
                </span>
                <span className="text-[10px] font-mono text-[#00E5FF] bg-[#00E5FF]/10 px-2 py-0.5 rounded border border-[#00E5FF]/20">
                  VERIFIED ORIGINAL
                </span>
              </div>
            </div>

            {/* Controls: Transparency Grid toggle & Fullscreen preview */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowCheckerboard(!showCheckerboard)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  showCheckerboard
                    ? 'bg-[#00E5FF]/20 text-[#00E5FF] border-[#00E5FF]/40 shadow-[0_0_10px_rgba(0,229,255,0.3)]'
                    : 'bg-[#091426] text-slate-300 border-white/10 hover:border-white/30'
                }`}
                title="Toggle transparency check pattern"
              >
                <Grid className="w-3.5 h-3.5" />
                <span>{showCheckerboard ? 'Grid: ON' : 'Grid: OFF'}</span>
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#091426] text-slate-300 border border-white/10 hover:border-white/30 transition-colors"
                title="Toggle enlarged view"
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                <span>{isFullscreen ? 'Exit Zoom' : 'Inspect Zoom'}</span>
              </button>
            </div>
          </div>

          {/* Logo Showcase Display Stage */}
          <div
            className={`relative flex items-center justify-center p-8 sm:p-14 transition-all duration-300 overflow-hidden ${
              showCheckerboard
                ? 'bg-[linear-gradient(45deg,#0a1528_25%,transparent_25%),linear-gradient(-45deg,#0a1528_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#0a1528_75%),linear-gradient(-45deg,transparent_75%,#0a1528_75%)] bg-[size:24px_24px] bg-[#050b16]'
                : 'bg-gradient-to-b from-[#03060D]/80 via-[#071124]/60 to-[#03060D]/90'
            }`}
          >
            {/* Ambient Lighting Behind Display */}
            <div className="absolute inset-0 bg-radial from-[#00BFFF]/15 via-transparent to-transparent pointer-events-none" />

            {/* Subtle Laser Divider Sweep */}
            <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/40 to-transparent top-1/2 pointer-events-none" />

            {/* The Original Logo Asset - 100% Unmodified Aspect Ratio */}
            <div className="relative z-10 max-w-4xl w-full flex items-center justify-center py-4">
              <img
                src={`/${LOGO_FILENAME}`}
                alt="StructureGuard Official Logo"
                className={`w-full h-auto object-contain transition-all duration-300 filter drop-shadow-[0_15px_35px_rgba(0,191,255,0.3)] ${
                  isFullscreen
                    ? 'max-h-[380px] scale-105'
                    : 'max-h-[170px] sm:max-h-[230px] hover:scale-[1.01]'
                }`}
                loading="eager"
              />
            </div>
          </div>

          {/* Metadata Display & Specification Table */}
          <div className="p-6 sm:p-8 bg-[#03060D]/90 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Brand Name */}
              <div className="p-4 rounded-xl bg-[#091426]/70 border border-white/5 hover:border-[#00BFFF]/30 transition-colors">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Brand Name
                </div>
                <div className="mt-1 text-base font-display font-bold text-white flex items-center gap-2">
                  <span>StructureGuard</span>
                  <span className="text-[10px] font-mono text-[#00E5FF] bg-[#00E5FF]/10 px-1.5 py-0.5 rounded">TM</span>
                </div>
              </div>

              {/* Logo File */}
              <div className="p-4 rounded-xl bg-[#091426]/70 border border-white/5 hover:border-[#00BFFF]/30 transition-colors">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Logo File
                </div>
                <div className="mt-1 text-sm font-mono font-semibold text-[#00E5FF] truncate" title={LOGO_FILENAME}>
                  {LOGO_FILENAME}
                </div>
              </div>

              {/* Format */}
              <div className="p-4 rounded-xl bg-[#091426]/70 border border-white/5 hover:border-[#00BFFF]/30 transition-colors">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Format
                </div>
                <div className="mt-1 text-sm font-mono font-semibold text-slate-200">
                  {LOGO_FORMAT}
                </div>
              </div>

              {/* Status */}
              <div className="p-4 rounded-xl bg-[#091426]/70 border border-white/5 hover:border-[#00BFFF]/30 transition-colors">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Status
                </div>
                <div className="mt-1 text-sm font-display font-bold text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{LOGO_STATUS}</span>
                </div>
              </div>
            </div>

            {/* Secondary telemetry specs (Aspect Ratio, Dimensions, Filesize) */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400 pb-6 mb-8 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-[#00E5FF]">■</span>
                <span>Dimensions: <strong className="text-white">{LOGO_DIMENSIONS}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00BFFF]">■</span>
                <span>Aspect Ratio: <strong className="text-white">{LOGO_ASPECT_RATIO}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#075BFF]">■</span>
                <span>Asset Size: <strong className="text-white">{LOGO_FILESIZE}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">■</span>
                <span>Transparency: <strong className="text-white">Alpha Channel Enabled</strong></span>
              </div>
            </div>

            {/* URL Selector options for copying */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#091426]/50 p-3 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Link2 className="w-4 h-4 text-[#00E5FF]" />
                <span>Target Direct Link:</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <button
                  onClick={() => setUrlType('hosted')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    urlType === 'hosted'
                      ? 'bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Production CDN / Origin URL
                </button>
                <span className="text-slate-600">|</span>
                <button
                  onClick={() => setUrlType('github')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    urlType === 'github'
                      ? 'bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  GitHub Raw URL
                </button>
              </div>
            </div>

            {/* THREE PRIMARY FUNCTIONAL BUTTONS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* BUTTON 1: DOWNLOAD LOGO */}
              <button
                onClick={handleDownload}
                className="relative group overflow-hidden px-6 py-4 rounded-xl bg-gradient-to-r from-[#075BFF] to-[#00BFFF] text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(0,191,255,0.35)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Logo</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
              </button>

              {/* BUTTON 2: COPY IMAGE LINK */}
              <button
                onClick={handleCopyLink}
                className={`relative group overflow-hidden px-6 py-4 rounded-xl border font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 ${
                  copiedLink
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'bg-[#091426] hover:bg-[#0D1C36] text-white border-[#00E5FF]/40 hover:border-[#00E5FF] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,229,255,0.25)]'
                }`}
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#00E5FF]" />
                    <span>Copy Image Link</span>
                  </>
                )}
              </button>

              {/* BUTTON 3: COPY FILENAME */}
              <button
                onClick={handleCopyFilename}
                className={`relative group overflow-hidden px-6 py-4 rounded-xl border font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 ${
                  copiedFilename
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'bg-[#091426] hover:bg-[#0D1C36] text-white border-white/15 hover:border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                }`}
              >
                {copiedFilename ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Filename Copied!</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4 text-[#CBD5E1]" />
                    <span>Copy Filename</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

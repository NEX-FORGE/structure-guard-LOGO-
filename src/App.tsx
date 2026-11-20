import { useState } from 'react';
import { Download, Check, Copy } from 'lucide-react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { IntroAnimation } from './components/IntroAnimation';

export function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      title: 'StructureGuard Official Logo Banner',
      filename: 'structureguard-banner.jpg',
      src: '/structureguard-banner.jpg',
      alt: 'STRUCTUREGUARD - Smart Structural Health Monitoring System Official Logo',
    },
    {
      id: 2,
      title: 'StructureGuard 3D Shield Mark',
      filename: 'structureguard-icon.png',
      src: '/structureguard-icon.png',
      alt: 'StructureGuard 3D Hexagonal Shield Symbol',
    },
  ];

  const handleDownload = (src: string, filename: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyLink = (src: string, index: number) => {
    const fullUrl = `${window.location.origin}${src}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#03060D] text-white flex flex-col justify-between selection:bg-[#00E5FF]/20 selection:text-[#00E5FF] overflow-x-hidden">
      {/* Opening Intro Reveal Animation */}
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}

      {/* Futuristic Floating Particles in Background */}
      <ParticleCanvas />

      {/* Ambient Blue Background Glows */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#075BFF]/15 via-[#00BFFF]/20 to-[#00E5FF]/10 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-10 right-10 w-[400px] h-[400px] bg-[#00E5FF]/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Header - Website Name with Logo */}
      <header className="relative z-20 w-full border-b border-[#00BFFF]/20 bg-[#060D1A]/85 backdrop-blur-xl sticky top-0 py-4 px-6 shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3.5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-11 h-11 rounded-xl bg-[#091426] border border-[#00E5FF]/40 p-1.5 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(0,229,255,0.3)] group-hover:border-[#00E5FF] transition-all">
              <img
                src="/structureguard-icon.png"
                alt="StructureGuard Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,229,255,0.7)]"
              />
            </div>
            <div>
              <h1 className="font-display font-black text-xl sm:text-2xl tracking-wider text-white">
                STRUCTURE<span className="text-[#00E5FF] drop-shadow-[0_0_15px_rgba(0,229,255,0.6)]">GUARD</span>
              </h1>
              <p className="text-[10px] sm:text-xs font-mono tracking-widest text-[#00E5FF]/80 uppercase">
                Smart Structural Health Monitoring System
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Exactly the 2 Photos */}
      <main className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 py-12 flex-1 flex flex-col gap-10">
        {images.map((img, idx) => (
          <div
            key={img.id}
            className="group rounded-3xl bg-[#091426]/75 border border-[#00BFFF]/30 backdrop-blur-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-[#00E5FF]/70 hover:shadow-[0_25px_60px_rgba(0,191,255,0.25)] transition-all duration-300"
          >
            {/* Top subtle laser accent line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent" />

            {/* Image Preview Box */}
            <div className="relative p-6 sm:p-12 flex items-center justify-center bg-[#02050B]/90 overflow-hidden">
              {/* Subtle background grid pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(0,191,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

              <img
                src={img.src}
                alt={img.alt}
                className="relative z-10 max-h-[340px] w-auto max-w-full object-contain filter drop-shadow-[0_10px_35px_rgba(0,191,255,0.3)] rounded-xl group-hover:scale-[1.015] transition-transform duration-300"
              />
            </div>

            {/* Bottom Actions Bar */}
            <div className="p-4 sm:p-5 bg-[#07101E] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white font-display flex items-center gap-2">
                  <span>{img.title}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
                    OFFICIAL
                  </span>
                </h2>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  {img.filename}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => handleCopyLink(img.src, idx)}
                  className="px-4 py-2 rounded-xl bg-[#03060D] hover:bg-[#0c1a30] text-slate-200 border border-white/15 hover:border-[#00E5FF]/40 text-xs font-mono flex items-center gap-1.5 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.5)] active:scale-95"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#00E5FF]" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleDownload(img.src, img.filename)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#075BFF] to-[#00BFFF] hover:from-[#00BFFF] hover:to-[#00E5FF] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,191,255,0.35)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] transition-all active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Clean Footer */}
      <footer className="relative z-10 w-full border-t border-white/10 py-6 text-center text-xs font-mono text-slate-500">
        © 2026 StructureGuard. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;

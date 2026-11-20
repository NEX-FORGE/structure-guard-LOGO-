import { Download, Check, Copy } from 'lucide-react';
import { useState } from 'react';

export function App() {
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
    <div className="min-h-screen bg-[#03060D] text-white flex flex-col justify-between selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
      {/* Header - Website Name with Logo */}
      <header className="w-full border-b border-[#00BFFF]/20 bg-[#060D1A]/80 backdrop-blur-md sticky top-0 z-30 py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <img
              src="/structureguard-icon.png"
              alt="StructureGuard Logo"
              className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]"
            />
            <div>
              <h1 className="font-display font-black text-xl sm:text-2xl tracking-wider text-white">
                STRUCTURE<span className="text-[#00E5FF]">GUARD</span>
              </h1>
              <p className="text-[10px] sm:text-xs font-mono tracking-widest text-[#00E5FF]/80 uppercase">
                Smart Structural Health Monitoring System
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Exactly the 2 Photos */}
      <main className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 flex-1 flex flex-col gap-10">
        {images.map((img, idx) => (
          <div
            key={img.id}
            className="rounded-2xl bg-[#091426]/80 border border-[#00BFFF]/30 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:border-[#00E5FF]/60 transition-all duration-300"
          >
            {/* Image Preview Box */}
            <div className="relative p-6 sm:p-10 flex items-center justify-center bg-[#02050B]">
              <img
                src={img.src}
                alt={img.alt}
                className="max-h-[320px] w-auto max-w-full object-contain filter drop-shadow-[0_10px_30px_rgba(0,191,255,0.25)] rounded-lg"
              />
            </div>

            {/* Bottom Actions Bar */}
            <div className="p-4 sm:p-5 bg-[#091426] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white font-display">
                  {img.title}
                </h2>
                <p className="text-xs font-mono text-slate-400">
                  {img.filename}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyLink(img.src, idx)}
                  className="px-4 py-2 rounded-lg bg-[#03060D] hover:bg-[#0c1a30] text-slate-200 border border-white/15 hover:border-[#00E5FF]/40 text-xs font-mono flex items-center gap-1.5 transition-colors"
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
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#075BFF] to-[#00BFFF] hover:from-[#00BFFF] hover:to-[#00E5FF] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,191,255,0.3)] transition-all"
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
      <footer className="w-full border-t border-white/10 py-5 text-center text-xs font-mono text-slate-500">
        © 2026 StructureGuard. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;

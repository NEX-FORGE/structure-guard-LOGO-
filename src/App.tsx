import { useState } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Toast } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoShowcase } from './components/LogoShowcase';
import { LogoPreview } from './components/LogoPreview';
import { BrandIdentity } from './components/BrandIdentity';
import { BrandSpecs } from './components/BrandSpecs';
import { AssetHub } from './components/AssetHub';
import { Footer } from './components/Footer';
import type { ToastMessage } from './types';

export function App() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, message: string, type: 'success' | 'info' | 'download' = 'success') => {
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const newToast: ToastMessage = { id, title, message, type };

    setToasts((prev) => [...prev, newToast]);

    // Auto dismiss after 3.8s
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleGlobalDownload = () => {
    const link = document.createElement('a');
    link.href = '/StructureGuard Tech Logo.png';
    link.download = 'StructureGuard Tech Logo.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addToast(
      'Download Started',
      'Downloading master asset: "StructureGuard Tech Logo.png" (2172×724 RGBA)',
      'download'
    );
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#03060D] text-slate-100 selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
      {/* Background Interactive Floating Particle Engine */}
      <ParticleCanvas />

      {/* Floating System Notification Toast Engine */}
      <Toast toasts={toasts} onDismiss={removeToast} />

      {/* Futuristic Fixed Navigation Bar */}
      <Navbar onDownload={handleGlobalDownload} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* SECTION A: HERO */}
        <Hero
          onDownload={handleGlobalDownload}
          onExplore={() => handleScrollToSection('showcase')}
        />

        {/* Laser Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00BFFF]/30 to-transparent" />
        </div>

        {/* SECTION B: OFFICIAL LOGO SHOWCASE (THE CORE SECTION) */}
        <LogoShowcase onNotify={addToast} />

        {/* Laser Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#075BFF]/30 to-transparent" />
        </div>

        {/* SECTION C: LOGO PREVIEW (Dark, Light, Blue) */}
        <LogoPreview onNotify={addToast} />

        {/* Laser Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/25 to-transparent" />
        </div>

        {/* SECTION D: BRAND IDENTITY */}
        <BrandIdentity />

        {/* Laser Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00BFFF]/30 to-transparent" />
        </div>

        {/* SECTION: BRAND SPECIFICATIONS & COLOR PALETTE */}
        <BrandSpecs onNotify={addToast} />

        {/* Laser Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#075BFF]/30 to-transparent" />
        </div>

        {/* SECTION: ASSET DOWNLOAD HUB */}
        <AssetHub onNotify={addToast} />
      </main>

      {/* SECTION E/F: FOOTER */}
      <Footer
        onScrollToTop={handleScrollToTop}
        onDownload={handleGlobalDownload}
      />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Download, ShieldCheck, Menu, X } from 'lucide-react';

interface NavbarProps {
  onDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownload }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Showcase', href: '#showcase' },
    { name: 'Previews', href: '#previews' },
    { name: 'Identity', href: '#identity' },
    { name: 'Specifications', href: '#specs' },
    { name: 'Asset Hub', href: '#assets' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#03060D]/90 backdrop-blur-xl border-b border-[#00BFFF]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.7)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-3.5 group"
            title="StructureGuard Official Brand Portal"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#091426] border border-[#00E5FF]/40 p-1 flex items-center justify-center overflow-hidden group-hover:border-[#00E5FF] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300">
              <img
                src="/logo-mark.png"
                alt="StructureGuard Shield Symbol"
                className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(0,229,255,0.6)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00E5FF]/10 to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-wider text-white">
                  STRUCTURE<span className="text-[#00E5FF] text-glow-cyan">GUARD</span>
                </span>
                <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-tight bg-[#075BFF]/20 text-[#00E5FF] border border-[#00E5FF]/30">
                  <ShieldCheck className="w-2.5 h-2.5" />
                  VERIFIED ASSET
                </span>
              </div>
              <span className="hidden sm:block text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                Smart Structural Health Monitoring System
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono tracking-wider uppercase text-slate-300 hover:text-[#00E5FF] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#075BFF] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onDownload}
              className="relative group overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r from-[#075BFF] to-[#00BFFF] text-white text-xs font-display font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Logo</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#091426] border border-[#00BFFF]/30 text-slate-200 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 p-4 rounded-xl bg-[#091426]/95 border border-[#00BFFF]/30 backdrop-blur-2xl flex flex-col gap-3 shadow-2xl animate-in fade-in slide-in-from-top-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono tracking-wider text-slate-200 hover:text-[#00E5FF] py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDownload();
                }}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#075BFF] to-[#00BFFF] text-white text-xs font-display font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,191,255,0.4)]"
              >
                <Download className="w-4 h-4" />
                <span>Download Logo</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

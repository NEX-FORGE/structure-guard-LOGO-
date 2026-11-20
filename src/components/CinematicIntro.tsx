import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  useEffect(() => {
    // Automatically transition smoothly after 2.8s
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="cinematic-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onClick={onComplete}
        className="fixed inset-0 z-50 bg-[#020408] flex items-center justify-center overflow-hidden cursor-pointer select-none"
      >
        {/* Ambient Radial Deep Glow (GPU Accelerated) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.3, 0.7, 0.5], scale: [0.9, 1.1, 1] }}
          transition={{ duration: 2.8, ease: 'easeInOut' }}
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#075BFF]/30 via-[#00BFFF]/40 to-[#00E5FF]/20 blur-[120px] pointer-events-none"
        />

        {/* Subtle Horizontal Laser Horizon */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: [0, 1, 1.2], opacity: [0, 0.8, 0.2] }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent pointer-events-none -translate-y-1/2"
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg mx-auto">
          {/* 3D Shield Logo with Smooth Spring Scale */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mb-6"
          >
            {/* Glowing Backdrop Ring */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 30px rgba(0,229,255,0.3)',
                  '0 0 60px rgba(0,229,255,0.7)',
                  '0 0 40px rgba(0,229,255,0.4)',
                ],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-[#061022]/90 border border-[#00E5FF]/80 p-4 flex items-center justify-center backdrop-blur-2xl"
            >
              <img
                src="/structureguard-icon.png"
                alt="StructureGuard Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(0,229,255,0.75)]"
              />
            </motion.div>
          </motion.div>

          {/* STRUCTUREGUARD Wordmark Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className="font-display font-black text-3xl sm:text-5xl tracking-widest uppercase">
              <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                STRUCTURE
              </span>
              <span className="text-[#00E5FF] drop-shadow-[0_0_25px_rgba(0,229,255,0.8)] ml-1">
                GUARD
              </span>
            </h1>
          </motion.div>

          {/* Subtitle Tagline Reveal */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-[#00E5FF]/90 font-semibold uppercase mt-3"
          >
            Smart Structural Health Monitoring System
          </motion.p>

          {/* Smooth Light Divider Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 h-[1px] w-48 sm:w-60 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_10px_#00E5FF]"
          />

          {/* Subtle click hint */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 text-[10px] font-mono text-slate-500 tracking-wider uppercase"
          >
            Click anywhere to skip
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

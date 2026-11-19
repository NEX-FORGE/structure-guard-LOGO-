import React from 'react';
import { CheckCircle2, Copy, Download, X, Sparkles } from 'lucide-react';
import type { ToastMessage } from '../types';

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let iconColor = 'text-[#00E5FF]';
        let borderColor = 'border-[#00E5FF]/40';
        let glowClass = 'shadow-[0_10px_30px_rgba(0,229,255,0.25)]';

        if (toast.type === 'download') {
          Icon = Download;
          iconColor = 'text-[#00BFFF]';
          borderColor = 'border-[#00BFFF]/40';
          glowClass = 'shadow-[0_10px_30px_rgba(0,191,255,0.25)]';
        } else if (toast.type === 'info') {
          Icon = Copy;
          iconColor = 'text-[#075BFF]';
          borderColor = 'border-[#075BFF]/50';
          glowClass = 'shadow-[0_10px_30px_rgba(7,91,255,0.25)]';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto relative overflow-hidden rounded-xl bg-[#091426]/95 backdrop-blur-xl border ${borderColor} p-4 text-white ${glowClass} transition-all duration-300 transform translate-y-0 animate-in fade-in slide-in-from-bottom-5`}
          >
            {/* Top glowing laser line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent animate-pulse" />

            <div className="flex items-start gap-3.5">
              <div className={`mt-0.5 rounded-lg bg-[#03060D] p-2 border border-white/10 ${iconColor}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-display font-semibold text-sm text-white tracking-wide">
                    {toast.title}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded bg-[#00E5FF]/10 px-1.5 py-0.5 text-[10px] font-mono text-[#00E5FF] border border-[#00E5FF]/20">
                    <Sparkles className="w-2.5 h-2.5" />
                    LIVE
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-300 font-mono break-all leading-relaxed">
                  {toast.message}
                </p>
              </div>
              <button
                onClick={() => onDismiss(toast.id)}
                className="text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/5"
                title="Dismiss notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom progress bar countdown */}
            <div className="mt-3 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#00E5FF] to-[#075BFF] animate-[shrink_3.5s_linear_forwards]" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

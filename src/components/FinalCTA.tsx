import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

interface FinalCTAProps {
  onRequestDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestDemo, onOpenWhitepaper }) => {
  return (
    <section id="cta" className="relative py-32 px-6 md:px-12 bg-black text-white text-center overflow-hidden border-t border-white/10">
      {/* Background Neon Lime Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(204,255,0,0.22) 0%, rgba(204,255,0,0.06) 50%, rgba(0,0,0,0) 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#CCFF00]/30 bg-zinc-950/80 mb-6 backdrop-blur-md">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#CCFF00]">
            PROOF OF VALUE ENGAGEMENT
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08]">
          Stop Managing Delay. <br />
          Turn Execution Into Your <span className="text-[#CCFF00]">Advantage.</span>
        </h2>

        {/* Sub-headline */}
        <p className="mt-6 text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Request a tailored proof-of-value engagement or schedule a live architecture walkthrough with our enterprise engineering team.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRequestDemo}
            className="w-full sm:w-auto px-9 py-4 rounded-full text-base font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600] active:scale-95 transition-all shadow-[0_0_35px_rgba(204,255,0,0.4)] tracking-tight flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Schedule Enterprise Walkthrough -&gt;</span>
          </button>
          <button
            onClick={onOpenWhitepaper}
            className="w-full sm:w-auto px-9 py-4 rounded-full text-base font-semibold bg-zinc-950 border border-white/20 text-white hover:bg-zinc-900 transition-colors tracking-tight flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Review Security Whitepaper</span>
          </button>
        </div>

        {/* Footer Trust Badges */}
        <div className="mt-10 text-xs font-mono text-zinc-400 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <span className="flex items-center space-x-1.5">
            <Lock className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span>End-to-End Encrypted</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span>ISO 27001 Aligned</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span>Dedicated Single-Tenant Deployments Available</span>
        </div>
      </div>
    </section>
  );
};

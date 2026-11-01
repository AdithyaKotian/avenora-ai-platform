import React from 'react';
import { ArrowRight, Database, BrainCircuit, ShieldCheck, Layers } from 'lucide-react';

interface HeroProps {
  onRequestAccess: () => void;
  onOpenTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestAccess, onOpenTour }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-16 px-6 md:px-12 bg-black flex flex-col items-center justify-between text-center overflow-hidden">
      {/* Ambient Neon Green Radial Glow */}
      <div
        className="absolute top-28 left-1/2 -translate-x-1/2 w-[720px] h-[480px] pointer-events-none rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(204,255,0,0.18) 0%, rgba(204,255,0,0.05) 45%, rgba(0,0,0,0) 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Subtle grid pattern backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Top/Center Hero Copy Block */}
      <div className="my-auto flex flex-col items-center z-10 max-w-5xl mx-auto pt-6 pb-12">
        {/* Eyebrow Badge with Green Dot */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-[#CCFF00]/30 bg-zinc-950/90 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(204,255,0,0.1)]">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-semibold text-[#CCFF00]">
            ENTERPRISE AI EXECUTION PLATFORM
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="max-w-5xl text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold text-white tracking-tight leading-[1.06]">
          Turn Execution Into an <span className="text-[#CCFF00]">Advantage.</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 max-w-3xl text-lg sm:text-xl text-zinc-400 tracking-tight leading-relaxed">
          <strong className="text-white font-semibold">See. Predict. Execute.</strong> Avenora AI unifies enterprise data, systems, and teams to eliminate broken handoffs and transform high-level strategy into verifiable business outcomes.
        </p>

        {/* CTA Button Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onRequestAccess}
            className="group w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600] active:scale-95 transition-all shadow-[0_0_35px_rgba(204,255,0,0.4)] tracking-tight flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Request Enterprise Access</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onOpenTour}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium bg-zinc-950 border border-white/20 text-white hover:bg-zinc-900 hover:border-white/40 transition-all tracking-tight flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Layers className="w-4 h-4 text-[#CCFF00]" />
            <span>Interactive Architecture Tour</span>
          </button>
        </div>

        {/* Platform Signal Tagline */}
        <div className="mt-6 text-xs sm:text-sm text-zinc-400 font-medium">
          Zero manual status reports · Traceable RAG citations · Human-in-the-loop governance
        </div>
      </div>

      {/* Bottom Viewport Anchor: Live System Architecture Status Strip */}
      <div className="w-full max-w-6xl mx-auto z-10 pt-6 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <a
            href="#loop"
            className="group p-4 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#CCFF00]/40 transition-all flex items-start space-x-3.5"
          >
            <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#CCFF00] shrink-0 mt-0.5">
              <Database className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  01 · Ingest Fabric
                </span>
                <span className="text-[10px] font-mono text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-0.5 rounded">
                  42+ Connectors
                </span>
              </div>
              <div className="text-sm font-bold text-white mt-0.5 group-hover:text-[#CCFF00] transition-colors">
                SAP · Jira · Slack · Zoom · Git
              </div>
              <p className="text-xs text-zinc-400 mt-1 truncate">
                Read/write signal normalization with zero workflow disruption
              </p>
            </div>
          </a>

          <a
            href="#execution-graph"
            className="group p-4 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#CCFF00]/40 transition-all flex items-start space-x-3.5"
          >
            <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#CCFF00] shrink-0 mt-0.5">
              <BrainCircuit className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  02 · Understand &amp; Predict
                </span>
                <span className="text-[10px] font-mono text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-0.5 rounded">
                  RAG Evidence
                </span>
              </div>
              <div className="text-sm font-bold text-white mt-0.5 group-hover:text-[#CCFF00] transition-colors">
                Neural Execution Graph
              </div>
              <p className="text-xs text-zinc-400 mt-1 truncate">
                Predicts critical-path slippage 3 sprints before escalation
              </p>
            </div>
          </a>

          <a
            href="#execution-graph"
            className="group p-4 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#CCFF00]/40 transition-all flex items-start space-x-3.5"
          >
            <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#CCFF00] shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  03 · Act &amp; Learn
                </span>
                <span className="text-[10px] font-mono text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-0.5 rounded">
                  HITL Gated
                </span>
              </div>
              <div className="text-sm font-bold text-white mt-0.5 group-hover:text-[#CCFF00] transition-colors">
                Human-Approved Execution
              </div>
              <p className="text-xs text-zinc-400 mt-1 truncate">
                AI proposes cross-system actions; authorized owners approve
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Pause, AlertTriangle, Zap, Activity } from 'lucide-react';

interface HeroProps {
  onRequestAccess: () => void;
  onOpenTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestAccess, onOpenTour }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'bottlenecks' | 'steerco' | 'resources'>('all');
  const [isSimulating, setIsSimulating] = useState(true);
  const [pulseCount, setPulseCount] = useState(148);
  const [confidenceIndex, setConfidenceIndex] = useState(94.2);

  // Simulated live event telemetry pulse
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + 1);
      setConfidenceIndex((prev) => {
        const delta = (Math.random() - 0.45) * 0.4;
        return Number(Math.min(99.4, Math.max(92.1, prev + delta)).toFixed(1));
      });
    }, 3200);
    return () => clearInterval(interval);
  }, [isSimulating]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 bg-black flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Ambient Neon Green Radial Glow */}
      <div 
        className="absolute top-28 left-1/2 -translate-x-1/2 w-[720px] h-[480px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(204,255,0,0.18) 0%, rgba(204,255,0,0.05) 45%, rgba(0,0,0,0) 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Subtle grid pattern backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Eyebrow Badge with Green Dot */}
      <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-[#CCFF00]/30 bg-zinc-950/90 mb-8 z-10 backdrop-blur-md shadow-[0_0_20px_rgba(204,255,0,0.1)]">
        <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
        <span className="text-xs uppercase tracking-widest font-semibold text-[#CCFF00]">
          ENTERPRISE AI EXECUTION PLATFORM
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="max-w-5xl text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold text-white tracking-tight leading-[1.06] z-10">
        Turn Execution Into an <span className="text-[#CCFF00]">Advantage.</span>
      </h1>

      {/* Sub-headline */}
      <p className="mt-6 max-w-3xl text-lg sm:text-xl text-zinc-400 tracking-tight leading-relaxed z-10">
        <strong className="text-white font-semibold">See. Predict. Execute.</strong> Avenora AI unifies enterprise data, systems, and teams to eliminate broken handoffs and transform high-level strategy into verifiable business outcomes.
      </p>

      {/* CTA Button Group */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 z-10">
        <button
          id="hero-request-access"
          onClick={onRequestAccess}
          className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600] active:scale-95 transition-all shadow-[0_0_35px_rgba(204,255,0,0.4)] tracking-tight flex items-center justify-center space-x-2 cursor-pointer"
          aria-label="Request enterprise access to Avenora AI"
        >
          <span>Request Enterprise Access →</span>
        </button>
        <button
          id="hero-architecture-tour"
          onClick={onOpenTour}
          className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium bg-zinc-950 border border-white/20 text-white hover:bg-zinc-900 hover:border-white/40 transition-all tracking-tight flex items-center justify-center space-x-2 cursor-pointer"
          aria-label="Open interactive architecture tour"
        >
          <span>Interactive Architecture Tour</span>
        </button>
      </div>

      {/* Platform Signal Tagline */}
      <div className="mt-6 z-10 text-xs sm:text-sm text-zinc-400 font-medium">
        Zero manual status reports · Zero context loss · Built for enterprise scale
      </div>

      {/* Product Dashboard Visual Mockup */}
      <div className="mt-14 w-full max-w-5xl rounded-3xl border border-white/10 bg-zinc-950/95 p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative z-10 backdrop-blur-xl text-left">
        {/* Terminal Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-5">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-zinc-800" />
              <span className="w-3 h-3 rounded-full bg-zinc-800" />
              <span className="w-3 h-3 rounded-full bg-zinc-800" />
            </div>
            <span className="text-xs text-zinc-400 font-mono tracking-tight pl-2">
              avenora.internal/execution-graph
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Simulation Pause / Play */}
            <button
              onClick={() => setIsSimulating(!isSimulating)}
              className="flex items-center space-x-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 border border-white/10 px-2.5 py-1 rounded-md transition-colors"
              title={isSimulating ? "Pause live simulation" : "Resume live simulation"}
            >
              {isSimulating ? (
                <>
                  <Pause className="w-3 h-3 text-[#CCFF00]" />
                  <span className="font-mono text-[11px]">Stream Live</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-zinc-400" />
                  <span className="font-mono text-[11px]">Paused</span>
                </>
              )}
            </button>

            <span className="text-xs text-[#CCFF00] font-mono tracking-tight bg-[#CCFF00]/10 px-3 py-1 rounded-full border border-[#CCFF00]/30 flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-ping" />
              <span>Loop Active · 99.8% Sync</span>
            </span>
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs text-zinc-500 font-mono mr-1">Views:</span>
          {(
            [
              { id: 'all', label: 'All Signals' },
              { id: 'bottlenecks', label: 'ERP & Migration Risks' },
              { id: 'steerco', label: 'SteerCo Decisions' },
              { id: 'resources', label: 'Resource Friction' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-[#CCFF00] text-black font-semibold shadow-[0_0_12px_rgba(204,255,0,0.25)]'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3 Interactive Live Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs mb-6">
          {/* Card 1: Detected Bottleneck */}
          <div className={`p-4 rounded-2xl border transition-all ${
            activeTab === 'all' || activeTab === 'bottlenecks'
              ? 'bg-zinc-900/80 border-white/10 shadow-lg'
              : 'bg-zinc-900/30 border-white/5 opacity-50'
          }`}>
            <div className="flex items-center justify-between text-zinc-500 mb-1 font-sans text-[11px] font-semibold tracking-wider uppercase">
              <span>Detected Bottleneck</span>
              <AlertTriangle className="w-3.5 h-3.5 text-[#CCFF00]" />
            </div>
            <div className="text-white text-sm font-sans font-bold">
              SAP S/4HANA Migration — Stream 4
            </div>
            <p className="mt-1.5 text-zinc-400 font-sans text-xs leading-relaxed">
              API schema mismatch between legacy billing and SAP finance pipeline.
            </p>
            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[#CCFF00] font-semibold text-xs">
                +3.4 days delay risk mitigated
              </span>
              <span className="text-zinc-500 text-[10px]">Autofixed PR #1284</span>
            </div>
          </div>

          {/* Card 2: Meeting Context Translated */}
          <div className={`p-4 rounded-2xl border transition-all ${
            activeTab === 'all' || activeTab === 'steerco'
              ? 'bg-zinc-900/80 border-white/10 shadow-lg'
              : 'bg-zinc-900/30 border-white/5 opacity-50'
          }`}>
            <div className="flex items-center justify-between text-zinc-500 mb-1 font-sans text-[11px] font-semibold tracking-wider uppercase">
              <span>Meeting Context Translated</span>
              <Zap className="w-3.5 h-3.5 text-[#CCFF00]" />
            </div>
            <div className="text-white text-sm font-sans font-bold">
              Q3 Exec SteerCo Decisions
            </div>
            <p className="mt-1.5 text-zinc-400 font-sans text-xs leading-relaxed">
              Verbal mandate on APAC expansion mapped into 6 workstreams.
            </p>
            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-zinc-300 font-semibold text-xs">
                14 direct actions routed
              </span>
              <span className="text-zinc-500 text-[10px]">Jira · Slack · Asana</span>
            </div>
          </div>

          {/* Card 3: Portfolio Trajectory */}
          <div className={`p-4 rounded-2xl border transition-all ${
            activeTab === 'all' || activeTab === 'resources'
              ? 'bg-zinc-900/80 border-white/10 shadow-lg'
              : 'bg-zinc-900/30 border-white/5 opacity-50'
          }`}>
            <div className="flex items-center justify-between text-zinc-500 mb-1 font-sans text-[11px] font-semibold tracking-wider uppercase">
              <span>Portfolio Trajectory</span>
              <Activity className="w-3.5 h-3.5 text-[#CCFF00]" />
            </div>
            <div className="text-white text-sm font-sans font-bold">
              Confidence Index: {confidenceIndex}%
            </div>
            <p className="mt-1.5 text-zinc-400 font-sans text-xs leading-relaxed">
              Real-time velocity vs target OKR milestones across 32 active teams.
            </p>
            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[#CCFF00] font-semibold text-xs">
                Self-correcting allocation enabled
              </span>
              <span className="text-zinc-500 text-[10px]">Pulse #{pulseCount}</span>
            </div>
          </div>
        </div>

        {/* Real-time System Flow Bar */}
        <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 text-zinc-400 font-mono">
            <span className="text-zinc-500">INGEST:</span>
            <span className="text-white bg-zinc-800 px-2 py-0.5 rounded">SAP</span>
            <span className="text-white bg-zinc-800 px-2 py-0.5 rounded">Jira</span>
            <span className="text-white bg-zinc-800 px-2 py-0.5 rounded">Slack</span>
            <span className="text-white bg-zinc-800 px-2 py-0.5 rounded">Salesforce</span>
            <span className="text-[#CCFF00]">&rarr;</span>
            <span className="text-zinc-300">AVENORA NEURAL GRAPH</span>
            <span className="text-[#CCFF00]">&rarr;</span>
            <span className="text-white bg-zinc-800 px-2 py-0.5 rounded">Automated Execution</span>
          </div>
          <div className="text-zinc-500 font-mono text-[11px]">
            Mean latency: <span className="text-[#CCFF00] font-semibold">14ms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Layers, FileWarning, Clock } from 'lucide-react';

export const ExecutionGap: React.FC = () => {
  const [comparisonMode, setComparisonMode] = useState<'statusQuo' | 'avenora'>('avenora');

  return (
    <section id="gap" className="py-24 px-6 md:px-12 bg-white text-zinc-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-zinc-900 text-white text-xs font-semibold uppercase tracking-widest mb-6">
          <span>THE SYSTEMIC FAILURE</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.12]">
          Your enterprise has data everywhere. <br className="hidden sm:inline" />
          <span className="text-zinc-500">Execution still breaks in between.</span>
        </h2>

        {/* Body */}
        <p className="mt-6 text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-3xl">
          Modern organizations don't suffer from an intelligence deficit—they suffer from an{' '}
          <strong className="text-zinc-900 font-semibold">Execution Gap</strong>. Strategy is conceived in leadership suites, documented across scattered tools, and lost in translation across disconnected handoffs. When owners shift, tools multiply, and context fractures, critical momentum halts.
        </p>

        {/* 3 Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 01: Fragmented Inputs */}
          <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white font-mono font-bold flex items-center justify-center text-sm mb-6">
                01
              </div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-3">
                Fragmented Inputs
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Critical telemetry is locked across Jira, Salesforce, SAP, Slack, and slide decks. No single system or leader has full visibility into ground-truth dependencies.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-200/60 text-xs font-mono text-zinc-500 flex items-center space-x-1.5">
              <FileWarning className="w-4 h-4 text-amber-600" />
              <span>Siloed datasets &amp; orphan tasks</span>
            </div>
          </div>

          {/* Card 02: Lost Context & Handoffs */}
          <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white font-mono font-bold flex items-center justify-center text-sm mb-6">
                02
              </div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-3">
                Lost Context &amp; Handoffs
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Strategic intent decays at every step between executive steerco approval, manager routing, and individual sprint task assignment.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-200/60 text-xs font-mono text-zinc-500 flex items-center space-x-1.5">
              <Layers className="w-4 h-4 text-amber-600" />
              <span>Context evaporates in email &amp; chat</span>
            </div>
          </div>

          {/* Card 03: Lagging Indicators */}
          <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white font-mono font-bold flex items-center justify-center text-sm mb-6">
                03
              </div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-3">
                Lagging Indicators
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Conventional BI dashboards reflect where projects failed two weeks ago—not where execution friction and team blockers will compound tomorrow.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-200/60 text-xs font-mono text-zinc-500 flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Reactive post-mortems vs prevention</span>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Sandbox */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-zinc-900 text-white shadow-xl border border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
                Execution Flow Analysis
              </span>
              <h4 className="text-lg sm:text-xl font-bold mt-1">
                Initiative: Multi-Region ERP Infrastructure Migration
              </h4>
            </div>

            {/* Toggle Switch */}
            <div className="inline-flex p-1 bg-zinc-950 rounded-full border border-white/10 shrink-0">
              <button
                onClick={() => setComparisonMode('statusQuo')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  comparisonMode === 'statusQuo'
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Status Quo
              </button>
              <button
                onClick={() => setComparisonMode('avenora')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  comparisonMode === 'avenora'
                    ? 'bg-[#CCFF00] text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                With Avenora AI
              </button>
            </div>
          </div>

          {/* Workflow Step Simulation */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {comparisonMode === 'statusQuo' ? (
              <>
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-red-500/30">
                  <div className="flex items-center justify-between text-xs font-mono text-red-400 mb-2">
                    <span>STEP 1: EXECUTIVE DECISION</span>
                    <AlertCircle className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-semibold text-sm text-zinc-200">
                    Meeting notes trapped in PDF
                  </div>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Decisions documented in static slides. PMs spend 3 days manually parsing workstreams and chasing owners.
                  </p>
                  <div className="mt-4 text-[11px] text-red-400 font-mono">
                    Handoff delay: +48 hrs
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-red-500/30">
                  <div className="flex items-center justify-between text-xs font-mono text-red-400 mb-2">
                    <span>STEP 2: TEAMS &amp; TOOLS</span>
                    <AlertCircle className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-semibold text-sm text-zinc-200">
                    Siloed Jira tickets &amp; Slack DMs
                  </div>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Security team unaware that database schema changed in sprint 3. Dependency discovered 2 weeks late.
                  </p>
                  <div className="mt-4 text-[11px] text-red-400 font-mono">
                    Context loss: 62%
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-red-500/30">
                  <div className="flex items-center justify-between text-xs font-mono text-red-400 mb-2">
                    <span>STEP 3: DELAY &amp; FIREFIGHTING</span>
                    <AlertCircle className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-semibold text-sm text-zinc-200">
                    Missed milestone in SteerCo
                  </div>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Leadership discovers delay during retrospective. Capital burned, resources emergency-swapped.
                  </p>
                  <div className="mt-4 text-[11px] text-red-400 font-mono">
                    Budget variance: +$340,000
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-[#CCFF00]/40 shadow-[0_0_20px_rgba(204,255,0,0.06)]">
                  <div className="flex items-center justify-between text-xs font-mono text-[#CCFF00] mb-2">
                    <span>STEP 1: AUTONOMOUS INGEST</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-semibold text-sm text-white">
                    Verbal intent mapped to initiatives
                  </div>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    SteerCo transcript ingested instantly. 14 action items extracted, owners assigned, and synced across Jira &amp; SAP.
                  </p>
                  <div className="mt-4 text-[11px] text-[#CCFF00] font-mono">
                    Handoff latency: 0 minutes
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-[#CCFF00]/40 shadow-[0_0_20px_rgba(204,255,0,0.06)]">
                  <div className="flex items-center justify-between text-xs font-mono text-[#CCFF00] mb-2">
                    <span>STEP 2: PREDICTIVE GRAPH</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-semibold text-sm text-white">
                    Cross-functional dependency link
                  </div>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    Avenora maps database change to security sign-off before sprint starts. Automated alert notifies Lead Architect.
                  </p>
                  <div className="mt-4 text-[11px] text-[#CCFF00] font-mono">
                    Context retained: 100%
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-[#CCFF00]/40 shadow-[0_0_20px_rgba(204,255,0,0.06)]">
                  <div className="flex items-center justify-between text-xs font-mono text-[#CCFF00] mb-2">
                    <span>STEP 3: FORWARD RESOLUTION</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-semibold text-sm text-white">
                    Pre-emptive mitigation executed
                  </div>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    PR approved, capacity dynamically adjusted, sprint delivered on schedule without overtime or steering escalation.
                  </p>
                  <div className="mt-4 text-[11px] text-[#CCFF00] font-mono">
                    On-time outcome: 100% verified
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

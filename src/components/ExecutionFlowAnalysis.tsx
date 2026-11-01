import React, { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const ExecutionFlowAnalysis: React.FC = () => {
  const [comparisonMode, setComparisonMode] = useState<'statusQuo' | 'avenora'>('avenora');

  return (
    <section id="flow-analysis" className="py-24 px-6 md:px-12 bg-zinc-950 text-white border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#CCFF00]/30 bg-zinc-900 text-[#CCFF00] text-xs font-semibold uppercase tracking-widest mb-4">
            <span>SCENARIO MODELING &amp; SIMULATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Execution Flow <span className="text-[#CCFF00]">Analysis</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Simulate how real-world enterprise initiatives evolve under legacy manual handoffs versus Avenora's autonomous execution graph.
          </p>
        </motion.div>

        {/* Interactive Comparison Sandbox */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-8 rounded-3xl bg-zinc-900 text-white shadow-2xl border border-zinc-800"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
                Live Workflow Simulation
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

          {/* Workflow Step Simulation Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {comparisonMode === 'statusQuo' ? (
              <>
                <div className="p-5 rounded-2xl bg-zinc-950/80 border border-red-500/30">
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

                <div className="p-5 rounded-2xl bg-zinc-950/80 border border-red-500/30">
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

                <div className="p-5 rounded-2xl bg-zinc-950/80 border border-red-500/30">
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
                <div className="p-5 rounded-2xl bg-zinc-950/80 border border-[#CCFF00]/40 shadow-[0_0_20px_rgba(204,255,0,0.06)]">
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

                <div className="p-5 rounded-2xl bg-zinc-950/80 border border-[#CCFF00]/40 shadow-[0_0_20px_rgba(204,255,0,0.06)]">
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

                <div className="p-5 rounded-2xl bg-zinc-950/80 border border-[#CCFF00]/40 shadow-[0_0_20px_rgba(204,255,0,0.06)]">
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
        </motion.div>
      </div>
    </section>
  );
};

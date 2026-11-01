import React from 'react';
import { Layers, FileWarning, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const ExecutionGap: React.FC = () => {
  return (
    <section id="gap" className="py-24 px-6 md:px-12 bg-white text-zinc-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-zinc-900 text-white text-xs font-semibold uppercase tracking-widest mb-6"
        >
          <span>THE SYSTEMIC FAILURE</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.12]"
        >
          Your enterprise has data everywhere. <br className="hidden sm:inline" />
          <span className="text-zinc-500">Execution still breaks in between.</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-3xl"
        >
          Modern organizations don't suffer from an intelligence deficit—they suffer from an{' '}
          <strong className="text-zinc-900 font-semibold">Execution Gap</strong>. Strategy is conceived in leadership suites, documented across scattered tools, and lost in translation across disconnected handoffs. When owners shift, tools multiply, and context fractures, critical momentum halts.
        </motion.p>

        {/* 3 Failure Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 01: Fragmented Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition-all flex flex-col justify-between"
          >
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
          </motion.div>

          {/* Card 02: Lost Context & Handoffs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition-all flex flex-col justify-between"
          >
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
          </motion.div>

          {/* Card 03: Lagging Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition-all flex flex-col justify-between"
          >
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
          </motion.div>
        </div>

        {/* Architectural Contrast Strip: Legacy BI vs. Avenora Execution Layer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white shadow-xl"
        >
          <div className="flex items-start space-x-4 pb-6 lg:pb-0 border-b lg:border-b-0 lg:border-r border-white/10 lg:pr-6">
            <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
              <XCircle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 block">
                Legacy Dashboards &amp; Trackers
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Passive Systems of Record
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                Require manual human data entry, report lagging historical snapshots, and leave cross-team dependencies unmonitored between meetings.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 lg:pl-2">
            <div className="w-9 h-9 rounded-xl bg-[#CCFF00]/15 border border-[#CCFF00]/40 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5 text-[#CCFF00]" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#CCFF00] block">
                The Avenora Execution Layer
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Active System of Intelligence &amp; Action
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed">
                Connects existing tools into a continuous loop—synthesizing multi-system context, predicting critical-path slippage, and routing human-approved actions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

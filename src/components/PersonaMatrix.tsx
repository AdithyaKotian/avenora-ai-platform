import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type PersonaId = 'executives' | 'pm' | 'teams' | 'stakeholders';

export const PersonaMatrix: React.FC = () => {
  const [activePersona, setActivePersona] = useState<PersonaId>('pm');

  const personas: {
    id: PersonaId;
    badge: string;
    title: string;
    description: string;
    metricValue: string;
    metricLabel: string;
    headline: string;
    impactBanner: string;
    comparisons: { before: string; after: string }[];
  }[] = [
    {
      id: 'executives',
      badge: 'Strategic Signals',
      title: 'Executives',
      description:
        'High-fidelity portfolio oversight without endless steering committee meetings. Spot risks, track strategic OKR velocity, and align capital allocation to ground-truth execution.',
      metricValue: '10x Faster',
      metricLabel: 'Strategic visibility from ground operations',
      headline: 'Day-in-the-Life Transformation: For Executives & C-Suite',
      impactBanner: '10x Faster Portfolio Risk Signal',
      comparisons: [
        {
          before: 'Waiting for bi-weekly SteerCo slide decks that mask critical-path slippage',
          after: 'Real-time portfolio confidence index grounded in live ERP, Git, and Jira signals',
        },
        {
          before: 'Discovering $300K+ budget variances during post-mortem retrospectives',
          after: 'Predictive variance alerts 3 sprints ahead with traceable RAG source citations',
        },
        {
          before: 'Verbal executive mandates losing context across 4 layers of management handoffs',
          after: 'Direct strategic-to-sprint traceability with human-gated execution tracking',
        },
      ],
    },
    {
      id: 'pm',
      badge: 'Coordinate Dependencies',
      title: 'Project Managers',
      description:
        'Eliminate the administrative burden of status-chasing. Predict blockers, orchestrate cross-team dependencies, and coordinate releases seamlessly.',
      metricValue: '12+ Hrs Saved',
      metricLabel: 'Weekly per delivery manager',
      headline: 'Day-in-the-Life Transformation: For Project Managers',
      impactBanner: 'Reclaim 12+ Hours Weekly',
      comparisons: [
        {
          before: 'Chasing 20+ engineering leads in Slack for sprint progress updates',
          after: 'Autonomous ambient status ingestion across Git, Jira, SAP, and Slack',
        },
        {
          before: 'Manual transcription of Zoom meeting action items into Jira backlogs',
          after: '1-click automated meeting action extraction with verified assignees',
        },
        {
          before: 'Surprise cross-team API breaks discovered during final QA week',
          after: 'Continuous dependency mapping highlighting breaking changes in advance',
        },
      ],
    },
    {
      id: 'teams',
      badge: 'Automate Tasks',
      title: 'Teams',
      description:
        'Focus on core high-value output. Let Avenora capture action items from your natural tools and communications, automating updates silently in the background.',
      metricValue: 'Zero Busywork',
      metricLabel: 'Manual status duplication eradicated',
      headline: 'Day-in-the-Life Transformation: For Engineering & Ops Teams',
      impactBanner: 'Zero Manual Status Duplication',
      comparisons: [
        {
          before: 'Updating the same task status across Jira, Slack threads, and weekly spreadsheets',
          after: 'Single-commit synchronization—work in your native tools while Avenora updates trackers',
        },
        {
          before: 'Deciphering vague ticket descriptions created days after technical meetings',
          after: 'Tickets auto-enriched with exact meeting transcript timestamps and architecture context',
        },
        {
          before: 'Unplanned fire-drills caused by uncommunicated upstream schema changes',
          after: 'Automated upstream dependency alerts before breaking PRs merge',
        },
      ],
    },
    {
      id: 'stakeholders',
      badge: 'Stay Aligned',
      title: 'Stakeholders',
      description:
        'Unfiltered milestone confidence and verified delivery timelines without manual check-ins, unverified slide decks, or ambiguous weekly memos.',
      metricValue: '100% Trust',
      metricLabel: 'Continuous verifiable alignment',
      headline: 'Day-in-the-Life Transformation: For Cross-Functional Stakeholders',
      impactBanner: '100% Verifiable Milestone Alignment',
      comparisons: [
        {
          before: 'Relying on subjective green/amber/red status reports with no underlying evidence',
          after: 'Verified milestone telemetry backed by traceable system-of-record citations',
        },
        {
          before: 'Unclear accountability when cross-department handoffs stall between teams',
          after: 'Explicit RBAC ownership and immutable audit logs for every critical handoff',
        },
        {
          before: 'Last-minute commercial launch delays due to hidden compliance or infra blockers',
          after: 'Continuous readiness tracking across Security, Legal, FinOps, and Engineering',
        },
      ],
    },
  ];

  const selectedPersona = personas.find((p) => p.id === activePersona)!;

  return (
    <section id="audience" className="py-24 px-6 md:px-12 bg-white text-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-zinc-900 text-white text-xs font-semibold uppercase tracking-widest mb-4">
            <span>TARGET AUDIENCE ALIGNMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Engineered for Alignment Across Every Layer of Leadership
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto">
            Select any organizational role below to inspect how Avenora removes handoff friction and transforms daily execution.
          </p>
        </div>

        {/* 4 Interactive Persona Selector Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="tablist"
          aria-label="Organizational roles"
        >
          {personas.map((persona) => {
            const isSelected = persona.id === activePersona;
            return (
              <button
                key={persona.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActivePersona(persona.id)}
                className={`p-7 rounded-3xl text-left flex flex-col justify-between transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'border-2 border-[#CCFF00] bg-zinc-950 text-white shadow-2xl -translate-y-1'
                    : 'border border-zinc-200 bg-zinc-50 text-zinc-950 hover:border-zinc-400 hover:bg-zinc-100/70'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/10 blur-2xl pointer-events-none rounded-full" />
                )}
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider font-mono ${
                        isSelected ? 'text-[#CCFF00]' : 'text-zinc-500'
                      }`}
                    >
                      {persona.badge}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-mono bg-[#CCFF00] text-black font-bold px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    )}
                  </div>
                  <h3
                    className={`text-2xl font-bold tracking-tight mt-1.5 mb-3 ${
                      isSelected ? 'text-white' : 'text-zinc-950'
                    }`}
                  >
                    {persona.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isSelected ? 'text-zinc-300' : 'text-zinc-600'
                    }`}
                  >
                    {persona.description}
                  </p>
                </div>
                <div
                  className={`pt-4 border-t w-full flex items-end justify-between ${
                    isSelected ? 'border-zinc-800' : 'border-zinc-200'
                  }`}
                >
                  <div>
                    <div
                      className={`text-2xl font-extrabold tracking-tight tabular-nums ${
                        isSelected ? 'text-[#CCFF00]' : 'text-zinc-900'
                      }`}
                    >
                      {persona.metricValue}
                    </div>
                    <div
                      className={`text-xs font-medium mt-0.5 ${
                        isSelected ? 'text-zinc-400' : 'text-zinc-500'
                      }`}
                    >
                      {persona.metricLabel}
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 ${
                      isSelected ? 'text-[#CCFF00]' : 'text-zinc-400'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Consolidated Interactive Day-in-the-Life Transformation Panel */}
        <div className="mt-10 p-6 sm:p-10 rounded-3xl bg-zinc-950 text-white shadow-2xl border border-zinc-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPersona.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
            >
              {/* Header Strip */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-8">
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#CCFF00]/30 bg-zinc-900 text-[#CCFF00] text-xs font-mono uppercase tracking-widest mb-2.5">
                    <span>DAY-IN-THE-LIFE TRANSFORMATION · {selectedPersona.title.toUpperCase()}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    {selectedPersona.headline}
                  </h3>
                </div>
                <div className="text-left md:text-right shrink-0">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-0.5">
                    Verified Role Impact
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#CCFF00] tracking-tight">
                    {selectedPersona.impactBanner}
                  </div>
                </div>
              </div>

              {/* 3 Before / After Comparison Rows */}
              <div className="space-y-4">
                {selectedPersona.comparisons.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-black border border-white/10 hover:border-white/20 transition-all items-center"
                  >
                    {/* Before Column */}
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-red-950/80 border border-red-500/40 flex items-center justify-center shrink-0 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 block mb-1">
                          STATUS QUO (THE EXECUTION GAP)
                        </span>
                        <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                          &ldquo;{item.before}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* After Column */}
                    <div className="flex items-start space-x-3 border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-6">
                      <div className="w-6 h-6 rounded-full bg-[#CCFF00]/20 border border-[#CCFF00] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#CCFF00] block mb-1">
                          WITH AVENORA AI (THE EXECUTION LOOP)
                        </span>
                        <p className="text-sm text-white leading-relaxed font-semibold">
                          &ldquo;{item.after}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

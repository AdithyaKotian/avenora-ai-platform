import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Users2, Briefcase, Eye, AlertCircle, CheckCircle2 } from 'lucide-react';

type PersonaId = 'executives' | 'pms' | 'teams' | 'stakeholders';

interface PersonaData {
  id: PersonaId;
  label: string;
  subtitle: string;
  icon: React.ReactNode;
  painPoints: string[];
  before: { scenario: string; detail: string }[];
  after: { scenario: string; detail: string }[];
  outcome: string;
  outcomeDetail: string;
}

export const PersonaMatrix: React.FC = () => {
  const [activePersona, setActivePersona] = useState<PersonaId>('pms');

  const personas: PersonaData[] = [
    {
      id: 'executives',
      label: 'Executives',
      subtitle: 'Strategic Signals',
      icon: <Target className="w-4 h-4" />,
      painPoints: [
        'No real-time view into execution health across 50+ concurrent projects',
        'Steering committee decisions based on stale spreadsheet snapshots',
        'Capital allocation disconnected from ground-truth delivery velocity',
      ],
      before: [
        {
          scenario: 'Portfolio visibility requires manual slide deck consolidation',
          detail: 'Finance, engineering, and operations each maintain separate project trackers. Consolidated view takes 5+ days to assemble.',
        },
        {
          scenario: 'Strategic OKR progress discovered in quarterly reviews',
          detail: 'By the time leadership sees the data, corrective actions are 6–8 weeks late.',
        },
      ],
      after: [
        {
          scenario: 'Continuous portfolio intelligence from ground-truth systems',
          detail: 'Avenora synthesizes Jira, SAP, and calendar data into a single strategic dashboard updated in real time.',
        },
        {
          scenario: 'Proactive risk alerts delivered before SteerCo meetings',
          detail: 'Critical path bottlenecks surface automatically, enabling data-driven capital allocation decisions.',
        },
      ],
      outcome: 'Strategic Clarity',
      outcomeDetail: 'Real-time portfolio oversight without manual data gathering',
    },
    {
      id: 'pms',
      label: 'Project Managers',
      subtitle: 'Coordinate Dependencies',
      icon: <Briefcase className="w-4 h-4" />,
      painPoints: [
        'Chasing 20+ engineering leads in Slack for sprint progress updates',
        'Manual transcription of Zoom meeting action items into Jira',
        'Surprise cross-team API breaks discovered during QA week',
      ],
      before: [
        {
          scenario: 'Chasing 20+ engineering leads in Slack for sprint progress',
          detail: 'PMs spend 8–12 hours weekly manually requesting, consolidating, and reformatting status updates from distributed teams.',
        },
        {
          scenario: 'Manual transcription of Zoom meeting action items into Jira',
          detail: 'Meeting decisions documented in personal notes. Action items created 24–48 hours later with missing context and incorrect assignees.',
        },
        {
          scenario: 'Surprise cross-team API breaks discovered during QA week',
          detail: 'No automated dependency mapping between frontend, backend, and ERP components. Breaking changes discovered 2 weeks too late.',
        },
      ],
      after: [
        {
          scenario: 'Autonomous ambient status ingestion across Git, Jira, and Slack',
          detail: 'Avenora captures delivery telemetry silently. PMs receive synthesized progress briefings without interrupting engineering work.',
        },
        {
          scenario: '1-click automated meeting action extraction with verified assignees',
          detail: 'Meeting transcripts processed in real time. Action items created with correct owners, acceptance criteria, and linked dependencies.',
        },
        {
          scenario: 'Continuous dependency mapping highlighting breaking changes in advance',
          detail: 'Cross-system graph correlates API changes, database migrations, and sprint timelines to surface conflicts before they compound.',
        },
      ],
      outcome: '12+ Hrs Saved',
      outcomeDetail: 'Weekly per delivery manager through automation',
    },
    {
      id: 'teams',
      label: 'Teams',
      subtitle: 'Automate Tasks',
      icon: <Users2 className="w-4 h-4" />,
      painPoints: [
        'Duplicating status updates across Jira, Slack, and weekly reports',
        'Context switching between 5+ tools to understand a single task',
        'Unplanned work from outdated requirements and missed dependencies',
      ],
      before: [
        {
          scenario: 'Status duplication across Jira, Slack, email, and slide decks',
          detail: 'Engineers spend 45+ minutes daily updating the same information in multiple systems because no single source of truth exists.',
        },
        {
          scenario: 'Context lost between tool boundaries',
          detail: 'A requirement discussed in Slack, documented in Confluence, tracked in Jira, and reported in Sheets — with no automated linkage.',
        },
      ],
      after: [
        {
          scenario: 'Write once, sync everywhere — ambient status propagation',
          detail: 'Update a PR or Jira ticket and Avenora propagates context to all downstream systems. Zero manual duplication required.',
        },
        {
          scenario: 'Unified context surface linking all related artifacts',
          detail: 'Every task connected to its source requirement, related PRs, meeting decisions, and downstream dependencies in a single view.',
        },
      ],
      outcome: 'Zero Busywork',
      outcomeDetail: 'Manual status duplication eradicated across tools',
    },
    {
      id: 'stakeholders',
      label: 'Stakeholders',
      subtitle: 'Stay Aligned',
      icon: <Eye className="w-4 h-4" />,
      painPoints: [
        'Milestone confidence based on optimistic verbal assurances',
        'No way to verify delivery timelines without scheduling meetings',
        'Weekly memos that are outdated by the time they are distributed',
      ],
      before: [
        {
          scenario: 'Milestone updates via curated slide decks and weekly memos',
          detail: 'Stakeholders receive filtered information 1–2 weeks after events occur. No mechanism to verify claims against source data.',
        },
        {
          scenario: 'Confidence assessments based on subjective PM judgment',
          detail: 'No quantitative backing for "green/yellow/red" status indicators. Risk assessments are opinion-based, not data-driven.',
        },
      ],
      after: [
        {
          scenario: 'Real-time milestone confidence backed by source system data',
          detail: 'Avenora generates verifiable delivery forecasts from Git velocity, Jira throughput, and resource allocation data — not opinions.',
        },
        {
          scenario: 'On-demand transparency without scheduling check-in meetings',
          detail: 'Self-service dashboards with drill-down to source evidence. Every claim is traceable to its originating data point.',
        },
      ],
      outcome: 'Verified Trust',
      outcomeDetail: 'Continuous verifiable alignment with source data backing',
    },
  ];

  const current = personas.find((p) => p.id === activePersona)!;

  return (
    <section id="audience" className="py-24 px-6 md:px-12 bg-white text-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold uppercase tracking-widest mb-4">
            <span>PERSONA EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Engineered for Every Layer of Leadership
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto">
            Select a role to explore how Avenora transforms their daily operational experience.
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setActivePersona(persona.id)}
              className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                activePersona === persona.id
                  ? 'bg-zinc-950 text-white border-[#CCFF00] shadow-lg'
                  : 'bg-zinc-50 text-zinc-900 border-zinc-200 hover:border-zinc-400'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
                activePersona === persona.id
                  ? 'bg-[#CCFF00] text-black'
                  : 'bg-zinc-200 text-zinc-600'
              }`}>
                {persona.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold tracking-tight">{persona.label}</h3>
              <p className={`text-xs mt-0.5 ${
                activePersona === persona.id ? 'text-[#CCFF00]' : 'text-zinc-500'
              } font-mono uppercase tracking-wider`}>
                {persona.subtitle}
              </p>
            </button>
          ))}
        </div>

        {/* Active Persona Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePersona}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Pain Points */}
            <div className="mb-8 p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-4">
                Current Workflow Challenges
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {current.painPoints.map((pain, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-zinc-200 text-sm text-zinc-700 leading-relaxed">
                    <span className="text-amber-600 font-bold mr-1.5">⚠</span>
                    {pain}
                  </div>
                ))}
              </div>
            </div>

            {/* Before / After Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Before */}
              <div className="p-6 rounded-2xl bg-zinc-950 text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-red-400">
                    Before Avenora
                  </span>
                </div>
                <div className="space-y-4">
                  {current.before.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-black border border-red-500/20">
                      <p className="text-sm font-semibold text-red-200 mb-1">{item.scenario}</p>
                      <p className="text-xs text-zinc-400 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div className="p-6 rounded-2xl bg-zinc-950 text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
                    With Avenora AI
                  </span>
                </div>
                <div className="space-y-4">
                  {current.after.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-black border border-[#CCFF00]/30 shadow-[0_0_15px_rgba(204,255,0,0.04)]">
                      <p className="text-sm font-semibold text-[#CCFF00] mb-1">{item.scenario}</p>
                      <p className="text-xs text-zinc-300 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div className="p-6 rounded-2xl bg-zinc-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] block mb-1">
                  Business Outcome
                </span>
                <p className="text-sm text-zinc-400">{current.outcomeDetail}</p>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#CCFF00] tracking-tight whitespace-nowrap">
                {current.outcome}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

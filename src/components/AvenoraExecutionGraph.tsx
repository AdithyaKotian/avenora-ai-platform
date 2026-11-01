import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  AlertTriangle,
  Zap,
  Activity,
  CheckCircle2,
  AlertCircle,
  FileCode2,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import { motion } from 'motion/react';

type NodeId = 'erp' | 'steerco' | 'portfolio';

export const AvenoraExecutionGraph: React.FC = () => {
  const [comparisonMode, setComparisonMode] = useState<'avenora' | 'statusQuo'>('avenora');
  const [activeTab, setActiveTab] = useState<'all' | 'bottlenecks' | 'steerco' | 'resources'>('all');
  const [selectedNode, setSelectedNode] = useState<NodeId>('erp');
  const [isSimulating, setIsSimulating] = useState(true);
  const [pulseCount, setPulseCount] = useState(148);
  const [confidenceIndex, setConfidenceIndex] = useState(94.2);
  const [approvalStatus, setApprovalStatus] = useState<Record<NodeId, 'pending' | 'approved' | 'modified'>>({
    erp: 'pending',
    steerco: 'approved',
    portfolio: 'pending',
  });

  // Simulated live event telemetry pulse
  useEffect(() => {
    if (!isSimulating || comparisonMode !== 'avenora') return;
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + 1);
      setConfidenceIndex((prev) => {
        const delta = (Math.random() - 0.45) * 0.4;
        return Number(Math.min(99.4, Math.max(92.1, prev + delta)).toFixed(1));
      });
    }, 3200);
    return () => clearInterval(interval);
  }, [isSimulating, comparisonMode]);

  const governanceData: Record<
    NodeId,
    {
      nodeTitle: string;
      proposedAction: string;
      requiredRole: string;
      impactSummary: string;
      auditHash: string;
      citations: { source: string; refId: string; excerpt: string; confidence: string }[];
    }
  > = {
    erp: {
      nodeTitle: 'SAP S/4HANA Migration — Stream 4',
      proposedAction:
        'Generate schema patch PR #1284, re-route 4 dependent Jira billing tasks to Sprint 14, and update SAP finance cutover milestone.',
      requiredRole: 'Lead Enterprise Architect · RBAC Tier 1',
      impactSummary: 'Mitigates +3.4 days critical-path delay & prevents $340K cutover overrun',
      auditHash: 'sha256:9f84c2e1a0b3...4402',
      citations: [
        {
          source: 'SAP S/4HANA RFC',
          refId: 'TABLE_BSEG_V4 · Row #4402',
          excerpt: 'Detected deprecated field mapping in legacy billing adapter payload.',
          confidence: '99.6%',
        },
        {
          source: 'GitHub Enterprise',
          refId: 'repo:core-billing / PR #1281',
          excerpt: 'Breaking interface commit merged 4h ago without downstream Jira link.',
          confidence: '98.9%',
        },
        {
          source: 'Jira Software',
          refId: 'Epic ENG-402 · 4 Subtasks',
          excerpt: 'Critical path blocked on billing schema sign-off by Security & FinOps.',
          confidence: '97.4%',
        },
      ],
    },
    steerco: {
      nodeTitle: 'Q3 Exec SteerCo Decisions',
      proposedAction:
        'Create 6 cross-functional Jira epics, assign verified workstream leads, and publish SteerCo alignment digest to #exec-delivery.',
      requiredRole: 'VP of Program Delivery · RBAC Tier 1',
      impactSummary: 'Eliminates 48-hour manual deck-to-ticket handoff latency across 6 teams',
      auditHash: 'sha256:3c71b908f2d1...8910',
      citations: [
        {
          source: 'Zoom Enterprise Transcript',
          refId: 'Meeting #402 @ 00:14:22',
          excerpt: '"Mandate APAC SOC 2 readiness before Q4 commercial onboarding begins."',
          confidence: '99.2%',
        },
        {
          source: 'Workday Org Graph',
          refId: 'Role Mapping · APAC SecOps',
          excerpt: 'Matched accountable owner: David Chen (Principal Security Architect).',
          confidence: '99.8%',
        },
        {
          source: 'Asana & Jira Sync',
          refId: 'Portfolio Board #19',
          excerpt: 'Mapped 14 child deliverables with automated dependency links.',
          confidence: '96.8%',
        },
      ],
    },
    portfolio: {
      nodeTitle: 'Portfolio Trajectory & Capacity Rebalance',
      proposedAction:
        'Shift 2 platform engineers from low-priority internal tooling to APAC Compliance stream for 10 business days.',
      requiredRole: 'Engineering Operations Director · RBAC Tier 2',
      impactSummary: 'Restores Q4 OKR delivery probability from 78.4% to 94.2% without overtime',
      auditHash: 'sha256:7a12e550d4c8...3109',
      citations: [
        {
          source: 'Jira Velocity Telemetry',
          refId: '32 Active Teams · Sprint 13',
          excerpt: 'IAM audit queue utilization reached 96% capacity threshold.',
          confidence: '98.5%',
        },
        {
          source: 'GitHub Commit Graph',
          refId: 'Cycle Time Analyzer',
          excerpt: 'PR review latency increased by +18 hrs on compliance critical path.',
          confidence: '97.9%',
        },
        {
          source: 'Enterprise OKR Ledger',
          refId: 'Objective Q4-02 · Strategic Weight 1.0',
          excerpt: 'APAC commercial launch carries highest executive priority weighting.',
          confidence: '99.9%',
        },
      ],
    },
  };

  const currentGov = governanceData[selectedNode];
  const currentApproval = approvalStatus[selectedNode];

  return (
    <section
      id="execution-graph"
      className="py-24 px-6 md:px-12 bg-black text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[400px] pointer-events-none rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(204,255,0,0.12) 0%, rgba(204,255,0,0.03) 50%, rgba(0,0,0,0) 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#CCFF00]/30 bg-zinc-900 text-[#CCFF00] text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
            <span>FLAGSHIP EXECUTION GRAPH · RAG EVIDENCE · HITL GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Avenora Internal <span className="text-[#CCFF00]">Execution Graph</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto">
            Inspect how Avenora synthesizes multi-system signals, links every insight to traceable source evidence (RAG), and enforces human-in-the-loop (HITL) approval before production writes.
          </p>
        </motion.div>

        {/* Flagship Unified Workspace Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-3xl border border-white/15 bg-zinc-950/95 p-5 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative backdrop-blur-xl text-left"
        >
          {/* Top Bar: Terminal Header + Consolidated Mode Switcher (With Avenora AI vs Legacy Status Quo) */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-zinc-800" />
                <span className="w-3 h-3 rounded-full bg-zinc-800" />
                <span className="w-3 h-3 rounded-full bg-zinc-800" />
              </div>
              <span className="text-xs text-zinc-400 font-mono tracking-tight pl-2">
                avenora.internal/execution-graph · Initiative: Multi-Region ERP &amp; Cloud Migration
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Consolidated Mode Switcher */}
              <div
                className="inline-flex p-1 bg-black rounded-full border border-white/10"
                role="group"
                aria-label="Execution comparison mode"
              >
                <button
                  type="button"
                  onClick={() => setComparisonMode('avenora')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    comparisonMode === 'avenora'
                      ? 'bg-[#CCFF00] text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  With Avenora AI (Live Graph)
                </button>
                <button
                  type="button"
                  onClick={() => setComparisonMode('statusQuo')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    comparisonMode === 'statusQuo'
                      ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Legacy Status Quo
                </button>
              </div>

              {comparisonMode === 'avenora' && (
                <button
                  type="button"
                  onClick={() => setIsSimulating(!isSimulating)}
                  className="flex items-center space-x-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                  title={isSimulating ? 'Pause live simulation' : 'Resume live simulation'}
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
              )}
            </div>
          </div>

          {comparisonMode === 'statusQuo' ? (
            /* Consolidated Legacy Status Quo Comparison View */
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-red-400">
                  Legacy Manual Handoffs · Unmonitored Execution Breakdown
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Switch back to &ldquo;With Avenora AI&rdquo; to inspect RAG &amp; HITL controls
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-black/80 border border-red-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-red-400 mb-2">
                      <span>STEP 1: EXECUTIVE DECISION</span>
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-base text-white">
                      Meeting notes trapped in static decks
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      Decisions documented in PDF slides. PMs spend 3 days manually parsing workstreams and chasing owners across departments.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/5 text-xs text-red-400 font-mono flex items-center justify-between">
                    <span>Handoff delay</span>
                    <span className="font-bold">+48 hrs lost</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-black/80 border border-red-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-red-400 mb-2">
                      <span>STEP 2: SILOED TOOLS</span>
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-base text-white">
                      Disconnected Jira tickets &amp; Slack DMs
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      Security and FinOps teams are unaware that billing schema changed in Sprint 3. Cross-system dependency discovered 2 weeks late.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/5 text-xs text-red-400 font-mono flex items-center justify-between">
                    <span>Context loss</span>
                    <span className="font-bold">62% unlinked</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-black/80 border border-red-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-red-400 mb-2">
                      <span>STEP 3: REACTIVE FIREFIGHTING</span>
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-base text-white">
                      Missed milestone in SteerCo
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      Leadership discovers critical-path slippage during retrospective. Capital burned and engineers pulled into emergency weekend war rooms.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/5 text-xs text-red-400 font-mono flex items-center justify-between">
                    <span>Schedule impact</span>
                    <span className="font-bold">2-week slip</span>
                  </div>
                </div>
              </div>

              {/* Quantified Comparison Footer */}
              <div className="mt-6 p-4 rounded-2xl bg-zinc-900/90 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <span className="text-zinc-400 block">DECISION-TO-TICKET LATENCY</span>
                  <span className="text-red-400 line-through mr-2">48 Hours</span>
                  <span className="text-[#CCFF00] font-bold">&rarr; &lt; 2 Seconds with Avenora</span>
                </div>
                <div>
                  <span className="text-zinc-400 block">DEPENDENCY DETECTION</span>
                  <span className="text-red-400 line-through mr-2">Post-Mortem</span>
                  <span className="text-[#CCFF00] font-bold">&rarr; 3 Sprints Early Warning</span>
                </div>
                <div>
                  <span className="text-zinc-400 block">EVIDENCE TRACEABILITY</span>
                  <span className="text-red-400 line-through mr-2">Manual Slides</span>
                  <span className="text-[#CCFF00] font-bold">&rarr; 100% Source-Linked RAG</span>
                </div>
              </div>
            </div>
          ) : (
            /* Flagship Live Graph + Traceable Evidence (RAG) & Human-in-the-Loop (HITL) Governance View */
            <div>
              {/* Filter Pills + Instruction */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-zinc-500 font-mono mr-1">Filter Signals:</span>
                  {(
                    [
                      { id: 'all', label: 'All Signals' },
                      { id: 'bottlenecks', label: 'ERP & Migration Risks' },
                      { id: 'steerco', label: 'SteerCo Decisions' },
                      { id: 'resources', label: 'Resource Friction' },
                    ] as const
                  ).map((tab) => (
                    <button
                      type="button"
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-[#CCFF00] text-black font-semibold shadow-[0_0_12px_rgba(204,255,0,0.25)]'
                          : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <span className="text-[11px] font-mono text-zinc-400">
                  Select any node below to inspect RAG citations &amp; HITL approval gate
                </span>
              </div>

              {/* 3 Selectable Live Execution Nodes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs mb-6">
                {/* Node 1: SAP S/4HANA Migration */}
                <button
                  type="button"
                  onClick={() => setSelectedNode('erp')}
                  className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedNode === 'erp'
                      ? 'bg-zinc-900 border-2 border-[#CCFF00] shadow-[0_0_25px_rgba(204,255,0,0.15)]'
                      : activeTab === 'all' || activeTab === 'bottlenecks'
                      ? 'bg-zinc-900/70 border-white/10 hover:border-white/30'
                      : 'bg-zinc-900/30 border-white/5 opacity-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-zinc-400 mb-1.5 font-sans text-[11px] font-semibold tracking-wider uppercase">
                      <span>01 · Detected Bottleneck</span>
                      <AlertTriangle className="w-3.5 h-3.5 text-[#CCFF00]" />
                    </div>
                    <div className="text-white text-sm font-sans font-bold">
                      SAP S/4HANA Migration — Stream 4
                    </div>
                    <p className="mt-1.5 text-zinc-400 font-sans text-xs leading-relaxed">
                      API schema mismatch between legacy billing and SAP finance pipeline.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between w-full">
                    <span className="text-[#CCFF00] font-semibold text-xs">
                      +3.4d risk mitigated
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] ${
                        approvalStatus.erp === 'approved'
                          ? 'bg-[#CCFF00]/20 text-[#CCFF00]'
                          : 'bg-amber-400/15 text-amber-300'
                      }`}
                    >
                      {approvalStatus.erp === 'approved'
                        ? 'HITL Approved'
                        : approvalStatus.erp === 'modified'
                        ? 'Scope Modified'
                        : 'Awaiting HITL Sign-Off'}
                    </span>
                  </div>
                </button>

                {/* Node 2: SteerCo Decisions */}
                <button
                  type="button"
                  onClick={() => setSelectedNode('steerco')}
                  className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedNode === 'steerco'
                      ? 'bg-zinc-900 border-2 border-[#CCFF00] shadow-[0_0_25px_rgba(204,255,0,0.15)]'
                      : activeTab === 'all' || activeTab === 'steerco'
                      ? 'bg-zinc-900/70 border-white/10 hover:border-white/30'
                      : 'bg-zinc-900/30 border-white/5 opacity-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-zinc-400 mb-1.5 font-sans text-[11px] font-semibold tracking-wider uppercase">
                      <span>02 · Meeting Context Translated</span>
                      <Zap className="w-3.5 h-3.5 text-[#CCFF00]" />
                    </div>
                    <div className="text-white text-sm font-sans font-bold">
                      Q3 Exec SteerCo Decisions
                    </div>
                    <p className="mt-1.5 text-zinc-400 font-sans text-xs leading-relaxed">
                      Verbal mandate on APAC expansion mapped into 6 workstreams.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between w-full">
                    <span className="text-zinc-200 font-semibold text-xs">
                      14 actions routed
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] ${
                        approvalStatus.steerco === 'approved'
                          ? 'bg-[#CCFF00]/20 text-[#CCFF00]'
                          : 'bg-amber-400/15 text-amber-300'
                      }`}
                    >
                      {approvalStatus.steerco === 'approved'
                        ? 'HITL Approved'
                        : approvalStatus.steerco === 'modified'
                        ? 'Scope Modified'
                        : 'Awaiting HITL Sign-Off'}
                    </span>
                  </div>
                </button>

                {/* Node 3: Portfolio Trajectory */}
                <button
                  type="button"
                  onClick={() => setSelectedNode('portfolio')}
                  className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedNode === 'portfolio'
                      ? 'bg-zinc-900 border-2 border-[#CCFF00] shadow-[0_0_25px_rgba(204,255,0,0.15)]'
                      : activeTab === 'all' || activeTab === 'resources'
                      ? 'bg-zinc-900/70 border-white/10 hover:border-white/30'
                      : 'bg-zinc-900/30 border-white/5 opacity-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-zinc-400 mb-1.5 font-sans text-[11px] font-semibold tracking-wider uppercase">
                      <span>03 · Portfolio Trajectory</span>
                      <Activity className="w-3.5 h-3.5 text-[#CCFF00]" />
                    </div>
                    <div className="text-white text-sm font-sans font-bold">
                      Confidence Index: {confidenceIndex}%
                    </div>
                    <p className="mt-1.5 text-zinc-400 font-sans text-xs leading-relaxed">
                      Real-time velocity vs target OKR milestones across 32 active teams.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between w-full">
                    <span className="text-[#CCFF00] font-semibold text-xs">
                      Pulse #{pulseCount}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] ${
                        approvalStatus.portfolio === 'approved'
                          ? 'bg-[#CCFF00]/20 text-[#CCFF00]'
                          : 'bg-amber-400/15 text-amber-300'
                      }`}
                    >
                      {approvalStatus.portfolio === 'approved'
                        ? 'HITL Approved'
                        : approvalStatus.portfolio === 'modified'
                        ? 'Scope Modified'
                        : 'Awaiting HITL Sign-Off'}
                    </span>
                  </div>
                </button>
              </div>

              {/* Integrated Traceable Evidence (RAG) & Human-in-the-Loop (HITL) Governance Inspector */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5 rounded-2xl bg-black border border-white/15 mb-5">
                {/* Left 7 Cols: Traceable Evidence (RAG) Source Citations */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <FileCode2 className="w-4 h-4 text-[#CCFF00]" />
                        <span className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
                          Traceable Evidence (RAG) · Ground-Truth Citations
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400">
                        Zero Hallucination Guarantee
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {currentGov.citations.map((cit, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-zinc-950 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                        >
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-bold text-white">{cit.source}</span>
                              <span className="text-[11px] font-mono text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-0.5 rounded">
                                {cit.refId}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-400 mt-1">{cit.excerpt}</p>
                          </div>
                          <div className="text-right shrink-0 font-mono">
                            <span className="text-[10px] text-zinc-500 block">RAG Match</span>
                            <span className="text-xs font-bold text-[#CCFF00]">{cit.confidence}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right 5 Cols: Human-in-the-Loop (HITL) Governance Gate */}
                <div className="lg:col-span-5 p-4 sm:p-5 rounded-xl bg-zinc-950 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] flex items-center space-x-1.5">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Human-in-the-Loop Gate</span>
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">
                        {currentGov.auditHash}
                      </span>
                    </div>

                    <div className="text-sm font-bold text-white mb-1">{currentGov.nodeTitle}</div>
                    <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                      <strong className="text-zinc-400">AI Proposed Action:</strong>{' '}
                      {currentGov.proposedAction}
                    </p>

                    <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5 text-[11px] font-mono text-zinc-300 mb-3 space-y-1">
                      <div>
                        <span className="text-zinc-500">Required Approver: </span>
                        <span className="text-white">{currentGov.requiredRole}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500">Projected Outcome: </span>
                        <span className="text-[#CCFF00]">{currentGov.impactSummary}</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive HITL Approval Controls */}
                  <div>
                    {currentApproval === 'pending' ? (
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setApprovalStatus((prev) => ({ ...prev, [selectedNode]: 'approved' }))
                          }
                          className="flex-1 py-2.5 px-3 rounded-xl bg-[#CCFF00] text-black font-semibold text-xs hover:bg-[#b8e600] transition-all cursor-pointer text-center"
                        >
                          Approve &amp; Dispatch Action
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setApprovalStatus((prev) => ({ ...prev, [selectedNode]: 'modified' }))
                          }
                          className="py-2.5 px-3 rounded-xl bg-zinc-900 border border-white/15 text-zinc-200 hover:text-white text-xs font-medium transition-all cursor-pointer"
                        >
                          Modify Scope
                        </button>
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0" />
                          <div className="text-xs">
                            <div className="font-bold text-white">
                              {currentApproval === 'approved'
                                ? 'Dispatched to Production Stack'
                                : 'Modified Scope Queued for Execution'}
                            </div>
                            <div className="text-[10px] font-mono text-zinc-400">
                              Logged to Immutable Audit Trail · SSO Verified
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            setApprovalStatus((prev) => ({ ...prev, [selectedNode]: 'pending' }))
                          }
                          className="text-zinc-400 hover:text-white p-1.5 rounded-lg bg-zinc-900 border border-white/10 cursor-pointer"
                          title="Reset approval simulation"
                          aria-label="Reset approval simulation"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Real-time System Flow Bar */}
              <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-2 text-zinc-400 font-mono">
                  <span className="text-zinc-500">INGEST:</span>
                  <span className="text-white bg-zinc-800 px-2 py-0.5 rounded">SAP</span>
                  <span className="text-white bg-zinc-800 px-2 py-0.5 rounded">Jira</span>
                  <span className="text-white bg-zinc-800 px-2 py-0.5 rounded">Slack</span>
                  <span className="text-white bg-zinc-800 px-2 py-0.5 rounded">Zoom</span>
                  <span className="text-[#CCFF00]">&rarr;</span>
                  <span className="text-zinc-200">RAG NEURAL GRAPH</span>
                  <span className="text-[#CCFF00]">&rarr;</span>
                  <span className="text-[#CCFF00] bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-2 py-0.5 rounded">
                    HITL-Approved Execution
                  </span>
                </div>
                <div className="text-zinc-400 font-mono text-[11px]">
                  Signal normalization latency: <span className="text-[#CCFF00] font-semibold">14ms</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

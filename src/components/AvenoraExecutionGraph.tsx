import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  FileText,
  Eye,
  Shield,
  Clock,
  ArrowRight,
  X,
  Database,
  MessageSquare,
  GitBranch,
  AlertTriangle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ViewMode = 'statusQuo' | 'avenora';
type ExecutionStatus = 'pending' | 'approved' | 'held' | 'executing' | 'completed';

interface EvidenceSource {
  system: string;
  type: string;
  excerpt: string;
  confidence: number;
  timestamp: string;
}

export const AvenoraExecutionGraph: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('avenora');
  const [executionStatus, setExecutionStatus] = useState<ExecutionStatus>('pending');
  const [showEvidence, setShowEvidence] = useState(false);
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  const handleApprove = () => {
    setExecutionStatus('approved');
    setTimeout(() => setExecutionStatus('executing'), 800);
    setTimeout(() => setExecutionStatus('completed'), 2200);
  };

  const handleHold = () => {
    setExecutionStatus('held');
  };

  const handleReset = () => {
    setExecutionStatus('pending');
    setShowEvidence(false);
    setSelectedNode(null);
  };

  const graphNodes = [
    {
      id: 1,
      label: 'SAP S/4HANA',
      type: 'source',
      icon: <Database className="w-3.5 h-3.5" />,
      detail: 'ERP financial module detected budget reallocation for Q4 infrastructure.',
    },
    {
      id: 2,
      label: 'Jira Cloud',
      type: 'source',
      icon: <GitBranch className="w-3.5 h-3.5" />,
      detail: 'Sprint 14 velocity dropped 23% — 3 blocked tickets in security review queue.',
    },
    {
      id: 3,
      label: 'Slack Transcript',
      type: 'source',
      icon: <MessageSquare className="w-3.5 h-3.5" />,
      detail: 'VP Eng mentioned "database migration timeline is at risk" in #eng-leadership.',
    },
    {
      id: 4,
      label: 'Avenora Neural Graph',
      type: 'processor',
      icon: <Shield className="w-3.5 h-3.5" />,
      detail: 'Correlated 3 data sources → identified critical path dependency between DB migration and Q4 compliance deadline.',
    },
    {
      id: 5,
      label: 'Recommended Action',
      type: 'action',
      icon: <ArrowRight className="w-3.5 h-3.5" />,
      detail: 'Re-prioritize security review tickets, reassign 2 senior engineers, notify SteerCo of adjusted timeline.',
    },
  ];

  const evidenceSources: EvidenceSource[] = [
    {
      system: 'SAP S/4HANA',
      type: 'Financial Event',
      excerpt: 'Budget line item BL-4892: Infrastructure allocation increased by $180K for Q4 database migration support. Approved by CFO on Oct 15.',
      confidence: 0.96,
      timestamp: '2026-10-15 09:42 UTC',
    },
    {
      system: 'Jira Cloud',
      type: 'Sprint Telemetry',
      excerpt: 'Sprint 14 — 3 tickets blocked: SEC-412 (IAM audit), SEC-415 (encryption key rotation), SEC-418 (penetration test sign-off). Average review queue: 6.2 days.',
      confidence: 0.99,
      timestamp: '2026-10-28 14:18 UTC',
    },
    {
      system: 'Slack Enterprise',
      type: 'Conversation Signal',
      excerpt: '"The database migration timeline is at risk if we don\'t get security sign-off by end of sprint. Can we escalate?" — VP Engineering, #eng-leadership',
      confidence: 0.91,
      timestamp: '2026-10-29 11:05 UTC',
    },
  ];

  const statusQuoFlow = [
    { step: 'Week 1', label: 'Risk undetected', detail: 'Velocity drop visible only in Jira dashboard. No cross-reference with SAP budget change or Slack conversations.', status: 'danger' as const },
    { step: 'Week 2', label: 'Manual escalation', detail: 'PM discovers blocked tickets during standup. Spends 4 hours tracing root cause across 3 separate tools.', status: 'danger' as const },
    { step: 'Week 3', label: 'SteerCo firefight', detail: 'Leadership discovers delay during steering committee. Emergency resource swap initiated. $220K unplanned cost.', status: 'danger' as const },
  ];

  const getStatusColor = () => {
    switch (executionStatus) {
      case 'pending': return 'text-zinc-400';
      case 'approved': return 'text-blue-400';
      case 'held': return 'text-amber-400';
      case 'executing': return 'text-[#CCFF00]';
      case 'completed': return 'text-[#CCFF00]';
      default: return 'text-zinc-400';
    }
  };

  const getStatusLabel = () => {
    switch (executionStatus) {
      case 'pending': return 'Awaiting Review';
      case 'approved': return 'Approved — Queuing…';
      case 'held': return 'Held for Review';
      case 'executing': return 'Executing Actions…';
      case 'completed': return 'Execution Complete ✓';
      default: return 'Awaiting Review';
    }
  };

  return (
    <section id="execution-graph" className="py-24 px-6 md:px-12 bg-black text-white border-t border-white/10 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(204,255,0,0.08) 0%, rgba(0,0,0,0) 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#CCFF00]/30 bg-zinc-900 text-[#CCFF00] text-xs font-semibold uppercase tracking-widest mb-4">
            <span>FLAGSHIP PRODUCT DEMONSTRATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            The Avenora <span className="text-[#CCFF00]">Execution Graph</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Watch how Avenora synthesizes cross-system intelligence into actionable decisions with human-in-the-loop governance.
          </p>
          <div className="mt-3 text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
            Simulated demonstration · No live enterprise connections
          </div>
        </motion.div>

        {/* View Mode Toggle */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1 bg-zinc-950 rounded-full border border-white/10">
            <button
              onClick={() => { setViewMode('statusQuo'); handleReset(); }}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'statusQuo'
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Legacy Status Quo
            </button>
            <button
              onClick={() => { setViewMode('avenora'); handleReset(); }}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'avenora'
                  ? 'bg-[#CCFF00] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              With Avenora AI
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'statusQuo' ? (
            <motion.div
              key="statusQuo"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {/* Status Quo Timeline */}
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-red-500/20">
                <div className="flex items-center space-x-2 mb-6">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-red-400">
                    Legacy Execution Failure Timeline
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {statusQuoFlow.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.15, duration: 0.4 }}
                      className="p-5 rounded-2xl bg-black border border-red-500/30 relative"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider">
                          {item.step}
                        </span>
                        <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                      </div>
                      <h4 className="text-sm font-bold text-red-200 mb-2">{item.label}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">{item.detail}</p>
                      {idx < statusQuoFlow.length - 1 && (
                        <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-red-500/60 text-lg">→</div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-red-950/30 border border-red-500/20 text-center">
                  <div className="text-xs font-mono text-red-400 mb-1">TOTAL IMPACT</div>
                  <div className="text-lg font-bold text-red-300">3 weeks of delay · $220K unplanned cost · Team burnout</div>
                  <div className="text-xs text-zinc-500 mt-1">Root cause: fragmented data, no cross-system correlation, reactive discovery</div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="avenora"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Cross-System Information Flow */}
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
                      Cross-System Information Flow
                    </span>
                  </div>
                  <div className={`flex items-center space-x-2 text-xs font-mono ${getStatusColor()}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    <span>{getStatusLabel()}</span>
                  </div>
                </div>

                {/* Graph Nodes */}
                <div className="flex flex-col lg:flex-row items-stretch gap-3">
                  {graphNodes.map((node, idx) => (
                    <React.Fragment key={node.id}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                        className={`flex-1 p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                          selectedNode === node.id
                            ? 'bg-zinc-900 border-[#CCFF00]/60 shadow-[0_0_20px_rgba(204,255,0,0.1)]'
                            : node.type === 'processor'
                            ? 'bg-zinc-900 border-[#CCFF00]/30'
                            : node.type === 'action'
                            ? 'bg-zinc-900/50 border-white/15'
                            : 'bg-black border-white/10 hover:border-white/25'
                        }`}
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                            node.type === 'processor'
                              ? 'bg-[#CCFF00] text-black'
                              : node.type === 'action'
                              ? 'bg-zinc-800 text-[#CCFF00]'
                              : 'bg-zinc-800 text-zinc-400'
                          }`}>
                            {node.icon}
                          </div>
                          <span className={`text-xs font-semibold ${
                            node.type === 'processor' ? 'text-[#CCFF00]' : 'text-zinc-300'
                          }`}>
                            {node.label}
                          </span>
                        </div>

                        <AnimatePresence>
                          {selectedNode === node.id && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-[11px] text-zinc-400 leading-relaxed mt-1"
                            >
                              {node.detail}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.button>

                      {idx < graphNodes.length - 1 && (
                        <div className="hidden lg:flex items-center text-[#CCFF00]/50 text-sm shrink-0">→</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* RAG Evidence Inspector + HITL Controls */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Evidence Inspector */}
                <div className="lg:col-span-3 p-6 rounded-3xl bg-zinc-950 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-[#CCFF00]" />
                      <span className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
                        Source Evidence Inspector
                      </span>
                    </div>
                    <button
                      onClick={() => setShowEvidence(!showEvidence)}
                      className="text-[11px] font-mono text-[#CCFF00] hover:text-white transition-colors cursor-pointer underline underline-offset-2"
                    >
                      {showEvidence ? 'Collapse Sources' : 'Inspect RAG Citations →'}
                    </button>
                  </div>

                  <AnimatePresence>
                    {showEvidence ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3 overflow-hidden"
                      >
                        {evidenceSources.map((source, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-4 rounded-xl bg-black border border-white/10"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <FileText className="w-3.5 h-3.5 text-[#CCFF00]" />
                                <span className="text-xs font-semibold text-white">{source.system}</span>
                                <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">{source.type}</span>
                              </div>
                              <div className="flex items-center space-x-1.5">
                                <span className="text-[10px] font-mono text-zinc-500">Confidence:</span>
                                <span className="text-[10px] font-mono text-[#CCFF00] font-bold">{(source.confidence * 100).toFixed(0)}%</span>
                              </div>
                            </div>
                            <p className="text-xs text-zinc-300 leading-relaxed italic">"{source.excerpt}"</p>
                            <div className="mt-2 text-[10px] font-mono text-zinc-500">
                              Retrieved: {source.timestamp}
                            </div>
                          </motion.div>
                        ))}

                        <div className="p-3 rounded-xl bg-zinc-900/50 border border-white/5 text-[11px] text-zinc-500 font-mono text-center">
                          3 source documents retrieved · RAG pipeline latency: 42ms · All citations verified against source systems
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-4 rounded-xl bg-black border border-white/10 text-center"
                      >
                        <p className="text-xs text-zinc-400">
                          Avenora synthesized intelligence from <strong className="text-white">3 enterprise systems</strong> to identify a critical path dependency.
                          Click "Inspect RAG Citations" to view the evidence trail.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* HITL Approval Panel */}
                <div className="lg:col-span-2 p-6 rounded-3xl bg-zinc-950 border border-white/10">
                  <div className="flex items-center space-x-2 mb-4">
                    <Shield className="w-4 h-4 text-[#CCFF00]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
                      Human-in-the-Loop
                    </span>
                  </div>

                  {/* Recommended Action Summary */}
                  <div className="p-4 rounded-xl bg-black border border-white/10 mb-4">
                    <div className="text-[11px] font-mono text-zinc-500 mb-2">RECOMMENDED ACTION</div>
                    <p className="text-sm text-white font-semibold mb-2">
                      Re-prioritize security review queue
                    </p>
                    <ul className="space-y-1.5 text-xs text-zinc-400">
                      <li className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#CCFF00] shrink-0 mt-0.5" />
                        <span>Reassign SEC-412, SEC-415 to Senior Security Engineers</span>
                      </li>
                      <li className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#CCFF00] shrink-0 mt-0.5" />
                        <span>Notify SteerCo of adjusted timeline (+2 days, not +21)</span>
                      </li>
                      <li className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#CCFF00] shrink-0 mt-0.5" />
                        <span>Create Slack briefing in #eng-leadership</span>
                      </li>
                    </ul>
                  </div>

                  {/* Execution Status */}
                  <div className="p-3 rounded-xl bg-zinc-900/50 border border-white/5 mb-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-500">EXECUTION STATUS</span>
                      <span className={`font-semibold ${getStatusColor()}`}>{getStatusLabel()}</span>
                    </div>
                    {executionStatus === 'executing' && (
                      <div className="mt-2 w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                        <motion.div
                          className="bg-[#CCFF00] h-full rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1.4, ease: 'easeInOut' }}
                        />
                      </div>
                    )}
                    {executionStatus === 'completed' && (
                      <div className="mt-2 text-xs text-[#CCFF00] font-mono">
                        ✓ 3 Jira tickets reassigned · 1 Slack briefing posted · SteerCo notified
                      </div>
                    )}
                    {executionStatus === 'held' && (
                      <div className="mt-2 text-xs text-amber-400 font-mono flex items-center space-x-1.5">
                        <Clock className="w-3 h-3" />
                        <span>Action held — awaiting manual review by authorized approver</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    {executionStatus === 'pending' && (
                      <>
                        <button
                          onClick={handleApprove}
                          className="w-full py-3 rounded-xl text-sm font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center space-x-2"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Approve &amp; Execute</span>
                        </button>
                        <button
                          onClick={handleHold}
                          className="w-full py-3 rounded-xl text-sm font-semibold bg-zinc-900 border border-white/15 text-white hover:bg-zinc-800 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center space-x-2"
                        >
                          <Clock className="w-4 h-4" />
                          <span>Hold for Review</span>
                        </button>
                      </>
                    )}
                    {(executionStatus === 'completed' || executionStatus === 'held') && (
                      <button
                        onClick={handleReset}
                        className="w-full py-3 rounded-xl text-sm font-semibold bg-zinc-900 border border-white/15 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer flex items-center justify-center space-x-2"
                      >
                        <X className="w-4 h-4" />
                        <span>Reset Demo</span>
                      </button>
                    )}
                    {(executionStatus === 'approved' || executionStatus === 'executing') && (
                      <div className="text-center text-xs text-zinc-500 font-mono py-3">
                        Processing actions…
                      </div>
                    )}
                  </div>

                  <div className="mt-3 text-[10px] text-zinc-600 font-mono text-center">
                    Simulated HITL workflow · No live system actions
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

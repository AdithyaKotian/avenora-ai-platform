import React, { useState, useEffect } from 'react';
import {
  Mic,
  AlertOctagon,
  Users2,
  Workflow,
  ArrowUpRight,
  CheckCircle2,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BentoGrid: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [resBalance, setResBalance] = useState(82);
  const [meetingTranscribed, setMeetingTranscribed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedJob !== null) {
        setSelectedJob(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedJob]);

  const jobDetails = [
    {
      id: 1,
      title: 'Project Intelligence',
      subtitle: 'Multi-Vector Portfolio Visibility',
      description:
        'Continuously compiles telemetry from Git commits, Jira sprint boards, and SAP project milestones. Predicts delivery variances 3 sprints before they escalate into steering committee crises.',
      features: [
        'Automated delivery variance forecasting with traceable RAG source evidence',
        'Cross-system dependency mapping between frontend, backend, and ERP components',
        'Critical-path bottleneck alerts delivered straight to Slack and Microsoft Teams',
      ],
      metric: '3 sprints early warning on critical path blockers',
    },
    {
      id: 2,
      title: 'Meeting-to-Actions',
      subtitle: 'Verbal Commitments to Tracked Initiatives',
      description:
        'Ingests Zoom, Microsoft Teams, and Google Meet discussions. Automatically extracts key decisions, assigns verified owners, and drafts structured Jira tickets for human approval.',
      features: [
        'Deep contextual understanding of multi-party technical discussions',
        '1-click ticket generation with pre-populated acceptance criteria and transcript citations',
        'Bidirectional sync with enterprise calendars and project backlogs',
      ],
      metric: '100% decision capture with zero manual meeting note typing',
    },
    {
      id: 3,
      title: 'Risk & Issues',
      subtitle: 'Proactive Operational Vulnerability Detection',
      description:
        'Continuously parses operational friction signals, PR review lag, API dependency shifts, and team capacity to highlight enterprise vulnerabilities before deliverables slip.',
      features: [
        'Multi-factor vulnerability scoring across code, resource, and infrastructure vectors',
        'Automated escalation routing to accountable department leads',
        'Pre-emptive scenario modeling for alternative resource allocation',
      ],
      metric: 'Real-time vulnerability interception before milestone slippage',
    },
    {
      id: 4,
      title: 'Resource Planning',
      subtitle: 'Team Bandwidth & Strategic Priority Harmonization',
      description:
        'Balances team workload with corporate strategic weight. Automatically models team velocity against OKR targets to prevent burnout and misallocation.',
      features: [
        'Capacity saturation detection before sprint velocity drops',
        'Dynamic headcount reallocation proposals based on strategic OKR weight',
        'Real-time capacity forecasting across concurrent project streams',
      ],
      metric: 'Balanced engineering utilization aligned to top OKRs',
    },
    {
      id: 5,
      title: 'Workflow Automation',
      subtitle: 'Human-Gated Cross-Functional Execution Agents',
      description:
        'Triggers cross-functional action routines via governed execution agents. Closes the gap between event detection and system synchronization with full auditability.',
      features: [
        'Human-in-the-loop (HITL) approval gates for production ERP and backlog writes',
        'Automated status reconciliation across GitHub, Jira, SAP, and Slack',
        'Full immutable SHA-256 audit log for compliance and executive governance',
      ],
      metric: 'Zero manual status re-entry across connected systems',
    },
  ];

  return (
    <section id="capabilities" className="py-24 px-6 md:px-12 bg-zinc-950 text-white border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#CCFF00]/30 bg-zinc-900 text-[#CCFF00] text-xs font-semibold uppercase tracking-widest mb-4">
            <span>CORE PRODUCT CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            5 High-Frequency Jobs. <span className="text-[#CCFF00]">One Centralized Engine.</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Purpose-built intelligence for the operational workloads that consume enterprise leaders, project managers, and engineering teams.
          </p>
        </motion.div>

        {/* Responsive Bento Grid: 1 col mobile, 2 cols tablet (md), 12 cols desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: Project Intelligence (Wide Card) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="md:col-span-2 lg:col-span-7 p-8 rounded-3xl bg-black border border-white/10 relative overflow-hidden group hover:border-[#CCFF00]/50 transition-colors flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#CCFF00]/5 blur-3xl pointer-events-none rounded-full" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#CCFF00] text-xs font-mono uppercase tracking-wider">
                  01 / Multi-Vector Visibility
                </span>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-full border border-white/5">
                  Predictive Engine
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                Project Intelligence
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl mb-6 leading-relaxed">
                Multi-vector portfolio visibility. Predict delivery delays 3 sprints before they compound into missed customer milestones.
              </p>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/5 mb-6">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span>ENTERPRISE PORTFOLIO HEALTH</span>
                  <span className="text-[#CCFF00] font-semibold">96.4% Optimum</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#CCFF00] h-full rounded-full w-[96.4%] shadow-[0_0_10px_#CCFF00]" />
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/5 text-[11px] font-mono">
                  <div>
                    <span className="text-zinc-500 block">Active Epics</span>
                    <span className="text-white font-semibold">48 Verified</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Slippage Risk</span>
                    <span className="text-[#CCFF00] font-semibold">Zero Critical</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Variance Target</span>
                    <span className="text-white font-semibold">&lt; 0.4 days</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-center space-x-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>Automated delivery variance forecasting across all active repositories</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>Context-driven dependency mapping linking backend, ERP, and API releases</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Delivery health &amp; telemetry</span>
              <button
                type="button"
                onClick={() => setSelectedJob(1)}
                className="text-xs font-semibold text-[#CCFF00] hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>Deep Dive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Meeting-to-Actions */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="md:col-span-1 lg:col-span-5 p-8 rounded-3xl bg-black border border-white/10 group hover:border-[#CCFF00]/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#CCFF00] text-xs font-mono uppercase tracking-wider">
                  02 / Alignment
                </span>
                <Mic className="w-4 h-4 text-zinc-400 group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                Meeting-to-Actions
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                Transforms verbal commitments into tracked initiatives. Automatically capture decisions, tag accountable owners, and sync downstream task managers without manual meeting notes.
              </p>

              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/5 mb-4 text-xs font-mono">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span className="text-[11px]">ZOOM TRANSCRIPT #402</span>
                  <button
                    type="button"
                    onClick={() => setMeetingTranscribed(!meetingTranscribed)}
                    className="text-[11px] text-[#CCFF00] underline cursor-pointer"
                  >
                    {meetingTranscribed ? 'Reset Transcript' : 'Simulate Extraction'}
                  </button>
                </div>
                {meetingTranscribed ? (
                  <div className="space-y-1.5 text-zinc-300">
                    <div className="text-[#CCFF00] font-semibold">✓ 3 Jira tickets drafted (RAG linked)</div>
                    <div className="text-white text-[11px]">Owner: David Chen (Lead Arch)</div>
                    <div className="text-zinc-400 text-[10px]">SLA Due: Friday 5:00 PM EST</div>
                  </div>
                ) : (
                  <div className="text-zinc-400 italic text-xs leading-relaxed">
                    &ldquo;Let&apos;s ensure the GDPR deletion pipeline is validated by sprint end and linked to Epic 402...&rdquo;
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Zoom · Teams · Meet</span>
              <button
                type="button"
                onClick={() => setSelectedJob(2)}
                className="text-xs font-semibold text-[#CCFF00] hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 3: Risk & Issues */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="md:col-span-1 lg:col-span-4 p-8 rounded-3xl bg-black border border-white/10 group hover:border-[#CCFF00]/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#CCFF00] text-xs font-mono uppercase tracking-wider">
                  03 / Mitigation
                </span>
                <AlertOctagon className="w-4 h-4 text-zinc-400 group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Risk &amp; Issues</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Proactive vulnerability detection. AI monitors early-warning operational friction, shifting issues from firefighting to pre-emptive mitigation.
              </p>

              <div className="p-3.5 rounded-xl bg-[#CCFF00]/5 border border-[#CCFF00]/20 text-xs font-mono mb-4">
                <div className="text-[#CCFF00] font-semibold text-[11px] mb-1">
                  VULNERABILITY INTERCEPTED
                </div>
                <div className="text-zinc-300 text-xs font-sans leading-relaxed">
                  Third-party API rate limit risk flagged 14 days before payment cutover surge.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Multi-Vector Scoring</span>
              <button
                type="button"
                onClick={() => setSelectedJob(3)}
                className="text-xs font-semibold text-[#CCFF00] hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 4: Resource Planning */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="md:col-span-1 lg:col-span-4 p-8 rounded-3xl bg-black border border-white/10 group hover:border-[#CCFF00]/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#CCFF00] text-xs font-mono uppercase tracking-wider">
                  04 / Optimization
                </span>
                <Users2 className="w-4 h-4 text-zinc-400 group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Resource Planning</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Balance team bandwidth with precision. Map team velocity to strategic priority weights, auto-rebalancing workloads to prevent burnout.
              </p>

              <div className="p-3.5 rounded-xl bg-zinc-900 border border-white/5 mb-4 text-xs font-mono">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-zinc-400 text-[11px]">BANDWIDTH UTILIZATION</span>
                  <span className="text-[#CCFF00] font-bold">{resBalance}%</span>
                </div>
                <input
                  type="range"
                  aria-label="Simulate team bandwidth utilization"
                  min="60"
                  max="100"
                  value={resBalance}
                  onChange={(e) => setResBalance(Number(e.target.value))}
                  className="w-full accent-[#CCFF00] cursor-pointer"
                />
                <div className="text-[10px] text-zinc-400 mt-1 flex justify-between">
                  <span>Optimal (75–85%)</span>
                  <span>Saturated (95%+)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Capacity vs. OKRs</span>
              <button
                type="button"
                onClick={() => setSelectedJob(4)}
                className="text-xs font-semibold text-[#CCFF00] hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 5: Workflow Automation */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="md:col-span-1 lg:col-span-4 p-8 rounded-3xl bg-black border border-white/10 group hover:border-[#CCFF00]/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#CCFF00] text-xs font-mono uppercase tracking-wider">
                  05 / Execution
                </span>
                <Workflow className="w-4 h-4 text-zinc-400 group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Workflow Automation</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Trigger cross-functional action workflows via governed execution agents. Close the loop from event detection to system updates with zero manual re-entry.
              </p>

              <div className="p-3.5 rounded-xl bg-zinc-900 border border-white/5 mb-4 text-xs font-mono">
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span>EXECUTION AGENT #82</span>
                  <span className="text-[#CCFF00]">HITL VERIFIED</span>
                </div>
                <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                  Synced GitHub PR #1284 &rarr; Jira #3412 resolved &rarr; SAP milestone updated.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Governed Workflows</span>
              <button
                type="button"
                onClick={() => setSelectedJob(5)}
                className="text-xs font-semibold text-[#CCFF00] hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Capability Deep Dive Modal with Escape & Backdrop Close */}
        <AnimatePresence>
          {selectedJob !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Capability Deep Dive"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl bg-zinc-950 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
              >
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  aria-label="Close capability details"
                  className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2 rounded-full bg-zinc-900 border border-white/10 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {(() => {
                  const job = jobDetails.find((j) => j.id === selectedJob)!;
                  return (
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
                        Capability Deep Dive · 0{job.id}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-2">
                        {job.title}
                      </h3>
                      <div className="text-xs text-zinc-400 font-mono mb-4">{job.subtitle}</div>

                      <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                        {job.description}
                      </p>

                      <div className="mb-6">
                        <span className="text-xs font-mono uppercase text-zinc-400 block mb-3">
                          Key Capabilities &amp; Architectural Invariants
                        </span>
                        <ul className="space-y-2.5">
                          {job.features.map((feat, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 text-xs sm:text-sm text-zinc-200"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-between mb-6">
                        <span className="text-xs font-mono text-zinc-400">Operational Target:</span>
                        <span className="text-xs sm:text-sm font-bold text-[#CCFF00]">
                          {job.metric}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedJob(null)}
                        className="w-full py-3 rounded-full text-sm font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600] transition-colors cursor-pointer"
                      >
                        Close Deep Dive
                      </button>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

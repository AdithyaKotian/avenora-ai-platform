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

  // Close modal on Escape key + body scroll lock
  useEffect(() => {
    if (selectedJob === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedJob(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedJob]);

  const jobDetails = [
    {
      id: 1,
      title: '01 Project Intelligence',
      subtitle: 'Multi-Vector Portfolio Visibility',
      description:
        'Continuously compiles telemetry from Git commits, Jira sprint boards, and SAP project milestones. Predicts delivery variances 3 sprints before they escalate into steering committee crises.',
      features: [
        'Automated delivery variance forecasting with 94%+ historical accuracy',
        'Cross-system dependency mapping between frontend, backend, and ERP components',
        'Critical-path bottleneck alerts delivered straight to Slack and Teams',
      ],
      metric: '3 sprints early warning on critical path blockers',
    },
    {
      id: 2,
      title: '02 Meeting-to-Actions',
      subtitle: 'Verbal Commitments to Tracked Initiatives',
      description:
        'Listens into Zoom, Microsoft Teams, and Google Meet discussions. Automatically extracts key decisions, assigns verified owners, and generates structured Jira tickets and follow-up agendas.',
      features: [
        'Deep contextual understanding of multi-party technical discussions',
        'Zero-click ticket generation with pre-populated acceptance criteria',
        'Bidirectional sync with enterprise calendars and project backlogs',
      ],
      metric: '100% decision capture with zero manual meeting note typing',
    },
    {
      id: 3,
      title: '03 Risk & Issues',
      subtitle: 'Proactive Operational Vulnerability Detection',
      description:
        'Continuously parses operational friction signals, PR review lag, API dependency shifts, and team turnover to highlight enterprise vulnerabilities before deliverables slip.',
      features: [
        'Multi-factor vulnerability scoring across code, human, and infra vectors',
        'Automated escalation routing to accountable department leads',
        'Pre-emptive scenario planning for alternative resource allocation',
      ],
      metric: '4.8x faster issue resolution compared to manual retrospectives',
    },
    {
      id: 4,
      title: '04 Resource Planning',
      subtitle: 'Team Bandwidth & Strategic Priority Harmonization',
      description:
        'Balances team workload with corporate strategic weight. Automatically models team velocity against OKR targets to prevent burnout and deadweight misallocation.',
      features: [
        'Burnout risk detection before team velocity drops',
        'Dynamic headcount reallocation suggestions based on strategic priority',
        'Real-time capacity forecasting across 50+ concurrent project streams',
      ],
      metric: '22% increase in billable utilization and engineering focus',
    },
    {
      id: 5,
      title: '05 Workflow Automation',
      subtitle: 'Closed-Loop Cross-Functional Execution Agents',
      description:
        'Triggers intelligent cross-functional action routines via autonomous execution agents. Closes the gap between event detection and system synchronization without human intervention.',
      features: [
        'Autonomous PR creation and test pipeline triggering for system updates',
        'Automated vendor SLA verification and invoice approval routing',
        'Full immutable audit log for compliance and executive governance',
      ],
      metric: 'Zero human data entry across 85% of recurring handoff tasks',
    },
  ];

  return (
    <section id="capabilities" className="py-24 px-6 md:px-12 bg-black text-white relative">
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
            <span>CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            5 High-Frequency Jobs. One Centralized Engine.
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Purpose-built automation for the operational workloads that consume enterprise teams.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Project Intelligence (Wide Card) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-2 p-8 rounded-3xl bg-zinc-950 border border-white/10 relative overflow-hidden group hover:border-[#CCFF00]/50 transition-colors flex flex-col justify-between"
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
                01 Project Intelligence
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
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-8 rounded-3xl bg-zinc-950 border border-white/10 group hover:border-[#CCFF00]/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#CCFF00] text-xs font-mono uppercase tracking-wider">
                  02 / Alignment
                </span>
                <Mic className="w-4 h-4 text-zinc-400 group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">02 Meeting-to-Actions</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Transforms verbal commitments into tracked initiatives. Automatically capture decisions, tag accountable owners, and sync downstream task managers without manual meeting notes.
              </p>

              <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 mb-4 text-xs font-mono">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span className="text-[11px]">ZOOM TRANSCRIPT #402</span>
                  <button
                    onClick={() => setMeetingTranscribed(!meetingTranscribed)}
                    className="text-[10px] text-[#CCFF00] underline cursor-pointer"
                  >
                    {meetingTranscribed ? 'Reset' : 'Simulate Parsing'}
                  </button>
                </div>
                {meetingTranscribed ? (
                  <div className="space-y-1.5 text-zinc-300">
                    <div className="text-[#CCFF00]">✓ 3 Jira tickets created</div>
                    <div className="text-white text-[11px]">Owner: David Chen (Lead Arch)</div>
                    <div className="text-zinc-500 text-[10px]">Due: Friday 5:00 PM EST</div>
                  </div>
                ) : (
                  <div className="text-zinc-500 italic text-[11px]">
                    "Let's ensure the GDPR deletion pipeline is validated by sprint end..."
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Zoom · Teams · Meet</span>
              <button
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
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-8 rounded-3xl bg-zinc-950 border border-white/10 group hover:border-[#CCFF00]/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#CCFF00] text-xs font-mono uppercase tracking-wider">
                  03 / Mitigation
                </span>
                <AlertOctagon className="w-4 h-4 text-zinc-400 group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">03 Risk &amp; Issues</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Proactive vulnerability detection. AI monitors early-warning operational friction, shifting issues from firefighting to pre-emptive mitigation.
              </p>

              <div className="p-3 rounded-xl bg-[#CCFF00]/5 border border-[#CCFF00]/20 text-xs font-mono mb-4">
                <div className="text-[#CCFF00] font-semibold text-[11px] mb-1">
                  VULNERABILITY MITIGATED
                </div>
                <div className="text-zinc-300 text-xs font-sans">
                  Third-party API rate limit risk intercepted before payment surge.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Vector Scoring</span>
              <button
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
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-8 rounded-3xl bg-zinc-950 border border-white/10 group hover:border-[#CCFF00]/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#CCFF00] text-xs font-mono uppercase tracking-wider">
                  04 / Optimization
                </span>
                <Users2 className="w-4 h-4 text-zinc-400 group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">04 Resource Planning</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Balance team bandwidth with precision. Map team velocity to strategic priority weights, auto-rebalancing workloads to prevent burnout.
              </p>

              <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 mb-4 text-xs font-mono">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-zinc-400 text-[11px]">BANDWIDTH UTILIZATION</span>
                  <span className="text-[#CCFF00] font-bold">{resBalance}%</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="100"
                  value={resBalance}
                  onChange={(e) => setResBalance(Number(e.target.value))}
                  className="w-full accent-[#CCFF00] cursor-pointer"
                />
                <div className="text-[10px] text-zinc-500 mt-1 flex justify-between">
                  <span>Balanced (75%)</span>
                  <span>Overloaded (95%+)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Capacity vs. Delivery</span>
              <button
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
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-8 rounded-3xl bg-zinc-950 border border-white/10 group hover:border-[#CCFF00]/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#CCFF00] text-xs font-mono uppercase tracking-wider">
                  05 / Execution
                </span>
                <Workflow className="w-4 h-4 text-zinc-400 group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">05 Workflow Automation</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Trigger cross-functional action workflows via autonomous execution agents. Close the loop from event detection to system updates with zero human data entry.
              </p>

              <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 mb-4 text-xs font-mono">
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span>AUTONOMOUS AGENT #82</span>
                  <span className="text-[#CCFF00]">ACTIVE</span>
                </div>
                <p className="text-zinc-300 font-sans text-xs">
                  Auto-synced status from GitHub PR merged → Jira #3412 marked resolved → Slack SteerCo channel notified.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Zero-Handoff Workflows</span>
              <button
                onClick={() => setSelectedJob(5)}
                className="text-xs font-semibold text-[#CCFF00] hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Capability Deep Dive Modal with AnimatePresence */}
        <AnimatePresence>
          {selectedJob !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 modal-backdrop"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`capability-title-${selectedJob}`}
              onClick={(e) => { if (e.target === e.currentTarget) setSelectedJob(null); }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-2xl bg-zinc-950 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
              >
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2 rounded-full bg-zinc-900 border border-white/10 cursor-pointer transition-colors"
                  aria-label="Close capability deep dive"
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
                      <h3 id={`capability-title-${job.id}`} className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-2">
                        {job.title}
                      </h3>
                      <div className="text-xs text-zinc-400 font-mono mb-4">{job.subtitle}</div>

                      <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                        {job.description}
                      </p>

                      <div className="mb-6">
                        <span className="text-xs font-mono uppercase text-zinc-400 block mb-3">
                          Key Capabilities &amp; Invariants
                        </span>
                        <ul className="space-y-2.5">
                          {job.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-zinc-200">
                              <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-between mb-6">
                        <span className="text-xs font-mono text-zinc-400">Enterprise Metric:</span>
                        <span className="text-xs sm:text-sm font-bold text-[#CCFF00]">
                          {job.metric}
                        </span>
                      </div>

                      <button
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

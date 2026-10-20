import React, { useState } from 'react';
import { Database, BrainCircuit, Rocket, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ExecutionLoop: React.FC = () => {
  const [activeStage, setActiveStage] = useState<1 | 2 | 3>(2);

  const stageDetails = {
    1: {
      tag: 'Stage 01 · Signal Ingestion',
      title: 'Unified Signal Fabric',
      description:
        'Seamlessly aggregates data from your enterprise ERPs, task management systems, meeting transcripts, and git repositories without disrupting existing team tools.',
      subtext: 'Zero adoption friction: teams keep working in Jira, Slack, Teams, and Salesforce.',
      telemetry: [
        { label: 'Connectors Active', value: '42+ Enterprise APIs' },
        { label: 'Event Ingestion Rate', value: '18,500 events/sec' },
        { label: 'Context Normalization', value: 'JSON-LD / Ontological Graph' },
      ],
      samplePayload: `// Ingest Stream Sample
{
  "event": "steerco.transcript.completed",
  "source": "zoom.enterprise.transcripts",
  "decision": "Mandate APAC SOC2 readiness by Q4",
  "context_entities": ["Security Ops", "AWS Infra", "Compliance Team"],
  "ingest_latency_ms": 11
}`,
    },
    2: {
      tag: 'Stage 02 · Reasoning & Synthesis',
      title: 'Contextual Intelligence Engine',
      description:
        'Applies context-aware LLMs, knowledge graphs, and predictive agents to synthesize cross-functional dependencies and uncover hidden timeline risks.',
      subtext: 'Translates unstructured conversations and ticket status into structural multi-vector graphs.',
      telemetry: [
        { label: 'Dependency Graph Nodes', value: '280,000+ linked entities' },
        { label: 'Bottleneck Detection', value: '3 sprints advance warning' },
        { label: 'Inference Precision', value: '99.4% F1 Entity Linking' },
      ],
      samplePayload: `// Contextual Intelligence Graph
{
  "initiative": "APAC SOC2 Compliance",
  "critical_path_bottleneck": "IAM audit lagging by 6 days",
  "impacted_milestone": "Customer Contract Signings",
  "predictive_variance": "-3.8 days without re-routing",
  "confidence_score": 0.942
}`,
    },
    3: {
      tag: 'Stage 03 · Forward Execution',
      title: 'Autonomous Forward Execution',
      description:
        'Recommends, routes, and automates high-impact actions. Continuously learns from outcome velocity to fine-tune future delivery cycles.',
      subtext: 'Closes the loop from intent to verification with automated audit trails and feedback cycles.',
      telemetry: [
        { label: 'Automated Action Handlers', value: 'Bidirectional sync' },
        { label: 'Admin Overhead Saved', value: '12+ hrs/week per PM' },
        { label: 'Audit Trail Retention', value: '100% Immutable log' },
      ],
      samplePayload: `// Forward Execution Dispatch
{
  "action": "orchestration.autonomous_rebalance",
  "dispatches": [
    { "target": "jira.jira_v2", "action": "reassign_subtasks", "count": 4 },
    { "target": "slack.security_leads", "action": "post_decision_digest" },
    { "target": "sap.project_portfolio", "action": "sync_forecast" }
  ],
  "status": "closed_loop_verified"
}`,
    },
  };

  return (
    <section id="loop" className="py-24 px-6 md:px-12 bg-zinc-950 text-white border-t border-white/10 relative">
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
            <span>THE SOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            The Avenora <span className="text-[#CCFF00]">Execution Loop</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
            From raw operational signals to closed-loop verifiable business outcomes.
          </p>
        </motion.div>

        {/* 3 Step Cards with staggered entrance & subtle hover elevation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Ingest */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onClick={() => setActiveStage(1)}
            className={`p-8 rounded-3xl cursor-pointer transition-colors flex flex-col justify-between ${
              activeStage === 1
                ? 'bg-zinc-900 border-2 border-white/40 shadow-xl'
                : 'bg-black border border-white/10 hover:border-white/30'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest font-mono text-zinc-400">
                  Stage 01
                </span>
                <div className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3">1. Ingest</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Seamlessly aggregates data from your enterprise ERPs, task management systems, meeting transcripts, and git repositories without disrupting existing team tools.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-zinc-400 flex items-center justify-between">
              <span>Jira · SAP · Slack · Teams</span>
              <span className="text-[#CCFF00]">{activeStage === 1 ? 'Selected' : 'View Payload →'}</span>
            </div>
          </motion.div>

          {/* Card 2: Understand (Prominent Neon Green Border) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onClick={() => setActiveStage(2)}
            className="p-8 rounded-3xl cursor-pointer transition-all flex flex-col justify-between bg-zinc-900 border-2 border-[#CCFF00] shadow-[0_0_30px_rgba(204,255,0,0.18)]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest font-mono text-[#CCFF00]">
                  Stage 02 · Core AI
                </span>
                <div className="w-8 h-8 rounded-full bg-[#CCFF00] text-black font-bold flex items-center justify-center">
                  <BrainCircuit className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3 text-white">2. Understand</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Applies context-aware LLMs, knowledge graphs, and predictive agents to synthesize cross-functional dependencies and uncover hidden timeline risks.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-zinc-300 flex items-center justify-between">
              <span className="text-[#CCFF00]">Neural Knowledge Graph</span>
              <span className="text-[#CCFF00]">{activeStage === 2 ? 'Selected' : 'View Payload →'}</span>
            </div>
          </motion.div>

          {/* Card 3: Act & Learn */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onClick={() => setActiveStage(3)}
            className={`p-8 rounded-3xl cursor-pointer transition-colors flex flex-col justify-between ${
              activeStage === 3
                ? 'bg-zinc-900 border-2 border-white/40 shadow-xl'
                : 'bg-black border border-white/10 hover:border-white/30'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest font-mono text-zinc-400">
                  Stage 03
                </span>
                <div className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center">
                  <Rocket className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3">3. Act &amp; Learn</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Recommends, routes, and automates high-impact actions. Continuously learns from outcome velocity to fine-tune future delivery cycles.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-zinc-400 flex items-center justify-between">
              <span>Autonomous Forward Execution</span>
              <span className="text-[#CCFF00]">{activeStage === 3 ? 'Selected' : 'View Payload →'}</span>
            </div>
          </motion.div>
        </div>

        {/* Live Stage Inspection Terminal Box with smooth animated transition */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 p-6 sm:p-8 rounded-3xl bg-black border border-white/15"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="flex flex-col lg:flex-row lg:items-start justify-between gap-8"
            >
              {/* Left details */}
              <div className="flex-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
                  {stageDetails[activeStage].tag}
                </span>
                <h4 className="text-2xl font-bold text-white mt-1 mb-3">
                  {stageDetails[activeStage].title}
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  {stageDetails[activeStage].description}
                </p>
                <p className="text-xs text-zinc-500 font-medium mb-6">
                  {stageDetails[activeStage].subtext}
                </p>

                {/* Telemetry points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {stageDetails[activeStage].telemetry.map((t, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-950 border border-white/5">
                      <div className="text-[11px] text-zinc-400 font-mono">{t.label}</div>
                      <div className="text-sm font-bold text-white mt-0.5">{t.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side live payload inspector */}
              <div className="w-full lg:w-[420px] rounded-2xl bg-zinc-950 border border-white/10 p-4 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-zinc-400 text-[11px]">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-3.5 h-3.5 text-[#CCFF00]" />
                    <span>Telemetry Inspector</span>
                  </div>
                  <span className="text-[#CCFF00]">Live Stream</span>
                </div>
                <pre className="mt-3 text-zinc-300 overflow-x-auto leading-relaxed text-[11px]">
                  <code>{stageDetails[activeStage].samplePayload}</code>
                </pre>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

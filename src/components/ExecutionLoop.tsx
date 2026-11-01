import React, { useState } from 'react';
import { Database, BrainCircuit, Rocket, Terminal, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ExecutionLoop: React.FC = () => {
  const [activeStage, setActiveStage] = useState<1 | 2 | 3>(1);

  const stageDetails = {
    1: {
      tag: 'Stage 01 · Signal Ingestion',
      title: 'Unified Signal Fabric',
      description:
        'Seamlessly aggregates data from your enterprise ERPs, task management systems, meeting transcripts, and git repositories without disrupting existing team tools.',
      subtext: 'Zero adoption friction: teams keep working in Jira, Slack, Teams, SAP, and Salesforce.',
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
        'Applies context-aware LLMs, retrieval-augmented evidence (RAG), and predictive agents to synthesize cross-functional dependencies and uncover hidden timeline risks.',
      subtext: 'Translates unstructured conversations and ticket status into structural multi-vector graphs with traceable citations.',
      telemetry: [
        { label: 'Dependency Graph Nodes', value: '280,000+ linked entities' },
        { label: 'Bottleneck Detection', value: '3 sprints advance warning' },
        { label: 'Evidence Grounding', value: '100% Source-Linked RAG' },
      ],
      samplePayload: `// Contextual Intelligence Graph
{
  "initiative": "APAC SOC2 Compliance",
  "critical_path_bottleneck": "IAM audit lagging by 6 days",
  "rag_citations": ["SAP_PO_4402", "JIRA_ENG_402", "STEERCO_TR_402"],
  "predictive_variance": "-3.8 days without re-routing",
  "confidence_score": 0.942
}`,
    },
    3: {
      tag: 'Stage 03 · Governed Execution',
      title: 'Human-Gated Forward Execution',
      description:
        'Recommends, routes, and automates high-impact actions with configurable human-in-the-loop (HITL) approval gates. Continuously learns from outcome velocity.',
      subtext: 'AI proposes cross-system updates; authorized leaders approve before production execution.',
      telemetry: [
        { label: 'Action Governance', value: 'RBAC + HITL Approval Gates' },
        { label: 'Admin Overhead Saved', value: '12+ hrs/week per PM' },
        { label: 'Audit Trail Retention', value: '100% Immutable SHA-256' },
      ],
      samplePayload: `// Governed Execution Dispatch
{
  "action": "orchestration.hitl_rebalance",
  "approved_by": "role:lead_architect (SSO_VERIFIED)",
  "dispatches": [
    { "target": "jira.v2", "action": "reassign_subtasks", "count": 4 },
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
            Connect the work people already do to the actions that move the business—from raw operational signals to closed-loop verifiable outcomes.
          </p>
        </motion.div>

        {/* 3 Step Cards with consistent active border states */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Ingest */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            onClick={() => setActiveStage(1)}
            className={`p-8 rounded-3xl cursor-pointer transition-all flex flex-col justify-between text-left ${
              activeStage === 1
                ? 'bg-zinc-900 border-2 border-[#CCFF00] shadow-[0_0_30px_rgba(204,255,0,0.16)]'
                : 'bg-black border border-white/10 hover:border-white/30'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs uppercase tracking-widest font-mono ${
                    activeStage === 1 ? 'text-[#CCFF00]' : 'text-zinc-400'
                  }`}
                >
                  Stage 01 · Signal Fabric
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activeStage === 1 ? 'bg-[#CCFF00] text-black' : 'bg-zinc-800 text-zinc-300'
                  }`}
                >
                  <Database className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3 text-white">1. Ingest</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Seamlessly aggregates data from your enterprise ERPs, task management systems, meeting transcripts, and git repositories without disrupting existing team tools.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-zinc-400 flex items-center justify-between w-full">
              <span>Jira · SAP · Slack · Teams</span>
              <span className="text-[#CCFF00] inline-flex items-center space-x-1">
                <span>{activeStage === 1 ? 'Inspecting' : 'Inspect'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.button>

          {/* Card 2: Understand */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            onClick={() => setActiveStage(2)}
            className={`p-8 rounded-3xl cursor-pointer transition-all flex flex-col justify-between text-left ${
              activeStage === 2
                ? 'bg-zinc-900 border-2 border-[#CCFF00] shadow-[0_0_30px_rgba(204,255,0,0.16)]'
                : 'bg-black border border-white/10 hover:border-white/30'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs uppercase tracking-widest font-mono ${
                    activeStage === 2 ? 'text-[#CCFF00]' : 'text-zinc-400'
                  }`}
                >
                  Stage 02 · Core AI &amp; RAG
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activeStage === 2 ? 'bg-[#CCFF00] text-black' : 'bg-zinc-800 text-zinc-300'
                  }`}
                >
                  <BrainCircuit className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3 text-white">2. Understand</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Applies context-aware LLMs, retrieval-augmented evidence, and predictive agents to synthesize cross-functional dependencies and uncover hidden timeline risks.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-zinc-400 flex items-center justify-between w-full">
              <span>Neural Knowledge Graph</span>
              <span className="text-[#CCFF00] inline-flex items-center space-x-1">
                <span>{activeStage === 2 ? 'Inspecting' : 'Inspect'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.button>

          {/* Card 3: Act & Learn */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            onClick={() => setActiveStage(3)}
            className={`p-8 rounded-3xl cursor-pointer transition-all flex flex-col justify-between text-left ${
              activeStage === 3
                ? 'bg-zinc-900 border-2 border-[#CCFF00] shadow-[0_0_30px_rgba(204,255,0,0.16)]'
                : 'bg-black border border-white/10 hover:border-white/30'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs uppercase tracking-widest font-mono ${
                    activeStage === 3 ? 'text-[#CCFF00]' : 'text-zinc-400'
                  }`}
                >
                  Stage 03 · HITL Execution
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activeStage === 3 ? 'bg-[#CCFF00] text-black' : 'bg-zinc-800 text-zinc-300'
                  }`}
                >
                  <Rocket className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3 text-white">3. Act &amp; Learn</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Recommends, routes, and automates high-impact actions with human-in-the-loop governance. Continuously learns from outcome velocity to refine future delivery.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-zinc-400 flex items-center justify-between w-full">
              <span>Governed Forward Execution</span>
              <span className="text-[#CCFF00] inline-flex items-center space-x-1">
                <span>{activeStage === 3 ? 'Inspecting' : 'Inspect'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.button>
        </div>

        {/* Live Stage Inspection Terminal Box */}
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
                <p className="text-xs text-zinc-400 font-medium mb-6">
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
                    <span>Stage 0{activeStage} Telemetry Payload</span>
                  </div>
                  <span className="text-[#CCFF00]">Schema Verified</span>
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

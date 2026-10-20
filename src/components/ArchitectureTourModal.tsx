import React, { useState, useEffect, useRef } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

interface ArchitectureTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestAccess: () => void;
}

type TierId = 1 | 2 | 3 | 4;

export const ArchitectureTourModal: React.FC<ArchitectureTourModalProps> = ({
  isOpen,
  onClose,
  onRequestAccess,
}) => {
  const [activeTier, setActiveTier] = useState<TierId>(1);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Escape key close + body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    setTimeout(() => closeButtonRef.current?.focus(), 50);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tiers = [
    {
      id: 1 as TierId,
      title: 'Tier 1: High-Throughput Signal Ingestion',
      badge: 'INGESTION FABRIC',
      description:
        'Continuous Change Data Capture (CDC), bidirectional webhooks, and secure read-only adapters link directly to enterprise operational tools without modifying team workflows.',
      details: [
        'Over 40+ native enterprise connectors (Jira, SAP, Salesforce, GitHub, Slack, ServiceNow)',
        'Event-driven streaming pipeline handling up to 50,000 events/second',
        'TLS 1.3 encrypted transit and zero data retention in transit buffers',
      ],
      techSpecs: 'Kafka Stream Workers · CDC Connectors · AES-256 Buffer Pools',
    },
    {
      id: 2 as TierId,
      title: 'Tier 2: Enterprise Neural Knowledge Graph',
      badge: 'CONTEXT SYNTHESIS',
      description:
        'Constructs an ontological, time-indexed representation of all enterprise entities, dependencies, ownership structures, and deliverables.',
      details: [
        'Disambiguates unstructured meeting discussions and matches mentions to ground-truth Jira epics',
        'Topological dependency mapping across complex multi-service roadmaps',
        'Strict tenant-isolated graph stores with zero cross-customer data leakage',
      ],
      techSpecs: 'Temporal Graph Engine · Vector Indexing · RDF / JSON-LD Ontologies',
    },
    {
      id: 3 as TierId,
      title: 'Tier 3: Predictive Reasoning & Variance Engine',
      badge: 'PREDICTIVE INFERENCE',
      description:
        'Simulates sprint completion probabilities, early friction indicators, and critical path delivery dates weeks before conventional reports reflect slippage.',
      details: [
        'Monte Carlo risk simulations updated with every Git commit and PR review velocity',
        'Automated root-cause analysis distinguishing between genuine scope creep and temporary friction',
        'Early-warning notification routing based on verified risk scores',
      ],
      techSpecs: 'Contextual LLM Reasoning · Monte Carlo Simulators · Variance Calculators',
    },
    {
      id: 4 as TierId,
      title: 'Tier 4: Closed-Loop Autonomous Execution Bus',
      badge: 'FORWARD EXECUTION',
      description:
        'Translates synthetic conclusions into automated operational tasks, PR dispatches, calendar updates, and executive briefings with comprehensive human-in-the-loop controls.',
      details: [
        'Automated ticket creation, status reconciliation, and cross-team notification',
        'Human-in-the-loop configurable gating for high-impact actions',
        'Complete immutable audit log ensuring compliance with SOX and ISO standards',
      ],
      techSpecs: 'Distributed Action Dispatcher · Webhook Dispatch Brokers · Immutable Audit Log',
    },
  ];

  const current = tiers.find((t) => t.id === activeTier)!;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden max-h-[90vh] flex flex-col">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#CCFF00]/10 blur-3xl pointer-events-none rounded-full" aria-hidden="true" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div>
            <span className="text-xs font-mono uppercase text-[#CCFF00] tracking-wider">
              System Architecture Walkthrough
            </span>
            <h3 id="tour-modal-title" className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              Avenora Enterprise Engine
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-2 rounded-full bg-zinc-900 border border-white/10 transition-colors shrink-0 ml-4"
            aria-label="Close architecture tour"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tier Tab Navigation */}
        <div className="grid grid-cols-4 gap-2 my-5 shrink-0" role="tablist" aria-label="Architecture tiers">
          {tiers.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={activeTier === t.id}
              aria-controls={`tier-panel-${t.id}`}
              id={`tier-tab-${t.id}`}
              onClick={() => setActiveTier(t.id)}
              className={`p-2.5 rounded-xl text-center text-xs font-mono transition-all border ${
                activeTier === t.id
                  ? 'bg-zinc-900 border-[#CCFF00] text-white shadow-[0_0_15px_rgba(204,255,0,0.15)]'
                  : 'bg-zinc-950/80 border-white/10 text-zinc-400 hover:text-white hover:border-white/25'
              }`}
            >
              <div className="text-[10px] text-[#CCFF00]">0{t.id}</div>
              <div className="truncate font-semibold hidden sm:block text-[10px] mt-0.5">{t.badge}</div>
            </button>
          ))}
        </div>

        {/* Active Tier Content */}
        <div
          id={`tier-panel-${activeTier}`}
          role="tabpanel"
          aria-labelledby={`tier-tab-${activeTier}`}
          className="overflow-y-auto pr-1 flex-1 scrollbar-thin space-y-4"
        >
          <div className="p-5 rounded-2xl bg-zinc-900/70 border border-white/10">
            <div className="text-xs font-mono text-[#CCFF00] mb-1">{current.badge}</div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
              {current.title}
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              {current.description}
            </p>

            <div className="p-3 rounded-xl bg-black border border-white/5 text-xs font-mono text-zinc-400 mb-4">
              <span className="text-zinc-500">Core Primitives: </span>
              <span className="text-[#CCFF00]">{current.techSpecs}</span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-zinc-400 block mb-2">
                Enterprise Capabilities
              </span>
              {current.details.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-zinc-200">
                  <Check className="w-3.5 h-3.5 text-[#CCFF00] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Flow Diagram */}
          <div className="p-4 rounded-2xl bg-black border border-white/10 text-xs font-mono" aria-label="Architecture data flow diagram">
            <div className="text-zinc-500 text-[11px] mb-3">FLOW SEQUENCE:</div>
            <div className="flex flex-wrap items-center gap-2 text-zinc-300">
              <span className="bg-zinc-900 px-2 py-1 rounded border border-white/5">Enterprise Data Sources</span>
              <span className="text-[#CCFF00]" aria-hidden="true">→</span>
              <span className={`bg-zinc-900 px-2 py-1 rounded border ${activeTier === 1 ? 'border-[#CCFF00]/60 text-[#CCFF00]' : 'border-white/5'}`}>Signal Ingestion Fabric</span>
              <span className="text-[#CCFF00]" aria-hidden="true">→</span>
              <span className={`bg-zinc-900 px-2 py-1 rounded border ${activeTier === 2 || activeTier === 3 ? 'border-[#CCFF00]/60 text-[#CCFF00]' : 'border-white/5'}`}>Neural Graph &amp; LLMs</span>
              <span className="text-[#CCFF00]" aria-hidden="true">→</span>
              <span className={`bg-zinc-900 px-2 py-1 rounded border ${activeTier === 4 ? 'border-[#CCFF00]/60 text-[#CCFF00]' : 'border-white/5'}`}>Autonomous Action Bus</span>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-zinc-400 font-mono">
            Deployment options: <span className="text-white">Cloud (SaaS) or Dedicated VPC</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onRequestAccess();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600] active:scale-95 transition-all flex items-center justify-center space-x-1.5"
          >
            <span>Request Architecture Session</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

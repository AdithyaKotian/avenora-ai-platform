import React from 'react';
import { ShieldCheck, Lock, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const SocialProof: React.FC = () => {
  const integrations = [
    'SAP S/4HANA',
    'Jira Software',
    'Salesforce',
    'Slack Enterprise',
    'Microsoft Teams',
    'GitHub Enterprise',
    'Workday',
    'ServiceNow',
    'Asana Enterprise',
    'Snowflake',
  ];

  const guarantees = [
    {
      badge: 'Verified Guarantee',
      tag: 'Zero-Touch Sync',
      metric: '0 Manual',
      title: 'Status Reports Required',
      description:
        'Ambient signal ingestion across Git, Jira, SAP, and Zoom eliminates manual weekly status compilation and chasing.',
    },
    {
      badge: 'Verified Architecture',
      tag: 'Source-Linked RAG',
      metric: '100% Traceable',
      title: 'Evidence & Citations',
      description:
        'Every risk prediction and recommended action links directly to its underlying ERP record, PR commit, or meeting transcript.',
    },
    {
      badge: 'Verified Governance',
      tag: 'RBAC Enforced',
      metric: '100% Gated',
      title: 'Human-Approved Writes',
      description:
        'High-impact production dispatches require explicit human-in-the-loop sign-off with immutable SHA-256 audit logging.',
    },
    {
      badge: 'Verified Standard',
      tag: 'Enterprise Ready',
      metric: 'SOC 2 / ISO',
      title: 'Security & Sovereignty',
      description:
        'Engineered to ISO/IEC 27001 and SOC 2 Type II trust criteria with GDPR and UAE PDPL tenant isolation controls.',
    },
  ];

  return (
    <section
      id="trusted"
      className="py-20 bg-zinc-950 border-t border-b border-white/10 text-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-[#CCFF00]/30 bg-zinc-900 text-[#CCFF00] text-xs font-semibold uppercase tracking-widest mb-4">
            <span>ARCHITECTURAL GUARANTEES &amp; SLAS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Deterministic Guarantees Built for Enterprise Operations
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-medium mb-12 max-w-2xl mx-auto">
            Every Avenora deployment enforces strict evidence traceability, human-in-the-loop governance, and cryptographic tenant isolation.
          </p>
        </motion.div>

        {/* 4 Verifiable Architectural SLAs & Product Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch text-left pb-12 border-b border-white/5">
          {guarantees.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-[#CCFF00]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-0.5 rounded border border-[#CCFF00]/30 flex items-center space-x-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-[#CCFF00]" />
                    <span>{item.badge}</span>
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">{item.tag}</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#CCFF00] tracking-tight tabular-nums">
                  {item.metric}
                </div>
                <div className="text-sm text-white font-bold mt-1.5">{item.title}</div>
              </div>
              <p className="text-xs text-zinc-400 mt-4 pt-3 border-t border-white/5 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integrations row */}
        <div className="pt-10">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-5">
            Seamless Bidirectional Integrations Across Your Core Stack
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {integrations.map((item) => (
              <span
                key={item}
                className="px-3.5 py-1.5 rounded-full bg-zinc-900/70 border border-white/10 text-xs font-medium text-zinc-300 hover:border-[#CCFF00]/40 hover:text-white transition-all shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Verified Badges Stripe */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
          <span className="flex items-center space-x-1.5 text-zinc-300">
            <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />
            <span>ISO 27001 Aligned</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span className="flex items-center space-x-1.5 text-zinc-300">
            <Award className="w-4 h-4 text-[#CCFF00]" />
            <span>SOC 2 Type II Ready</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span className="flex items-center space-x-1.5 text-zinc-300">
            <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
            <span>GDPR &amp; UAE PDPL Compliant</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span className="flex items-center space-x-1.5 text-zinc-300">
            <Lock className="w-4 h-4 text-[#CCFF00]" />
            <span>AES-256 at Rest &amp; In-Transit</span>
          </span>
        </div>
      </div>
    </section>
  );
};

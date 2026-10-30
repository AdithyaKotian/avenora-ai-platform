import React, { useState } from 'react';
import { Shield, Lock, Server, Network, Key, Users2, FileSearch, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EnterpriseTrustProps {
  onOpenWhitepaper: () => void;
  onOpenTour: () => void;
}

type TrustTab = 'security' | 'compliance' | 'integrations';

export const EnterpriseTrust: React.FC<EnterpriseTrustProps> = ({ onOpenWhitepaper, onOpenTour }) => {
  const [activeTab, setActiveTab] = useState<TrustTab>('security');

  const tabs: { id: TrustTab; label: string }[] = [
    { id: 'security', label: 'Security Architecture' },
    { id: 'compliance', label: 'Compliance & Governance' },
    { id: 'integrations', label: 'Enterprise Integrations' },
  ];

  return (
    <section id="enterprise" className="py-24 px-6 md:px-12 bg-zinc-950 text-white border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#CCFF00]/30 bg-zinc-900 text-[#CCFF00] text-xs font-semibold uppercase tracking-widest mb-4">
            <span>ENTERPRISE BY DESIGN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Security, Compliance &amp; Integrations
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Zero compromise on security or data sovereignty. Engineered with hardened compliance targets and cloud-native architecture.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1 bg-zinc-950 rounded-full border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#CCFF00] text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div className="p-8 rounded-3xl bg-black border border-white/10 hover:border-[#CCFF00]/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#CCFF00] mb-6">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-3">Encryption</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  AES-256 encryption at rest across all storage volumes. TLS 1.3 enforced for all network traffic with HSTS headers.
                </p>
                <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#CCFF00]">
                  AES-256 · TLS 1.3 · HSTS
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-black border border-white/10 hover:border-[#CCFF00]/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#CCFF00] mb-6">
                  <Key className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-3">Identity & RBAC</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  SAML 2.0 and OIDC federation with enterprise SSO providers. Granular role-based access controls and automated SCIM provisioning.
                </p>
                <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#CCFF00]">
                  SSO · RBAC · SCIM 2.0
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-black border border-white/10 hover:border-[#CCFF00]/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#CCFF00] mb-6">
                  <FileSearch className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-3">Audit Logging</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Immutable audit trail for all system actions. Complete traceability from data ingestion through to automated execution with configurable retention.
                </p>
                <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#CCFF00]">
                  Immutable Logs · Full Traceability
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'compliance' && (
            <motion.div
              key="compliance"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="p-8 rounded-3xl bg-black border border-white/10 hover:border-[#CCFF00]/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#CCFF00] mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-3">Compliance Architecture</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Platform designed and engineered against SOC 2 Type II, ISO 27001, GDPR, and UAE PDPL requirements. Continuous monitoring and third-party assessments validate compliance posture.
                </p>
                <ul className="space-y-2">
                  {['SOC 2 Type II aligned controls', 'ISO 27001 information security management', 'GDPR data protection compliance', 'UAE PDPL Federal Decree-Law No. 45'].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-black border border-white/10 hover:border-[#CCFF00]/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#CCFF00] mb-6">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-3">Data Sovereignty</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Complete tenant isolation with zero cross-customer data access. Customer data is never used to train, fine-tune, or evaluate shared models.
                </p>
                <ul className="space-y-2">
                  {['Strict tenant data partitioning', 'Customer-managed encryption keys (CMEK)', 'Regional data residency options', 'Zero model training on customer data'].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === 'integrations' && (
            <motion.div
              key="integrations"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="p-8 rounded-3xl bg-black border border-white/10 hover:border-[#CCFF00]/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#CCFF00] mb-6">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-3">Cloud Infrastructure</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Deployable across leading hyperscalers with multi-database persistence architecture. Support for dedicated VPC deployments and single-tenant configurations.
                </p>
                <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#CCFF00]">
                  AWS · Azure · PostgreSQL · MongoDB
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-black border border-white/10 hover:border-[#CCFF00]/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#CCFF00] mb-6">
                  <Network className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-3">APIs & Connectors</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Zero-friction integration fabric with bidirectional streaming webhooks, RESTful endpoints, and developer SDKs. 42+ native enterprise connectors.
                </p>
                <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#CCFF00]">
                  REST APIs · Webhooks · SDKs · CDC
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Security Audit Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-black border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white tracking-tight">
              Review Our Enterprise Security Architecture
            </h4>
            <p className="text-zinc-400 text-sm mt-1">
              Download the security whitepaper or explore the interactive architecture walkthrough.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenWhitepaper}
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold bg-zinc-900 border border-white/20 text-white hover:bg-zinc-800 transition-colors cursor-pointer text-center"
            >
              Review Security Whitepaper
            </button>
            <button
              onClick={onOpenTour}
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600] transition-colors cursor-pointer text-center"
            >
              Interactive Architecture Tour →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

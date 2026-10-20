import React from 'react';
import { Shield, Lock, Server, Network } from 'lucide-react';

interface EnterpriseTrustProps {
  onOpenWhitepaper: () => void;
  onOpenTour: () => void;
}

export const EnterpriseTrust: React.FC<EnterpriseTrustProps> = ({ onOpenWhitepaper, onOpenTour }) => {
  return (
    <section id="enterprise" className="py-24 px-6 md:px-12 bg-zinc-950 text-white border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#CCFF00]/30 bg-zinc-900 text-[#CCFF00] text-xs font-semibold uppercase tracking-widest mb-4">
            <span>ENTERPRISE BY DESIGN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Security, Compliance &amp; Integrations
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Zero compromise on security or data sovereignty. Engineered with hardened compliance targets and cloud-native architecture.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Security by Default */}
          <div className="p-8 rounded-3xl bg-black border border-white/10 flex flex-col justify-between hover:border-[#CCFF00]/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#CCFF00] mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white mb-3">
                Security by Default
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Full cryptographic controls with end-to-end encryption in transit and at rest. Identity federation via enterprise SSO with granular RBAC governance and audit logs.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#CCFF00]">
              TLS 1.3 · AES-256 · SSO · RBAC
            </div>
          </div>

          {/* Card 2: Compliance Targets */}
          <div className="p-8 rounded-3xl bg-black border border-white/10 flex flex-col justify-between hover:border-[#CCFF00]/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#CCFF00] mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white mb-3">
                Compliance Targets
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Continuous compliance monitoring and independent third-party audits enforcing global privacy and governance mandates across jurisdictions.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#CCFF00]">
              GDPR · UAE PDPL · ISO 27001 · SOC 2
            </div>
          </div>

          {/* Card 3: Cloud Foundation */}
          <div className="p-8 rounded-3xl bg-black border border-white/10 flex flex-col justify-between hover:border-[#CCFF00]/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#CCFF00] mb-6">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white mb-3">
                Cloud Foundation
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Deployable across leading hyperscalers. Multi-database persistence architecture leveraging relational and document datastores with high availability.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#CCFF00]">
              AWS · Azure · PostgreSQL · MongoDB
            </div>
          </div>

          {/* Card 4: APIs & Connectors */}
          <div className="p-8 rounded-3xl bg-black border border-white/10 flex flex-col justify-between hover:border-[#CCFF00]/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#CCFF00] mb-6">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white mb-3">
                APIs &amp; Connectors
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Zero-friction integration fabric with bi-directional streaming webhooks, RESTful endpoints, and developer SDKs connecting to your core enterprise applications.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#CCFF00]">
              REST APIs · Webhooks · SDKs
            </div>
          </div>
        </div>

        {/* Security Audit Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-black border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white tracking-tight">
              Looking for our Comprehensive Enterprise Security Audit?
            </h4>
            <p className="text-zinc-400 text-sm mt-1">
              Download our complete SOC 2 Type II assurance package, ISO 27001 mapping, GDPR / UAE PDPL data protection whitepaper.
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
              Interactive Architecture Tour -&gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

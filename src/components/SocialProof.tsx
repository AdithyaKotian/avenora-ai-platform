import React from 'react';
import { ShieldCheck, Lock, Award, CheckCircle2, Layers, Zap, Database, Globe } from 'lucide-react';

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

  return (
    <section className="py-16 bg-zinc-950 border-t border-b border-white/10 text-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-10">
          Engineered for enterprise-grade execution across global operational environments
        </p>

        {/* 4 Architectural Capabilities — factual descriptions, not unverified metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center pb-12 border-b border-white/5">
          <div className="p-4 rounded-2xl bg-zinc-900/30 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center mx-auto mb-3">
              <Database className="w-5 h-5 text-[#CCFF00]" />
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              42+ Connectors
            </div>
            <div className="text-xs text-zinc-400 mt-1 font-medium">Bidirectional Enterprise APIs</div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/30 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center mx-auto mb-3">
              <Layers className="w-5 h-5 text-[#CCFF00]" />
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              Full Context
            </div>
            <div className="text-xs text-zinc-400 mt-1 font-medium">Cross-Tool Context Retention</div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/30 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center mx-auto mb-3">
              <Zap className="w-5 h-5 text-[#CCFF00]" />
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              Closed-Loop
            </div>
            <div className="text-xs text-zinc-400 mt-1 font-medium">Autonomous Execution Engine</div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/30 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center mx-auto mb-3">
              <Globe className="w-5 h-5 text-[#CCFF00]" />
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              SOC 2 / ISO
            </div>
            <div className="text-xs text-zinc-400 mt-1 font-medium">Enterprise Security Architecture</div>
          </div>
        </div>

        {/* Integrations row */}
        <div className="pt-10">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-5">
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

        {/* Badges Stripe */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />
            <span>ISO 27001 Aligned</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span className="flex items-center space-x-1.5">
            <Award className="w-4 h-4 text-[#CCFF00]" />
            <span>SOC 2 Type II Architecture</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
            <span>GDPR Compliant Design</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span className="flex items-center space-x-1.5">
            <Lock className="w-4 h-4 text-[#CCFF00]" />
            <span>AES-256 at Rest &amp; In-Transit</span>
          </span>
        </div>
      </div>
    </section>
  );
};

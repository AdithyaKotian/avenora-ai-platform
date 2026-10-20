import React from 'react';
import { ShieldCheck, Lock, Award, CheckCircle2 } from 'lucide-react';

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
          Trusted by operational leaders engineering high-velocity execution across global enterprises
        </p>

        {/* 4 Quantitative Metrics - all top metrics neon green */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center pb-12 border-b border-white/5">
          <div className="p-4 rounded-2xl bg-zinc-900/30 border border-white/5">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#CCFF00] tracking-tight tabular-nums">
              $4.2B+
            </div>
            <div className="text-xs text-zinc-400 mt-2 font-medium">Pipeline Value Tracked</div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/30 border border-white/5">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#CCFF00] tracking-tight tabular-nums">
              68%
            </div>
            <div className="text-xs text-zinc-400 mt-2 font-medium">Reduced Handoff Delays</div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/30 border border-white/5">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#CCFF00] tracking-tight tabular-nums">
              100%
            </div>
            <div className="text-xs text-zinc-400 mt-2 font-medium">Cross-Tool Context Retention</div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/30 border border-white/5">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#CCFF00] tracking-tight">
              SOC 2 / ISO
            </div>
            <div className="text-xs text-zinc-400 mt-2 font-medium">Enterprise Security Ready</div>
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
            <span>ISO 27001 Certified</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span className="flex items-center space-x-1.5">
            <Award className="w-4 h-4 text-[#CCFF00]" />
            <span>SOC 2 Type II Ready</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
            <span>GDPR Compliant</span>
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

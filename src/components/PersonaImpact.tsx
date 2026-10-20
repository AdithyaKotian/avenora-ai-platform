import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const PersonaImpact: React.FC = () => {
  const comparisons = [
    {
      before: 'Chasing 20+ engineering leads in Slack for sprint progress',
      after: 'Autonomous ambient status ingestion across Git, Jira, and Slack',
    },
    {
      before: 'Manual transcription of Zoom meeting action items into Jira',
      after: '1-click automated meeting action extraction with verified assignees',
    },
    {
      before: 'Surprise cross-team API breaks discovered during QA week',
      after: 'Continuous dependency mapping highlighting breaking changes in advance',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-zinc-950 text-white border-t border-b border-white/10 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10 mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-[#CCFF00]/30 bg-zinc-900 text-[#CCFF00] text-xs font-semibold uppercase tracking-widest mb-3">
              <span>INTERACTIVE PERSONA IMPACT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Day-in-the-Life Transformation: For Project Managers
            </h2>
          </div>
          <div className="text-left md:text-right shrink-0">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-0.5">
              Impact Metric
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#CCFF00] tracking-tight">
              Reclaim 12+ Hours Weekly
            </div>
          </div>
        </div>

        {/* 3 Comparison Rows */}
        <div className="space-y-4">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 sm:p-6 rounded-2xl bg-black border border-white/10 hover:border-white/20 transition-all items-center"
            >
              {/* Before Column (Red) */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-red-950/80 border border-red-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 block mb-1">
                    STATUS QUO (BEFORE)
                  </span>
                  <p className="text-sm text-red-200/90 leading-relaxed font-medium">
                    "{item.before}"
                  </p>
                </div>
              </div>

              {/* After Column (Green) */}
              <div className="flex items-start space-x-3 border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-6">
                <div className="w-6 h-6 rounded-full bg-[#CCFF00]/20 border border-[#CCFF00] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00]" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#CCFF00] block mb-1">
                    AVENORA AI (AFTER)
                  </span>
                  <p className="text-sm text-[#CCFF00] leading-relaxed font-semibold">
                    "{item.after}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

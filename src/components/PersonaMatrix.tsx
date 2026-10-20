import React from 'react';

export const PersonaMatrix: React.FC = () => {
  return (
    <section id="audience" className="py-24 px-6 md:px-12 bg-white text-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold uppercase tracking-widest mb-4">
            <span>TARGET AUDIENCE ALIGNMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Engineered for Alignment Across Every Layer of Leadership
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto">
            From executives and delivery leads to autonomous teams and external stakeholders, Avenora removes friction at every handoff.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Executives */}
          <div className="p-8 rounded-3xl border border-zinc-200 bg-zinc-50 flex flex-col justify-between hover:border-zinc-400 transition-all">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider font-mono text-zinc-500">
                Strategic Signals
              </span>
              <h3 className="text-2xl font-bold tracking-tight mt-1 mb-3">Executives</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                High-fidelity portfolio oversight without endless steering committee meetings. Spot risks, track strategic OKR velocity, and align capital allocation to ground-truth execution.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-200">
              <div className="text-2xl font-extrabold tracking-tight tabular-nums text-zinc-900">
                10x Faster
              </div>
              <div className="text-xs font-medium text-zinc-500 mt-0.5">
                Strategic visibility from ground operations
              </div>
            </div>
          </div>

          {/* Card 2: Project Managers (Dark background with green border as requested) */}
          <div className="p-8 rounded-3xl border-2 border-[#CCFF00] bg-zinc-950 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/10 blur-2xl pointer-events-none rounded-full" />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider font-mono text-[#CCFF00]">
                Coordinate Dependencies
              </span>
              <h3 className="text-2xl font-bold tracking-tight mt-1 mb-3 text-white">Project Managers</h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                Eliminate the administrative burden of status-chasing. Predict blockers, orchestrate cross-team dependencies, and coordinate releases seamlessly.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-800">
              <div className="text-2xl font-extrabold tracking-tight tabular-nums text-[#CCFF00]">
                12+ Hrs Saved
              </div>
              <div className="text-xs font-medium text-zinc-400 mt-0.5">
                Weekly per delivery manager
              </div>
            </div>
          </div>

          {/* Card 3: Teams */}
          <div className="p-8 rounded-3xl border border-zinc-200 bg-zinc-50 flex flex-col justify-between hover:border-zinc-400 transition-all">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider font-mono text-zinc-500">
                Automate Tasks
              </span>
              <h3 className="text-2xl font-bold tracking-tight mt-1 mb-3">Teams</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Focus on core high-value output. Let Avenora capture action items from your natural tools and communications, automating updates silently in the background.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-200">
              <div className="text-2xl font-extrabold tracking-tight tabular-nums text-zinc-900">
                Zero Busywork
              </div>
              <div className="text-xs font-medium text-zinc-500 mt-0.5">
                Manual status duplication eradicated
              </div>
            </div>
          </div>

          {/* Card 4: Stakeholders */}
          <div className="p-8 rounded-3xl border border-zinc-200 bg-zinc-50 flex flex-col justify-between hover:border-zinc-400 transition-all">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider font-mono text-zinc-500">
                Stay Aligned
              </span>
              <h3 className="text-2xl font-bold tracking-tight mt-1 mb-3">Stakeholders</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Unfiltered milestone confidence and verified delivery timelines without manual check-ins, unverified slide decks, or ambiguous weekly memos.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-200">
              <div className="text-2xl font-extrabold tracking-tight tabular-nums text-zinc-900">
                100% Trust
              </div>
              <div className="text-xs font-medium text-zinc-500 mt-0.5">
                Continuous verifiable alignment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

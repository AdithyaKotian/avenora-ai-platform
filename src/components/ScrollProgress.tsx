import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'gap', label: '01 · The Execution Gap' },
  { id: 'loop', label: '02 · Execution Loop' },
  { id: 'execution-graph', label: '03 · Execution Graph & HITL' },
  { id: 'audience', label: '04 · Role Alignment' },
  { id: 'capabilities', label: '05 · 5 Core Capabilities' },
  { id: 'enterprise', label: '06 · Enterprise Security' },
  { id: 'trusted', label: '07 · Architectural SLAs' },
];

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentProgress = Math.min(
              1,
              Math.max(0, window.scrollY / totalHeight)
            );
            setProgress(currentProgress);
          }

          const viewportMiddle = window.scrollY + window.innerHeight * 0.35;
          let matched = '';
          for (const section of SECTIONS) {
            const el = document.getElementById(section.id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (viewportMiddle >= top && viewportMiddle < top + height) {
                matched = section.label;
                break;
              }
            }
          }
          setActiveSection(matched);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-[60] h-[2.5px] bg-white/5 pointer-events-none"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-[#CCFF00] shadow-[0_0_10px_rgba(204,255,0,0.85)] transition-transform duration-75 ease-out"
          style={{
            transform: `scaleX(${progress})`,
            transformOrigin: 'left',
            willChange: 'transform',
          }}
        />
      </div>

      {activeSection && progress > 0.04 && progress < 0.96 && (
        <div className="fixed top-[72px] right-6 md:right-12 z-40 hidden md:flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-950/85 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300 pointer-events-none shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
          <span>{activeSection}</span>
          <span className="text-zinc-500">·</span>
          <span className="text-[#CCFF00] tabular-nums">{Math.round(progress * 100)}%</span>
        </div>
      )}
    </>
  );
};

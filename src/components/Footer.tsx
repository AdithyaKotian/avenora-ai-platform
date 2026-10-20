import React from 'react';

interface FooterProps {
  onOpenWhitepaper: () => void;
  onRequestAccess: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhitepaper, onRequestAccess }) => {
  return (
    <footer className="py-14 px-6 md:px-12 bg-black text-zinc-400 text-xs border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Avenora.ai Logo */}
        <div className="flex items-center space-x-2.5">
          <div className="w-6 h-6 rounded bg-[#CCFF00] flex items-center justify-center font-bold text-black text-xs shadow-sm">
            A
          </div>
          <span className="text-white font-semibold text-sm tracking-tight">
            Avenora<span className="text-[#CCFF00]">.ai</span>
          </span>
        </div>

        {/* Center */}
        <p className="text-center md:text-left text-zinc-400">
          © 2026 Avenora AI Inc. All rights reserved. Turning execution into an advantage.
        </p>

        {/* Right Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400">
          <button
            onClick={onOpenWhitepaper}
            className="hover:text-[#CCFF00] transition-colors cursor-pointer"
          >
            Security Whitepaper
          </button>
          <a
            href="#loop"
            className="hover:text-[#CCFF00] transition-colors"
          >
            System Architecture
          </a>
          <button
            onClick={onRequestAccess}
            className="hover:text-[#CCFF00] transition-colors cursor-pointer"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </footer>
  );
};

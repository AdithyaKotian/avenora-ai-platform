import React from 'react';

interface FooterProps {
  onOpenWhitepaper: () => void;
  onRequestAccess: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhitepaper, onRequestAccess }) => {
  return (
    <footer className="py-14 px-6 md:px-12 bg-black text-zinc-400 text-xs border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <a href="#" aria-label="Avenora AI — Back to top" className="flex items-center space-x-2.5 group">
          <div
            className="w-6 h-6 rounded bg-[#CCFF00] flex items-center justify-center font-bold text-black text-xs shadow-sm group-hover:shadow-[0_0_10px_rgba(204,255,0,0.3)] transition-shadow"
            aria-hidden="true"
          >
            A
          </div>
          <span className="text-white font-semibold text-sm tracking-tight">
            Avenora<span className="text-[#CCFF00]">.ai</span>
          </span>
        </a>

        {/* Copyright */}
        <p className="text-center md:text-left text-zinc-500 text-[11px]">
          © 2026 Avenora AI Inc. All rights reserved.
        </p>

        {/* Footer Nav */}
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-6 text-zinc-400">
          <button
            onClick={onOpenWhitepaper}
            className="hover:text-[#CCFF00] transition-colors cursor-pointer"
            aria-label="Review security whitepaper"
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
            aria-label="Contact Avenora AI sales team"
          >
            Contact Sales
          </button>
        </nav>
      </div>
    </footer>
  );
};

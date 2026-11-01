import React from 'react';
import { AvenoraLogo } from './AvenoraLogo';

interface FooterProps {
  onOpenWhitepaper: () => void;
  onRequestAccess: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhitepaper, onRequestAccess }) => {
  return (
    <footer className="py-14 px-6 md:px-12 bg-black text-zinc-400 text-xs border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Full SVG Avenora.ai Brand Lockup */}
        <a href="#" aria-label="Avenora.ai Home" className="inline-flex items-center">
          <AvenoraLogo size="sm" />
        </a>

        {/* Center */}
        <p className="text-center md:text-left text-zinc-400">
          © 2026 Avenora AI Inc. All rights reserved. Turning execution into an advantage.
        </p>

        {/* Right Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400">
          <button
            type="button"
            onClick={onOpenWhitepaper}
            className="hover:text-brand-lime transition-colors cursor-pointer"
          >
            Security Whitepaper
          </button>
          <a
            href="#loop"
            className="hover:text-brand-lime transition-colors"
          >
            System Architecture
          </a>
          <button
            type="button"
            onClick={onRequestAccess}
            className="hover:text-brand-lime transition-colors cursor-pointer"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </footer>
  );
};

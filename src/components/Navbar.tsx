import React, { useState, useEffect } from 'react';
import { Menu, X, Layers, ArrowRight } from 'lucide-react';
import { AvenoraLogo } from './AvenoraLogo';

interface NavbarProps {
  onRequestAccess: () => void;
  onOpenTour: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestAccess, onOpenTour }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-black/85 backdrop-blur-md border-b border-white/10 transition-all">
      {/* Brand Logo */}
      <a href="#" className="flex items-center" aria-label="Avenora AI Home">
        <AvenoraLogo size="md" />
      </a>

      {/* Navigation Links (Pure Section Anchors matching exact DOM sequence) */}
      <nav
        aria-label="Primary section navigation"
        className="hidden lg:flex items-center space-x-7 text-sm font-medium text-zinc-300"
      >
        <a href="#gap" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap">
          The Gap
        </a>
        <a href="#loop" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap">
          Execution Loop
        </a>
        <a href="#execution-graph" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap">
          Live Graph &amp; HITL
        </a>
        <a href="#audience" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap">
          Solutions
        </a>
        <a href="#capabilities" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap">
          Capabilities
        </a>
        <a href="#enterprise" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap">
          Enterprise
        </a>
      </nav>

      {/* Primary Action Cluster */}
      <div className="hidden sm:flex items-center space-x-3">
        <button
          onClick={onOpenTour}
          className="px-4 py-2 rounded-full text-xs font-medium bg-zinc-900/90 border border-white/15 text-zinc-200 hover:text-white hover:border-[#CCFF00]/50 transition-all flex items-center space-x-1.5 whitespace-nowrap cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5 text-[#CCFF00]" />
          <span>Architecture</span>
        </button>
        <button
          onClick={onRequestAccess}
          className="group px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600] active:scale-95 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] tracking-tight whitespace-nowrap cursor-pointer flex items-center space-x-1.5"
        >
          <span>Request Access</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-zinc-300 hover:text-white p-2 rounded-lg border border-white/10 bg-zinc-900/60"
        aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[69px] bottom-0 bg-zinc-950/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col justify-between lg:hidden overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <a
              href="#gap"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-200 hover:text-[#CCFF00] py-2 border-b border-white/5"
            >
              01 · The Execution Gap
            </a>
            <a
              href="#loop"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-200 hover:text-[#CCFF00] py-2 border-b border-white/5"
            >
              02 · Execution Loop
            </a>
            <a
              href="#execution-graph"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-200 hover:text-[#CCFF00] py-2 border-b border-white/5"
            >
              03 · Live Graph &amp; HITL Governance
            </a>
            <a
              href="#audience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-200 hover:text-[#CCFF00] py-2 border-b border-white/5"
            >
              04 · Role Alignment &amp; Impact
            </a>
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-200 hover:text-[#CCFF00] py-2 border-b border-white/5"
            >
              05 · 5 High-Frequency Capabilities
            </a>
            <a
              href="#enterprise"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-200 hover:text-[#CCFF00] py-2 border-b border-white/5"
            >
              06 · Enterprise Security &amp; SLAs
            </a>
          </div>

          <div className="pt-6 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTour();
              }}
              className="w-full py-3 rounded-full text-center text-sm font-semibold bg-zinc-900 border border-white/15 text-white hover:border-[#CCFF00]/50 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-[#CCFF00]" />
              <span>Interactive Architecture Tour</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestAccess();
              }}
              className="w-full py-3.5 rounded-full text-center text-sm font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600] flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Request Enterprise Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

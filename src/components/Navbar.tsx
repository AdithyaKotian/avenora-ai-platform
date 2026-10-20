import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onRequestAccess: () => void;
  onOpenTour: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestAccess, onOpenTour }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all">
      {/* Brand Logo */}
      <a href="#" className="flex items-center space-x-2.5 group">
        <div className="w-8 h-8 rounded-lg bg-[#CCFF00] flex items-center justify-center font-black text-black text-lg transition-transform group-hover:scale-105 shadow-[0_0_15px_rgba(204,255,0,0.3)]">
          A
        </div>
        <span className="text-white font-bold text-xl tracking-tight">
          Avenora<span className="text-[#CCFF00]">.ai</span>
        </span>
      </a>

      {/* Navigation Links */}
      <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-zinc-300">
        <a href="#gap" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap">
          The Gap
        </a>
        <a href="#loop" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap">
          Execution Loop
        </a>
        <a href="#capabilities" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap">
          Capabilities
        </a>
        <a href="#audience" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap">
          Solutions
        </a>
        <a href="#enterprise" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap">
          Enterprise
        </a>
        <button
          onClick={onOpenTour}
          className="hover:text-[#CCFF00] transition-colors whitespace-nowrap cursor-pointer text-zinc-300"
        >
          Architecture
        </button>
      </nav>

      {/* Primary Action */}
      <div className="hidden sm:flex items-center space-x-3">
        <button
          onClick={onRequestAccess}
          className="px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600] active:scale-95 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] tracking-tight whitespace-nowrap cursor-pointer"
        >
          Request Access
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-zinc-300 hover:text-white p-2"
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col space-y-4 lg:hidden">
          <a
            href="#gap"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-zinc-300 hover:text-[#CCFF00] py-1"
          >
            The Gap
          </a>
          <a
            href="#loop"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-zinc-300 hover:text-[#CCFF00] py-1"
          >
            Execution Loop
          </a>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-zinc-300 hover:text-[#CCFF00] py-1"
          >
            Capabilities
          </a>
          <a
            href="#audience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-zinc-300 hover:text-[#CCFF00] py-1"
          >
            Solutions
          </a>
          <a
            href="#enterprise"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-zinc-300 hover:text-[#CCFF00] py-1"
          >
            Enterprise
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTour();
            }}
            className="text-left text-base text-zinc-300 hover:text-[#CCFF00] py-1 cursor-pointer"
          >
            Architecture
          </button>
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestAccess();
              }}
              className="w-full py-3 rounded-full text-center text-sm font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600]"
            >
              Request Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

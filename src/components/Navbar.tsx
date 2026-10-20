import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onRequestAccess: () => void;
  onOpenTour: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestAccess, onOpenTour }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#gap', label: 'The Gap' },
    { href: '#loop', label: 'Execution Loop' },
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#audience', label: 'Solutions' },
    { href: '#enterprise', label: 'Enterprise' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 border-white/10 shadow-[0_4px_32px_rgba(0,0,0,0.6)]'
          : 'bg-black/70 border-white/[0.06]'
      } backdrop-blur-md`}
    >
      {/* Brand Logo */}
      <a href="#" aria-label="Avenora AI — Home" className="flex items-center space-x-2.5 group">
        <div
          className="w-8 h-8 rounded-lg bg-[#CCFF00] flex items-center justify-center font-black text-black text-lg transition-transform group-hover:scale-105 shadow-[0_0_15px_rgba(204,255,0,0.3)]"
          aria-hidden="true"
        >
          A
        </div>
        <span className="text-white font-bold text-xl tracking-tight">
          Avenora<span className="text-[#CCFF00]">.ai</span>
        </span>
      </a>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-zinc-300" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-[#CCFF00] transition-colors whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={onOpenTour}
          className="hover:text-[#CCFF00] transition-colors whitespace-nowrap cursor-pointer text-zinc-300"
          aria-label="Open interactive architecture tour"
        >
          Architecture
        </button>
      </nav>

      {/* Primary CTA — hidden on mobile */}
      <div className="hidden sm:flex items-center space-x-3">
        <button
          id="navbar-request-access"
          onClick={onRequestAccess}
          className="px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600] active:scale-95 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] tracking-tight whitespace-nowrap cursor-pointer"
          aria-label="Request enterprise access"
        >
          Request Access
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-zinc-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
        aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-nav"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="absolute top-full left-0 right-0 bg-zinc-950/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col space-y-1 lg:hidden shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-zinc-300 hover:text-[#CCFF00] py-2.5 border-b border-white/5 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTour();
            }}
            className="text-left text-base text-zinc-300 hover:text-[#CCFF00] py-2.5 border-b border-white/5 transition-colors cursor-pointer"
          >
            Architecture
          </button>
          <div className="pt-4 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestAccess();
              }}
              className="w-full py-3.5 rounded-full text-center text-sm font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600] active:scale-95 transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)]"
            >
              Request Access
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

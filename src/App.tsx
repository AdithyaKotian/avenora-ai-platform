import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ExecutionGap } from './components/ExecutionGap';
import { ExecutionLoop } from './components/ExecutionLoop';
import { BentoGrid } from './components/BentoGrid';
import { PersonaMatrix } from './components/PersonaMatrix';
import { PersonaImpact } from './components/PersonaImpact';
import { EnterpriseTrust } from './components/EnterpriseTrust';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { RequestAccessModal } from './components/RequestAccessModal';
import { ArchitectureTourModal } from './components/ArchitectureTourModal';
import { WhitepaperModal } from './components/WhitepaperModal';

export default function App() {
  const [accessModalOpen, setAccessModalOpen] = useState(false);
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [whitepaperModalOpen, setWhitepaperModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-[#CCFF00] selection:text-black">
      {/* Subtle Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Top Fixed Navigation */}
      <Navbar
        onRequestAccess={() => setAccessModalOpen(true)}
        onOpenTour={() => setTourModalOpen(true)}
      />

      <main>
        {/* 1. Hero Section with Live Execution Graph */}
        <Hero
          onRequestAccess={() => setAccessModalOpen(true)}
          onOpenTour={() => setTourModalOpen(true)}
        />

        {/* 2. Social Proof & Trust Ledger */}
        <SocialProof />

        {/* 3. The Problem: The Execution Gap */}
        <ExecutionGap />

        {/* 4. The Solution: The Execution Loop */}
        <ExecutionLoop />

        {/* 5. Core Capabilities: High-Frequency Jobs Bento Grid */}
        <BentoGrid />

        {/* 6. Persona Value Breakdown */}
        <PersonaMatrix />

        {/* 6b. Interactive Persona Impact */}
        <PersonaImpact />

        {/* 7. Enterprise Infrastructure & Assurance */}
        <EnterpriseTrust
          onOpenWhitepaper={() => setWhitepaperModalOpen(true)}
          onOpenTour={() => setTourModalOpen(true)}
        />

        {/* 8. Final Call to Action */}
        <FinalCTA
          onRequestDemo={() => setAccessModalOpen(true)}
          onOpenWhitepaper={() => setWhitepaperModalOpen(true)}
        />
      </main>

      {/* 9. Footer */}
      <Footer
        onOpenWhitepaper={() => setWhitepaperModalOpen(true)}
        onRequestAccess={() => setAccessModalOpen(true)}
      />

      {/* Interactive Modals */}
      <RequestAccessModal
        isOpen={accessModalOpen}
        onClose={() => setAccessModalOpen(false)}
      />

      <ArchitectureTourModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
        onRequestAccess={() => {
          setTourModalOpen(false);
          setAccessModalOpen(true);
        }}
      />

      <WhitepaperModal
        isOpen={whitepaperModalOpen}
        onClose={() => setWhitepaperModalOpen(false)}
        onRequestAccess={() => {
          setWhitepaperModalOpen(false);
          setAccessModalOpen(true);
        }}
      />
    </div>
  );
}

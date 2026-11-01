import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './components/Hero';
import { ExecutionGap } from './components/ExecutionGap';
import { ExecutionLoop } from './components/ExecutionLoop';
import { AvenoraExecutionGraph } from './components/AvenoraExecutionGraph';
import { PersonaMatrix } from './components/PersonaMatrix';
import { BentoGrid } from './components/BentoGrid';
import { EnterpriseTrust } from './components/EnterpriseTrust';
import { SocialProof } from './components/SocialProof';
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
        {/* 1. Hero Section (Dark bg-black: Headline, CTAs, & Live System Architecture Status Strip) */}
        <Hero
          onRequestAccess={() => setAccessModalOpen(true)}
          onOpenTour={() => setTourModalOpen(true)}
        />

        {/* 2. The Problem: Your Enterprise Has Data Everywhere (Light bg-white: Systemic Failure + Legacy vs Avenora contrast) */}
        <ExecutionGap />

        {/* 3. The Solution: The Avenora Execution Loop (Dark bg-zinc-950: 01 Ingest, 02 Understand, 03 Act & Learn) */}
        <ExecutionLoop />

        {/* 4. Flagship Execution Graph & HITL Governance Workspace (Dark bg-black: Live Graph + Status Quo Toggle + RAG/HITL Inspector) */}
        <AvenoraExecutionGraph />

        {/* 5. Target Audience Alignment & Interactive Day-in-the-Life Transformation (Light bg-white with 4-role switcher) */}
        <PersonaMatrix />

        {/* 6. Core Capabilities: 5 High-Frequency Jobs Bento Grid (Dark bg-zinc-950) */}
        <BentoGrid />

        {/* 7. Enterprise by Design: Security, Compliance & Integrations (Light bg-white) */}
        <EnterpriseTrust
          onOpenWhitepaper={() => setWhitepaperModalOpen(true)}
          onOpenTour={() => setTourModalOpen(true)}
        />

        {/* 8. Verifiable Architectural Guarantees & Ecosystem Integrations (Dark bg-zinc-950) */}
        <SocialProof />

        {/* 9. Final Call to Action (Dark bg-black) */}
        <FinalCTA
          onRequestDemo={() => setAccessModalOpen(true)}
          onOpenWhitepaper={() => setWhitepaperModalOpen(true)}
        />
      </main>

      {/* 10. Footer with Modern Avenora Logo */}
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

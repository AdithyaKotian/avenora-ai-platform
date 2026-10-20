# Avenora AI — Enterprise Execution Platform

> **Turn Execution Into an Advantage.**
> Avenora AI unifies enterprise data, systems, and teams to eliminate broken handoffs and transform high-level strategy into verifiable business outcomes.

---

## What This Application Does

Avenora AI is an **enterprise-grade marketing and lead generation site** for a B2B SaaS platform that offers AI-powered execution intelligence. The application is a single-page React application (SPA) built for high-converting enterprise sales motions.

### Key Sections

| Section | Purpose |
|---|---|
| **Hero** | Live execution graph demo with simulated telemetry signals |
| **Social Proof** | Key metrics, enterprise integrations, and compliance badges |
| **Execution Gap** | Interactive "Status Quo vs. Avenora AI" comparison tool |
| **Execution Loop** | Three-stage architecture walkthrough (Ingest → Understand → Act) |
| **Capabilities (BentoGrid)** | Five core product capabilities with interactive deep-dive modals |
| **Persona Matrix** | Value proposition breakdown by persona (Executives, PMs, Teams, Stakeholders) |
| **Persona Impact** | Day-in-the-life before/after comparison for Project Managers |
| **Enterprise Trust** | Security, compliance, cloud, and API integration cards |
| **Final CTA** | High-conversion call-to-action section |
| **Footer** | Brand, copyright, and navigation links |

### Interactive Modals

- **Request Access** — Enterprise access request modal with client-side validation; currently simulates submission and does not send or store requests
- **Architecture Tour** — 4-tier system architecture walkthrough with tabbed navigation
- **Security Whitepaper** — In-browser security whitepaper with downloadable text summary

---

## Architecture Overview

| Property | Value |
|---|---|
| **Type** | Pure frontend SPA (no backend required) |
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS v4 (via `@tailwindcss/vite` plugin) |
| **Animation** | Framer Motion (via `motion` package) |
| **Icons** | Lucide React |
| **Fonts** | Plus Jakarta Sans + JetBrains Mono (Google Fonts) |

---

## Prerequisites

- **Node.js** `>= 18.0.0` (LTS recommended)
- **npm** `>= 9.0.0`

---

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd avenora-ai-—-enterprise-ai-business-execution-platform

# Install dependencies
npm install
```

---

## Running Locally

```bash
npm run dev
```

The development server starts at `http://localhost:3000`.

> The app is entirely client-side — no backend, environment variables, or API keys are required to run locally.

---

## Environment Variables

**This project has no required environment variables** for the current frontend-only implementation. The application is a client-side single page application (SPA), and the current codebase does not connect to or use external API endpoints (such as `https://api.avenora.ai`).

> **Security Note:** If custom client-accessible environment variables are added in the future, Vite requires them to be prefixed with `VITE_`. Never put secret API keys, tokens, or service credentials in `VITE_` variables — they are bundled into the client-side code and visible to anyone.

---

## Build and Testing

### Production Build

```bash
npm run build
```

Build output is written to the `dist/` directory, containing optimized, production-ready static assets (HTML, CSS, and hashed JavaScript).

### Preview Production Build Locally

```bash
npm run preview
```

### Type Checking / Linting

```bash
npm run lint
```

This runs `tsc --noEmit` to perform a full TypeScript type check without emitting files.

---

## Deploying to Vercel

### Option A: Vercel Dashboard (recommended)

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import your repository.
4. Vercel will automatically detect the **Vite** framework.
5. Confirm the following settings (already in `vercel.json`):
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click **Deploy**.

> No environment variables are required for the current frontend-only deployment.

### Option B: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Vercel Configuration

The `vercel.json` file already configures:
- Correct build and output directory for Vite
- SPA rewrite rule (all routes → `/index.html`)
- Security headers (X-Frame-Options, X-XSS-Protection, etc.)
- Aggressive cache headers for hashed static assets

---

## Future Backend Integration

The **Request Access** form currently simulates submission after basic client-side validation. It does not send network requests, persist data, or transmit information to any backend services or external endpoints (the current application does not use `https://api.avenora.ai`).

To integrate a real backend in the future:

1. Create a backend API endpoint or serverless handler (e.g., a Vercel serverless function or external lead management service).
2. Replace the simulated submission handler in `src/components/RequestAccessModal.tsx` with an active `fetch()` request to your endpoint.
3. If an endpoint URL is configured via environment variables, ensure the variable name begins with the `VITE_` prefix.

### Required External Services (if adding backend)

| Service | Purpose |
|---|---|
| Form endpoint / CRM | Receive and store lead capture form submissions |
| Email provider | Send confirmation emails to leads |
| Analytics | Track conversion events |

---

## Project Structure

```
├── index.html              # Entry HTML with SEO meta tags
├── vite.config.ts          # Vite + Tailwind build config with chunk splitting
├── vercel.json             # Vercel deployment config (SPA rewrites + security headers)
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies (avenora-ai)
├── .env.example            # Environment variable documentation
├── .gitignore
├── .npmrc
├── public/
│   ├── favicon.svg         # Brand favicon (lime green A)
│   └── assets/
└── src/
    ├── main.tsx            # React DOM entry point
    ├── App.tsx             # Root component with modal state management
    ├── index.css           # Global styles, design tokens, Tailwind imports
    └── components/
        ├── Navbar.tsx              # Scroll-aware fixed navigation
        ├── ScrollProgress.tsx      # Top progress bar indicator
        ├── Hero.tsx                # Hero section with live execution graph
        ├── SocialProof.tsx         # Metrics, integrations, compliance badges
        ├── ExecutionGap.tsx        # Problem: interactive comparison tool
        ├── ExecutionLoop.tsx       # Solution: 3-stage architecture with telemetry
        ├── BentoGrid.tsx           # 5 capabilities with deep-dive modals
        ├── PersonaMatrix.tsx       # Value breakdown by persona
        ├── PersonaImpact.tsx       # Before/after comparison rows
        ├── EnterpriseTrust.tsx     # Security & integration cards
        ├── FinalCTA.tsx            # Conversion-focused CTA section
        ├── Footer.tsx              # Brand, copyright, nav links
        ├── RequestAccessModal.tsx  # Lead capture form (accessible)
        ├── ArchitectureTourModal.tsx # 4-tier system tour (tab navigation)
        └── WhitepaperModal.tsx     # Security whitepaper viewer + download
```

---

## Known Limitations

| Limitation | Status |
|---|---|
| **Form submissions are simulated** | Client-side simulation only — the Request Access form does not send network requests or store data. |
| **No analytics** | No tracking/analytics events configured. |
| **No real-time data** | Telemetry numbers in Hero and BentoGrid are simulated with `setInterval` / React state. |
| **OG image placeholder** | `og:image` points to `https://avenora.ai/og-image.png` which does not exist yet. Create a 1200×630 image for social sharing previews. |

---

## Browser Support

Targets modern evergreen browsers. The Vite build output uses ES2020 syntax which is supported by:
- Chrome 85+
- Firefox 78+
- Safari 14+
- Edge 85+

---

*© 2026 Avenora AI Inc.*

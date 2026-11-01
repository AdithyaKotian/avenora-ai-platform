# Avenora AI — Enterprise AI Business Execution Platform

**Turn Execution Into an Advantage.**

Avenora AI unifies enterprise data, systems, and teams to eliminate broken handoffs and transform high-level strategy into verifiable business outcomes.

## Tech Stack

- **React 19** with TypeScript
- **Vite 8** — build tool & dev server
- **Tailwind CSS 4** — utility-first styling via Vite plugin
- **Motion** (Framer Motion) — scroll & layout animations
- **Lucide React** — icon library

## Getting Started

### Prerequisites

- Node.js 22.x or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run typecheck
```

## Deployment

Deployed via **Vercel** with automatic GitHub integration.

| Setting          | Value         |
|------------------|---------------|
| Framework        | Vite          |
| Root Directory   | `.`           |
| Install Command  | `npm install` |
| Build Command    | `npm run build` |
| Output Directory | `dist`        |
| Node.js Version  | 22.x          |

## Environment Variables

No environment variables are required for the frontend.

See [.env.example](.env.example) for future backend integration placeholders.

## License

© 2026 Avenora AI Inc. All rights reserved.

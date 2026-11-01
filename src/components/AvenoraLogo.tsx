import React, { useId } from 'react';

interface AvenoraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export const AvenoraLogo: React.FC<AvenoraLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
}) => {
  const uid = useId().replace(/:/g, '');

  const dimensions = {
    sm: { height: 32, markOnlyWidth: 32, fullWidth: 168 },
    md: { height: 38, markOnlyWidth: 38, fullWidth: 196 },
    lg: { height: 46, markOnlyWidth: 46, fullWidth: 236 },
  }[size];

  const svgWidth = showWordmark ? dimensions.fullWidth : dimensions.markOnlyWidth;
  const viewBox = showWordmark ? '0 0 210 44' : '0 0 44 44';

  return (
    <div
      className={`inline-flex items-center group select-none text-brand-lime ${className}`}
      role="img"
      aria-label="Avenora.ai — Enterprise AI Execution Platform"
    >
      <svg
        width={svgWidth}
        height={dimensions.height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible transition-transform duration-300 group-hover:scale-[1.015]"
      >
        <defs>
          {/* Primary Brand-Lime Vector Gradient */}
          <linearGradient
            id={`avn-lime-grad-${uid}`}
            x1="4"
            y1="4"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#E8FF7A" />
            <stop offset="50%" stopColor="var(--color-brand-lime, #CCFF00)" />
            <stop offset="100%" stopColor="#88B800" />
          </linearGradient>

          {/* Secondary Structural Metallic Gradient */}
          <linearGradient
            id={`avn-steel-grad-${uid}`}
            x1="6"
            y1="6"
            x2="38"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="65%" stopColor="#D4D4D8" />
            <stop offset="100%" stopColor="#71717A" />
          </linearGradient>

          {/* Dark Obsidian Core Surface */}
          <linearGradient
            id={`avn-core-bg-${uid}`}
            x1="0"
            y1="0"
            x2="44"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#18181B" />
            <stop offset="100%" stopColor="#09090B" />
          </linearGradient>

          {/* Subtle Brand-Lime Drop Glow */}
          <filter
            id={`avn-glow-${uid}`}
            x="-25%"
            y="-25%"
            width="150%"
            height="150%"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ============================================================
            1. ISOMETRIC EXECUTION LOOP & NEURAL PRISM EMBLEM (0..44)
           ============================================================ */}
        <g>
          {/* Outer Precision Squircle Frame */}
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="11"
            fill={`url(#avn-core-bg-${uid})`}
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1.25"
            className="transition-colors duration-300 group-hover:stroke-brand-lime/60"
          />

          {/* Subtle Inner Isometric Grid / Execution Loop Orbit Ring */}
          <circle
            cx="22"
            cy="22"
            r="14.5"
            stroke="var(--color-brand-lime, #CCFF00)"
            strokeOpacity="0.22"
            strokeWidth="1"
            strokeDasharray="3 2.5"
          />

          {/* Continuous Execution Loop Arc (Top-Right Active Telemetry Vector) */}
          <path
            d="M22 7.5C30.0081 7.5 36.5 13.9919 36.5 22C36.5 25.42 35.31 28.56 33.33 31.04"
            stroke="var(--color-brand-lime, #CCFF00)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Left Structural Wing of the 'A' Prism (Ingest Vector) */}
          <path
            d="M22 8.5L10.5 32.5H16.2L22 19.6L19.2 14.2L22 8.5Z"
            fill={`url(#avn-steel-grad-${uid})`}
          />

          {/* Right Brand-Lime Wing of the 'A' Prism (Forward Execution Vector) */}
          <path
            d="M22 8.5L33.5 32.5H27.8L22 19.6V8.5Z"
            fill={`url(#avn-lime-grad-${uid})`}
          />

          {/* Dynamic Crossbar Vector (Bridging Ingest -> Act with Forward Arrow Geometry) */}
          <path
            d="M14.2 26.2L22 22.4L29.8 26.2L27.9 29.6L22 26.8L16.1 29.6L14.2 26.2Z"
            fill="var(--color-brand-lime, #CCFF00)"
            filter={`url(#avn-glow-${uid})`}
          />

          {/* 3 Execution Loop Nodes: See (Top), Predict (Bottom-Left), Execute (Bottom-Right) */}
          <circle
            cx="22"
            cy="8.5"
            r="2"
            fill="#FFFFFF"
            stroke="var(--color-brand-lime, #CCFF00)"
            strokeWidth="1.2"
          />
          <circle
            cx="13.3"
            cy="32.5"
            r="1.6"
            fill="var(--color-brand-lime, #CCFF00)"
          />
          <circle
            cx="30.7"
            cy="32.5"
            r="1.6"
            fill="var(--color-brand-lime, #CCFF00)"
          />

          {/* Central Neural Reasoning Core */}
          <circle
            cx="22"
            cy="19.5"
            r="2.2"
            fill="#09090B"
            stroke="var(--color-brand-lime, #CCFF00)"
            strokeWidth="1.5"
          />
        </g>

        {/* ============================================================
            2. CUSTOM GEOMETRIC VECTOR WORDMARK & .AI BADGE (54..210)
           ============================================================ */}
        {showWordmark && (
          <g transform="translate(53, 0)">
            {/* Custom Vector Letterforms for "AVENORA" */}
            <g fill="#FFFFFF">
              {/* A */}
              <path d="M7.6 10.5L0.8 26.5H4.3L5.7 23H12.5L13.9 26.5H17.5L10.7 10.5H7.6ZM6.9 20L9.1 14.3L11.3 20H6.9Z" />
              {/* V */}
              <path d="M18.4 10.5L24.6 26.5H27.9L34.1 10.5H30.5L26.3 22.1L22.1 10.5H18.4Z" />
              {/* E */}
              <path d="M36.6 10.5V26.5H48.2V23.5H40V19.8H47.1V16.9H40V13.5H48.0V10.5H36.6Z" />
              {/* N */}
              <path d="M51.4 10.5V26.5H54.7V16.1L62.6 26.5H65.6V10.5H62.3V20.8L54.5 10.5H51.4Z" />
              {/* O (Octagonal / Geometric Precision Ring) */}
              <path d="M76.8 10.2C71.9 10.2 68.4 13.7 68.4 18.5C68.4 23.3 71.9 26.8 76.8 26.8C81.7 26.8 85.2 23.3 85.2 18.5C85.2 13.7 81.7 10.2 76.8 10.2ZM76.8 23.7C73.9 23.7 71.9 21.5 71.9 18.5C71.9 15.5 73.9 13.3 76.8 13.3C79.7 13.3 81.7 15.5 81.7 18.5C81.7 21.5 79.7 23.7 76.8 23.7Z" />
              {/* R */}
              <path d="M88.3 10.5V26.5H91.7V20.5H95.1L98.5 26.5H102.3L98.4 19.9C100.5 19.1 101.8 17.4 101.8 15.3C101.8 12.3 99.5 10.5 96.0 10.5H88.3ZM91.7 13.4H95.6C97.4 13.4 98.4 14.2 98.4 15.5C98.4 16.8 97.4 17.6 95.6 17.6H91.7V13.4Z" />
              {/* A */}
              <path d="M110.4 10.5L103.6 26.5H107.1L108.5 23H115.3L116.7 26.5H120.3L113.5 10.5H110.4ZM109.7 20L111.9 14.3L114.1 20H109.7Z" />
            </g>

            {/* Brand-Lime ".AI" Vector Pill & Precision Node */}
            <g transform="translate(123, 9.5)">
              <rect
                x="0"
                y="0"
                width="31"
                height="18"
                rx="5"
                fill="var(--color-brand-lime, #CCFF00)"
                fillOpacity="0.14"
                stroke="var(--color-brand-lime, #CCFF00)"
                strokeWidth="1.2"
              />
              {/* Dot (.) */}
              <circle
                cx="6.2"
                cy="12.5"
                r="1.5"
                fill="var(--color-brand-lime, #CCFF00)"
              />
              {/* A */}
              <path
                d="M14.1 4.5L10.3 13.8H12.4L13.1 11.9H16.9L17.6 13.8H19.8L16.0 4.5H14.1ZM13.8 10.1L15.0 6.9L16.2 10.1H13.8Z"
                fill="var(--color-brand-lime, #CCFF00)"
              />
              {/* I */}
              <path
                d="M21.8 4.5V13.8H24.0V4.5H21.8Z"
                fill="var(--color-brand-lime, #CCFF00)"
              />
            </g>

            {/* Bottom Architectural Sub-Label Vector Bar + Telemetry Track */}
            <g transform="translate(1, 31.5)">
              <rect
                x="0"
                y="2.2"
                width="18"
                height="1.5"
                rx="0.75"
                fill="var(--color-brand-lime, #CCFF00)"
              />
              <circle
                cx="22"
                cy="3"
                r="1.2"
                fill="var(--color-brand-lime, #CCFF00)"
              />
              <text
                x="27"
                y="5.5"
                fill="#A1A1AA"
                fontSize="6.5"
                fontWeight="700"
                fontFamily="var(--font-mono, monospace)"
                letterSpacing="0.22em"
              >
                EXECUTION AI
              </text>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};

import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center select-none">
      <svg viewBox="0 0 450 100" className="h-12 w-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`
              .logo-vars {
                --logo-primary: #E1FF61;
                --logo-cyan: #DAF5FF;
                --logo-magenta: #FFE9F9;
                --logo-neutral: #171717;
                --logo-neutral-dim: #737373;
                --logo-text: #171717;
              }
              @media (prefers-color-scheme: dark) {
                .logo-vars {
                  --logo-primary: #E1FF61;
                  --logo-cyan: #DAF5FF;
                  --logo-magenta: #FFE9F9;
                  --logo-neutral: #F1F2EC;
                  --logo-neutral-dim: #a3a3a3;
                  --logo-text: #F1F2EC;
                }
              }
              
              .eab-body {
                fill: url(#eab-gradient-main);
                stroke: var(--logo-neutral);
                stroke-width: 1.5;
                stroke-linejoin: round;
                transition: all 0.4s ease;
              }

              .eab-thorax {
                fill: url(#eab-gradient-thorax);
                stroke: var(--logo-neutral);
                stroke-width: 1.5;
                stroke-linejoin: round;
                transition: all 0.4s ease;
              }

              .eab-head {
                fill: url(#eab-gradient-head);
                stroke: var(--logo-neutral);
                stroke-width: 1.5;
                stroke-linejoin: round;
              }

              .eab-eye {
                fill: var(--logo-neutral);
              }

              .eab-leg {
                fill: none;
                stroke: var(--logo-neutral);
                stroke-width: 2;
                stroke-linecap: round;
                stroke-linejoin: round;
                transition: all 0.4s ease;
              }

              .eab-antenna {
                fill: none;
                stroke: var(--logo-neutral);
                stroke-width: 1.5;
                stroke-linecap: round;
                stroke-linejoin: round;
              }

              .eab-ridge {
                fill: none;
                stroke: var(--logo-cyan);
                stroke-width: 0.75;
                opacity: 0.7;
              }

              .logo-container:hover .eab-body {
                fill: url(#eab-gradient-hover);
              }
              .logo-container:hover .eab-leg {
                stroke: var(--logo-primary);
              }
              .logo-container:hover .eab-thorax {
                fill: url(#eab-gradient-main);
              }
              
              .wordmark {
                font-family: 'Manrope', sans-serif;
                font-size: 42px;
                fill: var(--logo-text);
                letter-spacing: 0.12em;
              }
              .wordmark-bold {
                font-weight: 700;
                fill: var(--logo-neutral-dim);
              }
              .wordmark-light {
                font-weight: 300;
              }
            `}
          </style>

          {/* Metallic Gradients inspired by the real Emerald Ash Borer */}
          <linearGradient id="eab-gradient-main" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#E1FF61" />
            <stop offset="40%" stop-color="#DAF5FF" />
            <stop offset="100%" stop-color="#E1FF61" />
          </linearGradient>

          <linearGradient id="eab-gradient-hover" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#DAF5FF" />
            <stop offset="50%" stop-color="#E1FF61" />
            <stop offset="100%" stop-color="#FFE9F9" />
          </linearGradient>

          <linearGradient id="eab-gradient-thorax" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#DAF5FF" />
            <stop offset="20%" stop-color="#FFE9F9" />
            <stop offset="50%" stop-color="#E1FF61" />
            <stop offset="80%" stop-color="#FFE9F9" />
            <stop offset="100%" stop-color="#DAF5FF" />
          </linearGradient>

          <linearGradient id="eab-gradient-head" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#E1FF61" />
            <stop offset="100%" stop-color="#DAF5FF" />
          </linearGradient>
        </defs>
        
        <g className="logo-vars logo-container">
          {/* Emerald Ash Borer */}
          
          {/* Legs */}
          <g className="eab-legs">
            {/* Front */}
            <path className="eab-leg" d="M 36 32 L 20 22 L 14 30" />
            <path className="eab-leg" d="M 64 32 L 80 22 L 86 30" />
            {/* Mid */}
            <path className="eab-leg" d="M 34 46 L 16 44 L 10 56" />
            <path className="eab-leg" d="M 66 46 L 84 44 L 90 56" />
            {/* Back */}
            <path className="eab-leg" d="M 36 60 L 20 72 L 16 90" />
            <path className="eab-leg" d="M 64 60 L 80 72 L 84 90" />
          </g>

          {/* Antennae */}
          <g className="eab-antennae">
            <path className="eab-antenna" d="M 40 16 L 34 8 L 30 10 L 26 4 L 22 6" />
            <path className="eab-antenna" d="M 60 16 L 66 8 L 70 10 L 74 4 L 78 6" />
          </g>

          {/* Body Core */}
          <g className="eab-core">
            {/* Head */}
            <path className="eab-head" d="M 40 23 C 40 12, 60 12, 60 23 C 60 26, 40 26, 40 23 Z" />

            {/* Large Compound Eyes */}
            <ellipse cx="36" cy="19" rx="5" ry="8" transform="rotate(-20 36 19)" className="eab-eye" />
            <ellipse cx="64" cy="19" rx="5" ry="8" transform="rotate(20 64 19)" className="eab-eye" />

            {/* Thorax (Pronotum) - The metallic shield */}
            <path className="eab-thorax" d="M 38 24 Q 50 22 62 24 L 65 40 Q 50 42 35 40 Z" />

            {/* Scutellum (small triangle between thorax and wings) */}
            <polygon points="48,41 52,41 50,45" fill="var(--logo-neutral)" />

            {/* Elytra (Wing Covers) - Tapered bullet shape */}
            <path className="eab-body" d="M 35 40 C 33 60, 40 85, 49.5 94 L 49.5 40 Z" />
            <path className="eab-body" d="M 65 40 C 67 60, 60 85, 50.5 94 L 50.5 40 Z" />

            {/* Ridges/Striations on Elytra */}
            <path className="eab-ridge" d="M 39 44 C 37 60, 44 82, 47 90" />
            <path className="eab-ridge" d="M 43 42 C 41 60, 46 82, 48 92" />
            <path className="eab-ridge" d="M 61 44 C 63 60, 56 82, 53 90" />
            <path className="eab-ridge" d="M 57 42 C 59 60, 54 82, 52 92" />
          </g>
          
          {/* Wordmark */}
          <text x="115" y="65" className="wordmark wordmark-light">
            IGDRASIL<tspan className="wordmark-bold" dx="5">AB</tspan>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
import React from 'react';

interface NexgenOpsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light';
  showTagline?: boolean;
  iconOnly?: boolean;
}

export const NexgenOpsLogo: React.FC<NexgenOpsLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
  showTagline = false,
  iconOnly = false,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const taglineSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Exact Vector Emblem based on Brand Asset */}
      <div className={`relative shrink-0 ${iconSizes[size]}`}>
        <svg 
          viewBox="0 0 120 120" 
          className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="orbitRingGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0b3859" />
              <stop offset="50%" stopColor="#0e7490" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="arrowNVector" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="45%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>

          {/* Outer Orbital Orbit Ring */}
          <path
            d="M 28 84 C 20 62 26 36 46 22 C 68 8 96 16 106 38"
            stroke="url(#orbitRingGrad)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M 100 48 C 104 68 96 90 76 102 C 52 112 28 100 22 82"
            stroke="url(#orbitRingGrad)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Dynamic Interlocking 'N' with Arrow Top-Right */}
          <path
            d="M 36 78 L 54 42 C 57 36 63 36 66 42 L 75 60 L 88 32"
            stroke="url(#arrowNVector)"
            strokeWidth="9.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 54 42 L 74 76 L 88 34"
            stroke="url(#arrowNVector)"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Ascending Arrow Point */}
          <polygon
            points="88,18 104,36 82,35"
            fill="#38bdf8"
          />
        </svg>
      </div>

      {/* Brand Name & Tagline */}
      {!iconOnly && (
        <div className="flex flex-col">
          <div className={`font-extrabold tracking-tight leading-none ${textSizes[size]}`}>
            <span className="text-slate-900 dark:text-white transition-colors">
              Nexgen
            </span>
            <span className="text-cyan-500 dark:text-cyan-400 font-extrabold ml-0.5">
              Ops
            </span>
          </div>
          {showTagline && (
            <span className={`text-slate-400 font-medium tracking-normal mt-0.5 whitespace-nowrap ${taglineSizes[size]}`}>
              Smart Operations &amp; Facility Management Platform
            </span>
          )}
        </div>
      )}
    </div>
  );
};

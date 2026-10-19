import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
  showText?: boolean;
}

export function Logo({
  className = "",
  size = "sm",
  variant = "dark",
  showText = true,
}: LogoProps) {
  const iconDimensions = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }[size];

  const titleSizes = {
    sm: "text-base tracking-[0.16em]",
    md: "text-lg tracking-[0.16em]",
    lg: "text-xl tracking-[0.18em]",
  }[size];

  const subtitleSizes = {
    sm: "text-[9px] tracking-[0.22em]",
    md: "text-[10px] tracking-[0.22em]",
    lg: "text-[11px] tracking-[0.24em]",
  }[size];

  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Luxury Dental Crest Mark */}
      <div
        className={`relative ${iconDimensions} rounded-xl overflow-hidden shadow-xs shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${
          isLight
            ? "border border-zinc-700 bg-zinc-900 shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            : "border border-zinc-900 bg-zinc-950 shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
        }`}
      >
        <svg
          viewBox="0 0 512 512"
          className="w-full h-full p-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`goldGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="40%" stopColor="#dfb76c" />
              <stop offset="100%" stopColor="#b48545" />
            </linearGradient>
            <linearGradient id={`toothGrad-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e2e8e5" />
            </linearGradient>
          </defs>

          {/* Gentle background accent */}
          <circle cx="256" cy="256" r="150" fill="#142823" opacity="0.6" />

          {/* Precision Tooth Silhouette */}
          <path
            d="M 256 168
               C 232 136 190 132 165 154
               C 138 178 132 216 138 252
               C 146 292 164 328 196 376
               C 207 392 222 392 228 372
               C 238 340 248 316 256 316
               C 264 316 274 340 284 372
               C 290 392 305 392 316 376
               C 348 328 366 292 374 252
               C 380 216 374 178 347 154
               C 322 132 280 136 256 168 Z"
            fill={`url(#toothGrad-${variant})`}
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="4"
          />

          {/* Smile Accent Curve */}
          <path
            d="M 198 248 C 228 284 284 284 314 248"
            fill="none"
            stroke={`url(#goldGrad-${variant})`}
            strokeWidth="16"
            strokeLinecap="round"
          />

          {/* Radiant Aura Sparkle Star */}
          <path
            d="M 378 86
               Q 378 132 424 132
               Q 378 132 378 178
               Q 378 132 332 132
               Q 378 132 378 86 Z"
            fill={`url(#goldGrad-${variant})`}
          />
          <circle cx="378" cy="132" r="5" fill="#ffffff" />

          {/* Delicate Secondary Sparkle */}
          <path
            d="M 132 290
               Q 132 310 152 310
               Q 132 310 132 330
               Q 132 310 112 310
               Q 132 310 132 290 Z"
            fill={`url(#goldGrad-${variant})`}
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col text-left leading-tight">
          <span
            className={`font-bold uppercase ${titleSizes} ${
              isLight ? "text-white" : "text-zinc-950"
            }`}
          >
            Aura
          </span>
          <span
            className={`font-semibold uppercase ${subtitleSizes} ${
              isLight ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Dental Clinic · NYC
          </span>
        </div>
      )}
    </div>
  );
}

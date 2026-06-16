'use client'

import { useState } from 'react'

type PitchImageProps = {
  src: string
  alt: string
  // Sizing/shape classes applied to both the real image and the fallback box,
  // so an empty slot keeps the same footprint as the eventual image.
  className?: string
}

// Renders the image, or a clean labeled placeholder if the file is missing
// (the deck scaffolds image paths before the real assets exist).
export default function PitchImage({ src, alt, className = '' }: PitchImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-[var(--p-cream)]/[0.04] p-6 text-center ${className}`}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
          className="text-[var(--p-haze)]/60"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span className="text-[11px] font-medium uppercase tracking-widest text-[var(--p-haze)]">
          Image placeholder
        </span>
        <span className="max-w-xs text-sm text-[var(--p-haze)]/80">{alt}</span>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} onError={() => setFailed(true)} className={className} />
  )
}

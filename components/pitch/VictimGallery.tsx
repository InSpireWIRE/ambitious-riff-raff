'use client'

import { useEffect, useState } from 'react'
import PitchImage from './PitchImage'

type Victim = {
  name: string
  age: number
  found: string
  photo: string
  bio: string
}

type VictimGalleryProps = {
  victims: Victim[]
}

// A clean, uniform grid of victim portraits. Each tile is the same size
// (4:5 portrait, cropped to fill) so the page reads consistently regardless
// of the source photos. Clicking a tile opens the victim's full bio.
export default function VictimGallery({ victims }: VictimGalleryProps) {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  const open = active !== null ? victims[active] : null

  return (
    <>
      <div className="my-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {victims.map((victim, i) => (
          <button
            key={victim.name}
            type="button"
            onClick={() => setActive(i)}
            className="group flex flex-col overflow-hidden rounded-2xl bg-[var(--p-panel)] text-left shadow-md ring-1 ring-[var(--p-cool)]/25 transition-all hover:shadow-xl hover:ring-[var(--p-cool)]/50 focus-visible:shadow-xl"
          >
            <PitchImage
              src={victim.photo}
              alt={victim.name}
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="flex flex-col gap-1 px-5 py-4">
              <span className="font-[family-name:var(--font-fraunces)] text-xl text-[var(--p-cream)]">
                {victim.name}, {victim.age}
              </span>
              <span className="text-xs uppercase tracking-wide text-[var(--p-haze)]">
                Body found {victim.found}
              </span>
            </span>
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.name}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--p-ink)]/90 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--p-cream)]/90 text-[var(--p-ink)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[85vh] w-full max-w-3xl flex-col gap-6 overflow-y-auto rounded-2xl bg-[var(--p-panel)] p-6 shadow-2xl sm:flex-row sm:p-8"
          >
            <PitchImage
              src={open.photo}
              alt={open.name}
              className="aspect-[4/5] w-full shrink-0 rounded-xl object-cover sm:w-56"
            />
            <div className="min-w-0">
              <h3 className="font-[family-name:var(--font-fraunces)] text-2xl text-[var(--p-cream)] md:text-3xl">
                {open.name}, {open.age}
              </h3>
              <p className="mt-1 text-sm uppercase tracking-wide text-[var(--p-bright)]">
                Body found {open.found}
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--p-cream)]/85">{open.bio}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

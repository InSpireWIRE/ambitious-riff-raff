'use client'

import { useEffect, useState } from 'react'
import PitchImage from './PitchImage'

type GalleryImage = { src: string; alt: string; caption?: string }

type ImageGalleryProps = {
  images: GalleryImage[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  const open = active !== null ? images[active] : null

  // Size the grid to the photo count so 1 photo centers, 2 sit as a clean 2-up,
  // and 3+ fill a 3-wide row — no stranded empty cells.
  const colClass =
    images.length <= 1
      ? 'mx-auto max-w-md grid-cols-1'
      : images.length === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'

  return (
    <>
      <div className={`my-10 grid gap-4 ${colClass}`}>
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(i)}
            className="group overflow-hidden rounded-2xl bg-[var(--p-cream)]/5 shadow-md ring-1 ring-[var(--p-bright)]/15 transition-all hover:shadow-xl hover:ring-[var(--p-bright)]/35 focus-visible:shadow-xl"
          >
            <PitchImage
              src={image.src}
              alt={image.alt}
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--p-ink)]/90 p-6 backdrop-blur-sm"
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
          <div onClick={(e) => e.stopPropagation()}>
            <PitchImage
              src={open.src}
              alt={open.alt}
              className="max-h-[80vh] min-h-[40vh] w-auto min-w-[60vw] max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </div>
          {open.caption && (
            <p className="mt-4 text-center text-sm text-[var(--p-cream)]/80">{open.caption}</p>
          )}
        </div>
      )}
    </>
  )
}

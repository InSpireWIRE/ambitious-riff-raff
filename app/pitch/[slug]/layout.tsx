import type { CSSProperties } from 'react'

// The pitch deck is its own immersive, self-contained world: a deep ink canvas
// with cream ink and cream highlights. These tokens are scoped to this wrapper
// via inline CSS variables, so NONE of the main site's styling is touched.
// Components reference them with arbitrary utilities, e.g. bg-[var(--p-ink)].
const pitchTheme = {
  '--p-ink': '#161B2D', // page background
  '--p-panel': '#1E2438', // cards, sidebar, players
  '--p-cream': '#F4F1EA', // primary text
  '--p-haze': '#8C93AC', // muted text / borders
  '--p-bright': '#FAF7F2', // accent / highlight
} as CSSProperties

export default function PitchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      style={pitchTheme}
      className="min-h-screen bg-[var(--p-ink)] font-[family-name:var(--font-inter)] text-[var(--p-cream)]"
    >
      {children}
    </div>
  )
}

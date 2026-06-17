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
  '--p-bright': '#C8A57C', // warm tan — editorial/type accent (eyebrows, labels, quote mark, stats)
  '--p-cool': '#6E89A8', // slate blue — imagery accent (photo/card frame rings)
  '--accent': '#C8A57C', // focus ring inside the deck, matched to the warm accent
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

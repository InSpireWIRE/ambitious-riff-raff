// Renders a pitch title, dropping any trailing "(parenthetical)" onto its own
// line at 0.75em (a quarter smaller). Em-based so it scales to whatever font
// size the surrounding heading uses.
export default function PitchTitle({ title }: { title: string }) {
  const match = title.match(/^(.*?)\s*(\([^)]*\))\s*$/)
  if (!match) return <>{title}</>
  return (
    <>
      {match[1]}
      <span className="block text-[0.75em]">{match[2]}</span>
    </>
  )
}

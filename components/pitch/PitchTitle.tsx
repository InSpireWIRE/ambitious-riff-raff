// Renders a pitch title, dropping any trailing "(parenthetical)" onto its own
// line at 0.75em (a quarter smaller). Em-based so it scales to whatever font
// size the surrounding heading uses.
export default function PitchTitle({ title }: { title: string }) {
  // A trailing "(parenthetical)" drops to its own line a quarter smaller.
  const paren = title.match(/^(.*?)\s*(\([^)]*\))\s*$/)
  if (paren) {
    return (
      <>
        {paren[1]}
        <span className="block text-[0.75em]">{paren[2]}</span>
      </>
    )
  }
  // An " — subtitle" tail drops to its own line at full size.
  const dash = title.match(/^(.*?)\s+—\s+(.+)$/)
  if (dash) {
    return (
      <>
        {dash[1]}
        <span className="block">{dash[2]}</span>
      </>
    )
  }
  return <>{title}</>
}

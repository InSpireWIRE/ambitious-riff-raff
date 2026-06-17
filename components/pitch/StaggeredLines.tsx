type StaggeredLinesProps = {
  text: string
  // em-indent added per line after the first
  step?: number
  // cap on how many steps of indent accumulate
  maxSteps?: number
}

// Renders a string with explicit "\n" breaks as separate lines, each line
// after the first nudged right by a fixed step — an art-directed descending
// stagger. A single-line string (no "\n") renders unchanged, so this is safe
// to use everywhere.
export default function StaggeredLines({
  text,
  step = 1.5,
  maxSteps = 2,
}: StaggeredLinesProps) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, i) => (
        <span
          key={i}
          className="block"
          style={i > 0 ? { paddingLeft: `${Math.min(i, maxSteps) * step}em` } : undefined}
        >
          {line}
        </span>
      ))}
    </>
  )
}

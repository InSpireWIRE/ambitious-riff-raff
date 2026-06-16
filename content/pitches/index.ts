import type { Pitch } from './types'
import trueCrime1 from './true-crime-1'

// Registry of all pitches, keyed by slug. To add a pitch:
//   1. create content/pitches/<slug>.ts exporting a Pitch
//   2. register it below
//   3. add a PITCH_PASSWORD_<SLUG> env var (see lib/pitch-auth.ts)
export const pitches = new Map<string, Pitch>([[trueCrime1.slug, trueCrime1]])

export function getPitch(slug: string): Pitch | undefined {
  return pitches.get(slug)
}

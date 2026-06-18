// Content model for password-gated pitch decks.
// Each pitch is a config object; adding a new pitch = new file in this folder
// + register it in index.ts + add a PITCH_PASSWORD_<SLUG> env var.

export type ChapterBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'pullquote'; content: string; attribution?: string }
  | { type: 'accent'; content: string }
  // Large, flush-left Fraunces statement styled to match the title logline.
  | { type: 'statement'; content: string }
  // Centered, tan (--p-bright) highlight line — a recurring emphasis beat.
  | { type: 'beat'; content: string }
  | { type: 'audio'; src: string; title: string; description?: string }
  | { type: 'video'; provider: 'vimeo' | 'youtube' | 'self'; src: string; title: string }
  | { type: 'image'; src: string; alt: string; caption?: string; aspect?: '3/2' | '4/5' | '1/1' }
  | { type: 'gallery'; images: { src: string; alt: string; caption?: string }[] }
  | {
      type: 'victims'
      victims: {
        name: string
        age: number
        found: string // date the body was found, e.g. "April 24, 2023"
        photo: string
        bio: string
      }[]
    }
  // boldLead: emphasize the text before the first " — " in each item
  // (bold + uppercase) — used for "OUTLET — headline" press lists.
  | { type: 'list'; items: string[]; boldLead?: boolean }
  | { type: 'stat'; value: string; label: string }

export type Chapter = {
  id: string // url-safe anchor
  title: string
  blocks: ChapterBlock[]
  // Optional decorative wallpaper rendered faded behind the chapter content.
  backgroundImage?: string
  // 'feature' renders the chapter's prose larger, in Fraunces — an editorial
  // treatment for narrative chapters (closer to the title logline's scale).
  prose?: 'feature'
}

export type Pitch = {
  slug: string
  title: string
  subtitle: string
  logline: string
  coverImage?: string
  chapters: Chapter[]
  footer?: { contact?: string; representation: string }
}

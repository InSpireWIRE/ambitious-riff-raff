// Content model for password-gated pitch decks.
// Each pitch is a config object; adding a new pitch = new file in this folder
// + register it in index.ts + add a PITCH_PASSWORD_<SLUG> env var.

export type ChapterBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'pullquote'; content: string; attribution?: string }
  | { type: 'audio'; src: string; title: string; description?: string }
  | { type: 'video'; provider: 'vimeo' | 'youtube' | 'self'; src: string; title: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'gallery'; images: { src: string; alt: string; caption?: string }[] }
  | { type: 'list'; items: string[] }
  | { type: 'stat'; value: string; label: string }

export type Chapter = {
  id: string // url-safe anchor
  number: string // "01", "02"
  title: string
  blocks: ChapterBlock[]
}

export type Pitch = {
  slug: string
  title: string
  subtitle: string
  logline: string
  coverImage?: string
  chapters: Chapter[]
  footer?: { contact: string; representation: string }
}

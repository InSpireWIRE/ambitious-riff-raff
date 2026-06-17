import type { Chapter as ChapterType, ChapterBlock } from '@/content/pitches/types'
import AudioPlayer from './AudioPlayer'
import ImageGallery from './ImageGallery'
import PitchImage from './PitchImage'
import PullQuote from './PullQuote'
import VideoEmbed from './VideoEmbed'

function Block({ block }: { block: ChapterBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="my-6 text-lg leading-relaxed text-[var(--p-cream)]/85">{block.content}</p>
      )

    case 'pullquote':
      return <PullQuote content={block.content} attribution={block.attribution} />

    case 'audio':
      return (
        <AudioPlayer
          src={block.src}
          title={block.title}
          description={block.description}
        />
      )

    case 'video':
      return (
        <VideoEmbed provider={block.provider} src={block.src} title={block.title} />
      )

    case 'image': {
      const aspectClass =
        block.aspect === '4/5'
          ? 'aspect-[4/5]'
          : block.aspect === '1/1'
            ? 'aspect-square'
            : 'aspect-[3/2]'
      // Portrait/square images read best centered at a contained hero width;
      // landscape keeps the full content width it has always had.
      const isPortrait = block.aspect === '4/5' || block.aspect === '1/1'
      return (
        <figure className={`my-10 ${isPortrait ? 'mx-auto max-w-md' : ''}`}>
          <div className="overflow-hidden rounded-2xl bg-[var(--p-cream)]/5 shadow-md ring-1 ring-[var(--p-bright)]/15 transition-all duration-300 hover:shadow-xl hover:ring-[var(--p-bright)]/35">
            <PitchImage
              src={block.src}
              alt={block.alt}
              className={`${aspectClass} w-full object-cover transition-transform duration-500 hover:scale-[1.02]`}
            />
          </div>
          {block.caption && (
            <figcaption className={`mt-3 text-sm text-[var(--p-haze)] ${isPortrait ? 'text-center' : ''}`}>{block.caption}</figcaption>
          )}
        </figure>
      )
    }

    case 'gallery':
      return <ImageGallery images={block.images} />

    case 'list':
      return (
        <ul className="my-6 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-lg leading-relaxed text-[var(--p-cream)]/85">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--p-bright)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )

    case 'stat':
      return (
        <div className="my-6 inline-flex flex-col rounded-2xl border border-[var(--p-haze)]/15 bg-[var(--p-panel)] px-7 py-5 shadow-sm">
          <span className="font-[family-name:var(--font-fraunces)] text-4xl text-[var(--p-bright)] md:text-5xl">{block.value}</span>
          <span className="mt-1 text-sm uppercase tracking-wide text-[var(--p-haze)]">{block.label}</span>
        </div>
      )

    default:
      return null
  }
}

// Group consecutive stat blocks so they sit side-by-side.
function renderBlocks(blocks: ChapterBlock[]) {
  const out: React.ReactNode[] = []
  let i = 0
  while (i < blocks.length) {
    if (blocks[i].type === 'stat') {
      const group: ChapterBlock[] = []
      while (i < blocks.length && blocks[i].type === 'stat') {
        group.push(blocks[i])
        i++
      }
      out.push(
        <div key={`stats-${i}`} className="my-6 flex flex-wrap gap-4">
          {group.map((b, j) => (
            <Block key={j} block={b} />
          ))}
        </div>
      )
    } else {
      out.push(<Block key={i} block={blocks[i]} />)
      i++
    }
  }
  return out
}

export default function Chapter({ chapter }: { chapter: ChapterType }) {
  return (
    <section
      id={chapter.id}
      className="relative isolate scroll-mt-24 border-b border-[var(--p-haze)]/10 py-20 first:pt-12 last:border-b-0 md:py-32"
    >
      {/* Oversized chapter numeral watermark — editorial accent for the deck */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 right-0 -z-10 select-none font-[family-name:var(--font-fraunces)] leading-none text-[var(--p-cream)]/[0.05] text-[7rem] md:-top-8 md:text-[13rem]"
      >
        {chapter.number}
      </span>

      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--p-bright)]">
        Chapter {chapter.number}
      </p>
      <h2 className="font-[family-name:var(--font-fraunces)] text-4xl leading-tight text-[var(--p-cream)] md:text-5xl">
        {chapter.title}
      </h2>
      <div className="mt-8">{renderBlocks(chapter.blocks)}</div>
    </section>
  )
}

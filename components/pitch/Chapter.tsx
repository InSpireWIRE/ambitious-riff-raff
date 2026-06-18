import type { Chapter as ChapterType, ChapterBlock } from '@/content/pitches/types'
import AudioPlayer from './AudioPlayer'
import ImageGallery from './ImageGallery'
import PitchImage from './PitchImage'
import PullQuote from './PullQuote'
import VictimGallery from './VictimGallery'
import VideoEmbed from './VideoEmbed'

function Block({ block, feature }: { block: ChapterBlock; feature?: boolean }) {
  switch (block.type) {
    case 'paragraph':
      return feature ? (
        <p className="my-7 font-[family-name:var(--font-fraunces)] text-[1.3rem] font-normal leading-[1.5] text-[var(--p-cream)]/90 md:my-8 md:text-[1.8rem] md:leading-[1.4]">
          {block.content}
        </p>
      ) : (
        <p className="my-6 whitespace-pre-line text-lg leading-relaxed text-[var(--p-cream)]/85">{block.content}</p>
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
          <div className="overflow-hidden rounded-2xl bg-[var(--p-cream)]/5 shadow-md ring-1 ring-[var(--p-cool)]/25 transition-all duration-300 hover:shadow-xl hover:ring-[var(--p-cool)]/50">
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

    case 'accent':
      return (
        <p
          className={`my-10 whitespace-pre-line text-center font-[family-name:var(--font-fraunces)] italic leading-snug text-[var(--p-cream)] ${
            feature ? 'text-2xl md:text-[2.1rem]' : 'text-xl md:text-2xl'
          }`}
        >
          {block.content}
        </p>
      )

    case 'statement':
      // Mirrors the title logline's typography (see app/pitch/[slug]/page.tsx):
      // large, flush-left, non-italic Fraunces.
      return (
        <p className="my-10 max-w-2xl whitespace-pre-line font-[family-name:var(--font-fraunces)] text-[1.7rem] font-normal leading-[1.3] text-[var(--p-cream)] md:my-14 md:text-[2.5rem] md:leading-[1.22]">
          {block.content}
        </p>
      )

    case 'beat':
      // Centered tan emphasis line. Fixed size (independent of `feature`) so
      // every beat in a chapter reads at the same scale.
      return (
        <p className="my-10 whitespace-pre-line text-center font-[family-name:var(--font-fraunces)] text-2xl italic leading-snug text-[var(--p-bright)] md:text-[2.1rem]">
          {block.content}
        </p>
      )

    case 'gallery':
      return <ImageGallery images={block.images} />

    case 'victims':
      return <VictimGallery victims={block.victims} />

    case 'list':
      return (
        <ul className="my-6 space-y-3">
          {block.items.map((item, i) => {
            // For "OUTLET — headline" lists, bold + uppercase the lead.
            const dashAt = block.boldLead ? item.indexOf(' — ') : -1
            return (
              <li
                key={i}
                className={`flex gap-3 leading-relaxed text-[var(--p-cream)]/85 ${
                  feature ? 'text-[1.2rem] md:text-[1.55rem]' : 'text-lg'
                }`}
              >
                <span
                  aria-hidden
                  className={`shrink-0 rounded-full bg-[var(--p-bright)] ${
                    feature ? 'mt-3 h-2 w-2' : 'mt-2.5 h-1.5 w-1.5'
                  }`}
                />
                <span>
                  {dashAt >= 0 ? (
                    <>
                      <span className="font-bold uppercase tracking-wide text-[var(--p-cream)]">
                        {item.slice(0, dashAt)}
                      </span>
                      {item.slice(dashAt)}
                    </>
                  ) : (
                    item
                  )}
                </span>
              </li>
            )
          })}
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
function renderBlocks(blocks: ChapterBlock[], feature?: boolean) {
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
            <Block key={j} block={b} feature={feature} />
          ))}
        </div>
      )
    } else {
      out.push(<Block key={i} block={blocks[i]} feature={feature} />)
      i++
    }
  }
  return out
}

export default function Chapter({ chapter, number }: { chapter: ChapterType; number: string }) {
  return (
    <section
      id={chapter.id}
      className="relative isolate scroll-mt-16 border-b border-[var(--p-haze)]/10 pb-20 pt-10 first:pt-12 last:border-b-0 md:scroll-mt-10 md:pb-32 md:pt-12"
    >
      {chapter.backgroundImage && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
            style={{ backgroundImage: `url(${chapter.backgroundImage})` }}
          />
          {/* Tint the wallpaper toward the deck's ink and fade its edges so text stays legible. */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--p-ink)] via-[var(--p-ink)]/60 to-[var(--p-ink)]" />
        </div>
      )}
      <p className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[var(--p-bright)]">
        <span aria-hidden className="h-px w-8 bg-[var(--p-bright)]/50" />
        Chapter {number}
      </p>
      <h2 className="font-[family-name:var(--font-fraunces)] text-xl font-medium leading-tight tracking-tight text-[var(--p-cream)] md:text-2xl">
        {chapter.title}
      </h2>
      <div className="mt-8">{renderBlocks(chapter.blocks, chapter.prose === 'feature')}</div>
    </section>
  )
}

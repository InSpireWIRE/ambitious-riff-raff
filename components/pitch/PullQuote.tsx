import StaggeredLines from './StaggeredLines'

type PullQuoteProps = {
  content: string
  attribution?: string
}

export default function PullQuote({ content, attribution }: PullQuoteProps) {
  return (
    <figure className="my-12 md:my-16">
      <blockquote className="relative">
        <span
          aria-hidden
          className="absolute -left-1 -top-5 select-none font-[family-name:var(--font-fraunces)] text-4xl leading-none text-[var(--p-bright)]/40 md:-left-4 md:text-5xl"
        >
          &ldquo;
        </span>
        <p className="font-[family-name:var(--font-fraunces)] text-xl font-normal italic leading-relaxed text-[var(--p-cream)] md:text-[1.65rem] md:leading-[1.45]">
          <StaggeredLines text={content} step={1.25} />
        </p>
      </blockquote>
      {attribution && (
        <figcaption className="mt-5 text-sm font-medium uppercase tracking-widest text-[var(--p-haze)]">
          {attribution}
        </figcaption>
      )}
    </figure>
  )
}

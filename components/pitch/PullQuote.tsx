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
          className="absolute -left-1 -top-6 select-none font-[family-name:var(--font-fraunces)] text-5xl leading-none text-[var(--p-bright)]/30 md:-left-5 md:text-6xl"
        >
          &ldquo;
        </span>
        <p className="font-[family-name:var(--font-fraunces)] text-2xl font-normal leading-snug text-[var(--p-cream)] md:text-[2.5rem] md:leading-[1.2]">
          {content}
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

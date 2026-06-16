type VideoEmbedProps = {
  provider: 'vimeo' | 'youtube' | 'self'
  src: string
  title: string
}

// Accepts either a full URL or a bare video ID for vimeo/youtube.
function embedUrl(provider: 'vimeo' | 'youtube', src: string): string {
  if (/^https?:\/\//.test(src)) {
    // Already a URL — try to normalize common watch/share forms to embeds.
    if (provider === 'youtube') {
      const id =
        src.match(/[?&]v=([^&]+)/)?.[1] ?? src.match(/youtu\.be\/([^?]+)/)?.[1]
      if (id) return `https://www.youtube.com/embed/${id}`
    }
    if (provider === 'vimeo') {
      const id = src.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1]
      if (id) return `https://player.vimeo.com/video/${id}`
    }
    return src
  }
  return provider === 'youtube'
    ? `https://www.youtube.com/embed/${src}`
    : `https://player.vimeo.com/video/${src}`
}

export default function VideoEmbed({ provider, src, title }: VideoEmbedProps) {
  return (
    <div className="my-10 overflow-hidden rounded-2xl bg-[var(--p-cream)]/5 shadow-sm">
      <div className="relative aspect-video">
        {provider === 'self' ? (
          <video
            controls
            src={src}
            className="absolute inset-0 h-full w-full"
            title={title}
          />
        ) : (
          <iframe
            src={embedUrl(provider, src)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        )}
      </div>
    </div>
  )
}

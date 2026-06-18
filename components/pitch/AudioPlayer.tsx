'use client'

import { useRef, useState } from 'react'

type AudioPlayerProps = {
  src: string
  title: string
  description?: string
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function AudioPlayer({ src, title, description }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      void audio.play()
    }
  }

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return
    const next = Number(e.target.value)
    audio.currentTime = next
    setCurrent(next)
  }

  const progress = duration > 0 ? (current / duration) * 100 : 0

  return (
    <div className="my-8">
      <div className="rounded-2xl border border-[var(--p-haze)]/15 bg-[var(--p-panel)] p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? `Pause ${title}` : `Play ${title}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--p-bright)] text-[var(--p-ink)] transition-transform hover:scale-105 active:scale-95"
        >
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.5-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
            </svg>
          )}
        </button>

        <div className="min-w-0 flex-1">
          <p className="truncate font-[family-name:var(--font-fraunces)] text-lg text-[var(--p-cream)]">{title}</p>

          <div className="mt-3 flex items-center gap-3">
            <input
              type="range"
              min={0}
              max={duration || 0}
              step="any"
              value={current}
              onChange={onSeek}
              aria-label={`Seek ${title}`}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--p-bright)] [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[var(--p-bright)]"
              style={{
                background: `linear-gradient(to right, var(--p-bright) ${progress}%, rgba(138,134,128,0.25) ${progress}%)`,
              }}
            />
            <span className="shrink-0 font-sans text-xs tabular-nums text-[var(--p-haze)]">
              {formatTime(current)} / {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />
      </div>

      {description && (
        <p className="mt-3 px-1 text-[15px] leading-relaxed text-[var(--p-cream)]/75">
          {description}
        </p>
      )}
    </div>
  )
}

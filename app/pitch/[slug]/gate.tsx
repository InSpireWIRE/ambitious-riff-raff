'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import AR2Mark from '@/components/AR2Mark'

export default function Gate({ slug, title }: { slug: string; title: string }) {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Show the first word on its own line, the rest below
  // ("Untitled" / "True Crime Podcast").
  const [titleHead, ...titleRestParts] = title.split(' ')
  const titleRest = titleRestParts.join(' ')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!password || loading) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/pitch/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, password }),
      })

      if (res.ok) {
        router.refresh()
        return
      }

      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Incorrect password.')
      setPassword('')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm rounded-3xl border border-[var(--p-haze)]/15 bg-[var(--p-panel)] p-8 shadow-sm md:p-10">
        <div className="flex flex-col items-center text-center">
          <AR2Mark size={144} className="opacity-90 invert" />
          <p className="mt-4 font-[family-name:var(--font-fraunces)] text-lg text-[var(--p-cream)]">
            Ambitious Riff Raff
          </p>
          <p className="mt-5 text-xs font-medium uppercase tracking-[0.25em] text-[var(--p-haze)]">
            Pitch access
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl leading-tight text-[var(--p-cream)]">
            {titleHead}
            {titleRest && (
              <>
                <br />
                {titleRest}
              </>
            )}
          </h1>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="pitch-password" className="sr-only">
              Password
            </label>
            <input
              id="pitch-password"
              type="password"
              autoComplete="current-password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              aria-invalid={error ? 'true' : undefined}
              className="w-full rounded-xl border border-[var(--p-haze)]/25 bg-[var(--p-ink)] px-4 py-3 text-[var(--p-cream)] outline-none transition-colors placeholder:text-[var(--p-haze)]/70 focus:border-[var(--p-bright)]"
            />
            {error && (
              <p role="alert" className="mt-2 text-sm text-[var(--p-bright)]">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[var(--p-bright)] px-4 py-3 font-medium text-[var(--p-ink)] transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {loading ? 'Checking…' : 'Enter'}
          </button>
        </form>
      </div>
    </main>
  )
}

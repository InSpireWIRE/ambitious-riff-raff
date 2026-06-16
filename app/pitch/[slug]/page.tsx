import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPitch } from '@/content/pitches'
import { cookieName, verifyToken } from '@/lib/pitch-auth'
import Chapter from '@/components/pitch/Chapter'
import Sidebar from '@/components/pitch/Sidebar'
import Gate from './gate'

export default async function PitchPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const pitch = getPitch(slug)
  if (!pitch) notFound()

  const cookieStore = await cookies()
  const token = cookieStore.get(cookieName(slug))?.value
  const authed = verifyToken(slug, token)

  if (!authed) {
    return <Gate slug={slug} title={pitch.title} />
  }

  const navItems = pitch.chapters.map((c) => ({
    id: c.id,
    number: c.number,
    title: c.title,
  }))

  return (
    <div className="md:flex">
      <Sidebar pitchTitle={pitch.title} items={navItems} />

      <main className="min-w-0 flex-1 md:ml-[280px]">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <header className="pt-20 md:pt-32">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--p-bright)]">
              {pitch.subtitle}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-fraunces)] text-5xl leading-[1.05] text-[var(--p-cream)] md:text-7xl">
              {pitch.title}
            </h1>
            <p className="mt-8 max-w-2xl font-[family-name:var(--font-fraunces)] text-2xl leading-snug text-[var(--p-cream)]/70 md:text-3xl">
              {pitch.logline}
            </p>
          </header>

          {pitch.chapters.map((chapter) => (
            <Chapter key={chapter.id} chapter={chapter} />
          ))}

          {pitch.footer && (
            <footer className="border-t border-[var(--p-haze)]/15 py-16 text-sm text-[var(--p-haze)]">
              <p className="text-[var(--p-cream)]">{pitch.footer.contact}</p>
              <p className="mt-1">{pitch.footer.representation}</p>
            </footer>
          )}
        </div>
      </main>
    </div>
  )
}

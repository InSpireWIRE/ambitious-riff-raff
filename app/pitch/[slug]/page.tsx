import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPitch } from '@/content/pitches'
import { cookieName, verifyToken } from '@/lib/pitch-auth'
import Chapter from '@/components/pitch/Chapter'
import Sidebar from '@/components/pitch/Sidebar'
import StaggeredLines from '@/components/pitch/StaggeredLines'
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

  const navItems = [
    { id: 'title', number: '00', title: 'Title' },
    ...pitch.chapters.map((c) => ({
      id: c.id,
      number: c.number,
      title: c.title,
    })),
  ]

  return (
    <div className="md:flex">
      <Sidebar pitchTitle={pitch.title} items={navItems} />

      <main className="min-w-0 flex-1 md:ml-[280px]">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <section
            id="title"
            className="flex min-h-[88vh] scroll-mt-24 flex-col justify-center pb-16 pt-16 md:pt-24"
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--p-bright)]">
              {pitch.subtitle}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-fraunces)] text-xl font-medium leading-tight tracking-tight text-[var(--p-cream)]/90 md:text-2xl">
              {pitch.title}
            </h1>
            <p className="mt-8 max-w-2xl font-[family-name:var(--font-fraunces)] text-[1.7rem] font-normal leading-[1.25] text-[var(--p-cream)] md:text-[2.5rem] md:leading-[1.18]">
              <StaggeredLines text={pitch.logline} step={1.5} />
            </p>
          </section>

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

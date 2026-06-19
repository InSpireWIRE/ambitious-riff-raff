'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import AR2Mark from '@/components/AR2Mark'
import PitchTitle from './PitchTitle'

type NavItem = { id: string; number: string; title: string }

type SidebarProps = {
  pitchTitle: string
  items: NavItem[]
}

export default function Sidebar({ pitchTitle, items }: SidebarProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [items])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveId(id)
    setMobileOpen(false)
  }

  const backLink = (
    <Link
      href="/"
      className="inline-flex items-center gap-1.5 text-sm text-[var(--p-haze)] transition-colors hover:text-[var(--p-bright)]"
    >
      <span aria-hidden>&larr;</span> Back to site
    </Link>
  )

  const navList = (
    <nav className="space-y-1">
      {items.map((item) => {
        const active = item.id === activeId
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            aria-current={active ? 'true' : undefined}
            className={`group flex items-baseline gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
              active ? 'bg-[var(--p-bright)]/10 text-[var(--p-bright)]' : 'text-[var(--p-cream)]/70 hover:text-[var(--p-cream)]'
            }`}
          >
            <span
              className={`font-sans text-xs tabular-nums ${
                active ? 'text-[var(--p-bright)]' : 'text-[var(--p-haze)]'
              }`}
            >
              {item.number}
            </span>
            <span className="font-medium">{item.title}</span>
          </a>
        )
      })}
    </nav>
  )

  const activeItem = items.find((i) => i.id === activeId)

  return (
    <>
      {/* Desktop: fixed left sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[280px] flex-col border-r border-[var(--p-haze)]/15 bg-[var(--p-panel)] px-6 py-8 md:flex">
        <div className="mb-8">
          {backLink}
          <AR2Mark size={48} className="mt-6 opacity-90 invert" />
          <p className="mt-4 font-[family-name:var(--font-fraunces)] text-xl leading-tight text-[var(--p-cream)]"><PitchTitle title={pitchTitle} /></p>
        </div>
        <div className="-mx-1 flex-1 overflow-y-auto px-1">{navList}</div>
      </aside>

      {/* Mobile: top bar with dropdown */}
      <div className="sticky top-0 z-40 border-b border-[var(--p-haze)]/15 bg-[var(--p-panel)]/95 backdrop-blur md:hidden">
        <div className="flex items-center justify-between px-5 py-3">
          {backLink}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            className="flex items-center gap-2 rounded-lg border border-[var(--p-haze)]/20 px-3 py-1.5 text-sm font-medium text-[var(--p-cream)]"
          >
            <span className="text-xs tabular-nums text-[var(--p-haze)]">
              {activeItem?.number}
            </span>
            {activeItem?.title ?? 'Chapters'}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
              className={`transition-transform ${mobileOpen ? 'rotate-180' : ''}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="max-h-[70vh] overflow-y-auto border-t border-[var(--p-haze)]/15 px-3 py-3">
            {navList}
          </div>
        )}
      </div>
    </>
  )
}

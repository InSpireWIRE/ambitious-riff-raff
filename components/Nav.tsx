'use client'

import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Collaborators', href: '#collaborators' },
  { label: 'Work', href: '#work' },
  { label: '!nSpireWIRE', href: '#inspirewire' },
  { label: 'The Krista Tapes', href: '#krista-tapes' },
  { label: 'Press', href: '#press' },
  { label: 'Contact', href: '#contact' },
  { label: 'Pitch', href: '/pitch/true-crime-1' },
]

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const solid = isScrolled || menuOpen

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'backdrop-blur-md border-b border-muted/20 bg-surface/90'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#top"
          onClick={() => setMenuOpen(false)}
          className={`font-serif text-base text-fg transition-opacity duration-300 ${
            solid ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Ambitious Riff Raff
        </a>

        {/* Desktop links (shown once there is room for the full row) */}
        <div className="hidden lg:flex space-x-8">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium tracking-wide uppercase text-fg hover:text-accent transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile / tablet hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 -mr-2"
        >
          <span
            className={`block w-6 h-0.5 bg-fg transition-transform duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-fg my-1.5 transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-fg transition-transform duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile / tablet menu panel */}
      <div
        className={`lg:hidden overflow-hidden bg-surface/95 backdrop-blur-md transition-all duration-300 ${
          menuOpen ? 'max-h-[80vh] border-b border-muted/20' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col space-y-5">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium tracking-wide uppercase text-fg hover:text-accent transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

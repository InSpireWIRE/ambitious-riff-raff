'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'backdrop-blur-md border-b border-muted/20 bg-surface/90'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#top"
          className={`font-serif text-base text-fg transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Ambitious Riff Raff
        </a>

        <div className="hidden md:flex space-x-8">
          {[
            { label: 'About', href: '#about' },
            { label: 'Collaborators', href: '#collaborators' },
            { label: 'Work', href: '#work' },
            { label: 'AlignAI', href: '#alignai' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
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
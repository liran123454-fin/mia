'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS, PHONE_DISPLAY, TEL_HREF } from '@/lib/constants'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let lastY = window.scrollY
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 40)
      if (currentY > lastY && currentY > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastY = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-30 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
        } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`font-display text-3xl font-light tracking-[0.2em] transition-colors duration-300 ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            MIA
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="תפריט ראשי" className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`font-body text-sm tracking-widest transition-colors duration-300 hover:text-gold ${
                    active ? 'text-gold' : scrolled ? 'text-black' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center font-body text-xs tracking-widest px-6 py-3 border transition-all duration-300 hover:opacity-85 ${
              scrolled
                ? 'border-black text-black hover:bg-black hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
          >
            לתיאום פגישה
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="פתח תפריט"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={scrolled ? '#000' : '#fff'}
              strokeWidth="1.5"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

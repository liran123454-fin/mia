'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS, PHONE_DISPLAY, TEL_HREF } from '@/lib/constants'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="תפריט ניווט"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            className="fixed top-0 right-0 z-50 h-full w-72 bg-white flex flex-col px-8 py-10 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="סגור תפריט"
              className="self-end mb-10 text-black/50 hover:text-black transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Logo */}
            <p className="font-display text-4xl font-light tracking-[0.15em] mb-10 text-black">
              MIA
            </p>

            {/* Nav links */}
            <nav aria-label="תפריט ניווט נייד" className="flex flex-col gap-6 mb-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="font-body text-lg text-black hover:text-gold transition-colors tracking-wide"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <a
              href={TEL_HREF}
              className="mt-auto inline-flex items-center justify-center bg-black text-white font-body text-sm tracking-widest px-8 py-4 hover:opacity-85 transition-opacity"
            >
              {PHONE_DISPLAY}
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

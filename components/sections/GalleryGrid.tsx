'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import StyleFilter from './StyleFilter'
import type { Dress } from '@/lib/types'
import type { DressStyle } from '@/lib/constants'

interface GalleryGridProps {
  dresses: Dress[]
}

export default function GalleryGrid({ dresses }: GalleryGridProps) {
  const [activeStyle, setActiveStyle] = useState<DressStyle>('all')
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const filtered =
    activeStyle === 'all'
      ? dresses
      : dresses.filter((d) => d.style === activeStyle)

  const slides = filtered.map((d) => ({
    src: d.src || '/images/placeholder.jpg',
    alt: d.name,
    description: d.description,
  }))

  return (
    <div>
      <StyleFilter active={activeStyle} onChange={setActiveStyle} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((dress, i) => (
            <motion.button
              key={dress.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => setLightboxIndex(i)}
              className="relative aspect-[3/4] overflow-hidden bg-cream group text-right cursor-pointer"
              aria-label={`פתח תמונה: ${dress.name}`}
            >
              {dress.src ? (
                <Image
                  src={dress.src}
                  alt={dress.name}
                  fill
                  loading="lazy"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-b from-[#2c2c2c] to-[#0f0f0f]" />
              )}

              {/* Hover info overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex flex-col justify-end p-5">
                <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="font-display text-xl text-white tracking-wider mb-1">
                    {dress.name}
                  </p>
                  <p className="font-body text-xs text-white/70 leading-relaxed">
                    {dress.description}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        styles={{
          container: { backgroundColor: 'rgba(0,0,0,0.96)' },
        }}
      />
    </div>
  )
}

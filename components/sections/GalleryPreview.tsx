'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Dress } from '@/lib/types'

interface GalleryPreviewProps {
  dresses: Dress[]
}

export default function GalleryPreview({ dresses }: GalleryPreviewProps) {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12">
          {dresses.slice(0, 6).map((dress, i) => {
            const animations = [
              { x: 80, y: -80 }, // 0 אמורה — TopRight
              { x: 0, y: -80 }, // 1 בלה    — Down
              { x: -80, y: -80 }, // 2 לונה   — TopLeft
              { x: 80, y: 80 }, // 3 אסתר   — BottomRight
              { x: 0, y: 80 }, // 4 איריס  — Up
              { x: -80, y: 80 }, // 5 טרה    — BottomLeft
            ]
            return (
              <motion.div
                key={dress.id}
                initial={{ ...animations[i], opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 1.4 }}
                className="relative aspect-3/4 overflow-hidden bg-cream group"
              >
                {dress.src ? (
                  <Image
                    src={dress.src}
                    alt={dress.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-linear-to-b from-[#2a2a2a] to-[#111] flex items-end p-4">
                    <span className="font-display text-lg text-white/60 tracking-wider">{dress.name}</span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500 flex items-center justify-center">
                  <p className="font-display text-white text-xl tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">{dress.name}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center font-body text-sm tracking-widest border border-black px-9 py-4 hover:bg-black hover:text-white transition-colors duration-300"
          >
            לגלרייה המלאה
          </Link>
        </div>
      </div>
    </section>
  )
}

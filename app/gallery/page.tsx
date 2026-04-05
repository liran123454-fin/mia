import type { Metadata } from 'next'
import Image from 'next/image'
import GalleryGrid from '@/components/sections/GalleryGrid'
import CtaBanner from '@/components/sections/CtaBanner'
import { DRESSES } from '@/lib/gallery-data'

export const metadata: Metadata = {
  title: 'גלרייה',
  description:
    'גלרייה של שמלות כלה יוקרתיות — רומנטי, מינימליסטי, נסיכותי ובוהו. MIA — גן יבנה.',
}

export default function GalleryPage() {
  return (
    <>
      {/* Page hero */}
      <div className="relative pt-32 pb-16 px-6 bg-dark overflow-hidden text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/studio/Screenshot 2026-04-03 at 23.34.19.png"
            alt="סטודיו MIA"
            fill
            priority
            className="object-cover object-center opacity-40"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <p className="font-body text-xs text-gold tracking-[0.3em] uppercase mb-4">
            הקולקציה שלנו
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-white tracking-[0.08em] mb-4">
            גלרייה
          </h1>
          <span className="block w-45 h-px bg-gold mx-auto" />
        </div>
      </div>

      {/* Gallery */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <GalleryGrid dresses={DRESSES} />
      </section>

      <CtaBanner
        title="אהבת? בואי לסטודיו"
        subtitle="כל שמלה שתראי כאן ניתן לראות ולמדוד בסטודיו שלנו בגן יבנה"
      />
    </>
  )
}

'use client'

import 'animate.css'
import { useEffect, useRef } from 'react'
import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'

export default function AboutTeaser() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slow')
          observer.disconnect()
        }
      },
      { threshold: 0.9 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 md:py-32 px-6 bg-cream">
      <div ref={ref} className="max-w-3xl mx-auto text-center opacity-0">
        <SectionTitle subtitle="בסטודיו MIA תמצאי שמלת חלומות שתספר את הסיפור שלך. אנחנו מאמינות שכל כלה היא עולם ומלואו — ולכן כל פגישה היא חוויה אישית, חמה ובלתי נשכחת.">
          הסיפור שלנו
        </SectionTitle>

        <div className="mt-10">
          <Button href="/about" variant="secondary">
            הכירי אותנו
          </Button>
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import GalleryPreview from '@/components/sections/GalleryPreview'
import AboutTeaser from '@/components/sections/AboutTeaser'
import Testimonial from '@/components/sections/Testimonial'
import CtaBanner from '@/components/sections/CtaBanner'
import { FEATURED_DRESSES } from '@/lib/gallery-data'

export const metadata: Metadata = {
  title: 'MIA — שמלות כלה | גן יבנה',
  description:
    'בית שמלות כלה MIA בגן יבנה — שמלות כלה יוקרתיות, עיצוב אישי ואינטימי. לתיאום פגישה: 054-5417717',
}

export default function HomePage() {
  return (
    <>
      <HeroSection videoSrc="/955b6709bc2cae1d6e1e5cee6462bbb5_1774970630_u8p7dgkw.mp4" />

      <GalleryPreview dresses={FEATURED_DRESSES} />

      <AboutTeaser />

      <Testimonial
        quote="הגעתי לMIA בלי לדעת מה אני מחפשת, ויצאתי עם השמלה המושלמת ועם חיוך שלא ירד לי כל החתונה."
        name="נועה כ. — כלה 2025"
      />

      <CtaBanner
        title="מוכנה למצוא את שמלת חלומותייך?"
        subtitle="קביעת פגישה אישית בסטודיו — ללא עלות וללא התחייבות"
      />
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import { Heart, Sparkles, Users } from 'lucide-react'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'אודות',
  description:
    'הסיפור של MIA — בית שמלות כלה יוקרתי בגן יבנה. עיצוב אישי, חוויה אינטימית ושמלות כלה שתשארנה לנצח יפות.',
}

const VALUES = [
  {
    icon: Sparkles,
    title: 'יוקרה שקטה',
    description:
      'עיצוב אלגנטי ומשוחרר — לא צעקני, אלא כזה שמדבר בשקט ואומר הכל.',
  },
  {
    icon: Heart,
    title: 'רומנטיות נצחית',
    description:
      'כל שמלה מעוצבת עם אהבה ותשומת לב לפרט, כמו שמלת כלה שתמיד תישאר יפה.',
  },
  {
    icon: Users,
    title: 'חמימות אישית',
    description:
      'לא קורפורייט — בוטיק. כל לקוחה מקבלת זמן, תשומת לב ויחס אישי ואמיתי.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
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
            הסיפור שלנו
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-white tracking-[0.08em] mb-4">
            אודות MIA
          </h1>
          <span className="block w-45 h-px bg-gold mx-auto" />
        </div>
      </div>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-cream overflow-hidden">
            <Image
              src="/images/studio/Screenshot 2026-04-03 at 23.09.45.png"
              alt="פנים הסטודיו"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-4xl font-light text-black tracking-wide leading-tight">
              חוויה שמתחילה
              <br />
              הרבה לפני החתונה
            </h2>
            <span className="block w-12 h-px bg-gold" />
            <p className="font-body text-base text-dark/70 leading-relaxed">
              MIA נולדה מתוך אהבה עמוקה לשמלות כלה ולרגע המיוחד שבו כלה לובשת את השמלה שלה בפעם הראשונה. אנחנו מאמינות שכל כלה ראויה לחוות את הרגע הזה בצורה מושלמת.
            </p>
            <p className="font-body text-base text-dark/70 leading-relaxed">
              הסטודיו שלנו בגן יבנה מציע אווירה אינטימית וחמה, שבה כל פגישה היא חוויה בפני עצמה. אנחנו לוקחות את הזמן להכיר כל כלה, להבין את חלומותיה ולעזור לה למצוא את השמלה שתספר את הסיפור שלה.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-light text-black tracking-[0.06em] mb-4">
              הערכים שלנו
            </h2>
            <span className="block w-12 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {VALUES.map((v) => (
              <div key={v.title} className="flex flex-col gap-4 text-center">
                <v.icon size={28} strokeWidth={1.5} className="text-gold mx-auto" />
                <h3 className="font-display text-2xl font-light text-black tracking-wide">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="נשמח להכיר אותך"
        subtitle="קביעת פגישה אישית בסטודיו — ללא עלות, עם הרבה אהבה"
      />
    </>
  )
}

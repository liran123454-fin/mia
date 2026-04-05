import Link from 'next/link'
import { NAV_ITEMS, ADDRESS, PHONE_DISPLAY, TEL_HREF } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <p className="font-display text-4xl font-light tracking-[0.2em] text-white">
            MIA
          </p>
          <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
            בית שמלות כלה יוקרתי המציע חוויה אישית, אינטימית ומרגשת.
            <br />
            כי הרגע הזה מגיע פעם אחת.
          </p>
          <span className="block w-12 h-px bg-gold mt-2" />
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h3 className="font-body text-xs tracking-widest text-white/40 mb-2">
            ניווט
          </h3>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-sm text-white/70 hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="font-body text-xs tracking-widest text-white/40 mb-2">
            צרי קשר
          </h3>
          <a
            href={TEL_HREF}
            className="font-body text-sm text-white/70 hover:text-gold transition-colors"
          >
            {PHONE_DISPLAY}
          </a>
          <p className="font-body text-sm text-white/70">{ADDRESS}</p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center justify-center bg-gold text-black font-body text-xs tracking-widest px-8 py-3 hover:opacity-90 transition-opacity"
          >
            לתיאום פגישה
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-6 flex flex-col md:flex-row items-center justify-center gap-3">
        <p className="font-body text-xs text-white/30 text-center">
          © {year} MIA — בית שמלות כלה. כל הזכויות שמורות.
        </p>
        <Link
          href="/accessibility"
          className="font-body text-xs text-white/30 hover:text-gold transition-colors underline"
        >
          הצהרת נגישות
        </Link>
      </div>
    </footer>
  )
}

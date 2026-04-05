import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'הצהרת נגישות',
  description: 'הצהרת הנגישות של אתר MIA שמלות כלה — מחויבותנו לנגישות דיגיטלית לכל המשתמשים.',
  robots: { index: true, follow: true },
}

export default function AccessibilityPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 font-body text-dark">
      <h1 className="font-display text-4xl font-light tracking-widest mb-10">
        הצהרת נגישות
      </h1>

      <section aria-labelledby="commitment-heading" className="mb-10">
        <h2 id="commitment-heading" className="font-display text-2xl font-light mb-4">
          המחויבות שלנו
        </h2>
        <p className="leading-relaxed text-gray-soft">
          בית שמלות כלה MIA מחויב להנגיש את אתר האינטרנט שלנו לכלל המשתמשים, לרבות אנשים עם
          מוגבלויות, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות),
          התשע״ג–2013, ולהנחיות הנגישות לתכני אינטרנט{' '}
          <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1 ברמה AA.
        </p>
      </section>

      <section aria-labelledby="status-heading" className="mb-10">
        <h2 id="status-heading" className="font-display text-2xl font-light mb-4">
          מצב הנגישות
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-soft leading-relaxed">
          <li>האתר תואם חלקית לתקן WCAG 2.1 רמה AA</li>
          <li>האתר כולל קישור "דלג לתוכן ראשי" לניווט מקלדת</li>
          <li>האתר כולל תמיכה בניווט מלא באמצעות מקלדת</li>
          <li>כל התמונות מכילות טקסט חלופי (alt)</li>
          <li>האתר מוגדר בשפה העברית עם כיוון RTL</li>
          <li>ניגודיות הצבעים עומדת בדרישות התקן</li>
        </ul>
      </section>

      <section aria-labelledby="date-heading" className="mb-10">
        <h2 id="date-heading" className="font-display text-2xl font-light mb-4">
          תאריך הכנת ההצהרה ובדיקה אחרונה
        </h2>
        <p className="text-gray-soft">
          הצהרה זו הוכנה ונבדקה לאחרונה ב־<time dateTime="2026-04-06">אפריל 2026</time>.
        </p>
      </section>

      <section aria-labelledby="contact-heading" className="mb-10">
        <h2 id="contact-heading" className="font-display text-2xl font-light mb-4">
          פניות בנושא נגישות
        </h2>
        <p className="text-gray-soft leading-relaxed mb-4">
          נתקלתם בבעיית נגישות באתר? נשמח לשמוע ולטפל בהקדם.
        </p>
        <address className="not-italic text-gray-soft space-y-2">
          <p>
            <span className="font-medium text-dark">טלפון: </span>
            <a
              href="tel:+972545417717"
              className="underline hover:text-gold transition-colors"
              aria-label="התקשר אלינו בנושא נגישות"
            >
              054-5417717
            </a>
          </p>
          <p>
            <span className="font-medium text-dark">כתובת: </span>
            גן יבנה, ישראל
          </p>
        </address>
      </section>

      <section aria-labelledby="limitations-heading" className="mb-10">
        <h2 id="limitations-heading" className="font-display text-2xl font-light mb-4">
          מגבלות ידועות
        </h2>
        <p className="text-gray-soft leading-relaxed">
          אנו עובדים באופן שוטף על שיפור הנגישות. ייתכן שחלק מהתכנים ישנים עדיין אינם
          נגישים במלואם. אם נתקלתם בבעיה — צרו קשר ונטפל בה בהקדם.
        </p>
      </section>
    </main>
  )
}

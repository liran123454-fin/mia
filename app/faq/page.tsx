import type { Metadata } from 'next'
import Image from 'next/image'
import FaqAccordion from '@/components/sections/FaqAccordion'
import CtaBanner from '@/components/sections/CtaBanner'
import type { FaqItem } from '@/lib/types'

export const metadata: Metadata = {
  title: 'שאלות נפוצות',
  description:
    'תשובות לשאלות הנפוצות ביותר על תהליך הרכישה, מחירים, מידות, תיקונים וזמני אספקה — MIA שמלות כלה.',
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'כמה עולה שמלת כלה?',
    answer:
      'טווח המחירים שלנו נע בין מספר אלפי שקלים לעשרות אלפים, בהתאם לסגנון, לחומרים ולרמת הייחודיות של השמלה. בפגישה הראשונה נבין יחד מה מתאים לך ולתקציב שלך.',
  },
  {
    question: 'כמה זמן לפני החתונה כדאי לגשת?',
    answer:
      'אנחנו ממליצות להגיע לפחות 6–9 חודשים לפני תאריך החתונה. זה מאפשר מספיק זמן לבחירה, הזמנה, ייצור ותיקונים אחרונים.',
  },
  {
    question: 'האם עושים התאמות ותיקונים?',
    answer:
      'כן, בהחלט. כל שמלה עוברת התאמה אישית מלאה לגוף שלך. עבודת התיקונים נעשית על ידי תופרת מקצועית שלנו, ואנחנו עובדות יחד איתך עד שהשמלה נשבה לגמרי.',
  },
  {
    question: 'האם אפשר לקנות שמלה מהתצוגה?',
    answer:
      'בחלק מהמקרים כן — שמלות תצוגה נמכרות במחיר מיוחד. שאלי אותנו בפגישה ונבדוק יחד אם יש שמלה שמתאימה לך.',
  },
  {
    question: 'מה כדאי להביא לפגישה?',
    answer:
      'מומלץ להגיע עם חזייה לבנה חלקה ותחתוני nude. אפשר להביא תמונות השראה אם יש לך, אבל לא חובה — יש לנו הרבה ממה לבחור ביחד.',
  },
  {
    question: 'מה שעות הפעילות?',
    answer:
      'הסטודיו פועל בתיאום מראש בלבד, ימים א׳–ה׳ בין השעות 10:00–20:00. ניתן לתאם גם בערבי שישי. צרי קשר בטלפון לתיאום פגישה.',
  },
  {
    question: 'האם צריך לקבוע תור מראש?',
    answer:
      'כן, הסטודיו פועל בפגישות אישיות בלבד. זה מאפשר לנו לתת לך תשומת לב מלאה ולהפוך כל ביקור לחוויה בלתי נשכחת.',
  },
]

export default function FaqPage() {
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
            תשובות לשאלות
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-white tracking-[0.08em] mb-4">
            שאלות נפוצות
          </h1>
          <span className="block w-45 h-px bg-gold mx-auto" />
        </div>
      </div>

      {/* Accordion */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CtaBanner
        title="יש שאלה נוספת?"
        subtitle="אנחנו כאן לכל שאלה — קטנה כגדולה"
      />
    </>
  )
}

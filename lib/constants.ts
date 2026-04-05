export const PHONE = process.env.NEXT_PUBLIC_PHONE ?? '0545417717'
export const PHONE_DISPLAY = process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? '054-5417717'
export const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS ?? 'סביון 9, גן יבנה'
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? ''

export const TEL_HREF = `tel:${PHONE}`

export const NAV_ITEMS = [
  { label: 'ראשי', href: '/' },
  { label: 'גלרייה', href: '/gallery' },
  { label: 'אודות', href: '/about' },
  { label: 'בלוג', href: '/blog' },
  { label: 'שאלות נפוצות', href: '/faq' },
] as const

export const DRESS_STYLES = [
  { value: 'all', label: 'הכל' },
  { value: 'romantic', label: 'רומנטי' },
  { value: 'minimal', label: 'מינימליסטי' },
  { value: 'princess', label: 'נסיכותי' },
  { value: 'boho', label: 'בוהו' },
] as const

export type DressStyle = 'all' | 'romantic' | 'minimal' | 'princess' | 'boho'

import type { DressStyle } from './constants'

export interface Dress {
  id: string
  name: string
  style: Exclude<DressStyle, 'all'>
  description: string
  src: string
  featured?: boolean
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  coverImage: string
  category: 'טרנדים' | 'טיפים' | 'השראה'
  content?: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface NavItem {
  label: string
  href: string
}

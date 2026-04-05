import type { Metadata } from 'next'
import Image from 'next/image'
import BlogCard from '@/components/sections/BlogCard'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'בלוג',
  description:
    'טיפים, טרנדים והשראה לכלה — מבלוג MIA שמלות כלה. כל מה שצריך לדעת לפני שבוחרים שמלת כלה.',
}

export default function BlogPage() {
  const posts = getAllPosts()

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
            טיפים והשראה
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-white tracking-[0.08em] mb-4">
            הבלוג שלנו
          </h1>
          <span className="block w-45 h-px bg-gold mx-auto" />
        </div>
      </div>

      {/* Posts grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <p className="font-body text-center text-gray-soft py-20">
              מאמרים בדרך — חזרי בקרוב
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

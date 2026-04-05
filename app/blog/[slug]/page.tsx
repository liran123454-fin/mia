import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllSlugs, getAllPosts } from '@/lib/blog'
import CtaBanner from '@/components/sections/CtaBanner'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const slugs = getAllSlugs()
  if (!slugs.includes(slug)) return {}

  const post = getPostBySlug(slug)
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const slugs = getAllSlugs()
  if (!slugs.includes(slug)) notFound()

  const post = getPostBySlug(slug)
  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = allPosts[currentIndex + 1] ?? null
  const nextPost = allPosts[currentIndex - 1] ?? null

  const date = new Date(post.date).toLocaleDateString('he-IL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      {/* Article header */}
      <div className="pt-32 pb-0">
        {/* Cover image */}
        {post.coverImage && (
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-dark">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover opacity-80"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        <div className="max-w-3xl mx-auto px-6 py-12">
          <span className="inline-block font-body text-xs text-gold tracking-widest mb-4">
            {post.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-light text-black tracking-[0.04em] leading-tight mb-4">
            {post.title}
          </h1>
          <span className="block w-12 h-px bg-gold mb-4" />
          <p className="font-body text-sm text-gray-soft">{date}</p>
        </div>
      </div>

      {/* Article content */}
      <article className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose-mia">
          <MDXRemote source={post.content ?? ''} />
        </div>
      </article>

      {/* Post navigation */}
      {(prevPost || nextPost) && (
        <nav className="border-t border-black/10 py-12 px-6">
          <div className="max-w-3xl mx-auto flex justify-between gap-8">
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="flex flex-col gap-1 hover:text-gold transition-colors"
              >
                <span className="font-body text-xs text-gray-soft tracking-widest">
                  הבא ←
                </span>
                <span className="font-display text-lg font-light">
                  {nextPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="flex flex-col gap-1 text-left hover:text-gold transition-colors"
              >
                <span className="font-body text-xs text-gray-soft tracking-widest">
                  → הקודם
                </span>
                <span className="font-display text-lg font-light">
                  {prevPost.title}
                </span>
              </Link>
            )}
          </div>
        </nav>
      )}

      <CtaBanner
        title="רוצה לראות את השמלות שלנו?"
        subtitle="מוזמנת לבקר אותנו בסטודיו ולמצוא את שמלת חלומותייך"
      />
    </>
  )
}

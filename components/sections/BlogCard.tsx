import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/lib/types'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const date = new Date(post.date).toLocaleDateString('he-IL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden bg-white hover:shadow-md transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-[#2c2c2c] to-[#111]" />
        )}
        {/* Category tag */}
        <span className="absolute top-4 right-4 bg-black text-white font-body text-xs tracking-widest px-3 py-1">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <p className="font-body text-xs text-gray-soft tracking-wider">{date}</p>
        <h3 className="font-display text-2xl font-light tracking-wide leading-tight group-hover:text-gold transition-colors duration-300">
          {post.title}
        </h3>
        <p className="font-body text-sm text-dark/70 leading-relaxed line-clamp-3 flex-1">
          {post.description}
        </p>
        <span className="font-body text-xs tracking-widest text-gold mt-2">
          קראי עוד →
        </span>
      </div>
    </Link>
  )
}

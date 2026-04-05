'use client'

import { motion } from 'framer-motion'

interface TestimonialProps {
  quote: string
  name: string
}

export default function Testimonial({ quote, name }: TestimonialProps) {
  return (
    <section className="py-28 md:py-40 px-6 bg-black">
      <motion.div
        initial={{ y: 24 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Opening quote mark */}
        <p className="font-display text-8xl text-gold/30 leading-none mb-4 select-none" aria-hidden>
          "
        </p>

        <blockquote className="font-display text-2xl md:text-3xl font-light text-white tracking-[0.04em] leading-relaxed italic mb-8">
          {quote}
        </blockquote>

        <span className="block w-12 h-px bg-gold mx-auto mb-4" />

        <p className="font-body text-sm text-white/50 tracking-widest">{name}</p>
      </motion.div>
    </section>
  )
}

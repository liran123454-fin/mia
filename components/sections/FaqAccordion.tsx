'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { FaqItem } from '@/lib/types'

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="divide-y divide-black/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between py-6 text-right gap-4 group"
              aria-expanded={isOpen}
            >
              <span className="font-body text-base md:text-lg font-medium text-black group-hover:text-gold transition-colors duration-300 leading-snug">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex-shrink-0 text-gold text-2xl leading-none"
                aria-hidden
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="font-body text-base text-dark/70 leading-relaxed pb-6 pr-0">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

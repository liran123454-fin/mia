'use client'

import { DRESS_STYLES, type DressStyle } from '@/lib/constants'

interface StyleFilterProps {
  active: DressStyle
  onChange: (style: DressStyle) => void
}

export default function StyleFilter({ active, onChange }: StyleFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {DRESS_STYLES.map((style) => {
        const isActive = active === style.value
        return (
          <button
            key={style.value}
            onClick={() => onChange(style.value as DressStyle)}
            className={`font-body text-sm tracking-widest px-6 py-3 border transition-all duration-300 ${
              isActive
                ? 'bg-black text-white border-black'
                : 'bg-transparent text-black border-black/30 hover:border-black hover:text-black'
            }`}
          >
            {style.label}
          </button>
        )
      })}
    </div>
  )
}

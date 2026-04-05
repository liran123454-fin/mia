interface SectionTitleProps {
  children: React.ReactNode
  subtitle?: string
  center?: boolean
  light?: boolean
  className?: string
}

export default function SectionTitle({
  children,
  subtitle,
  center = true,
  light = false,
  className = '',
}: SectionTitleProps) {
  const align = center ? 'text-center items-center' : 'text-right items-end'
  const titleColor = light ? 'text-white' : 'text-black'
  const subtitleColor = light ? 'text-white/70' : 'text-gray-soft'

  return (
    <div className={`flex flex-col gap-4 ${align} ${className}`}>
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.08em] leading-tight ${titleColor}`}
      >
        {children}
      </h2>
      {/* Gold divider */}
      <span className="block w-16 h-px bg-gold" />
      {subtitle && (
        <p className={`font-body text-base md:text-lg ${subtitleColor} max-w-xl leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

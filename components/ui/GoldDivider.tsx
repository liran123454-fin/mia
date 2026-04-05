interface GoldDividerProps {
  className?: string
  wide?: boolean
}

export default function GoldDivider({ className = '', wide = false }: GoldDividerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <span className={`block h-px bg-gold ${wide ? 'w-32' : 'w-16'}`} />
    </div>
  )
}

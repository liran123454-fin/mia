import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'tel'

interface ButtonProps {
  variant?: Variant
  href?: string
  tel?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const base =
  'inline-flex items-center justify-center font-body font-medium tracking-widest transition-opacity duration-300 hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold'

const variants: Record<Variant, string> = {
  primary: 'bg-black text-white border border-black',
  secondary: 'bg-transparent text-black border border-black',
  tel: 'bg-black text-white border border-black',
}

const sizes = {
  sm: 'px-6 py-3 text-xs',
  md: 'px-9 py-4 text-sm',
  lg: 'px-12 py-5 text-sm',
}

export default function Button({
  variant = 'primary',
  href,
  tel,
  onClick,
  children,
  className = '',
  size = 'md',
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (tel) {
    return (
      <a href={`tel:${tel}`} className={classes}>
        {children}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

import { cn } from '@/lib/cn'
import type { ButtonProps, ButtonVariant } from '@/types/ui'
import { Icon } from '../icons/Icon'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'border border-accent/50 bg-accent/10 text-accent hover:border-accent hover:bg-accent hover:text-bg',
  ghost:
    'border border-line text-ink/90 hover:border-ink/30 hover:bg-white/[0.03]',
  'ghost-dark':
    'border border-line text-ink/90 hover:border-ink/30 hover:bg-white/[0.03]',
}

export function Button({
  variant = 'primary',
  href,
  children,
  external = false,
  icon,
}: ButtonProps) {
  const className = cn(
    'inline-flex items-center justify-center gap-2.5 px-5 py-3 sm:px-7 sm:py-3.5',
    'font-label text-[0.72rem] font-medium uppercase tracking-[0.22em]',
    'transition-all duration-500 ease-out',
    variantStyles[variant],
  )

  const content = (
    <>
      {icon ? <Icon name={icon} className="size-4" /> : null}
      {children}
    </>
  )

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return (
    <a className={className} href={href}>
      {content}
    </a>
  )
}

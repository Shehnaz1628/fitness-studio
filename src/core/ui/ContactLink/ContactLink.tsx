import { cn } from '@/lib/cn'
import { Icon, type IconName } from '../icons/Icon'

type ContactLinkProps = {
  href: string
  label: string
  icon: IconName
  external?: boolean
  iconOnly?: boolean
  className?: string
}

export function ContactLink({
  href,
  label,
  icon,
  external = href.startsWith('http'),
  iconOnly = false,
  className,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      aria-label={iconOnly ? label : undefined}
      className={cn(
        'inline-flex items-center font-label text-[0.78rem] font-medium text-muted transition-colors duration-300 hover:text-accent',
        iconOnly ? 'p-1' : 'gap-2.5',
        className,
      )}
    >
      <Icon name={icon} className={iconOnly ? 'size-6' : 'size-[1.05rem]'} />
      {iconOnly ? null : (
        <span className="break-all sm:break-normal">{label}</span>
      )}
    </a>
  )
}

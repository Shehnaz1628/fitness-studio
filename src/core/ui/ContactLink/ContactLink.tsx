import { cn } from '@/lib/cn'
import { Icon, type IconName } from '../icons/Icon'

type ContactLinkProps = {
  href: string
  label: string
  icon: IconName
  external?: boolean
  className?: string
}

export function ContactLink({
  href,
  label,
  icon,
  external = href.startsWith('http'),
  className,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={cn(
        'inline-flex items-center gap-2.5 font-label text-[0.78rem] font-medium text-muted transition-colors duration-300 hover:text-accent',
        className,
      )}
    >
      <Icon name={icon} className="size-[1.05rem]" />
      <span className="break-all sm:break-normal">{label}</span>
    </a>
  )
}

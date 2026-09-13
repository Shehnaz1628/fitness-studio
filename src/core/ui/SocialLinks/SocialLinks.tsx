import { cn } from '@/lib/cn'
import { contact } from '@/data/site'
import { ContactLink } from '../ContactLink/ContactLink'
import type { IconName } from '@/types/icon'

type SocialLinksProps = {
  className?: string
}

const links: ReadonlyArray<{
  href: string
  label: string
  icon: IconName
  external?: boolean
}> = [
  { href: contact.whatsappUrl, label: 'WhatsApp', icon: 'whatsapp', external: true },
  { href: contact.instagramUrl, label: 'Instagram', icon: 'instagram', external: true },
  { href: contact.mapsDirectionsUrl, label: 'Directions', icon: 'maps', external: true },
  { href: `tel:${contact.phone}`, label: contact.phoneDisplay, icon: 'phone' },
]

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul
      className={cn(
        'flex flex-wrap items-center gap-5 border-t border-line-soft pt-6 sm:gap-6',
        className,
      )}
    >
      {links.map((link) => (
        <li key={link.icon}>
          <ContactLink
            href={link.href}
            label={link.label}
            icon={link.icon}
            external={link.external}
            iconOnly
          />
        </li>
      ))}
    </ul>
  )
}

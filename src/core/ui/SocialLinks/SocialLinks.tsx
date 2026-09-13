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
  {
    href: contact.instagramUrl,
    label: contact.instagramHandle,
    icon: 'instagram',
    external: true,
  },
  {
    href: contact.mapsDirectionsUrl,
    label: 'Directions',
    icon: 'maps',
    external: true,
  },
  {
    href: `tel:${contact.phone}`,
    label: contact.phoneDisplay,
    icon: 'phone',
  },
]

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul
      className={cn(
        'grid grid-cols-1 gap-3 border-t border-line-soft pt-6 min-[420px]:grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3 lg:gap-x-8',
        className,
      )}
    >
      {links.map((link) => (
        <li key={link.label}>
          <ContactLink
            href={link.href}
            label={link.label}
            icon={link.icon}
            external={link.external}
          />
        </li>
      ))}
    </ul>
  )
}

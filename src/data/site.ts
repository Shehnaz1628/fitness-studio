import {
  buildMapsDirectionsUrl,
  buildMapsEmbedUrl,
  buildWhatsAppUrl,
} from '@/lib/contactLinks'

export const contact = {
  phone: '+971501511222',
  phoneDisplay: '+971 50 151 1222',
  whatsappDigits: '971501511222',
  instagramHandle: '@to.be.determined.fitness',
  instagramUrl: 'https://www.instagram.com/to.be.determined.fitness/',
  address: 'Centro Al Andalus Mall, 1st floor — Jumeirah Golf Estates, Dubai',
  mapsQuery: 'Centro Al Andalus Mall, Jumeirah Golf Estates, Dubai',
  whatsappUrl: buildWhatsAppUrl('971501511222'),
  mapsDirectionsUrl: buildMapsDirectionsUrl(
    'Centro Al Andalus Mall, Jumeirah Golf Estates, Dubai',
  ),
  mapsEmbedUrl: buildMapsEmbedUrl(
    'Centro Al Andalus Mall, Jumeirah Golf Estates, Dubai',
  ),
} as const

export const heroContent = {
  brand: 'TBD',
  headline: ['Train hard.', 'Recover harder.'] as const,
  tagline:
    'Box-fit, strength, and recovery — under one roof in Jumeirah Golf Estates.',
  image:
    'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=2400&q=80',
} as const

export const storyContent = {
  eyebrow: 'The TBD way',
  headline: ['Progress over', 'pressure.'] as const,
  body: 'A home-grown studio where small wins count, consistency is praised, and coaching meets you where you are — not where the algorithm says you should be.',
} as const

export const storyPillars = [
  { label: 'Signature', value: 'Fight Fit' },
  { label: 'Recovery', value: 'Ice · Breath' },
  { label: 'Community', value: 'All levels welcome' },
] as const

export const recoverContent = {
  eyebrow: 'Recovery intelligence',
  title: 'Come down as intentionally as you push.',
  body: 'Ice baths and breathwork sit beside the boxing floor — so resilience is part of the program, not an afterthought.',
  image:
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=2000&q=80',
} as const

export const trainContent = {
  eyebrow: 'Training',
  headline: ['What we', 'train.'] as const,
  body: 'Four formats, one floor — box-fit, strength, mobility, and movement that keeps the room alive.',
} as const

export const visitContent = {
  title: 'Visit the floor',
  body: `${contact.address}. Group classes and personal training for every level.`,
  hours: ['Mon–Fri 6am–10pm', 'Sat 8am–8pm · Sun 8am–6pm'],
  studio: ['To Be Determined', 'Community box-fit · Dubai'],
} as const

export const navLinks = [
  { href: '#train', label: 'Train' },
  { href: '#recover', label: 'Recover' },
  { href: '#visit', label: 'Visit' },
] as const

import { cn } from '@/lib/cn'
import { Icon } from '../icons/Icon'

type MapEmbedProps = {
  embedUrl: string
  directionsUrl: string
  title: string
  className?: string
}

export function MapEmbed({
  embedUrl,
  directionsUrl,
  title,
  className,
}: MapEmbedProps) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <div className="relative overflow-hidden border border-line bg-surface-raised">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-bg/20" />
        <iframe
          title={title}
          src={embedUrl}
          className="relative z-0 h-[min(16rem,42vh)] w-full border-0 opacity-80 grayscale contrast-125 sm:h-[min(22rem,45vh)]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        href={directionsUrl}
        target="_blank"
        rel="noreferrer"
        className="font-label inline-flex w-fit items-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-accent transition-colors hover:text-ink"
      >
        <Icon name="maps" className="size-4" />
        Get directions
      </a>
    </div>
  )
}

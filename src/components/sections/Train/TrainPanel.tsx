import { cn } from '@/lib/cn'
import type { Session } from '@/types/session'

type TrainPanelProps = {
  session: Session
  index: number
  className?: string
}

export function TrainPanel({ session, index, className }: TrainPanelProps) {
  return (
    <article
      className={cn(
        'group relative aspect-[4/5] w-full overflow-hidden border border-line-soft bg-surface-raised',
        className,
      )}
    >
      <img
        src={session.image}
        alt=""
        className="absolute inset-0 size-full object-cover brightness-[0.52] saturate-45 transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-[0.62]"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-transparent"
        aria-hidden="true"
      />
      <span className="absolute left-5 top-5 font-display text-[2.5rem] leading-none tracking-wide text-accent/45 sm:text-[2.75rem]">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 p-5 pt-14 sm:gap-3 sm:p-6">
        <h3 className="font-display text-[clamp(1.65rem,4vw,2.25rem)] font-normal uppercase leading-none tracking-[0.04em] text-ink">
          {session.name}
        </h3>
        <p className="max-w-[22rem] text-[0.8125rem] font-normal leading-[1.65] text-muted sm:text-[0.875rem] sm:leading-[1.7]">
          {session.detail}
        </p>
      </div>
    </article>
  )
}

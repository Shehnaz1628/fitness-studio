import { cn } from '@/lib/cn'
import type { SectionHeadProps } from '@/types/ui'
import { Eyebrow } from '../Eyebrow/Eyebrow'

export function SectionHead({
  eyebrow,
  title,
  description,
  titleId,
  className,
}: SectionHeadProps) {
  return (
    <div className={cn('flex max-w-[38rem] flex-col gap-5', className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        id={titleId}
        className="text-balance text-[clamp(2.75rem,5vw,4.5rem)] font-normal leading-[0.95]"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-prose">
          {description}
        </p>
      ) : null}
    </div>
  )
}

import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type CtaRowProps = {
  children: ReactNode
  className?: string
}

export function CtaRow({ children, className }: CtaRowProps) {
  return (
    <div
      className={cn(
        'mt-1.5 flex flex-col gap-3 sm:flex-row sm:flex-wrap [&>a]:w-full [&>a]:sm:w-auto',
        className,
      )}
    >
      {children}
    </div>
  )
}

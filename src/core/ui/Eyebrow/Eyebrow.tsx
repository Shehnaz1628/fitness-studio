import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type EyebrowProps = {
  children: ReactNode
  className?: string
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div className={cn('flex items-center gap-3 sm:gap-4', className)}>
      <span className="h-px w-6 bg-accent/60 sm:w-8" aria-hidden="true" />
      <p className="text-label">
        {children}
      </p>
    </div>
  )
}

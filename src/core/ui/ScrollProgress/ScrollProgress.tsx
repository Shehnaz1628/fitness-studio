import { motion, type MotionValue } from 'framer-motion'
import { cn } from '@/lib/cn'

type ScrollProgressProps = {
  scaleX: MotionValue<number> | number
  hidden?: boolean
}

export function ScrollProgress({ scaleX, hidden = false }: ScrollProgressProps) {
  if (hidden) return null

  return (
    <motion.div
      className={cn(
        'motion-safe-only pointer-events-none fixed inset-x-0 top-0 z-[110] h-px origin-left bg-accent/80',
      )}
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}

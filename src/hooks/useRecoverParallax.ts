import type { RefObject } from 'react'
import { useScroll, useTransform } from 'framer-motion'

export function useRecoverParallax(ref: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const mediaY = useTransform(scrollYProgress, [0, 1], ['-14%', '14%'])
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const clipPath = useTransform(
    scrollYProgress,
    [0.05, 0.35],
    ['inset(12% 10%)', 'inset(0% 0%)'],
  )

  return { mediaY, mediaScale, clipPath }
}

import type { RefObject } from 'react'
import { useScroll, useTransform } from 'framer-motion'

export function useTrainScroll(ref: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const trackX = useTransform(scrollYProgress, [0.05, 0.95], ['0%', '-72%'])
  return { trackX }
}

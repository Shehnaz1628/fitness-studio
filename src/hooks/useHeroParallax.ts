import { useState } from 'react'
import type { RefObject } from 'react'
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion'

export function useHeroParallax(ref: RefObject<HTMLElement | null>) {
  const [navSolid, setNavSolid] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.24])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setNavSolid(value > 0.85)
  })

  return {
    navSolid,
    mediaY,
    mediaScale,
    contentY,
    contentOpacity,
  }
}

import { useState } from 'react'
import type { RefObject } from 'react'
import {
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

export function useStoryScore(ref: RefObject<HTMLElement | null>) {
  const [score, setScore] = useState(42)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const rawScore = useTransform(scrollYProgress, [0.18, 0.58], [42, 86])
  const scoreValue = useSpring(rawScore, { stiffness: 70, damping: 26 })
  const rawRing = useTransform(scrollYProgress, [0.15, 0.6], [28, 86])
  const ringProgress = useSpring(rawRing, { stiffness: 70, damping: 26 })
  const ringBackground = useTransform(
    ringProgress,
    (v) =>
      `radial-gradient(circle at center, var(--color-surface-raised) 58%, transparent 59%), conic-gradient(var(--color-accent) 0 ${v}%, rgba(255, 255, 255, 0.05) ${v}% 100%)`,
  )

  useMotionValueEvent(scoreValue, 'change', (value) => {
    setScore(Math.round(value))
  })

  return { score, ringBackground }
}

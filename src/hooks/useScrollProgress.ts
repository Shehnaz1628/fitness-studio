import { useScroll, useSpring, useTransform } from 'framer-motion'

export function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  const scaleX = useTransform(progress, [0, 1], [0, 1])
  return { scaleX }
}

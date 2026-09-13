import { useReducedMotion } from 'framer-motion'
import { useSmoothScroll } from './useSmoothScroll'

export function useMotionPreference() {
  const reduceMotion = useReducedMotion()
  useSmoothScroll(!reduceMotion)
  return { reduceMotion }
}

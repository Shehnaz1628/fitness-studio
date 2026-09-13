import { motion } from 'framer-motion'
import type { FadeInViewProps } from '@/types/ui'
import { fadeUp, stagger } from '@/motion/variants'

export function FadeInView({
  children,
  className = '',
  stagger: useStagger = true,
  amount = 0.4,
  delay = 0,
  reduceMotion,
}: FadeInViewProps) {
  return (
    <motion.div
      className={className}
      variants={useStagger ? stagger : fadeUp}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={delay ? { delayChildren: delay } : undefined}
    >
      {children}
    </motion.div>
  )
}

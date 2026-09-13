import { motion } from 'framer-motion'
import { easeOut } from '@/motion/variants'

type SplitWordsProps = {
  text: string
  reduceMotion: boolean | null
}

export function SplitWords({ text, reduceMotion }: SplitWordsProps) {
  const words = text.split(' ')

  if (reduceMotion) return text

  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.055 } },
      }}
    >
      {words.map((word, index) => (
        <span
          className="mr-[0.28em] inline-block overflow-hidden align-bottom"
          key={`${word}-${index}`}
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: '110%' },
              show: {
                y: '0%',
                transition: { duration: 0.85, ease: easeOut },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

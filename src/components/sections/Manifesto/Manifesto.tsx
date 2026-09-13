import { motion } from 'framer-motion'
import { FadeInView } from '@/core'
import { principles } from '@/data/principles'
import { fadeUp } from '@/motion/variants'

type ManifestoProps = {
  reduceMotion: boolean | null
}

export function Manifesto({ reduceMotion }: ManifestoProps) {
  return (
    <section className="relative isolate z-20 section-y section-x border-y border-line-soft bg-bg">
      <FadeInView
        className="container-wide flex flex-col gap-[clamp(1rem,2.5vh,1.75rem)]"
        reduceMotion={reduceMotion}
      >
        {principles.map((line, index) => (
          <motion.p
            key={line}
            variants={fadeUp}
            className="font-display text-[clamp(1.75rem,8vw,5rem)] font-normal uppercase leading-[0.95] tracking-[0.04em] text-ink/90"
          >
            <span className="mr-2 font-label text-[0.55em] font-medium text-accent/70 sm:mr-4">
              0{index + 1}
            </span>
            {line}
          </motion.p>
        ))}
      </FadeInView>
    </section>
  )
}

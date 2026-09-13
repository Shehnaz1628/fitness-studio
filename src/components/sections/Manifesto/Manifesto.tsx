import { motion } from 'framer-motion'
import { Eyebrow, FadeInView } from '@/core'
import { principles } from '@/data/principles'
import { fadeUp } from '@/motion/variants'

type ManifestoProps = {
  reduceMotion: boolean | null
}

export function Manifesto({ reduceMotion }: ManifestoProps) {
  return (
    <section
      aria-labelledby="manifesto-title"
      className="relative isolate z-20 section-y section-x border-y border-line-soft bg-bg"
    >
      <div className="container-wide flex flex-col gap-8 sm:gap-10">
        <FadeInView reduceMotion={reduceMotion}>
          <motion.div variants={fadeUp}>
            <Eyebrow>House rules</Eyebrow>
          </motion.div>
          <motion.h2
            id="manifesto-title"
            className="sr-only"
          >
            TBD house rules
          </motion.h2>
        </FadeInView>

        <FadeInView
          className="grid border border-line-soft md:grid-cols-3 md:divide-x md:divide-line-soft"
          reduceMotion={reduceMotion}
          stagger
        >
          {principles.map((line, index) => (
            <motion.article
              key={line}
              variants={fadeUp}
              className="flex min-h-[9rem] flex-col justify-between gap-6 border-t border-line-soft p-6 first:border-t-0 sm:p-8 md:border-t-0"
            >
              <span className="font-display text-[2.75rem] leading-none tracking-wide text-accent/45 sm:text-[3rem]">
                0{index + 1}
              </span>
              <p className="font-display text-[clamp(1.35rem,4vw,1.85rem)] font-normal uppercase leading-[0.92] tracking-[0.04em] text-ink">
                {line}
              </p>
            </motion.article>
          ))}
        </FadeInView>
      </div>
    </section>
  )
}

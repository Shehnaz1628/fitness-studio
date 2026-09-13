import { motion } from 'framer-motion'
import { Eyebrow, FadeInView } from '@/core'
import { storyContent, storyPillars } from '@/data/site'
import { fadeUp } from '@/motion/variants'

type StoryProps = {
  reduceMotion: boolean | null
}

export function Story({ reduceMotion }: StoryProps) {
  return (
    <section
      aria-labelledby="approach-title"
      className="relative isolate z-10 section-y section-x border-y border-line-soft bg-surface"
    >
      <div className="container-wide grid items-start gap-10 sm:gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <FadeInView className="flex w-full max-w-[36rem] flex-col gap-5 sm:gap-7" reduceMotion={reduceMotion}>
          <motion.div variants={fadeUp}>
            <Eyebrow>{storyContent.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h2
            id="approach-title"
            className="flex flex-col font-display text-[clamp(2.25rem,8vw,4.75rem)] font-normal uppercase leading-[0.9] tracking-[0.06em]"
            variants={fadeUp}
          >
            <span className="text-ink">{storyContent.headline[0]}</span>
            <span className="text-accent">{storyContent.headline[1]}</span>
          </motion.h2>

          <motion.p
            className="max-w-[28rem] border-l border-accent/30 pl-4 font-body text-[0.8125rem] font-normal leading-[1.65] text-muted sm:pl-5 sm:text-[0.875rem] sm:leading-[1.7]"
            variants={fadeUp}
          >
            {storyContent.body}
          </motion.p>
        </FadeInView>

        <FadeInView
          className="grid border border-line-soft"
          reduceMotion={reduceMotion}
          stagger
        >
          {storyPillars.map((pillar, index) => (
            <motion.div
              key={pillar.label}
              variants={fadeUp}
              className="flex items-start gap-4 border-t border-line-soft px-4 py-5 first:border-t-0 sm:gap-5 sm:px-6 sm:py-7"
            >
              <span className="font-display text-[2rem] leading-none tracking-wide text-accent/40">
                0{index + 1}
              </span>
              <div className="flex flex-col gap-2 pt-0.5">
                <p className="text-label">{pillar.label}</p>
                <p className="font-display text-[clamp(1.5rem,2.5vw,1.85rem)] font-normal uppercase leading-none tracking-[0.04em] text-ink">
                  {pillar.value}
                </p>
              </div>
            </motion.div>
          ))}
        </FadeInView>
      </div>
    </section>
  )
}

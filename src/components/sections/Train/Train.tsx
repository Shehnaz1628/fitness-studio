import { motion } from 'framer-motion'
import { Eyebrow, FadeInView } from '@/core'
import { sessions } from '@/data/sessions'
import { trainContent } from '@/data/site'
import { fadeUp } from '@/motion/variants'
import { TrainPanel } from './TrainPanel'

type TrainProps = {
  reduceMotion: boolean | null
}

export function Train({ reduceMotion }: TrainProps) {
  return (
    <section
      id="train"
      aria-labelledby="train-title"
      className="relative isolate z-30 section-y section-x bg-bg"
    >
      <div className="container-wide flex flex-col gap-8 sm:gap-10">
        <FadeInView
          className="flex max-w-[36rem] flex-col gap-5 sm:gap-7"
          reduceMotion={reduceMotion}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>{trainContent.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h2
            id="train-title"
            className="flex flex-col font-display text-[clamp(2.25rem,8vw,4.75rem)] font-normal uppercase leading-[0.9] tracking-[0.06em]"
            variants={fadeUp}
          >
            <span className="text-ink">{trainContent.headline[0]}</span>
            <span className="text-accent">{trainContent.headline[1]}</span>
          </motion.h2>

          <motion.p
            className="max-w-[28rem] border-l border-accent/30 pl-4 font-body text-[0.8125rem] font-normal leading-[1.65] text-muted sm:pl-5 sm:text-[0.875rem] sm:leading-[1.7]"
            variants={fadeUp}
          >
            {trainContent.body}
          </motion.p>
        </FadeInView>

        <FadeInView reduceMotion={reduceMotion} stagger amount={0.2}>
          <div className="section-bleed-x scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-5">
            {sessions.map((session, index) => (
              <motion.div
                key={session.name}
                variants={fadeUp}
                className="w-[min(82vw,20rem)] shrink-0 snap-start sm:w-[22rem] md:w-[24rem] lg:w-[26rem]"
              >
                <TrainPanel session={session} index={index} />
              </motion.div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}

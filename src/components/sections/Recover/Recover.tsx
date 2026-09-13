import { forwardRef } from 'react'
import { motion, type MotionValue } from 'framer-motion'
import { Eyebrow, FadeInView } from '@/core'
import { recoverContent } from '@/data/site'
import { fadeUp } from '@/motion/variants'

type RecoverProps = {
  reduceMotion: boolean | null
  mediaY?: MotionValue<string>
  mediaScale?: MotionValue<number>
  clipPath?: MotionValue<string>
}

export const Recover = forwardRef<HTMLElement, RecoverProps>(function Recover(
  { reduceMotion, mediaY, mediaScale, clipPath },
  ref,
) {
  const mediaStyle = reduceMotion
    ? undefined
    : { y: mediaY, scale: mediaScale, clipPath }

  return (
    <section
      ref={ref}
      id="recover"
      aria-labelledby="recover-title"
      className="relative isolate z-40 flex min-h-[clamp(24rem,78vh,52rem)] items-end overflow-hidden bg-bg section-x pb-[clamp(2.5rem,7vh,5rem)] pt-[clamp(5.5rem,16vw,8rem)]"
    >
      <motion.div
        className="absolute inset-x-0 -inset-y-[18%] will-change-[transform,clip-path]"
        aria-hidden="true"
        style={mediaStyle}
      >
        <img
          src={recoverContent.image}
          alt=""
          className="size-full object-cover brightness-[0.38] saturate-40"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/50 to-bg/30" />
      </motion.div>

      <FadeInView
        className="container-wide relative z-[1] flex w-full max-w-[34rem] flex-col gap-4 sm:gap-5"
        reduceMotion={reduceMotion}
        amount={0.45}
      >
        <motion.div variants={fadeUp}>
          <Eyebrow>{recoverContent.eyebrow}</Eyebrow>
        </motion.div>
        <motion.h2
          id="recover-title"
          className="text-balance text-[clamp(2.25rem,8vw,4.5rem)] font-normal leading-[0.95]"
          variants={fadeUp}
        >
          {recoverContent.title}
        </motion.h2>
        <motion.p
          className="text-prose"
          variants={fadeUp}
        >
          {recoverContent.body}
        </motion.p>
      </FadeInView>
    </section>
  )
})

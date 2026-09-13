import { forwardRef } from 'react'
import { motion, type MotionValue } from 'framer-motion'
import { Button, CtaRow, Eyebrow } from '@/core'
import { heroContent } from '@/data/site'
import { easeOut } from '@/motion/variants'

type HeroProps = {
  reduceMotion: boolean | null
  mediaY?: MotionValue<string>
  mediaScale?: MotionValue<number>
  contentY?: MotionValue<string>
  contentOpacity?: MotionValue<number>
}

export const Hero = forwardRef<HTMLElement, HeroProps>(function Hero(
  { reduceMotion, mediaY, mediaScale, contentY, contentOpacity },
  ref,
) {
  return (
    <header
      ref={ref}
      id="top"
      className="relative isolate z-0 flex min-h-svh items-end overflow-hidden bg-bg"
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        aria-hidden="true"
        style={reduceMotion ? undefined : { y: mediaY, scale: mediaScale }}
      >
        <img
          src={heroContent.image}
          alt=""
          className="size-full scale-105 object-cover object-[center_25%] brightness-[0.42] saturate-50"
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-bg/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-bg/80 via-bg/20 to-transparent"
        aria-hidden="true"
      />

      <motion.div
        className="container-wide section-x relative z-[1] w-full pb-[clamp(2.5rem,7vh,5rem)] pt-[clamp(5.5rem,16vw,9rem)] will-change-[transform,opacity]"
        style={
          reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }
        }
      >
        <div className="flex w-full max-w-[44rem] flex-col gap-5 sm:gap-6">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut }}
          >
            <Eyebrow>Dubai · Box-Fit Studio</Eyebrow>
          </motion.div>

          <motion.h1
            className="flex flex-col gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.08, ease: easeOut }}
          >
            <span className="font-display text-[clamp(3.75rem,18vw,10rem)] font-normal leading-[0.85] tracking-[0.06em] text-ink">
              {heroContent.brand}
            </span>
            <span className="flex flex-col gap-0 font-display text-[clamp(2rem,8vw,5rem)] font-normal uppercase leading-[0.9] tracking-[0.06em]">
              <span className="text-ink">{heroContent.headline[0]}</span>
              <span className="text-accent">{heroContent.headline[1]}</span>
            </span>
          </motion.h1>

          <motion.p
            className="max-w-[26rem] border-l border-accent/30 pl-4 font-body text-[0.8125rem] font-normal leading-[1.65] text-muted sm:pl-5 sm:text-[0.875rem] sm:leading-[1.7]"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.26, ease: easeOut }}
          >
            {heroContent.tagline}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.38, ease: easeOut }}
          >
            <CtaRow>
              <Button variant="primary" href="#train">
                Explore training
              </Button>
              <Button variant="ghost" href="#visit">
                Plan your visit
              </Button>
            </CtaRow>
          </motion.div>
        </div>
      </motion.div>
    </header>
  )
})

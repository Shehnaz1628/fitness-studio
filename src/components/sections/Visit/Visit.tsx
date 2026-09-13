import { motion } from 'framer-motion'
import { Button, CtaRow, Eyebrow, FadeInView, MapEmbed } from '@/core'
import { contact, visitContent } from '@/data/site'
import { easeOut, fadeUp } from '@/motion/variants'

type VisitProps = {
  reduceMotion: boolean | null
}

export function Visit({ reduceMotion }: VisitProps) {
  return (
    <section
      id="visit"
      aria-labelledby="visit-title"
      className="relative isolate z-50 section-y section-x border-t border-line-soft bg-surface"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeInView className="flex w-full flex-col gap-5 sm:gap-7" reduceMotion={reduceMotion}>
            <motion.div variants={fadeUp}>
              <Eyebrow>Visit</Eyebrow>
            </motion.div>
            <motion.h2
              id="visit-title"
              className="text-balance text-[clamp(2.25rem,8vw,4.5rem)] font-normal leading-[0.95]"
              variants={fadeUp}
            >
              {visitContent.title}
            </motion.h2>
            <motion.p
              className="text-prose"
              variants={fadeUp}
            >
              {visitContent.body}
            </motion.p>
            <motion.div variants={fadeUp}>
              <CtaRow>
                <Button variant="primary" href={contact.whatsappUrl} external icon="whatsapp">
                  Book on WhatsApp
                </Button>
                <Button variant="ghost" href={contact.instagramUrl} external icon="instagram">
                  Instagram
                </Button>
              </CtaRow>
            </motion.div>
          </FadeInView>

          <motion.div
            className="flex w-full flex-col gap-8 sm:gap-10"
            initial={reduceMotion ? false : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
          >
            <dl className="m-0 grid gap-8">
              <div className="border-t border-line-soft pt-6">
                <dt className="text-label mb-3">
                  Address
                </dt>
                <dd className="text-[0.9375rem] font-normal leading-relaxed text-ink">
                  {contact.address}
                </dd>
              </div>
              <div className="border-t border-line-soft pt-6">
                <dt className="text-label mb-3">
                  Hours
                </dt>
                {visitContent.hours.map((line) => (
                  <dd key={line} className="text-[0.9375rem] font-normal text-ink">
                    {line}
                  </dd>
                ))}
              </div>
            </dl>

            <MapEmbed
              embedUrl={contact.mapsEmbedUrl}
              directionsUrl={contact.mapsDirectionsUrl}
              title="TBD Fitness location map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion, type MotionValue } from 'framer-motion'
import type { ScoreMetric } from '@/types/ui'

type ScoreRingProps = {
  score: number
  label: string
  metrics: readonly ScoreMetric[]
  ringBackground?: MotionValue<string>
  reduceMotion: boolean | null
}

export function ScoreRing({
  score,
  label,
  metrics,
  ringBackground,
  reduceMotion,
}: ScoreRingProps) {
  return (
    <div className="flex flex-col gap-8" aria-label="Studio focus">
      <motion.div
        className="flex size-[11rem] flex-col items-center justify-center rounded-full border border-line bg-[radial-gradient(circle_at_center,var(--color-surface-raised)_58%,transparent_59%),conic-gradient(var(--color-accent)_0_86%,rgba(255,255,255,0.05)_86%_100%)] backdrop-blur-sm"
        style={reduceMotion ? undefined : { background: ringBackground }}
      >
        <span className="font-display text-[3rem] font-normal leading-none tracking-tight text-ink">
          {score}
        </span>
        <span className="text-label mt-1">
          {label}
        </span>
      </motion.div>
      <ul className="grid gap-0">
        {metrics.map((metric) => (
          <li
            key={metric.label}
            className="flex justify-between gap-6 border-t border-line-soft py-4 text-[0.875rem]"
          >
            <span className="font-normal text-muted">{metric.label}</span>
            <strong className="font-medium text-ink">{metric.value}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

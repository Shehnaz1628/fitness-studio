import type { MotionStyle } from 'framer-motion'
import type { ReactNode } from 'react'
import type { IconName } from '@/types/icon'

export type ButtonVariant = 'primary' | 'ghost' | 'ghost-dark'

export type ButtonProps = {
  variant?: ButtonVariant
  href: string
  children: ReactNode
  external?: boolean
  icon?: IconName
}

export type ScoreMetric = {
  label: string
  value: string
}

export type SectionHeadProps = {
  eyebrow?: string
  title: string
  description?: string
  titleId?: string
  className?: string
}

export type FadeInViewProps = {
  children: ReactNode
  className?: string
  stagger?: boolean
  amount?: number
  delay?: number
  reduceMotion: boolean | null
}

export type ParallaxStyle = MotionStyle | undefined

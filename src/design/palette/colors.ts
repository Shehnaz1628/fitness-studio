export const palette = {
  bg: '#060606',
  surface: '#0a0a0a',
  surfaceRaised: '#111111',
  ink: '#f7f4ef',
  muted: '#6f6d68',
  line: 'rgba(255, 255, 255, 0.08)',
  lineSoft: 'rgba(255, 255, 255, 0.04)',
  accent: '#c4a962',
  accentDim: '#8a7f5c',
  accentGlow: 'rgba(196, 169, 98, 0.1)',
} as const

export type PaletteColor = keyof typeof palette

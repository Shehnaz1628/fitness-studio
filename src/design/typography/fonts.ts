export const fontFamilies = {
  display: "'Bebas Neue', sans-serif",
  accent: "'Instrument Serif', Georgia, serif",
  body: "'Montserrat', system-ui, sans-serif",
  label: "'Montserrat', system-ui, sans-serif",
} as const

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const

export const fontSizes = {
  xs: '0.68rem',
  sm: '0.78rem',
  base: '0.9375rem',
  md: '1.0625rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.75rem',
  '3xl': 'clamp(2.75rem, 5vw, 4.5rem)',
  hero: 'clamp(5rem, 14vw, 10rem)',
} as const

export const letterSpacing = {
  tight: '-0.04em',
  snug: '-0.02em',
  normal: '0',
  wide: '0.08em',
  wider: '0.14em',
  widest: '0.22em',
} as const

export const googleFontsUrl =
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=Montserrat:wght@400;500;600&display=swap'

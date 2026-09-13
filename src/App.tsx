import { useRef } from 'react'
import { Nav } from '@/components/layout/Nav/Nav'
import {
  Footer,
  Hero,
  Manifesto,
  Recover,
  Story,
  Train,
  Visit,
} from '@/components/sections'
import { ScrollProgress } from '@/core'
import {
  useHeroParallax,
  useMotionPreference,
  useRecoverParallax,
  useScrollProgress,
} from '@/hooks'

function App() {
  const { reduceMotion } = useMotionPreference()
  const heroRef = useRef<HTMLElement>(null)
  const recoverRef = useRef<HTMLElement>(null)

  const { scaleX } = useScrollProgress()
  const {
    navSolid,
    mediaY,
    mediaScale,
    contentY,
    contentOpacity,
  } = useHeroParallax(heroRef)
  const { mediaY: recoverY, mediaScale: recoverScale, clipPath } =
    useRecoverParallax(recoverRef)

  return (
    <div className="relative min-h-svh overflow-x-clip bg-bg">
      <div className="grain pointer-events-none fixed inset-0 z-[90] opacity-40" aria-hidden="true" />

      <ScrollProgress scaleX={scaleX} hidden={!!reduceMotion} />
      <Nav solid={navSolid} />

      <Hero
        ref={heroRef}
        reduceMotion={reduceMotion}
        mediaY={mediaY}
        mediaScale={mediaScale}
        contentY={contentY}
        contentOpacity={contentOpacity}
      />

      <Story reduceMotion={reduceMotion} />

      <Manifesto reduceMotion={reduceMotion} />

      <Train reduceMotion={reduceMotion} />

      <Recover
        ref={recoverRef}
        reduceMotion={reduceMotion}
        mediaY={recoverY}
        mediaScale={recoverScale}
        clipPath={clipPath}
      />

      <Visit reduceMotion={reduceMotion} />
      <Footer />
    </div>
  )
}

export default App

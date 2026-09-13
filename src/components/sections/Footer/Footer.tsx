import { SocialLinks } from '@/core'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="relative isolate z-[60] section-x border-t border-line-soft bg-bg py-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="container-wide flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-display text-xl font-normal tracking-[0.16em] text-ink">
              TBD Fitness
            </span>
            <span className="font-label text-[0.78rem] font-medium tracking-wide text-muted">
              To Be Determined — Dubai
            </span>
          </div>

          <SocialLinks className="border-0 pt-0" />
        </div>

        <p className="border-t border-line-soft pt-6 font-label text-[0.72rem] font-medium text-muted">
          © {year} TBD Fitness — To Be Determined. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

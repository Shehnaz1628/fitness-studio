import { useState } from 'react'
import { cn } from '@/lib/cn'
import { Icon } from '@/core/ui/icons/Icon'
import { contact, navLinks } from '@/data/site'

type NavProps = {
  solid: boolean
}

export function Nav({ solid }: NavProps) {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-[100] transition-all duration-700',
        solid || open
          ? 'border-b border-line-soft bg-bg/95 backdrop-blur-2xl'
          : 'bg-linear-to-b from-bg/80 via-bg/40 to-transparent',
      )}
      aria-label="Primary"
    >
      <div className="container-wide section-x flex items-center justify-between gap-3 py-4 sm:py-5 md:py-6">
        <a className="flex min-w-0 flex-col gap-0.5" href="#top" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-normal tracking-[0.16em] text-ink sm:text-2xl sm:tracking-[0.2em]">
            TBD
          </span>
          <span className="font-label hidden text-[0.62rem] font-medium uppercase tracking-[0.28em] text-muted min-[420px]:block">
            To Be Determined
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label text-[0.72rem] font-medium uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            className="font-label inline-flex items-center gap-2 border border-line px-3 py-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-ink transition-all duration-500 hover:border-accent/50 hover:text-accent sm:px-5 sm:py-2.5 sm:text-[0.68rem] sm:tracking-[0.22em]"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="whatsapp" className="size-3.5 shrink-0" />
            <span className="hidden min-[400px]:inline">Book demo</span>
            <span className="min-[400px]:hidden">Book</span>
          </a>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center border border-line text-ink transition-colors hover:border-accent/50 hover:text-accent lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block size-4">
              <span
                className={cn(
                  'absolute left-0 h-px w-4 bg-current transition-transform duration-300',
                  open ? 'top-2 rotate-45' : 'top-0.5',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-2 h-px w-4 bg-current transition-opacity duration-300',
                  open ? 'opacity-0' : 'opacity-100',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 h-px w-4 bg-current transition-transform duration-300',
                  open ? 'top-2 -rotate-45' : 'top-3.5',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'container-wide section-x overflow-hidden border-t border-line-soft bg-bg/95 transition-[max-height,opacity] duration-500 lg:hidden',
          open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-label block py-2.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

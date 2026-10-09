import { Menu, X, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/utils/cn'
import { site } from '@/utils/content'

function NaniLabsMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" y1="22" x2="12" y2="12" />
      <polyline points="2 8.5 12 12 22 8.5" />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const navItems = [
  { id: 'proyectos', label: 'Ecosistema' },
  { id: 'sobre', label: 'Laboratorio' },
  { id: 'tecnologias', label: 'Stack' },
  { id: 'contacto', label: 'Contacto' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-xl border-b border-[var(--color-border)] shadow-lg'
          : 'bg-[#09090b]/40 backdrop-blur-md border-b border-white/5'
      )}
      role="banner"
    >
      <nav className="container" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand mark and title */}
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-[var(--color-text)] focus-ring-visible rounded-md px-1 py-1 -ml-1 group"
              aria-label={`${site.name} - Inicio`}
            >
              <div className="h-8 w-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                <NaniLabsMark className="h-5 w-5" />
              </div>
              <span>NaniLabs</span>
            </a>

            <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ONLINE
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] hover:text-cyan-400 px-2 py-1"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://saas.nanilabs.lat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-colors"
            >
              <span>NaniLabs SaaS</span>
              <ExternalLink className="h-3 w-3" />
            </a>

            <div className="h-4 w-px bg-[var(--color-border)] mx-1" />

            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors p-1.5 rounded-full"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors p-1.5 rounded-full"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-bg-card)] text-[var(--color-text)] border border-[var(--color-border)] focus-ring-visible"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {open && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-[var(--color-border)] bg-[#09090b]">
            <div className="flex flex-col gap-3 font-mono text-sm">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="text-[var(--color-text-muted)] hover:text-white py-1.5"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-[var(--color-border)] flex items-center justify-between">
                <a
                  href="https://saas.nanilabs.lat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--color-accent)] flex items-center gap-1"
                >
                  <span>Abrir NaniLabs SaaS</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <div className="flex items-center gap-3">
                  <a href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GithubIcon className="h-4 w-4 text-[var(--color-text-muted)]" />
                  </a>
                  <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <InstagramIcon className="h-4 w-4 text-[var(--color-text-muted)]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
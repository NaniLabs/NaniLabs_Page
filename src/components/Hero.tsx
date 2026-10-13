import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { site } from '@/utils/content'

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

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 bg-[var(--color-bg)] border-b border-[var(--color-border)]"
      aria-labelledby="hero-title"
    >
      {/* Subtle architectural grid & ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left column: NaniLabs identity and direct personal lab intro */}
          <div className="lg:col-span-8 animate-fade-in">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3.5 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)]">
                NaniLabs · Portfolio &amp; Laboratorio de Software
              </span>
            </div>

            <h1
              id="hero-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--color-text)] leading-[1.15]"
            >
              Mis proyectos de software, herramientas locales y sistemas web.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
              Espacio donde concentro lo que construyo y mantengo bajo la marca <strong className="text-[var(--color-text)] font-medium">NaniLabs</strong>: conectividad local entre Android y Windows con <strong className="text-[var(--color-text)] font-medium">DoubleLink</strong>, plataformas serverless en Cloudflare, la calculadora <strong className="text-[var(--color-text)] font-medium">DoBre</strong> y utilidades de escritorio dentro de la rama <strong className="text-[var(--color-text)] font-medium">FreeSoft</strong>.
            </p>

            {/* Clear, unambiguous CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#proyectos"
                className="btn btn-primary group"
              >
                <span>Ver todos los proyectos</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>

              <a
                href="https://ceo.nanilabs.lat"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary group hover:border-[var(--color-accent)]/60"
              >
                <span>Perfil &amp; CV (ceo.nanilabs.lat)</span>
                <ArrowUpRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>

              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary group"
              >
                <GithubIcon className="h-4 w-4" />
                <span>github.com/NaniLabs</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[var(--color-text-subtle)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right column: NaniLabs Brand Emblem Card */}
          <div className="lg:col-span-4 flex lg:justify-end animate-slide-up">
            <div className="w-full max-w-sm rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/90 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[var(--color-accent)]/50">
              <div className="flex items-center gap-4 pb-5 border-b border-[var(--color-border)]">
                <div className="h-14 w-14 rounded-xl bg-[#06080d] border border-[var(--color-border)] flex items-center justify-center p-2.5 shrink-0 shadow-inner">
                  <img
                    src="/projects/nanilabs-saas.png"
                    alt="Logo de NaniLabs"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-[var(--color-text)]">
                    NaniLabs
                  </p>
                  <p className="text-xs font-mono text-[var(--color-accent)]">
                    por Ignacio Exequiel Meoniz
                  </p>
                </div>
              </div>

              <div className="py-4 space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between text-[var(--color-text-muted)]">
                  <span>Rama Web &amp; Cloud</span>
                  <span className="text-[var(--color-text)]">Cloudflare Workers · React</span>
                </div>
                <div className="flex items-center justify-between text-[var(--color-text-muted)]">
                  <span>Rama Local LAN</span>
                  <span className="text-[var(--color-text)]">Flutter · Dart · Win32</span>
                </div>
                <div className="flex items-center justify-between text-[var(--color-text-muted)]">
                  <span>Rama FreeSoft</span>
                  <span className="text-[var(--color-text)]">C++ · Qt · Python</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <InstagramIcon className="h-3.5 w-3.5" />
                  <span>@nanilabs.lat</span>
                </a>
                <span className="font-mono text-[var(--color-text-subtle)]">
                  Argentina
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

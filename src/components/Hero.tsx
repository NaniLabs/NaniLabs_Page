import { ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/utils/cn'
import { site, getFeaturedProjects } from '@/utils/content'

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
  const featuredProjects = getFeaturedProjects()
  const mainProject = featuredProjects[0]

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(6,182,212,0.08),transparent_60%),radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(168,85,247,0.05),transparent_50%)]" aria-hidden="true" />

      <div className="container relative z-10 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-2 text-sm font-medium text-[var(--color-accent)] mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span>{site.tagline}</span>
          </div>

          <h1
            id="hero-title"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text)] mb-6 animate-fade-in stagger-1"
          >
            {site.name}
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto animate-fade-in stagger-2 leading-relaxed">
            {site.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in stagger-3">
            <a
              href="#proyectos"
              className="btn btn-primary w-full sm:w-auto"
            >
              <span>Ver proyectos</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-full sm:w-auto"
            >
              <span>Portfolio personal</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {mainProject && (
            <div className="mt-12 animate-fade-in stagger-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
                Proyecto destacado
              </p>
              <div className="featured-project p-6 md:p-8 max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h2 className="font-display text-2xl md:text-3xl font-semibold text-[var(--color-text)] mb-2">
                      {mainProject.name}
                    </h2>
                    {mainProject.tagline && (
                      <p className="text-[var(--color-accent)] font-medium mb-3">{mainProject.tagline}</p>
                    )}
                    <p className="text-[var(--color-text-muted)] mb-4">{mainProject.description}</p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4">
                      <span className={cn('badge', `badge-${mainProject.statusColor}`)}>
                        {mainProject.status}
                      </span>
                      {mainProject.version && (
                        <span className="text-xs text-[var(--color-text-subtle)] px-2 py-1 rounded bg-[var(--color-bg-elevated)]">
                          v{mainProject.version}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    {mainProject.links.web && (
                      <a
                        href={mainProject.links.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary w-full sm:w-auto"
                      >
                        <span>Ver proyecto</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                    {mainProject.links.github && (
                      <a
                        href={mainProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary w-full sm:w-auto"
                      >
                        <GithubIcon className="h-4 w-4" aria-hidden="true" />
                        <span>Código</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 animate-fade-in stagger-5">
          <div className="flex items-center justify-center gap-8 text-[var(--color-text-subtle)]">
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-[var(--color-accent)] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <span className="h-4 w-px bg-[var(--color-border)]" aria-hidden="true" />
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-[var(--color-accent)] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ArrowRight className="h-6 w-6 text-[var(--color-text-subtle)]" />
      </div>
    </section>
  )
}
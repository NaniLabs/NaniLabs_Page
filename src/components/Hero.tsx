import { ArrowRight, ExternalLink } from 'lucide-react'
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

const featuredProjects = [
  {
    name: 'DoubleLink',
    version: 'v2.3.1',
    status: 'LAN · Activo',
    stack: 'Flutter · Dart · Win32 C++ · WebSocket',
    summary: 'Transferencia bidireccional local entre Android y Windows sin servidores intermedios.',
    link: 'https://doublelink.nanilabs.lat',
  },
  {
    name: 'NaniLabs SaaS',
    version: 'v1.0',
    status: 'Producción · Multi-tenant',
    stack: 'Cloudflare Workers · D1 SQLite · React · Mercado Pago',
    summary: 'Plataforma comercial serverless con base relacional y cobros integrados.',
    link: 'https://saas.nanilabs.lat',
  },
  {
    name: 'DoBre',
    version: 'v1.0',
    status: 'Herramienta',
    stack: 'React · TypeScript · Tailwind CSS',
    summary: 'Motor de cálculo de comisiones, envíos y margen neto para vendedores de Mercado Libre.',
    link: 'https://dobre.nanilabs.lat',
  },
  {
    name: 'OrganEyes',
    version: 'v1.2',
    status: 'Utilidad · Windows',
    stack: 'C++ · Qt Framework · Win32 APIs',
    summary: 'Clasificación heurística y organización automática de archivos masivos.',
    link: 'https://github.com/NaniLabs/FreeSoft',
  },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 bg-[var(--color-bg)]"
      aria-labelledby="hero-title"
    >
      <div className="container">
        <div className="max-w-3xl">

          {/* Label */}
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-subtle)] mb-6">
            Laboratorio independiente de desarrollo de software
          </p>

          {/* Title - NO gradient */}
          <h1
            id="hero-title"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text)] leading-[1.08]"
          >
            Ingeniería de software{' '}
            <span className="text-[var(--color-accent)]">
              práctica y descentralizada.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed">
            Laboratorio independiente de desarrollo enfocado en utilidades P2P de red local, sistemas web comerciales serverless sobre Cloudflare y optimización de flujos operativos sin dependencias corporativas innecesarias.
          </p>

          {/* CTAs - simple, no glow */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="btn btn-primary inline-flex items-center gap-2 px-5 py-3"
            >
              <span>Explorar proyectos</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="https://saas.nanilabs.lat"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary inline-flex items-center gap-2 px-5 py-3"
            >
              <span>NaniLabs SaaS</span>
              <ExternalLink className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Editorial project list - NOT a console, NOT tabs */}
        <div className="mt-16 border-t border-[var(--color-border)]">
          <h2 className="sr-only">Proyectos destacados</h2>
          {featuredProjects.map((project, idx) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block py-5 border-b border-[var(--color-border)] group hover:bg-white/[0.02] transition-colors ${idx > 0 ? '' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <span className="font-display font-semibold text-[var(--color-text)] text-lg group-hover:text-[var(--color-accent)] transition-colors shrink-0">
                  {project.name}
                </span>
                <span className="text-xs font-mono text-[var(--color-text-subtle)] shrink-0">
                  {project.version}
                </span>
                <span className="text-xs font-mono text-[var(--color-accent)] shrink-0 hidden sm:inline">
                  {project.status}
                </span>
                <span className="text-sm text-[var(--color-text-muted)] flex-1 min-w-0">
                  {project.summary}
                </span>
                <span className="text-xs text-[var(--color-text-subtle)] hidden md:inline shrink-0">
                  {project.stack}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Minimal footer */}
        <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-[var(--color-text-subtle)]">
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-text)] transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-text)] transition-colors flex items-center gap-1.5"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  )
}

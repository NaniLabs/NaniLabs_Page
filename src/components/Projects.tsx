import { useProjects } from '@/hooks/useProjects'
import { ArrowUpRight, FolderGit2 } from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function getHostname(url?: string): string {
  if (!url) return ''
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

export function Projects() {
  const { projects } = useProjects()

  const saasProject = projects.find((p) => p.id === 'nanilabs-saas')
  const doublelinkProject = projects.find((p) => p.id === 'doublelink')
  const dobreProject = projects.find((p) => p.id === 'dobre')
  const crmProject = projects.find((p) => p.id === 'family-tech-store')
  const freesoftProjects = projects.filter((p) => p.id === 'aquamarine' || p.id === 'organeyes')

  const mainCards = [doublelinkProject, saasProject, dobreProject, crmProject].filter(Boolean)

  return (
    <section
      id="proyectos"
      className="section relative bg-[var(--color-bg-elevated)] py-20 border-b border-[var(--color-border)]"
      aria-labelledby="projects-title"
    >
      <div className="container">
        {/* Section Header */}
        <header className="mb-12 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[var(--color-accent)]" />
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)]">
              Catálogo de Proyectos
            </p>
          </div>
          <h2
            id="projects-title"
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[var(--color-text)]"
          >
            Proyectos y Propiedades de NaniLabs
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)] mt-3 leading-relaxed">
            Cada tarjeta incluye su identidad visual y el enlace directo a su aplicación web o repositorio oficial.
          </p>
        </header>

        {/* Primary Projects Grid (DoubleLink, NaniLabs SaaS, DoBre, CRM) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {mainCards.map((project) => {
            if (!project) return null
            const targetUrl = project.links.web || project.links.github || '#'
            const hostLabel = getHostname(targetUrl)
            const isScreenshot = project.image?.endsWith('.webp')

            return (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 sm:p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/60 hover:shadow-2xl"
              >
                <div>
                  {/* Card Header: Logo + Title + Status + Hostname Pill */}
                  <div className="flex items-start gap-4">
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[#06080d] p-1 transition-transform duration-300 group-hover:scale-105 group-hover:border-[var(--color-accent)]/50"
                      aria-label={`Abrir ${project.name}`}
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`Logo de ${project.name}`}
                          className={
                            isScreenshot
                              ? 'h-full w-full rounded-xl object-cover'
                              : project.id === 'nanilabs-saas'
                                ? 'h-full w-full object-contain scale-[1.55]'
                                : 'h-full w-full object-contain scale-[1.18]'
                          }
                          loading="lazy"
                        />
                      ) : (
                        <span className="font-display text-lg font-bold text-[var(--color-accent)]">
                          {project.name.slice(0, 2)}
                        </span>
                      )}
                    </a>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span
                          className={`badge ${
                            project.statusColor ? `badge-${project.statusColor}` : 'badge-info'
                          }`}
                        >
                          {project.status}
                        </span>
                        {hostLabel && (
                          <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-2.5 py-0.5 text-xs font-mono text-[var(--color-accent)]">
                            {hostLabel}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                        <a
                          href={targetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 focus-ring-visible rounded"
                        >
                          <span>{project.name}</span>
                          <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                        </a>
                      </h3>

                      {project.tagline && (
                        <p className="text-xs font-mono text-[var(--color-text-subtle)] mt-0.5">
                          {project.tagline}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-2.5 py-1 text-xs font-mono text-[var(--color-text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Explicit Action Button + Destination indicator */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary group/btn"
                    >
                      <span>Ir a {hostLabel || project.name}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>

                    <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                      Redirige a {hostLabel} ↗
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Dedicated FreeSoft Branch Container (Aquamarine + OrganEyes) */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-[var(--color-accent)]/40">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-[var(--color-border)]">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-mono font-medium text-[var(--color-accent)]">
                  <FolderGit2 className="h-3.5 w-3.5" />
                  <span>Rama Open Source · FreeSoft</span>
                </span>
                <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                  github.com/NaniLabs/FreeSoft
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-semibold text-[var(--color-text)]">
                FreeSoft — Utilidades de Escritorio y Gestión Local
              </h3>
              <p className="mt-1.5 text-sm sm:text-base text-[var(--color-text-muted)] max-w-3xl">
                Rama de software libre de NaniLabs donde se agrupan <strong className="text-[var(--color-text)] font-medium">Aquamarine</strong> y <strong className="text-[var(--color-text)] font-medium">OrganEyes</strong>: programas nativos para Windows enfocados en gestión local y automatización de archivos sin dependencias en la nube.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="https://github.com/NaniLabs/FreeSoft"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary group"
              >
                <GithubIcon className="h-4 w-4" />
                <span>Abrir repositorio FreeSoft</span>
                <ArrowUpRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Nested FreeSoft Projects: Aquamarine & OrganEyes */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {freesoftProjects.map((tool) => {
              const repoUrl = tool.links.github || 'https://github.com/NaniLabs/FreeSoft'
              return (
                <article
                  key={tool.id}
                  className="group flex flex-col justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/70 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/60"
                >
                  <div>
                    <div className="flex items-start gap-4">
                      <a
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-[#06080d] p-2.5 transition-transform duration-300 group-hover:scale-105 group-hover:border-[var(--color-accent)]/50"
                        aria-label={`Ver ${tool.name} en FreeSoft`}
                      >
                        {tool.image && (
                          <img
                            src={tool.image}
                            alt={`Logo de ${tool.name}`}
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        )}
                      </a>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-2.5 py-0.5 text-[11px] font-mono text-[var(--color-accent)]">
                            Parte de FreeSoft
                          </span>
                          <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                            {tool.status}
                          </span>
                        </div>

                        <h4 className="font-display text-lg sm:text-xl font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                          <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5"
                          >
                            <span>{tool.name}</span>
                            <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                          </a>
                        </h4>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {tool.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-0.5 text-xs font-mono text-[var(--color-text-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--color-accent)] hover:underline"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>Ver en GitHub (FreeSoft) ↗</span>
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

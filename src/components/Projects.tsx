import { useProjects } from '@/hooks/useProjects'
import { ExternalLink, ArrowRight } from 'lucide-react'

export function Projects() {
  const { projects } = useProjects()

  const saasProject = projects.find(p => p.id === 'nanilabs-saas')
  const doublelinkProject = projects.find(p => p.id === 'doublelink')
  const specializedProjects = projects.filter(p => p.id !== 'nanilabs-saas' && p.id !== 'doublelink')

  return (
    <section id="proyectos" className="section relative bg-[var(--color-bg-elevated)] py-20" aria-labelledby="projects-title">
      <div className="container">
        
        {/* Section Header */}
        <header className="mb-16 text-left max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-subtle)] mb-3">
            Portafolio de Ingeniería // Producción &amp; Lab
          </p>
          <h2 id="projects-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text)]">
            Ecosistema de Software y Plataformas
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-muted)] mt-4 leading-relaxed">
            Sistemas web comerciales multi-tenant, suites de conectividad P2P y motores de optimización financiera diseñados para operar sin intermediarios ni costes operativos superfluos.
          </p>
        </header>

        {/* Flagship Projects - Clean Two-Column without gradients/halos */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-subtle)] mb-6">
            Proyectos Principales
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* NaniLabs SaaS */}
            {saasProject && (
              <div className="border border-[var(--color-border)] rounded-xl p-7 md:p-8 bg-[var(--color-bg-card)]">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono text-emerald-400">
                    ● En producción
                  </span>
                  <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                    Serverless
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-2">
                  {saasProject.name}
                </h3>
                <p className="text-sm font-mono text-[var(--color-accent)] mb-4">
                  {saasProject.tagline || 'Desarrollo web y gestión a medida para negocios'}
                </p>

                <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed mb-6">
                  {saasProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {saasProject.technologies.map(tech => (
                    <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                  <a
                    href={saasProject.links.web || 'https://saas.nanilabs.lat'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-flex items-center gap-2 text-sm px-5 py-2.5"
                  >
                    <span>Abrir NaniLabs SaaS</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                    saas.nanilabs.lat
                  </span>
                </div>
              </div>
            )}

            {/* DoubleLink */}
            {doublelinkProject && (
              <div className="border border-[var(--color-border)] rounded-xl p-7 md:p-8 bg-[var(--color-bg-card)]">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono text-cyan-400">
                    ● Beta 2.3.1
                  </span>
                  <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                    Android &amp; Windows
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-2">
                  {doublelinkProject.name}
                </h3>
                <p className="text-sm font-mono text-[var(--color-accent)] mb-4">
                  {doublelinkProject.tagline || 'Ecosistema de control y conectividad local sin nube'}
                </p>

                <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed mb-6">
                  {doublelinkProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {doublelinkProject.technologies.map(tech => (
                    <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                  <a
                    href={doublelinkProject.links.web || 'https://doublelink.nanilabs.lat'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-flex items-center gap-2 text-sm px-5 py-2.5"
                  >
                    <span>Descargar v2.3.1</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                    doublelink.nanilabs.lat
                  </span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Specialized Utilities - Editorial List */}
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-subtle)] mb-6">
            Motores, Aplicaciones de Escritorio y Herramientas
          </p>

          <div className="border-t border-[var(--color-border)]">
            {specializedProjects.map((project) => (
              <a
                key={project.id}
                href={project.links.web || project.links.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-5 border-b border-[var(--color-border)] group hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span className="font-display font-semibold text-[var(--color-text)] text-base group-hover:text-[var(--color-accent)] transition-colors shrink-0">
                    {project.name}
                  </span>
                  <span className={`badge shrink-0 ${project.statusColor ? `badge-${project.statusColor}` : ''}`}>
                    {project.status}
                  </span>
                  <span className="text-sm text-[var(--color-text-muted)] flex-1 min-w-0">
                    {project.description}
                  </span>
                  {project.technologies.length > 0 && (
                    <span className="text-xs font-mono text-[var(--color-text-subtle)] hidden lg:inline shrink-0">
                      {project.technologies.slice(0, 4).join(' · ')}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

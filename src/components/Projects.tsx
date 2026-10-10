import { useProjects } from '@/hooks/useProjects'
import { ProjectCard } from '@/components/ProjectCard'
import { ExternalLink, ArrowRight, Layers, ShieldCheck, Zap } from 'lucide-react'

export function Projects() {
  const { projects } = useProjects()

  // Flagships: NaniLabs SaaS and DoubleLink
  const saasProject = projects.find(p => p.id === 'nanilabs-saas')
  const doublelinkProject = projects.find(p => p.id === 'doublelink')

  // Other specialized projects
  const specializedProjects = projects.filter(p => p.id !== 'nanilabs-saas' && p.id !== 'doublelink')

  return (
    <section id="proyectos" className="section relative bg-[var(--color-bg)] py-20" aria-labelledby="projects-title">
      <div className="container">
        
        {/* Section Header */}
        <header className="section-header mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-accent)] tracking-wider uppercase mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>PORTAFOLIO DE INGENIERÍA // PRODUCCIÓN & LAB</span>
          </div>
          <h2 id="projects-title" className="section-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text)]">
            Ecosistema de Software y Plataformas
          </h2>
          <p className="section-description text-base sm:text-lg text-[var(--color-text-muted)] mt-4 leading-relaxed">
            Sistemas web comerciales multi-tenant, suites de conectividad P2P y motores de optimización financiera diseñados para operar sin intermediarios ni costes operativos superfluos.
          </p>
        </header>

        {/* Tier 1: Dual Flagship Showcase (Asymmetric 2-Column High-Impact Panels) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] flex items-center gap-2">
              <Layers className="h-3.5 w-3.5" />
              PROYECTOS PRINCIPALES // ECOSISTEMA
            </span>
            <span className="text-xs font-mono text-[var(--color-text-subtle)]">ACCESO DIRECTO</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Flagship Card 1: NaniLabs SaaS */}
            {saasProject && (
              <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-[#111622] to-[#0d0f14] p-7 md:p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(6,182,212,0.08)] relative overflow-hidden group hover:border-cyan-400/60 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold tracking-wide">
                      ● EN PRODUCCIÓN · MULTI-TENANT
                    </span>
                    <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                      ARQUITECTURA SERVERLESS
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

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <Zap className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                      <span className="text-[var(--color-text-muted)]">Workers Edge V8</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span className="text-[var(--color-text-muted)]">D1 SQLite Aislado</span>
                    </div>
                    <div className="col-span-2 text-[11px] text-[var(--color-text-subtle)] border-t border-white/5 pt-2">
                      Integración nativa con webhooks de Mercado Pago y seguimiento público de reparaciones.
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {saasProject.technologies.map(tech => (
                      <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-text-muted)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={saasProject.links.web || 'https://saas.nanilabs.lat'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-flex items-center gap-2 text-sm px-5 py-2.5 shadow-[var(--shadow-glow)]"
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

            {/* Flagship Card 2: DoubleLink */}
            {doublelinkProject && (
              <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-[#131324] to-[#0e0e17] p-7 md:p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(99,102,241,0.08)] relative overflow-hidden group hover:border-indigo-400/60 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold tracking-wide">
                      ● BETA 2.3.1 · LAN DIRECTA
                    </span>
                    <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                      ANDROID &bull; WINDOWS
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-2">
                    {doublelinkProject.name}
                  </h3>
                  <p className="text-sm font-mono text-indigo-400 mb-4">
                    {doublelinkProject.tagline || 'Ecosistema de control y conectividad local sin nube'}
                  </p>

                  <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed mb-6">
                    {doublelinkProject.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <Zap className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                      <span className="text-[var(--color-text-muted)]">WebSocket Local 8080</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                      <span className="text-[var(--color-text-muted)]">Operación 100% Local (LAN)</span>
                    </div>
                    <div className="col-span-2 text-[11px] text-[var(--color-text-subtle)] border-t border-white/5 pt-2">
                      Edge Panel táctil, portapapeles compartido instantáneo y streaming de cámara/pantalla.
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {doublelinkProject.technologies.map(tech => (
                      <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-text-muted)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={doublelinkProject.links.web || 'https://doublelink.nanilabs.lat'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-flex items-center gap-2 text-sm px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600"
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

        {/* Tier 2: Specialized Utilities Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              MOTORES, APLICACIONES DE ESCRITORIO Y HERRAMIENTAS
            </span>
            <span className="text-xs font-mono text-[var(--color-text-subtle)]">DESARROLLOS INDEPENDIENTES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {specializedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
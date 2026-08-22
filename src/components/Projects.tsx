import { getFeaturedProjects, getRegularProjects } from '@/utils/content'
import { ProjectCard } from '@/components/ProjectCard'

export function Projects() {
  const featured = getFeaturedProjects()
  const regular = getRegularProjects()

  return (
    <section id="proyectos" className="section" aria-labelledby="projects-title">
      <div className="container">
        <header className="section-header mb-12 md:mb-16">
          <span className="section-label">Proyectos</span>
          <h2 id="projects-title" className="section-title">
            Cosas que he construido
          </h2>
          <p className="section-description">
            Todos los proyectos de NaniLabs. Algunos terminados, otros en desarrollo activo.
            Cada uno resuelve un problema real que tenía.
          </p>
        </header>

        {featured.length > 0 && (
          <div className="mb-12 md:mb-16">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </div>
        )}

        {regular.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text-muted)] mb-8 text-center md:text-left">
              Otros proyectos
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {regular.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
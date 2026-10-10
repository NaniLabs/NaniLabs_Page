import { getAllProjects } from '@/utils/content'

export function TechStack() {
  const projects = getAllProjects()

  const allTechs = new Set<string>()
  projects.forEach((p) => p.technologies.forEach((t) => allTechs.add(t)))

  const sortedTechs = Array.from(allTechs).sort()

  return (
    <section id="tecnologias" className="section bg-[var(--color-bg-elevated)]" aria-labelledby="tech-title">
      <div className="container">
        <header className="section-header mb-12 md:mb-16">
          <span className="section-label">Tecnologías</span>
          <h2 id="tech-title" className="section-title">
            Lo que uso para construir
          </h2>
          <p className="section-description">
            No hay stack obligatorio. Cada proyecto usa lo que mejor encaja.
            Estas son las tecnologías presentes en los proyectos actuales.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto">
          {sortedTechs.map((tech) => (
            <span
              key={tech}
              className="tech-tag"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-8 text-center text-[var(--color-text-subtle)] text-sm">
          La lista crece conforme aparecen nuevos proyectos.
        </p>
      </div>
    </section>
  )
}

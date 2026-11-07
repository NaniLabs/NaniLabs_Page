import { getAllProjects } from '@/utils/content'

const layers = [
  {
    name: 'Cloud & Serverless',
    role: 'Infraestructura y datos',
    tech: ['Cloudflare Workers', 'Cloudflare D1', 'Node.js', 'SQLite', 'Multi-tenant'],
  },
  {
    name: 'Aplicaciones Nativas & Móvil',
    role: 'Interfaces y herramientas locales',
    tech: ['Flutter', 'Dart', 'Kotlin', 'Win32', 'C++', 'Qt', 'Python', 'Tkinter'],
  },
  {
    name: 'Frontend & Sistemas Web',
    role: 'Experiencias web y comercio',
    tech: ['TypeScript', 'React', 'Tailwind CSS', 'Mercado Pago'],
  },
]

export function TechStack() {
  const available = new Set(
    getAllProjects().flatMap((project) => project.technologies)
  )

  return (
    <section id="tecnologias" className="section stack-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / Tecnologías</p>
            <h2>
              Matriz de stack
              <br />
              por capa de ingeniería.
            </h2>
          </div>
          <p>
            Las tecnologías presentes en los proyectos actuales, agrupadas según su función.
          </p>
        </div>
        <div className="stack-matrix">
          {layers.map((layer, i) => (
            <article key={layer.name}>
              <span className="stack-index">0{i + 1}</span>
              <div>
                <h3>{layer.name}</h3>
                <p>{layer.role}</p>
              </div>
              <div className="stack-items">
                {layer.tech
                  .filter((tech) => available.has(tech))
                  .map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

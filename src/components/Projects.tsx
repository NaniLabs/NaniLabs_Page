import { useState } from 'react'
import { useProjects } from '@/hooks/useProjects'
import { ProjectCard } from '@/components/ProjectCard'

const order = [
  'nanilabs-saas',
  'family-tech-store',
  'doublelink',
  'dobre',
  'aquamarine',
  'organeyes',
]

const filters = [
  { label: 'Todos', ids: order },
  { label: 'Web & Cloud', ids: order.slice(0, 2) },
  { label: 'Multiplataforma LAN & E-Commerce', ids: order.slice(2, 4) },
  { label: 'FreeSoft Desktop', ids: order.slice(4) },
]

export function Projects() {
  const { projects } = useProjects()
  const [filter, setFilter] = useState(0)

  const selected = order
    .map((id) => projects.find((p) => p.id === id))
    .filter((p) => p !== undefined)
    .filter((p) => filters[filter].ids.includes(p.id))

  const main = selected.filter((p) => !filters[3].ids.includes(p.id))
  const free = selected.filter((p) => filters[3].ids.includes(p.id))

  return (
    <section id="proyectos" className="section catalog">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Ecosistema</p>
            <h2>
              Proyectos en
              <br />
              el laboratorio.
            </h2>
          </div>
          <p>
            Seis desarrollos, distintas necesidades. Explorá las aplicaciones y sus tecnologías.
          </p>
        </div>
        <div
          className="filters"
          role="group"
          aria-label="Filtrar proyectos por categoría"
        >
          {filters.map((item, i) => (
            <button
              key={item.label}
              type="button"
              aria-pressed={filter === i}
              onClick={() => setFilter(i)}
            >
              {item.label} <span>({item.ids.length})</span>
            </button>
          ))}
        </div>
        <div className="project-list">
          {main.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={order.indexOf(p.id) + 1}
            />
          ))}
        </div>
        {free.length > 0 && (
          <div className="freesoft" id="freesoft">
            <div className="freesoft-heading">
              <div>
                <p className="eyebrow">Rama de software libre</p>
                <h3>FreeSoft / Desktop</h3>
              </div>
              <p>
                Herramientas de escritorio para gestión local y organización de archivos.
              </p>
              <a
                href="https://github.com/NaniLabs/FreeSoft"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositorio FreeSoft ↗
              </a>
            </div>
            <div className="freesoft-list">
              {free.map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  index={order.indexOf(p.id) + 1}
                  compact
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

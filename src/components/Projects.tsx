import { useEffect, useState } from 'react'
import { useProjects } from '@/hooks/useProjects'
import { ProjectCard } from '@/components/ProjectCard'
const order = ['doublelink', 'nanilabs-saas', 'family-tech-store', 'dobre', 'aquamarine', 'organeyes']
const filters = [
  { label: 'Todos', ids: order },
  { label: 'Web & Cloud', ids: ['nanilabs-saas', 'family-tech-store'] },
  { label: 'LAN & Finanzas', ids: ['doublelink', 'dobre'] },
  { label: 'FreeSoft Desktop', ids: ['aquamarine', 'organeyes'] },
]
export function Projects() {
  const { projects } = useProjects()
  const [filter, setFilter] = useState(0)
  useEffect(() => {
    function showLinkedProject() {
      const id = window.location.hash.replace('#proyecto-', '')
      if (order.includes(id)) setFilter(0)
    }
    window.addEventListener('hashchange', showLinkedProject)
    showLinkedProject()
    return () => window.removeEventListener('hashchange', showLinkedProject)
  }, [])
  const selected = order.flatMap((id) => projects.filter((p) => p.id === id && filters[filter].ids.includes(id)))
  return <section id="proyectos" className="section catalog"><div className="container"><div className="section-heading"><div><p className="eyebrow">El catálogo</p><h2>Hecho para funcionar.</h2></div><p>Seis productos, de la red local al navegador. Explorá cada ficha.</p></div><div className="filters" role="group" aria-label="Filtrar proyectos por categoría">{filters.map((item, i) => <button key={item.label} type="button" aria-pressed={filter === i} onClick={() => setFilter(i)}>{item.label}</button>)}</div><div className="project-list" key={filter}>{selected.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div></div></section>
}

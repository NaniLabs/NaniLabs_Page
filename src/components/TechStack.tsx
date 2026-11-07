import { useState } from 'react'
import { useProjects } from '@/hooks/useProjects'
const layers = [
  { name: 'Cloud y datos', tech: ['Cloudflare Workers', 'Cloudflare D1', 'Node.js', 'SQLite', 'Multi-tenant'] },
  { name: 'Aplicaciones nativas', tech: ['Flutter', 'Dart', 'Kotlin', 'Win32', 'C++', 'Qt', 'Python', 'Tkinter'] },
  { name: 'Web y comercio', tech: ['TypeScript', 'React', 'Tailwind CSS', 'Mercado Pago'] },
]
export function TechStack() {
  const { projects } = useProjects()
  const [selected, setSelected] = useState('Todas')
  const matches = selected === 'Todas' ? projects : projects.filter((project) => project.technologies.includes(selected))
  return <section id="tecnologias" className="section stack-section"><div className="container"><div className="section-heading"><div><p className="eyebrow">Herramientas de trabajo</p><h2>Explorá el stack.</h2></div><p>Elegí una tecnología para ver dónde se utiliza.</p></div><div className="stack-layout"><div className="stack-matrix"><button type="button" className="tech-pill" aria-pressed={selected === 'Todas'} onClick={() => setSelected('Todas')}>Todas</button>{layers.map((layer) => <div className="stack-layer" key={layer.name}><h3>{layer.name}</h3><div className="stack-items">{layer.tech.map((tech) => <button type="button" className="tech-pill" key={tech} aria-pressed={selected === tech} onClick={() => setSelected(tech)}>{tech}</button>)}</div></div>)}</div><aside className="stack-results" aria-live="polite"><p className="eyebrow">Productos con</p><h3>{selected === 'Todas' ? 'Todas las tecnologías' : selected}</h3><div key={selected} className="results-list">{matches.map((project) => <a href={`#proyecto-${project.id}`} key={project.id}>{project.name}<span aria-hidden="true">↗</span></a>)}</div></aside></div></div></section>
}

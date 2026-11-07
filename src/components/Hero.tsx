import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { useProjects } from '@/hooks/useProjects'

const order = ['doublelink', 'nanilabs-saas', 'family-tech-store', 'dobre', 'aquamarine', 'organeyes']
const summaries: Record<string, string> = {
  doublelink: 'Conectá Android y Windows en tu red local.',
  'nanilabs-saas': 'Plataforma comercial multi-tenant sobre Cloudflare.',
  'family-tech-store': 'Catálogo, pedidos y servicio técnico en un solo sistema.',
  dobre: 'Calculá precios de publicación para Mercado Libre.',
  aquamarine: 'Gestión local de inventario, ventas y reparaciones.',
  organeyes: 'Organizá archivos automáticamente en Windows.',
}

export function Hero() {
  const { projects } = useProjects()
  const [activeId, setActiveId] = useState('doublelink')
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const ordered = order.flatMap((id) => projects.filter((project) => project.id === id))
  const active = ordered.find((project) => project.id === activeId) ?? ordered[0]
  if (!active) return null
  const href = active.links.web || active.links.github
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % ordered.length
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + ordered.length) % ordered.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = ordered.length - 1
    else return
    event.preventDefault()
    setActiveId(ordered[next].id)
    tabs.current[next]?.focus()
  }
  return <section className="hero"><div className="container hero-inner">
    <div className="hero-intro"><p className="eyebrow">Estudio independiente de software</p><h1>Aplicaciones nativas, plataformas SaaS y herramientas de ingeniería.</h1><p className="hero-description">Desarrollos en producción de Ignacio Exequiel Meoniz: conexión Android ↔ Windows en red local, plataformas comerciales en Cloudflare, cálculo para Mercado Libre y utilidades de escritorio.</p></div>
    <div className="workbench"><div className="workbench-rail"><div className="rail-heading"><span>Explorador de productos</span><small>Seleccioná un proyecto</small></div><div className="product-tabs" role="tablist" aria-label="Productos NaniLabs">{ordered.map((project, index) => <button ref={(node) => { tabs.current[index] = node }} key={project.id} id={`tab-${project.id}`} role="tab" type="button" aria-selected={active.id === project.id} aria-controls="product-preview" tabIndex={active.id === project.id ? 0 : -1} onClick={() => setActiveId(project.id)} onKeyDown={(event) => navigate(event, index)}><span>{project.name}</span><span aria-hidden="true">↗</span></button>)}</div></div>
    <div className="workbench-stage" id="product-preview" role="tabpanel" aria-labelledby={`tab-${active.id}`} tabIndex={0}><div className="stage-content" key={active.id}><div className="window-frame"><div className="window-bar"><span className="window-dots" aria-hidden="true"><i/><i/><i/></span><span>{active.name}</span></div>{active.image && <img src={active.image} alt={`Vista de ${active.name}`} />}</div><div className="stage-info"><div><span className="status-pill">{active.status}</span><h2>{active.name}</h2><p>{summaries[active.id] ?? active.description}</p><div className="tags">{active.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div><div className="stage-actions">{href && <a className="btn btn-primary" href={href} target="_blank" rel="noopener noreferrer">{active.links.web ? 'Abrir aplicación' : 'Ver código en GitHub'} ↗</a>}<a className="btn btn-secondary" href={`#proyecto-${active.id}`}>Ver ficha técnica</a></div></div></div></div></div>
  </div></section>
}

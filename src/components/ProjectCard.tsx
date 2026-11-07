import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import type { ProjectData } from '@/data/types'
const architecture: Record<string, [string, string]> = {
  doublelink: ['Android y Windows', 'Aplicación nativa y red local'],
  'nanilabs-saas': ['Navegador web', 'Serverless en Cloudflare'],
  'family-tech-store': ['Navegador web', 'Aplicación web multi-tenant'],
  dobre: ['Web', 'Aplicación web'],
  aquamarine: ['Escritorio', 'Aplicación local'],
  organeyes: ['Windows', 'Aplicación local'],
}
export function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    function openLinkedSpec() { if (window.location.hash === `#proyecto-${project.id}`) setOpen(true) }
    openLinkedSpec()
    window.addEventListener('hashchange', openLinkedSpec)
    return () => window.removeEventListener('hashchange', openLinkedSpec)
  }, [project.id])
  const href = project.links.web || project.links.github
  const [platform, deployment] = architecture[project.id] ?? ['No especificada', 'No especificado']
  return <article className="project-card" id={`proyecto-${project.id}`} style={{ animationDelay: `${index * 40}ms` } as CSSProperties}><div className="card-image">{project.image && <img src={project.image} alt={`Vista de ${project.name}`} loading="lazy" />}</div><div className="card-body"><span className="status-pill">{project.status}</span><h3>{project.name}</h3><p>{project.tagline || project.description.split('.')[0] + '.'}</p><div className="card-actions">{href && <a href={href} target="_blank" rel="noopener noreferrer">{project.links.web ? 'Abrir aplicación' : 'Ver código'} ↗</a>}<button type="button" aria-expanded={open} aria-controls={`spec-${project.id}`} onClick={() => setOpen(!open)}>Especificación técnica <span aria-hidden="true">{open ? '−' : '+'}</span></button></div><div id={`spec-${project.id}`} className="spec-wrap" data-open={open} inert={!open}><div><dl><dt>Stack</dt><dd>{project.technologies.join(', ')}</dd><dt>Plataforma</dt><dd>{platform}</dd><dt>Despliegue</dt><dd>{deployment}</dd>{href && <><dt>Enlace directo</dt><dd><a href={href} target="_blank" rel="noopener noreferrer">{href}</a></dd></>}</dl></div></div></div></article>
}

import { ArrowUpRight } from 'lucide-react'
import type { ProjectData } from '@/data/types'
export function ProjectCard({ project, index, compact = false }: { project: ProjectData; index: number; compact?: boolean }) {
  const href = project.links.web || project.links.github
  const host = href ? new URL(href).hostname : ''
  return <article className={compact ? 'project-row project-compact' : 'project-row'}><div className="project-index">{String(index).padStart(2, '0')}</div><div className="project-identity">{project.image && <img src={project.image} alt="" loading="lazy"/>}<div><p className="project-status"><span/> {project.status}</p><h3>{project.name}</h3>{project.tagline && <p className="project-tagline">{project.tagline}</p>}</div></div><div className="project-detail"><p>{project.description}</p><p className="project-stack">{project.technologies.join(' / ')}</p></div>{href && <div className="project-action"><span>{host}</span><a href={href} target="_blank" rel="noopener noreferrer">{project.links.web ? 'Visitar proyecto' : 'Ver repositorio'} <ArrowUpRight size={16}/></a></div>}</article>
}

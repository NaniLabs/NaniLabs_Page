import { ArrowRight, ExternalLink, FileText, Play } from 'lucide-react'
import { cn } from '@/utils/cn'
import type { ProjectData } from '@/data/types'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

interface LinkItem {
  key: string
  label: string
  icon: React.ReactNode
  href: string | undefined
}

interface ProjectCardProps {
  project: ProjectData
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const hasImage = project.image

  const links: LinkItem[] = [
    { key: 'web', label: 'Web', icon: <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />, href: project.links.web },
    { key: 'github', label: 'GitHub', icon: <GithubIcon className="h-3.5 w-3.5" />, href: project.links.github },
    { key: 'download', label: 'Descargar', icon: <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />, href: project.links.download },
    { key: 'documentation', label: 'Docs', icon: <FileText className="h-3.5 w-3.5" aria-hidden="true" />, href: project.links.documentation },
    { key: 'video', label: 'Video', icon: <Play className="h-3.5 w-3.5" aria-hidden="true" />, href: project.links.video },
  ].filter((l) => l.href)

  const cardClass = featured
    ? 'featured-project p-6 md:p-8 flex flex-col h-full'
    : 'card p-6 flex flex-col h-full'

  return (
    <article className={cardClass} aria-labelledby={`${project.id}-title`}>
      {hasImage && !featured && (
        <div className="relative aspect-video mb-6 rounded-lg overflow-hidden bg-[var(--color-bg-elevated)]">
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3
              id={`${project.id}-title`}
              className={cn(
                'font-display font-semibold text-[var(--color-text)]',
                featured ? 'text-2xl' : 'text-xl'
              )}
            >
              {project.name}
            </h3>
            {project.tagline && (
              <p className="mt-1 text-[var(--color-accent)] font-medium text-sm">{project.tagline}</p>
            )}
          </div>
          <span className={cn('badge flex-shrink-0', `badge-${project.statusColor}`)}>
            {project.status}
          </span>
        </div>

        <p className="text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4" aria-label="Tecnologías">
            {project.technologies.slice(0, 6).map((tech: string) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
            {project.technologies.length > 6 && (
              <span className="tech-tag text-[var(--color-text-subtle)]">
                +{project.technologies.length - 6} más
              </span>
            )}
          </div>
        )}

        {featured && project.version && (
          <p className="text-xs text-[var(--color-text-subtle)] mb-4">
            Versión actual: v{project.version}
          </p>
        )}

        {links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--color-border)] mt-auto">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href!}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'btn btn-secondary text-xs px-3 py-2',
                  featured ? '' : 'w-full sm:w-auto'
                )}
                aria-label={`${link.label} de ${project.name}`}
              >
                {link.icon}
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
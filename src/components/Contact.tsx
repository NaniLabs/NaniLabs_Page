import { Mail, MessageSquare } from 'lucide-react'
import { site } from '@/utils/content'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

interface ContactLink {
  label: string
  href: string
  icon: React.ReactNode
  description: string
  external?: boolean
}

export function Contact() {
  const contactLinks: ContactLink[] = [
    {
      label: 'Email',
      href: `mailto:${site.email}`,
      icon: <Mail className="h-5 w-5" aria-hidden="true" />,
      description: 'Consultas, errores o sugerencias',
    },
    {
      label: 'GitHub',
      href: site.social.github,
      icon: <GithubIcon className="h-5 w-5" />,
      description: 'Issues, PRs y código abierto',
      external: true,
    },
    {
      label: 'Instagram',
      href: site.social.instagram,
      icon: <InstagramIcon className="h-5 w-5" />,
      description: 'Actualizaciones y behind-the-scenes',
      external: true,
    },
    {
      label: 'Portfolio personal',
      href: site.links.portfolio,
      icon: <MessageSquare className="h-5 w-5" aria-hidden="true" />,
      description: 'Propuestas profesionales',
      external: true,
    },
  ]

  return (
    <section id="contacto" className="section bg-[var(--color-bg)]" aria-labelledby="contact-title">
      <div className="container">
        <header className="section-header mb-12 md:mb-16">
          <span className="section-label">Contacto</span>
          <h2 id="contact-title" className="section-title">
            Canales Directos
          </h2>
          <p className="section-description">
            Canales directos para consultas técnicas, proyectos de software o colaboración en código abierto.
          </p>
        </header>

        <ul className="max-w-2xl mx-auto divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
          {contactLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 py-5 px-2 group hover:bg-white/[0.02] transition-colors"
                aria-label={`${item.label}: ${item.description}`}
              >
                <span className="text-[var(--color-text-subtle)] group-hover:text-[var(--color-accent)] transition-colors shrink-0">
                  {item.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="font-display font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    {item.label}
                  </span>
                  <span className="block text-sm text-[var(--color-text-muted)] mt-0.5">
                    {item.description}
                  </span>
                </div>
                <span className="text-xs font-mono text-[var(--color-text-subtle)] truncate hidden sm:block">
                  {item.href.replace(/^https?:\/\//, '').replace(/^mailto:/, '')}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <p className="text-[var(--color-text-subtle)] text-xs font-mono">
            Respuesta habitual en menos de 24 horas para consultas técnicas o propuestas de desarrollo.
          </p>
        </div>
      </div>
    </section>
  )
}

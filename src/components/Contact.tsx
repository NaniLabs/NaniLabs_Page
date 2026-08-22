import { Mail, MessageSquare } from 'lucide-react'
import { cn } from '@/utils/cn'
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
      icon: <Mail className="h-6 w-6" aria-hidden="true" />,
      description: 'Para consultas, errores o sugerencias',
    },
    {
      label: 'GitHub',
      href: site.social.github,
      icon: <GithubIcon className="h-6 w-6" />,
      description: 'Issues, PRs y código abierto',
      external: true,
    },
    {
      label: 'Instagram',
      href: site.social.instagram,
      icon: <InstagramIcon className="h-6 w-6" />,
      description: 'Actualizaciones y behind-the-scenes',
      external: true,
    },
    {
      label: 'Portfolio personal',
      href: site.links.portfolio,
      icon: <MessageSquare className="h-6 w-6" aria-hidden="true" />,
      description: 'Para propuestas profesionales',
      external: true,
    },
  ]

  return (
    <section id="contacto" className="section bg-[var(--color-bg-elevated)]" aria-labelledby="contact-title">
      <div className="container">
        <header className="section-header mb-12 md:mb-16">
          <span className="section-label">Contacto</span>
          <h2 id="contact-title" className="section-title">
            ¿Algo que contarme?
          </h2>
          <p className="section-description">
            ¿Encontraste un bug? ¿Tienes una idea? ¿Solo quieres saludar?
            Todos los canales llegan directo a mí.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={cn(
                'card p-6 text-center transition-all duration-300',
                'hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-glow)]'
              )}
              aria-label={`${item.label}: ${item.description}`}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-[var(--color-text)] mb-1">
                {item.label}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                {item.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[var(--color-text-subtle)]">
            No hay formulario porque no hay backend. El email es lo más directo.
          </p>
        </div>
      </div>
    </section>
  )
}
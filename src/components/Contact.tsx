import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, InstagramIcon } from '@/components/icons'
import { site } from '@/utils/content'

export function Contact() {
  const links = [
    {
      label: 'Email',
      description: 'Consultas y propuestas',
      href: `mailto:${site.email}`,
      icon: <Mail size={20} />,
    },
    {
      label: 'GitHub',
      description: 'Código y colaboración',
      href: site.social.github,
      icon: <GithubIcon className="h-5 w-5" />,
    },
    {
      label: 'Instagram',
      description: 'Novedades del laboratorio',
      href: site.social.instagram,
      icon: <InstagramIcon className="h-5 w-5" />,
    },
    {
      label: 'Perfil personal',
      description: 'Trayectoria y contacto profesional',
      href: site.links.portfolio,
      icon: <ArrowUpRight size={20} />,
    },
  ]

  return (
    <section id="contacto" className="section">
      <div className="container split-section">
        <div>
          <p className="eyebrow">04 / Contacto</p>
          <h2>
            Hablemos de
            <br />
            lo que sigue.
          </h2>
          <p className="section-copy">
            Para consultas técnicas, proyectos de software o colaboración, elegí el canal que prefieras.
          </p>
        </div>
        <ul className="contact-list">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(!link.href.startsWith('mailto:')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <span className="contact-icon">{link.icon}</span>
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.description}</small>
                </span>
                <span className="contact-destination">
                  {link.href.replace(/^https?:\/\//, '').replace('mailto:', '')}
                </span>
                <ArrowUpRight size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

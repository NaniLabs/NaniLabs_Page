import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NaniLabsMark } from '@/components/icons'

const links = [
  { id: 'proyectos', label: 'Ecosistema' },
  { id: 'sobre', label: 'Arquitectura' },
  { id: 'tecnologias', label: 'Stack' },
  { id: 'contacto', label: 'Contacto' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Saltar al contenido principal
      </a>
      <nav className="container nav" aria-label="Navegación principal">
        <a className="brand-link" href="/">
          <NaniLabsMark className="brand-mark" />
          <span>
            NaniLabs
            <small>nanilabs.lat</small>
          </span>
        </a>
        <div className="desktop-nav">
          {links.map((link) => (
            <a key={link.id} href={`/#${link.id}`}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="desktop-nav nav-direct">
          <a href="https://ceo.nanilabs.lat">ceo.nanilabs.lat ↗</a>
          <a href="https://saas.nanilabs.lat">saas.nanilabs.lat ↗</a>
        </div>
        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <div id="mobile-menu" className="mobile-nav">
            {links.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="https://ceo.nanilabs.lat">ceo.nanilabs.lat ↗</a>
            <a href="https://saas.nanilabs.lat">saas.nanilabs.lat ↗</a>
          </div>
        )}
      </nav>
    </header>
  )
}

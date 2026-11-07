import { useState } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, InstagramIcon } from '@/components/icons'
import { site } from '@/utils/content'
export function Contact() {
  const [message, setMessage] = useState('')
  async function copyEmail() {
    try { await navigator.clipboard.writeText(site.email); setMessage('¡Copiado al portapapeles!') }
    catch { setMessage('No se pudo copiar. Seleccioná el correo para copiarlo.') }
  }
  const links = [
    { label: 'GitHub', href: site.social.github, icon: <GithubIcon className="h-5 w-5" /> },
    { label: 'Instagram', href: site.social.instagram, icon: <InstagramIcon className="h-5 w-5" /> },
    { label: 'Perfil personal', href: site.links.portfolio, icon: <ArrowUpRight size={20} /> },
  ]
  return <section id="contacto" className="section"><div className="container split-section"><div><p className="eyebrow">Contacto</p><h2>Conversemos.</h2><p className="section-copy">¿Una consulta o una idea? Escribime.</p></div><div className="contact-panel"><div className="email-row"><Mail size={21}/><a href={`mailto:${site.email}`}>{site.email}</a><button type="button" onClick={copyEmail}>Copiar correo</button></div><div aria-live="polite">{message && <span className="copy-confirmation">{message}</span>}</div><ul className="contact-list">{links.map((link) => <li key={link.label}><a href={link.href} target="_blank" rel="noopener noreferrer">{link.icon}<strong>{link.label}</strong><ArrowUpRight size={18}/></a></li>)}</ul></div></div></section>
}

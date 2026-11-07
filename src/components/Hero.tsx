import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { useProjects } from '@/hooks/useProjects'

export function Hero() {
  const { getProjectById } = useProjects()
  const rows = [
    {
      name: 'DoubleLink LAN P2P',
      status: getProjectById('doublelink')?.status ?? 'Beta 3.6.2',
      platform: 'Android / Windows',
      href: 'https://doublelink.nanilabs.lat',
    },
    {
      name: 'NaniLabs SaaS',
      status: 'En producción',
      platform: 'Web / Cloud',
      href: 'https://saas.nanilabs.lat',
    },
    {
      name: 'CRM Servicio Técnico',
      status: 'En producción',
      platform: 'Web / Cloud',
      href: 'https://crm.saas.nanilabs.lat',
    },
    {
      name: 'DoBre & FreeSoft',
      status: 'Finalizado',
      platform: 'Web / Desktop',
      href: '#proyectos',
    },
  ]

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Laboratorio independiente / Ingeniería de software</p>
          <h1>Software para resolver problemas reales.</h1>
          <p className="hero-description">
            NaniLabs es el laboratorio de Ignacio Exequiel Meoniz: aplicaciones, herramientas y sistemas web construidos para necesidades concretas.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#proyectos">
              Explorar el ecosistema <ArrowDownRight size={17} />
            </a>
            <a className="btn btn-secondary" href="#contacto">
              Contactar al laboratorio <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="directory">
          <div className="directory-heading">
            <div>
              <p className="eyebrow">Índice operativo / 04 ramas</p>
              <h2>
                Directorio activo
                <br />
                del ecosistema
              </h2>
            </div>
            <span className="directory-symbol">
              NL<span> / </span>01
            </span>
          </div>
          <div className="directory-labels">
            <span>Proyecto / plataforma</span>
            <span>Estado</span>
          </div>
          {rows.map((row) => (
            <a className="directory-row" key={row.name} href={row.href}>
              <span>
                <strong>{row.name}</strong>
                <small>{row.platform}</small>
              </span>
              <span className="directory-status">
                {row.status}
                <ArrowUpRight size={15} />
              </span>
            </a>
          ))}
          <p className="directory-foot">Ingeniería aplicada · nanilabs.lat</p>
        </div>
      </div>
    </section>
  )
}

import { ArrowUpRight } from 'lucide-react'

export function About() {
  const principles = [
    {
      title: 'Red Local Primero (DoubleLink)',
      desc: 'Comunicación directa entre Android y Windows dentro de la red LAN/Wi-Fi local, sin cuentas obligatorias ni servidores intermedios.'
    },
    {
      title: 'Web Serverless en Cloudflare',
      desc: 'Sistemas web y herramientas desplegadas sobre Cloudflare Workers, Pages y D1 SQLite para mantener latencia mínima y costos controlados.'
    },
    {
      title: 'Rama FreeSoft (C++ / Qt / Python)',
      desc: 'Software de escritorio liviano y de código abierto (Aquamarine y OrganEyes) enfocado en resolver tareas cotidianas en Windows.'
    },
    {
      title: 'Herramientas Concretas (DoBre)',
      desc: 'Utilidades específicas como DoBre para calcular precios de publicación y comisiones reales de Mercado Libre sin hojas de cálculo complejas.'
    }
  ]

  return (
    <section id="sobre" className="section relative bg-[var(--color-bg)] py-20 border-b border-[var(--color-border)]" aria-labelledby="about-title">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 text-left space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--color-accent)]" />
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)]">
                Sobre NaniLabs
              </p>
            </div>

            <h2 id="about-title" className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-text)]">
              Mi marca personal de desarrollo y laboratorio de proyectos.
            </h2>

            <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              <strong className="text-[var(--color-text)] font-medium">NaniLabs</strong> es el espacio donde agrupo mis desarrollos de software, experimentos técnicos y aplicaciones activas. Creado y mantenido por <strong className="text-[var(--color-text)] font-medium">Ignacio Exequiel Meoniz</strong>.
            </p>

            <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              Cada proyecto nace de una necesidad técnica real: conectar el teléfono con la PC sin cables, calcular márgenes exactos en Mercado Libre o administrar inventario y archivos localmente.
            </p>

            <div className="pt-3">
              <a
                href="https://ceo.nanilabs.lat"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary group"
              >
                <span>Ver perfil y CV de Ignacio Meoniz (ceo.nanilabs.lat)</span>
                <ArrowUpRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/60 p-5 transition-colors duration-200 hover:border-[var(--color-accent)]/40"
                >
                  <h3 className="font-display text-base font-semibold text-[var(--color-text)] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

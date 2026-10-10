import { ArrowUpRight } from 'lucide-react'

export function About() {
  const principles = [
    {
      title: 'Red Local y Privacidad',
      desc: 'Herramientas locales primero. DoubleLink comunica dispositivos en la red LAN sin transmitir datos a servidores externos ni almacenar perfiles.'
    },
    {
      title: 'Arquitectura Serverless en Edge',
      desc: 'Infraestructura web distribuida sobre Cloudflare Workers y D1 SQLite, optimizando recursos y tiempos de respuesta sin servidores dedicados tradicionales.'
    },
    {
      title: 'Utilidad Práctica',
      desc: 'Cada proyecto resuelve un problema operativo concreto: sincronización de dispositivos, cálculo financiero de comisiones o administración de stock.'
    },
    {
      title: 'Código Abierto e Independiente',
      desc: 'Software verificable, interfaces directas sin patrones oscuros ni suscripciones invasivas, y documentación técnica accesible para la comunidad.'
    }
  ]

  return (
    <section id="sobre" className="section relative bg-[var(--color-bg)] py-20" aria-labelledby="about-title">
      <div className="container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Lab Narrative */}
          <div className="lg:col-span-5 text-left space-y-6">
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-subtle)]">
              Laboratorio // Identidad &amp; Principios
            </p>

            <h2 id="about-title" className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text)]">
              Desarrollo de software impulsado por la utilidad real.
            </h2>

            <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
              NaniLabs es un laboratorio independiente de ingeniería de software fundado y dirigido por <strong className="text-[var(--color-text)]">Ignacio Exequiel Meoniz</strong>. Concebimos, construimos y desplegamos herramientas donde la arquitectura técnica y la simpleza de uso se encuentran.
            </p>

            <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
              Lejos de plantillas corporativas o proyectos inflados artificialmente, cada producto de NaniLabs surge de un desafío de optimización verificado en el mundo real.
            </p>

            <div className="pt-4">
              <a
                href="https://ceo.nanilabs.lat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono text-[var(--color-accent)] hover:underline"
              >
                <span>Conocer al fundador (Ignacio Meoniz)</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial List with Separators */}
          <div className="lg:col-span-7">
            <ul className="divide-y divide-[var(--color-border)]">
              {principles.map((p, idx) => (
                <li key={idx} className="py-5 first:pt-0">
                  <h3 className="font-display text-lg font-semibold text-[var(--color-text)] mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {p.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}

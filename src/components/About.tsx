import { Shield, Zap, Wrench, Terminal, ArrowUpRight } from 'lucide-react'

export function About() {
  const principles = [
    {
      icon: <Shield className="h-5 w-5 text-cyan-400" />,
      title: 'Soberanía del Dato & P2P',
      desc: 'Herramientas locales primero. DoubleLink comunica dispositivos en la red LAN sin transmitir datos a servidores externos ni almacenar perfiles.'
    },
    {
      icon: <Zap className="h-5 w-5 text-emerald-400" />,
      title: 'Arquitectura Serverless en Edge',
      desc: 'Infraestructura web distribuida sobre Cloudflare Workers y D1 SQLite. Latencia menor a 15ms con costes operativos cercanos a cero.'
    },
    {
      icon: <Wrench className="h-5 w-5 text-indigo-400" />,
      title: 'Utilidad Práctica Inmediata',
      desc: 'Cada proyecto resuelve un problema concreto: sincronización de portapapeles, cálculo exacto de comisiones en Mercado Libre o gestión de stock.'
    },
    {
      icon: <Terminal className="h-5 w-5 text-amber-400" />,
      title: 'Ingeniería Transparente',
      desc: 'Software verificable, interfaces sin patrones oscuros ni suscripciones invasivas, y documentación técnica accesible para la comunidad.'
    }
  ]

  return (
    <section id="sobre" className="section relative bg-[var(--color-bg-elevated)] py-20 border-y border-[var(--color-border)]" aria-labelledby="about-title">
      <div className="container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Lab Narrative */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-accent)] tracking-wider uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>LABORATORIO // IDENTIDAD & PRINCIPIOS</span>
            </div>

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

          {/* Right Column: 4 Engineering Pillars in Zinc Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent)]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    {p.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[var(--color-text)] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
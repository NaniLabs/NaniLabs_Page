export function About() {
  return (
    <section id="sobre" className="section bg-[var(--color-bg-elevated)]" aria-labelledby="about-title">
      <div className="container">
        <header className="section-header mb-12 md:mb-16">
          <span className="section-label">Sobre NaniLabs</span>
          <h2 id="about-title" className="section-title">
            Laboratorio de Ingeniería de Software
          </h2>
        </header>

        <div className="max-w-3xl mx-auto space-y-6 text-center md:text-left">
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            NaniLabs es un laboratorio independiente de ingeniería de software fundado por Ignacio Exequiel Meoniz. Un espacio de creación tecnológica donde se conciben, programan y mantienen herramientas de alta utilidad práctica.
          </p>

          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            El portafolio incluye aplicaciones multiplataforma P2P como <strong className="text-[var(--color-text)]">DoubleLink</strong>, herramientas de cálculo financiero inverso como <strong className="text-[var(--color-text)]">DoBre</strong>, utilidades de escritorio como <strong className="text-[var(--color-text)]">OrganEyes</strong> y <strong className="text-[var(--color-text)]">Aquamarine</strong>, y plataformas web comerciales multi-tenant de alto rendimiento sobre arquitectura serverless en Cloudflare.
          </p>

          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Cada proyecto surge de una necesidad técnica verificable: transferencia de archivos entre Android y Windows sin dependencia de nube, cálculo inverso de comisiones para vendedores de Mercado Libre, gestión de inventario y reparaciones para comercios locales, y sistemas SaaS adaptables con trazabilidad completa.
          </p>

          <div className="pt-4 border-t border-[var(--color-border)]">
            <p className="text-[var(--color-text-subtle)]">
              Cada interfaz prioriza la claridad operativa: versiones exactas, dependencias reales, datos verificables y enlaces a código fuente funcional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
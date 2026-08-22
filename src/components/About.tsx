export function About() {
  return (
    <section id="sobre" className="section bg-[var(--color-bg-elevated)]" aria-labelledby="about-title">
      <div className="container">
        <header className="section-header mb-12 md:mb-16">
          <span className="section-label">Sobre NaniLabs</span>
          <h2 id="about-title" className="section-title">
            ¿Qué es NaniLabs?
          </h2>
        </header>

        <div className="max-w-3xl mx-auto space-y-6 text-center md:text-left">
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            NaniLabs no es una empresa. No tiene empleados, no tiene oficina, no vende servicios.
          </p>

          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Es el nombre que le di a mi espacio personal de desarrollo. Aquí es donde construyo
            las herramientas que necesito, pruebo ideas que me parecen interesantes y automatizo
            tareas que me resultan tediosas.
          </p>

          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Cada proyecto nace de una necesidad real: quería pasar archivos entre Android y
            Windows sin cables (<strong className="text-[var(--color-text)]">DoubleLink</strong>),
            necesitaba organizar mi carpeta de descargas (<strong className="text-[var(--color-text)]">OrganEyes</strong>),
            un amigo pedía un sistema para su negocio (<strong className="text-[var(--color-text)]">Aquamarine</strong>).
          </p>

          <div className="pt-4 border-t border-[var(--color-border)]">
            <p className="text-[var(--color-text-subtle)]">
              No hay roadmap público, no hay fechas prometidas, no hay marketing.
              Solo código que funciona (la mayoría de las veces).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
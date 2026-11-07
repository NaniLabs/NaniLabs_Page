const principles = [
  [
    'Red local primero',
    'DoubleLink conecta Android y Windows dentro de la red local, sin cuentas obligatorias ni servidores intermedios.',
  ],
  [
    'Web serverless',
    'Plataformas comerciales sobre Cloudflare Workers y D1, adaptadas a las necesidades de cada proyecto.',
  ],
  [
    'Software de escritorio',
    'Aquamarine y OrganEyes reúnen herramientas para gestión local y organización de archivos en FreeSoft.',
  ],
  [
    'Herramientas concretas',
    'DoBre ayuda a calcular precios de publicación y comisiones de Mercado Libre.',
  ],
]

export function About() {
  return (
    <section id="sobre" className="section">
      <div className="container split-section">
        <div>
          <p className="eyebrow">02 / Arquitectura</p>
          <h2>
            Una necesidad.
            <br />
            Una solución.
          </h2>
          <p className="section-copy">
            NaniLabs reúne los proyectos y experimentos de software de Ignacio Exequiel Meoniz. Cada desarrollo parte de un problema concreto y una tecnología apropiada para resolverlo.
          </p>
          <a className="text-link" href="https://ceo.nanilabs.lat">
            Conocer al creador ↗
          </a>
        </div>
        <div className="principles">
          {principles.map(([title, desc], i) => (
            <article key={title}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

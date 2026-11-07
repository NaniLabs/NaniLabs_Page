const pillars = [
  {
    code: '01 · Bajo Nivel & Red Local',
    title: 'Conectividad directa sin intermediarios',
    detail: 'Protocolos WebSocket LAN, paquetes UDP Wake-on-LAN y control directo sobre APIs Win32 y Android.',
  },
  {
    code: '02 · Edge & Multi-Tenancy',
    title: 'Plataformas aisladas en el borde',
    detail: 'Arquitecturas sobre Cloudflare Workers, D1 y R2 con aislamiento estricto por comercio y latencia mínima.',
  },
  {
    code: '03 · Ejecución Determinista',
    title: 'Cálculo exacto y cero fricción',
    detail: 'Motores de búsqueda binaria financiera, trazos vectoriales a 120 Hz y automatización silenciosa en escritorio.',
  },
]

export function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="about-panel">
          <div>
            <p className="eyebrow">Arquitectura e ingeniería</p>
            <h2>Una idea, la tecnología adecuada.</h2>
          </div>
          <div>
            <p>
              NaniLabs reúne los desarrollos en producción de Ignacio Exequiel Meoniz: software propio diseñado para conectar dispositivos en red local, operar comercios en la nube y automatizar tareas técnicas.
            </p>
            <a className="text-link" href="https://ceo.nanilabs.lat" target="_blank" rel="noopener noreferrer">
              Ver trayectoria e ingeniería en ceo.nanilabs.lat ↗
            </a>
          </div>
        </div>
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <article key={pillar.code} className="pillar-item">
              <span>{pillar.code}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

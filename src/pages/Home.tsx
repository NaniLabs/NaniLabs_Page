import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, PointerEvent } from 'react'
import { flushSync } from 'react-dom'
import { useDoubleLinkVersion } from '@/hooks/useDoubleLinkVersion'
import { NaniLabsMark } from '@/components/icons'
import { useSeo } from '@/utils/seo'

const products = [
  { id: 'saas', name: 'NaniLabs SaaS', summary: 'Sistemas comerciales multi-tenant.', tags: ['Cloudflare Workers', 'D1', 'R2', 'Mercado Pago'], image: '/projects/nanilabs-saas.png', url: 'https://saas.nanilabs.lat', detail: 'Workers · D1 SQL · R2 · Mercado Pago', extra: [['Demo gastronómica', 'https://food.nanilabs.lat'], ['CRM Servicio Técnico', 'https://crm.saas.nanilabs.lat']] },
  { id: 'doublelink', name: 'DoubleLink', summary: 'Android y Windows conectados por LAN.', tags: ['Flutter', 'Dart', 'Kotlin', 'Win32'], image: '/projects/doublelink.png', url: 'https://doublelink.nanilabs.lat', detail: 'WebSocket :4545 con PIN · CoreAudio · YTMDesktop :9863 · archivos SHA-256 · portapapeles · Wake-on-LAN', extra: [['Manifiesto de versiones', 'https://pub-e7f8fb195c3c42b59e5da4c5c345837b.r2.dev/releases.json']] },
  { id: 'dobre', name: 'DoBre', summary: 'Calculadora inversa para Mercado Libre Argentina.', tags: ['Flutter', 'Dart', 'Web', 'Android', 'Windows'], image: '/projects/dobre.png', url: 'https://dobre.nanilabs.lat', detail: 'Comisiones, cuotas y envíos.', extra: [['Repositorio', 'https://github.com/NaniLabs/DoBre']] },
  { id: 'freesoft', name: 'FreeSoft', summary: 'Herramientas de escritorio de código abierto.', tags: ['Open source', 'Windows'], image: '/flyers/freesoft_01_editorial.png', url: 'https://github.com/NaniLabs/FreeSoft', detail: 'Suite abierta que incluye Aquamarine y OrganEyes.', extra: [] },
  { id: 'aquamarine', name: 'Aquamarine', summary: 'Reproductor de música nativo.', tags: ['C++', 'Qt6', 'Audio'], image: '/projects/aquamarine.png', url: 'https://github.com/NaniLabs/FreeSoft/releases/tag/Aquamarine', detail: 'Motor de audio multihilo e interfaz frameless.', extra: [] },
  { id: 'organeyes', name: 'OrganEyes', summary: 'Organización automática de archivos para Windows.', tags: ['Python', 'Tkinter', 'Windows'], image: '/projects/organeyes.png', url: 'https://github.com/NaniLabs/FreeSoft/releases/tag/OrganEyes', detail: 'Clasificación por tipo, previsualización y reversión.', extra: [] },
]

const platforms = ['Cloud · SaaS', 'LAN · Android + Win', 'Finanzas · ML', 'Suite · Open Source', 'Audio · C++ / Qt6', 'Desktop · Python']

function Diagram({ id }: { id: string }) {
  const labels: Record<string, string[]> = {
    saas: ['Edge Worker', 'D1 SQL', 'Mercado Pago'],
    doublelink: ['Android', 'WS :4545', 'Windows PC'],
    dobre: ['Neto', 'Binary Search', 'Precio ML'],
    freesoft: ['FreeSoft Suite', 'Aquamarine', 'OrganEyes'],
    aquamarine: ['CoreAudio', 'Qt6 DSP', 'Audio'],
    organeyes: ['Scan', 'Rules', 'Folders'],
  }
  return <svg className="diagram" viewBox="0 0 420 100" role="img" aria-label={`Arquitectura: ${labels[id].join(' a ')}`}>
    <path className="diagram-line" d="M65 50 H355" />
    <circle className="diagram-particle" cx="65" cy="50" r="4" />
    {labels[id].map((label, i) => <g className="diagram-node" key={label} transform={`translate(${70 + i * 140}, 50)`}><rect x="-61" y="-22" width="122" height="44" rx="9"/><text textAnchor="middle" dominantBaseline="central">{label}</text></g>)}
  </svg>
}

export function Home() {
  useSeo('NaniLabs — Estudio de software', 'Seis productos: NaniLabs SaaS, DoubleLink, DoBre, FreeSoft, Aquamarine y OrganEyes.')
  const [active, setActive] = useState(0)
  const [tech, setTech] = useState('Todas')
  const [theme, setTheme] = useState<'dark' | 'light'>(() => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const scene = useRef<HTMLDivElement>(null)
  const gallery = useRef<HTMLDivElement>(null)
  const doubleLinkStatus = useDoubleLinkVersion()
  const product = products[active]
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const animations = ['.scene-copy', '.product-window', '.diagram']
    animations.forEach((selector, index) => scene.current?.querySelector<HTMLElement>(selector)?.animate?.(
      [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 420, delay: index * 70, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' },
    ))
  }, [active])
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    const apply = () => {
      document.documentElement.dataset.theme = next
      try { window.localStorage.setItem('nanilabs-theme', next) } catch { /* Theme still works when storage is unavailable. */ }
      flushSync(() => setTheme(next))
    }
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && document.startViewTransition) document.startViewTransition(apply)
    else apply()
  }
  function moveSpotlight(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mx', `${(event.clientX - bounds.left) / bounds.width * 100}%`)
    event.currentTarget.style.setProperty('--my', `${(event.clientY - bounds.top) / bounds.height * 100}%`)
  }
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % products.length
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + products.length - 1) % products.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = products.length - 1
    else return
    event.preventDefault(); setActive(next); tabs.current[next]?.focus()
  }
  function filterTechnology(next: string) {
    if (next === tech) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduced && document.startViewTransition) {
      document.startViewTransition(() => flushSync(() => setTech(next)))
    } else {
      flushSync(() => setTech(next))
      if (!reduced) gallery.current?.querySelectorAll<HTMLElement>('.gallery-card').forEach((card, index) => {
        card.animate?.([{ opacity: 0, transform: 'translateY(12px) scale(.97)' }, { opacity: 1, transform: 'none' }], { duration: 300, delay: index * 45, easing: 'ease-out' })
      })
    }
  }
  function showStage(index: number) {
    setActive(index)
    document.getElementById('product-preview')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
    tabs.current[index]?.focus({ preventScroll: true })
  }
  function status(id: string) { return id === 'doublelink' ? doubleLinkStatus : id === 'saas' ? 'En producción' : 'Disponible' }
  const technologies = [...new Set(products.flatMap(p => p.tags))]
  const matches = tech === 'Todas' ? products : products.filter(p => p.tags.includes(tech))
  return <div className="new-site">
    <header className="new-header"><a className="skip-link" href="#main-content">Saltar al contenido principal</a><a className="new-brand" href="/"><NaniLabsMark className="brand-mark"/><span>NaniLabs</span></a><nav aria-label="Navegación principal"><a href="#proyectos">Productos</a><a href="#tecnologias">Stack</a><a href="#sobre">Estudio</a><a href="#contacto">Contacto</a></nav><button className="theme-toggle" type="button" aria-pressed={theme === 'light'} aria-label={`Tema ${theme === 'dark' ? 'oscuro' : 'claro'}. Cambiar a ${theme === 'dark' ? 'claro' : 'oscuro'}`} onClick={toggleTheme}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{theme === 'dark' ? <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z"/> : <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4"/></>}</svg><span>{theme === 'dark' ? 'Oscuro' : 'Claro'}</span></button></header>
    <main id="main-content"><section className="studio" aria-labelledby="studio-title"><div className="studio-top"><h1 id="studio-title">Estudio de software <span> / Argentina</span></h1><span>Explorá los productos</span></div>
      <div className="studio-layout"><div className="scene" id="product-preview" role="tabpanel" aria-labelledby={`tab-${product.id}`} tabIndex={0}><div ref={scene} className={`scene-inner scene-${product.id}`} onPointerMove={moveSpotlight} onPointerLeave={event => { event.currentTarget.style.removeProperty('--mx'); event.currentTarget.style.removeProperty('--my') }}><div className="scene-copy"><span className="scene-label">NaniLabs / {product.name}</span><h2>{product.name}</h2><p>{product.summary}</p><a className="scene-link" href={product.url} target="_blank" rel="noreferrer">Abrir producto <span aria-hidden="true">↗</span></a></div><div className="scene-visual"><div className="product-window"><div className="window-heading"><span>● ● ●</span><span className="live-status">{status(product.id)}</span></div><img src={product.image} alt={`Vista de ${product.name}`} /><div className="window-links">{product.extra.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{label} ↗</a>)}</div></div><Diagram id={product.id}/></div><div className="scene-meta"><span className="platform-pill">{platforms[active]}</span><span className="architecture-status"><span aria-hidden="true">●</span> Arquitectura interactiva</span></div></div></div>
      <div className="product-tabs-new" role="tablist" aria-label="Productos NaniLabs" aria-orientation="vertical">{products.map((p, i) => <button ref={node => { tabs.current[i] = node }} role="tab" id={`tab-${p.id}`} aria-controls="product-preview" aria-selected={active === i} tabIndex={active === i ? 0 : -1} key={p.id} onClick={() => setActive(i)} onKeyDown={event => navigate(event, i)}><span>{p.name}<small>{platforms[i]}</small></span><span className="tab-indicator" aria-hidden="true">●</span></button>)}</div></div></section>
      <section id="proyectos" className="new-section catalog-new"><div className="section-title"><h2>Productos</h2><span>Explorá el ecosistema por tecnología.</span></div>
        <div id="tecnologias" className="tech-buttons" aria-label="Filtrar por tecnología"><button type="button" aria-pressed={tech === 'Todas'} onClick={() => filterTechnology('Todas')}>Todas</button>{technologies.map(t => <button type="button" key={t} aria-pressed={tech === t} onClick={() => filterTechnology(t)}>{t}</button>)}</div>
        <p className="gallery-count" aria-live="polite">{matches.length} {matches.length === 1 ? 'producto' : 'productos'} · {tech}</p>
        <div className="gallery-grid" ref={gallery}>{matches.map(p => <article className={`gallery-card gallery-${p.id}`} id={`proyecto-${p.id}`} key={p.id}>
          <div className="gallery-image"><div className="window-heading"><span>● ● ●</span><span className="live-status">{status(p.id)}</span></div><img src={p.image} alt={`Vista de ${p.name}`} loading="lazy"/></div>
          <div className="gallery-content"><h3>{p.name}</h3><p>{p.summary}</p><div className="gallery-tags">{p.tags.map(tag => <button type="button" key={tag} onClick={() => filterTechnology(tag)} aria-label={`Filtrar por ${tag}`}>{tag}</button>)}</div><div className="gallery-actions"><button type="button" onClick={() => showStage(products.indexOf(p))}>Ver en escenario ↑</button><a href={p.url} target="_blank" rel="noreferrer">Abrir producto ↗</a></div></div>
        </article>)}</div>
      </section>
      <section id="sobre" className="new-section studio-about"><h2>Estudio</h2><p>NaniLabs · Ignacio Exequiel Meoniz<br/>Entre Ríos, Argentina</p><a href="https://ceo.nanilabs.lat">Perfil de Ignacio ↗</a></section>
      <section id="contacto" className="new-section contact-new"><h2>Contacto</h2><a className="contact-mail" href="mailto:contacto@nanilabs.lat">contacto@nanilabs.lat ↗</a><div><a href="https://github.com/NaniLabs">GitHub</a><a href="https://www.instagram.com/nanilabs.lat/">Instagram</a><a href="https://www.linkedin.com/in/ignacio-exequiel-meoniz-3b5722389/">LinkedIn</a><a href="mailto:meonizignacioexequiel@gmail.com">Correo personal</a></div></section>
    </main><footer className="new-footer"><NaniLabsMark className="brand-mark"/><span>© NaniLabs · Ignacio Meoniz</span><a href="#main-content">Volver arriba ↑</a></footer></div>
}

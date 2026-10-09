import { useState } from 'react'
import { ArrowRight, Terminal, ExternalLink, ShieldCheck, Cpu, Wifi } from 'lucide-react'
import { site } from '@/utils/content'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function Hero() {
  const [activeProjectKey, setActiveProjectKey] = useState<string>('doublelink')

  const consoleSystems = [
    {
      key: 'doublelink',
      name: 'DoubleLink',
      version: 'v2.3.1',
      badge: 'BETA LAN',
      protocol: 'P2P WS // 8080',
      stack: ['Flutter', 'Dart', 'WebSocket', 'Win32'],
      summary: 'Ecosistema de control y transferencia bidireccional local entre Android y Windows sin servidores intermedios.',
      link: 'https://doublelink.nanilabs.lat',
      telemetry: 'LATENCIA: < 2ms · CIFRADO: LAN PRIVADA'
    },
    {
      key: 'nanilabs-saas',
      name: 'NaniLabs SaaS',
      version: 'v1.0',
      badge: 'PRODUCCIÓN',
      protocol: 'EDGE D1 // 443',
      stack: ['Next.js', 'Cloudflare Workers', 'D1', 'Mercado Pago'],
      summary: 'Arquitectura comercial multi-tenant para inventario, reparaciones, órdenes de trabajo y cobros integrados.',
      link: 'https://saas.nanilabs.lat',
      telemetry: 'UPTIME: 99.98% · RUNTIME: WORKERS V8'
    },
    {
      key: 'dobre',
      name: 'DoBre',
      version: 'v1.0',
      badge: 'PRODUCCIÓN',
      protocol: 'CALC // ML API',
      stack: ['Vite', 'React', 'Tailwind', 'Cloudflare'],
      summary: 'Motor de cálculo de rentabilidad y comisiones en Mercado Libre para optimización de precios reales.',
      link: 'https://dobre.nanilabs.lat',
      telemetry: 'RESOLUCIÓN: DETERMINISTA · CLIENT-SIDE'
    },
    {
      key: 'organeyes',
      name: 'OrganEyes',
      version: 'v1.2',
      badge: 'UTILIDAD',
      protocol: 'WIN_CLI // LOCAL',
      stack: ['C++', 'Qt', 'Win32 IO'],
      summary: 'Utilidad nativa para Windows de clasificación heurística automatizada y ordenamiento masivo de archivos.',
      link: 'https://github.com/NaniLabs/FreeSoft',
      telemetry: 'EJECUCIÓN: ZERO MEMORY OVERHEAD'
    }
  ]

  const currentSys = consoleSystems.find(s => s.key === activeProjectKey) || consoleSystems[0]

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-[var(--color-bg)]"
      aria-labelledby="hero-title"
    >
      {/* Dynamic ambient background mesh */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_25%_20%,rgba(6,182,212,0.12),transparent_70%),radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(99,102,241,0.08),transparent_60%)] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Technical proposition & Brand Identity (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Kicker */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-3.5 py-1.5 text-xs font-mono text-[var(--color-accent)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span>SYS.ACTIVE // REGION: AR-BUE // LAB_V2.4</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-title"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text)] leading-[1.08]"
            >
              Ingeniería de software <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                práctica y descentralizada.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed">
              Laboratorio independiente de desarrollo enfocado en utilidades P2P de red local, sistemas web comerciales serverless sobre Cloudflare y optimización de flujos operativos sin dependencias corporativas innecesarias.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#proyectos"
                className="btn btn-primary inline-flex items-center gap-2 px-5 py-3 shadow-[var(--shadow-glow)]"
              >
                <span>Explorar proyectos</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="https://saas.nanilabs.lat"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary inline-flex items-center gap-2 px-5 py-3 border border-[var(--color-border)] hover:border-[var(--color-accent)]/50"
              >
                <span>NaniLabs SaaS</span>
                <ExternalLink className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
              </a>

              <a
                href={site.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors px-3 py-2"
              >
                <span>Portfolio fundador</span>
                <span className="text-xs text-[var(--color-accent)]">↗</span>
              </a>
            </div>

            {/* Live Technical Metrics Ribbon */}
            <div className="pt-6 border-t border-[var(--color-border)]/60 grid grid-cols-3 gap-4 max-w-lg">
              <div className="flex items-center gap-2">
                <Wifi className="h-4 w-4 text-[var(--color-accent)] shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-[var(--color-text)]">P2P Local</div>
                  <div className="text-[var(--color-text-subtle)] font-mono text-[11px]">Zero Cloud Relay</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-[var(--color-text)]">Edge Workers</div>
                  <div className="text-[var(--color-text-subtle)] font-mono text-[11px]">Latency &lt; 15ms</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-indigo-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-[var(--color-text)]">Datos Aislados</div>
                  <div className="text-[var(--color-text-subtle)] font-mono text-[11px]">SQLite D1 Engine</div>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Interactive Laboratory Telemetry Console (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/90 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]">
              
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-[var(--color-text-muted)] flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                    nanilabs-kernel::telemetry
                  </span>
                </div>
                <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>

              {/* Console System Switcher Tabs */}
              <div className="grid grid-cols-4 border-b border-[var(--color-border)] text-xs font-mono bg-[var(--color-bg)]/50">
                {consoleSystems.map((sys) => (
                  <button
                    key={sys.key}
                    onClick={() => setActiveProjectKey(sys.key)}
                    className={`py-2 px-1 text-center transition-all truncate border-b-2 ${
                      activeProjectKey === sys.key
                        ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/5 font-semibold'
                        : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-white/5'
                    }`}
                  >
                    {sys.name}
                  </button>
                ))}
              </div>

              {/* Console Body */}
              <div className="p-5 space-y-4 text-left font-mono">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-semibold text-lg text-[var(--color-text)]">
                      {currentSys.name}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-[var(--color-bg-elevated)] text-[var(--color-text-subtle)] border border-[var(--color-border)]">
                      {currentSys.version}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                    {currentSys.badge}
                  </span>
                </div>

                <p className="text-xs font-sans text-[var(--color-text-muted)] leading-relaxed">
                  {currentSys.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentSys.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Simulated Telemetry Readout */}
                <div className="p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[11px] text-[var(--color-text-subtle)] space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">ENDPOINT:</span>
                    <span className="text-cyan-400">{currentSys.protocol}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">ESTADO:</span>
                    <span className="text-emerald-400">{currentSys.telemetry}</span>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <a
                    href={currentSys.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn btn-primary text-xs py-2.5 inline-flex items-center justify-center gap-2"
                  >
                    <span>Lanzar {currentSys.name}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

              </div>

              {/* Console Status Bar */}
              <div className="px-4 py-2 bg-[var(--color-bg)]/80 border-t border-[var(--color-border)] text-[10px] font-mono text-[var(--color-text-subtle)] flex justify-between items-center">
                <span>LAB_ID: NANILABS-CORE</span>
                <span>SEC_VERIFIED // NO_TRACKING</span>
              </div>

            </div>
          </div>

        </div>

        {/* Channels ribbon */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border)]/40 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--color-text-subtle)]">
          <div className="flex items-center gap-6">
            <span className="text-[var(--color-text-muted)] font-semibold">CANALES OFICIALES:</span>
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="h-4 w-4" />
              <span>github.com/NaniLabs</span>
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>@nanilabs.lat</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
            <span>ARQUITECTURA DISTRIBUIDA EN CLOUDFLARE EDGE</span>
          </div>
        </div>

      </div>
    </section>
  )
}
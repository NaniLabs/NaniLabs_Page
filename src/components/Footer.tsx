import { MessageSquare, Heart } from 'lucide-react'
import { cn } from '@/utils/cn'
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

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]" role="contentinfo">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="font-display text-xl font-semibold text-[var(--color-text)]">
              {site.name}
            </p>
            <p className="text-sm text-[var(--color-accent)] font-medium tracking-wide mt-1">
              {site.tagline}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn('text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors focus-ring-visible rounded-full p-1.5')}
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={cn('text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors focus-ring-visible rounded-full p-1.5')}
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={site.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className={cn('text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors focus-ring-visible rounded-full p-1.5')}
              aria-label="Portfolio personal"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <p className="text-sm text-[var(--color-text-subtle)]">
              {site.footer.copyright}
            </p>
            <p className="text-sm text-[var(--color-text-subtle)] flex items-center justify-center md:justify-end gap-1.5 mt-1">
              <Heart className="h-3.5 w-3.5 text-[var(--color-accent)]" aria-hidden="true" />
              <span>{site.footer.madeBy}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
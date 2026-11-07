import { GithubIcon, InstagramIcon, NaniLabsMark } from '@/components/icons'
import { site } from '@/utils/content'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand-link" href="/">
          <NaniLabsMark className="brand-mark" />
          <span>
            NaniLabs
            <small>Build. Automate. Solve.</small>
          </span>
        </a>
        <p>
          {site.footer.copyright}
          <br />
          {site.footer.madeBy}
        </p>
        <div className="footer-links">
          <a href={site.social.github} aria-label="GitHub">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href={site.social.instagram} aria-label="Instagram">
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a href={site.links.portfolio}>Perfil ↗</a>
        </div>
      </div>
    </footer>
  )
}

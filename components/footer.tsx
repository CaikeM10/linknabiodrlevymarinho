import { siteConfig } from '@/lib/site-config'

export function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-line" aria-hidden="true" />
      <p>Atendimento com cuidado, em cada detalhe.</p>
      <span className="footer-registration">{siteConfig.registration}</span>
    </footer>
  )
}

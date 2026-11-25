import { AnimatedBackground } from '@/components/animated-background'
import { Footer } from '@/components/footer'
import { LinkCard } from '@/components/link-card'
import { ProfileHeader } from '@/components/profile-header'
import { siteConfig, whatsappUrl } from '@/lib/site-config'

export default function HomePage() {
  return (
    <main className="page-shell home-shell">
      <AnimatedBackground />
      <div className="content-frame">
        <ProfileHeader />
        <nav className="links-list" aria-label="Links principais">
          <LinkCard
            href={whatsappUrl || undefined}
            icon="whatsapp"
            title="Fale pelo WhatsApp"
            description="Agende sua consulta"
            index={0}
            prominent
          />
          <LinkCard
            href="/sobre"
            icon="professional"
            title="Conheça quem vai cuidar do seu sorriso"
            description="Saiba mais sobre o Dr. Levy"
            index={1}
          />
          <LinkCard
            href={siteConfig.googleMapsUrl || undefined}
            icon="location"
            title="Como chegar até a clínica"
            description="Localização, rota e endereço"
            index={2}
          />
        </nav>
        <Footer />
      </div>
    </main>
  )
}

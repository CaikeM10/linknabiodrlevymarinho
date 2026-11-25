import Link from 'next/link'
import { ArrowLeft, GraduationCap, HeartHandshake, Stethoscope } from 'lucide-react'
import { AnimatedBackground } from '@/components/animated-background'
import { Footer } from '@/components/footer'
import { siteConfig } from '@/lib/site-config'

export const metadata = {
  title: 'Sobre o Dr. Levy Marinho | Cirurgião-Dentista',
  description: 'Conheça o Dr. Levy Marinho e sua abordagem de cuidado odontológico.',
}

const details = [
  { icon: GraduationCap, title: 'Formação acadêmica', value: siteConfig.about.academicBackground },
  { icon: Stethoscope, title: 'Experiência profissional', value: siteConfig.about.experience },
  { icon: HeartHandshake, title: 'Como é o atendimento', value: siteConfig.about.careApproach },
]

export default function AboutPage() {
  return (
    <main className="page-shell about-shell">
      <AnimatedBackground />
      <div className="content-frame about-frame">
        <Link href="/" className="back-link"><ArrowLeft size={16} aria-hidden="true" /> Voltar ao início</Link>
        <header className="about-header">
          <span className="eyebrow">APRESENTAÇÃO PROFISSIONAL</span>
          <h1>{siteConfig.name}</h1>
          <p className="professional-title">{siteConfig.title} <span aria-hidden="true">·</span> {siteConfig.registration}</p>
        </header>
        <div className="portrait-placeholder" aria-label="Espaço reservado para fotografia profissional">
          <span>Fotografia profissional</span>
          <span className="portrait-caption">Imagem a ser adicionada</span>
        </div>
        <section className="about-intro" aria-labelledby="about-intro-title">
          <h2 id="about-intro-title">Uma odontologia feita com atenção e propósito.</h2>
          <p>{siteConfig.about.presentation || 'Apresentação profissional a ser adicionada.'}</p>
        </section>
        <section className="credentials" aria-label="Informações profissionais">
          {details.map(({ icon: Icon, title, value }) => (
            <article className="credential-card" key={title}>
              <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h2>{title}</h2>
                <p>{value || 'Informação a ser adicionada.'}</p>
              </div>
            </article>
          ))}
        </section>
        <Footer />
      </div>
    </main>
  )
}

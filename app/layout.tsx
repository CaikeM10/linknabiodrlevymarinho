import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL

export const metadata: Metadata = {
  metadataBase: new URL(deploymentHost ? `https://${deploymentHost}` : 'http://localhost:3000'),
  title: 'Dr. Levy Marinho | Cirurgião-Dentista',
  description: 'Saúde, estética e bem-estar para o seu sorriso. Conheça o trabalho do Dr. Levy Marinho, cirurgião-dentista.',
  openGraph: {
    title: 'Dr. Levy Marinho | Cirurgião-Dentista',
    description: 'Saúde, estética e bem-estar para o seu sorriso.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Levy Marinho | Cirurgião-Dentista',
    description: 'Saúde, estética e bem-estar para o seu sorriso.',
  },
}

export const viewport: Viewport = {
  viewportFit: 'cover',
  themeColor: '#211b18',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

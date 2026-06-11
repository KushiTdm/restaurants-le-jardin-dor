import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import GsapProvider from './components/GsapProvider'
import WhatsAppButton from './components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Le Jardin d\'Or — Restaurant Gastronomique',
  description: 'Restaurant gastronomique français à Paris. Cuisine raffinée, produits d\'exception, expérience culinaire inoubliable.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <GsapProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </GsapProvider>
      </body>
    </html>
  )
}

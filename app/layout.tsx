import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import GsapProvider from './components/GsapProvider'
import WhatsAppButton from './components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Le Jardin d\'Or — Restaurant gastronomique Paris 1er | Cuisine française raffinée',
  description:
    'Le Jardin d\'Or, restaurant gastronomique rue Saint-Honoré à Paris : cuisine française raffinée, produits d\'exception, menus dégustation. Réservez votre table.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a1a',
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: "Le Jardin d'Or",
  servesCuisine: 'Gastronomie française',
  priceRange: '€€€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '24 rue Saint-Honoré',
    postalCode: '75001',
    addressLocality: 'Paris',
    addressCountry: 'FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
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

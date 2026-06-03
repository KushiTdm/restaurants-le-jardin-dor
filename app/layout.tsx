import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Le Jardin d\'Or — Restaurant Gastronomique',
  description: 'Restaurant gastronomique français à Paris. Cuisine raffinée, produits d\'exception, expérience culinaire inoubliable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <header className="fixed top-0 left-0 right-0 z-50 bg-noir/95 backdrop-blur-sm border-b border-or/20">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="flex flex-col items-center">
              <span className="font-playfair text-or text-2xl tracking-widest">Le Jardin d'Or</span>
              <span className="font-cormorant text-creme/60 text-xs tracking-[0.3em] uppercase">Restaurant Gastronomique</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="font-cormorant text-creme/80 hover:text-or transition-colors tracking-wider uppercase text-sm">Accueil</a>
              <a href="/menu" className="font-cormorant text-creme/80 hover:text-or transition-colors tracking-wider uppercase text-sm">Menu</a>
              <a href="/reservation" className="font-cormorant text-creme/80 hover:text-or transition-colors tracking-wider uppercase text-sm">Réservation</a>
              <a href="/reservation" className="btn-gold text-xs">Réserver</a>
            </nav>
            <button className="md:hidden text-creme">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-noir text-creme/60 py-16 mt-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-playfair text-or text-xl mb-4">Le Jardin d'Or</h3>
              <p className="font-cormorant text-sm leading-relaxed">
                Une expérience culinaire d'exception au cœur de Paris, où la gastronomie française rencontre l'art de vivre.
              </p>
            </div>
            <div>
              <h4 className="font-playfair text-creme text-sm tracking-widest uppercase mb-4">Horaires</h4>
              <ul className="font-cormorant text-sm space-y-1">
                <li>Mardi — Samedi : 12h – 14h30 / 19h – 22h30</li>
                <li>Dimanche : 12h – 15h</li>
                <li>Lundi : Fermé</li>
              </ul>
            </div>
            <div>
              <h4 className="font-playfair text-creme text-sm tracking-widest uppercase mb-4">Contact</h4>
              <ul className="font-cormorant text-sm space-y-1">
                <li>24, rue Saint-Honoré, 75001 Paris</li>
                <li>+33 1 42 60 XX XX</li>
                <li>contact@lejardindor.fr</li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-or/20 text-center">
            <p className="font-cormorant text-xs tracking-widest uppercase">© 2025 Le Jardin d'Or — Tous droits réservés</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-noir text-creme/60 pt-16 pb-8 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
        backgroundSize: '20px 20px',
      }} />
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-playfair text-or text-xl mb-4 tracking-wider">Le Jardin d'Or</h3>
          <div className="gold-divider !mx-0 !ml-0 mb-4" />
          <p className="font-cormorant text-sm leading-relaxed italic">
            Une expérience culinaire d'exception au cœur de Paris, où la gastronomie française rencontre l'art de vivre.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               aria-label="Instagram"
               className="w-10 h-10 border border-or/30 rounded-full flex items-center justify-center text-or/70 hover:text-noir hover:bg-or transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.974.975 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85 0 3.205-.012 3.584-.069 4.849-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.849-.07-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.149 0-3.516.012-4.756.068-.97.045-1.504.207-1.857.344-.466.181-.8.398-1.15.748-.35.35-.567.684-.748 1.15-.137.353-.299.887-.344 1.857-.056 1.24-.068 1.607-.068 4.756 0 3.149.012 3.516.068 4.756.045.97.207 1.504.344 1.857.181.466.398.8.748 1.15.35.35.684.567 1.15.748.353.137.887.299 1.857.344 1.24.056 1.607.068 4.756.068 3.149 0 3.516-.012 4.756-.068.97-.045 1.504-.207 1.857-.344.466-.181.8-.398 1.15-.748.35-.35.567-.684.748-1.15.137-.353.299-.887.344-1.857.056-1.24.068-1.607.068-4.756 0-3.149-.012-3.516-.068-4.756-.045-.97-.207-1.504-.344-1.857-.181-.466-.398-.8-.748-1.15-.35-.35-.684-.567-1.15-.748-.353-.137-.887-.299-1.857-.344-1.24-.056-1.607-.068-4.756-.068zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm5.338-8.669a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
               aria-label="Facebook"
               className="w-10 h-10 border border-or/30 rounded-full flex items-center justify-center text-or/70 hover:text-noir hover:bg-or transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24H12.82v-9.294H9.692V11.07h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.408 0 22.675 0z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-playfair text-creme text-sm tracking-widest uppercase mb-4">Horaires</h4>
          <div className="gold-divider !mx-0 !ml-0 mb-4" />
          <ul className="font-cormorant text-sm space-y-2">
            <li><span className="text-or/70">Mardi — Samedi :</span> 12h – 14h30 / 19h – 22h30</li>
            <li><span className="text-or/70">Dimanche :</span> 12h – 15h</li>
            <li><span className="text-or/70">Lundi :</span> Fermé</li>
          </ul>
        </div>
        <div>
          <h4 className="font-playfair text-creme text-sm tracking-widest uppercase mb-4">Contact</h4>
          <div className="gold-divider !mx-0 !ml-0 mb-4" />
          <ul className="font-cormorant text-sm space-y-2">
            <li>24, rue Saint-Honoré<br />75001 Paris</li>
            <li><a href="tel:+33142600000" className="hover:text-or transition-colors">+33 1 42 60 XX XX</a></li>
            <li><a href="mailto:contact@lejardindor.fr" className="hover:text-or transition-colors">contact@lejardindor.fr</a></li>
          </ul>
          <Link href="/reservation" className="btn-gold mt-6 text-xs inline-block">Réserver</Link>
        </div>
      </div>
      <div className="relative max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-or/20 text-center space-y-3">
        <p className="font-cormorant text-xs tracking-widest uppercase">© 2025 Le Jardin d'Or — Tous droits réservés</p>
        <p className="font-cormorant text-xs tracking-wider">
          Conçu &amp; développé par{' '}
          <a
            href="https://neuraweb.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-or hover:text-or/80 transition-colors"
          >
            NeuraWeb
          </a>
          {' '}— agence web, automatisation &amp; intégration IA
        </p>
      </div>
    </footer>
  )
}

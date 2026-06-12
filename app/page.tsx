import Image from 'next/image'
import Link from 'next/link'

const HERO_IMG = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80'
const HISTOIRE_IMG = 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1400&q=80'
const CTA_IMG = 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80'

const specialites = [
  {
    nom: 'Saint-Jacques Rôties',
    description: 'Noix de Saint-Jacques de la baie de Quiberon, velouté de céleri truffe, huile de noisette torréfiée',
    prix: '38 €',
    img: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80',
  },
  {
    nom: "Pigeon de Bresse en Croûte d'Herbes",
    description: 'Pigeon Label Rouge, farce fine aux morilles, jus corsé au Madère, pommes dauphines croustillantes',
    prix: '56 €',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
  },
  {
    nom: 'Soufflé Grand Marnier',
    description: 'Soufflé chaud à l\'orange et Grand Marnier, crème glacée à la vanille Bourbon de Madagascar',
    prix: '22 €',
    img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
  },
]

const avis = [
  {
    nom: 'Camille L.',
    date: 'il y a 2 semaines',
    texte: 'Une soirée absolument magique. Le soufflé au Grand Marnier est à tomber. Service aux petits soins, cadre raffiné — une adresse d\'exception.',
  },
  {
    nom: 'Thomas B.',
    date: 'il y a 1 mois',
    texte: 'Cuisine gastronomique d\'une grande finesse. Les Saint-Jacques étaient parfaitement cuites. On reviendra pour un anniversaire, c\'est certain.',
  },
  {
    nom: 'Sophie M.',
    date: 'il y a 1 mois',
    texte: 'Le pigeon en croûte d\'herbes est un pur bonheur. Accueil chaleureux et sommelier de grand talent. Le rapport qualité-plaisir est au rendez-vous.',
  },
]

const GoogleG = () => (
  <svg className="w-5 h-5 ml-auto" viewBox="0 0 48 48" aria-label="Google">
    <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
    <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
    <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
    <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
  </svg>
)

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <div data-parallax="0.25" className="absolute inset-0 -top-20 -bottom-20">
            <Image
              src={HERO_IMG}
              alt="Salle du restaurant Le Jardin d'Or à la lumière dorée"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              data-kenburns
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/50 to-noir/90" />
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
            backgroundSize: '20px 20px',
          }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-24" data-reveal>
          <p className="font-cormorant text-or/90 tracking-[0.4em] uppercase text-xs sm:text-sm mb-4">Bienvenue au</p>
          <h1 className="font-playfair text-creme text-5xl sm:text-7xl md:text-8xl mb-4 leading-[1.05]">
            Le Jardin<br />
            <span className="text-or italic">d'Or</span>
          </h1>
          <div className="gold-divider" />
          <p className="font-cormorant text-creme/80 text-base sm:text-xl mt-6 mb-10 max-w-xl mx-auto italic px-4">
            Une symphonie de saveurs où la tradition française s'élève au rang de l'art
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-6">
            <Link href="/reservation" className="btn-gold-fill w-full sm:w-auto">Réserver une table</Link>
            <Link href="/menu" className="btn-gold w-full sm:w-auto">Découvrir le menu</Link>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-or/70 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div data-reveal>
          <p className="font-cormorant text-or tracking-widest uppercase text-xs sm:text-sm mb-3">Notre Histoire</p>
          <h2 className="font-playfair text-noir text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
            Une passion transmise<br />
            <span className="italic text-or">de génération en génération</span>
          </h2>
          <div className="gold-divider ml-0" />
          <p className="font-cormorant text-noir/70 text-base sm:text-lg mt-6 leading-relaxed">
            Fondé en 1987 par le Chef Alain Moreau, Le Jardin d'Or est né d'un rêve simple : offrir aux convives une expérience culinaire qui transcende le simple repas pour devenir un voyage sensoriel.
          </p>
          <p className="font-cormorant text-noir/70 text-base sm:text-lg mt-4 leading-relaxed">
            Aujourd'hui, sous la direction de son fils Thomas Moreau — deux étoiles au Guide Michelin — la maison perpétue l'excellence de la grande cuisine française tout en embrassant la modernité avec audace.
          </p>
          <Link href="/menu" className="btn-gold mt-8">Notre carte</Link>
        </div>

        <div className="relative" data-reveal data-reveal-delay="0.15">
          <div className="img-frame w-full aspect-[4/5] sm:h-[28rem] sm:aspect-auto">
            <Image
              src={HISTOIRE_IMG}
              alt="Chef en cuisine, dressage d'une assiette gastronomique"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-6 bg-or p-5 sm:p-6 shadow-2xl">
            <p className="font-playfair text-noir text-2xl sm:text-3xl font-bold leading-none">38</p>
            <p className="font-cormorant text-noir/70 text-xs sm:text-sm tracking-widest uppercase mt-1">Ans d'excellence</p>
          </div>
          <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 bg-noir px-4 py-3 shadow-2xl border border-or/40">
            <p className="font-playfair text-or text-xl sm:text-2xl leading-none tracking-widest">★★</p>
            <p className="font-cormorant text-creme/60 text-[10px] sm:text-xs tracking-widest uppercase mt-1">Michelin</p>
          </div>
        </div>
      </section>

      {/* Séparateur doré */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-or/20" />
      </div>

      {/* Nos spécialités */}
      <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <div className="text-center mb-12 sm:mb-16" data-reveal>
          <p className="font-cormorant text-or tracking-widest uppercase text-xs sm:text-sm mb-3">La Carte</p>
          <h2 className="font-playfair text-noir text-3xl sm:text-4xl md:text-5xl">Nos Spécialités</h2>
          <div className="gold-divider mt-4" />
          <p className="font-cormorant text-noir/60 italic mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Trois signatures qui racontent notre maison, par le Chef Thomas Moreau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" data-stagger>
          {specialites.map((plat) => (
            <article key={plat.nom} className="group flex flex-col bg-creme border border-or/20 hover:border-or transition-all duration-500 hover:shadow-2xl overflow-hidden">
              <div className="img-frame aspect-[4/3] w-full">
                <Image
                  src={plat.img}
                  alt={plat.nom}
                  fill
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 text-center flex-1 flex flex-col">
                <div className="text-or mb-3 text-2xl">✦</div>
                <h3 className="font-playfair text-noir text-lg sm:text-xl mb-3">{plat.nom}</h3>
                <p className="font-cormorant text-noir/60 text-sm sm:text-[15px] leading-relaxed mb-6 italic flex-1">
                  {plat.description}
                </p>
                <p className="font-playfair text-or text-xl sm:text-2xl">{plat.prix}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12" data-reveal>
          <Link href="/menu" className="btn-gold">Voir la carte complète</Link>
        </div>
      </section>

      {/* Avis Google */}
      <section className="bg-creme border-t border-or/15">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <div className="text-center mb-12 sm:mb-16" data-reveal>
            <p className="font-cormorant text-or tracking-widest uppercase text-xs sm:text-sm mb-3">Ils nous ont visités</p>
            <h2 className="font-playfair text-noir text-3xl sm:text-4xl md:text-5xl">Avis de nos convives</h2>
            <div className="gold-divider mt-4" />
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-6">
              <span className="text-or text-2xl tracking-[0.15em] leading-none">★★★★★</span>
              <span className="font-cormorant text-noir text-lg">
                <strong className="font-playfair">4,9</strong> / 5 · 428 avis Google
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" data-stagger>
            {avis.map((a) => (
              <article key={a.nom} className="bg-white border border-or/20 p-6 sm:p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-noir text-or flex items-center justify-center font-playfair text-lg shrink-0">
                    {a.nom[0]}
                  </div>
                  <div className="min-w-0">
                    <p className="font-playfair text-noir text-base leading-none">{a.nom}</p>
                    <p className="font-cormorant text-noir/50 text-sm mt-1">{a.date}</p>
                  </div>
                  <GoogleG />
                </div>
                <div className="text-or tracking-[0.15em] mb-3 leading-none">★★★★★</div>
                <p className="font-cormorant text-noir/70 text-base leading-relaxed italic flex-1">« {a.texte} »</p>
                <p className="font-cormorant text-noir/40 text-xs tracking-widest uppercase mt-5">Publié sur Google</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nous trouver */}
      <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div data-reveal>
          <p className="font-cormorant text-or tracking-widest uppercase text-xs sm:text-sm mb-3">Nous trouver</p>
          <h2 className="font-playfair text-noir text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
            Au cœur de Paris
          </h2>
          <div className="gold-divider ml-0" />
          <ul className="font-cormorant text-noir/70 text-base sm:text-lg mt-6 space-y-3">
            <li><span className="text-or">Adresse :</span> 24, rue Saint-Honoré, 75001 Paris</li>
            <li><span className="text-or">Téléphone :</span> <a href="tel:+33142600000" className="hover:text-or transition-colors">+33 1 42 60 XX XX</a></li>
            <li><span className="text-or">Métro :</span> Louvre-Rivoli (ligne 1)</li>
            <li><span className="text-or">Horaires :</span> Mar–Sam · 12h–14h30 / 19h–22h30</li>
          </ul>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="https://www.google.com/maps?q=24+rue+Saint-Honor%C3%A9,+75001+Paris" target="_blank" rel="noopener noreferrer" className="btn-gold">Itinéraire</a>
            <Link href="/reservation" className="btn-gold-fill">Réserver une table</Link>
          </div>
        </div>
        <div className="img-frame w-full aspect-[4/3] sm:h-[24rem] sm:aspect-auto" data-reveal data-reveal-delay="0.15">
          <iframe
            title="Le Jardin d'Or sur Google Maps"
            src="https://www.google.com/maps?q=24+rue+Saint-Honor%C3%A9,+75001+Paris&output=embed"
            className="w-full h-full"
            style={{ border: 0, minHeight: 320 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* CTA Réservation avec parallax */}
      <section className="relative py-20 sm:py-32 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div data-parallax="0.35" className="absolute inset-0 -top-32 -bottom-32">
            <Image
              src={CTA_IMG}
              alt="Table dressée pour un dîner gastronomique"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-noir/85 via-noir/80 to-noir/95" />
        </div>
        <div className="relative max-w-2xl mx-auto px-6" data-reveal>
          <p className="font-cormorant text-or/90 tracking-widest uppercase text-xs sm:text-sm mb-4">Une occasion unique</p>
          <h2 className="font-playfair text-creme text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">
            Offrez-vous une soirée<br />
            <span className="text-or italic">d'exception</span>
          </h2>
          <div className="gold-divider mt-4 mb-8" />
          <p className="font-cormorant text-creme/70 text-base sm:text-lg mb-10">
            Dîners romantiques, anniversaires, dîners d'affaires... Nos équipes sont là pour faire de votre soirée un souvenir impérissable.
          </p>
          <Link href="/reservation" className="btn-gold-fill text-sm sm:text-base">Réserver votre table</Link>
          <p className="font-cormorant text-creme/50 text-xs sm:text-sm mt-6 italic">
            Réservations conseillées 2 à 3 semaines à l'avance
          </p>
        </div>
      </section>
    </>
  )
}

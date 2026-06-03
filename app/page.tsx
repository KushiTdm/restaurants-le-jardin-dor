export default function HomePage() {
  const specialites = [
    {
      nom: 'Saint-Jacques Rôties',
      description: 'Noix de Saint-Jacques de la baie de Quiberon, velouté de céleri truffe, huile de noisette torréfiée',
      prix: '38 €',
    },
    {
      nom: 'Pigeon de Bresse en Croûte d\'Herbes',
      description: 'Pigeon Label Rouge, farce fine aux morilles, jus corsé au Madère, pommes dauphines croustillantes',
      prix: '56 €',
    },
    {
      nom: 'Soufflé Grand Marnier',
      description: 'Soufflé chaud à l\'orange et Grand Marnier, crème glacée à la vanille Bourbon de Madagascar',
      prix: '22 €',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2c2415 50%, #1a1a1a 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-20">
          <p className="font-cormorant text-or/80 tracking-[0.4em] uppercase text-sm mb-4">Bienvenue au</p>
          <h1 className="font-playfair text-creme text-6xl md:text-8xl mb-4 leading-tight">
            Le Jardin<br />
            <span className="text-or italic">d'Or</span>
          </h1>
          <div className="gold-divider" />
          <p className="font-cormorant text-creme/70 text-xl mt-6 mb-10 max-w-xl mx-auto italic">
            Une symphonie de saveurs où la tradition française s'élève au rang de l'art
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/reservation" className="btn-gold-fill">Réserver une table</a>
            <a href="/menu" className="btn-gold">Découvrir le menu</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-or/50 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-cormorant text-or tracking-widest uppercase text-sm mb-3">Notre Histoire</p>
          <h2 className="font-playfair text-noir text-4xl md:text-5xl mb-6 leading-tight">
            Une passion transmise<br />
            <span className="italic text-or">de génération en génération</span>
          </h2>
          <div className="gold-divider ml-0" />
          <p className="font-cormorant text-noir/70 text-lg mt-6 leading-relaxed">
            Fondé en 1987 par le Chef Alain Moreau, Le Jardin d'Or est né d'un rêve simple : offrir aux convives une expérience culinaire qui transcende le simple repas pour devenir un voyage sensoriel.
          </p>
          <p className="font-cormorant text-noir/70 text-lg mt-4 leading-relaxed">
            Aujourd'hui, sous la direction de son fils Thomas Moreau — deux étoiles au Guide Michelin — la maison perpétue l'excellence de la grande cuisine française tout en embrassant la modernité avec audace.
          </p>
          <a href="/menu" className="btn-gold mt-8 inline-block">Notre carte</a>
        </div>
        <div className="relative">
          <div
            className="w-full h-96 rounded-sm"
            style={{ background: 'linear-gradient(135deg, #2c2415 0%, #C9A84C22 100%)' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-or/30">
                <p className="font-playfair text-8xl">★★</p>
                <p className="font-cormorant tracking-widest uppercase text-sm text-or/50">Guide Michelin</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-or p-6 shadow-xl">
            <p className="font-playfair text-noir text-3xl font-bold">38</p>
            <p className="font-cormorant text-noir/70 text-sm tracking-widest uppercase">Ans d'excellence</p>
          </div>
        </div>
      </section>

      {/* Séparateur doré */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-or/20" />
      </div>

      {/* Nos spécialités */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="font-cormorant text-or tracking-widest uppercase text-sm mb-3">La Carte</p>
          <h2 className="font-playfair text-noir text-4xl md:text-5xl">Nos Spécialités</h2>
          <div className="gold-divider mt-4" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {specialites.map((plat) => (
            <div key={plat.nom} className="group text-center p-8 border border-or/20 hover:border-or transition-all duration-300 hover:bg-noir hover:shadow-xl">
              <div className="text-or mb-4 text-3xl">✦</div>
              <h3 className="font-playfair text-noir group-hover:text-creme text-xl mb-3 transition-colors">{plat.nom}</h3>
              <p className="font-cormorant text-noir/60 group-hover:text-creme/60 text-sm leading-relaxed mb-6 italic transition-colors">
                {plat.description}
              </p>
              <p className="font-playfair text-or text-2xl">{plat.prix}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/menu" className="btn-gold">Voir la carte complète</a>
        </div>
      </section>

      {/* CTA Réservation */}
      <section
        className="py-24 text-center"
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2c2415 100%)' }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-cormorant text-or/80 tracking-widest uppercase text-sm mb-4">Une occasion unique</p>
          <h2 className="font-playfair text-creme text-4xl md:text-5xl mb-4">
            Offrez-vous une soirée<br />
            <span className="text-or italic">d'exception</span>
          </h2>
          <div className="gold-divider mt-4 mb-8" />
          <p className="font-cormorant text-creme/60 text-lg mb-10">
            Dîners romantiques, anniversaires, dîners d'affaires... Nos équipes sont là pour faire de votre soirée un souvenir impérissable.
          </p>
          <a href="/reservation" className="btn-gold-fill text-base">Réserver votre table</a>
          <p className="font-cormorant text-creme/40 text-sm mt-6 italic">
            Réservations conseillées 2 à 3 semaines à l'avance
          </p>
        </div>
      </section>
    </>
  )
}

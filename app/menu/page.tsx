import Image from 'next/image'
import Link from 'next/link'

const HERO_IMG = 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=2000&q=80'

const menuData = {
  entrees: {
    img: 'https://images.unsplash.com/photo-1606851094291-6efae152bb87?auto=format&fit=crop&w=1400&q=80',
    items: [
      { nom: 'Foie Gras de Canard Maison', desc: 'Terrine mi-cuit, chutney de figues au porto, brioche toastée, fleur de sel de Guérande', prix: '28 €' },
      { nom: 'Saint-Jacques Rôties', desc: 'Noix de Saint-Jacques de Quiberon, velouté de céleri truffe, huile de noisette torréfiée, éclats de noisette', prix: '38 €' },
      { nom: 'Carpaccio de Bar de Ligne', desc: "Bar sauvage de Méditerranée, vinaigrette agrumes-gingembre, câpres, aneth frais, caviar d'Aquitaine", prix: '32 €' },
      { nom: 'Velouté de Champignons des Bois', desc: "Bouillon de morilles et girolles, crème légère à l'estragon, croûtons à l'ail des ours", prix: '22 €' },
      { nom: 'Tartare de Veau', desc: "Veau de lait Label Rouge taillé au couteau, condiments, jaune d'œuf mariné, tuile de parmesan", prix: '26 €' },
    ],
  },
  plats: {
    img: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=1400&q=80',
    items: [
      { nom: 'Homard Bleu Breton Rôti', desc: 'Demi-homard de casier, bisque légère au cognac, tagliolini frais, herbes du jardin', prix: '78 €' },
      { nom: "Pigeon de Bresse en Croûte d'Herbes", desc: 'Pigeon Label Rouge, farce fine aux morilles, jus corsé au Madère, pommes dauphines croustillantes', prix: '56 €' },
      { nom: 'Filet de Sole Meunière', desc: 'Sole de Normandie, beurre noisette aux câpres, citron confit, légumes de saison à l\'étuvée', prix: '52 €' },
      { nom: 'Côte de Veau de Lait Rôtie', desc: 'Veau fermier du Limousin, jus de veau, champignons de Paris et girolles, gratin dauphinois', prix: '58 €' },
      { nom: 'Risotto de Langoustines', desc: 'Langoustines vivantes de Saint-Guénolé, risotto crémeux au beurre de homard, parmesan 36 mois', prix: '62 €' },
      { nom: 'Tournedos Rossini', desc: 'Filet de bœuf Simmental, foie gras de canard poêlé, sauce Périgueux aux truffes du Périgord', prix: '72 €' },
    ],
  },
  desserts: {
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1400&q=80',
    items: [
      { nom: 'Soufflé Grand Marnier', desc: "Soufflé chaud à l'orange et Grand Marnier, crème glacée à la vanille Bourbon de Madagascar", prix: '22 €' },
      { nom: 'Mille-Feuille à la Vanille', desc: 'Feuilletage caramélisé inversé, crème pâtissière vanille de Tahiti, nougatine de pralin', prix: '18 €' },
      { nom: 'Île Flottante Grand Classique', desc: 'Blancs montés pochés, crème anglaise à la vanille, caramel filé, amandes effilées grillées', prix: '16 €' },
      { nom: 'Chariot de Fromages', desc: 'Sélection affinée de 12 fromages français, accompagnements de saison, pain aux noix artisanal', prix: '24 €' },
      { nom: 'Tarte au Citron Meringuée', desc: 'Pâte sablée pur beurre, ganache citron de Menton, meringue italienne légèrement flambée', prix: '17 €' },
    ],
  },
  vins: {
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=80',
    items: [
      { nom: 'Meursault Premier Cru "Les Charmes"', desc: 'Domaine des Comtes Lafon, Bourgogne Blanc — Millésime 2019', prix: '95 €' },
      { nom: 'Château Pichon Baron', desc: 'Pauillac Grand Cru Classé, Bordeaux Rouge — Millésime 2015', prix: '140 €' },
      { nom: 'Condrieu "La Doriane"', desc: 'E. Guigal, Rhône Blanc, Viognier — Millésime 2020', prix: '110 €' },
      { nom: 'Champagne Blanc de Blancs', desc: 'Salon Le Mesnil, Côte des Blancs — Millésime 2012', prix: '220 €' },
    ],
  },
} as const

export default function MenuPage() {
  const categories = [
    { key: 'entrees', label: 'Entrées', num: 'I' },
    { key: 'plats', label: 'Plats', num: 'II' },
    { key: 'desserts', label: 'Desserts', num: 'III' },
    { key: 'vins', label: 'Vins', num: 'IV' },
  ] as const

  return (
    <div className="bg-creme">
      {/* Header with image */}
      <div className="relative pt-20 sm:pt-24">
        <div className="relative h-[55vh] min-h-[380px] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0">
            <div data-parallax="0.3" className="absolute inset-0 -top-16 -bottom-16">
              <Image
                src={HERO_IMG}
                alt="Plat gastronomique signature"
                fill
                priority
                sizes="100vw"
                className="object-cover"
                data-kenburns
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-noir/75 via-noir/60 to-noir/90" />
          </div>
          <div className="relative px-6" data-reveal>
            <p className="font-cormorant text-or/90 tracking-widest uppercase text-xs sm:text-sm mb-4">Saison Printemps–Été</p>
            <h1 className="font-playfair text-creme text-4xl sm:text-6xl md:text-7xl">Notre Carte</h1>
            <div className="gold-divider mt-6" />
            <p className="font-cormorant text-creme/60 text-xs sm:text-sm mt-6 italic">
              Les prix sont nets, service compris — TVA incluse
            </p>
          </div>
        </div>
      </div>

      {/* Navigation catégories — scroll horizontal sur mobile */}
      <div className="sticky top-[60px] sm:top-[72px] z-30 bg-noir/95 backdrop-blur border-b border-or/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex justify-start sm:justify-center gap-6 sm:gap-10 py-3 sm:py-4 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <a
              key={cat.key}
              href={`#${cat.key}`}
              className="font-cormorant text-creme/70 hover:text-or transition-colors tracking-widest uppercase text-xs whitespace-nowrap shrink-0"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
        {categories.map((cat, idx) => (
          <section key={cat.key} id={cat.key} className="mb-16 sm:mb-24 scroll-mt-32">
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-center mb-10 sm:mb-14" data-reveal>
              <div className={`img-frame aspect-[4/3] w-full ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image
                  src={menuData[cat.key].img}
                  alt={cat.label}
                  fill
                  sizes="(min-width: 768px) 35vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="font-cormorant text-or/50 text-xs sm:text-sm tracking-[0.4em] uppercase">{cat.num}</p>
                <h2 className="font-playfair text-noir text-3xl sm:text-4xl md:text-5xl mt-1">{cat.label}</h2>
                <div className={`gold-divider mt-4 ${idx % 2 === 1 ? 'md:!mx-0' : 'md:!mx-0'}`} />
                <p className="font-cormorant text-noir/50 italic text-base sm:text-lg mt-4">
                  {cat.key === 'entrees' && 'Pour débuter le voyage des sens.'}
                  {cat.key === 'plats' && 'Le cœur de la maison, élaboré chaque jour.'}
                  {cat.key === 'desserts' && 'La signature sucrée du Chef Pâtissier.'}
                  {cat.key === 'vins' && 'Une cave d\'auteur, à découvrir avec le sommelier.'}
                </p>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-4" data-stagger>
              {menuData[cat.key].items.map((item) => (
                <div
                  key={item.nom}
                  className="flex items-start justify-between gap-4 sm:gap-8 py-4 sm:py-6 border-b border-or/10 group hover:border-or/40 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-playfair text-noir text-base sm:text-lg mb-1 group-hover:text-or transition-colors">{item.nom}</h3>
                    <p className="font-cormorant text-noir/55 text-sm italic leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="font-playfair text-or text-base sm:text-lg whitespace-nowrap pt-0.5">{item.prix}</span>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Note en bas de carte */}
        <div className="text-center pt-10 border-t border-or/20" data-reveal>
          <p className="font-cormorant text-noir/40 text-sm italic">
            Notre carte évolue au fil des saisons et des arrivages.<br />
            Allergènes disponibles sur demande auprès de notre équipe.
          </p>
          <Link href="/reservation" className="btn-gold-fill mt-8">Réserver une table</Link>
        </div>
      </div>
    </div>
  )
}

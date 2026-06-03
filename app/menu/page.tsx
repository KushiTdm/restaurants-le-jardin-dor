const menuData = {
  entrees: [
    { nom: 'Foie Gras de Canard Maison', desc: 'Terrine mi-cuit, chutney de figues au porto, brioche toastée, fleur de sel de Guérande', prix: '28 €' },
    { nom: 'Saint-Jacques Rôties', desc: 'Noix de Saint-Jacques de Quiberon, velouté de céleri truffe, huile de noisette torréfiée, éclats de noisette', prix: '38 €' },
    { nom: 'Carpaccio de Bar de Ligne', desc: 'Bar sauvage de Méditerranée, vinaigrette agrumes-gingembre, câpres, aneth frais, caviar d\'Aquitaine', prix: '32 €' },
    { nom: 'Velouté de Champignons des Bois', desc: 'Bouillon de morilles et girolles, crème légère à l\'estragon, croûtons à l\'ail des ours', prix: '22 €' },
    { nom: 'Tartare de Veau', desc: 'Veau de lait Label Rouge taillé au couteau, condiments, jaune d\'œuf mariné, tuile de parmesan', prix: '26 €' },
  ],
  plats: [
    { nom: 'Homard Bleu Breton Rôti', desc: 'Demi-homard de casier, bisque légère au cognac, tagliolini frais, herbes du jardin', prix: '78 €' },
    { nom: 'Pigeon de Bresse en Croûte d\'Herbes', desc: 'Pigeon Label Rouge, farce fine aux morilles, jus corsé au Madère, pommes dauphines croustillantes', prix: '56 €' },
    { nom: 'Filet de Sole Meunière', desc: 'Sole de Normandie, beurre noisette aux câpres, citron confit, légumes de saison à l\'étuvée', prix: '52 €' },
    { nom: 'Côte de Veau de Lait Rôtie', desc: 'Veau fermier du Limousin, jus de veau, champignons de Paris et girolles, gratin dauphinois', prix: '58 €' },
    { nom: 'Risotto de Langoustines', desc: 'Langoustines vivantes de Saint-Guénolé, risotto crémeux au beurre de homard, parmesan 36 mois', prix: '62 €' },
    { nom: 'Tournedos Rossini', desc: 'Filet de bœuf Simmental, foie gras de canard poêlé, sauce Périgueux aux truffes du Périgord', prix: '72 €' },
  ],
  desserts: [
    { nom: 'Soufflé Grand Marnier', desc: 'Soufflé chaud à l\'orange et Grand Marnier, crème glacée à la vanille Bourbon de Madagascar', prix: '22 €' },
    { nom: 'Mille-Feuille à la Vanille', desc: 'Feuilletage caramélisé inversé, crème pâtissière vanille de Tahiti, nougatine de pralin', prix: '18 €' },
    { nom: 'Île Flottante Grand Classique', desc: 'Blancs montés pochés, crème anglaise à la vanille, caramel filé, amandes effilées grillées', prix: '16 €' },
    { nom: 'Chariot de Fromages', desc: 'Sélection affinée de 12 fromages français, accompagnements de saison, pain aux noix artisanal', prix: '24 €' },
    { nom: 'Tarte au Citron Meringuée', desc: 'Pâte sablée pur beurre, ganache citron de Menton, meringue italienne légèrement flambée', prix: '17 €' },
  ],
  vins: [
    { nom: 'Meursault Premier Cru "Les Charmes"', desc: 'Domaine des Comtes Lafon, Bourgogne Blanc — Millésime 2019', prix: '95 €' },
    { nom: 'Château Pichon Baron', desc: 'Pauillac Grand Cru Classé, Bordeaux Rouge — Millésime 2015', prix: '140 €' },
    { nom: 'Condrieu "La Doriane"', desc: 'E. Guigal, Rhône Blanc, Viognier — Millésime 2020', prix: '110 €' },
    { nom: 'Champagne Blanc de Blancs', desc: 'Salon Le Mesnil, Côte des Blancs — Millésime 2012', prix: '220 €' },
  ],
}

export default function MenuPage() {
  const categories = [
    { key: 'entrees', label: 'Entrées', num: 'I' },
    { key: 'plats', label: 'Plats', num: 'II' },
    { key: 'desserts', label: 'Desserts', num: 'III' },
    { key: 'vins', label: 'Vins', num: 'IV' },
  ] as const

  return (
    <div className="pt-20 bg-creme">
      {/* Header */}
      <div
        className="py-24 text-center"
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2c2415 100%)' }}
      >
        <p className="font-cormorant text-or/80 tracking-widest uppercase text-sm mb-4">Saison Printemps–Été</p>
        <h1 className="font-playfair text-creme text-5xl md:text-7xl">Notre Carte</h1>
        <div className="gold-divider mt-6" />
        <p className="font-cormorant text-creme/50 text-sm mt-6 italic">
          Les prix sont nets, service compris — TVA incluse
        </p>
      </div>

      {/* Navigation catégories */}
      <div className="sticky top-16 z-30 bg-noir/95 backdrop-blur border-b border-or/10">
        <div className="max-w-4xl mx-auto px-6 flex justify-center gap-8 py-4">
          {categories.map((cat) => (
            <a key={cat.key} href={`#${cat.key}`} className="font-cormorant text-creme/60 hover:text-or transition-colors tracking-widest uppercase text-xs">
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {categories.map((cat) => (
          <section key={cat.key} id={cat.key} className="mb-20">
            <div className="text-center mb-12">
              <p className="font-cormorant text-or/50 text-sm tracking-widest">{cat.num}</p>
              <h2 className="font-playfair text-noir text-4xl mt-1">{cat.label}</h2>
              <div className="gold-divider mt-4" />
            </div>
            <div className="space-y-6">
              {(menuData[cat.key] as typeof menuData.entrees).map((item) => (
                <div key={item.nom} className="flex items-start justify-between gap-8 py-6 border-b border-or/10 group">
                  <div className="flex-1">
                    <h3 className="font-playfair text-noir text-lg mb-1 group-hover:text-or transition-colors">{item.nom}</h3>
                    <p className="font-cormorant text-noir/50 text-sm italic leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="font-playfair text-or text-lg whitespace-nowrap">{item.prix}</span>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Note en bas de carte */}
        <div className="text-center pt-10 border-t border-or/20">
          <p className="font-cormorant text-noir/40 text-sm italic">
            Notre carte évolue au fil des saisons et des arrivages.<br />
            Allergènes disponibles sur demande auprès de notre équipe.
          </p>
          <a href="/reservation" className="btn-gold-fill mt-8 inline-block">Réserver une table</a>
        </div>
      </div>
    </div>
  )
}

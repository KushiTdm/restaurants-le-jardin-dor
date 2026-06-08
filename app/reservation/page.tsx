'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HERO_IMG = 'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=2000&q=80'
const SIDE_IMG = 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80'

export default function ReservationPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    date: '',
    heure: '',
    personnes: '2',
    occasion: '',
    demandes: '',
  })

  const heures = ['12:00', '12:30', '13:00', '13:30', '14:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="pt-24 min-h-screen bg-creme flex items-center justify-center">
        <div className="max-w-lg mx-auto px-6 text-center py-20 animate-[fadeIn_0.8s_ease-out]">
          <div className="text-or text-6xl mb-6">✦</div>
          <h1 className="font-playfair text-noir text-3xl sm:text-4xl mb-4">Demande enregistrée</h1>
          <div className="gold-divider" />
          <p className="font-cormorant text-noir/60 text-base sm:text-lg mt-6 mb-8 leading-relaxed">
            Merci, {form.prenom}. Nous avons bien reçu votre demande de réservation pour{' '}
            <strong>{form.personnes} personnes</strong> le{' '}
            <strong>{new Date(form.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</strong>{' '}
            à <strong>{form.heure}</strong>.<br /><br />
            Notre équipe vous contactera dans les 24h pour confirmer votre table.
          </p>
          <Link href="/" className="btn-gold-fill">Retour à l'accueil</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-creme">
      {/* Hero */}
      <div className="relative pt-20 sm:pt-24">
        <div className="relative h-[45vh] min-h-[320px] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0">
            <div data-parallax="0.3" className="absolute inset-0 -top-16 -bottom-16">
              <Image
                src={HERO_IMG}
                alt="Table dressée pour un dîner intime"
                fill
                priority
                sizes="100vw"
                className="object-cover"
                data-kenburns
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-noir/75 via-noir/65 to-noir/90" />
          </div>
          <div className="relative px-6" data-reveal>
            <p className="font-cormorant text-or/90 tracking-widest uppercase text-xs sm:text-sm mb-4">Vivez l'expérience</p>
            <h1 className="font-playfair text-creme text-4xl sm:text-5xl md:text-6xl">Réservation</h1>
            <div className="gold-divider mt-6" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-[1fr_1.7fr] gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="space-y-6" data-reveal>
            <div className="img-frame aspect-[4/5] w-full hidden lg:block">
              <Image src={SIDE_IMG} alt="Détail de la salle" fill sizes="30vw" className="object-cover" />
            </div>
            <div className="bg-noir text-creme p-6 sm:p-8 border border-or/20">
              <h3 className="font-playfair text-or text-lg sm:text-xl mb-4">Informations pratiques</h3>
              <div className="gold-divider !mx-0 !ml-0 mb-4" />
              <ul className="font-cormorant text-sm sm:text-base space-y-3 text-creme/80">
                <li className="flex gap-3">
                  <span className="text-or">✦</span>
                  <div>
                    <p className="text-or/80 text-xs uppercase tracking-widest">Adresse</p>
                    <p>24, rue Saint-Honoré, 75001 Paris</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-or">✦</span>
                  <div>
                    <p className="text-or/80 text-xs uppercase tracking-widest">Téléphone</p>
                    <a href="tel:+33142600000" className="hover:text-or transition-colors">+33 1 42 60 XX XX</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-or">✦</span>
                  <div>
                    <p className="text-or/80 text-xs uppercase tracking-widest">Horaires</p>
                    <p>Mar — Sam : 12h–14h30 / 19h–22h30</p>
                    <p>Dim : 12h–15h · Lun : fermé</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-or">✦</span>
                  <div>
                    <p className="text-or/80 text-xs uppercase tracking-widest">Tenue</p>
                    <p>Tenue élégante recommandée</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          {/* Form */}
          <div className="bg-white shadow-2xl p-6 sm:p-10 border border-or/10 relative" data-reveal data-reveal-delay="0.1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-or to-transparent" />
            <p className="font-cormorant text-noir/50 text-center text-xs sm:text-sm mb-8 sm:mb-10 tracking-wider italic">
              Tous les champs marqués d'un * sont obligatoires
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="font-cormorant text-noir/60 tracking-widest uppercase text-xs block mb-2">Prénom *</label>
                  <input
                    type="text"
                    required
                    value={form.prenom}
                    onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                    className="w-full border-b border-or/30 focus:border-or bg-transparent py-3 font-cormorant text-noir text-base outline-none transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="font-cormorant text-noir/60 tracking-widest uppercase text-xs block mb-2">Nom *</label>
                  <input
                    type="text"
                    required
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className="w-full border-b border-or/30 focus:border-or bg-transparent py-3 font-cormorant text-noir text-base outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="font-cormorant text-noir/60 tracking-widest uppercase text-xs block mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border-b border-or/30 focus:border-or bg-transparent py-3 font-cormorant text-noir text-base outline-none transition-colors"
                    placeholder="votre@email.fr"
                  />
                </div>
                <div>
                  <label className="font-cormorant text-noir/60 tracking-widest uppercase text-xs block mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    value={form.telephone}
                    onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                    className="w-full border-b border-or/30 focus:border-or bg-transparent py-3 font-cormorant text-noir text-base outline-none transition-colors"
                    placeholder="+33 6 XX XX XX XX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                <div>
                  <label className="font-cormorant text-noir/60 tracking-widest uppercase text-xs block mb-2">Date *</label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full border-b border-or/30 focus:border-or bg-transparent py-3 font-cormorant text-noir text-base outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-cormorant text-noir/60 tracking-widest uppercase text-xs block mb-2">Heure *</label>
                  <select
                    required
                    value={form.heure}
                    onChange={(e) => setForm({ ...form, heure: e.target.value })}
                    className="w-full border-b border-or/30 focus:border-or bg-transparent py-3 font-cormorant text-noir text-base outline-none transition-colors"
                  >
                    <option value="">Choisir</option>
                    {heures.map((h) => <option key={h} value={h}>{h}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-cormorant text-noir/60 tracking-widest uppercase text-xs block mb-2">Personnes *</label>
                  <select
                    required
                    value={form.personnes}
                    onChange={(e) => setForm({ ...form, personnes: e.target.value })}
                    className="w-full border-b border-or/30 focus:border-or bg-transparent py-3 font-cormorant text-noir text-base outline-none transition-colors"
                  >
                    {[1,2,3,4,5,6,7,8].map((n) => <option key={n} value={n}>{n} {n === 1 ? 'personne' : 'personnes'}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-cormorant text-noir/60 tracking-widest uppercase text-xs block mb-2">Occasion</label>
                <select
                  value={form.occasion}
                  onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                  className="w-full border-b border-or/30 focus:border-or bg-transparent py-3 font-cormorant text-noir text-base outline-none transition-colors"
                >
                  <option value="">Aucune occasion particulière</option>
                  <option value="anniversaire">Anniversaire</option>
                  <option value="romantique">Dîner romantique</option>
                  <option value="affaires">Dîner d'affaires</option>
                  <option value="famille">Repas en famille</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="font-cormorant text-noir/60 tracking-widest uppercase text-xs block mb-2">Demandes particulières</label>
                <textarea
                  value={form.demandes}
                  onChange={(e) => setForm({ ...form, demandes: e.target.value })}
                  rows={4}
                  className="w-full border border-or/20 focus:border-or bg-transparent p-4 font-cormorant text-noir text-base outline-none transition-colors resize-none"
                  placeholder="Allergies, régimes spéciaux, placement préféré (fenêtre, terrasse...), décoration pour anniversaire..."
                />
              </div>

              <div className="pt-4 text-center">
                <button type="submit" className="btn-gold-fill px-10 sm:px-16 py-4 text-sm sm:text-base w-full sm:w-auto">
                  Envoyer ma demande
                </button>
                <p className="font-cormorant text-noir/40 text-xs mt-4 italic">
                  Votre réservation sera confirmée par email et téléphone dans les 24h
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

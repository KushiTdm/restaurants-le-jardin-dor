'use client'

import { useState } from 'react'

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
      <div className="pt-20 min-h-screen bg-creme flex items-center justify-center">
        <div className="max-w-lg mx-auto px-6 text-center py-20">
          <div className="text-or text-6xl mb-6">✦</div>
          <h1 className="font-playfair text-noir text-4xl mb-4">Demande enregistrée</h1>
          <div className="gold-divider" />
          <p className="font-cormorant text-noir/60 text-lg mt-6 mb-8 leading-relaxed">
            Merci, {form.prenom}. Nous avons bien reçu votre demande de réservation pour{' '}
            <strong>{form.personnes} personnes</strong> le{' '}
            <strong>{new Date(form.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</strong>{' '}
            à <strong>{form.heure}</strong>.<br /><br />
            Notre équipe vous contactera dans les 24h pour confirmer votre table.
          </p>
          <a href="/" className="btn-gold-fill">Retour à l'accueil</a>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 bg-creme">
      {/* Header */}
      <div className="py-20 text-center" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2c2415 100%)' }}>
        <p className="font-cormorant text-or/80 tracking-widest uppercase text-sm mb-4">Vivez l'expérience</p>
        <h1 className="font-playfair text-creme text-5xl md:text-6xl">Réservation</h1>
        <div className="gold-divider mt-6" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="bg-white shadow-lg p-10 border border-or/10">
          <p className="font-cormorant text-noir/50 text-center text-sm mb-10 tracking-wider italic">
            Tous les champs marqués d'un * sont obligatoires
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <button type="submit" className="btn-gold-fill px-16 py-4 text-base">
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
  )
}

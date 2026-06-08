'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/menu', label: 'Menu' },
    { href: '/reservation', label: 'Réservation' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || open ? 'bg-noir/95 backdrop-blur-md border-b border-or/20 py-2' : 'bg-noir/40 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex flex-col items-start sm:items-center">
            <span className="font-playfair text-or text-lg sm:text-2xl tracking-widest leading-none">Le Jardin d'Or</span>
            <span className="font-cormorant text-creme/60 text-[10px] sm:text-xs tracking-[0.3em] uppercase mt-1">Restaurant Gastronomique</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-cormorant transition-colors tracking-wider uppercase text-sm ${
                  pathname === l.href ? 'text-or' : 'text-creme/80 hover:text-or'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/reservation" className="btn-gold text-xs">Réserver</Link>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-creme w-10 h-10 flex items-center justify-center"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 top-0 h-[2px] w-full bg-current transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-full bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 bottom-0 h-[2px] w-full bg-current transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2c2415 100%)' }}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px',
        }} />
        <nav className="relative h-full flex flex-col items-center justify-center gap-2 px-6">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-playfair text-4xl tracking-wide transition-all duration-500 ${
                pathname === l.href ? 'text-or italic' : 'text-creme hover:text-or'
              } ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: open ? `${150 + i * 80}ms` : '0ms' }}
            >
              {l.label}
            </Link>
          ))}
          <div className="gold-divider my-8" />
          <Link
            href="/reservation"
            className={`btn-gold-fill mt-2 transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: open ? '450ms' : '0ms' }}
          >
            Réserver une table
          </Link>
          <p className={`font-cormorant text-creme/40 text-xs tracking-[0.3em] uppercase mt-12 transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}
             style={{ transitionDelay: open ? '600ms' : '0ms' }}>
            +33 1 42 60 XX XX
          </p>
        </nav>
      </div>
    </>
  )
}

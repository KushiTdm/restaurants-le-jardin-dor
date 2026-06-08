'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Wait for next/image and DOM to settle for the new route
    const setup = () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
          const delay = parseFloat(el.dataset.revealDelay || '0')
          const y = parseFloat(el.dataset.revealY || '40')
          gsap.fromTo(
            el,
            { autoAlpha: 0, y },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1.1,
              delay,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 85%', once: true },
            }
          )
        })

        gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) => {
          const kids = Array.from(group.children) as HTMLElement[]
          gsap.fromTo(
            kids,
            { autoAlpha: 0, y: 50 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: { trigger: group, start: 'top 80%', once: true },
            }
          )
        })

        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
          const speed = parseFloat(el.dataset.parallax || '0.3')
          gsap.to(el, {
            yPercent: speed * 100,
            ease: 'none',
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          })
        })

        gsap.utils.toArray<HTMLElement>('[data-kenburns]').forEach((el) => {
          gsap.fromTo(el, { scale: 1.08 }, { scale: 1, duration: 6, ease: 'power1.out' })
        })
      })

      // After all triggers created, refresh to compute positions correctly
      requestAnimationFrame(() => ScrollTrigger.refresh())

      return ctx
    }

    // Wait a frame so the new page DOM is fully painted before binding
    let ctx: gsap.Context | undefined
    const raf = requestAnimationFrame(() => {
      ctx = setup()
    })

    const onResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      ctx?.revert()
      window.removeEventListener('resize', onResize)
    }
  }, [pathname])

  return <>{children}</>
}

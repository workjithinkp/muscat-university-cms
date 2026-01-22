'use client'

import { useEffect, ReactNode } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LenisScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // init Lenis
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      // smoothTouch: false,
      wheelMultiplier: 1.1,
      // autoRaf: false, // if you want manual raf control (we're using gsap.ticker)
    })

    // keep ScrollTrigger in sync when Lenis scrolls
    lenis.on('scroll', ScrollTrigger.update)

    // add Lenis raf to GSAP's ticker (GSAP gives time in seconds -> Lenis expects ms)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // scrollerProxy if ScrollTrigger expects a custom scroller (document.body is ok for Lenis default)
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (value !== undefined) {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: innerWidth, height: innerHeight }
      },
    })

    // When ScrollTrigger refreshes (resize/recalc), tell Lenis to recalc dimensions
    ScrollTrigger.addEventListener('refresh', () => lenis.resize())

    // first refresh so everything is accurate
    ScrollTrigger.refresh()

    return () => {
      // cleanup
      ScrollTrigger.removeEventListener('refresh', () => lenis.resize())
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
      lenis.destroy()
      ScrollTrigger.killAll()
    }
  }, [])

  return <>{children}</>
}

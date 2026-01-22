'use client'

import { useEffect } from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LinesSlideUp() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-lines-slide-up]')

    elements.forEach((el) => {
      const target = el as HTMLElement
      target.style.opacity = '1' // avoid FOUC

      // 1) Split into lines
      const split = new SplitType(target, {
        types: 'lines',
        tagName: 'span',
      })

      const lines = split.lines || []

      // 2) Wrap each line so it can slide out of a container
      lines.forEach((line) => {
        const lineEl = line as HTMLElement
        const wrapper = document.createElement('span')
        wrapper.style.display = 'block'
        wrapper.style.overflow = 'hidden'

        lineEl.parentNode?.insertBefore(wrapper, lineEl)
        wrapper.appendChild(lineEl)
      })

      // 3) GSAP animation
      const tl = gsap.timeline({ paused: true })

      tl.from(lines, {
        yPercent: 125,
        opacity: 0,
        duration: 0.5,
        ease: 'power4.out',
        stagger: { amount: 0.5 },
      })

      // 4) ScrollTrigger
      ScrollTrigger.create({
        trigger: target,
        start: 'top 85%',
        onEnter: () => tl.play(),
      })
    })

    // Optional: cleanup (good practice if this component can unmount)
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return null
}

'use client'

import { useEffect } from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TextEffects() {
  useEffect(() => {
    document.querySelectorAll('[data-words-slide-right]').forEach((el) => {
      // Avoid FOUC
      ;(el as HTMLElement).style.opacity = '1'

      // 1) Split text
      const split = new SplitType(el as HTMLElement, {
        types: 'words,chars',
        tagName: 'span',
      })

      // 2) Animate words
      const tl = gsap.timeline({ paused: true })

      tl.from(split.words, {
        opacity: 0,
        x: '1rem',
        duration: 0.6,
        ease: 'power4.out',
        stagger: { amount: 0.5 },
      })

      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        end: 'top 40%',
        onEnter: () => tl.play(),
      })
    })
  }, [])

  return null
}

'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CounterAnimation() {
  const pathname = usePathname()
  const countersRef = useRef<NodeListOf<HTMLElement> | null>(null)

  const animateCounters = () => {
    const counters = document.querySelectorAll(
      'span.count-num'
    ) as NodeListOf<HTMLElement>

    counters.forEach((counter) => {
      if (counter.dataset.animated) return

      const target = Number(counter.dataset.count)
      let count = { val: 0 }

      gsap.to(count, {
        val: target,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%',
          once: true,
        },
        onUpdate: () => {
          counter.textContent = Math.floor(count.val).toString()
        },
        onComplete: () => {
          counter.textContent = target.toString()
          counter.dataset.animated = 'true'
        },
      })
    })
  }

  useEffect(() => {
    // When pathname changes to home (or any time we return to this page)
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
      animateCounters()
    }, 150)

    return () => clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    animateCounters()
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return null
}

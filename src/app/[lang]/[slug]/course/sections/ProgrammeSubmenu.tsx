'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export interface SubmenuItem {
  label: string
  href: string
}

interface Props {
  items: SubmenuItem[]
}

export default function ProgrammeSubmenu({ items }: Props) {
  const submenuRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(items[0]?.href || '')

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    const target = document.querySelector(href)
    if (!target) return

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: target, offsetY: 200 },
      ease: 'power3.out',
    })
    setActive(href)
  }

  useEffect(() => {
    const submenu = submenuRef.current
    if (!submenu) return

    gsap.to(submenu, {
      position: 'fixed',
      top: 136,
      left: 0,
      right: 0,
      zIndex: 50,
      duration: 0.4,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: submenu,
        start: 'top top',
        end: '+=1',
        scrub: true,
      },
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  useEffect(() => {
    items.forEach((item) => {
      const section = document.querySelector(item.href)
      if (!section) return

      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActive(item.href),
        onEnterBack: () => setActive(item.href),
      })
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [items])

  if (!items.length) return null

  return (
    <section ref={submenuRef} className="border-b border-b-gray-300 bg-[#fcf9f9]">
      <div className="container mx-auto">
        <div className="relative xl:pl-[25%]">
          <ul className="scroll-snap-x-mandatory flex flex-nowrap justify-stretch overflow-x-auto">
            {items.map((item) => (
              <li
                key={item.href}
                className="scroll-snap-start md:scroll-snap-start w-auto flex-1 border-r border-r-gray-300 lg:w-full">
                <Link
                  href={item.href}
                  scroll={false}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`text-brand-100 flex h-full items-center justify-center px-4 py-2 font-medium transition lg:text-lg ${active === item.href ? 'border-b-brand-300 border-b-2' : 'border-b-2 border-b-transparent'}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

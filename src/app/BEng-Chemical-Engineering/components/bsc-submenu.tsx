'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useRef, useState } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const submenuData = [
  { id: 1, label: 'Overview', href: '#overview' },
  { id: 2, label: 'Entry Requirements', href: '#entry-requirements' },
  { id: 3, label: 'Study Plan', href: '#study-plan' },
  { id: 4, label: 'Total Tuition Fees', href: '#total-tuition' },
  { id: 5, label: 'Career and Skills', href: '#career-skills' },
  { id: 6, label: 'FAQ', href: '#faq' },
  { id: 7, label: 'Next Steps', href: '#next-steps' },
]

export default function SubmenuBeng() {
  const submenuRef = useRef(null)
  const [activeTab, setActiveTab] = useState('#overview')

  // ---------------------------------------------------------
  // Smooth scroll handler
  // ---------------------------------------------------------
  const handleSmoothScroll = (e: any, href: string) => {
    e.preventDefault()

    const target = document.querySelector(href)
    if (!target) return

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: target,
        offsetY: 200,
      },
      ease: 'power3.out',
    })

    setActiveTab(href)
  }

  // ---------------------------------------------------------
  // Sticky submenu with GSAP
  // ---------------------------------------------------------
  useEffect(() => {
    const submenu = submenuRef.current

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

  // ---------------------------------------------------------
  // Activate tab on scroll
  // ---------------------------------------------------------
  useEffect(() => {
    submenuData.forEach((item) => {
      const section = document.querySelector(item.href)

      if (!section) return

      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveTab(item.href),
        onEnterBack: () => setActiveTab(item.href),
      })
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  // ---------------------------------------------------------
  // JSX OUTPUT
  // ---------------------------------------------------------
  return (
    <>
      <section
        ref={submenuRef}
        className="border-b border-b-gray-300 bg-[#fcf9f9]">
        <div className="container mx-auto">
          <div className="relative xl:pl-[25%]">
            <ul className="scroll-snap-x-mandatory flex flex-nowrap justify-stretch overflow-x-auto">
              {submenuData.map((item, index) => (
                <li
                  key={index}
                  className="scroll-snap-start md:scroll-snap-start w-auto flex-1 border-r border-r-gray-300 lg:w-full">
                  <Link
                    href={item.href}
                    scroll={false}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`text-brand-100 flex h-full items-center justify-center px-4 py-2 font-medium transition lg:text-lg ${activeTab === item.href ? 'border-b-brand-300 border-b-2' : 'border-b-2 border-b-transparent'}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

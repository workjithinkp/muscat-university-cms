'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

import Link from 'next/link'
import Image from 'next/image'

const submenuData = [
  { id: 1, label: 'What We Do', href: '#what-do' },
  { id: 2, label: 'Our Mission and Vision', href: '#mission-vision' },
  { id: 3, label: 'Meet the Council', href: '#meet-council' },
  { id: 4, label: 'Recent Initiatives', href: '#recent-initiatives' },
  { id: 5, label: 'Get Involved', href: '#get-involved' },
  {
    id: 6,
    label: 'Share Your Voice',
    href: '#share-voice',
  },
  { id: 7, label: 'A Message from the Council', href: '#message-council' },
]

export default function InternationalMenu() {
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

  return (
    <>
      <section
        ref={submenuRef}
        className="border-b border-b-gray-300 bg-[#fcf9f9]">
        <div className="container mx-auto">
          <div className="">
            <ul className="flex">
              {submenuData.map((item, index) => (
                <li key={index} className="flex-1 border-x border-x-gray-300">
                  <Link
                    href={item.href}
                    scroll={false}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`text-brand-100 hover:text-brand-300 flex h-full items-center justify-center px-4 py-2 text-lg font-medium transition hover:bg-gray-100 ${activeTab === item.href ? 'border-b-brand-300 text-brand-300 border-b-2' : 'text-brand-100 border-b-2 border-b-transparent'}`}>
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

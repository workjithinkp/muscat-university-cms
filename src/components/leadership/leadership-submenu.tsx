'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export default function LeadershipMenu() {
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const [activeTab, setActiveTab] = useState('#section-01')

  // SINGLE SOURCE OF TRUTH (Dynamic Data)
  const menuItems = [
    { href: '#section-01', label: 'Board of Trustees' },
    { href: '#section-02', label: 'Senior Management' },
    { href: '#section-03', label: 'Leadership' },
    { href: '#section-04', label: 'Management Team' },
  ]

  // ------------------------------------------------------------
  // Smooth Scroll Handler
  // ------------------------------------------------------------
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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

  // ------------------------------------------------------------
  // Sticky Sidebar
  // ------------------------------------------------------------
  useEffect(() => {
    const sidebar = sidebarRef.current
    if (!sidebar) return

    const trigger = ScrollTrigger.create({
      trigger: sidebar,
      start: 'top 136',
      endTrigger: '#content-wrapper',
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
    })

    return () => trigger.kill()
  }, [])

  // ------------------------------------------------------------
  // Activate Tabs on Scroll (Dynamic)
  // ------------------------------------------------------------
  useEffect(() => {
    const triggers: ScrollTrigger[] = []

    menuItems.forEach((item) => {
      const section = document.querySelector(item.href)
      if (!section) return

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveTab(item.href),
        onEnterBack: () => setActiveTab(item.href),
      })

      triggers.push(trigger)
    })

    return () => triggers.forEach((t) => t.kill())
  }, [])

  return (
    <>
      <div ref={sidebarRef} className="sticky flex flex-col">
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
          <h3 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
            Board Members
          </h3>
        </div>

        <div className="border-s-brand-300 border-brand-100/25 border-[1px] border-s-2">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`border-b-brand-100/25 flex border-b-1 px-3 py-3 text-lg font-medium transition ${
                activeTab === item.href
                  ? 'text-brand-300'
                  : 'text-brand-100 hover:text-brand-300'
              }`}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

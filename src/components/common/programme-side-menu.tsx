'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const programmes = [
  { title: 'BEng Chemical Engineering', href: '/BEng-Chemical-Engineering' },
  { title: 'BEng Digital and Software Engineering', href: '#' },
  { title: 'BEng Energy Engineering', href: '#' },
  { title: 'BSc Accounting and Finance', href: '#' },
  { title: 'BSc Business and Management', href: '#' },
  { title: 'BSc Cybersecurity and Cyber Forensics', href: '#' },
  { title: 'BSc Digital Marketing', href: '#' },
  { title: 'BSc Global Entrepreneurship and New Ventures', href: '#' },
  { title: 'BSc in Data Science and Artificial Intelligence', href: '#' },
  { title: 'BSc Logistics with Supply Chain Management', href: '#' },
  { title: 'BSc Logistics with Transport Management', href: '#' },
  {
    title: 'BSc Sustainable Port and Shipping Management',
    href: '/Bsc-Port-Shipping-Management',
  },
]
export default function ProgrammeNav() {
  const pathname = usePathname()
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!listRef.current) return
    const items = listRef.current.querySelectorAll('li')

    gsap.fromTo(
      items,
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.out',
      }
    )
  }, [])

  return (
    <>
      <div className="">
        <div className="text-brand-100 border-brand-100/25 border-1 px-4 py-4 text-2xl font-medium">
          Programmes
        </div>
        <div className="border-r-brand-100/25 border-l-brand-300 border-b-brand-100/25 border-r-1 border-b-1 border-l-2">
          <ul ref={listRef}>
            {programmes.map((item, index) => {
              const isActive = pathname === item.href
              const isFirst = index === 0

              const noActiveFound = !programmes.some((p) => pathname === p.href)
              const firstShouldHighlight =
                isFirst && (isActive || noActiveFound)

              return (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={`border-b-brand-100/25 flex border-b-1 px-3 py-3 text-lg font-medium transition ${
                      isActive || firstShouldHighlight
                        ? 'text-brand-300'
                        : 'text-brand-100'
                    } hover:text-brand-300`}>
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

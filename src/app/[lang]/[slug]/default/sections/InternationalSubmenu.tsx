'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export interface SubmenuItem {
    label: string
    href: string
}

interface InternationalSubmenuProps {
    items: SubmenuItem[]
}

export default function InternationalSubmenu({ items }: InternationalSubmenuProps) {
    const submenuRef = useRef<HTMLDivElement | null>(null)
    const [activeTab, setActiveTab] = useState(items[0]?.href || '')

    // ---------------------------------------------------------
    // Smooth scroll handler
    // ---------------------------------------------------------
    const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        event.preventDefault()

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
                start: 'top top+=136',
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
        items.forEach((item) => {
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
    }, [items])

    if (!items || items.length === 0) return null

    return (
        <section ref={submenuRef} className="border-b border-b-gray-300 bg-[#fcf9f9]">
            <div className="container mx-auto">
                <div className="">
                    <ul className="flex">
                        {items.map((item, index) => (
                            <li key={index} className="flex-1 border-x border-x-gray-300">
                                <Link
                                    href={item.href}
                                    scroll={false}
                                    onClick={(e) => handleSmoothScroll(e, item.href)}
                                    className={`text-brand-100 hover:text-brand-300 flex h-full items-center justify-center px-4 py-2 text-lg font-medium transition hover:bg-gray-100 ${activeTab === item.href ? 'border-b-brand-300 text-brand-300 border-b-2' : 'text-brand-100 border-b-2 border-b-transparent'}`}
                                >
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

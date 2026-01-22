'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTopFloating() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true)
      else setVisible(false)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`fixed right-2 bottom-2 z-50 transition-opacity duration-500 lg:right-6 lg:bottom-6 ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'} `}>
      <Button
        onClick={scrollToTop}
        size="icon"
        className="bg-brand-300/90 hover:bg-brand-300 h-12 w-12 cursor-pointer rounded-full border border-white/30 shadow-lg backdrop-blur-md transition-all hover:scale-105">
        <ArrowUp className="h-5 w-5 animate-bounce text-white" />
      </Button>
    </div>
  )
}

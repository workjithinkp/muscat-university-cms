'use client'

// @ts-ignore: no type definitions for 'aos'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function YourComponent() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // animate only once
    })
  }, [])

  return null
}

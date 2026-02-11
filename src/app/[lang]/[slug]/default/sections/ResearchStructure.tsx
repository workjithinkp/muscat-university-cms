'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { PageSection } from '@/lib/api'

interface ResearchStructureProps {
  section: PageSection
}

// Register the plugin once at module level (safe)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ResearchStructure({ section }: ResearchStructureProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const title = section.block?.c_1
  const leftHtml = section.block?.c_2 || ''
  const rightHtml = section.block?.c_3 || ''

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!svgRef.current) return

      const arrowPath = svgRef.current.querySelector(
        '.arrow-path'
      ) as SVGPathElement | null
      const circles = svgRef.current.querySelectorAll(
        '.circle'
      ) as NodeListOf<SVGCircleElement>

      if (!arrowPath || circles.length === 0) return

      // Line draw
      const length = arrowPath.getTotalLength()
      gsap.set(arrowPath, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })

      gsap.set(circles, {
        x: -50,
        scale: 0,
        transformOrigin: 'center center',
      })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: svgRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        })
        .to(arrowPath, { strokeDashoffset: 0, duration: 2, ease: 'power2.out' })
        .to(
          circles,
          { x: 0, scale: 1, duration: 1, ease: 'bounce.out', stagger: 0.15 },
          '-=0.5'
        )
    }, svgRef)

    // Cleanup on unmount
    return () => ctx.revert()
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto">
        {title ? (
          <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
            {title}
          </h2>
        ) : null}
        <div className="relative mx-auto w-full max-w-[1000px]">
          <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 946.71 655.77">
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0"
                y1="327.89"
                x2="946.71"
                y2="327.89"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#21a5de" />
                <stop offset="1" stopColor="#005d9b" />
              </linearGradient>
            </defs>

            <g>
              <path
                className="arrow-path"
                d="M701.15,213.48c0-.1,0-.21,0-.32-.47-6.18-2.79-7.68-8.57-8.75-12.94-2.41-31.41-3.18-44.92-4.07-98.98-6.54-201.97,2.42-295.67,36.3-4.23,1.53-8.44,3.11-12.62,4.73-79.35,30.84-150.48,80.54-206.13,144.93-7.49,8.66-13.18,16.09-20,25-7.68,10.03-14.9,19.39-22,30-6.6,9.86-11.97,18.85-18,29-5.15,8.68-9.25,16.09-14,25-6.27,11.76-11.41,21.81-17,34-5.09,11.11-9.5,21.67-14,33-4.24,10.67-8.26,21.09-12,32-3.61,10.53-7.51,22.02-10.71,32.65.37-4.24.43-6.53.71-8.66,2.07-15.69,5.49-31.57,9-46.99s7.79-31.12,12.35-46.63c2.91-9.89,6.08-19.69,9.35-29.46,2.66-7.94,5.26-16.15,8.29-23.89s6.57-16.24,10-24c5.38-12.17,11.88-24.18,18-36,5.76-11.13,11.56-22.24,18-33,5.31-8.87,11.22-17.43,17-26,49.6-73.59,115.36-134.85,192.83-178.43,7.64-4.3,15.34-8.54,23.14-12.55,88.45-45.44,186.74-71.3,285.49-80.91,31.24-3.04,62.78-2.28,93.87-6.17,8.53-1.06,7.64-4.88,8.59-11.91l5.2-57.63c.13-1.46,1.81-2.2,2.99-1.33,14.47,10.67,29.95,19.9,44.81,29.97,19.03,12.9,37.96,26.07,56.99,39,12.3,8.36,24.71,16.63,37,25,11.28,7.68,22.74,15.33,34,23,9.27,6.32,18.71,12.68,28,19,7.19,4.89,14.34,10.88,21.75,15.88,1.24.84,1.06,2.71-.32,3.28-8.77,3.63-29.84,14.61-34.43,16.83-11.34,5.48-23.1,10.32-33.87,16.92-.08.05-.17.1-.26.13-13.89,5.46-27.35,12.47-40.86,18.94-14.36,6.88-28.64,14.1-42.99,21-20.01,9.61-39.97,19.42-59.99,29-10.89,5.21-22.01,9.98-32.52,15.98-1.65.24-1.6.08-1.49-1.48l5.01-62.33Z"
                fill="#2bace2"
                stroke="url(#linear-gradient)"
                strokeWidth="6"
                strokeMiterlimit="10"
              />

              <path
                className="circle"
                d="M575.91,117.57c23.98-4.03,35.47,29.67,13.3,40.29-30.18,14.46-44.15-35.11-13.3-40.29Z"
                fill="#fff"
              />

              <path
                className="circle"
                d="M503.96,131.58c27.33-3.35,29.52,37.75,3.68,38.77s-27.46-35.86-3.68-38.77Z"
                fill="#fff"
              />

              <path
                className="circle"
                d="M433.97,146.58c27.33-3.35,29.52,37.75,3.68,38.77s-27.46-35.86-3.68-38.77Z"
                fill="#fff"
              />

              <path
                className="circle"
                d="M364.97,166.58c27.33-3.35,29.52,37.75,3.68,38.77-24.78.98-27.46-35.86-3.68-38.77Z"
                fill="#fff"
              />

              <path
                className="circle"
                d="M154.97,309.55c25.87-4.39,24.86,36.24.2,31.31-17.1-3.42-16.88-28.48-.2-31.31Z"
                fill="#fff"
              />

              <path
                className="circle"
                d="M246.96,233.56c25.87-4.39,24.86,36.24.2,31.31-17.1-3.42-16.88-28.48-.2-31.31Z"
                fill="#fff"
              />

              <path
                className="circle"
                d="M196.96,269.56c25.87-4.39,24.86,36.24.2,31.31-17.1-3.42-16.88-28.48-.2-31.31Z"
                fill="#fff"
              />

              <path
                className="circle"
                d="M303.95,197.57c25.87-4.39,24.86,36.24.2,31.31-17.1-3.42-16.88-28.48-.2-31.31Z"
                fill="#fff"
              />

              <path
                className="circle"
                d="M115.94,355.52c24.13-5.53,23.81,30.71,2.05,27.57-15.41-2.22-14.35-24.75-2.05-27.57Z"
                fill="#f7fcfe"
              />

              <path
                className="circle"
                d="M89.99,399.51c16.19-2.67,19.38,22.23,3.62,23.73-15.54,1.47-18.03-21.36-3.62-23.73Z"
                fill="#feffff"
              />

              <path
                className="circle"
                d="M64.97,443.49c8.22-1.81,16.51,8.06,9.27,15.3-12.2,12.22-23.24-12.22-9.27-15.3Z"
                fill="#fcfeff"
              />

              <path
                className="circle"
                d="M44.99,491.44c9.4-1.69,11.11,13.23,1.69,13.83-8.29.53-10.1-12.32-1.69-13.83Z"
                fill="#f9fdfe"
              />

              <path
                className="circle"
                d="M33,534.53c4.09,4.09-2.4,10.59-6.5,6.5-4.09-4.09,2.4-10.59,6.5-6.5Z"
                fill="#f7fcfe"
              />
            </g>
          </svg>
          <div className="absolute inset-0">
            {leftHtml ? (
              <div
                className="absolute top-0 right-[40%] w-[750px]"
                dangerouslySetInnerHTML={{ __html: leftHtml }}
              />
            ) : null}
            {rightHtml ? (
              <div
                className="absolute top-[250px] left-[10%] w-[750px]"
                dangerouslySetInnerHTML={{ __html: rightHtml }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { CourseListItem } from '@/lib/api'

interface Props {
  courses: CourseListItem[]
}

export default function CoursesMenu({ courses }: Props) {
  const pathname = usePathname()
  const params = useParams()
  const lang = params.lang as string
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!listRef.current) return
    const items = listRef.current.querySelectorAll('li')

    gsap.fromTo(
      items,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.out',
      }
    )
  }, [courses])

  if (!courses.length) return null

  return (
    <div>
       <div className="text-brand-100 border-brand-100/25 border-1 px-4 py-4 text-2xl font-medium">
          Programmes
        </div>
      <div className="border-r-brand-100/25 border-l-brand-300 border-b-brand-100/25 border-r-1 border-b-1 border-l-2">
        <ul ref={listRef}>
          {courses.map((course) => {
            const courseHref = `/${lang}/${course.slug}`
            const isActive = pathname === courseHref

            return (
              <li key={course.id}>
                <Link
                  href={courseHref}
                  className={`border-b-brand-100/25 flex border-b-1 px-3 py-3 text-lg font-medium transition ${
                    isActive ? 'text-brand-300' : 'text-brand-100'
                  } hover:text-brand-300`}>
                  {course.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

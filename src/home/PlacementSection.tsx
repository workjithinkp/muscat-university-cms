'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { LuArrowUpRight } from 'react-icons/lu'

gsap.registerPlugin(ScrollTrigger)

const factsData = [
  {
    icon: '/images/facts-icon-01.png',
    count: 130,
    suffix: '+',
    label: 'Students placed',
  },
  {
    icon: '/images/facts-icon-02.png',
    count: 57,
    suffix: '%',
    label: 'Placement to-job conversion rate',
  },
  {
    icon: '/images/facts-icon-03.png',
    count: 43,
    suffix: '',
    label: 'Partners in the industries',
  },
]

export default function PlacementSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Animate images with stagger on scroll
  useEffect(() => {
    const images = containerRef.current?.querySelectorAll('.animate-image')

    if (!images || images.length === 0) return

    gsap.fromTo(
      images,
      { opacity: 0, y: 50, filter: 'blur(2px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0)',
        duration: 1,
        ease: 'power3.out',
        stagger: 0.25,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: true,
          toggleActions: 'play none none none',
        },
      }
    )

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <>
      <section className="pt-9 pb-9 lg:pt-18 lg:pb-18">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="">
              <div
                className="max-w-[600px] pt-4"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <h2
                  data-words-slide-right
                  className="text-brand-100 text-3xl leading-none font-bold lg:text-5xl">
                  UNDERGRADUATE DEGREE ENHANCED BY A FULL PLACEMENT YEAR
                </h2>
                <div className="bg-brand-300 mt-6 mb-6 h-[2px] max-w-[275px]"></div>
                <p data-words-slide-right className="text-lg text-gray-950">
                  The placement year at Muscat University isn&apos;t just an
                  option - it&apos;s a stepping stone to your future. We ensure
                  every BSc student gains hands-on experience by working with
                  some of the country&apos;s top corporates. This immersive year
                  bridges classroom learning with real-world challenges, helping
                  students develop professional skills, industry insights, and a
                  network that will last a lifetime.
                </p>
                <Link
                  className="group bg-brand-200 hover:bg-brand-300 mt-8 inline-flex flex-1 text-white transition duration-300"
                  href="/">
                  <span className="flex-1 px-4 py-3 text-xl group-hover:text-white">
                    Explore Programmes
                  </span>
                  <span className="border-brand-200 flex flex-0 items-center justify-center border-l-[1px] px-4 py-3 text-xl group-hover:border-white group-hover:text-white">
                    <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="" ref={containerRef}>
              <div className="grid grid-cols-1 gap-1">
                <div className="grid grid-cols-[40%_60%] gap-1">
                  <div className="animate-image">
                    <Image
                      src="/images/placement-thumb-01.jpg"
                      alt="Welcome Pic"
                      width={280}
                      height={320}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="animate-image">
                    <Image
                      src="/images/placement-thumb-02.jpg"
                      alt="Welcome Pic"
                      width={390}
                      height={320}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-[55%_45%] gap-1">
                  <div className="animate-image">
                    <Image
                      src="/images/placement-thumb-03.jpg"
                      alt="Welcome Pic"
                      width={345}
                      height={190}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="animate-image">
                    <Image
                      src="/images/placement-thumb-04.jpg"
                      alt="Welcome Pic"
                      width={330}
                      height={190}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 mb-12 h-[1px] bg-gray-400"></div>

          {/* Facts Section */}
          <div className="-mx-3 flex flex-wrap">
            {factsData.map((item, index) => (
              <React.Fragment key={index}>
                {/* Each Fact Item */}
                <div className="w-full px-3 lg:flex-1">
                  <div
                    className="group m-auto max-w-[200px]"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    data-aos-duration="1500">
                    <div className="relative mx-auto mb-4 h-[72px] w-[72px] lg:h-[90px] lg:w-[90px]">
                      <div className="bg-brand-200 absolute inset-0 scale-0 rounded-full transition duration-300 group-hover:scale-120"></div>
                      <div className="relative">
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={90}
                          height={90}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="text-brand-100 mb-4 text-center text-6xl leading-none font-medium lg:text-7xl">
                      <span className="count-num" data-count={item.count}>
                        0
                      </span>
                      {item.suffix}
                    </div>

                    <div className="text-center text-lg leading-none font-medium text-gray-950 lg:text-2xl">
                      {item.label}
                    </div>
                  </div>
                </div>

                {/* separator */}
                {index !== factsData.length - 1 && (
                  <div className="my-12 h-[3px] w-full bg-[#eb5135] lg:my-0 lg:mt-8 lg:h-[150px] lg:w-[3px]"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

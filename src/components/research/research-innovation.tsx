'use client'

import { useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Register the plugin once at module level (safe)
gsap.registerPlugin(ScrollTrigger)

const innovationData = [
  {
    id: 1,
    img: '/images/research-innovation-01.jpg',
    title: 'Establish Research Priorities',
    description:
      'Define key and unique research areas of strategic values aligned with our institution strengths and having potential national impact as reference to Oman vision 2040.',
  },
  {
    id: 2,
    img: '/images/research-innovation-02.jpg',
    title: 'Establish Core Research Teams and Recruit Talent',
    description:
      'Assemble and support interdisciplinary collaborations and multidisciplinary research teams. Recruit top-tier researchers and experts to enrich these teams.',
  },
  {
    id: 3,
    img: '/images/research-innovation-03.jpg',
    title: 'Build Collaborative Networks',
    description:
      'Strengthen collaborations with other research national and international institutions and forge strategic partnerships with industry.',
  },
  {
    id: 4,
    img: '/images/research-innovation-04.jpg',
    title: 'Secure Funding',
    description:
      'It is important to diversify the research funding resources whether external or internal grants.',
  },
  {
    id: 5,
    img: '/images/research-innovation-01.jpg',
    title: 'Establish Research Priorities',
    description:
      'Define key and unique research areas of strategic values aligned with our institution strengths and having potential national impact as reference to Oman vision 2040.',
  },
  {
    id: 6,
    img: '/images/research-innovation-02.jpg',
    title: 'Establish Core Research Teams and Recruit Talent',
    description:
      'Assemble and support interdisciplinary collaborations and multidisciplinary research teams. Recruit top-tier researchers and experts to enrich these teams.',
  },
  {
    id: 7,
    img: '/images/research-innovation-03.jpg',
    title: 'Build Collaborative Networks',
    description:
      'Strengthen collaborations with other research national and international institutions and forge strategic partnerships with industry.',
  },
  {
    id: 8,
    img: '/images/research-innovation-04.jpg',
    title: 'Secure Funding',
    description:
      'It is important to diversify the research funding resources whether external or internal grants.',
  },
]

export default function ResearchInnovation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.innovation-swiper .swiper-slide',
        {
          opacity: 0,
          x: 100,
          rotate: '5deg',
          filter: 'blur(6px)',
        },
        {
          opacity: 1,
          x: 0,
          rotate: '0',
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power3.out',
          stagger: {
            each: 0.1,
            from: 'start',
          },
          scrollTrigger: {
            trigger: '.innovation-swiper',
            start: 'top 80%',
            once: true,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section className="bg-brand-100 relative overflow-hidden pt-20 pb-20">
        <div className="container mx-auto">
          <div className="mb-4 lg:mb-20">
            <h3 className="after:bg-brand-300 text-brand-100 relative mb-4 pb-4 text-center text-3xl font-medium text-white uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:mx-auto after:h-[3px] after:w-[80px] after:content-['']">
              Research and Innovation Strategy
            </h3>
          </div>
          <Swiper
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1500}
            spaceBetween={20}
            observer={true}
            observeParents={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            navigation={{
              prevEl: '.innovation-button-prev',
              nextEl: '.innovation-button-next',
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="innovation-swiper group/swiper">
            {innovationData.map((item, index) => (
              <SwiperSlide
                className="group/slide"
                key={`innovation-${item.id}-${index}`}>
                <div className="relative transition duration-300">
                  <div className="relative overflow-hidden bg-black">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={350}
                      height={220}
                      className="w-full transition duration-300 group-hover/slide:scale-110 group-hover/slide:!opacity-100 group-hover/swiper:opacity-50"
                    />
                  </div>

                  <div className="px-4 py-4">
                    <h3 className="mb-4 text-xl font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="text-white">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

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
    img: '/images/research-partner-logo-01.jpg',
    alt: 'Logo Name',
  },
  {
    id: 2,
    img: '/images/research-partner-logo-02.jpg',
    alt: 'Logo Name',
  },
  {
    id: 3,
    img: '/images/research-partner-logo-03.jpg',
    alt: 'Logo Name',
  },
  {
    id: 4,
    img: '/images/research-partner-logo-04.jpg',
    alt: 'Logo Name',
  },
  {
    id: 5,
    img: '/images/research-partner-logo-05.jpg',
    alt: 'Logo Name',
  },
  {
    id: 6,
    img: '/images/research-partner-logo-06.jpg',
    alt: 'Logo Name',
  },
  {
    id: 7,
    img: '/images/research-partner-logo-01.jpg',
    alt: 'Logo Name',
  },
  {
    id: 8,
    img: '/images/research-partner-logo-02.jpg',
    alt: 'Logo Name',
  },
  {
    id: 9,
    img: '/images/research-partner-logo-03.jpg',
    alt: 'Logo Name',
  },
  {
    id: 10,
    img: '/images/research-partner-logo-04.jpg',
    alt: 'Logo Name',
  },
  {
    id: 11,
    img: '/images/research-partner-logo-05.jpg',
    alt: 'Logo Name',
  },
  {
    id: 12,
    img: '/images/research-partner-logo-06.jpg',
    alt: 'Logo Name',
  },
]

export default function ResearchPartner() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.partner-swiper .swiper-slide',
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
      <section className="relative overflow-hidden pt-18 pb-18">
        <div className="container mx-auto">
          <div className="mb-4 lg:mb-20">
            <h3 className="after:bg-brand-300 text-brand-100 relative mb-4 pb-4 text-center text-3xl font-medium uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:mx-auto after:h-[3px] after:w-[80px] after:content-['']">
              our partners
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
              0: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 5 },
              1200: { slidesPerView: 6 },
            }}
            navigation={{
              prevEl: '.partner-button-prev',
              nextEl: '.partner-button-next',
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="partner-swiper group" // 👈 important
          >
            {innovationData.map((item, index) => (
              <SwiperSlide key={`innovation-${item.id}-${index}`}>
                <div className="relative max-w-[275px] transition duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      width={275}
                      height={100}
                      className="w-full transition duration-300 group-hover:blur-[2px] hover:!blur-none"
                    />
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

'use client'

import Image from 'next/image'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { PageSection, resolveImageUrl } from '@/lib/api'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

interface ResearchPartnerProps {
  section: PageSection
}

gsap.registerPlugin(ScrollTrigger)

export default function ResearchPartner({ section }: ResearchPartnerProps) {
  const title = section.block?.c_1
  const items = section.list || []

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
            trigger: '.partner-swiper',
            start: 'top 80%',
            once: true,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  if (!title && items.length === 0) {
    return null
  }

  return (
    <section className="relative overflow-hidden pt-18 pb-18">
      <div className="container mx-auto">
        {title ? (
          <div className="mb-4 lg:mb-20">
            <h3 className="after:bg-brand-300 text-brand-100 relative mb-4 pb-4 text-center text-3xl font-medium uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:mx-auto after:h-[3px] after:w-[80px] after:content-['']">
              {title}
            </h3>
          </div>
        ) : null}
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
          className="partner-swiper group">
          {items.map((item, index) => {
            const imageSrc = resolveImageUrl(item.i_1)

            return (
              <SwiperSlide key={item.id ?? index}>
                <div className="relative max-w-[275px] transition duration-300">
                  <div className="relative overflow-hidden">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={item.c_1 || 'Partner logo'}
                        width={275}
                        height={100}
                        className="w-full transition duration-300 group-hover:blur-[2px] hover:!blur-none"
                      />
                    ) : null}
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

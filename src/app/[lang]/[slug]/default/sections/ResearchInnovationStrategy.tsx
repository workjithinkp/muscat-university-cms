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

interface ResearchInnovationStrategyProps {
  section: PageSection
}

gsap.registerPlugin(ScrollTrigger)

export default function ResearchInnovationStrategy({
  section,
}: ResearchInnovationStrategyProps) {
  const title = section.block?.c_1
  const items = section.list || []

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

  if (!title && items.length === 0) {
    return null
  }

  return (
    <section className="bg-brand-100 relative overflow-hidden pt-20 pb-20">
      <div className="container mx-auto">
        {title ? (
          <div className="mb-4 lg:mb-20">
            <h3 className="after:bg-brand-300 text-brand-100 relative mb-4 pb-4 text-center text-3xl font-medium text-white uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:mx-auto after:h-[3px] after:w-[80px] after:content-['']">
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
          {items.map((item, index) => {
            const imageSrc = resolveImageUrl(item.i_1)
            const descriptionHtml = item.c_2 || ''

            return (
              <SwiperSlide className="group/slide" key={item.id ?? index}>
                <div className="relative transition duration-300">
                  <div className="relative overflow-hidden bg-black">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={item.c_1 || 'Innovation'}
                        width={350}
                        height={220}
                        className="w-full transition duration-300 group-hover/slide:scale-110 group-hover/slide:!opacity-100 group-hover/swiper:opacity-50"
                      />
                    ) : null}
                  </div>

                  <div className="px-4 py-4">
                    {item.c_1 ? (
                      <h3 className="mb-4 text-xl font-medium text-white">
                        {item.c_1}
                      </h3>
                    ) : null}
                    {descriptionHtml ? (
                      <div
                        className="text-white"
                        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
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

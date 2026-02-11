'use client'

import Image from 'next/image'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { PageData, PageSection, resolveImageUrl } from '@/lib/api'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

// Import required modules
import { Autoplay, Navigation } from 'swiper/modules'

interface ResearchHighlightsProps {
  section: PageSection
  page?: PageData
}

gsap.registerPlugin(ScrollTrigger)

export default function ResearchHighlights({
  section,
  page,
}: ResearchHighlightsProps) {
  const items = section.list || []
  const title = section.block?.c_1
  const tagLabel = page?.title || page?.name || 'Research'

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.research-swiper .swiper-slide',
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
            trigger: '.research-swiper',
            start: 'top 85%',
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
    <section className="relative overflow-hidden pt-10 pb-10 lg:pt-18">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 xl:mb-12">
          <div>
            {title ? (
              <h2
                className="text-brand-100 text-3xl font-medium lg:text-4xl"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <span className="after:bg-brand-300 relative inline-block pb-4 uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[3px] after:content-['']">
                  {title}
                </span>
              </h2>
            ) : null}
          </div>
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
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: '.research-button-prev',
            nextEl: '.research-button-next',
          }}
          modules={[Autoplay, Navigation]}
          className="research-swiper">
          {items.map((item, index) => {
            const imageSrc = resolveImageUrl(item.i_1)
            const descriptionHtml = item.c_3 || item.c_2 || ''

            return (
              <SwiperSlide key={item.id ?? index}>
                <div className="group relative transition duration-300 hover:bg-[#f6f6f6]">
                  <div>
                    <div className="relative overflow-hidden bg-black">
                      {imageSrc ? (
                        <Image
                          src={imageSrc}
                          alt={item.c_1 || 'Research highlight'}
                          width={475}
                          height={315}
                          className="w-full transition duration-300 group-hover:scale-[1.1]"
                        />
                      ) : null}
                      {tagLabel ? (
                        <div className="bg-brand-100 absolute top-[1rem] left-[1rem] z-10 px-4 py-2 text-white uppercase">
                          {tagLabel}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="px-4 py-4">
                    <div className="mb-2">
                      {item.c_1 ? (
                        <h3 className="mb-4 line-clamp-2 text-xl leading-none font-medium text-gray-950">
                          {item.c_1}
                        </h3>
                      ) : null}
                      {descriptionHtml ? (
                        <div
                          className="text-gray-800"
                          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                        />
                      ) : null}
                    </div>
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

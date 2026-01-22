'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

// Import required modules
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules'

const whyData = [
  {
    id: 1,
    icon: '/images/why-icon-01.png',
    alt: 'Icon',
    title: 'Professionally Accredited Programmes',
    description:
      'Our degrees are recognised by leading professional bodies including CMI, ACCA, and CII — giving students both academic and professional qualifications.',
  },
  {
    id: 2,
    icon: '/images/why-icon-02.png',
    alt: 'Icon',
    title: 'Only Logistics Faculty in Oman',
    description:
      'The only dedicated Logistics and Supply Chain Faculty in Oman, offering programmes accredited by both CIPS and CILT, and embedding Green Six Sigma certification across our programmes.',
  },
  {
    id: 3,
    icon: '/images/why-icon-03.png',
    alt: 'Icon',
    title: '72%+ Graduate Employability Rate',
    description:
      'Over 72% of MU graduates are employed or pursuing further studies within six months of graduation, reflecting strong industry partnerships and career-focused teaching.',
  },
  {
    id: 4,
    icon: '/images/why-icon-04.png',
    alt: 'Icon',
    title: 'Industry-Relevant, Future-Ready Curriculum',
    description:
      'Designed in consultation with industry leaders to meet national priorities and future workforce needs.',
  },
  {
    id: 5,
    icon: '/images/why-icon-01.png',
    alt: 'Icon',
    title: 'Professionally Accredited Programmes',
    description:
      'Our degrees are recognised by leading professional bodies including CMI, ACCA, and CII — giving students both academic and professional qualifications.',
  },
  {
    id: 6,
    icon: '/images/why-icon-02.png',
    alt: 'Icon',
    title: 'Only Logistics Faculty in Oman',
    description:
      'The only dedicated Logistics and Supply Chain Faculty in Oman, offering programmes accredited by both CIPS and CILT, and embedding Green Six Sigma certification across our programmes.',
  },
  {
    id: 7,
    icon: '/images/why-icon-03.png',
    alt: 'Icon',
    title: '72%+ Graduate Employability Rate',
    description:
      'Over 72% of MU graduates are employed or pursuing further studies within six months of graduation, reflecting strong industry partnerships and career-focused teaching.',
  },
  {
    id: 8,
    icon: '/images/why-icon-04.png',
    alt: 'Icon',
    title: 'Industry-Relevant, Future-Ready Curriculum',
    description:
      'Designed in consultation with industry leaders to meet national priorities and future workforce needs.',
  },
]

export default function HeroSection() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.why-swiper  .swiper-slide',
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
            trigger: '.why-swiper',
            start: 'top 85%',
            once: true,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section className="relative overflow-hidden pt-10 pb-10 lg:pt-18 lg:pb-18">
        <div className="container mx-auto">
          <div
            className=""
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1500">
            <h2 className="text-brand-100 text-3xl font-bold uppercase lg:text-4xl">
              <span className="after:bg-brand-300 relative mb-6 inline-block pb-4 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[3px] after:content-[''] xl:mb-8 xl:pb-8">
                Why MU?
              </span>
            </h2>
          </div>
        </div>
        <div className="ps-[calc((100vw-1460px)/2)]">
          <div className="relative">
            <Swiper
              loop={true}
              slidesPerView="auto"
              spaceBetween={20}
              speed={1500}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: '.why-button-prev',
                nextEl: '.why-button-next',
              }}
              scrollbar={{
                el: '.swiper-scrollbar',
                hide: false,
                draggable: true,
              }}
              modules={[Autoplay, Navigation, Scrollbar]}
              className="why-swiper">
              {whyData.map((item, index) => (
                <SwiperSlide className="!h-auto max-w-[425px]" key={index}>
                  <div className="team-item group relative h-full bg-[#f6f6f6] px-6 py-6 xl:px-12 xl:py-12">
                    <div className="relative mb-6 h-[90px] w-[90px]">
                      <div className="bg-brand-200 absolute inset-0 scale-0 rounded-full transition duration-300 group-hover:scale-120"></div>
                      <div className="relative">
                        <Image
                          src={item.icon}
                          alt={item.alt}
                          width={90}
                          height={90}
                          className="w-full transition-all duration-300 group-hover:scale-80"
                        />
                      </div>
                    </div>

                    <h3 className="text-brand-100 mb-4 pb-1 text-2xl leading-none font-medium">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-950">{item.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="relative mt-8">
              <div className="swiper-scrollbar"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

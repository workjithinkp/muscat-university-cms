'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import { LuArrowUpRight } from 'react-icons/lu'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

// Import required modules
import { Autoplay, Navigation } from 'swiper/modules'

const researchData = [
  {
    id: 1,
    img: '/images/research-thumb-01.jpg',
    tag: 'Research',
    alt: 'Icon',
    date: 'Jun 22, 2025',
    title:
      'MU researchers look to optimize special education services using AI',
    description:
      'Muscat University congratulates all graduates of undergraduate programs in partnership with Aston University. Wishing them all success in their careers and achieving more future achievements.',
  },
  {
    id: 2,
    img: '/images/research-thumb-02.jpg',
    tag: 'Research',
    alt: 'Icon',
    date: 'Jun 22, 2025',
    title:
      'MU researchers look to optimize special education services using AI',
    description:
      'Muscat University congratulates all graduates of undergraduate programs in partnership with Aston University. Wishing them all success in their careers and achieving more future achievements.',
  },
  {
    id: 3,
    img: '/images/research-thumb-03.jpg',
    tag: 'Research',
    alt: 'Icon',
    date: 'Jun 22, 2025',
    title:
      'MU researchers look to optimize special education services using AI',
    description:
      'Muscat University congratulates all graduates of undergraduate programs in partnership with Aston University. Wishing them all success in their careers and achieving more future achievements.',
  },
  {
    id: 4,
    img: '/images/research-thumb-01.jpg',
    tag: 'Research',
    alt: 'Icon',
    date: 'Jun 22, 2025',
    title:
      'MU researchers look to optimize special education services using AI',
    description:
      'Muscat University congratulates all graduates of undergraduate programs in partnership with Aston University. Wishing them all success in their careers and achieving more future achievements.',
  },
  {
    id: 5,
    img: '/images/research-thumb-02.jpg',
    tag: 'Research',
    alt: 'Icon',
    date: 'Jun 22, 2025',
    title:
      'MU researchers look to optimize special education services using AI',
    description:
      'Muscat University congratulates all graduates of undergraduate programs in partnership with Aston University. Wishing them all success in their careers and achieving more future achievements.',
  },
  {
    id: 6,
    img: '/images/research-thumb-03.jpg',
    tag: 'Research',
    alt: 'Icon',
    date: 'Jun 22, 2025',
    title:
      'MU researchers look to optimize special education services using AI',
    description:
      'Muscat University congratulates all graduates of undergraduate programs in partnership with Aston University. Wishing them all success in their careers and achieving more future achievements.',
  },
]

export default function ResearchSection() {
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

  return (
    <>
      <section className="relative overflow-hidden pt-10 pb-10 lg:pt-18">
        <div className="container mx-auto">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 xl:mb-12">
            <div>
              <h2
                className="text-brand-100 text-3xl font-medium lg:text-4xl"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <span className="after:bg-brand-300 relative inline-block pb-4 uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[3px] after:content-['']">
                  Research Highlights
                </span>
              </h2>
            </div>
            <div>
              <Link
                className="group inline-flex flex-1 border-1 border-gray-700 text-gray-950 transition duration-300 hover:border-[#08bed5] hover:bg-[#08bed5]"
                href="/">
                <span className="flex-1 px-4 py-2 group-hover:text-white">
                  Read all News
                </span>
                <span className="flex flex-0 items-center justify-center border-l-1 border-gray-700 px-4 py-2 text-xl group-hover:border-white group-hover:text-white">
                  <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
                </span>
              </Link>
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
            {researchData.map((item, index) => (
              <SwiperSlide className="" key={index}>
                <div className="group relative transition duration-300 hover:bg-[#f6f6f6]">
                  <div className="">
                    <div className="relative overflow-hidden bg-black">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        width={475}
                        height={315}
                        className="w-full transition duration-300 group-hover:scale-[1.1]"
                      />
                      <div className="bg-brand-100 absolute top-[1rem] left-[1rem] z-10 px-4 py-2 text-white uppercase">
                        {item.tag}
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-4">
                    <div className="mb-2">
                      <div className="text-brand-300 mb-2 font-medium uppercase">
                        {item.date}
                      </div>
                      <h3 className="mb-4 line-clamp-2 text-xl leading-none font-medium text-gray-950">
                        {item.title}
                      </h3>
                      <p className="line-clamp-3 text-gray-800">
                        {item.description}
                      </p>
                    </div>
                    <Link
                      className="hover:border-brand-300 hover:text-brand-300 inline-block border-b-[2px] border-gray-950 px-2 py-2 text-gray-950 transition duration-300"
                      href="#">
                      Read More
                    </Link>
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

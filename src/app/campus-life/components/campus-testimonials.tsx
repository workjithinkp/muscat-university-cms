'use client'

import { useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Register the plugin once at module level (safe)
gsap.registerPlugin(ScrollTrigger)

const testimonialData = [
  {
    id: 1,
    img: '/images/testimonial-item-01.jpg',
  },
  {
    id: 2,
    img: '/images/testimonial-item-02.jpg',
  },
  {
    id: 3,
    img: '/images/testimonial-item-03.jpg',
  },
  {
    id: 4,
    img: '/images/testimonial-item-01.jpg',
  },
  {
    id: 5,
    img: '/images/testimonial-item-02.jpg',
  },
  {
    id: 6,
    img: '/images/testimonial-item-03.jpg',
  },
]

export default function CampusTestimonials() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-swiper .swiper-slide',
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
            trigger: '.testimonial-swiper',
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
      <div className="relative px-[72px]">
        <h3 className="mb-4 text-2xl font-medium text-gray-950">
          Testimonials
        </h3>
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1500}
          spaceBetween={10}
          observer={true}
          observeParents={true}
          slidesPerView={'auto'}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: '.testimonial-button-prev',
            nextEl: '.testimonial-button-next',
          }}
          modules={[Autoplay, Navigation]}
          className="testimonial-swiper group/swiper">
          {testimonialData.map((item, index) => (
            <SwiperSlide
              className="group/slide"
              key={`testimonial-${item.id}-${index}`}>
              <div className="relative transition duration-300">
                <Image
                  src={item.img}
                  alt="Video"
                  width={210}
                  height={175}
                  className="w-full transition duration-300 group-hover/slide:!opacity-100 group-hover/swiper:opacity-50"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="testimonial-button-prev hover:bg-brand-100 hover:border-brand-100 0 absolute top-1/2 left-0 flex h-[48px] w-[48px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-[1px] text-gray-950 transition duration-300 hover:text-white">
          <BsChevronLeft />
        </div>
        <div className="testimonial-button-next hover:bg-brand-100 hover:border-brand-100 0 absolute top-1/2 right-0 flex h-[48px] w-[48px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-[1px] text-gray-950 transition duration-300 hover:text-white">
          <BsChevronRight />
        </div>
      </div>
    </>
  )
}

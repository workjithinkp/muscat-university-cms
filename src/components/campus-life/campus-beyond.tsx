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

const beyondData = [
  {
    id: 1,
    img: '/images/campus-beyond-01.jpg',
    title: 'Sports & Fitness',
    description: 'Join a team, compete, or just stay active.',
  },
  {
    id: 2,
    img: '/images/campus-beyond-02.jpg',
    title: 'Community Engagement & Volunteering',
    description: 'Make a difference in Muscat and beyond.',
  },
  {
    id: 3,
    img: '/images/campus-beyond-03.jpg',
    title: 'Projects & Competitions',
    description: 'Showcase your creativity and problem-solving skills.',
  },
  {
    id: 4,
    img: '/images/campus-beyond-04.jpg',
    title: 'Placements & Work Experience',
    description: 'gain hands-on industry experience that sets you apart.',
  },

  {
    id: 5,
    img: '/images/campus-beyond-01.jpg',
    title: 'Sports & Fitness',
    description: 'Join a team, compete, or just stay active.',
  },
  {
    id: 6,
    img: '/images/campus-beyond-02.jpg',
    title: 'Community Engagement & Volunteering',
    description: 'Make a difference in Muscat and beyond.',
  },
  {
    id: 7,
    img: '/images/campus-beyond-03.jpg',
    title: 'Projects & Competitions',
    description: 'Showcase your creativity and problem-solving skills.',
  },
  {
    id: 8,
    img: '/images/campus-beyond-04.jpg',
    title: 'Placements & Work Experience',
    description: 'gain hands-on industry experience that sets you apart.',
  },
]

export default function CampusBeyond() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.beyond-swiper .swiper-slide',
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
            trigger: '.beyond-swiper',
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
      <div className="relative">
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
            prevEl: '.beyond-button-prev',
            nextEl: '.beyond-button-next',
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="beyond-swiper group/swiper">
          {beyondData.map((item, index) => (
            <SwiperSlide
              className="group/slide"
              key={`beyond-${item.id}-${index}`}>
              <div className="relative transition duration-300">
                <div className="relative mx-auto mb-6 h-[120px] w-[120px] overflow-hidden rounded-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={120}
                    height={120}
                    className="w-full transition duration-300 group-hover/slide:!opacity-100 group-hover/swiper:opacity-50"
                  />
                </div>
                <div className="px-4 py-4 text-center">
                  <h3 className="text-brand-100 mb-2 text-2xl font-medium">
                    {item.title}
                  </h3>
                  <p className="text-gray-950">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

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

const facilitiesData = [
  {
    id: 1,
    img: '/images/campus-facilities-01.jpg',
    title: 'Resource Centre & Auditorium',
    description:
      'A hub for knowledge and creativity, featuring a 250-seat auditorium for lectures, performances, and guest speakers, plus a fully equipped resource centre.',
  },
  {
    id: 2,
    img: '/images/campus-facilities-02.jpg',
    title: 'Smart Classrooms & Labs',
    description:
      'Experience hands-on learning in our state-of-the-art computer and chemical engineering labs. Every classroom is equipped with interactive smart boards and high-speed Wi-Fi for a seamless learning experience.',
  },
  {
    id: 3,
    img: '/images/campus-facilities-03.jpg',
    title: 'Student Common Area',
    description:
      'Relax, recharge, and reconnect! Play billiards, air hockey, table tennis, or foosball — or just chill between classes in this student-run social hub.',
  },
  {
    id: 4,
    img: '/images/campus-facilities-01.jpg',
    title: 'Resource Centre & Auditorium',
    description:
      'A hub for knowledge and creativity, featuring a 250-seat auditorium for lectures, performances, and guest speakers, plus a fully equipped resource centre.',
  },
  {
    id: 5,
    img: '/images/campus-facilities-02.jpg',
    title: 'Smart Classrooms & Labs',
    description:
      'Experience hands-on learning in our state-of-the-art computer and chemical engineering labs. Every classroom is equipped with interactive smart boards and high-speed Wi-Fi for a seamless learning experience.',
  },
  {
    id: 6,
    img: '/images/campus-facilities-03.jpg',
    title: 'Student Common Area',
    description:
      'Relax, recharge, and reconnect! Play billiards, air hockey, table tennis, or foosball — or just chill between classes in this student-run social hub.',
  },
]

export default function CampusFacilities() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.facilities-swiper .swiper-slide',
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
            trigger: '.facilities-swiper',
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
            1200: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: '.facilities-button-prev',
            nextEl: '.facilities-button-next',
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="facilities-swiper group/swiper">
          {facilitiesData.map((item, index) => (
            <SwiperSlide
              className="group/slide"
              key={`facilities-${item.id}-${index}`}>
              <div className="relative transition duration-300">
                <h3 className="border-l-brand-300 text-brand-100 mb-6 border-l-2 ps-4 text-2xl font-medium">
                  {item.title}
                </h3>
                <div className="relative overflow-hidden bg-black">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={350}
                    height={220}
                    className="w-full transition duration-300 group-hover/slide:!opacity-100 group-hover/swiper:opacity-50"
                  />
                </div>

                <div className="px-4 py-4">
                  <p className="text-gray-950">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="facilities-button-prev hover:bg-brand-100 hover:border-brand-100 0 absolute top-[120px] left-0 flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border-[1px] text-gray-950 transition duration-300 hover:text-white">
          <BsChevronLeft />
        </div>
        <div className="facilities-button-next hover:bg-brand-100 hover:border-brand-100 0 absolute top-[120px] right-0 flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border-[1px] text-gray-950 transition duration-300 hover:text-white">
          <BsChevronRight />
        </div>
      </div>
    </>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

// Import required modules
import { Autoplay, Navigation } from 'swiper/modules'

const offerData = [
  {
    id: 1,
    img: '/images/international-visa-01.jpg',
    title: 'Guidance on Requirements:',
    description:
      'Learn exactly which documents you need, including passport, acceptance letter, and any medical or attestation forms.',
  },
  {
    id: 2,
    img: '/images/international-visa-02.jpg',
    title: 'Guidance on Requirements:',
    description:
      'Learn exactly which documents you need, including passport, acceptance letter, and any medical or attestation forms.',
  },
  {
    id: 3,
    img: '/images/international-visa-03.jpg',
    title: 'Guidance on Requirements:',
    description:
      'Learn exactly which documents you need, including passport, acceptance letter, and any medical or attestation forms.',
  },
  {
    id: 4,
    img: '/images/international-visa-01.jpg',
    title: 'Guidance on Requirements:',
    description:
      'Learn exactly which documents you need, including passport, acceptance letter, and any medical or attestation forms.',
  },
  {
    id: 5,
    img: '/images/international-visa-02.jpg',
    title: 'Guidance on Requirements:',
    description:
      'Learn exactly which documents you need, including passport, acceptance letter, and any medical or attestation forms.',
  },
  {
    id: 6,
    img: '/images/international-visa-03.jpg',
    title: 'Guidance on Requirements:',
    description:
      'Learn exactly which documents you need, including passport, acceptance letter, and any medical or attestation forms.',
  },
]

export default function OfferSwiper() {
  return (
    <>
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
          prevEl: '.offer-button-prev',
          nextEl: '.offer-button-next',
        }}
        modules={[Autoplay, Navigation]}
        className="offer-swiper">
        {offerData.map((item, index) => (
          <SwiperSlide className="" key={index}>
            <div className="group relative flex flex-wrap items-start transition duration-300">
              <div className="w-[115px] gap-4 overflow-hidden rounded-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={115}
                  height={115}
                  className="w-full transition duration-300 group-hover:scale-[1.1]"
                />
              </div>
              <div className="flex-1 px-4">
                <h4 className="text-brand-100 mb-4 text-xl leading-none font-medium">
                  {item.title}
                </h4>
                <p className="line-clamp-3 text-gray-800">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

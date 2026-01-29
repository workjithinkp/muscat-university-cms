'use client'

import Link from 'next/link'
import Image from 'next/image'

import { BiSolidQuoteLeft } from 'react-icons/bi'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

// Import required modules
import { Autoplay, Navigation } from 'swiper/modules'

export default function TestimonialsSwiper() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1500}
        spaceBetween={0}
        observer={true}
        observeParents={true}
        slidesPerView={1}
        navigation={{
          prevEl: '.testi-button-prev',
          nextEl: '.testi-button-next',
        }}
        modules={[Autoplay, Navigation]}
        className="testimonials-swiper">
        <SwiperSlide className="pt-16">
          <div className="bg-brand-100 relative">
            <div className="absolute top-4 left-4 text-8xl text-[#8cbef2]">
              <BiSolidQuoteLeft />
            </div>
            <div className="relative px-8 py-24">
              <div className="absolute top-0 right-0 left-0 mx-auto h-[135px] w-[135px] -translate-y-[50%] overflow-hidden rounded-full border-[3px] border-white">
                <Image
                  src="/images/international-testi-01.jpg"
                  width={135}
                  height={135}
                  alt="Image"
                />
              </div>
              <div>
                <div className="mx-auto max-w-[1000px] text-center text-xl text-white">
                  “Moving to Muscat University was smoother than I expected —
                  the visa support helped me a lot, and the city is beautiful
                  and welcoming.”
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pt-16">
          <div className="bg-brand-100 relative">
            <div className="absolute top-4 left-4 text-8xl text-[#8cbef2]">
              <BiSolidQuoteLeft />
            </div>
            <div className="relative px-8 py-24">
              <div className="absolute top-0 right-0 left-0 mx-auto h-[135px] w-[135px] -translate-y-[50%] overflow-hidden rounded-full border-[3px] border-white">
                <Image
                  src="/images/international-testi-01.jpg"
                  width={135}
                  height={135}
                  alt="Image"
                />
              </div>
              <div>
                <div className="mx-auto max-w-[1000px] text-center text-xl text-white">
                  “Moving to Muscat University was smoother than I expected —
                  the visa support helped me a lot, and the city is beautiful
                  and welcoming.”
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

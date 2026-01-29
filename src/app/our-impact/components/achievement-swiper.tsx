'use client'

import { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

// Import required modules
import { Autoplay, Navigation } from 'swiper/modules'

const achieveData = [
  {
    id: 1,
    count: '4',
    title:
      'MU researchers look to optimize special education services using AI',
    description:
      '(MSc Sustainable Energy, BSc Sustainable Port & Shipping, MSc Sustainability Management, MSc Renewable Energy)',
  },
  {
    id: 2,
    count: '5',
    suffix: '+',
    title: 'Industry partnerships established',
    description: '(including collaborations with Muscat Stock Exchange)',
  },
  {
    id: 3,
    count: '10',
    suffix: '+',
    title: 'Community engagement events held annually',
    description: '(e.g., public forums, student ambassador activities)',
  },
  {
    id: 4,
    count: '15',
    suffix: '+',
    title: 'Research outputs in sustainability',
    description: '(publications in peer-reviewed journals)',
  },
]

export default function ImpactSwiper() {
  const [active, setActive] = useState(1)

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
          1200: { slidesPerView: 4 },
        }}
        navigation={{
          prevEl: '.achieve-button-prev',
          nextEl: '.achieve-button-next',
        }}
        modules={[Autoplay, Navigation]}
        className="swiper-achieve">
        {achieveData.map((item, index) => (
          <SwiperSlide
            className="border-r-brand-300 border-r-[2px]"
            key={index}>
            <div
              className="group m-auto min-h-[225px] px-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1500">
              <div className="text-brand-100 mb-4 text-center text-5xl leading-none font-bold">
                <span className="count-num" data-count={item.count}>
                  {item.count}
                </span>
                {item.suffix}
              </div>
              <div className="mb-4 text-center text-xl leading-none font-medium text-gray-950">
                {item.title}
              </div>
              <div className="text-center text-gray-950">
                {item.description}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

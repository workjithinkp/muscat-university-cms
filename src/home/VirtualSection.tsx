'use client'

import Image from 'next/image'
import Link from 'next/link'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

// Import required modules
import { Autoplay, Scrollbar } from 'swiper/modules'

// import required modules
import { Navigation } from 'swiper/modules'

import { LuArrowUpRight } from 'react-icons/lu'
import { BiSolidQuoteLeft } from 'react-icons/bi'

const testimonialData = [
  {
    id: 1,
    img: '/images/testi-profile-01.jpg',
    alt: 'Image',
    description:
      'I found that Muscat University provides high-quality     and unique programmes and courses which attracted me                             to this university.',
    name: 'Sumaiya Al Qasabi',
    position: 'BSc in Logistics with Supply Chain Management',
  },
  {
    id: 2,
    img: '/images/testi-profile-01.jpg',
    alt: 'Image',
    description:
      'I found that Muscat University provides high-quality     and unique programmes and courses which attracted me                             to this university.',
    name: 'Sumaiya Al Qasabi',
    position: 'BSc in Logistics with Supply Chain Management',
  },
]

export default function VirtualSection() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="relative h-full">
              <div className="relative h-full">
                <Image
                  className="h-full w-full object-cover"
                  src="/images/virtual-tour.jpg"
                  width={990}
                  height={900}
                  alt="Image"
                />
              </div>

              <div className="absolute right-0 bottom-0 left-[calc((100vw-1460px)/2)] z-10 flex flex-col items-end">
                <div className="flex justify-end">
                  <div className="bg-brand-200 hidden w-[72px] py-4 lg:block lg:py-8"></div>
                  <Link
                    href="#"
                    className="bg-brand-200 hover:bg-brand-300 flex w-[72px] items-center justify-center py-4 text-2xl text-white transition duration-300 lg:py-8">
                    <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
                  </Link>
                </div>
                <div className="bg-brand-200 px-2 px-4 py-2 py-4 text-center text-xl font-medium text-white lg:me-[72px] lg:w-[calc(100%-72px)] lg:px-8 lg:py-8 xl:text-3xl">
                  Take a 3600 virtual tour of our Campus
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 z-20 h-[90px] w-[90px] -translate-x-[50%] -translate-y-[50%]">
                <Image
                  src="/images/virtual-icon.png"
                  width={90}
                  height={90}
                  alt="Icon"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col lg:w-1/2">
            <div className="md:h-1/2">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                speed={1500}
                slidesPerView={1}
                modules={[Autoplay, Navigation]}
                className="swiper-testimonial">
                {testimonialData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-brand-100 grid grid-cols-1 md:grid-cols-[50%_50%]">
                      <div>
                        <Image
                          src={item.img}
                          width={475}
                          height={475}
                          alt={item.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="px-8 py-8 md:px-10 md:pt-10 md:pb-4">
                          <div className="mb-2 text-5xl text-white">
                            <BiSolidQuoteLeft />
                          </div>
                          <p className="text-white">{item.description}</p>
                          <div className="mt-2">
                            <div className="mb-1 text-2xl font-semibold text-white">
                              {item.name}
                            </div>
                            <div className="text-[#89c0fb]">
                              {item.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="md:h-1/2">
              <div className="flex h-full flex-wrap">
                <div className="w-full md:w-1/2">
                  <div className="px-8 py-8 md:px-12 md:pt-12 md:pb-4">
                    <h2 className="mb-4 text-4xl font-medium text-gray-950">
                      We <span className="text-[#08bed5]">aspire </span>
                      beyond the everyday{' '}
                      <span className="text-[#eb5134]"> dreams</span>
                    </h2>
                    <Link
                      className="group inline-flex flex-1 border-[1px] border-gray-700 text-gray-950 transition duration-300 hover:border-[#08bed5] hover:bg-[#08bed5]"
                      href="/">
                      <span className="flex-1 px-4 py-2 group-hover:text-white">
                        Read all News
                      </span>
                      <span className="flex flex-0 items-center justify-center border-l-[1px] border-gray-700 px-4 py-2 text-xl group-hover:border-white group-hover:text-white">
                        <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="relative w-full overflow-hidden md:w-1/2">
                  <img
                    className="h-full w-full object-cover md:absolute md:top-0 md:left-0"
                    src="/images/admission-explore.jpg"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

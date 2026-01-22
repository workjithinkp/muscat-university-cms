'use client'

import Image from 'next/image'
import Link from 'next/link'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

// Import required modules
import { EffectFade, Autoplay, Pagination } from 'swiper/modules'

import { LuArrowUpRight } from 'react-icons/lu'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'

const socialLinks = [
  { href: '#', icon: <FaFacebookF /> },
  { href: '#', icon: <FaLinkedinIn /> },
  { href: '#', icon: <FaInstagram /> },
  { href: '#', icon: <FaXTwitter /> },
  { href: '#', icon: <FaYoutube /> },
]

export default function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Swiper
          modules={[EffectFade, Autoplay, Pagination]}
          effect="fade"
          loop={true}
          speed={2000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="hero-swiper">
          <SwiperSlide>
            <div className="relative h-[100vh] w-full">
              <div className="relative bg-black after:absolute after:right-0 after:bottom-0 after:left-0 after:z-5 after:h-[30%] after:bg-linear-to-t after:from-black/75 after:to-black/0 after:content-['']">
                <Image
                  src="/images/hero-slider-01.jpg"
                  alt="Vercel Logo"
                  width={1920}
                  height={1080}
                  quality={100}
                  className="h-[100vh] w-full object-cover opacity-90"
                />
              </div>
              <div className="absolute top-[50%] right-0 left-0 z-10 -translate-y-[50%]">
                <div className="container mx-auto">
                  <div className="max-w-[550px] pt-20">
                    <h1 className="1920:text-[200px] mb-4 text-6xl leading-none font-bold text-white xl:text-[90px] 2xl:text-[100px]">
                      ASPIRE <br />
                      BEYOND <br />
                      LIMITS
                    </h1>
                    <p className="mb-4 text-lg text-white lg:text-xl xl:mb-[48px]">
                      Driven by curiosity, innovation, and a commitment to
                      excellence, we prepare future leaders to turn bold ideas
                      into transformative impact.
                    </p>
                    <div className="mt-4 flex flex-wrap space-y-2 md:flex-nowrap md:space-y-0 md:space-x-3">
                      <Link
                        className="group flex w-full border-[1px] border-white text-white transition duration-300 hover:bg-white md:flex-1"
                        href="/">
                        <span className="group-hover:text-brand-100 flex-1 px-4 py-2">
                          Explore Programmes
                        </span>
                        <span className="group-hover:text-brand-100 flex flex-0 items-center justify-center border-l-[1px] border-white px-4 py-2 text-xl">
                          <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
                        </span>
                      </Link>
                      <Link
                        className="group flex w-full border-[1px] border-white text-white transition duration-300 hover:bg-white md:flex-1"
                        href="/">
                        <span className="group-hover:text-brand-100 flex-1 px-4 py-2">
                          Explore Programmes
                        </span>
                        <span className="group-hover:text-brand-100 flex flex-0 items-center justify-center border-l-[1px] border-white px-4 py-2 text-xl">
                          <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="absolute top-[50%] right-2 z-10 flex -translate-y-1/2 flex-col space-y-2 md:right-[1.875rem]">
          {socialLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:border-brand-200 hover:bg-brand-200 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/50 text-white transition duration-300 hover:text-white">
              {item.icon}
            </Link>
          ))}
        </div>

        <Link
          className="nav-support absolute right-2 bottom-2 z-10 animate-pulse rounded-full md:right-[1.875rem] md:bottom-[3rem]"
          href="#">
          <Image
            src="/images/support-icon.png"
            width={60}
            height={60}
            alt="Support"
          />
        </Link>
      </section>
    </>
  )
}

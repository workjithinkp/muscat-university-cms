'use client'

import Image from 'next/image'
import { BiSolidQuoteLeft } from 'react-icons/bi'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Autoplay, Navigation } from 'swiper/modules'
import { BlockContent, resolveImageUrl } from '@/lib/api'

interface TestimonialsSwiperProps {
    items: BlockContent[]
}

export default function TestimonialsSwiper({ items }: TestimonialsSwiperProps) {
    if (!items || items.length === 0) return null

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
                {items.map((item, index) => (
                    <SwiperSlide className="pt-16" key={item.id || index}>
                        <div className="bg-brand-100 relative">
                            <div className="absolute top-4 left-4 text-8xl text-[#8cbef2]">
                                <BiSolidQuoteLeft />
                            </div>
                            <div className="relative px-8 py-24">
                                <div className="absolute top-0 right-0 left-0 mx-auto h-[135px] w-[135px] -translate-y-[50%] overflow-hidden rounded-full border-[3px] border-white">
                                    {item.i_1 && (
                                        <Image
                                            src={resolveImageUrl(item.i_1) || ''}
                                            width={135}
                                            height={135}
                                            alt={item.c_1 || 'Student'}
                                            className="object-cover h-full w-full"
                                        />
                                    )}
                                </div>
                                <div>
                                    <div className="mx-auto max-w-[1000px] text-center text-xl text-white">
                                        “{item.c_1}”
                                    </div>
                                    {/* If there's a name field, we can add it here. e.g. item.c_2 */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Autoplay, Navigation } from 'swiper/modules'
import { BlockContent, resolveImageUrl } from '@/lib/api'

interface OfferSwiperProps {
    items: BlockContent[]
}

export default function OfferSwiper({ items }: OfferSwiperProps) {
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
                {items.map((item, index) => (
                    <SwiperSlide className="" key={item.id || index}>
                        <div className="group relative flex flex-wrap items-start transition duration-300">
                            <div className="w-[115px] gap-4 overflow-hidden rounded-full">
                                {item.i_1 && (
                                    <Image
                                        src={resolveImageUrl(item.i_1) || ''}
                                        alt={item.c_1 || 'Offer Image'}
                                        width={115}
                                        height={115}
                                        className="w-full transition duration-300 group-hover:scale-[1.1]"
                                    />
                                )}
                            </div>
                            <div className="flex-1 px-4">
                                <h4 className="text-brand-100 mb-4 text-xl leading-none font-medium">
                                    {item.c_1}
                                </h4>
                                <p className="line-clamp-3 text-gray-800">{item.c_2}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

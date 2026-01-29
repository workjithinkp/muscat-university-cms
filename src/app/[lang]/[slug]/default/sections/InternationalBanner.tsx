import React from 'react'
import { PageSection, resolveImageUrl } from '@/lib/api'
import Image from 'next/image'
import DynamicBreadcrumb from '@/components/common/breadcrumb'

interface InternationalBannerProps {
    section: PageSection
}

export default function InternationalBanner({ section }: InternationalBannerProps) {
    const block = section.block
    if (!block) return null

    const title = block.c_1 // "International Students"
    const subtitle = block.c_2 // "Welcome to Muscat University..."
    const description = block.c_3 // "At Muscat University..."
    const bgImage = '/images/hero-international-slider.jpg' // Hero Background
    const introImage = resolveImageUrl(block.i_1) // Right side image

    return (
        <section className="relative min-h-[900px] pt-[160px]">
            <div className="absolute inset-0">
                {bgImage && (
                    <Image
                        src={bgImage}
                        fill
                        className="h-full w-full object-cover"
                        alt="Hero"
                        priority
                    />
                )}
            </div>

            <div className="relative mb-[48px] border-b-[1px] border-b-white/20 pb-3">
                <div className="container mx-auto">
                    {/* Breadcrumb would ideally be dynamic based on current path, but hardcoding structure for now as per request */}
                    <DynamicBreadcrumb
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'Study', href: '' },
                            { label: 'International Students', href: null },
                        ]}
                    />
                </div>
            </div>

            <div className="container mx-auto">
                <div className="relative z-10 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_750px] xl:gap-8 2xl:grid-cols-[1fr_900px]">
                    <div>
                        <div className="relative z-10 max-w-[575px] py-12">
                            <h2
                                data-words-slide-right
                                className="mb-4 text-6xl leading-none font-medium text-white uppercase">
                                {title}
                            </h2>
                            <h3
                                data-words-slide-right
                                className="mb-4 text-4xl leading-none font-medium text-white">
                                {subtitle}
                            </h3>
                            <div data-words-slide-right className="text-xl text-white">
                                {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="max-w-[900px]">
                            {introImage && (
                                <Image
                                    src={introImage}
                                    width={945}
                                    height={710}
                                    alt="Image"
                                    className="h-full w-full object-cover"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

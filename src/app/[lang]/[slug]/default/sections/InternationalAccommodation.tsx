import React from 'react'
import { PageSection, resolveImageUrl } from '@/lib/api'
import Image from 'next/image'

interface InternationalAccommodationProps {
    section: PageSection
}

export default function InternationalAccommodation({ section }: InternationalAccommodationProps) {
    const block = section.block
    const list = section.list || []
    if (!block) return null

    const title = block.c_1

    return (
        <section id="accommodation-arrival" className="pt-9 pb-9">
            <div className="container mx-auto">
                <div>
                    <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                        {title}
                    </h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {list.map((item, index) => (
                            <div key={item.id || index}>
                                <div className="group relative transition duration-300 hover:bg-[#f6f6f6]">
                                    <div className="">
                                        <div className="relative overflow-hidden bg-black">
                                            {item.i_1 && (
                                                <Image
                                                    src={resolveImageUrl(item.i_1) || ''}
                                                    alt={item.c_1 || 'Image'}
                                                    width={460}
                                                    height={170}
                                                    className="w-full transition duration-300 group-hover:scale-[1.1]"
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="px-4 py-4">
                                        <div className="mb-2">
                                            <h3 className="text-brand-100 mb-4 text-xl leading-none font-medium">
                                                {item.c_1}
                                            </h3>
                                            <p className="text-gray-800">
                                                {item.c_2}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-12">
                <div>
                    <div className="h-[1px] bg-gray-200"></div>
                </div>
            </div>
        </section>
    )
}

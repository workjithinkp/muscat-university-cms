import React from 'react'
import { PageSection, resolveImageUrl } from '@/lib/api'
import Image from 'next/image'

interface InternationalStudentLifeProps {
    section: PageSection
}

export default function InternationalStudentLife({ section }: InternationalStudentLifeProps) {
    const block = section.block
    const list = section.list || []
    if (!block) return null

    const title = block.c_1
    const mainImage = resolveImageUrl(block.i_1)

    return (
        <section id="student-life" className="pt-18 pb-9">
            <div className="container mx-auto">
                <div className="mb-4 scroll-mt-[120px]">
                    <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                        {title}
                    </h2>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[32%_68%] lg:gap-8">
                        <div>
                            <div>
                                {mainImage && (
                                    <Image
                                        src={mainImage}
                                        width={450}
                                        height={400}
                                        className="h-full w-full object-cover transition duration-300"
                                        alt="Image"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="lg:px-10 lg:py-10">
                            <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-2">
                                {list.map((item, index) => (
                                    <div
                                        key={item.id || index}
                                        className="rounded-xl px-4 py-4 transition duration-300 hover:shadow-xl">
                                        <h3 className="text-brand-100 mb-4 text-xl font-medium">
                                            {item.c_1}
                                        </h3>
                                        <div
                                            className="text-gray-950"
                                            dangerouslySetInnerHTML={{ __html: item?.c_2 ?? "" }}
                                        />

                                    </div>
                                ))}
                            </div>
                        </div>
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

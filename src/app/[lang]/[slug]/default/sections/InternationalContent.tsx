import React from 'react'
import { PageSection } from '@/lib/api'

interface InternationalContentProps {
    section: PageSection
}

export default function InternationalContent({ section }: InternationalContentProps) {
    const block = section.block
    if (!block) return null

    const title = block.c_1
    const introContent = block.c_2
    const subTitle = block.c_3
    const subContent = block.c_4


    return (
        <section id="programs-academics" className="pt-9 pb-9">
            <div className="container mx-auto">
                <div>
                    <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                        {title}
                    </h2>

                    <div
                        className="text-gray-950 space-y-4 [&>h4]:text-xl [&>h4]:font-medium [&>h4]:text-gray-950 [&>h4]:mb-4 [&>ul]:mb-4 [&>ul]:flex [&>ul]:flex-col [&>ul]:space-y-2 [&>ul]:text-gray-950 [&>ul>li]:relative [&>ul>li]:pl-[20px] [&>ul>li]:after:absolute [&>ul>li]:after:start-0 [&>ul>li]:after:top-[8px] [&>ul>li]:after:h-[6px] [&>ul>li]:after:w-[6px] [&>ul>li]:after:rounded-full [&>ul>li]:after:bg-brand-100"
                        dangerouslySetInnerHTML={{ __html: introContent || '' }}
                    />
                    <h4 className="mb-4 text-xl font-medium text-gray-950">
                        {subTitle}
                    </h4>
                    <div
                        dangerouslySetInnerHTML={{ __html: subContent || '' }}
                    />
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

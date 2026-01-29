import React from 'react'
import { PageSection, resolveImageUrl } from '@/lib/api'
import Image from 'next/image'
import OfferSwiper from '../components/OfferSwiper'

interface InternationalVisaProps {
    section: PageSection
}

export default function InternationalVisa({ section }: InternationalVisaProps) {
    const block = section.block
    const list = section.list || []
    if (!block) return null

    const title = block.c_1 // "Visa & Immigration"
    const intro = block.c_2 // Intro paragraph
    const offerTitle = block.c_3 // "What We Offer:"
    const stepsTitle = block.c_4 // "Steps to Get Your Student Visa:"
    const tipTitle = "Important Tip:" // Could be from block.t_1 or hardcoded if matching static
    const tipContent = block.c_5
    const contactTitle = "Contact Us:"
    const contactContent = block.c_6

    // Separate list items by template type
    const offerItems = list.filter(item => item.template?.includes('offer'))
    const stepItems = list.filter(item => item.template?.includes('steps'))

    return (
        <section id="visa-immigration" className="pt-9 pb-9">
            <div className="container mx-auto">
                <div className="mb-8 lg:mb-20">
                    <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                        {title}
                    </h2>
                    <div
                        className="text-gray-950 [&>span]:font-medium"
                        dangerouslySetInnerHTML={{ __html: intro || '' }}
                    />
                </div>

                {offerItems.length > 0 && (
                    <div className="mb-12 lg:mb-20">
                        <h3 className="text-brand-100 mb-8 text-xl font-medium">
                            {offerTitle}
                        </h3>
                        <div>
                            <OfferSwiper items={offerItems} />
                        </div>
                    </div>
                )}

                {stepItems.length > 0 && (
                    <div>
                        <div>
                            <h3 className="text-brand-100 mb-8 text-center text-xl font-medium">
                                {stepsTitle}
                            </h3>
                        </div>
                        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
                            {stepItems.map((item, index) => (
                                <div
                                    key={item.id || index}
                                    className={`transition ${index !== stepItems.length - 1 ? 'border-r-[1px] border-r-gray-200 px-4' : ''} `}>
                                    <div className="mx-auto mb-4 w-[60px]">
                                        {item.i_1 && (
                                            <Image
                                                src={resolveImageUrl(item.i_1) || ''}
                                                alt="Icon"
                                                width={60}
                                                height={60}
                                                className="w-full transition duration-300 group-hover:scale-[1.1]"
                                            />
                                        )}
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-brand-100 mb-4 text-xl leading-none font-medium">
                                            {item.c_1}
                                        </h3>
                                        <p className="text-gray-800">{item.c_2}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {tipContent && (
                    <div className="mb-8">
                        <h3 className="mb-2 text-xl leading-none font-medium text-gray-950">
                            {tipTitle}
                        </h3>
                        <p className="text-gray-800">
                            {tipContent}
                        </p>
                    </div>
                )}

                {contactContent && (
                    <div>
                        <h3 className="mb-2 text-xl leading-none font-medium text-gray-950">
                            {contactTitle}
                        </h3>
                        <p className="text-gray-800">
                            {contactContent}
                        </p>
                    </div>
                )}
            </div>

            <div className="container mx-auto mt-12">
                <div>
                    <div className="h-[1px] bg-gray-200"></div>
                </div>
            </div>
        </section>
    )
}

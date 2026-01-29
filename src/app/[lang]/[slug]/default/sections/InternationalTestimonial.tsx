import React from 'react'
import { PageSection } from '@/lib/api'
import TestimonialsSwiper from '../components/TestimonialsSwiper'

interface InternationalTestimonialProps {
    section: PageSection
}

export default function InternationalTestimonial({ section }: InternationalTestimonialProps) {
    const block = section.block
    const list = section.list || []
    if (!block) return null

    const title = block.c_1

    return (
        <section id="testimonials" className="pt-9 pb-18">
            <div className="container mx-auto">
                <div>
                    <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                        {title}
                    </h2>
                </div>
                <div>
                    <TestimonialsSwiper items={list} />
                </div>
            </div>
        </section>
    )
}

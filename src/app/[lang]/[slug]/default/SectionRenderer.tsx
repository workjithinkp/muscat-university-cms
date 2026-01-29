import React from 'react'
import { PageSection, PageData } from '@/lib/api'

// International Student Components
import InternationalBanner from './sections/InternationalBanner'
import InternationalLeftImage from './sections/InternationalLeftImage'
import InternationalContent from './sections/InternationalContent'
import InternationalContentApply from './sections/InternationalContentApply'
import InternationalVisa from './sections/InternationalVisa'
import InternationalAccommodation from './sections/InternationalAccommodation'
import InternationalCost from './sections/InternationalCost'
import InternationalStudentLife from './sections/InternationalStudentLife'
import InternationalTestimonial from './sections/InternationalTestimonial'

interface SectionRendererProps {
    section: PageSection
    page?: PageData
}

export default function SectionRenderer({ section, page }: SectionRendererProps) {
    const template = section.section?.template

    switch (template) {
        case 'international-banner':
            return <InternationalBanner section={section} />
        case 'international-left-image':
            return <InternationalLeftImage section={section} />
        case 'international-content':
            return <InternationalContent section={section} />
        case 'international-content-apply':
            return <InternationalContentApply section={section} />
        case 'international-visa':
            return <InternationalVisa section={section} />
        case 'international-accomadation':
            return <InternationalAccommodation section={section} />
        case 'international-cost':
            return <InternationalCost section={section} />
        case 'international-student-life':
            return <InternationalStudentLife section={section} />
        case 'international-testimonial':
            return <InternationalTestimonial section={section} />
        default:
            console.warn(`Unknown section template: ${template}`)
            return null
    }
}

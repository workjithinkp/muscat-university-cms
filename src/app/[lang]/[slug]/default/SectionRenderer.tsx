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
import ResearchBanner from './sections/ResearchBanner'
import ResearchActivities from './sections/ResearchActivities'
import ResearchFocusArea from './sections/ResearchFocusArea'
import ResearchEcoSystem from './sections/ResearchEcoSystem'
import ResearchHighlights from './sections/ResearchHighlights'
import ResearchVisionMission from './sections/ResearchVisionMission'
import ResearchInnovationStrategy from './sections/ResearchInnovationStrategy'
import ResearchStructure from './sections/ResearchStructure'
import ResearchPartner from './sections/ResearchPartner'

interface SectionRendererProps {
    section: PageSection
    page?: PageData
    lang?: string
}

export default function SectionRenderer({ section, page, lang }: SectionRendererProps) {
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
        case 'research-banner':
            return <ResearchBanner section={section} page={page} lang={lang} />
        case 'research-activities':
            return <ResearchActivities section={section} />
        case 'research-focus-area':
            return <ResearchFocusArea section={section} />
        case 'research-eco-system':
            return <ResearchEcoSystem section={section} />
        case 'research-highlights':
            return <ResearchHighlights section={section} page={page} />
        case 'research-vision-mission':
            return <ResearchVisionMission section={section} />
        case 'research-innovation-strategy':
            return <ResearchInnovationStrategy section={section} />
        case 'research-structure':
            return <ResearchStructure section={section} />
        case 'research-partner':
            return <ResearchPartner section={section} />
        default:
            console.warn(`Unknown section template: ${template}`)
            return null
    }
}

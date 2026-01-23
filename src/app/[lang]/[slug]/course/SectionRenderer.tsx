'use client'

import ProgramsBanner from './sections/ProgramsBanner'
import ProgramsOverview from './sections/ProgramsOverview'
import EntryRequirements from './sections/EntryRequirements'
import StudyPlan from './sections/StudyPlan'
import Fees from './sections/Fees'
import Faq from './sections/Faq'
import NextSteps from './sections/NextSteps'
import { PageData, PageSection } from '@/lib/api'

interface SectionRendererProps {
  section: PageSection & { anchorId?: string; menuLabel?: string }
  page: PageData
}

export default function SectionRenderer({ section, page }: SectionRendererProps) {
  const template = section.section?.template

  switch (template) {
    case 'programs-banner':
      return <ProgramsBanner section={section} page={page} />
    case 'programs-overview':
      return <ProgramsOverview section={section} anchorId={section.anchorId} />
    case 'entry-requirements':
      return <EntryRequirements section={section} anchorId={section.anchorId} />
    case 'study-plan':
      return <StudyPlan section={section} anchorId={section.anchorId} />
    case 'fees':
      return <Fees section={section} anchorId={section.anchorId} />
    case 'faq':
      return <Faq section={section} anchorId={section.anchorId} />
    case 'next-step':
      return <NextSteps section={section} anchorId={section.anchorId} />
    default:
      return null
  }
}

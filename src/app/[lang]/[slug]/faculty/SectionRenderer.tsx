'use client'

import PageBanner from './sections/PageBanner'
import ContentRightImage from './sections/ContentRightImage'
import RightToggle from './sections/RightToggle'
import Team from './sections/Team'
import ContentsWideImage from './sections/ContentsWideImage'
import SearchProfiles from './sections/SearchProfiles'
import { PageData, PageSection } from '@/lib/api'

interface SectionRendererProps {
  section: PageSection & { anchorId?: string; menuLabel?: string }
  page: PageData
}

export default function SectionRenderer({ section, page }: SectionRendererProps) {
  const template = section.section?.template

  switch (template) {
    case 'page-banner':
      return <PageBanner section={section} page={page} />
    case 'content-right-image':
      return <ContentRightImage section={section} anchorId={section.anchorId} />
    case 'right-toggle':
      return <RightToggle section={section} anchorId={section.anchorId} />
    case 'team':
      return <Team section={section} anchorId={section.anchorId} />
    case 'contents-wide-image':
      return <ContentsWideImage section={section} anchorId={section.anchorId} />
    default:
      return null
  }
}

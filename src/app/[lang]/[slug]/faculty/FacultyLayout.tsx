import Preloader from '@/lib/pre-loader'
import SectionRenderer from './SectionRenderer'
import SearchProfiles from './sections/SearchProfiles'
import { PageData, PageSection } from '@/lib/api'

export const dynamic = 'force-dynamic'

type SectionWithAnchor = PageSection & { anchorId?: string; menuLabel?: string }

function slugifyLabel(label: string, index: number) {
  const base = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  if (base) return base
  return `section-${index + 1}`
}

function attachAnchors(sections: PageSection[]): SectionWithAnchor[] {
  return sections.map((section, index) => {
    const menuLabel =
      section.block?.c_1 ||
      section.section?.section ||
      section.page_section_name ||
      `Section ${index + 1}`
    return {
      ...section,
      menuLabel,
      anchorId: slugifyLabel(menuLabel, index),
    }
  })
}

function sortSections(sections?: PageSection[] | null) {
  return [...(sections || [])].sort((a, b) => {
    const aSort = a.section_sort ?? 0
    const bSort = b.section_sort ?? 0
    return aSort - bSort
  })
}

interface FacultyLayoutProps {
  page: PageData
  lang: string
}

export default async function FacultyLayout({ page, lang }: FacultyLayoutProps) {
  const orderedSections = sortSections(page.sections)
  const sectionsWithAnchors = attachAnchors(orderedSections)

  return (
    <>
      <Preloader />

      {sectionsWithAnchors.map((section) => {
        // Insert SearchProfiles before Team section
        const teamSection = section.section?.template === 'team'
        
        return (
          <div key={`${section.id || section.section_sort || section.anchorId}`}>
            {teamSection && <SearchProfiles section={section} anchorId="search-profiles" />}
            <SectionRenderer
              section={section}
              page={page}
            />
          </div>
        )
      })}
    </>
  )
}

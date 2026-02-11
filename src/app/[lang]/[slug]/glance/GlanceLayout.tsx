import { PageData, PageSection } from '@/lib/api'
import SectionRenderer from './SectionRenderer'
import GlanceSubmenu from '@/app/MU-glance/components/sub-menu'

interface GlanceLayoutProps {
  page: PageData
  lang: string
}

type SectionWithAnchor = PageSection & { anchorId?: string }

const anchorMap: Record<string, string> = {
  'glance-vc': 'vc-message',
  'glance-vision': 'vision-mission',
  'glance-values': 'our-values',
  'glance-attribute': 'mu-graduate',
  'glance-framework': 'strategic-framework',
}

function sortSections(sections?: PageSection[] | null) {
  return [...(sections || [])].sort((a, b) => {
    const aSort = a.section_sort ?? 0
    const bSort = b.section_sort ?? 0
    return aSort - bSort
  })
}

function attachAnchors(sections: PageSection[]): SectionWithAnchor[] {
  return sections.map((section) => {
    const template = section.section?.template || ''
    return {
      ...section,
      anchorId: anchorMap[template],
    }
  })
}

function splitBanner(sections: SectionWithAnchor[]) {
  const bannerIndex = sections.findIndex(
    (section) => section.section?.template === 'glance-banner'
  )
  if (bannerIndex === -1) return { banner: null, rest: sections }

  const banner = sections[bannerIndex]
  const rest = sections.filter((_, idx) => idx !== bannerIndex)
  return { banner, rest }
}

export default function GlanceLayout({ page, lang }: GlanceLayoutProps) {
  const orderedSections = sortSections(page.sections)
  const sectionsWithAnchors = attachAnchors(orderedSections)
  const { banner, rest } = splitBanner(sectionsWithAnchors)

  return (
    <main className="min-h-screen">
      {banner && <SectionRenderer section={banner} page={page} lang={lang} />}

      <GlanceSubmenu />

      {rest.map((section) => (
        <div key={section.id || section.section_sort} id={section.anchorId}>
          <SectionRenderer section={section} page={page} lang={lang} />
        </div>
      ))}
    </main>
  )
}

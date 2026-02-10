import Preloader from '@/lib/pre-loader'
import SectionRenderer from './SectionRenderer'
import ProgrammeSubmenu, { SubmenuItem } from './sections/ProgrammeSubmenu'
import CoursesMenu from './sections/CoursesMenu'
import {
  PageData,
  PageSection,
  fetchCoursesByTemplate,
} from '@/lib/api'

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

function buildSubmenuItems(sections: SectionWithAnchor[]): SubmenuItem[] {
  return sections
    .filter((section) => section.section?.template && section.section.template !== 'programs-banner')
    .map((section) => ({
      label:
        section.menuLabel?.match(/\(([^)]+)\)/)?.[1] || section.menuLabel || 'Section',
      href: `#${section.anchorId}`,
    }))
}

function sortSections(sections?: PageSection[] | null) {
  return [...(sections || [])].sort((a, b) => {
    const aSort = a.section_sort ?? 0
    const bSort = b.section_sort ?? 0
    return aSort - bSort
  })
}

function splitBanner(sections: SectionWithAnchor[]) {
  const bannerIndex = sections.findIndex(
    (section) => section.section?.template === 'programs-banner'
  )
  if (bannerIndex === -1) return { banner: null, rest: sections }

  const banner = sections[bannerIndex]
  const rest = sections.filter((_, idx) => idx !== bannerIndex)
  return { banner, rest }
}

interface CourseLayoutProps {
  page: PageData
  lang: string
}

export default async function CourseLayout({ page, lang }: CourseLayoutProps) {
  const courses = await fetchCoursesByTemplate(lang, 'course', page.category)
  const orderedSections = sortSections(page.sections)
  const sectionsWithAnchors = attachAnchors(orderedSections)
  const { banner, rest } = splitBanner(sectionsWithAnchors)
  const submenuItems = buildSubmenuItems(rest)

  return (
    <>
      <Preloader />

      {banner && <SectionRenderer section={banner} page={page} />}

      {submenuItems.length > 0 && <ProgrammeSubmenu items={submenuItems} />}

      <section className="py-18">
        <div className="container mx-auto">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 lg:w-[25%]">
              <CoursesMenu courses={courses} />
            </div>

            <div className="w-full px-3 lg:w-[75%]">
              {rest.map((section) => (
                <SectionRenderer
                  key={`${section.id || section.section_sort || section.anchorId}`}
                  section={section}
                  page={page}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

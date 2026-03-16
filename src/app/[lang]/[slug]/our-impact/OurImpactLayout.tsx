import { PageData, PageSection } from '@/lib/api'
import ImpactBanner from './sections/ImpactBanner'
import ImpactAccordion from './sections/ImpactAccordion'

interface OurImpactLayoutProps {
  page: PageData
}

function sortSections(sections?: PageSection[] | null) {
  return [...(sections || [])].sort((a, b) => {
    const aSort = a.section_sort ?? 0
    const bSort = b.section_sort ?? 0
    return aSort - bSort
  })
}

export default function OurImpactLayout({ page }: OurImpactLayoutProps) {
  const sorted = sortSections(page.sections)
  const banner = sorted.find(
    (s) => s.section?.template === 'our-impact-banner'
  )
  const tabs = sorted.filter(
    (s) => s.section?.template !== 'our-impact-banner'
  )

  return (
    <>
      {banner && <ImpactBanner section={banner} page={page} />}

      <section className="py-18">
        <div className="container mx-auto">
          <div>
            <ImpactAccordion tabs={tabs} />
          </div>
        </div>
      </section>
    </>
  )
}

import { PageData, PageSection } from '@/lib/api'
import GlanceBanner from './sections/GlanceBanner'
import GlanceVc from './sections/GlanceVc'
import GlanceVision from './sections/GlanceVision'
import GlanceValues from './sections/GlanceValues'
import GlanceAttributes from './sections/GlanceAttributes'
import GlanceFramework from './sections/GlanceFramework'

interface SectionRendererProps {
  section: PageSection
  page?: PageData
  lang?: string
}

export default function SectionRenderer({
  section,
  page,
  lang,
}: SectionRendererProps) {
  const template = section.section?.template

  switch (template) {
    case 'glance-banner':
      return <GlanceBanner section={section} page={page} lang={lang} />
    case 'glance-vc':
      return <GlanceVc section={section} />
    case 'glance-vision':
      return <GlanceVision section={section} />
    case 'glance-values':
      return <GlanceValues section={section} />
    case 'glance-attribute':
      return <GlanceAttributes section={section} />
    case 'glance-framework':
      return <GlanceFramework section={section} />
    default:
      console.warn(`Unknown glance section template: ${template}`)
      return null
  }
}

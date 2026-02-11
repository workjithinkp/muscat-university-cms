import Image from 'next/image'

import DynamicBreadcrumb from '@/components/common/breadcrumb'
import { PageData, PageSection, resolveImageUrl } from '@/lib/api'

interface ResearchBannerProps {
  section: PageSection
  page?: PageData
  lang?: string
}

function stripHtml(value?: string | null) {
  if (!value) return ''
  return value.replace(/<[^>]*>/g, '').replace(/\|/g, ' ').trim()
}

function withLineBreaks(value?: string | null) {
  if (!value) return ''
  return value.replace(/\|/g, '<br />')
}

export default function ResearchBanner({
  section,
  page,
  lang,
}: ResearchBannerProps) {
  const titleHtml = withLineBreaks(
    section.block?.c_1 || page?.title || page?.name || ''
  )
  const descriptionHtml = section.block?.c_2 || ''
  const rightImage = resolveImageUrl(section.block?.i_1)
  const breadcrumbLabel = stripHtml(
    section.block?.c_1 || page?.title || page?.name || 'Research'
  )
  const homeHref = lang ? `/${lang}` : '/'

  return (
    <section className="relative pt-[160px] pb-[72px]">
      <div className="absolute inset-0">
        <img
          src="/images/hero-research-slider.jpg"
          width={1920}
          height={900}
          className="h-full w-full object-cover"
          alt="Hero"
        />
      </div>

      <div className="relative mb-[48px] border-b-[1px] border-b-white/20 pb-3">
        <div className="container mx-auto">
          <DynamicBreadcrumb
            items={[
              { label: 'Home', href: homeHref },
              { label: breadcrumbLabel, href: null },
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="relative z-10 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_450px] xl:gap-8 2xl:grid-cols-[1fr_650px]">
          <div>
            <div className="max-w-[750px] pt-32">
              {titleHtml ? (
                <h2
                  className="mb-4 text-6xl leading-none font-medium text-white uppercase"
                  data-lines-slide-up
                  dangerouslySetInnerHTML={{ __html: titleHtml }}
                />
              ) : null}
              {descriptionHtml ? (
                <div
                  className="text-white"
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
              ) : null}
            </div>
          </div>
          <div>
            {rightImage ? (
              <div className="max-w-[650px]">
                <Image
                  src={rightImage}
                  width={790}
                  height={740}
                  alt={breadcrumbLabel || 'Research'}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

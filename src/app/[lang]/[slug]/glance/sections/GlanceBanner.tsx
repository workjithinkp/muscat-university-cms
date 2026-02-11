import DynamicBreadcrumb from '@/components/common/breadcrumb'
import { PageData, PageSection } from '@/lib/api'

interface GlanceBannerProps {
  section: PageSection
  page?: PageData
  lang?: string
}

function splitPiped(value?: string | null) {
  if (!value) return []
  return value
    .split('|')
    .map((item) => item.trim())
    .filter(Boolean)
}

export default function GlanceBanner({
  section,
  page,
  lang,
}: GlanceBannerProps) {
  const title = section.block?.c_1
  const highlights = splitPiped(section.block?.c_2)
  const descriptionHtml = section.block?.c_3 || ''
  const homeHref = lang ? `/${lang}` : '/'

  return (
    <section className="relative min-h-[900px] pt-[160px]">
      <div className="absolute inset-0 bg-linear-to-t from-[#1dcef2] to-[#0e9db8]"></div>

      <div className="relative border-b-[1px] border-b-white/20 pb-3">
        <div className="container mx-auto">
          <DynamicBreadcrumb
            items={[
              { label: 'Home', href: homeHref },
              { label: 'About', href: '#' },
              { label: page?.title || page?.name || 'MU at Glance', href: null },
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="relative z-10 py-8 lg:py-28">
          <div className="mx-auto max-w-[750px]">
            {title ? (
              <h1
                className="mb-4 text-center text-6xl leading-none font-medium text-white uppercase lg:text-5xl"
                data-lines-slide-up>
                {title}
              </h1>
            ) : null}
            {highlights.length > 0 ? (
              <div className="relative mb-4 flex flex-wrap items-center justify-center gap-2">
                {highlights.map((item, index) => (
                  <div key={`${item}-${index}`} className="flex items-center">
                    <div
                      className="text-4xl font-medium text-white"
                      data-lines-slide-up>
                      {item}
                    </div>
                    {index < highlights.length - 1 ? (
                      <div
                        className="mx-4 h-6 w-[3px] bg-white"
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
            {descriptionHtml ? (
              <div
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

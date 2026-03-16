import DynamicBreadcrumb from '@/components/common/breadcrumb'
import { PageData, PageSection, resolveImageUrl } from '@/lib/api'
import Image from 'next/image'

interface Props {
  section: PageSection
  page: PageData
}

export default function ImpactBanner({ section, page }: Props) {
  const block = section.block || {}
  const title = block.c_1 || page.name || 'Our Impact'
  const subtitle = block.c_2 || ''
  const description = block.c_3 || ''
  const heroImage =
    resolveImageUrl(block.i_1) || '/images/hero-impact-slider.jpg'
  const sideImage =
    resolveImageUrl(block.i_2) || '/images/impact-intro.png'

  return (
    <section className="relative min-h-[900px] pt-[160px]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          width={1920}
          height={900}
          className="h-full w-full object-cover"
          alt="Hero"
        />
      </div>

      <div className="relative border-b-[1px] border-b-white/20 pb-3">
        <div className="container mx-auto">
          <DynamicBreadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '#' },
              { label: title, href: null },
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="relative z-10 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_450px] xl:gap-8 2xl:grid-cols-[1fr_550px]">
          <div>
            <div className="max-w-[750px] pt-32">
              <h2
                className="mb-4 text-6xl leading-none font-medium text-white uppercase"
                data-lines-slide-up>
                {title}
              </h2>
              {subtitle && (
                <h3
                  className="mb-4 text-2xl/7 font-medium text-white"
                  data-lines-slide-up
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                />
              )}
              {description && (
                <p
                  className="text-lg text-white"
                  data-lines-slide-up
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </div>
          </div>
          <div>
            <div className="max-w-[550px]">
              <Image
                src={sideImage}
                width={550}
                height={750}
                alt="Image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

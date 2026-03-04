import { PageSection, resolveImageUrl } from '@/lib/api'
import DynamicBreadcrumb from '@/components/common/breadcrumb'

interface AdmissionBannerProps {
  section: PageSection
}

export default function AdmissionBanner({ section }: AdmissionBannerProps) {
  const title = section.block?.c_1
  const subtitle = section.block?.c_2
  const description = section.block?.c_3
  const introImage = resolveImageUrl(section.block?.i_1) || '/images/admission-intro.png'

  return (
    <section className="relative min-h-[850px] pt-[160px]">
      <div className="absolute inset-0">
        <img
          src="/images/hero-admission-slider.jpg"
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
              { label: 'Home', href: '/' },
              { label: 'Study', href: '#' },
              { label: title || 'Admission', href: null },
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="relative z-10 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_750px] xl:gap-8 2xl:grid-cols-[1fr_800px]">
          <div>
            <div className="max-w-[900px] pt-32">
              {title && (
                <h2
                  className="mb-4 text-6xl leading-none font-medium text-white uppercase"
                  data-lines-slide-up>
                  {title}
                </h2>
              )}
              {subtitle && (
                <h3
                  className="mb-4 text-2xl/7 font-medium text-white"
                  data-lines-slide-up>
                  {subtitle}
                </h3>
              )}
              {description && (
                <p className="text-lg text-white" data-lines-slide-up>
                  {description}
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="max-w-[800px]">
              <img
                src={introImage}
                width={900}
                height={717}
                alt={title || 'Admission'}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
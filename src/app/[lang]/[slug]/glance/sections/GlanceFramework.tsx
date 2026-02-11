import Image from 'next/image'

import { PageSection, resolveImageUrl } from '@/lib/api'

interface GlanceFrameworkProps {
  section: PageSection
}

export default function GlanceFramework({ section }: GlanceFrameworkProps) {
  const title = section.block?.c_1
  const descriptionHtml = section.block?.c_2 || ''
  const imageSrc = resolveImageUrl(section.block?.i_1)

  return (
    <section className="pt-9 pb-18">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-2">
          <div className="lg:pt-24">
            <div
              className="max-w-[650px]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1500">
              {title ? (
                <h3 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  {title}
                </h3>
              ) : null}
              {descriptionHtml ? (
                <div
                  className="text-gray-950"
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
              ) : null}
            </div>
          </div>
          <div>
            {imageSrc ? (
              <div
                className="lg:w-[675px]"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <Image
                  src={imageSrc}
                  width={675}
                  height={675}
                  className="w-full"
                  alt="Image"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

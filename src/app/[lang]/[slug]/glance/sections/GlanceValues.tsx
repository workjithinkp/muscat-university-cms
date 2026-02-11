import Image from 'next/image'

import { PageSection, resolveImageUrl } from '@/lib/api'

interface GlanceValuesProps {
  section: PageSection
}

export default function GlanceValues({ section }: GlanceValuesProps) {
  const title = section.block?.c_1
  const items = section.list || []

  return (
    <section className="pt-18 pb-9">
      <div className="container mx-auto">
        <div>
          {title ? (
            <h3 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-center text-4xl font-medium uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:m-auto after:h-[3px] after:w-[80px] after:content-['']">
              {title}
            </h3>
          ) : null}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center">
          {items.map((item, index) => {
            const imageSrc = resolveImageUrl(item.i_1)
            const descriptionHtml = item.c_2 || ''

            return (
              <div key={item.id ?? index}>
                <div
                  className="group relative mx-auto max-w-[400px] rounded-lg bg-white px-3 py-3 transition duration-300 hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="1500">
                  {imageSrc ? (
                    <div className="mx-auto mb-4 h-[225px] w-[225px] overflow-hidden rounded-full">
                      <Image
                        src={imageSrc}
                        width={200}
                        height={100}
                        className="w-full transition-all duration-300 group-hover:scale-110"
                        alt={item.c_1 || 'Value'}
                      />
                    </div>
                  ) : null}
                  <div className="px-4 py-4 text-center">
                    {item.c_1 ? (
                      <h3 className="text-brand-100 mb-4 text-2xl leading-none font-medium">
                        {item.c_1}
                      </h3>
                    ) : null}
                    {descriptionHtml ? (
                      <div
                        className="text-lg text-gray-800"
                        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

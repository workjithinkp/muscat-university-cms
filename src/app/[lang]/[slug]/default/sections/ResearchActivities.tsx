import Image from 'next/image'

import { PageSection, resolveImageUrl } from '@/lib/api'

interface ResearchActivitiesProps {
  section: PageSection
}

function withLineBreaks(value?: string | null) {
  if (!value) return ''
  return value.replace(/\|/g, '<br />')
}

export default function ResearchActivities({ section }: ResearchActivitiesProps) {
  const title = section.block?.c_1
  const items = section.list || []

  return (
    <section className="pt-18 pb-9">
      <div className="container mx-auto">
        {title ? (
          <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-3xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
            {title}
          </h2>
        ) : null}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const imageSrc = resolveImageUrl(item.i_1)
            const titleHtml = withLineBreaks(item.c_1)
            const number = String(index + 1).padStart(2, '0')

            return (
              <div key={item.id ?? index}>
                <div
                  className="group relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="1500">
                  <div className="relative overflow-hidden">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        width={375}
                        height={275}
                        className="h-full w-full object-cover transition duration-200 group-hover:scale-110"
                        alt={item.c_1 || 'Research activity'}
                      />
                    ) : null}
                  </div>
                  <div className="absolute right-0 bottom-0 left-0 h-[50%] bg-linear-to-t from-black/75 to-black/0 transition duration-300 group-hover:h-[100%]"></div>
                  <div className="bg-brand-200/50 absolute inset-[0.25rem] scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></div>
                  <div className="absolute right-0 bottom-0 left-0 z-10 px-4 py-4 transition duration-700 lg:px-8 lg:py-8">
                    <div className="transition-all duration-300">
                      {titleHtml ? (
                        <h3
                          className="text-2xl leading-none text-white"
                          dangerouslySetInnerHTML={{ __html: titleHtml }}
                        />
                      ) : null}
                    </div>
                  </div>
                  <div className="bg-brand-300 absolute top-4 left-4 flex h-[48px] w-[48px] items-center justify-center rounded-full text-xl text-white">
                    {number}
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

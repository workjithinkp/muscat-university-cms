import Image from 'next/image'

import { PageSection, resolveImageUrl } from '@/lib/api'

interface ResearchEcoSystemProps {
  section: PageSection
}

export default function ResearchEcoSystem({ section }: ResearchEcoSystemProps) {
  const title = section.block?.c_1
  const descriptionHtml = section.block?.c_2 || ''
  const name = section.block?.c_3
  const roleLine = [section.block?.c_4, section.block?.c_5]
    .filter(Boolean)
    .join('\n')
  const imageSrc = resolveImageUrl(section.block?.i_1)
  const items = section.list || []

  return (
    <section className="pt-9">
      <div className="container mx-auto">
        <div className="grid gap-4 lg:grid-cols-[1fr_400px] lg:gap-8">
          <div>
            {title ? (
              <h3 className="text-brand-100 mb-4 text-2xl leading-none font-medium lg:mb-12">
                {title}
              </h3>
            ) : null}
            <div className="mb-4 grid gap-4 lg:mb-8 lg:grid-cols-2 lg:gap-12">
              {items.map((item, index) => (
                <div key={item.id ?? index}>
                  <div className="border-s-brand-300 border-s-3 px-8 py-4">
                    {item.c_1}
                  </div>
                </div>
              ))}
            </div>
            {descriptionHtml ? (
              <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
            ) : null}
          </div>
          <div>
            {(imageSrc || name || roleLine) ? (
              <div className="group relative">
                {imageSrc ? (
                  <div className="overflow-hidden">
                    <Image
                      src={imageSrc}
                      width={400}
                      height={325}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                      alt={name || 'Profile'}
                    />
                  </div>
                ) : null}
                {(name || roleLine) ? (
                  <div className="px-4 py-4">
                    <div className="after:bg-brand-300 relative mb-8 inline-block h-full min-h-[150px] pb-4 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[90px] after:content-['']">
                      {name ? (
                        <h3 className="mb-4 text-3xl leading-none font-medium text-gray-950">
                          {name}
                        </h3>
                      ) : null}
                      {roleLine ? (
                        <p className="text-xl whitespace-pre-line text-gray-800">
                          {roleLine}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

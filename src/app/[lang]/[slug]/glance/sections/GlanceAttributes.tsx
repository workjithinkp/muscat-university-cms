import Image from 'next/image'

import { PageSection, resolveImageUrl } from '@/lib/api'

interface GlanceAttributesProps {
  section: PageSection
}

const backgroundClasses = [
  'bg-[#114a87]',
  'bg-[#0f4074]',
  'bg-[#114a87]',
  'bg-[#0f4074]',
  'bg-[#114a87]',
  'bg-[#0f4074]',
  'bg-[#195492]',
  'bg-[#114a87]',
]

const spanMap = [1, 1, 1, 1, 1, 1, 2, 1]

export default function GlanceAttributes({ section }: GlanceAttributesProps) {
  const title = section.block?.c_1
  const items = section.list || []

  return (
    <section className="pt-9 pb-9">
      <div className="container mx-auto">
        <div>
          {title ? (
            <h3 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              {title}
            </h3>
          ) : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const imageSrc = resolveImageUrl(item.i_1)
            const span = spanMap[index % spanMap.length]
            const spanClass =
              span === 2
                ? 'col-span-1 md:col-span-2 lg:col-span-2'
                : 'col-span-1'
            const backgroundClass =
              backgroundClasses[index % backgroundClasses.length]

            return (
              <div
                key={item.id ?? index}
                className={`${backgroundClass} ${spanClass}`}>
                <div className="group relative h-full px-4 py-6 lg:px-12 lg:py-12">
                  {imageSrc ? (
                    <div className="relative mb-6 h-[100px] w-[100px]">
                      <div className="bg-brand-200 absolute inset-0 scale-0 rounded-full transition duration-300 group-hover:scale-120"></div>
                      <div className="relative">
                        <Image
                          src={imageSrc}
                          width={100}
                          height={100}
                          className="w-full transition-all duration-300 group-hover:scale-80"
                          alt={item.c_1 || 'Attribute'}
                        />
                      </div>
                    </div>
                  ) : null}
                  {item.c_1 ? (
                    <h3 className="mb-2 text-2xl font-medium text-white">
                      {item.c_1}
                    </h3>
                  ) : null}
                  {item.c_2 ? <p className="text-white">{item.c_2}</p> : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

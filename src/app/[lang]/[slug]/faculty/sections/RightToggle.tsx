'use client'

import { PageSection, resolveImageUrl } from '@/lib/api'
import { useState } from 'react'
import Image from 'next/image'

interface Props {
  section: PageSection
  anchorId?: string
}

function html(content?: string | null) {
  if (!content) return null
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default function RightToggle({ section, anchorId }: Props) {
  const block = section.block || {}
  const list = section.list || []
  const title = block.c_1 || ''
  const [active, setActive] = useState(0)

  if (list.length === 0) return null

  return (
    <section id={anchorId} className="bg-brand-100 py-18 scroll-mt-[120px]">
      <div className="container mx-auto">
        <div>
          <h3
            className="after:bg-brand-300 relative mb-8 pb-8 text-center text-4xl font-medium text-white uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:m-auto after:h-[3px] after:w-[80px] after:content-['']"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1500"
          >
            {title}
          </h3>
        </div>
        <div>
          <div className="mx-auto flex h-[500px] max-w-[1150px] gap-1">
            {list.map((item, index) => (
              <div
                key={item.id || index}
                onClick={() => setActive(index)}
                className={`flex gap-1 overflow-hidden transition-all duration-500 ${
                  active === index ? 'flex-[6]' : 'flex-1'
                }`}
              >
                <div className="relative w-[150px] shrink-0 cursor-pointer">
                  <div className="relative h-full">
                    <img
                      src={resolveImageUrl(item.i_1) || '/images/placeholder.jpg'}
                      className="h-full w-full object-cover"
                      alt={item.c_1 || ''}
                    />
                    <div className="absolute right-0 bottom-0 left-0 h-full bg-linear-to-t from-black/75 to-black/0 transition duration-200 group-hover:h-[100%]"></div>
                  </div>
                  <div className="absolute inset-0 z-10">
                    <div className="absolute bottom-8 left-4 w-[350px] origin-bottom-left translate-x-[72px] -rotate-90 text-xl font-medium text-white uppercase">
                      {item.c_1}
                    </div>
                  </div>
                </div>

                <div
                  className={`transition-all duration-300 ${
                    active === index ? 'flex-1 opacity-100' : 'w-0 flex-0 opacity-0'
                  }`}
                >
                  <div className="h-full bg-white px-6 py-6 lg:px-12 lg:py-12">
                    <div
                      className={`transition-all delay-500 duration-300 ${
                        active === index
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-1/4 opacity-0'
                      }`}
                    >
                      <div className="text-brand-100 mb-4 text-3xl font-medium">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-3xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                        {item.c_1}
                      </div>
                      <div className="prose max-w-none text-gray-950">
                        {html(item.c_2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

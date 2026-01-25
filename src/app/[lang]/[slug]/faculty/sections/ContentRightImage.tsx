'use client'

import { PageSection, resolveImageUrl } from '@/lib/api'
import Image from 'next/image'

interface Props {
  section: PageSection
  anchorId?: string
}

function html(content?: string | null) {
  if (!content) return null
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default function ContentRightImage({ section, anchorId }: Props) {
  const block = section.block || {}
  const title = block.c_1 || ''
  const content = block.c_2 || ''
  const imageUrl = resolveImageUrl(block.i_1) || '/images/placeholder.jpg'

  return (
    <section id={anchorId} className="py-18 scroll-mt-[120px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
            <div className="max-w-[650px]">
              <h2 data-words-slide-right className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                {title}
              </h2>
              <div className="text-justify text-gray-950">
                {html(content)}
              </div>
            </div>
          </div>
          <div className="" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
            <div>
              <img
                src={imageUrl}
                alt={title}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

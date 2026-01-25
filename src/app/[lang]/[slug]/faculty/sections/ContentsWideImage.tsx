'use client'

import { PageSection, resolveImageUrl } from '@/lib/api'

interface Props {
  section: PageSection
  anchorId?: string
}

function html(content?: string | null) {
  if (!content) return null
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default function ContentsWideImage({ section, anchorId }: Props) {
  const block = section.block || {}
  const title = block.c_1 || ''
  const content = block.c_2 || ''
  const imageUrl = resolveImageUrl(block.i_1) || '/images/faculty-innovation-bg.jpg'

  return (
    <section
      id={anchorId}
      className="bg-cover bg-fixed bg-center py-24 scroll-mt-[120px]"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="container mx-auto">
        <div
          className="max-w-[650px]"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1500"
        >
          <h2 className="after:bg-brand-300 relative mb-8 pb-8 text-4xl font-medium text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
            {title}
          </h2>
          <div className="text-justify text-white">
            <div className="text-xl prose prose-invert max-w-none">
              {html(content)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

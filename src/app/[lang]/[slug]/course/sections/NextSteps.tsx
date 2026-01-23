'use client'

import { PageSection } from '@/lib/api'

interface Props {
  section: PageSection
  anchorId?: string
}

function html(content?: string | null) {
  if (!content) return null
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default function NextSteps({ section, anchorId }: Props) {
  const block = section.block || {}
  const list = (section.list || []).sort((a, b) => {
    const aSort = Number(a.sort || a.id || 0)
    const bSort = Number(b.sort || b.id || 0)
    return aSort - bSort
  })

  return (
    <div id={anchorId} className="mb-4 scroll-mt-[120px]">
      <div className="bg-brand-100/10 border-b-brand-100 text-brand-100 mb-4 border-b-2 px-4 py-4 text-2xl font-medium">
        {block.c_1 || 'Next Steps'}
      </div>

      <div className="px-4 py-4">
        {list.map((item) => (
          <div key={item.id || item.c_1}>
            <div className="border-l-brand-300 mb-4 border-l-2 pl-4 text-xl font-medium text-gray-800">
              {item.c_1}
            </div>
            <p className="mb-4 text-gray-800">{html(item.c_2) || item.c_2}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

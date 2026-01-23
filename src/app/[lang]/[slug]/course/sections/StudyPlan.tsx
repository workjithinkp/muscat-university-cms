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

export default function StudyPlan({ section, anchorId }: Props) {
  const block = section.block || {}
  const items = (section.list || []).sort((a, b) => {
    const aSort = Number(a.sort || a.id || 0)
    const bSort = Number(b.sort || b.id || 0)
    return aSort - bSort
  })

  return (
    <div id={anchorId} className="mb-4 scroll-mt-[120px]">
      <div className="bg-brand-100/10 border-b-brand-100 text-brand-100 mb-4 border-b-2 px-4 py-4 text-2xl font-medium">
        {block.c_1 || 'Study Plan'}
      </div>
      <div className="px-4 py-4">
        <div className="grid gap-3 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.id || item.c_1} className="mb-4">
              <div className="border-l-brand-300 mb-4 border-l-2 pl-4 text-xl font-medium text-gray-800">
                {item.c_1}
              </div>
              <ul className="mb-4 flex flex-col space-y-2 text-gray-800">
                {html(item.c_2)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

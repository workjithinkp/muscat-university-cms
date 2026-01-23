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

export default function ProgramsOverview({ section, anchorId }: Props) {
  const block = section.block || {}
  const title = block.c_1 || 'Overview'

  return (
    <div id={anchorId} className="mb-4 scroll-mt-[120px]">
      <div className="bg-brand-100/10 border-b-brand-100 text-brand-100 mb-4 border-b-2 px-4 py-4 text-2xl font-medium">
        {title}
      </div>
      <div className="px-4 py-4">
        {html(block.c_2)}
      </div>
    </div>
  )
}

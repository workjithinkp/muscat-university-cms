'use client'

import { PageSection } from '@/lib/api'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface Props {
  section: PageSection
  anchorId?: string
}

function html(content?: string | null) {
  if (!content) return null
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default function Faq({ section, anchorId }: Props) {
  const block = section.block || {}
  const list = (section.list || []).sort((a, b) => {
    const aSort = Number(a.sort || a.id || 0)
    const bSort = Number(b.sort || b.id || 0)
    return aSort - bSort
  })

  return (
    <div id={anchorId} className="mb-4 scroll-mt-[120px]">
      <div className="bg-brand-100/10 border-b-brand-100 text-brand-100 mb-4 border-b-2 px-4 py-4 text-2xl font-medium">
        {block.c_1 || 'Frequently Asked Questions'}
      </div>

      <div className="px-4 py-4">
        <Accordion type="single" collapsible className="w-full" defaultValue="faq-0">
          {list.map((item, index) => (
            <AccordionItem key={item.id || index} value={`faq-${index}`}>
              <AccordionTrigger className="!text-brand-100 bg-brand-100/2 px-2 text-xl font-medium text-gray-800 hover:no-underline">
                {item.c_1}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {html(item.c_2) || item.c_2}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

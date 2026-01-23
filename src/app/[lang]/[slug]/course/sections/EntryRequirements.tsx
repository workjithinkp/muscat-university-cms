'use client'

import { PageSection } from '@/lib/api'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface Props {
  section: PageSection
  anchorId?: string
}

function html(content?: string | null) {
  if (!content) return null
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default function EntryRequirements({ section, anchorId }: Props) {
  const block = section.block || {}
  const list = (section.list || []).sort((a, b) => {
    const aSort = Number(a.sort || a.id || 0)
    const bSort = Number(b.sort || b.id || 0)
    return aSort - bSort
  })

  return (
    <div id={anchorId} className="mb-4 scroll-mt-[120px]">
      <div className="bg-brand-100/10 border-b-brand-100 text-brand-100 mb-4 border-b-2 px-4 py-4 text-2xl font-medium">
        {block.c_1 || 'Entry Requirements'}
      </div>

      <div className="px-4 py-4">
        <p className="mb-4 text-gray-800">{html(block.c_2)}</p>

        {block.c_3 && (
          <p className="mb-4 text-lg font-medium text-gray-800">{block.c_3}</p>
        )}

        {block.c_4 && (
          <div className="border-l-brand-300 mb-4 border-l-2 pl-4 text-xl font-medium text-gray-800">
            {block.c_4.split('|').map((part, idx) => (
              <span key={idx}>
                {part.trim()}
                {idx < block.c_4.split('|').length - 1 && <br />}
              </span>
            ))}
          </div>
        )}

        {html(block.c_5)}

        {list.length > 0 && (
          <div className="max-w-[100%]">
            <Table className="w-full border-separate border-spacing-2 md:border-spacing-2">
              <TableHeader>
                <TableRow>
                  <TableHead className="bg-brand-100 border-brand-100 border p-2 !whitespace-normal text-white">
                    Certificate
                  </TableHead>
                  <TableHead className="bg-brand-100 border-brand-100 border p-2 !whitespace-normal text-white">
                    Grade
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {list.map((item) => (
                  <TableRow key={item.id || item.c_1}>
                    <TableCell className="border-brand-100/50 !text-brand-100 text-semibold bg-brand-100/5 border-1 p-2 whitespace-normal">
                      {item.c_1}
                    </TableCell>
                    <TableCell className="border-brand-100/50 text-brand-100 bg-brand-100/5 border-1 p-2 whitespace-normal">
                      {html(item.c_2) || item.c_2}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  )
}

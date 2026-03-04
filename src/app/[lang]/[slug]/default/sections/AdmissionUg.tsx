import { PageSection } from '@/lib/api'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface AdmissionUgProps {
  section: PageSection
}

export default function AdmissionUg({ section }: AdmissionUgProps) {
  const rows = [
    { title: section.block?.c_3, body: section.block?.c_2, index: 1 },
    { title: section.block?.c_5, body: section.block?.c_4, index: 2 },
    { title: section.block?.c_7, body: section.block?.c_6, index: 3 },
    { title: section.block?.c_9, body: section.block?.c_8, index: 4 },
    { title: section.block?.c_11, body: section.block?.c_10, index: 5 },
  ].filter((entry) => entry.title || entry.body)

  return (
    <>
    <section className="pt-9 pb-9">
      <div className="container mx-auto">
        <div className="mb-8">
          {section.block?.c_1 && <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">{section.block.c_1}</h2>}
        </div>

        <div className="space-y-8">
          {rows.map((entry, index) => (
            <div key={index}>
              {entry.title && (
                <div className="mb-8">
                  <h3 className="text-brand-100 relative text-3xl font-medium uppercase">
                    {entry.index}. {entry.title}
                  </h3>
                </div>
              )}

              {entry.body && (
                <div className="mb-2 max-w-[100%]">
                  <Table className="w-full">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="border-brand-100 text-brand-100 border bg-[#eef6ff] p-4 text-lg !whitespace-normal">
                          Details
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                          <div dangerouslySetInnerHTML={{ __html: entry.body }} />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className="container mx-auto">
      <div>
        <div className="h-[1px] bg-gray-200"></div>
      </div>
    </div>
    </>
  )
}
import { PageSection } from '@/lib/api'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface AdmissionHowApplyProps {
  section: PageSection
}

export default function AdmissionHowApply({ section }: AdmissionHowApplyProps) {
  const steps = [...(section.list || [])].sort(
    (a, b) => Number(a.sort || 0) - Number(b.sort || 0)
  )

  return (
    <>
    <section className="pt-9 pb-9">
      <div className="container mx-auto">
        <div className="mb-8">
          {section.block?.c_1 && <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">{section.block.c_1}</h2>}
          {section.block?.c_2 && <p className="text-lg font-medium">{section.block.c_2}</p>}
        </div>

        <div className="max-w-[100%]">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="border-brand-100 text-brand-100 border bg-[#eef6ff] p-4 text-lg !whitespace-normal">
                  Step
                </TableHead>
                <TableHead className="border-brand-100 text-brand-100 border bg-[#eef6ff] p-4 text-lg !whitespace-normal">
                  Action
                </TableHead>
                <TableHead className="border-brand-100 text-brand-100 border bg-[#eef6ff] p-4 text-lg !whitespace-normal">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {steps.map((item, index) => (
                <TableRow key={item.id || index}>
                  <TableCell className="border-gray/50 !text-brand-100 text-medium border-1 p-4 whitespace-normal">
                    <div className="flex items-center gap-2">
                      <div className="bg-brand-300 flex h-[38px] w-[38px] items-center justify-center rounded-full font-medium text-white">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="text-brand-100 text-lg font-medium">
                        {item.c_1}
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                    {item.c_2}
                  </TableCell>

                  <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                    {item.c_3}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
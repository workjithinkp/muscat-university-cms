import React from 'react'
import { PageSection } from '@/lib/api'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

interface InternationalCostProps {
    section: PageSection
}

export default function InternationalCost({ section }: InternationalCostProps) {
    const block = section.block
    const list = section.list || []
    if (!block) return null

    const title = block.c_1
    // Intro or Description
    const intro = block.c_2
    const footerNote = block.c_3

    return (
        <section id="cost-living" className="pt-9 pb-9">
            <div className="container mx-auto">
                <div>
                    <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                        {title}
                    </h2>
                    <p className="mt-4 mb-4 text-xl leading-none font-medium text-gray-950">
                        {intro}
                    </p>
                    <div className="max-w-[100%]">
                        <Table className="w-full">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="border-brand-100 text-brand-100 border p-4 text-lg !whitespace-normal">
                                        Expense
                                    </TableHead>
                                    <TableHead className="border-brand-100 text-brand-100 border p-4 text-lg !whitespace-normal">
                                        Typical Monthly Cost (OMR)
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {list.map((item, index) => (
                                    <TableRow key={item.id || index}>
                                        <TableCell className="border-gray/50 !text-brand-100 text-semibold border-1 p-4 whitespace-normal">
                                            <div className="flex items-center gap-2 text-xl text-gray-950">
                                                {item.c_1}
                                            </div>
                                        </TableCell>
                                        <TableCell className="border-gray/50 text-semibold border-1 p-4 text-lg whitespace-normal !text-gray-950">
                                            {item.c_2}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    {footerNote && (
                        <p
                            className="mt-4 mb-4 text-xl leading-none text-gray-950"
                            dangerouslySetInnerHTML={{
                                __html: `<span class="font-medium">Tuition & Fees:</span> ${footerNote}`,
                            }}
                        />
                    )}

                </div>
            </div>

            <div className="container mx-auto mt-12">
                <div>
                    <div className="h-[1px] bg-gray-200"></div>
                </div>
            </div>
        </section>
    )
}

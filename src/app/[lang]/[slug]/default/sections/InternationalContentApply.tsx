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

interface InternationalContentApplyProps {
    section: PageSection
}

export default function InternationalContentApply({ section }: InternationalContentApplyProps) {
    const block = section.block
    const list = section.list || []
    if (!block) return null

    const title = block.c_1 // "How to Apply"

    return (
        <section id="how-apply" className="pt-9 pb-9">
            <div className="container mx-auto">
                <div>
                    <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                        {title}
                    </h2>
                    <div className="max-w-[100%]">
                        <Table className="w-full">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="border-brand-100 text-brand-100 border p-2 text-lg !whitespace-normal">
                                        Step
                                    </TableHead>
                                    <TableHead className="border-brand-100 text-brand-100 border p-2 text-lg !whitespace-normal">
                                        What You Need
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {list.map((item, index) => (
                                    <TableRow key={item.id || index}>
                                        <TableCell className="border-gray/50 !text-brand-100 text-semibold border-1 p-4 whitespace-normal">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-brand-300 flex h-[38px] w-[38px] items-center justify-center rounded-full text-lg font-medium text-white">
                                                    {(index + 1).toString().padStart(2, '0')}
                                                </div>
                                                <div className="text-brand-100 text-xl">
                                                    {item.c_1}
                                                </div>
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

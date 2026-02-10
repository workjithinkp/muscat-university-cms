'use client'

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'

interface BreadcrumbItemType {
  label: string
  href?: string | null
}

export default function DynamicBreadcrumb({
  items,
}: {
  items: BreadcrumbItemType[]
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <div key={index} className="flex items-center">
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-white">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    className="text-white/50 hover:text-white"
                    href={item.href || '#'}>
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {/* Show separator except for the last item */}
              {!isLast && <BreadcrumbSeparator className="text-white/50" />}
            </div>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

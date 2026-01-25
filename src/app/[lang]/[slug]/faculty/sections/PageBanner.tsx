'use client'

import DynamicBreadcrumb from '@/components/common/breadcrumb'
import { PageData, PageSection, resolveImageUrl } from '@/lib/api'

interface Props {
  section: PageSection
  page: PageData
}

function html(content?: string | null) {
  if (!content) return null
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default function PageBanner({ section, page }: Props) {
  const block = section.block || {}
  const title = block.c_1 || page.name || page.title || 'Faculty'

  return (
    <section className="relative pt-[160px] pb-[72px]">
      <div className="absolute inset-0">
        <img
          src="/images/hero-programmes-01.jpg"
          width={1920}
          height={1000}
          className="h-full w-full object-cover"
          alt="Hero"
        />
      </div>

      <div className="relative mb-[48px] border-b-[1px] border-b-white/20 pb-3">
        <div className="container mx-auto">
          <DynamicBreadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Academics', href: '' },
              { label: title, href: null },
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="relative z-10 py-8 lg:py-18">
          <div className="max-w-[600px]">
            <h1 className="text-3xl leading-none font-medium text-white uppercase lg:text-5xl">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

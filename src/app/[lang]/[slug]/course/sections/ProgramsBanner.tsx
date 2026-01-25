'use client'

import DynamicBreadcrumb from '@/components/common/breadcrumb'
import { PageData, PageSection, resolveImageUrl } from '@/lib/api'
import { FaBook } from 'react-icons/fa6'
import { GiGraduateCap } from 'react-icons/gi'

interface Props {
  section: PageSection
  page: PageData
}

function html(content?: string | null) {
  if (!content) return null
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default function ProgramsBanner({ section, page }: Props) {
  const block = section.block || {}
  const heroImage = resolveImageUrl(block.i_1) || '/images/programme-intro.jpg'

  const details = [
    { label: 'Award:', value: block.c_1 },
    { label: 'Duration:', value: block.c_2 },
    { label: 'Study Mode:', value: block.c_3 },
    { label: 'Study Plan:', value: block.c_4 },
    { label: 'Faculty:', value: block.c_5 },
  ].filter((item) => Boolean(item.value))

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
              { label: 'Study', href: '/programmes' },
              ...(page.category
                ? [{ label: page.category, href: null }]
                : []),
              { label: block.c_7 || page.name || page.title || 'Programme', href: null },
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="relative z-10 flex flex-wrap bg-white p-2">
          <div className="w-full lg:w-1/2">
            <div className="px-4 py-4 lg:px-8 lg:py-8">
              <div className="mb-[18px] border-b border-b-gray-300 pb-[18px]">
                <h3 className="text-brand-100 text-3xl font-medium">
                  {block.c_7 || page.name || page.title || 'Programme'}
                </h3>
              </div>

              {details.length > 0 && (
                <div className="mb-4 border-b border-b-gray-300 pb-4">
                  <div className="flex items-center">
                    <div className="text-brand-100 mr-[10px] w-[32px] text-xl">
                      <GiGraduateCap />
                    </div>
                    <div className="text-brand-100 text-2xl font-medium">
                      Programme Details
                    </div>
                  </div>

                  <div className="ps-[42px]">
                    <ul className="flex flex-col space-y-2 text-lg text-gray-950">
                      {details.map((item) => (
                        <li
                          key={item.label}
                          className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                          <span className="text-brand-100 mr-2 font-medium">
                            {item.label}
                          </span>
                          <span>{item.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {block.c_6 && (
                <div className="mb-4">
                  <div className="flex items-center">
                    <div className="text-brand-100 mr-[10px] w-[32px] text-xl">
                      <FaBook />
                    </div>
                    <div className="text-brand-100 text-2xl font-medium">
                      Key Features
                    </div>
                  </div>

                  <div className="pl-[42px] text-lg text-gray-950">
                    {html(block.c_6)}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={heroImage}
              width={700}
              height={675}
              className="h-full w-full object-cover"
              alt={page.name || 'Programme image'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

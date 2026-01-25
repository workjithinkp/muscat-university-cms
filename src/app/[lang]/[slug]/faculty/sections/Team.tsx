'use client'

import Link from 'next/link'
import { PageSection, resolveImageUrl } from '@/lib/api'
import { LuArrowUpRight } from 'react-icons/lu'

interface Props {
  section: PageSection
  anchorId?: string
}

function html(content?: string | null) {
  if (!content) return null
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default function Team({ section, anchorId }: Props) {
  const list = section.list || []

  if (list.length === 0) return null

  return (
    <section id={anchorId} className="pt-9 pb-18 scroll-mt-[120px]">
      <div className="container mx-auto">
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
          <h3 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-center text-4xl font-medium uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:m-auto after:h-[3px] after:w-[80px] after:content-['']">
            MEET our faculties
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {list.map((member, index) => {
            const imageUrl = resolveImageUrl(member.i_1) || '/images/placeholder-avatar.jpg'
            const name = member.c_1 || ''
            const position = member.c_2 || ''
            const qualification = member.t_3 || ''

            return (
              <div
                key={member.id || index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1500"
              >
                <div className="group relative border-1 border-gray-300 px-3 py-3">
                  <div className="overflow-hidden">
                    <img
                      src={imageUrl}
                      width={400}
                      height={325}
                      alt={name}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="px-4 py-4">
                    <div className="after:bg-brand-300 relative mb-8 inline-block h-full min-h-[150px] pb-4 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[90px] after:content-['']">
                      <h3 className="mb-4 text-3xl leading-none font-medium text-gray-950">
                        {name}
                      </h3>
                      {position && (
                        <p className="text-xl whitespace-pre-line text-gray-800">{position}</p>
                      )}
                    </div>
                    <div>
                      <a
                        className="group bg-brand-200 flex flex-1 text-white transition duration-300 hover:bg-[#004685]"
                        href="#"
                      >
                        <span className="flex-1 px-4 py-3 text-xl group-hover:text-white">
                          View Profile
                        </span>
                        <span className="flex flex-0 items-center justify-center border-l-[1px] border-l-white px-4 py-3 text-xl group-hover:border-white group-hover:text-white">
                          <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            className="group inline-flex flex-1 border-1 border-gray-700 text-gray-950 transition duration-300 hover:border-[#08bed5] hover:bg-[#08bed5]"
            href="#"
          >
            <span className="flex-1 px-4 py-2 text-xl group-hover:text-white">
              Load More
            </span>
            <span className="flex flex-0 items-center justify-center border-l-1 border-gray-700 px-4 py-2 text-xl group-hover:border-white group-hover:text-white">
              <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

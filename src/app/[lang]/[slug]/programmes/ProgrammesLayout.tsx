import Link from 'next/link'
import Image from 'next/image'

import DynamicBreadcrumb from '@/components/common/breadcrumb'
import { fetchCoursesByTemplate, PageData, resolveImageUrl } from '@/lib/api'
import { LuArrowUpRight } from 'react-icons/lu'

export const dynamic = 'force-dynamic'

interface ProgrammesLayoutProps {
  page: PageData
  lang: string
}

export default async function ProgrammesLayout({ page, lang }: ProgrammesLayoutProps) {
  const programmes = await fetchCoursesByTemplate(lang, 'course', page.category)
  const heading = page.name || page.title || 'Programmes'
  const defaultImage = '/images/programmes-thumb-01.jpg'

  return (
    <>
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
                { label: 'Home', href: `/${lang}` },
                { label: 'Study', href: '#' },
                { label: heading, href: null },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="relative z-10 py-8 lg:py-18">
            <h1 className="text-3xl leading-none font-medium text-white uppercase lg:text-5xl">
              {heading}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-18">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((item, index) => {
              const imageSrc = resolveImageUrl(item.image) || defaultImage
              const href = `/${lang}/${item.slug}`

              return (
                <div key={item.id} className="">
                  <div
                    className="group relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    data-aos-duration="1500">
                    <div className="relative overflow-hidden">
                      <Image
                        src={imageSrc}
                        width={500}
                        height={300}
                        className="h-full w-full object-cover transition duration-200 group-hover:scale-110"
                        alt={item.name}
                      />
                    </div>
                    <div className="absolute right-0 bottom-0 left-0 h-[50%] bg-linear-to-t from-black/75 to-black/0 transition duration-300 group-hover:h-[100%]"></div>
                    <div className="bg-brand-200/75 absolute top-0 left-0 h-[210%] w-[210%] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full transition duration-500 group-hover:scale-100"></div>
                    <div className="absolute right-0 bottom-0 left-0 z-10 px-4 py-4 transition duration-700">
                      <div className="transition-all duration-300">
                        <h3 className="mb-4 line-clamp-2 pb-1 text-xl leading-none text-white">
                          {item.name}
                        </h3>
                      </div>
                      <div className="h-[0] transition-all duration-300 group-hover:h-[50px]">
                        <Link
                          className="group hover:bg-brand-100 hover:border-brand-100 inline-flex flex-1 translate-y-[100px] border-[1px] border-white text-white transition duration-500 group-hover:translate-y-[0]"
                          href={href}>
                          <span className="flex-1 px-4 py-2 group-hover:text-white">
                            Explore Programmes
                          </span>
                          <span className="flex flex-0 items-center justify-center border-l-[1px] border-white px-4 py-2 text-xl group-hover:text-white">
                            <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

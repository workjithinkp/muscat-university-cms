'use client'

import Image from 'next/image'
import FacultyForm from '@/components/faculty-engineering/faculty-form'
import { PageSection } from '@/lib/api'

interface Props {
  section: PageSection
  anchorId?: string
}

export default function SearchProfiles({ section, anchorId }: Props) {
  const block = section.block || {}
  const title = block.c_1 || 'Search faculty Profiles'

  return (
    <section id={anchorId} className="pt-9 pb-9 scroll-mt-[120px]">
      <div className="container mx-auto">
        <div className="bg-brand-100 rounded-tl-4xl rounded-br-4xl px-8 py-8 lg:px-12 lg:py-12">
          <div
            className="mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1500"
          >
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  src="/images/form-hd-icon.png"
                  width={38}
                  height={38}
                  alt="Icon"
                />
              </div>
              <div className="text-3xl font-medium text-white uppercase">
                {title}
              </div>
            </div>
          </div>
          <div
            className=""
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1500"
          >
            <FacultyForm />
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'

import { PageSection, resolveImageUrl } from '@/lib/api'

interface ResearchFocusAreaProps {
  section: PageSection
}

export default function ResearchFocusArea({ section }: ResearchFocusAreaProps) {
  const title = section.block?.c_1
  const description = section.block?.c_2
  const imageSrc = resolveImageUrl(section.block?.i_1)

  return (
    <section className="pt-9 pb-9">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_425px]">
          <div className="lg:order-2">
            {imageSrc ? (
              <div className="max-w-425px mx-auto">
                <Image src={imageSrc} width={425} height={250} alt="Focus" />
              </div>
            ) : null}
          </div>
          <div className="lg:order-1 lg:pt-12">
            {title ? (
              <h3 className="text-brand-100 mb-4 text-2xl leading-none font-medium">
                {title}
              </h3>
            ) : null}
            {description ? <p>{description}</p> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

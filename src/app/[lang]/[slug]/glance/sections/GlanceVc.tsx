import Image from 'next/image'

import { PageSection, resolveImageUrl } from '@/lib/api'

interface GlanceVcProps {
  section: PageSection
}

export default function GlanceVc({ section }: GlanceVcProps) {
  const title = section.block?.c_1
  const messageHtml = section.block?.c_2 || ''
  const name = section.block?.c_3
  const role = section.block?.c_4
  const imageSrc = resolveImageUrl(section.block?.i_1)

  return (
    <section
      className="bg-[url('/images/message-bg.jpg')] bg-fixed bg-center pt-18">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[55%_45%]">
          <div>
            <div className="mb-18">
              {title ? (
                <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  {title}
                </h2>
              ) : null}
              {messageHtml ? (
                <div dangerouslySetInnerHTML={{ __html: messageHtml }} />
              ) : null}

              {(name || role) ? (
                <div className="mt-8">
                  {name ? (
                    <h3 className="text-brand-100 mb-1 text-2xl font-medium">
                      {name}
                    </h3>
                  ) : null}
                  {role ? (
                    <p className="text-brand-100 mb-1 text-lg font-medium">
                      {role}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
          <div className="lg:self-end">
            {imageSrc ? (
              <div className="lg:w-[640px]">
                <Image
                  src={imageSrc}
                  width={640}
                  height={890}
                  className="w-full"
                  alt={name || 'VC message'}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

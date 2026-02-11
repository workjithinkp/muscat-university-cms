import Image from 'next/image'

import { PageSection, resolveImageUrl } from '@/lib/api'

interface GlanceVisionProps {
  section: PageSection
}

export default function GlanceVision({ section }: GlanceVisionProps) {
  const visionTitle = section.block?.c_1
  const visionText = section.block?.c_2
  const missionTitle = section.block?.c_3
  const missionText = section.block?.c_4
  const visionIcon = resolveImageUrl(section.block?.i_1)
  const missionIcon = resolveImageUrl(section.block?.i_2)

  return (
    <section className="bg-brand-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:border-r-[1px] md:border-e-[#3771ae]">
            <div className="mx-auto max-w-[500px] px-8 py-16">
              {visionTitle ? (
                <h3 className="after:bg-brand-300 relative mb-8 pb-8 text-center text-4xl font-medium text-white uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:m-auto after:h-[3px] after:w-[80px] after:content-['']">
                  {visionTitle}
                </h3>
              ) : null}
              {visionIcon ? (
                <div className="mx-auto mb-8 w-[100px]">
                  <Image src={visionIcon} width={100} height={100} alt="Icon" />
                </div>
              ) : null}
              {visionText ? (
                <p className="text-center text-xl font-medium text-white">
                  {visionText}
                </p>
              ) : null}
            </div>
          </div>
          <div>
            <div className="mx-auto max-w-[500px] px-8 py-16">
              {missionTitle ? (
                <h3 className="after:bg-brand-300 relative mb-8 pb-8 text-center text-4xl font-medium text-white uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:m-auto after:h-[3px] after:w-[80px] after:content-['']">
                  {missionTitle}
                </h3>
              ) : null}
              {missionIcon ? (
                <div className="mx-auto mb-8 w-[100px]">
                  <Image src={missionIcon} width={100} height={100} alt="Icon" />
                </div>
              ) : null}
              {missionText ? (
                <p className="text-center text-xl font-medium text-white">
                  {missionText}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'

import { PageSection, resolveImageUrl } from '@/lib/api'

interface ResearchVisionMissionProps {
  section: PageSection
}

export default function ResearchVisionMission({
  section,
}: ResearchVisionMissionProps) {
  const visionTitle = section.block?.c_1
  const visionText = section.block?.c_2
  const missionTitle = section.block?.c_3
  const missionText = section.block?.c_4
  const visionIcon = resolveImageUrl(section.block?.i_1)
  const missionIcon = resolveImageUrl(section.block?.i_2)

  return (
    <section className="pt-9 pb-18">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border-e-[1px] lg:border-e-gray-200">
            <div className="group relative px-4 lg:px-12">
              {visionIcon ? (
                <div className="relative mb-8 w-[125px]">
                  <div className="bg-brand-300 absolute inset-0 scale-0 rounded-full transition duration-300 group-hover:scale-110"></div>
                  <div className="relative">
                    <Image
                      src={visionIcon}
                      width={150}
                      height={150}
                      className="w-full transition-all duration-300 group-hover:scale-75 group-hover:brightness-0 group-hover:invert group-hover:filter"
                      alt={visionTitle || 'Vision'}
                    />
                  </div>
                </div>
              ) : null}
              {visionTitle ? (
                <h3 className="after:bg-brand-300 text-brand-100 relative mb-4 pb-4 text-2xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  {visionTitle}
                </h3>
              ) : null}
              {visionText ? <p className="text-lg">{visionText}</p> : null}
            </div>
          </div>
          <div>
            <div className="group px-4 lg:px-12">
              {missionIcon ? (
                <div className="relative mb-8 w-[125px]">
                  <div className="bg-brand-300 absolute inset-0 scale-0 rounded-full transition duration-300 group-hover:scale-120"></div>
                  <div className="relative">
                    <Image
                      src={missionIcon}
                      width={150}
                      height={150}
                      className="w-full transition-all duration-300 group-hover:scale-75 group-hover:brightness-0 group-hover:invert group-hover:filter"
                      alt={missionTitle || 'Mission'}
                    />
                  </div>
                </div>
              ) : null}
              {missionTitle ? (
                <h3 className="after:bg-brand-300 text-brand-100 relative mb-4 pb-4 text-2xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  {missionTitle}
                </h3>
              ) : null}
              {missionText ? <p className="text-lg">{missionText}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

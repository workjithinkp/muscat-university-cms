import Image from 'next/image'
import { PageSection } from '@/lib/api'

interface AdmissionWhyChooseProps {
  section: PageSection
}

export default function AdmissionWhyChoose({ section }: AdmissionWhyChooseProps) {
  const items = [...(section.list || [])].sort(
    (a, b) => Number(a.sort || 0) - Number(b.sort || 0)
  )
  const fallbackImages = [
    '/images/admission-choose-01.jpg',
    '/images/admission-choose-02.jpg',
    '/images/admission-choose-03.jpg',
    '/images/admission-choose-04.jpg',
  ]

  return (
    <>
    <section className="pt-18 pb-9">
      <div className="container mx-auto">
        <div className="mb-4 scroll-mt-[120px]">
          <div className="mb-8">
            {section.block?.c_1 && <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">{section.block.c_1}</h2>}
            {section.block?.c_2 && <p className="text-lg font-medium">{section.block.c_2}</p>}
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {items.map((item, index) => (
              <div key={item.id || index} className="flex flex-wrap gap-4">
                <div className="text-brand-300 text-2xl font-medium">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex-1">
                  {item.c_1 && (
                    <h3
                      className="text-brand-100 mb-2 text-2xl font-medium"
                      dangerouslySetInnerHTML={{ __html: item.c_1 }}
                    />
                  )}

                  {item.c_2 && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.c_2,
                      }}></p>
                  )}
                </div>

                <div className="w-[150px] overflow-hidden rounded-full">
                  <Image
                    src={fallbackImages[index] || '/images/admission-choose-01.jpg'}
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                    alt={item.c_1 || 'Admission item'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <div>
      <div className="h-[1px] bg-gray-200"></div>
    </div>
    </>
  )
}
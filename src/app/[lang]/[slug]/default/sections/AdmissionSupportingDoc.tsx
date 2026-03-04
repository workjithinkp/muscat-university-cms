import { PageSection } from '@/lib/api'

interface AdmissionSupportingDocProps {
  section: PageSection
}

export default function AdmissionSupportingDoc({ section }: AdmissionSupportingDocProps) {
  const items = [...(section.list || [])].sort(
    (a, b) => Number(a.sort || 0) - Number(b.sort || 0)
  )

  return (
    <section className="pt-9 pb-18">
      <div className="container mx-auto">
        <div className="mb-4 scroll-mt-[120px]">
          <div className="mb-8">
            {section.block?.c_1 && <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">{section.block.c_1}</h2>}
            {section.block?.c_2 && <p className="text-lg font-medium">{section.block.c_2}</p>}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
            {items.map((item, index) => (
              <div key={item.id || index} className="flex flex-wrap gap-4">
                <div>
                  <div className="bg-brand-300 flex h-[42px] w-[42px] items-center justify-center rounded-full font-medium text-white">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="flex-1">
                  {item.c_1 && (
                    <h3
                      className="mb-2 text-xl font-medium"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
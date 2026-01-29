import DynamicBreadcrumb from '@/components/common/breadcrumb'

import ImpactAccordion from '@/app/our-impact/components/impact-accordion'

import Link from 'next/link'
import Image from 'next/image'

export default function ImpactPage() {
  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-[900px] pt-[160px]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-impact-slider.jpg"
            width={1920}
            height={900}
            className="h-full w-full object-cover"
            alt="Hero"
          />
        </div>

        <div className="relative border-b-[1px] border-b-white/20 pb-3">
          <div className="container mx-auto">
            <DynamicBreadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'About', href: '#' },
                { label: 'Our Impact', href: null },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="relative z-10 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_450px] xl:gap-8 2xl:grid-cols-[1fr_550px]">
            <div>
              <div className="max-w-[750px] pt-32">
                <h2
                  className="mb-4 text-6xl leading-none font-medium text-white uppercase"
                  data-lines-slide-up>
                  our impact
                </h2>
                <h3
                  className="mb-4 text-2xl/7 font-medium text-white"
                  data-lines-slide-up>
                  At Muscat University, we are committed to transforming
                  individuals and communities through industry-engaged,
                  research-informed teaching and learning that is both rigorous
                  and relevant.
                </h3>
                <p className="text-lg text-white" data-lines-slide-up>
                  Our impact spans various domains, from environmental
                  sustainability to community engagement and academic
                  excellence.
                </p>
              </div>
            </div>
            <div>
              <div className="max-w-[550px]">
                <Image
                  src="/images/impact-intro.png"
                  width={550}
                  height={750}
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18">
        <div className="container mx-auto">
          <div>
            <ImpactAccordion />
          </div>
        </div>
      </section>
    </>
  )
}

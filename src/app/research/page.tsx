import Link from 'next/link'
import Image from 'next/image'

import DynamicBreadcrumb from '@/components/common/breadcrumb'

import ResearchSection from '@/components/home/ResearchSection'
import ResearchStructure from '@/components/research/research-structure'
import ResearchInnovation from '@/components/research/research-innovation'
import ResearchPartner from '@/components/research/research-partner'

const researchCards = [
  {
    number: '01',
    title: 'Technology and <br /> Engineering',
    image: '/images/research-activities-01.jpg',
  },
  {
    number: '02',
    title: 'Transport and <br /> Logistics',
    image: '/images/research-activities-02.jpg',
  },
  {
    number: '03',
    title: 'Business and <br /> Management',
    image: '/images/research-activities-03.jpg',
  },
  {
    number: '04',
    title: 'Digital Transformation <br /> and Innovation',
    image: '/images/research-activities-04.jpg',
  },
]

export default function ResearchPage() {
  return (
    <>
      <section className="relative pt-[160px] pb-[72px]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-research-slider.jpg"
            width={1920}
            height={900}
            className="h-full w-full object-cover"
            alt="Hero"
          />
        </div>

        <div className="relative mb-[48px] border-b-[1px] border-b-white/20 pb-3">
          <div className="container mx-auto">
            <DynamicBreadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Research @ Muscat University', href: null },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="relative z-10 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_450px] xl:gap-8 2xl:grid-cols-[1fr_650px]">
            <div>
              <div className="max-w-[750px] pt-32">
                <h2
                  className="mb-4 text-6xl leading-none font-medium text-white uppercase"
                  data-lines-slide-up>
                  Research @ <br />
                  Muscat University
                </h2>
                <p className="mb-4 text-lg text-white" data-lines-slide-up>
                  At Muscat University (MU), research is a cornerstone of our
                  academic mission and a driving force behind our contribution
                  to society.
                </p>
                <p className="text-lg text-white" data-lines-slide-up>
                  We are committed to producing impactful, high-quality research
                  that addresses both regional priorities and global challenges.
                </p>
              </div>
            </div>
            <div>
              <div className="max-w-[650px]">
                <Image
                  src="/images/research-intro.png"
                  width={790}
                  height={740}
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-18 pb-9">
        <div className="container mx-auto">
          <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-3xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
            Our research activities are anchored in four strategic disciplines:
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {researchCards.map((item, index) => (
              <div key={index} className="">
                <div
                  className="group relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="1500">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image}
                      width={375}
                      height={275}
                      className="h-full w-full object-cover transition duration-200 group-hover:scale-110"
                      alt={item.title}
                    />
                  </div>
                  <div className="absolute right-0 bottom-0 left-0 h-[50%] bg-linear-to-t from-black/75 to-black/0 transition duration-300 group-hover:h-[100%]"></div>
                  <div className="bg-brand-200/50 absolute inset-[0.25rem] scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></div>
                  <div className="absolute right-0 bottom-0 left-0 z-10 px-4 py-4 transition duration-700 lg:px-8 lg:py-8">
                    <div className="transition-all duration-300">
                      <h3
                        className="text-2xl leading-none text-white"
                        dangerouslySetInnerHTML={{
                          __html: item.title,
                        }}></h3>
                    </div>
                  </div>
                  <div className="bg-brand-300 absolute top-4 left-4 flex h-[48px] w-[48px] items-center justify-center rounded-full text-xl text-white">
                    {item.number}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_425px]">
            <div className="lg:order-2">
              <div className="max-w-425px mx-auto">
                <Image
                  src="/images/oman-2040-logo.jpg"
                  width={425}
                  height={250}
                  alt="Muscat 2040"
                />
              </div>
            </div>
            <div className="lg:order-1 lg:pt-12">
              <h3 className="text-brand-100 mb-4 text-2xl leading-none font-medium">
                These focus areas reflect MU&apos;s commitment to
                interdisciplinary collaboration and innovation.
              </h3>
              <p>
                Our research agenda is closely aligned with the Oman Vision
                2040, ensuring that our work supports national development goals
                while remaining globally relevant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-9">
        <div className="container mx-auto">
          <div className="grid gap-4 lg:grid-cols-[1fr_400px] lg:gap-8">
            <div>
              <h3 className="text-brand-100 mb-4 text-2xl leading-none font-medium lg:mb-12">
                We are actively enhancing MU&apos;s research ecosystem by:
              </h3>
              <div className="mb-4 grid gap-4 lg:mb-8 lg:grid-cols-2 lg:gap-12">
                <div>
                  <div className="border-s-brand-300 border-s-3 px-8 py-4">
                    Expanding research infrastructure to support faculty,
                    students, and external partners.
                  </div>
                </div>
                <div>
                  <div className="border-s-brand-300 border-s-3 px-8 py-4">
                    Fostering a culture of{' '}
                    <span className="font-medium">
                      applied research, consultancy,
                    </span>{' '}
                    and innovation.
                  </div>
                </div>
                <div>
                  <div className="border-s-brand-300 border-s-3 px-8 py-4">
                    Building strategic partnerships to amplify the reach and
                    impact of our research.
                  </div>
                </div>
                <div>
                  <div className="border-s-brand-300 border-s-3 px-8 py-4">
                    Supporting capacity-building initiatives that empower
                    researchers and promote excellence
                  </div>
                </div>
              </div>
              <div>
                <p>
                  Through these efforts, MU aims to become a hub for
                  transformative research that not only advances knowledge but
                  also delivers tangible benefits to industry, government, and
                  society.
                </p>
              </div>
            </div>
            <div>
              <div className="group relative">
                <div className="overflow-hidden">
                  <Image
                    src="/images/faculty-profile-01.jpg"
                    width={400}
                    height={325}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    alt="Mahmood Shah,PhD"
                  />
                </div>
                <div className="px-4 py-4">
                  <div className="after:bg-brand-300 relative mb-8 inline-block h-full min-h-[150px] pb-4 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[90px] after:content-['']">
                    <h3 className="mb-4 text-3xl leading-none font-medium text-gray-950">
                      Mahmood Shah,PhD
                    </h3>
                    <p className="text-xl whitespace-pre-line text-gray-800">
                      Director <br />
                      Research and Innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResearchSection />

      <section className="pt-9 pb-18">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-e-[1px] lg:border-e-gray-200">
              <div className="group relative px-4 lg:px-12">
                <div className="relative mb-8 w-[125px]">
                  <div className="bg-brand-300 absolute inset-0 scale-0 rounded-full transition duration-300 group-hover:scale-110"></div>
                  <div className="relative">
                    <Image
                      src="/images/research-vision-icon.png"
                      width={150}
                      height={150}
                      className="w-full transition-all duration-300 group-hover:scale-75 group-hover:brightness-0 group-hover:invert group-hover:filter"
                      alt="Icon"
                    />
                  </div>
                </div>
                <h3 className="after:bg-brand-300 text-brand-100 relative mb-4 pb-4 text-2xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  Vision
                </h3>
                <p className="text-lg">
                  To be recognized as a leader in providing quality education
                  and research that is relevant to the social and economic
                  priorities of Oman and of the wider region.
                </p>
              </div>
            </div>
            <div>
              <div className="group px-4 lg:px-12">
                <div className="relative mb-8 w-[125px]">
                  <div className="bg-brand-300 absolute inset-0 scale-0 rounded-full transition duration-300 group-hover:scale-120"></div>
                  <div className="relative">
                    <Image
                      src="/images/research-mission-icon.png"
                      width={150}
                      height={150}
                      className="w-full transition-all duration-300 group-hover:scale-75 group-hover:brightness-0 group-hover:invert group-hover:filter"
                      alt="Icon"
                    />
                  </div>
                </div>
                <h3 className="after:bg-brand-300 text-brand-100 relative mb-4 pb-4 text-2xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  Mission
                </h3>
                <p className="text-lg">
                  To empower individuals and communities through transformative
                  learning and teaching, informative research, and proactive
                  industry engagement in Oman and the GCC region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResearchInnovation />

      <ResearchStructure />

      <ResearchPartner />
    </>
  )
}

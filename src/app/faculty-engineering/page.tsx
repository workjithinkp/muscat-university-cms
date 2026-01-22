import Link from 'next/link'
import Image from 'next/image'

import DynamicBreadcrumb from '@/components/common/breadcrumb'
import FacultyAccordion from '@/components/faculty-engineering/faculty-accordion'
import FacultyForm from '@/components/faculty-engineering/faculty-form'

import { LuArrowUpRight } from 'react-icons/lu'

const profileData = [
  {
    image: '/images/faculty-profile-01.jpg',
    name: 'Dr. Nasir Zubair',
    position: 'Acting Director, Faculty of Transport and Logistics',
    href: '#',
  },
  {
    image: '/images/faculty-profile-02.jpg',
    name: 'Dr. Ahmed Zainul Abideen',
    position: 'Lecturer in Sustainable Supply Chain and Supply Chain Analytics',
    href: '#',
  },
  {
    image: '/images/faculty-profile-03.jpg',
    name: 'Dr. Nasir Zubair',
    position: 'Acting Director, Faculty of Transport and Logistics',
    href: '#',
  },
  {
    image: '/images/faculty-profile-04.jpg',
    name: 'Dr. Nasir Zubair',
    position: 'Acting Director, Faculty of Transport and Logistics',
    href: '#',
  },
  {
    image: '/images/faculty-profile-01.jpg',
    name: 'Dr. Nasir Zubair',
    position: 'Acting Director, Faculty of Transport and Logistics',
    href: '#',
  },
  {
    image: '/images/faculty-profile-02.jpg',
    name: 'Dr. Ahmed Zainul Abideen',
    position: 'Lecturer in Sustainable Supply Chain and Supply Chain Analytics',
    href: '#',
  },
]

export default function FacultyPage() {
  return (
    <>
      <section className="relative pt-[160px] pb-[72px]">
        <div className="absolute inset-0">
          <Image
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
                { label: 'Home', href: '/' },
                { label: 'Academics', href: '' },
                { label: 'Faculty of Engineering & Technology', href: null },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="relative z-10 py-8 lg:py-18">
            <div className="max-w-[600px]">
              <h1 className="text-3xl leading-none font-medium text-white uppercase lg:text-5xl">
                Faculty of Engineering & Technology
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="">
              <div
                className="max-w-[650px]"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <h2
                  data-words-slide-right
                  className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  About the Faculty
                </h2>
                <div className="text-justify text-gray-950">
                  <p
                    data-words-slide-right
                    className="mb-4 font-medium text-gray-950">
                    The Faculty of Engineering & Technology at Muscat University
                    stands at the forefront of engineering education in Oman,
                    committed to developing graduates who are poised to drive
                    innovation and lead in their respective industries. As one
                    of the founding faculties of the university, FET offers a
                    unique educational experience that integrates rigorous
                    academic coursework with substantial industry exposure.
                  </p>
                  <p data-words-slide-right className="text-gray-950">
                    A distinctive feature of the undergraduate programs is the
                    mandatory full-year industrial placement during the third
                    academic year. This immersive experience allows students to
                    apply theoretical knowledge in real-world settings,
                    enhancing their practical skills and employability.
                    Collaborations with industry leaders such as Petroleum
                    Development Oman (PDO), OQ, Schlumberger, and Oman LNG
                    ensure that the curriculum remains aligned with current
                    industry standards and future technological advancements.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <Image
                  src="/images/faculty-intro.jpg"
                  width={600}
                  height={425}
                  className="w-full"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-100 py-18">
        <div className="container mx-auto">
          <div>
            <h3
              className="after:bg-brand-300 relative mb-8 pb-8 text-center text-4xl font-medium text-white uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:m-auto after:h-[3px] after:w-[80px] after:content-['']"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1500">
              What Makes the Faculty Unique?
            </h3>
          </div>
          <div>
            <FacultyAccordion />
          </div>
        </div>
      </section>

      <section className="pt-18 pb-9">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
            <div className="">
              <div
                className="max-w-[650px]"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  Research and Innovation
                </h2>
                <div className="text-justify text-gray-950">
                  <p className="">
                    The Faculty of Engineering & Technology is committed to
                    fostering a culture of research and innovation. Faculty
                    members and students engage in projects that address
                    pressing engineering challenges, contributing to
                    technological advancements and societal progress. Research
                    areas include sustainable energy solutions, digital
                    technologies, and process engineering.
                  </p>
                </div>
              </div>
            </div>
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1500">
              <div>
                <Image
                  src="/images/faculty-research.jpg"
                  width={600}
                  height={350}
                  className="w-full"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="bg-brand-100 rounded-tl-4xl rounded-br-4xl px-8 py-8 lg:px-12 lg:py-12">
            <div
              className="mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1500">
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
                  Search faculty Profiles
                </div>
              </div>
            </div>
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1500">
              <FacultyForm />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-9 pb-18">
        <div className="container mx-auto">
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
            <h3 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-center text-4xl font-medium uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:m-auto after:h-[3px] after:w-[80px] after:content-['']">
              MEET our faculties
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {profileData.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1500">
                <div className="group relative border-1 border-gray-300 px-3 py-3">
                  <div className="overflow-hidden">
                    <Image
                      src={item.image}
                      width={400}
                      height={325}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                      alt={item.name}
                    />
                  </div>
                  <div className="px-4 py-4">
                    <div className="after:bg-brand-300 relative mb-8 inline-block h-full min-h-[150px] pb-4 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[90px] after:content-['']">
                      <h3 className="mb-4 text-3xl leading-none font-medium text-gray-950">
                        {item.name}
                      </h3>
                      <p className="text-xl whitespace-pre-line text-gray-800">
                        {item.position}
                      </p>
                    </div>
                    <div>
                      <a
                        className="group bg-brand-200 flex flex-1 text-white transition duration-300 hover:bg-[#004685]"
                        href={item.href}>
                        <span className="flex-1 px-4 py-3 text-xl group-hover:text-white">
                          View Profile
                        </span>

                        <span className="flex flex-0 items-center justify-center border-l-[1px] border-l-white px-4 py-3 text-xl group-hover:border-white group-hover:text-white">
                          <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              className="group inline-flex flex-1 border-1 border-gray-700 text-gray-950 transition duration-300 hover:border-[#08bed5] hover:bg-[#08bed5]"
              href="/">
              <span className="flex-1 px-4 py-2 text-xl group-hover:text-white">
                Load More
              </span>
              <span className="flex flex-0 items-center justify-center border-l-1 border-gray-700 px-4 py-2 text-xl group-hover:border-white group-hover:text-white">
                <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[url('/images/faculty-innovation-bg.jpg')] bg-cover bg-fixed bg-center py-24">
        <div className="container mx-auto">
          <div
            className="max-w-[650px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1500">
            <h2 className="after:bg-brand-300 relative mb-8 pb-8 text-4xl font-medium text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Industry Collaborations and Career Opportunities
            </h2>
            <div className="text-justify text-white">
              <p className="text-xl">
                FET's strong ties with industry partners provide students with
                valuable opportunities for internships, placements, and
                collaborative projects. These partnerships enhance the learning
                experience and facilitate career development, ensuring graduates
                are well-prepared for the workforce.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

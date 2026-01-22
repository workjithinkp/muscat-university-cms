import DynamicBreadcrumb from '@/components/common/breadcrumb'

import Link from 'next/link'
import Image from 'next/image'

import { HiOutlineMail } from 'react-icons/hi'
import { BsTelephone } from 'react-icons/bs'

const qipData = [
  {
    icon: '/images/quality-uniq-icon-01.png',
    title:
      'Developing key policies and frameworks that inform management of quality.',
  },
  {
    icon: '/images/quality-uniq-icon-02.png',
    title:
      'The focal point for projects related to national and international audit and accreditation.',
  },
  {
    icon: '/images/quality-uniq-icon-03.png',
    title:
      'Coordinates efforts to develop, monitor and review MU Strategic Plan.',
  },
  {
    icon: '/images/quality-uniq-icon-04.png',
    title:
      'Ensures the availability of committees and structures to facilitate the implementation and monitoring of quality practices. ',
  },
  {
    icon: '/images/quality-uniq-icon-05.png',
    title:
      'Responsible for designing mechanisms to collect feedback to inform practices.',
  },
  {
    icon: '/images/quality-uniq-icon-06.png',
    title:
      'Plays a vital role in disseminating knowledge and providing support through training sessions conducted on policy writing, operation planning, benchmarking, and risk management.',
  },
  {
    icon: '/images/quality-uniq-icon-07.png',
    title:
      'Participate in the planning and managing of Continuous Professional Development.',
  }, // 2/3 wide
]

const qualityData = [
  {
    logo: '/images/quality-com-logo-01.png',
    title:
      'Developing key policies and frameworks that inform management of quality.',
  },
  {
    logo: '/images/quality-com-logo-02.png',
    title:
      'The focal point for projects related to national and international audit and accreditation.',
  },
  {
    logo: '/images/quality-com-logo-03.png',
    title:
      'Coordinates efforts to develop, monitor and review MU Strategic Plan.',
  },
  {
    logo: '/images/quality-com-logo-04.png',
    title:
      'Coordinates efforts to develop, monitor and review MU Strategic Plan.',
  },
]

export const contactData = [
  {
    name: 'Dr. Samya Al Shanfari',
    position:
      'Executive Director for Quality Assurance and Institutional Performance',
    email: 'qip@muscatuniversity.edu.om',
    phone: '+968 2464 5404 / +968 2464 5412',
  },
  {
    name: 'Ms. Michelle Manal Estorque',
    position: 'Quality Assurance Manager',
    email: 'qip@muscatuniversity.edu.om',
    phone: '+968 2464 5404 / +968 2464 5412',
  },
  {
    name: 'Ms. Juhaina Al Maani',
    position:
      'Administrator for Quality Assurance and Institutional Performance',
    email: 'qip@muscatuniversity.edu.om',
    phone: '+968 2464 5404 / +968 2464 5412',
  },
]
export default function QualityAssurance() {
  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-[900px] pt-[160px]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-assurance-slider.jpg"
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
                { label: 'Quality Assurance & Accreditation', href: null },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="relative z-10 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_750px] xl:gap-8 2xl:grid-cols-[1fr_800px]">
            <div>
              <div className="max-w-[900px] pt-32">
                <h2
                  className="mb-4 text-6xl leading-none font-medium text-white uppercase"
                  data-lines-slide-up>
                  QUALITY ASSURANCE at MU
                </h2>
                <h3
                  className="mb-4 text-2xl/7 font-medium text-white"
                  data-lines-slide-up>
                  Muscat University (MU) acknowledges that quality is a culture
                  underpinned by collective responsibility and is embedded in
                  daily practices and processes.
                </h3>
              </div>
            </div>
            <div>
              <div className="max-w-[800px]">
                <Image
                  src="/images/assurance-intro.png"
                  width={900}
                  height={800}
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
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="">
              <div
                className="max-w-[650px]"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <h2
                  data-lines-slide-up
                  className="after:bg-brand-300 relative mb-8 pb-8 text-4xl font-medium text-gray-950 uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  About QIP
                </h2>
                <div className="text-justify text-gray-950">
                  <p
                    data-lines-slide-up
                    className="mb-4 text-lg font-medium text-gray-950">
                    Muscat University (MU) acknowledges that quality is a
                    culture underpinned by collective responsibility and is
                    embedded in daily practices and processes.
                  </p>
                  <p data-lines-slide-up className="text-gray-950">
                    The Quality Assurance and Institutional Performance (QIP)
                    Department is committed to supporting MU to achieve its
                    Mission, Vision, Values and Graduate Attributes. The QIP
                    carries out its responsibilities by closely working with
                    academic faculties and administrative departments to
                    coordinate efforts to monitor and enhance the quality of
                    learning, teaching, and provision of support services.
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
                  src="/images/quality-assurance-intro.jpg"
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
        <div className="mb-4 lg:mb-8">
          <h2 className="after:bg-brand-300 relative mb-8 pb-8 text-center text-4xl font-medium text-white uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:mx-auto after:h-[3px] after:w-[80px] after:content-['']">
            The QIP&apos;s responsibilities include the following:
          </h2>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(375px,100%),1fr))] justify-items-center gap-4 lg:gap-8 xl:gap-12">
            {qipData.map((item, index) => (
              <div key={index}>
                <div
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="1500">
                  <div className='before:bg-brand-300 relative mb-4 before:absolute before:top-1/2 before:right-0 before:left-0 before:h-[1px] before:content-[""]'>
                    <div className="bg-brand-200 relative z-5 mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full">
                      <div className="bg-brand-100 absolute inset-0 scale-0 rounded-full transition duration-300 group-hover:scale-90"></div>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={70}
                        height={70}
                        className="relative z-5 w-full max-w-[70px] transition-all duration-300 group-hover:scale-75"
                      />
                    </div>
                  </div>
                  <div className="px-4 py-4 text-center">
                    <h3 className="text-xl text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-apply" className="py-18">
        <div className="container mx-auto">
          <div className="mb-4 lg:mb-8">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-center text-4xl font-medium uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:mx-auto after:h-[3px] after:w-[80px] after:content-['']">
              MU Quality Policy
            </h2>
            <div className="mx-auto max-w-[950px]">
              <p className="text-center text-xl text-gray-950">
                The MU Quality Policy sets out the Muscat University approach to
                quality management. It lays out the approach by which MU assures
                all the stakeholders&apos; commitment to quality.
              </p>
            </div>
          </div>
          <div className="mx-auto mb-4 max-w-[950px] lg:mb-12">
            <p className="text-center text-xl font-medium text-gray-950">
              The MU Quality Policy is guided by the following:
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] justify-items-center gap-4">
            {qualityData.map((item, index) => (
              <div
                key={index}
                className="w-full border-e border-e-gray-200 last:border-e-0">
                <Link
                  href="#"
                  className="py-y relative mx-auto block h-full max-w-[375px] rounded-lg bg-white px-4 transition duration-300 hover:shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="1500">
                  <div className="relative z-5 mx-auto mb-4 max-w-[275px]">
                    <Image
                      src={item.logo}
                      alt={item.title}
                      width={275}
                      height={150}
                      className="w-full transition duration-300 group-hover:scale-[1.1]"
                    />
                  </div>
                  <div className="py-4 text-center">
                    <h3 className="text-xl text-gray-950">{item.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="bg-brand-200 px-4 py-4 lg:px-12 lg:py-12">
              <div
                className="max-w-[650px]"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <h2
                  data-lines-slide-up
                  className="after:bg-brand-300 relative mb-8 pb-8 text-4xl font-medium text-gray-950 text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  MU Quality Management Committee (QMC)
                </h2>
                <div className="text-justify text-gray-950">
                  <p className="mb-4 text-lg text-white">
                    The MU Quality Management Committee oversees M&apos;s
                    approach to quality management. The QMC supports a culture
                    of quality and continuous improvement to support achieving
                    MU&apos;s mission, vision, strategy and values.
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
                  src="/images/quality-assurance-intro.jpg"
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
          <h2
            data-lines-slide-up
            className="after:bg-brand-300 relative mb-8 pb-8 text-4xl font-medium text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {contactData.map((item, index) => (
              <div
                key={index}
                className="w-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1500">
                <div className="border-b-brand-300 mb-4 border-b-[3px] pb-2 text-2xl font-medium text-white">
                  {item.name}
                </div>
                <div className="border-b-brand-200 mb-4 min-h-[75px] border-b-[1px] pb-2 text-xl text-white">
                  {item.position}
                </div>
                <div>
                  <div className="border-b-brand-200 mb-4 flex items-center gap-2 border-b-[1px] pb-2">
                    <div className="me-2 w-[38px] text-center text-2xl text-white">
                      <HiOutlineMail />
                    </div>
                    <div className="flex-1">
                      <Link
                        href={`mailto:${item.email}`}
                        className="hover:text-brand-200 text-white transition duration-300">
                        {item.email}
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="me-2 w-[38px] text-center text-2xl text-white">
                      <BsTelephone />
                    </div>
                    <div className="flex-1">
                      <Link
                        href={`tel:${item.phone.replace(/\s/g, '')}`}
                        className="hover:text-brand-200 text-white transition duration-300">
                        {item.phone}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { BiSolidQuoteLeft } from 'react-icons/bi'
import DynamicBreadcrumb from '@/components/common/breadcrumb'
import { ImCheckmark } from 'react-icons/im'
import React, { Fragment } from 'react'
import TestimonialSwiper from '@/app/placement/components/testimonial-swiper'

export const whyPlacement = [
  {
    num: '01',
    title: 'Bridge theory to practice',
    description:
      'Experience life in a workplace setting where what you’ve studied meets how businesses operate.',
  },
  {
    num: '02',
    title: 'Accelerate your career potential',
    description:
      'Build a résumé that sets you apart with real projects, responsibilities, and exposure.',
  },
  {
    num: '03',
    title: 'Clarify your professional path',
    description:
      'Develop the analytical and digital skills essential for your future degree.Explore opportunities across Logistics, Chemical Engineering, Accounting (and more) before settling into your final years.',
  },
  {
    num: '04',
    title: 'Network, connect, grow',
    description:
      'Small class sizes and dedicated tutors guide you every step of the way.',
  },
]

export const howLong = [
  {
    description:
      'The placement takes place in your <span class="font-medium">third academic year,</span> spanning a full academic cycle (approx. 9–10 months).',
  },
  {
    description:
      'You’ll pause your on-campus studies, immerse yourself in an industrial setting, then return to finish your final year equipped with experience.',
  },
]

const numbersData = [
  {
    year: '2023-2024',
    count: 273,
    label: 'students placed',
  },
  {
    year: '2020–2024 (cumulative)',
    count: 443,
    label: 'students',
  },
  {
    year: 'Industry Partners (2020–2024)',
    count: 71,
    label: 'companies',
  },
]

export const placementPartners = [
  {
    src: '/images/placement-partner-logo-01.jpg',
    width: 110,
    height: 60,
    alt: 'Placement Partner 1',
  },
  {
    src: '/images/placement-partner-logo-02.jpg',
    width: 105,
    height: 60,
    alt: 'Placement Partner 2',
  },
  {
    src: '/images/placement-partner-logo-03.jpg',
    width: 200,
    height: 35,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-04.jpg',
    width: 200,
    height: 35,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-05.jpg',
    width: 100,
    height: 60,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-06.jpg',
    width: 220,
    height: 40,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-07.jpg',
    width: 70,
    height: 70,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-08.jpg',
    width: 115,
    height: 40,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-09.jpg',
    width: 160,
    height: 40,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-10.jpg',
    width: 185,
    height: 45,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-11.jpg',
    width: 125,
    height: 40,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-12.jpg',
    width: 115,
    height: 50,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-13.jpg',
    width: 155,
    height: 45,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-14.jpg',
    width: 100,
    height: 70,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-15.jpg',
    width: 125,
    height: 75,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-16.jpg',
    width: 65,
    height: 65,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-17.jpg',
    width: 90,
    height: 70,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-18.jpg',
    width: 140,
    height: 90,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-19.jpg',
    width: 90,
    height: 90,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-20.jpg',
    width: 80,
    height: 80,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-21.jpg',
    width: 105,
    height: 60,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-22.jpg',
    width: 100,
    height: 70,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-23.jpg',
    width: 125,
    height: 85,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-24.jpg',
    width: 145,
    height: 110,
    alt: 'Placement Partner 3',
  },
  {
    src: '/images/placement-partner-logo-25.jpg',
    width: 185,
    height: 70,
    alt: 'Placement Partner 3',
  },
]

export default function PlacementPage() {
  return (
    <>
      <section className="relative min-h-[900px] pt-[160px]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-placement-slider.jpg"
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
                { label: 'Study', href: '#' },
                { label: 'Placement', href: null },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="relative z-10 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_450px] xl:gap-8 2xl:grid-cols-[1fr_750px]">
            <div>
              <div className="max-w-[725px] pt-32">
                <h2
                  className="mb-4 text-6xl leading-none font-medium text-white uppercase"
                  data-lines-slide-up>
                  Welcome to Your Professional Launchpad
                </h2>

                <p className="mb-4 text-lg text-white" data-lines-slide-up>
                  At Muscat University, we believe that true learning happens
                  when classrooms meet real work. Our Placement Year Programme
                  offers students a full year of hands-on industry
                  experience—giving you a head start in building your career,
                  connecting to real projects, and applying what you learn in
                  the field.
                </p>
                <p className="mb-4 text-lg text-white" data-lines-slide-up>
                  Rather than waiting until after graduation, you’ll spend one
                  entire year inside a workplace — emerging stronger, more
                  confident, and ready to make your mark in your field.
                </p>
              </div>
            </div>
            <div>
              <div className="max-w-[750px]">
                <Image
                  src="/images/placement-intro.png"
                  width={750}
                  height={750}
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
          <div className="mb-4 scroll-mt-[120px]">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Why the Placement Year Matters
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[24%_66%] lg:gap-8">
              <div>
                <div>
                  <Image
                    src="/images/placement-matters.jpg"
                    width={360}
                    height={535}
                    className="h-full w-full object-cover transition duration-300"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="lg:px-10 lg:py-4">
                <div className="mb-4">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1500">
                    <h3 className="text-brand-100 relative mb-4 text-2xl font-medium uppercase after:absolute">
                      Transforming Students into Professionals
                    </h3>
                  </div>
                </div>
                <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-2">
                  {whyPlacement.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-xl px-4 py-4 transition duration-300 hover:shadow-xl">
                      <div className="text-brand-300 mb-2 text-2xl font-medium">
                        {item.num}
                      </div>
                      <h3 className="text-brand-100 mb-4 text-xl font-medium">
                        {item.title}
                      </h3>
                      <p className="text-gray-950">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="grid bg-[#e7f3ff] lg:grid-cols-[1fr_445]">
            <div className="px-4 py-4 lg:px-12 lg:py-12">
              <div className="text-brand-100 mb-4 max-w-[72px] text-4xl">
                <BiSolidQuoteLeft />
              </div>
              <h3 className="text-brand-100 mb-4 text-2xl font-medium">
                “The placement year gave me clarity, confidence, and real work
                experience to back my degree.”
              </h3>
              <p className="text-brand-100">Past participant</p>
            </div>
            <div>
              <Image
                src="/images/participant.jpg"
                width={445}
                height={345}
                className="h-full w-full object-cover transition duration-300"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              When & How Long
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:gap-8">
            {howLong.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-brand-300 mt-1">
                  <ImCheckmark />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-center text-4xl font-medium uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:mx-auto after:h-[3px] after:w-[80px] after:content-['']">
              By the Numbers
            </h2>
          </div>
          <div className="-mx-3 mx-auto mb-4 flex max-w-[1000px] flex-wrap">
            {numbersData.map((item, index) => (
              <React.Fragment key={index}>
                {/* Each Fact Item */}
                <div className="w-full px-3 lg:flex-1">
                  <div
                    className="group m-auto"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    data-aos-duration="1500">
                    <div className="text-brand-100 text-center text-lg leading-none font-medium lg:text-lg">
                      {item.year}
                    </div>
                    <div className="text-brand-100 mb-4 text-center text-6xl leading-none font-medium lg:text-7xl">
                      <span className="count-num" data-count={item.count}>
                        0
                      </span>
                    </div>
                    <div className="text-brand-100 text-center text-lg leading-none font-medium lg:text-2xl">
                      {item.label}
                    </div>
                  </div>
                </div>

                {/* separator */}
                {index !== numbersData.length - 1 && (
                  <div className="my-12 h-[1px] w-full bg-[#cbdff5] lg:my-0 lg:mt-2 lg:h-[150px] lg:w-[1px]"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div>
            <p className="text-center">
              These figures reflect our ongoing commitment to connecting
              students with trusted organizations and delivering real value.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-9 pb-18">
        <div className="container mx-auto">
          <div>
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Testimonials
            </h2>
          </div>
          <div>
            <TestimonialSwiper />
          </div>
        </div>
      </section>

      <section className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Our Industry Partners
            </h2>
            <p>
              We partner with leading companies across multiple sectors who
              share our vision: to develop Oman’s next generation of
              professionals.
            </p>
          </div>
          <div className="mb-4">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1500">
              <h3 className="text-brand-100 relative mb-4 text-2xl font-medium uppercase after:absolute">
                You will study
              </h3>
            </div>
          </div>
          <div className="mb-4 flex flex-wrap items-center gap-4">
            {placementPartners.map((logo, index) => (
              <div key={index}>
                <img
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  className="w-full object-cover"
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>
          <div className="mb-4">
            <p>
              These partners host, mentor, and guide our students, drawing from
              decades of industry experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e7f3ff] pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-center text-4xl font-medium uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:mx-auto after:h-[3px] after:w-[80px] after:content-['']">
              How the Year Works
            </h2>
          </div>
          <div className="mb-4 grid grid-cols-1 gap-4 lg:mb-8 lg:grid-cols-4">
            <div className="min-h-[285px] bg-white px-4 pt-4 pb-4 text-center lg:px-8 lg:pt-8">
              <div className="bg-brand-300 mx-auto mb-4 flex h-[38px] w-[38px] items-center justify-center rounded-full font-medium text-white lg:mb-8">
                1
              </div>
              <h4 className="text-lg leading-6 font-medium">
                You’ll integrate into a company team, contribute to real tasks,
                projects, and objectives
              </h4>
            </div>
            <div className="min-h-[285px] bg-white px-4 pt-4 pb-4 text-center lg:px-8 lg:pt-8">
              <div className="bg-brand-300 mx-auto mb-4 flex h-[38px] w-[38px] items-center justify-center rounded-full font-medium text-white lg:mb-8">
                2
              </div>
              <h4 className="text-lg leading-6 font-medium">
                Receive guidance from company supervisors & university mentors
              </h4>
            </div>
            <div className="min-h-[285px] bg-white px-4 pt-4 pb-4 text-center lg:px-8 lg:pt-8">
              <div className="bg-brand-300 mx-auto mb-4 flex h-[38px] w-[38px] items-center justify-center rounded-full font-medium text-white lg:mb-8">
                3
              </div>
              <h4 className="text-lg leading-6 font-medium">
                Attend periodic assessments and reflection sessions
              </h4>
            </div>
            <div className="min-h-[285px] bg-white px-4 pt-4 pb-4 text-center lg:px-8 lg:pt-8">
              <div className="bg-brand-300 mx-auto mb-4 flex h-[38px] w-[38px] items-center justify-center rounded-full font-medium text-white lg:mb-8">
                4
              </div>
              <h4 className="text-lg leading-6 font-medium">
                Document your experience, gather reflections, and present
                learnings upon return
              </h4>
            </div>
          </div>
          <div className="text-center">
            <p>
              At the end, you’ll receive a formal certificate validating your
              placement—and often a portfolio or project outcomes you can
              showcase.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              What You’ll Gain
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-[32%_68%]">
            <div className="border-text-gray-200 border-1">
              <Image
                src="/images/placement-gain.jpg"
                width={475}
                height={450}
                alt="Image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="lg:ps-8 lg:pt-8 xl:ps-12 xl:pt-12">
              <ul className="mb-4 flex flex-col gap-2 lg:mb-8">
                <li className="flex items-start gap-4">
                  <div className="text-brand-300 mt-1">
                    <ImCheckmark />
                  </div>
                  <div>
                    <p>Technical skills aligned with your field</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-brand-300 mt-1">
                    <ImCheckmark />
                  </div>
                  <div>
                    <p>
                      Soft skills like communication, teamwork, problem-solving,
                      and professionalism
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-brand-300 mt-1">
                    <ImCheckmark />
                  </div>
                  <div>
                    <p>Industry understanding and insights</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-brand-300 mt-1">
                    <ImCheckmark />
                  </div>
                  <div>
                    <p>A stronger network of contacts</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-brand-300 mt-1">
                    <ImCheckmark />
                  </div>
                  <div>
                    <p>
                      Potential pathways to job offers or extended internships
                    </p>
                  </div>
                </li>
              </ul>
              <p>
                In Oman, national initiatives like Eidaad highlight the
                importance of bridging academia and industry, offering similar
                year-long internship structures to deepen collaboration and
                boost graduate readiness. (Oman’s Eidaad initiative is now in
                its sixth phase.){' '}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-9 pb-18">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2">
            <div className="me-[-200px] w-[calc(100%+200px)]">
              <div className="bg-brand-100 border-e-brand-300 relative border-e-[3px] px-8 py-12">
                <h3 className="text-brand-200 mb-4 text-2xl font-medium uppercase lg:mb-8 lg:text-3xl">
                  Ready to Take the Leap?
                </h3>
                <p className="mb-4 text-white lg:mb-8">
                  If you're ready to turn your degree into a journey of
                  professional discovery, this is your moment. Apply to one of
                  our BSc programmes and get ready to dive into a year that will
                  define your career path.
                </p>
                <Link
                  className="bg-brand-300 hover:bg-brand-200 px-4 py-2 text-white transition duration-300 lg:px-8"
                  href="">
                  For partnerships Contact Us
                </Link>
              </div>
            </div>
            <div className="">
              <div>
                <Image
                  src="/images/placement-leap.jpg"
                  width={865}
                  height={450}
                  className="w-full transition duration-300"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

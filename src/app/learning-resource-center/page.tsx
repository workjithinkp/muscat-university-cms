import Link from 'next/link'
import Image from 'next/image'

import { Separator } from '@/components/ui/separator'

import DynamicBreadcrumb from '@/components/common/breadcrumb'

import { LuArrowUpRight } from 'react-icons/lu'
import { TfiTime } from 'react-icons/tfi'
import { TfiEmail } from 'react-icons/tfi'
import { PiPhoneLight } from 'react-icons/pi'

export const learningRules = [
  {
    id: 1,
    icon: '/images/learning-res-rule-icon-01.png',
    title: 'Quiet Zone',
    description:
      'Maintain a quiet atmosphere in designated study areas to respect the concentration of others.',
  },
  {
    id: 2,
    icon: '/images/learning-res-rule-icon-02.png',
    title: 'Cell Phone Usage',
    description:
      'Keep your mobile devices on silent mode and limit phone conversations to designated areas.',
  },
  {
    id: 3,
    icon: '/images/learning-res-rule-icon-03.png',
    title: 'Food and Drink',
    description:
      'Refrain from consuming food in the library, and use spill-proof containers for drinks to prevent damage to materials.',
  },
  {
    id: 4,
    icon: '/images/learning-res-rule-icon-04.png',
    title: 'Computer Use',
    description:
      'Use library computers for academic purposes, and be mindful of others waiting to access them.',
  },
  {
    id: 5,
    icon: '/images/learning-res-rule-icon-05.png',
    title: 'Borrowing Policies',
    description:
      'Familiarize yourself with our borrowing policies, including loan periods and renewal options. Return borrowed materials on time to avoid fines.',
  },
  {
    id: 6,
    icon: '/images/learning-res-rule-icon-06.png',
    title: 'Respect Library Staff',
    description:
      'Our staff is here to assist you. Please treat them and fellow library users with respect and courtesy.',
  },
]

export default function LearningResource() {
  return (
    <>
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
                { label: 'Academic', href: '#' },
                { label: 'Learning Resource Center', href: null },
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
                  Welcome to the Learning Resources Centre
                </h2>
                <h3
                  className="mb-4 text-2xl/7 font-medium text-white"
                  data-lines-slide-up>
                  Explore a World of Knowledge
                </h3>
                <p className="text-lg text-white" data-lines-slide-up>
                  Welcome to the heart of Muscat University's academic
                  resources—the Learning Resources Centre (LRC). Our mission is
                  to empower students, faculty, and researchers with the tools
                  and information they need to excel in their academic pursuits.
                </p>
              </div>
            </div>
            <div>
              <div className="max-w-[750px]">
                <Image
                  src="/images/learning-intro.png"
                  width={700}
                  height={700}
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
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-12">
            <div className="">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <Image
                  src="/images/learning-res-explore.jpg"
                  width={700}
                  height={500}
                  className="w-full"
                  alt="Image"
                />
              </div>
            </div>
            <div className="">
              <div
                className="lg:pt-12"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <h2
                  data-words-slide-right
                  className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  Explore a World of Knowledge
                </h2>
                <div className="text-justify text-gray-950">
                  <p
                    data-words-slide-right
                    className="mb-4 font-medium text-gray-950">
                    Welcome to the heart of Muscat University's academic
                    resources—the Learning Resources Centre (LRC).
                  </p>
                  <p data-words-slide-right className="text-gray-950">
                    Our mission is to empower students, faculty, and researchers
                    with the tools and information they need to excel in their
                    academic pursuits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-9">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-12">
            <div className="lg:order-2">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <Image
                  src="/images/learning-res-discover.jpg"
                  width={700}
                  height={500}
                  className="w-full"
                  alt="Image"
                />
              </div>
            </div>
            <div className="lg:order-1">
              <div
                className="lg:pt-12"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <h2
                  data-words-slide-right
                  className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  Discover a Rich Collection
                </h2>
                <div className="text-justify text-gray-950">
                  <p
                    data-words-slide-right
                    className="mb-4 font-medium text-gray-950">
                    Our library boasts an extensive collection of books,
                    journals, multimedia resources, and digital archives that
                    cover a diverse range of subjects.
                  </p>
                  <p data-words-slide-right className="text-gray-950">
                    Whether you're delving into research, seeking course
                    materials, or simply expanding your knowledge, the LRC is
                    your gateway to a world of information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-9">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-12">
            <div className="">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <Image
                  src="/images/learning-res-facilities.jpg"
                  width={700}
                  height={500}
                  className="w-full"
                  alt="Image"
                />
              </div>
            </div>
            <div className="">
              <div
                className="lg:pt-12"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <h2
                  data-words-slide-right
                  className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  State-of-the-Art Facilities
                </h2>
                <div className="text-justify text-gray-950">
                  <p
                    data-words-slide-right
                    className="mb-4 font-medium text-gray-950">
                    The Learning Resources Centre is more than just a repository
                    of books. It's a modern space designed to foster learning
                    and collaboration.
                  </p>
                  <p data-words-slide-right className="text-gray-950">
                    Our facilities include comfortable reading areas, dedicated
                    study spaces, computer labs, and access to online databases.
                    We provide an environment that encourages both individual
                    study and group collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-18 pb-9">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-12">
            <div className="lg:order-2">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <Image
                  src="/images/learning-res-library.jpg"
                  width={700}
                  height={500}
                  className="w-full"
                  alt="Image"
                />
              </div>
            </div>
            <div className="lg:order-1">
              <div
                className="lg:pt-12"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <h2
                  data-words-slide-right
                  className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  Library E-Services: <br />
                  Your Online Gateway
                </h2>
                <div className="text-justify text-gray-950">
                  <p
                    data-words-slide-right
                    className="mb-4 font-medium text-gray-950">
                    Explore our extensive collection through our user-friendly
                    online catalog.
                  </p>
                  <p data-words-slide-right className="mb-4 text-gray-950">
                    Search for books, journals, and multimedia resources from
                    the comfort of your home or campus.
                  </p>
                  <Link
                    className="group inline-flex flex-1 border-1 border-gray-700 text-gray-950 transition duration-300 hover:border-[#08bed5] hover:bg-[#08bed5]"
                    href="#">
                    <span className="flex-1 px-4 py-2 group-hover:text-white">
                      View e-Books
                    </span>
                    <span className="flex flex-0 items-center justify-center border-l-1 border-gray-700 px-4 py-2 text-xl group-hover:border-white group-hover:text-white">
                      <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfafa] pt-18 pb-9">
        <div className="container mx-auto">
          <div className="mb-24">
            <h3
              className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-center text-4xl font-medium uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:m-auto after:h-[3px] after:w-[80px] after:content-['']"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1500">
              Library rules
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {learningRules.map((rule) => (
              <div
                key={rule.id}
                className="group border-brand-200/50 hover:bg-brand-100/10 relative mb-[4rem] h-[calc(100%-4rem)] border-1 transition duration-300 hover:backdrop-blur-[6px]">
                <div className="bg-brand-200 absolute top-0 right-0 left-0 mx-auto h-[100px] w-[100px] -translate-y-1/2 rounded-full">
                  <Image
                    src={rule.icon}
                    width={100}
                    height={100}
                    className="w-full transition duration-300 group-hover:scale-75"
                    alt={rule.title}
                  />
                </div>
                <div className="px-6 pt-16 pb-6 text-center text-white">
                  <h3 className="text-brand-100 mb-4 text-2xl leading-none font-medium">
                    {rule.title}
                  </h3>
                  <p className="text-brand-100">{rule.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-wrap items-center">
              <div className="me-8 h-[250px] w-[250px] overflow-hidden rounded-full">
                <Image
                  src="/images/learning-res-contact-01.jpg"
                  width={250}
                  height={250}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                  alt="Image"
                />
              </div>
              <div>
                <h3
                  data-words-slide-right
                  className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-3xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  Working Hours
                </h3>
                <div className="flex items-start gap-4 text-gray-950">
                  <div className="text-xl">
                    <TfiTime />
                  </div>
                  <div>
                    <p className="text-xl font-medium">Saturday - Thursday:</p>
                    <p>10:00 am - 5:00 pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center">
              <div className="me-8 h-[250px] w-[250px] overflow-hidden rounded-full">
                <Image
                  src="/images/learning-res-contact-02.jpg"
                  width={250}
                  height={250}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                  alt="Image"
                />
              </div>
              <div>
                <h3
                  data-words-slide-right
                  className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-3xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  Contact Us
                </h3>
                <div className="flex flex-col">
                  <div className="flex items-start gap-4 text-gray-950">
                    <div className="text-xl">
                      <TfiEmail />
                    </div>
                    <div>
                      <p>library@muscatuniversity.edu.om</p>
                    </div>
                  </div>
                  <Separator className="my-4 bg-gray-300" />
                  <div className="flex items-start gap-4 text-gray-950">
                    <div className="text-xl">
                      <PiPhoneLight />
                    </div>
                    <div>
                      <p>+968 2464 5452</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

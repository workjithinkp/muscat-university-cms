import DynamicBreadcrumb from '@/components/common/breadcrumb'

import InternationalSubmenu from '@/app/international-students/components/international-submenu'
import OfferSwiper from '@/app/international-students/components/offer-swiper'
import TestimonialSwiper from '@/app/international-students/components/testimonial-swiper'

import Link from 'next/link'
import Image from 'next/image'

import { BiSolidQuoteLeft } from 'react-icons/bi'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const stepsData = [
  {
    img: '/images/international-visa-step-01.png',
    title: 'Receive Your Offer Letter ',
    desc: 'Your visa process begins once you’ve been officially accepted.',
  },
  {
    img: '/images/international-visa-step-02.png',
    title: 'Prepare Documents',
    desc: 'Collect your passport, transcripts, health clearances, and acceptance letter.',
  },
  {
    img: '/images/international-visa-step-03.png',
    title: 'Submit Visa Application',
    desc: 'Our team will guide you on where and how to submit your documents.',
  },
  {
    img: '/images/international-visa-step-04.png',
    title: 'Track Your Application',
    desc: 'Stay informed with updates from the International Student Support Team.',
  },
  {
    img: '/images/international-visa-step-05.png',
    title: 'Arrive & Settle In',
    desc: 'After your visa is approved, plan your arrival in Muscat. Orientation will help you get familiar with the city and campus.',
  },
]

export default function InternationalStudent() {
  return (
    <>
      <section className="relative min-h-[900px] pt-[160px]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-international-slider.jpg"
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
                { label: 'Study', href: '' },
                { label: 'International Students', href: null },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="relative z-10 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_750px] xl:gap-8 2xl:grid-cols-[1fr_900px]">
            <div>
              <div className="relative z-10 max-w-[575px] py-12">
                <h2
                  data-words-slide-right
                  className="mb-4 text-6xl leading-none font-medium text-white uppercase">
                  International Students
                </h2>
                <h3
                  data-words-slide-right
                  className="mb-4 text-4xl leading-none font-medium text-white">
                  Welcome to Muscat University — Your Gateway to Global Learning
                </h3>
                <p data-words-slide-right className="text-xl text-white">
                  At Muscat University, we are committed to making your
                  transition to studying abroad smooth, rewarding, and
                  unforgettable. Whether you're taking your first post-secondary
                  step or continuing with postgraduate study, you'll find a
                  community that supports, challenges, and celebrates you.
                </p>
              </div>
            </div>
            <div>
              <div className="max-w-[900px]">
                <Image
                  src="/images/international-intro.png"
                  width={945}
                  height={710}
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <InternationalSubmenu />

      <section id="why-choose" className="pt-18 pb-9">
        <div className="container mx-auto">
          <div className="mb-4 scroll-mt-[120px]">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Why Choose Muscat University
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[32%_68%] lg:gap-8">
              <div>
                <div>
                  <Image
                    src="/images/international-choose.jpg"
                    width={480}
                    height={665}
                    className="h-full w-full object-cover transition duration-300"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="lg:px-10 lg:py-10">
                <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-2">
                  <div className="rounded-xl px-4 py-4 transition duration-300 hover:shadow-xl">
                    <div className="text-brand-300 mb-2 text-2xl font-medium">
                      01
                    </div>
                    <h3 className="text-brand-100 mb-4 text-xl font-medium">
                      World-class Education
                    </h3>
                    <p className="text-gray-950">
                      We offer a wide range of undergraduate and postgraduate
                      programs delivered by experienced faculty. You’ll learn in
                      modern labs and classrooms, with access to cutting-edge
                      resources and an international perspective that prepares
                      you for tomorrow.
                    </p>
                  </div>
                  <div className="rounded-xl px-4 py-4 transition duration-300 hover:shadow-xl">
                    <div className="text-brand-300 mb-2 text-2xl font-medium">
                      02
                    </div>
                    <h3 className="text-brand-100 mb-4 text-xl font-medium">
                      Inclusive, Diverse Community
                    </h3>
                    <p className="text-gray-950">
                      Our student body is culturally diverse. At MU, you’ll
                      engage with peers from many backgrounds, share
                      perspectives, and grow in a global environment.
                    </p>
                  </div>
                  <div className="rounded-xl px-4 py-4 transition duration-300 hover:shadow-xl">
                    <div className="text-brand-300 mb-4 text-2xl font-medium">
                      03
                    </div>
                    <h3 className="text-brand-100 mb-4 text-xl font-medium">
                      Strong Support Every Step of the Way
                    </h3>
                    <p className="text-gray-950">
                      From application to graduation, we provide robust
                      services: help with visas and immigration, orientation,
                      accommodation advice, counselling, and ongoing support to
                      help you settle in.
                    </p>
                  </div>
                  <div className="rounded-xl px-4 py-4 transition duration-300 hover:shadow-xl">
                    <div className="text-brand-300 mb-4 text-2xl font-medium">
                      04
                    </div>
                    <h3 className="text-brand-100 mb-4 text-xl font-medium">
                      Experiences Beyond the Classroom
                    </h3>
                    <p className="text-gray-950">
                      Explore Oman&apos;s rich culture, dive in azure waters, go
                      camping in the desert, or take part in local cultural,
                      social, and environmental initiatives. At MU, study,
                      adventure, and personal growth go hand in hand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="programs-academics" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div>
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Programs & Academics
            </h2>
            <p className="mb-4 text-gray-950">
              At Muscat University, academic excellence lies at the heart of our
              mission. We offer a diverse range of{' '}
              <span className="font-medium">
                undergraduate, postgraduate, and foundation programmes
              </span>{' '}
              designed to prepare you for success in a global career.
            </p>
            <p className="mb-4 text-gray-950">
              All programmes are{' '}
              <span className="font-medium">taught in English</span> and
              developed in partnership with internationally recognized
              universities, ensuring you receive a degree that meets global
              standards.
            </p>
            <p className="mb-4 text-gray-950">
              Our teaching approach combines{' '}
              <span className="font-medium">
                theory with real-world practice
              </span>
              — through case studies, projects, internships, and industry
              engagement. You’ll learn from experienced faculty members who
              bring both academic expertise and professional insight into the
              classroom.
            </p>
            <h4 className="mb-4 text-xl font-medium text-gray-950">
              Key Areas of Study include:
            </h4>
            <ul className="mb-4 flex flex-col space-y-2 text-gray-950">
              <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:start-0 after:top-[8px] after:h-[6px] after:w-[6px] after:rounded-full">
                Business and Management
              </li>
              <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:start-0 after:top-[8px] after:h-[6px] after:w-[6px] after:rounded-full">
                Engineering and Technology
              </li>
              <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:start-0 after:top-[8px] after:h-[6px] after:w-[6px] after:rounded-full">
                Logistics and Supply Chain
              </li>
              <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:start-0 after:top-[8px] after:h-[6px] after:w-[6px] after:rounded-full">
                Computer Science and Information Systems
              </li>
            </ul>
            <p>
              To explore the full range of available programmes, visit our
              <span className="font-medium">[Programmes Page]</span> or{' '}
              <span>contact us</span> for personalized guidance.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="how-apply" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div>
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              How to Apply
            </h2>
            <div className="max-w-[100%]">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="border-brand-100 text-brand-100 border p-2 text-lg !whitespace-normal">
                      Step
                    </TableHead>
                    <TableHead className="border-brand-100 text-brand-100 border p-2 text-lg !whitespace-normal">
                      What You Need
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 text-semibold border-1 p-4 whitespace-normal">
                      <div className="flex items-center gap-2">
                        <div className="bg-brand-300 flex h-[38px] w-[38px] items-center justify-center rounded-full text-lg font-medium text-white">
                          01
                        </div>
                        <div className="text-brand-100 text-xl">
                          Choose Your Program
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="border-gray/50 text-semibold border-1 p-4 text-lg whitespace-normal !text-gray-950">
                      Successful completion of the Foundation Programme in any
                      institution.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 text-semibold border-1 p-4 whitespace-normal">
                      <div className="flex items-center gap-2">
                        <div className="bg-brand-300 flex h-[38px] w-[38px] items-center justify-center rounded-full text-lg font-medium text-white">
                          02
                        </div>
                        <div className="text-brand-100 text-xl">
                          Check Requirements
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="border-gray/50 text-semibold border-1 p-4 text-lg whitespace-normal !text-gray-950">
                      High school or previous degree transcripts, English
                      proficiency / other tests (if required), any pre-requisite
                      courses.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 text-semibold border-1 p-4 whitespace-normal">
                      <div className="flex items-center gap-2">
                        <div className="bg-brand-300 flex h-[38px] w-[38px] items-center justify-center rounded-full text-lg font-medium text-white">
                          03
                        </div>
                        <div className="text-brand-100 text-xl">
                          Submit Application
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="border-gray/50 text-semibold border-1 p-4 text-lg whitespace-normal !text-gray-950">
                      Online form, supporting documents, deadlines.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 text-semibold border-1 p-4 whitespace-normal">
                      <div className="flex items-center gap-2">
                        <div className="bg-brand-300 flex h-[38px] w-[38px] items-center justify-center rounded-full text-lg font-medium text-white">
                          04
                        </div>
                        <div className="text-brand-100 text-xl">
                          Acceptance & Visa Documents
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="border-gray/50 text-semibold border-1 p-4 text-lg whitespace-normal !text-gray-950">
                      Official letter of acceptance; then move to visa
                      application.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 text-semibold border-1 p-4 whitespace-normal">
                      <div className="flex items-center gap-2">
                        <div className="bg-brand-300 flex h-[38px] w-[38px] items-center justify-center rounded-full text-lg font-medium text-white">
                          05
                        </div>
                        <div className="text-brand-100 text-xl">
                          Arrival & Orientation
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="border-gray/50 text-semibold border-1 p-4 text-lg whitespace-normal !text-gray-950">
                      Airport pickup (if arranged), orientation sessions,
                      getting settled.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="visa-immigration" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-8 lg:mb-20">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Visa & Immigration
            </h2>
            <p className="text-gray-950">
              Studying abroad is exciting — but navigating visas and immigration
              can feel overwhelming. At Muscat University, our{' '}
              <span className="font-medium">
                dedicated International Student Support Team
              </span>{' '}
              is here to guide you through every step of the process
            </p>
          </div>
          <div className="mb-12 lg:mb-20">
            <h3 className="text-brand-100 mb-8 text-xl font-medium">
              What We Offer:
            </h3>
            <div>
              <OfferSwiper />
            </div>
          </div>
          <div>
            <h3 className="text-brand-100 mb-8 text-center text-xl font-medium">
              Steps to Get Your Student Visa:
            </h3>
          </div>
          <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {stepsData.map((item, index) => (
              <div
                key={index}
                className={`transition ${index !== stepsData.length - 1 ? 'border-r-[1px] border-r-gray-200 px-4' : ''} `}>
                <div className="mx-auto mb-4 w-[60px]">
                  <Image
                    src={item.img}
                    alt="Icon"
                    width={60}
                    height={60}
                    className="w-full transition duration-300 group-hover:scale-[1.1]"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-brand-100 mb-4 text-xl leading-none font-medium">
                    {item.title}
                  </h3>
                  <p className="text-gray-800">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-8">
            <h3 className="mb-2 text-xl leading-none font-medium text-gray-950">
              Important Tip:
            </h3>
            <p className="text-gray-800">
              To avoid delays, submit your visa documentation well in advance of
              your program start date. Our team is here to answer any questions
              and ensure a smooth transition.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl leading-none font-medium text-gray-950">
              Contact Us:
            </h3>
            <p className="text-gray-800">
              For visa support or guidance, contact our international office
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="accommodation-arrival" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div>
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Accommodation & Arrival
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <div>
                <div className="group relative transition duration-300 hover:bg-[#f6f6f6]">
                  <div className="">
                    <div className="relative overflow-hidden bg-black">
                      <Image
                        src="/images/international-accommodation-01.jpg"
                        alt="Image"
                        width={460}
                        height={170}
                        className="w-full transition duration-300 group-hover:scale-[1.1]"
                      />
                    </div>
                  </div>
                  <div className="px-4 py-4">
                    <div className="mb-2">
                      <h3 className="text-brand-100 mb-4 text-xl leading-none font-medium">
                        Housing Advice:
                      </h3>
                      <p className="text-gray-800">
                        We help you find housing off-campus that fits your
                        budget and safety preferences. Since MU does not provide
                        on-campus housing, we maintain a list of trusted
                        accommodation options nearby.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="group relative transition duration-300 hover:bg-[#f6f6f6]">
                  <div className="">
                    <div className="relative overflow-hidden bg-black">
                      <Image
                        src="/images/international-accommodation-02.jpg"
                        alt="Image"
                        width={460}
                        height={170}
                        className="w-full transition duration-300 group-hover:scale-[1.1]"
                      />
                    </div>
                  </div>
                  <div className="px-4 py-4">
                    <div className="mb-2">
                      <h3 className="text-brand-100 mb-4 text-xl leading-none font-medium">
                        Airport Pickup Service:
                      </h3>
                      <p className="text-gray-800">
                        Available with advance notice. Provide your flight
                        details, arrival time, and accommodation information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="group relative transition duration-300 hover:bg-[#f6f6f6]">
                  <div className="">
                    <div className="relative overflow-hidden bg-black">
                      <Image
                        src="/images/international-accommodation-03.jpg"
                        alt="Image"
                        width={460}
                        height={170}
                        className="w-full transition duration-300 group-hover:scale-[1.1]"
                      />
                    </div>
                  </div>
                  <div className="px-4 py-4">
                    <div className="mb-2">
                      <h3 className="text-brand-100 mb-4 text-xl leading-none font-medium">
                        Orientation & Settling In:
                      </h3>
                      <p className="text-gray-800">
                        City tour, introduction to student services, getting
                        your bearings, meeting peers and faculty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="cost-living" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div>
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Cost of Living & Financial Information
            </h2>
            <p className="mt-4 mb-4 text-xl leading-none font-medium text-gray-950">
              Here are some estimates to help with planning your budget:
            </p>
            <div className="max-w-[100%]">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="border-brand-100 text-brand-100 border p-4 text-lg !whitespace-normal">
                      Expense
                    </TableHead>
                    <TableHead className="border-brand-100 text-brand-100 border p-4 text-lg !whitespace-normal">
                      Typical Monthly Cost (OMR)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 text-semibold border-1 p-4 whitespace-normal">
                      <div className="flex items-center gap-2 text-xl text-gray-950">
                        Shared accommodation or shared room / flat
                      </div>
                    </TableCell>
                    <TableCell className="border-gray/50 text-semibold border-1 p-4 text-lg whitespace-normal !text-gray-950">
                      ~ 100-200 OMR depending on location and amenities
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 text-semibold border-1 p-4 whitespace-normal">
                      <div className="flex items-center gap-2 text-xl text-gray-950">
                        Utilities, Internet, Mobile
                      </div>
                    </TableCell>
                    <TableCell className="border-gray/50 text-semibold border-1 p-4 text-lg whitespace-normal !text-gray-950">
                      20-40 OMR depending on usage
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 text-semibold border-1 p-4 whitespace-normal">
                      <div className="flex items-center gap-2 text-xl text-gray-950">
                        Food, groceries, meals
                      </div>
                    </TableCell>
                    <TableCell className="border-gray/50 text-semibold border-1 p-4 text-lg whitespace-normal !text-gray-950">
                      50-120 OMR depending on whether you cook or eat out
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 text-semibold border-1 p-4 whitespace-normal">
                      <div className="flex items-center gap-2 text-xl text-gray-950">
                        Transportation (public or commuting)
                      </div>
                    </TableCell>
                    <TableCell className="border-gray/50 text-semibold border-1 p-4 text-lg whitespace-normal !text-gray-950">
                      ~ 20-50 OMR
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 text-semibold border-1 p-4 whitespace-normal">
                      <div className="flex items-center gap-2 text-xl text-gray-950">
                        Miscellaneous (books, leisure, supplies)
                      </div>
                    </TableCell>
                    <TableCell className="border-gray/50 text-semibold border-1 p-4 text-lg whitespace-normal !text-gray-950">
                      Estimate 30-70 OMR
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="mt-4 mb-4 text-xl leading-none text-gray-950">
              <span className="font-medium">Tuition & Fees:</span> Details
              depending on program.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="student-life" className="pt-18 pb-9">
        <div className="container mx-auto">
          <div className="mb-4 scroll-mt-[120px]">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Student Life & Culture in Muscat
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[32%_68%] lg:gap-8">
              <div>
                <div>
                  <Image
                    src="/images/international-student.jpg"
                    width={450}
                    height={400}
                    className="h-full w-full object-cover transition duration-300"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="lg:px-10 lg:py-10">
                <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-2">
                  <div className="rounded-xl px-4 py-4 transition duration-300 hover:shadow-xl">
                    <h3 className="text-brand-100 mb-4 text-xl font-medium">
                      Muscat offers a unique blend of tradition and modernity:
                    </h3>
                    <p className="text-gray-950">
                      Bustling markets, new malls, beautiful coastline, historic
                      sites, and natural scenery.
                    </p>
                  </div>
                  <div className="rounded-xl px-4 py-4 transition duration-300 hover:shadow-xl">
                    <h3 className="text-brand-100 mb-4 text-xl font-medium">
                      Cultural norms:
                    </h3>
                    <p className="text-gray-950">
                      Friendly locals, respect for tradition (dress codes in
                      certain places, prayer times etc.), languages spoken
                      (Arabic & English).
                    </p>
                  </div>
                  <div className="rounded-xl px-4 py-4 transition duration-300 hover:shadow-xl">
                    <h3 className="text-brand-100 mb-4 text-xl font-medium">
                      Social & leisure options:
                    </h3>
                    <p className="text-gray-950">
                      Diving, camping, visiting heritage sites, cafés, shopping,
                      excursions.
                    </p>
                  </div>
                  <div className="rounded-xl px-4 py-4 transition duration-300 hover:shadow-xl">
                    <h3 className="text-brand-100 mb-4 text-xl font-medium">
                      Opportunities to connect:
                    </h3>
                    <p className="text-gray-950">
                      International student orientation, clubs & societies,
                      events promoting cross-cultural exchange.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="testimonials" className="pt-9 pb-18">
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
    </>
  )
}

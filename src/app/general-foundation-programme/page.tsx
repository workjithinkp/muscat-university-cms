import Link from 'next/link'
import Image from 'next/image'
import FoundationSubmenu from '@/app/general-foundation-programme/components/foundation-submenu'
import DynamicBreadcrumb from '@/components/common/breadcrumb'
import { ImCheckmark } from 'react-icons/im'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const whyChooseCards = [
  {
    num: '01',
    title: 'A smooth transition',
    description:
      'We help you bridge the gap between school and university learning.',
  },
  {
    num: '02',
    title: 'English for real-life and academic success ',
    description:
      'Build strong reading, writing, listening, and speaking skills.',
  },
  {
    num: '03',
    title: 'Strong foundation in Math & Computing  ',
    description:
      'Develop the analytical and digital skills essential for your future degree.',
  },
  {
    num: '04',
    title: 'Supportive learning environment',
    description:
      'Small class sizes and dedicated tutors guide you every step of the way.',
  },
  {
    num: '05',
    title: 'Future-ready skills',
    description:
      'Critical thinking, teamwork, communication, and time management are at the heart of what we teach.',
  },
]

export const programSkills = [
  {
    title: 'English Language and Academic Skills',
    description:
      'Improve your English for university-level reading, writing, speaking, and listening.',
  },
  {
    title: 'Mathematics',
    description: 'Strengthen your problem-solving and analytical thinking.',
  },
  {
    title: 'Computing & Digital Skills',
    description:
      'Learn essential computer applications and digital literacy for modern learning.',
  },
  {
    title: 'Study & Research Skills',
    description:
      'Develop independent learning, note-taking, and time management skills that will set you apart.',
  },
]

export const learningExperience = [
  {
    id: 1,
    image: '/images/general-learning-01.jpg',
    description:
      'Enjoy <span class="font-medium">interactive lessons, group projects,</span> and <span class="font-medium">hands-on activities</span> that make learning engaging.',
  },
  {
    id: 2,
    image: '/images/general-learning-02.jpg',
    description:
      'Access <span class="font-medium">modern learning labs,</span> English language support, and academic advising throughout the year.',
  },
  {
    id: 3,
    image: '/images/general-learning-03.jpg',
    description:
      'Participate in <span class="font-medium">foundation workshops, student clubs,</span> and <span class="font-medium">community events</span> that build confidence and connection.',
  },
]

export default function GeneralFoundation() {
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
                { label: 'Study', href: '#' },
                { label: 'Undergraduate', href: '#' },
                { label: 'General Foundation Programme', href: null },
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
                  General Foundation Programme (GFP)
                </h2>
                <h3
                  className="mb-4 text-2xl/7 font-medium text-white"
                  data-lines-slide-up>
                  Build Your Foundation. <br />
                  Shape Your Future.
                </h3>
                <p className="mb-4 text-lg text-white" data-lines-slide-up>
                  The General Foundation Programme (GFP) at Muscat University is
                  your first step toward an exciting academic journey.
                </p>
                <p className="mb-4 text-lg text-white" data-lines-slide-up>
                  Designed for students transitioning from high school to
                  university, the GFP equips you with the language, academic,
                  and technical skills you need to thrive in your chosen degree
                  — and beyond.
                </p>
                <p className="text-lg text-white" data-lines-slide-up>
                  Whether your dream is to study business, logistics,
                  engineering, or computing, the GFP is your gateway to success
                  at Muscat University.
                </p>
              </div>
            </div>
            <div>
              <div className="max-w-[750px]">
                <Image
                  src="/images/general-foundation-intro.png"
                  width={875}
                  height={900}
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FoundationSubmenu />

      <section id="why-choose" className="pt-18 pb-9">
        <div className="container mx-auto">
          <div className="mb-4 scroll-mt-[120px]">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Why Choose the GFP at Muscat University?
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[24%_66%] lg:gap-8">
              <div>
                <div>
                  <Image
                    src="/images/general-why-choose.jpg"
                    width={360}
                    height={450}
                    className="h-full w-full object-cover transition duration-300"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="lg:px-10 lg:py-4">
                <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-3">
                  {whyChooseCards.map((item, index) => (
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

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="programme-structure" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Programme Structure
            </h2>
            <p>
              The GFP is a{' '}
              <span className="font-medium">one-year, full-time programme</span>{' '}
              delivered over <span className="font-medium">four terms.</span>{' '}
              Each term builds on the previous one, ensuring steady progress in
              every core area.
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:gap-8">
            {programSkills.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-brand-100 mt-1">
                  <ImCheckmark />
                </div>
                <div>
                  <h4 className="text-brand-100 text-xl font-medium">
                    {item.title}
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="learning-experience" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Learning Experience
            </h2>
            <p>At Muscat University, learning goes beyond the classroom.</p>
          </div>
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {learningExperience.map((item) => (
              <div key={item.id} className="relative transition duration-300">
                <div className="relative overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt="Image"
                    width={460}
                    height={170}
                    className="w-full transition duration-300 group-hover/slide:!opacity-100 group-hover/swiper:opacity-50"
                  />
                </div>

                <div className="px-2 py-4">
                  <p
                    className="text-brand-100"
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <p>
              By the end of the programme, you’ll not only be academically
              prepared — you’ll also be personally ready to take on university
              life.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="entry-requirements" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Entry Requirements
            </h2>
            <p>To join the General Foundation Programme, you must have:</p>
          </div>
          <div className="mb-4">
            <ul className="mb-4 flex flex-col space-y-2 ps-[20px] text-gray-950">
              <li className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                A{' '}
                <span className="font-medium">
                  General Education Diploma (or equivalent)
                </span>{' '}
                recognized by Oman’s Ministry of Education.
              </li>
              <li className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                A{' '}
                <span className="font-medium">
                  minimum overall grade of 65%,
                </span>{' '}
                including:
                <ul className="flex flex-col space-y-2 ps-[20px] text-gray-950">
                  <li className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                    At least{' '}
                    <span className="font-medium">65% in English,</span> and
                  </li>
                  <li className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                    At least{' '}
                    <span className="font-medium">
                      65% in Mathematics (Pure or Applied).
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              By the end of the programme, you’ll not only be academically
              prepared — you’ll also be personally ready to take on university
              life.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="placement-exemptions" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Placement & Exemptions
            </h2>
            <p>
              All new students complete placement tests in English, Mathematics,
              and Computing. Depending on your results, you may be:
            </p>
          </div>
          <div className="mb-4">
            <ul className="mb-4 flex flex-col space-y-2 ps-[20px] text-gray-950">
              <li className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                Placed in the appropriate level for each subject, or
              </li>
              <li className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                Granted exemptions from certain modules if you already meet the
                required standards.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="assessment-progression" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Assessment & Progression
            </h2>
            <p className="mb-4">
              Your progress will be evaluated through a mix of assignments,
              projects, quizzes, and exams. Each term brings you closer to
              university-level confidence and competence.
            </p>
            <p>
              After successfully completing the GFP, you will be eligible to
              progress directly into Year 1 of your undergraduate programme at
              Muscat University.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="fees" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Fees
            </h2>
          </div>
          <div className="mb-4">
            <ul className="mb-4 flex flex-col space-y-2 ps-[20px] text-gray-950">
              <li className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                <span className="font-medium">Omani & Resident Students:</span>{' '}
                OMR 2,900
              </li>
              <li className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                <span className="font-medium">International Students:</span> OMR
                3,200
              </li>
            </ul>
            <p>
              Flexible payment plans and scholarship options may be available
              for eligible students.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="student-life" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Life as a Foundation Student
            </h2>
            <p>
              Being a GFP student at Muscat University means being part of a
              vibrant community that celebrates curiosity and growth. You’ll:
            </p>
          </div>
          <div className="mb-4">
            <ul className="mb-4 flex flex-col space-y-2 ps-[20px] text-gray-950">
              <li className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                Learn in an inclusive, multicultural environment.
              </li>
              <li className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                Receive individual guidance from experienced academic advisors.
              </li>
              <li className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                Participate in campus activities that help you build confidence
                and friendships.
              </li>
            </ul>
            <p>
              You won’t just learn — you’ll grow, connect, and discover your
              strengths.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="faq" className="pt-9 pb-18">
        <div className="container mx-auto">
          <div>
            <div>
              <h2 className="after:bg-brand-300 text-brand-100 relative mb-4 pb-4 text-3xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="group relative rounded-none border-b-[1px] border-b-gray-300 px-2 pr-12 text-xl font-medium text-gray-800 hover:no-underline [&_svg]:hidden">
                  Can I skip the GFP?
                  <span className="absolute top-1/2 right-4 block h-4 w-4 -translate-y-1/2">
                    <span className="absolute top-1/2 left-0 h-[1px] w-full -translate-y-1/2 bg-gray-500"></span>
                    <span className="absolute top-[1px] left-1/2 h-full w-[1px] -translate-x-1/2 bg-gray-500 group-data-[state=open]:rotate-90"></span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="py-8">
                    <p>
                      If your qualifications and test results meet the
                      direct-entry criteria for your degree, you may not need to
                      take the GFP.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="group relative rounded-none border-b-[1px] border-b-gray-300 px-2 pr-12 text-xl font-medium text-gray-800 hover:no-underline [&_svg]:hidden">
                  What happens if I don’t pass a module?
                  <span className="absolute top-1/2 right-4 block h-4 w-4 -translate-y-1/2">
                    <span className="absolute top-1/2 left-0 h-[1px] w-full -translate-y-1/2 bg-gray-500"></span>
                    <span className="absolute top-[1px] left-1/2 h-full w-[1px] -translate-x-1/2 bg-gray-500 group-data-[state=open]:rotate-90"></span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="py-8">
                    <p>
                      You’ll have support through tutorials, revision classes,
                      and the opportunity to retake assessments.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="group relative rounded-none border-b-[1px] border-b-gray-300 px-2 pr-12 text-xl font-medium text-gray-800 hover:no-underline [&_svg]:hidden">
                  Do I get university credits for GFP modules?
                  <span className="absolute top-1/2 right-4 block h-4 w-4 -translate-y-1/2">
                    <span className="absolute top-1/2 left-0 h-[1px] w-full -translate-y-1/2 bg-gray-500"></span>
                    <span className="absolute top-[1px] left-1/2 h-full w-[1px] -translate-x-1/2 bg-gray-500 group-data-[state=open]:rotate-90"></span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="py-8">
                    <p>
                      The GFP prepares you for your degree but does not carry
                      university credits.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="group relative rounded-none border-b-[1px] border-b-gray-300 px-2 pr-12 text-xl font-medium text-gray-800 hover:no-underline [&_svg]:hidden">
                  Will there be student activities during the programme?
                  <span className="absolute top-1/2 right-4 block h-4 w-4 -translate-y-1/2">
                    <span className="absolute top-1/2 left-0 h-[1px] w-full -translate-y-1/2 bg-gray-500"></span>
                    <span className="absolute top-[1px] left-1/2 h-full w-[1px] -translate-x-1/2 bg-gray-500 group-data-[state=open]:rotate-90"></span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="py-8">
                    <p>
                      Yes! You can join clubs, events, and volunteer programmes
                      — an exciting part of student life at Muscat University.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="steps" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Take Your First Step Today
            </h2>
            <p>Ready to begin your journey at Muscat University?</p>
          </div>
          <div className="mb-4">
            <ol className="mb-4 flex flex-col space-y-2 ps-[20px] text-gray-950">
              <li className="after:bg-brand-100 relative">
                1. <span className="font-medium">Submit your application</span>{' '}
                before the intake deadline.
              </li>
              <li className="after:bg-brand-100 relative">
                2.{' '}
                <span className="font-medium">
                  Complete your placement tests
                </span>{' '}
                in English, Math, and Computing.
              </li>
              <li className="after:bg-brand-100 relative">
                3.{' '}
                <span className="font-medium">
                  Receive your admission offer
                </span>{' '}
                and prepare to join our welcoming campus community.
              </li>
            </ol>
            <p>For more details or assistance, contact our Admissions Team</p>
          </div>
        </div>
      </section>
    </>
  )
}

import DynamicBreadcrumb from '@/components/common/breadcrumb'
import SubmenuAdmission from '@/components/admission/admission-subment'

import Link from 'next/link'
import Image from 'next/image'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const submenuData = [
  { id: 1, label: 'Why Choose Muscat University?', href: '#why-choose' },
  { id: 2, label: 'How to Apply', href: '#how-apply' },
  { id: 3, label: 'Undergraduate Admission Requirements', href: '#admission' },
  { id: 4, label: 'Supporting Documents Required', href: '#supporting' },
]

const admissionChooseData = [
  {
    number: '01',
    title: 'The Full Placement Advantage',
    description: `
      Be job-ready with the 
      <span class="font-medium">only university in Oman</span> 
      to include a 
      <span class="font-medium">compulsory full-year industry placement</span> 
      as part of the undergraduate curriculum.
    `,
    image: '/images/admission-choose-01.jpg',
    alt: 'Full Placement Advantage',
  },
  {
    number: '02',
    title: 'Industry-Informed Programmes',
    description: `
      Our degrees in Business, Engineering, and Transport & Logistics 
      are constantly updated and designed with the needs of 
      <span class="font-medium">21st-century employers</span> in mind.
    `,
    image: '/images/admission-choose-02.jpg',
    alt: 'Industry-Informed Programmes',
  },
  {
    number: '03',
    title: 'Supportive <br /> Community',
    description: `
      We foster a supportive environment dedicated to your 
      academic success and personal well-being.
    `,
    image: '/images/admission-choose-03.jpg',
    alt: 'Supportive Community',
  },
  {
    number: '04',
    title: 'Scholarship Opportunities',
    description: `
      Eligible undergraduate applicants may benefit from 
      various scholarship opportunities.
    `,
    image: '/images/admission-choose-04.jpg',
    alt: 'Scholarship Opportunities',
  },
]

const admissionStepsData = [
  {
    step: '01',
    title: 'Choose Your Program',
    action: 'Discover what aligns with your goals.',
    details:
      'Review our diverse undergraduate degrees to find the one that matches your passions and career aspirations.',
  },
  {
    step: '02',
    title: 'Check Requirements',
    action: 'Confirm your eligibility.',
    details:
      'Use the sections below to review the minimum general entry criteria. Remember to check the specific programme page!',
  },
  {
    step: '03',
    title: 'Submit Your Application',
    action: 'Complete our online form.',
    details:
      'Fill out your application conveniently through our online platform and upload all necessary documents.',
  },
  {
    step: '04',
    title: 'Track Your Status',
    action: 'Stay informed.',
    details:
      'After submission, you will receive regular updates through our online portal. Decisions typically take 1–2 weeks.',
  },
  {
    step: '05',
    title: 'Acceptance & Enrollment',
    action: 'Confirm your place',
    details:
      'Upon receiving an offer, follow the instructions to secure your enrollment and officially join the Muscat University community.',
  },
]

const supportData = [
  {
    number: '01',
    title: 'High School Certificate/Diploma: ',
    description: `
      Evidence that you meet the minimum educational requirements (e.g., General Education Diploma, A-Level certificates, etc.)
    `,
  },
  {
    number: '02',
    title: 'English Language Proficiency Certificate:',
    description: `
      IELTS, TOEFL, or equivalent results, if available.
    `,
  },
  {
    number: '03',
    title: 'Copy of Passport',
    description: '',
  },
  {
    number: '04',
    title: 'Copy of Valid Civil ID Card',
    description: `
      For Omani and resident students
    `,
  },
  {
    number: '05',
    title: 'Recent Passport Size Photograph',
    description: '',
  },
]

export default function AdmissionPage() {
  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-[850px] pt-[160px]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-admission-slider.jpg"
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
                { label: 'Study', href: '#' },
                { label: 'Admission', href: null },
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
                  ADmissions
                </h2>
                <h3
                  className="mb-4 text-2xl/7 font-medium text-white"
                  data-lines-slide-up>
                  Ready to Be Industry-Ready? Start Your Undergraduate Journey
                  at Muscat University
                </h3>
                <p className="text-lg text-white" data-lines-slide-up>
                  Muscat University is dedicated to empowering the future
                  leaders of Oman and the region. Our student-centric admissions
                  process is designed to be straightforward, transparent, and
                  the first step toward a rewarding educational journey.
                </p>
              </div>
            </div>
            <div>
              <div className="max-w-[800px]">
                <Image
                  src="/images/admission-intro.png"
                  width={900}
                  height={717}
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubmenuAdmission />

      <section id="why-choose" className="pt-18 pb-9">
        <div className="container mx-auto">
          <div className="mb-4 scroll-mt-[120px]">
            <div className="mb-8">
              <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                Why Choose Muscat University
              </h2>
              <p className="text-lg font-medium">
                When you choose Muscat University, you benefit from a unique,
                career-focused approach that sets you up for success:
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              {admissionChooseData.map((item, index) => (
                <div key={index} className="flex flex-wrap gap-4">
                  <div className="text-brand-300 text-2xl font-medium">
                    {item.number}
                  </div>

                  <div className="flex-1">
                    <h3
                      className="text-brand-100 mb-2 text-2xl font-medium"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />

                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}></p>
                  </div>

                  <div className="w-[150px] overflow-hidden rounded-full">
                    <Image
                      src={item.image}
                      width={150}
                      height={150}
                      className="h-full w-full object-cover"
                      alt={item.alt}
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

      <section id="how-apply" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              How to Apply: A Simple 5-Step Path
            </h2>
            <p className="text-lg font-medium">
              Navigating the application process is simple. Follow these steps
              to begin your journey:
            </p>
          </div>
          <div className="max-w-[100%]">
            <Table className="w-full">
              {/* HEADER */}
              <TableHeader>
                <TableRow>
                  <TableHead className="border-brand-100 text-brand-100 border bg-[#eef6ff] p-4 text-lg !whitespace-normal">
                    Step
                  </TableHead>
                  <TableHead className="border-brand-100 text-brand-100 border bg-[#eef6ff] p-4 text-lg !whitespace-normal">
                    Action
                  </TableHead>
                  <TableHead className="border-brand-100 text-brand-100 border bg-[#eef6ff] p-4 text-lg !whitespace-normal">
                    Details
                  </TableHead>
                </TableRow>
              </TableHeader>

              {/* BODY */}
              <TableBody>
                {admissionStepsData.map((item, index) => (
                  <TableRow key={index}>
                    {/* Step + Title */}
                    <TableCell className="border-gray/50 !text-brand-100 text-medium border-1 p-4 whitespace-normal">
                      <div className="flex items-center gap-2">
                        <div className="bg-brand-300 flex h-[38px] w-[38px] items-center justify-center rounded-full font-medium text-white">
                          {item.step}
                        </div>
                        <div className="text-brand-100 text-lg font-medium">
                          {item.title}
                        </div>
                      </div>
                    </TableCell>

                    {/* Action */}
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      {item.action}
                    </TableCell>

                    {/* Details */}
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      {item.details}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="admission" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Undergraduate Admission Requirements (UG)
            </h2>
            <p className="text-lg font-medium">
              IMPORTANT NOTE: Admission to our undergraduate degrees is
              programme-specific. The tables below list the minimum general
              academic and English language entry points. You MUST check the
              individual programme page for any additional subject-specific
              requirements.
            </p>
          </div>
          <div className="mb-8">
            <div className="mb-8">
              <h3 className="text-brand-100 relative text-3xl font-medium uppercase">
                1. Academic Qualification Entry Points (Diploma and Bachelor's)
              </h3>
            </div>
            <div className="mb-2 max-w-[100%]">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="border-brand-100 text-brand-100 border bg-[#eef6ff] p-4 text-lg !whitespace-normal">
                      Certificate / Qualification
                    </TableHead>
                    <TableHead className="border-brand-100 text-brand-100 border bg-[#eef6ff] p-4 text-lg !whitespace-normal">
                      Minimum Grade Required
                    </TableHead>
                    <TableHead className="border-brand-100 text-brand-100 border bg-[#eef6ff] p-4 text-lg !whitespace-normal">
                      Admission Route
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Omani General Education Diploma (GED) or equivalent
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Overall Score of 60%
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Foundation Programme
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      A Level
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Minimum grades of C in three A-Level subjects, one of
                      which must be Maths.
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Direct Entry to Bachelor Programme
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      IB (International Baccalaureate)
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Minimum 24 points overall, with a minimum score of 3 in
                      Maths at Higher Level or 4 at Standard Level.
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Direct Entry to Bachelor Programme
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Indian School Certificate (CBSE or Indian State Board)
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Pass in Board Examinations with a score of not less than
                      55% in Math.
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Direct Entry to Bachelor Programme
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Foundation Certificate
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Successful completion of the Foundation Programme in any
                      institution.
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Direct Entry to Bachelor Programme
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="italic">
              Note: Applicants with less than the above entry requirement can
              still apply. Their application will be considered on a
              case-by-case basis.
            </div>
          </div>

          <div className="">
            <div className="mb-8">
              <h3 className="text-brand-100 relative mb-2 text-3xl font-medium uppercase">
                2. English Language Requirements & Foundation Exemption
              </h3>
              <p className="text-lg font-medium">
                When you choose Muscat University, you benefit from a unique,
                career-focused approach that sets you up for success:
              </p>
            </div>
            <div className="mb-2 max-w-[100%]">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="border-brand-100 text-brand-100 border bg-[#eef6ff] p-4 text-lg !whitespace-normal">
                      Requirement / Qualification
                    </TableHead>
                    <TableHead className="border-brand-100 text-brand-100 border bg-[#eef6ff] p-4 text-lg !whitespace-normal">
                      Minimum Score
                    </TableHead>
                    <TableHead className="border-brand-100 text-brand-100 border bg-[#eef6ff] p-4 text-lg !whitespace-normal">
                      Condition/Exemption
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Requirement / Qualification
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Minimum Score
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Condition/Exemption
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      IELTS (Academic)
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Minimum 5.0 overall (with a minimum of 4.5 in all
                      components).
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      May be exempt from the Foundation subject to passing the
                      MU IT and Math Test.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      TOEFL (iBT)
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Minimum of 45 overall.
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      May be exempt from the Foundation subject to passing the
                      MU IT and Math Test.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      GCSE English Language (for A-Level applicants)
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Minimum Grade C.
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Direct Entry (English proficiency met).
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      IB English Language
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Minimum score of 5 in English at Standard Level or 4 at
                      Higher Level.
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Direct Entry (English proficiency met).
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Foundation Programme
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Successful completion.
                    </TableCell>
                    <TableCell className="border-gray/50 !text-brand-100 border-1 p-4 text-lg !font-medium whitespace-normal">
                      Admission to Bachelor Programme (English proficiency met).
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="italic">
              Note on Foundation Programme: The Foundation Year is a must for
              Omani Thanawia students and students from other GCC countries
              unless they qualify for the exemption criteria listed above.
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div>
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <section id="supporting" className="pt-9 pb-18">
        <div className="container mx-auto">
          <div className="mb-4 scroll-mt-[120px]">
            <div className="mb-8">
              <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                Supporting Documents Required
              </h2>
              <p className="text-lg font-medium">
                To complete your online application, please prepare and upload
                clear copies of the following documents:
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
              {supportData.map((item, index) => (
                <div key={index} className="flex flex-wrap gap-4">
                  <div className="">
                    <div className="bg-brand-300 flex h-[42px] w-[42px] items-center justify-center rounded-full font-medium text-white">
                      {item.number}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3
                      className="mb-2 text-xl font-medium"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />

                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

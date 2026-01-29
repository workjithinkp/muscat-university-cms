import Link from 'next/link'
import Image from 'next/image'

import DynamicBreadcrumb from '@/components/common/breadcrumb'
import ProgrammeNav from '@/components/common/programme-side-menu'
import SubmenuBsc from '@/app/Bsc-Port-Shipping-Management/components/bsc-submenu'

import { GiGraduateCap } from 'react-icons/gi'
import { FaBook } from 'react-icons/fa6'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function ProgrammePage() {
  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative pt-[160px] pb-[72px]">
        <div className="absolute inset-0">
          <img
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
                { label: 'Study', href: '#' },
                { label: 'Undergraduate', href: '#' },
                {
                  label: 'BSc Sustainable Port and Shipping Management',
                  href: null,
                },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="relative z-10 flex flex-wrap bg-white p-2">
            <div className="w-full lg:w-1/2">
              <div className="px-4 py-4 lg:px-8 lg:py-8">
                <div className="mb-[18px] border-b border-b-gray-300 pb-[18px]">
                  <h3 className="text-brand-100 text-3xl font-medium">
                    BSc Sustainable Port and Shipping Management
                  </h3>
                </div>

                <div className="mb-4 border-b border-b-gray-300 pb-4">
                  <div className="flex items-center">
                    <div className="text-brand-100 mr-[10px] w-[32px] text-xl">
                      <GiGraduateCap />
                    </div>

                    <div className="text-brand-100 text-2xl font-medium">
                      Programme Details
                    </div>
                  </div>

                  <div className="pl-[42px]">
                    <ul className="flex flex-col space-y-2 text-lg text-gray-950">
                      <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[12px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                        <span className="text-brand-100 mr-2 font-medium">
                          Award:
                        </span>
                        <span>BSc (Bachelors of Science)</span>
                      </li>

                      <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[12px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                        <span className="text-brand-100 mr-2 font-medium">
                          Duration:
                        </span>
                        <span>4 years</span>
                      </li>

                      <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[12px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                        <span className="text-brand-100 mr-2 font-medium">
                          Study Mode:
                        </span>
                        <span>Full-time</span>
                      </li>

                      <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[12px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                        <span className="text-brand-100 mr-2 font-medium">
                          Study Plan:
                        </span>
                        <span>
                          The program includes a Diploma, Advanced Diploma (Adv.
                          Dip.), and BSc stage.
                        </span>
                      </li>

                      <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[12px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                        <span className="text-brand-100 mr-2 font-medium">
                          Faculty:
                        </span>
                        <span>Transport and Logistics</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center">
                    <div className="text-brand-100 mr-[10px] w-[32px] text-xl">
                      <FaBook />
                    </div>

                    <div className="text-brand-100 text-2xl font-medium">
                      Key Features
                    </div>
                  </div>

                  <div className="pl-[42px]">
                    <ul className="flex flex-col space-y-3 text-lg text-gray-950">
                      <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[12px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                        Focuses on{' '}
                        <span className="font-medium">
                          sustainability and maritime logistics networks.
                        </span>{' '}
                      </li>

                      <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[12px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                        Develops analytical tools for evaluating industry
                        challenges and proposing practical, sustainable
                        solutions.
                      </li>

                      <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[12px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                        Includes a full Professional Placement Year in Year 3.
                      </li>

                      <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[12px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                        Practical training and research projects build
                        confidence in analysing challenges and implementing
                        solutions in maritime and port operations.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <Image
                src="/images/programme-intro.jpg"
                width={700}
                height={675}
                className="h-full w-full object-cover"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </section>

      <SubmenuBsc />

      {/* ---------------- PAGE SECTIONS ---------------- */}
      <section className="py-18">
        <div className="container mx-auto">
          <div className="-mx-3 flex flex-wrap">
            <div className="relative w-full px-3 lg:w-[25%]">
              <ProgrammeNav />
            </div>

            <div className="w-full px-3 lg:w-[75%]">
              <div id="overview" className="mb-4 scroll-mt-[120px]">
                <div className="bg-brand-100/10 border-b-brand-100 text-brand-100 mb-4 border-b-2 px-4 py-4 text-2xl font-medium">
                  Overview
                </div>
                <div className="px-4 py-4">
                  <p className="mb-4 text-gray-800">
                    This programme provides students with in-depth knowledge of
                    sustainability in port, shipping, and logistics management.
                    It equips them with analytical tools to evaluate industry
                    challenges and propose practical, sustainable solutions
                    across maritime logistics networks.
                  </p>
                  <p className="text-gray-800">
                    Through research projects and strategy development, students
                    gain hands-on experience in sustainable maritime practices.
                    The programme also strengthens teamwork and resource
                    management skills, preparing graduates to lead
                    sustainability efforts within the global maritime and
                    logistics sectors.
                  </p>
                </div>
              </div>

              <div id="entry-requirements" className="mb-4 scroll-mt-[120px]">
                <div className="bg-brand-100/10 border-b-brand-100 text-brand-100 mb-4 border-b-2 px-4 py-4 text-2xl font-medium">
                  Entry Requirements
                </div>
                <div className="px-4 py-4">
                  <p className="mb-4 text-gray-800">
                    The admission requirements are structured for Business/IT
                    programmes, as indicated by the general requirements for
                    Omani GED holders.
                  </p>
                  <p className="mb-4 text-gray-800">
                    To be admitted into the Foundation Programme, applicants
                    with an{' '}
                    <span className="font-medium">
                      Omani General Education Diploma (GED)
                    </span>{' '}
                    or equivalent need to:
                  </p>
                  <ul className="mb-4 flex flex-col space-y-2 text-gray-800">
                    <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                      Pass the GED with an Overall score of (60%).
                    </li>
                    <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                      Achieve a minimum of 55% in English.
                    </li>
                    <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                      Achieve a minimum of 60% in Adv. Maths OR Basic Maths.
                    </li>
                  </ul>
                  <p className="mb-4 text-lg font-medium text-gray-800">
                    Note: Applicant with less than the above entry requirement
                    can still apply and will be considered on a case by case
                    basis.
                  </p>
                  <div className="border-l-brand-300 mb-4 border-l-2 pl-4 text-xl font-medium text-gray-800">
                    Direct Entry Requirements <br />
                    (Exemption from Foundation Year)
                  </div>
                  <p className="mb-4 text-gray-800">
                    <span className="italic">
                      Exemption from Foundation Year:
                    </span>{' '}
                    Applicants with{' '}
                    <span className="font-medium">IELTS (Academic) 5.0</span>{' '}
                    (with a min. of 4.5 in all components) or{' '}
                    <span className="font-medium">TOEFL (iBT) 45</span> and{' '}
                    <span className="font-medium">IC3</span> can be exempted
                    from the foundation subject to passing MU Math test.
                  </p>

                  <div className="max-w-[100%]">
                    <Table className="w-full border-separate border-spacing-2 md:border-spacing-2">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="bg-brand-100 border-brand-100 border p-2 !whitespace-normal text-white">
                            Certificate
                          </TableHead>
                          <TableHead className="bg-brand-100 border-brand-100 border p-2 !whitespace-normal text-white">
                            Grade
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="border-brand-100/50 !text-brand-100 text-semibold bg-brand-100/5 border-1 p-2 whitespace-normal">
                            Foundation Certificate
                          </TableCell>
                          <TableCell className="border-brand-100/50 text-brand-100 bg-brand-100/5 border-1 p-2 whitespace-normal">
                            Successful completion of the Foundation Programme in
                            any institution.
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="border-brand-100/50 !text-brand-100 text-semibold bg-brand-100/5 border-1 p-2 whitespace-normal">
                            A Level
                          </TableCell>
                          <TableCell className="border-brand-100/50 text-brand-100 bg-brand-100/5 border-1 p-2 whitespace-normal">
                            Minimum grades of C in three A-Level subjects and
                            Math must be one of them. English language: Minimum
                            grade C in GCSE OR IELTS (Academic): Minimum of 5.0
                            overall (with a min. of 4.5 in all components) OR
                            TOEFL (iBT): Minimum of 45 overall.
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="border-brand-100/50 !text-brand-100 text-semibold bg-brand-100/5 border-1 p-2 whitespace-normal">
                            IB
                          </TableCell>
                          <TableCell className="border-brand-100/50 text-brand-100 bg-brand-100/5 border-1 p-2 whitespace-normal">
                            Minimum 24 points, with minimum score of 3 in Maths
                            at Higher Level or 4 at Standard Level. English
                            language: Minimum score of 5 in English at Standard
                            level or minimum score of 4 in English at Higher
                            level OR IELTS (Academic): Minimum of 5.0 overall
                            (with a min. of 4.5 in all components) OR TOEFL
                            (iBT): Minimum of 45 overall.
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="border-brand-100/50 !text-brand-100 text-semibold bg-brand-100/5 border-1 p-2 whitespace-normal">
                            Indian School Certificate
                          </TableCell>
                          <TableCell className="border-brand-100/50 text-brand-100 bg-brand-100/5 border-1 p-2 whitespace-normal">
                            Pass in Central Board of Secondary Education (CBSE)
                            or Indian State Board Examinations with a score of
                            not less than 55% in Math. English language: IELTS
                            (Academic): Minimum of 5.0 overall (with a min. of
                            4.5 in all components) OR TOEFL (iBT): Minimum of 45
                            overall.
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>

              <div id="study-plan" className="mb-4 scroll-mt-[120px]">
                <div className="bg-brand-100/10 border-b-brand-100 text-brand-100 mb-4 border-b-2 px-4 py-4 text-2xl font-medium">
                  Study Plan
                </div>
                <div className="px-4 py-4">
                  <div className="grid gap-3 lg:grid-cols-3">
                    <div className="mb-4">
                      <div className="border-l-brand-300 mb-4 border-l-2 pl-4 text-xl font-medium text-gray-800">
                        Year 1
                      </div>
                      <ul className="mb-4 flex flex-col space-y-2 text-gray-800">
                        <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                          Introduction to Business Economics
                        </li>
                        <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                          Business Skills
                        </li>
                        <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                          Data Analysis for Logistics
                        </li>
                        <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                          Principles of Port and Shipping Business
                        </li>
                        <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                          Principles of Transport
                        </li>
                        <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                          Principles of Operations Management
                        </li>
                        <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                          Introduction to Accounting
                        </li>
                        <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                          Marketing Principles
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="mb-4">
                        <div className="border-l-brand-300 mb-4 border-l-2 pl-4 text-xl font-medium text-gray-800">
                          Year 2 (Diploma)
                        </div>
                        <ul className="mb-4 flex flex-col space-y-2 text-gray-800">
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            Personal and Professional Development for the
                            Workplace
                          </li>
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            Sustainable Maritime Transport and Terminal
                            Operations
                          </li>
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            Project Management
                          </li>
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            Warehouse and Inventory Management
                          </li>
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            Maritime Law and International Trade
                          </li>
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            Freight Transport
                          </li>
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            Human Resource Management
                          </li>
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            <span>Electives (select one): </span>
                            <ul className="mt-4 mb-4 flex flex-col space-y-2 text-gray-800">
                              <li className="after:bg-brand-200 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                                Tools for Managing Operations
                              </li>
                              <li className="after:bg-brand-200 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                                Procurement
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="mb-4">
                        <div className="border-l-brand-300 mb-4 border-l-2 pl-4 text-xl font-medium text-gray-800">
                          Year 3 (Advanced Diploma)
                        </div>
                        <ul className="mb-4 flex flex-col space-y-2 text-gray-800">
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            Professional Placement Year
                          </li>
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            Entrepreneurship
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="mb-4">
                        <div className="border-l-brand-300 mb-4 border-l-2 pl-4 text-xl font-medium text-gray-800">
                          Year 4 (Bachelors)
                        </div>
                        <ul className="mb-4 flex flex-col space-y-2 text-gray-800">
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            Strategic Management
                          </li>
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            Sustainable Supply Chain Management
                          </li>
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            Supply Chain Finance
                          </li>
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            Individual Project
                          </li>
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            Contemporary Trends in Maritime with Business Models
                          </li>
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            Operational Excellence
                          </li>
                          <li className="after:bg-brand-100 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                            <span>Electives (select one): </span>
                            <ul className="mt-4 mb-4 flex flex-col space-y-2 text-gray-800">
                              <li className="after:bg-brand-200 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                                Artificial Intelligence in Logistics
                              </li>
                              <li className="after:bg-brand-200 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                                Supply Chain Risk and Resilience
                              </li>
                              <li className="after:bg-brand-200 relative pl-[20px] after:absolute after:top-[8px] after:left-0 after:h-[6px] after:w-[6px] after:rounded-full">
                                Logistics and the Circular Economy
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="total-tuition" className="scroll-mt-[120px]">
                <div className="bg-brand-100/10 border-b-brand-100 text-brand-100 mb-4 border-b-2 px-4 py-4 text-2xl font-medium">
                  Total Tuition Fees
                </div>
                <div className="px-4 py-4">
                  <p className="mb-4 text-gray-800">
                    Tuition fees are non-refundable and exclude a registration
                    fee of <span className="font-medium">250 OMR.</span>
                  </p>
                  <div className="max-w-[100%]">
                    <Table className="w-full border-separate border-spacing-2 md:border-spacing-2">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="bg-brand-100 border-brand-100 border p-2 !whitespace-normal text-white">
                            Award
                          </TableHead>
                          <TableHead className="bg-brand-100 border-brand-100 border p-2 !whitespace-normal text-white">
                            Omani & resident students (OMR)
                          </TableHead>
                          <TableHead className="bg-brand-100 border-brand-100 border p-2 !whitespace-normal text-white">
                            International students (OMR)
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="border-brand-100/50 !text-brand-100 text-semibold bg-brand-100/5 border-1 p-2 whitespace-normal">
                            Foundation
                          </TableCell>
                          <TableCell className="border-brand-100/50 text-brand-100 bg-brand-100/5 border-1 p-2 whitespace-normal">
                            2,900
                          </TableCell>
                          <TableCell className="border-brand-100/50 text-brand-100 bg-brand-100/5 border-1 p-2 whitespace-normal">
                            3,200
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="border-brand-100/50 !text-brand-100 text-semibold bg-brand-100/5 border-1 p-2 whitespace-normal">
                            Diploma
                          </TableCell>
                          <TableCell className="border-brand-100/50 text-brand-100 bg-brand-100/5 border-1 p-2 whitespace-normal">
                            7,800
                          </TableCell>
                          <TableCell className="border-brand-100/50 text-brand-100 bg-brand-100/5 border-1 p-2 whitespace-normal">
                            8,800
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="border-brand-100/50 !text-brand-100 text-semibold bg-brand-100/5 border-1 p-2 whitespace-normal">
                            Advanced Diploma
                          </TableCell>
                          <TableCell className="border-brand-100/50 text-brand-100 bg-brand-100/5 border-1 p-2 whitespace-normal">
                            9,900
                          </TableCell>
                          <TableCell className="border-brand-100/50 text-brand-100 bg-brand-100/5 border-1 p-2 whitespace-normal">
                            11,400
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="border-brand-100/50 !text-brand-100 text-semibold bg-brand-100/5 border-1 p-2 whitespace-normal">
                            BSc
                          </TableCell>
                          <TableCell className="border-brand-100/50 text-brand-100 bg-brand-100/5 border-1 p-2 whitespace-normal">
                            13,800
                          </TableCell>
                          <TableCell className="border-brand-100/50 text-brand-100 bg-brand-100/5 border-1 p-2 whitespace-normal">
                            15,800
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>

              <div id="career-skills" className="scroll-mt-[120px]">
                <div className="bg-brand-100/10 border-b-brand-100 text-brand-100 mb-4 border-b-2 px-4 py-4 text-2xl font-medium">
                  Career and Skills
                </div>
                <div className="px-4 py-4">
                  <p className="mb-4 text-gray-800">
                    Graduates pursue roles such as{' '}
                    <span className="font-medium">
                      Port Manager, Shipping Coordinator, and Environmental
                      Compliance Officer.
                    </span>{' '}
                    Career paths span{' '}
                    <span className="font-medium">
                      maritime logistics, port operations, and
                      sustainability-focused roles
                    </span>{' '}
                    in both public and private sectors. Students develop skills
                    in{' '}
                    <span className="font-medium">
                      sustainable logistics, regulatory compliance, and
                      strategic planning.
                    </span>{' '}
                    Practical training and research projects build confidence in
                    analysing challenges and implementing solutions in maritime
                    and port operations.
                  </p>
                </div>
              </div>

              <div id="faq" className="scroll-mt-[120px]">
                <div className="bg-brand-100/10 border-b-brand-100 text-brand-100 mb-4 border-b-2 px-4 py-4 text-2xl font-medium">
                  Frequently Asked Questions (FAQ)
                </div>
                <div className="px-4 py-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="!text-brand-100 bg-brand-100/2 px-2 text-xl font-medium text-gray-800 hover:no-underline">
                        1. What is the focus of the final year?
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className="mb-4 text-gray-800">
                          The final year focuses on strategic and sustainable
                          business practices, including Strategic Management,
                          Sustainable Supply Chain Management, and Operational
                          Excellence. Students also undertake an Individual
                          Project and select one modern elective, such as
                          Artificial Intelligence in Logistics.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="!text-brand-100 bg-brand-100/2 px-2 text-xl font-medium text-gray-800 hover:no-underline">
                        2. What kind of experience will I gain during the
                        Professional Placement Year?
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className="mb-4 text-gray-800">
                          The full professional placement year (Year 3) is a
                          crucial component that provides hands-on, real-world
                          experience, preparing you to lead sustainability
                          efforts within the global maritime and logistics
                          sectors.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="!text-brand-100 bg-brand-100/2 px-2 text-xl font-medium text-gray-800 hover:no-underline">
                        3. Does the program cover legal aspects of shipping?
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className="mb-4 text-gray-800">
                          Yes, the Year 2 curriculum includes a core module on
                          Maritime Law and International Trade.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="!text-brand-100 bg-brand-100/2 px-2 text-xl font-medium text-gray-800 hover:no-underline">
                        4. What are the key skills I will develop?
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className="mb-4 text-gray-800">
                          You will develop skills in sustainable logistics,
                          regulatory compliance, and strategic planning, along
                          with confidence in analysing challenges and
                          implementing solutions in maritime and port
                          operations.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <div id="next-steps" className="scroll-mt-[120px]">
                <div className="bg-brand-100/10 border-b-brand-100 text-brand-100 mb-4 border-b-2 px-4 py-4 text-2xl font-medium">
                  Next Steps
                </div>
                <div className="px-4 py-4">
                  <div className="border-l-brand-300 mb-4 border-l-2 pl-4 text-xl font-medium text-gray-800">
                    How to apply
                  </div>
                  <p className="mb-4 text-gray-800">
                    Start your application today by visiting our online
                    application portal. Ensure you meet the entry requirements
                    and have all necessary documents ready.
                  </p>
                  <div className="border-l-brand-300 mb-4 border-l-2 pl-4 text-xl font-medium text-gray-800">
                    Transfer to Muscat University
                  </div>
                  <p className="mb-4 text-gray-800">
                    If you&apos;re currently studying at another institution and
                    would like to transfer to Muscat University, contact our
                    admissions team to discuss your options.
                  </p>
                  <div className="border-l-brand-300 mb-4 border-l-2 pl-4 text-xl font-medium text-gray-800">
                    Get in touch
                  </div>
                  <p className="mb-4 text-gray-800">
                    Have questions about the programme or the application
                    process? Our team is here to help. Reach out to us for
                    personalised guidance and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

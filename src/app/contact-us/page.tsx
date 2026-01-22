import DynamicBreadcrumb from '@/components/common/breadcrumb'

import Link from 'next/link'
import Image from 'next/image'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function ContactPage() {
  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-[900px] pt-[160px] pb-18">
        <div className="absolute inset-0">
          <img
            src="/images/hero-contact-slider.jpg"
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
                { label: 'Contact Us', href: null },
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
                  Contact Us
                </h2>
                <h3
                  className="mb-4 text-2xl/7 font-medium text-white"
                  data-lines-slide-up>
                  This page contains key contact details for the Muscat
                  University.
                </h3>
                <p
                  className="mb-4 text-lg font-medium text-white"
                  data-lines-slide-up>
                  If you&apos;re looking for information about our courses and
                  entry requirements, please see the{' '}
                  <Link
                    className="underline underline-offset-8 transition duration-300 hover:text-gray-950"
                    href="#">
                    study section
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-18 pb-9">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12">
            <div className="">
              <div className="">
                <div>
                  <h2 className="after:bg-brand-300 text-brand-100 relative mb-4 pb-4 text-3xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                    General Enquiries
                  </h2>
                </div>
                <ul className="flex flex-col space-y-2 ps-[20px] text-lg text-gray-950">
                  <li className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                    <span className="mr-2 font-medium">
                      Phone (switchboard):
                    </span>
                    <span>+968 2464 5444</span>
                  </li>
                  <li className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                    <span className="mr-2 font-medium">Address:</span>
                    <span>Muscat University</span>
                    <div>
                      PO Box 550, PC 130, Building 2089, Al Ghubra North,
                      Muscat, Sultanate of Oman
                    </div>
                  </li>
                  <li className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                    <span className="mr-2 font-medium">General Email:</span>
                    <span>
                      <Link
                        className="hover:text-brand-200 underline underline-offset-4 transition duration-300"
                        href="mailto:info@muscatuniversity.edu.om">
                        info@muscatuniversity.edu.om
                      </Link>
                    </span>
                  </li>
                  <li className="after:bg-brand-100 relative ps-[20px] after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                    <span className="mr-2 font-medium">
                      Follow us on Social media:
                    </span>
                    <span>
                      <span className="relative flex flex-wrap items-center gap-2">
                        <Link
                          href="#"
                          className="hover:text-brand-200 transition duration-300">
                          Facebook
                        </Link>

                        <div
                          className="h-3 w-px bg-gray-600"
                          aria-hidden="true"
                        />

                        <Link
                          href="#"
                          className="hover:text-brand-200 transition duration-300">
                          Instagram
                        </Link>

                        <div
                          className="h-3 w-px bg-gray-600"
                          aria-hidden="true"
                        />

                        <Link
                          href="#"
                          className="hover:text-brand-200 transition duration-300">
                          LinkedIn
                        </Link>

                        <div
                          className="h-3 w-px bg-gray-600"
                          aria-hidden="true"
                        />

                        <Link
                          href="#"
                          className="hover:text-brand-200 transition duration-300">
                          Twitter
                        </Link>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="ms-auto max-w-[550px]">
                <Image
                  src="/images/contact-intro.jpg"
                  width={550}
                  height={580}
                  className="w-full"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-9 pb-18">
        <div className="container mx-auto">
          <div>
            <div>
              <h2 className="after:bg-brand-300 text-brand-100 relative mb-4 pb-4 text-3xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                Other Contacts
              </h2>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="group relative rounded-none border-b-[1px] border-b-gray-300 px-2 pr-12 text-xl font-medium text-gray-800 hover:no-underline [&_svg]:hidden">
                  Applying to study at the University
                  <span className="absolute top-1/2 right-4 block h-4 w-4 -translate-y-1/2">
                    <span className="absolute top-1/2 left-0 h-[1px] w-full -translate-y-1/2 bg-gray-500"></span>
                    <span className="absolute top-[1px] left-1/2 h-full w-[1px] -translate-x-1/2 bg-gray-500 group-data-[state=open]:rotate-90"></span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="py-8">
                    <div className="grid gap-3 lg:grid-cols-3">
                      <div>
                        <div className="border-l-brand-300 mb-4 border-l-2 pl-4 text-xl font-medium text-gray-800">
                          Undergraduate Admissions
                        </div>
                        <ul className="mb-4 flex flex-col space-y-2 text-gray-800">
                          <li className="after:bg-brand-100 relative ps-[20px] text-lg after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                            <span className="mr-2 font-medium">
                              Email the Undergraduate Admissions team:
                            </span>
                            <span>
                              <Link
                                className="hover:text-brand-200 underline underline-offset-4 transition duration-300"
                                href="mailto:study@muscatuniversity.edu.om">
                                study@muscatuniversity.edu.om
                              </Link>
                            </span>
                          </li>
                          <li className="after:bg-brand-100 relative ps-[20px] text-lg after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                            <span className="mr-2 font-medium">Phone:</span>
                            <span>Same as main line(via +968 2464 5444)</span>
                          </li>
                          <li className="after:bg-brand-100 relative ps-[20px] text-lg after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                            <span className="mr-2 font-medium">
                              <Link
                                className="hover:text-brand-200 underline underline-offset-8 transition duration-300"
                                href="#">
                                Visit our Undergraduate study webpage
                              </Link>
                            </span>
                            <span></span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="border-l-brand-300 mb-4 border-l-2 pl-4 text-xl font-medium text-gray-800">
                          Postgraduate Admissions
                        </div>
                        <ul className="mb-4 flex flex-col space-y-2 text-gray-800">
                          <li className="after:bg-brand-100 relative ps-[20px] text-lg after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                            <span className="mr-2 font-medium">
                              Email the Postgraduate Admissions team:
                            </span>
                            <span>
                              <Link
                                className="hover:text-brand-200 underline underline-offset-4 transition duration-300"
                                href="mailto:study@muscatuniversity.edu.om">
                                study@muscatuniversity.edu.om
                              </Link>
                            </span>
                          </li>
                          <li className="after:bg-brand-100 relative ps-[20px] text-lg after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                            <span className="mr-2 font-medium">Phone:</span>
                            <span>Same as main line (via +968 2464 5444)</span>
                          </li>
                          <li className="after:bg-brand-100 relative ps-[20px] text-lg after:absolute after:start-0 after:top-[12px] after:h-[6px] after:w-[6px] after:rounded-full">
                            <span className="mr-2 font-medium">
                              <Link
                                className="hover:text-brand-200 underline underline-offset-8 transition duration-300"
                                href="#">
                                Visit our Undergraduate study webpage
                              </Link>
                            </span>
                            <span></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="group relative rounded-none border-b-[1px] border-b-gray-300 px-2 pr-12 text-xl font-medium text-gray-800 hover:no-underline [&_svg]:hidden">
                  International Office
                  <span className="absolute top-1/2 right-4 block h-4 w-4 -translate-y-1/2">
                    <span className="absolute top-1/2 left-0 h-[1px] w-full -translate-y-1/2 bg-gray-500"></span>
                    <span className="absolute top-[1px] left-1/2 h-full w-[1px] -translate-x-1/2 bg-gray-500 group-data-[state=open]:rotate-90"></span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="py-8">
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="group relative rounded-none border-b-[1px] border-b-gray-300 px-2 pr-12 text-xl font-medium text-gray-800 hover:no-underline [&_svg]:hidden">
                  Facilities
                  <span className="absolute top-1/2 right-4 block h-4 w-4 -translate-y-1/2">
                    <span className="absolute top-1/2 left-0 h-[1px] w-full -translate-y-1/2 bg-gray-500"></span>
                    <span className="absolute top-[1px] left-1/2 h-full w-[1px] -translate-x-1/2 bg-gray-500 group-data-[state=open]:rotate-90"></span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="py-8">
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="group relative rounded-none border-b-[1px] border-b-gray-300 px-2 pr-12 text-xl font-medium text-gray-800 hover:no-underline [&_svg]:hidden">
                  Media and Marketing
                  <span className="absolute top-1/2 right-4 block h-4 w-4 -translate-y-1/2">
                    <span className="absolute top-1/2 left-0 h-[1px] w-full -translate-y-1/2 bg-gray-500"></span>
                    <span className="absolute top-[1px] left-1/2 h-full w-[1px] -translate-x-1/2 bg-gray-500 group-data-[state=open]:rotate-90"></span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="py-8">
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="group relative rounded-none border-b-[1px] border-b-gray-300 px-2 pr-12 text-xl font-medium text-gray-800 hover:no-underline [&_svg]:hidden">
                  Research and Innovation
                  <span className="absolute top-1/2 right-4 block h-4 w-4 -translate-y-1/2">
                    <span className="absolute top-1/2 left-0 h-[1px] w-full -translate-y-1/2 bg-gray-500"></span>
                    <span className="absolute top-[1px] left-1/2 h-full w-[1px] -translate-x-1/2 bg-gray-500 group-data-[state=open]:rotate-90"></span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="py-8">
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="group relative rounded-none border-b-[1px] border-b-gray-300 px-2 pr-12 text-xl font-medium text-gray-800 hover:no-underline [&_svg]:hidden">
                  Website Content Amendments
                  <span className="absolute top-1/2 right-4 block h-4 w-4 -translate-y-1/2">
                    <span className="absolute top-1/2 left-0 h-[1px] w-full -translate-y-1/2 bg-gray-500"></span>
                    <span className="absolute top-[1px] left-1/2 h-full w-[1px] -translate-x-1/2 bg-gray-500 group-data-[state=open]:rotate-90"></span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="py-8">
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}

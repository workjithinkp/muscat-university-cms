import Image from 'next/image'
import Link from 'next/link'

import ScrollToTopFloating from '@/components/common/scroll-top'

import { BsEnvelope } from 'react-icons/bs'
import { FiPhone } from 'react-icons/fi'
import { GrShareOption } from 'react-icons/gr'

import { LuArrowUpRight } from 'react-icons/lu'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'

import { Separator } from '@/components/ui/separator'

export default function FooterSection() {
  const contactData = [
    {
      type: 'contact',
      icon: <BsEnvelope />,
      label: 'Email',
      value: 'info@muscatuniversity.edu.om',
    },
    {
      type: 'contact',
      icon: <FiPhone />,
      label: 'For general enquiries',
      value: '2464 5444',
    },
    {
      type: 'contact',
      icon: <FiPhone />,
      label: 'For programmes enquiries',
      value: '2464 5456 / 2464 5475',
    },
    {
      type: 'social',
      icon: <GrShareOption />,
      items: [
        { icon: <FaFacebookF />, href: '#' },
        { icon: <FaLinkedinIn />, href: '#' },
        { icon: <FaInstagram />, href: '#' },
        { icon: <FaXTwitter />, href: '#' },
        { icon: <FaYoutube />, href: '#' },
      ],
    },
  ]

  const studyData = {
    title: 'Study at MU',
    items: [
      { label: 'UG Programmes', href: '#' },
      { label: 'PG Programmes', href: '#' },
      { label: 'International', href: '#' },
      { label: 'Short Courses', href: '#' },
    ],
  }

  const aboutData = {
    title: 'About',
    items: [
      { label: 'MU at a Glance', href: '#' },
      { label: 'Leadership & Governance', href: '#' },
      { label: 'Quality Assurance & Accreditation', href: '#' },
      { label: 'Partnerships & Affiliations', href: '#' },
      { label: 'Our Impact', href: '#' },
    ],
  }

  const academicData = {
    title: 'ACADEMICS',
    items: [
      { label: 'Faculty of Engineering & Technology', href: '#' },
      { label: 'Faculty of Business and Management', href: '#' },
      { label: 'Faculty of Transport and Logistics', href: '#' },
      { label: 'English Language Centre', href: '#' },
      { label: 'Learning Resource Centre', href: '#' },
    ],
  }

  const campusData = {
    title: 'CAMPUS',
    items: [
      { label: 'Student Advisory Council', href: '#' },
      { label: 'Campus Life', href: '#' },
      { label: 'Virtual Tour', href: '#' },
    ],
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[#fbfafa] py-18">
        <div className="container mx-auto">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 md:w-1/2 lg:w-1/3 xl:w-1/5">
              <div className="mb-4 xl:mb-0">
                <div className="mb-2 xl:mb-0">
                  <h3 className="text-brand-100 mb-4 text-xl font-medium uppercase lg:mb-8 lg:text-2xl">
                    <span className="after:bg-brand-300 relative inline-block pb-4 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[90px] after:content-[''] lg:pb-6">
                      Quick Contact
                    </span>
                  </h3>
                  <div className="flex flex-col space-y-2 pb-2">
                    {contactData.map((item, index) => {
                      const isLast = index === contactData.length - 1
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-2 overflow-hidden pb-2">
                          <div
                            className={
                              `text-brand-100/85 relative flex w-[36px] justify-center pb-2 text-2xl ` +
                              (!isLast
                                ? 'after:border-brand-100 after:absolute after:top-full after:left-1/2 after:h-[100px] after:w-[5px] after:-translate-x-1/2 after:border-l after:border-dotted after:content-[""]'
                                : '')
                            }>
                            {item.icon}
                          </div>

                          <div>
                            {item.type === 'contact' && (
                              <>
                                <div className="text-brand-100 font-medium">
                                  {item.label}
                                </div>
                                <div className="text-brand-100 font-medium">
                                  {item.value}
                                </div>
                              </>
                            )}

                            {item.type === 'social' && (
                              <div className="flex gap-2">
                                {item.items?.map((social, i) => (
                                  <Link
                                    key={i}
                                    href={social.href}
                                    className="bg-brand-100 hover:bg-brand-200 flex h-[38px] w-[38px] items-center justify-center rounded-full text-white transition duration-300">
                                    {social.icon}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-3 md:w-1/2 lg:w-1/3 xl:w-1/5">
              <div className="mb-4 xl:mb-0">
                <div className="mb-4">
                  <h3 className="text-brand-100 mb-4 text-xl font-medium uppercase lg:mb-8 lg:text-2xl">
                    <span className="after:bg-brand-300 relative inline-block pb-4 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[90px] after:content-[''] lg:pb-6">
                      {studyData.title}
                    </span>
                  </h3>
                </div>
                <ul className="flex flex-col space-y-2">
                  {studyData.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-brand-100 hover:text-brand-200 block border-b border-[#dbdada] px-2 py-2 transition duration-300">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full px-3 md:w-1/2 lg:w-1/3 xl:w-1/5">
              <div className="mb-4 xl:mb-0">
                <div className="mb-4">
                  <h3 className="text-brand-100 mb-4 text-xl font-medium uppercase lg:mb-8 lg:text-2xl">
                    <span className="after:bg-brand-300 relative inline-block pb-4 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[90px] after:content-[''] lg:pb-6">
                      {aboutData.title}
                    </span>
                  </h3>
                </div>
                <ul className="flex flex-col space-y-2">
                  {aboutData.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-brand-100 hover:text-brand-200 block border-b border-[#dbdada] px-2 py-2 transition duration-300">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full px-3 md:w-1/2 lg:w-1/3 xl:w-1/5">
              <div className="mb-4 xl:mb-0">
                <div className="mb-4">
                  <h3 className="text-brand-100 mb-4 text-xl font-medium uppercase lg:mb-8 lg:text-2xl">
                    <span className="after:bg-brand-300 relative inline-block pb-4 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[90px] after:content-[''] lg:pb-6">
                      {academicData.title}
                    </span>
                  </h3>
                </div>
                <ul className="flex flex-col space-y-2">
                  {academicData.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-brand-100 hover:text-brand-200 block border-b border-[#dbdada] px-2 py-2 transition duration-300">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full px-3 md:w-1/2 lg:w-1/3 xl:w-1/5">
              <div className="mb-4 xl:mb-0">
                <div className="mb-4">
                  <h3 className="text-brand-100 mb-4 text-xl font-medium uppercase lg:mb-8 lg:text-2xl">
                    <span className="after:bg-brand-300 relative inline-block pb-4 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[90px] after:content-[''] lg:pb-6">
                      {campusData.title}
                    </span>
                  </h3>
                </div>
                <ul className="flex flex-col space-y-2">
                  {campusData.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-brand-100 hover:text-brand-200 block border-b border-[#dbdada] px-2 py-2 transition duration-300">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-4 items-center xl:mt-12">
          <div className="-mx-3 flex flex-wrap items-center">
            <div className="w-full xl:w-3/4">
              <ul className="relative mb-4 flex flex-wrap justify-center xl:mb-0 xl:items-center">
                <li className="text-brand-100">
                  &copy; Copyright {new Date().getFullYear()} All Rights
                  Reserved.
                </li>
                <li className="bg-brand-100 mx-1 h-3 w-px" />
                <li>
                  <Link
                    className="text-brand-100 hover:text-brand-200 px-2 py-2"
                    href="#">
                    MU Privacy Policy
                  </Link>
                </li>
                <li className="bg-brand-100 mx-1 h-3 w-px" />
                <li>
                  <Link
                    className="text-brand-100 hover:text-brand-200 px-2 py-2"
                    href="#">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="bg-brand-100 mx-1 h-3 w-px" />
                <li>
                  <Link
                    className="text-brand-100 hover:text-brand-200 px-2 py-2"
                    href="#">
                    Accessibility Statement
                  </Link>
                </li>
                <li className="bg-brand-100 mx-1 h-3 w-px" />
                <li>
                  <Link
                    className="text-brand-100 hover:text-brand-200 px-2 py-2"
                    href="#">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full xl:w-1/4">
              <div className="flex justify-center gap-2 xl:ml-auto">
                <Link href="#">
                  <img
                    src="/images/oman-vision-logo.png"
                    width={220}
                    height={125}
                    className="w-full"
                    alt="Logo"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="/images/ministry-logo.png"
                    width={150}
                    height={125}
                    className="w-full"
                    alt="Logo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTopFloating />
    </>
  )
}

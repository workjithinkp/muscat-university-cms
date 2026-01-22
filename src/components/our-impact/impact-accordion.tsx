'use client'

import ImpactAchievement from '@/components/our-impact/achievement-swiper'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const academic = [
  {
    id: 1,
    img: '/images/academic-item-01.jpg',
    title: 'Innovative Academic Programs',
    content: [
      {
        heading: 'Innovative Academic Programs',
        'text-01':
          'Our programs are rooted in industry, research, and hands-on learning, preparing graduates to contribute meaningfully to both the local and global community.',
        'text-02':
          'The BSc in Sustainable Port and Shipping Management, for example, provides a comprehensive education that encompasses a deep understanding of sustainability principles in port, shipping, and logistics management.',
      },
    ],
  },
  {
    id: 2,
    img: '/images/academic-item-02.jpg',
    title: 'Partnerships for Knowledge Sharing',
    content: [
      {
        heading: 'Partnerships for Knowledge Sharing',
        'text-01':
          'Our programs are rooted in industry, research, and hands-on learning, preparing graduates to contribute meaningfully to both the local and global community.',
        'text-02':
          'The BSc in Sustainable Port and Shipping Management, for example, provides a comprehensive education that encompasses a deep understanding of sustainability principles in port, shipping, and logistics management.',
      },
    ],
  },
]

export default function ImpactAccordion() {
  const [active, setActive] = useState(1)

  return (
    <>
      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={['item-1', 'item-2', 'item-3', 'item-4', 'item-5']}>
        <AccordionItem value="item-1">
          <AccordionTrigger className="!text-brand-100 bg-brand-100/2 !border-l-brand-300 border-brand-100/50 rounded-none border-1 border-l-[3px] px-2 text-xl font-medium text-gray-800 hover:no-underline">
            1. Community Impact & Sustainability
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="px-4 py-4 2xl:px-8 2xl:py-8">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div>
                  <div className="group relative h-full bg-[#f6f6f6] px-6 py-6 transition duration-300 hover:bg-[#eeeeee]">
                    <div className="relative mb-6 h-[90px] w-[90px]">
                      <div className="bg-brand-200 absolute inset-0 scale-0 rounded-full transition duration-300 group-hover:scale-120"></div>
                      <div className="relative">
                        <Image
                          src="/images/impact-icon-01.png"
                          alt="Icon"
                          width={90}
                          height={90}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-brand-100 mb-4 pb-1 text-2xl leading-none font-medium">
                        Sustainable Campus Development
                      </h3>
                      <p className="text-gray-950">
                        Muscat University is in the process of developing a new
                        state-of-the-art campus in Madinat Al Irfan, designed
                        with sustainability at its core. The campus will feature
                        energy-efficient buildings, green spaces, and smart
                        technologies to minimize environmental impact and
                        promote sustainable living
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="group relative h-full bg-[#f6f6f6] px-6 py-6 transition duration-300 hover:bg-[#eeeeee]">
                    <div className="relative mb-6 h-[90px] w-[90px]">
                      <div className="bg-brand-200 absolute inset-0 scale-0 rounded-full transition duration-300 group-hover:scale-120"></div>
                      <div className="relative">
                        <Image
                          src="/images/impact-icon-02.png"
                          alt="Icon"
                          width={90}
                          height={90}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-brand-100 mb-4 pb-1 text-2xl leading-none font-medium">
                        Curriculum Aligned with Sustainability Goals
                      </h3>
                      <p className="text-gray-950">
                        Our academic programs are designed to address global
                        sustainability challenges. Notably, the MSc in
                        Sustainable Energy Development and Management equips
                        students with skills to manage and develop sustainable
                        energy systems, fostering a holistic approach to
                        environmental stewardship.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="group relative h-full bg-[#f6f6f6] px-6 py-6 transition duration-300 hover:bg-[#eeeeee]">
                    <div className="relative mb-6 h-[90px] w-[90px]">
                      <div className="bg-brand-200 absolute inset-0 scale-0 rounded-full transition duration-300 group-hover:scale-120"></div>
                      <div className="relative">
                        <Image
                          src="/images/impact-icon-03.png"
                          alt="Icon"
                          width={90}
                          height={90}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-brand-100 mb-4 pb-1 text-2xl leading-none font-medium">
                        Industry Collaboration for Sustainable Practices
                      </h3>
                      <p className="text-gray-950">
                        Muscat University collaborates with industry partners to
                        promote sustainable practices. For instance, the
                        university hosted the LRN Oman 2025 conference, focusing
                        on supply chain sustainability, resilience, and NetZero
                        logistics, providing a platform for academic and
                        industry leaders to discuss and develop sustainable
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="!text-brand-100 bg-brand-100/2 !border-l-brand-300 border-brand-100/50 rounded-none border-1 border-l-[3px] px-2 text-xl font-medium text-gray-800 hover:no-underline">
            2. Academic Excellence & Industry Engagement
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="px-4 py-4 2xl:px-8 2xl:py-8">
              <div className="mx-auto flex h-[500px] gap-1">
                {academic.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={`flex gap-1 overflow-hidden transition-all duration-500 ${active === item.id ? 'flex-[6]' : 'flex-1'} `}>
                    <div className="relative w-[225px] shrink-0 cursor-pointer">
                      <div className="relative h-full">
                        <Image
                          src={item.img}
                          width={225}
                          height={500}
                          className="h-full w-full object-cover"
                          alt="Image"
                        />
                        <div className="absolute right-0 bottom-0 left-0 h-full bg-linear-to-t from-black/75 to-black/0 transition duration-200 group-hover:h-[100%]"></div>
                      </div>
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="origin-center -rotate-90 text-2xl font-medium text-white uppercase">
                          {item.title}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`transition-all duration-300 ${active === item.id ? 'flex-1 opacity-100' : 'w-0 flex-0 opacity-0'} `}>
                      <div className="bg-brand-100 h-full px-6 py-6 xl:px-16 xl:py-16">
                        <div
                          className={`transition-all delay-500 duration-300 ${
                            active === item.id
                              ? 'translate-y-0 opacity-100'
                              : 'translate-y-1/4 opacity-0'
                          }`}>
                          {item.content.map((contentItem) => (
                            <div key={contentItem.heading} className="mb-4">
                              <div className="relative mb-4 text-3xl font-medium text-white uppercase">
                                {contentItem.heading}
                              </div>
                              <p className="mb-4 font-medium text-white">
                                {contentItem['text-01']}
                              </p>
                              <p className="text-white">
                                {contentItem['text-02']}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="!text-brand-100 bg-brand-100/2 !border-l-brand-300 border-brand-100/50 rounded-none border-1 border-l-[3px] px-2 text-xl font-medium text-gray-800 hover:no-underline">
            3. Community Engagement & Social Responsibility
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="px-4 py-4 2xl:px-8 2xl:py-8">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:gap-12">
                <div>
                  <div className="group relative">
                    <div className="overflow-hidden">
                      <Image
                        src="/images/impact-community-01.jpg"
                        width={600}
                        height={200}
                        className="w-full transition duration-300 group-hover:scale-110"
                        alt="Image"
                      />
                    </div>
                    <div className="px-6 py-6">
                      <h3 className="text-brand-100 mb-4 text-2xl font-medium">
                        Student Ambassador <br />
                        Program
                      </h3>
                      <p className="text-gray-950">
                        The Student Ambassador Program empowers students to
                        represent the university through various events and
                        activities, fostering a sense of community and
                        encouraging active participation in university life.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="group relative">
                    <div className="overflow-hidden">
                      <Image
                        src="/images/impact-community-02.jpg"
                        width={600}
                        height={200}
                        className="w-full transition duration-300 group-hover:scale-110"
                        alt="Image"
                      />
                    </div>
                    <div className="px-6 py-6">
                      <h3 className="text-brand-100 mb-4 text-2xl font-medium">
                        Public Engagement <br />
                        Initiatives
                      </h3>
                      <p className="text-gray-950">
                        Muscat University actively participates in public forums
                        and events, such as the Arab World Digital Universities
                        Conference, to discuss and promote digital
                        transformation and sustainability in higher education,
                        contributing to the broader societal dialogue on these
                        critical issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="!text-brand-100 bg-brand-100/2 !border-l-brand-300 border-brand-100/50 rounded-none border-1 border-l-[3px] px-2 text-xl font-medium text-gray-800 hover:no-underline">
            4. Infrastructure & Regional Development
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="px-4 py-4 2xl:px-8 2xl:py-8">
              <div className="grid grid-cols-1 items-center lg:grid-cols-2">
                <div className="">
                  <div>
                    <Image
                      src="/images/impact-infrastructure.jpg"
                      width={750}
                      height={450}
                      className="w-full transition duration-300"
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="ml-[-200px] w-[calc(100%+200px)]">
                  <div className="bg-brand-100 border-l-brand-300 relative border-s-[3px] px-8 py-12">
                    <h3 className="mb-4 text-2xl font-medium text-white">
                      New Campus in Madinat Al Irfan
                    </h3>
                    <p className="text-white">
                      The upcoming campus in Madinat Al Irfan is a significant
                      step in Muscat University&apos;s growth, providing modern
                      facilities that support learning, research, and community
                      engagement. This development aligns with Oman&apos;s
                      Vision 2040, aiming to create a sustainable and
                      knowledge-driven economy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="!text-brand-100 bg-brand-100/2 !border-l-brand-300 border-brand-100/50 rounded-none border-1 border-l-[3px] px-2 text-xl font-medium text-gray-800 hover:no-underline">
            5. Metrics & Achievements
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="px-4 py-4 2xl:px-8 2xl:py-8">
              <div className="mb-8">
                <h3 className="text-center text-2xl font-medium text-gray-950">
                  To measure and communicate our impact, we track key
                  performance indicators across various domains:
                </h3>
              </div>
              <div>
                <ImpactAchievement />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}

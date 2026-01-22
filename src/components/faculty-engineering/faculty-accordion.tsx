'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

const faculty = [
  {
    id: 1,
    img: '/images/faculty-unique-01.jpg',
    title: 'Industry-Integrated Learning',
    content: [
      {
        no: '01',
        heading: 'Industry-Integrated Learning',
        'text-01':
          "FET's curriculum is designed to bridge the gap between academic learning and industry practice. ",
        'text-02':
          "FET's curriculum is designed to bridge the gap between academic learning and industry practice. ",
      },
    ],
  },
  {
    id: 2,
    img: '/images/faculty-unique-02.jpg',
    title: 'Collaborations with Leading Industry Partners',
    content: [
      {
        no: '02',
        heading: 'Industry-Integrated Learning',
        'text-01':
          "FET's curriculum is designed to bridge the gap between academic learning and industry practice. ",
        'text-02':
          "FET's curriculum is designed to bridge the gap between academic learning and industry practice. ",
      },
    ],
  },
  {
    id: 3,
    img: '/images/faculty-unique-03.jpg',
    title: 'Innovative Research and Development',
    content: [
      {
        no: '03',
        heading: 'Industry-Integrated Learning',
        'text-01':
          "FET's curriculum is designed to bridge the gap between academic learning and industry practice. ",
        'text-02':
          "FET's curriculum is designed to bridge the gap between academic learning and industry practice. ",
      },
    ],
  },
]

const profileData = [
  {
    image: '/images/faculty-profile-01.jpg',
    name: 'Dr. Nasir Zubair',
    position: 'Acting Director, Faculty of Transport and Logistics',
    href: '#',
  },
  {
    image: '/images/faculty-profile-02.jpg',
    name: 'Dr. Ahmed Zainul Abideen',
    position: 'Lecturer in Sustainable Supply Chain and Supply Chain Analytics',
    href: '#',
  },
  {
    image: '/images/faculty-profile-03.jpg',
    name: 'Dr. Nasir Zubair',
    position: 'Acting Director, Faculty of Transport and Logistics',
    href: '#',
  },
  {
    image: '/images/faculty-profile-04.jpg',
    name: 'Dr. Nasir Zubair',
    position: 'Acting Director, Faculty of Transport and Logistics',
    href: '#',
  },
  {
    image: '/images/faculty-profile-01.jpg',
    name: 'Dr. Nasir Zubair',
    position: 'Acting Director, Faculty of Transport and Logistics',
    href: '#',
  },
  {
    image: '/images/faculty-profile-02.jpg',
    name: 'Dr. Ahmed Zainul Abideen',
    position: 'Lecturer in Sustainable Supply Chain and Supply Chain Analytics',
    href: '#',
  },
]

export default function FacultyAccordion() {
  const [active, setActive] = useState(1)

  return (
    <>
      <div className="mx-auto flex h-[500px] max-w-[1150px] gap-1">
        {faculty.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex gap-1 overflow-hidden transition-all duration-500 ${active === item.id ? 'flex-[6]' : 'flex-1'} `}>
            <div className="relative w-[150px] shrink-0 cursor-pointer">
              <div className="relative h-full">
                <Image
                  src={item.img}
                  width={150}
                  height={500}
                  className="h-full w-full object-cover"
                  alt="Image"
                />
                <div className="absolute right-0 bottom-0 left-0 h-full bg-linear-to-t from-black/75 to-black/0 transition duration-200 group-hover:h-[100%]"></div>
              </div>
              <div className="absolute inset-0 z-10">
                <div className="absolute bottom-8 left-4 w-[350px] origin-bottom-left translate-x-[72px] -rotate-90 text-xl font-medium text-white uppercase">
                  {item.title}
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-300 ${active === item.id ? 'flex-1 opacity-100' : 'w-0 flex-0 opacity-0'} `}>
              <div className="h-full bg-white px-6 py-6 lg:px-12 lg:py-12">
                <div
                  className={`transition-all delay-500 duration-300 ${
                    active === item.id
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-1/4 opacity-0'
                  }`}>
                  {item.content.map((contentItem) => (
                    <div key={contentItem.no} className="mb-4">
                      <div className="text-brand-100 mb-4 text-3xl font-medium">
                        {contentItem.no}
                      </div>
                      <div className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-3xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                        {contentItem.heading}
                      </div>
                      <p className="mb-4 font-medium text-gray-950">
                        {contentItem['text-01']}
                      </p>
                      <p className="text-gray-950">{contentItem['text-02']}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

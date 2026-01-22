import Image from 'next/image'
import Link from 'next/link'

import { LuArrowUpRight } from 'react-icons/lu'

const newsData = [
  {
    id: 1,
    img: '/images/news-thumb-sm-01.jpg',
    year: 'Jun 22, 2025',
    title: 'Graduation ceremony of a new batch of MSc',
    description: '#Happening_Now live From Cranfield University',
  },
  {
    id: 2,
    img: '/images/news-thumb-sm-02.jpg',
    year: 'Jun 22, 2025',
    title: 'Lorem ipsum dolor',
    description: '#Happening_Now live From Cranfield University',
  },
  {
    id: 3,
    img: '/images/news-thumb-sm-03.jpg',
    year: 'Jun 22, 2025',
    title: 'Lorem ipsum dolor',
    description: '#Happening_Now live From Cranfield University',
  },
]

const eventsData = [
  {
    id: 1,
    date: { month: 'Oct', day: '09' },
    title: 'Sustainability Question Time',
    description:
      'Join our panel for a Question Time discussion on sustainability issues globally, locally and on campus',
  },
  {
    id: 2,
    date: { month: 'Oct', day: '09' },
    title: 'Career navigation as a Black academic with Muscat University',
    description:
      'Join our panel for a Question Time discussion on sustainability issues globally, locally and on campus',
  },
  {
    id: 3,
    date: { month: 'Oct', day: '09' },
    title: 'Sustainability Question Time',
    description:
      'Join our panel for a Question Time discussion on sustainability issues globally, locally and on campus',
  },
]

export default function NewsSection() {
  return (
    <>
      <section className="relative overflow-hidden pt-10 pb-18">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[73%_27%] xl:gap-8">
            <div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:gap-8">
                <div className="sm:col-span-2">
                  <h2
                    className="text-3xl font-medium text-gray-950 lg:text-4xl"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1500">
                    <span className="after:bg-brand-300 text-brand-100 relative inline-block pb-4 uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[3px] after:content-['']">
                      Latest News
                    </span>
                  </h2>
                </div>
                <div>
                  <div
                    className="group relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1500">
                    <div className="relative">
                      <Image
                        src="/images/news-thumb-lg.jpg"
                        width={475}
                        height={315}
                        alt="Image"
                        className="w-full"
                      />
                      <Link
                        href="#"
                        className="group-hover:bg-brand-300 absolute right-0 bottom-0 z-10 flex h-[60px] w-[60px] items-center justify-center bg-[#08bed5] text-2xl text-white transition duration-300">
                        <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
                      </Link>
                    </div>
                    <div className="bg-[#08bed5] px-8 py-4 text-2xl font-medium text-white">
                      Congratulation to all graduates of undergraduate
                      programs...
                    </div>
                    <div className="bg-[#114b86] px-8 py-8">
                      <div className="mb-2 text-[#95c5f6] uppercase">
                        Jun 22, 2025
                      </div>
                      <p className="line-clamp-3 text-xl text-white">
                        Muscat University congratulates all graduates of
                        undergraduate programs in partnership with Aston
                        University. Wishing them all success in their careers
                        and achieving more future achievements.
                      </p>
                      <Link
                        className="hover:border-brand-300 hover:text-brand-300 inline-block border-b-[2px] border-white px-2 py-2 text-white transition duration-300"
                        href="#">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="flex h-full flex-col"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1500">
                    <div className="flex-1 sm:h-[550px] 2xl:px-8 2xl:pt-8">
                      {newsData.map((item, index) => {
                        const isLast = index === newsData.length - 1

                        return (
                          <div
                            key={index}
                            className={`group flex ${
                              isLast
                                ? ''
                                : 'mb-4 border-b-[1px] border-gray-200 pb-4'
                            }`}>
                            <div className="relative">
                              <Image
                                className="h-full w-full object-cover"
                                src={item.img}
                                width={145}
                                height={150}
                                alt="Image"
                              />
                              <Link
                                href="#"
                                className="group-hover:bg-brand-300 absolute right-0 bottom-0 z-10 flex h-[42px] w-[42px] items-center justify-center bg-[#08bed5] text-2xl text-white transition duration-300">
                                <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
                              </Link>
                            </div>
                            <div className="flex-1 px-4 pt-4">
                              <h3 className="mb-1 text-xl leading-none font-medium text-gray-950">
                                {item.title}
                              </h3>
                              <div className="text-brand-300 mb-1 uppercase">
                                {item.year}
                              </div>
                              <p className="text-lg leading-6 text-gray-950">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <div className="mt-2 sm:mt-auto 2xl:px-8">
                      <Link
                        className="group inline-flex flex-1 border-1 border-gray-700 text-gray-950 transition duration-300 hover:border-[#08bed5] hover:bg-[#08bed5]"
                        href="/">
                        <span className="flex-1 px-4 py-2 group-hover:text-white">
                          Read all News
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
            <div
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1500">
              <div className="col-span-3 mb-4 xl:mb-8">
                <h2
                  className="text-brand-100 text-3xl font-medium lg:text-4xl"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1500">
                  <span className="after:bg-brand-300 relative inline-block pb-4 uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[3px] after:content-['']">
                    Upcoming Events
                  </span>
                </h2>
              </div>
              <div className="relative flex flex-1 flex-col bg-[#eff1f0] px-6 py-6">
                <div className="flex h-full flex-col space-y-4">
                  {eventsData.map((item, index) => {
                    const isLast = index === newsData.length - 1

                    return (
                      <div
                        key={index}
                        className={`group flex items-start text-xl ${
                          isLast
                            ? ''
                            : 'mb-4 border-b-[1px] border-gray-300 pb-4 xl:mb-8 xl:pb-8'
                        }`}>
                        <div className="relative w-[60px] bg-[#08bed5] px-2 py-2 text-center text-white">
                          {item.date.month} <br />
                          {item.date.day}
                        </div>
                        <div className="flex-1 px-4">
                          <h3 className="mb-1 line-clamp-2 text-xl leading-none font-medium text-gray-950">
                            {item.title}
                          </h3>
                          <p className="line-clamp-3 text-lg leading-6 text-gray-950">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div>
                  <Link
                    className="hover:border-brand-300 hover:text-brand-300 inline-block border-b-[2px] border-gray-950 px-2 py-2 text-gray-950 transition duration-300"
                    href="#">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

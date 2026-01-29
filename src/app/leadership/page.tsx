'use client'

import LeadershipSubmenu from '@/app/leadership/components/leadership-submenu'

import DynamicBreadcrumb from '@/components/common/breadcrumb'

import Link from 'next/link'
import Image from 'next/image'

const boardMembersData = {
  top: [
    {
      name: 'H.E. Dr. Yahya Mahfoodh Al Mandhari',
      role: 'Chairman',
      image: '/images/leadership-lg-01.jpg',
      width: 475,
      height: 315,
    },
    {
      name: 'Al Sayyid Khalid Al Busaidi',
      role: 'Deputy Chairman',
      image: '/images/leadership-lg-02.jpg',
      width: 475,
      height: 315,
    },
  ],

  bottom: [
    {
      name: 'Dr. Fahim Abdullah Ali Al Marhubi',
      role: 'Member',
      image: '/images/leadership-dummy.jpg',
      width: 325,
      height: 230,
    },
    {
      name: 'Reggy Vermeulen',
      role: 'Member',
      image: '/images/leadership-01.jpg',
      width: 325,
      height: 230,
    },
    {
      name: 'Dr. Rashid Hamed Al Balushi',
      role: 'Member',
      image: '/images/leadership-02.jpg',
      width: 325,
      height: 230,
    },
    {
      name: 'Jelena Lagger',
      role: 'Member',
      image: '/images/leadership-03.jpg',
      width: 325,
      height: 230,
    },
    {
      name: 'Dr. Abdullah bin Saleh Baabood',
      role: 'Member',
      image: '/images/leadership-dummy.jpg',
      width: 325,
      height: 230,
    },
    {
      name: 'Mr. Abdul Wahab Al Balushi ',
      role: 'Member',
      image: '/images/leadership-dummy.jpg',
      width: 325,
      height: 230,
    },
    {
      name: 'Dr. Ahmed Abdulkarim Al Hooti',
      role: 'Member',
      image: '/images/leadership-dummy.jpg',
      width: 325,
      height: 230,
    },
    {
      name: 'Mrs. Areej Mohsin Darwish',
      role: 'Member',
      image: '/images/leadership-dummy.jpg',
      width: 325,
      height: 230,
    },
    {
      name: 'Mr. Mohamed Jaffar',
      role: 'Member',
      image: '/images/leadership-dummy.jpg',
      width: 325,
      height: 230,
    },
    {
      name: 'Mr. Saud bin Ahmed Al Nahari ',
      role: 'Member',
      image: '/images/leadership-dummy.jpg',
      width: 325,
      height: 230,
    },
  ],
}

const seniorManagementData = [
  {
    name: 'Dr. Samya Al Shanfari',
    role: 'Executive Director of Quality and Institutional Performance',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
  {
    name: 'Mohsin Al Hinai',
    role: 'Registrar & Director of Admissions and Student Administration',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
  {
    name: 'Dr. Murid Hussain',
    role: 'Director of the Faculty of Engineering and Technology',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
  {
    name: 'Dr. Ramzi Nekhili',
    role: 'Dean of the Faculty of Business and Management',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
  {
    name: 'Dr. Muhammad Zahid',
    role: 'Dean of the Faculty of Logistics & Transport',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
  {
    name: 'Ejaaz Abdulaziz Sameja',
    role: 'Director of the General Foundation Programme',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
  {
    name: 'Hind Jafar',
    role: 'Director of Human Resources',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
  {
    name: 'Dr. Mahmood Shah',
    role: 'Director of Research & Innovation',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
]

const leadershipTeamData = [
  {
    name: 'Professor Khamis Al Yahyai',
    role: 'Vice-Chancellor',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
  {
    name: 'Dr. Chiraz Zidi',
    role: 'Deputy Vice Chancellor for Academic Affairs, Research and Innovation',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
]

const managementTeamData = [
  {
    name: 'Lakshminarasimhan',
    role: 'Senior Manager of Finance & Audit',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
  {
    name: 'Khalid Al Balushi',
    role: 'Human Resources Manager',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
  {
    name: 'Michelle Estorque',
    role: 'Quality and Institutional Performance Manager',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
  {
    name: 'Ayman Bait Saleem',
    role: 'Marketing & Communications Manager',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
  {
    name: 'Suleiman Al Sharji',
    role: 'Acting Manager of Infrastructure & Information Systems',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
  {
    name: 'Ayman Al Balushi',
    role: 'Accounting Manager',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
  {
    name: 'Iman Al Harthi',
    role: 'Head of Learning Resource Centre (LRC)',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
  {
    name: 'Arib Al Mandhari',
    role: 'Assistant Manager of Government Relations and Founder',
    image: '/images/leadership-dummy.jpg',
    width: 325,
    height: 230,
  },
]

export default function LeadershipPage() {
  return (
    <>
      <section className="relative min-h-[900px] pt-[160px] pb-18">
        <div className="absolute inset-0">
          <img
            src="/images/hero-leadership-slider.jpg"
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
                { label: 'About', href: '#' },
                { label: 'Leadership & Governance', href: null },
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
                  Leadership & Governance
                </h2>
                <p
                  className="mb-4 text-xl/7 font-medium text-white"
                  data-lines-slide-up>
                  At Muscat University, strong and visionary leadership drives
                  our mission to provide high-quality education, advance
                  research, and contribute positively to society.
                </p>
                <p
                  className="mb-4 text-xl/7 font-medium text-white"
                  data-lines-slide-up>
                  Our governance structure, led by the Board of Trustees and
                  senior management team, ensures strategic direction,
                  operational excellence, and alignment with Oman&apos;s
                  national goals for education, innovation, and sustainable
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-18">
        <div className="container mx-auto">
          <div className="grid grid-cols-[400px_1fr] gap-4 lg:gap-8">
            <div className="relative">
              <LeadershipSubmenu />
            </div>
            <div id="content-wrapper">
              <div id="section-01" className="mb-8">
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1500">
                  <h3 className="after:bg-brand-300 text-brand-100 relative mb-4 pb-4 text-2xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                    Board of Trustees
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:gap-8">
                  {boardMembersData.top.map((item, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      data-aos-duration="1500">
                      <div className="group relative">
                        <div className="overflow-hidden">
                          <Image
                            src={item.image}
                            width={item.width}
                            height={item.height}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                            alt={item.name}
                          />
                        </div>

                        <div className="px-4 py-4">
                          <div className="relative px-2 py-2">
                            <h3 className="text-brand-100 mb-2 text-2xl leading-none font-medium">
                              {item.name}
                            </h3>
                            <p className="text-brand-100 text-xl whitespace-pre-line">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {boardMembersData.bottom.map((item, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      data-aos-duration="1500">
                      <div className="group relative">
                        <div className="overflow-hidden">
                          <Image
                            src={item.image}
                            width={item.width}
                            height={item.height}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                            alt={item.name}
                          />
                        </div>

                        <div className="px-2 py-2">
                          <div className="relative px-2 py-2">
                            <h3 className="text-brand-100 mb-2 text-lg leading-none font-medium">
                              {item.name}
                            </h3>
                            <p className="text-brand-100 text-xl whitespace-pre-line">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="section-02" className="mb-8">
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1500">
                  <h3 className="after:bg-brand-300 text-brand-100 relative mb-4 pb-4 text-2xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                    Senior Management
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {seniorManagementData.map((item, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      data-aos-duration="1500">
                      <div className="group relative">
                        <div className="overflow-hidden">
                          <Image
                            src={item.image}
                            width={item.width}
                            height={item.height}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                            alt={item.name}
                          />
                        </div>

                        <div className="px-2 py-2">
                          <div className="relative px-2 py-2">
                            <h3 className="text-brand-100 mb-2 text-lg leading-none font-medium">
                              {item.name}
                            </h3>
                            <p className="text-brand-100 text-xl whitespace-pre-line">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="section-03" className="mb-8">
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1500">
                  <h3 className="after:bg-brand-300 text-brand-100 relative mb-4 pb-4 text-2xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                    Leadership
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {leadershipTeamData.map((item, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      data-aos-duration="1500">
                      <div className="group relative">
                        <div className="overflow-hidden">
                          <Image
                            src={item.image}
                            width={item.width}
                            height={item.height}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                            alt={item.name}
                          />
                        </div>

                        <div className="px-2 py-2">
                          <div className="relative px-2 py-2">
                            <h3 className="text-brand-100 mb-2 text-lg leading-none font-medium">
                              {item.name}
                            </h3>
                            <p className="text-brand-100 text-xl whitespace-pre-line">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="section-04" className="mb-8">
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1500">
                  <h3 className="after:bg-brand-300 text-brand-100 relative mb-4 pb-4 text-2xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                    Management Team
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {managementTeamData.map((item, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      data-aos-duration="1500">
                      <div className="group relative">
                        <div className="overflow-hidden">
                          <Image
                            src={item.image}
                            width={item.width}
                            height={item.height}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                            alt={item.name}
                          />
                        </div>

                        <div className="px-2 py-2">
                          <div className="relative px-2 py-2">
                            <h3 className="text-brand-100 mb-2 text-lg leading-none font-medium">
                              {item.name}
                            </h3>
                            <p className="text-brand-100 text-xl whitespace-pre-line">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

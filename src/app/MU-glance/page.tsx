import DynamicBreadcrumb from '@/components/common/breadcrumb'
import GlanceSubmenu from '@/components/mu-glance/sub-menu'

import Link from 'next/link'
import Image from 'next/image'

const valuesData = [
  {
    id: 1,
    logo: '/images/values-item-01.jpg',
    title: 'Excellence',
    desc: 'We deliver valuable experiences that are relevant to our stakeholders.',
  },
  {
    id: 2,
    logo: '/images/values-item-02.jpg',
    title: 'Innovation',
    desc: 'We pursue new ideas and methods that result in delivering good services and positive experiences.',
  },
  {
    id: 3,
    logo: '/images/values-item-03.jpg',
    title: 'Accountability',
    desc: 'We accept responsibility for our actions and welcome others to evaluate our performance.',
  },
  {
    id: 4,
    logo: '/images/values-item-04.jpg',
    title: 'Transparency',
    desc: 'We are open to and value trustworthy communications with our stakeholders.',
  },
  {
    id: 5,
    logo: '/images/values-item-05.jpg',
    title: 'Collaboration',
    desc: 'We embrace team spirit and provide a welcoming, supportive, and collaborative environment to achieve our common purposes',
  },
  {
    id: 6,
    logo: '/images/values-item-06.jpg',
    title: 'Integrity',
    desc: 'We are fair and honest in all our relations and activities.',
  },
  {
    id: 7,
    logo: '/images/values-item-07.jpg',
    title: 'Professionalism',
    desc: 'We are competent and behave based on ethical principles and values.',
  },
]

const graduateData = [
  {
    icon: '/images/glance-attribute-01.png',
    title: 'Critical Thinker ',
    desc: 'They actively reflect on ideas and assumptions, analyze and evaluate evidence in order to reach logical decisions.',
    bg: 'bg-[#114a87]',
    span: 1,
  },
  {
    icon: '/images/glance-attribute-02.png',
    title: 'Effective Communicator',
    desc: 'They convey their message clearly and confidently. They are receptive and responsive to others&apos; input.',
    bg: 'bg-[#0f4074]',
    span: 1,
  },
  {
    icon: '/images/glance-attribute-03.png',
    title: 'Life-long learner',
    desc: 'They appreciate continuous learning, and they carry on developing throughout life.',
    bg: 'bg-[#114a87]',
    span: 1,
  },
  {
    icon: '/images/glance-attribute-04.png',
    title: 'Innovative',
    desc: 'They provide effective, new, creative solutions to problems.',
    bg: 'bg-[#0f4074]',
    span: 1,
  },
  {
    icon: '/images/glance-attribute-05.png',
    title: 'Knowledgeable',
    desc: 'They are subject specialists, well informed and have in-depth knowledge associated with their discipline.',
    bg: 'bg-[#114a87]',
    span: 1,
  },
  {
    icon: '/images/glance-attribute-06.png',
    title: 'Ethical',
    desc: 'They demonstrate high level of professionalism and ethical behavior.',
    bg: 'bg-[#0f4074]',
    span: 1,
  },
  {
    icon: '/images/glance-attribute-07.png',
    title: 'Responsible',
    desc: 'They take responsibility for their own behavior, actions, and roles. They are trustworthy and capable of meeting expectations. ',
    bg: 'bg-[#195492]',
    span: 2,
  }, // 2/3 wide
  {
    icon: '/images/glance-attribute-08.png',
    title: 'Entrepreneur',
    desc: 'They have the ability and qualities to develop enterprises appropriate to their context.',
    bg: 'bg-[#114a87]',
    span: 1,
  },
]

export default function MuGlance() {
  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-[900px] pt-[160px]">
        <div className="absolute inset-0 bg-linear-to-t from-[#1dcef2] to-[#0e9db8]"></div>

        <div className="relative border-b-[1px] border-b-white/20 pb-3">
          <div className="container mx-auto">
            <DynamicBreadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'About', href: '#' },
                { label: 'MU at Glance', href: null },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="relative z-10 py-8 lg:py-28">
            <div className="mx-auto max-w-[750px]">
              <h1
                className="mb-4 text-center text-6xl leading-none font-medium text-white uppercase lg:text-5xl"
                data-lines-slide-up>
                OUR future
              </h1>
              <div className="relative mb-4 flex flex-wrap items-center justify-center gap-2">
                <div
                  className="text-4xl font-medium text-white"
                  data-lines-slide-up>
                  Innovation
                </div>
                <div className="mx-4 h-6 w-[3px] bg-white" aria-hidden="true" />
                <div
                  className="text-4xl font-medium text-white"
                  data-lines-slide-up>
                  Excellence
                </div>
                <div className="mx-4 h-6 w-[3px] bg-white" aria-hidden="true" />
                <div
                  className="text-4xl font-medium text-white"
                  data-lines-slide-up>
                  Impact
                </div>
              </div>
              <div>
                <p
                  className="text-center text-lg font-medium text-white"
                  data-lines-slide-up>
                  Muscat University is shaping the future through quality
                  education, impactful research, and strong industry
                  collaboration. Guided by our core values, we empower
                  individuals and communities to lead with purpose and
                  contribute to the social and economic development of Oman and
                  the wider region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GlanceSubmenu />

      <section
        id="vc-message"
        className="bg-[url('/images/message-bg.jpg')] bg-fixed bg-center pt-18">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[55%_45%]">
            <div>
              <div className="mb-18">
                <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  VC message
                </h2>
                <p className="mb-4 text-gray-950">
                  I am delighted to extend a warm welcome to the Muscat
                  University community. I hope that you will find the contents
                  of our website both interesting and informative.Muscat
                  University is a modern, international university centrally
                  located in the heart of Muscat. Our vision is to establish a
                  local and regional reputation as a leading provider of high
                  quality, industry informed education in our selected
                  specialisms, in order to prepare our students to become the
                  future leaders of Oman, the region, and the world. We aim to
                  do this by delivering cutting-edge academic programmes taught
                  by leading academics, through building links with local,
                  regional, and international business leaders and fully
                  engaging with research communities. In addition, Muscat
                  University is unique in that it is the only university in Oman
                  with a full placement year as part of the undergraduate
                  curriculum. This gives our students a distinct employability
                  advantage by preparing our students for the world of work.
                </p>
                <p className="mb-4 text-gray-950">
                  Our academic programmes are designed with the needs of
                  21st-century employers in mind and are delivered via three
                  faculties: Business and Management, Engineering and
                  Technology, and Transport and Logistics. The University is
                  currently working on developing new postgraduate programmes at
                  the Master and PhD levels.
                </p>
                <p className="mb-4 text-gray-950">
                  Our campus is equipped with state-of-the-art facilities
                  including world-class labs and research facilities, spacious
                  modern classrooms, and the latest technology to ensure that
                  students thrive academically and reach their full academic and
                  social potential. Our educational philosophy is based on
                  developing industry informed subject knowledge, developing our
                  student&apos;s critical and creative thinking skills, and is
                  committed to an active learning approach which champions
                  problem solving, collaboration, and developing leadership and
                  organizational skills. These skills embedded in our
                  educational offer are all key success indicators for life in
                  the 21st Century workplace. We look forward to welcoming you
                  to take part in continuing our success in the future.
                </p>

                <div className="mt-8">
                  <h3 className="text-brand-100 mb-1 text-2xl font-medium">
                    Prof Khamis Al-Yahyaee
                  </h3>
                  <p className="text-brand-100 mb-1 text-lg font-medium">
                    Vice Chancellor, Muscat University
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:self-end">
              <div className="lg:w-[640px]">
                <Image
                  src="/images/khamis.png"
                  width={640}
                  height={890}
                  className="w-full"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision-mission" className="bg-brand-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:border-r-[1px] md:border-e-[#3771ae]">
              <div className="mx-auto max-w-[500px] px-8 py-16">
                <h3 className="after:bg-brand-300 relative mb-8 pb-8 text-center text-4xl font-medium text-white uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:m-auto after:h-[3px] after:w-[80px] after:content-['']">
                  Vision
                </h3>
                <div className="mx-auto mb-8 w-[100px]">
                  <Image
                    src="/images/vision-icon.png"
                    width={100}
                    height={100}
                    alt="Icon"
                  />
                </div>
                <p className="text-center text-xl font-medium text-white">
                  To be recognized as a leader in providing quality education
                  and research that is relevant to the social and economic
                  priorities of Oman and of the wider region.
                </p>
              </div>
            </div>
            <div>
              <div className="mx-auto max-w-[500px] px-8 py-16">
                <h3 className="after:bg-brand-300 relative mb-8 pb-8 text-center text-4xl font-medium text-white uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:m-auto after:h-[3px] after:w-[80px] after:content-['']">
                  Mission
                </h3>
                <div className="mx-auto mb-8 w-[100px]">
                  <Image
                    src="/images/mission-icon.png"
                    width={100}
                    height={100}
                    alt="Icon"
                  />
                </div>
                <p className="text-center text-xl font-medium text-white">
                  To empower individuals and communities through transformative
                  learning and teaching, informative research, and proactive
                  industry engagement in Oman and the GCC region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-values" className="pt-18 pb-9">
        <div className="container mx-auto">
          <div>
            <h3 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-center text-4xl font-medium uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:m-auto after:h-[3px] after:w-[80px] after:content-['']">
              Our Values
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center">
            {valuesData.map((item, index) => (
              <div className="" key={index}>
                <div
                  className="group relative mx-auto max-w-[400px] rounded-lg bg-white px-3 py-3 transition duration-300 hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="1500">
                  <div className="mx-auto mb-4 h-[225px] w-[225px] overflow-hidden rounded-full">
                    <Image
                      src={item.logo}
                      width={200}
                      height={100}
                      className="w-full transition-all duration-300 group-hover:scale-110"
                      alt={item.title}
                    />
                  </div>
                  <div className="px-4 py-4 text-center">
                    <h3 className="text-brand-100 mb-4 text-2xl leading-none font-medium">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-800">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mu-graduate" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div>
            <h3 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              MU graduate attributes
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {graduateData.map((item, index) => {
              const spanClass =
                item.span === 2
                  ? 'col-span-1 md:col-span-2 lg:col-span-2'
                  : 'col-span-1'

              return (
                <div key={index} className={`${item.bg} ${spanClass}`}>
                  <div className="group relative h-full px-4 py-6 lg:px-12 lg:py-12">
                    <div className="relative mb-6 h-[100px] w-[100px]">
                      <div className="bg-brand-200 absolute inset-0 scale-0 rounded-full transition duration-300 group-hover:scale-120"></div>
                      <div className="relative">
                        <Image
                          src={item.icon}
                          width={100}
                          height={100}
                          className="w-full transition-all duration-300 group-hover:scale-80"
                          alt={item.title}
                        />
                      </div>
                    </div>
                    <h3 className="mb-2 text-2xl font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="text-white">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="strategic-framework" className="pt-9 pb-18">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-2">
            <div className="lg:pt-24">
              <div
                className="max-w-[650px]"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <h3 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                  Strategic Framework
                </h3>
                <div className="text-gray-950">
                  <p className="mb-4 text-gray-950">
                    Muscat University&apos;s Strategic Framework provides a
                    clear roadmap for achieving its mission and vision.
                  </p>
                  <p className="mb-4 text-gray-950">
                    It focuses on four key priorities—transformative education,
                    research and consultancy, industry and community engagement,
                    and sustainable growth—supported by strong enablers in
                    people, infrastructure, information systems, quality, and
                    governance.
                  </p>
                  <p className="text-gray-950">
                    Together, these pillars drive the University&apos;s
                    commitment to excellence, innovation, and impactful
                    contribution to Oman and the wider region.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div
                className="lg:w-[675px]"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500">
                <Image
                  src="/images/glance-framework.jpg"
                  width={675}
                  height={675}
                  className="w-full"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

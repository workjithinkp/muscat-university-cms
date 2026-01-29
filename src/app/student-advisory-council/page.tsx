import Link from 'next/link'
import Image from 'next/image'
import StudentSubmenu from '@/app/student-advisory-council/components/student-submenu'
import { BiSolidQuoteLeft } from 'react-icons/bi'
import DynamicBreadcrumb from '@/components/common/breadcrumb'

export const learningRules = [
  {
    id: 1,
    icon: '/images/learning-res-rule-icon-01.png',
    title: 'Quiet Zone',
    description:
      'Maintain a quiet atmosphere in designated study areas to respect the concentration of others.',
  },
  {
    id: 2,
    icon: '/images/learning-res-rule-icon-02.png',
    title: 'Cell Phone Usage',
    description:
      'Keep your mobile devices on silent mode and limit phone conversations to designated areas.',
  },
  {
    id: 3,
    icon: '/images/learning-res-rule-icon-03.png',
    title: 'Food and Drink',
    description:
      'Refrain from consuming food in the library, and use spill-proof containers for drinks to prevent damage to materials.',
  },
  {
    id: 4,
    icon: '/images/learning-res-rule-icon-04.png',
    title: 'Computer Use',
    description:
      'Use library computers for academic purposes, and be mindful of others waiting to access them.',
  },
  {
    id: 5,
    icon: '/images/learning-res-rule-icon-05.png',
    title: 'Borrowing Policies',
    description:
      'Familiarize yourself with our borrowing policies, including loan periods and renewal options. Return borrowed materials on time to avoid fines.',
  },
  {
    id: 6,
    icon: '/images/learning-res-rule-icon-06.png',
    title: 'Respect Library Staff',
    description:
      'Our staff is here to assist you. Please treat them and fellow library users with respect and courtesy.',
  },
]

export const recentInitiatives = [
  {
    id: 1,
    image: '/images/study-initiatives-01.jpg',
    description:
      'Hosting <span class="font-medium">Student Wellness Week</span> in partnership with the Counselling Unit.',
  },
  {
    id: 2,
    image: '/images/study-initiatives-02.jpg',
    description:
      'Launching <span class="font-medium">a Student Feedback Forum</span> to gather and discuss student concerns.',
  },
  {
    id: 3,
    image: '/images/study-initiatives-03.jpg',
    description:
      'Collaborating with the <span class="font-medium">Yusr Voluntary Club</span> for local charity and outreach projects.',
  },
  {
    id: 4,
    image: '/images/study-initiatives-04.jpg',
    description:
      'Supporting <span class="font-medium">academic skill workshops</span> and <span>career readiness sessions.</span>',
  },
  {
    id: 5,
    image: '/images/study-initiatives-05.jpg',
    description:
      'Promoting <span class="font-medium">environmental awareness</span> and <span  class="font-medium">sustainability campaigns on campus.</span>',
  },
]

export default function StudentAdvisory() {
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
                { label: 'My Life', href: '#' },
                { label: 'Student Advisory Council', href: null },
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
                  Student Advisory Council (SAC)
                </h2>
                <h3
                  className="mb-4 text-2xl/7 font-medium text-white"
                  data-lines-slide-up>
                  Your Voice. Your Leadership. <br />
                  Your University.
                </h3>
                <p className="mb-4 text-lg text-white" data-lines-slide-up>
                  The Student Advisory Council (SAC) at Muscat University is a
                  representative body dedicated to advocating for student
                  interests, strengthening communication between students and
                  the university, and fostering a vibrant, inclusive campus
                  community.
                </p>
                <p className="text-lg text-white" data-lines-slide-up>
                  Our mission is to ensure that every student’s voice is heard,
                  valued, and reflected in the decisions that shape university
                  life. Through collaboration, leadership, and action, the
                  Council works to enhance both the academic and social
                  experience of all students.
                </p>
              </div>
            </div>
            <div>
              <div className="max-w-[750px]">
                <Image
                  src="/images/student-advisory-intro.png"
                  width={750}
                  height={750}
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StudentSubmenu />

      <section id="what-do" className="pt-18 pb-9">
        <div className="container mx-auto">
          <div className="mb-4 scroll-mt-[120px]">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              What We Do
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[32%_68%] lg:gap-8">
              <div>
                <div>
                  <Image
                    src="/images/student-adv-do.jpg"
                    width={480}
                    height={665}
                    className="h-full w-full object-cover transition duration-300"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="lg:px-10 lg:py-4">
                <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-2">
                  <div className="rounded-xl px-4 py-4 transition duration-300 hover:shadow-xl">
                    <div className="mb-2 w-[72px]">
                      <Image
                        src="/images/student-what-icon-01.png"
                        width={72}
                        height={72}
                        className="w-full"
                        alt="Icon"
                      />
                    </div>
                    <h3 className="text-brand-100 mb-4 text-xl font-medium">
                      Voice of Students
                    </h3>
                    <p className="text-gray-950">
                      We serve as the bridge between the student body and
                      university administration, communicating student concerns,
                      suggestions, and ideas to help shape policies and
                      initiatives that truly reflect the needs of the community.
                    </p>
                  </div>
                  <div className="rounded-xl px-4 py-4 transition duration-300 hover:shadow-xl">
                    <div className="mb-2 w-[72px]">
                      <Image
                        src="/images/student-what-icon-02.png"
                        width={72}
                        height={72}
                        className="w-full"
                        alt="Icon"
                      />
                    </div>
                    <h3 className="text-brand-100 mb-4 text-xl font-medium">
                      Organising Student Initiatives
                    </h3>
                    <p className="text-gray-950">
                      The Council leads and supports student-led events,
                      activities, and programmes that enrich university life —
                      from academic forums and awareness campaigns to cultural
                      celebrations and social events.
                    </p>
                  </div>
                  <div className="rounded-xl px-4 py-4 transition duration-300 hover:shadow-xl">
                    <div className="mb-2 w-[72px]">
                      <Image
                        src="/images/student-what-icon-03.png"
                        width={72}
                        height={72}
                        className="w-full"
                        alt="Icon"
                      />
                    </div>
                    <h3 className="text-brand-100 mb-4 text-xl font-medium">
                      Policy Advocacy
                    </h3>
                    <p className="text-gray-950">
                      Representing student perspectives in decision-making
                      processes is at the heart of what we do. The SAC
                      collaborates closely with university leadership to
                      advocate for student-friendly policies, ensuring
                      transparency, fairness, and inclusivity.
                    </p>
                  </div>
                  <div className="rounded-xl px-4 py-4 transition duration-300 hover:shadow-xl">
                    <div className="mb-2 w-[72px]">
                      <Image
                        src="/images/student-what-icon-04.png"
                        width={72}
                        height={72}
                        className="w-full"
                        alt="Icon"
                      />
                    </div>
                    <h3 className="text-brand-100 mb-4 text-xl font-medium">
                      Support and Guidance
                    </h3>
                    <p className="text-gray-950">
                      Beyond representation, we offer support and mentorship to
                      fellow students. Whether you’re facing academic
                      challenges, personal difficulties, or simply need
                      direction, the Council is here to guide you to the right
                      resources and assistance.
                    </p>
                  </div>
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

      <section id="mission-vision" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4 scroll-mt-[120px]">
            <div className="mb-8">
              <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                Our Mission and Vision
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-wrap gap-4">
                <div className="w-[150px] overflow-hidden rounded-full">
                  <Image
                    src="/images/student-vision-01.jpg"
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                    alt="Icon"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-brand-100 mb-2 text-2xl font-medium">
                    Mission
                  </h3>
                  <p>
                    To represent the Muscat University student community with
                    integrity and passion, promoting a culture of collaboration,
                    accountability, and student empowerment.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="w-[150px] overflow-hidden rounded-full">
                  <Image
                    src="/images/student-vision-02.jpg"
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                    alt="Icon"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-brand-100 mb-2 text-2xl font-medium">
                    Vision
                  </h3>
                  <p>
                    To create a connected, student-driven university where every
                    individual has the confidence and opportunity to shape their
                    own experience and contribute to the greater community.
                  </p>
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

      <section id="meet-council" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4">
            <div className="mb-8">
              <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
                Meet the Council
              </h2>
              <p>
                The Student Advisory Council is made up of elected
                representatives from across Muscat University’s programmes and
                faculties. Each member brings unique experiences and
                perspectives to ensure diverse student voices are heard.
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1500">
              <h3 className="text-brand-100 relative mb-4 text-2xl font-medium uppercase after:absolute">
                SAC Leadership Team
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            <div data-aos="fade-up" data-aos-duration="1500">
              <div className="group relative">
                <div className="overflow-hidden">
                  <Image
                    src="/images/sac-leadership-01.jpg"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    alt="Image"
                  />
                </div>

                <div className="px-4 py-4">
                  <div className="relative px-2 py-2">
                    <h3 className="text-brand-100 mb-2 text-2xl leading-none font-medium">
                      SAC Member Name
                    </h3>
                    <p className="text-brand-100 text-xl whitespace-pre-line">
                      SACC Member
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500">
              <div className="group relative">
                <div className="overflow-hidden">
                  <Image
                    src="/images/sac-leadership-01.jpg"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    alt="Image"
                  />
                </div>

                <div className="px-4 py-4">
                  <div className="relative px-2 py-2">
                    <h3 className="text-brand-100 mb-2 text-2xl leading-none font-medium">
                      SAC Member Name
                    </h3>
                    <p className="text-brand-100 text-xl whitespace-pre-line">
                      SACC Member
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500">
              <div className="group relative">
                <div className="overflow-hidden">
                  <Image
                    src="/images/sac-leadership-01.jpg"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    alt="Image"
                  />
                </div>

                <div className="px-4 py-4">
                  <div className="relative px-2 py-2">
                    <h3 className="text-brand-100 mb-2 text-2xl leading-none font-medium">
                      SAC Member Name
                    </h3>
                    <p className="text-brand-100 text-xl whitespace-pre-line">
                      SACC Member
                    </p>
                  </div>
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

      <section id="recent-initiatives" className="pt-9 pb-9">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Recent Initiatives
            </h2>
            <p>
              Each year, the SAC leads initiatives that improve student life,
              strengthen engagement, and build community spirit. Recent and
              ongoing projects include:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {recentInitiatives.map((item) => (
              <div key={item.id} className="relative transition duration-300">
                <div className="relative overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt="Image"
                    width={350}
                    height={220}
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
        </div>
      </section>

      <div className="container mx-auto">
        <div className="h-[1px] bg-gray-200"></div>
      </div>

      <section id="get-involved" className="pt-9 pb-18">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Get Involved
            </h2>
          </div>
          <div className="grid grid-cols-1 items-center lg:grid-cols-2">
            <div className="me-[-200px] w-[calc(100%+200px)]">
              <div className="bg-brand-100 border-e-brand-300 relative border-e-[3px] px-8 py-12">
                <h3 className="text-brand-200 mb-4 text-2xl font-medium">
                  Interested in leadership? <br />
                  Passionate about student life?
                </h3>
                <p className="mb-4 text-white">
                  Elections for the Student Advisory Council are held annually,
                  giving every student the chance to run for office or volunteer
                  with ongoing SAC projects and committees.
                </p>
                <p className="text-white">
                  If you’re interested in joining or learning more, contact the
                  Student Affairs Office at sac@muscatuniversity.edu.om.
                </p>
              </div>
            </div>
            <div className="">
              <div>
                <Image
                  src="/images/study-passionate.jpg"
                  width={800}
                  height={500}
                  className="w-full transition duration-300"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div className="h-[1px] bg-gray-200"></div>
      </div>

      <section id="share-voice" className="pt-9 pb-18">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-4xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
              Share Your Voice
            </h2>
          </div>
          <div className="min-h-[375px] bg-[url('/images/study-voice-bg.jpg')] bg-cover ps-[85px] pe-[24px] pt-[85px] pb-[85px]">
            <div className="relative max-w-[750px]">
              <h3 className="mb-4 text-2xl font-medium text-white">
                The SAC believes that great ideas start with conversation.
              </h3>
              <p className="mb-4 text-white">
                If you have feedback, suggestions, or concerns, we’d love to
                hear from you.
              </p>
              <p className="text-white">
                Submit your thoughts through our email
                sac@muscatuniversity.edu.om.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div className="h-[1px] bg-gray-200"></div>
      </div>

      <section id="message-council" className="pt-9 pb-18">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="after:bg-brand-300 text-brand-100 relative mb-8 pb-8 text-center text-4xl font-medium uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:mx-auto after:h-[3px] after:w-[80px] after:content-['']">
              A Message from the Council
            </h2>
          </div>
          <div className="relative mx-auto max-w-[1100px] text-center">
            <div className="text-brand-100/50 mx-auto mb-4 max-w-[72px] text-8xl">
              <BiSolidQuoteLeft />
            </div>
            <h3 className="text-brand-100 mb-4 text-2xl font-medium">
              “The Student Advisory Council exists for one reason — to make your
              experience at Muscat University the best it can be. We’re here to
              listen, to act, and to make sure your voice shapes the future of
              our university.”
            </h3>
          </div>
        </div>
      </section>
    </>
  )
}
